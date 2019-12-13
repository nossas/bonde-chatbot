import * as botHelpers from '../helpers'

export default (bot, speech, botData) => (payload, reply) => {
  botHelpers.receive(bot, speech, botData)(
    payload,
    reply,
    payload.postback.payload
  )
}
