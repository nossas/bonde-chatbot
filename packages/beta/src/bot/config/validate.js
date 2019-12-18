import apm from 'elastic-apm-node/start'
import 'colors'

export default config => {
  ['verify', 'token', 'app_secret'].forEach(key => {
    if (!config[key]) {
      apm.captureError(`Missing "${key}" config value`.red)
      process.exit(1)
    }
  })
  return config
}
