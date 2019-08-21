import 'colors'

export default (bot, speech, botData) => err => {
  console.error(`Beta handle error ${err.message}`.red)
}
