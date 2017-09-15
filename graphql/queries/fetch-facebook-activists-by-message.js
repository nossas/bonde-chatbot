import gql from 'graphql-tag'

//
// @param Object({ extraFields: Array })
//
export default ({ extraFields = [] } = { extraFields: [] }) =>  gql`
query fetchFacebookActivistsByMessage(
  $message: String!
  $first: Int
) {
  query: getFacebookActivistsByMessage(
    message: $message
    first: $first
  ) {
    totalCount
    activists: nodes {
      fbContextRecipientId
      ${extraFields.join(' ')}
    }
  }
}
`
