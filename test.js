import 'babel-polyfill'; // to fix 'regeneratorRuntime is not defined' error. ref: https://github.com/babel/babel/issues/5085
import test from 'ava';
import { BotFactory } from './bot';
import axios from 'axios'
/* test('arrays are equal',t => {
    t.deepEqual([1, 2], [1, 2]);
}); */
test('fetch botConfigs', async t => {
    const speech = './bot/speeches/v2';
    const fabricated = new BotFactory(speech);
    const bot =  await fabricated.botConfigs();
    t.is(typeof bot, 'object');

});
/* test('fabricate bot', async t => {
    
    const speech = './bot/speeches/v2';
    const fabricated = new BotFactory(speech);
    const bot =  await fabricated.fabricate();
    t.is(bot, 'true');

}); */