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
// @param [required] reply {Function} Messenger bot's reply function
// @return void
//
export default ({ speech, action, payload, profile, botData, reply }) => {
  let actions
  try { actions = require(`./${speech.version}/actions`) } catch (e) {}

  return {
    //
    // The action will be dispatched anywhere. Even if the action
    // is not an action to reply the user. e.g. pressure action
    //
    // @return {Boolean} Tells if any action was dispatched
    //
    anywhere: () => {
      let result = false
      if (actions && actions.quickReply) {
        result = actions.quickReply({ speech, action, payload, profile, botData })
      }
      return result
    },

    //
    // Ensure that the user will be replied. Even if the action
    // is a simple undefined message.
    //
    // @return {Boolean} Tells if any action was dispatched
    //
    ensure: () => {
      let result = Promise.resolve(false)
      if (actions && actions.userInteraction) {
        result = actions.userInteraction({ speech, payload, profile, botData, reply })
      }
      return result
    }
  }
}
