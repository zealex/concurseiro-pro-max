import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 21 — Termos acessórios da oração), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C21: QuestaoTreino[] = [
  {
    id: 'lp-termos-oracao-qlivro21-01',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf — AFRFB — 2009) Em relação ao texto, assinale a opção correta.\n\n“Há alguma esperança de que a diminuição do desmatamento no Brasil possa se manter e não seja apenas, e mais uma vez, o reflexo da redução das atividades econômicas causada pela crise global. Mas as notícias ruins agora vêm de outras frentes. As emissões de gases que provocam o efeito estufa pela indústria cresceram 77% entre 1994 e 2007, segundo estimativas do Ministério do Meio Ambiente a partir de dados do IBGE e da Empresa de Pesquisa Energética. Para piorar, as fontes de energia se tornaram mais “sujas”, com o aumento de 122% do CO2 lançado na atmosfera, percentual muito acima dos 71% da ampliação da geração no período. Assim, enquanto as emissões por desmatamento tendem a se reduzir para algo entre 55% e 60% do total, as da indústria e do uso de combustíveis fósseis ganham mais força”.',
    alternativas: [
      'Em “possa se manter” o pronome “se” indica sujeito indeterminado.',
      'O termo “causada” está no singular e no feminino porque concorda com “esperança”.',
      'O termo “enquanto” confere ao período uma relação de consequência.',
      'Em “se tornaram” o pronome “se” indica voz passiva.',
      'O segmento “que provocam o efeito estufa pela indústria” constitui oração subordinada adjetiva restritiva.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está certa: o “que” é pronome relativo que restringe o sentido de “gases”, formando uma oração adjetiva restritiva. Na A, o “se” de “possa se manter” é partícula apassivadora (equivale a “possa ser mantida”), e não indeterminador. Na D, “tornaram-se” é verbo pronominal, com “se” parte integrante, e não voz passiva; na B, “causada” concorda com “redução”, e na C, “enquanto” indica simultaneidade ou contraste, não consequência.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-02',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(EAGS — Aeronáutica — Sargento — 2010) Leia: O pardalzinho nasceu Livre. Quebraram-lhe a asa. Sacha lhe deu uma casa, Água, comida e carinhos. Os termos destacados, no texto acima, classificam-se respectivamente em:',
    alternativas: [
      'objeto indireto e objeto indireto',
      'adjunto adnominal e objeto indireto',
      'objeto indireto e adjunto adnominal',
      'adjunto adnominal e adjunto adnominal',
    ],
    correta: 1,
    comentario:
      'Em “Quebraram-lhe a asa”, o pronome lhe equivale a “a asa dele”, com valor possessivo, logo é adjunto adnominal. Em “Sacha lhe deu uma casa”, o lhe é o beneficiário do verbo dar, função de objeto indireto. Por isso a alternativa B é a única que combina as duas funções na ordem do texto.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-03',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(MPE/RJ — CGJ/RJ — Corregedor — 1998) Assinale a frase em que há erro no emprego de o ou lhe:',
    alternativas: [
      'Mandei-o visitar os pais em Petrópolis;',
      'Mandei-lhe visitar os pais em Petrópolis;',
      'Eu lhe felicitarei pela vitória;',
      'Não lhe assiste o direito de protestar;',
      'A verdade é que eu lhe quero muito bem.',
    ],
    correta: 2,
    comentario:
      'A alternativa C está errada porque felicitar é verbo transitivo direto e pede objeto direto, função que o pronome lhe nunca exerce; a forma correta seria “Eu o felicitarei”. Em B, o lhe é sujeito do infinitivo visitar, construção aceita pelas bancas; em D e E, o lhe é objeto indireto, o que está correto.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-04',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB — EAGS — Sargento — 2010) Assinale a alternativa em que um termo da frase pode ser classificado tanto como adjunto adverbial quanto como adjunto adnominal.',
    alternativas: [
      'Vagarosamente, ele partiu alinhavando, em meu coração, uma imensa saudade.',
      'Atônitos, os moradores saíram à rua para verificar o estrondo.',
      'A professora de Português observava os alunos da classe.',
      'Com ternura, os pais acariciavam o filho doente.',
    ],
    correta: 2,
    comentario:
      'Em “da classe”, o termo pode indicar o lugar onde a professora observava (adjunto adverbial de lugar) ou o grupo a que pertencem os alunos, caracterizando-os (adjunto adnominal); por isso a frase admite as duas leituras. Nas demais, há uma única função: “vagarosamente” e “com ternura” são adjuntos adverbiais, e “atônitos” é predicativo do sujeito.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-05',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB — EEAR — Cabo — 2008) Em todas as alternativas, o termo “pelo rio” classifica-se como adjunto adverbial. Apenas em uma ele também pode ser classificado como agente da passiva. Identifique essa alternativa.',
    alternativas: [
      'Durante a noite, os caçadores levaram alguns animais pelo rio.',
      'Durante a noite, alguns animais foram levados pelo rio.',
      'Durante a noite, levaram-se alguns animais pelo rio.',
      'Durante a noite, levaram alguns animais pelo rio.',
    ],
    correta: 1,
    comentario:
      'Em B, o verbo “foram levados” está na voz passiva analítica, e “pelo rio” pode ser lido como agente da passiva, além de adjunto adverbial de lugar. Em A e D, o sujeito é agente e o verbo está na voz ativa; em C, o “se” é apassivador, que não admite agente expresso. A dupla leitura exige um particípio ligado a um sujeito paciente.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-06',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — FUNASA — Agente Administrativo — 2009) No Texto I, em “e controlar a epidemia crescente das doenças crónicas,”, o termo destacado está ligado sintaticamente ao substantivo “epidemia”. O termo que desempenha função sintática idêntica ao destacado acima está no trecho:',
    alternativas: [
      '“enquanto cerca de 300 milhões de adultos são obesos,”',
      '“...que ajude as autoridades nacionais a enfrentar os problemas.”',
      '“Para alcançar as Metas do Milénio estabelecidas pela ONU,”',
      '“Todos eles estão mais expostos...”',
      '“entre outras doenças ligadas ao excesso de peso.”',
    ],
    correta: 1,
    comentario:
      'O termo destacado se liga ao substantivo “epidemia” e o caracteriza, por isso é adjunto adnominal. A oração “que ajude as autoridades nacionais a enfrentar os problemas” funciona como adjetiva, equivalente a um adjunto adnominal oracional, e por isso é a resposta. As demais alternativas não exercem a mesma função do termo destacado.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-07',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — FUNASA — Administrador — 2009) Na passagem “Eugênio examinava-lhe as mudanças do rosto com comovida atenção”, o pronome oblíquo lhe exerce função sintática idêntica ao termo destacado em:',
    alternativas: [
      '“Olívia se aproximou de Eugênio...”',
      '“A enfermeira juntava os ferros.”',
      '“A respiração voltava lentamente,”',
      '“Vencera! Salvara a vida de uma criança!”',
      '“Sentia-se leve e aéreo.”',
    ],
    correta: 3,
    comentario:
      'O lhe em “examinava-lhe as mudanças do rosto” indica posse, o que equivale a “as mudanças do rosto dele”, logo é adjunto adnominal. Em “a vida de uma criança”, o termo “de uma criança” também expressa posse, e por isso tem a mesma função. As demais trazem outras funções, como objeto direto, adjunto adverbial e predicativo.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-08',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — BACEN — Analista — 2010) A circunstância expressa pelos termos em destaque está corretamente indicada em:',
    alternativas: [
      '“algo para ser visto pela janelinha do carro,” — lugar.',
      '“...esparramada sobre a calçada,” — concessão.',
      '“...pingando esmolas em mãos rotas.” — modo.',
      '“Com o tempo, a miséria conquistou os tubos de imagem dos aparelhos de TV.” — consequência.',
      '“Embora violenta, a miséria ainda nos excluía.” — condição.',
    ],
    correta: 0,
    comentario:
      'Na alternativa A, “pela janelinha do carro” indica lugar, por onde a pessoa vê a paisagem, e a classificação está correta. Em B, “sobre a calçada” é lugar, não concessão; em D, “Com o tempo” indica tempo, não consequência; em E, “embora violenta” expressa concessão, não condição.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-09',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio — Eletrobras Eletronuclear — Analista (Meteorologia) — 2010) No Texto I, em “avançaram em segurança e controle dos resíduos radioativos”, o termo destacado está ligado sintaticamente ao substantivo “controle”. O termo que desempenha função sintática idêntica ao destacado acima está no trecho:',
    alternativas: [
      '“As crises mundiais do petróleo,”',
      '“os preços ficam mais caros,”',
      '“...captar energia da natureza.”',
      '“...especialistas em energia estão fazendo perguntas incômodas...”',
      '“...não teria sido uma alternativa menos danosa ao meio ambiente...”',
    ],
    correta: 4,
    comentario:
      'Em “controle dos resíduos radioativos”, o termo “dos resíduos” completa o substantivo “controle” com valor paciente, pois os resíduos sofrem a ação de controlar; é complemento nominal. Na alternativa E, “ao meio ambiente” completa o adjetivo “danosa” com a mesma relação de complemento. O erro típico é ler essas expressões como adjunto adnominal, que tem valor de posse, origem ou agente.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-10',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — Instituto Rio Branco — Diplomata — 2010) No segmento “o gosto que estes revelam pela improvisação”, o termo “pela improvisação” exerce função distinta da exercida na seguinte frase: Revelou, pela improvisação, o quanto se afastara da cultura clássica.',
    gabaritoCE: true,
    comentario:
      'No segmento, “pela improvisação” completa o nome “gosto”, relação de complemento nominal, já que o gosto é pela improvisação. Na frase de comparação, o mesmo termo é adjunto adverbial (de causa ou de meio), por isso as funções são diferentes e a afirmação está certa.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-11',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — EBC — Cargos de Nível Médio — 2011) A expressão “um dos pioneiros na pesquisa sobre mídia pública no Brasil” (Para o Professor Laurindo Leal Filho, da Universidade de São Paulo, um dos pioneiros sobre mídia pública no Brasil, esse não é um conceito fechado.) exerce, na oração, a função sintática de vocativo, pois se refere a uma pessoa citada anteriormente.',
    gabaritoCE: false,
    comentario:
      'A expressão não é vocativo, porque o vocativo não mantém relação sintática com nenhum termo da oração e serve para chamar o interlocutor. Aqui, “um dos pioneiros” se refere ao professor citado antes e o explica, funcionando como aposto explicativo.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-12',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB — TJ/ES — Analista Judiciário — 2011) As expressões “do espírito laico” (... são a mais alta expressão do espírito laico...) e “da fé” (... mais à razão crítica que aos impulsos da fé...) complementam, respectivamente, os vocábulos “expressão” e “impulsos”.',
    gabaritoCE: false,
    comentario:
      'As duas expressões são adjuntos adnominais, e não complementos nominais: “do espírito laico” indica a origem da expressão e “da fé” indica a origem dos impulsos. O complemento nominal exige valor paciente, isto é, o termo deve sofrer a ação expressa pelo nome, o que não ocorre aqui.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-13',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB — TRE/ES — Técnico — 2011) O segmento “o mais abundante dos gases-estufa” (Por exemplo, as emissões de CO2, o mais abundante dos gases-estufa,...) está entre vírgulas por constituir aposto explicativo.',
    gabaritoCE: true,
    comentario:
      'O segmento explica o termo anterior, “as emissões de CO2”, sem restringi-lo, e por isso vem separado por vírgulas. Como o aposto tem o mesmo valor sintático do termo a que se refere, a afirmação está correta.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-14',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — DPE/RS — Defensor Público — 2011) O fragmento frasal de que ações militares somente iriam retardar (... repetiu as suas preocupações de que ações militares somente iriam retardar) é ....... do substantivo preocupações. Assinale a alternativa que preenche corretamente a lacuna do texto acima.',
    alternativas: [
      'complemento verbal.',
      'complemento nominal oracional.',
      'adjunto verbal.',
      'adjunto nominal.',
      'complemento prepositivo-verbal.',
    ],
    correta: 1,
    comentario:
      'A oração “de que ações militares somente iriam retardar” completa o sentido do substantivo “preocupações”, portanto é complemento nominal com forma oracional. Não se trata de adjunto, pois o termo complementa, e não caracteriza, o nome; as demais alternativas referem-se a verbos, não a substantivos.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-15',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRE/PE — Analista Judiciário — 2011) Os mais fortes empreendiam a conquista colonial, legitimavam a conquista colonial, atribuindo à conquista colonial o mérito de uma transformação civilizadora que tornava a conquista colonial uma espécie de benemerência. Evitam-se as viciosas repetições da frase acima substituindo-se os elementos sublinhados, na ordem dada, por:',
    alternativas: [
      'legitimavam-na — atribuindo-lhe — a tornava',
      'a legitimavam — atribuindo-na — tornava-lhe',
      'legitimavam-na — lhe atribuindo — lhe tornava',
      'legitimavam-lhe — a atribuindo — a tornava',
      'legitimavam-a — lhe atribuindo — tornava-a',
    ],
    correta: 0,
    comentario:
      'A repetição “a conquista colonial” vira “legitimavam-na” (objeto direto), “atribuindo-lhe” (objeto indireto, pois o mérito é atribuído a ela) e “a tornava” (objeto direto de tornar). A alternativa A é a única que traz as três formas corretas, enquanto as demais usam pronome errado ou a preposição indevida.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-16',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — Nossa Caixa Desenvolvimento — Contador — 2011) Em 11 de setembro ocorreu a tragédia que marcou o início deste século, e o mundo acompanhou essa tragédia pela TV. A princípio, ninguém atribuiu a essa tragédia a dimensão que ela acabou ganhando, muitos chegaram a tomar essa tragédia como um grave acidente aéreo. Evitam-se as viciosas repetições da frase acima substituindo-se os elementos sublinhados, na ordem dada, por:',
    alternativas: [
      'acompanhou-a — a atribuiu — lhe tomar',
      'acompanhou-a — lhe atribuiu — tomá-la',
      'lhe acompanhou — lhe atribuiu — tomar-lhe',
      'acompanhou-a — a atribuiu — tomá-la',
      'lhe acompanhou — atribuiu-lhe — a tomar',
    ],
    correta: 1,
    comentario:
      'Só a B mantém as três substituições corretas: “acompanhou-a” (objeto direto), “lhe atribuiu” (objeto indireto, pois se atribui algo a alguém) e “tomá-la” (objeto direto de tomar). As demais usam pronome errado, como “a atribuiu” ou “lhe acompanhou”, que contrariam a regência dos verbos.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-17',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB — PF — Agente — 2012) Os trechos “Por sentenças, por decretos” (Por sentenças, por decretos, pareceríeis divinos) e “Por fictícia autoridade, vãs razões, falsos motivos” (Por fictícia autoridade, vãs razões, falsos motivos, inutilmente matastes) exercem função adverbial nas orações a que pertencem e ambos denotam o meio empregado na ação representada pelo verbo a que se referem.',
    gabaritoCE: false,
    comentario:
      'Os dois trechos são adjuntos adverbiais, mas não expressam o mesmo sentido: o primeiro indica meio, enquanto o segundo, com “vãs razões” e “falsos motivos”, indica causa ou motivo. Como a afirmação atribui meio aos dois, está errada.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-18',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNCAB — MPE/RO — Técnico em Contabilidade — 2012) A alternativa em que o termo destacado tem a função de adjunto adnominal e não a de predicativo do sujeito é:',
    alternativas: [
      '“(...) ela estava muito mais VIVA (...)”',
      '“(...) um peixe SOZINHO num tanque era algo muito solitário. (...)”',
      '“(...) a mãe era BOA para dar ideias. (...)”',
      '“(...) Mas ele estava SOZINHO. (...)”',
      '“(...) Só então notou como estava CANSADO.”',
    ],
    correta: 1,
    comentario:
      'Em “um peixe SOZINHO num tanque”, o adjetivo está ao lado do substantivo e o caracteriza de modo permanente, o que o torna adjunto adnominal. Nas demais, o adjetivo expressa estado transitório do sujeito e funciona como predicativo do sujeito.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-19',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CONSULPLAN — Pref. Barra Velha/SC — Professor de Português — 2012) Analise a função dos termos sublinhados e relacione corretamente as colunas a seguir. 1. Objeto direto. 2. Agente da passiva. 3. Objeto indireto. 4. Adjunto adverbial. ( ) A oração foi por mim proferida em São Paulo. ( ) No mês passado estive alguns dias em Belo Horizonte. ( ) Não quero que fiques triste. ( ) A campanha visa doar agasalhos aos pobres. A sequência está correta em:',
    alternativas: ['4, 2, 3, 1', '2, 4, 3, 1', '2, 4, 1, 3', '4, 3, 2, 1', '4, 3, 1, 2'],
    correta: 2,
    comentario:
      'Em “por mim”, o termo é agente da passiva (2); “No mês passado” indica tempo (4); “que fiques triste” completa o verbo “quero” como objeto direto (1); e “aos pobres” é objeto indireto do verbo “doar” (3). Só a sequência 2, 4, 1, 3 corresponde a essas funções.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-20',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB — STJ — Todos os Cargos (nível médio) — 2012) “(...) Tratava-se então de uma biblioteca imaginária, cujos livros talvez nunca tivessem existido? Persistiam, contudo, numerosas fontes clássicas que descreviam o lugar em que se encontravam centenas de milhares de rolos. E eis a solução do enigma. (...)”. A partícula “se”, em “Tratava-se” e em “se encontravam”, classifica-se como pronome reflexivo e retoma, respectivamente, “uma biblioteca imaginária” e “centenas de milhares de rolos”.',
    gabaritoCE: false,
    comentario:
      'Nos dois casos, o “se” é parte integrante de verbo pronominal (tratar-se de, encontrar-se), e não pronome reflexivo, pois o verbo não indica uma ação que o sujeito pratica sobre si mesmo. Por isso a classificação dada no item está errada.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-21',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FBC — Câmara Itaboraí/RJ — Agente Administrativo — 2012) Dentre os valores semânticos assumidos pelas circunstâncias num enunciado cita-se o de instrumento, o qual está expresso numa das alternativas abaixo. Selecione-a.',
    alternativas: [
      'As tulipas vieram da Holanda.',
      'Meus ganhos vieram do meu próprio esforço.',
      'O aluno veio de ônibus para fazer a prova.',
      'O candidato redigiu o artigo todo a lápis.',
      'O pregador falou da fraternidade entre os homens.',
    ],
    correta: 3,
    comentario:
      'Em “a lápis”, a expressão indica o instrumento com que o artigo foi escrito, valor de instrumento. Em “de ônibus”, o valor é de meio; em “do meu próprio esforço”, de causa; e em “da Holanda”, de origem.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-22',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe — Bacen — Analista — 2013) Fragmento de texto: — Tu, meu filho, se me não engano, pareces dotado da perfeita inópia mental, conveniente ao uso deste nobre ofício. (...) — Mas um tal obstáculo é invencível. — O único meio é lançar mão de um regime debilitante: ler compêndios de retórica, ouvir certos discursos etc.; para esse fim, deves evitar as livrarias, mas, de quando em quando, elas serão de grande conveniência para filiares do boato do dia; de um contrabando, de qualquer coisa: verás que muitos dos leitores, ESTIMÁVEIS CAVALHEIROS, repetir-te-ão as mesmas opiniões, e uma tal monotonia é saudável. (...) O segmento “estimáveis cavalheiros” é um aposto explicativo da expressão “muitos dos leitores”.',
    gabaritoCE: true,
    comentario:
      'O segmento “estimáveis cavalheiros” vem entre vírgulas, explica o termo “muitos dos leitores” e o retoma com o mesmo valor, o que caracteriza aposto explicativo. A afirmação está correta.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-23',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB — ANTAQ — Conhecimentos Básicos — 2014) No segundo período do texto, as vírgulas isolam segmento — “Sua vocação eminentemente hídrica impõe, ao longo dos séculos, a necessidade do deslocamento...” — com função de aposto explicativo.',
    gabaritoCE: false,
    comentario:
      'O segmento isolado tem sujeito e verbo próprios (“Sua vocação ... impõe”), constituindo uma oração intercalada, e não um aposto. O aposto reitera um termo da oração principal, o que não ocorre nesse caso.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-25',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE — SEDF — Conhecimentos Básicos (Cargos 36 e 37) — 2017) Em “É evidente que a interlocução comunicativa permite o entendimento, proporciona o intercâmbio de ideias e nos faz refletir e argumentar com maior propriedade em defesa de nossos direitos e deveres como cidadãos”, o pronome “nos” exerce a função de complemento da forma verbal “refletir”.',
    gabaritoCE: false,
    comentario:
      'O pronome “nos” é objeto direto de “faz”, com o verbo “refletir” formando uma construção causativa. Nela, “nos” funciona como sujeito do infinitivo (faz-nos refletir equivale a faz que nós reflitamos), e não como complemento de refletir.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-26',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(IDECAN — IPC/ES — Procurador Previdenciário I (Superior) — 2018) Em “Júnior, hoje jantaremos fora!”, a presença da vírgula é obrigatória porque serve para:',
    alternativas: [
      'Isolar o vocativo.',
      'Isolar o adjunto adverbial deslocado.',
      'Separar orações coordenadas.',
      'Intercalar expressões explicativas.',
    ],
    correta: 0,
    comentario:
      'A vírgula após “Júnior” isola o vocativo, termo que chama o interlocutor e vem sempre separado por vírgula. A frase tem uma só oração, sem coordenação, e não traz expressão explicativa intercalada, por isso as demais opções não se aplicam.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-27',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IDECAN — IF/PB — Professor de Língua Portuguesa — 2019) Ainda sobre a locução “DOS EPITÁFIOS”, no título do texto FILOSOFIA DOS EPITÁFIOS, pode-se afirmar que, sintaticamente, funciona como',
    alternativas: [
      'adjunto adnominal restritivo de “FILOSOFIA”.',
      'aposto especificativo de “FILOSOFIA”.',
      'complemento nominal de “FILOSOFIA”.',
      'adjunto adnominal explicativo de “FILOSOFIA”.',
      'aposto explicativo de “FILOSOFIA”.',
    ],
    correta: 0,
    comentario:
      'A locução “dos epitáfios” caracteriza e restringe o substantivo “filosofia”, indicando qual filosofia está em questão; por isso é adjunto adnominal restritivo. Não é complemento nominal, pois não sofre a ação expressa por “filosofia”, e não é aposto, porque não reitera o termo anterior nem vem separada por pontuação.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-28',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — TJ/RS — Oficial de Justiça — 2020) A frase abaixo em que ocorre ambiguidade é:',
    alternativas: [
      'Ninguém mais os encontrou de novo.',
      'O cargo de oficial de justiça é importante.',
      'A nomeação do Ministro foi surpreendente.',
      'Tudo foi organizado para o julgamento.',
      'As folhas do caderno despencaram.',
    ],
    correta: 2,
    comentario:
      'Em “A nomeação do Ministro”, o termo “do Ministro” pode ser lido como complemento nominal (alguém nomeou o Ministro) ou como adjunto adnominal (o Ministro nomeou alguém), por isso a frase é ambígua. Nas demais, não há essa dupla leitura sintática.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-29',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — TCE/PI — Assistente de Administração — 2021) Em “O medicamento impede que a nicotina — componente do tabaco que causa dependência — chegue ao cérebro”, o segmento “componente do tabaco que causa dependência” tem a função de:',
    alternativas: [
      'explicar o funcionamento da nicotina no organismo;',
      'indicar o significado do vocábulo “nicotina”;',
      'mostrar o perigo do uso da nicotina;',
      'modificar uma informação dada anteriormente;',
      'alertar o leitor para o risco do fumo para a saúde.',
    ],
    correta: 1,
    comentario:
      'O segmento entre travessões é um aposto explicativo que define o termo “nicotina”, dizendo o que ela é: um componente do tabaco que causa dependência. Por isso a função é indicar o significado do vocábulo, alternativa B. As demais atribuem ao segmento um conteúdo que ele não traz, como o funcionamento no organismo ou o alerta ao leitor.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-30',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNDATEC — IPE Saúde — Técnico de Gestão em Saúde — 2022) Assinale a alternativa que indica o número correto de adjuntos adverbiais presentes no trecho a seguir: “Aqui é preciso dizer que o sistema de saúde não teria capacidade de atender em situações de aumento significativo dos casos.”',
    alternativas: ['0', '1', '2', '3', '4'],
    correta: 3,
    comentario:
      'São três adjuntos adverbiais: “aqui” (lugar), “não” (negação, modificando o verbo “teria”) e “em situações de aumento significativo” (circunstância ligada a “atender”). A expressão “dos casos” é adjunto adnominal e não entra na contagem.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-31',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FAB - EEAR - Sargento - 2003) Assinale a alternativa que classifica, correta e respectivamente, os termos grifados no período “A manutenção das estradas é fundamental para nossa segurança”.',
    alternativas: ['complemento nominal – complemento nominal.', 'complemento nominal – adjunto adnominal.', 'adjunto adnominal – complemento nominal.', 'adjunto adnominal – adjunto adnominal.'],
    correta: 0,
    comentario: 'A resposta é a letra A. Em “manutenção das estradas”, “das estradas” completa o substantivo “manutenção”, e em “fundamental para nossa segurança”, “para nossa segurança” completa o adjetivo “fundamental”; em ambos os casos o termo é complemento nominal. A alternativa B erra ao classificar o segundo termo como adjunto adnominal, que expressa posse, origem ou qualidade, e não completa o sentido do nome.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-32',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FUNDEP - TJ/MG - Assistente Social - 2010) Assinale a afirmativa em que o(s) termo(s) em destaque NÃO ESTÁ(ÃO) corretamente classificado(s) quanto à função sintática.',
    alternativas: ['“Em ti, por exemplo, o outono é manifesto e exclusivo.” – sujeito.', '“Não, querido, sou tua árvore-da-guarda e simbolizo teu outono pessoal.” – predicativo do sujeito.', '“Outoniza-te com dignidade, meu velho.” – vocativo.', '“(...) Há alguma coisa de gracioso em tudo isso: parábolas, ritmos, tons suaves...” – aposto.'],
    correta: 1,
    comentario: 'A resposta é a letra B. Em “Não, querido, sou tua árvore-da-guarda”, “querido” é vocativo, pois chama o interlocutor e não se liga ao verbo como atributo do sujeito, o que torna a classificação de predicativo do sujeito incorreta. As demais estão corretas: “o outono” é sujeito, “meu velho” é vocativo e “parábolas, ritmos, tons suaves” é aposto.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-33',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(PUC/PR - COPEL - Profissional de Comunicação Jr. - 2010) Assinale a alternativa CORRETA:',
    alternativas: ['“Para o empresário e economista Luiz Carlos Mendonça de Barros, ministro das Comunicações no governo de Fernando Henrique Cardoso, insuspeito de simpatias pelo governo Lula (...)”; o trecho sublinhado é um vocativo.', 'Em “Hoje, por causa de distorções como essas, o Estado brasileiro custa caro, funciona mal e trabalha na direção errada”, a vírgula colocada após “hoje” pode ser substituída por ponto e vírgula.', '“Arquiteto e engenheiro da prosperidade do ‘milagre econômico’, o ex-ministro Antonio Delfim Netto está convencido (...)”; o trecho sublinhado é um exemplo de aposto.', 'Em “Mesmo o etanol, que funciona tão bem no Brasil, não é uma saída definitiva no plano mundial” é possível retirar as vírgulas, sem prejuízo do sentido original.', 'A expressão “pelo menos”, em “o Brasil tem pela frente uma possibilidade de crescimento seguro, sem risco, por pelo menos uma geração”, pode ser retirada sem prejuízo do sentido original.'],
    correta: 2,
    comentario: 'A resposta é a letra C. “Arquiteto e engenheiro da prosperidade do milagre econômico” renomeia e explica o sujeito “o ex-ministro Antonio Delfim Netto”, o que caracteriza aposto. Na A, o trecho é aposto, e não vocativo; na B, a vírgula separa um adjunto deslocado, e não duas orações independentes; na D, a oração “que funciona tão bem no Brasil” é explicativa, e as vírgulas não podem ser retiradas; na E, “pelo menos” limita a afirmação, e retirá-la altera o sentido.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-34',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(FUNCAB - DETRAN/PE - Analista de Trânsito - 2010) Os termos grifados exercem as seguintes funções sintáticas: “...e como eu ia dizendo, é muito mais econômico você andar devagar e ser assaltado por mim do que correr e ser assaltado pelo radar. E eu nem somo pontos em sua habilitação!”:',
    alternativas: ['objeto direto – objeto indireto – adjunto adverbial;', 'adjunto adnominal – sujeito – adjunto adverbial;', 'predicativo – agente da passiva – adjunto adverbial;', 'objeto direto – objeto direto preposicionado – objeto indireto;', 'aposto – objeto indireto – objeto direto preposicionado.'],
    correta: 2,
    comentario: 'A resposta é a letra C. Em “é muito mais econômico você andar devagar”, “econômico” é predicativo do sujeito, que é a oração “você andar devagar”. Em “ser assaltado por mim”, “por mim” é agente da passiva, e em “em sua habilitação” a expressão é adjunto adverbial de lugar, figurado. Os erros típicos são tratar “por mim” como objeto indireto ou “econômico” como adjunto adnominal.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-36',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(FCC - BB - Escriturário - 2011) Na iminência de um temporal, o enorme tronco, que armazena grande quantidade de líquido, dá uma descarga de água para as raízes – resultado da variação atmosférica. O sentido do trecho grifado acima está reproduzido com outras palavras em:',
    alternativas: ['Quando se aproxima uma tempestade ...', 'Com a força destruidora das águas ...', 'Para que o temporal venha com força ...', 'Desde que venha a cair uma forte chuva ...', 'Depois de uma forte tempestade ...'],
    correta: 0,
    comentario: 'A resposta é a letra A. “Na iminência de um temporal” indica tempo anterior ao evento, sentido que “quando se aproxima uma tempestade” preserva. A alternativa E também fala de tempo, mas situa o evento depois da tempestade, e as demais trocam a circunstância por modo (B), finalidade (C) ou condição (D).',
  },
  {
    id: 'lp-termos-oracao-qlivro21-37',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(COPEVE - UFAL - Assistente de Administração - 2011) Texto: “O colégio Hugo Sarmento, em São Paulo, decidiu levar para a sala de aula uma ferramenta virtual que muitos adolescentes já dominam. O limite de 140 caracteres imposto pelo microblog Twitter está permitindo que alunos do ensino fundamental exerçam sua veia literária por meio do gênero conhecido como microconto”. As expressões em negrito classificam-se, respectivamente, como:',
    alternativas: ['sujeito – adjunto adverbial – complemento nominal;', 'aposto – objeto direto – complemento nominal;', 'núcleo do sujeito – adjunto adnominal – objeto indireto;', 'aposto – objeto direto – agente da passiva;', 'sujeito – adjunto adverbial – agente da passiva.'],
    correta: 3,
    comentario: 'A resposta é a letra D. “Hugo Sarmento” é aposto, pois dá o nome do colégio mencionado antes; “uma ferramenta virtual” é objeto direto de “levar”; e “pelo microblog Twitter” é agente da passiva de “imposto”. A alternativa A erra ao tratar o nome como sujeito, e a C erra ao dar função de objeto indireto ao termo que é objeto direto.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-38',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FGV - TRE/PA - Técnico Judiciário - 2011) “Partidos são fundamentais para a consolidação da democracia e o permanente desenvolvimento da cidadania e devem existir – de verdade – em bases cotidianas”. Os termos sublinhados no período acima classificam-se, respectivamente, como:',
    alternativas: ['adjunto adnominal e adjunto adnominal;', 'complemento nominal e complemento nominal;', 'adjunto adnominal e complemento nominal;', 'complemento nominal e adjunto adnominal;', 'objeto indireto e objeto indireto.'],
    correta: 1,
    comentario: 'A resposta é a letra B. Em “consolidação da democracia” e em “desenvolvimento da cidadania”, os termos sublinhados completam substantivos, indicando o objeto da ação expressa pelo nome, o que caracteriza complemento nominal. As alternativas que classificam esses termos como adjunto adnominal erram, porque adjunto adnominal indica posse, origem ou qualidade, e não completa o sentido do nome.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-39',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(Cesgranrio - Petrobras - Administrador Júnior - 2011) A frase em que o complemento verbal destacado NÃO admite a sua substituição pelo pronome pessoal oblíquo átono lhe é:',
    alternativas: ['Após o acordo, o diretor pagou aos funcionários o salário.', 'Ele continuava desolado, pois não assistiu ao debate.', 'Alguém informará o valor ao vencedor do prêmio.', 'Entreguei o parecer ao gerente para que fosse reavaliado.', 'Contaria a verdade ao rapaz, se pudesse.'],
    correta: 1,
    comentario: 'A resposta é a letra B. Em “não assistiu ao debate”, o complemento “ao debate” é objeto indireto de “assistir” no sentido de ver, mas não se refere a pessoa, e o pronome “lhe” só substitui complementos de pessoa. Nas demais alternativas, o complemento é uma pessoa (“aos funcionários”, “ao vencedor”, “ao gerente” e “ao rapaz”), e por isso admite a substituição por “lhe”.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-40',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(Cesgranrio - Transpetro - Administrador Júnior - 2011) Observe as palavras “se” no trecho “se não se cuidar botam numa jaula: um animal estranho.” (l. 16-17). Afirma-se corretamente que ambas apresentam, respectivamente, as mesmas funções das palavras destacadas em:',
    alternativas: ['Tire um tempo livre se quiser se tratar.', 'Ele se considera sabido se acerta todas as questões.', 'O consumidor virá queixar-se, se você não devolver o produto.', 'Formaram-se diversos grupos para debater se é o melhor momento.', 'Se ele desconhecia se ia adotar uma nova política, por que tocou no assunto?'],
    correta: 0,
    comentario: 'A resposta é a letra A. No trecho do enunciado, o primeiro “se” é conjunção condicional e o segundo é pronome reflexivo, e essa mesma ordem de funções aparece em “se quiser” e “se tratar”. Nas demais, a ordem não coincide: em B, o primeiro “se” é pronome reflexivo, e em D, o segundo “se” é conjunção integrante.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-41',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(FCC - INSS - Perito Médico Previdenciário - 2012) ... frase com a menção de que são essenciais à busca da felicidade. A relação de regência exemplificada acima NÃO ocorre APENAS em:',
    alternativas: ['a observância da felicidade coletiva;', 'acesso aos básicos serviços públicos;', 'crença na contínua evolução da sociedade;', 'a pretensão legítima ao seu atendimento;', 'dos valores de cada pessoa.'],
    correta: 4,
    comentario: 'A resposta é a letra E. Em “essenciais à busca da felicidade”, o adjetivo “essenciais” rege o complemento “à busca”, e a mesma relação de regência aparece nas alternativas A a D, em “observância da”, “acesso aos”, “crença na” e “pretensão legítima ao”. Em E, “dos valores de cada pessoa” é adjunto adnominal de posse, sem regência nominal, por isso é a única alternativa em que a relação não ocorre.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-42',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FUNDEP - BH/MG - Administrador - 2012) “O símbolo do movimento é Titã, o cãozinho enterrado vivo pelo dono [...]”. O trecho sublinhado nessa frase pode ser corretamente classificado como:',
    alternativas: ['aposto;', 'objeto direto;', 'objeto indireto;', 'predicativo.'],
    correta: 0,
    comentario: 'A resposta é a letra A. O trecho “o cãozinho enterrado vivo pelo dono” identifica e explica “Titã”, com o núcleo “cãozinho”, e pode ser retirado sem alterar a oração principal, o que caracteriza aposto. As demais funções não se aplicam, porque o termo não completa um verbo nem qualifica o sujeito.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-43',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(FUNDEP - GASMIG - Técnico em Administração - 2012) Leia a seguinte frase transcrita do texto: “[...] e o organismo máximo que as coordena, a Organização das Nações Unidas (ONU), é controlado pelos cinco países [...]”. Considerando os termos sintáticos sublinhados nesse trecho da frase, é CORRETO afirmar que exercem, respectivamente, a função de:',
    alternativas: ['objeto direto, sujeito e adjunto adverbial;', 'objeto direto, aposto e agente da passiva;', 'sujeito, adjunto adverbial e agente da passiva;', 'aposto, objeto direto e adjunto adverbial.'],
    correta: 1,
    comentario: 'A resposta é a letra B. “As” é objeto direto do verbo “coordena”, “a Organização das Nações Unidas (ONU)” é aposto explicativo de “o organismo máximo”, e “pelos cinco países” é agente da passiva de “controlado”. A alternativa A erra ao classificar “pelos cinco países” como adjunto adverbial, quando indica quem pratica a ação da passiva.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-44',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(FGV - TJ/PI - Analista Judiciário (Escrivão Judicial) - 2015) Entre os termos sublinhados abaixo, aquele que exerce a função de complemento é:',
    alternativas: ['áreas da cidade;', 'campanhas de conscientização;', 'cidades de médio porte;', 'cobrança de pedágio;', 'número de vítimas.'],
    correta: 3,
    comentario: 'A resposta é a letra D. Em “cobrança de pedágio”, “de pedágio” completa o substantivo “cobrança” e indica aquilo que é cobrado, o que caracteriza complemento nominal. Nas demais expressões, o termo acompanha o nome como adjunto adnominal ou como aposto, e não como complemento.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-45',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(Quadrix - CRM/ES - Agente Administrativo - 2016) É muito comum que um adjetivo exerça a função de adjunto adnominal, ligando-se a um nome que ajuda a caracterizar. Assinale, entre as opções, a única em que tal função sintática não é exercida pelo adjetivo destacado.',
    alternativas: ['“Um PEQUENO grupo de crianças é capaz de desenvolver uma defesa natural à aids.” (adjetivo destacado: “pequeno”)', '“Um pequeno grupo de crianças é capaz de desenvolver uma defesa NATURAL à aids.” (adjetivo destacado: “natural”)', '“O sistema IMUNOLÓGICO simplesmente ignorou a presença do vírus no corpo.”', '“Sistema de defesa do corpo HUMANO.”', '“As células de defesa acabam morrendo por inflamação crônica e o sistema fica VULNERÁVEL.”'],
    correta: 4,
    comentario: 'A resposta é a letra E. Em “o sistema fica VULNERÁVEL”, o adjetivo está ligado ao verbo de ligação “fica” e qualifica o sujeito, o que caracteriza predicativo do sujeito. Nas demais, o adjetivo acompanha diretamente o nome, como em “grupo PEQUENO”, “defesa NATURAL”, “sistema IMUNOLÓGICO” e “corpo HUMANO”, o que caracteriza adjunto adnominal.',
  },
  {
    id: 'lp-termos-oracao-qlivro21-46',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV — CODESP/SP — Advogado — 2010) O ensino técnico profissionalizante de fato precisa hoje correr contra o relógio, pois, se persistir a falta de pessoal qualificado, as oportunidades acabam definitivamente perdidas “pela desistência dos potenciais empregadores”. O termo destacado no período acima exerce a função sintática de:',
    alternativas: [
      'adjunto adverbial',
      'agente da passiva',
      'complemento nominal',
      'adjunto adnominal',
      'objeto indireto',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “pela desistência dos potenciais empregadores” indica a causa pela qual as oportunidades se perdem, e não um nome que complete outro termo, por isso é adjunto adverbial de causa. A leitura como agente da passiva é a principal armadilha, pois o verbo está no particípio “perdidas”, mas o termo expressa o motivo e não quem pratica a ação. Complemento nominal e adjunto adnominal também não servem, porque o termo modifica o verbo, e não um substantivo.',
  },
];
