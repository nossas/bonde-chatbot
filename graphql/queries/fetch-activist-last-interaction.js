import gql from 'graphql-tag'

export default gql`
query fetchActivistLastInteraction($recipientId: String!) {
  activistInteractions: allFacebookActivistInteractions(
    condition: {
      fbContextRecipientId: $recipientId
    },
    orderBy: ID_ASC,
    last: 1
  ) {
    interactions: nodes {
      id
      activistId
      facebookBotConfigurationId
      fbContextRecipientId
      fbContextSenderId
      interaction
      createdAt
      updatedAt
    }
  }
}
`
