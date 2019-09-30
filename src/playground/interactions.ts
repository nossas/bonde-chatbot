import gql from 'graphql-tag'
import { client as GraphQLAPI } from './graphql'

export interface ChatbotInteractionOpts {
  recipientId: number,
  senderId: number,
  chatbotId: number,
  interaction: any
}

export const insert = async (opts: ChatbotInteractionOpts): Promise => {
  const { recipientId, senderId, chatbotId, interaction } = opts

  const insertChatbotInterationMutation = gql`
    mutation CreateChatbotInteraction ($chatbotInteraction: chatbot_interactions_insert_input!) {
      insert_chatbot_interactions(objects: [$chatbotInteraction]) {
        returning {
          context_recipient_id
          context_sender_id
          interaction
          chatbot_id
        }
      }
    }
  `

  return GraphQLAPI.mutate({
    mutation: insertChatbotInterationMutation,
    variables: {
      chatbotInteraction: {
        chatbot_id: chatbotId,
        context_recipient_id: recipientId,
        context_sender_id: senderId,
        interaction: JSON.stringify(interaction)
      }
    }
  })
}

export interface ChatbotLastInteractionOpts {
  chatbotId: number,
  recipientId: string
}

export const lastInteraction = async (opts: ChatbotLastInteractionOpts): Promise => {
  const { chatbotId, recipientId } = opts

  const chatbotInteractionsQuery = gql`
    query LastChatbotInteraction ($chatbotId: Int!, $recipientId: String!) {
      chatbot_interactions (
        where: {
          context_recipient_id: { _eq: $recipientId },
          chatbot_id: { _eq: $chatbotId }
        },
        limit: 1,
        order_by: { created_at: desc }
      ) {
        context_recipient_id
        context_sender_id
        interaction
        chatbot_id
        created_at
      }
    }
  `

  return GraphQLAPI
    .query({
      query: chatbotInteractionsQuery,
      variables: { chatbotId, recipientId }
    })
    .then(({ data }) => {
      return Promise.resolve(data.chatbot_interactions)
    })
}
