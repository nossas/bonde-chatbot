import 'colors'
/* import * as botAI from '../ai' */
/* import * as botHelpers from '../helpers' */
import * as botAI from '../bot/ai'
import * as botSpeeches from '../bot/speeches'
import actionStrategy from './strategy'
import * as ChatbotInteractions from './interactions'

/**
  * Reply function interface to save the bot's reply text
  * before send it to user.
  *
  * @param [required] botData {Object} Bot's config data object
  * @param [required] payload {Object} Facebook messenger API received request payload object
  * @param [required] reply {Function} Messenger bot's reply function
  * @param [required] profile {Object} User's profile object received by Facebook Messenger API
  */
export const handleReplyWithSave = ({ bot, botData, payload, reply, profile }) => (message, action) => {
  // Function that saves the interaction on database
  // and sends the message to the Messenger.
  const saveAndReply = (msg, callback?: any) => {
    const opts = {
      chatbotId: botData.id,
      recipientId: payload.recipient.id,
      senderId: payload.sender.id,
      interaction: { is_bot: true, message: msg, action }
    }
    ChatbotInteractions
      .insert(opts)
      .then(() => {
        reply(msg, callback)
      })
      .catch(err => {
        console.error('helpers.ts :: handleReplyWithSave :: saveAndReplay ->', err)
      })
  }

  const normalize = msg => {
    switch (msg.constructor) {
      case Function: return msg(profile)
      case String: return { text: msg }
      case Object: return msg
      default: throw new TypeError('The type of message variable is not supported.')
    }
  }

  if (message.constructor === Array) {
    //
    // Recursive function to reply a message with multiple sequential messages.
    //
    // @param [required] index {Integer} Index of message from messages array.
    //
    const replySequentially = index => {
      if (index < message.length) {
        saveAndReply(normalize(message[index]), err => {
          if (err) console.error('Error sending multiple messages: (%s)', JSON.stringify(err))

          bot.sendSenderAction(payload.sender.id, 'typing_on')
          if (index === message.length - 1) {
            bot.sendSenderAction(payload.sender.id, 'typing_off')
          }

          setTimeout(() => replySequentially(index + 1), 5000)
        })
      }
    }

    //
    // Start replying with index 0 of message array.
    //
    replySequentially(0)
  } else saveAndReply(normalize(message))
}

export const receive = (bot, speech, botData) => (payload, reply, action) => {
  bot.getProfile(payload.sender.id, async (err, profile) => {
    if (err) console.error(`${JSON.stringify(err)}`.red)
    //
    // Wraps the original reply function with the behaviour
    // to save the user's interaction.
    //
    const replyWithSave = handleReplyWithSave({ bot, botData, payload, reply, profile })

    //
    // Speech action strategy
    //
    const strategyArgs = { speech, action, payload, profile, botData, reply: replyWithSave }
    const actions = await actionStrategy(strategyArgs)

    actions.anywhere()

    //
    // Speech message based on received quick reply action
    //
    const message = speech.messages[action]

    if (message) {
      replyWithSave(message, action)
    } else {
      actions
        .ensure()
        .then(dispatched => {
          if (!dispatched && payload.message && payload.message.text) {
            botAI
              .client()
              .message(payload.message.text, {})
              .then(botAI.resolvers.speechAction({ speech, reply: replyWithSave }))
              .catch(err => {
                console.error('helpers.ts :: receive :: BotAI ->', err)
                replyWithSave(botSpeeches.messages.BUGGED_OUT, 'bugged_out')
              })
          } else if (!dispatched) {
            replyWithSave(botSpeeches.messages.BUGGED_OUT, 'bugged_out')
          }
        })
        .catch(err => {
          console.error('helpers.ts :: receive :: ensure ->', err)
          replyWithSave(botSpeeches.messages.BUGGED_OUT, 'bugged_out')
        })
    }
  })
}
