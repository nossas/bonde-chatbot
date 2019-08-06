import { client as graphqlClient } from '../../../../graphql'
import * as graphqlQueries from '../../../../graphql/queries'
import * as botSkills from '../../../skills'

//
// Quick reply actions (EXAMPLE)
//
// @param [required] speech {Object} Factory specified bot's speech object
// @param [required] action {String} Quick reply action key received by Facebook Messenger webhook
// @param [required] payload {Object} Facebook messenger API received request payload object
// @param [required] profile {Object} User's profile object received by Facebook Messenger API
// @param [required] botData {Object} Bot's config data object
// @return {Boolean} Tells if any action was dispatched
//
export default ({ speech, action, payload, profile, botData }) => {
  let dispatched = false

  switch (action) {
    //
    // Execute an action based on quick reply
    //
    case speech.actions.QUICK_REPLY_H:
      graphqlClient.query({
        fetchPolicy: 'network-only',
        query: graphqlQueries.fetchActivistLastInteraction,
        variables: { last: 2, recipientId: payload.sender.id }
      })
        .then(({ data: { activistInteractions: { interactions } } }) => {
          const [last] = interactions
          const interaction = JSON.parse(last.interaction)

          Promise.resolve(botSkills.pressure.send({ profile, botData, interaction }))
        })
        .catch(err => Promise.reject(`Speeches Quick Reply Error: ${JSON.stringify(err)}`.red))
      dispatched = true
      break
  }

  return dispatched
}
