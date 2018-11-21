

const a = [
//ADPF442 - PETIÇÃO
    /* [V2_QUICK_REPLY_PETITION_NAME1]: () => ({
      text: botSpeeches.messages.ADPF_PETITION_NAME
    }),
    [V2_QUICK_REPLY_PETITION_SURNAME1]: () => ({
      text: botSpeeches.messages.ADPF_PETITION_SURNAME
    }),
    [V2_QUICK_REPLY_PETITION_EMAIL1]: () => ({
      text: botSpeeches.messages.ADPF_PETITION_EMAIL
    }),
    [V2_PETITION_EMAIL_WRONG1]: ({
      text: botSpeeches.messages.EMAIL_ADDRESS_WRONG
    }),
    [V2_PETITION_EMAIL_OK1]: profile => ({
      text: botSpeeches.messages.EMAIL_SENT_PETITION_ADPF442(profile.first_name),
      quick_replies: [
        quickReply(V2_PETITION_SHARE_1, botSpeeches.buttonTexts.SHARE),
        quickReply(V2_PETITION_NOT_NOW, botSpeeches.buttonTexts.NOT_NOW),
      ],
    }),
    [V2_PETITION_SHARE_1]: [
      genericTemplate({
        title: 'Clique e entre em ação pelo direito ao aborto',
        subtitle: 'Nem presa nem morta, é pela vida das mulheres!',
        imageURL: 'https://goo.gl/P6MVUi',
        buttons: [
          buttonTemplate.shareCampaign({
            title: "Clique e entre em ação pelo direito ao aborto",
            subtitle: 'Nem presa nem morta, é pela vida das mulheres!',
            imageUrl: 'https://goo.gl/P6MVUi',
            url: 'https://m.me/beta.feminista?ref=adpf_442'
          })
        ],
      }),
      messageWithQuickReply(
        botSpeeches.messages.ADPF_PETITION_NOT_NOW,
        quickReply(V2_QUICK_REPLY_TAKE_ACTION_G, botSpeeches.buttonTexts.I_WANT_TO_GO),
        quickReply(V2_QUICK_REPLY_TAKE_ACTION_H, botSpeeches.buttonTexts.OTHER_ACTIONS)
      )
    ],
    [V2_PETITION_NOT_NOW]: {
      text: botSpeeches.messages.ADPF_PETITION_NOT_NOW,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_TAKE_ACTION_G, botSpeeches.buttonTexts.I_WANT_TO_GO),
        quickReply(V2_QUICK_REPLY_TAKE_ACTION_H, botSpeeches.buttonTexts.OTHER_ACTIONS)
      ],
    }, */
    //Fim ações da petição
    /* [V2_QUICK_REPLY_TAKE_ACTION_G]: {
      text: botSpeeches.messages.ADPF_TAKE_ACTION_G,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_ADPF442, botSpeeches.buttonTexts.BACK_1)
      ],
    },
    [V2_QUICK_REPLY_TAKE_ACTION_H]: {
      text: botSpeeches.messages.ADPF_TAKE_ACTION_H,
      quick_replies: [
        quickReply(V2_QUICK_REPLY_ADPF442, botSpeeches.buttonTexts.BACK_1)
      ],
    }, */
    //
    // ADPF 442 - O que é a ADPF 442
    //
    [V2_QUICK_REPLY_WHATS_ADPF442]: [
        botSpeeches.messages.WHATS_ADPF442,
        botSpeeches.messages.WHATS_ADPF442_1,
        messageWithQuickReply(
          botSpeeches.messages.WHATS_ADPF442_2,
          quickReply(V2_QUICK_REPLY_WHATS_ADPF442_A, botSpeeches.buttonTexts.HOWS_NOW),
          quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.BACK_1)
        )
      ],
      [V2_QUICK_REPLY_WHATS_ADPF442_A]: [
        botSpeeches.messages.WHATS_ADPF442_A,
        messageWithQuickReply(
          botSpeeches.messages.WHATS_ADPF442_A1,
          quickReply(V2_QUICK_REPLY_WHATS_ADPF442_C, botSpeeches.buttonTexts.I_WANT_A),
        )
      ],
      [V2_QUICK_REPLY_WHATS_ADPF442_C]: {
        text: botSpeeches.messages.WHATS_ADPF442_C,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.RADAR)
        ],
      },
      //
      // ADPF 442 - Mais sobre aborto
      //
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION]: {
        text: botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_A, botSpeeches.buttonTexts.I_WANT_B)
        ],
      },
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_A]: [
        botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_A,
        botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_A1,
        messageWithQuickReply(
          botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_A2,
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_B, botSpeeches.buttonTexts.STEP2),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        )
      ],
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_B]: [
        botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_B,
        messageWithQuickReply(
          botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_B1,
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_D, botSpeeches.buttonTexts.STEP3),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        )
      ],
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_D]: [
        botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_D,
        botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_D1,
        messageWithQuickReply(
          botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_D2,
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_E, botSpeeches.buttonTexts.STEP4),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        )
      ],
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_E]: [
        botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_E,
        messageWithQuickReply(
          botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_E1,
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_F, botSpeeches.buttonTexts.SEND_MORE),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        )
      ],
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_F]: {
        text: botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_F,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_G, botSpeeches.buttonTexts.ONE_MORE),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        ],
      },
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_G]: {
        text: botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_G,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_H, botSpeeches.buttonTexts.I_WANT_MORE),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        ],
      },
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_H]: {
        text: botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_H,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_I, botSpeeches.buttonTexts.NEXT_ROUND),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        ],
      },
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_I]: {
        text: botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_I,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_MORE_ABOUT_ABORTION_J, botSpeeches.buttonTexts.JUST_ONE_MORE),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        ],
      },
      [V2_QUICK_REPLY_MORE_ABOUT_ABORTION_J]: [
        botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_J,
        messageWithQuickReply(
          botSpeeches.messages.ADPF_MORE_ABOUT_ABORTION_J1,
          quickReply(V2_QUICK_REPLY_A_2, botSpeeches.buttonTexts.RADAR),
          quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK_1)
        )
      ],

    //
    // Mapa do Acolhimento
    //

    // TODO adcionar menu carrossel

    [V2_QUICK_REPLY_MAP]: {
        text: botSpeeches.messages.MAP,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_M4, botSpeeches.buttonTexts.I_WANT_SUPPORT),
          quickReply(V2_QUICK_REPLY_M4, botSpeeches.buttonTexts.I_WANT_TO_SUPPORT),
        ],
      },
      [V2_QUICK_REPLY_M4]: {
        text: botSpeeches.messages.MAP_1,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_M6_NAME, botSpeeches.buttonTexts.UNDERSTOOD),
        ],
      },
      [V2_QUICK_REPLY_M6_NAME]: () => ({
        text: botSpeeches.messages.MAP_NAME
      }),
      [V2_QUICK_REPLY_M6_SURNAME]: () => ({
        text: botSpeeches.messages.MAP_SURNAME
      }),
      [V2_QUICK_REPLY_M6_EMAIL]: () => ({
        text: botSpeeches.messages.MAP_EMAIL
      }),
      [V2_QUICK_REPLY_M6_CITY]: () => ({
        text: botSpeeches.messages.MAP_CITY
      }),
      [V2_QUICK_REPLY_M6_REGISTERED]: () => ({
        text: botSpeeches.messages.MAP_REGISTERED
      }),
      [V2_QUICK_REPLY_M6_EMAIL_ADDRESS_WRONG]: ({
        text: botSpeeches.messages.EMAIL_ADDRESS_WRONG
      }),

      [V2_QUICK_REPLY_M7]: {
        text: botSpeeches.messages.MAP_2,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE_FRIENDS),
        ],
      },
    //
    // Radar da Beta - SUG 15
    //
    /* [V2_QUICK_REPLY_SUG]: [
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
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE),
      ],
    }, */
    //
    // Radar da Beta - ADPF 442
    //
    /* [V2_QUICK_REPLY_ADPF]: [
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
        quickReply(V2_QUICK_REPLY_FRIENDS, botSpeeches.buttonTexts.SHARE),
      ],
    }, */

      // text: botSpeeches.messages.MORE_ABOUT_BETA,
      // quick_replies: [
      //   quickReply(V2_QUICK_REPLY_A_1, botSpeeches.buttonTexts.I_WANT_1),
      //   quickReply(V2_QUICK_REPLY_CA, botSpeeches.buttonTexts.BACK),
      // ],

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

    //
    // Discurso de ódio
    //
    [V2_QUICK_REPLY_DISCURSO_ODIO]: {
        text: botSpeeches.messages.DISCURSO_ODIO,
        quick_replies: [
          quickReply(V2_QUICK_REPLY_K_1, botSpeeches.buttonTexts.COMPLAINT),
          quickReply(V2_QUICK_REPLY_K_2, botSpeeches.buttonTexts.MORE_ABOUT_HATE_SPEECH),
        ],
      },

      [V2_QUICK_REPLY_K_1]: [
        botSpeeches.messages.DISCURSO_ODIO_1,
        messageWithQuickReply(
          botSpeeches.messages.DISCURSO_ODIO_2,
          quickReply(V2_QUICK_REPLY_K_1_2, botSpeeches.buttonTexts.LETS_GO),
        )
      ],
      [V2_QUICK_REPLY_K_1_2]: [
        botSpeeches.messages.DISCURSO_ODIO_3,
        messageWithQuickReply(
          botSpeeches.messages.DISCURSO_ODIO_4,
          quickReply(V2_QUICK_REPLY_K_1_3, botSpeeches.buttonTexts.SHARE),
          quickReply(V2_QUICK_REPLY_B, botSpeeches.buttonTexts.BACK_1),
        )
      ],
      [V2_QUICK_REPLY_K_1_3]: [
        genericTemplate({
          title: 'Discurso de ódio nas eleições não dá!',
          subtitle: 'Viu uma candidatura sendo atacada ou falando o que não deve? Denuncie!',
          imageURL: 'https://goo.gl/8AiVq6',
          buttons: [
            buttonTemplate.shareCampaign({
              title: 'Discurso de ódio nas eleições não dá!',
              subtitle: 'Viu uma candidatura sendo atacada ou falando o que não deve? Denuncie!',
              imageURL: 'https://goo.gl/8AiVq6',
              url: 'https://m.me/beta.feminista?ref=treta-aqui'
            }),
          ],
        }),
      ],

      [V2_QUICK_REPLY_K_2]: [
        messageWithQuickReply(
          botSpeeches.messages.DISCURSO_ODIO_5,
          quickReply(V2_QUICK_REPLY_K_2_1, botSpeeches.buttonTexts.YES),
          quickReply(V2_QUICK_REPLY_K_1_2, botSpeeches.buttonTexts.I_WANT_COMPLAINT),
        )
      ],

      [V2_QUICK_REPLY_K_2_1]: [
        botSpeeches.messages.DISCURSO_ODIO_6,
        botSpeeches.messages.DISCURSO_ODIO_7,
        messageWithQuickReply(
          botSpeeches.messages.DISCURSO_ODIO_8,
          quickReply(V2_QUICK_REPLY_K_2_2, botSpeeches.buttonTexts.I_WANT_COMPLAINT_STEP_2),
          quickReply(V2_QUICK_REPLY_K_1_2, botSpeeches.buttonTexts.I_WANT_COMPLAINT),
        )
      ],

      [V2_QUICK_REPLY_K_2_2]: [
        botSpeeches.messages.DISCURSO_ODIO_9,
        messageWithQuickReply(
          botSpeeches.messages.DISCURSO_ODIO_10,
          quickReply(V2_QUICK_REPLY_K_2_3, botSpeeches.buttonTexts.I_WANT_COMPLAINT_STEP_3),
          quickReply(V2_QUICK_REPLY_K_1_2, botSpeeches.buttonTexts.I_WANT_COMPLAINT),
        )
      ],

      [V2_QUICK_REPLY_K_2_3]: [
        botSpeeches.messages.DISCURSO_ODIO_11,
        messageWithQuickReply(
          botSpeeches.messages.DISCURSO_ODIO_12,
          quickReply(V2_QUICK_REPLY_K_1_2, botSpeeches.buttonTexts.I_WANT_COMPLAINT),
          quickReply(V2_QUICK_REPLY_K_1_3, botSpeeches.buttonTexts.SHARE),
        )
      ],

    //
    // Descriminalização do Aborto
    //
    /* [V2_QUICK_REPLY_VOTE]: [
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
    ], */

]