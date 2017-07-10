'use strict'
// Load the .env file
require('dotenv').config()

// window.fetch pollyfill
import fetch from 'isomorphic-fetch'

import Http from 'http'
import Express from 'express'
import BodyParser from 'body-parser'
import Bot from 'messenger-bot'

//
// Setup Express server
//
let App = Express()

App.use(BodyParser.json())
App.use(BodyParser.urlencoded({ extended: true }))

//
// Apollo GraphQL client setup
//
import * as graphqlQueries from './graphql/queries'
import * as graphqlMutations from './graphql/mutations'
import { client as graphqlClient } from './graphql'

//
// Load script
//
const Script = require(process.env.SCRIPT_PATH || './scripts/v0.js')

//
// Authenticate the server using BONDE credentials
//
const authenticate = graphqlClient.mutate({
  mutation: graphqlMutations.authenticate,
  variables: {
    email: process.env.SERVER_AUTH_EMAIL,
    password: process.env.SERVER_AUTH_PASSWORD
  }
})
  .then(({ data: { authenticate: { jwtToken } } }) => jwtToken)
  .catch(error => console.error(error))

const botConfigs = authenticate.then(jwtToken => {
  global.jwtToken = jwtToken

  //
  // Get the list of bot configurations
  //
  return graphqlClient.query({
    query: graphqlQueries.fetchBotConfigurations
  })
    .then(data => data)
    .catch(error => console.error(error))
})

//
// Start BETA
//
botConfigs.then(({ data: { configs: { bots } } }) => {
  bots.forEach(({
    id,
    messengerAppSecret,
    messengerValidationToken,
    messengerPageAccessToken,
    data: dataRaw
  }) => {
    //
    // Parse bot custom data to object
    //
    const data = JSON.parse(dataRaw)

    const config = {
      app_secret: messengerAppSecret,
      token: messengerPageAccessToken,
      verify: messengerValidationToken
    }

    if (!(config.verify && config.token && config.app_secret)) {
      console.error('Missing config values')
      process.exit(1)
    }

    const beta = new Bot(config)

    //
    // Handle error
    //
    beta.on('error', (err) => {
      console.log('Beta handle error', err.message)
    })

    const receive = (payload, reply, action) => {
      beta.getProfile(payload.sender.id, (err, profile) => {
        if (err) console.log(err)

        const message = Script.messages[action]

        if (typeof message === 'function') reply(message(profile))
        else if (message) reply(message)
        else reply(Script.messages[Script.actions.REPLY_UNDEFINED])
      })
    }

    //
    // Handle postback
    //
    beta.setGetStartedButton([{
      payload: Script.actions.GET_STARTED
    }])

    beta.on('postback', (payload, reply) => {
      return receive(payload, reply, payload.postback.payload)
    })

    //
    // Handle message
    //
    beta.on('message', (payload, reply) => {
      if (!payload.message) {
        console.log('Webhook received unknown payload: ', payload)
        return
      } else if (payload.message.is_echo) {
        console.log(
          'Received echo for message %s and app %d with metadata %s',
          payload.message.mid,
          payload.message.app_id,
          payload.message.metadata
        )
        return
      }

      //
      // Define received action
      //
      let action = payload.message.payload
      if (payload.message.quick_reply) {
        action = payload.message.quick_reply.payload
      }

      receive(payload, reply, action)
    })

    //
    // Setup Express endpoints
    //
    const botEndpoint = data.name || id
    App.get(`/${botEndpoint}`, (req, res) => {
      return beta._verify(req, res)
    })

    App.post(`/${botEndpoint}`, (req, res) => {
      beta._handleMessage(req.body)
      res.end(JSON.stringify({ status: 'ok' }))
    })

    console.log(`\x1b[34mBot[${id}] exposed in endpoint: /${botEndpoint}\x1b[0m`)

  })
  //
  // Start server
  //
  const port = process.env.PORT || 5000

  Http
    .createServer(App)
    .listen(port)

  console.log(`Echo bot server running at port ${port}`)
})
