import { client as graphqlClient } from '../../graphql'
import * as graphqlQueries from '../../graphql/queries'
import * as graphqlMutations from '../../graphql/mutations'

export default queue => (req, res) => {
  const payload = req.body

  if (payload) {
    const {
      text,
      quickReplyRedirect,
      quickReplyButtonText,
      facebookBotConfigurationId,
      name,
      totalImpactedActivists,
      message,
      quickReply,
      dateIntervalStart,
      dateIntervalEnd,
      campaignExclusionIds,
      campaignInclusionIds
    } = payload

    const segmentFilters = JSON.stringify({
      message,
      quickReply,
      dateIntervalStart,
      dateIntervalEnd,
      campaignExclusionIds,
      campaignInclusionIds
    })

    graphqlClient.mutate({
      mutation: graphqlMutations.createFacebookBotCampaign,
      variables: {
        facebookBotConfigurationId,
        name,
        totalImpactedActivists,
        segmentFilters
      }
    })
      .then(({ data: { query: { campaign } } }) => {
        graphqlClient.query({
          query: graphqlQueries.fetchFacebookBotCampaignActivistsByCampaignId(),
          variables: { campaignId: campaign.id }
        })
          .then(({ loading, data: { query: { activists } } }) => {
            activists.forEach(({
                id: facebookBotCampaignActivistId,
                facebookBotActivistId,
                fbContextRecipientId
              }) => {
              queue.add({
                campaign,
                facebookBotCampaignActivistId,
                facebookBotActivistId,
                fbContextRecipientId,
                text,
                quickReplyRedirect,
                quickReplyButtonText
              })
            })
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))

    res.end(JSON.stringify({ status: 'ok' }))
  } else {
    res.end(JSON.stringify({ status: 'no payload' }))
  }
}
