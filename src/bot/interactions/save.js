import { client as graphqlClient } from '../../graphql'
import * as graphqlMutations from '../../graphql/mutations'

//
// @param [required] botData {Object} Bot's config data object
// @param [required] payload {Object} Facebook messenger API received request payload object
// @param [required] interaction {Object} Interaction object to save on database
// @return {Promise} GraphQL client promise
//
export default ({ botData, payload, interaction }) => {
  const interactionEntity = {
    facebook_bot_configuration_id: botData.id,
    fb_context_recipient_id: payload.sender.id,
    fb_context_sender_id: payload.recipient.id,
    interaction
  }
  return new Promise((resolve) => {
    console.log('mock interactions.save')
    return resolve()
  })
  /* return graphqlClient.mutate({
    mutation: graphqlMutations.createBotInteraction,
    variables: { interaction: JSON.stringify(interactionEntity) }
  }) */
}
