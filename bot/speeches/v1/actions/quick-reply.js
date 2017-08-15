import { client as graphqlClient } from '../../../../graphql'
import * as graphqlQueries from '../../../../graphql/queries'
import * as botSkills from '../../../skills'

export default ({ speech, action, payload, profile, botData }) => {
  //
  // Quick reply actions
  //
  switch (action) {
    case speech.actions.QUICK_REPLY_H:
      graphqlClient.query({
        fetchPolicy: 'network-only',
        query: graphqlQueries.fetchActivistLastInteraction,
        variables: { last: 2, recipientId: payload.sender.id }
      })
        .then(({ data: { activistInteractions: { interactions } } }) => {
          const [last] = interactions
          const interaction = JSON.parse(last.interaction)

          botSkills.pressure.send({ profile, botData, interaction })
        })
        .catch(error => console.error(`${error}`.red))
      break;
  }
}
