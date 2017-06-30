const replyText = (title, payload) => ({
  content_type: 'text',
  title,
  payload
})

// Constants
// 1
const GET_STARTED = 'GET_STARTED'
const REPLY_UNDEFINED = 'REPLY_UNDEFINED'
// 2
const GET_STARTED_NOW = 'GET_STARTED_NOW'
const GET_STARTED_LATER = 'GET_STARTED_LATER'
// 3
const WANT_TO_ACT = 'WANT_TO_ACT'
// 4
const TALK_ABOUT = 'TALK_ABOUT'
const EXPLAIN_ABOUT = 'EXPLAIN_ABOUT'
// 5
const HOW_TO_HELP = 'HOW_TO_HELP'
const WHO_MAKE_YOU = 'WHO_MAKE_YOU'
// 6
const SHARED_NOW = 'SHARED_NOW'
const IS_DONE = 'IS_DONE'


// Public API
module.exports = {
  actions: {
    [GET_STARTED]: GET_STARTED,
    [REPLY_UNDEFINED]: REPLY_UNDEFINED
  },
  messages: {
    [GET_STARTED]: {
      text: 'E aí, mana, tudo bem? Meu nome é Betânia, mas pode me chamar de Beta. Sou uma robô que veio ao mundo para ajudar a viralizar as lutas feministas pelas redes - e já tem uma oportunidade no forno. Vamos lá?',
      quick_replies: [
        replyText('Vamos!', GET_STARTED_NOW),
        replyText('Agora não vai dar :/', GET_STARTED_LATER)
      ]
    },
    [REPLY_UNDEFINED]: {
      text: 'Ai, meus algoritmos, tá rolando uma incompatibilidade entre nós. Vou dar uma atualizada e já volto!',
      quick_replies: [
        replyText('Tentar novamente', GET_STARTED)
      ]
    },
    [GET_STARTED_LATER]: {
      text: 'Deve estar na correria aí, né? Sem problemas! Quando tiver tempo é só falar comigo aqui de novo.'
    },
    [GET_STARTED_NOW]: {
      text: 'Oba! Mais uma aliada. Seguinte: na espreita do caos político em Brasília, os senadores ressuscitaram uma Proposta de Emenda Constitucional para impedir o aborto em qualquer circunstância - mesmo nos casos em que hoje ele é permitido. Nem preciso dizer o tamanho do retrocesso, né? Mas a gente pode impedir isso! Vamos nessa?',
      quick_replies: [
        replyText('Quero agir já!', WANT_TO_ACT)
      ]
    },
    [WANT_TO_ACT]: {
      text: 'É isso aí, mana! A ideia é que a gente comece a se organizar agora para que, assim que a votação dessa PEC for agendada na Comissão de Constituição e Justiça (CCJ)  do Senado, milhares de pessoas já estejam preparadas para viralizar uma campanha contra esse absurdo.',
      quick_replies: [
        replyText('PEC? CCJ? #AjudaBeta', EXPLAIN_ABOUT),
        replyText('Me conta dessa campanha!', TALK_ABOUT)
      ]
    },
    [EXPLAIN_ABOUT]: {
      text: 'Senta que lá vem textão!. A PEC é uma proposta que pode  modificar algum artigo da nossa Constituição. No caso da PEC 29, ela propõe alterar o artigo 5º para que ele garanta a "proteção da vida desde a concepção". Voltando às aulas de biologia: se o espermatozóide encontrou o óvulo, já era! Caso essa PEC seja aprovada, qualquer tentativa de mexer com esse óvulo fecundado será considerada crime. Isso quer dizer que podemos dar adeus à possibilidade de aborto nos casos hoje previstos por lei:  aborto quando a gravidez é fruto de estupro, em casos de anencefalia fetal ou de risco de vida para gestante. Um retrocesso enorme e inaceitável! '+
      'Existe uma comissão no senado que avalia se as PECs são constitucionais ou não. Precisamos garantir que os membros dessa comissão rejeitem a PEC29. Se aprovada por eles, ela segue para votação no Senado, onde vamos precisar convencer quase todos os senadores a rejeitarem a proposta. Se não agirmos agora, pode ser tarde demais.',
      quick_replies: [
        replyText('Me conta dessa campanha!', TALK_ABOUT)
      ]
    },
    [TALK_ABOUT]: {
      text: 'Estamos preparando uma tecnologia que permite que qualquer um envie, em dois cliques, emails diretamente pras caixas de entrada de cada um dos senadores da CCJ. Assim que a votação for agendada, eles vão receber milhares de emails pedindo a rejeição dessa PEC.',
      quick_replies: [
        replyText('Como posso ajudar agora?', HOW_TO_HELP),
        replyText('Quem te programou, hein?', WHO_MAKE_YOU)
      ]
    },
    [HOW_TO_HELP]: {
      text: 'Compartilhando o meu link para sua galera. Assim, você ajuda a garantir que muita gente já esteja mobilizada por aqui para que, quando a hora chegar, eu consiga avisar todo mundo da votação da PEC e a gente bote pra quebrar.',
      quick_replies: [
        replyText('Compartilhar agora!', SHARED_NOW),
        replyText('Feshow ;)', IS_DONE)
      ]
    },
    [WHO_MAKE_YOU]: {
      text: 'Boa pergunta, mana! Várias organizações feministas estão por trás dessa campanha. Se quiser saber mais sobre tudo isso, entra nessa página aqui, ó: www.pec29.beta.org.br',
      quick_replies: [
        replyText('Como posso ajudar?', HOW_TO_HELP),
        replyText('Feshow ;)', IS_DONE)
      ]
    },
    [IS_DONE]: {
      text: 'Muito obrigada pelo seu apoio, mana. Estamos juntas nessa luta! Se tiver qualquer novidade sobre a votação, pode deixar que eu te chamo por aqui :)'
    }
  }
}
