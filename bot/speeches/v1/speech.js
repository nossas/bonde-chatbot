import { replyText } from '../utils'
import { messages as aiMessages, buttonTexts as aiButtonTexts } from '../../ai'

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
    [HOW_IS_IT_GOING]: HOW_IS_IT_GOING,
    [QUICK_REPLY_G]: QUICK_REPLY_G,
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
      text: aiMessages.NASCITURO_BILL_ALERT,
      quick_replies: [
        replyText(aiButtonTexts.I_WANT_TO_ACT_NOW, QUICK_REPLY_A),
        replyText(aiButtonTexts.TELL_ME_MORE, QUICK_REPLY_B),
      ],
    },
    [QUICK_REPLY_A]: {
      text: aiMessages.NASCITURO_BILL_PRESSURE_STRATEGY,
      quick_replies: [
        replyText(aiButtonTexts.LETS_GO, QUICK_REPLY_C),
        replyText(aiButtonTexts.HOW_IT_WORKS, QUICK_REPLY_D),
      ],
    },
    [QUICK_REPLY_B]: {
      text: aiMessages.NASCITURO_BILL_EXPLANATION,
      quick_replies: [
        replyText(aiButtonTexts.I_WANT_TO_ACT_NOW, QUICK_REPLY_A),
      ],
    },
    [QUICK_REPLY_C]: () => ({
      text: `Sabia que podia contar com você! Essa aqui é a mensagem que vamos enviar aos deputados: *${(botData.data.pressure && global.widgets[botData.data.pressure.widget_id].settings.pressure_body.replace(/\n/g, '').slice(0, 540)) || '[TEXTO]'}* Concorda?`,
      quick_replies: [
        replyText('Concordo!', QUICK_REPLY_X),
        replyText('Não curti…', QUICK_REPLY_E),
      ],
    }),
    [QUICK_REPLY_D]: {
      text: aiMessages.HOW_PRESSURE_WORKS,
      quick_replies: [
        replyText(aiButtonTexts.COUNT_ME_IN, QUICK_REPLY_F),
        replyText(aiButtonTexts.NOT_NOW, QUICK_REPLY_E),
      ],
    },
    [QUICK_REPLY_E]: {
      text: aiMessages.IF_YOU_CHANGE_YOUR_MIND,
    },
    [QUICK_REPLY_F]: () => ({
      text: `Sabia que podia contar com você! Essa aqui é a mensagem que vamos enviar aos deputados: *${(botData.data.pressure && global.widgets[botData.data.pressure.widget_id].settings.pressure_body.replace(/\n/g, '').slice(0, 540)) || '[TEXTO]'}* Concorda?`,
      quick_replies: [
        replyText('Concordo!', QUICK_REPLY_G),
        replyText('Não curti…', QUICK_REPLY_E),
      ],
    }),
    [QUICK_REPLY_G]: {
      text: aiMessages.EMAIL_ADDRESS_ASK,
    },
    [QUICK_REPLY_H]: profile => ({
      text: aiMessages.NASCITURO_BILL_PRESSURE_SUCCESS(profile.first_name),
      quick_replies: [
        replyText(aiButtonTexts.OF_COURSE, QUICK_REPLY_J)
      ]
    }),
    [QUICK_REPLY_J]: ({
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
                {
                  type: 'web_url',
                  url: `http://www.facebook.com/sharer.php?u=${encodeURI(`${process.env.APP_DOMAIN}/share`)}`,
                  title: 'Compartilhar',
                },
              ],
            },
          ],
        },
      },
    }),
    [QUICK_REPLY_X]: {
      text: aiMessages.EMAIL_ADDRESS_ASK_ISNT_SPAM,
    },
    [EMAIL_ADDRESS_WRONG]: {
      text: aiMessages.EMAIL_ADDRESS_WRONG,
    },
    [EMAIL_ADDRESS_OK]: {
      text: aiMessages.NASCITURO_BILL_PRESSURE_SEND,
      quick_replies: [
        replyText(aiButtonTexts.SEND, QUICK_REPLY_H),
      ],
    },
  }
})
