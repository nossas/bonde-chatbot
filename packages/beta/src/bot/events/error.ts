import apm from 'elastic-apm-node/start'
import 'colors'

export default (bot, speech, botData) => err => {
  apm.captureError(`Beta handle error ${err.message}`.red)
}
