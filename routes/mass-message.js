import express from 'express'
import request from 'request'
import dateformat from 'dateformat'
import { isAuthenticated } from './middlewares'
import { client as graphqlClient } from '../graphql'
import * as graphqlQueries from '../graphql/queries'

const router = express.Router()

router.get('/', (req, res) => {
  graphqlClient.query({ query: graphqlQueries.fetchBotRecipients })
    .then(({ data: { botRecipients: { recipients } } }) => {
      res.render('./mass-message/index', { recipients, dateformat })
    })
    .catch(error => console.log(`${error}`.red))
})

router.post('/send', (req, res) => {
  const { selected_recipients: selectedRecipients, message } = req.body

  const promises = Object.keys(selectedRecipients).map(key => {
    const id = String(key).replace(/\D/g, '')
    const endpoint = `${process.env.APP_DOMAIN}/${id}/mass-message/send`
    const recipients = selectedRecipients[key]
    return request.post(endpoint, { form: { recipients, message } })
  })

  Promise.all(promises).then(result => {
    res.redirect('/mass-message')
  })
})

export default router
