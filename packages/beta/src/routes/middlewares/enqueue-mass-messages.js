import apm from 'elastic-apm-node/start'
import { client as graphqlClient } from '../../graphql'
import * as graphqlQueries from '../../graphql/queries'
import * as graphqlMutations from '../../graphql/mutations'

export default queue => (req, res) => {
  const payload = req.body
  console.log({queue})
  console.log('entrando na fila')
  console.log({env: process.env})
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

    console.log({payload})
    // deixar essas chamadas para o graphql mais separadas, usando async/await
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
        console.log('mutate ok')
        graphqlClient.query({
          query: graphqlQueries.fetchFacebookBotCampaignActivistsByCampaignId(),
          variables: { campaignId: campaign.id }
        })
          .then(({ loading, data: { query: { activists } } }) => {
            console.log('query ok')
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
          .catch(err => apm.captureError(err))
      })
      .catch(err => apm.captureError(err))

    res.end(JSON.stringify({ status: 'ok' }))
  } else {
    res.end(JSON.stringify({ status: 'no payload' }))
  }
}
