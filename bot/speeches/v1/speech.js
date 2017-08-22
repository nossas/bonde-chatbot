import { replyText, genericTemplate, buttonTemplate } from '../utils'
import * as botSpeeches from '../../speeches'

const facebookFeedShare = url => `http://www.facebook.com/sharer.php?u=${encodeURI(url)}`

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
const QUICK_REPLY_J = 'QUICK_REPLY_J'
const QUICK_REPLY_X = 'QUICK_REPLY_X'
const EMAIL_ADDRESS_WRONG = 'EMAIL_ADDRESS_WRONG'
const EMAIL_ADDRESS_OK = 'EMAIL_ADDRESS_OK'

//
// The bot speech, based on quick replies.
// @param {Object} The bot configuration stored in database.
// @return {Object} The bot actions and messages.
//
export default botData => ({
  version: 'v1',
  actions: {
    [GET_STARTED]: GET_STARTED,
    [QUICK_REPLY_D]: QUICK_REPLY_D,
    [QUICK_REPLY_H]: QUICK_REPLY_H,
    [QUICK_REPLY_X]: QUICK_REPLY_X,
    [EMAIL_ADDRESS_WRONG]: EMAIL_ADDRESS_WRONG,
    [EMAIL_ADDRESS_OK]: EMAIL_ADDRESS_OK,
  },
  messages: {
    //
    // Usuário abre conversa com a Beta no Messenger
    //
    [GET_STARTED]: {
      text: botSpeeches.messages.NASCITURO_BILL_ALERT,
      quick_replies: [
        replyText(QUICK_REPLY_A, botSpeeches.buttonTexts.I_WANT_TO_ACT_NOW),
        replyText(QUICK_REPLY_B, botSpeeches.buttonTexts.TELL_ME_MORE),
      ],
    },
    [QUICK_REPLY_A]: {
      text: botSpeeches.messages.NASCITURO_BILL_PRESSURE_STRATEGY,
      quick_replies: [
        replyText(QUICK_REPLY_C, botSpeeches.buttonTexts.LETS_GO),
        replyText(QUICK_REPLY_D, botSpeeches.buttonTexts.HOW_IT_WORKS),
      ],
    },
    [QUICK_REPLY_B]: {
      text: botSpeeches.messages.NASCITURO_BILL_EXPLANATION,
      quick_replies: [
        replyText(QUICK_REPLY_A, botSpeeches.buttonTexts.I_WANT_TO_ACT_NOW),
      ],
    },
    [QUICK_REPLY_C]: () => ({
      text: botSpeeches.messages.CHECK_THE_PRESSURE_MESSAGE(botData.data.pressure.widget_id),
      quick_replies: [
        replyText(QUICK_REPLY_X, botSpeeches.buttonTexts.I_AGREE),
        replyText(QUICK_REPLY_E, botSpeeches.buttonTexts.DISLIKES),
      ],
    }),
    [QUICK_REPLY_D]: {
      text: botSpeeches.messages.HOW_PRESSURE_WORKS,
      quick_replies: [
        replyText(QUICK_REPLY_C, botSpeeches.buttonTexts.COUNT_ME_IN),
        replyText(QUICK_REPLY_E, botSpeeches.buttonTexts.NOT_NOW),
      ],
    },
    [QUICK_REPLY_E]: {
      text: botSpeeches.messages.IF_YOU_CHANGE_YOUR_MIND,
    },
    [QUICK_REPLY_G]: {
      text: botSpeeches.messages.EMAIL_ADDRESS_ASK,
    },
    [QUICK_REPLY_H]: profile => ({
      text: botSpeeches.messages.NASCITURO_BILL_PRESSURE_SUCCESS(profile.first_name),
      quick_replies: [
        replyText(QUICK_REPLY_J, botSpeeches.buttonTexts.OF_COURSE)
      ]
    }),
    [QUICK_REPLY_J]: genericTemplate({
      title: 'A maior aliada feminista nas redes',
      subtitle: 'Chama a Beta no inbox',
      imageURL: botData.data.image_url || 'https://goo.gl/sboHN4',
      buttons: [
        buttonTemplate.webURL({
          url: facebookFeedShare(`${process.env.APP_DOMAIN}/share`),
          title: 'Compartilhar',
        })
      ],
    }),
    [QUICK_REPLY_X]: {
      text: botSpeeches.messages.EMAIL_ADDRESS_ASK_ISNT_SPAM,
    },
    [EMAIL_ADDRESS_WRONG]: {
      text: botSpeeches.messages.EMAIL_ADDRESS_WRONG,
    },
    [EMAIL_ADDRESS_OK]: {
      text: botSpeeches.messages.NASCITURO_BILL_PRESSURE_SEND,
      quick_replies: [
        replyText(QUICK_REPLY_H, botSpeeches.buttonTexts.SEND),
      ],
    },
  }
})
