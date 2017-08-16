import express from 'express'
import { client as graphqlClient } from '../graphql'
import * as graphqlQueries from '../graphql/queries'
import * as graphqlMutations from '../graphql/mutations'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('./share/index')
})

export default router
