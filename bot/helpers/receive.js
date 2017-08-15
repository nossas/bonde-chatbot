import 'colors'
import _ from 'underscore'
import escapeJSON from 'escape-json-node'
import request from 'request'
import isemail from 'isemail'
import { client as aiClient } from '../ai'
import { client as graphqlClient } from '../../graphql'
import * as graphqlMutations from '../../graphql/mutations'
import * as graphqlQueries from '../../graphql/queries'

export default (bot, speech, botData) => (payload, originalReply, action) => {
  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) console.log(`${err}`.red)

    if (process.env.SCRIPT_PATH === './scripts/v1.js') {
      switch (action) {
        case speech.actions.QUICK_REPLY_H:
          graphqlClient.query({
            fetchPolicy: 'network-only',
            query: graphqlQueries.fetchActivistLastInteraction,
            variables: { recipientId: payload.sender.id }
          })
            .then(({ data: { activistInteractions: { interactions } } }) => {
              const [last] = interactions
              const interaction = JSON.parse(last.interaction)

              const pressurePayload = {
                "fill": {
                  "activist": {
                    "firstname": profile.first_name,
                    "lastname": profile.last_name,
                    "email": interaction.payload.message.text
                  },
                  "mail": {
                    "cc": [
                      "gabriel@nossas.org",
                      "gabrielrtakeda@gmail.com",
                      "gabrielrtakeda@gmail.com"
                    ],
                    "subject": "Pressão Feita Direto Pela API",
                    "body": "Usando client Insomnia"
                  }
                }
              }
              request.post(
                `${process.env.API_URL}/widgets/${botData.data.pressure_widget_id}/fill`,
                { form: pressurePayload }
              )
            })
            .catch(error => console.log(`${error}`.red))
          break;
      }
    }

    //
    // reply function interface to save the bot's reply text
    // before send it to user.
    //
    const reply = (message, action) => {
      const interaction = {
        facebook_bot_configuration_id: botData.id,
        fb_context_recipient_id: payload.sender.id,
        fb_context_sender_id: payload.recipient.id,
        interaction: { isBot: true, message, action }
      }
      graphqlClient.mutate({
        mutation: graphqlMutations.createBotInteraction,
        variables: { interaction: JSON.stringify(interaction) }
      })
        .then(data => { originalReply(message); return data })
        .catch(error => console.log(`${error}`.red))
    }

    const message = speech.messages[action]

    if (typeof message === 'function') reply(message(profile), action)
    else if (message) reply(message, action)
    else {
      const replyUndefined = () => reply(speech.messages[speech.actions.REPLY_UNDEFINED])
      if (process.env.SCRIPT_PATH === './scripts/v1.js') {
        graphqlClient.query({
          fetchPolicy: 'network-only',
          query: graphqlQueries.fetchBotLastInteraction,
          variables: { recipientId: payload.sender.id }
        })
          .then(({ data: { fetchBotLastInteraction: { interactions } } }) => {
            const [last] = interactions

            if (last && last.interaction) {
              const interaction = JSON.parse(last.interaction)

              if (interaction.isBot) {
                switch (interaction.action) {
                  case speech.actions.QUICK_REPLY_X:
                  case speech.actions.EMAIL_ADDRESS_WRONG:
                    const action = !isemail.validate(payload.message.text)
                      ? speech.actions.EMAIL_ADDRESS_WRONG
                      : speech.actions.EMAIL_ADDRESS_OK
                    reply(speech.messages[action], action)
                    break;

                  default:
                    replyUndefined()
                }
              } else replyUndefined()
            } else replyUndefined()
          })
          .catch(error => console.log(`${error}`.red))

        aiClient().message(payload.message.text, {})
          .then(({ entities }) => {
            const actionsMap = {
              'greeting': speech.actions.GET_STARTED,
              'how_are_you': speech.actions.HOW_IS_IT_GOING,
              'yes': speech.actions.QUICK_REPLY_B,
              'explain_pec_29': speech.actions.QUICK_REPLY_D,
            }

            const action = !_.isEmpty(entities)
              ? actionsMap[entities.intent[0].value] || speech.actions.REPLY_UNDEFINED
              : speech.actions.REPLY_UNDEFINED

            console.log(`reply action to ${payload.sender.id}:`, action)

            reply(speech.messages[action])
          })
          .catch(err => {
            reply(speech.messages[speech.actions.ERROR_CRITICAL])
            console.error(`${err}`.red)
          })
      }
    }
  })
}
