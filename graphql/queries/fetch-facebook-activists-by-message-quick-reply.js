import gql from 'graphql-tag'

//
// @param Object({ extraFields: Array })
//
export default ({ extraFields = [] } = { extraFields: [] }) =>  gql`
query fetchFacebookActivistsByMessageQuickReply(
  $message: String!
  $quickReply: String!
  $first: Int
) {
  query: getFacebookActivistsByMessageQuickReply(
    message: $message
    quickReply: $quickReply
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
