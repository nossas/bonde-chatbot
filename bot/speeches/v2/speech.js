import { quickReply, elements, genericTemplate, carouselTemplate, buttonTemplate, multiMessages, messageWithQuickReply, messageWithGif } from '../utils'
import { image, video } from '../utils/content-types'
import * as botSpeeches from '../../speeches'

const facebookFeedShare = url => `http://www.facebook.com/sharer.php?u=${encodeURI(url)}`

//
// Constants
//
const GET_STARTED = 'GET_STARTED'
const PERSISTENT_MENU = 'PERSISTENT_MENU'

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
const V2_QUICK_REPLY_B_1 = 'V2_QUICK_REPLY_B_1'
const V2_QUICK_REPLY_C_1 = 'V2_QUICK_REPLY_C_1'
const V2_QUICK_REPLY_E_1 = 'V2_QUICK_REPLY_E_1'
const V2_QUICK_REPLY_F_1 = 'V2_QUICK_REPLY_F_1'
const V2_QUICK_REPLY_G_1 = 'V2_QUICK_REPLY_G_1'
const V2_QUICK_REPLY_H_1 = 'V2_QUICK_REPLY_H_1'
const V2_QUICK_REPLY_I_1 = 'V2_QUICK_REPLY_I_1'
const V2_QUICK_REPLY_J_1 = 'V2_QUICK_REPLY_J_1'

const V2_QUICK_REPLY_RADAR = 'V2_QUICK_REPLY_RADAR'
const V2_QUICK_REPLY_A_2 = 'V2_QUICK_REPLY_A_2'
const V2_QUICK_REPLY_B_2 = 'V2_QUICK_REPLY_B_2'
const V2_QUICK_REPLY_D_2 = 'V2_QUICK_REPLY_D_2'
const V2_QUICK_REPLY_E_2 = 'V2_QUICK_REPLY_E_2'
const V2_QUICK_REPLY_F_2 = 'V2_QUICK_REPLY_F_2'

const V2_QUICK_REPLY_PEC = 'V2_QUICK_REPLY_PEC'
const V2_QUICK_REPLY_STATUTE = 'V2_QUICK_REPLY_STATUTE'
const V2_QUICK_REPLY_SUG = 'V2_QUICK_REPLY_SUG'
const V2_QUICK_REPLY_ADPF = 'V2_QUICK_REPLY_ADPF'

const V2_QUICK_REPLY_A_3 = 'V2_QUICK_REPLY_A_3'
const V2_QUICK_REPLY_C_3 = 'V2_QUICK_REPLY_C_3'
const V2_QUICK_REPLY_D_3 = 'V2_QUICK_REPLY_D_3'
const V2_QUICK_REPLY_F_3 = 'V2_QUICK_REPLY_F_3'

const V2_QUICK_REPLY_A_4 = 'V2_QUICK_REPLY_A_4'
const V2_QUICK_REPLY_A_5 = 'V2_QUICK_REPLY_A_5'
const V2_QUICK_REPLY_A_6 = 'V2_QUICK_REPLY_A_6'
const V2_QUICK_REPLY_A_8 = 'V2_QUICK_REPLY_A_8'
const V2_QUICK_REPLY_A_9 = 'V2_QUICK_REPLY_A_9'


//const V2_QUICK_REPLY_SHARE = 'V2_QUICK_REPLY_SHARE'
const V2_QUICK_REPLY_ACT = 'V2_QUICK_REPLY_ACT'
const V2_QUICK_REPLY_PRESSURE = 'V2_QUICK_REPLY_PRESSURE'
const V2_QUICK_REPLY_VOTE = 'V2_QUICK_REPLY_VOTE'




