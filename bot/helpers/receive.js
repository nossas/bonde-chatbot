import 'colors'
import _ from 'underscore'
import { client as aiClient } from '../ai'
import * as botHelpers from '../helpers'
import * as botSpeeches from '../speeches'

export default (bot, speech, botData) => (payload, originalReply, action) => {
  //
  // Wraps the original reply function with the behaviour
  // to save the user's interaction.
  //
  const reply = botHelpers.replyWithSave({ botData, payload, originalReply })

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) console.error(`${err}`.red)

    //
    // Speech action strategy
    //
    const strategyArgs = { speech, action, payload, profile, botData, reply }
    const actions = botSpeeches.actionStrategy(strategyArgs)
    actions.anywhere()

    //
    // Speech message based on received quick reply action
    //
    const message = speech.messages[action]

    if (typeof message === 'function') reply(message(profile), action)
    else if (message) reply(message, action)
    else {
      actions.ensure()
        .then(dispatched => {
          if (!dispatched) {
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
        .catch(error => console.error(`${error}`.red))
    }
  })
}
