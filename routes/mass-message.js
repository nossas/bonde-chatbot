import express from 'express'
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

export default router
