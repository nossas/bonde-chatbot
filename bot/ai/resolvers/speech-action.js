import _ from 'underscore'
import { replyText } from '../../speeches/utils'
import * as botSpeeches from '../../speeches'

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
  const speechEntity = speechRepliesMap[entity]
  const speechReply = speech.messages[speechEntity]

  //
  // AI intent specific replies
  // (priority 2)
  //
  const intentRepliesMap = {
    'how_are_you': botSpeeches.messages.HOW_IS_IT_GOING,
    'explain_pec_29': botSpeeches.messages.NASCITURO_BILL_AND_PEC_29,
  }
  const intentEntity = intentRepliesMap[entity]
  const intentReply = !speechReply && intentEntity && { text: intentEntity }

  //
  // The default reply object when there is neither
  // speech specific reply nor AI intent specific reply
  //
  const defaultReply = {
    text: botSpeeches.messages.BACK_LATER,
    quick_replies: [
      replyText(botSpeeches.buttonTexts.TRY_AGAIN, speech.actions.GET_STARTED),
    ],
  }

  reply(speechReply || intentReply || defaultReply)
}
