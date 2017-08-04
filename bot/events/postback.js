import * as botHelpers from '../helpers'

export default (bot, speech, botData) => (payload, reply) => {
  botHelpers.receive(bot, speech)(
    payload,
    reply,
    payload.postback.payload
  )
}
