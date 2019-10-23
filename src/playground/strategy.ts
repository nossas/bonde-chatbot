import 'colors'
import * as isemail from '../bot/utils/isemail'
import * as botSkills from '../bot/skills'
import sendForm from '../bot/speeches/v2/actions/send-form'
import * as BotActions from './actions'
import * as UserInteractions from './interactions'

const EMAIL_ADDRESS_WRONG = `
Ops, parece que você digitou um email inválido. 
Pode checar o endereço e mandar aqui de novo, por favor? 
#NuncaTePediNada 🙈
`

export interface EnsureOpts {
  speech: any,
  payload: any,
  profile: any,
  botData: any,
  reply: any
}

const handleEnsure = (opts: EnsureOpts) => () => {
  const { speech, payload, profile, botData, reply } = opts
  return UserInteractions
    .lastInteraction({ chatbotId: botData.id, recipientId: payload.recipient.id })
    .then((interactions) => {
      const last = interactions[0]

      if (last && last.interaction) {
        const interaction = last.interaction

        if (interaction.is_bot && interaction.action !== undefined) {
          const action = speech.actions[interaction.action]
          console.log(`action`, action)
          if (action) {
            if (!isemail.validate(payload.message.text)) {
              console.log('payload', payload)
              console.log('Failure Target', action.failureTarget)
              // Reply failure message with payload for action input
              reply(speech.messages[action.failureTarget], action.node.id)
              return Promise.resolve(true)
            } else {
              const activist = {
                first_name: profile.first_name,
                last_name: profile.last_name,
                name: profile.name,
                email: payload.message.text
              }
              const variables = { widget_id: Number(action.node.actionId), activist }
              return BotActions
                .press(variables)
                .then(() => {
                  reply(speech.messages[action.successfullyTarget])
                  return Promise.resolve(true)
                })
                .catch((err) => {
                  console.log('pressure error', err)
                  return Promise.resolve(false)
                })
            }
          }
        } else {
          console.log('last interaction not bot', interaction)
        }
      }
      return Promise.resolve(false)
    })
    .catch(err => {
      console.error(err)
    })
}

// import _ from 'underscore'
//
// Strategy function to dispatch reply actions based on
// quick replies and user interactions.
//
// @param [required] speech {Object} Factory specified bot's speech object
// @param [required] action {String} Quick reply action key received by Facebook Messenger webhook
// @param [required] payload {Object} Facebook messenger API received request payload object
// @param [required] profile {Object} User's profile object received by Facebook Messenger API
// @param [required] botData {Object} Bot's config data object
// @param [required] reply {Function} Messenger bot's reply function
// @return void
//
export default async ({ speech, action, payload, profile, botData, reply }) => {
  // TODO: remove thiss
  const actions = await import(`../bot/speeches/${speech.version}/actions`)

  return {
    //
    // The action will be dispatched anywhere. Even if the action
    // is not an action to reply the user. e.g. pressure action
    //
    // @return {Boolean} Tells if any action was dispatched
    //
    anywhere: () => {
      let result = false
      if (actions && actions.quickReply) {
        console.log('action strategy anywhere quickReply')
        result = actions.quickReply({ speech, action, payload, profile, botData })
      }
      return result
    },

    //
    // Ensure that the user will be replied. Even if the action
    // is a simple undefined message.
    //
    // @return {Boolean} Tells if any action was dispatched
    //
    ensure: handleEnsure({ speech, payload, profile, botData, reply })
  }
}
