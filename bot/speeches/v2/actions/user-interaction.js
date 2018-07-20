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
    //console.log('interactions:', interactions)
    if (last && last.interaction) {
      const interaction = JSON.parse(last.interaction)
      if (interaction.is_bot) {
        if (interaction.action == undefined) dispatched = false
        else {
          switch (interaction.action) {
            case speech.actions.V2_QUICK_REPLY_M6_NAME:
              const nameAction = speech.actions.V2_QUICK_REPLY_M6_SURNAME
              const nameMessage = speech.messages[nameAction]
              reply(nameMessage, nameAction)
              dispatched = true
              break;
            case speech.actions.V2_QUICK_REPLY_M6_SURNAME:
              const surnameAction = speech.actions.V2_QUICK_REPLY_M6_EMAIL
              const surnameMessage = speech.messages[surnameAction]
              reply(surnameMessage, surnameAction)
              dispatched = true
              break;
            case speech.actions.V2_QUICK_REPLY_M6_EMAIL:
            case speech.actions.V2_QUICK_REPLY_M6_EMAIL_ADDRESS_WRONG:
              let emailAction = !isemail.validate(payload.message.text)
                ? speech.actions.V2_QUICK_REPLY_M6_EMAIL_ADDRESS_WRONG
                : speech.actions.V2_QUICK_REPLY_M6_CITY
              const emailMessage = speech.messages[emailAction]
              reply(emailMessage, emailAction)
              dispatched = true
              break;
            case speech.actions.V2_QUICK_REPLY_M6_CITY:
              const cityAction = speech.actions.V2_QUICK_REPLY_M6_REGISTERED
              const cityMessage = speech.messages[cityAction]
              reply(cityMessage, cityAction)
              dispatched = true
              break;
            case speech.actions.V2_QUICK_REPLY_M6_REGISTERED:
              const registerAction = speech.actions.V2_QUICK_REPLY_M7
              const registerMessage = speech.messages[registerAction]
              sendForm({ payload })
              reply(registerMessage, registerMessage)
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
