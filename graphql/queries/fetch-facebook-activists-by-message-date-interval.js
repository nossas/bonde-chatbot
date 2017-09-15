import gql from 'graphql-tag'

//
// @param Object({ extraFields: Array })
//
export default ({ extraFields = [] } = { extraFields: [] }) =>  gql`
query fetchFacebookActivistsByMessageDateInterval(
  $message: String!
  $dateIntervalStart: Datetime!
  $dateIntervalEnd: Datetime!
  $first: Int
) {
  query: getFacebookActivistsByMessageDateInterval(
    message: $message
    dateIntervalStart: $dateIntervalStart
    dateIntervalEnd: $dateIntervalEnd
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
