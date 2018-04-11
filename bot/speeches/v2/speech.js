import { quickReply, genericTemplate, carouselTemplate, buttonTemplate, multiMessages, messageWithQuickReply, messageWithGif } from '../utils'
import { image, video } from '../utils/content-types'
import * as botSpeeches from '../../speeches'

const facebookFeedShare = url => `http://www.facebook.com/sharer.php?u=${encodeURI(url)}`

//
// Constants
//
const GET_STARTED = 'GET_STARTED'

const VMDM_QUICK_REPLY_X = 'VMDM_QUICK_REPLY_X'
const VMDM_QUICK_REPLY_G = 'VMDM_QUICK_REPLY_G'
const VMDM_QUICK_REPLY_H = 'VMDM_QUICK_REPLY_H'
const VMDM_QUICK_REPLY_I = 'VMDM_QUICK_REPLY_I'
const VMDM_QUICK_REPLY_J = 'VMDM_QUICK_REPLY_J'
const VMDM_EMAIL_ADDRESS_WRONG = 'VMDM_EMAIL_ADDRESS_WRONG'
const VMDM_EMAIL_ADDRESS_OK = 'VMDM_EMAIL_ADDRESS_OK'

const V2_QUICK_REPLY_A = 'V2_QUICK_REPLY_A'
const V2_QUICK_REPLY_B = 'V2_QUICK_REPLY_B'
const V2_QUICK_REPLY_CA = 'V2_QUICK_REPLY_CA'
const V2_QUICK_REPLY_D = 'V2_QUICK_REPLY_D'

const V2_QUICK_REPLY_MAIS = 'V2_QUICK_REPLY_MAIS'
const V2_QUICK_REPLY_A_1 = 'V2_QUICK_REPLY_A_1'
const V2_QUICK_REPLY_C_1 = 'V2_QUICK_REPLY_C_1'
const V2_QUICK_REPLY_E_1 = 'V2_QUICK_REPLY_E_1'
const V2_QUICK_REPLY_F_1 = 'V2_QUICK_REPLY_F_1'
const V2_QUICK_REPLY_G_1 = 'V2_QUICK_REPLY_G_1'
const V2_QUICK_REPLY_H_1 = 'V2_QUICK_REPLY_H_1'

const V2_QUICK_REPLY_RADAR = 'V2_QUICK_REPLY_RADAR'
const V2_QUICK_REPLY_A_2 = 'V2_QUICK_REPLY_A_2'
const V2_QUICK_REPLY_B_2 = 'V2_QUICK_REPLY_B_2'
const V2_QUICK_REPLY_C_2 = 'V2_QUICK_REPLY_C_2'
const V2_QUICK_REPLY_D_2 = 'V2_QUICK_REPLY_D_2'
const V2_QUICK_REPLY_E_2 = 'V2_QUICK_REPLY_E_2'
const V2_QUICK_REPLY_F_2 = 'V2_QUICK_REPLY_F_2'


