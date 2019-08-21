import { QueryMock } from 'graphql-query-test-mock'
import dotenv from 'dotenv'
import { BotFactory } from '../bot'

global.fetch = require('node-fetch')
dotenv.config()

const queryMock = new QueryMock()

beforeEach(t => {
  queryMock.setup(process.env.GRAPHQL_URL)
  queryMock.mockQuery({
    name: 'fetchBotConfigurations',
    matchOnVariables: false,
    data: {
      configs: {
        bots: {
          id: '123',
          messengerAppSecret: 'teste',
          messengerValidationToken: 'teste',
          messengerPageAccessToken: 'teste',
          data: 'teste',
          createdAt: 'teste',
          __typename: 'bots'
        },
        __typename: 'bots'
      },
      __typename: 'bots'
    }
  })

  const speech = require('../bot/speeches/v2')
  this.fabricated = new BotFactory(speech.speech)
})

test('fetch botConfigs', t => {
  expect(typeof this.fabricated).toBe('object')
  const bot = this.fabricated.botConfigs()
  expect(typeof bot.data).toBe('object')
})

test('fabricate bot', t => {
  const bot = this.fabricated.fabricate()
  expect(typeof bot).toBe('object')
})
