import gql from 'graphql-tag'

export default gql`
query fetchActivistsLastInteraction($facebookBotConfigurationId: Int) {
  activistsLastInteraction: allActivistFacebookBotInteractions(
    condition: {
      facebookBotConfigurationId: $facebookBotConfigurationId
    }
  ) {
    activists: nodes {
      id
      activistId
      communityId
      fbContextRecipientId
      fbContextSenderId
      interaction
      facebookBotConfiguration
    }
  }
}
`
