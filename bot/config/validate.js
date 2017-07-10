import 'colors'

export default config => {
  ['verify', 'token', 'app_secret'].forEach(key => {
    if (!config[key]) {
      console.log(`Missing "${key}" config value`.red)
      process.exit(1)
    }
  })
  return config
}
