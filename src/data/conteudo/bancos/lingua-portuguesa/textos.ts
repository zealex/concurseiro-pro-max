import type { TextoBase } from '../../../types';

/**
 * Textos-base de Língua Portuguesa.
 * Próprios (elaborados para o app) ou de domínio público (autor brasileiro morto há mais de 70 anos,
 * Lei 9.610/1998, art. 41). Nos trechos de domínio público, a ortografia foi atualizada pelo Acordo de 1990
 * e os cortes estão marcados com [...]. Fonte da transcrição: Wikisource (edições de referência indicadas).
 */
export const TEXTOS: TextoBase[] = [
  {
    id: 'tx-lp-01',
    titulo: 'O sucesso que não aparece',
    autoria: 'Texto elaborado para o Concurseiro Pro Max',
    dominioPublico: false,
    texto:
      'Poucas conquistas da saúde pública são tão silenciosas quanto a vacinação. Quando funciona, ela não produz notícia: a criança que não teve sarampo não aparece nas estatísticas de internação, e o surto que não aconteceu não ocupa manchete. Paradoxalmente, é esse sucesso invisível que alimenta a desconfiança. Gerações que nunca viram a doença passam a temer mais a agulha do que o vírus.\n\n' +
      'Isso ajuda a entender por que a queda da cobertura vacinal não se explica apenas pela falta de informação. Muitas famílias sabem que as vacinas existem e são gratuitas; o que lhes falta, às vezes, é tempo para ir à unidade de saúde no horário comercial, ou confiança em quem as orienta. Nesse cenário, a equipe da atenção primária tem papel decisivo: o agente comunitário que conhece a rua, a enfermeira que confere a caderneta, o médico que dedica dois minutos a responder a uma dúvida sem desdém.\n\n' +
      'Campanhas nacionais são necessárias, mas não bastam. A confiança se constrói no varejo, consulta a consulta, e se perde no atacado, com um boato compartilhado milhares de vezes. Combater a desinformação, portanto, exige mais do que desmentir: exige estar presente antes que a dúvida se transforme em medo.',
  },
  {
    id: 'tx-lp-02',
    titulo: 'O Alienista (fragmento)',
    autoria: 'Machado de Assis, “O Alienista”, em Papéis Avulsos (1882), cap. I — domínio público, ortografia atualizada',
    dominioPublico: true,
    texto:
      'As crônicas da vila de Itaguaí dizem que em tempos remotos vivera ali um certo médico, o Dr. Simão Bacamarte, filho da nobreza da terra e o maior dos médicos do Brasil, de Portugal e das Espanhas. Estudara em Coimbra e Pádua. Aos trinta e quatro anos regressou ao Brasil, não podendo el-rei alcançar dele que ficasse em Coimbra, regendo a universidade, ou em Lisboa, expedindo os negócios da monarquia.\n\n' +
      '— A ciência, disse ele a Sua Majestade, é o meu emprego único; Itaguaí é o meu universo.\n\n' +
      'Dito isto, meteu-se em Itaguaí, e entregou-se de corpo e alma ao estudo da ciência, alternando as curas com as leituras, e demonstrando os teoremas com cataplasmas. [...]\n\n' +
      'Mas a ciência tem o inefável dom de curar todas as mágoas; o nosso médico mergulhou inteiramente no estudo e na prática da medicina. Foi então que um dos recantos desta lhe chamou especialmente a atenção, — o recanto psíquico, o exame de patologia cerebral. [...]\n\n' +
      '— A saúde da alma, bradou ele, é a ocupação mais digna do médico.\n\n' +
      '— Do verdadeiro médico, emendou Crispim Soares, boticário da vila, e um dos seus amigos e comensais.',
  },
  {
    id: 'tx-lp-03',
    titulo: 'Quem aguenta tudo',
    autoria: 'Texto elaborado para o Concurseiro Pro Max',
    dominioPublico: false,
    texto:
      'Há uma frase que circula nos corredores dos hospitais como se fosse elogio: “ele aguenta tudo”. Dita sobre o colega que emenda o terceiro plantão seguido, ela revela, mais do que admiração, uma cultura que confunde resistência com competência. O cansaço extremo, no entanto, não é medalha. Estudos sobre privação de sono indicam que, depois de muitas horas acordado, o profissional reage mais devagar, erra mais e percebe menos os próprios erros — justamente o que não se espera de quem prescreve medicamentos.\n\n' +
      'O problema não se resolve com conselhos individuais para “descansar mais”. Se a escala é montada com lacunas, alguém as cobrirá; se a remuneração depende de acumular vínculos, o médico jovem dificilmente recusará o plantão extra. Trata-se, portanto, de uma questão de organização do trabalho, e não apenas de força de vontade.\n\n' +
      'Reconhecer o limite não é fraqueza; é parte da segurança do paciente. Uma instituição que celebra quem “aguenta tudo” acaba, sem perceber, premiando o risco.',
  },
  {
    id: 'tx-lp-04',
    titulo: 'O Cortiço (fragmento)',
    autoria: 'Aluísio Azevedo, O Cortiço (1890), cap. III — domínio público, ortografia atualizada',
    dominioPublico: true,
    texto:
      'Eram cinco horas da manhã e o cortiço acordava, abrindo, não os olhos, mas a sua infinidade de portas e janelas alinhadas.\n\n' +
      'Um acordar alegre e farto de quem dormiu de uma assentada sete horas de chumbo. [...]\n\n' +
      'Entretanto, das portas surgiam cabeças congestionadas de sono; ouviam-se amplos bocejos, fortes como o marulhar das ondas; pigarreava-se grosso por toda a parte; começavam as xícaras a tilintar; o cheiro quente do café aquecia, suplantando todos os outros; [...] reatavam-se conversas interrompidas à noite; a pequenada cá fora traquinava já, e lá dentro das casas vinham choros abafados de crianças que ainda não andam. No confuso rumor que se formava, destacavam-se risos, sons de vozes que altercavam, sem se saber onde, grasnar de marrecos, cantar de galos, cacarejar de galinhas.',
  },
  {
    id: 'tx-lp-05',
    titulo: 'Correlação não é causa',
    autoria: 'Texto elaborado para o Concurseiro Pro Max',
    dominioPublico: false,
    texto:
      'Imagine um estudo segundo o qual pessoas que tomam café todos os dias vivem, em média, mais do que as que não tomam. A conclusão apressada seria recomendar café a toda a população. O pesquisador cuidadoso, porém, faz antes uma pergunta: quem bebe café difere de quem não bebe em outros aspectos? Talvez tenha mais renda, durma melhor ou fume menos. Se for assim, o café pode ser apenas um acompanhante da longevidade, e não sua causa.\n\n' +
      'Esse é o problema dos fatores de confusão, velho conhecido da epidemiologia. Estudos observacionais são valiosos para levantar hipóteses e, muitas vezes, são a única evidência disponível, já que não seria ético sortear pessoas para fumar durante décadas. Ainda assim, suas conclusões exigem cautela. Os ensaios clínicos randomizados, nos quais o acaso decide quem recebe a intervenção, reduzem esse viés, embora sejam caros e nem sempre possíveis.\n\n' +
      'Ler ciência com espírito crítico, portanto, não significa desacreditar tudo. Significa perguntar, diante de cada manchete, como o dado foi obtido e o que mais poderia explicá-lo.',
  },
  {
    id: 'tx-lp-06',
    titulo: 'Os Sertões (fragmento)',
    autoria: 'Euclides da Cunha, Os Sertões (1902), parte “O Homem”, cap. III — domínio público, ortografia atualizada',
    dominioPublico: true,
    texto:
      'O sertanejo é, antes de tudo, um forte. [...]\n\n' +
      'A sua aparência, entretanto, ao primeiro lance de vista, revela o contrário. Falta-lhe a plástica impecável, o desempeno, a estrutura corretíssima das organizações atléticas.\n\n' +
      'É desgracioso, desengonçado, torto. Hércules-Quasímodo, reflete no aspecto a fealdade típica dos fracos. [...]\n\n' +
      'É o homem permanentemente fatigado. [...]\n\n' +
      'Entretanto, toda esta aparência de cansaço ilude.\n\n' +
      'Nada é mais surpreendedor do que vê-la desaparecer de improviso. Naquela organização combalida operam-se, em segundos, transmutações completas. Basta o aparecimento de qualquer incidente exigindo-lhe o desencadear das energias adormecidas. O homem transfigura-se.',
  },
  {
    id: 'tx-lp-07',
    titulo: 'O prontuário não é vitrine',
    autoria: 'Texto elaborado para o Concurseiro Pro Max',
    dominioPublico: false,
    texto:
      'O sigilo médico é anterior a qualquer lei escrita. Já no juramento atribuído a Hipócrates, o médico prometia guardar em segredo o que visse ou ouvisse no exercício da profissão. A razão permanece atual: sem a garantia de discrição, o paciente omite sintomas, esconde hábitos e, no limite, deixa de procurar atendimento. O segredo, assim, não protege apenas o indivíduo; protege a própria possibilidade de cuidar.\n\n' +
      'A informatização trouxe ganhos evidentes. Um prontuário eletrônico bem alimentado evita exames repetidos e permite que diferentes profissionais acompanhem o mesmo caso. Contudo, multiplicou também as portas de acesso. Basta uma senha emprestada, uma tela deixada aberta ou um comentário sobre o caso em um grupo de mensagens para expor o que deveria ficar restrito à equipe.\n\n' +
      'Não se trata de desconfiar da tecnologia, mas de lembrar que ela amplia tanto o cuidado quanto o descuido. Quem acessa um prontuário deve fazê-lo por necessidade assistencial, e não por curiosidade.',
  },
  {
    id: 'tx-lp-08',
    titulo: 'A rua (fragmento)',
    autoria: 'João do Rio, A alma encantadora das ruas (1908), “A rua” — domínio público, ortografia atualizada',
    dominioPublico: true,
    texto:
      'Eu amo a rua. Esse sentimento de natureza toda íntima não vos seria revelado por mim se não julgasse, e razões não tivesse para julgar, que este amor assim absoluto e assim exagerado é partilhado por todos vós. Nós somos irmãos, nós nos sentimos parecidos e iguais; nas cidades, nas aldeias, nos povoados, não porque soframos, com a dor e os desprazeres, a lei e a polícia, mas porque nos une, nivela e agremia o amor da rua. É este mesmo o sentimento imperturbável e indissolúvel, o único que, como a própria vida, resiste às idades e às épocas. Tudo se transforma, tudo varia — o amor, o ódio, o egoísmo. Hoje é mais amargo o riso, mais dolorosa a ironia. Os séculos passam, deslizam, levando as coisas fúteis e os acontecimentos notáveis. Só persiste e fica, legado das gerações cada vez maior, o amor da rua.',
  },
];
