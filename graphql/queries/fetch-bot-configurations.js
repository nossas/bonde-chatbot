import gql from 'graphql-tag'

export default gql`
  query fetchBotConfigurations {
    configs: allFacebookBotConfigurations(orderBy: ID_ASC) {
      bots: nodes {
        id
        messengerAppSecret
        messengerValidationToken
        messengerPageAccessToken
        data
      }
    }
  }
`
