import { replyText, genericTemplate, buttonTemplate } from '../utils'
import * as botSpeeches from '../../speeches'

const facebookFeedShare = url => `http://www.facebook.com/sharer.php?u=${encodeURI(url)}`

//
// Constants
//
const GET_STARTED = 'GET_STARTED'
const V1_QUICK_REPLY_A = 'V1_QUICK_REPLY_A'
const V1_QUICK_REPLY_B = 'V1_QUICK_REPLY_B'
const V1_QUICK_REPLY_C = 'V1_QUICK_REPLY_C'
const V1_QUICK_REPLY_D = 'V1_QUICK_REPLY_D'
const V1_QUICK_REPLY_E = 'V1_QUICK_REPLY_E'
const V1_QUICK_REPLY_F = 'V1_QUICK_REPLY_F'
const V1_QUICK_REPLY_G = 'V1_QUICK_REPLY_G'
const V1_QUICK_REPLY_H = 'V1_QUICK_REPLY_H'
const V1_QUICK_REPLY_I = 'V1_QUICK_REPLY_I'
const V1_QUICK_REPLY_J = 'V1_QUICK_REPLY_J'
const V1_QUICK_REPLY_K = 'V1_QUICK_REPLY_K'
const V1_EMAIL_ADDRESS_WRONG = 'V1_EMAIL_ADDRESS_WRONG'
const V1_EMAIL_ADDRESS_OK = 'V1_EMAIL_ADDRESS_OK'

//
// The bot speech, based on quick replies.
// @param {Object} The bot configuration stored in database.
// @return {Object} The bot actions and messages.
//
export default botData => ({
  version: 'v1',
  actions: {
    [GET_STARTED]: GET_STARTED,
    [V1_QUICK_REPLY_I]: V1_QUICK_REPLY_I,
    [V1_EMAIL_ADDRESS_WRONG]: V1_EMAIL_ADDRESS_WRONG,
    [V1_EMAIL_ADDRESS_OK]: V1_EMAIL_ADDRESS_OK,
  },
  messages: {
    //
    // Usuário abre conversa com a Beta no Messenger
    //
    [GET_STARTED]: {
      text: botSpeeches.messages.I_AM_BETA,
      quick_replies: [
        replyText(V1_QUICK_REPLY_A, botSpeeches.buttonTexts.LETS_GO),
      ],
    },
    [V1_QUICK_REPLY_A]: {
      text: botSpeeches.messages.INTRODUCE_MYSELF,
      quick_replies: [
        replyText(V1_QUICK_REPLY_B, botSpeeches.buttonTexts.TELL_ME),
        replyText(V1_QUICK_REPLY_C, botSpeeches.buttonTexts.HASHTAG_BLUNTLY),
      ],
    },
    [V1_QUICK_REPLY_B]: {
      text: botSpeeches.messages.ASK_IF_WANT_TO_LEARN_MORE,
      quick_replies: [
        replyText(V1_QUICK_REPLY_C, botSpeeches.buttonTexts.I_WANT),
        replyText(V1_QUICK_REPLY_D, botSpeeches.buttonTexts.NOW_DOESNT_HAPPEN),
      ],
    },
    [V1_QUICK_REPLY_C]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_ALERT,
      quick_replies: [
        replyText(V1_QUICK_REPLY_E, botSpeeches.buttonTexts.I_WANT_TO_ACT_NOW),
        replyText(V1_QUICK_REPLY_F, botSpeeches.buttonTexts.MORE_ABOUT_PEC),
      ],
    }),
    [V1_QUICK_REPLY_D]: () => ({
      text: botSpeeches.messages.NO_PROBLEM_CHECK_MY_FACEBOOK_PAGE,
    }),
    [V1_QUICK_REPLY_E]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_PRESSURE_STRATEGY,
      quick_replies: [
        replyText(V1_QUICK_REPLY_G, botSpeeches.buttonTexts.LETS_GO),
        replyText(V1_QUICK_REPLY_F, botSpeeches.buttonTexts.MORE_ABOUT_PEC),
      ],
    }),
    [V1_QUICK_REPLY_F]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_MORE_ABOUT,
      quick_replies: [
        replyText(V1_QUICK_REPLY_G, botSpeeches.buttonTexts.COUNT_ON_ME),
        replyText(V1_QUICK_REPLY_D, botSpeeches.buttonTexts.NOT_NOW),
      ],
    }),
    [V1_QUICK_REPLY_G]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_READ_THE_PRESSURE_TEXT,
      quick_replies: [
        replyText(V1_QUICK_REPLY_I, botSpeeches.buttonTexts.SEND_NOW),
        replyText(V1_QUICK_REPLY_H, botSpeeches.buttonTexts.READ_MESSAGE),
      ],
    }),
    [V1_QUICK_REPLY_H]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_PRESSURE_TEXT,
      quick_replies: [
        replyText(V1_QUICK_REPLY_I, botSpeeches.buttonTexts.MESSAGE_APPROVED),
      ],
    }),
    [V1_QUICK_REPLY_I]: () => ({
      text: botSpeeches.messages.EMAIL_ADDRESS_ASK
    }),
    [V1_QUICK_REPLY_J]: genericTemplate({
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
    [V1_EMAIL_ADDRESS_WRONG]: ({
      text: botSpeeches.messages.EMAIL_ADDRESS_WRONG
    }),
    [V1_EMAIL_ADDRESS_OK]: profile => ({
      text: botSpeeches.messages.EMAIL_SENT_PEC_181_TROJAN_HORSE(profile.first_name),
      quick_replies: [
        replyText(V1_QUICK_REPLY_J, botSpeeches.buttonTexts.SURE_BETA),
        replyText(V1_QUICK_REPLY_D, botSpeeches.buttonTexts.NOT_NOW),
      ],
    }),
  }
})
