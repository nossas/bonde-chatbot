import 'colors'
import * as botHelpers from '../helpers'
import * as botInteractions from '../interactions'
import * as botMiddlewares from '../middlewares'

const payloadValidator = payload => {
}

export default (bot, speech, botData) => (payload, reply) => {
  const { message } = payload

  // Set the sender action: When the bot receives the message show the "typing on" sign to the user
  bot.sendSenderAction(payload.sender.id, 'typing_on')

  //
  // Validate payload
  //
  if (!message) {
    console.error(`Webhook received unknown payload: ${payload}`.red)
    return
  } else if (message.is_echo) {
    console.info(
      'Received echo for message %s and app %d with metadata %s',
      message.mid,
      message.app_id,
      message.metadata
    )
    return
  }

  //
  // Define received action
  //
  const action = message.quick_reply
    ? message.quick_reply.payload
    : message.payload

  //
  // Save user interaction
  //
  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) return console.error(`${JSON.stringify(err)}`.red)

    const interaction = { profile, payload }

    botInteractions.save({ botData, payload, interaction })
      .then(result => {
        botHelpers.receive(bot, speech, botData)(payload, reply, action)
        return result
      })
      .catch(err => console.error(`${JSON.stringify(err)}`.red))
  })
}
