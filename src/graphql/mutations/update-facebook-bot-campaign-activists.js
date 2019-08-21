import gql from 'graphql-tag'

export default gql`
mutation updateFacebookBotCampaignActivists(
  $facebookBotCampaignActivistId: Int!
  $received: Boolean!
  $log: JSON!
) {
  updateFacebookBotCampaignActivists(input: {
    facebookBotCampaignActivistId: $facebookBotCampaignActivistId,
    ctxReceived: $received,
    ctxLog: $log
  }) {
    facebookBotCampaignActivist {
      id
      facebookBotCampaignId
      facebookBotActivistId
      received
      log
      createdAt
      updatedAt
    }
  }
}
`
