import { replyText } from './utils'

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
const QUICK_REPLY_I = 'QUICK_REPLY_I'
const QUICK_REPLY_J = 'QUICK_REPLY_J'
const QUICK_REPLY_L = 'QUICK_REPLY_L'

export default {
  actions: {
    [GET_STARTED]: GET_STARTED,
    [REPLY_UNDEFINED]: REPLY_UNDEFINED
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
      text: 'Quem me chamou? Ai, eu não me aguento! ;) Meu nome é Betânia, mas pode me chamar de Beta. Prazer! Sou uma robô feminista até o último código. Pra interagir comigo, é só apertar o botão abaixo. Vamos nessa?',
      quick_replies: [
        replyText('Vamos!', QUICK_REPLY_A),
      ],
    },
    [QUICK_REPLY_A]: {
      text: 'Antes que você corra pro Google, deixa eu mesma te contar. Sou brasileira de nascença - fui programada em tupinicode ;) Minha missão? Potencializar a luta pelos direitos das mulheres no Brasil. Quer que eu te conte mais ou vá direto ao ponto?',
      quick_replies: [
        replyText('Conta!', QUICK_REPLY_B),
        replyText('#SemRodeios', QUICK_REPLY_C),
      ],
    },
    [QUICK_REPLY_B]: {
      text: 'Você provavelmente já tá sabendo que tem muito político conservador tentando emplacar retrocessos aos direitos das mulheres em Brasília. Às vezes, fica difícil acreditar que a gente ainda vive num sistema tão desatualizado. Quer saber o que tá pegando?',
      quick_replies: [
        replyText('Quero!', QUICK_REPLY_D),
        replyText('Agora não rola.', QUICK_REPLY_C),
      ],
    },
    [QUICK_REPLY_C]: {
      text: 'Já vi que você tá com pressa, então vou direto ao assunto. Se quisermos proteger os direitos das mulheres, não nos resta outra opção: precisamos hackear e reconfigurar esse sistema! As ameaças são fortes, e só juntas poderemos barrá-las. Topa encarar essa missão?',
      quick_replies: [
        replyText('Topo!', QUICK_REPLY_E),
        replyText('Agora não.', QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_D]: {
      text: 'De cara, duas ameaças no Congresso: a PEC 29 e o Estatuto do Nascituro. Sabe o que acontece se elas passarem? 1. O aborto vai ser 100% proibido, inclusive nos casos em que é permitido hoje; 2. Métodos contraceptivos que as mulheres já usam também vão passar a ser proibidos, como a pílula do dia seguinte e o DIU.',
      quick_replies: [
        replyText('Inacreditável!', QUICK_REPLY_F),
        replyText('Como barrar?', QUICK_REPLY_E),
      ],
    },
    [QUICK_REPLY_E]: {
      text: 'Arrasou! Influenciar decisões políticas não é simples, mas meus códigos servem pra tornar esse processo muito mais fácil. Já imaginou fazer pressão política a partir do seu inbox do Face? Agora você pode! Não é feitiçaria, é tecnologia. ;) E não demora mais que alguns cliques.',
      quick_replies: [
        replyText('Quero saber mais!', QUICK_REPLY_H),
        replyText('Agora não.', QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_F]: {
      text: 'Pois é. Se quisermos proteger os direitos das mulheres, não nos resta outra opção: precisamos hackear e reconfigurar esse sistema! As ameaças são fortes, e só juntas poderemos barrá-las. Topa encarar essa missão?',
      quick_replies: [
        replyText('Topo!', QUICK_REPLY_E),
        replyText('Agora não.', QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_G]: {
      text: 'Deve estar na correria aí, né? Sem problemas! Qualquer novidade pode deixar que eu te chamo por aqui ;) Enquanto isso, se quiser saber mais sobre mim, é só entrar no meu site: www.beta.org.br',
    },
    [QUICK_REPLY_H]: {
      text: 'Minha programação permite que eu envie uma mensagem sua diretamente daqui, da nossa conversa, para as caixas de email dos políticos. Quando eles colocarem em votação as pautas mais absurdas, eu te mando um inbox e te ajudo a fazer barulho onde precisa ser feito: nos ouvidos deles! Demais, né?',
      quick_replies: [
        replyText('Super!', QUICK_REPLY_I),
      ],
    },
    [QUICK_REPLY_I]: {
      text: 'Agora, pra transformar esse barulho num mega estrondo, a gente precisa de muuuita gente mandando mensagens. Muita gente mesmo! Vou precisar contar com você pra isso.',
      quick_replies: [
        replyText('Tô dentro, mana!', QUICK_REPLY_J),
      ],
    },
    [QUICK_REPLY_J]: {
      text: 'Isso aí! Enquanto eu monitoro essas pautas absurdas, é super importante você compartilhar o meu link para sua galera. Precisamos estar preparadas pra quando a hora chegar - pode ter certeza de que vou te avisar. Partiu? #ChamaABetaNoInbox',
      quick_replies: [
        replyText('Compartilhar', QUICK_REPLY_L),
        replyText('Agora não.', QUICK_REPLY_G),
      ],
    },
    [QUICK_REPLY_L]: {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [
            {
              "title": "A maior aliada feminista nas redes",
              "subtitle": "Chama a Beta no inbox",
              "image_url": "https://scontent.fcgh12-1.fna.fbcdn.net/v/t31.0-8/18518119_463961250617691_3113776709861450112_o.png?oh=95bddf40cbef1cf29ea1117623d5f591&oe=59FA58B8",
              "default_action": {
                "type": "web_url",
                "url": "https://m.me/nossaresistencia?ref=invited_by_24601"
              },
              "buttons": [
                {
                  "type": "element_share",
                }, {
                  "type": "web_url",
                  "url": "https://m.me/beta.staging",
                  "title": "Falar com a Beta",
                },
              ],
            },
          ],
        },
      },
    },
  },
}
