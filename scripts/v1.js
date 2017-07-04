const replyText = require('./utils/reply-text')

// Constants
// 1
const GET_STARTED = 'GET_STARTED'
const REPLY_UNDEFINED = 'REPLY_UNDEFINED'
// 2
const GET_STARTED_NOW = 'GET_STARTED_NOW'
const GET_STARTED_LATER = 'GET_STARTED_LATER'
// 3
const WANT_TO_ACT = 'WANT_TO_ACT'
const EXPLAIN_ABOUT = 'EXPLAIN_ABOUT'
// 4
const SEND_MAIL = 'SEND_MAIL'
const SEND_MAIL_ERROR = 'SEND_MAIL_ERROR'
// 5
const SEND = 'SEND'
// 6
const SURE = 'SURE'
// 7
const SHARED_NOW = 'SHARED_NOW'
const WHO_MAKE_YOU = 'WHO_MAKE_YOU'



// Public API
module.exports = {
  actions: {
    [GET_STARTED]: GET_STARTED,
    [REPLY_UNDEFINED]: REPLY_UNDEFINED
  },
  messages: {
    [GET_STARTED]: {
      text: 'E aí, mana, tudo bem? Não sei se já nos falamos antes, meu nome é Betânia, mas pode me chamar de Beta. Minha missão é ajudar a viralizar as lutas feministas pelas redes. Já tem uma causa precisando do seu apoio! Vamos lá?',
      quick_replies: [
        replyText('Vamos nessa!', GET_STARTED_NOW),
        replyText('Agora não...', GET_STARTED_LATER)
      ]
    },
    [REPLY_UNDEFINED]: {
      text: 'Ai, meus algoritmos, tá rolando uma incompatibilidade entre nós. Vou dar uma atualizada e já volto!',
      quick_replies: [
        replyText('Tentar novamente', GET_STARTED)
      ]
    },
    [GET_STARTED_LATER]: {
      text: 'Sem problemas! Quando quiser falar de novo, é só  me mandar um inbox. Te espero!  :).'
    },
    [GET_STARTED_NOW]: {
      text: 'Sabia que podia contar contigo! Não sei se você tá sabendo, mas os senadores acabaram de colocar em votação uma proposta para alterar  a Constituição e proibir o aborto em qualquer circunstância - mesmo naquelas em que ele é permitido atualmente!',
      quick_replies: [
        replyText('Conta mais!', EXPLAIN_ABOUT),
        replyText('Quero fazer alguma coisa!', WANT_TO_ACT)
      ]
    },
    [WANT_TO_ACT]: {
        text: 'Você arrasa! A ideia é a seguinte: vamos lotar a caixa de email de cada um desses senadores pedindo que não aprovem essa PEC. Com a nossa pressão direta, eles não deixarão uma medida tão absurda passar! Você não tem os emails deles? Não se preocupa, eu tenho! Vou fazer sua mensagem chegar até eles em menos de um minuto. Pra isso, eu preciso primeiro do seu e-mail. Diz aí qual é!',
        quick_replies: [
          replyText('Enviar e-mail correto!', SEND_MAIL),
          replyText('Enviar e-mail incorreto!', SEND_MAIL_ERROR)
        ]
    },
    [EXPLAIN_ABOUT]: {
      text: 'Senta que lá vem textão!. A PEC é uma proposta que pode  modificar algum artigo da nossa Constituição. No caso da PEC 29, ela propõe alterar o artigo 5º para que ele garanta a "proteção da vida desde a concepção". Voltando às aulas de biologia: se o espermatozóide encontrou o óvulo, já era! Caso essa PEC seja aprovada, qualquer tentativa de mexer com esse óvulo fecundado será considerada crime. Isso quer dizer que podemos dar adeus à possibilidade de aborto nos casos hoje previstos por lei:  aborto quando a gravidez é fruto de estupro, em casos de anencefalia fetal ou de risco de vida para gestante. Um retrocesso enorme e inaceitável! '+
      'Existe uma comissão no senado que avalia se as PECs são constitucionais ou não. Precisamos garantir que os membros dessa comissão rejeitem a PEC29. Se aprovada por eles, ela segue para votação no Senado, onde vamos precisar convencer quase todos os senadores a rejeitarem a proposta. Se não agirmos agora, pode ser tarde demais.',
      quick_replies: [
        replyText('Quero fazer alguma coisa!', WANT_TO_ACT)
      ]
    },
    [SEND_MAIL_ERROR]: {
      text: 'Ops, parece que você enviou um e-mail inválido. Pode checar o endereço e mandar aqui de novo, por favor? #NuncaTePediNada',
      quick_replies: [
        replyText('Enviar e-mail correto!', SEND_MAIL)
      ]
    },
    [SEND_MAIL]: {
      text: 'Perfeito, e-mail anotado.  Essa é a mensagem que vamos enviar em seu nome aos ministros do STF: {texto da pressão} Vou  enviar, ok?',
      quick_replies: [
        replyText('Pode mandar!', SEND),
        replyText('Agora não...', GET_STARTED_LATER)
      ]
    },
    [SEND]: (profile) => ({
      text: `Arrasou, ${profile.first_name}! Sua mensagem acaba de ser enviada à caixa de entrada dos senadores. Quer saber o que mais você pode fazer?`,
      quick_replies: [
        replyText('Agora não...', GET_STARTED_LATER),
        replyText('Mas é claro!', SURE)
      ]
    }),
    [SURE]: {
      text: 'A senhora é destruidora mesmo, hein? Pra nossa pressão ser eficaz, precisamos enviar milhares de emails. É aí que você entra: é muito importante que você convide mais pessoas a abrirem essa conversa comigo, assim elas podem enviar emails também!',
      quick_replies: [
        replyText('Compartilhar cazamiga.', SHARED_NOW),
        replyText('Quem te programou, hein?', WHO_MAKE_YOU)
      ]
    },
    [WHO_MAKE_YOU]: {
      text: 'Boa pergunta, mana! Várias organizações feministas estão por trás dessa campanha. Se quiser saber mais sobre tudo isso, entra nessa página aqui, ó:  www.pec29.beta.org.br',
      quick_replies: [
        replyText('Compartilhar cazamiga.', SHARED_NOW)
      ]
    },
    [SHARED_NOW]: {
      text: 'Muito obrigada pelo seu apoio, mana. Estamos juntas nessa luta! Se tiver qualquer novidade sobre a decisão, pode deixar que vou te manter atualizada por aqui. Seguimos juntas contra todos os retrocessos.'
    }
  }
}
