import Bot from 'messenger-bot'
import gql from 'graphql-tag'
import { client as GraphqlAPI } from '../graphql'
import * as botConfig from '../bot/config'


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
              workflows {
                edges {
                  node {
                    id
                    name
                    lastLevel
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


class Factory {

  async fabricate () {
    try {
      // Buscar todos as comunidades e suas configurações
      const result = await fetchBots()
      const { data: { userCommunities }} = result
      
      return userCommunities.edges.filter(({ node }) => !!node.chatbotSettings).map(({ node }) => {
        const {
          id,
          appSecret,
          validationToken,
          pageAccessToken,
          data: dataRaw,
          workflows: { edges: workflows }
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

        return { id, bot, endpoint, botData }
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export default Factory