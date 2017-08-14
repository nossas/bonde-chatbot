import 'colors'
import _ from 'underscore'
import { client as aiClient } from '../ai'
import escapeJSON from 'escape-json-node'
import isemail from 'isemail'
import { client as graphqlClient } from '../../graphql'
import * as graphqlMutations from '../../graphql/mutations'
import * as graphqlQueries from '../../graphql/queries'

export default (bot, speech, botData) => (payload, originalReply, action) => {
  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) console.log(`${err}`.red)

    //
    // reply function interface to save the bot's reply text
    // before send it to user.
    //
    const reply = (message, action) => {
      //
      // In this case, the `sender.id` is the user's recipient.id
      // and, the `recipient.id` is the page's recipient.id
      //
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
      graphqlClient.query({
        fetchPolicy: 'network-only',
        query: graphqlQueries.fetchBotLastInteraction,
        variables: { recipientId: payload.sender.id }
      })
        .then(({ data: { fetchBotLastInteraction: { interactions } } }) => {
          const [last] = interactions

          if (last.interaction) {
            const lastInteraction = JSON.parse(last.interaction)

            if (lastInteraction.isBot) {
              if (['QUICK_REPLY_X', 'EMAIL_ADDRESS_WRONG'].includes(lastInteraction.action)) {
                if (!isemail.validate(payload.message.text)) {
                  reply(
                    speech.messages[speech.actions.EMAIL_ADDRESS_WRONG],
                    speech.actions.EMAIL_ADDRESS_WRONG
                  )
                } else {
                  reply(
                    speech.messages[speech.actions.EMAIL_ADDRESS_OK],
                    speech.actions.EMAIL_ADDRESS_OK
                  )
                }
              } else reply(speech.messages[speech.actions.REPLY_UNDEFINED])
            } else reply(speech.messages[speech.actions.REPLY_UNDEFINED])
          }
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
  })
}
