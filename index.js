'use strict'
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

bot.setGetStartedButton([{
  "payload":"GET_STARTED_PAYLOAD"
}])

bot.on('postback', (payload, reply, actions) => {
  if (payload.postback.payload === 'GET_STARTED_PAYLOAD') {
    return startConversation(payload.sender.id, reply, true)
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
    answerQuickReply(payload, reply)
    return
  }
  // quick_replies: [
  //   {
  //     "content_type":"location",
  //     "payload":"QUICK_REPLY_LOCATION_SHARED",
  //   }
  // ]

  if (messageText) {
    switch (parseMessage(messageText)) {
      case 'email_validated':
        reply({
          text: `Awesome! I've just signed you into the list of brave women who want to fight to decriminalize abortion in Brazil!  💪`,
        }, (err, info) => {
          if (err) throw err
          reply({
            text: `Now we are connected happily ever after. I'll keep an eye on the news and, when anything comes up, I’ll text you and keep you informed ;)`,
          }, (err, info) => { 
            if (err) throw err 
            reply({
              text: `And, please, don't keep this between us. Tell your friends about me! Invite them to join this conversation, so I can put their names on the list too.`,
            }, (err, info) => {
              if (err) throw err 
              reply({
                "attachment": {
                  "type": "template",
                  "payload": {
                    "template_type": "generic",
                    "elements": [
                      {
                        "title": "Beta is your new feminist ally",
                        "subtitle": "Chat with her to take action now!",
                        "image_url": "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/18485498_463912997289183_6766375779007506020_n.png?oh=0d22e5dc04dbf35ea863ef3f8412eddf&oe=59A52285",
                        "default_action": {
                          "type": "web_url",
                          "url": "https://m.me/beta.feminista?ref=invited_by"
                        },
                        "buttons": [
                          {
                            "type": "web_url",
                            "url": "https://m.me/beta.feminista?ref=invited_by",
                            "title": "Get started!"
                          }
                        ]
                      }
                    ]
                  }
                }
              }, (err, info) => {
                if (err) console.dir(err, info) 
              })
            })
          })
        })
        break

      // case 'uf_validated':
      //   reply({
      //     text: `O ESTADO tem ${Math.floor(Math.random() * 100)} deputados federais. Posso mandar um e-mail em seu nome para todos eles?`,
      //     quick_replies: [
      //       {
      //         content_type: 'text',
      //         title: 'Quero pressionar!',
      //         payload: 'QUICK_REPLY_PRESSURE'
      //       },
      //       {
      //         "content_type":"text",
      //         "title":"Agora não...",
      //         "payload":"QUICK_REPLY_CANCEL_PRESSURE"
      //       }
      //     ]
      //   })
      //   break

      default:
        startConversation(senderID, reply, false)
    }
  } else if (messageAttachments) {
    console.log(JSON.stringify(messageAttachments))
  }
}

function answerQuickReply (payload, reply) {
  const action = payload.message.quick_reply.payload
  if (action === 'QUICK_REPLY_A') {
    reply({
      text: `Love it! Let’s start with the latest trending topic in feminist activism in Brazil.
Not sure you heard about it, but since past March, there's a resolution to be judged by the Brazilian Supreme Court that may decriminalize abortion in the country. There is a real chance abortion will not be considered a crime in Brazil anymore. The first chance in, what?, decades!
What we thought to be impossible may come true at any minute now! Do you wanna help make this happen?`,
      quick_replies: [
        {
          content_type: 'text',
          title: 'Yes! Count me in!',
          payload: 'QUICK_REPLY_C'
        },
        {
          content_type: 'text',
          title: `Eh, I'll have to skip it for now.`,
          payload: 'QUICK_REPLY_B'
        }
      ]
    })
  } else if (action === 'QUICK_REPLY_GET_STARTED') {
    reply({
      text: `Love it! Let’s start with the latest trending topic in feminist activism in Brazil.
Not sure you heard about it, but since past March, there's a resolution to be judged by the Brazilian Supreme Court that may decriminalize abortion in the country. There is a real chance abortion will not be considered a crime in Brazil anymore. The first chance in, what?, decades!
What we thought to be impossible may come true at any minute now! Do you wanna help make this happen?`,
      quick_replies: [
        {
          content_type: 'text',
          title: 'Yes! Count me in!',
          payload: 'QUICK_REPLY_C'
        },
        {
          content_type: 'text',
          title: `Eh, I'll have to skip it for now.`,
          payload: 'QUICK_REPLY_B'
        }
      ]
    })
  } else if (action === 'QUICK_REPLY_B') {
    reply({
      text: `No problem, girl. I get it. Just drop me a line the next time you feel like chatting. I'm always here for you. 😉`
    })
  } else if (action === 'QUICK_REPLY_C') {
    reply({
      text: `You're the best! I knew I could count on you!`
    }, (err, info) => { if (err) throw err 
      reply({
        text: `We don't have time to waste, the resolution may be voted any day now. `
      }, (err, info) => {
        if (err) throw err
        reply({
          text: `So, here is the plan: we need to make a stand. But a big, enormous, gigantic one.`
        }, (err, info) => {
          if (err) throw err 
          reply({
            text: `We'll collect signatures of all women who believe abortion should not be considered a crime in Brazil. And we’ll hand this immense list to all of the Ministers of the Supreme Court. It's gonna be the largest petition they've ever seen. The mother of all petitions! Do you wanna be a part of it?`,
            quick_replies: [
              {
                content_type: 'text',
                title: 'YAS!',
                payload: 'QUICK_REPLY_D'
              },
              {
                content_type: 'text',
                title: `Eh, not really.`,
                payload: 'QUICK_REPLY_B'
              }
            ]
          })
        })
      })
    })
  } else if (action === 'QUICK_REPLY_D') {
    reply({
      text: `We are almost there.`
    })
    reply({
      text: `Last but not least, I’m gonna need your email address. I won't be sending you any spam, I swear to Jobs!`
    })
  }
}

function parseMessage (text) {
  if (validateEmail(text)) {
    return 'email_validated'
    // eslint-disable-next-line
  } 
  // else if (/^[A-Za-z]{2}$/.test(text)) {
  //   return 'uf_validated'
  // }
  return 'unknown'
}

function validateEmail (email) {
  // eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function startConversation (senderId, reply, isGetStarted) {
  bot.getProfile(senderId, (err, profile) => {
    if (err) throw err

    // if (isSenderRegistered(senderId)) {
    //   reply({
    //     text: `Olá novamente, ${profile.first_name}. Verifiquei que já está tudo certo com seu cadastro. Como posso te ajudar?`
    //   }, (err, info) => { if (err) throw err })
    // need set quickReply or persistentMenu
    if (isGetStarted) {
      // ${profile.first_name}
      reply({
        text: `What's up, sis? I’m so glad we've finally connected! 💁🙅🙆`
      }, (err, info) => {
        if (err) throw err
        reply({
          text: `I was just a binary - well, who am I kidding?, not that binary - code when I was programmed to be a feminist robot. From now on, I'll be your ally in the fight to reboot the current system into one that is more just, free and equal for all women. It's time to start! Shall we? `,
          quick_replies: [
            {
              content_type: 'text',
              title: 'Yes, please!',
              payload: 'QUICK_REPLY_A'
            },
            {
              content_type: 'text',
              title: 'Eh, not feeling like it right now :/',
              payload: 'QUICK_REPLY_B'
            }
          ]
        }, (err, info) => { if (err) throw err })
      })
    } else {
      reply({
        text: `Oh, my algorithms! I didn’t really get what you're trying to say. It seems like my codes are not prepared to understand all of you human's complexity. But I'll get there, I promise!😉`,
        quick_replies: [
          {
            content_type: 'text',
            title: 'Try again?',
            payload: 'QUICK_REPLY_GET_STARTED'
          }
        ]
      }, (err, info) => { if (err) throw err })
    }
  })
}

function isSenderRegistered (senderId) {
  if (senderId === '123') {
    return true
  }
  return false
}

const port = process.env.PORT || 5000
http.createServer(bot.middleware()).listen(port)
console.log(`Echo bot server running at port ${port}.`)
