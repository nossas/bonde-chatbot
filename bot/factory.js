import 'colors'
import Bot from 'messenger-bot'
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
        const endpoint = `/${data.endpoint || id}`

        bot.setGetStartedButton([{ payload: this.speech.actions.GET_STARTED }])
        bot.on('error', botEvents.error(...eventArgs))
        bot.on('postback', botEvents.postback(...eventArgs))
        bot.on('message', botEvents.message(...eventArgs))

        return { id, bot, endpoint }
      })
    })
  }
}
