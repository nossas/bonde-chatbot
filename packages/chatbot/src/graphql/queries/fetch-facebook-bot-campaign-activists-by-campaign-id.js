import gql from 'graphql-tag'

//
// @param Object({ extraFields: Array })
//
export default ({ extraFields = [] } = { extraFields: [] }) => gql`
query fetchFacebookBotCampaignActivistsByCampaignId($campaignId: Int!) {
  query: getFacebookBotCampaignActivistsByCampaignId(campaignId: $campaignId) {
    totalCount
    activists: nodes {
      id
      facebookBotActivistId
      fbContextRecipientId
      ${extraFields.join(' ')}
    }
  }
}
`
