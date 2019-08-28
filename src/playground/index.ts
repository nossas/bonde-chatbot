import Http from 'http'
import Express from 'express'
import ExpressSession from 'express-session'
import morgan from 'morgan'
import BodyParser from 'body-parser'
import cors from 'cors'
import Queue from 'bull'
import BotFactory from './factory'
import * as botMiddlewares from '../beta/middlewares'

require('isomorphic-fetch')

const app = Express()

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

const bot = new BotFactory()

async function delay (ms) {
  // return await for better async stack trace support in case of errors.
  return new Promise(resolve => setTimeout(resolve, ms))
}

const sleep = 200

delay(sleep)
  .then(() => {
    console.info(`--- checking before ${sleep}ms on factory state`.blue)
    bot.fabricate().then((bots) => {
      bots.forEach((data) => {
        const { id, bot, botData } = data
        const endpoint = `/v2/${id}`
        //
        // Set up express endpoints for each bot
        //
        app.get(endpoint, botMiddlewares.verifyValidationToken(bot))
        app.post(endpoint, botMiddlewares.handleMessage(bot))
        /* app.post(`${endpoint}/mass-message/send`, botMiddlewares.sendMassMessage(bot)) */
        console.info(`Bot[${id}] exposed in endpoint: ${endpoint}`.blue)
      })
    })
  })

app.get('/', (req, res) => {
  const chatbots = Object.keys(bot.globalState)
  const totalChatbot = chatbots.length

  const chatbot = bot.globalState[chatbots[0]]
  res.send(`
    You has a total ${totalChatbot} of chatbot.
    <br />
    Your configuration:
    <br />
    ${chatbot.settings}
  `)
})

/* app.get('/', (req, res) => {
  res.send('Hello!!')
}) */

app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
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
