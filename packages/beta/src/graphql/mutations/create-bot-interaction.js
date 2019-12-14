import gql from 'graphql-tag'

export default gql`
mutation createBotInteraction($interaction: JSON!) {
  createBotInteraction(input: {
    botData: $interaction
  }) {
    interaction: json
  }
}
`
