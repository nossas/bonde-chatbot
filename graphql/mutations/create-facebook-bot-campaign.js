import gql from 'graphql-tag'

export default gql`
mutation createFacebookBotCampaign(
  $facebookBotConfigurationId: Int!
  $name: String!
  $segmentFilters: JSON!
  $totalImpactedActivists: Int!
) {
  query: createFacebookBotCampaign(input: {
    campaign: {
      facebookBotConfigurationId: $facebookBotConfigurationId,
      name: $name,
      segmentFilters: $segmentFilters,
      totalImpactedActivists: $totalImpactedActivists
    }
  }) {
    campaign: facebookBotCampaigns {
      id
      facebookBotConfigurationId
      name
      segmentFilters
      totalImpactedActivists
      createdAt
      updatedAt
    }
  }
}
`
