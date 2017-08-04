import 'colors'
import * as botHelpers from '../helpers'

const payloadValidator = payload => {
}

export default (bot, speech, botData) => (payload, reply) => {
  const { message } = payload

  //
  // Validate payload
  //
  if (!message) {
    console.log(`Webhook received unknown payload: ${payload}`.red)
    return
  } else if (message.is_echo) {
    console.log(
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

  botHelpers.receive(bot, speech, botData)(payload, reply, action)
}
