import gql from 'graphql-tag'

export default gql`
query fetchActivistLastInteraction($recipientId: String!) {
  activistsLastInteraction: allActivistFacebookBotInteractions(
    condition: {
      fbContextRecipientId: $recipientId
    }
    last: 1
  ) {
    activists: nodes {
      id
      activistId
      communityId
      facebookBotConfigurationId
      fbContextRecipientId
      fbContextSenderId
      interaction
      facebookBotConfiguration
      createdAt
    }
  }
}
`
