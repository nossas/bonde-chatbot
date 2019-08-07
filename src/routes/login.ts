import express from 'express'
import { client as graphqlClient } from '../graphql'
import * as graphqlQueries from '../graphql/queries'
import * as graphqlMutations from '../graphql/mutations'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('./login/index', { data: req.session.login })
})

router.post('/authenticate', (req, res) => {
  const { email, password } = req.body

  graphqlClient.mutate({
    mutation: graphqlMutations.authenticate,
    variables: { email, password }
  })
    .then(({ data: { authenticate: { jwtToken } } }) => {
      if (jwtToken) {
        req.session.login = { email, password, token: jwtToken }
        res.redirect('/mass-message')
      } else {
        req.session.login = { email, password }
        res.redirect('/login')
      }
    })
    .catch(error => {
      console.error(error)
      req.session.login = { email, password }
      res.redirect('/login')
    })
})

export default router
