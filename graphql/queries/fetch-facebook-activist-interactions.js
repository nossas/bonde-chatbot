import gql from 'graphql-tag'

export default gql`
query fetchFacebookActivistInteractions(
  $first: Int = 1
  $fbContextRecipientId: String!
) {
  allFacebookActivistInteractions (
      first: $first
      condition: { fbContextRecipientId: $fbContextRecipientId }
      orderBy: ID_DESC
  ) {
      nodes {
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
