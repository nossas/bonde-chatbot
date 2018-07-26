import gql from 'graphql-tag'

export default gql`
mutation updateFacebookBotCampaignActivists(
  $facebookBotCampaignActivistId: Int!
  $received: Boolean!
  $log: Json!
) {
  updateFacebookBotCampaignActivists(input: {
    facebookBotCampaignActivistId: $facebookBotCampaignActivistId,
    ctxReceived: $received,
    ctxLog: $log
  }) {
    facebookBotCampaignActivists {
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
