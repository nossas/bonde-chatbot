import 'colors'
import { ApolloClient } from 'apollo-client'
import { ApolloLink, concat } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.JWT_TOKEN && !process.env.HASURA_SECRET) {
  throw new Error('Please specify the `JWT_TOKEN` or `HASURA_SECRET` environment variable.')
}

const authHeaders = process.env.JWT_TOKEN ? { authorization: `Bearer ${process.env.JWT_TOKEN}` } : { 'x-hasura-admin-secret': process.env.HASURA_SECRET }

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL || 'data.bonde.devel:3001/graphql',
  fetch
})

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({ headers: authHeaders })
  return forward(operation)
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache
})
