import { quickReply, elements, genericTemplate, carouselTemplate, buttonTemplate, messageWithQuickReply, messageWithGif } from '../utils' // multiMessages,
// import { image, video } from 'utils/content-types'
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
// const V2_QUICK_REPLY_B = 'V2_QUICK_REPLY_B'
const V2_QUICK_REPLY_CA = 'V2_QUICK_REPLY_CA'
// const V2_QUICK_REPLY_D = 'V2_QUICK_REPLY_D'

const V2_QUICK_REPLY_MAIS = 'V2_QUICK_REPLY_MAIS'
const V2_QUICK_REPLY_A_1 = 'V2_QUICK_REPLY_A_1'
// const V2_QUICK_REPLY_B_1 = 'V2_QUICK_REPLY_B_1'
const V2_QUICK_REPLY_C_1 = 'V2_QUICK_REPLY_C_1'
const V2_QUICK_REPLY_E_1 = 'V2_QUICK_REPLY_E_1'
// const V2_QUICK_REPLY_F_1 = 'V2_QUICK_REPLY_F_1'
const V2_QUICK_REPLY_G_1 = 'V2_QUICK_REPLY_G_1'
const V2_QUICK_REPLY_H_1 = 'V2_QUICK_REPLY_H_1'
// const V2_QUICK_REPLY_I_1 = 'V2_QUICK_REPLY_I_1'
const V2_QUICK_REPLY_J_1 = 'V2_QUICK_REPLY_J_1'

const V2_QUICK_REPLY_RADAR = 'V2_QUICK_REPLY_RADAR'
const V2_QUICK_REPLY_A_2 = 'V2_QUICK_REPLY_A_2'
// const V2_QUICK_REPLY_B_2 = 'V2_QUICK_REPLY_B_2'
// const V2_QUICK_REPLY_D_2 = 'V2_QUICK_REPLY_D_2'
// const V2_QUICK_REPLY_E_2 = 'V2_QUICK_REPLY_E_2'
// const V2_QUICK_REPLY_F_2 = 'V2_QUICK_REPLY_F_2'

const V2_QUICK_REPLY_PEC = 'V2_QUICK_REPLY_PEC'
// const V2_QUICK_REPLY_STATUTE = 'V2_QUICK_REPLY_STATUTE'
// const V2_QUICK_REPLY_SUG = 'V2_QUICK_REPLY_SUG'
const V2_QUICK_REPLY_ADPF = 'V2_QUICK_REPLY_ADPF'

const V2_QUICK_REPLY_A_3 = 'V2_QUICK_REPLY_A_3'
const V2_QUICK_REPLY_C_3 = 'V2_QUICK_REPLY_C_3'
const V2_QUICK_REPLY_D_3 = 'V2_QUICK_REPLY_D_3'
const V2_QUICK_REPLY_F_3 = 'V2_QUICK_REPLY_F_3'

// const V2_QUICK_REPLY_A_4 = 'V2_QUICK_REPLY_A_4'
// const V2_QUICK_REPLY_A_5 = 'V2_QUICK_REPLY_A_5'
const V2_QUICK_REPLY_A_6 = 'V2_QUICK_REPLY_A_6'
// const V2_QUICK_REPLY_A_8 = 'V2_QUICK_REPLY_A_8'
// const V2_QUICK_REPLY_A_9 = 'V2_QUICK_REPLY_A_9'

// const V2_QUICK_REPLY_SHARE = 'V2_QUICK_REPLY_SHARE'
const V2_QUICK_REPLY_ACT = 'V2_QUICK_REPLY_ACT'
// const V2_QUICK_REPLY_VOTE = 'V2_QUICK_REPLY_VOTE'
const V2_QUICK_REPLY_FRIENDS = 'V2_QUICK_REPLY_FRIENDS'

const V2_QUICK_REPLY_EDUCATION = 'V2_QUICK_REPLY_EDUCATION'
// const V2_QUICK_REPLY_A_10 = 'V2_QUICK_REPLY_A_10'
// const V2_QUICK_REPLY_B_10 = 'V2_QUICK_REPLY_B_10'
// const V2_QUICK_REPLY_C_10 = 'V2_QUICK_REPLY_C_10'
// const V2_QUICK_REPLY_D_10 = 'V2_QUICK_REPLY_D_10'
// const V2_QUICK_REPLY_F_10 = 'V2_QUICK_REPLY_F_10'
const V2_QUICK_REPLY_G_10 = 'V2_QUICK_REPLY_G_10'
const V2_QUICK_REPLY_E_10 = 'V2_QUICK_REPLY_E_10'
const V2_QUICK_REPLY_H_10 = 'V2_QUICK_REPLY_H_10'
const V2_EMAIL_ADDRESS_WRONG = 'V2_EMAIL_ADDRESS_WRONG'
const V2_EMAIL_ADDRESS_OK = 'V2_EMAIL_ADDRESS_OK'

