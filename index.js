require('dotenv').config()

import 'isomorphic-fetch' // window.fetch pollyfill
import 'colors'

import Http from 'http'
import Express from 'express'
import ExpressSession from 'express-session'
import BodyParser from 'body-parser'
import { BotFactory } from './bot'
import * as botMiddlewares from './bot/middlewares'
import * as routes from './routes'

//
// Setup Express server
//
let app = Express()

app.set('view engine', 'pug')
app.use(Express.static('public'))
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(ExpressSession({
  secret : 's3Cur3',
  name : 'sessionId',
  resave: true,
  saveUninitialized: true
}))

//
// Bots fabrication
//
const speech = require(process.env.SCRIPT_PATH || './scripts/v0.js').default
const credentials = {
  email: process.env.SERVER_AUTH_EMAIL,
  password: process.env.SERVER_AUTH_PASSWORD
}
const fabricated = new BotFactory(app, speech, credentials)
  .fabricate()
  .then(bots => {
    //
    // Set up express endpoints for each for
    //
    bots.forEach(({ id, bot, endpoint }) => {
      app.post(endpoint, botMiddlewares.saveReceivedInteraction(bot))
      app.get(endpoint, botMiddlewares.verifyValidationToken(bot))
      app.post(endpoint, botMiddlewares.handleMessage(bot))
      app.post(`${endpoint}/mass-message/send`, botMiddlewares.sendMassMessage(bot))

      console.log(`Bot[${id}] exposed in endpoint: ${endpoint}`.blue)
    })
  })

//
// Express server routes
//
app.use('/login', routes.login)
app.use('/mass-message', routes.massMessage)

//
// Up the server
//
fabricated.then(() => {
  const port = process.env.PORT || 5000
  Http.createServer(app).listen(port)
  console.log(`🤖  Bot server running at port ${port}`)
})
