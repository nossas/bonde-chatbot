import 'colors'

export default (bot, speech) => (payload, reply, action) => {
  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) console.log(`${err}`.red)

    const message = speech.messages[action]

    if (typeof message === 'function') reply(message(profile))
    else if (message) reply(message)
    else reply(speech.messages[speech.actions.REPLY_UNDEFINED])
  })
}