// Mapa do acolhimento
// const V2_QUICK_REPLY_MAP = 'V2_QUICK_REPLY_MAP'
// const V2_QUICK_REPLY_M4 = 'V2_QUICK_REPLY_M4'
// const V2_QUICK_REPLY_M5 = 'V2_QUICK_REPLY_M5'
const V2_QUICK_REPLY_M6_NAME = 'V2_QUICK_REPLY_M6_NAME'
const V2_QUICK_REPLY_M6_SURNAME = 'V2_QUICK_REPLY_M6_SURNAME'
const V2_QUICK_REPLY_M6_EMAIL = 'V2_QUICK_REPLY_M6_EMAIL'
const V2_QUICK_REPLY_M6_CITY = 'V2_QUICK_REPLY_M6_CITY'
const V2_QUICK_REPLY_M6_REGISTERED = 'V2_QUICK_REPLY_M6_REGISTERED'
const V2_QUICK_REPLY_M6_EMAIL_ADDRESS_WRONG = 'V2_QUICK_REPLY_M6_EMAIL_ADDRESS_WRONG'
const V2_QUICK_REPLY_M7 = 'V2_QUICK_REPLY_M7'

// ADPF 442
const V2_QUICK_REPLY_ADPF442 = 'V2_QUICK_REPLY_ADPF442'
// ADPF 442 - Entrar em ação
// const V2_QUICK_REPLY_TAKE_ACTION = 'V2_QUICK_REPLY_TAKE_ACTION'
// const V2_QUICK_REPLY_TAKE_ACTION_A = 'V2_QUICK_REPLY_TAKE_ACTION_A'
// const V2_QUICK_REPLY_TAKE_ACTION_B = 'V2_QUICK_REPLY_TAKE_ACTION_B'
// const V2_QUICK_REPLY_TAKE_ACTION_C = 'V2_QUICK_REPLY_TAKE_ACTION_C'
// const V2_QUICK_REPLY_TAKE_ACTION_G = 'V2_QUICK_REPLY_TAKE_ACTION_G'
// const V2_QUICK_REPLY_TAKE_ACTION_H = 'V2_QUICK_REPLY_TAKE_ACTION_H'
// ADPF 442 - O que é ADPF442
// const V2_QUICK_REPLY_WHATS_ADPF442 = 'V2_QUICK_REPLY_WHATS_ADPF442'
// const V2_QUICK_REPLY_WHATS_ADPF442_A = 'V2_QUICK_REPLY_WHATS_ADPF442_A'
// const V2_QUICK_REPLY_WHATS_ADPF442_C = 'V2_QUICK_REPLY_WHATS_ADPF442_C'
// const V2_QUICK_REPLY_WHATS_ADPF442_E = 'V2_QUICK_REPLY_WHATS_ADPF442_E'
// ADPF 442 - Mais sobre aborto
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_A = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_A'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_B = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_B'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_D = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_D'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_E = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_E'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_F = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_F'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_G = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_G'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_H = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_H'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_I = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_I'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_J = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_J'
// const V2_QUICK_REPLY_MORE_ABOUT_ABORTION_C = 'V2_QUICK_REPLY_MORE_ABOUT_ABORTION_C'
// ADPF 442 - Petição
// const V2_QUICK_REPLY_ADPF_PETITION_TEXT = 'V2_QUICK_REPLY_ADPF_PETITION_TEXT'
const V2_QUICK_REPLY_PETITION_NAME = 'V2_QUICK_REPLY_PETITION_NAME'
const V2_QUICK_REPLY_PETITION_SURNAME = 'V2_QUICK_REPLY_PETITION_SURNAME'
const V2_QUICK_REPLY_PETITION_EMAIL = 'V2_QUICK_REPLY_PETITION_EMAIL'
const V2_PETITION_EMAIL_OK = 'V2_PETITION_EMAIL_OK'
const V2_PETITION_EMAIL_WRONG = 'V2_PETITION_EMAIL_WRONG'
// const V2_PETITION_SHARE = 'V2_PETITION_SHARE'
// const V2_PETITION_NOT_NOW = 'V2_PETITION_NOT_NOW'

const V2_QUICK_REPLY_PETITION_NAME1 = 'V2_QUICK_REPLY_PETITION_NAME1'
const V2_QUICK_REPLY_PETITION_SURNAME1 = 'V2_QUICK_REPLY_PETITION_SURNAME1'
const V2_QUICK_REPLY_PETITION_EMAIL1 = 'V2_QUICK_REPLY_PETITION_EMAIL1'
const V2_PETITION_EMAIL_OK1 = 'V2_PETITION_EMAIL_OK1'
const V2_PETITION_EMAIL_WRONG1 = 'V2_PETITION_EMAIL_WRONG1'
// const V2_PETITION_SHARE_1 = 'V2_PETITION_SHARE_1'

const V2_QUICK_REPLY_DISCURSO_ODIO = 'V2_QUICK_REPLY_DISCURSO_ODIO'

// const V2_QUICK_REPLY_K_1 = 'V2_QUICK_REPLY_K_1'
// const V2_QUICK_REPLY_K_1_2 = 'V2_QUICK_REPLY_K_1_2'
// const V2_QUICK_REPLY_K_1_3 = 'V2_QUICK_REPLY_K_1_3'
// const V2_QUICK_REPLY_K_2 = 'V2_QUICK_REPLY_K_2'
// const V2_QUICK_REPLY_K_2_1 = 'V2_QUICK_REPLY_K_2_1'
// const V2_QUICK_REPLY_K_2_2 = 'V2_QUICK_REPLY_K_2_2'
// const V2_QUICK_REPLY_K_2_3 = 'V2_QUICK_REPLY_K_2_3'

