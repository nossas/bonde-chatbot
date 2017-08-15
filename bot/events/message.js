import 'colors'
import escapeJSON from 'escape-json-node'
import { client as graphqlClient } from '../../graphql'
import * as graphqlMutations from '../../graphql/mutations'
import * as botHelpers from '../helpers'
import * as botMiddlewares from '../middlewares'

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

  //
  // Save each user interaction
  //
  bot.getProfile(payload.sender.id, (err, profile) => {
    const interaction = {
      facebook_bot_configuration_id: botData.id,
      fb_context_recipient_id: payload.sender.id,
      fb_context_sender_id: payload.recipient.id,
      interaction: { profile, payload }
    }
    graphqlClient.mutate({
      mutation: graphqlMutations.createBotInteraction,
      variables: { interaction: escapeJSON(JSON.stringify(interaction)) }
    })
      .then(result => {
        botHelpers.receive(bot, speech, botData)(payload, reply, action)
        return result
      })
      .catch(error => console.log(`${error}`.red))
  })
}
