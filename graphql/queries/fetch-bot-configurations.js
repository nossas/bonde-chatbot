import gql from 'graphql-tag'

export default gql`
  query fetchBotConfigurations {
    configs: allFacebookBotConfigurations {
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
