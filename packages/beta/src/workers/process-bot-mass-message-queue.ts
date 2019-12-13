import 'colors'

import Queue from 'bull'
import BotFactory from '../bot/factory'
import * as botUtils from '../bot/speeches/utils'
import { client as graphqlClient } from '../graphql'
import * as graphqlMutations from '../graphql/mutations'

require('dotenv').config()
const speech = require(`../bot/speeches/${process.env.SPEECH_VERSION || 'v0'}`).speech
const queue = new Queue('bot-mass-message', process.env.REDIS_URL || 'redis://127.0.0.1:6379')

const saveLog = ({ facebookBotCampaignActivistId, received, log }) => (
  graphqlClient.mutate({
    mutation: graphqlMutations.updateFacebookBotCampaignActivists,
    variables: { facebookBotCampaignActivistId, received, log: JSON.stringify(log) }
  }).catch(e => console.error(`${JSON.stringify(e)}`.red))
)

//
// Queue Events
//
queue.on('error', (error) => console.error(`event:error ${JSON.stringify(error)}`.red))

queue.on('completed', (job, result) => {
  console.info(`bull:bot-mass-message:${job.id} ~> status [completed]`.green)

  // const { facebookBotCampaignActivistId } = result.data
  // const received = true
  // const log = result.info
  // saveLog({ facebookBotCampaignActivistId, received, log })
  job.remove()
})

queue.on('failed', (job, err: any) => {
  console.info(`bull:bot-mass-message:${job.id} ~> status [failed]`.red)

  const { facebookBotCampaignActivistId } = err.data
  const received = false
  const log = err
  saveLog({ facebookBotCampaignActivistId, received, log })
  job.remove()
})

//
// Process Queue
//
console.info('running worker: process-bot-mass-message-queue'.green)
new BotFactory(speech)
  .fabricate()
  .then(bots => {
    bots.forEach(({ id, bot, endpoint, botData }) => {
      queue.process(({ data }, done) => {
        try {
          const {
            fbContextRecipientId,
            text,
            quickReplyRedirect,
            quickReplyButtonText
          } = data

          const optionalMessageKeys: any = {}
          if (quickReplyRedirect && quickReplyButtonText) {
            optionalMessageKeys.quick_replies = [
              botUtils.quickReply(quickReplyRedirect, quickReplyButtonText)
            ]
          }

          bot.sendMessage(
            fbContextRecipientId,
            { text, ...optionalMessageKeys },
            (err, info) => {
              const args = err ? [{ err, data, name: '', message: '' }] : [null, { info, data, name: '', message: '' }]
              done(...args)
            }
          )
        } catch (e) {
          done(new Error(JSON.stringify(e)))
        }
      })
    })
  })
  .catch(e => { console.error(e) })
