import 'colors'
import { ApolloClient } from 'apollo-client'
import { ApolloLink, concat } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const graphqlUrl = (protocol) => `${protocol}://${process.env.GRAPHQL_URL || 'http://data.bonde.devel:3001/graphql'}`

const httpLink = createHttpLink({
  uri: graphqlUrl('http'),
  fetch
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add authorization to the headers
  const headers = {}
  if (process.env.HASURA_SECRET) {
    headers['x-hasura-admin-secret'] = process.env.HASURA_SECRET
  }

  if (process.env.JWT_TOKEN) {
    headers['authorization'] = `Bearer ${process.env.JWT_TOKEN}`
  } else {
    console.error('Please specify the `JWT_TOKEN` environment variable.'.red)
  }

  operation.setContext({ headers })

  return forward(operation)
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  link: concat(authMiddleware, httpLink)
})