//
// The bot speech, based on quick replies.
// @param {Object} The bot configuration stored in database.
// @return {Object} The bot actions and messages.
//
export default botData => ({
  version: 'v2',
  actions: {
    [GET_STARTED]: GET_STARTED,
    [V2_QUICK_REPLY_CA]: V2_QUICK_REPLY_CA,
    [VMDM_QUICK_REPLY_I]: VMDM_QUICK_REPLY_I,
    [VMDM_EMAIL_ADDRESS_WRONG]: VMDM_EMAIL_ADDRESS_WRONG,
    [VMDM_EMAIL_ADDRESS_OK]: VMDM_EMAIL_ADDRESS_OK,
  },
  messages: {

    [PERSISTENT_MENU]: {
      locale: 'default',
      composer_input_disabled: false,
      call_to_actions: [
        {
          title: "Quero agir agora!",
          type: "postback",
          payload: "V2_QUICK_REPLY_ACT"
        },
        {
          title: "Radar Político",
          type: "postback",
          payload: "V2_QUICK_REPLY_RADAR"
        },
        {
          title: "Mais sobre a Beta",
          type: "postback",
          payload: "V2_QUICK_REPLY_MAIS"
        }
      ]
    },

    [GET_STARTED]: {
      text: botSpeeches.messages.I_AM_BETA,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A, botSpeeches.buttonTexts.LETS_GO),
      ],
    },

    [V2_QUICK_REPLY_A]: [
      botSpeeches.messages.CALL_INBOX,
      botSpeeches.messages.CALL_INBOX_1,
      messageWithGif(
        botSpeeches.messages.CALL_INBOX_2,
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.I_WANT)
      )
    ],
    /*[V2_QUICK_REPLY_B]: [
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
    },*/

    [V2_QUICK_REPLY_CA]: [
      botSpeeches.messages.LIST,
      carouselTemplate(
        elements(
          botSpeeches.carouselTexts.TITLE_ACT,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_ACT, //TODO
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_ACT,
              payload: V2_QUICK_REPLY_ACT
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_RADAR,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_RADAR,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_RADAR,
              payload: V2_QUICK_REPLY_RADAR
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_MORE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_MORE,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_MORE,
              payload: V2_QUICK_REPLY_MAIS
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_SHARE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_SHARE, //TODO
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_SHARE,
              payload: V2_QUICK_REPLY_F_3
            })
          ],
        ),
      )
    ],

    //
    // Mais sobre a beta
    //
    [V2_QUICK_REPLY_MAIS]: {
      text: botSpeeches.messages.MORE_ABOUT_BETA,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_1, botSpeeches.buttonTexts.I_WANT_1),
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK),
      ],
    },

    [V2_QUICK_REPLY_A_1]: [
      botSpeeches.messages.MORE_ABOUT_BETA_1,
      messageWithQuickReply(
        botSpeeches.messages.MORE_ABOUT_BETA_2,
        quickReply(V2_QUICK_REPLY_C_1, botSpeeches.buttonTexts.WHAT_NOISE),
        quickReply(V2_QUICK_REPLY_ACT, botSpeeches.buttonTexts.ACT_NOW)
      )
    ],
    [V2_QUICK_REPLY_C_1]: [
      botSpeeches.messages.BETA_WHAT_NOISE,
      messageWithQuickReply(
        botSpeeches.messages.BETA_WHAT_NOISE_1,
        quickReply(V2_QUICK_REPLY_E_1, botSpeeches.buttonTexts.THERE_IS_MORE),
        quickReply(V2_QUICK_REPLY_RADAR, botSpeeches.buttonTexts.RADAR)
      )
    ],
    [V2_QUICK_REPLY_E_1]: [
      botSpeeches.messages.THERE_IS_MORE,
      messageWithQuickReply(
        botSpeeches.messages.THERE_IS_MORE_1,
        quickReply(V2_QUICK_REPLY_G_1, botSpeeches.buttonTexts.HOW_TO_HELP),
        quickReply(V2_QUICK_REPLY_H_1, botSpeeches.buttonTexts.CAMPAIGN)
      )
    ],
    [V2_QUICK_REPLY_H_1]: {
      text: botSpeeches.messages.CAMPAIGN,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_G_1, botSpeeches.buttonTexts.WHAT_NOW),
      ],
    },
    [V2_QUICK_REPLY_G_1]: [
      botSpeeches.messages.HOW_TO_HELP,
      messageWithQuickReply(
        botSpeeches.messages.HOW_TO_HELP_1,
        quickReply(V2_QUICK_REPLY_I_1, botSpeeches.buttonTexts.SHARE),
        quickReply(V2_QUICK_REPLY_J_1, botSpeeches.buttonTexts.NOT_NOW)
      )
    ],
    [V2_QUICK_REPLY_J_1]: [
      botSpeeches.messages.NO_PROBLEM_CHECK_THE_WEBSITE,
      carouselTemplate(
        elements(
          botSpeeches.carouselTexts.TITLE_ACT,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_ACT, //TODO
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_ACT,
              payload: V2_QUICK_REPLY_ACT
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_RADAR,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_RADAR,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_RADAR,
              payload: V2_QUICK_REPLY_RADAR
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_MORE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_MORE,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_MORE,
              payload: V2_QUICK_REPLY_MAIS
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_SHARE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_SHARE,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_SHARE,
              payload: V2_QUICK_REPLY_F_3
            })
          ],
        ),
      )
    ],
    [V2_QUICK_REPLY_I_1]: [
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
    [V2_QUICK_REPLY_RADAR]: {
      text: botSpeeches.messages.RADAR,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.YES),
      ],
    },
    [V2_QUICK_REPLY_A_2]: [
      carouselTemplate(
        elements(
          botSpeeches.carouselTexts.PEC,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_PEC, 
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.PEC,
              payload: V2_QUICK_REPLY_PEC
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.STATUTE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_STATUTE, 
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.STATUTE,
              payload: V2_QUICK_REPLY_STATUTE
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.SUG,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_SUG, 
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.SUG,
              payload: V2_QUICK_REPLY_SUG
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.ADPF,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_ADPF, 
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.ADPF,
              payload: V2_QUICK_REPLY_ADPF
            })
          ],
        )
      )
    ],
    //
    // Radar da Beta - PEC 181
    //
    [V2_QUICK_REPLY_PEC]: {
      text: botSpeeches.messages.RADAR_PEC,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_3, botSpeeches.buttonTexts.WHAT_YOU_DID),
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.BACK_1),
      ],
    },
    [V2_QUICK_REPLY_A_3]: {
      text: botSpeeches.messages.BETA_DID,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_C_3, botSpeeches.buttonTexts.WHAT_NOW),
        quickReply(V2_QUICK_REPLY_D_3, botSpeeches.buttonTexts.PEC),
      ],
    },
    [V2_QUICK_REPLY_C_3]: [
      botSpeeches.messages.PEC,
      messageWithQuickReply(
        botSpeeches.messages.PEC_1,
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_F_3, botSpeeches.buttonTexts.SHARE)
      )
    ],
    [V2_QUICK_REPLY_D_3]: [
      botSpeeches.messages.PEC_HISTORY,
      messageWithQuickReply(
        botSpeeches.messages.PEC_HISTORY_1,
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_F_3, botSpeeches.buttonTexts.SHARE)
      )
    ],
    [V2_QUICK_REPLY_F_3]: [
      botSpeeches.messages.YOU_ROCK_1,
      //TODO: Add gif
      genericTemplate({
        title: 'A maior aliada feminista nas redes',
        subtitle: 'Chama a Beta no inbox',
        imageURL: botData.data.image_url || 'https://goo.gl/hzZfHA',
        buttons: [
          buttonTemplate.webURL({
            url: facebookFeedShare(`${process.env.APP_DOMAIN}/share`),
            title: 'Compartilhar',
          }), 
          buttonTemplate.postback({
            title: botSpeeches.buttonTexts.BACK,
            payload: V2_QUICK_REPLY_CA
          })
        ],
      }),
    ],

    //
    // Radar da Beta - STATUTE
    //
    [V2_QUICK_REPLY_STATUTE]: [
      botSpeeches.messages.STATUTE,
      messageWithQuickReply(
        botSpeeches.messages.STATUTE_1,
        quickReply(V2_QUICK_REPLY_A_4, botSpeeches.buttonTexts.STOPED),
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.BACK_1)
      )
    ],
    [V2_QUICK_REPLY_A_4]: [
      botSpeeches.messages.STATUTE_2,
      botSpeeches.messages.STATUTE_3,
      messageWithGif(
        botSpeeches.messages.STATUTE_4,
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_F_3, botSpeeches.buttonTexts.SHARE)
      )
    ],
    //
    // Radar da Beta - SUG 15
    //
    [V2_QUICK_REPLY_SUG]: [
      botSpeeches.messages.SUG,
      messageWithQuickReply(
        botSpeeches.messages.SUG_1,
        quickReply(V2_QUICK_REPLY_A_5, botSpeeches.buttonTexts.I_WANT),
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER)
      )
    ],
    [V2_QUICK_REPLY_A_5]: {
      text: botSpeeches.messages.SUG_2,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_F_3, botSpeeches.buttonTexts.SHARE),
      ],
    },
    //
    // Radar da Beta - ADPF 442
    //
    [V2_QUICK_REPLY_ADPF]: [
      botSpeeches.messages.ADPF,
      botSpeeches.messages.ADPF_1,
      messageWithQuickReply(
        botSpeeches.messages.ADPF_2,
        quickReply(V2_QUICK_REPLY_A_6, botSpeeches.buttonTexts.I_WANT),
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER)
      )
    ],
    [V2_QUICK_REPLY_A_6]: {
      text: botSpeeches.messages.ADPF_3,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_F_3, botSpeeches.buttonTexts.SHARE),
      ],
    },
    //
    // Quero agir agora
    //
    [V2_QUICK_REPLY_ACT]: [
      botSpeeches.messages.ACT_NOW,
      carouselTemplate(
        elements(
          botSpeeches.carouselTexts.PRESSURE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_VIOLENCE, 
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.PRESSURE,
              payload: V2_QUICK_REPLY_PRESSURE
            })
          ],
        ),
        elements(
          botSpeeches.carouselTexts.VOTE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_DECRIMINALIZATION,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.VOTE,
              payload: V2_QUICK_REPLY_VOTE
            })
          ],
        )
      )
    ],
    //
    // Violência Contra a Mulher
    //
    [V2_QUICK_REPLY_PRESSURE]: [
      botSpeeches.messages.PRESSURE,
      messageWithQuickReply(
        botSpeeches.messages.PRESSURE_1,
        quickReply(V2_QUICK_REPLY_A_8, botSpeeches.buttonTexts.I_WANT_DATA),
        quickReply(V2_QUICK_REPLY_ACT, botSpeeches.buttonTexts.OTHER_1)
      )
    ],
    [V2_QUICK_REPLY_A_8]: {
      text: botSpeeches.messages.PRESSURE_DATA,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_ACT, botSpeeches.buttonTexts.PRESSURE_OTHER),
        quickReply(V2_QUICK_REPLY_F_3, botSpeeches.buttonTexts.SHARE), //TODO: new share message
      ],
    },
    //
    // Descriminalização do Aborto
    //
    [V2_QUICK_REPLY_VOTE]: [
      botSpeeches.messages.VOTE,
      messageWithQuickReply(
        botSpeeches.messages.VOTE_1,
        quickReply(V2_QUICK_REPLY_A_9, botSpeeches.buttonTexts.EXPLAIN_MORE),
        quickReply(V2_QUICK_REPLY_ACT, botSpeeches.buttonTexts.OTHER_1)
      )
    ],
    [V2_QUICK_REPLY_A_9]: [
      botSpeeches.messages.VOTE_MORE,
      messageWithQuickReply(
        botSpeeches.messages.VOTE_MORE_1,
        quickReply(V2_QUICK_REPLY_ACT, botSpeeches.buttonTexts.PRESSURE_OTHER),
        quickReply(V2_QUICK_REPLY_F_3, botSpeeches.buttonTexts.SHARE), //TODO: new share message
      )
    ],


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
