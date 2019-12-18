require('dotenv').config()
import apm from 'elastic-apm-node/start'
// agent.start({ active: process.env.NODE_ENV === 'production' })
// import Http from 'http'
import Express from 'express'
import ExpressSession from 'express-session'
import morgan from 'morgan'
import BodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
// import Queue from 'bull'
import BotFactory from './factory'
import * as routes from '../routes'

require('isomorphic-fetch')

const app = Express()

app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, '../../src/views'));
app.set('view engine', 'pug')

app.use(morgan('combined'))
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

const bot = new BotFactory(app)

app.get('/', (req, res) => {
  res.send('Chatbot Server is running!!')
})

app.use('/login', routes.login)
app.use('/mass-message', routes.massMessage)

app.listen(5000, () => {
  console.log('Chatbot Server listening on port 5000!')
})

/**
  * README
  *
  * Um bot é um conjunto de rotas disponibilizadas atráves
  * de um server express configurado como Webhook no Facebook.
  *
  * https://developers.facebook.com/docs/messenger-platform/webhook/
  *
  * Na atual versão dessa aplicação, o bot possui 3 funcionalidades
  * que precisam ser mapeadas no roteamento.
  *
  * - [GET]   verifyValidationToken: Responsável por validar a
  * secret_key usada para criptografia do token
  * - [POST]  handleMessage: Responsável por responder a requisição
  * vinda do Facebook
  * - [POST]  sendMassMessage: Responsável por fazer envio de mensages
  * em massa para o Facebook
  *
  *
  */
