import 'colors'
import isemail from 'isemail'
import { client as graphqlClient } from '../../../../graphql'
import * as graphqlQueries from '../../../../graphql/queries'

//
// User interaction actions
//
// @param [required] speech {Object} Factory specified bot's speech object
// @param [required] payload {Object} Facebook messenger API received request payload object
// @param [required] reply {Function} Messenger bot's reply function
// @return {Promise} GraphQL client promise
//
export default ({ speech, payload, reply }) => graphqlClient.query({
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
          case speech.actions.QUICK_REPLY_G:
          case speech.actions.QUICK_REPLY_X:
          case speech.actions.EMAIL_ADDRESS_WRONG:
            const action = !isemail.validate(payload.message.text)
              ? speech.actions.EMAIL_ADDRESS_WRONG
              : speech.actions.EMAIL_ADDRESS_OK
            reply(speech.messages[action], action)
            dispatched = true
            break;
        }
      }
    }
    return dispatched
  })
  .catch(err => console.error(`${JSON.stringify(err)}`.red))
