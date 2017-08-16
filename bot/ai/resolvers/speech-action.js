import _ from 'underscore'

export default ({ speech, reply }) => ({ entities }) => {
  const actionsMap = {
    'greeting': speech.actions.GET_STARTED,
    'how_are_you': speech.actions.HOW_IS_IT_GOING,
    'yes': speech.actions.QUICK_REPLY_B,
    'explain_pec_29': speech.actions.QUICK_REPLY_D,
  }

  const entity = !_.isEmpty(entities)
    ? actionsMap[entities.intent[0].value] || speech.actions.REPLY_UNDEFINED
    : speech.actions.REPLY_UNDEFINED

  reply(speech.messages[entity])
}
