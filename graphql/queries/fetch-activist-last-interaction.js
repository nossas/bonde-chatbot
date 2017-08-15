import gql from 'graphql-tag'

export default gql`
query fetchActivistLastInteraction($last: Int!, $recipientId: String!) {
  activistInteractions: allFacebookActivistInteractions(
    condition: {
      fbContextRecipientId: $recipientId
    },
    orderBy: ID_ASC,
    last: $last
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
