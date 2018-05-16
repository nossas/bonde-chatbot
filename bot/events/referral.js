import * as botHelpers from '../helpers'

export default (bot, speech, botData) => (payload, reply) => {
    var ref = payload.referral.ref
    var message = '';

    switch (ref) {
        case 'violencia_contra_a_mulher':
            message = speech.messages.V2_QUICK_REPLY_PRESSURE
            break;
        case 'discriminalizacao_do_aborto':
            message = speech.messages.V2_QUICK_REPLY_VOTE
            break;
        case 'oportunidades_de_acao':
            message = speech.messages.V2_QUICK_REPLY_ACT
            break;
        case 'radar_politico':
            message = speech.messages.V2_QUICK_REPLY_RADAR
            break;
        case 'pec_181':
            message = speech.messages.V2_QUICK_REPLY_PEC
            break;
        case 'estatuto_nasciturno':
            message = speech.messages.V2_QUICK_REPLY_STATUTE
            break;
        case 'sug_15':
            message = speech.messages.V2_QUICK_REPLY_SUG
            break;
        case 'adpf_442':
            message = speech.messages.V2_QUICK_REPLY_ADPF
            break;
        default:
            message = speech.messages.GET_STARTED
            break;
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
