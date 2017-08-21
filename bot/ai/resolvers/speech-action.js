import _ from 'underscore'
import { messages as aiMessages } from '../../ai'

export default ({ speech, reply }) => ({ entities }) => {
  const entity = !_.isEmpty(entities) && entities.intent[0].value

  //
  // Speech specific replies
  // (priority 1)
  //
  const speechRepliesMap = {
    'greeting': speech.actions.GET_STARTED,
    //
    // TODO: Need to handle via previous message context
    //       Switch to AI intent specific replies
    //
    'yes': speech.actions.QUICK_REPLY_B,
  }
  const speechReply = speechRepliesMap[entity]

  //
  // AI intent specific replies
  // (priority 2)
  //
  const intentRepliesMap = {
    'how_are_you': aiMessages.HOW_IS_IT_GOING,
    'explain_pec_29': speech.actions.QUICK_REPLY_D,
  }
  const intentReply = !speechReply && intentRepliesMap[entity]

  //
  // The default reply object when there is neither
  // speech specific reply nor AI intent specific reply
  //
  const defaultReply = { text: aiMessages.BACK_LATER }

  reply(speech.messages[speechReply || intentReply] || defaultReply)
}
