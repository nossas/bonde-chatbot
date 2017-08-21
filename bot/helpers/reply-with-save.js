import * as botInteractions from '../interactions'

//
// Reply function interface to save the bot's reply text
// before send it to user.
//
export default ({ botData, payload, originalReply }) => (message, action) => {
  const interaction = { is_bot: true, message, action }

  botInteractions.save({ botData, payload, interaction })
    .then(data => { originalReply(message); return data })
    .catch(err => console.error(`${JSON.stringify(err)}`.red))
}
