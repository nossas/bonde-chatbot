import { quickReply, genericTemplate, buttonTemplate } from '../utils'
import * as botSpeeches from '../../speeches'

//
// Constants
//
const GET_STARTED = 'GET_STARTED'
const QUICK_REPLY_A = 'QUICK_REPLY_A'
const QUICK_REPLY_B = 'QUICK_REPLY_B'
const QUICK_REPLY_C = 'QUICK_REPLY_C'
const QUICK_REPLY_D = 'QUICK_REPLY_D'
const QUICK_REPLY_E = 'QUICK_REPLY_E'
const QUICK_REPLY_F = 'QUICK_REPLY_F'
const QUICK_REPLY_G = 'QUICK_REPLY_G'
const QUICK_REPLY_H = 'QUICK_REPLY_H'
const QUICK_REPLY_I = 'QUICK_REPLY_I'
const QUICK_REPLY_J = 'QUICK_REPLY_J'
const QUICK_REPLY_L = 'QUICK_REPLY_L'

//
// The bot speech, based on quick replies.
// @param {Object} The bot configuration stored in database.
// @return {Object} The bot actions and messages.
//
export default botData => ({
  version: 'v0',
  actions: {
    [GET_STARTED]: GET_STARTED,
    [QUICK_REPLY_B]: QUICK_REPLY_B,
  },
  messages: {
    //
    // Usuário abre conversa com a Beta no Messenger
    //
    [GET_STARTED]: {
      text: botSpeeches.messages.I_AM_BETA,
      quick_replies: [
        quickReply(QUICK_REPLY_A, botSpeeches.buttonTexts.LETS_GO),
      ],
    },
    [QUICK_REPLY_A]: {
      text: botSpeeches.messages.INTRODUCE_MYSELF,
      quick_replies: [
        quickReply(QUICK_REPLY_B, botSpeeches.buttonTexts.TELL_ME),
        quickReply(QUICK_REPLY_C, botSpeeches.buttonTexts.HASHTAG_BLUNTLY),
      ],
    },
    [QUICK_REPLY_B]: {
      text: botSpeeches.messages.ASK_IF_WANT_TO_LEARN_MORE,
      quick_replies: [
        quickReply(QUICK_REPLY_D, botSpeeches.buttonTexts.I_WANT),
        quickReply(QUICK_REPLY_G, botSpeeches.buttonTexts.NOW_DOESNT_HAPPEN),
      ],
    },
    [QUICK_REPLY_C]: {
      text: botSpeeches.messages.STRAIGHT_TO_THE_WOMENS_RIGHTS,
      quick_replies: [
        quickReply(QUICK_REPLY_E, botSpeeches.buttonTexts.IM_IN),
        quickReply(QUICK_REPLY_G, botSpeeches.buttonTexts.NOT_NOW),
      ],
    },
    [QUICK_REPLY_D]: {
      text: botSpeeches.messages.NASCITURO_BILL_AND_PEC_29,
      quick_replies: [
        quickReply(QUICK_REPLY_F, botSpeeches.buttonTexts.UNBELIEVABLE),
        quickReply(QUICK_REPLY_E, botSpeeches.buttonTexts.HOW_TO_CRACK_IT_DOWN),
      ],
    },
    [QUICK_REPLY_E]: {
      text: botSpeeches.messages.ITS_NOT_SORCERY_ITS_TECHNOLOGY,
      quick_replies: [
        quickReply(QUICK_REPLY_H, botSpeeches.buttonTexts.I_WANT_TO_LEARN_MORE),
        quickReply(QUICK_REPLY_G, botSpeeches.buttonTexts.NOT_NOW),
      ],
    },
    [QUICK_REPLY_F]: {
      text: botSpeeches.messages.ASK_TO_HACK_THE_SYSTEM,
      quick_replies: [
        quickReply(QUICK_REPLY_E, botSpeeches.buttonTexts.IM_IN),
        quickReply(QUICK_REPLY_G, botSpeeches.buttonTexts.NOT_NOW),
      ],
    },
    [QUICK_REPLY_G]: {
      text: botSpeeches.messages.NO_PROBLEM_CHECK_THE_WEBSITE,
    },
    [QUICK_REPLY_H]: {
      text: botSpeeches.messages.HOW_PRESSURE_WORKS_WE_KEEP_IN_TOUCH,
      quick_replies: [
        quickReply(QUICK_REPLY_I, botSpeeches.buttonTexts.SUPER),
      ],
    },
    [QUICK_REPLY_I]: {
      text: botSpeeches.messages.NEED_MANY_PEOPLE,
      quick_replies: [
        quickReply(QUICK_REPLY_J, botSpeeches.buttonTexts.COUNT_ME_IN_SIS),
      ],
    },
    [QUICK_REPLY_J]: {
      text: botSpeeches.messages.ASK_TO_SHARE_UNTIL_WE_WATCH,
      quick_replies: [
        quickReply(QUICK_REPLY_L, botSpeeches.buttonTexts.SHARE),
        quickReply(QUICK_REPLY_G, botSpeeches.buttonTexts.NOT_NOW),
      ],
    },
    [QUICK_REPLY_L]: genericTemplate({
      title: 'A maior aliada feminista nas redes',
      subtitle: 'Chama a Beta no inbox',
      imageURL: botData.data.image_url || 'https://goo.gl/hzZfHA',
      buttons: [
        buttonTemplate.elementShare(),
        buttonTemplate.webURL({
          url: botData.data.m_me || 'https://m.me/beta.feminista',
          title: 'Falar com a Beta',
        })
      ],
    }),
  },
})
