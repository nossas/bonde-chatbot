import 'colors'
import * as ChatbotHelpers from './helpers'
import * as ChatbotInteractions from './interactions'

// const payloadValidator = payload => {}

export const message = (bot, getSpeech, botData) => (payload, reply) => {
  const speech = getSpeech()
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

    const opts = {
      chatbotId: botData.id,
      recipientId: payload.recipient.id,
      senderId: payload.sender.id,
      interaction: { profile, payload }
    }

    ChatbotInteractions.insert(opts)
      .then(result => {
        // Only receive message when save on database
        ChatbotHelpers.receive(bot, speech, botData)(payload, reply, action)
        return result
      })
      .catch(err => {
        console.log('errr on insert')
        console.error(err)
      })
  })
}

export const postback = (bot, getSpeech, botData) => (payload, reply) => {
  const speech = getSpeech()
  ChatbotHelpers.receive(bot, speech, botData)(
    payload,
    reply,
    payload.postback.payload
  )
}
