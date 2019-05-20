import _ from 'underscore'
import { quickReply } from '../../speeches/utils'
import { messages, buttonTexts } from '../../speeches'

export default ({ speech, reply }) => ({ entities }) => {
  const entity = !_.isEmpty(entities) && entities.intent[0].value

  //
  // Speech specific replies
  // (priority 1)
  //
  const speechRepliesMap = {
    'greeting': speech.actions.GET_STARTED,
    'menu': speech.actions.V2_QUICK_REPLY_CA,
    //
    // TODO: Need to handle via previous message context
    //       Switch to AI intent specific replies
    //
    'education_hashtag': speech.actions.V2_QUICK_REPLY_EDUCATION,
    'adpf_hashtag': speech.actions.V2_QUICK_REPLY_ADPF442,
    'tretaaqui_hashtag': speech.actions.V2_QUICK_REPLY_DISCURSO_ODIO,
  }
  const speechEntity = speechRepliesMap[entity]
  const speechReply = speech.messages[speechEntity]

  //
  // AI intent specific replies
  // The intent name is the same name of speech messages key
  // (priority 2)
  //
  const intentEntity = messages[entity && entity.toUpperCase()]
  let intentReply
  if (!speechReply && intentEntity) intentReply = intentEntity

  //
  // The default reply object when there is neither
  // speech specific reply nor AI intent specific reply
  //
  const defaultReply = {
    text: messages.BACK_LATER,
    quick_replies: [
      quickReply(speech.actions.GET_STARTED, buttonTexts.TRY_AGAIN),
    ],
  }

  reply(speechReply || intentReply || defaultReply)
}
