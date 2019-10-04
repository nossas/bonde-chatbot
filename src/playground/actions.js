import gql from 'graphql-tag'
import { client as GraphQLAPI } from './graphql'

export const subscribeChatbots = () => {
  const chatbotsQuery = gql`
    subscription Chatbots {
      chatbots {
        id
        name
        community_id
        created_at
        updated_at
        persistent_menu
        chatbot_campaigns (where: { status: { _eq: "active" } }, order_by: { updated_at: asc }) {
          id
          diagram
          name
          status
          created_at
          updated_at
          get_started
        }
        chatbot_settings (where: { channel: { _eq: "facebook" } }) {
          id
          channel
          settings
        }
      }
    }
  `

  return GraphQLAPI.subscribe({ query: chatbotsQuery })
}
