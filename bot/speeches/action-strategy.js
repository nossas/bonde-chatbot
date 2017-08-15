import _ from 'underscore'

//
// Strategy function to dispatch reply actions based on
// quick replies and user interactions.
//
// @param [required] speech {Object} Factory specified bot's speech object
// @param [required] action {String} Quick reply action key received by Facebook Messenger webhook
// @param [required] payload {Object} Facebook messenger API received request payload object
// @param [required] profile {Object} User's profile object received by Facebook Messenger API
// @param [required] botData {Object} Bot's config data object
// @return void
//
export default ({ speech, action, payload, profile, botData }) => ({
  //
  // Ensure that the action will be dispatched even if the action
  // is not an actio to reply the user. e.g. pressure action
  //
  ensure: () => {
    const actions = require(`./${speech.version}/actions`)

    console.log('actions', actions)

    _.map(actions, (dispatchAction, type) => {
      dispatchAction({ speech, action, payload, profile, botData })
    })
  },

  afterReply: () => {}
})
