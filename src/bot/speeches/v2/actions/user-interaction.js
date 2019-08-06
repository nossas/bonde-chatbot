import 'colors'
import { client as graphqlClient } from '../../../../graphql'
import * as graphqlQueries from '../../../../graphql/queries'
import * as botSkills from '../../../skills'
import * as isemail from '../../../utils/isemail'
import sendForm from './send-form'

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
    // console.log('interactions:', interactions)
    if (last && last.interaction) {
      const interaction = JSON.parse(last.interaction)
      if (interaction.is_bot) {
        if (interaction.action == undefined) dispatched = false
        else {
          switch (interaction.action) {
            case speech.actions.V2_QUICK_REPLY_PETITION_NAME:
              const nameAction = speech.actions.V2_QUICK_REPLY_PETITION_SURNAME
              const nameMessage = speech.messages[nameAction]
              reply(nameMessage, nameAction)
              dispatched = true
              break
            case speech.actions.V2_QUICK_REPLY_PETITION_SURNAME:
              const surnameAction = speech.actions.V2_QUICK_REPLY_PETITION_EMAIL
              const surnameMessage = speech.messages[surnameAction]
              reply(surnameMessage, surnameAction)
              dispatched = true
              break
            case speech.actions.V2_QUICK_REPLY_PETITION_EMAIL:
            case speech.actions.V2_PETITION_EMAIL_WRONG:
              const emailAction = !isemail.validate(payload.message.text)
                ? speech.actions.V2_PETITION_EMAIL_WRONG
                : speech.actions.V2_PETITION_EMAIL_OK
              const emailMessage = speech.messages[emailAction]

              if (emailAction === speech.actions.V2_PETITION_EMAIL_OK) {
                sendForm({ payload })
              }
              reply(emailMessage, emailAction)
              dispatched = true
              break
            // Petição caso 2
            case speech.actions.V2_QUICK_REPLY_PETITION_NAME1:
              const nameAction1 = speech.actions.V2_QUICK_REPLY_PETITION_SURNAME1
              const nameMessage1 = speech.messages[nameAction1]
              reply(nameMessage1, nameAction1)
              dispatched = true
              break
            case speech.actions.V2_QUICK_REPLY_PETITION_SURNAME1:
              const surnameAction1 = speech.actions.V2_QUICK_REPLY_PETITION_EMAIL1
              const surnameMessage1 = speech.messages[surnameAction1]
              reply(surnameMessage1, surnameAction1)
              dispatched = true
              break
            case speech.actions.V2_QUICK_REPLY_PETITION_EMAIL1:
            case speech.actions.V2_PETITION_EMAIL_WRONG1:
              const emailAction1 = !isemail.validate(payload.message.text)
                ? speech.actions.V2_PETITION_EMAIL_WRONG1
                : speech.actions.V2_PETITION_EMAIL_OK1
              const emailMessage1 = speech.messages[emailAction1]

              if (emailAction1 === speech.actions.V2_PETITION_EMAIL_OK1) {
                sendForm({ payload })
              }
              reply(emailMessage1, emailAction1)
              dispatched = true
              break
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
              break
          }
        }
      }
    }
    return dispatched
  })
  .catch(err => Promise.reject(`User interaction error: ${JSON.stringify(err)}`.red))
