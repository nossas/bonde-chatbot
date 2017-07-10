import gql from 'graphql-tag'

export default gql`
  query fetchBotConfigurations {
    allFacebookBotConfigurations {
      nodes {
        id,
        messengerAppSecret,
        messengerValidationToken,
        messengerPageAccessToken,
      }
    }
  }
`
