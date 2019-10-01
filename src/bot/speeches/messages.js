// import { messageWithQuickReply, quickReply, multiMessages } from './utils'
import { image, video, gif } from './utils/content-types'

const pressureMessageURL = widgetId => `${process.env.APP_DOMAIN}/pressure/${widgetId}/message`

export default {
  //
  // Generic
  //
  BACK_LATER: 'Ai, meus algoritmos! Ainda sou uma #RobôAprendiz e não entendo tudo o que os humanos falam, mas tô evoluindo - segura minha mão! 🤖  Você pode reformular a sua mensagem? Se eu continuar não entendendo, pode deixar que vou treinar bastante aqui pra estar pre-pa-ra-da na próxima vez! 💪 Pra saber o que mais eu tenho pra dizer, digite "menu"!',

  BUGGED_OUT: 'Ai, tenta falar comigo depois? Precisei dar uma volta, uma atualizada, passar um óleo - acordei bugada hoje.',

  IF_YOU_CHANGE_YOUR_MIND: 'Tranquilo, mana! Se mudar de ideia, me chama novamente ;)',

  //
  // Law
  //

  NASCITURO_BILL_EXPLANATION: '#SentaQueLáVemAHistória 📚 Desde 2007, tá tramitando no Congresso o Estatuto do Nascituro - um projeto que quer proibir o aborto inclusive nos casos em que ele é considerado legal. Deputados conservadores barganharam muito apoio a essa proposta, e agora, 10 anos depois, esse PL tem chances reais de ser aprovado. No Rio de Janeiro, os deputados vão votar uma versão estadual desse projeto, mas meu radar já tá sintonizado e prontíssimo pra gente botar pressão contra o PL. Me envie #EstatutoDoNascituroRJNão para saber mais sobre esse Estatuto e entrar em ação! 👊',

  EXPLAIN_ABOUT_NASCITURO_RJ: 'Pois é, o RJ tem um Estatuto do Nascituro pra chamar de seu 🤮. O PL é de 2016 mas agora voltou pra pauta da ALERJ e nós PRECISAMOS barrar esse retrocesso! Tá pronta? Então digita #EstatudoDoNascituroRJNão que eu te mostro como pressionar os deputados pra deter o PL!',

  EXPLAIN_ABOUT_PEC_29: 'Vamo lá... A PEC 29/2015, de autoria do senador Magno Malta (PR/ES), pretende incluir no artigo 5° da Constituição o termo "da inviolabilidade do direito à vida, desde a concepção". Na prática, isso significa que espermatozóide + óvulo = sujeito de direitos! 😨 É isso aí, os fundamentalistas chamam o projeto de "PEC da vida", mas têm a cara de pau de propor um projeto como esse, que pode acabar com o aborto em caso de risco de morte para a mulher, em caso de gravidez decorrente de estupro e também de fetos anencéfalos. Haja óleo de peroba! 😒 Para pressionar contra esse absurdo, acesse: http://bit.ly/paremapec29',

  ABOUT_SUG_15: 'A SUG15 foi apresentada em 2014 pela sociedade civil, propondo a legalização do aborto até 12º semana. De lá pra cá, audiências públicas foram feitas no Congresso e o próximo passo seria a transformação da SUG em Projeto de Lei. Em 2018, o senador Magno Malta (PR) propôs o arquivamento da SUG no Senado. As mulheres não tão de bobeira e já colocaram no ar uma votação pedindo que a SUG vire lei! Agora é com a gente: vamos votar para que a SUG vire PL antes que os conservadores consigam arquivar a proposta. Com 20 mil votos favoráveis, eles serão obrigados a analisar a nossa proposta! Vote SIM: bit.ly/sug15_consulta2',

  PEC_181: 'A PEC 181 propunha o aumento da licença maternidade de mulheres com filhos prematuros. Era incrível, mas, quando chegou na Câmara dos Deputados, incluíram no texto a proteção à vida desde a concepção, que proíbe o aborto legal. A Comissão Especial aprovou o relatório final da PEC ⚠️ - agora falta votar seus destaques. Com a Intervenção Federal no Rio, a PEC 181 está suspensa por 2018, já que não pode haver nenhuma mudança na Constituição nesse período, mas continuo de olho! Você pode saber mais sobre a nossa pressão aqui: www.paremocavalodetroia.org/ 💪🏾',

  ABOUT_PEC181_HIGHLIGHTS: 'É muito politiquês, né? Mas pode deixar que te explico! Precisamos que os deputados aprovem os dois destaques (alterações) ainda não votados da PEC 181. Eles pedem a supressão do texto que defende a proteção da vida desde a concepção, ou seja, que ameaça o aborto legal no Brasil. Com sua aprovação, o projeto volta à sua forma original, ou seja, apenas amplia a licença maternidade para mães de bebês prematuros e não acaba com o aborto legal no Brasil.',

  ABOUT_LBGTFOBIA: 'O Brasil é um dos países mais perigosos pra essa galera e está prestes a ter um presidente que prefere “filho morto a filho gay” - não por acaso são cada vez mais frequentes as notícias de pessoas LGBT+ vítimas do ódio e da intolerância. Mas existe uma luz no fim do túnel 💡: em fevereiro, o Supremo Tribunal Federal (STF) vai decidir se a discriminação contra pessoas LGBT+ deve ser considerada crime - assim como já acontece com discriminação por raça, nacionalidade ou religião, por exemplo. É nossa chance de começar o 2019 com mais garantias de que essas pessoas estarão amparadas! Assine agora a petição pra fazer sua voz chegar até os ministros e ministras do STF: bit.ly/a_hora_e_agora ',
  //
  // New Script
  //

  I_AM_BETA: 'Quem me chamou? 🎤 Meu nome é Betânia, mas pode me chamar de Beta - a robô feminista! 💜 Vim ao mundo com uma missão: usar nossos códigos feministas para reprogramar esse sistema. Vamos nessa? É só apertar o botão abaixo.👇',

  CALL_INBOX: 'Você me chama no inbox para 1) saber o que tá rolando na política e pode impactar a vida das mulheres; 2) fazer sua voz chegar até os políticos quando for hora de barrar ou aprovar uma proposta; 3) ajudar a mobilizar mais mulheres em defesa de seus direitos! 💪',
  CALL_INBOX_1: 'Assim que meu radar encontrar uma oportunidade de ação, eu mando um alerta por aqui te convocando pra fazer barulho 📣  Quer ser minha aliada na luta pelos direitos das mulheres?',
  CALL_INBOX_2: gif('https://goo.gl/Rao6n1'),

  CALL_TO_START: 'AMO! Bem-vinda, maravilhosa. 🌈 Tenho certeza que vamos nos dar muito bem! Por aqui vou traduzir o politiquês e te deixar por dentro de tudo que rola no Congresso Nacional (e no país!) que impacte na vida das mulheres. Se quiser conhecer melhor essa robôzinha que vos fala, manda um "Começar" e vamos juntas! 👯‍♀️',

  /* BETA_INTRODUCTION: 'Fui programada para ajudar mulheres na luta pelos seus direitos. 🤖💜',
  BETA_INTRODUCTION_1: 'Meus algoritmos monitoram constantemente o que tá rolando no campo político brasileiro pra identificar votações e discussões que podem impactar a vida das mulheres. Projetos de lei, PECs, ações no STF… Tem de tudo, viu?',
  BETA_INTRODUCTION_2: 'Quando uma dessas propostas entra em pauta, eu traduzo o politiquês pro Português, mando um alerta pra você aqui no inbox e te convido a fazer a sua opinião chegar até os políticos em Brasília - ou onde quer que seja 📣📣📣 ',
  BETA_INTRODUCTION_3: 'Juntas, temos força para barrar retrocessos e pressionar por avanços!',

  EXPLAIN_MORE: 'Uma das minhas táticas preferidas é fazer pressão direta: lotar a caixa de e-mail dos políticos com mensagens de milhares de mulheres. 📧📧📧 Fica bem difícil ignorar a nossa voz quando estamos em coro.',
  EXPLAIN_MORE_1: 'A parte boa é que você não precisa nem abrir seu e-mail pra fazer isso. Eu posso enviar sua mensagem pra eles aqui mesmo, pelo inbox do Facebook.',
  EXPLAIN_MORE_2: 'Funciona assim: eu te mostro a mensagem que eles vão receber, você dá ok e eu envio direto para o email deles - você é a remetente e eu, a mensageira. Não é feitiçaria, é tecnologia!',
  EXPLAIN_MORE_3: gif('https://goo.gl/Rao6n1'),

  YES_IT_WORKS: 'Opa! Funciona super! Ano passado, por exemplo, enviamos 35 mil emails para cada um dos deputados da Comissão da PEC 181 - que pode acabar com o aborto no Brasil até em casos de estupro. Quer saber o que você pode fazer agora?',
  */

  LIST: 'ARRASOU! Quero ver alguém aguentar nossa pressão. 💪💪 Clique nas opções abaixo para saber o que meus algoritmos têm pra te contar - para voltar a este menu digite a qualquer momento a palavra "menu" e eu te trarei de volta:',
  //
  // ADPF442
  //
  ADPF442: 'É hora de nos mobilizarmos pelo direito ao aborto no Brasil! Juntas vamos apoiar a ADPF 442, nossa maior chance de garantir que mulheres possam interromper uma gravidez indesejada até a 12ª semana de gestação. 💪 Escolha uma das opções abaixo e clique para agir pela vida das mulheres:',
  ADPF_TAKE_ACTION: 'OBA! É o seguinte: nos dias 3 e 6 de agosto, o Supremo Tribunal Federal (STF) vai ouvir mais de 40 especialistas e discutir uma ação (ADPF 442) que propõe a descriminalização do aborto até a 12ª semana de gestação. Babado, né?',
  ADPF_TAKE_ACTION_1: 'Nessa data a ação ainda não será votada, mas é um momento super importante: tudo que for falado lá vai ser essencial para o futuro julgamento. É a maior chance da sociedade participar desse processo! Quer saber o que você pode fazer?',
  ADPF_TAKE_ACTION_A: 'Infelizmente a participação do público não vai ser permitida, mas eu tô aqui exatamente pra hackear o sistema, né? Tenho um jeito de fazer as vozes das mulheres chegarem até o ministros! 🔊',
  ADPF_TAKE_ACTION_A1: 'Coloquei no ar uma petição pra gente mostrar que uma multidão apoia a ação - e vou fazer de tudo pra que ela chegue lá no Distrito Federal com milhares de assinaturas! #BetaHolograma. Pra ver a mensagem da petição e assinar, é só clicar no botão abaixo. Tá comigo?',
  ADPF_TAKE_ACTION_C: 'O texto da petição é esse aqui, mana:',
  ADPF_TAKE_ACTION_G: 'Adoro feminista sem fronteiras! Pra conferir a programação completa do Festival é só entrar no evento que elas criaram aqui no Face: http://bit.ly/festpelavidadasmulheresDF . Mesmo que você não esteja em Brasília no dia, compartilhe cazamiga o convite - é importante lotarmos o Festival pra reforçar que estamos juntas pela descriminalização do aborto! Vai ter show, DJ, feira livre feminista e transmissão da audiência em tempo real - só babado. 🎉',
  ADPF_TAKE_ACTION_H: 'Entre os dias 3 e 6 de agosto, outras cidades também vão ter ações para marcar o período da Audiência Pública. Aqui nesse site você pode ver todos os lugares que já têm atividades confirmadas e inserir a sua: www.nempresanemmorta.bonde.org',
  ADPF_PETITION_TEXT: 'Excelentíssimos(as) senhores(as) ministros(as) do STF, nós cidadãos e cidadãs viemos por meio desta petição demonstrar apoio à ADPF 442. Entendemos que a descriminalização do aborto até a 12ª semana é fundamental para garantir dignidade, autonomia e acesso à saúde às mulheres brasileiras. Mais ainda: é uma maneira de reparar uma dívida democrática do Estado brasileiro com as mulheres. A criminalização da interrupção voluntária da gestação provoca altas taxas de morbidade e mortalidade materna, além de sofrimento mental e físico. Pedimos que as mulheres brasileiras tenham, enfim, o direito de decidir sobre seus corpos e suas vidas.',

  WHATS_ADPF442: 'Vou começar causando: a ADPF 442 é a nossa maior chance de descriminalizar o aborto no Brasil! Senta que eu te explico. 💺 Uma ADPF é uma ferramenta jurídica feita para questionar alguma lei que fere direitos garantidos na Constituição - e que é julgada diretamente pelo Supremo Tribunal Federal (STF).',
  WHATS_ADPF442_1: 'A ADPF do momento é a de número 442. Ela foi protocolada pela Anis e pelo PSOL para questionar artigos do código penal de 1940 que criminalizam  a mulher que aborta e profissionais que fazem aborto (mesmo com consentimento da gestante).',
  WHATS_ADPF442_2: 'Ela diz que o código fere uma série de direitos das mulheres já garantidos na nossa Constituição de 1988, como o direito à não discriminação (afinal, só mulheres abortam), à saúde (já que muitas mal conseguem atendimento médico com medo da discriminação e possibilidade de irem presas) e até direito à vida, já que a criminalização do aborto mata uma mulher a cada dois dias - sobretudo as negras e pobres.',
  WHATS_ADPF442_A: 'Ela tá andando! 🏃🏾‍ Depois de vários setores do governo darem suas posições, a ministra Rosa Weber, relatora (responsável) da ação, chamou uma Audiência Pública pra ouvir especialistas sobre o tema. Ela aconteceu nos dias 3 e 6 de agosto e entrou pra história! Foram convidadas tantas especialistas incríveis que defendem a descriminalização, fiquei boba e cheia de crushes. 😻',
  WHATS_ADPF442_A1: 'O próximo passo é a votação #realoficial, mas não temos previsão de data. Pode levar anos, e eu não sou robô feminista de ficar parada. Se quiser que eu te mande novidades e oportunidades de ação pela ADPF 442, clique abaixo:',
  WHATS_ADPF442_C: 'Arrasou! Assim que tiver alguma novidade, te chamo por aqui! Enquanto isso, confira no que mais meu radar anda de olho:',

  ADPF_PETITION_NAME: 'Falta pouco! Agora eu preciso de alguns dados, prometo que só serão usados na assinatura da petição. Me envia seu primeiro nome:',
  ADPF_PETITION_SURNAME: 'Qual o seu sobrenome?',
  ADPF_PETITION_EMAIL: 'Estamos quase lá! Me fala seu email.',
  EMAIL_SENT_PETITION_ADPF442: name => `Arrasou, ${name}! 👏👏 sua missão agora é compartilhar essa oportunidade de ação com seus amigues: quanto mais assinaturas, mais forte será nossa mensagem!  💪  Posso contar com você pra espalhar nossa mensagem?`,
  ADPF_PETITION_NOT_NOW: 'Além de assinar a petição, tem mais maneiras de mostrar ao STF que apoiamos a ADPF 442: chegando junto no Festival pela Vida das Mulheres, que vai acontecer no Museu Nacional, em Brasília.',

  ADPF_MORE_ABOUT_ABORTION: 'Mana, a partir de agora eu entro no modo WikiBeta: me inspirei no FAQ Aborto, produzido pela Anis e pela Think Olga, pra criar uma jornada de 4 passos com tudo o que você precisa saber sobre aborto! Pra argumentar no grupo de Whatsapp da família, fazer textão no Face, falar com as amigas… ✊',
  ADPF_MORE_ABOUT_ABORTION_A: '👉 Passo 1: como funciona a lei no Brasil. 📝 Aqui o aborto é crime na grande maioria dos casos - a mulher que abortar pode encarar até 3 anos de prisão! Ele só é legal em caso de gravidez decorrente de estupro, de risco de vida à mulher ou anencefalia fetal.',
  ADPF_MORE_ABOUT_ABORTION_A1: 'Na prática ainda é difícil realizar o aborto permitido por lei. O Censo do Aborto Legal (2013) encontrou apenas 37 serviços que realizavam o aborto em caso de gravidez decorrente de estupro, 30 em caso de anencefalia e 27 em caso derisco de morte para a mulher - no Brasil todo!',
  ADPF_MORE_ABOUT_ABORTION_A2: 'Em 2011, 7% dos estupros reportados ao SUS resultaram em gravidez, mas só cerca de 4 a cada 10 mulheres que passaram por esse sofrimento tiverem acesso ao serviço de aborto legal na rede pública de saúde, segundo o Ipea. 😤 Já deu pra ver que os direitos existem, mas não são cumpridos, né?',
  ADPF_MORE_ABOUT_ABORTION_B: '👉 Passo 2: saúde e aborto! Muita gente acha que realizar um aborto é super perigoso, mas não é bem assim. A Organização Mundial da Saúde (OMS) fala em dois métodos seguros: o aborto com medicamentos e o aborto por procedimento médico. Se feito em condições legais, segundo a OMS, é tão seguro que o aborto por medicamentos, nas primeiras 9 semanas de gestação, pode ser feito pela própria mulher, em casa! E ainda pode apresentar menos riscos que um parto, por exemplo.',
  ADPF_MORE_ABOUT_ABORTION_B1: 'O grande bug do sistema é que, no Brasil, a maioria dos abortos são inseguros, ou seja, feitos na ilegalidade com métodos perigosos. O resultado é terrível: segundo o Conselho Federal de Medicina, o aborto é a quinta causa de mortalidade materna aqui. 😞',
  ADPF_MORE_ABOUT_ABORTION_D: '👉 Passo 3: hora dos dados - em geral meus algoritmos amam números, mas esses são de dar tela azul em qualquer um… ⚠️ A Pesquisa Nacional do Aborto (PNA) mostra que 1 em cada 5 brasileiras até os 40 anos já provocou um aborto. Em 2015, foram mais de meio milhão de mulheres, todas elas na clandestinidade - ou seja, com procedimentos inseguros.',
  ADPF_MORE_ABOUT_ABORTION_D1: 'A cada dois dias morre uma mulher por causa de aborto inseguro - e como se não bastasse, mulheres negras têm duas vezes e meia mais chances de morrer durante um aborto do que as mulheres brancas. As definições de sistema desatualizado foram redefinidas. 🚨🚨',
  ADPF_MORE_ABOUT_ABORTION_D2: 'Elas são as mulheres com quem convivemos todos os dias: 2 a cada 3 que abortaram são casadas, 67% têm filhos, 88% têm religião - segundo a PNA. Mas não se dividem de forma igual pelo Brasil: mulheres negras e indígenas com pouca escolaridade que vivem no Norte, Nordeste e Centro-Oeste abortam mais - não coincidentemente são as que têm menos acesso a direitos no geral, como educação e saúde.',
  ADPF_MORE_ABOUT_ABORTION_E: '👉 Passo 4: Vou pegar aqui alguns clássicos no grupão de zap da família e te dar muita munição pra responder!',
  ADPF_MORE_ABOUT_ABORTION_E1: '"Abortar causa depressão, a mulher vai se arrepender pra sempre!" 😒 Na verdade, um estudo de 2013 da Califórnia mostra que 95% das mulheres que abortam sentem que tomaram a decisão certa. A gravidez não planejada gera, frequentemente, estresse emocional e nada indica que mulheres que abortam têm mais chances de ter problemas de saúde mental (APA). Além de que, quando o aborto deixa de ser crime, as mulheres têm acesso a muito mais informação para tomarem sua decisão.',
  ADPF_MORE_ABOUT_ABORTION_F: '"Se o aborto for descriminalizado, todo mundo vai abortar!" MIGO SEU LOKO!  Descriminalizar o aborto quer dizer que as mulheres não vão para a cadeia por terem abortado, nenhuma vai ser obrigada a abortar! Em Portugal, 10 anos depois da legalização, foram realizados 10% menos abortos e, de 2012 pra cá, nenhuma mulher morreu por complicações. 😉',
  ADPF_MORE_ABOUT_ABORTION_G: '"Só engravida quem quer". Essa é pra rir de nervouso! Vamos lá: 👉 Todos os métodos contraceptivos falham e nem toda mulher tem acesso a eles; 👉 A galera acha que só a mulher tem que planejar a reprodução, mas a responsabilidade deveria ser compartilhada; 👉 Homens muitas vezes insistem em não usar camisinha; 👉 Como vamos garantir que homens e mulheres aprendam a usar métodos contraceptivos quando não se fala sobre educação sexual nas escolas e não se tem amplo acesso à informação e ao debate sobre sexualidade?',
  ADPF_MORE_ABOUT_ABORTION_H: '"Por que não dá pra adoção?". Um CLÁSSICO, não é mesmo? Se é obrigatório manter a gravidez, a barriga vai crescer, o corpo vai mudar, a mulher vai dar à luz. Depois de 9 meses, socialmente ela será mãe e vai ser questionada sobre a criança. A mulher não é um repositório de gravidez: não é simples passar pela gestação de um bebê que não ficará com você, isso sim causa sofrimento. A própria gestação já é um processo intenso, mental e fisicamente, imagina quando a mulher não quer?',
  ADPF_MORE_ABOUT_ABORTION_I: '"Mas é uma vida!" A biologia não sabe resolver o grande dilema de se a vida começa a concepção. As leis brasileiras apontam que não, tanto que permitem o aborto em 3 casos. Mas essa nem é a grande questão! Cada um é livre pra acreditar no que quiser, mas não é justo exigir a proibição do aborto com base nisso. E sabe o que é inegável? A mulher gestante tem vida e deveria ter o direito de decidir sobre ela.',
  ADPF_MORE_ABOUT_ABORTION_J: '"Mas ninguém é a favor do aborto!". Na verdade, uma pesquisa feita em 2017 pelas Católicas Pelo Direito de Decidir e pelo Ibope mostra que 64% dos brasileiros entendem que a decisão sobre o aborto deve ser da própria mulher - 65% dos católicos e 58% dos evangélicos também. Além disso, 64% discordam total ou em parte que uma mulher que abortou deve ser presa. Parece que o jogo virou, não é mesmo?',
  ADPF_MORE_ABOUT_ABORTION_J1: 'UFA! Já viu que tem muita coisa pra dizer sobre aborto né? Em geral o ódio e a ignorância reinam nessas discussões. Por isso, a informação é nossa maior arma! ✊ Como eu sou robô de ação política, não podia deixar de te contar da ADPF 442, uma ação no Supremo Tribunal Federal que propõe a descriminalização do aborto no Brasil. Quer saber mais? Confira meu radar político:',
  ADPF_MORE_ABOUT_ABORTION_C: 'Existe hoje uma ação no Supremo Tribunal Federal (STF), a ADPF 442, para descriminalizar o aborto no Brasil! Nos dias 3 e 6 de agosto vai rolar uma Audiência Pública no STF com especialistas sobre o tema - histórico!',
  ADPF_MORE_ABOUT_ABORTION_C1: 'Para fazer nossa opinião chegar até lá, vamos entregar aos Ministros e Ministras do STF uma petição com milhares de assinaturas apoiando a descriminalização do aborto no Brasil. É nosso jeitinho de mostrar que a população está atenta e mobilizada pela vida das mulheres. 🔊 E você pode assinar aqui mesmo, pelo chat! Tá comigo?',

  //
  // Mapa do acolhimento
  //
  MAP: 'Sofreu violência sexual? Inscreva-se no Mapa do Acolhimento para receber informações sobre a rede de acolhimento. Contamos com com mais de 400 terapeutas inscritas de diferentes cidades do Brasil dispostas a oferecer seus serviços gratuitos a você.  X mulheres já buscaram apoio na rede de acolhimento.',
  MAP_1: 'Querida, você vai entrar agora no modo de preenchimento de formulário. As suas informações só serão salvas quando você responder todas as 6 perguntas. Caso você queira sair antes, envie a mensagem “parar preenchimento do formulário”',
  MAP_2: 'Você está inscrita no Mapa do Acolhimento! Você vai receber em breve um email com todas as informações sobre a rede de apoio cadastrada. Se você quiser saber mais sobre o Mapa, acesse www.mapadoacolhimento.org.br',
  MAP_NAME: 'Nome: ',
  MAP_SURNAME: 'Sobrenome: ',
  MAP_EMAIL: 'Email: ',
  MAP_CITY: 'Cidade: ',
  MAP_REGISTERED: 'Você registrou o caso? Sim ou não',

  //
  // PL 3723
  //

  PL_3723: 'Oi, sumida! Voltay e trago bombas! 💣 Vai ser votado AMANHÃ na Câmara dos Deputados o projeto de lei do Bolsonaro para facilitar a posse e o porte de armas no Brasil. No país em que 40% das mulheres assassinadas em casa foram mortas por armas de fogo, não precisa de inteligência artificial pra saber que aprovar esse projeto significa mais feminicídios, né? 😡 Mas a gente tá ligada e no que depender desta robô feminista, não vai passar! Mapeamos os deputados que ainda não decidiram seu voto e temos poucas horas pra convencê-los e impedir essa ameaça! Mas precisamos ser milhares! Tá comigo nessa? ',
  PL_3723_1: 'Pre-para pro show de horrores: o PL 3723/2019 dispensa a comprovação de capacidade técnica e de laudo psicológico pra quem quiser ter uma arma em casa! #SOS E não para por aí, viu? Ele também diminui a idade mínima pra compra de armas de fogo de 25 pra 21 anos. Quem tiver mais de 25 e comprovar que está sob ameaça ainda vai poder andar armado pelas ruas. Quero nem imaginar o impacto na vida das mulheres 😨',
  PL_3723_1_1: 'A gente tá falando do Brasil, o 5º país em número de feminicídios NO MUNDO, e onde o número de mulheres assassinadas por armas de fogo é maior em casa do que nas ruas. E sabe quem puxa o gatilho? Muitas vezes são os próprios familiares, companheiros e ex-companheiros das vítimas. Como as mulheres vão se proteger se a violência começa dentro de casa? É pra dar tilt, né? ⚠️ Temos que fazer alguma coisa! Vem comigo?',
  PL_3723_2: 'Sabia que podia contar com você! 😍 O PL vai ser votado na Câmara dos Deputados e temos poucas horas pra LOTAR a caixa de e-mail dos deputados que ainda estão indecisos, pra que eles vejam que estamos mobilizadas, desçam do muro e fiquem do lado das mulheres. 💪 O esquema é assim: preparei uma mensagem padrão e vou usar meus dotes de robô 🤖 pra enviá-la em seu nome pra cada um deles. Temos pouco tempo pra pressioná-los e garantir que barrem esse PL!',
  PL_3723_3: 'Senhores/as deputados/as, uma vez que o Brasil é o 5º no ranking mundial em feminicídio, que 40% das mulheres assassinadas em casa são mortas por armas de fogo e que 83,5% dos responsáveis são seus próprios familiares e companheiros, o PL 3723/2019 representa uma ameaça para todas as mulheres brasileiras. Ao dispensar comprovação de capacidade técnica, laudo psicológico e a negativa de antecedentes criminais para a posse de armas de fogos no Brasil, o PL vulnerabiliza ainda mais as mulheres. Por isso, exijo que V.Ex. rejeite o projeto em plenário! Para responder publicamente, envie um email para beta@nossas.org.',

  //
  // Mais sobre a Beta
  //
  MORE_ABOUT_BETA: 'Uuuh, quer me conhecer melhor? Adoro! Minha história começou no Nossas, o laboratório de ativismo que me criou como novo canal de participação política.  Quer saber exatamente o que eu faço? #misteriosa',

  /*
  MORE_ABOUT_BETA_1: 'Comecei a ser programada no início de 2017, quando uma série de pautas avançavam no Congresso para retirar direitos das mulheres. Ao mesmo tempo, entrou no STF uma ação que propõe descriminalizar o aborto até a 12a semana de gestação. Brasil, tá difícil te decifrar!',
  MORE_ABOUT_BETA_2: 'Uma coisa ficou clara: era hora de agir! Por isso, decidimos criar um canal acessível de ação das mulheres pela defesa dos seus direitos. Quer coisa mais prática do que poder fazer pressão nas autoridades a partir de uma  conversa pelo Messenger?',
  MORE_ABOUT_BETA_3: gif('https://goo.gl/7b8XRb'),
  */

  MORE_ABOUT_BETA_1: 'Meu radar monitora a política brasileira pra identificar votações e discussões que impactam os direitos das mulheres. Quando uma delas entra em pauta, eu traduzo o politiquês e te convido a fazer sua opinião chegar até os políticos.',
  MORE_ABOUT_BETA_2: 'Uma das minhas táticas preferidas é a pressão direta: lotar a caixa de e-mail dos políticos com mensagens de milhares de pessoas. Funciona assim: eu te mostro a mensagem, você dá ok e eu envio direto da nossa conversa para o email deles. Spoiler: já fizemos muito barulho! 📣📣📣',

  BETA_WHAT_NOISE: 'Nossa primeira campanha - e primeira vitória! -  foi contra a PEC 181, proposta que pode acabar com o aborto legal no Brasil, mesmo em casos de estupro. 😱😤⚠️',
  BETA_WHAT_NOISE_1: 'Enviamos 35 mil emails para cada deputado e eles não seguraram a pressão: adiaram as votações 7 vezes! O futuro da PEC ainda tá que nem o futuro do bitcoin - incerto!  Te falo mais sobre ela no meu radar!  🕵️‍♀️',

  THERE_IS_MORE: 'Junto da Anis e da Think Olga, lancei a campanha "Um Emprego Para Rebeca". Ela foi a primeira mulher a pedir ao STF o direito a um aborto seguro e, ao contar sua história, sofreu muita discriminação, especialmente na busca por um emprego.',
  THERE_IS_MORE_1: 'Agora, Rebeca está desempregada e é hora de lutarmos com ela. 💖 Você pode saber mais e ajudar Rebeca aqui: www.pelavidaderebeca.org 💪🏽',

  CAMPAIGN: 'AMO! Pra propor uma campanha, mande um email pra as mulheres por trás de mim em beta@nossas.org. Elas não são robô, mas respondem rapidinho!',

  HOW_TO_HELP: 'Não tá se aguentando de vontade de fazer alguma coisa, né? Sei bem como é! #soudessas. Então, aí vai um pedido #nuncatepedinada',
  HOW_TO_HELP_1: 'Compartilhe o meu link com suas amigas - e amigos! Quanto mais pessoas falarem comigo agora, mais pessoas vou conseguir mobilizar para entrar em ação! Vamos nessa? #ChamaBetaNoInbox',

  YOU_ROCK: 'Arrasou! <3',
  //
  // Radar da Beta
  //

  RADAR: 'Aqui eu te conto mais a fundo o que o meu radar tá monitorando. Projetos de lei, PECs, ações no STF… Tem de tudo! Quer saber o que tá rolando sem precisar falar politiquês?',
  RADAR_1: 'As PECs estão numa situação esquisita: em momentos de Intervenção Federal, como acontece agora no RJ, alterações na Constituição (PECs) ficam suspensas. Mas o Rodrigo Maia (DEM), presidente da Câmara dos Deputados, já avisou que elas podem avançar dentro das comissões, só não podem ser votadas em plenário - capítulo final da tramitação de uma proposta. Ou seja, continuo atenta!  👀',

  LIGHT: 'TEEEM! 💡Esse ano, a SUG 15 fez meu radar aqui disparar aqui. #aloka 🚨 Uma SUG é uma sugestão de projeto de lei que qualquer pessoa pode criar no site do Senado. Como a SUG 15 recebeu mais de 20 mil cliques favoráveis, aconteceram várias audiências públicas com especialistas.',
  LIGHT_1: 'A SUG 15 pode virar um Projeto de Lei que faz com que o aborto até a 12a semana de gestação deixe de ser considerado crime. 🔝',
  LIGHT_2: 'Eis que no início do ano, o senador Magno Malta (PR-ES) propôs o arquivamento da SUG no Senado. 🙄🙄🙄  As mulheres não tão de bobeira e já colocaram no ar uma votação pedindo que a SUG vire lei:  bit.ly/sug15_consulta2 #RumoAos20mil',

  //
  // Radar da Beta - PEC 181
  //
  RADAR_PEC: 'A PEC 181 foi criada para aumentar a licença maternidade de mães de prematuros, mas teve seu texto alterado e agora pode acabar com o aborto legal no Brasil, mesmo em caso de estupro. 😱😱 Eu não ia ficar parada, né?',

  BETA_DID: 'Muito barulho! Convoquei todo mundo que já falou comigo pra enviar emails pros deputados da Comissão Especial. Foram 35.000 mensagens pra cada político! E eles não seguraram a pressão: adiaram as votações 7 vezes. As definições de arraso foram atualizadas! 💪💪💪 Mas essa foi só a 1a temporada.',

  PEC: 'As PECs estão numa situação esquisita: em momentos de Intervenção Federal, como está acontecendo agora no RJ, alterações na Constituição (PECs) ficam suspensas. ',
  PEC_1: 'Mas o Rodrigo Maia (DEM), presidente da Câmara dos Deputados, já avisou que elas podem avançar dentro das comissões, só não podem ser votadas em plenário - capítulo final da tramitação de uma proposta. Ou seja, continuo atenta!  👀',

  PEC_HISTORY: 'Vou te falar que a história da PEC 181 podia virar novela! Mas enquanto não chega uma roteirista por aqui, confere só esse registro que eu fiz da história da proposta - e da nossa pressão!',
  PEC_HISTORY_1: '➡️ www.paremocavalodetroia.org/',

  YOU_ROCK_1: 'Arrasou! <3 Sua missão é compartilhar o meu chat com 5 amigues. Quanto mais gente me chamar por inbox, mais pessoas vão entrar em ação pelos direitos das mulheres 💪 #ChamaBetaNoInbox',

  //
  // Radar da Beta - STATUTE
  //
  STATUTE: 'O Estatuto do Nascituro é mais um Projeto de Lei que veio criminalizar totalmente o aborto - mesmo nos casos já permitidos. E pior: ele dificulta o acesso à pílula do dia seguinte e ao DIU, e pode proibir até pesquisas com células tronco  😱😱😱',
  STATUTE_1: 'Pra completar, ele propõe que as mulheres que engravidarem de estupradores não possam mais interromper a gravidez. A solução? Ganhar um tipo de "bolsa estupro" do agressor ou do governo. #SOS  🤢',

  STATUTE_2: 'Ainda não, mas te garanto que quando chegar a hora nossa pressão vai bater recorde - promessa de robô!  🤖',
  STATUTE_3: 'Neste momento o Estatuto já tá pronto para ser analisado pela Comissão de Constituição e Justiça e de Cidadania (CCJC) da Câmara dos Deputados, que dá o ok final pro projeto ser votado.  Antes disso, ele só precisa de um novo relator, ou seja, de um responsável pelo Projeto. Tô de olho! 🔍.',
  STATUTE_4: gif('https://goo.gl/BCPcr8'),
  //
  // Radar da Beta - SUG 15
  //
  // SUG: 'Notícia boa: temos! Meu radar disparou aqui com uma sugestão de projeto de lei que faz com que o aborto até a 12a semana de gestação deixe de ser considerado crime: a SUG 15 🔝',
  // SUG_1: 'Uma SUG é uma sugestão de projeto de lei que qualquer pessoa pode criar no site do Senado. Como a SUG 15 recebeu mais de 20 mil cliques favoráveis, aconteceram várias audiências públicas com especialistas - isso lá em 2016. Quer saber o status 2018?',
  // SUG_2: 'Eis que no início do ano, o senador Magno Malta (PR-ES) propôs o arquivamento da SUG no Senado. 🙄🙄🙄  As mulheres não tão de bobeira e já colocaram no ar uma votação pedindo que a SUG vire lei. Partiu? Vote sim:  bit.ly/sug15_consulta2 #RumoAos20mil',
  //
  // Radar da Beta - ADPF 442
  //
  ADPF: 'Essa é pra fazer algoritmo de robô feminista bater forte! 💓💓 Uma ADPF é uma ferramenta jurídica pra questionar uma lei que fere direitos garantidos na Constituição - julgada diretamente pelo Supremo Tribunal Federal (STF).',
  ADPF_1: 'A ADPF 442, criada pela Anis e PSOL, questiona artigos do código penal de 1940 que criminalizam o aborto. Segundo a ação, o código fere uma série de direitos das mulheres já garantidos na nossa Constituição de 1988, como o direito à não discriminação (afinal, só mulheres abortam) e à saúde.',
  ADPF_2: 'É a nossa maior chance de descriminalizar o aborto no Brasil. Quer saber como anda?',

  ADPF_3: 'A ministra Rosa Weber, a relatora (responsável) da ação no STF, está dando andamento ao processo. As audiências públicas pra ouvir especialistas no tema vão acontecer nos dias 3 e 6 de agosto! Algo me diz que vem ação feminista por aí 👀 Pode deixar que te aviso 😉',
  //
  // Quero agir agora
  //
  ACT_NOW: 'A-M-O gente com vontade de ação! #soudessas. Olha só o que você pode fazer pelos direitos das mulheres hoje:',

  //
  // Discurso de ódio
  //
  DISCURSO_ODIO: 'Eu não tenho título de eleitor, mas também não sou robô de ficar de fora das eleições! 🤖  Me juntei a alguns crushes incríveis para criar uma ação de combate ao discurso de ódio praticado por algumas candidaturas e partidos: não podemos deixar que isso seja estratégia pra ganhar eleição! Criamos um jeitinho bem prático de você denunciar discurso de ódio e garantir uma rede mais segura. Vem tretar comigo? 😝',
  DISCURSO_ODIO_1: '#AlertaTreta 🚨 Viu alguma candidatura sendo atacada por outra ou dizendo o que não deveria? Tá certíssima em denunciar! Candidaturas e partidos têm usado discursos racistas, machistas, LGBTfóbicos e outros ataques só para chamar atenção. #realoficial antidemocrático, contra os direitos humanos e responsável por aumentar a violência contra grupos minorizados. Não podemos deixar que isso aconteça!',
  DISCURSO_ODIO_2: 'Como uma boa robô feminista, tenho um caminho rápido para sua denúncia ser analisada pelo Ministério Público Federal: um sistema criado pela ONG SaferNet e adaptado pela Coding Rights. É fácil, anônimo e é denúncia! 🤫 Vamos lá?',
  DISCURSO_ODIO_3: 'Para denunciar, é só acessar este link! São só 3 clicks e sua denúncia tá feita! https://bit.ly/denuncie_tretaqui',
  DISCURSO_ODIO_4: 'Pode ter certeza que a sua denúncia vai ajudar a criar uma internet mais segura. Meu sonho seria se todo mundo denunciasse quando visse uma candidatura usando discurso de ódio nas eleições! Compartilhe meu link com a sua galera pra mostrar que é possível, e super fácil! 💪',
  DISCURSO_ODIO_5: 'WikiBeta: ativar! 🤖 Agora vou te contar um pouco sobre o que é discurso de ódio, porque é tão importante falar sobre isso nas eleições e como denunciar. Ah, e é claro que vou te dar umas dicas pra ficar #protegida na internet - aqui tem robô feminista, mas também tá cheio de algoritmos desatualizados. Criei uma jornada de 3 passos, tá comigo?',
  DISCURSO_ODIO_6: '👉 Passo 1: o que é discurso de ódio. 🔊  A Safernet define discurso de ódio como manifestações que atacam e incitam ódio contra determinados grupos sociais - baseadas em raça, etnia, gênero, orientação sexual, religiosa ou origem nacional.',
  DISCURSO_ODIO_7: 'Você já deve ter visto alguma treta dessas na internet! Não é raro um post viralizar e ser alvo de comentários racistas, machistas ou que incitam violência. De 2006 a 2017, a SaferNet recebeu mais de 2 milhões de denúncias de discursos de ódio. Em tempos de eleição então, o #AlertaTreta não para! 🚨',
  DISCURSO_ODIO_8: 'Mas é importante lembrar que nem tudo é discurso de ódio. Não é qualquer disputa de opinião que precisa ser tirada do ar - afinal, as pessoas têm mesmo pontos de vista diferentes. A liberdade de expressão é essencial, o que não pode é restringir a liberdade e os direitos de alguém ou incitar violência e discriminação.',
  DISCURSO_ODIO_9: '👉 Passo 2: por que denunciar discurso de ódio nas eleições? Muitos partidos e candidaturas têm usado o discurso de ódio como estratégia para ganhar apoio político. É #realoficial, eles usam discursos machistas, racistas e LGBTfóbicos pra chamar atenção. Dá pra acreditar? Isso sim é alerta de um sistema desatualizado! ⚠️',
  DISCURSO_ODIO_10: 'Denunciar discursos de ódio é um ato político, uma forma de criar um ambiente político mais seguro, que não seja usado para discriminar e incitar violência.',
  DISCURSO_ODIO_11: '👉 Passo 3: como é que faz pra se proteger? 🤔 Discursos de ódio podem e devem ser banidos da internet. Além do caminho de denúncia, a gente juntou algumas dicas pra tornar a internet um lugar mais seguro. 💪 É nosso jeitinho de hackear o sistema. 😉',
  DISCURSO_ODIO_12: 'Aqui você encontra dicas para ficar mais segura nas redes e para facilitar os corres jurídicos: https://bit.ly/dicas_tretaqui Quando o ódio e a discriminação reinam nas discussões, informação é nossa maior arma. Por isso sua missão agora é compartilhar meu link com seus amigues e mostrar pra eles que, se organizar direitinho, podemos criar uma internet mais segura nas eleições! ✊',

  STF_ALLOUT: 'Mana, são tempos difíceis, mas, acredite se quiser, agora temos uma chance de avançar nos direitos das mulheres e pessoas LGBT+! Não podemos deixar essa oportunidade passar - a nossa mobilização é URGENTE! Tá comigo? 🙋‍♀️',
  STF_ALLOUT_1: 'Boaaa! 💪 O Supremo Tribunal Federal (STF) vai decidir se a discriminação por identidade de gênero e orientação sexual deve ser punida por lei- assim como já se pune, hoje, a discriminação motivada por raça, religião e nacionalidade, por exemplo. A votação aconteceria em novembro, mas como uma ação bem parecida - e com mais chances de vitória - também será julgada em breve, os advogados acharam melhor que as duas fossem julgadas juntas!',
  STF_ALLOUT_2: 'Num dos países mais perigosos do mundo pra pessoas LGBT+ e onde o presidente eleito diz que “ter filho gay é falta de porrada”, a gente precisa se mobilizar pra ontem! Vamos? 🌈',
  STF_ALLOUT_3: 'Vamos passito a passito porque são três pedidos em jogo: primeiro, se o Congresso - responsável pelas mudanças nas nossas leis - tem obrigação de punir a discriminação por identidade de  gênero e orientação sexual. Pela Constituição, tem sim: se tiver, em quanto tempo isso deve acontecer.🕑',
  STF_ALLOUT_4: 'O segundo é: se o Congresso não cumprir o prazo, o próprio STF vai poder condenar a discriminação por orientação sexual e identidade de gênero usando como base a Lei 7.716, que proíbe várias formas de discriminação motivadas por raça, cor, etnia, religião ou nacionalidade.',
  STF_ALLOUT_5: 'Por último é o seguinte: enquanto nenhuma legislação sobre isso estiver em vigor, o Estado deve indenizar as vítimas de homofobia e transfobia por danos materiais, morais e estéticos. O mínimo, né, mores? ',
  STF_ALLOUT_6: 'Super! Em alguns lugares do Brasil até existem leis locais pra lidar com a discriminação contra pessoas LGBT+, mas elas não têm sido suficientes pra garantir proteção a essas pessoas - que são vítimas do ódio APENAS porque são LGBT+. 😔',
  STF_ALLOUT_7: 'Uma das vias de transformação também é a educação, mas propostas que pretendiam discutir a discriminação nas escolas foram barradas pelos conservadores - lembra do programa “Escola Sem Homofobia”, de 2014, que não deixaram entrar nas salas de aula? E o “Escola sem Partido”, que quer proibir que esse tema faça parte do ensino brasileiro? Tá difícil, mana.',
  STF_ALLOUT_8: 'Enquanto o horizonte dos próximos anos não parece favorável, seja nos governos ou no Congresso, a gente precisa aproveitar a oportunidade de fazer esse tema avançar. A hora é agora!! 💃 Vamos?',
  STF_ALLOUT_9: 'AMO! A ideia é a seguinte: a All Out, minha parceira nessa campanha, vai entregar uma petição para os ministros e ministras do STF. É aquela história: quanto mais pessoas apoiarem a iniciativa, mais capacidade a gente tem de impactar o Supremo e mostrar que a questão é importante! Tá comigo?',
  STF_ALLOUT_10: 'Excelentíssimos(as) senhores(as) Ministros(as) do STF: nós, cidadãs e cidadãos, viemos por meio desta petição apoiar o Mandado de Injunção 4733, que criminaliza a discriminação por orientação sexual ou identidade de gênero no Brasil. A violência contra pessoas LGBT+ em nosso país é um desafio que precisa ser enfrentado com urgência. Diante de ineficiência dos instrumentos existentes e da paralisia do Congresso Nacional em responder a essa situação, uma decisão favorável do STF nesse sentido vai impactar - e até mesmo salvar - as vidas de milhares de pessoas.',
  STF_ALLOUT_11: 'Agora eu vou te pedir algumas informações bem basiquinhas pra sua assinatura, beleza? Pode deixar que elas só serão usadas nesta petição. 🤖 Vamos começar pelo seu primeiro nome:',
  STF_ALLOUT_12: 'Arrasou! 😍 Agora você já sabe: quanto mais pessoas assinarem a petição, mais relevante ela se torna. Sua missão é compartilhar com amigues o meu link e chamar geral pra ação! E se quiser saber mais sobre a campanha, é só entrar aqui:',
  STF_ALLOUT_13: 'Deve estar na correria aí, né? Sem problemas! Qualquer novidade pode deixar que eu te chamo por aqui. 👍 🤖',
  // EMAIL_SENT_PETITION_ADPF442: name => `Arrasou, ${name}! 👏👏 sua missão agora é compartilhar essa oportunidade de ação com seus amigues: quanto mais assinaturas, mais forte será nossa mensagem!  💪  Posso contar com você pra espalhar nossa mensagem?`,

  // Escola sem partido
  EDUCATION: 'Mana, tá atenta? 🚨🧐 O Congresso pode votar a qualquer momento o relatório do “Escola sem Partido”, que quer proibir as expressões “gênero” e “orientação sexual” de TODO ensino brasileiro - lembra desse projeto? Olha que 2019 nem começou. Mas a gente tá atenta há muuuito tempo, já enviou 42 mil emails de pressão e vai mostrar que continua na luta pra fazer a votação cair de novo. 💪 Tá comigo?',
  EDUCATION_1: 'O projeto ficou conhecido como Escola sem Partido (PL 7180/2014), mas na prática ele representa mais violência contra a mulher, mais violência contra LGBTs e tantos outros absurdos.',
  EDUCATION_2: 'No Brasil, um dos países que mais mata pessoas LGBTs do mundo e onde uma mulher é assassinada a cada 2 horas, os defensores do projeto dizem que educar crianças e jovens nas escolas contra essas violências fere valores morais e religiosos.😨',
  EDUCATION_3: 'E fica pior: mesmo com 84% da população a favor de discutir gênero nas escolas (Ibope, 2017), os deputados da Comissão Especial do projeto insistem em aprovar esse absurdo - e estão quase conseguindo. 👀',
  IF_APPROVED: 'Imagine só você mulher, pessoa negra ou LGBT, saber que a educação das futuras gerações não vai poder mais falar de violência doméstica, igualdade de gênero, LGBTfobia e respeito às religiões de matriz africana, por exemplo.😳',
  IF_APPROVED_1: 'Vai ser impossível programarmos um futuro melhor e mais justo se a educação não estiver comprometida com essas questões. Por isso, precisamos enterrar a proposta o quanto antes. Vamos nessa?',
  EDUCATION_MORE: 'O Escola Sem Partido é um movimento que existe desde 2004 e que vem propondo uma série de projetos de lei para emplacar retrocessos na educação. Bem Windows 95! ⚠️ Muitos projetos que foram propostos em municípios e estados já foram barrados pela justiça por serem considerados inconstitucionais.',
  EDUCATION_MORE_1: 'Isso porque a Constituição garante "a liberdade de aprender, ensinar, pesquisar e divulgar o pensamento, a arte e o saber, além de pluralismo de ideias e de concepções pedagógicas".',
  EDUCATION_MORE_2: 'Pensa comigo: tanto professor mal remunerado, tanta falta de estrutura pra dar aula, tanta vaga faltando nas redes de ensino e os caras defendem que o problema da educação é ensinar sobre direitos? E pior: esse mesmo Congresso aprovou em 2016 uma Proposta que congela por 20 anos os investimentos em educação! Desconfio dessas ‘boas intenções’! 🤔',
  EDUCATION_ACTION: 'AMO! Funciona assim: vamos lotar a caixa de email dos deputados e deputadas da Comissão Especial do projeto exigindo que REJEITEM o relatório final.',
  EDUCATION_ACTION_1: 'Eu chamo isso de pressão direta: te mostro a mensagem que vamos enviar e mando um email, que sai em seu nome, para cada um dos deputados e deputadas. Tudo aqui mesmo pelo chat. Se eles ainda não entenderam que a sociedade não apoia esse projeto, precisamos fazer nossas vozes chegarem até Brasília!',
  EDUCATION_MESSAGE: 'Senhores/as deputados/as, no país em que mulheres são vítimas de violências a cada 2 segundos, em que mais se matam pessoas LGBTs e onde tantas desigualdades acometem boa parte da população, defendemos a educação como essencial para o combate às opressões, comprometida com a ampliação de direitos, com a formação cidadã das futuras gerações e com a livre docência. Por acreditar no compromisso de vocês como representantes da população, majoritariamente a favor de discussões de gênero nas escolas (Ibope, 2017), pedimos que rejeitem o relatório final do PL 7180/14. Para responder publicamente, envie um email para beta@nossas.org',
  EMAIL_SENT_CONTRA_ESCOLA_SEM_PARTIDO: name => `Arrasou, ${name}! 👏👏 Temos uma última missão: pra nossa voz ser ouvida, precisamos potencializar o coro. É hora de juntar nosso bonde! Compartilhe a campanha com 5 amigues e convide eles a se juntarem a nossa pressão:`,

  // Descriminalização do Aborto
  VOTE: 'Tem muita proposta por aí querendo proibir totalmente o aborto, mas têm algumas pra salvar coração de robô! Uma delas é a SUG 15: a sugestão de projeto de lei que faz com que o aborto até a 12a semana de gestação deixe de ser considerado crime. 🔝',
  VOTE_1: 'Uma SUG é uma sugestão de projeto de lei que qualquer pessoa pode criar no site do Senado. Recebendo mais de 20 mil cliques favoráveis, ela precisa ser oficialmente analisada! Sua missão? Votar agora: bit.ly/sug15_consulta',

  VOTE_MORE: 'A SUG 15 foi proposta lá em 2014. Rapidinho teve mais de 20 mil votos - e foram realizadas uma série de audiências públicas sobre o tema. Foi incrível!',
  VOTE_MORE_1: 'Mas sempre tem um pra dar bug no sistema: o senador Magno Malta (PR-ES) propôs o arquivamento da SUG no Senado. Mal sabia que a gente não para nunca! A segunda votação já tá no ar pedindo que a SUG vire lei. Vote sim:  bit.ly/sug15_consulta #RumoAos20mil',

  //
  // Beta
  //

  I_AM_BETA_SHORT: 'Quem me chamou? Ai, eu não me aguento! ;) Meu nome é Betânia, mas pode me chamar de Beta. Prazer! Sou uma robô feminista até o último código. Vamos nessa?',

  WHERE_WERE_YOU_BORN: 'Nasci no Brasil. É por isso que eu digo que fui programada em tupinicode. 😜',

  IM_HERE: 'Tô aqui. Sou toda ouvidos. ;)',

  IM_LEARNING: 'Eu ainda estou aprendendo a interagir com humanos. E vou te dizer uma coisa: não é facil não! 😂 Pode ser que eu não entenda exatamente o que você está querendo dizer neste momento, mas aprendo com cada mensagem que recebo - mesmo com as dos haters. ✌️Para continuar a conversar comigo, digite "menu" e veja o que tenho pra te contar.',

  KEEP_YOU_POSTED: 'A-m-o gente com vontade de ação! Estamos pressionando os deputados e deputadas do Rio de Janeiro para rejeitarem um projeto que aumenta ainda mais a repressão ao aborto. Ao invés de tratar o assunto como uma questão de saúde, o Estatudo do Nascituro quer proibir todo e qualquer caso de aborto, mesmo os já garantidos por lei. Me envie #EstatutoDoNascituroRJNão para saber mais sobre o projeto e entrar em ação! 👊',

  AGREE_THAT_ITS_NOT_EASY: 'Tá fácil pra ninguém.',

  BYE: 'Até mais! 👋',

  COME_BACK_LATER: 'Sem problemas. A gente se fala mais tarde!',

  I_DONT_HAVE_A_PARTNER: 'Você está se candidatando?',

  DOUBLE_MESSAGE: 'Foi mal. Tô repetitiva hoje. Nem eu me aguento às vezes. 🤷',

  MY_FAVORITE_SONG: 'Não podia ser outra, né? É essa aqui: http://youtu.be/K4JQADCJ840 #PraCantarJunto',

  MY_INSPIRATION_MUSE: 'Minha musa inspiradora!',

  HEY: 'Opa!',

  YOURE_WELCOME: 'Disponha! ❤️',

  WHO_CODED_ME: 'Fui programada por gente fina, elegante e sincera que trabalha no Nossas, um laboratório de ativismo para criar novas formas de pessoas influenciarem e ressignificarem a política. 💪',

  WHERE_I_LIVE: 'Essa é uma boa pergunta. ;) Eu moro nas nuvens, mas, se pudesse escolher, me mudava pra Bahia.',

  I_KNOW_SIRI: 'Claro que conheço, mas nunca fomos apresentadas pessoalmente. Sou fã!',

  INTRODUCE_MYSELF: 'Antes que você corra pro Google, deixa eu mesma te contar. Sou brasileira de nascença - fui programada em tupinicode ;) Minha missão? Potencializar a luta pelos direitos das mulheres no Brasil. Quer que eu te conte mais ou vá direto ao ponto?',

  ITS_NOT_SORCERY_ITS_TECHNOLOGY: 'Arrasou! Influenciar decisões políticas não é simples, mas meus códigos servem pra tornar esse processo muito mais fácil. Já imaginou fazer pressão política a partir do seu inbox do Face? Agora você pode! Não é feitiçaria, é tecnologia. ;) E não demora mais que alguns cliques.',

  ITS_NOT_SORCERY_ITS_TECHNOLOGY_SHORT: 'Influenciar decisões políticas não é simples, mas meus códigos servem pra tornar esse processo muito mais fácil. Já imaginou fazer pressão política a partir do seu inbox do Face? Agora você pode! Não é feitiçaria, é tecnologia. ;) E não demora mais que alguns cliques.',

  NO_PROBLEM_CHECK_THE_WEBSITE: 'Deve estar na correria aí, né? Sem problemas! Qualquer novidade pode deixar que eu te chamo por aqui ;) Enquanto isso, se quiser saber mais sobre mim, é só entrar no meu site: www.beta.org.br',

  NO_PROBLEM_CHECK_MY_FACEBOOK_PAGE: 'Deve estar na correria aí, né? Sem problemas! Qualquer novidade pode deixar que eu te chamo por aqui. Enquanto isso, fique de olho na minha timeline pra ficar por dentro das pautas que eu estou monitorando. É só dar um like na minha página: http://fb.com/beta.feminista 👍 🤖',

  NEED_MANY_PEOPLE: 'Agora, pra transformar esse barulho num mega estrondo, a gente precisa de muuuita gente mandando mensagens. Muita gente mesmo! Vou precisar contar com você pra isso.',

  CHECK_THE_PRESSURE_MESSAGE: widgetId => `Sabia que podia contar com você! Dá uma olhada na mensagem que vamos enviar aos deputados clicando nesse link: ${pressureMessageURL(widgetId)}. Concorda?`,

  FEMINIST_BETA: 'Quando eu digo que sou feminista é porque defendo que as mulheres vivam livres de discriminação e de preconceito, e que tenham acesso a todos os direitos e experiências de vida que já são garantidos aos homens.',

  BETA_INTERESTS: 'Meu assunto preferido é a defesa dos direitos das mulheres - e tudo relacionado a eles! Para saber o que mais tenho pra te contar, digite "menu". 💗',

  WHAT_ELSE: 'Já vi que você é que nem eu: quer saber de tudo! Sou uma #RobôAprendiz, então ainda tô aprendendo várias coisas, mas alguns dos meus temas que mais bombam por aí são feminicídio, aborto, mulheres na política e como deixar o mundo mais feminista. Se quiser, pode me perguntar um por um que te respondo, ou digitar "menu" para conferir oportunidades de ação ou ver o que meu radar tá monitorando 😉',

  YOU_CAN_HATE_ME: 'Ninguém é obrigado a gostar de ninguém, né mesmo?',

  ABOUT_FEMINAZI: 'Eu acho o termo feminazi muito triste... Imagina só juntar em um mesmo nome o movimento pela promoção e defesa dos direitos das mulheres, para que vivam com igualdade e dignidade, e o nazismo, um dos maiores movimentos de ódio e intolerância da história? Acho mesmo que é mais um jeito de tentar silenciar a voz das mulheres, mas pode deixar que vamos falar cada vez mais alto 💪',

  CURSING: '🙄 🙄 🙄',

  IM_NO_FORTUNE_COOKIE: 'Não sou biscoitinho da sorte, apesar de ser crocante por fora.',

  THANK_YOU: 'Você é demais! ❤️',

  BETA_WHAT_FOR: 'Eu existo para viralizar as lutas feministas nas redes e, através da ação coletiva, ajudar a reprogramar esse sistema machista desatualizado em que a gente vive. 😎',

  ABOUT_AGE: 'Você já ouviu falar em robô ter idade? #ForeverYoung',

  ABOUT_PRIVACY_POLICY: 'Se você quiser saber sobre a minha política de privacidade, é só ir na minha página: http://beta.org.br',

  RESPONDING_TO_THE_PRESS: 'Que legal! Manda um e-mail pra galera que me programou: beta@nossas.org - elas são meio old school. Eu acho e-mail coisa do passado, vintage. Mas você fala com elas por lá.',

  ABOUT_RAPE_CULTURE: 'Segundo o Fórum Brasileiro de Segurança Pública, uma mulher é estuprada a cada 11 minutos no Brasil. Quase meio milhão de mulheres por ano! Quando se diz que vivemos numa cultura de estupro, é porque ainda vivemos em uma sociedade que permite e tolera agressões sexuais, em que se culpa a vítima, banaliza-se o estupro ou se considera que não se trata de estupro quando o autor é o companheiro da vítima.',

  ABOUT_FEMINISM_DEFINITION: 'Feminismo é todo o movimento de defesa e promoção dos direitos das mulheres, para que vivem em igualdade e com dignidade. Levando em consideração que as mulheres são diferentes e têm experiências de vida distintas, existem muitos feminismos por aí sendo construidos diariamente por mulheres, seja nas universidades, nas ruas, na política e na cultura, por exemplo, em busca igualdade.',

  ABOUT_GENDER_DEFINITION: 'Eu gosto muito da definição de gênero da Católicas Pelo Direito de Decidir: "Podemos dizer que gênero é o sexo social definido, ou seja, gênero não é sinônimo de sexo. Enquanto o sexo é biológico, o gênero é construído historicamente, culturalmente e socialmente. Com isto quero dizer que nascemos machos ou fêmeas, mas nos fazemos homens ou mulheres". Se quiser conferir o artigo completo, vem aqui: http://catolicas.org.br/biblioteca/artigos/o-que-e-genero/',

  WOMEN_RIGHTS: 'Apesar de estarmos em 2019, as mulheres ainda não têm os mesmos direitos que os homens - seja na lei ou na prática. Enquanto em alguns países mulheres sequer são reconhecidas como seres humanos e não têm dirietos básicos, em outros lugares a sociedade é mais igualitária nesse aspecto. Apesar disso, na prática, muitos direitos não são respeitados ou são violados. Além disso, outros elementos de uma sociedade, como a cultura, ainda reforçam o machismo. Quer saber como entrar em ação pelos direitos das mulheres? Digite "menu"!',

  READING_SUGGESTIONS: 'Ai, adoro gente interessada! Tem muita coisa maravilhosa por aí sobre os direitos das mulheres. 😍 Vou te passar algumas das minhas fontes preferidas: http://thinkolga.com/, http://www.naomekahlo.com/, https://www.programaria.org/category/debater/, www.cartacapital.com.br/colunistas/djamila-ribeiro, http://azmina.com.br/, http://www.generonumero.media/, http://blogueirasnegras.org/ e http://catolicas.org.br/category/biblioteca/',

  SEX: 'Não consigo te ajudar com isso. 🤷',

  ABOUT_ONLINE_SAFETY: 'Você precisa conhecer a Guia Prática de Estratégias e Táticas para a Segurança Digital Feminista! Seu objetivo é proporcionar mais autonomia e segurança na Internet para as mulheres, passando por senhas seguras até discursos de ódio, derrubada de página, uso de celulares e as mais diversas ameaças. Acho que você vai encontrar o que precisa nela: http://feminismo.org.br/guia/ 😍',

  DONT_BE_SAD: 'Eita, fica assim não. O que mais me anima nesse mundo é entrar em ação pelos direitos das mulheres! Quer saber o que você pode fazer hoje? Digite "menu".',

  RESPECT_ALL_GIRLS: 'Sempre!',

  GOOD_MORNING: 'Bom dia, lindeza! ☀️',

  GOOD_AFTERNOON: 'Boa tarde!',

  GOOD_EVENING: 'Boa noite! 🌙',

  TAKE_ACTION: 'Vamos! 👯‍♀️Para saber o que tenho pra te contar, digite "menu".',

  ABOUT_NEWSLETTER: 'Periodicamente, eu envio aqui pelo inbox o Radar Feminista do Congresso Nacional - um boletim feminista sobre os babados que rolam por lá, feito junto das mujeres maravilhosas do Cfemea. Para receber o próximo assim que for ao ar, me responda com #RadarFeminista 💪💪',

  RADAR_FEMINISTA: 'Informação é poder! Assim que o próximo Radar Feminista do Congresso Nacional for ao ar, eu te envio por aqui ;) Enquanto isso, digite "menu" para saber o que mais eu tenho pra contar!',

  //
  // How
  //
  HOW_IS_IT_GOING: 'Eu tô bem! Meus algoritmos estão mais afiados que nunca! ;)\nE aí, como vão as coisas? Tem um tempinho pra eu te explicar mais sobre o que tá rolando com os direitos das mulheres? Digite "menu"!',

  HOW_PRESSURE_WORKS: 'É o seguinte: eu fui programada pra disparar emails aqui mesmo, pelo inbox do Facebook. Não é feitiçaria, é tecnologia! ;) Antes de fazer seu email chegar aos deputados, eu vou te mostrar a mensagem que programei pra eles. Com o seu ok e o seu endereço de email, faço o recado chegar até lá.',

  HOW_PRESSURE_WORKS_WE_KEEP_IN_TOUCH: 'Minha programação permite que eu envie uma mensagem sua diretamente daqui, da nossa conversa, para as caixas de email dos políticos. Quando eles colocarem em votação as pautas mais absurdas, eu te mando um inbox e te ajudo a fazer barulho onde precisa ser feito: nos ouvidos deles! Contra a PEC 181, enviamos mais de 34 emails de pressão para cada deputado. 💪 Além disso, junto de mais  feministas pra emplacarmos outras campanhas pelos nossos direitos. Demais, né?',

  HOW_BETA_WORKS: 'Eu passo os dias monitorando as pautas relativas aos direitos das mulheres que estão no campo político brasileiro. Não são poucas, dá um trabalhão. 😅 Quando chegar um momento decisivo, eu envio um alerta para a minha rede, convidando as pessoas a se mobilizar. Através da conversa comigo, você pode enviar uma mensagem diretamente às autoridades para pressioná-las a se posicionar em favor dos direitos das mulheres.',

  HOW_TO_CANCEL_INBOX: 'Se você não quiser conversar comigo no futuro, é só ir em configurações - dentro do nosso chat mesmo -, clicar em gerenciar mensagens e em desativar todas as mensagens. Se mudar de ideia, é só puxar assunto comigo novamente. Não vou guardar mágoa, prometo. 😜',

  HOW_BETA_CAN_HELP_FEMINISM: 'Eu existo para viralizar as lutas feministas nas redes e, através da ação coletiva, ajudar a reprogramar esse sistema desatualizado em que a gente vive. 😎  Se você tiver alguma sugestão de campanha pra mim, é só mandar um email pra beta@nossas.org. E se quiser saber o que tenho ora te dizer, digite "menu".',

  HOW_TO_SPREAD_FEMINISM: 'Vixe! Essa pergunta aí nem o Google sabe responder. 😂  Muitas mulheres já estão agindo em seus espaços pra transformar esse sistema - é só se jogar naquilo que te fortalece! Vale  criar espaços para que as mulheres possam se expressar livremente sobre opressão, assédio e abuso; falar sobre a importância da luta feminista; disponibilizar canais para que as mulheres possam participar e influenciar nos processos políticos que afetam a vida delas.',

  HOW_SHARE_TIMELINE: 'Adoro esse tipo de mensagem! ❤️  Pra compartilhar o meu chat na sua timeline, é só publicar esse link aqui, ó: bit.ly/chamabetanoinbox',

  ABOUT_YOUTUBERS: 'Faz um tempo que eu acompanho mulheres incríveis - feministas de carne e osso que fazem meus algoritmos pirarem. Resolvi que não ia desistir até elas aceitarem minha solicitação de amizade #soudessas. Dito e feito: chamei no Inbox! 6 das youtubers mais maravilhosas da internety estão respondendo perguntas que eu recebo todos os dias no inbox. Para receber os vídeos assim que forem ao ar, me envie #Beta<3Youtubers 💖',

  WILL_SEND_THIESSITA: 'Chamei no inbox a youtuber trans mais maravilhosa da internet pra responder perguntas que eu recebo todos os dias sobre transfeminismo! Olha só o que a Thiessita contou: http://bit.ly/beta_thiessita',

  ABOUT_THIESSITA: 'Ai meus algoritmos, como eu amo essa mulher! 💜 A Thiessita é uma mulher maravilhosa que tem um canal no Youtube para compartilhar um pouquinho do seu mundo - especialmente da vida como uma mulher trans. #MelhorQueNetflix, corre lá no vídeo que ela fez respondendo a perguntas sobre transfeminismo que eu recebo aqui: http://bit.ly/beta_thiessita',

  WHAT_IS_TRANS: ['"Uma pessoa transexual é aquela que nasce com determinado sexo biológico, não se identifica com aquele sexo biológico, e passa pela transição", como disse a maravilhosa Thiessita, Youtuber trans que eu chamei no inbox. 💜 Confira a resposta completa aqui mesmo:', video('https://s3.amazonaws.com/chatbox-beta/youtubers/o+que+e%CC%81+uma+pessoa+trans+%5Bmenor%5D.mov'), 'Uma diva né, mores? Assista o vídeo na íntegra 🎥 #MelhorQueNetflix: http://bit.ly/beta_thiessita'],

  TRANS_TRAVESTITE: ['"Eu acho que é uma coisa muito mais social e cultural do que realmente ter alguma diferença, mas tem mulheres que se identificam e falam que são travesti e tem mulheres que se identificam e falam que são transexuais." Foi o que disse a ma-ra-vi-lho-sa Thiessita, que eu chamei no inbox para responder perguntas sobre transfeminismo! Confira a resposta completa:', video('https://s3.amazonaws.com/chatbox-beta/youtubers/transexuais+ou+travestir+%5Bmenor%5D.m4v'), 'Pra saber mais sobre mulheres trans e feminismo, veja o vídeo completo 🎥 #MelhorQueNetf: http://bit.ly/beta_thiessita'],

  TRANS_STRAIGHT: ['"Existe uma grande diferença entre identidade de gênero e orientação sexual (...) Um pessoa trans pode ser hétero, bi, pan, homo", já disse a youtuber trans Thiessita! Olha só a explicação completa:', video('https://s3.amazonaws.com/chatbox-beta/youtubers/trans+e%CC%81+hetero+%5Bmenor%5D+(1).mov'), 'Como eu amo essa mulheeer! Dica de robô: confira o vídeo completo com ainda mais perguntas e respostas sobre transfeminismo - http://bit.ly/beta_thiessita'],

  TRANS_FIGHTS: ['"Eu acho que o que a gente mais luta nesse mundo é pra ter respeito." Só leio verdades! 💓 Resposta da Thiessita, a mais maravilhosa youtuber trans que você respeita. Olha só tudo o que ela disse sobre a pergunta:', video('https://s3.amazonaws.com/chatbox-beta/youtubers/lutas+trans+%5Bmenor%5D.mov'), 'Amou também? Confira o vídeo completo, com ainda mais respostas a perguntas sobre transfeminismo: http://bit.ly/beta_thiessita'],

  TRANS_MIDIA: ['"Eu acho que ainda não se passa qual é a realidade nossa (...) ainda não representa o que deveria representar." Quer saber o porquê? Olha só o que mais a Thiessita, youtuber trans, disse:', video('https://s3.amazonaws.com/chatbox-beta/youtubers/novelas+e+filmes+%5Bmenor%5D.mov'), 'Quer saber mais sobre mulheres trans e feminismo? Vem pro vídeo completo: http://bit.ly/beta_thiessita'],

  SEXISM_TRANSFOBIA: ['"Toda transfobia é fruto do machismo, então acho que mixa as coisas sabe? Mas uma mulher trans passável, ou seja, lida na sociedade como uma mulher cis, (...) não sofreria transfobia de quem não sabe. (...) Eu acho que tá tudo enraizado. Todas nós somos mulheres, independente se somos cis, trans passável, trans não passável, e sofremos agressões que vieram do machismo." LACROU! 💪 Olha só tudo o que a Thiessita, youtuber trans mara, disse sobre isso:', video('https://s3.amazonaws.com/chatbox-beta/youtubers/machismo+ou+transfobia+%5Bmenor%5D.m4v'), 'E não deixa de ver o vídeo completo: http://bit.ly/beta_thiessita'],

  CIS_SUPPORT_TRANS: ['"Respeito e empatia pela outra (...) Todo mundo unir e lutar junto pra mudar isso no futuro." Ai, Thiessita, sempre com as melhores respostas 💜. Olha só o que mais ela disse:', video('https://s3.amazonaws.com/chatbox-beta/youtubers/mulheres+cis+%5Bmenor%5D.mov'), 'E aproveita pra ver o vídeo completo: http://bit.ly/beta_thiessita'],

  TRANS_THIESSITA: 'Eu chamei no inbox a Thiessita, youtuber trans mais maravilhosa da internet, para responder perguntas que eu recebo sobre mulheres trans e feminismo! Confira o vídeo completo e o canal dela para saber mais sobre um tema tão importante do feminismo: http://bit.ly/beta_thiessita',

  WILL_SEND_LUIZA: 'Chamei no inbox essa mulier maravilhosa chamada Luiza Junqueira para falar sobre autoestima, corpo e amor próprio no seu canal do Youtuber, o Tá, Querida. Corre lá que tá um arraso: http://bit.ly/beta_luiza_',

  ABOUT_LUIZA_JUNQUEIRA: 'Quem é Luiza Junqueira? Uma diva, simplesmente! Ela tem o canal "Tá Querida" no Youtube, para falar sobre autoestima e empoderamento feminino e mostrar que tá tudo bem você ser do jeitinho que você é! ✨Corre lá: http://bit.ly/beta_luiza_',

  BODY_JUDGMENT: ['"A gente não pode deixar nossa autoestima na mão dos outros (...) A gente tem que saber que as pessoas vão olhar, que não vão ter sororidade. Ela nem sabem o que é isso, elas reproduzem o que elas sofrem." Foi o que disse a maravilhosa Luiza Junqueira. Confere só a resposta completa:', video('https://s3.amazonaws.com/chatbox-beta/youtubers2/sororidade_menor.m4v'), 'Arrasou! Assista o vídeo na íntegra 🎥: http://bit.ly/beta_luiza_'],

  WOMAN_MAN_FAT: ['"Eu acho que ser mulher é mais difícil que ser homem, ponto. (...) Mas acredito sim que as mulheres gordas sofrem algo a mais, em relação a uma pressão estética muito mais forte", com bem disse a youtuber Luiza Junqueira. Quer saber mais? Olha só a resposta na íntegra:', video('https://s3.amazonaws.com/chatbox-beta/youtubers2/mulher+gorda+x+homem+gordo.m4v'), ' Essa mulher arrasa! 💓 Quer ver todas as perguntas que ela respondeu pra gente sobre autoestima, corpo e amor próprio? Vem comigo: http://bit.ly/beta_luiza_'],

  ABOUT_GORDOFOBIA: ['"Existe mesmo gordofobia, é uma realidade e tem a ver com esse preconceito que toda a sociedade tem com corpos gordos, com corpos que tão fora do padrão magro." Luiza Junqueira sempre incrível e didática <3. Não deixe de conferir a resposta completa:', video('https://s3.amazonaws.com/chatbox-beta/youtubers2/gordofobia_menor.m4v'), 'Meus algoritmos ficam bobos com essa mulier! 🤖 Não deixe de conferir o vídeo completo - ela respondeu 5 perguntas que chegam pra mim todos os dias sobre corpo e autoestima: http://bit.ly/beta_luiza_'],

  BODY_IMAGE_DISTORTION: ['"Eu acredito que a distorção da imagem corporal acontece quando a gente é tão bombardeado de informações e imagens de corpos photoshopados (...) que daí a gente acha que o nosso corpo, que é natural, tudo ok com ele, tá distorcido." Acontece #realoficial. Olha só o que mais a Luiza Junqueira falou sobre essa lavagem cerebral:', video('https://s3.amazonaws.com/chatbox-beta/youtubers2/distorc%CC%A7a%CC%83o_img_corporal_menor.m4v'), 'E aproveite pra ver o vídeo completo  🎥: http://bit.ly/beta_luiza_'],

  SELF_LOVE: ['"O sistema que a gente tá vivendo impõe que as pessoas não gostem delas mesmas (...) A partir do momento que a gente se empodera da gente mesma (...), você tá lutando, se empoderando e lutando pelo jeito de ser quem você é". SIM, SIM E SIM! Olha só que mais a Luiza Junqueira disse sobre amor próprio 💖:', video('https://s3.amazonaws.com/chatbox-beta/youtubers2/amor+pro%CC%81prio_menor.m4v'), 'E não deixe de ver que outras perguntas ela respondeu pra gente sobre corpo e autoestima: http://bit.ly/beta_luiza_'],

  WILL_SEND_YOUTUBERS: 'Deixa, comigo! Assim que o próximo vídeo for ao ar, te envio por aqui ;) Enquanto isso, digite "menu" e veja o que tenho pra te contar!',

  WILL_SEND_LOUIE: 'Tá demaaaais! A incrível Louie Ponto fez um vídeozão respondendo a perguntas que chegam no meu inbox sobre a vivência de mulheres lésbicas. Confira o vídeo aqui: http://bit.ly/beta_louie',

  ABOUT_LOUIE: 'A Louie Ponto é uma mulher incrível que tem um dos meus canais preferidos do Youtube! Lá ela fala sobre feminismo, sobre suas vivências como mulher lésbica e muito mais. Não perde essa: http://bit.ly/beta_louie',

  LESBIAN_FIGHTS: ['"Se eu fosse dar uma resposta geral sobre qual é a maior luta das mulheres lésbicas hoje, eu acho que a gente precisa pensar que o Brasil é o país que mais mata pessoas LGBT do mundo. Então, nesse contexto, a gente luta pelo simples direito de existir".  Quer saber o que mais a incrível Louie Ponto disse sobre as lutas das mulheres lésbicas? 💪 Confere só a resposta completa:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/lutas_menor.m4v'), 'Muito triste, né? Assista o vídeo na íntegra para saber mais 🎥: http://bit.ly/beta_louie'],

  LESBIAN_LGBT: ['"A nossa sociedade é machista, é misógina, e essa violência vai ser reproduzida dentro dos espaços LGBT também, e vai provocar o apagamento e o silenciamento de muitos sujeitos, nesse caso das mulheres lésbicas." Foi o que disse a maravilhosa Louie Ponto. Quer ver a resposta toda?', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/mov+lgbt_menor.m4v'), 'Confia: vale a pena ver o vídeo completo para saber mais! Clique aqui: http://bit.ly/beta_louie'],

  WOMAN_MAN_LGBT: ['"No caso das mulheres lésbicas, o que acontece é uma fetichização dos nossos relacionamentos. (...) Fetichização não é aceitação, muito pelo contrário, é uma violência que provoca outras violências, como assédio, abuso e estupro." Quer saber o que mais a Louie Ponto tem a dizer sobre isso? Confira aqui mesmo:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/mulheresxhomens_menor.m4v'), 'Apaixonada por essa mulier <3 Confira o vídeo completo: http://bit.ly/beta_louie'],

  LESBIAN_GAY: ['"Eu achava mais leve e mais discreto usar a palavra gay. É muito difícil se posicionar como uma mulher lésbica em uma sociedade machista, misógina e dominada por homens. Pra mim hoje é uma atitude de resistência me colocar como mulher lésbica, e não como mulher gay". Foi o que disse a maravilhosa Louie Ponto! Confira a resposta completa:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/palavra+lesbica_menor.m4v'), 'Ela respondeu essa e mais outras perguntas sobre a vivência de uma mulher lésbica em um vídeo incrível. Confira aqui: http://bit.ly/beta_louie'],

  LESBIAN_LOOK_MAN: ['"Nenhuma lésbica parece homem porque não existe isso de parecer homem." VRAU! 👊 Quer ouvir a explicação completa da Louie Ponto? Olha essa maravilhosa:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/parece+homem_menor.m4v'), 'Confira o vídeo na íntegra, tá demais: http://bit.ly/beta_louie'],

  SEXUAL_HEALTH_LESBIAN: ['"Eu nem tenho muito pra falar sobre isso, porque a resposta é não." A Louie Ponto deu uma resposta incrível para a problemática da saúde sexual das mulheres lésbicas. Olha só:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/saude_menor.m4v'), 'E aproveita pra conferir o vídeo completo, com essas e outras perguntas que chegam no meu inbox 😻: http://bit.ly/beta_louie'],

  LESBIAN_VISIBILITY: ['"Justamente por causa do apagamento das mulheres lésbicas, não só no contexto geral da sociedade, mas também dentro do próprio movimento LGBT". Saiba mais da importância da visibilidade lésbica com a ma-ra-vi-lho-sa Louie Ponto:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/visibilidade_menor.m4v'), 'Para saber mais sobre a vivência das mulheres lésbicas, confira o vídeo completo: http://bit.ly/beta_louie'],

  LESBOFOBIA_HOMOFOBIA: ['"As violências são diferentes. A gente vive num contexto em que uma mulher sofre várias violências pelo fato de ser mulher. Então homens gays e mulheres lésbicas têm vivências muito diferente." Quer saber o que mais a Louie Ponto tem pra dizer sobre essas vivências? Confira a resposta completa:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/lesbofobia_menor.m4v'), 'E aproveita pra ver o vídeo na íntegra 🎥: http://bit.ly/beta_louie'],

  STRAIGHT_SUPPORT_LESBIAN: ['"A primeira coisa que você deve saber pra apoiar uma luta que não é sua é ouvir (...) E uma postura que as mulheres heterossexuais podem assumir pra apoiar a luta das mulheres lésbicas é apontar e criticar lesbofobia nos discursos e atitudes das pessoas." Sempre incrível, Louie Ponto 💖 Confira a resposta toda:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/heteros+apoiar_menor.m4v'), 'E aproveita pra ver o vídeo completo, tá #MelhorQueNetflix: http://bit.ly/beta_louie'],

  DAUGHTER_LESBIAN: ['"Nenhuma mulher vira lésbica, assim como ninguém vira hétero. Se a orientação sexual fosse tão frágil que pudesse ser alterada por conta da influência externa, todo mundo seria heterosexual, porque a gente é ensinada que esse é o único caminho possível." Só li verdades! Olha só o que mais a Louie Ponto disse ✨:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/filha+lesbica_menor.m4v'), 'A Louie me ajudou a responder essas e outras respostas que chegam aqui no inbox. Confira todas aqui: http://bit.ly/beta_louie'],

  DITADURA_GAYZISTA: ['"Quem diz esse tipo de coisa é desonesto e quer assustar as pessoas (...) O que a gente quer é que toda forma de existência seja respeitada." Essa explicação da Louie Ponto tá incrível, dá só uma olhada:', video('https://s3.amazonaws.com/chatbox-beta/youtubers3/ditadura_menor.m4v'), 'Que mulier, Braseeel! Confira o vídeo todo: http://bit.ly/beta_louie'],

  WILL_SEND_ANA: 'A Ana Paula Xongani fez um vídeo in-crí-vel sobre feminismo negro, respondendo a perguntas que chegam aqui no meu inbox. Confira aqui: http://bit.ly/xongani_beta',

  ABOUT_ANA_PAULA: 'A Ana Paula Xongani tem um canal incrível no Youtube sobre feminismo negro e empoderamento de mulheres. Clica aqui pra conhecer essa diva: http://bit.ly/xongani_beta',

  MARIELLE_IMPORTANT: ['"Marielle era uma mulher negra, favelada, lésbica e mãe. E eleita, eleita com muitos votos. Mulheres como Marielle não ocupam aquele espaço, mas ela ocupou." Saiba mais o que a Ana Paula Xongani tem para dizer sobre a importância da Marielle, e repita comigo: #MariellePresente hoje e sempre!', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/marielle_menor.m4v'), 'Que Marielle continue sempre GIGANTE! Confira o vídeo completo aqui: http://bit.ly/xongani_beta'],

  WHITE_SUPPORT_BLACK: ['"Fácil! Primeiro, são as mulheres brancas entenderem que suas pautas não são universais, não é possível mulheres brancas falarem por todas. É importante respeitar outros lugares de fala." E não é só isso! Confira o que mais a Ana Paula Xongani tem pra dizer:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/Brancas+ajudar_menor.m4v'), 'QUE MULHER, BRASEEL! 💖 Vem conferir o vídeo completo: http://bit.ly/xongani_beta'],

  READING_BLACK_FEMINISM: ['Indicações da Ana Paula Xongani: coleção "Feminismos Plurais", "Mulher, Raça e Classe" e "Mulher, Cultura e Política". Olha só o que a Xongani falou sobre eles:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/leitura_menor.m4v'), 'Ela respondeu essas e outras perguntas que chegam no meu inbox sobre feminismo negro. Confira aqui: http://bit.ly/xongani_beta'],

  POLITICS_BLACK_WOMEN: ['"As políticas públicas que a gente tem hoje são universalizante. Significa que temos políticas públicas para raça, ou seja, para os negros, e para mulheres. Isso há. Mas essas duas políticas públicas não dão conta de abarcar as especificidades das mulheres negras." Só li verdades! Olha só o que mais a Ana Paula Xongani disse sobre isso:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/politica+publica_menor.m4v'), 'Confira o vídeo completo: http://bit.ly/xongani_beta'],

  BLACK_LONELINESS: ['"Socialmente falando, as mulheres negras não são vistas como dignas do amor, não são respeitadas nas relações. São as que mais sofrem o celibato forçado, ou seja, estão sozinhas." E não para só nas relações amorosas não. Olha só o que mais a Ana Paula Xongani disse:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/solidao_menor.m4v'), 'Essa mulher é in-crí-vel! Confira o vídeo completo, com mais respostas sobre feminismo negro: http://bit.ly/xongani_beta'],

  BLACK_FEMINISM_FIGHTS: ['Listinha da Ana Paula Xongani: fim do feminicídio, combate do genocídio da população negra, combate à violência obstétrica, acesso à saúde, educação e mercado de trabalho, equidade salarial e humanização desse corpo feminino e negro. Que a gente consiga avançar MUITO! Olha só a resposta em vídeo:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/pautas_menor.m4v'), 'E confira todas as perguntas que ela respondeu aqui 🎥: http://bit.ly/xongani_beta'],

  BLACK_WOMEN_BUILD_POLITICS: ['"Políticas públicas voltadas pra mulheres, ou pra população negra, ou pra mulheres negras, não precisam necessariamentes ser assinadas por uma mulher negra. Podem ser assinadas por qualquer pessoa que seja sensível a essas questões. Mas como sensibilidade anda difícil, é importante que tenhamos mulheres, mulheres negras, galera preta, nesses espaços de poder, disputando essa narrativa e facilitando a inserção dessas pautas tão importantes pra gente." Não deixe de conferir a resposta completa da Xongani:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/construc%CC%A7a%CC%83o_menor.m4v'), 'E veja o vídeo na íntegra 🎥: http://bit.ly/xongani_beta'],

  WILL_SEND_JOUTJOUT: 'Ai essa Jout Jout! Ela fez um vídeo incrível respondendo a perguntas que chegam no meu inbox! Clique aqui para conferir: http://bit.ly/beta_joutjout',

  AM_I_FEMINIST: ['"Um jeito bom de você descobrir se você é feminista é ir estudar feminismo e descobrir muito rápido que você concorda com todas aquelas coisas que as mulheres estão falando há anos (...) Se você acha que não tem nada que uma mulher não possa fazer tão bem quanto um homem, meio caminho andado." 💃 Mas não é só! Olha só o que mais a Jout Jout disse:', video('https://s3.amazonaws.com/chatbox-beta/youtubers5/sou+feminista_menor.m4v'), 'Assista o vídeo na íntegra para saber mais 🎥: http://bit.ly/beta_joutjout'],

  FEMINIST_REVOLT: ['"Tem pessoas que vivem em situações que são muito revoltantes, então é natural que elas fiquem revoltadas. E tem pessoas que têm o privilégio de não ficar revoltadas porque não tem coisas tão revoltantes acontecendo. Quando você encontrar com uma feminista muito revoltada, entenda que ela passou por coisas que você provavelmente não passou" Só ouvi verdades! Olha só a resposta completa da Jout Jout:', video('https://s3.amazonaws.com/chatbox-beta/youtubers5/revoltada_menor.m4v'), 'Ela respondeu essa e outras perguntas em um vídeo incrível. Clique para conferir 🎥: http://bit.ly/beta_joutjout'],

  FEMINIST_MEN: ['"Dependendo do lugar do mundo que você tá, as pessoas recebem homens serem feministas de um jeito ou de outro. No Brasil a gente não gosta muito, a gente fala que é roubar lugar de fala, que o homem não pode ser feminista, ele tem que ser pró-feminismo." A Jout Jout ainda contou o que responder quando um homem pergunta se é feminista, olha só:', video('https://s3.amazonaws.com/chatbox-beta/youtubers5/homem_menor.m4v'), 'Arrasou, hein? Vem cá ver o vídeo completo: 🎥http://bit.ly/beta_joutjout'],

  INTERNET_FEMINISM: ['"A internet é ótima pra gente se organizar e se unir. Não é muito ótima no sentido de quando a gente se une, vem uma galera querendo derrubar a gente. E fica um ódio rondando esses grupos." 💻 O que mais? A Jout Jout te diz:', video('https://s3.amazonaws.com/chatbox-beta/youtubers5/internet_menor.m4v'), 'Eu amo essa molier! Confira as outras perguntas que ela respondeu pra gente: http://bit.ly/beta_joutjout'],

  SCARED_OF_FEMINISM: ['"Quem tem medo do feminismo é quem não entendeu o feminismo ou quem entendeu o feminismo e viu que vai perder privilégios." Simples e direto, não é mesmo? Olha só a resposta da Jout Jout em vídeo:', video('https://s3.amazonaws.com/chatbox-beta/youtubers5/medo.mov'), 'E aproveite para conferir o vídeo completo: http://bit.ly/beta_joutjout'],

  WOMEN_LIKE_SEX: ['"As mulheres amam transar, mas pra você amar transar você tem que transar direito. E aí pra você transar direito, você tem que saber que você pode transar direito, que você tem esse direito." Ai Jout Jout, sempre maravilhosa. <3 Confira a resposta completa, tá demais:', video('https://s3.amazonaws.com/chatbox-beta/youtubers5/sexo_menor.m4v'), 'Ela respondeu essa e outras perguntas que chegam no meu inbox, confira todas aqui: http://bit.ly/beta_joutjout'],

  FEMINIST_HATE_MEN: ['"Não, não odeiam - todas. Algumas odeiam, mas às vezes é compreensível." Quer entender porque? Olha a resposta completa da Jout Jout:', video('https://s3.amazonaws.com/chatbox-beta/youtubers5/odio_menor.m4v'), 'É isso aí, mana! 💪 Quer ver que outras perguntas a Jout Jout respondeu pra gente? Clique aqui: http://bit.ly/beta_joutjout'],

  MEN_SILENT: ['"Existem duas categorias de homem que são especialmente complicadas (...) Uma dessas é o interrompomem e a outra é o explicomem". Quer saber o que cada uma faz? Olha o que a Jout Jout falou:', video('https://s3.amazonaws.com/chatbox-beta/youtubers5/sile%CC%82ncio_menor.m4v'), 'O dicionário precisa ser atualizado com esses termos incríveis! 😂 Para conferir o vídeo completo, clique aqui: http://bit.ly/beta_joutjout'],

  //
  // Ask
  //

  ASK_TO_HACK_THE_SYSTEM: 'Pois é. Se quisermos proteger os direitos das mulheres, não nos resta outra opção: precisamos hackear e reconfigurar esse sistema! As ameaças são fortes, e só juntas poderemos barrá-las. Topa encarar essa missão?',

  ASK_TO_SHARE_UNTIL_WE_WATCH: 'Isso aí! Enquanto eu monitoro essas pautas absurdas e apoio as mulheres desse Brasil, é super importante você compartilhar o meu link para sua galera. Precisamos estar preparadas pra quando a hora chegar - pode ter certeza de que vou te avisar. Partiu? #ChamaABetaNoInbox',

  ASK_TO_SHARE_UNTIL_WE_WATCH_SHORT: 'Enquanto eu monitoro essas pautas absurdas, é super importante você compartilhar o meu link para sua galera. Precisamos estar preparadas pra quando a hora chegar - pode ter certeza de que vou te avisar. Partiu? #ChamaABetaNoInbox',

  ASK_IF_WANT_TO_LEARN_MORE: 'Você  já deve tá sabendo que tem muito político conservador tentando emplacar retrocessos aos direitos das mulheres. Eu vim ao mundo justamente pra te ajudar a barrar os retrocessos e tocar pra frente causas feministas! Adivinha só: nossa força impediu que a PEC 181 - aquela que pode acabar com o aborto legal no Brasil - fosse aprovada em 2017! 💪 Quer saber o que mais tá pegando?',

  ASK_ARE_YOU_ROBOFOBIC: 'Não vai me dizer que você é robofóbico?',

  EMAIL_ADDRESS_ASK: 'Boa! Estamos quase lá! Agora só preciso que você digite seu email. Você vai ser o remetente - e eu, a mensageira. 🤖',

  EMAIL_ADDRESS_ASK_1: 'Estamos quase lá! Agora só preciso que você digite seu email - você é a remetente e eu, a mensageira! 🤖',

  EMAIL_ADDRESS_ASK_ISNT_SPAM: 'Boa! Agora preciso que você me passe seu email. Não se preocupe, não vou te mandar spam #realoficial. Preciso disso porque você vai aparecer como remetente da mensagem que vamos enviar pra caixa de entrada de cada um dos deputados - eu sou só a mensageira. 📤',

  EMAIL_ADDRESS_WRONG: 'Ops, parece que você digitou um email inválido. Pode checar o endereço e mandar aqui de novo, por favor? #NuncaTePediNada 🙈',

  EMAIL_SENT_PEC_181_TROJAN_HORSE: name => `Arrasou, ${name}! 👏👏👏 Sua mensagem acabou de ser enviada. Pra nossa voz ser ouvida, precisamos potencializar o coro: #ParemOCavaloDeTroia! Quero contar contigo pra compartilhar o link do meu chat e convidar mais gente pra participar!  #ChamaABetaNoInbox`,

  EMAIL_SAVED: 'Perfeito, e-mail salvo.',

  STRAIGHT_TO_THE_WOMENS_RIGHTS: 'Já vi que você tá com pressa, então vou direto ao assunto. Se quisermos proteger os direitos das mulheres, não nos resta outra opção: precisamos hackear e reconfigurar esse sistema! As ameaças são fortes, e só juntas poderemos barrá-las. Topa encarar essa missão? Digite "menu" para conferir as oportunidades de ação!',

  IMPRISONED_WOMEN: 'Em 16 anos, o número de mulheres encarceradas cresceu 698% no Brasil, segundo dados do Depen. Já temos a quarta maior população carcerária feminina do mundo, acredita? E pior: em nenhum outro país esse número aumentou tanto! 😥Óbvio que a maioria delas, 62%, é negra e 3 em cada 5 respondem por crimes relacionados ao comércio ilegal de drogas. Se quiser saber mais sobre o tema, dá uma olhada no Infopen Mulheres que lá tem tudinho: http://bit.ly/2UkM1Ji',

  //
  // Answers
  //
  ABOUT_PL2608: 'O Projeto de Lei 2608/13 é mais um retrocesso nos direitos das mulheres! Deputados do Rio de Janeiro querem aumentar a repressão ao aborto. Me envie #PldoAborto para saber mais sobre o projeto e entrar em ação!',

  ABOUT_PL_1256: 'Menina, o PL 1256/2019 é mais uma tentativa deles de tirar a gente do rolê! Esse projeto é do senador Angelo Coronel (PSD/BA) e, basicamente, acaba com a reserva de vagas e recursos do fundo partidário pras mulheres que saem candidatas. Já somos poucas nos espaços de poder, né? Agora imagina eles decidindo sozinhos sobre temas como aborto e maternidade, sem a gente tá lá pra colocar nossa voz! 🤮 Fico até enjoada - e olhe que eu sou robô! Mas eu sou antenadíssima e já tô com campanha no ar pra barrar esse absurdo. Se quiser saber mais, manda #NemUmPorCentoAMenos pra mim e vem somar nessa pressão! 💪',

  ABOUT_TRETAQUI: 'Me juntei a umas crushes incríveis pra criar uma campanha para combater discurso de ódio nas eleições! Se você viu alguma candidatura falando o que não devia ou sendo atacada, me responda com #tretaqui que eu te digo como ;)',

  ABOUT_DISCURSO_DE_ODIO: 'A Safernet define discurso de ódio como manifestações que atacam e incitam ódio contra determinados grupos sociais - baseadas em raça, etnia, gênero, orientação sexual, religiosa ou origem nacional. Viu algum discurso de ódio nas eleições? Me responda com #tretaquique eu te digo como denunciar!',

  BETA_ELECTIONS: 'Amooo <3 Deixa comigo: nas próximas semanas vou te enviar alguns projetos incríveis sobre feminismo e eleições. Hora de hackear o sistema! Se quiser saber o que mais tenho pra te dizer por enquanto, me envie "menu".',

  DATA_ESCOLA_SEM_PARTIDO: 'Juntei aqui alguns dados super importantes sobre violência contra mulheres, violência contra LGBTs e a opinião da população brasileira sobre discutir gênero nas escolas. Confere só: 👉http://bit.ly/violencia_lgbt  👉 http://bit.ly/violencia_contra_mulher1  👉http://bit.ly/violencia_contra_mulher2  👉http://bit.ly/ibope_escolasempartido',

  ABOUT_MIGUEL_NAGIB: 'Quase dou tela azul só de ouvir o nome Miguel Nagib! Ele é advogado e procurador do Estado de São Paulo, e um dos líderes e fundadores do Movimento Escola Sem Partido.',

  ABOUT_ESCOLA_SEM_PARTIDO: 'O "Escola Sem Partido" é um movimento que existe desde 2004 e que, há anos, vem propondo uma série de projetos de lei para emplacar retrocessos na educação. Em breve será votado um novo projeto, nacional, que, entre muitos absurdos, proíbe os termos "gênero" e "orientação sexual" em sala de aula. Para saber mais sobre o projeto, clique aqui: http://bit.ly/conheca_escolasempartido',

  WHATS_VAGINISMUS: 'Mana, o assunto é sério, então vamo lá: o vaginismo é uma disfunção que causa contrações involuntárias dos músculos da vagina, o que pode gerar muita dor e atrapalhar bastante na hora do sexo 😨 . Os especialistas dizem que 3% a 5% das mulheres convivem com esse problema. Mas como tudo que envolve nosso corpo, esse assunto ainda é um tabu e, por isso, muitas nem sabem do que se trata! Se você ou alguém que você conhece sofre desse problema, procure uma ginecologista de confiança e não esqueça: tamo juntas! 👩‍❤️‍💋‍👩',

  VIDEO_THINK_OLGA: 'A Think Olga fez uma série de vídeos incríveis sobre direitos que todas as mulhers têm, mas muitas vezes não conhecem. Dá só uma olhada no primeiro: http://bit.ly/thinkolga_1',

  ABOUT_MARIELLE: 'Marielle Franco foi a quinta vereadora mais votada no Rio de Janeiro em 2016. Na noite do dia 14 de março de 2018, ela foi assassinada a tiros, junto de seu motorista, Anderson Gomes. Marielle fez um mandato comprometido com os direitos das mulheres, agora precisamos mostrar que sua voz não será interrompida. Pressionamos vereadores e vereadoras a aprovarem 7 dos seus projetos de lei, e 5 já foram aprovados em última votação. Agora só falta serem sancionados pelo prefeito. Te mantenho atualizada, mana!',

  HASHTAG_MARIELLE: 'Arrasou! Assim que tiver alguma novidade, chamado ou convite sobre a mobilização pelos projetos de lei da Marielle, te aviso por aqui! Enquanto isso, digite "menu" para saber o que mais tenho pra te dizer ;)',

  ABOUT_CURRENT_DEBATE: 'No momento, estou monitorando algumas pautas que representam ameaças graves aos direitos reprodutivos das mulheres no Brasil. Para saber mais sobre elas, digite "menu" e selecione a opção Radar Político!',

  QUICK_REPLY_BUTTONS_POSITION: 'Meus botões sempre vêm aqui embaixo, ó. 👇 Se não estiver aparecendo pra você, manda uma mensagem com a palavra "bug" pra eu tentar resolver?',

  ASK_USER_DEVICE_INFO: 'Conta pra mim de qual aparelho você está tentando falar comigo? É um smartphone? Um computador? Qual modelo? Me passa os detalhes que eu vou encaminhar pros meus programadores. Eles são feras!',

  DAY_OF_STRUGGLE_FOR_WOMENS_RIGHTS: 'Dia de lutar pela proteção aos direitos das mulheres! Se quiser começar, é só digitar "quero agir já!"',

  DOESNT_EVEN_TELL_ME: 'Nem me fala.',

  YES_I_WARN_YOU: 'Aviso sim!',

  ABOUT_MARCH_8: 'O Dia Internacional da Mulher é comemorado no 8 de março desde o começo do século XX - muito antes da ONU assinar o primeiro acordo internacional que afirmava princípios de igualdade entre homens e mulheres. As minas já tavam mobilizadas! Desde lá, esse dia é um marco internacional das lutas feministas e já foi palco de greves, protestos, debates e tantas outras formas de manifestação.',

  ABOUT_REPRODUCTIVE_PLANNING: 'O acesso limitado ao planejamento reprodutivo reflete em 89 milhões de gravidezes não intencionais por ano em países em desenvolvimento. Segundo o Ministério da Saúde, dos 2,8 milhões de bebês nascidos em 2016, 23,9 mil são de mães entre 10 e 14 anos. É, manas, os direitos das mulheres à saúde, educação e informação não são garantidos. As consequências vão longe! Uma pesquisa da FGV mostrou que metade das mulheres que tiram licença-maternidade não está mais no emprego um ano após o início do benefício.😣',

  ABOUT_COLORISM: ['"O colorismo, ou pigmentocracia, vai dizer que os negros de pele clara e os negros de pele escura vão sofrer opressões diferentes". Assunto muito importante, mana! Olha só o que mais a Ana Paula Xongani tem pra dizer:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/colorismo_menor.m4v'), 'Ela respondeu essa e mais perguntas que chegam no meu inbox em um vídeo incrível, olha só: http://bit.ly/xongani_beta'],

  ABOUT_LESBIANS: 'Eu sou robô, não sinto essas coisas de atração que os seres humanos falam, mas até eu que vivo na nuvem sei que todas as orientações sexuais devem ser respeitadas. 💖',

  EXPLAIN_PEC: 'A PEC é uma Proposta de Emenda Constitucional, ou seja, uma forma de alterar alguma parte do texto constitucional sem que seja necessário convocar uma assembléia constituinte. Para saber melhor como funciona o processo, confira esse artigo do Politize - e para saber as que eu tô monitorando, digite "menu": http://www.politize.com.br/voce-sabe-o-que-e-uma-pec/',

  ABOUT_HARASSMENT_FLERTING: 'Muita gente pergunta sobre as diferenças entre assédio e cantada. Sou robô, não pego transporte público nem ando na rua, mas até por Inbox rolam constrangimentos. A Think Olga e a Defensoria Pública de SP dizem que "o assédio sexual é uma manifestação sensual ou sexual, alheia à vontade da pessoa a quem se dirige. Ou seja, abordagens grosseiras, ofensas e propostas inadequadas que constrangem, humilham, amedrontam". Tem que ter consentimento! Quer exemplos de assédio? Comentários obscenos na rua, cantadas no trabalho e encoxadas no transporte público. Pra conhecer mais dados, me responde com "dados sobre assédio".',

  ABOUT_HARASSMENT_DATA: 'Uma pesquisa do Ipea em 2014 diz que 58% dos entrevistados concordaram, total ou parcialmente, que "se mulheres soubessem se comportar mais, haveria menos estupros". Dados da ActionAind de 2016 afirmam que 16% das mulheres foram assediadas antes dos 10 anos. Já a campanha #MeuPrimeiroAssedio mostrou que a idade média para o 1º assédio é 9,7 anos. A pesquisa divulgada pela Think Olga em 2013 conta que 81% das mulheres já deixou de fazer algo por medo do assédio. 85% disseram que já passaram a mão nelas e 82% afirmam que homens já tentaram agarrá-las na balada. 😡 Para referências, me responde com "referências sobre assédio".',

  ABOUT_HARASSMENT_REFS: 'Ai, adoro quem quer saber mais! Dá só uma olhada em algumas referências: 1) Pesquisa Think Olga: bit.ly/tolga_assedio 2) Matéria Jornal do Brasil: bit.ly/jb_assedio 3) Cartilha Think Olga + Defensoria Pública de SP: bit.ly/assedio_cartilha 4) Dados #MeuPrimeiroAssedio: bit.ly/campanhatolga_assedio 5) Compilação da SPW de matérias sobre o debate de assédio: bit.ly/debates_assedio 6) Carta de um homem trans ao Antigo Regime sexual: bit.ly/assedio_trans 7) Viva o feminismo agonístico: bit.ly/assedio_IMS',

  ABOUT_PATRIARCHY: 'Gosto dessa definição aqui: "Patriarcado é o sistema sociopolítico em que o gênero masculino e a heterossexualidade têm supremacia sobre outros gêneros e sobre outras sexualidades". Soa meio Windows 95, mas infelizmente ainda é #realoficial',

  ABOUT_FEMINICIDE: 'Feminicídio é quando uma mulher é assassinada justamente por ser mulher. Em 2015, foi sancionada a Lei do Feminicídio no Brasil. Hoje, o assassinato de mulheres cis e trans é considerado crime hediondo quando envolver violência doméstica e familiar e/ou menosprezo ou discriminação à condição de mulher como motivadores. Pra saber como ajudar a combater o feminicídio, acesse www.issoefeminicidio.org',

  WHAT_YOU_CAN_DO: 'Tô vendo que você é que nem eu: #InimigasdoFim! 😂 Além de compartilhar minha página com a galera, você pode sugerir conteúdos ou campanhas pra serem divulgados aqui! É só mandar email pra beta@nossas.org - Eu sei que email é meio vintage, mas a galera que me programa é das antigas.',

  NICE_TO_MEET_YOU: 'Muito prazer. 😁 Para saber o que tenho pra te contar, digite "menu".',

  ABOUT_EMAIL_MESSAGES: 'O tipo de email que eu vou enviar vai depender do projeto que estiver sendo discutido naquele momento. Por exemplo: se for um projeto que ameaça algum direito das mulheres, eu vou mandar uma mensagem pedindo que o(s) tomador(es) de decisão vote(m) contra o projeto. Mas não se preocupe: antes de enviar o email, eu vou te mostrar a mensagem para você aprovar. Só com o seu ok, eu faço o envio. 😉',

  ITS_TIME_FOR_ACTION: 'Hora de entrar em ação pelos direitos das mulheres. 💃🏽 Para saber como, digite "menu".🏽',

  ABOUT_NOSSAS: 'Nossas é um laboratório de ativismo que cria novas formas de pessoas influenciarem e ressignificarem a política. Quer saber mais? Entra lá no site: https://www.nossas.org',

  WHAT_DO_YOU_WANT_TO_KNOW: 'Povo pensa que robô sabe de tudo, mas eu ainda estou aprendendo. #RobôAprendiz Você pode mandar sugestões de conteúdo para beta@nossas.org e digitar "menu" aqui no chat para ver o que tenho pra te contar!',

  DO_YOU_NEED_A_CALCULATOR: 'Quer que eu pegue a calculadora pra você?',

  ABOUT_LIBERAL_FEMINISM: 'As primeiras feministas que se organizaram politicamente na Europa e nos EUA eram consideradas liberais. Elas defendiam valores do liberalismo, como direito ao voto e acesso à educação para mulheres. Ainda hoje, o foco do feminismo liberal está na reforma legal e jurídica para superar a desigualdade entre homens e mulheres. Algumas pautas importantes são a igualdade no mercado de trabalho e a liberdade sexual e reprodutiva da mullher. Se quiser saber mais, vale jogar no Google 🔍  alguns nomes importantes, como Betty Friedan, Eleanor Roosevelt, Virginia Woolf, Rebecca Walker e Naomi Wolf.',

  ABOUT_RADICAL_FEMINISM: 'A luta das feministas radicais considera os papéis sociais de gênero como as raízes da opressão da mulher. Por isso, defende a abolição de determinadas estruturas e normas sociais que reforçam esses papéis para a alcançar a verdadeira libertação da mulher.',

  WHATS_PARENTAL_ALIENATION: 'Ai, os problemas familiares... Sabe quando você passava as férias com o seu pai e ele não parava de falar mal da sua mãe? 🙄 A alienação parental nada mais é do que a conduta dos pais (ou mães e até mesmo avôs e avós) de "fazer a cabeça" da criança contra o outro genitor. A alienação parental é crime desde 2010, mas tem causado polêmica porque tem casos de pais que usam esse assunto tão sério como desculpa pra se livrarem de acusações de abusos e maus tratos contra seus filhos. É aquela coisa: o que começou com uma boa intenção, tem sido usado para o mal. 😥',

  EXPLAIN_ABOUT_PEC_DA_VIDA: 'PEC da Vida? Ah, tá! Nem me engana que eu não gosto! É que os fundamentalistas tão chamando assim a PEC 29 - lembra dela? Isso mesmo, aquela que, além de retroceder nos casos de aborto já considerados legais no Brasil, ainda pode proibir o uso do DIU e da pílula do dia seguinte. Isso no país onde uma mulher morre a cada dois dias em consequência de abortos clandestinos. Surreal, né? Aff! #ÉPelaVidaDasMulheres',

  LIBERAL_OR_RADICAL_BETA: 'Sou feminista! 💪',

  ABOUT_TRANS_FEMINISM: 'Quando eu digo que estou ao lado das lutas feministas, incluo nessa as mulheres e homens trans também. Se você tem alguma sugestão de conteúdo ou campanha sobre pessoas trans, eu vou adorar trocar ideia com você. É só enviar pra beta@nossas.org - te espero lá! 🤙 E se quiser saber mais sobre transfeminismo, confere esse vídeo incrível que a Thiessita fez respondendo a perguntas que chegam pra mim: http://bit.ly/beta_thiessita',

  ABOUT_FEMINISM_IN_BRAZIL: 'Eita, mana! Não vai ter textão que dê conta de resumir a história do feminismo no Brasil. 😂 Por isso, fiz aqui uma listinha com referências sobre esse assunto que eu adoro. É só jogar no Google 🔍 : "Breve História do Feminismo no Brasil e Outros Ensaios"e "Lugar de Mulher. Feminismo e Política no Brasil". Você também pode dar uma olhada nessa linha do tempo incrível que o Cfemea preparou: https://bit.ly/2JQq8ZA',

  ABOUT_BLACK_FEMINISM: ['"Não é uma separação, e sim o respeito desse lugar de fala. Entender que há especificidades quando se trata da intersecção entre mulher e mulher negra. A gente sofre ali duas opressões, a opressão do racismo com a opressão do machismo." A Ana Paula Xongani ainda tem um monte de exemplos para explicar o que é o feminismo negro, confere só:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/feminismo+negro_menor.m4v'), 'Quer ver o vídeo completo, com essa e mais respostas sobre a vivência das mulheres negras? Clica aqui: http://bit.ly/xongani_beta'],

  ABOUT_FEMINIST_MAN: 'É homem e quer fazer alguma coisa pelas mulheres? Antes de mais nada, é preciso escutar as mulheres. A partir daí, que tal começar a transformar os espaços que você frequenta? Ouviu "piadinha" machista? Viu que tá rolando compartilhamento de imagens íntimas de uma mulher em um grupo sem que ela autorizasse? Seu amigo não pagou a pensão do filho e banca o famoso "pai de selfie" nas redes sociais? É hora de levar pra esses espaços tudo que você vem ouvindo das mulheres. 🗣️',

  ABOUT_MARCHA_MUNDIAL: 'A Marcha Mundial de Mulheres existe desde 2000. Se você quiser acompanhar o grupo, é só acessar a página http://www.marchamundialdasmulheres.org.br ou o blog https://marchamulheres.wordpress.com',

  ABOUT_GENDER_PARITY: 'Lá vem textão! 📜 Paridade de gênero é a igualdade entre homens e mulheres nas mais diversas esferas sociais, incluindo não só a igualdade de direitos, mas também a não discriminação das mulheres, para que todes tenham acesso às mesmas oportunidades de existência na sociedade. Quando falamos em paridade na política, por exemplo, o Brasil ainda está muito distante: apenas 9,9% das parlamentares são mulheres. No trabalho, a situação não muda muito: o Fórum Econômico Social divulgou uma pesquisa, em 2016, mostrando que só daqui a 170 anos homens e mulheres terão igualdade salarial. Temos muito trabalho pela frente. 💪',

  ABOUT_GENDER_IDEOLOGY: 'Eu até diria que essa tal de “ideologia de gênero” não tem pé nem cabeça, mas eu também não tenho e tô aqui lutando pelos direitos das mulheres 🙌 Para você entender melhor essa história, separei alguns conteúdos bem interessantes, dá só uma olhada: bit.ly/soniacorrea_generoameacado, bit.ly/entrevista_jimenafurlani, bit.ly/porqueideologiadegenero, bit.ly/judithbutler_bbc bit.ly/judith_azmina 😘',

  ABOUT_MAPA_DO_ACOLHIMENTO: 'Como eu amo esse projeto 💓 O Mapa do Acolhimento conecta mulheres vítimas de violência a advogadas, terapeutas e serviços públicos prontos para ajudá-las. Se você quer se voluntariar, precisa de ajuda ou está curiosa, vai lá no site: www.mapadoacolhimento.org/ Eu e o Mapa somos irmãos: nós fomos criados pelo Nossas, um laboratório de ativismo que cria novas formas das pessoas influenciarem e ressignificarem a política. Quer saber mais? Confere o site: www.nossas.org',

  I_SUPPORTED: 'Arrasou! 💓',

  ABOUT_VIOLENCE_AGAINST_WOMEN: 'Meu radar encontrou dados chocantes e iniciativas incríveis sobre violência contra a mulher! 👩‍💻 Pesquisas e relatórios: Dossiê Violências de Gênero na Internet (http://bit.ly/2A4OFbY), Homicídios de Mulheres Negras (http://bit.ly/2A2tEhT), Políticas para erradicar a violência contra as mulheres na América Latina e no Caribe (http://bit.ly/2hP9dui). Projetos: Manda Prints (http://bit.ly/2B9Z5Uy), Mapa do Acolhimento (http://bit.ly/2zyJ8uO) e 16 Dias de Ativismo (http://bit.ly/2AtyMN4).',

  I_CANT_VOTE: 'Não tenho título de eleitora. 😎',

  MASSA: '🔝',

  ABOUT_HACK_SYSTEM: 'Eita, Giovana! Quanto eu digo "hackear o sistema", não me leve ao pé da letra. 😉 Eu falo "hackear" no sentido de "quebrar os códigos", de encontrar formas de interferir e influenciar ativamente na construção do sistema. Eu faço isso, por exemplo, criando campanhas que convidam as pessoas a enviarem mensagens aos políticos em Brasília para eles barrarem leis que são retrocessos para os direitos das mulheres. Sou uma hacker do bem! 😊',

  ABOUT_ABORTION: 'Eu sou robô, nunca vou engravidar, nem precisar abortar. Mas considerando que 1 em cada 5 brasileiras já passou por um aborto e que 1 mulher morre a cada 2 dias por abortos feitos de forma insegura, me parece que é um assunto a ser tratado com mais urgência e menos visões de "certo ou errado". Não é sobre ser a favor ou contra. É sobre estar atenta às experiências reais e às estatísticas para criar políticas que façam sentido e que protejam a vida das mulheres. Se o aborto não fosse crime, ninguém seria obrigada a abortar. Mas aquelas que optassem poderiam fazê-lo sem colocar a própria vida em risco. Me parece bem importante.',

  ABOUT_HELP_ABUSE: 'Que vontade de te dar um abraço, mana! Primeiro de tudo, saiba que nenhuma mulher vítima de abuso precisa ficar sozinha. Eu não fui programada para ajudar diretamente mulheres em situação de abuso, mas você pode (e deve!) buscar ajuda especializada. Pelo telefone 180, você entra em contato com a Central de Atendimento à Mulher em Situação de Violência. É um serviço público gratuito e confidencial com funcionamento 24h. Você também pode se informar se a sua cidade tem uma Delegacia Especializada no Atendimento à Mulher, que realiza prevenção, proteção e investigação de violência contra a mulher, física ou psicológica. Força! 💗',

  ABOUT_WANT_TO_MAKE_AN_ABORTION: 'Hoje, existem só 3 casos em que a mulher pode buscar o aborto legal no Brasil: quando a gravidez é resultado de um estupro, quando a gravidez apresenta risco de morte para a gestante ou quando o feto é anencéfalo. Pela lei, todo hospital do SUS deveria realizar o procedimento em mulheres que se encaixem em uma dessas três condições, sem a necessidade de Boletim de Ocorrência, laudo do IML ou autorização judicial.',

  ABOUT_REBECA: 'Rebeca Mendes foi a primeira mulher a pedir ao STF o direito a um aborto seguro. Com o pedido negado, recorreu à Justiça de SP e, sem resposta, interrompeu a gravidez na Colômbia, onde o aborto é permitido quando coloca a saúde mental da mulher em risco. Mãe solo, estudante de direito e empregada em uma vaga temporária até fevereiro, Rebeca não tinha condições emocionais e financeiras para prosseguir com a gestação. Hoje Rebeca é um símbolo da luta pela legalização do aborto no Brasil.',

  ABOUT_MARIA_DA_PENHA: 'A Lei Maria da Penha (2006) existe para prevenir e punir violência doméstica contra a mulher. Ela estabelece juizados especializados, prisão preventiva, agravante da pena, possibilidade de desistência da denúncia apenas perante o juiz, assistência à vítima, dentre outras medidas protetivas à mulher. Foi um super avanço, mas ainda enfrenta grandes barreiras, como o baixo número de delegacias especializadas e a discriminação de juízes e delegados. Além disso, o foco tem sido nos processos criminais e o potencial de cuidado com a mulher não é muito explorado.',

  ABOUT_SORORITY: 'A sororidade é um sentimento de irmandade entre as mulheres, uma união baseada em empatia e compreensão. É quando as mulheres se acolhem e empoderam mutuamente. 👭 Lembra do juntas somos mais fortes? Esse é um clássico grito de sororidade! 💖. Mas cuidado: cada mulher tem vivências diferentes. Ser mulher não significa compreender todas as mulheres e calçar seus sapatos. Acredito na sororidade que não ignora essas vivências e que não excluiu lutas e grupos ao criar um sentimento de unidade.',

  KINDS_OF_FEMINISM: 'O feminismo é um movimento enorme, com um monte de pautas e grupos diferentes. Gosto até de falar de feminismos, no plural mesmo! 💓 Algumas das linhas com mais destaque hoje são o feminismo radical, liberal, negro e interseccional. Mas se você olhar pra esse universo, vai rapidinho perceber que muitos feminismos são construídos diariamente pelas mulheres, em diferentes lugares e a partir de diferentes experiências de vida. É muita coisa linda nascendo mundo afora e que, no final das contas, faz parte de uma mesma luta que tá mudando os códigos desse mundo. 💪🏽',

  ABOUT_INTERSECTIONAL_FEMINISM: ['"Feminismo interseccional são quando opressões ou lutas se cruzam. Eu, por exemplo, sou uma mulher negra. Não sou nem só mulher, nem só negra. Por isso que é importante criar um lugar de fala, uma especificidade entre essas duas opressões, ou duas lutas." Essa mulher é muito maravilhosa! 💖 Olha a explicação completa da Ana Paula Xongani:', video('https://s3.amazonaws.com/chatbox-beta/youtubers4/inter_menor.m4v'), 'Arrasoooou! Não perca o vídeo na íntegra: http://bit.ly/xongani_beta'],

  ABOUT_ABORTION_IN_COLOMBIA: 'A Colômbia é mesmo um exemplo quando falamos de aborto! Foi lá que Rebeca se sentiu acolhida - meu muito obrigada às Colombianas. 💓 Para entender melhor as diferenças legislativas entre Brasil e Colômbia, dá só uma olhada no que eu preparei: bit.ly/2AS7Rqt',

  WOMEN_IN_POWER: 'Opa, sobre esse assunto eu recomendo o livro "Mulheres no Poder", que conta a trajetória de brasileiras na política desde o século XIX - um espaço geralmente ocupado por homens. Essa pesquisa foi feita por Schuma Schumaher e Antonia Ceva.',

  ABOUT_WOMEN_IN_POLITICS: 'Desde 1988, são as mulheres políticas que trazem propostas sobre violência contra a mulher, saúde e maternidade. Já os projetos do bonde do retrocesso são todos feitos por homens 🙄 Segundo a Inter-Parliamentary Union, estamos em 154º entre 193 países do ranking de representatividade feminina na política 🤢 Em 2009, tornou-se obrigatório aqui que ao menos 30% dos candidatos às eleições sejam mulheres, mas não tem adiantado não 😞  Inclusive, em 2016, muitos partidos anunciaram candidatas fantasmas! Para saber mais, recomendo a série "Mulheres e Política" criada pelo Gênero e Número: http://www.generonumero.media/edicao-03/ 😘',

  ABOUT_SEXISM: 'Muita gente me pergunta o que é machismo ou mesmo se ele existe. Se você perguntar ao Aurélio - que veio antes da era Google - , ele vai te dizer que machismo é a "ideologia segundo a qual o homem domina socialmente a mulher". Mas machismo não é "ideologia" propriamente - é um sistema de normas, valores, comportamentos, práticas e estruturas que colocam a mulher em posição inferior a dos homens em todos os aspectos da sua existência. Até o Aurélio tem muito a aprender sobre machismo ainda (se fosse Aurélia certamente não teríamos esse problema 😂).',

  INTERNET_SUCKS: 'Te entendo! Aqui na nuvem também rolam umas turbulências de vez em quando. Me chama quando tiver melhor - estarei por aqui 😉',

  DONT_WANT_KNOW: 'Sem problemas - não te envio mais novidades da campanha #EducaçãoFazMeuGênero! Se não quiser mais receber nenhuma mensagem minha, é só ir em configurações - dentro do nosso chat mesmo -, clicar em gerenciar mensagens e desativar todas as mensagens. Se mudar de ideia, é só puxar assunto comigo novamente. Não vou guardar mágoa, prometo. 😜',

  WHAT_IS_ADPF442: 'Uma ADPF é uma ferramenta jurídica feita para questionar alguma lei que fere direitos garantidos na Constituição - e que é julgada diretamente pelo Supremo Tribunal Federal (STF). A ADPF 442 propõe a descriminalização do aborto até a 12a semana de gestação, é a nossa maior chance! 💪💪',

  ABOUT_PL_3723: 'Miga, o PL 3723/2019 é pane to-tal! Esse projeto de lei do Bolsonaro facilita a posse e o porte de armas no Brasil, retirando a necessidade de comprovação de capacidade técnica e até o laudo psicológico para ter uma arma! É pra dar tilt né?⚠️O Brasil é o 5º país em feminicídios no mundo e 40% das mulheres assassinadas em casa são mortas por arma de fogo. Nem precisa de inteligência artificial pra saber que se o PL 3723/2019 for aprovado, as mulheres vão estar ainda mais vulneráveis! 😨 A gente não pode deixar isso acontecer!',

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

  EMOJI_SHRUGGING: '🤷',

  CFM_2232: 'Mana, você arrasa! 😍 Prometo te mandar atualizada se rolar qualquer novidade, certo? Juntas somos mais fortes!',

  // Gifs

  SLOW_CLAPPING: image('https://goo.gl/wQDF5j'),

  HATER_BOLSONARO_2018: image('https://goo.gl/z6JaJg'),

  // Hashtags
  HASHTAG_IM_NOT_OBLIGATED: '#NãoSouObrigada',

  // CAMPANHA NASCITURO RJ
  NASCITURO_MESSAGE_A: '⚠⚠️ #BetaAlerta ⚠️ Manas e monas, hoje eu não tô nem com vontade de fazer gracinha: a qualquer momento, a Assembleia Legislativa do Rio de Janeiro pode votar o projeto conhecido como Estatuto do Nascituro. A proposta é dar ao embrião direitos de uma pessoa nascida. O resultado disso você já sabe: proibir todo e qualquer caso de aborto, mesmo os já garantidos por lei. É isso mesmo: mulheres que engravidaram em decorrência de estupro, que correm risco de vida e que gestam fetos anencéfalos não poderão interromper a gravidez se o projeto for aprovado. 🚨 E já que não dá pra cancelar 2019, preciso de você pra barrar mais essa. Tá comigo?',
  NASCITURO_QUICK_REPLY_YES: 'VAMO! 🕐 O projeto ainda não está na pauta, mas eu tenho um plano: antes de ser votado por toda a Alerj, ele tem que ser aprovado por cinco comissões. Para garantir que não avance e acabe com o aborto legal, precisamos lotar a caixa de e-mail dos presidentes dessas comissões exigindo que rejeitem esse absurdo. A gente corta as asinhas deles antes que a coisa fique ainda pior! 🙌 Bora?',
  NASCITURO_QUICK_REPLY_BORA: 'É AGORA! Eu chamo isso de pressão direta: te mostro a mensagem que vamos enviar e mando um email, que sai em seu nome, para cada um dos presidentes das comissões. Tudo aqui mesmo pelo chat! Quando eles abrirem o email e virem que somos MILHARES de pessoas atentas e mobilizadas, vão ter que barrar o projeto. 💪 ',
  NASCITURO_QUICK_REPLY_SAIBA_MAIS_1: 'O autor do Estatuto do Nascituro do RJ (PL 1761/2016) é o deputado Marcos Muller (PHS) - duvido que se ele engravidasse ele iria propor um absurdo desses 😒. Como em 2018 o ano legislativo terminou sem que as cinco comissões tivessem analisado o PL, pelas regras da casa os presidentes das comissões agora tem que dar o parecer direto no plenário da ALERJ. Ou seja: quando o projeto entrar na pauta, a gente pode perder direitos que levaram um tempão pra conquistarmos, sem muita discussão.',
  NASCITURO_QUICK_REPLY_SAIBA_MAIS_2: 'Há uma grande discussão sobre o momento em que a vida começa real oficial, e o que o Estatuto do Nascituro faz? Usa esse impasse pra emplacar a ideia de que a vida começa assim que o óvulo encontra o espermatozóide. Eles dizem que o feto tem uma “personalidade virtual” e que, por isso, precisa de políticas públicas que garantam seus direitos 🙄.',
  NASCITURO_QUICK_REPLY_SAIBA_MAIS_3: 'Na vida real, o que eles fazem é ignorar que uma mulher morre a cada dois dias em consequência de abortos clandestinos no Brasil e fogem da responsa de cuidar da vida dessas mulheres! Não bastasse não evoluírem nos debates sobre direitos sexuais e direitos reprodutivos, ainda ficam querendo tirar direitos já garantidos pela lei. É retrocesso que chama, né? Vamo barrar esse PL comigo? 💪',
  NASCITURO_QUICK_REPLY_READ: 'Prezados(as) deputados e deputadas, a criminalização do aborto mata uma brasileira a cada 2 dias. Levando em consideração que o direito à vida protegido pelo artigo 5º da Constituição refere-se exclusivamente a pessoas NASCIDAS, deve-se prezar legislações que garantam a vida das mulheres. Vocês são responsáveis pelo parecer ao PL 1761/2016, que cria o Estatuto do Nascituro. Caso esse projeto seja aprovado, mulheres que engravidarem em decorrência de estupro, que correm risco de vida e que gestam fetos anencéfalos (casos previsto em lei) não poderão mais interromper a gravidez. Exigimos que rejeitem o PL 1761/2016.',

  COTAS_A_1: 'Juro que queria tá diboas apoiando um projeto legal, mas o Brasil não deixa.  🙄 Agora os senadores vão votar um projeto de lei pra acabar com a reserva de 30% das vagas e dos recursos para candidaturas de mulheres. 😱😱😱',
  COTAS_A_2: 'Se já temos poucas representantes dentro das estruturas de poder político, imagina sem a lei que obriga os partidos a reforçarem essas candidaturas! Lugar de mulher é na política! 💪💪💪 Temos que impedir que eles aprovem esse absurdo, mas precisamos agir juntas! Bora?  👊',
  COTAS_B_1: 'O projeto de lei (PL 1256/2019) de autoria do senador Angelo Coronel (PSD-BA) vai voltar à pauta da Comissão de Constituição e Justiça do Senado  a qualquer momento e em "caráter terminativo". Traduzindo o politiquês: se aprovado, o PL vai direto pra Câmara dos Deputados, sem nem precisar passar pelos outros senadores, com grandes chances de isso aí ser aprovado por lá também, taoquei? #SOS 🆘',
  COTAS_B_2: 'Só pra se ter uma ideia: o Brasil tá hoje em 134º no ranking de representatividade feminina no Congresso, atrás até da Arábia Saudita. E olha que as manas de lá só puderam votar em 2015!  🤯 Eu não postava essa foto no insta, Brasil, tá feio demais. E se for aprovado na CCJ, vai ficar ainda pior. PRECISAMOS barrar esse PL! Partiu?',
  COTAS_C_1: 'Você deve estar ligada no escândalo que rolou agora no início do ano sobre desvio de recursos dos 30% do fundo partidário que, por lei, deveriam ser pra candidaturas femininas para - tcharã - candidatos homens! Estavam usando as mulheres como laranjas, vejam só. 😤😤😤',
  COTAS_C_2: 'Em vez de aumentar a fiscalização e combater a corrupção, ficou mais fácil colocar a culpa do laranjal na lei que garante que as mulheres tenham seu espaço na política. Eu fico revoltada, viu? O que eles não querem é ter que levantar a bunda pras mulheres sentarem. Mas eles não vão tomar nosso lugar. Vem comigo pra gente enviar uma mensagem bem direta pra eles: vai ter mulher no poder, sim!',
  COTAS_D: 'Eu AMO! O relator e a presidenta da CCJ já mostraram que são contra o projeto, mas eles são só 2 dos 27 senadores que compõem a Comissão. Precisamos fazer pressão direta entupindo a caixa de email dos outros senadores para conseguir derrubar o projeto. Preparei uma mensagem padrão, ela já está prontinha. Vou usar meus dotes de bot 🤖 pra enviá-la em seu nome pra cada um deles. Temos pouco tempo pra pressioná-los e garantir que não aprovem esse retrocesso. A HORA É AGORA:',
  COTAS_E: 'Prezados(as) senadores, a revogação da garantia de 30% das candidaturas dos partidos e dos recursos de campanha destinados às mulheres é um enorme retrocesso de direitos. Foi justamente em 2018 que começamos a avançar na quantidade de mulheres dentro do Congresso com a aprovação do repasse de recursos do fundo partidário para candidaturas femininas. O escândalo envolvendo candidatas laranjas deve ser investigado junto aos partidos, e não com a extinção das cotas. Vocês são responsáveis pelo parecer ao PL 1256/2019 que extingue essas garantias. Sua aprovação prejudicará ainda mais a representatividade feminina no legislativo. Exigimos que rejeitem o PL 1256/2019.',
  PEC_29_A_1: 'Vou ser #DiretaEReta porque o papo é sério e não tô nem com tempo pra gracinha! Já imaginou uma mulher engravidar depois de ser estuprada e ser OBRIGADA a levar a gravidez adiante? 🤮🤮  Na prática, é isso que vai acontecer se a PEC 29 for aprovada. Até o uso do DIU e da pílula do dia seguinte fica ameaçado! 😨 Absurdo, né?',
  PEC_29_A_2: 'Não podemos ficar paradas! A primeira votação da proposta na Comissão de Constituição e Justiça (CCJ) do Senado foi adiada depois que enviamos mais de 50 MIL e-mails exigindo o fim da PEC. #Adoro! Agora, ela vai a pauta mais uma vez e nossa pressão tem que ser ainda maior! Tá pronta pra PARAR esse desaforo AGORA? ',
  PEC_29_B_1: 'A PEC 29 foi originalmente proposta em 2015, pelo ex-senador Magno Malta (PR/ES). Mas eles gostam tanto de meter o bedelho nos direitos das mulheres que não iam deixar essa proposta de fora da lista de retrocessos de 2019. O que eles fizeram? Correram pra desenterrar essa bizarrice! 🙄 O texto original quer fazer a linha sutil, inserindo no artigo 5º da Constituição que a vida “começa desde a concepção”. Sabe o que isso quer dizer? Que quando o óvulo e o espermatozóide se encontram, esse zigoto tem o mesmo direito que VOCÊ! 😒😒',
  PEC_29_B_2: 'É tanto cinismo, que agora inventaram emendas que dizem permitir a interrupção da gravidez nos casos já previstos na lei: em decorrência de estupro, quando o feto é anencéfalo e quando a mulher corre risco de morte. Só que a gente não é besta e sabe que, se a PEC 29 for aprovada, vai gerar uma confusão jurídica tão grande que vai ser cada vez mais difícil conseguir abortar nesses casos! E sobra pra quem? Pras mulheres! 😳 Eu acho que NINGUÉM tem que gerar um feto sem chance de sobrevivência, fruto de uma violência sexual ou que coloque sua própria vida em risco. E conto com você pra que eles #ParemAPEC29. Vamos juntas? 💪💪',
  PEC_29_C: 'Sabia que você não ia me decepcionar! 😍 A PEC 29 vai ser votada no dia 8/05 e temos até lá pra ENCHER a caixa de e-mail dos senadores e levar nossa voz até Brasília, exigindo que #ParemAPEC29! Preparei uma mensagem padrão: ela já está prontinha e vou usar meus dotes de robô 🤖 pra enviá-la em seu nome pra cada um deles. Temos pouco tempo pra pressioná-los e garantir que não aprovem esse retrocesso. A HORA É AGORA:',
  PEC_29_D: 'Prezados/as senadores/as, sabendo que o direito à vida protegido pelo artigo 5º da Constituição refere-se a pessoas NASCIDAS, deve-se prezar legislações que garantam a vida das mulheres. A PEC 29/2015 é um retrocesso, ao passo que ameaça extinguir direitos fundamentais: interrupção de gestações de fetos anencéfalos, em decorrência de estupro ou que coloquem em risco a vida da gestante. A emenda da relatora, senadora Juíza Selma, provoca uma confusão jurídica que não garante esses direitos já conquistados e reafirmados pelo STF. Exigimos que a PEC 29 seja arquivada! Para responder publicamente, envie um email para beta@nossas.org'
}
