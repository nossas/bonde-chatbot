import 'colors'
import _ from 'underscore'
import { client as aiClient } from '../ai'

export default (bot, speech, botData) => (payload, reply, action) => {
  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) console.log(`${err}`.red)

    const message = speech.messages[action]

    if (typeof message === 'function') reply(message(profile))
    else if (message) reply(message)
    else {
      aiClient().message(payload.message.text, {})
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

          console.log(`reply action to ${payload.sender.id}:`, action)

          reply(speech.messages[action])
        })
        .catch(err => {
          reply(speech.messages[speech.actions.ERROR_CRITICAL])
          console.error(`${err}`.red)
        })
    }
  })
}
