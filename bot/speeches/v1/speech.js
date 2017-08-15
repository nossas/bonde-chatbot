import { replyText } from '../utils'

//
// Constants
//
const REPLY_UNDEFINED = 'REPLY_UNDEFINED'
const ERROR_CRITICAL = 'ERROR_CRITICAL'
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
    [REPLY_UNDEFINED]: REPLY_UNDEFINED,
    [QUICK_REPLY_H]: QUICK_REPLY_H,
    [QUICK_REPLY_X]: QUICK_REPLY_X,
    [EMAIL_ADDRESS_WRONG]: EMAIL_ADDRESS_WRONG,
    [EMAIL_ADDRESS_OK]: EMAIL_ADDRESS_OK,
  },
  messages: {
    //
    // Texto que Beta responde quando não entende o comando
    //
    [REPLY_UNDEFINED]: {
      text: 'Ai, meus algoritmos. Acho que tá rolando uma incompatibilidade entre nós. Vou dar uma atualizada e já volto!',
      quick_replies: [
        replyText('Tentar novamente', GET_STARTED),
      ],
    },
    //
    // Se dá algum bug de fato na Beta
    //
    [ERROR_CRITICAL]: {
      text: 'Ai, tenta falar comigo depois? Precisei dar uma volta, uma atualizada, passar um óleo - acordei bugada hoje.'
    },
    //
    // Usuário abre conversa com a Beta no Messenger
    //
    [GET_STARTED]: {
      text: 'Alerta em Brasília! 🚨 Os deputados federais vão votar um projeto de lei (PL) que pode proibir totalmente o aborto no Brasil, mesmo nos casos hoje permitidos por lei. É de indignar até robô! Clicando num dos botões abaixo você pode ajudar a barrar esse retrocesso:',
      quick_replies: [
        replyText('Quero agir já!', QUICK_REPLY_A),
        replyText('Conta mais?', QUICK_REPLY_B),
      ],
    },
    [QUICK_REPLY_A]: {
      text: 'A estratégia é a seguinte: vou usar meus algoritmos para inundar a caixa de emails dos 513 deputados federais com mensagens exigindo que eles votem contra esse PL cruel. Você sabe: político é que nem feijão, só funciona sob pressão. Posso disparar o seu recado para eles, aqui mesmo, do inbox. Vamos lá?',
      quick_replies: [
        replyText('Vamos!', QUICK_REPLY_C),
        replyText('Como funciona?', QUICK_REPLY_D),
      ],
    },
    [QUICK_REPLY_B]: {
      text: '#SentaQueLáVemAHistória 📚 Desde 2007, tá tramitando no Congresso o Estatuto do Nascituro - um projeto que quer proibir o aborto inclusive nos casos em que ele é considerado legal: gravidez por estupro, gestação de embriões anencéfalos ou risco de morte para a gestante.\n\n' +

        'Deputados da bancada da Bíblia barganharam muito apoio a essa proposta, e agora, 10 anos depois, esse PL tem chances reais de ser aprovado. Precisamos nos mobilizar rápido para pressionar os parlamentares, garantir que esse absurdo não seja aprovado e impedir que as mulheres percam esse direito. Topa encarar essa missão?',
      quick_replies: [
        replyText('Quero agir já!', QUICK_REPLY_A),
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
      text: 'É o seguinte: eu fui programada pra disparar emails aqui mesmo, pelo inbox do Facebook. Não é feitiçaria, é tecnologia! ;) Antes de fazer seu email chegar aos deputados, eu vou te mostrar a mensagem que programei pra eles. Com o seu ok e o seu endereço de email, faço o recado chegar até lá.',
      quick_replies: [
        replyText('Tô dentro!', QUICK_REPLY_F),
        replyText('Agora não.', QUICK_REPLY_E),
      ],
    },
    [QUICK_REPLY_E]: {
      text: 'Tranquilo, mana! Se mudar de ideia, me chama novamente ;)',
    },
    [QUICK_REPLY_F]: () => ({
      text: `Sabia que podia contar com você! Essa aqui é a mensagem que vamos enviar aos deputados: *${(botData.data.pressure && global.widgets[botData.data.pressure.widget_id].settings.pressure_body.replace(/\n/g, '').slice(0, 540)) || '[TEXTO]'}* Concorda?`,
      quick_replies: [
        replyText('Concordo!', QUICK_REPLY_G),
        replyText('Não curti…', QUICK_REPLY_E),
      ],
    }),
    [QUICK_REPLY_G]: {
      text: 'Agora só preciso que me digite seu e-mail.',
    },
    [QUICK_REPLY_H]: profile => ({
      text: `Arrasou, ${profile.first_name}! Sua mensagem acabou de ser enviada à caixa de entrada dos deputados. Mas pra nossa pressão ser eficaz, mais pessoas precisam abrir uma conversa comigo e enviar emails também! Posso contar contigo pra espalhar o link do meu chat e chamar a galera pra ação?`,
      quick_replies: [
        replyText('Mas é claro!', QUICK_REPLY_J)
      ]
    }),
    [QUICK_REPLY_J]: {
      text: 'COMPARTILHAR NA TIMELINE',
    },
    [QUICK_REPLY_X]: {
      text: 'Boa! Agora preciso que você me passe seu email. Não se preocupe, isso não é um esquema pra você receber spam #realoficial. Só preciso disso porque você vai aparecer como remetente da mensagem que vamos enviar pra caixa de entrada de cada um dos deputados - eu sou só a mensageira. 📤',
    },
    [EMAIL_ADDRESS_WRONG]: {
      text: 'Ops, parece que você digitou um email inválido. Pode checar o endereço e mandar aqui de novo, por favor?',
    },
    [EMAIL_ADDRESS_OK]: {
      text: 'Perfeito, e-mail salvo. Agora é só clicar no botão "enviar":',
      quick_replies: [
        replyText('Enviar', QUICK_REPLY_H),
      ],
    },
  }
})
