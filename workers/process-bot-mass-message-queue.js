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
              botUtils.quickReply(quickReplyRedirect, quickReplyButtonText)
            ]
          }

          bot.sendMessage(
            fbContextRecipientId,
            { text, ...optionalMessageKeys },
            (err, info) => {
              if (err) done(new Error(JSON.stringify({ err, data: job.data })))
              else done(null, JSON.stringify(info))
            }
          )
        } catch (e) done(new Error(JSON.stringify(e)))
      })
    })
  })
  .catch(e => { console.error(e) })

