const ApolloClient = require('apollo-client').default
const createNetworkInterface = require('apollo-client').createNetworkInterface

exports.client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: process.env.GRAPHQL_URL || 'qqq'
  }),
})
