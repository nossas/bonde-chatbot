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
    console.info('--- receiving notification of subscription!'.blue)
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
        console.error(`--- ${chatbot.name} has no settings or campaigns!`.red)
      }
    })

    if (updateRouting) {
      console.info('--- change routing on app server.'.blue)
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
    console.error('--- receiving error of subscription: ', err)
  }

  handleNextSettings ({ name, chatbot_settings: chatbotSettings }) {
    // so far only expected to set up Facebook
    const { settings } = chatbotSettings[0]
    return {
      app_secret: settings.messenger_app_secret,
      token: settings.messenger_page_access_token,
      verify: settings.messenger_validation_token
    }
  }

  handleNextSpeech ({ name, chatbot_campaigns: chatbotCampaigns }) {
    // TODO: Criar uma seleção configuravel
    const { speech, campaign } = writeSpeech(
      JSON.parse(chatbotCampaigns[0].diagram)
    )
    // Change speech list to messages object
    const messages = {}
    speech.forEach(node => {
      Object.keys(node).forEach(key => {
        messages[key] = node[key]
      })
    })
    // TODO: Criar flag para identificar get_started
    return {
      messages,
      started: campaign.nodes[0].id
    }
  }

  fabricate () {
    const chatbots = Object.keys(this.globalState)
    return Promise.all(chatbots.map(chatbotId => {
      const chatbot = this.globalState[chatbotId]
      // Validate and settings messenger-bot
      const settings = botConfig.validate(chatbot.settings)
      const bot = new Bot(settings)
      // TODO: configure facebook settings data
      const data = {
        pressure: {
          slug: 'abortemesseabsurdo',
          widget_id: 21044
        },
        image_url: 'https://s3.amazonaws.com/chatbox-beta/pec29/share-pec29.jpg',
        name: 'BETA',
        m_me: 'https://m.me/beta.feminista'
      }
      const botData = { ...settings, data }

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
          const chatbot = this.globalState[chatbotId]
          return { version: 'v2', messages: chatbot.speech.messages }
        },
        botData
      ]
      bot.on('error', (err) => {
        console.error(`--- ${chatbot.name} bot error: `.red, err)
      })
      bot.on('message', botEvents.message(...eventArgs))
      bot.on('postback', botEvents.postback(...eventArgs))

      return { bot, botData, id: chatbotId }
    }))
  }
}

/*
[PERSISTENT_MENU]: {
  locale: 'default',
  composer_input_disabled: false,
  call_to_actions: [
    {
      title: 'Parem a PEC 29!',
      type: 'postback',
      payload: V2_QUICK_REPLY_O_1
    },
    {
      title: 'Outras Ações',
      type: 'postback',
      payload: V2_QUICK_REPLY_ACT
    },
    {
      title: 'Mais sobre a Beta',
      type: 'postback',
      payload: V2_QUICK_REPLY_MAIS
    }
  ]
},

[GET_STARTED]: {
  text: botSpeeches.messages.I_AM_BETA,
  quick_replies: [
    quickReply(V2_QUICK_REPLY_A, botSpeeches.buttonTexts.LETS_GO)
  ]
}
*/

export default Factory
