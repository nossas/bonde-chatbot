export default (bot, speech, botData) => (payload, reply) => {
  var ref = payload.referral.ref
  var message = ''
  console.log(payload.referral)
  switch (ref) {
    case 'pec_29':
      message = speech.messages.V2_QUICK_REPLY_O_1
      break
    case 'pec_29_action':
      message = speech.messages.V2_QUICK_REPLY_O_3
      break
    case 'cotas_intro':
      message = speech.messages.V2_QUICK_REPLY_N_1
      break
    case 'cotas_action':
      message = speech.messages.V2_QUICK_REPLY_N_3
      break
    case 'cotas_deeper_action':
      message = speech.messages.V2_QUICK_REPLY_N_2
      break
    case 'nascituro_rj_intro':
      message = speech.messages.NASCITURO_MESSAGE_A
      break
    case 'nascituro_rj_action':
      message = speech.messages.NASCITURO_QUICK_REPLY_YES
      break
    case 'sp_para_mulheres':
      message = speech.messages.V2_QUICK_REPLY_PRESSURE
      break
    case 'discriminalizacao_do_aborto':
      message = speech.messages.V2_QUICK_REPLY_VOTE
      break
    case 'oportunidades_de_acao':
      message = speech.messages.V2_QUICK_REPLY_ACT
      break
    case 'radar_politico':
      message = speech.messages.V2_QUICK_REPLY_RADAR
      break
    case 'pec_181':
      message = speech.messages.V2_QUICK_REPLY_PEC
      break
    case 'estatuto_nascituro':
      message = speech.messages.V2_QUICK_REPLY_STATUTE
      break
    case 'escola-sem-partido':
      message = speech.messages.V2_QUICK_REPLY_EDUCATION
      break
    case 'adpf_442':
      message = speech.messages.V2_QUICK_REPLY_ADPF442
      break
    case 'mais_sobre_aborto':
      message = speech.messages.V2_QUICK_REPLY_MORE_ABOUT_ABORTION
      break
    case 'treta_aqui':
      message = speech.messages.V2_QUICK_REPLY_DISCURSO_ODIO
      break
    case 'treta_aqui_denuciar':
      message = speech.messages.V2_QUICK_REPLY_K_1
      break
    case 'treta_aqui_mais_conteudo':
      message = speech.messages.V2_QUICK_REPLY_K_2
      break
    case 'stf_lgbt':
      message = speech.messages.V2_QUICK_REPLY_STF_ALLOUT
      break
    default:
      message = speech.messages.GET_STARTED
      break
  }

  const normalize = msg => {
    switch (msg.constructor) {
      case Function: return msg(profile)
      case String: return { text: msg }
      case Object: return msg
      default: throw new TypeError('The type of message variable is not supported.')
    }
  }

  if (message.constructor == Array) {
    const replySequentially = index => {
      if (index < message.length) {
        reply(normalize(message[index]), err => {
          if (err) console.error('Error sending multiple messages: (%s)', JSON.stringify(err))

          bot.sendSenderAction(payload.sender.id, 'typing_on')
          if (index === message.length - 1) {
            bot.sendSenderAction(payload.sender.id, 'typing_off')
          }

          setTimeout(() => replySequentially(index + 1), 5000)
        })
      }
    }
    replySequentially(0)
  } else reply(normalize(message))
}
