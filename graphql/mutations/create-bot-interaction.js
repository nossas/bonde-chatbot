import gql from 'graphql-tag'

export default gql`
mutation createBotInteraction($interaction: Json!) {
  createBotInteraction(input: {
    botData: $interaction
  }) {
    interaction: json
  }
}
`
