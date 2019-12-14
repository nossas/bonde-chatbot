import * as botInteractions from '../interactions'

//
// Reply function interface to save the bot's reply text
// before send it to user.
//
// @param [required] botData {Object} Bot's config data object
// @param [required] payload {Object} Facebook messenger API received request payload object
// @param [required] originalReply {Function} Messenger bot's reply function
// @param [required] profile {Object} User's profile object received by Facebook Messenger API
//
export default ({ bot, botData, payload, originalReply, profile }) => (message, action) => {
  //
  // Function that saves the interaction on database
  // and sends the message to the Messenger.
  //
  const saveAndReply = (msg, callback) => {
    const interaction = { is_bot: true, message: msg, action }

    botInteractions.save({ botData, payload, interaction })
      .then(data => { originalReply(msg, callback); return data })
      .catch(err => console.error(`${JSON.stringify(err)}`.red))
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