// REPLY NASCITURO RJ
const NASCITURO_QUICK_REPLY_A = 'NASCITURO_QUICK_REPLY_A'
const NASCITURO_QUICK_REPLY_YES = 'NASCITURO_QUICK_REPLY_YES'
const NASCITURO_QUICK_REPLY_BORA = 'NASCITURO_QUICK_REPLY_BORA'
const NASCITURO_QUICK_REPLY_SAIBA_MAIS = 'NASCITURO_QUICK_REPLY_SAIBA_MAIS'
const NASCITURO_QUICK_REPLY_NOW = 'NASCITURO_QUICK_REPLY_NOW'
const NASCITURO_QUICK_REPLY_READ = 'NASCITURO_QUICK_REPLY_READ'

// const V2_QUICK_REPLY_L_1 = 'V2_QUICK_REPLY_L_1'
// const V2_QUICK_REPLY_L_2 = 'V2_QUICK_REPLY_L_2'
// const V2_QUICK_REPLY_L_3 = 'V2_QUICK_REPLY_L_3'
// const V2_QUICK_REPLY_L_4 = 'V2_QUICK_REPLY_L_4'
// const V2_QUICK_REPLY_L_5 = 'V2_QUICK_REPLY_L_5'
// const V2_QUICK_REPLY_L_6 = 'V2_QUICK_REPLY_L_6'
// const V2_QUICK_REPLY_L_7 = 'V2_QUICK_REPLY_L_7'
// const V2_QUICK_REPLY_L_8 = 'V2_QUICK_REPLY_L_8'

const V2_QUICK_REPLY_N_1 = 'V2_QUICK_REPLY_N_1'
const V2_QUICK_REPLY_N_2 = 'V2_QUICK_REPLY_N_2'
const V2_QUICK_REPLY_N_3 = 'V2_QUICK_REPLY_N_3'
const V2_QUICK_REPLY_N_4 = 'V2_QUICK_REPLY_N_4'
const V2_QUICK_REPLY_N_5 = 'V2_QUICK_REPLY_N_5'

const V2_QUICK_REPLY_O_1 = 'V2_QUICK_REPLY_O_1'
const V2_QUICK_REPLY_O_2 = 'V2_QUICK_REPLY_O_2'
const V2_QUICK_REPLY_O_3 = 'V2_QUICK_REPLY_O_3'
const V2_QUICK_REPLY_O_4 = 'V2_QUICK_REPLY_O_4'
const V2_QUICK_REPLY_O_5 = 'V2_QUICK_REPLY_O_5'

const V2_QUICK_REPLY_RES_2232 = 'V2_QUICK_REPLY_RES_2232'
const V2_QUICK_REPLY_RES_2232_2 = 'V2_QUICK_REPLY_RES_2232_2'
const V2_QUICK_REPLY_RES_2232_3 = 'V2_QUICK_REPLY_RES_2232_3'

const V2_QUICK_REPLY_PEC_29 = 'V2_QUICK_REPLY_PEC_29'
const V2_QUICK_REPLY_PEC_29_2 = 'V2_QUICK_REPLY_PEC_29_2'
const V2_QUICK_REPLY_PEC_29_3 = 'V2_QUICK_REPLY_PEC_29_3'
const V2_QUICK_REPLY_PEC_29_4 = 'V2_QUICK_REPLY_PEC_29_4'

