import 'isomorphic-fetch' // window.fetch pollyfill
import 'colors'

import Http from 'http'
import Express from 'express'
import ExpressSession from 'express-session'
import morgan from 'morgan'
import BodyParser from 'body-parser'
import cors from 'cors'
import Queue from 'bull'
import { BotFactory } from './bot'
import * as botMiddlewares from './bot/middlewares'
import * as botSkills from './bot/skills'
import * as routes from './routes'
import * as routesMiddlewares from './routes/middlewares'

//
// Emvironment Variables Polyfill
//
const envs = {
  redisURL: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
}

//
// Globals
//
global.widgets = {}

//
// Setup Express server
//
let app = Express()

app.use(morgan('combined'))
app.set('view engine', 'pug')
app.use(Express.static('public'))
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(ExpressSession({
  secret: 's3Cur3',
  name: 'sessionId',
  resave: true,
  saveUninitialized: true
}))

//
// Bots fabrication
//
const speech = require(`./bot/speeches/${process.env.SPEECH_VERSION || 'v0'}`).speech
console.log('SPEECH LOADED, VERSION: ', process.env.SPEECH_VERSION)
const fabricated = new BotFactory(speech)
  .fabricate()
  .then(bots => {
    bots.forEach(({ id, bot, endpoint, botData }) => {
      //
      // Set up express endpoints for each bot
      //
      app.get(endpoint, botMiddlewares.verifyValidationToken(bot))
      app.post(endpoint, botMiddlewares.handleMessage(bot))
      app.post(`${endpoint}/mass-message/send`, botMiddlewares.sendMassMessage(bot))

      //
      // Set up pressure stuff
      //
      botSkills.pressure.fetchWidgets({ botData })
      console.log('BOT CREATED')
      console.info(`Bot[${id}] exposed in endpoint: ${endpoint}`.blue)
    })
  })
  .catch(err => console.error('GRAPHQL API ERROR: ', `${JSON.stringify(err)}`))

//
// Express server routes
//
app.use('/', routes.massMessage)
app.use('/login', routes.login)
app.use('/mass-message', routes.massMessage)
app.use('/pressure', routes.pressure)
app.use('/share', routes.share)
app.use('/health', routes.health)

const queue = new Queue('bot-mass-message', envs.redisURL)
app.post('/enqueue-mass-messages', routesMiddlewares.enqueueMassMessages(queue))

//
// Version check
//
app.get('/_version', (req, res) => {
  let p = require('child_process')
  res.json({ hash: p.execSync('git rev-parse HEAD').toString().trim() })
})

//
// Up the server
//
fabricated.then(() => {
  const port = process.env.PORT || 5000
  Http.createServer(app).listen(port)
  console.info(`🤖  Bot server running at port ${port}`)
})
export default app
