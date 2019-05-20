import 'colors'
import Bot from 'messenger-bot'
import gql from 'graphql-tag'
import { client as GraphqlAPI } from '../graphql'
import * as botConfig from '../bot/config'
import * as botEvents from '../bot/events'
import { writeSpeech } from './speech'


export const fetchBots = () => {
  // Existe apenas uma configuração por comunidade
  // essa função retorna todas as configurações das comunidades
  // relacionada ao usuário autenticado pelo token informado na
  // variavel de ambiente JWT_TOKEN
  const chatbotSettingsQuery = gql`
    query UserCommunities {
      userCommunities {
        edges {
          node {
            chatbotSettings {
              id
              appSecret
              validationToken
              pageAccessToken
              data
              campaigns {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  return GraphqlAPI.query({ query: chatbotSettingsQuery })
}

export const fetchMessages = ({ campaignID }) => {
  const messagesQuery = gql`
    query Conversation ($id: Int!) {
      campaigns(id: $id) {
        edges {
          node {
            id
            messages {
              edges {
                node {
                  id,
                  text,
                  action,
                  kind
                  children {
                    edges {
                      node {
                        id,
                        text,
                        action,
                        kind
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  return GraphqlAPI.query({ query: messagesQuery, variables: { id: campaignID } })
}


class Factory {

  async fabricate () {
    try {
      // Buscar todos as comunidades e suas configurações
      const communitiesResult = await fetchBots()
      const { data: { userCommunities }} = communitiesResult
      const chatbotSettings = userCommunities.edges.filter(({ node }) => !!node.chatbotSettings)
      
      return await Promise.all(chatbotSettings.map(async ({ node }) => {
        const {
          id,
          appSecret,
          validationToken,
          pageAccessToken,
          data: dataRaw,
          campaigns: { edges: campaigns }
        } = node.chatbotSettings

        // TODO: Mover esse parse para API Graphene
        const data = JSON.parse(dataRaw)
        const botData = { ...node.chatbotSettings, data }
        // Valida e cria configuração para o messagen-bot
        const config = botConfig.validate({
          app_secret: appSecret,
          token: pageAccessToken,
          verify: validationToken
        })

        const bot = new Bot(config)
        const endpoint = `/${data.endpoint || id}`

        // TODO: Criar uma seleção configuravel
        const campaign = campaigns[0].node
        const { data: { campaigns: { edges }}} = await fetchMessages({ campaignID: campaign.id })
        const conversation = edges[0].node.messages.edges
        const speech = writeSpeech(conversation)
        const messages = {}
        speech.forEach(node => {
          Object.keys(node).forEach(key => {
            messages[key] = node[key]
          })
        })

        const eventArgs = [bot, { version: 'v2', messages }, botData]

        // Configure bot events
        bot.setGetStartedButton({ payload: conversation[0].node.action })
        bot.on('error', (err) => {
          console.error(`Beta handle error ${err.message}`.red)
        })
        bot.on('message', botEvents.message(...eventArgs))
        bot.on('postback', botEvents.postback(...eventArgs))

        return { id, bot, endpoint, botData }
      }))
    } catch (err) {
      console.error(err)
    }
  }
}

export default Factory