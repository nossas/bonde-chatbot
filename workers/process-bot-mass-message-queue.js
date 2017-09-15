require('dotenv').config()

import Queue from 'bull'
import { BotFactory } from '../bot'

const speech = require(`../bot/speeches/${process.env.SPEECH_VERSION || 'v0'}`).speech
const queue = new Queue('bot-mass-message', process.env.REDIS_URL || 'redis://127.0.0.1:6379')


const fabricated = new BotFactory(speech)
  .fabricate()
  .then(bots => {
    bots.forEach(({ id, bot, endpoint, botData }) => {
      queue.process((job, done) => {
        try {
          console.log('job.id:', job.id)
          const { fbContextRecipientId: id, text } = job.data
          bot.sendMessage(id, { text })
          done({ removeOnComplete: true })
        } catch (e) {
          done(new Error(e))
        }
      })
    })
  })
  .catch(e => { console.error(e) })

