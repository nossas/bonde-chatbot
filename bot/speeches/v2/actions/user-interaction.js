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
          //Set the widget according to the action for each campaign 
          let widgetsOpts = [
            global.widgets[botData.data.pressure[0].widget_id].id, //casamento
            global.widgets[botData.data.pressure[1].widget_id].id, //sp trans
            global.widgets[botData.data.pressure[2].widget_id].id, // pec 181
          ]
          const widgetId = interaction.action == speech.actions.V2_QUICK_REPLY_FK1_1
            ? widgetsOpts[2]
            : interaction.action == speech.actions.V2_QUICK_REPLY_FK2_2 ? widgetsOpts[0] : widgetsOpts[1]

          switch (interaction.action) {
            case speech.actions.V2_QUICK_REPLY_FK1_1:
            case speech.actions.V2_QUICK_REPLY_FK2_2:
            case speech.actions.V2_QUICK_REPLY_FK3_1:
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
              console.log('widgetId', widgetId)
              const replyMessage = speech.messages[action].constructor === Function
                ? speech.messages[action](profile)
                : speech.messages[action]

              if (action === speech.actions.V2_EMAIL_ADDRESS_OK) {
                botSkills.pressure.send({ profile, botData, widgetId, senderEmail: payload.message.text })
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
