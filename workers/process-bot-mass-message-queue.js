require('dotenv').config()

import Queue from 'bull'
import { BotFactory } from '../bot'
import * as botUtils from '../bot/speeches/utils'

const speech = require(`../bot/speeches/${process.env.SPEECH_VERSION || 'v0'}`).speech
const queue = new Queue('bot-mass-message', process.env.REDIS_URL || 'redis://127.0.0.1:6379')

console.log('running worker: process-bot-mass-message-queue')
const fabricated = new BotFactory(speech)
  .fabricate()
  .then(bots => {
    bots.forEach(({ id, bot, endpoint, botData }) => {
      queue.process((job, done) => {
        try {
          console.log('job.id:', job.id)
          const {
            fbContextRecipientId,
            text,
            quickReplyRedirect,
            quickReplyButtonText
          } = job.data

          let optionalMessageKeys = {}
          if (quickReplyRedirect && quickReplyButtonText) {
            optionalMessageKeys.quick_replies = [
              botUtils.replyText(quickReplyRedirect, quickReplyButtonText)
            ]
          }

          bot.sendMessage(fbContextRecipientId, { text, ...optionalMessageKeys })
          done()
        } catch (e) {
          done(new Error(e))
        }
      })
    })
  })
  .catch(e => { console.error(e) })

