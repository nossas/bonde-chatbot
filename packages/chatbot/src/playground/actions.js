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

export const press = (variables) => {
  const pressMutation = gql`
    mutation Press ($widget_id: Int!, $activist: activists_insert_input!) {
      insert_activist_pressures (
          objects: {
            widget_id: $widget_id,
            activist: {
              data: $activist,
              on_conflict: {
                constraint: activists_email_key,
                update_columns: [
                  name,
                  first_name,
                  last_name
                ]
              },
            }
          }
      ) {
        returning {
          id
          activist {
            id
            name
            first_name
            last_name
            email
          }
        }
      }
    }
  `
  return GraphQLAPI.mutate({ mutation: pressMutation, variables })
}
