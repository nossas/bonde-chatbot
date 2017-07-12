import gql from 'graphql-tag'

export default gql`
query fetchActivistsLastInteraction($facebookBotConfigurationId: Int) {
  activistsLastInteraction: allActivistFacebookBotInteractions(
    condition: {
      facebookBotConfigurationId: $facebookBotConfigurationId
    }
    orderBy: FACEBOOK_BOT_CONFIGURATION_ID_ASC
  ) {
    activists: nodes {
      id
      activistId
      communityId
      fbContextRecipientId
      fbContextSenderId
      interaction
      facebookBotConfiguration
      createdAt
    }
  }
}
`
