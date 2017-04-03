const http = require('http')
// const express = require('express')
// const bodyParser = require('body-parser')
const Bot = require('messenger-bot')
require('dotenv').config()

const APP_SECRET = process.env.MESSENGER_APP_SECRET || ''
const VALIDATION_TOKEN = process.env.MESSENGER_VALIDATION_TOKEN || ''
const PAGE_ACCESS_TOKEN = process.env.MESSENGER_PAGE_ACCESS_TOKEN || ''
const SERVER_URL = process.env.SERVER_URL || 'localhost:5000'

if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN && SERVER_URL)) {
  console.error('Missing config values')
  process.exit(1)
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
  // if (payload.optin) {
  //   receivedAuthentication(payload);
  // } else if (payload.delivery) {
  //   receivedDeliveryConfirmation(payload);
  // } else if (payload.postback) {
  //   receivedPostback(payload);
  // } else if (payload.read) {
  //   receivedMessageRead(payload);
  // } else if (payload.account_linking) {
  //   receivedAccountLink(payload);
  if (payload.message) {
    receivedMessage(payload, reply)
  } else {
    console.log('Webhook received unknown payload: ', payload)
  }
})

bot.setGetStartedButton('GET_STARTED_PAYLOAD')

bot.on('postback', (payload, reply, actions) => {
  if (payload === 'GET_STARTED_PAYLOAD') {
    return startConversation(payload.sender, reply)
  } else if (payload === 'EMAIL_VALIDATED_PAYLOAD') {
    return reply({
      text: 'Ótimo, e-mail anotado. Para melhor direcionar nossos' +
            'esforços, preciso que informe seu estado. Ex.: SP, PE, AM...'
    })
  } else if (payload === 'UF_VALIDATED_PAYLOAD') {
    return reply({
      text: 'O ESTADO tem X deputados federais. Vou mandar um e-mail' +
        'em seu nome apra todos eles. Assim que terminar te aviso.'
    })
  }
})

/*
 * Message Event
 *
 * This event is called when a message is sent to your page. The 'message'
 * object format can vary depending on the kind of message that was received.
 * Read more at https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received
 *
 * For this example, we're going to echo any text that we get. If we get some
 * special keywords ('button', 'generic', 'receipt'), then we'll send back
 * examples of those bubbles to illustrate the special message bubbles we've
 * created. If we receive a message with an attachment (image, video, audio),
 * then we'll simply confirm that we've received the attachment.
 *
 */
function receivedMessage (payload, reply) {
  var senderID = payload.sender.id
  // var recipientID = payload.recipient.id
  // var timeOfMessage = payload.timestamp
  var message = payload.message

  var isEcho = message.is_echo
  var messageId = message.mid
  var appId = message.app_id
  var metadata = message.metadata

  // You may get a text or attachment but not both
  var messageText = message.text
  var messageAttachments = message.attachments
  var quickReply = message.quick_reply

  if (isEcho) {
    // Just logging message echoes to console
    console.log('Received echo for message %s and app %d with metadata %s',
      messageId, appId, metadata)
    return
  } else if (quickReply) {
    var quickReplyPayload = quickReply.payload
    console.log('Quick reply for message %s with payload %s',
      messageId, quickReplyPayload)

    // sendTextMessage(senderID, 'Quick reply tapped')
    return
  }

  if (messageText) {
    // If we receive a text message, check to see if it matches any special
    // keywords and send back the corresponding example. Otherwise, just echo
    // the text we received.
    switch (parseMessage(messageText)) {
      case 'email_validated':
        reply({ text: 'Ótimo, e-mail anotado. Para melhor direcionar nossos esforços, preciso que me diga qual seu estado, UF.' })
        break

      case 'uf_validated':
        reply({ text: 'O ESTADO tem X deputados federais. Vou mandar um e-mail em seu nome apra todos eles.' })
        break

      default:
        startConversation(senderID, reply)
    }
  } else if (messageAttachments) {
    // sendTextMessage(senderID, 'Message with attachment received')
  }
}

function parseMessage (text) {
  if (validateEmail(text)) {
    return 'email_validated'
    // eslint-disable-next-line
  } else if (/^[A-Za-z]{2}$/.test(text)) {
    return 'uf_validated'
  }
  return 'unknown'
}

function validateEmail (email) {
  // eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function startConversation (senderId, reply) {
  bot.getProfile(senderId, (err, profile) => {
    if (err) throw err

    if (isSenderRegistered(senderId)) {
      reply({
        text: `Olá novamente, ${profile.first_name}. Verifiquei que já está tudo certo com seu cadastro. Como posso te ajudar?`
      }, (err, info) => { if (err) throw err })
      // need set quickReply or persistentMenu
    } else {
      reply({
        text: `Olá ${profile.first_name}, sou o bot da resistência e vou te ajudar a pressionar os deputados. Comece me informando qual o seu e-mail?`
      }, (err, info) => { if (err) throw err })
    }
  })
}

function isSenderRegistered (senderId) {
  if (senderId === '123') { // 1236464383118507
    return true
  }
  return false
}

const port = process.env.PORT || 5000
http.createServer(bot.middleware()).listen(port)
console.log(`Echo bot server running at port ${port}.`)