//
// The bot speech, based on quick replies.
// @param {Object} The bot configuration stored in database.
// @return {Object} The bot actions and messages.
//
export default botData => ({
  version: 'v2',
  actions: {
    [GET_STARTED]: GET_STARTED,
    [VMDM_QUICK_REPLY_I]: VMDM_QUICK_REPLY_I,
    [VMDM_EMAIL_ADDRESS_WRONG]: VMDM_EMAIL_ADDRESS_WRONG,
    [VMDM_EMAIL_ADDRESS_OK]: VMDM_EMAIL_ADDRESS_OK,
  },
  messages: {

    [GET_STARTED]: {
      text: botSpeeches.messages.I_AM_BETA,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A, botSpeeches.buttonTexts.LETS_GO),
      ],
    },

    [V2_QUICK_REPLY_A]: [
      botSpeeches.messages.BETA_INTRODUCTION,
      botSpeeches.messages.BETA_INTRODUCTION_1,
      messageWithQuickReply(
        botSpeeches.messages.BETA_INTRODUCTION_2,
        quickReply(V2_QUICK_REPLY_B, botSpeeches.buttonTexts.EXPLAIN_MORE),
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.WHAT_TODO)
      )
    ],
    [V2_QUICK_REPLY_B]: [
      botSpeeches.messages.EXPLAIN_MORE,
      botSpeeches.messages.EXPLAIN_MORE_1,
      botSpeeches.messages.EXPLAIN_MORE_2,
      messageWithGif(
        botSpeeches.messages.EXPLAIN_MORE_3,
        quickReply(V2_QUICK_REPLY_D, botSpeeches.buttonTexts.IT_WORKS),
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.I_WANT_TO_ACT)
      )
    ],
    [V2_QUICK_REPLY_D]: {
      text: botSpeeches.messages.YES_IT_WORKS,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.SURE),
      ],
    },

    [V2_QUICK_REPLY_CA]: [
      botSpeeches.messages.LIST,
      carouselTemplate({
        title: botSpeeches.carouselTexts.TITLE_RADAR,
        subtitle: botSpeeches.carouselTexts.SUBTITLE,
        imageURL: botSpeeches.carouselTexts.IMAGE_URL,
        buttons: [
          buttonTemplate.postback({
            title: botSpeeches.carouselTexts.BUTTON_RADAR,
            payload: V2_QUICK_REPLY_RADAR
          })
        ],
      },
        {
          title: botSpeeches.carouselTexts.TITLE_MORE,
          subtitle: botSpeeches.carouselTexts.SUBTITLE,
          imageURL: botData.data.image_url || botSpeeches.carouselTexts.IMAGE_URL_2,
          buttons: [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_MORE,
              payload: V2_QUICK_REPLY_MAIS
            })
          ],
        })
    ],

    //
    // Mais sobre a beta
    //
    [V2_QUICK_REPLY_MAIS]: [
      botSpeeches.messages.MORE_ABOUT_BETA,
      botSpeeches.messages.MORE_ABOUT_BETA_1,
      botSpeeches.messages.MORE_ABOUT_BETA_2,
      messageWithGif(
        botSpeeches.messages.MORE_ABOUT_BETA_3,
        quickReply(V2_QUICK_REPLY_A_1, botSpeeches.buttonTexts.WHAT_HAPPENED),
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK)
      )
    ],

    [V2_QUICK_REPLY_A_1]: [
      botSpeeches.messages.WHAT_HAPPENED,
      messageWithQuickReply(
        botSpeeches.messages.WHAT_HAPPENED_1,
        quickReply(V2_QUICK_REPLY_C_1, botSpeeches.buttonTexts.WHAT_ELSE),
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.RADAR)
      )
    ],
    [V2_QUICK_REPLY_C_1]: [
      botSpeeches.messages.BETA_WHAT_ELSE,
      messageWithQuickReply(
        botSpeeches.messages.BETA_WHAT_ELSE_1,
        quickReply(V2_QUICK_REPLY_E_1, botSpeeches.buttonTexts.I_WANT_TO_ACT),
        quickReply(V2_QUICK_REPLY_F_1, botSpeeches.buttonTexts.CAMPAIGN)
      )
    ],
    [V2_QUICK_REPLY_F_1]: {
      text: botSpeeches.messages.CAMPAIGN,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_E_1, botSpeeches.buttonTexts.WHAT_NOW),
      ],
    },
    [V2_QUICK_REPLY_E_1]: [
      botSpeeches.messages.DO_SOMETHING,
      messageWithQuickReply(
        botSpeeches.messages.DO_SOMETHING_1,
        quickReply(V2_QUICK_REPLY_G_1, botSpeeches.buttonTexts.SHARE),
        quickReply(V2_QUICK_REPLY_H_1, botSpeeches.buttonTexts.NOT_NOW)
      )
    ],
    [V2_QUICK_REPLY_H_1]: [
      botSpeeches.messages.NO_PROBLEM_CHECK_THE_WEBSITE,
      carouselTemplate({
        title: botSpeeches.carouselTexts.TITLE_RADAR,
        subtitle: botSpeeches.carouselTexts.SUBTITLE,
        imageURL: botData.data.image_url || botSpeeches.carouselTexts.IMAGE_URL,
        buttons: [
          buttonTemplate.postback({
            title: botSpeeches.carouselTexts.BUTTON_RADAR,
            payload: V2_QUICK_REPLY_RADAR
          })
        ],
      },
        {
          title: botSpeeches.carouselTexts.TITLE_MORE,
          subtitle: botSpeeches.carouselTexts.SUBTITLE,
          imageURL: botData.data.image_url || 'https://goo.gl/hzZfHA',
          buttons: [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_MORE,
              payload: V2_QUICK_REPLY_MAIS
            })
          ],
        })
    ],
    [V2_QUICK_REPLY_G_1]: [
      botSpeeches.messages.YOU_ROCK,
      //TODO: Add gif
      genericTemplate({
        title: 'A maior aliada feminista nas redes',
        subtitle: 'Chama a Beta no inbox',
        imageURL: botData.data.image_url || 'https://goo.gl/hzZfHA',
        buttons: [
          buttonTemplate.webURL({
            url: facebookFeedShare(`${process.env.APP_DOMAIN}/share`),
            title: 'Compartilhar',
          })
        ],
      }), 
    ],
    //
    // Radar da Beta
    //
    [V2_QUICK_REPLY_RADAR]: [
      botSpeeches.messages.RADAR,
      messageWithQuickReply(
        botSpeeches.messages.RADAR_1,
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.STATUTE),
        quickReply(V2_QUICK_REPLY_B_2, botSpeeches.buttonTexts.GOOD_NEWS)
      )
    ],
    [V2_QUICK_REPLY_A_2]: [
      botSpeeches.messages.STATUTE,
      messageWithQuickReply(
        botSpeeches.messages.STATUTE_1,
        quickReply(V2_QUICK_REPLY_B_2, botSpeeches.buttonTexts.LIGHT),
        quickReply(V2_QUICK_REPLY_C_2, botSpeeches.buttonTexts.BACK)
      )
    ],
    [V2_QUICK_REPLY_B_2]: [
      botSpeeches.messages.LIGHT,
      botSpeeches.messages.LIGHT_1,
      messageWithQuickReply(
        botSpeeches.messages.LIGHT_2,
        quickReply(V2_QUICK_REPLY_D_2, botSpeeches.buttonTexts.THERE_IS_MORE),
        quickReply(V2_QUICK_REPLY_E_2, botSpeeches.buttonTexts.ABOUT_ABORTION)
      )
    ],
    [V2_QUICK_REPLY_D_2]: [
      botSpeeches.messages.THERE_IS_MORE,
      botSpeeches.messages.THERE_IS_MORE_1,
      botSpeeches.messages.THERE_IS_MORE_2,
      messageWithGif(
        botSpeeches.messages.THERE_IS_MORE_3,
        quickReply(V2_QUICK_REPLY_E_2, botSpeeches.buttonTexts.WHAT_ELSE),
        quickReply(V2_QUICK_REPLY_F_2, botSpeeches.buttonTexts.ACT_NOW)
      )
    ],
    [V2_QUICK_REPLY_E_2]: {
      text: botSpeeches.messages.REPRODUCTIVE_RIGHTS,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_F_2, botSpeeches.buttonTexts.WHAT_NOW),
      ],
    },
    [V2_QUICK_REPLY_F_2]: {
      text: botSpeeches.messages.ACT_NOW,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_G_1, botSpeeches.buttonTexts.SHARE),
        quickReply(V2_QUICK_REPLY_H_1, botSpeeches.buttonTexts.NOT_NOW),
      ],
    },

    
    //
    // Usuário abre conversa com a Beta via Mensagem em Massa
    //
    [VMDM_QUICK_REPLY_X]: () => ({
      ...botSpeeches.messages.SLOW_CLAPPING,
      quick_replies: [
        quickReply(VMDM_QUICK_REPLY_J, botSpeeches.buttonTexts.SHARE),
      ],
    }),
    [VMDM_QUICK_REPLY_G]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_READ_THE_PRESSURE_TEXT,
      quick_replies: [
        quickReply(VMDM_QUICK_REPLY_I, botSpeeches.buttonTexts.SEND_NOW),
        quickReply(VMDM_QUICK_REPLY_H, botSpeeches.buttonTexts.READ_MESSAGE),
      ],
    }),
    [VMDM_QUICK_REPLY_H]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_PRESSURE_TEXT,
      quick_replies: [
        quickReply(VMDM_QUICK_REPLY_I, botSpeeches.buttonTexts.MESSAGE_APPROVED),
      ],
    }),
    [VMDM_QUICK_REPLY_I]: () => ({
      text: botSpeeches.messages.EMAIL_ADDRESS_ASK
    }),
    [VMDM_QUICK_REPLY_J]: genericTemplate({
      title: 'A maior aliada feminista nas redes',
      subtitle: 'Chama a Beta no inbox',
      imageURL: botData.data.image_url || 'https://goo.gl/hzZfHA',
      buttons: [
        buttonTemplate.webURL({
          url: facebookFeedShare(`${process.env.APP_DOMAIN}/share`),
          title: 'Compartilhar',
        })
      ],
    }),
    [VMDM_EMAIL_ADDRESS_WRONG]: ({
      text: botSpeeches.messages.EMAIL_ADDRESS_WRONG
    }),
    [VMDM_EMAIL_ADDRESS_OK]: profile => ({
      text: botSpeeches.messages.EMAIL_SENT_PEC_181_TROJAN_HORSE(profile.first_name),
      quick_replies: [
        quickReply(VMDM_QUICK_REPLY_J, botSpeeches.buttonTexts.SURE_BETA),
        quickReply(V1_QUICK_REPLY_D, botSpeeches.buttonTexts.NOT_NOW),
      ],
    }),
  }
})
