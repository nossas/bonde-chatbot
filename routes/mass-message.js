import express from 'express'
import request from 'request'
import dateformat from 'dateformat'
import { isAuthenticated } from './middlewares'
import { client as graphqlClient } from '../graphql'
import * as graphqlQueries from '../graphql/queries'

const router = express.Router()

router.get('/', isAuthenticated, (req, res) => {
  graphqlClient.query({ query: graphqlQueries.fetchActivistsLastInteraction })
    .then(({ data: { activistsLastInteraction: { activists } } }) => {
      res.render('./mass-message/index', { activists, dateformat })
    })
    .catch(error => console.log(`${error}`.red))
})

router.post('/send', (req, res) => {
  const { selected_activists: selectedActivists, message } = req.body

  const promises = Object.keys(selectedActivists).map(key => {
    const id = String(key).replace(/\D/g, '')
    const endpoint = `${process.env.APP_DOMAIN}/${id}/mass-message/send`
    const activists = selectedActivists[key]
    return request.post(endpoint, { form: { activists, message } })
  })

  Promise.all(promises).then(result => {
    res.redirect('/mass-message')
  })
})

export default router
