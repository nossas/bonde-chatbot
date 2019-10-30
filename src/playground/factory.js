import Bot from 'messenger-bot'
import { subscribeChatbots } from './actions'
import { writeSpeech } from './speech'
import * as botEvents from './events'
import * as botConfig from '../bot/config'
import * as botMiddlewares from '../beta/middlewares'

class Factory {
  constructor (app) {
    this.globalState = {}
    this.observer = null
    this.app = app
    try {
      this.observer = subscribeChatbots()
        .subscribe({
          next: this.next.bind(this),
          error: this.error.bind(this)
        })
    } catch (error) {
      console.error('--- factory subscribe error: '.red, error)
    }
  }

  next ({ data }) {
    console.info('Receiving notification of GraphQL API on update chatbots'.blue)
    const chatbotsStoreKeys = Object.keys(this.globalState)

    let updateRouting = false
    if (chatbotsStoreKeys.length !== data.chatbots.length) {
      updateRouting = true
    } else {
      // TODO: Remove Chatbot on server
      const chatbotsUpdated = chatbotsStoreKeys.filter(key => {
        const chatbot = data.chatbots.filter(chatbot => Number(chatbot.id) === Number(key))[0]
        if (!chatbot) return false
        return this.globalState[key].updatedAt !== chatbot.updated_at
      })
      updateRouting = chatbotsUpdated.length > 0
    }
    // TODO: a todo momento em que acontece uma inclusão, atualização em qualquer
    // atributo ou query relacionada a chabots esse evento é disparado.
    data.chatbots.forEach((chatbot) => {
      if (chatbot.chatbot_settings.length > 0 && chatbot.chatbot_campaigns.length > 0) {
        this.globalState[chatbot.id] = {
          persistentMenu: chatbot.persistent_menu,
          speech: this.handleNextSpeech(chatbot),
          settings: this.handleNextSettings(chatbot),
          updatedAt: chatbot.updated_at
        }
      } else {
        console.error(`Bot[${chatbot.id}] has no settings or campaigns`.red)
      }
    })

    if (updateRouting) {
      console.info('Upgrading express routing to new chatbots'.blue)
      this.fabricate()
        .then((bots) => {
          bots.forEach((data) => {
            // eslint-disable-next-line no-unused-vars
            const { id, bot, botData } = data
            const endpoint = `/v2/${id}`
            //
            // Set up express endpoints for each bot
            //
            this.app.get(endpoint, botMiddlewares.verifyValidationToken(bot))
            this.app.post(endpoint, botMiddlewares.handleMessage(bot))
            /* app.post(`${endpoint}/mass-message/send`, botMiddlewares.sendMassMessage(bot)) */
            console.info(`Bot[${id}] exposed in endpoint: ${process.env.APP_DOMAIN}${endpoint}`.blue)
          })
        })
    }
  }

  error (err) {
    console.error('Receiving error on subscription GraphQL API: ', err)
  }

  handleNextSettings ({ name, chatbot_settings: chatbotSettings }) {
    // so far only expected to set up Facebook
    const { settings } = chatbotSettings[0]
    return {
      fb: {
        app_secret: settings.messenger_app_secret,
        token: settings.messenger_page_access_token,
        verify: settings.messenger_validation_token
      },
      wit: {
        serverAccessToken: settings.wit_server_access_token
      },
      default: {
        errorMessage: settings.default_error_message
      }
    }
  }

  handleNextSpeech ({ name, chatbot_campaigns: chatbotCampaigns }) {
    const speechs = chatbotCampaigns.map(writeSpeech)
    // Merge all messages
    const messages = speechs.reduce((r, c) => Object.assign(r.messages, c.messages, {}))
    const actions = speechs.reduce((r, c) => Object.assign(r.actions, c.actions, {}))
    const speech = speechs.filter(s => !!s.started)[0]

    const started = this._getStarted(speech, chatbotCampaigns)

    return {
      actions: actions.actions,
      messages: messages.messages,
      started
    }
  }

  _getStarted (speech, campaigns) {
    if (!speech) {
      const nodes = Object.values(
        campaigns[0]
          .diagram
          .layers
          .filter(m => m.type === 'diagram-nodes')[0]
          .models
      )
      // First message always more left position x
      return nodes.sort((a, b) => a.x - b.x)[0].id
    }
    return speech.started
  }

  fabricate () {
    const chatbots = Object.keys(this.globalState)
    return Promise.all(chatbots.map(chatbotId => {
      const chatbot = this.globalState[chatbotId]
      // Validate and settings messenger-bot
      const settings = botConfig.validate(chatbot.settings.fb)
      const bot = new Bot(settings)
      // TODO: configure facebook settings data
      const data = {
        image_url: 'https://s3.amazonaws.com/chatbox-beta/pec29/share-pec29.jpg',
        name: 'BETA',
        m_me: 'https://m.me/beta.feminista'
      }
      const botData = { ...settings, id: chatbotId, data }

      // Configure started button
      bot.setGetStartedButton({ payload: chatbot.speech.started })

      // Configure persistent menu based on database
      const persistentMenu = { locale: 'default', composer_input_disabled: false }

      if (chatbot.persistentMenu) {
        // Menu configured on admin-canary
        persistentMenu['call_to_actions'] = chatbot.persistentMenu.map(({ title, payload }) => ({
          title,
          payload,
          type: 'postback'
        }))
      } else {
        // Menu default with started message
        persistentMenu['call_to_actions'] = [
          {
            title: 'Reiniciar conversa',
            type: 'postback',
            payload: chatbot.speech.started
          }
        ]
      }

      bot.setPersistentMenu([persistentMenu])
      // Configure events
      const eventArgs = [
        bot,
        () => {
          const chatbotUpdated = this.globalState[chatbotId]
          return {
            version: 'v2',
            messages: chatbotUpdated.speech.messages,
            actions: chatbotUpdated.speech.actions
          }
        },
        botData,
        () => {
          const chatbotUpdated = this.globalState[chatbotId]

          return {
            witServerAccessToken: chatbotUpdated.settings.wit.serverAccessToken,
            defaultErrorMessage: chatbotUpdated.settings.default.errorMessage
          }
        }
      ]
      bot.on('error', (err) => {
        console.error(`Bot[${chatbot.id}] bot interface error: `.red, err)
      })
      bot.on('message', botEvents.message(...eventArgs))
      bot.on('postback', botEvents.postback(...eventArgs))

      return { bot, botData, id: chatbotId }
    }))
  }
}

export default Factory
