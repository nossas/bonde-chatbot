import 'colors'
import { client as graphqlClient } from '../../../../graphql'
import * as graphqlQueries from '../../../../graphql/queries'
import * as botSkills from '../../../skills'
import * as isemail from '../../../utils/isemail'

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
        if (interaction.action == undefined) dispatched = false
        else {
          switch (interaction.action) {
            case speech.actions.V2_QUICK_REPLY_ARG_D:
            case speech.actions.V2_ARG_EMAIL_ADDRESS_WRONG:
              let argAction = !isemail.validate(payload.message.text)
                ? speech.actions.V2_ARG_EMAIL_ADDRESS_WRONG
                : speech.actions.V2_ARG_EMAIL_ADDRESS_OK

              const argReplyMessage = speech.messages[argAction].constructor === Function
                ? speech.messages[argAction](profile)
                : speech.messages[argAction]

              if (argAction === speech.actions.V2_ARG_EMAIL_ADDRESS_OK) {
                botSkills.pressure.send({ profile, botData, senderEmail: payload.message.text })
              }

              reply(argReplyMessage, argAction)
              dispatched = true
              break;
            case speech.actions.V2_QUICK_REPLY_G_10:
            case speech.actions.V2_EMAIL_ADDRESS_WRONG:
            case speech.actions.VMDM_QUICK_REPLY_I:
            case speech.actions.VMDM_EMAIL_ADDRESS_WRONG:
              let action = !isemail.validate(payload.message.text)
                ? speech.actions.V2_EMAIL_ADDRESS_WRONG
                : speech.actions.V2_EMAIL_ADDRESS_OK

              if (interaction.action.startsWith('VMDM_')) {
                action = !isemail.validate(payload.message.text)
                  ? speech.actions.VMDM_EMAIL_ADDRESS_WRONG
                  : speech.actions.VMDM_EMAIL_ADDRESS_OK
              }

              const replyMessage = speech.messages[action].constructor === Function
                ? speech.messages[action](profile)
                : speech.messages[action]

              if (action === speech.actions.V2_EMAIL_ADDRESS_OK) {
                botSkills.pressure.send({ profile, botData, senderEmail: payload.message.text })
              }

              reply(replyMessage, action)
              dispatched = true
              break;
          }
        }
      }
    }
    return dispatched
  })
  .catch(err => Promise.reject(`User interaction error: ${JSON.stringify(err)}`.red))
