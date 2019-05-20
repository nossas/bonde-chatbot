import 'colors'
import axios from 'axios'
import { client as graphqlClient } from '../../../../graphql'
import * as graphqlQueries from '../../../../graphql/queries'

export default ({ payload }) =>
  graphqlClient
    .query({
      fetchPolicy: 'network-only',
      query: graphqlQueries.fetchFacebookActivistInteractions,
      variables: {
        first: 3,
        fbContextRecipientId: payload.sender.id
      }
    })
    .then(({ data: { allFacebookActivistInteractions: { nodes } } }) => {
      const [emailInteraction, surnameInteraction, nameInteraction] = nodes
      const name = JSON.parse(nameInteraction.interaction)
      const surname = JSON.parse(surnameInteraction.interaction)
      const email = JSON.parse(emailInteraction.interaction)

      // setup the widget info
      const moblizationtId = process.env.FORM_MOBILIZATION_ID || 0
      const widget_id = process.env.FORM_WIDGET_ID || 0

      const fields = JSON.stringify([
        {
          label: 'Nome',
          value: name.payload.message.text
        },
        {
          label: 'Sobrenome',
          value: surname.payload.message.text
        },
        {
          label: 'Email',
          value: email.payload.message.text
        }
      ])
      console.log(fields)
      const url = `${
        process.env.API_URL
      }/mobilizations/${moblizationtId}/form_entries`
      const payload = {
        form_entry: {
          widget_id,
          fields
        }
      }

      axios.defaults.headers.common['access-token'] = process.env.JWT_TOKEN || 'jwt-token-not-defined'
      axios.defaults.headers.post['Content-Type'] = 'application/json'
      axios
        .post(url, payload)
        .then(function (response) {
          console.log('Registrado!')
        })
        .catch(function (error) {
          console.log(error, payload)
        })
    })
    .catch(err =>
      Promise.reject(`Activist interaction error: ${JSON.stringify(err)}`.red)
    )
