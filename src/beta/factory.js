import 'colors'
import Bot from 'messenger-bot'
import gql from 'graphql-tag'
import { client as GraphqlAPI } from '../graphql'
import * as botConfig from '../bot/config'
import * as botEvents from '../bot/events'
import { writeSpeech } from './speech'

export const fetchBots = () => {
  // Recupera todos os chatbots relacionado a uma comunidade, e
  // seus respectivos dados de configuração
  //
  // TODO: configurar comunidade
  const chatbotsQuery = gql`
    query Chatbot {
      chatbots {
        id
        name
        community_id
        created_at
        updated_at
        chatbot_settings (where: { channel: { _eq: "facebook" } }) {
          id
          channel
          settings
        }
      }
    }
  `
  return GraphqlAPI.query({ query: chatbotsQuery })
}

export const fetchMessages = ({ chatbotId }) => {
  const campaignsQuery = gql`
    query ChatbotCampaigns($chatbotId: Int!) {
      chatbot_campaigns(where: { chatbot_id: { _eq: $chatbotId } }) {
        id
        name
        prefix
        diagram
        status
        chatbot_id
        created_at
        updated_at
      }
    }
  `
  return GraphqlAPI.query({ query: campaignsQuery, variables: { chatbotId } })
}

class Factory {
  async fabricate () {
    try {
      // Buscar todos as comunidades e suas configurações
      const { data: { chatbots } } = await fetchBots()

      return await Promise.all(chatbots.map(async (chatbot) => {
        const { settings } = chatbot.chatbot_settings[0]
        // TODO: Pensar onde deve ser configurado esses dados
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

        // Valida e cria configuração para o messagen-bot
        const config = botConfig.validate({
          app_secret: settings.messenger_app_secret,
          token: settings.messenger_page_access_token,
          verify: settings.messenger_validation_token
        })

        const bot = new Bot(config)
        const endpoint = `/${data.endpoint || chatbot.id}`

        // TODO: transformar em subscription
        // todo momento que precisar de uma atualização de mensagens,
        // o modelo utilizado deve ser recarregado.

        // TODO: Criar uma seleção configuravel
        const { data: { chatbot_campaigns } } = await fetchMessages({ chatbotId: chatbot.id })

        // TODO: Precisa entender melhor o contexto de múltiplas campanhas
        const conversation = JSON.parse(chatbot_campaigns[0].diagram)
        const speech = writeSpeech(conversation)

        // Transforma a lista de mensagens em um objeto, para melhor interação
        // na troca de mensagens
        const messages = {}
        speech.forEach(node => {
          Object.keys(node).forEach(key => {
            messages[key] = node[key]
          })
        })
        const eventArgs = [bot, { version: 'v2', messages }, botData]

        // Configure bot events
        // TODO: criar flag para identificar campanha get_started
        bot.setGetStartedButton({ payload: conversation.nodes[0].id })
        // TODO: criar configuração de menu persistent
        // buscar a primeira mensagem de cada campanha que for configurada
        // como menu
        /* bot.setPersistentMenu([speech.messages.PERSISTENT_MENU]) */
        bot.on('error', (err) => {
          console.error(`Beta handle error ${err.message}`.red)
        })
        bot.on('message', botEvents.message(...eventArgs))
        bot.on('postback', botEvents.postback(...eventArgs))

        return { id: chatbot.id, bot, endpoint, botData }
      }))
    } catch (err) {
      console.error(err)
    }
  }
}

export default Factory
