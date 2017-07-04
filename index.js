'use strict'
const Http = require('http')
const Bot = require('messenger-bot')
require('dotenv').config()

// Load script
const Script = require(process.env.SCRIPT_PATH || './scripts/v0.js')

// Start BETA
const config = {
  verify: process.env.MESSENGER_VALIDATION_TOKEN,
  token: process.env.MESSENGER_PAGE_ACCESS_TOKEN,
  app_secret: process.env.MESSENGER_APP_SECRET
}

if (!(config.verify && config.token && config.app_secret)) {
  console.error('Missing config values')
  process.exit(1)
}

const beta = new Bot(config)

// Handle error
beta.on('error', (err) => {
  console.log('Beta handle error', err.message)
})

const receive = (payload, reply, action) => {
  
  beta.getProfile(payload.sender.id, (err, profile) => {
   
    if (err) console.log(err)

    const message = Script.messages[action]
    
    if (typeof message === "function") reply(message(profile))
    else if (message) reply(message)
    else reply(Script.messages[Script.actions.REPLY_UNDEFINED])
  }) 
}

// Handle postback
beta.setGetStartedButton([{
  payload: Script.actions.GET_STARTED
}])

beta.on('postback', (payload, reply) => {
  return receive(payload, reply, payload.postback.payload)
})

// Handle message
beta.on('message', (payload, reply) => {
  if (!payload.message) {
    console.log('Webhook received unknown payload: ', payload)
    return
  } else if (payload.message.is_echo) {
    console.log(
      'Received echo for message %s and app %d with metadata %s',
      payload.message.mid,
      payload.message.app_id,
      payload.message.metadata
    )
    return
  }
  
  // Define received action
  let action = payload.message.payload
  if (payload.message.quick_reply) {
    action = payload.message.quick_reply.payload
  }
  
  receive(payload, reply, action)
})

// Start server
const port = process.env.PORT || 5000

Http
  .createServer(beta.middleware())
  .listen(port)

console.log(`Echo bot server running at port ${port}`)
