import * as botHelpers from '../helpers'

export default (bot, speech) => (payload, reply) => {
  botHelpers.receive(bot, speech)(
    payload,
    reply,
    payload.postback.payload
  )
}
