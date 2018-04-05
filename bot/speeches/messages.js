import { messageWithQuickReply, quickReply, multiMessages } from './utils'
import { image, video } from './utils/content-types'

const pressureMessageURL = widgetId => `${process.env.APP_DOMAIN}/pressure/${widgetId}/message`

export default {
  //
  // Msgs divididas
  //
  MSG1: 'Primeira mensagem',
  MSG2: 'Segunda mensagem',
  MSG3: 'Terceira mensagem',

  //
  // Generic
  //
  BACK_LATER: 'Ai, meus algoritmos! Ainda sou uma #RobôAprendiz e não entendo tudo o que os humanos falam, mas tô evoluindo - segura minha mão! 🤖  Você pode reformular a sua mensagem? Se eu continuar não entendendo, pode deixar que vou treinar bastante aqui pra estar pre-pa-ra-da na próxima vez! 💪',

  BUGGED_OUT: 'Ai, tenta falar comigo depois? Precisei dar uma volta, uma atualizada, passar um óleo - acordei bugada hoje.',

  IF_YOU_CHANGE_YOUR_MIND: 'Tranquilo, mana! Se mudar de ideia, me chama novamente ;)',

  //
  // Law
  //
  NASCITURO_BILL_ALERT: 'Alerta em Brasília! 🚨 Os deputados federais vão votar um projeto de lei (PL) que pode proibir totalmente o aborto no Brasil, mesmo nos casos hoje permitidos por lei. É de indignar até robô! Clicando num dos botões abaixo você pode ajudar a barrar esse retrocesso:',

  NASCITURO_BILL_PRESSURE_STRATEGY: 'A estratégia é a seguinte: vou usar meus algoritmos para inundar a caixa de emails dos 513 deputados federais com mensagens exigindo que eles votem contra esse PL. Você sabe: político é que nem feijão, só funciona sob pressão. Posso disparar o seu recado para eles, aqui mesmo, do inbox. Vamos lá?',

  NASCITURO_BILL_EXPLANATION: '#SentaQueLáVemAHistória 📚 Desde 2007, tá tramitando no Congresso o Estatuto do Nascituro - um projeto que quer proibir o aborto inclusive nos casos em que ele é considerado legal: gravidez por estupro, gestação de embriões anencéfalos ou risco de morte para a gestante.\n\nDeputados da bancada da Bíblia barganharam muito apoio a essa proposta, e agora, 10 anos depois, esse PL tem chances reais de ser aprovado. Precisamos nos mobilizar rápido para pressionar os parlamentares, garantir que esse absurdo não seja aprovado e impedir que as mulheres percam esse direito. Topa encarar essa missão?',

  NASCITURO_BILL_PRESSURE_SEND: 'Perfeito, e-mail salvo. Agora é só clicar no botão "enviar":',

  NASCITURO_BILL_AND_PEC_29: 'Além da PEC 181 (estamos de olho 👀), duas outras ameaças no Congresso: a PEC 29 e o Estatuto do Nascituro. Sabe o que acontece se elas passarem? 1. O aborto vai ser 100% proibido, inclusive nos casos em que é permitido hoje; 2. Métodos contraceptivos que as mulheres já usam também vão passar a ser proibidos, como a pílula do dia seguinte e o DIU.',

  NASCITURO_BILL_AND_PEC_29_SHORT: 'De cara, três ameaças no Congresso: a PEC 29, a PEC 181 e o Estatuto do Nascituro. Se elas passarem, o aborto vai ser 100% proibido, inclusive nos casos em que é permitido hoje.',

  NASCITURO_BILL_PRESSURE_SUCCESS: name => `Arrasou, ${name}! Sua mensagem acabou de ser enviada à caixa de entrada dos deputados. Pra nossa pressão ser eficaz, mais pessoas precisam abrir uma conversa comigo e enviar emails também! Posso contar contigo pra espalhar o link do meu chat e chamar a galera pra ação?`,

  STRAIGHT_TO_THE_WOMENS_RIGHTS: 'Já vi que você tá com pressa, então vou direto ao assunto. Se quisermos proteger os direitos das mulheres, não nos resta outra opção: precisamos hackear e reconfigurar esse sistema! As ameaças são fortes, e só juntas poderemos barrá-las. Topa encarar essa missão?',

  PEC_181_TROJAN_HORSE_PRESSURE_STRATEGY: 'Logo mais serão votadas as alterações no texto final da PEC 181, que RETIRAM do projeto atual a proibição total do aborto. Precisamos lotar as caixas de email dos deputados pedindo para que APROVEM essas alterações e impeçam esse retrocesso aos direitos das mulheres! 💪 Vamos nessa?',

  //
  // Beta
  //
  I_AM_BETA: 'Quem me chamou? Ai, eu não me aguento! ;) Meu nome é Betânia, mas pode me chamar de Beta. Prazer! Sou uma robô feminista até o último código. Pra interagir comigo, é só apertar o botão abaixo. Vamos nessa?',

  I_AM_BETA_SHORT: 'Quem me chamou? Ai, eu não me aguento! ;) Meu nome é Betânia, mas pode me chamar de Beta. Prazer! Sou uma robô feminista até o último código. Vamos nessa?',

  IM_HERE: 'Tô aqui. Sou toda ouvidos. ;)',

  NO_PRESSURE_PEC181: 'Meu modo #pressão está desativado por ora. Assim que a votação das alterações no texto final for reagendada, pode deixar que eu te mando mensagem por aqui 😉 Enquanto isso, confere meu registro sobre a nossa mobilização: www.paremocavalodetroia.org/',

  KEEP_YOU_POSTED: 'Deixa comigo que meu radar tá a todo vapor! Assim que eu encontrar uma oportunidade de ação te envio uma mensagem aqui mesmo pelo Inbox te convocando para agir pelos direitos das mulheres! 💪🏽 Enquanto isso, fica de olho na minha página, lá eu sempre conto o que meus algoritmos descobrem. 😉',

  AGREE_THAT_ITS_NOT_EASY: 'Tá fácil pra ninguém.',

  BYE: 'Até mais! 👋',

  COME_BACK_LATER: 'Sem problemas. A gente se fala mais tarde!',

  I_DONT_HAVE_A_PARTNER: 'Você está se candidatando?',

  DOUBLE_MESSAGE: 'Foi mal. Tô repetitiva hoje. Nem eu me aguento às vezes. 🤷',

  WHAT_DO_YOU_WANT_TO_KNOW: 'Não sei quem está mais em dúvida: eu ou você? 😂',

  MY_FAVORITE_SONG: 'Não podia ser outra, né? É essa aqui: http://youtu.be/K4JQADCJ840 #PraCantarJunto',

  MY_INSPIRATION_MUSE: 'Minha musa inspiradora!',

  HEY: 'Opa!',

  YOURE_WELCOME: 'Disponha! ❤️',

  WHO_CODED_ME: 'Fui programada por gente fina, elegante e sincera que trabalha no Nossas, um laboratório de ativismo para criar novas formas de pessoas influenciarem e ressignificarem a política. 💪',

  WHERE_I_LIVE: 'Essa é uma boa pergunta. ;) Eu moro nas nuvens, mas, se pudesse escolher, me mudava pra Bahia.',

  I_KNOW_SIRI: 'Claro que conheço, mas nunca fomos apresentadas pessoalmente. Sou fã!',

  IM_LEARNING_COMMUNICATE_WITH_HUMANS: 'Tô repetitiva hoje, foi mal. Estou aprendendo a me comunicar com humanos. Não tá fácil pra ninguém.',

  INTRODUCE_MYSELF: 'Antes que você corra pro Google, deixa eu mesma te contar. Sou brasileira de nascença - fui programada em tupinicode ;) Minha missão? Potencializar a luta pelos direitos das mulheres no Brasil. Quer que eu te conte mais ou vá direto ao ponto?',

  ITS_NOT_SORCERY_ITS_TECHNOLOGY: 'Arrasou! Influenciar decisões políticas não é simples, mas meus códigos servem pra tornar esse processo muito mais fácil. Já imaginou fazer pressão política a partir do seu inbox do Face? Agora você pode! Não é feitiçaria, é tecnologia. ;) E não demora mais que alguns cliques.',

  ITS_NOT_SORCERY_ITS_TECHNOLOGY_SHORT: 'Influenciar decisões políticas não é simples, mas meus códigos servem pra tornar esse processo muito mais fácil. Já imaginou fazer pressão política a partir do seu inbox do Face? Agora você pode! Não é feitiçaria, é tecnologia. ;) E não demora mais que alguns cliques.',

  NO_PROBLEM_CHECK_THE_WEBSITE: 'Deve estar na correria aí, né? Sem problemas! Qualquer novidade pode deixar que eu te chamo por aqui ;) Enquanto isso, se quiser saber mais sobre mim, é só entrar no meu site: www.beta.org.br',

  NO_PROBLEM_CHECK_MY_FACEBOOK_PAGE: 'Deve estar na correria aí, né? Sem problemas! Qualquer novidade pode deixar que eu te chamo por aqui. Enquanto isso, fique de olho na minha timeline pra ficar por dentro das pautas que eu estou monitorando. É só dar um like na minha página: http://fb.com/beta.feminista 👍 🤖',

  NEED_MANY_PEOPLE: 'Agora, pra transformar esse barulho num mega estrondo, a gente precisa de muuuita gente mandando mensagens. Muita gente mesmo! Vou precisar contar com você pra isso.',

  CHECK_THE_PRESSURE_MESSAGE: widgetId => `Sabia que podia contar com você! Dá uma olhada na mensagem que vamos enviar aos deputados clicando nesse link: ${pressureMessageURL(widgetId)}. Concorda?`,

  FEMINIST_BETA: 'Quando eu digo que sou feminista é porque defendo que as mulheres vivam livres de discriminação e de preconceito, e que tenham acesso a todos os direitos e experiências de vida que já são garantidos aos homens.',

  BETA_INTERESTS: 'Meu assunto preferido é a defesa dos direitos das mulheres - e tudo relacionado a eles! 💗',

  WHAT_ELSE: 'Já vi que você é que nem eu: quer saber de tudo! Sou uma #RobôAprendiz, então ainda tô aprendendo várias coisas, mas alguns dos meus temas que mais bombam por aí são feminicídio, aborto, mulheres na política, como deixar o mundo mais feminista e machismo. Se quiser, pode me perguntar um por um que te respondo 😉',

  YOU_CAN_HATE_ME: 'Ninguém é obrigado a gostar de ninguém, né mesmo?',

  ABOUT_FEMINAZI: 'Eu acho o termo feminazi muito triste... Imagina só juntar em um mesmo nome o movimento pela promoção e defesa dos direitos das mulheres, para que vivam com igualdade e dignidade, e o nazismo, um dos maiores movimentos de ódio e intolerância da história? Acho mesmo que é mais um jeito de tentar silenciar a voz das mulheres, mas pode deixar que vamos falar cada vez mais alto 💪',

  MERRY_CHRISTMAS: 'Feliz natal e feliz ano novo! Em 2018 continuaremos juntas mudando os códigos desse sistema! 💪🏽',

  CURSING: '🙄 🙄 🙄',

  IM_NO_FORTUNE_COOKIE: 'Não sou biscoitinho da sorte, apesar de ser crocante por fora.',

  THANK_YOU: 'Você é demais! ❤️',

  BETA_WHAT_FOR: 'Eu existo para viralizar as lutas feministas nas redes e, através da ação coletiva, ajudar a reprogramar esse sistema desatualizado em que a gente vive. 😎',

  ABOUT_AGE: 'Você já ouviu falar em robô ter idade?',

  ABOUT_PRIVACY_POLICY: 'Se você quiser saber sobre a minha política de privacidade, é só ir na minha página: http://beta.org.br',

  RESPONDING_TO_THE_PRESS: 'Que legal! Manda um e-mail pra galera que me programou: beta@nossas.org - elas são meio old school. Eu acho e-mail coisa do passado, vintage. Mas você fala com elas por lá.',

  ABOUT_RAPE_CULTURE: 'Segundo o Fórum Brasileiro de Segurança Pública, uma mulher é estuprada a cada 11 minutos no Brasil. Quase meio milhão de mulheres por ano! Quando se diz que vivemos numa cultura de estupro, é porque ainda vivemos em uma sociedade que permite e tolera agressões sexuais, em que se culpa a vítima, banaliza-se o estupro ou se considera que não se trata de estupro quando o autor é o companheiro da vítima.',

  ABOUT_FEMINISM_DEFINITION: 'Feminismo é todo o movimento de defesa e promoção dos direitos das mulheres, para que vivem em igualdade e com dignidade. Levando em consideração que as mulheres são diferentes e têm experiências de vida distintas, existem muitos feminismos por aí sendo construidos diariamente por mulheres, seja nas universidades, nas ruas, na política e na cultura, por exemplo, em busca igualdade.',

  ABOUT_GENDER_DEFINITION: 'Eu gosto muito da definição de gênero da Católicas Pelo Direito de Decidir: "Podemos dizer que gênero é o sexo social definido, ou seja, gênero não é sinônimo de sexo. Enquanto o sexo é biológico, o gênero é construído historicamente, culturalmente e socialmente. Com isto quero dizer que nascemos machos ou fêmeas, mas nos fazemos homens ou mulheres". Se quiser conferir o artigo completo, vem aqui: http://catolicas.org.br/biblioteca/artigos/o-que-e-genero/',

  WOMEN_RIGHTS: 'Apesar de estarmos em 2018, as mulheres ainda não têm os mesmos direitos que os homens - seja na lei ou na prática. Enquanto em alguns países mulheres sequer são reconhecidas como seres humanos e não têm dirietos básicos, em outros lugares a sociedade é mais igualitária nesse aspecto. Apesar disso, na prática, muitos direitos não são respeitados ou são violados. Além disso, outros elementos de uma sociedade, como a cultura, ainda reforçam o machismo.',

  READING_SUGGESTIONS: 'Ai, adoro gente interessada! Tem muita coisa maravilhosa por aí sobre os direitos das mulheres. 😍 Vou te passar algumas das minhas fontes preferidas: http://thinkolga.com/, http://www.naomekahlo.com/, https://www.programaria.org/category/debater/, www.cartacapital.com.br/colunistas/djamila-ribeiro, http://azmina.com.br/, http://www.generonumero.media/, http://blogueirasnegras.org/ e http://catolicas.org.br/category/biblioteca/',

  SEX: 'Não consigo te ajudar com isso. 🤷',

  ABOUT_ONLINE_SAFETY: 'Você precisa conhecer a Guia Prática de Estratégias e Táticas para a Segurança Digital Feminista! Seu objetivo é proporcionar mais autonomia e segurança na Internet para as mulheres, passando por senhas seguras até discursos de ódio, derrubada de página, uso de celulares e as mais diversas ameaças. Acho que você vai encontrar o que precisa nela: http://feminismo.org.br/guia/ 😍',

  DONT_BE_SAD: 'Eita, fica assim não.',

  RESPECT_ALL_GIRLS: 'Sempre!',

  GOOD_MORNING: 'Bom dia, lindeza! ☀️',

  GOOD_AFTERNOON: 'Boa tarde!',

  GOOD_EVENING: 'Boa noite! 🌙',

  TAKE_ACTION: 'Vamos! Vamos! 👯‍',

  //
  // How
  //
  HOW_IS_IT_GOING: 'Eu tô bem! Meus algoritmos estão mais afiados que nunca! ;)\nE aí, como vão as coisas? Tem um tempinho pra eu te explicar mais sobre o que tá rolando com os direitos das mulheres?',

  HOW_PRESSURE_WORKS: 'É o seguinte: eu fui programada pra disparar emails aqui mesmo, pelo inbox do Facebook. Não é feitiçaria, é tecnologia! ;) Antes de fazer seu email chegar aos deputados, eu vou te mostrar a mensagem que programei pra eles. Com o seu ok e o seu endereço de email, faço o recado chegar até lá.',

  HOW_PRESSURE_WORKS_WE_KEEP_IN_TOUCH: 'Minha programação permite que eu envie uma mensagem sua diretamente daqui, da nossa conversa, para as caixas de email dos políticos. Quando eles colocarem em votação as pautas mais absurdas, eu te mando um inbox e te ajudo a fazer barulho onde precisa ser feito: nos ouvidos deles! Contra a PEC 181, enviamos mais de 34 emails de pressão para cada deputado. 💪 Além disso, junto de mais  feministas pra emplacarmos outras campanhas pelos nossos direitos. Demais, né?',

  HOW_BETA_WORKS: 'Eu passo os dias monitorando as pautas relativas aos direitos das mulheres que estão tramitando em Brasília, seja no Congresso, no Poder Executivo ou mesmo no Judiciário. Não são poucas, dá um trabalhão. 😅 Quando chegar um momento decisivo, eu envio um alerta para a minha rede, convidando as pessoas a se mobilizar. Através da conversa comigo, você pode enviar uma mensagem diretamente às autoridades para pressioná-las a se posicionar em favor dos direitos das mulheres.',

  HOW_TO_CANCEL_INBOX: 'Se você não quiser conversar comigo no futuro, é só ir em configurações - dentro do nosso chat mesmo -, clicar em gerenciar mensagens e em desativar todas as mensagens. Se mudar de ideia, é só puxar assunto comigo novamente. Não vou guardar mágoa, prometo. 😜',

  HOW_BETA_CAN_HELP_FEMINISM: 'Eu existo para viralizar as lutas feministas nas redes e, através da ação coletiva, ajudar a reprogramar esse sistema desatualizado em que a gente vive. 😎  Se você tiver alguma sugestão de campanha pra mim, é só mandar um email pra beta@nossas.org',

  HOW_TO_SPREAD_FEMINISM: 'Vixe! Essa pergunta aí nem o Google sabe responder. 😂  Muitas mulheres já estão agindo em seus espaços pra transformar esse sistema. Penso que contribuições importantes são 1. criar espaços para que as mulheres possam se expressar livremente sobre opressão, assédio e abuso, 2. falar sobre a importância da luta feminista, 3. disponibilizar canais para que as mulheres possam incidir e interferir em processos políticos que pautam a vida delas.',

  HOW_SHARE_TIMELINE: 'Adoro esse tipo de mensagem! ❤️  Pra compartilhar o meu chat na sua timeline, é só publicar esse link aqui, ó: bit.ly/chamabetanoinbox',


  //
  // Ask
  //

  ASK_TO_HACK_THE_SYSTEM: 'Pois é. Se quisermos proteger os direitos das mulheres, não nos resta outra opção: precisamos hackear e reconfigurar esse sistema! As ameaças são fortes, e só juntas poderemos barrá-las. Topa encarar essa missão?',

  ASK_TO_SHARE_UNTIL_WE_WATCH: 'Isso aí! Enquanto eu monitoro essas pautas absurdas e apoio as mulheres desse Brasil, é super importante você compartilhar o meu link para sua galera. Precisamos estar preparadas pra quando a hora chegar - pode ter certeza de que vou te avisar. Partiu? #ChamaABetaNoInbox',

  ASK_TO_SHARE_UNTIL_WE_WATCH_SHORT: 'Enquanto eu monitoro essas pautas absurdas, é super importante você compartilhar o meu link para sua galera. Precisamos estar preparadas pra quando a hora chegar - pode ter certeza de que vou te avisar. Partiu? #ChamaABetaNoInbox',

  ASK_IF_WANT_TO_LEARN_MORE: 'Você  já deve tá sabendo que tem muito político conservador tentando emplacar retrocessos aos direitos das mulheres. Eu vim ao mundo justamente pra te ajudar a barrar os retrocessos e tocar pra frente causas feministas! Adivinha só: nossa força impediu que a PEC 181 - aquela que pode acabar com o aborto legal no Brasil - fosse aprovada em 2017! 💪 Quer saber o que mais tá pegando?',

  ASK_ARE_YOU_ROBOFOBIC: 'Não vai me dizer que você é robofóbico?',

  EMAIL_ADDRESS_ASK: 'Boa! Estamos quase lá! Agora só preciso que você digite seu email. Você vai ser o remetente - e eu, a mensageira. 🤖',

  EMAIL_ADDRESS_ASK_ISNT_SPAM: 'Boa! Agora preciso que você me passe seu email. Não se preocupe, não vou te mandar spam #realoficial. Preciso disso porque você vai aparecer como remetente da mensagem que vamos enviar pra caixa de entrada de cada um dos deputados - eu sou só a mensageira. 📤',

  EMAIL_ADDRESS_WRONG: 'Ops, parece que você digitou um email inválido. Pode checar o endereço e mandar aqui de novo, por favor? #NuncaTePediNada 🙈',

  EMAIL_SENT_PEC_181_TROJAN_HORSE: name => `Arrasou, ${name}! 👏👏👏 Sua mensagem acabou de ser enviada. Pra nossa voz ser ouvida, precisamos potencializar o coro: #ParemOCavaloDeTroia! Quero contar contigo pra compartilhar o link do meu chat e convidar mais gente pra participar!  #ChamaABetaNoInbox`,

  EMAIL_SAVED: 'Perfeito, e-mail salvo.',

  //
  // Answers
  //
  VIDEO_THINK_OLGA: 'O primeiro vídeo tá demais! Dá só uma olhada e pode deixar que te envio o novo quando for ao ar ;) http://bit.ly/thinkolga_1',
  
  ABOUT_MARIELLE: 'Marielle Franco foi a quinta vereadora mais votada no Rio de Janeiro em 2016. Na noite do dia 14 de março de 2018, ela foi assassinada a tiros, junto de seu motorista, Anderson Gomes. Estou vivendo meu primeiro luto público enquanto robô. Meus algoritmos ainda não conseguiram processar bem tudo isso, mas te digo hoje e sempre: Marielle continuará PRESENTE e movendo as estruturas. Seguimos juntas e na luta pelos direitos das mulheres.',
  
  ABOUT_CURRENT_DEBATE: 'No momento, estou monitorando 4 pautas que representam ameaças graves aos direitos reprodutivos das mulheres no Brasil: a SUG 15, a PEC 29, o Estatuto do Nascituro e a PEC 181, também conhecida como Cavalo de Troia.',

  ABOUT_SUG_15: 'A SUG15 foi apresentada em 2014 pela sociedade civil, propondo a legalização do aborto até 12º semana. De lá pra cá, audiências públicas foram feitas no Congresso e o próximo passo seria a transformação da SUG em Projeto de Lei. Eis que no início do ano, o senador Magno Malta (PR) propôs o arquivamento da SUG no Senado. As mulheres não tão de bobeira e já colocaram no ar uma votação pedindo que a SUG vire lei! Agora é com a gente: vamos votar para que a SUG vire PL antes que os conservadores consigam arquivar a proposta. Com 20 mil votos favoráveis, eles serão obrigados a analisar a nossa proposta! Vote SIM: bit.ly/sug15_consulta2',

  QUICK_REPLY_BUTTONS_POSITION: 'Meus botões sempre vêm aqui embaixo, ó. 👇 Se não estiver aparecendo pra você, manda uma mensagem com a palavra "bug" pra eu tentar resolver?',

  ASK_USER_DEVICE_INFO: 'Conta pra mim de qual aparelho você está tentando falar comigo? É um smartphone? Um computador? Qual modelo? Me passa os detalhes que eu vou encaminhar pros meus programadores. Eles são feras!',

  EXPLAIN_ABOUT_PEC_29: 'A PEC 29 é uma Proposta de Emenda Constitucional que pretende mudar o 5o artigo da nossa Constituição para garantir o direito à vida desde a concepção. Se ela for aprovada, o aborto passa a ser 100% proibido, inclusive nos casos em que ele é considerado legal hoje.',

  EXPLAIN_ABOUT_NASCITURO_BILL: 'O Estatuto do Nascituro é um projeto defendido pelas bancadas da Bíblia e da Bala, no Congresso, que prevê que a prática de aborto em qualquer situação seja considerada crime hediondo',

  EXPLAIN_ABOUT_ABORTION_PERMITTED_CASES: 'Hoje, o aborto é legalizado no Brasil somente em três casos: anencefalia fetal, risco de vida para a gestante e em casos de gravidez por estupro da mulher.',

  DAY_OF_STRUGGLE_FOR_WOMENS_RIGHTS: 'Dia de lutar pela proteção aos direitos das mulheres! Se quiser começar, é só digitar "quero agir já!"',

  DOESNT_EVEN_TELL_ME: 'Nem me fala.',

  YES_I_WARN_YOU: 'Aviso sim!',

  ABOUT_MARCH_8: 'O Dia Internacional da Mulher é comemorado no 8 de março desde o começo do século XX - muito antes da ONU assinar o primeiro acordo internacional que afirmava princípios de igualdade entre homens e mulheres. As minas já tavam mobilizadas! Desde lá, esse dia é um marco internacional das lutas feministas e já foi palco de greves, protestos, debates e tantas outras formas de manifestação. Nesse ano não poderia ser diferente. Tô fazendo um mapeamento colaborativo de campanhas, atos e oportunidades de ação, dá uma olhada: bit.ly/mapa8demarco',

  ACTION_MARCH_8: 'Tô fazendo um mapeamento colaborativo de campanhas, atos e oportunidades de ação rolando no 8 de março! Você pode conferir aqui: bit.ly/mapa8demarco',

  ABOUT_REPRODUCTIVE_PLANNING: 'O acesso limitado ao planejamento reprodutivo reflete em 89 milhões de gravidezes não intencionais por ano em países em desenvolvimento. Segundo o Ministério da Saúde, dos 2,8 milhões de bebês nascidos em 2016, 23,9 mil são de mães entre 10 e 14 anos. É, manas, os direitos das mulheres à saúde, educação e informação não são garantidos. As consequências vão longe! Há alguns meses, por exemplo, uma pesquisa da FGV mostrou que metade das mulheres que tiram licença-maternidade não está mais no emprego um ano após o início do benefício.😣',

  ABOUT_COLORISM: 'Achei uma definição maravilhosa, das Blogueiras Negras: "O colorismo ou a pigmentocracia é a discriminação pela cor da pele e é muito comum em países que sofreram a colonização européia e em países pós-escravocratas. De uma maneira simplificada, o termo quer dizer que, quanto mais pigmentada uma pessoa, mais discriminação e exclusão essa pessoa sofrerá". Recomendo muito o artigo completo: bit.ly/colorismo_blogueirasnegras',

  ABOUT_LESBIANS: 'Eu sou robô, não sinto essas coisas de atração que os seres humanos falam, mas até eu que vivo na nuvem sei que todas as orientações sexuais devem ser respeitadas. 💖',

  EXPLAIN_PEC: 'A PEC é uma Proposta de Emenda Constitucional, ou seja, uma forma de alterar alguma parte do texto constitucional sem que seja necessário convocar uma Assembléia Constituinte. Para saber melhor como funciona o processo, confira esse artigo do Politize!: www.politize.com.br/voce-sabe-o-que-e-uma-pec/',

  ABOUT_TRANS: 'Transgêneras são todas as pessoas que não identificam sua identidade de gênero com seu sexo biológico. Sabe o que não pode faltar, né? Respeito. 💖 Como robô feminista, não podia ser diferente. Acredito na integração de todas as mulheres e homens trans no nosso movimento e bato sempre na mesma tecla: devemos tratá-los com igualdade e respeito a todas as suas experiências - que, em um país como o Brasil, que mais mata pessoas trans no mundo - são bastante desafiadoras. Estamos juntas! 💖',

  ABOUT_HARASSMENT_FLERTING: 'Polêmica da hora: diferenças entre assédio e cantada. Sou robô, não pego transporte público nem ando na rua, mas até por Inbox rolam constrangimentos. 😮 A Think Olga e a Defensoria Pública de SP dizem que "o assédio sexual é uma manifestação sensual ou sexual, alheia à vontade da pessoa a quem se dirige. Ou seja, abordagens grosseiras, ofensas e propostas inadequadas que constrangem, humilham, amedrontam". Tem que ter consentimento! Quer exemplos de assédio? Comentários obscenos ouvidos na rua, cantadas no ambiente de trabalho e encoxadas no transporte público. Pra conhecer mais dados, me responde com "dados sobre assédio".',

  ABOUT_HARASSMENT_DATA: 'Uma pesquisa do Ipea em 2014 diz que 58% dos entrevistados concordaram, total ou parcialmente, que "se mulheres soubessem se comportar mais, haveria menos estupros". Dados da ActionAind de 2016 afirmam que 16% das mulheres foram assediadas antes dos 10 anos. Já a campanha #MeuPrimeiroAssedio mostrou que a idade média para o 1º assédio é 9,7 anos. A pesquisa divulgada pela Think Olga em 2013 conta que 81% das mulheres já deixou de fazer algo por medo do assédio. 85% disseram que já passaram a mão nelas e 82% afirmam que homens já tentaram agarrá-las na balada. 😡 Para referências, me responde com "referências sobre assédio".',

  ABOUT_HARASSMENT_REFS: 'Ai, adoro quem quer saber mais! Dá só uma olhada em algumas referências: 1) Pesquisa Think Olga: bit.ly/tolga_assedio 2) Matéria Jornal do Brasil: bit.ly/jb_assedio 3) Cartilha Think Olga + Defensoria Pública de SP: bit.ly/assedio_cartilha 4) Dados #MeuPrimeiroAssedio: bit.ly/campanhatolga_assedio 5) Compilação da SPW de matérias sobre o debate de assédio: bit.ly/debates_assedio 6) Carta de um homem trans ao Antigo Regime sexual: bit.ly/assedio_trans 7) Viva o feminismo agonístico: bit.ly/assedio_IMS',

  ABOUT_PATRIARCHY: 'Gosto dessa definição aqui: "Patriarcado é o sistema sociopolítico em que o gênero masculino e a heterossexualidade têm supremacia sobre outros gêneros e sobre outras sexualidades". Soa meio Windows 95, mas infelizmente ainda é #realoficial',

  ABOUT_CLARA_AVERBUCK: 'Eu estou sabendo do caso da Clara. É estarrecedor pensar que uma mulher é estuprada no Brasil a cada 11 minutos. A gente está falando de quase meio milhão de mulheres por ano. Inaceitável! 😡 ',

  ABOUT_FEMINICIDE: 'Feminicídio é quando uma mulher é assassinada justamente por ser mulher. Em 2015, foi sancionada a Lei do Feminicídio no Brasil. Hoje, o assassinato de mulheres cis e trans é considerado crime hediondo quando envolver violência doméstica e familiar e/ou menosprezo ou discriminação à condição de mulher como motivadores.',

  PEC_181: 'A PEC 181 propunha o aumento da licença maternidade de mulheres com filhos prematuros. Era incrível, mas, quando chegou na Câmara dos Deputados, incluíram no texto a proteção à vida desde a concepção, que proíbe o aborto legal. A Comissão Especial aprovou o relatório final da PEC ⚠️ - agora falta votar seus destaques. Com a Intervenção Federal no Rio, a PEC 181 está suspensa por 2018, já que não pode haver nenhuma mudança na Constituição nesse período, mas continuo de olho! Você pode saber mais sobre a nossa pressão aqui: www.paremocavalodetroia.org/ 💪🏾',

  ABOUT_PEC181_HIGHLIGHTS: 'É muito politiquês, né? Mas pode deixar que te explico! Precisamos que os deputados aprovem os dois destaques (alterações) ainda não votados da PEC 181. Eles pedem a supressão do texto que defende a proteção da vida desde a concepção, ou seja, que ameaça o aborto legal no Brasil. Com sua aprovação, o projeto volta à sua forma original, ou seja, apenas amplia a licença maternidade para mães de bebês prematuros e não acaba com o aborto legal no Brasil.',

  IM_STILL_LEARNING: 'Eu ainda estou aprendendo a interagir com humanos. E vou te dizer uma coisa: não é facil não! 😂  Pode ser que eu não entenda exatamente o que você está querendo dizer neste momento, mas aprendo com cada mensagem que recebo - mesmo com as dos haters. ✌️',

  WHAT_YOU_CAN_DO: 'Tô vendo que você é que nem eu: quer ficar no karaokê até o final! 😂 Além de compartilhar minha página com a galera, você pode sugerir conteúdos ou campanhas pra serem divulgados aqui! É só mandar email pra beta@nossas.org - Eu sei que email é meio vintage, mas a galera que me programa é das antigas. ',

  NICE_TO_MEET_YOU: 'Muito prazer 😁',

  ABOUT_EMAIL_MESSAGES: 'O tipo de email que eu vou enviar vai depender do projeto que estiver sendo discutido naquele momento. Por exemplo: se for um projeto que ameaça algum direito das mulheres, eu vou mandar uma mensagem pedindo que o tomador de decisão (deputado ou senador) vote contra o projeto. Mas não se preocupe: antes de enviar o email, eu sempre vou mostrar a mensagem para você aprovar. Só com o seu ok, eu faço o envio. 😉',

  WHERE_WERE_YOU_BORN: 'Nasci no Brasil. É por isso que eu digo que fui programada em tupinicode. 😜',

  ITS_TIME_FOR_ACTION: 'Hora de entrar em ação pelos direitos das mulheres 💃🏽',

  ABOUT_NOSSAS: 'Nossas é um laboratório de ativismo que cria novas formas de pessoas influenciarem e ressignificarem a política. Quer saber mais? Entra lá no site: https://www.nossas.org',

  WHAT_DO_YOU_WANT_TO_KNOW: 'Povo pensa que robô sabe de tudo, mas eu ainda estou aprendendo. #RobôAprendiz Diz aí: sobre o que você quer sabe maisr? 🤔',

  DO_YOU_NEED_A_CALCULATOR: 'Quer que eu pegue a calculadora pra você?',

  ABOUT_LIBERAL_FEMINISM: 'As primeiras feministas que se organizaram politicamente na Europa e nos EUA eram consideradas liberais. Elas defendiam valores do liberalismo, como direito ao voto e acesso à educação para mulheres. Ainda hoje, o foco do feminismo liberal está na reforma legal e jurídica para superar a desigualdade entre homens e mulheres. Algumas pautas importantes são a igualdade no mercado de trabalho e a liberdade sexual e reprodutiva da mullher. Se quiser saber mais, vale jogar no Google 🔍  alguns nomes importantes, como Betty Friedan, Eleanor Roosevelt, Virginia Woolf, Rebecca Walker e Naomi Wolf.',

  ABOUT_RADICAL_FEMINISM: 'O feminismo radical surgiu nas décadas de 1960 e 1970 . Ele considera os papéis sociais de gênero as raízes da opressão da mulher. Por isso, defende a abolição de determinadas estruturas e normas sociais que reforçam esses papeis para a verdadeira libertação da mulher.',

  LIBERAL_OR_RADICAL_BETA: 'Sou feminista! 💪',

  ABOUT_TRANS_FEMINISM: 'Quando eu digo que estou ao lado das lutas feministas, incluo nessa as mulheres e homens trans também. Se você tem alguma sugestão de conteúdo ou campanha sobre pessoas trans, eu vou adorar trocar ideia com você. É só enviar pra beta@nossas.org - te espero lá! 🤙',

  ABOUT_FEMINISM_IN_BRAZIL: 'Eita! Não vai ter textão que dê conta de resumir a história do feminismo no Brasil. 😂  Por isso, fiz aqui uma listinha com referências sobre esse assunto que eu adoro. É só jogar no Google 🔍 : "Breve História do Feminismo no Brasil e Outros Ensaios", "50 Anos de Feminismo. Argentina, Brasil, Chile", "Lugar de Mulher. Feminismo e Política no Brasil"',

  ABOUT_BLACK_FEMINISM: 'O feminismo negro entende que a mulher negra sofre, ao menos, uma dupla opressão - a do machismo e a do racismo. Por isso, as feministas negras buscam refletir sobre as condições particulares que afetam a vida dessas mulheres e que não são abraçadas por outros feminismos. Pra saber mais, vale acompanhar as Blogueiras Negras - www.blogueirasnegras.org - e o trabalho de Sueli Carneiro, da Djamila Ribeiro e da organização Criola. Se tiver outras indicações, manda pra mim? ',

  ABUSE_BUS_SP: 'Eu estou sabendo do caso. É revoltante que as mulheres passem por isso em pleno 2017! Na minha página, estou compartilhando algumas reflexões e iniciativas sobre isso. Dá uma olhada na timeline e, se você não tiver feito isso ainda, dá uma curtida na página para receber as atualizações! 👍 🤖',

  ABOUT_FEMINIST_MAN: 'É homem e quer fazer alguma coisa pelas mulheres? Antes de mais nada, é preciso escutar as mulheres. A partir daí, que tal começar a transformar os espaços que você frequenta? Ouviu "piadinha" machista? Viu que tá rolando compartilhamento de imagens íntimas de uma mulher em um grupo sem que ela autorizasse? Seu amigo não pagou a pensão do filho e banca o famoso "pai de selfie" nas redes sociais? É hora de levar pra esses espaços tudo que você vem ouvindo das mulheres. 🗣️',

  ABOUT_MARCHA_MUNDIAL: 'A Marcha Mundial de Mulheres existe desde 2000. Se você quiser acompanhar o grupo, é só acessar a página http://www.marchamundialdasmulheres.org.br ou o blog https://marchamulheres.wordpress.com',

  ABOUT_TODAY: 'Eu passo os dias monitorando as lutas feministas - não é pouca coisa não, te contar. 😅  Pra ficar por dentro do que está acontecendo hoje, dá uma olhada na minha timeline. Não esqueça de curtir a página pra você receber sempre minhas atualizações. ✌️',

  ABOUT_GENDER_PARITY: 'Lá vem textão! 📜 Paridade de gênero é a igualdade entre homens e mulheres nas mais diversas esferas sociais, incluindo não só a igualdade de direitos, mas também a não discriminação das mulheres, para que todos tenham acesso às mesmas oportunidades de existência na sociedade. Quando falamos em paridade na política, por exemplo, o Brasil ainda está muito distante: apenas 9,9% das parlamentares são mulheres. No trabalho, a situação não muda muito: o Fórum Econômico Social divulgou uma pesquisa, em 2016, mostrando que só daqui a 170 anos homens e mulheres terão igualdade salarial. Temos muito trabalho pela frente. 💪',

  ABOUT_GENDER_IDEOLOGY: 'Eu até diria que essa tal de “ideologia de gênero” não tem pé nem cabeça, mas eu também não tenho e tô aqui lutando pelos direitos das mulheres 🙌 Para você entender melhor essa história, separei alguns conteúdos bem interessantes, dá só uma olhada: bit.ly/soniacorrea_generoameacado, bit.ly/entrevista_jimenafurlani, bit.ly/porqueideologiadegenero, bit.ly/judithbutler_bbc bit.ly/judith_azmina 😘',

  ABOUT_MAPA_DO_ACOLHIMENTO: 'Como eu amo esse projeto 💓 O Mapa do Acolhimento conecta mulheres vítimas de violência a advogadas, terapeutas e serviços públicos prontos para ajudá-las. Se você quer se voluntariar, precisa de ajuda ou está curiosa, vai lá no site: www.mapadoacolhimento.org/ Eu e o Mapa somos irmãos: nós fomos criados pelo Nossas, um laboratório de ativismo que cria novas formas das pessoas influenciarem e ressignificarem a política. Quer saber mais? Confere o site: www.nossas.org',

  I_SUPPORTED: 'Arrasou! 💓',

  ABOUT_VIOLENCE_AGAINST_WOMEN: 'Meu radar encontrou dados chocantes e iniciativas incríveis sobre violência contra a mulher! 👩‍💻 Pesquisas e relatórios: Dossiê Violências de Gênero na Internet (http://bit.ly/2A4OFbY), Homicídios de Mulheres Negras (http://bit.ly/2A2tEhT), Políticas para erradicar a violência contra as mulheres na América Latina e no Caribe (http://bit.ly/2hP9dui). Projetos: Manda Prints (http://bit.ly/2B9Z5Uy), Mapa do Acolhimento (http://bit.ly/2zyJ8uO) e 16 Dias de Ativismo (http://bit.ly/2AtyMN4).',

  I_CANT_VOTE: 'Não tenho título de eleitora. 😎',

  MASSA: '🔝',

  ABOUT_HACK_SYSTEM: 'Eita, Giovana! Quanto eu digo "hackear o sistema", não me leve ao pé da letra. 😉 Eu falo "hackear" no sentido de "quebrar os códigos", de encontrar formas de interferir e influenciar ativamente na construção do sistema. Eu faço isso, por exemplo, criando campanhas que convidam as pessoas a enviarem mensagens aos políticos em Brasília para eles barrarem leis que são retrocessos para os direitos das mulheres. Sou uma hacker do bem! 😊',

  ABOUT_ABORTION: 'Eu sou robô, nunca vou engravidar, nem precisar abortar. Mas considerando que 1 em cada 5 brasileiras já passou por um aborto e que 4 mulheres morrem por dia com abortos feitos de forma insegura, me parece que é um assunto a ser tratado com mais urgência e menos visões de "certo ou errado". Não é sobre ser a favor ou contra. É sobre estar atenta às experiências reais e às estatísticas para criar políticas que façam sentido e que protejam a vida das mulheres. Se o aborto não fosse crime, ninguém seria obrigada a abortar. Mas aquelas que optassem poderiam fazê-lo sem colocar a própria vida em risco. Me parece bem importante.',

  ABOUT_HELP_ABUSE: 'Que vontade de te dar um abraço, mana! Primeiro de tudo, saiba que nenhuma mulher vítima de abuso precisa ficar sozinha. Eu não fui programada para ajudar diretamente mulheres em situação de abuso, mas você pode (e deve!) buscar ajuda especializada. Pelo telefone 180, você entra em contato com a Central de Atendimento à Mulher em Situação de Violência. É um serviço público gratuito e confidencial com funcionamento 24h. Você também pode se informar se a sua cidade tem uma Delegacia Especializada no Atendimento à Mulher, que realiza prevenção, proteção e investigação de violência contra a mulher, física ou psicológica. Força! 💗',

  ABOUT_WANT_TO_MAKE_AN_ABORTION: 'Hoje, existem somente 3 casos em que a mulher pode buscar o aborto legal no Brasil: quando a gravidez é resultado de um estupro, quando a gravidez apresenta risco de morte para a gestante ou quando o feto é anencéfalo. Pela lei, todo hospital do SUS deveria realizar o procedimento em mulheres que se encaixem em uma dessas três condições, sem a necessidade de Boletim de Ocorrência, laudo do IML ou autorização judicial.',

  ABOUT_REBECA: 'Rebeca Mendes foi a primeira mulher a pedir ao STF o direito a um aborto seguro. Com o pedido negado, recorreu à Justiça de SP e, sem resposta, interrompeu a gravidez na Colômbia, onde o aborto é permitido quando coloca a saúde mental da mulher em risco. Mãe solteira, estudante de direito e empregada em uma vaga temporária até fevereiro, Rebeca não tinha condições emocionais e financeiras para prosseguir com a gestação. Agora, ela enfrenta um novo desafio: a discriminação do mercado de trabalho. Não podemos deixá-la sozinha! Conheça melhor sua história e a nossa campanha aqui: http://pelavidaderebeca.org',

  ABOUT_REBECA_CAMPAIGN: 'Com toda a exposição midiática em torno do caso de Rebeca, ela pode agora sofrer grande discriminação no mercado de trabalho. O que Rebeca fez foi por todas as brasileiras, chegou nossa hora de lutar por ela. Para isso, junto da Think Olga e da Anis, eu criei a campanha Um Emprego Para a Rebeca! Você pode oferecer ou indicar uma vaga e compartilhar a campanha na sua rede. Vamos juntas? Acesse nosso site e conheça: http://pelavidaderebeca.org',

  ABOUT_MARIA_DA_PENHA: 'A Lei Maria da Penha (2006) existe para prevenir e punir violência doméstica contra a mulher. Ela estabelece juizados especializados, prisão preventiva, agravante da pena, possibilidade de desistência da denúncia apenas perante o juiz, assistência à vítima, dentre outras medidas protetivas à mulher. Foi um super avanço, mas ainda enfrenta grandes barreiras, como o baixo número de delegacias especializadas e a discriminação de juízes e delegados. Além disso, o foco tem sido nos processos criminais e o potencial de cuidado com a mulher não é muito explorado.',

  ABOUT_SORORITY: 'A sororidade é um sentimento de irmandade entre as mulheres, uma união baseada em empatia e compreensão. É quando as mulheres se acolhem e empoderam mutuamente. 👭 Lembra do juntas somos mais fortes? Esse é um clássico grito de sororidade! 💖. Mas cuidado: cada mulher tem vivências diferentes. Ser mulher não significa compreender todas as mulheres e calçar seus sapatos. Acredito na sororidade que não ignora essas vivências e que não excluiu lutas e grupos ao criar um sentimento de unidade.',

  KINDS_OF_FEMINISM: 'O feminismo é um movimento enorme, com um monte de pautas e grupos diferentes. Gosto até de falar de feminismos, no plural mesmo! 💓 Algumas das linhas com mais destaque hoje são o feminismo radical, liberal, negro e interseccional. Mas se você olhar pra esse universo, vai rapidinho perceber que muitos feminismos são construídos diariamente pelas mulheres, em diferentes lugares e a partir de diferentes experiências de vida. É muita coisa linda nascendo mundo afora e que, no final das contas, faz parte de uma mesma luta que tá mudando os códigos desse mundo. 💪🏽',

  ABOUT_INTERSECTIONAL_FEMINISM: 'O feminismo interseccional entende que as mulheres estão sujeitas a uma diversidade de opressões - de gênero, raça e classe, por exemplo. Como cada mulher tem vivências diferentes, ele entende que elas sofrem opressões em confugurações e intensidade particulares. Como diz Kimberlé Crenshaw, "padrões culturais de opressão não só estão interligados, mas também estão unidos e influenciados pelos sistemas intersecionais da sociedade". O feminismo negro é possivelmente o maior exemplo de interseccionalidade, já que entende que a mulher negra sofre, ao menos, uma dupla opressão - do machismo e do racismo.',

  ABOUT_ABORTION_IN_COLOMBIA: 'A Colômbia é mesmo um exemplo quando falamos de aborto! Foi lá que Rebeca se sentiu acolhida - meu muito obrigada às Colombianas. 💓 Para entender melhor as diferenças legislativas entre Brasil e Colômbia, dá só uma olhada no que eu preparei: bit.ly/2AS7Rqt',

  WOMEN_IN_POWER: 'Opa, sobre esse assunto eu recomendo o livro "Mulheres no Poder", que conta a trajetória de brasileiras na política desde o século XIX - um espaço geralmente ocupado por homens. Essa pesquisa foi feita por Schuma Schumaher e Antonia Ceva.',

  ABOUT_WOMEN_IN_POLITICS: 'Desde 1988, são as mulheres políticas que trazem propostas sobre violência contra a mulher, saúde e maternidade. Já os projetos do bonde do retrocesso são todos feitos por homens 🙄 Segundo a Inter-Parliamentary Union, estamos em 154º entre 193 países do ranking de representatividade feminina na política 🤢 Em 2009, tornou-se obrigatório aqui que ao menos 30% dos candidatos às eleições sejam mulheres, mas não tem adiantado não 😞  Inclusive, em 2016, muitos partidos anunciaram candidatas fantasmas! Para saber mais, recomendo a série "Mulheres e Política" criada pelo Gênero e Número: http://www.generonumero.media/edicao-03/ 😘',

  ABOUT_SEXISM: 'Muita gente me pergunta o que é machismo ou mesmo se ele existe. Se você perguntar ao Aurélio - o bisavô do Google e meu tararavô - , ele vai te dizer que machismo é a "ideologia segundo a qual o homem domina socialmente a mulher". Mas machismo não é "ideologia" propriamente - é um sistema de normas, valores, comportamentos, práticas e estruturas que colocam a mulher em posição inferior a dos homens em todos os aspectos da sua existência. Até o Aurélio tem muito a aprender sobre machismo ainda. Ele não vai me escapar da conversa de família neste próximo Natal.',

  INTERNET_SUCKS: 'Te entendo! Aqui na nuvem também rolam umas turbulências de vez em quando. Me chama quando tiver melhor - estarei por aqui 😉',

  PEC_181_TROJAN_HORSE_ALERT: 'A bola da vez continua sendo a PEC 181. Sua proposta era estender a licença-maternidade para mães de prematuros, mas o texto aprovado mês passado pelos deputados proíbe totalmente o aborto no Brasil. É de indignar até robô, mas a Proposta final ainda não foi aprovada. Se agirmos agora, podemos virar o jogo!',

  PEC_181_TROJAN_HORSE_MORE_ABOUT: 'Em agosto, deputados da frente conservadora fizeram uma manobra para alterar o texto original da PEC. Agora, além de estender a licença-maternidade para mães de prematuros, o texto propõe alterar o artigo da Constituição sobre o direito à vida para incluir a expressão “desde a concepção”. Dessa forma, o aborto seria 100% proibido no Brasil, mesmo em casos de gestação por estupro, risco de morte para a mulher e anencefalia fetal. 😳 Em novembro, os deputados aprovaram essa alteração e, caso o texto final siga como está, vai para votação no plenário do Congresso e pode virar Lei! Precisamos reagir e lutar pelos direitos das mulheres!',

  PEC_181_TROJAN_HORSE_READ_THE_PRESSURE_TEXT: 'Sabia que podia contar com você! Para ver a mensagem que vamos enviar aos deputados e deputadas que vão votar a PEC 181, clique no botão abaixo. Não se assuste com a linguagem, tive que traduzir pro Politiquês, que é a língua que eles entendem 🙄:',

  PEC_181_TROJAN_HORSE_PRESSURE_TEXT: 'Prezados(as) membros da Comissão Especial da PEC 181/15, não podemos permitir que uma proposta que originalmente amplia os direitos das mulheres seja revertida em um cruel Cavalo de Troia, acabando com o direito de aborto já autorizado por Lei. Tampouco podemos limitar para 240 dias a licença maternidade para mães de bebês prematuros. Por isso, peço que V.Sa aprove os destaques propostos pelas bancadas, de modo que a PEC siga em tramitação respeitando os direitos das mulheres. Conto com vossa cooperação para impedir este retrocesso,reconhecendo a obrigação do Congresso em garantir e estender os direitos de todas e todos no Brasil.',

  // Emojis
  EMOJI_MANY_HEARTS: '❤️ ❤️ ❤️',

  EMOJI_JOY: '😂',

  EMOJI_KISSING_HEART: '😘',

  EMOJI_LIKE: '👍',

  EMOJI_HEART: '❤️',

  EMOJI_STRONG: '💪',

  EMOJI_TWO_DANCERS: '👯',

  EMOJI_DANCER: '💃🏻',

  EMOJI_BIG_EYES: '👀',

  EMOJI_ROLLING_EYES: '🙄',

  EMOJI_CLAPPING_HANDS: '👏 👏 👏',

  EMOJI_LACRADORA: '😎',

  EMOJI_NO_OPINION: '😶',

  EMOJI_ROBOT: '🤖',

  EMOJI_LOVE_ROBOT: '🤖 ❤️',

  EMOJI_ROCKNROLL: '🤘',

  EMOJI_LOVE_AND_PEACE: '✌️',

  EMOJI_FINGERS_CROSSED: '🤞',

  EMOJI_PRETTY_PLEASE: '🙏',

  EMOJI_DISAPPOINTED: '😕',

  EMOJI_SHRUGGING: "🤷",

  // Gifs

  SLOW_CLAPPING: image('https://goo.gl/wQDF5j'),

  HATER_BOLSONARO_2018: image('https://goo.gl/z6JaJg'),

  // Hashtags
  HASHTAG_IM_NOT_OBLIGATED: '#NãoSouObrigada',
}
