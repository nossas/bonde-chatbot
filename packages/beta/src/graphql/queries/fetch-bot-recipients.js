import gql from 'graphql-tag'

export default gql`
query fetchBotRecipients($facebookBotConfigurationId: Int) {
  botRecipients: allBotRecipients(
    condition: {
      facebookBotConfigurationId: $facebookBotConfigurationId
    }
    orderBy: FACEBOOK_BOT_CONFIGURATION_ID_ASC
  ) {
    recipients: nodes {
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
