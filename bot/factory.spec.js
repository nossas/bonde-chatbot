import 'babel-polyfill'
import test from 'ava'
import { BotFactory } from '.'

test.beforeEach(t => {
    const speech = require('./speeches/v2').speech
    t.context.fabricated = new BotFactory(speech)
})

test('fetch botConfigs', async t => {
    const bot =  await t.context.fabricated.botConfigs()
    t.is(typeof bot.data, 'object')
})

test('fabricate bot', async t => {
    const bot =  await t.context.fabricated.fabricate()
    t.is(typeof bot, 'object')
})
