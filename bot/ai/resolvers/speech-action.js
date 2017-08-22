import _ from 'underscore'
import { replyText } from '../../speeches/utils'
import { messages, buttonTexts } from '../../speeches'

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
  // The intent name is the same name of speech messages key
  // (priority 2)
  //
  const intentEntity = messages[entity && entity.toUpperCase()]
  const intentReply = !speechReply && intentEntity && { text: intentEntity }

  //
  // The default reply object when there is neither
  // speech specific reply nor AI intent specific reply
  //
  const defaultReply = {
    text: messages.BACK_LATER,
    quick_replies: [
      replyText(speech.actions.GET_STARTED, buttonTexts.TRY_AGAIN),
    ],
  }

  reply(speechReply || intentReply || defaultReply)
}