const V2_QUICK_REPLY_P_1 = 'V2_QUICK_REPLY_P_1'
const V2_QUICK_REPLY_P_2 = 'V2_QUICK_REPLY_P_2'
const V2_QUICK_REPLY_P_3 = 'V2_QUICK_REPLY_P_3'
const V2_QUICK_REPLY_P_4 = 'V2_QUICK_REPLY_P_4'

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
    [V2_QUICK_REPLY_EDUCATION]: V2_QUICK_REPLY_EDUCATION,
    [V2_QUICK_REPLY_G_10]: V2_QUICK_REPLY_G_10,
    [V2_EMAIL_ADDRESS_WRONG]: V2_EMAIL_ADDRESS_WRONG,
    [V2_EMAIL_ADDRESS_OK]: V2_EMAIL_ADDRESS_OK,
    [VMDM_QUICK_REPLY_I]: VMDM_QUICK_REPLY_I,
    [VMDM_EMAIL_ADDRESS_WRONG]: VMDM_EMAIL_ADDRESS_WRONG,
    [VMDM_EMAIL_ADDRESS_OK]: VMDM_EMAIL_ADDRESS_OK,
    [V2_QUICK_REPLY_M6_NAME]: V2_QUICK_REPLY_M6_NAME,
    [V2_QUICK_REPLY_M6_SURNAME]: V2_QUICK_REPLY_M6_SURNAME,
    [V2_QUICK_REPLY_M6_EMAIL]: V2_QUICK_REPLY_M6_EMAIL,
    [V2_QUICK_REPLY_M6_CITY]: V2_QUICK_REPLY_M6_CITY,
    [V2_QUICK_REPLY_M6_REGISTERED]: V2_QUICK_REPLY_M6_REGISTERED,
    [V2_QUICK_REPLY_M6_EMAIL_ADDRESS_WRONG]: V2_QUICK_REPLY_M6_EMAIL_ADDRESS_WRONG,
    [V2_QUICK_REPLY_M7]: V2_QUICK_REPLY_M7,
    // ADPF442 - Usando formulário de envio
    [V2_QUICK_REPLY_ADPF]: V2_QUICK_REPLY_ADPF,
    [V2_QUICK_REPLY_ADPF442]: V2_QUICK_REPLY_ADPF442,
    [V2_QUICK_REPLY_PETITION_NAME]: V2_QUICK_REPLY_PETITION_NAME,
    [V2_QUICK_REPLY_PETITION_SURNAME]: V2_QUICK_REPLY_PETITION_SURNAME,
    [V2_QUICK_REPLY_PETITION_EMAIL]: V2_QUICK_REPLY_PETITION_EMAIL,
    [V2_PETITION_EMAIL_WRONG]: V2_PETITION_EMAIL_WRONG,
    [V2_PETITION_EMAIL_OK]: V2_PETITION_EMAIL_OK,

    [V2_QUICK_REPLY_PETITION_NAME1]: V2_QUICK_REPLY_PETITION_NAME1,
    [V2_QUICK_REPLY_PETITION_SURNAME1]: V2_QUICK_REPLY_PETITION_SURNAME1,
    [V2_QUICK_REPLY_PETITION_EMAIL1]: V2_QUICK_REPLY_PETITION_EMAIL1,
    [V2_PETITION_EMAIL_WRONG1]: V2_PETITION_EMAIL_WRONG1,
    [V2_PETITION_EMAIL_OK1]: V2_PETITION_EMAIL_OK1,

    /* [V2_QUICK_REPLY_STF_ALLOUT]: V2_QUICK_REPLY_STF_ALLOUT, */
    [V2_QUICK_REPLY_DISCURSO_ODIO]: V2_QUICK_REPLY_DISCURSO_ODIO,

    // ACTIONS NASCITURO RJ
    [NASCITURO_QUICK_REPLY_A]: NASCITURO_QUICK_REPLY_A,
    [NASCITURO_QUICK_REPLY_YES]: NASCITURO_QUICK_REPLY_YES,
    [NASCITURO_QUICK_REPLY_BORA]: NASCITURO_QUICK_REPLY_BORA,
    [NASCITURO_QUICK_REPLY_SAIBA_MAIS]: NASCITURO_QUICK_REPLY_SAIBA_MAIS,
    [NASCITURO_QUICK_REPLY_NOW]: NASCITURO_QUICK_REPLY_NOW,
    [NASCITURO_QUICK_REPLY_READ]: NASCITURO_QUICK_REPLY_READ,

    // adpf
    [V2_QUICK_REPLY_A_6]: V2_QUICK_REPLY_A_6,

    // ACTIONS COTAS
    [V2_QUICK_REPLY_N_1]: V2_QUICK_REPLY_N_1,
    [V2_QUICK_REPLY_N_2]: V2_QUICK_REPLY_N_2,
    [V2_QUICK_REPLY_N_3]: V2_QUICK_REPLY_N_3,
    [V2_QUICK_REPLY_N_4]: V2_QUICK_REPLY_N_4,
    [V2_QUICK_REPLY_N_5]: V2_QUICK_REPLY_N_5,

    // ACTIONS COTAS
    [V2_QUICK_REPLY_O_1]: V2_QUICK_REPLY_O_1,
    [V2_QUICK_REPLY_O_2]: V2_QUICK_REPLY_O_2,
    [V2_QUICK_REPLY_O_3]: V2_QUICK_REPLY_O_3,
    [V2_QUICK_REPLY_O_4]: V2_QUICK_REPLY_O_4,
    [V2_QUICK_REPLY_O_5]: V2_QUICK_REPLY_O_5,
    [V2_QUICK_REPLY_RES_2232]: V2_QUICK_REPLY_RES_2232,
    [V2_QUICK_REPLY_PEC_29]: V2_QUICK_REPLY_PEC_29,

    [V2_QUICK_REPLY_P_1]: V2_QUICK_REPLY_P_1,
    [V2_QUICK_REPLY_P_2]: V2_QUICK_REPLY_P_2,
    [V2_QUICK_REPLY_P_3]: V2_QUICK_REPLY_P_3,
    [V2_QUICK_REPLY_P_4]: V2_QUICK_REPLY_P_4,
  },
  messages: {

    [PERSISTENT_MENU]: {
      locale: 'default',
      composer_input_disabled: false,
      call_to_actions: [
        // {
        //   title: 'Mais Armas Mais Feminicídio',
        //   type: 'postback',
        //   payload: V2_QUICK_REPLY_O_1
        // },
        // {
        //   title: 'Outras Ações',
        //   type: 'postback',
        //   payload: V2_QUICK_REPLY_ACT
        // },

        {
          title: 'Radar',
          type: 'postback',
          payload: V2_QUICK_REPLY_RADAR
        },
        {
          title: 'Mais sobre a Beta',
          type: 'postback',
          payload: V2_QUICK_REPLY_MAIS
        },
        {
          title: 'Compartilhe',
          type: 'postback',
          payload: V2_QUICK_REPLY_FRIENDS
        }
      ]
    },

    [GET_STARTED]: {
      text: botSpeeches.messages.I_AM_BETA,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A, botSpeeches.buttonTexts.LETS_GO)
      ]
    },

    [V2_QUICK_REPLY_A]: [
      botSpeeches.messages.CALL_INBOX,
      botSpeeches.messages.CALL_INBOX_1,
      messageWithGif(
        botSpeeches.messages.CALL_INBOX_2,
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.I_WANT)
      )
    ],

    // [V2_QUICK_REPLY_B]: [
    //   botSpeeches.messages.LIST,
    //   carouselTemplate(
    //     elements(
    //       botSpeeches.carouselTexts.TITLE_ACT,
    //       botSpeeches.carouselTexts.SUBTITLE,
    //       botSpeeches.carouselTexts.IMAGE_ACT,
    //       [
    //         buttonTemplate.postback({
    //           title: botSpeeches.carouselTexts.BUTTON_ACT,
    //           payload: V2_QUICK_REPLY_ACT
    //         })
    //       ]
    //     ),
    //     elements(
    //       botSpeeches.carouselTexts.TITLE_RADAR,
    //       botSpeeches.carouselTexts.SUBTITLE,
    //       botSpeeches.carouselTexts.IMAGE_RADAR,
    //       [
    //         buttonTemplate.postback({
    //           title: botSpeeches.carouselTexts.BUTTON_RADAR,
    //           payload: V2_QUICK_REPLY_RADAR
    //         })
    //       ]
    //     ),
    //     elements(
    //       botSpeeches.carouselTexts.TITLE_MORE,
    //       botSpeeches.carouselTexts.SUBTITLE,
    //       botSpeeches.carouselTexts.IMAGE_MORE,
    //       [
    //         buttonTemplate.postback({
    //           title: botSpeeches.carouselTexts.BUTTON_MORE,
    //           payload: V2_QUICK_REPLY_MAIS
    //         })
    //       ]
    //     ),
    //     elements(
    //       botSpeeches.carouselTexts.TITLE_SHARE,
    //       botSpeeches.carouselTexts.SUBTITLE,
    //       botSpeeches.carouselTexts.IMAGE_SHARE, // TODO
    //       [
    //         buttonTemplate.postback({
    //           title: botSpeeches.carouselTexts.BUTTON_SHARE,
    //           payload: V2_QUICK_REPLY_FRIENDS
    //         })
    //       ]
    //     )
    //   )
    // ],

    [V2_QUICK_REPLY_CA]: [
      botSpeeches.messages.LIST,
      carouselTemplate(
        // elements(
        //   botSpeeches.carouselTexts.TITLE_ACT,
        //   botSpeeches.carouselTexts.SUBTITLE,
        //   botSpeeches.carouselTexts.IMAGE_ACT,
        //   [
        //     buttonTemplate.postback({
        //       title: botSpeeches.carouselTexts.BUTTON_ACT,
        //       payload: V2_QUICK_REPLY_ACT
        //     })
        //   ]
        // ),
        elements(
          botSpeeches.carouselTexts.TITLE_RADAR,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_RADAR,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_RADAR,
              payload: V2_QUICK_REPLY_RADAR
            })
          ]
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
          ]
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_SHARE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_SHARE, // TODO
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_SHARE,
              payload: V2_QUICK_REPLY_FRIENDS
            })
          ]
        )
      )
    ],

    //
    // Radar da Beta
    //
    [V2_QUICK_REPLY_RADAR]: {
      text: botSpeeches.messages.RADAR,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.YES)
      ]
    },
    [V2_QUICK_REPLY_A_2]: [
      carouselTemplate(
        elements(
          botSpeeches.carouselTexts.TITLE_RADAR_PEC_29,
          botSpeeches.carouselTexts.SUBTITLE_RADAR_PEC_29,
          botSpeeches.carouselTexts.IMAGE_RADAR_PEC_29,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_RADAR_PEC_29,
              payload: V2_QUICK_REPLY_PEC_29
            })
          ]
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_RADAR_RES_2232,
          botSpeeches.carouselTexts.SUBTITLE_RADAR_RES_2232,
          botSpeeches.carouselTexts.IMAGE_RADAR_RES_2232,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_RADAR_RES_2232,
              payload: V2_QUICK_REPLY_RES_2232
            })
          ]
        ),
        elements(
          botSpeeches.carouselTexts.TITLE_RADAR_PEC_181,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_PEC,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.PEC,
              payload: V2_QUICK_REPLY_PEC
            })
          ]
        ),
        elements(
          botSpeeches.carouselTexts.ADPF,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_ADPF442_2,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.ADPF_BUTTON,
              payload: V2_QUICK_REPLY_ADPF
            })
          ]
        )
      )
    ],

    [V2_QUICK_REPLY_PEC_29]: {
      text: botSpeeches.messages.PEC_29_RADAR_1,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_PEC_29_2, botSpeeches.buttonTexts.WHAT_YOU_DID),
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.BACK_1)
      ]
    },
    [V2_QUICK_REPLY_PEC_29_2]: {
      text: botSpeeches.messages.PEC_29_RADAR_2,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_PEC_29_3, botSpeeches.buttonTexts.WHAT_NOW),
        quickReply(V2_QUICK_REPLY_PEC_29_4, botSpeeches.buttonTexts.PEC)
      ]
    },
    [V2_QUICK_REPLY_PEC_29_3]: {
      text: botSpeeches.messages.PEC_29_RADAR_3,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE)
      ]
    },
    [V2_QUICK_REPLY_PEC_29_4]: [
      botSpeeches.messages.PEC_29_RADAR_4,
      messageWithQuickReply(
        botSpeeches.messages.PEC_29_RADAR_5,
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE)
      )
    ],

    [V2_QUICK_REPLY_RES_2232]: {
      text: botSpeeches.messages.RES_2232_RADAR_1,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_RES_2232_2, botSpeeches.buttonTexts.TELL_ME),
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.BACK_1)
      ]
    },
    [V2_QUICK_REPLY_RES_2232_2]: {
      text: botSpeeches.messages.RES_2232_RADAR_2,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_RES_2232_3, botSpeeches.buttonTexts.WHAT_YOU_DID),
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.BACK_1)
      ]
    },
    [V2_QUICK_REPLY_RES_2232_3]: {
      text: botSpeeches.messages.RES_2232_RADAR_3,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE)
      ]
    },

    //
    // Radar da Beta - PEC 181
    //
    [V2_QUICK_REPLY_PEC]: {
      text: botSpeeches.messages.RADAR_PEC,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_3, botSpeeches.buttonTexts.WHAT_YOU_DID),
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.BACK_1)
      ]
    },
    [V2_QUICK_REPLY_A_3]: {
      text: botSpeeches.messages.BETA_DID,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_C_3, botSpeeches.buttonTexts.WHAT_NOW),
        quickReply(V2_QUICK_REPLY_D_3, botSpeeches.buttonTexts.PEC)
      ]
    },
    [V2_QUICK_REPLY_C_3]: [
      botSpeeches.messages.PEC,
      messageWithQuickReply(
        botSpeeches.messages.PEC_1,
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE)
      )
    ],
    [V2_QUICK_REPLY_D_3]: [
      botSpeeches.messages.PEC_HISTORY,
      messageWithQuickReply(
        botSpeeches.messages.PEC_HISTORY_1,
        quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.OTHER),
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE)
      )
    ],
    [V2_QUICK_REPLY_F_3]: [
      botSpeeches.messages.YOU_ROCK_1,
      // TODO: Add gif
      genericTemplate({
        title: 'A maior aliada feminista nas redes',
        subtitle: 'Chama a Beta no inbox',
        imageURL: botData.data.image_url || 'https://goo.gl/hzZfHA',
        buttons: [
          buttonTemplate.webURL({
            url: facebookFeedShare(`${process.env.APP_DOMAIN}/share`),
            title: 'Compartilhar'
          }),
          buttonTemplate.postback({
            title: botSpeeches.buttonTexts.BACK,
            payload: V2_QUICK_REPLY_CA
          })
        ]
      })
    ],

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
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE)
      ]
    },

    //
    // Mais sobre a beta
    //
    [V2_QUICK_REPLY_MAIS]: {
      text: botSpeeches.messages.MORE_ABOUT_BETA,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_A_1, botSpeeches.buttonTexts.I_WANT_1),
        quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK)
      ]
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
        quickReply(V2_QUICK_REPLY_G_1, botSpeeches.buttonTexts.WHAT_NOW)
      ]
    },
    [V2_QUICK_REPLY_G_1]: [
      botSpeeches.messages.HOW_TO_HELP,
      messageWithQuickReply(
        botSpeeches.messages.HOW_TO_HELP_1,
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE),
        quickReply(V2_QUICK_REPLY_J_1, botSpeeches.buttonTexts.NOT_NOW)
      )
    ],
    [V2_QUICK_REPLY_J_1]: [
      botSpeeches.messages.NO_PROBLEM_CHECK_THE_WEBSITE
    ],

    //
    // Compartilhamento com amigos
    //

    [V2_QUICK_REPLY_FRIENDS]: [
      botSpeeches.messages.YOU_ROCK_1,
      {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'media',
            elements: [
              {
                media_type: 'image',
                url: 'https://business.facebook.com/beta.staging/photos/476258103021865',
                buttons: [
                  {
                    type: 'web_url',
                    url: 'https://m.me/beta.feminista',
                    title: 'Chama a Beta no inbox'
                  }
                ]
              }
            ]
          }
        }
      }
      // carouselTemplate(
      //   elements(
      //     'A maior aliada feminista nas redes',
      //     'Chama a Beta no inbox',
      //     'https://chatbox-beta.s3.amazonaws.com/carousel-fb/%5Bbeta%5Dshare.png',
      //     [
      //       buttonTemplate.elementShare()
      //     ]
      //   )
      // )
    ],

    //
    // Quero agir agora
    //
    [V2_QUICK_REPLY_ACT]: [
      botSpeeches.messages.ACT_NOW,
      carouselTemplate(
        elements(
          botSpeeches.carouselTexts.TITLE_PL_3723,
          botSpeeches.carouselTexts.SUBTITLE_PL_3723,
          botSpeeches.carouselTexts.IMAGE_PL_3723,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.BUTTON_PL_3723,
              payload: V2_QUICK_REPLY_O_1
            })
          ]
        )
        /* elements(
          botSpeeches.carouselTexts.VOTE,
          botSpeeches.carouselTexts.SUBTITLE,
          botSpeeches.carouselTexts.IMAGE_DECRIMINALIZATION,
          [
            buttonTemplate.postback({
              title: botSpeeches.carouselTexts.VOTE,
              payload: V2_QUICK_REPLY_VOTE
            })
          ],
        ) */
      )
    ],

    // ADPF 442: Assinar petição (O que é ADPF e Mais sobre o aborto)
    // [V2_QUICK_REPLY_PETITION_NAME]: () => ({
    //   text: botSpeeches.messages.STF_ALLOUT_11
    // }),
    // [V2_QUICK_REPLY_PETITION_SURNAME]: () => ({
    //   text: botSpeeches.messages.ADPF_PETITION_SURNAME
    // }),
    // [V2_QUICK_REPLY_PETITION_EMAIL]: () => ({
    //   text: botSpeeches.messages.ADPF_PETITION_EMAIL
    // }),
    // [V2_PETITION_EMAIL_WRONG]: ({
    //   text: botSpeeches.messages.EMAIL_ADDRESS_WRONG
    // }),
    // [V2_PETITION_EMAIL_OK]: profile => ({
    //   text: botSpeeches.messages.STF_ALLOUT_12,
    //   quick_replies: [
    //     quickReply(V2_QUICK_REPLY_L_8, botSpeeches.buttonTexts.SHARE),
    //     quickReply(V2_QUICK_REPLY_L_5, botSpeeches.buttonTexts.BACK_1)
    //   ]
    // }),
    // // ADPF 442: Compartilhamento
    // [V2_QUICK_REPLY_L_8]: [
    //   genericTemplate({
    //     title: 'Proteja a vida das pessoas LGBT+',
    //     subtitle: 'A hora de agir é agora!',
    //     imageURL: 'https://s3.amazonaws.com/chatbox-beta/campaigns/Share-Beta-AllOut.jpg',
    //     buttons: [
    //       buttonTemplate.shareCampaign({
    //         title: 'Proteja a vida das pessoas LGBT+',
    //         subtitle: 'A hora de agir é agora!',
    //         imageUrl: 'https://s3.amazonaws.com/chatbox-beta/campaigns/Share-Beta-AllOut.jpg',
    //         url: 'https://m.me/beta.feminista?ref=stf_lgbt'
    //       })
    //     ]
    //   })
    //   messageWithQuickReply(
    //     botSpeeches.messages.ADPF_PETITION_NOT_NOW,
    //     quickReply(V2_QUICK_REPLY_TAKE_ACTION_G, botSpeeches.buttonTexts.I_WANT_TO_GO),
    //     quickReply(V2_QUICK_REPLY_TAKE_ACTION_H, botSpeeches.buttonTexts.OTHER_ACTIONS)
    //   )
    // ],
    //
    // Escola sem partido
    //
    // [V2_QUICK_REPLY_EDUCATION]: {
    //   text: botSpeeches.messages.EDUCATION,
    //   quick_replies: [
    //     quickReply(V2_QUICK_REPLY_A_10, botSpeeches.buttonTexts.YES)
    //   ]
    // },
    // [V2_QUICK_REPLY_A_10]: [
    //   botSpeeches.messages.EDUCATION_1,
    //   botSpeeches.messages.EDUCATION_2,
    //   messageWithQuickReply(
    //     botSpeeches.messages.EDUCATION_3,
    //     quickReply(V2_QUICK_REPLY_B_10, botSpeeches.buttonTexts.IF_APPROVED),
    //     quickReply(V2_QUICK_REPLY_C_10, botSpeeches.buttonTexts.PRESSURE_NOW)
    //   )
    // ],
    // [V2_QUICK_REPLY_B_10]: [
    //   botSpeeches.messages.IF_APPROVED,
    //   messageWithQuickReply(
    //     botSpeeches.messages.IF_APPROVED_1,
    //     quickReply(V2_QUICK_REPLY_C_10, botSpeeches.buttonTexts.TAKE_ACTION),
    //     quickReply(V2_QUICK_REPLY_D_10, botSpeeches.buttonTexts.MORE_ABOUT_PROJECT)
    //   )
    // ],
    // [V2_QUICK_REPLY_D_10]: [
    //   botSpeeches.messages.EDUCATION_MORE,
    //   botSpeeches.messages.EDUCATION_MORE_1,
    //   messageWithQuickReply(
    //     botSpeeches.messages.EDUCATION_MORE_2,
    //     quickReply(V2_QUICK_REPLY_C_10, botSpeeches.buttonTexts.TAKE_ACTION)
    //   )
    // ],
    // [V2_QUICK_REPLY_C_10]: [
    //   botSpeeches.messages.EDUCATION_ACTION,
    //   messageWithQuickReply(
    //     botSpeeches.messages.EDUCATION_ACTION_1,
    //     quickReply(V2_QUICK_REPLY_F_10, botSpeeches.buttonTexts.READ_EMAIL),
    //     quickReply(V2_QUICK_REPLY_G_10, botSpeeches.buttonTexts.SEND_NOW_1)
    //   )
    // ],
    // [V2_QUICK_REPLY_F_10]: {
    //   text: botSpeeches.messages.EDUCATION_MESSAGE,
    //   quick_replies: [
    //     quickReply(V2_QUICK_REPLY_G_10, botSpeeches.buttonTexts.SEND_NOW_1)
    //   ]
    // },

    //
    // CAMPANHA AÇÃO ATIVA
    //
    [V2_QUICK_REPLY_P_1]: [
      messageWithQuickReply(
        botSpeeches.messages.REABERTURA_PEROLA_1,
        quickReply(V2_QUICK_REPLY_P_3, botSpeeches.buttonTexts.PEC_29_ACT_NOW),
        quickReply(V2_QUICK_REPLY_P_2, botSpeeches.buttonTexts.TELL_ME_MORE)
      )
    ],
    [V2_QUICK_REPLY_P_2]: [
      botSpeeches.messages.REABERTURA_PEROLA_2,
      messageWithQuickReply(
        botSpeeches.messages.REABERTURA_PEROLA_3,
        quickReply(V2_QUICK_REPLY_P_3, botSpeeches.buttonTexts.PEC_29_GO)
      )
    ],
    [V2_QUICK_REPLY_P_3]: {
      text: botSpeeches.messages.REABERTURA_PEROLA_4,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_G_10, botSpeeches.buttonTexts.NASCITURO_QUICK_REPLY_NOW),
        quickReply(V2_QUICK_REPLY_P_4, botSpeeches.buttonTexts.NASCITURO_QUICK_REPLY_READ)
      ]
    },
    [V2_QUICK_REPLY_P_4]: {
      text: botSpeeches.messages.REABERTURA_PEROLA_5,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_G_10, botSpeeches.buttonTexts.PEC_29_WANT)
      ]
    },

    [V2_QUICK_REPLY_G_10]: () => ({
      text: botSpeeches.messages.EMAIL_ADDRESS_ASK_1
    }),
    [V2_EMAIL_ADDRESS_WRONG]: ({
      text: botSpeeches.messages.EMAIL_ADDRESS_WRONG
    }),
    [V2_EMAIL_ADDRESS_OK]: profile => ({
      text: botSpeeches.messages.EMAIL_SENT_CONTRA_ESCOLA_SEM_PARTIDO(profile.first_name),
      quick_replies: [
        quickReply(V2_QUICK_REPLY_H_10, botSpeeches.buttonTexts.SHARE),
        quickReply(V2_QUICK_REPLY_E_10, botSpeeches.buttonTexts.NOT_NOW)
      ]
    }),
    // Share campaign
    [V2_QUICK_REPLY_H_10]: [
      {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'media',
            elements: [
              {
                media_type: 'image',
                url: 'https://www.facebook.com/photo/?fbid=546146816032993&set=a.131527380828274',
                buttons: [
                  {
                    type: 'web_url',
                    url: 'https://m.me/beta.feminista?ref=reabertura_perola',
                    title: 'Pressionar'
                  }
                ]
              }
            ]
          }
        }
      }
    ],

    [V2_QUICK_REPLY_E_10]: [
      botSpeeches.messages.NO_PROBLEM_CHECK_MY_FACEBOOK_PAGE
    ],

    //
    // Usuário abre conversa com a Beta via Mensagem em Massa
    //
    [VMDM_QUICK_REPLY_X]: () => ({
      ...botSpeeches.messages.SLOW_CLAPPING,
      quick_replies: [
        quickReply(VMDM_QUICK_REPLY_J, botSpeeches.buttonTexts.SHARE)
      ]
    }),
    [VMDM_QUICK_REPLY_G]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_READ_THE_PRESSURE_TEXT,
      quick_replies: [
        quickReply(VMDM_QUICK_REPLY_I, botSpeeches.buttonTexts.SEND_NOW),
        quickReply(VMDM_QUICK_REPLY_H, botSpeeches.buttonTexts.READ_MESSAGE)
      ]
    }),
    [VMDM_QUICK_REPLY_H]: () => ({
      text: botSpeeches.messages.PEC_181_TROJAN_HORSE_PRESSURE_TEXT,
      quick_replies: [
        quickReply(VMDM_QUICK_REPLY_I, botSpeeches.buttonTexts.MESSAGE_APPROVED)
      ]
    }),
    [VMDM_QUICK_REPLY_I]: () => ({
      text: botSpeeches.messages.EMAIL_ADDRESS_ASK
    }),
    [VMDM_QUICK_REPLY_J]: genericTemplate({

      title: 'Clique aqui para conversar com a Beta no inbox!',
      subtitle: 'A maior aliada feminista nas redes.',
      imageURL: botData.data.image_url || 'https://s3.amazonaws.com/chatbox-beta/carousel-fb/%5Bbeta%5Dshare.png',
      buttons: [
        buttonTemplate.webURL({
          url: facebookFeedShare(`${process.env.APP_DOMAIN}/share`),
          title: 'Compartilhar'
        })
      ]
    }),
    [VMDM_EMAIL_ADDRESS_WRONG]: ({
      text: botSpeeches.messages.EMAIL_ADDRESS_WRONG
    }),
    [VMDM_EMAIL_ADDRESS_OK]: profile => ({
      text: botSpeeches.messages.EMAIL_SENT_PEC_181_TROJAN_HORSE(profile.first_name),
      quick_replies: [
        quickReply(VMDM_QUICK_REPLY_J, botSpeeches.buttonTexts.SURE_BETA)
        // quickReply(V1_QUICK_REPLY_D, botSpeeches.buttonTexts.NOT_NOW)
      ]
    })
  }
})
