import { client as graphqlClient } from '../../graphql'
import * as graphqlQueries from '../../graphql/queries'

export default queue => (req, res) => {
  const payload = req.body

  if (payload) {
    const {
      text,
      quickReplyRedirect,
      quickReplyButtonText,
      message: m,
      quickReply: qr,
      dateIntervalStart: start,
      dateIntervalEnd: end
    } = payload

    const isOnlyMessage         =  m && !qr && !start && !end
    const isOnlyQReply          = !m &&  qr && !start && !end
    const isOnlyDateInterval    = !m && !qr &&  start &&  end
    const isQReplyDateInterval  = !m &&  qr &&  start &&  end
    const isMessageDateInterval =  m && !qr &&  start &&  end
    const isMessageQReply       =  m &&  qr && !start && !end
    const isAll                 =  m &&  qr &&  start &&  end

    const executeQuery = (query, variables) => {
      graphqlClient.query({ query: query(), variables })
        .then(({ loading, data: { query: { activists } } }) => {
          activists.forEach(({ fbContextRecipientId }) => {
            queue.add({
              fbContextRecipientId,
              text,
              quickReplyRedirect,
              quickReplyButtonText
            })
          })
        })
        .catch(err => console.error(err))
    }

    const message = m
    const quickReply = qr
    const dateIntervalStart = start
    const dateIntervalEnd = end

    if (isOnlyDateInterval) {
      const variables = { dateIntervalStart, dateIntervalEnd }
      executeQuery(graphqlQueries.fetchFacebookActivistsByDateInterval, variables)
    }
    else if (isOnlyQReply) {
      const variables = { quickReply }
      executeQuery(graphqlQueries.fetchFacebookActivistsByQuickReply, variables)
    }
    else if (isOnlyMessage) {
      const variables = { message }
      executeQuery(graphqlQueries.fetchFacebookActivistsByMessage, variables)
    }
    else if (isQReplyDateInterval) {
      const variables = { quickReply, dateIntervalStart, dateIntervalEnd }
      executeQuery(graphqlQueries.fetchFacebookActivistsByQuickReplyDateInterval, variables)
    }
    else if (isMessageDateInterval) {
      const variables = { message, dateIntervalStart, dateIntervalEnd }
      executeQuery(graphqlQueries.fetchFacebookActivistsByMessageDateInterval, variables)
    }
    else if (isMessageQReply) {
      const variables = { message, quickReply }
      executeQuery(graphqlQueries.fetchFacebookActivistsByMessageQuickReply, variables)
    }
    else if (isAll) {
      const variables = { message, quickReply, dateIntervalStart, dateIntervalEnd }
      executeQuery(graphqlQueries.fetchFacebookActivistsByMessageQuickReplyDateInterval, variables)
    }

    res.end(JSON.stringify({ status: 'ok' }))
  } else {
    res.end(JSON.stringify({ status: 'no payload' }))
  }
}
