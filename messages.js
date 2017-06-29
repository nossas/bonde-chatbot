const replyText = (title, payload) => ({
  content_type: 'text',
  title,
  payload
})

// Constants
const GET_STARTED = 'GET_STARTED'
const GET_STARTED_NOW = 'GET_STARTED_NOW'
const WANT_TO_ACT = 'WANT_TO_ACT'
const GET_STARTED_LATER = 'GET_STARTED_LATER'
const REPLY_UNDEFINED = 'REPLY_UNDEFINED'

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
      text: 'É isso aí, mana! A ideia é que a gente comece a se organizar agora para que, assim que a votação dessa PEC for agendada na Comissão de Constituição e Justiça (CCJ)  do Senado, milhares de pessoas já estejam preparadas para viralizar uma campanha contra esse absurdo.'
    }
  }
}
