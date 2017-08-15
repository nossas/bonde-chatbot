import 'colors'
import _ from 'underscore'
import escapeJSON from 'escape-json-node'
import request from 'request'
import isemail from 'isemail'
import { client as aiClient } from '../ai'
import { client as graphqlClient } from '../../graphql'
import * as graphqlQueries from '../../graphql/queries'
import * as botHelpers from '../helpers'
import * as botSkills from '../skills'
import * as botSpeeches from '../speeches'

export default (bot, speech, botData) => (payload, originalReply, action) => {
  //
  // Wraps the original reply function with the behaviour
  // to save the user's interaction.
  //
  const reply = botHelpers.replyWithSave({ botData, payload, originalReply })

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) console.error(`${err}`.red)

    //
    // Speech action strategy
    //
    const actions =  botSpeeches.actionStrategy({ speech, action, payload, profile, botData })
    actions.ensure()

    //
    // Speech message based on received quick reply action
    //
    const message = speech.messages[action]


    if (typeof message === 'function') reply(message(profile), action)
    else if (message) reply(message, action)
    else {
      const replyUndefined = () => reply(
        speech.messages[speech.actions.REPLY_UNDEFINED],
        speech.actions.REPLY_UNDEFINED
      )

      if (process.env.SPEECH_VERSION === 'v1') {
        //
        // User interaction actions
        //
        graphqlClient.query({
          fetchPolicy: 'network-only',
          query: graphqlQueries.fetchBotLastInteraction,
          variables: { recipientId: payload.sender.id }
        })
          .then(({ data: { fetchBotLastInteraction: { interactions } } }) => {
            const [last] = interactions

            if (last && last.interaction) {
              const interaction = JSON.parse(last.interaction)

              if (interaction.is_bot) {
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
          .catch(error => console.error(`${error}`.red))

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
