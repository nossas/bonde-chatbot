import gql from 'graphql-tag'

//
// @param Object({ extraFields: Array })
//
export default ({ extraFields = [] } = { extraFields: [] }) =>  gql`
query fetchFacebookActivistsStrategy(
  $search: Json!
  $first: Int
) {
  query: getFacebookActivistsStrategy(
    search: $search
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
