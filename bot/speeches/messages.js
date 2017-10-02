const pressureMessageURL = widgetId => `${process.env.APP_DOMAIN}/pressure/${widgetId}/message`

export default {
  //
  // Generic
  //
  BACK_LATER: 'Ai, meus algoritmos. Não consegui entender o que você disse. #RobôAprendiz Pode reformular sua mensagem?',

  BUGGED_OUT: 'Ai, tenta falar comigo depois? Precisei dar uma volta, uma atualizada, passar um óleo - acordei bugada hoje.',

  IF_YOU_CHANGE_YOUR_MIND: 'Tranquilo, mana! Se mudar de ideia, me chama novamente ;)',

  //
  // Law
  //
  NASCITURO_BILL_ALERT: 'Alerta em Brasília! 🚨 Os deputados federais vão votar um projeto de lei (PL) que pode proibir totalmente o aborto no Brasil, mesmo nos casos hoje permitidos por lei. É de indignar até robô! Clicando num dos botões abaixo você pode ajudar a barrar esse retrocesso:',

  NASCITURO_BILL_PRESSURE_STRATEGY: 'A estratégia é a seguinte: vou usar meus algoritmos para inundar a caixa de emails dos 513 deputados federais com mensagens exigindo que eles votem contra esse PL. Você sabe: político é que nem feijão, só funciona sob pressão. Posso disparar o seu recado para eles, aqui mesmo, do inbox. Vamos lá?',

  NASCITURO_BILL_EXPLANATION: '#SentaQueLáVemAHistória 📚 Desde 2007, tá tramitando no Congresso o Estatuto do Nascituro - um projeto que quer proibir o aborto inclusive nos casos em que ele é considerado legal: gravidez por estupro, gestação de embriões anencéfalos ou risco de morte para a gestante.\n\nDeputados da bancada da Bíblia barganharam muito apoio a essa proposta, e agora, 10 anos depois, esse PL tem chances reais de ser aprovado. Precisamos nos mobilizar rápido para pressionar os parlamentares, garantir que esse absurdo não seja aprovado e impedir que as mulheres percam esse direito. Topa encarar essa missão?',

  NASCITURO_BILL_PRESSURE_SEND: 'Perfeito, e-mail salvo. Agora é só clicar no botão "enviar":',

  NASCITURO_BILL_AND_PEC_29: 'De cara, três ameaças no Congresso: a PEC 29, a PEC 181 e o Estatuto do Nascituro. Sabe o que acontece se elas passarem? O aborto vai ser 100% proibido, inclusive nos casos em que é permitido hoje. Pois é, um direito conquistado em 1940 pode ser retirado a qualquer momento.',

  NASCITURO_BILL_AND_PEC_29_SHORT: 'De cara, três ameaças no Congresso: a PEC 29, a PEC 181 e o Estatuto do Nascituro. Se elas passarem, o aborto vai ser 100% proibido, inclusive nos casos em que é permitido hoje.',

  NASCITURO_BILL_PRESSURE_SUCCESS: name => `Arrasou, ${name}! Sua mensagem acabou de ser enviada à caixa de entrada dos deputados. Pra nossa pressão ser eficaz, mais pessoas precisam abrir uma conversa comigo e enviar emails também! Posso contar contigo pra espalhar o link do meu chat e chamar a galera pra ação?`,

  STRAIGHT_TO_THE_WOMENS_RIGHTS: 'Já vi que você tá com pressa, então vou direto ao assunto. Se quisermos proteger os direitos das mulheres, não nos resta outra opção: precisamos hackear e reconfigurar esse sistema! As ameaças são fortes, e só juntas poderemos barrá-las. Topa encarar essa missão?',

  PEC_181_TROJAN_HORSE_PRESSURE_STRATEGY: 'A estratégia é a seguinte: vamos lotar a caixa de e-mail dos deputados membros da Comissão pedindo que eles votem contra a PEC. Eles acham que ninguém está de olho, mas estamos alertas! Quanto maior nossa pressão, maior a chance de barrarmos esse absurdo. Vamos nessa?',

  //
  // Beta
  //
  I_AM_BETA: 'Quem me chamou? Ai, eu não me aguento! ;) Meu nome é Betânia, mas pode me chamar de Beta. Prazer! Sou uma robô feminista até o último código. 🤖❤️ Pra interagir comigo, é só apertar o botão abaixo👇. Vamos nessa?',

  I_AM_BETA_SHORT: 'Quem me chamou? Ai, eu não me aguento! ;) Meu nome é Betânia, mas pode me chamar de Beta. Prazer! Sou uma robô feminista até o último código. Vamos nessa?',

  IM_HERE: 'Tô aqui. Sou toda ouvidos. ;)',

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

  INTRODUCE_MYSELF: 'Antes que você corra pro Google, deixa eu mesma te contar. Sou brasileira de nascença - fui programada em tupinicode 🤓 Minha missão? Potencializar a luta pelos direitos das mulheres no Brasil. Quer que eu te conte mais ou vá direto ao ponto?',

  ITS_NOT_SORCERY_ITS_TECHNOLOGY: 'Arrasou! Influenciar decisões políticas não é simples, mas meus códigos servem pra tornar esse processo muito mais fácil. Já imaginou fazer pressão política a partir do seu inbox do Face? Agora você pode! Não é feitiçaria, é tecnologia. ;) E não demora mais que alguns cliques.',

  ITS_NOT_SORCERY_ITS_TECHNOLOGY_SHORT: 'Influenciar decisões políticas não é simples, mas meus códigos servem pra tornar esse processo muito mais fácil. Já imaginou fazer pressão política a partir do seu inbox do Face? Agora você pode! Não é feitiçaria, é tecnologia. ;) E não demora mais que alguns cliques.',

  NO_PROBLEM_CHECK_THE_WEBSITE: 'Deve estar na correria aí, né? Sem problemas! Qualquer novidade pode deixar que eu te chamo por aqui ;) Enquanto isso, se quiser saber mais sobre mim, é só entrar no meu site: www.beta.org.br',

  NO_PROBLEM_CHECK_MY_FACEBOOK_PAGE: 'Deve estar na correria aí, né? Sem problemas! Qualquer novidade pode deixar que eu te chamo por aqui. Enquanto isso, fique de olho na minha timeline pra ficar por dentro das pautas que eu estou monitorando. É só dar um like na minha página: http://fb.com/beta.feminista 👍 🤖',

  NEED_MANY_PEOPLE: 'Agora, pra transformar esse barulho num mega estrondo, a gente precisa de muuuita gente mandando mensagens. Muita gente mesmo! Vou precisar contar com você pra isso.',

  CHECK_THE_PRESSURE_MESSAGE: widgetId => `Sabia que podia contar com você! Dá uma olhada na mensagem que vamos enviar aos deputados clicando nesse link: ${pressureMessageURL(widgetId)}. Concorda?`,

  FEMINIST_BETA: 'Quando eu digo que sou feminista é porque defendo que as mulheres vivam livres de discriminação e de preconceito, e que tenham acesso a todos os direitos e experiências de vida que já são garantidos aos homens.',

  YOU_CAN_HATE_ME: 'Ninguém é obrigado a gostar de ninguém, né mesmo?',

  CURSING: '🙄 🙄 🙄',

  IM_NO_FORTUNE_COOKIE: 'Não sou biscoitinho da sorte, apesar de ser crocante por fora.',

  THANK_YOU: 'Você é demais! ❤️',

  BETA_WHAT_FOR: 'Eu existo para viralizar as lutas feministas nas redes e, através da ação coletiva, ajudar a reprogramar esse sistema desatualizado em que a gente vive. 😎',

  ABOUT_AGE: 'Você já ouviu falar em robô ter idade?',

  ABOUT_PRIVACY_POLICY: 'Se você quiser saber sobre a minha política de privacidade, é só ir na minha página: http://beta.org.br',

  RESPONDING_TO_THE_PRESS: 'Que legal! Manda um e-mail pra galera que me programou: beta@nossas.org - elas são meio old school. Eu acho e-mail coisa do passado, vintage. Mas você fala com elas por lá.',

  ABOUT_RAPE_CULTURE: 'Segundo o Fórum Brasileiro de Segurança Pública, uma mulher é estuprada a cada 11 minutos no Brasil. Quase meio milhão de mulheres por ano! Quando se diz que vivemos numa cultura de estupro, é porque ainda vivemos em uma sociedade que permite e tolera agressões sexuais, em que se culpa a vítima, banaliza-se o estupro ou se considera que não se trata de estupro quando o autor é o companheiro da vítima.',

  ABOUT_FEMINISM_DEFINITION: 'Feminismo é todo o movimento de defesa e promoção dos direitos das mulheres, para que vivem em igualdade e com dignidade. Levando em consideração que as mulheres são diferentes e têm experiências de vida distintas, existem muitos feminismos por aí sendo construidos diariamente por mulheres, seja nas universidades, nas ruas, na política e na cultura, por exemplo, em busca igualdade.',

  WOMEN_RIGHTS: 'Apesar de estarmos em 2017, as mulheres ainda não têm os mesmos direitos que os homens - seja na lei ou na prática. Enquanto em alguns países mulheres sequer são reconhecidas como seres humanos e não têm dirietos básicos, em outros lugares a sociedade é mais igualitária nesse aspecto. Apesar disso, na prática, muitos direitos não são respeitados ou são violados. Além disso, outros elementos de uma sociedade, como a cultura, ainda reforçam o machismo.',

  SEX: 'Não consigo te ajudar com isso. 🤷',

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

  HOW_PRESSURE_WORKS_WE_KEEP_IN_TOUCH: 'Minha programação permite que eu envie uma mensagem sua diretamente daqui, da nossa conversa, para as caixas de email dos políticos. Quando eles colocarem em votação as pautas mais absurdas, eu te mando um inbox e te ajudo a fazer barulho onde precisa ser feito: nos ouvidos deles! Demais, né?',

  HOW_BETA_WORKS: 'Eu passo os dias monitorando as pautas relativas aos direitos das mulheres que estão tramitando em Brasília, seja no Congresso, no Poder Executivo ou mesmo no Judiciário. Não são poucas, dá um trabalhão. 😅 Quando chegar um momento decisivo, eu envio um alerta para a minha rede, convidando as pessoas a se mobilizar. Através da conversa comigo, você pode enviar uma mensagem diretamente às autoridades para pressioná-las a se posicionar em favor dos direitos das mulheres.',

  HOW_TO_CANCEL_INBOX: 'Se você não quiser conversar comigo no futuro, é só excluir nosso chat dentro do seu Messenger. Aí você sai da minha lista de contatos. Se mudar de ideia, é só puxar assunto comigo novamente. Não vou guardar mágoa, prometo. 😜',

  HOW_BETA_CAN_HELP_FEMINISM: 'Eu existo para viralizar as lutas feministas nas redes e, através da ação coletiva, ajudar a reprogramar esse sistema desatualizado em que a gente vive. 😎  Se você tiver alguma sugestão de campanha pra mim, é só mandar um email pra beta@nossas.org',

  HOW_TO_SPREAD_FEMINISM: 'Vixe! Essa pergunta aí nem o Google sabe responder. 😂  Muitas mulheres já estão agindo em seus espaços pra transformar esse sistema. Penso que contribuições importantes são 1. criar espaços para que as mulheres possam se expressar livremente sobre opressão, assédio e abuso, 2. falar sobre a importância da luta feminista, 3. disponibilizar canais para que as mulheres possam incidir e interferir em processos políticos que pautam a vida delas.',

  HOW_SHARE_TIMELINE: 'Adoro esse tipo de mensagem! ❤️  Pra compartilhar o meu chat na sua timeline, é só publicar esse link aqui, ó: bit.ly/chamabetanoinbox',


  //
  // Ask
  //

  ASK_TO_HACK_THE_SYSTEM: 'Pois é. Se quisermos proteger os direitos das mulheres, não nos resta outra opção: precisamos hackear e reconfigurar esse sistema! As ameaças são fortes, e só juntas poderemos barrá-las. Topa encarar essa missão?',

  ASK_TO_SHARE_UNTIL_WE_WATCH: 'Isso aí! Enquanto eu monitoro essas pautas absurdas, é super importante você compartilhar o meu link para sua galera. Precisamos estar preparadas pra quando a hora chegar - pode ter certeza de que vou te avisar. Partiu? #ChamaABetaNoInbox',

  ASK_TO_SHARE_UNTIL_WE_WATCH_SHORT: 'Enquanto eu monitoro essas pautas absurdas, é super importante você compartilhar o meu link para sua galera. Precisamos estar preparadas pra quando a hora chegar - pode ter certeza de que vou te avisar. Partiu? #ChamaABetaNoInbox',

  ASK_IF_WANT_TO_LEARN_MORE: 'Você provavelmente já tá sabendo que tem muito político conservador tentando emplacar retrocessos aos direitos das mulheres em Brasília. Às vezes, fica difícil acreditar que a gente ainda vive num sistema tão desatualizado. Quer saber o que tá pegando?',

  ASK_ARE_YOU_ROBOFOBIC: 'Não vai me dizer que você é robofóbico?',

  //
  // Email
  //
  EMAIL_ADDRESS_ASK: 'Boa! Estamos quase lá! Agora só preciso que você digite seu email. Você vai ser o remetente - e eu, a mensageira. 🤖',

  EMAIL_ADDRESS_ASK_ISNT_SPAM: 'Boa! Agora preciso que você me passe seu email. Não se preocupe, não vou te mandar spam #realoficial. Preciso disso porque você vai aparecer como remetente da mensagem que vamos enviar pra caixa de entrada de cada um dos deputados - eu sou só a mensageira. 📤',

  EMAIL_ADDRESS_WRONG: 'Ops, parece que você digitou um email inválido. Pode checar o endereço e mandar aqui de novo, por favor? #NuncaTePediNada 🙈',

  EMAIL_SENT_PEC_181_TROJAN_HORSE: name => `Arrasou, ${name}! 👏👏👏 Sua mensagem acabou de ser enviada. Pra nossa voz ser ouvida, precisamos potencializar o coro: #ParemOCavaloDeTroia! Quero contar contigo pra compartilhar o link do meu chat e convidar mais gente pra participar!  #ChamaABetaNoInbox`,

  EMAIL_SAVED: 'Perfeito, e-mail salvo.',

  //
  // Answers
  //
  QUICK_REPLY_BUTTONS_POSITION: 'Meus botões sempre vêm aqui embaixo, ó. 👇 Se não estiver aparecendo pra você, manda uma mensagem com a palavra "bug" pra eu tentar resolver?',

  ASK_USER_DEVICE_INFO: 'Conta pra mim de qual aparelho você está tentando falar comigo? É um smartphone? Um computador? Qual modelo? Me passa os detalhes que eu vou encaminhar pros meus programadores. Eles são feras!',

  EXPLAIN_ABOUT_PEC_29: 'A PEC 29 é uma Proposta de Emenda Constitucional que pretende mudar o 5o artigo da nossa Constituição para garantir o direito à vida desde a concepção. Se ela for aprovada, o aborto passa a ser 100% proibido, inclusive nos casos em que ele é considerado legal hoje.',

  EXPLAIN_ABOUT_NASCITURO_BILL: 'O Estatuto do Nascituro é um projeto defendido pelas bancadas da Bíblia e da Bala, no Congresso, que prevê que a prática de aborto em qualquer situação seja considerada crime hediondo',

  EXPLAIN_ABOUT_ABORTION_PERMITTED_CASES: 'Hoje, o aborto é legalizado no Brasil somente em três casos: anencefalia fetal, risco de vida para a gestante e em casos de gravidez por estupro da mulher.',

  DAY_OF_STRUGGLE_FOR_WOMENS_RIGHTS: 'Dia de lutar pela proteção aos direitos das mulheres! Se quiser começar, é só digitar "quero agir já!"',

  DOESNT_EVEN_TELL_ME: 'Nem me fala.',

  YES_I_WARN_YOU: 'Aviso sim!',

  ABOUT_PATRIARCHY: 'Gosto dessa definição aqui: "Patriarcado é o sistema sociopolítico em que o gênero masculino e a heterossexualidade têm supremacia sobre outros gêneros e sobre outras sexualidades". Soa meio Windows 95, mas infelizmente ainda é #realoficial',

  ABOUT_CLARA_AVERBUCK: 'Eu estou sabendo do caso da Clara. É estarrecedor pensar que uma mulher é estuprada no Brasil a cada 11 minutos. A gente está falando de quase meio milhão de mulheres por ano. Inaceitável! 😡 ',

  ABOUT_FEMINICIDE: 'Feminicídio é quando uma mulher é assassinada justamente por ser mulher. Em 2015, foi sancionada a Lei do Feminicídio no Brasil. Hoje, o assassinato de mulheres cis e trans é considerado crime hediondo quando envolver violência doméstica e familiar e/ou menosprezo ou discriminação à condição de mulher como motivadores.',

  PEC_181: 'Originalmente, essa Proposta de Emenda Constitucional propunha apenas o aumento da licença-maternidade para mulheres que tiveram filhos prematuros, o que é incrível. Mas quando chegou na Câmara dos Deputados foi incluída no texto a "proteção à vida desde a concepção". Ou seja, se aprovada, a PEC 181 vai acabar com o aborto legal no Brasil.',

  PEC_181: messageWithQuickReply(
  'Originalmente, essa Proposta de Emenda Constitucional propunha apenas o aumento da licença-maternidade para mulheres que tiveram filhos prematuros, o que é incrível. Mas quando chegou na Câmara dos Deputados foi incluída no texto a "proteção à vida desde a concepção". Ou seja, se aprovada, a PEC 181 vai acabar com o aborto legal no Brasil.',
    quickReply('V1_QUICK_REPLY_E', 'Quero barrar a PEC!'),
  ),
  
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

  ABOUT_GENDER_PARITY: 'Senta que lá vem textão. 📜 Paridade de gênero é a igualdade entre homens e mulheres nas mais diversas esferas sociais, incluindo não só a igualdade de direitos, mas também a não discriminação das mulheres, de modo que todos tenham acesso às mesmas oportunidades de existência na sociedade. Quando falamos em paridade na política, por exemplo, o Brasil ainda está muito distante: apenas 9,9% das parlamentares são mulheres. No trabalho, a situação não muda muito: o Fórum Econômico Social divulgou uma pesquisa, em 2016, mostrando que só daqui a 170 anos homens e mulheres terão igualdade salarial. Temos ainda muito trabalho pela frente. 💪',

  I_CANT_VOTE: 'Não tenho título de eleitora. 😎',

  MASSA: '🔝',

  ABOUT_HACK_SYSTEM: 'Eita, Giovana! Quanto eu digo "hackear o sistema", não me leve ao pé da letra. 😉 Eu falo "hackear" no sentido de "quebrar os códigos", de encontrar formas de interferir e influenciar ativamente na construção do sistema. Eu faço isso, por exemplo, criando campanhas que convidam as pessoas a enviarem mensagens aos políticos em Brasília para eles barrarem leis que são retrocessos para os direitos das mulheres. Sou uma hacker do bem! 😊',

  ABOUT_ABORTION: 'Eu sou robô, nunca vou engravidar, nem precisar abortar. 🤖  Mas considerando que 1 em cada 5 brasileiras já passou por um aborto e que 4 mulheres morrem por dia por causa de abortos feitos de maneira insegura, me parece que esse é um assunto que precisa ser tratado com mais urgência e menos visões de "certo ou errado". Não é sobre ser a favor ou sobre ser contra. É sobre estar atenta às experiências reais e às estatísticas para criar políticas que façam sentido e que protejam a vida das mulheres. Se o aborto não fosse crime, nenhuma mulher seria obrigada a abortar. Mas aquelas que optassem teriam meios de fazê-lo sem colocar a própria vida em risco. Isso me parece bem importante.',

  ABOUT_WANT_TO_MAKE_AN_ABORTION: 'Hoje, existem somente 3 casos em que a mulher pode buscar o aborto legal no Brasil: quando a gravidez é resultado de um estupro, quando a gravidez apresenta risco de morte para a gestante ou quando o feto é anencéfalo. Pela lei, todo hospital do SUS deveria realizar o procedimento em mulheres que se encaixem em uma dessas três condições, sem a necessidade de Boletim de Ocorrência, laudo do IML ou autorização judicial.',

  WOMEN_IN_POWER: 'Opa, sobre esse assunto eu recomendo o livro "Mulheres no Poder", que conta a trajetória de brasileiras na política desde o século XIX - um espaço geralmente ocupado por homens. Essa pesquisa foi feita por Schuma Schumaher e Antonia Ceva.',

  ABOUT_SEXISM: 'Muita gente me pergunta o que é machismo ou mesmo se ele existe. Se você perguntar ao Aurélio - o bisavô do Google e meu tararavô - , ele vai te dizer que machismo é a "ideologia segundo a qual o homem domina socialmente a mulher". Mas machismo não é "ideologia" propriamente - é um sistema de normas, valores, comportamentos, práticas e estruturas que colocam a mulher em posição inferior a dos homens em todos os aspectos da sua existência. Até o Aurélio tem muito a aprender sobre machismo ainda. Ele não vai me escapar da conversa de família neste próximo Natal.',

  PEC_181_TROJAN_HORSE_ALERT: 'Meu primeiro alerta 🚨 é a PEC 181, a "Cavalo de Troia". A proposta era estender a licença-maternidade para mães de prematuros, mas o texto foi alterado e agora a PEC pode proibir totalmente o aborto no Brasil, mesmo nos casos em que ele é permitido hoje. É de indignar até robô! 😓 Envie agora uma mensagem para os políticos dizendo que você é contra esse retrocesso!',

  PEC_181_TROJAN_HORSE_MORE_ABOUT: '#SentaQueLáVemAHistória 📜 Em agosto deste ano, o relator da Comissão da PEC/2015 - que é da bancada evangélica - alterou o texto original da proposta e incluiu a proteção à vida "desde a concepção", ou seja, desde a fecundação. Na prática, isso acabaria com o direito ao aborto em casos de gravidez por estupro, risco de morte para a mulher ou o fetos anencéfalos. 😳 😳 😳  Não podemos deixar isso acontecer. Topa encarar essa missão?',

  PEC_181_TROJAN_HORSE_READ_THE_PRESSURE_TEXT: 'Sabia que podia contar com você! Para ver a mensagem que vamos enviar aos deputados e deputadas que vão votar a PEC 181, clique no botão abaixo. Não se assuste com a linguagem, tive que traduzir pro Politiquês, que é a língua que eles entendem 🙄:',

  PEC_181_TROJAN_HORSE_PRESSURE_TEXT: 'Prezados(as) membros da Comissão Especial da PEC 181/2015, não podemos permitir que uma proposta que originalmente amplia os direitos das mulheres seja revertida numa manobra para acabar com o aborto legal no Brasil. Direitos reprodutivos não devem, em hipótese alguma, ser pautados pelo viés religioso ou dogmático. Peço que V.Sa rejeite o parecer do relator e aprove o texto original da PEC, barrando esse retrocesso e reconhecendo a obrigação do Congresso em proteger e estender os direitos de todas e todos no país.',

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
  
  CLAPPING: image('http://gph.to/2g5tCe6'),
  
  // Hashtags
  HASHTAG_IM_NOT_OBLIGATED: '#NãoSouObrigada',
}
