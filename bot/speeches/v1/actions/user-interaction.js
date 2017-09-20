import 'colors'
import isemail from 'isemail'
import { client as graphqlClient } from '../../../../graphql'
import * as graphqlQueries from '../../../../graphql/queries'
import * as botSkills from '../../../skills'

//
// User interaction actions
//
// @param [required] speech {Object} Factory specified bot's speech object
// @param [required] payload {Object} Facebook messenger API received request payload object
// @param [required] profile {Object} User's profile object received by Facebook Messenger API
// @param [required] botData {Object} Bot's config data object
// @param [required] reply {Function} Messenger bot's reply function
// @return {Promise} GraphQL client promise
//
export default ({ speech, payload, profile, botData, reply }) => graphqlClient.query({
  fetchPolicy: 'network-only',
  query: graphqlQueries.fetchBotLastInteraction,
  variables: { recipientId: payload.sender.id }
})
  .then(({ data: { fetchBotLastInteraction: { interactions } } }) => {
    const [last] = interactions
    let dispatched = false

    if (last && last.interaction) {
      const interaction = JSON.parse(last.interaction)

      if (interaction.is_bot) {
        switch (interaction.action) {
          case speech.actions.V1_QUICK_REPLY_I:
          case speech.actions.V1_EMAIL_ADDRESS_WRONG:
            const action = !isemail.validate(payload.message.text)
              ? speech.actions.V1_EMAIL_ADDRESS_WRONG
              : speech.actions.V1_EMAIL_ADDRESS_OK

            const replyMessage = speech.messages[action].constructor === Function
              ? speech.messages[action](profile)
              : speech.messages[action]

            if (action === speech.actions.V1_EMAIL_ADDRESS_OK) {
              botSkills.pressure.send({ profile, botData, senderEmail: payload.message.text })
            }

            reply(replyMessage, action)
            dispatched = true
            break;
        }
      }
    }
    return dispatched
  })
  .catch(err => Promise.reject(`User interaction error: ${JSON.stringify(err)}`.red))
