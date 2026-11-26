import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 11).';
const PESTANA_31 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 31).';
const HOJE = '2026-11-26';

/** Resumos do livro (lote R06): pronomes (cap. 11) e colocação pronominal (cap. 11 e 31). */
export const RESUMOS_LIVRO_R06: ResumoTema[] = [
  {
    temaId: 'lp-pronome',
    titulo: 'Pronomes pessoais, de tratamento, possessivos e demonstrativos',
    resumo:
      'A banca cobra a função do pronome reto e oblíquo, o uso de lhe e de o/a, os pronomes de tratamento com verbo na 3ª pessoa, a ambiguidade do possessivo seu e o valor anafórico ou catafórico dos demonstrativos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Pronome é a palavra que substitui ou acompanha o substantivo e se liga a uma das três pessoas do discurso: a **1ª** (quem fala), a **2ª** (com quem se fala) e a **3ª** (de quem ou do que se fala). Quando acompanha o substantivo, é **pronome adjetivo** (funciona como determinante); quando o substitui, é **pronome substantivo**.\n\nQuanto ao valor no texto, o pronome pode remeter a algo **fora do texto** (exófora, também chamada dêixis) ou a algo **dentro dele**: a **anáfora** retoma um termo já citado, e a **catáfora** antecipa um termo que vem depois.\n\nDentro da classe, o que mais cai em prova são os **pessoais** (retos, oblíquos átonos e tônicos), os **de tratamento**, os **possessivos** e os **demonstrativos**. Os pessoais de tratamento pertencem a essa classe porque também se referem às pessoas do discurso, só que de forma cerimoniosa.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Formas dos pronomes pessoais',
          colunas: ['Pessoa', 'Reto (normalmente sujeito)', 'Oblíquo átono', 'Oblíquo tônico (sempre com preposição)'],
          linhas: [
            ['1ª do singular', 'eu', 'me', 'mim, comigo'],
            ['2ª do singular', 'tu', 'te', 'ti, contigo'],
            ['3ª do singular', 'ele, ela', 'o, a, lhe, se', 'ele, ela, si, consigo'],
            ['1ª do plural', 'nós', 'nos', 'nós, conosco'],
            ['2ª do plural', 'vós', 'vos', 'vós, convosco'],
            ['3ª do plural', 'eles, elas', 'os, as, lhes, se', 'eles, elas, si, consigo'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'O **reto não é objeto direto** na norma culta: escreva "Pegue-o", não "Pegue ele". Eu e tu jamais viram objeto. Com todo, só, apenas ou numeral, muitos gramáticos aceitam o reto como objeto, mas é construção coloquial; em prova, prefira a forma oblíqua.',
          'O átono **o, a, os, as** muda de forma: vira **-lo, -la, -los, -las** depois de verbo terminado em r, s ou z (fazer, fazes, fazer: "vou fazê-lo") e vira **-no, -na, -nos, -nas** depois de ditongo nasal (-am, -em, -ão, -õe): "compraram a casa" = "compraram-na".',
          'O átono **lhe(s)** é normalmente objeto indireto e pode ser trocado por "a ele(s), a ela(s), para ele(s), nele(s)". Se o verbo pede objeto direto, use o, a ou te: "Deus o abençoe" ou "Deus te abençoe", pois abençoar tem complemento direto.',
          '**Nós** pode indicar o próprio falante de modo modesto (plural de modéstia), um sujeito institucional ou um coletivo que inclui o leitor. Já "a gente" equivale a nós, mas o verbo fica na 3ª pessoa do singular: "A gente vai à praia" (certo); "A gente vamos à praia" (errado).',
          'Você e os demais pronomes de tratamento exigem verbo na 3ª pessoa. Não misture você com tu ou vós na mesma frase, pois isso quebra a uniformidade de tratamento: "Você nunca fizeste mal a ninguém" está errado; "Você nunca fez mal" ou "Tu nunca fizeste mal" está certo.',
          'Depois de preposição, use a forma tônica: "entre mim e você", não "entre eu e você". A forma reta só aparece após preposição quando é sujeito de verbo.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Pronomes de tratamento',
          colunas: ['Forma (abreviatura)', 'Usada para', 'Observação'],
          linhas: [
            ['Vossa Senhoria (V.Sa.)', 'Pessoas de prestígio; correspondência e documentos formais', 'Plural: Vossas Senhorias (VV.SS.as)'],
            ['Vossa Excelência (V.Ex.a)', 'Altas autoridades: presidente, ministros, senadores, deputados, juízes', 'Bispos e arcebispos: Vossa Excelência Reverendíssima'],
            ['Vossa Reverendíssima (V.Rev.ma)', 'Sacerdotes em geral', '—'],
            ['Vossa Eminência (V.Em.a)', 'Cardeais', '—'],
            ['Vossa Alteza (V.A.)', 'Príncipes e duques', '—'],
            ['Vossa Majestade (V.M.)', 'Reis, rainhas e imperadores', '—'],
            ['Vossa Santidade (V.S.)', 'Papa', '—'],
            ['Vossa Magnificência (V.Mag.a)', 'Reitores de universidades', '—'],
            ['Vossa Paternidade (V.P.)', 'Abades e superiores de conventos', '—'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Demonstrativos: lugar, tempo e valor no texto',
          colunas: ['Forma', 'Espaço ou tempo', 'Valor no texto (o que a banca cobra)'],
          linhas: [
            ['este, esta, isto (1ª)', 'Perto de quem fala; presente ou futuro próximo ("esta semana")', 'Catafórico (anuncia o que vem); pode ser anafórico quando retoma o último termo citado'],
            ['esse, essa, isso (2ª)', 'Perto de quem ouve; passado recente ou futuro próximo', 'Anafórico: retoma o que já foi dito'],
            ['aquele, aquela, aquilo (3ª)', 'Distante de quem fala e de quem ouve; passado distante ou vago', 'Anafórico para o termo mais distante (o primeiro citado); exofórico quando aponta para algo fora do texto'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Possessivos.** São **meu(s), minha(s), nosso(a/s)** (1ª pessoa), **teu(s), tua(s), vosso(a/s)** (2ª) e **seu(s), sua(s)** (3ª). **Dele** e **dela** não são possessivos: são oblíquos tônicos com preposição.\n\nO possessivo concorda em gênero e número com a coisa possuída, isto é, com o substantivo que acompanha ou a que se refere. Mas a pessoa que ele indica é a do possuidor: em "Ela trouxe suas malas", suas concorda com malas e indica a 3ª pessoa (ela).\n\nPronome de tratamento pede possessivo de 3ª pessoa: "Vossa Senhoria deve enviar seus documentos ao setor competente." Antes de possessivo que acompanha o substantivo, o artigo é facultativo ("meu trabalho" ou "o meu trabalho"); antes de possessivo que o substitui, é obrigatório ("este caderno é o meu").\n\nDependendo do contexto, o possessivo ganha matizes de afetividade, ironia, cortesia, hábito ou indefinição: "Minha querida, cale a boca!" (afetividade ou ironia).',
      },
      {
        tipo: 'atencao',
        texto:
          '**Seu e sua são ambíguos.** Em "O policial prendeu o bandido na casa dele", o "dele" esclarece de quem é a casa. Também se desfaz a dúvida com "próprio" ou com vírgulas.\n\n**A posição do possessivo muda o sentido.** "Minha namorada é atenciosa" pressupõe uma só namorada; "Namorada minha é atenciosa" vale para qualquer namorada minha.\n\n**Até e eu.** "Até eu fui convidado" está certo, porque até indica inclusão. "Ela chegou até eu" está errado: aqui até é preposição, e a forma correta é "até mim".\n\n**Consigo e si** se referem só à 3ª pessoa. "Eu não te disse que não trouxesses consigo a garota?" está errado; o certo é "contigo". Use "entre si" quando o sujeito for de 3ª do plural: "Os irmãos discutiam entre si."\n\n**Com nós e com vós** só se admitem quando seguidos de todos, ambos, mesmos, próprios, numeral, aposto explicativo ou oração adjetiva: "Viajou com nós ambos" (certo). Nos demais casos: conosco e convosco.\n\n**O mesmo** equivale só a "a mesma coisa" ou "a mesma pessoa". Retomar substantivo com "o mesmo" (como em "o mesmo encontra-se parado" para falar de um elevador) é tratado pela maioria dos gramáticos como inadequado.\n\n**Três referentes.** Não há respaldo gramatical para retomar três termos com este, esse e aquele; nesse caso, use numerais (o primeiro, o segundo, o terceiro).\n\n**Este e isto anafóricos.** A tradição prefere o valor catafórico, mas alguns gramáticos admitem o anafórico. FGV e Covest já cobraram essa visão; na prova, siga o enunciado.\n\n**Meritíssimo.** Não existe "Vossa Meritíssima". Ao juiz, dirija-se como "Meritíssimo" (ou "Meritíssima"), em vocativo, e a abreviatura é MM.',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-colocacao',
    titulo: 'Colocação pronominal',
    resumo:
      'A banca cobra as palavras que atraem o pronome para antes do verbo (próclise), a proibição de começar oração com pronome átono, a mesóclise com futuro e a colocação em locuções verbais; os casos facultativos aparecem como pegadinha.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **colocação pronominal** (também chamada topologia ou sínclise) trata da posição do pronome oblíquo átono (me, te, se, nos, vos, lhe(s), o, a, os, as) em relação ao verbo. São três posições:\n\n**Próclise**: pronome antes do verbo. **Ênclise**: pronome depois do verbo, ligado por hífen. **Mesóclise**: pronome no meio do verbo, possível só no futuro do presente e no futuro do pretérito.\n\nMuitas regras seguem a tradição gramatical, que é o que as bancas cobram; a fala brasileira prefere a próclise em vários casos, mas isso não muda o gabarito. Antes de colocar, identifique a classe do **se**, pois ele pode ser reflexivo, parte do verbo, partícula expletiva, índice de indeterminação ou apassivador (ver o último bloco).',
      },
      {
        tipo: 'lista',
        itens: [
          'Palavra de sentido **negativo**: não, nunca, nada, ninguém, nem, jamais, tampouco. Ex.: "Não se esqueça de mim."',
          '**Advérbio ou palavra denotativa**: só, apenas, ainda, sempre, também, até, já, aqui, talvez, onde, como, quando. Ex.: "Talvez me procure amanhã."',
          '**Conjunção subordinativa**: que, se, embora, como, quando, para que, já que, à medida que. Mesmo oculta, a conjunção mantém a próclise: "Como não o achei, pedi-lhe que me procurasse."',
          '**Pronomes relativos, indefinidos e interrogativos** antes do verbo: "Quem te ajudou?", "Poucos te deram a oportunidade."',
          '**Em + gerúndio**: "Em se plantando tudo dá." O gerúndio fica sem pausa após a preposição.',
          '**Frases exclamativas ou optativas** (que expressam desejo): "Deus te proteja!"',
          '**Partícula expletiva "que"**: "Ela que me ajudou."',
          '**Pausa anula a atração**: quando há vírgula entre a palavra atrativa e o verbo, o pronome vai para depois: "Não; esqueça-se de mim!" e "Agora, negam-se a depor."',
        ],
      },
      {
        tipo: 'lista',
        itens: [
          '**Ênclise** sem palavra atrativa, quando o verbo abre a oração: "Vou-me embora daqui!"',
          '**Ênclise** depois de pausa, sem atrativo: "Se eu ganhar na loteria, mudo-me hoje mesmo."',
          '**Ênclise** no imperativo afirmativo: "Calem-se agora!" (com atrativo, o imperativo usa próclise: "Enquanto eu não avisar, jamais vos silenciem").',
          '**Ênclise** com infinitivo ou gerúndio sem atrativo: "Machucar-te não era minha intenção."',
          '**Ênclise obrigatória** com infinitivo não flexionado precedido de "a": "Estou disposto a ajudá-lo."',
          '**Mesóclise** no futuro do presente e no futuro do pretérito, sem atrativo: "Dar-te-emos um beijo" e "Acompanhá-la-ia nesta viagem."',
          '**Nunca há ênclise no futuro**: "Mandarei-a para casa" está errado; "Mandá-la-ei para casa" está certo.',
          '**Com atrativo, o futuro usa próclise**: "Talvez se realize, na próxima semana, um grande evento."',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Locuções verbais.** Com **ter/haver + particípio**, o pronome pode ficar antes do auxiliar, depois do auxiliar ou antes do principal: "Eles me haviam convidado", "Eles haviam-me convidado", "Eles haviam me convidado". **Nunca há ênclise no particípio**: "Eles haviam convidado-me" está errado.\n\nCom **auxiliar + infinitivo ou gerúndio**, sem atrativo, o pronome pode ficar antes do auxiliar, depois do auxiliar, antes do principal ou depois do principal: "Elas estavam te chamando", "Elas estavam chamando-te". Com atrativo, a posição fica entre antes do auxiliar, antes do principal ou depois do principal: "Não posso lhe esclarecer mais nada" ou "Não posso esclarecer-lhe mais nada".\n\nSe o auxiliar estiver no futuro, a mesóclise vai para o auxiliar: "Eles haver-me-iam convidado para a festa."\n\n**Falsas locuções.** Com mandar, deixar, fazer, ver, ouvir ou sentir seguidos de infinitivo, há dois verbos independentes. A posição do pronome pode mudar a quem ele se refere: "Eu te mandei estudar" (quem estuda é você) e "Eu mandei estudar-te" (quem estuda é outra pessoa).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Casos facultativos e de eufonia',
          colunas: ['Situação', 'Colocação', 'Exemplo'],
          linhas: [
            ['Demonstrativo antes do verbo, sem atrativo', 'Próclise ou ênclise (a próclise é a preferida no Brasil)', '"Isso me deixou triste" ou "Isso deixou-me triste"'],
            ['Sujeito explícito antes do verbo (pronome pessoal, substantivo, numeral ou oração), sem atrativo', 'Próclise ou ênclise', '"Ele se retirou" ou "Ele retirou-se"; "Os três se amam" ou "Os três amam-se"'],
            ['Conjunção coordenativa antes do verbo, sem atrativo', 'Próclise ou ênclise', '"Corri atrás da bola, mas me escapou" ou "mas escapou-me"'],
            ['Infinitivo não flexionado precedido de preposição (para, por, sem, de, até, a, em) ou de atrativo', 'Próclise ou ênclise', '"Calei-me para não o contrariar" ou "para não contrariá-lo"'],
            ['Intercalação entre vírgulas', 'Próclise ou ênclise (algumas bancas não admitem a próclise aqui)', '"O diretor, cansado de tudo, se aposentou" ou "aposentou-se"'],
            ['Verbo monossílabo (vi, dá, dê), por eufonia', 'Próclise', '"Eu a vi ontem", não "Eu vi-a ontem"'],
            ['Infinitivo flexionado precedido de preposição', 'Próclise (Rocha Lima aceita a ênclise)', '"Foram ajudados por nos trazerem até aqui"'],
          ],
        },
      },
      {
        tipo: 'atencao',
        texto:
          '**Nunca começar oração com pronome átono.** "Me disse a verdade" está errado; o certo é "Disse-me a verdade" ou "Ela me disse a verdade" (com a palavra atrativa).\n\n**Ênclise obrigatória após verbo que inicia outra oração.** "É impossível se arrumar aqui" está errado; "É impossível arrumar-se aqui" está certo.\n\n**Eufonia do s.** Na 1ª pessoa do plural, o s final cai antes de nos: "Inscrevemo-nos no curso." Napoleão Mendes de Almeida admite a queda do s antes de outros oblíquos ("Enviamo-lhes convites"), mas a maioria dos gramáticos não a aceita e as bancas a tratam como erro.\n\n**Ambos e todos.** Com o numeral ambos, Celso Cunha defende a próclise ("Ambos te abraçaram"); outros gramáticos tratam a colocação como facultativa, e o Cespe já cobrou essa visão. Se a questão não tiver outra pegadinha, marque a alternativa mais conservadora.\n\n**Mesóclise com atrativo.** "Talvez realizar-se-á um evento" está errado; o certo é "Talvez se realizará um evento".',
      },
      {
        tipo: 'lista',
        itens: [
          '**Reflexivo** (com VTD ou VTI): "A menina se cortou" (objeto direto); "A modelo se impôs uma dieta" (objeto indireto).',
          '**Parte integrante do verbo** (verbos pronominais, como queixar-se e suicidar-se): "Nunca você deve queixar-se da sua vida."',
          '**Índice de indeterminação do sujeito** (verbo na 3ª do singular, sem sujeito): "Trabalha-se muito nesta empresa."',
          '**Partícula apassivadora** (verbo transitivo direto, concorda com o paciente): "Vendem-se casas nesta rua."',
          'Em todos os casos a regra de posição é a mesma; o que muda é a função sintática e a leitura da frase. O capítulo 31 traz a classificação completa do "se".',
        ],
      },
    ],
    fontes: [PESTANA, PESTANA_31],
    atualizadoEm: HOJE,
  },
];
