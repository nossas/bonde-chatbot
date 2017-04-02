const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const Bot = require('messenger-bot')
require('dotenv').config();

// App Secret can be retrieved from the App Dashboard
const APP_SECRET = process.env.MESSENGER_APP_SECRET || ''

// Arbitrary value used to validate a webhook
const VALIDATION_TOKEN = process.env.MESSENGER_VALIDATION_TOKEN || ''

// Generate a page access token for your page from the App Dashboard
const PAGE_ACCESS_TOKEN = process.env.MESSENGER_PAGE_ACCESS_TOKEN || ''

// URL where the app is running (include protocol). Used to point to scripts and
// assets located at this address.
const SERVER_URL = process.env.SERVER_URL || 'localhost:5000'

if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN && SERVER_URL)) {
  console.error("Missing config values");
  process.exit(1);
}

let bot = new Bot({
  verify: VALIDATION_TOKEN,
  token: PAGE_ACCESS_TOKEN,
  app_secret: APP_SECRET
})
bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err
    console.log(profile)

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

const port = process.env.PORT || 5000
http.createServer(bot.middleware()).listen(port)
console.log(`Echo bot server running at port ${port}.`)
