import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 04 — Semântica e Lexicologia), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C04: QuestaoTreino[] = [
  {
    id: 'lp-semantica-qlivro04-01',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(UNIRIO - Técnico-Administrativo em Educação (Revisor de Texto) - 2008) Escrevi este primeiro parágrafo no mais irresponsável araque dactilográfico e só então resolvi parar para pensar, o que é sempre uma atitude condenável, acaba retirando o embalo da naturalidade em que a gente se vai arrastando, digamos, nas asas da inspiração. Parei para pensar só, não. Fui ao “pai dos burros”, o velho Domingos de Azevedo dos meus tempos de ginásio. E ali como sempre aprendi o insuspeitado: pois, senão, vejamos. Abro até outro parágrafo, para que o texto respire uma pausa e, ao mesmo tempo, ganhe a necessária solenidade a minha recentíssima ciência vocabular. (...) A palavra sublinhada em “... pois, senão, vejamos” (§ 2ª) foi empregada com as mesmas características morfológica e semântica em:',
    alternativas: [
      'A quem, senão ao nosso orientador, devemos recorrer, nos momentos de dúvidas, quanto ao desenvolvimento de uma monografia?',
      'O jornalista não apenas considerou minuciosamente o fato, senão divulgou-o com cautela, para que se evitassem distorções.',
      'O médico esperava que a epidemia fosse controlada com rapidez, senão teria de adiar, para o mês seguinte, a palestra em São Paulo.',
      'Havia apenas aquele senão em todo o texto escrito pelo candidato estrangeiro à vaga no curso de Biblioteconomia.',
      'Gastou todo o salário do mês de março, senão mais, na compra de livros sobre psicologia, pois queria passar no concurso.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: em “senão, vejamos”, o “senão” é a conjunção condicional “se” aglutinada ao advérbio “não” (equivale a “do contrário”), com verbo implícito antes e outro verbo expresso depois, o mesmo padrão de “senão teria de adiar”. Nas demais, o “senão” tem outro valor: preposição de exceção (a), conjunção aditiva com sentido de “mas também” (b), substantivo com sentido de falha (d) e conjunção alternativa equivalente a “ou” (e).',
  },
  {
    id: 'lp-semantica-qlivro04-02',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Assinale a única frase que se completa com a segunda forma entre parênteses.',
    alternativas: [
      'Os culpados ____ as leis (infringiram / infligiram).',
      'O ____ do senador termina no próximo ano (mandado / mandato).',
      'Não saia, pois a chuva está ____ (iminente / eminente).',
      'Ladrão foi apanhado em ____ (flagrante / fragrante).',
      'Os requintes de educação caracterizam um perfeito ____ (cavalheiro / cavaleiro).',
    ],
    correta: 1,
    comentario:
      'A resposta é b: quem termina um período de exercício tem um mandato, e “mandado” é ordem judicial. Em a, quem viola leis as infringe (violar), enquanto infligir significa aplicar uma punição. Em c, “iminente” é o que está prestes a acontecer, e “eminente” é o que se destaca; em d, “flagrante” é o fato surpreendido no ato, e “fragrante” é o que exala perfume; em e, o homem gentil é o cavalheiro, e o cavaleiro é o homem a cavalo.',
  },
  {
    id: 'lp-semantica-qlivro04-03',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - SEFAZ/PB - Auditor Fiscal de Tributos Estaduais - 2006) Nas frases: I. O mau julgamento político de suas ações não preocupa os deputados corruptos. Para eles, o mal está na mídia impressa ou televisiva. II. Não há nenhum mau na utilização do Caixa 2. Os recursos não contabilizados não são um mau, porque todos os políticos o utilizam. III. É mau apenas lamentar a atitude dos políticos. O povo poderá puni-los com o voto nas eleições que se aproximam. Nesse momento, como diz o ditado popular, eles estarão em mal lençóis. O emprego dos termos mal e mau está correto APENAS em:',
    alternativas: ['I;', 'I e II;', 'II;', 'III;', 'I e III.'],
    correta: 0,
    comentario:
      'A resposta é a letra a, apenas a frase I: “mau” é adjetivo (oposto de bom) e qualifica “julgamento”, enquanto “o mal” é substantivo. Em II, o substantivo correto é “mal” (dano, algo ruim), e não “mau”; em III, a expressão fixa é “em maus lençóis”, com o adjetivo “mau”, e não “mal”.',
  },
  {
    id: 'lp-semantica-qlivro04-04',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (2R) - Analista Judiciário - 2007) (Adaptada) A frase abaixo está correta ou incorreta quanto à norma culta? “Quando se considera a par do tema, ajuíza sem medo, mas, ao se compreender insipiente, para tudo e pede aos especialistas que o catequizem no assunto para não passar por néscio.”',
    gabaritoCE: true,
    comentario:
      'A frase está correta quanto à norma. A locução “a par do tema” é aceita no sentido de informado, “catequizar” tem objeto direto (o), e “insipiente” é usado com o sentido de ignorante, sem quebra de concordância ou de regência.',
  },
  {
    id: 'lp-semantica-qlivro04-05',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - TCE-AL - Analista de Sistemas - 2008) (Adaptada) A frase abaixo está correta ou incorreta quanto à norma culta? “É prazeirosa a experiência de quem formula propósitos e promove ações que vão de encontro aos mesmos.”',
    gabaritoCE: false,
    comentario:
      'A frase está incorreta. A forma da norma é “prazerosa”, e não “prazeirosa”. Além disso, “ir de encontro a” significa chocar-se contra algo, enquanto o sentido pedido é de concordância, expresso por “ir ao encontro de” (vão ao encontro dos mesmos).',
  },
  {
    id: 'lp-semantica-qlivro04-06',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf - MTE - Auditor-Fiscal do Trabalho - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta? “Criada em 2000 para ‘promover a defesa do interesse público na assistência suplementar à saúde e regular as operadoras setoriais, inclusive quanto às suas relações com prestadores (de serviços) e consumidores’, a ANS opera numa corda bamba. (...) A expressão ‘numa corda bamba’ tem significação conotativa e confere um tom de informalidade ao texto.”',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. A expressão “numa corda bamba” não descreve literalmente a agência, mas uma situação instável, o que caracteriza sentido figurado (conotação). A metáfora ainda dá ao texto um tom informal, como a afirmação diz.',
  },
  {
    id: 'lp-semantica-qlivro04-07',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Adaptada) A afirmação abaixo está correta ou incorreta? “A crise que se iniciou em 2008 nos EUA para depois atingir todas as economias, no quadro da globalização, ao contrário da de 1929, levou os governos a optarem pela intervenção pública para salvar o sistema bancário e para dar um impulso à economia. Isso se traduziu como forte pressão sobre as finanças públicas, que estão acusando déficits muito elevados.” A palavra “acusando” está sendo empregada com a acepção de indicando, mostrando, revelando.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. No contexto, “acusar” não tem o sentido de censurar, mas de mostrar ou revelar a existência de déficits. A leitura que mais se aproxima da palavra é a de indicar, e não a de acusar alguém.',
  },
  {
    id: 'lp-semantica-qlivro04-08',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FCC - TJ/SE - Técnico Judiciário - 2009) Constituem parônimos os vocábulos grifados nas frases apresentadas em:',
    alternativas: [
      'Constava do relatório a descrição pormenorizada da destruição do centro de treinamento decorrente da invasão de torcedores. / Com discrição e muita simpatia, o novo jogador logo conquistou a confiança da torcida.',
      'O descontentamento dos torcedores culminou com um protesto no próprio estádio. / Como protesto contra as medidas tomadas pela diretória, funcionários se recusaram a trabalhar.',
      'Torcedores descontentes invadiram a sede do clube e a depredaram. / Com sede de vitória, os torcedores estimulavam o time ao ataque.',
      'O recinto foi atacado por bombas de fabricação caseira. / Na festa junina soltaram-se bombas e fogos de artifício coloridos.',
      'Os feridos no confronto foram encaminhados ao hospital mais próximo. / Vários espectadores ficaram feridos no último festival.',
    ],
    correta: 0,
    comentario:
      'A resposta é a: “descrição” (ato de descrever) e “discrição” (qualidade de quem é discreto) são parônimos, com grafia e pronúncia próximas e sentidos diferentes. Em b, c, d e e, as palavras de cada par são idênticas, como protesto, sede, bombas e feridos, e por isso não formam parônimos.',
  },
  {
    id: 'lp-semantica-qlivro04-09',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - MPE/SE - Técnico do MP - 2009) Identificam-se parônimos no par de expressões transcritas em: ',
    alternativas: [
      'importância capital // importância fundamental',
      'tráfico de pessoas // tráfego de pessoas',
      'tecnologias de informação // comunicação tecnológica',
      'violações cometidas // violações reprimidas',
      'vida com liberdade // vida com dignidade',
    ],
    correta: 1,
    comentario:
      'A resposta é b: “tráfico” (comércio ilegal) e “tráfego” (movimento, fluxo) são parônimos, parecidos na grafia e na pronúncia, mas com sentidos diferentes. Nas demais, as expressões repetem a mesma palavra ou trazem termos de sentido próximo, sem formar par parônimo.',
  },
  {
    id: 'lp-semantica-qlivro04-10',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Considere as frases abaixo: I. Os horrores trazidos pela II Guerra Mundial marcaram o porquê da criação de um documento internacional que garantisse o respeito aos direitos humanos. II. Sem conhecer seus direitos, os indivíduos não saberão dispor dos instrumentos nem apresentar razões porque reivindicar sua efetiva aplicação. III. Por falta de divulgação dos termos previstos na Declaração Universal, grupos minoritários se tornam mais vulneráveis à violação de seus direitos, sem mesmo saber por quê. IV. São inúmeros os benefícios trazidos pela Declaração Universal, embora exista desrespeito aos direitos nela previstos, como a persistência da pobreza, por que passa um terço da população mundial. Estão escritos corretamente os termos que aparecem grifados em:',
    alternativas: [
      'I, II, III e IV.',
      'I, II e III, apenas.',
      'I, III e IV, apenas.',
      'II, III e IV, apenas.',
      'I, II e IV, apenas.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: em I, “porquê” é substantivo (o motivo), por isso vem junto e com acento; em III, “por quê” fica no fim da frase; em IV, “por que” equivale a “pela qual”. Em II, a locução “razões por que” pede a forma separada “por que”, e não a conjunção “porque”, o que torna a frase errada.',
  },
  {
    id: 'lp-semantica-qlivro04-11',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - ANEE1 - Cargos de Nível Superior - 2010) O sentido da expressão “mal das pernas”, característica da oralidade, seria prejudicado caso se substituísse “mal” por “mau”.',
    gabaritoCE: true,
    comentario:
      'O item está certo. Em “mal das pernas”, a palavra “mal” é substantivo (doença, enfermidade), e a troca por “mau”, que é adjetivo, desfiguraria a expressão, que deixaria de nomear uma doença. Assim, o sentido seria prejudicado.',
  },
  {
    id: 'lp-semantica-qlivro04-12',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRE/RS - Analista Judiciário - 2010) A frase em que a palavra destacada está empregada de modo equivocado é:',
    alternativas: [
      'Inerme diante da ofensiva tão violenta, não lhe restou nada a fazer senão render-se.',
      'Há quem proscreva construções linguísticas de cunho popular.',
      'Fui informado do diferimento da reunião em que o fato seria analisado.',
      'A descriminalização de algumas drogas é questão polêmica.',
      'A flagrância do perfume inebriava a todos os convidados.',
    ],
    correta: 4,
    comentario:
      'A resposta é e: “flagrância” é o ato de flagrar, enquanto o aroma que exala de algo é a “fragrância”. Em a, “inerme” (indefeso, sem armas) está bem usado; em b, “proscrever” (banir, rejeitar) combina com o contexto; em c, “diferimento” (adiamento) é o sentido correto; em d, “descriminalização” (deixar de ser crime) também está adequada.',
  },
  {
    id: 'lp-semantica-qlivro04-13',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/AL - Analista Judiciário - 2010) Na frase “Eis por que o espectador não se sente em casa em parte alguma, porque o espetáculo está em toda parte”, os elementos sublinhados podem ser correta e respectivamente substituídos por:',
    alternativas: [
      'a razão pela qual e visto que',
      'por cujo motivo e visto que',
      'a finalidade pela qual e dado que',
      'o motivo por onde e conquanto',
      'a alegação de que e conquanto',
    ],
    correta: 0,
    comentario:
      'A resposta é a: em “Eis por que”, a expressão equivale a “a razão pela qual”, e a conjunção causal “porque” equivale a “visto que”. Em b, “cujo” exige um antecedente expresso, o que a frase não tem; em d e e, “conquanto” é concessivo, não causal, e em c, “finalidade” não traduz a causa.',
  },
  {
    id: 'lp-semantica-qlivro04-14',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - MTE - Auditor-Fiscal do Trabalho - 2010) Assinale a opção que indica onde o texto foi transcrito com erro gramatical. A lição reafirmada pela crise é a da (1) instabilidade como pressuposto da economia de mercado, transmitida por dois canais. O primeiro é o da confiança dos agentes — aspecto crucial nas observações de John Maynard Keynes —, que é volúvel e sujeita a mudança repentina em momentos de incerteza. Tal instabilidade pode ainda ser catalisada (2) pelo canal financeiro, como ficou claro, de forma dramática, em 2008. Falhas de mercado e manifestações de irracionalidade são comuns no capitalismo, sem dúvida, mas a derrocada recente não repõe (3) a polarização entre Estado e mercado. Reforça, isso sim, a necessidade de aperfeiçoar instituições, a fim de (4) preservar a funcionalidade dos mercados e a concorrência, bens públicos que o mercado, deixado à (5) própria sorte, é incapaz de prover.',
    alternativas: ['1.', '2.', '3.', '4.', '5.'],
    correta: 3,
    comentario:
      'A resposta é d: a locução correta é “a fim de”, com a finalidade de, e não “afim de”, grafia errada. Os demais trechos estão corretos: “a da instabilidade” (1), “catalisada pelo canal” (2), o verbo “repõe” com complemento direto (3) e a crase em “à própria sorte” (5).',
  },
  {
    id: 'lp-semantica-qlivro04-15',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Todos os Cargos (Nível Médio) - 2010) O vocábulo destacado, quanto ao seu significado, está empregado, adequadamente, na seguinte frase:',
    alternativas: [
      'Ações malsucedidas prenunciam um fracasso eminente.',
      'Para acender profissionalmente, é preciso perseverança.',
      'O profissional de sucesso descrimina as etapas de suas ações.',
      'A expectativa do triunfo motiva o empreendedor.',
      'É preciso saber deferir o amor do ódio.',
    ],
    correta: 3,
    comentario:
      'A resposta é d: “motiva” está usado no sentido de provocar ou impulsionar, e o contexto da expectativa do triunfo combina com isso. Em a, o certo é “iminente” (prestes a ocorrer); em b, “ascender” (subir, elevar); em c, “discriminar” (distinguir, especificar); e em e, “diferir” (distinguir), e não “deferir” (conceder).',
  },
  {
    id: 'lp-semantica-qlivro04-16',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - Petrobras - Todos os Cargos (Nível Superior) - 2010) O valor semântico atribuído ao verbo dar, apresentado entre parênteses, está INCORRETO na frase:',
    alternativas: [
      'Lamentavelmente, deu pouco tempo do seu dia para uma reflexão. (dedicar)',
      'Embora tivesse magoado algumas pessoas, não se deu conta. (percebeu)',
      'Daqui a um tempo, dará por terminado o seu problema maior. (considerar)',
      'O seu primeiro erro se deu quando tentou ajudar um amigo em apuros. (concedeu)',
      'No presente, a vida se dá tão pessimista. (apresenta)',
    ],
    correta: 3,
    comentario:
      'A resposta é d: em “o seu primeiro erro se deu”, o verbo significa ocorrer ou acontecer, e não conceder. As demais substituições funcionam: “deu tempo” equivale a dedicar, “não se deu conta” a perceber, “dará por terminado” a considerar e “a vida se dá” a apresenta-se.',
  },
  {
    id: 'lp-semantica-qlivro04-17',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - EPE - Advogado - 2010) Dentre os trechos abaixo, aquele em que a palavra “até” tem um significado diferente do que apresenta nos demais é:',
    alternativas: [
      '“... descobrir se o nome de um sujeito era com q ou com k às vezes demandava até pesquisa telefônica.”',
      '“os dicionários, enciclopédias e até papiros deteriorados estão a um par de cliques de distância...”',
      '“Há cada vez mais felizardos que trabalham de bermuda, sem camisa e até à beira de uma piscina...”',
      '“... se torna, para a turma mais radical, um risco desnecessário, uma coisa até meio passé.”',
      '“Com certeza não chegarei até lá...”',
    ],
    correta: 4,
    comentario:
      'A resposta é e: em “não chegarei até lá”, “até” marca o limite final de um percurso ou de um tempo. Nas demais alternativas, “até” tem valor de inclusão, equivalente a “mesmo” ou “inclusive”, como em “até papiros deteriorados”.',
  },
  {
    id: 'lp-semantica-qlivro04-18',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - BNDES - Técnico Administrativo - 2010) Em “Devemos deixar de nos conformarmos em saber executar apenas uma atividade e conhecer várias outras, nas quais com interesse e dedicação podemos ser diferenciados”, o vocábulo destacado pode ser substituído, sem alteração de sentido, por:',
    alternativas: [
      'indiscriminados',
      'inatingíveis',
      'preteridos',
      'disseminados',
      'destacados',
    ],
    correta: 4,
    comentario:
      'A resposta é e: “diferenciados” significa distintos, que se destacam, e “destacados” mantém esse sentido no contexto. As demais mudam a frase: “indiscriminados” (sem distinção), “inatingíveis” (que não se alcançam), “preteridos” (deixados de lado) e “disseminados” (espalhados).',
  },
  {
    id: 'lp-semantica-qlivro04-19',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - BNDES - Analista de Sistemas - 2010) Em “... esse futuro que concebemos deve estar sempre em congruência com nosso eu”, o vocábulo destacado pode ser substituído, sem alteração de sentido, por:',
    alternativas: [
      'dissonância',
      'resistência',
      'correspondência',
      'relutância',
      'controvérsia',
    ],
    correta: 2,
    comentario:
      'A resposta é c: “congruência” indica harmonia, compatibilidade ou adequação entre duas coisas, e “correspondência” traz esse mesmo sentido. As demais não servem: “dissonância” é justamente o contrário de harmonia, e “resistência”, “relutância” e “controvérsia” indicam oposição ou discussão.',
  },
  {
    id: 'lp-semantica-qlivro04-20',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - BNDES - Analista de Sistemas - 2010) Ao redigir respostas para “Por que quero conseguir um trabalho novo?”, cometeu-se, segundo o registro culto e formal da língua, um erro de ortografia em:',
    alternativas: [
      'Não quero passar a minha vida inteira só cumprindo ordens sem nunca entender por quê.',
      'Alguns constrangimentos porque venho passando me obrigam a considerar outras opções.',
      'Para mim, a realização profissional, no momento presente, é importante porque implica melhoria de vida.',
      'Desse modo, eu poderei saber o motivo por que o sucesso de ontem não nos garante o de amanhã.',
      'Um dia, atingindo o meu objetivo, eu talvez possa contar-lhe o porquê.',
    ],
    correta: 1,
    comentario:
      'A resposta é b: em “constrangimentos porque venho passando”, o termo deve ser “por que” separado, pois “que” é pronome relativo que retoma “constrangimentos”. As demais estão certas: “por quê” no fim da frase, “porque” como conjunção causal, “por que” com o sentido de “pelo qual” e “o porquê” como substantivo.',
  },
  {
    id: 'lp-semantica-qlivro04-21',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - BNDES - Profissional Básico (Administração) - 2010) É melhor começar a exercitar a linguagem, ____ o seu relacionamento pode acabar mal. / A pesquisa recentemente realizada pela empresa foi ____ do estresse emocional do trabalhador. / Expliquei-lhe as exigências do atual mercado ____ ele se adaptasse melhor. A sequência que completa corretamente as frases acima é:',
    alternativas: [
      'se não — a cerca — a fim de que',
      'se não — acerca — afim de que',
      'se não — acerca — a fim de que',
      'senão — acerca — a fim de que',
      'senão — a cerca — afim de que',
    ],
    correta: 3,
    comentario:
      'A resposta é d: “senão” indica “do contrário”, “acerca de” significa “sobre” e a locução “a fim de que” expressa finalidade. Em a, b e c, o primeiro espaço pede “senão”, e não a forma separada “se não”; em a e e, “a cerca” é outra palavra; e em b e e, “afim de” é grafia errada.',
  },
  {
    id: 'lp-semantica-qlivro04-22',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - SEPLAG/BA - Professor Português - 2010) Estabelece relação de hiperonímia/hiponímia, nessa ordem, o seguinte par de palavras:',
    alternativas: [
      'estrondo - ruído',
      'pescador - trabalhador',
      'pista - aeroporto',
      'piloto - comissário',
      'aeronave - jatinho',
    ],
    correta: 4,
    comentario:
      'A resposta é e: “aeronave” é o termo geral que abarca os tipos de aeronave, e “jatinho” é um tipo específico, por isso o hiperônimo vem primeiro e o hipônimo depois. Em b, a ordem está invertida; em c, “pista” é parte do aeroporto (relação de todo e parte), e não de hierarquia de tipos; em d, piloto e comissário são hipônimos de um mesmo termo, sem relação direta entre si.',
  },
  {
    id: 'lp-semantica-qlivro04-23',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - EBC - Cargos de Nível Superior - 2011) “(...) Daí a razão por que, segundo o filósofo, ‘a doutrina do direito e a doutrina da virtude distinguem-se menos pela diferença entre os deveres do que pela diferença de sua legislação, que vincula um ou outro motivo à lei’. E exemplifica: ‘Cumprir uma promessa contratual é um dever exterior; mas o mandamento de agir unicamente porque se trata de um dever, sem levar em conta outro motivo, diz respeito apenas à legislação interior’. Na linha 26, ‘por que’ poderia, sem prejuízo para a correção gramatical, ser grafado porque, em razão de estar empregado como conjunção causal, tal como ocorre em ‘mas o mandamento de agir unicamente porque se trata de um dever’.”',
    gabaritoCE: false,
    comentario:
      'O item está errado. Em “a razão por que”, o “por que” separado equivale a “pelo qual” e retoma “razão”, por isso não é a conjunção causal “porque”. A conjunção causal aparece em outro trecho, “porque se trata de um dever”, que não corresponde ao caso da linha 26.',
  },
  {
    id: 'lp-semantica-qlivro04-24',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRE-RN - Analista - 2011) O segmento cujo sentido está corretamente expresso em outras palavras é:',
    alternativas: [
      'se multiplicaram de maneira prodigiosa = cresceram ilusoriamente.',
      'as duas espécies se regalaram = os dois gêneros se empanturraram.',
      'uma família singular = um conjunto variegado.',
      'que selou o destino = que indigitou a fatalidade.',
      'empenhou-se na procura = dedicou-se com afinco à busca.',
    ],
    correta: 4,
    comentario:
      'A resposta é e: “empenhar-se na procura” equivale a dedicar-se com afinco à busca, e o sentido é preservado. Nas demais, a troca altera o sentido: “prodigiosa” não é “ilusoriamente”, regalar-se (deleitar-se) não é empanturrar-se (comer em excesso), “singular” (único) não é “variegado” (multicolorido) e selar o destino não é indigitar a fatalidade.',
  },
  {
    id: 'lp-semantica-qlivro04-25',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - FINEP - Técnico (Apoio Administrativo e Secretariado) - 2011) Observe a palavra coral no par de frases: “[...] cantei em coral...” / “Mergulhei e arranhei a perna num coral.” A relação existente entre as duas palavras é a mesma que se verifica em:',
    alternativas: [
      'O perigo é iminente. / O eminente deputado fez uma declaração.',
      'Passei em frente a seu edifício hoje. / Implodiram o prédio condenado.',
      'A manga que comi estava docinha. / Rasguei a manga da camisa.',
      'Comprei figo na feira, mas a fruta não estava boa.',
      'A sala de aula estava lotada e a escola é um sucesso.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: “manga” (fruta) e “manga” (parte da camisa) são homônimos perfeitos, iguais na grafia e na pronúncia e sem relação de sentido, como “coral” (canto) e “coral” (animal). Na alternativa a, há parônimos (iminente e eminente), e nas demais as palavras não se repetem na forma.',
  },
  {
    id: 'lp-semantica-qlivro04-26',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - FINEP - Técnico (Apoio Administrativo e Secretariado) - 2011) A sentença em que o verbo tocar está usado com o mesmo sentido que se verifica na sentença “Como acontece com todos os poetas e compositores, ele tocou cada pessoa de modo diferente” é:',
    alternativas: [
      'Ele tocava na orquestra da capital.',
      'O sino da igreja vai tocar às seis horas.',
      'A equipe tocou o projeto rapidamente.',
      'Não toque em nada que está sobre a mesa.',
      'O sorriso de uma criança sempre me toca.',
    ],
    correta: 4,
    comentario:
      'A resposta é e: em “ele tocou cada pessoa”, o verbo tem sentido figurado de sensibilizar, comover, e “o sorriso de uma criança sempre me toca” usa o verbo com o mesmo valor. Nas demais, “tocar” significa executar um instrumento (a), soar (b), conduzir ou ocupar-se de (c) e encostar ou mexer (d).',
  },
  {
    id: 'lp-semantica-qlivro04-27',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Administrador Júnior - 2011) O emprego da palavra/expressão destacada está INCORRETO em:',
    alternativas: [
      'Estava mau-humorado quando entrou no escritório.',
      'Indaguei a razão por que se empenhou tanto na disputa pelo cargo.',
      'Ninguém conseguiu entender aonde ela pretendia chegar com tanta pressa.',
      'Não almejava mais nada da vida, senão dignidade.',
      'Ultimamente, no ambiente profissional, só se fala acerca de eleição.',
    ],
    correta: 0,
    comentario:
      'A resposta é a: a forma adequada é “mal-humorado”, pois “mal” é advérbio de modo nesse caso, e “mau” é adjetivo, oposto de bom. Em b, “por que” equivale a “pelo qual”; em c, “aonde” é correto com verbo de movimento (chegar); em d, “senão” significa “exceto”; e em e, “acerca de” significa “sobre”.',
  },
  {
    id: 'lp-semantica-qlivro04-28',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Técnico de Estabilidade Júnior - 2012) Na frase “foi criado sinteticamente em laboratório para replicar essas moléculas encontradas na natureza”, a palavra destacada pode ser substituída, sem alterar o significado do trecho, por:',
    alternativas: ['reestruturar', 'reproduzir', 'reservar', 'restaurar', 'retirar'],
    correta: 1,
    comentario:
      'A resposta é b: “replicar”, nesse contexto, significa reproduzir, fazer cópia ou repetição de uma molécula. As demais alteram o sentido da frase: “reestruturar” é organizar de novo, “reservar” é guardar, “restaurar” é recuperar um estado anterior e “retirar” é tirar.',
  },
  {
    id: 'lp-semantica-qlivro04-29',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC/UFF - Pref. Angra dos Reis/RJ - Administrador - 2012) Observe as frases. I. O paciente submeteu-se a SESSÕES de sangria, utilizando-se de sanguessugas. II. Encontrou, na SEÇÃO de remédios, o que procurava para o seu alívio. O par de palavras SESSÃO/SEÇÃO relaciona-se ao estudo da:',
    alternativas: ['homonímia', 'sinonímia', 'paronímia', 'antonímia', 'polissemia'],
    correta: 0,
    comentario:
      'A resposta é a: “sessão” e “seção” têm a mesma pronúncia, mas grafia e sentido diferentes, o que caracteriza homófonos, uma espécie de homonímia. Não se trata de paronímia, em que as palavras são parecidas na grafia e na pronúncia, mas com sentidos distintos, pois aqui o foco é a identidade de som.',
  },
  {
    id: 'lp-semantica-qlivro04-30',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Vunesp - SEAP/SP - Agente de Escolta e Vigilância Penitenciária - 2012) No trecho “Para especialistas, fica uma questão: até que ponto essa exuberância econômica no Brasil é sustentável ou é apenas mais uma bolha?”, o termo em destaque tem como antônimo:',
    alternativas: ['fortuna', 'opulência', 'riqueza', 'escassez', 'abundância'],
    correta: 3,
    comentario:
      'A resposta é d: “exuberância” é fartura, grande abundância, e “escassez” é o seu antônimo, a falta. As demais têm sentido igual ou próximo a abundância: fortuna, opulência, riqueza e abundância indicam fartura.',
  },
  {
    id: 'lp-semantica-qlivro04-31',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FEMPERJ - VALEC - Jornalista - 2012) Intertextualidade é a presença de um texto em outro; o pensamento abaixo que NÃO se fundamenta em intertextualidade é:',
    alternativas: [
      '“Se tudo o que é bom dura pouco, eu já deveria ter morrido há muito tempo.”',
      '“Nariz é essa parte do corpo que brilha, espirra, coça e se mete onde não é chamada.”',
      '“Une-te aos bons e será um deles. Ou fica aqui com a gente mesmo!”',
      '“Vamos fazer o feijão com arroz. Se puder botar um ovo, tudo bem.”',
      '“O Neymar é invendável, inegociável e imprestável.”',
    ],
    correta: 4,
    comentario:
      'A resposta é e: a frase não retoma nem alude a nenhum texto conhecido, e apenas expressa uma opinião original. As demais remetem a ditos, expressões ou textos consagrados, o que caracteriza a intertextualidade, seja por citação, paródia ou alusão.',
  },
  {
    id: 'lp-semantica-qlivro04-32',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Makiyama - DETRAN/RJ - Assistente Técnico Administrativo - 2013) Assinale a alternativa que apresenta uma oração em que NÃO há uso do recurso expressivo da ambiguidade:',
    alternativas: [
      'A atriz deixou a plateia muito entristecida.',
      'O médico examinou o seu filho com dor de ouvido.',
      'A ministra analisou o documento entediada.',
      'Ana Lúcia viu o acidente do carro.',
      'Eu já fraturei a perna em vários lugares.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: “entediada” só pode referir-se à ministra, que é quem analisa o documento, e não há duplo sentido. As demais admitem mais de uma leitura, como em “com dor de ouvido”, que pode ser do médico ou do filho, e em “do carro”, que pode ser o carro do acidente ou o carro de quem viu.',
  },
  {
    id: 'lp-semantica-qlivro04-33',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - PF - Agente da PF - 2014) Fragmento de texto: “O uso indevido de drogas constitui, na atualidade, séria e persistente ameaça à humanidade... Suas consequências infligem considerável prejuízo às nações do mundo inteiro, e não são detidas por FRONTEIRAS: avançam por todos os cantos da sociedade e por todos os espaços geográficos, afetando homens e mulheres de diferentes grupos étnicos, independentemente de classe social e econômica ou mesmo de idade. (...)” Dados os sentidos do trecho introduzido por dois-pontos, o vocábulo “fronteiras” deve ser interpretado em sentido amplo, não estando restrito ao seu sentido denotativo.',
    gabaritoCE: true,
    comentario:
      'O item está certo. Como o trecho explica que as consequências não são detidas pelas fronteiras e atingem toda a sociedade, a palavra ganha sentido figurado, de limites não geográficos, e não o sentido literal de linhas divisórias entre países.',
  },
  {
    id: 'lp-semantica-qlivro04-34',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Idecan - Pref. Ubatuba/SP - Agente Administrativo - 2015) No trecho “No levantamento, os participantes viram o nome de Aiír cuja letra faz menção ao álcool”, a palavra destacada pode ser substituída, sem alteração de sentido, por:',
    alternativas: ['citação', 'quantia', 'campanha', 'composição'],
    correta: 0,
    comentario:
      'A resposta é a: “menção” é o ato de citar, mencionar algo, e “citação” tem exatamente esse sentido no contexto. As demais não servem: “quantia” é soma de dinheiro, “campanha” é uma ação organizada e “composição” é a obra musical ou a combinação de elementos.',
  },
  {
    id: 'lp-semantica-qlivro04-35',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cetro - Pref. Campinas/SP - Agente de Educação Infantil - 2015) Assinale a alternativa correta segundo o contexto em que a palavra destacada se encontra.',
    alternativas: [
      'Lílian é uma previlegiada, vai morar na Suécia.',
      'Todos mantiveram a descrição que aquele momento exigia e não falaram sobre o assunto.',
      'O rapaz foi discriminado porque não estava vestido de acordo com o traje exigido na festa.',
      'O ladrão foi preso em fragrante.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: “discriminado”, no sentido de tratado à parte, segregado por causa do traje, é o uso adequado ao contexto (discriminar, em um dos sentidos, é segregar). Em a, a grafia correta é “privilegiada”; em b, o termo certo é “discrição” (reserva), e não “descrição”; em d, o correto é “flagrante”, com o sentido de ato surpreendido na hora.',
  },
  {
    id: 'lp-semantica-qlivro04-36',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Codeba - Analista Portuário (Advogado) - 2016) A frase cuja grafia do vocábulo destacado está correta é:',
    alternativas: [
      'Ambição não é nada SE NÃO a sombra maligna da aspiração.',
      'O que é uma erva daninha SE NÃO uma planta cujas virtudes ainda não foram descobertas?',
      'Liberdade não é nada SE NÃO a distância entre a caça e o caçador.',
      'Se você espera pelo amanhã, o amanhã chega; SE NÃO espera pelo amanhã, o amanhã chega.',
      'A civilização nada mais é SE NÃO uma camada de pintura que qualquer chuvinha lava.',
    ],
    correta: 3,
    comentario:
      'A resposta é d: aqui “se não” é a conjunção condicional “se” seguida do advérbio “não”, equivalente a “caso não”, e por isso se escreve separado. Nas demais, o sentido é de exceção (“exceto”, “a não ser”), o que exige a grafia “senão”.',
  },
  {
    id: 'lp-semantica-qlivro04-37',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Idecan - Inca - Analista em Ciência e Tecnologia Júnior - 2017) A relação de sinonímia entre vocábulos distintos diz respeito a determinados aspectos semânticos contextuais. Considerando-se a preservação do sentido original do texto, os vocábulos destacados a seguir seriam substituídos adequadamente pelas respectivas sugestões, com EXCEÇÃO de:',
    alternativas: [
      '“[...] que FOMENTAM o ódio entre as pessoas.” / incitam',
      '“[...] sonho da sociedade proletária se tenha FRUSTRADO.” / malogrado',
      '“A ambição DESVAIRADA pelo lucro é o mal do capitalismo [...]” / frenética',
      '“[...] não sairemos do impasse que INVIABILIZOU o regime comunista [...]” / desaveio',
    ],
    correta: 3,
    comentario:
      'A resposta é d: “inviabilizar” significa tornar inviável, impossibilitar, e “desaveio” (desavir, desentender) não tem esse sentido. As demais são sinônimos adequados: “fomentar” equivale a incitar, “frustrado” a malogrado e “desvairada” a frenética.',
  },
  {
    id: 'lp-semantica-qlivro04-38',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe - MPE/PI - Cargos de Nível Superior - 2018) A substituição da palavra “só” (“... ela não pode por si só implicar a condenação...”) por “somente” não alteraria os sentidos do texto, já que ambas são sinônimos no contexto linguístico considerado.',
    gabaritoCE: false,
    comentario:
      'O item está errado. “Por si só” é uma locução de sentido enfático, fixa na língua, e a troca por “somente” desloca o efeito de sentido do trecho. Sinonímia perfeita é rara, e cabe ao contexto decidir se a troca preserva o sentido.',
  },
  {
    id: 'lp-semantica-qlivro04-39',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Vunesp - TJ/SP - Médico Judiciário - 2019) Assinale a alternativa que mantém o sentido do texto e emprega, corretamente, termos parônimos.',
    alternativas: [
      'É essencial que juntas médicas promovam seções periódicas para chegar a diagnósticos acurados.',
      'Analistas discutem a cerca da migração de alguns profissionais para uma medicina mais técnica.',
      'Jayme Murahovschi ratifica o ponto de vista de outros colegas que também acreditam que a profissão está vivendo uma reviravolta.',
      'A finalidade da profissão não se alterou, porém, na atual conjetura, o modus operandi passa por drásticas mudanças.',
      'Apesar das contribuições da robótica, não é fato eminente a realização de cirurgias sem a intervenção humana.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: “ratificar” (confirmar) é usado corretamente, e a frase mantém o sentido. Nas demais, há erros de parônimos: “seções” (divisões) deveria ser “sessões” (reuniões), “a cerca” deveria ser “acerca de”, “conjetura” (suposição) deveria ser “conjuntura” (momento) e “eminente” (destacado) deveria ser “iminente” (prestes a ocorrer).',
  },
  {
    id: 'lp-semantica-qlivro04-40',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe - Ministério da Economia - Técnico de Complexidade Intelectual - 2020) Em “Tampouco implica abandonar pleitos por qualidade” (último parágrafo), o advérbio “tampouco” poderia ser substituído pela expressão “tão pouco” sem prejuízo da correção gramatical e do sentido original do texto.',
    gabaritoCE: false,
    comentario:
      'O item está errado. “Tampouco” é advérbio de negação aditiva (nem, também não), enquanto “tão pouco” é locução de intensidade, com sentido de quantidade reduzida. A troca altera o sentido e a relação entre as ideias do período.',
  },
  {
    id: 'lp-semantica-qlivro04-41',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/Cebraspe - PG-DF - Técnico Jurídico (Apoio Administrativo) - 2021) Caso a expressão “21 anos atrás” (“... estabelecido pela primeira vez 21 anos atrás...”) fosse substituída por “a 21 anos”, a correção gramatical e o sentido original do texto seriam mantidos.',
    gabaritoCE: false,
    comentario:
      'O item está errado. “21 anos atrás” indica tempo decorrido, e a locução “a 21 anos” indica tempo futuro ou distância. A troca inverte o sentido do trecho, que passaria a apontar para um prazo a cumprir.',
  },
  {
    id: 'lp-semantica-qlivro04-42',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(IBFC - MGS - Agente de Campo - 2022) Assinale a alternativa correta, em que “mas” e “mais” são corretamente empregados nas lacunas, respectivamente: I. Ela chegou, ____ não veio sozinha. II. Que bom, você trouxe ____ pessoas para a festa! III. Eles estavam com fome, ____ naquele horário já não havia o que comer.',
    alternativas: [
      'mas, mais, mais.',
      'mais, mas, mas.',
      'mas, mais, mas.',
      'mais, mais, mas.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: em I e III, “mas” é conjunção adversativa, equivalente a “porém”, e em II, “mais” é pronome indefinido de quantidade (mais pessoas). Nas demais alternativas, as formas são trocadas: “mais” aparece como conjunção ou “mas” como quantidade, o que não se sustenta.',
  },
];
