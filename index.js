require('dotenv').config()

import 'isomorphic-fetch' // window.fetch pollyfill
import 'colors'

import Http from 'http'
import Express from 'express'
import BodyParser from 'body-parser'
import { BotFactory } from './bot'
import * as routes from './routes'

//
// Setup Express server
//
let App = Express()

App.set('view engine', 'pug')
App.use(Express.static('public'))
App.use(BodyParser.json())
App.use(BodyParser.urlencoded({ extended: true }))

//
// Bots fabrication
//
const speech = require(process.env.SCRIPT_PATH || './scripts/v0.js').default
const credentials = {
  email: process.env.SERVER_AUTH_EMAIL,
  password: process.env.SERVER_AUTH_PASSWORD
}
const fabricated = new BotFactory(speech, credentials)
  .fabricate()
  .then(endpoints => {
    //
    // Set up bots express endpoints
    //
    endpoints.forEach(({ id, bot, botEndpoint }) => {
      const endpoint = `/${botEndpoint}`
      App.get(endpoint, (req, res) => bot._verify(req, res))
      App.post(endpoint, (req, res) => {
        bot._handleMessage(req.body)
        res.end(JSON.stringify({ status: 'ok' }))
      })

      console.log(`Bot[${id}] exposed in endpoints: ${endpoint}`.blue)
    })
  })

//
// Express server endpoints
//
App.use('/login', routes.login)

//
// Up the server
//
fabricated.then(() => {
  const port = process.env.PORT || 5000
  Http.createServer(App).listen(port)
  console.log(`🤖  Bot server running at port ${port}`)
})
