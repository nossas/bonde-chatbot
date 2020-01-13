import apm from 'elastic-apm-node/start'
import 'colors'
import * as botAI from '../ai'
import * as botHelpers from '../helpers'
import * as botSpeeches from '../speeches'

export default (bot, speech, botData) => (payload, originalReply, action) => {
  bot.getProfile(payload.sender.id, async (err, profile) => {
    if (err) apm.captureError(`${err}`.red)

    //
    // Wraps the original reply function with the behaviour
    // to save the user's interaction.
    //
    const reply = botHelpers.replyWithSave({ bot, botData, payload, originalReply, profile })

    //
    // Speech action strategy
    //
    const strategyArgs = { speech, action, payload, profile, botData, reply }
    const actions = await botSpeeches.actionStrategy(strategyArgs)

    actions.anywhere()

    //
    // Speech message based on received quick reply action
    //
    const message = speech.messages[action]

    if (message) reply(message, action)
    else {
      try {
        const dispatched = await actions.ensure()
        const { text } = payload.message

        !dispatched && botAI.client().message(text, {})
          .then(botAI.resolvers.speechAction({ speech, reply }))
          .catch(err => {
            reply(botSpeeches.messages.BUGGED_OUT)
            console.log('receive.js#40', err)
            apm.captureError(`${err}`.red)
          })
      } catch (err) {
        console.log('receive.js#44', err)
        apm.captureError(`${err}`.red)
      }
    }
  })
}
