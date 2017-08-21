import express from 'express'
import axios from 'axios'
import _ from 'underscore'
import dateformat from 'dateformat'
import { isAuthenticated } from './middlewares'
import { client as graphqlClient } from '../graphql'
import * as graphqlQueries from '../graphql/queries'

const router = express.Router()

router.get('/', isAuthenticated, (req, res) => {
  const fetchBotConfigurations = graphqlClient.query({
    fetchPolicy: 'network-only',
    query: graphqlQueries.fetchBotConfigurations
  })
  const fetchBotRecipients = graphqlClient.query({
    fetchPolicy: 'network-only',
    query: graphqlQueries.fetchBotRecipients
  })

  Promise.all([fetchBotConfigurations, fetchBotRecipients])
    .then(values => {
      const [botConfiguration, botRecipients] = values
      const { data: { configs: { bots: botsRaw } } } = botConfiguration
      const { data: { botRecipients: { recipients: recipientsRaw } } } = botRecipients
      const date = date => dateformat(date, 'dd/mm/yyyy')
      const time = date => dateformat(date, 'HH:MM')
      const createAt = value => `${date(value)} às ${time(value)}`

      const bots = botsRaw.map(bot => ({
        ...bot,
        data: JSON.parse(bot.data),
        createdAt: createAt(bot.createdAt)
      }))

      const recipients = recipientsRaw.map(recipient => {
        const interaction = JSON.parse(recipient.interaction)
        return {
          ...recipient,
          interaction,
          profile: interaction.profile,
          bot: JSON.parse(recipient.facebookBotConfiguration),
          createdAt: createAt(recipient.createdAt)
        }
      })
      const appDomain = process.env.APP_DOMAIN

      res.render('./mass-message/index', { bots, recipients, dateformat, appDomain })
    })
    .catch(err => console.error(`${JSON.stringify(err)}`.red))
})

router.post('/send', (req, res) => {
  const { selectedRecipients, message } = req.body

  const grouping = _
    .chain(selectedRecipients)
    .groupBy('facebookBotConfigurationId')
    .value()

  const promises = _.toArray(_.mapObject(grouping, (value, key) => {
    const endpoint = `${process.env.APP_DOMAIN}/${key}/mass-message/send`
    const recipients = value.map(value => value.fbContextRecipientId)
    return axios.post(endpoint, { recipients, message })
  }))

  Promise.all(promises)
    .then(() => { res.end(JSON.stringify({ status: 'ok' })) })
    .catch(err => console.error(`${JSON.stringify(err)}`.red))
})

export default router
