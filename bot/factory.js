import 'colors'
import Bot from 'messenger-bot'
import { client as graphqlClient } from '../graphql'
import * as graphqlQueries from '../graphql/queries'

import * as botEvents from './events'
import * as botConfig from './config'

export default class BotFactory {
  //
  // @param speech {Object} Speech object that contains the messages and actions
  //
  constructor (speech) {
    this.speech = speech
  }

  //
  // Get the list of bot configurations
  // @return {Promise} The promise's result is an array of bot configurations
  //
  botConfigs () {
    return graphqlClient.query({ query: graphqlQueries.fetchBotConfigurations })
  }

  //
  // Fabricate the bots based on configurations retrieved
  // by database using GraphQL API
  // @return {Promise} The promise's result is an array of data of fabricated bots
  //
  fabricate () {
    console.log('START FABRICATE')
    return this.botConfigs().then(({ data: { configs: { bots } } }) => {
      console.log('FOUND GRAPHQL BOT CONFIG')
      return Promise.resolve(
        bots.map(item => {
          const {
            id,
            messengerAppSecret,
            messengerValidationToken,
            messengerPageAccessToken,
            data: dataRaw
          } = item

          // Parse bot custom data to object
          const data = JSON.parse(dataRaw)
          const botData = { ...item, data }

          // Validate and create the bot's configuration object
          const config = botConfig.validate({
            app_secret: messengerAppSecret,
            token: messengerPageAccessToken,
            verify: messengerValidationToken
          })

          const bot = new Bot(config)
          const speech = this.speech(botData)
          const eventArgs = [bot, speech, botData]
          const endpoint = `/${data.endpoint || id}`

          bot.setGetStartedButton({ payload: speech.actions.GET_STARTED })
          bot.setPersistentMenu([speech.messages.PERSISTENT_MENU])
          bot.on('error', botEvents.error(...eventArgs))
          bot.on('postback', botEvents.postback(...eventArgs))
          bot.on('message', botEvents.message(...eventArgs))
          bot.on('referral', botEvents.referral(...eventArgs))

          return { id, bot, endpoint, botData }
        })
      )
    })
    .catch(err => console.error(`${JSON.stringify(err)}`.red))
  }
}
