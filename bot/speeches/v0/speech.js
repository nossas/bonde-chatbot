import { replyText } from '../utils'
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
        replyText(botSpeeches.buttonTexts.LETS_GO, QUICK_REPLY_A),
      ],
    },
    [QUICK_REPLY_A]: {
      text: botSpeeches.messages.INTRODUCE_MYSELF,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.TELL_ME, QUICK_REPLY_B),
        replyText(botSpeeches.buttonTexts.HASHTAG_BLUNTLY, QUICK_REPLY_C),
      ],
    },
    [QUICK_REPLY_B]: {
      text: botSpeeches.messages.ASK_IF_WANT_TO_LEARN_MORE,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.I_WANT, QUICK_REPLY_D),
        replyText(botSpeeches.buttonTexts.NOW_DOESNT_HAPPEN, QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_C]: {
      text: botSpeeches.messages.STRAIGHT_TO_THE_WOMENS_RIGHTS,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.IM_IN, QUICK_REPLY_E),
        replyText(botSpeeches.buttonTexts.NOT_NOW, QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_D]: {
      text: botSpeeches.messages.NASCITURO_BILL_AND_PEC_29,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.UNBELIEVABLE, QUICK_REPLY_F),
        replyText(botSpeeches.buttonTexts.HOW_TO_CRACK_IT_DOWN, QUICK_REPLY_E),
      ],
    },
    [QUICK_REPLY_E]: {
      text: botSpeeches.messages.ITS_NOT_SORCERY_ITS_TECHNOLOGY,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.I_WANT_TO_LEARN_MORE, QUICK_REPLY_H),
        replyText(botSpeeches.buttonTexts.NOT_NOW, QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_F]: {
      text: botSpeeches.messages.ASK_TO_HACK_THE_SYSTEM,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.IM_IN, QUICK_REPLY_E),
        replyText(botSpeeches.buttonTexts.NOT_NOW, QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_G]: {
      text: botSpeeches.messages.NO_PROBLEM_CHECK_THE_WEBSITE,
    },
    [QUICK_REPLY_H]: {
      text: botSpeeches.messages.HOW_PRESSURE_WORKS_WE_KEEP_IN_TOUCH,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.SUPER, QUICK_REPLY_I),
      ],
    },
    [QUICK_REPLY_I]: {
      text: botSpeeches.messages.NEED_MANY_PEOPLE,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.COUNT_ME_IN_SIS, QUICK_REPLY_J),
      ],
    },
    [QUICK_REPLY_J]: {
      text: botSpeeches.messages.ASK_TO_SHARE_UNTIL_WE_WATCH,
      quick_replies: [
        replyText(botSpeeches.buttonTexts.SHARE, QUICK_REPLY_L),
        replyText(botSpeeches.buttonTexts.NOT_NOW, QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_L]: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: 'A maior aliada feminista nas redes',
              subtitle: 'Chama a Beta no inbox',
              image_url: botData.data.image_url || 'https://goo.gl/sboHN4',
              buttons: [
                { type: 'element_share' },
                {
                  type: 'web_url',
                  url: botData.data.m_me || 'https://m.me/beta.feminista',
                  title: 'Falar com a Beta',
                },
              ],
            },
          ],
        },
      },
    },
  },
})
