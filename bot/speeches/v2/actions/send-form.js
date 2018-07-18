import 'colors'
import axios from 'axios'
import {
  client as graphqlClient
} from '../../../../graphql'
import * as graphqlQueries from '../../../../graphql/queries'

export default ({ payload }) => graphqlClient.query({
    fetchPolicy: 'network-only',
    query: graphqlQueries.fetchFacebookActivistInteractions,
    variables: {
      first: 5,
      fbContextRecipientId: payload.sender.id
    }
  })
  .then(({
    data: {
      allFacebookActivistInteractions: {
        nodes
      }
    }
  }) => {
    const [registeredInteraction, cityInteraction, emailInteraction, surnameInteraction, nameInteraction] = nodes //JSON.parse(nodes[0].interaction)
    const name = JSON.parse(nameInteraction.interaction)
    const surname = JSON.parse(surnameInteraction.interaction)
    const email = JSON.parse(emailInteraction.interaction)
    const city = JSON.parse(cityInteraction.interaction)
    const registerd = JSON.parse(registeredInteraction.interaction)
    
    //setup the widget info
    const moblizationtId = 936
    const widget_id = 15693
    const fields = JSON.stringify([{
        label: "Nome",
        value: name.payload.message.text
      },
      {
        label: "Sobrenome",
        value: surname.payload.message.text
      },
      {
        label: "Email",
        value: email.payload.message.text
      },
      {
        label: "Cidade",
        value: city.payload.message.text
      },
      {
        label: "Você registrou o caso? Sim ou não",
        value: registerd.payload.message.text
      }
    ])

    
    const url = `${process.env.API_URL}/mobilizations/${moblizationtId}/form_entries`
    const payload = {
      form_entry: {
        widget_id,
        fields
      }
    }

    axios.defaults.headers.common['access-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VyX2lkIjo4NywiaWF0IjoxNTAzNTIwNjc5LCJleHAiOjE1Nzc4MzY4MDAsImF1ZCI6InBvc3RncmFwaHFsIiwiaXNzIjoicG9zdGdyYXBocWwifQ.MV2gK57D8mVzEqPRXP5HzulhlFJbQ88muZ-Bv6c96LY'
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post(url, payload)
      .then(function (response) {
        console.log("Registrado!");
      })
      .catch(function (error) {
        console.log(error);
      })

  })
  .catch(err => Promise.reject(`Activist interaction error: ${JSON.stringify(err)}`.red))

/* export default ({ profile, botData, userInfo }) => {
  const [name, surname, email, city, registered] = userInfo

  const moblizationtId = 936
  const  widget_id = 15692 
  const fields = JSON.stringify([
    {
      label: "Nome",
      value: name
    },
    {
      label: "Sobrenome",
      value: surname
    },
    {
      label: "Email",
      value: email
    }
  ])

  const headers = {
    'Content-Type': 'application/json',
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VyX2lkIjo4NywiaWF0IjoxNTAzNTIwNjc5LCJleHAiOjE1Nzc4MzY4MDAsImF1ZCI6InBvc3RncmFwaHFsIiwiaXNzIjoicG9zdGdyYXBocWwifQ.MV2gK57D8mVzEqPRXP5HzulhlFJbQ88muZ-Bv6c96LY'
  }

  const url = "https://api-v1.staging.bonde.org/mobilizations/936/form_entries"
  const payload = { form_entry: { widget_id, fields } }
  
  axios.defaults.headers.common['access-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VyX2lkIjo4NywiaWF0IjoxNTAzNTIwNjc5LCJleHAiOjE1Nzc4MzY4MDAsImF1ZCI6InBvc3RncmFwaHFsIiwiaXNzIjoicG9zdGdyYXBocWwifQ.MV2gK57D8mVzEqPRXP5HzulhlFJbQ88muZ-Bv6c96LY'
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.post(url, payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })

  
} */