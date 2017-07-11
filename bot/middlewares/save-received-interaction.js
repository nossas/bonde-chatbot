import 'colors'
import escapeJSON from 'escape-json-node'
import { client as graphqlClient } from '../../graphql'
import * as graphqlMutations from '../../graphql/mutations'

export default bot => (req, res, next) => {
  //
  // Snippet from `messenger-bot` package to identify
  // the received message via payload
  //
  const entries = req.body.entry

  entries.forEach((entry) => {
    const events = entry.messaging

    events.forEach((event) => {
      if (event.message) {
        if (!event.message.is_echo) {
          bot.getProfile(event.sender.id, (err, profile) => {
            if (err) {
              console.log(JSON.stringify(err).red)
              return next()
            }

            //
            // In this case, the `sender.id` is the user's recipient.id
            // and, the `recipient.id` is the page's recipient.id
            //
            const interaction = {
              facebook_bot_configuration_id: Number(req.originalUrl.replace(/\D/g, '')),
              fb_context_recipient_id: event.sender.id,
              fb_context_sender_id: event.recipient.id,
              interaction: {
                profile,
                event
              }
            }
            graphqlClient.mutate({
              mutation: graphqlMutations.createBotInteraction,
              variables: { interaction: escapeJSON(JSON.stringify(interaction)) }
            })
              .then(data => data)
              .catch(error => console.log(`${error}`.red))
          })
        }
      }
    })
  })
  next()
}
