import 'colors'
import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_URL || 'http://data.bonde.devel:3001/graphql'
})

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) req.options.headers = {}

    if (process.env.HASURA_SECRET) {
      req.options.headers['x-hasura-admin-secret'] = process.env.HASURA_SECRET
    }

    if (process.env.JWT_TOKEN) {
      req.options.headers['authorization'] = `Bearer ${process.env.JWT_TOKEN}`
    } else {
      console.error('Please specify the `JWT_TOKEN` environment variable.'.red)
    }

    next()
  }
}])

export const client = new ApolloClient({ networkInterface })
