import 'colors'
import Bot from 'messenger-bot'
import escapeJSON from 'escape-json-node'
import { client as graphqlClient } from '../graphql'
import * as graphqlQueries from '../graphql/queries'
import * as graphqlMutations from '../graphql/mutations'
import * as botEvents from './events'
import * as botConfig from './config'

export default class BotFactory {
  //
  // @param app {Object} Express server instance
  // @param speech {Object} Speech object that contains the messages and actions
  // @param credentials {Object} Email and password to authenticate the GraphQL requests
  //
  constructor (app, speech, credentials) {
    this.app = app
    this.speech = speech
    this.credentials = credentials
  }

  //
  // Authenticate the server using BONDE credentials
  // @return {Promise} The promise's result is an authenticated JWT token
  //
  authenticate () {
    return graphqlClient.mutate({
      mutation: graphqlMutations.authenticate,
      variables: {
        email: this.credentials.email,
        password: this.credentials.password
      }
    })
      .then(({ data: { authenticate: { jwtToken } } }) => jwtToken)
      .catch(error => console.log(`${error}`.red))
  }

  //
  // Get the list of bot configurations
  // @return {Promise} The promise's result is an array of bot configurations
  //
  botConfigs () {
    return this.authenticate().then(jwtToken => {
      global.jwtToken = jwtToken

      return graphqlClient.query({
        query: graphqlQueries.fetchBotConfigurations
      })
        .then(data => data)
        .catch(error => console.log(`${error}`.red))
    })
  }

  //
  // Fabricate the bots based on configurations retrieved
  // by database using GraphQL API
  // @return {Promise} The promise's result is an array of data of fabricated bots
  //
  fabricate () {
    return this.botConfigs().then(({ data: { configs: { bots } } }) => {
      return bots.map(({
        id,
        messengerAppSecret,
        messengerValidationToken,
        messengerPageAccessToken,
        data: dataRaw
      }) => {
        // Parse bot custom data to object
        const data = JSON.parse(dataRaw)

        // Validate and create the bot's configuration object
        const config = botConfig.validate({
          app_secret: messengerAppSecret,
          token: messengerPageAccessToken,
          verify: messengerValidationToken
        })

        const bot = new Bot(config)
        const eventArgs = [bot, this.speech]

        bot.setGetStartedButton([{ payload: this.speech.actions.GET_STARTED }])
        bot.on('error', botEvents.error(...eventArgs))
        bot.on('postback', botEvents.postback(...eventArgs))
        bot.on('message', botEvents.message(...eventArgs))

        const endpoint = `/${data.name || id}`

        //
        // Snippet from `messenger-bot` package to identify
        // the received message by payload
        //
        this.app.use(endpoint, (req, res, next) => {
          let entries = req.body.entry

          entries.forEach((entry) => {
            let events = entry.messaging

            events.forEach((event) => {
              if (event.message) {
                if (!event.message.is_echo) {
                  bot.getProfile(event.sender.id, (err, profile) => {
                    if (err) {
                      console.log(JSON.stringify(err).red)
                      return next()
                    }

                    //
                    // In this case, the `sender.id` is the user's recipient.id
                    // and, the `recipient.id` is the page's recipient.id
                    //
                    const interaction = {
                      facebook_bot_configuration_id: Number(req.originalUrl.replace(/\D/g, '')),
                      fb_context_recipient_id: event.sender.id,
                      fb_context_sender_id: event.recipient.id,
                      interaction: {
                        profile,
                        event
                      }
                    }
                    graphqlClient.mutate({
                      mutation: graphqlMutations.createBotInteraction,
                      variables: { interaction: escapeJSON(JSON.stringify(interaction)) }
                    })
                      .then(data => data)
                      .catch(error => console.log(`${error}`.red))
                  })
                }
              }
            })
          })
          next()
        })
        this.app.get(endpoint, (req, res) => bot._verify(req, res))
        this.app.post(endpoint, (req, res) => {
          console.log('id', id)
          console.log('req.originalUrl', req.originalUrl)
          bot._handleMessage(req.body)
          res.end(JSON.stringify({ status: 'ok' }))
        })

        console.log(`Bot[${id}] exposed in endpoints: ${endpoint}`.blue)

        return { id, bot, endpoint }
      })
    })
  }
}
