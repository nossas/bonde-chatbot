import 'babel-polyfill'; // to fix 'regeneratorRuntime is not defined' error. ref: https://github.com/babel/babel/issues/5085
import test from 'ava';
import { BotFactory } from './bot';
import axios from 'axios'
/* test('arrays are equal',t => {
    t.deepEqual([1, 2], [1, 2]);
}); */

test.beforeEach(t => {
    const speech = require('./bot/speeches/v2').speech
    t.context.fabricated = new BotFactory(speech);
});

test('fetch botConfigs', async t => {
    const bot =  await t.context.fabricated.botConfigs();
    t.is(typeof bot.data, 'object');

});
test('fabricate bot', async t => {
    const bot =  await t.context.fabricated.fabricate();
    t.is(typeof bot, 'object');

});