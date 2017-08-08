import 'colors'
import _ from 'underscore'
import { Wit, log } from 'node-wit'

export default (bot, speech, botData) => (payload, reply, action) => {
  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) console.log(`${err}`.red)

    const message = speech.messages[action]

    if (typeof message === 'function') reply(message(profile))
    else if (message) reply(message)
    else {
      const client = new Wit({
        accessToken: process.env.WIT_SERVER_ACCESS_TOKEN,
        logger: new log.Logger(log.DEBUG)
      })
      client.message(payload.message.text, {})
        .then(({ entities }) => {
          const actionsMap = {
            'greeting': speech.actions.GET_STARTED,
            'how_are_you': speech.actions.HOW_IS_IT_GOING,
            'yes': speech.actions.QUICK_REPLY_B,
            'explain_pec_29': speech.actions.QUICK_REPLY_D,
          }

          const action = !_.isEmpty(entities)
            ? actionsMap[entities.intent[0].value] || speech.actions.REPLY_UNDEFINED
            : speech.actions.REPLY_UNDEFINED

          console.log('reply action:', action)

          reply(speech.messages[action])
        })
        .catch(err => {
          reply(speech.messages[speech.actions.ERROR_CRITICAL])
          console.error(`${err}`.red)
        })
    }
  })
}
