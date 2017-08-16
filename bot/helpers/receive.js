import 'colors'
import * as botAI from '../ai'
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
          const { text } = payload.message

          !dispatched && botAI.client().message(text)
            .then(botAI.resolvers.speechAction({ speech, reply }))
            .catch(err => {
              reply(speech.messages[speech.actions.ERROR_CRITICAL])
              console.error(`${err}`.red)
            })
        })
        .catch(error => console.error(`${error}`.red))
    }
  })
}
