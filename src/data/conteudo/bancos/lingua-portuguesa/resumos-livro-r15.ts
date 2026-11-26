import type { ResumoTema } from '../../../types';

const PESTANA_35 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 35).';
const PESTANA_36 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 36).';
const PESTANA_37 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 37).';
const HOJE = '2026-11-26';

export const RESUMOS_LIVRO_R15: ResumoTema[] = [
  {
    temaId: 'lp-coesao',
    titulo: 'Coesão e coerência',
    resumo: 'Coesão é a ligação formal entre as partes do texto; coerência é o sentido do texto como um todo. A banca cobra a identificação de pronomes e conectivos que retomam ou ligam ideias e a troca de conectivos que preserve o sentido.',
    blocos: [
      {
        tipo: 'texto',
        texto: '**Coesão** é a ligação entre as partes do texto (palavras, expressões, frases e parágrafos) por meio de elementos linguísticos visíveis na superfície: pronomes que retomam termos, conectivos que ligam orações e repetições controladas.\n\n**Coerência** é a relação de sentido que organiza o texto como um todo e permite interpretá-lo sem contradição. Ela depende do sentido, e não da presença de conectivos.\n\nPor isso, um texto pode ser coeso e incoerente (conectivos bem colocados, mas ideias que não se encaixam) ou coerente e pouco coeso (frases justapostas, sem conectivos, mas com sentido claro).',
      },
      {
        tipo: 'lista',
        itens: [
          'Anáfora e catáfora: o elemento anafórico retoma um termo já citado; o catafórico antecipa um termo que vem depois.',
          'Substantivos e expressões que substituem outros: sinônimos; hiperônimo (termo geral, como “animal”) e hipônimo (termo específico, como “gato”); antonomásia (“o Poeta dos Escravos” para Castro Alves); metonímia (“a Casa aprovou o projeto” para o Legislativo); abreviação; repetição de parte do nome; palavra-síntese (“tal atitude”, “isso”).',
          'Elipse: omissão de um termo já citado, como o sujeito da segunda oração em “Os alunos chegaram cedo e saíram tarde”.',
          'Adjetivos e numerais que retomam um termo anterior, como em “Os candidatos chegaram; dois deles desistiram”.',
          'Artigo definido (“o”, “a”), que retoma um referente já conhecido. O indefinido (“um”) apresenta algo novo; trocar um pelo outro pode quebrar a ligação.',
          'Pronomes pessoais, possessivos, demonstrativos, indefinidos, interrogativos e relativos, todos podendo retomar ou antecipar termos.',
          'Verbos vicários: “fazer” e “ser” substituindo outro verbo já usado, como em “Ela estudou, e eu fiz o mesmo”.',
          'Advérbios locativos e temporais, como “aqui”, “lá” e “assim”, que retomam lugar, tempo ou modo já mencionados.',
          'Expansão lexical: escolha de sinônimos que revela o ponto de vista de quem escreve (“o regime” em vez de “o governo” sugere crítica).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Valor anafórico',
        enunciado: 'No trecho “O prefeito inaugurou a ponte. Ela ligará dois bairros que estavam isolados há anos”, qual é o referente de “Ela” e qual é o valor desse pronome?',
        resolucao: '“Ela” retoma “a ponte”, termo anterior, e por isso tem valor anafórico. A concordância de gênero ajuda a achar o referente: “ela” só pode retomar “a ponte”, porque “o prefeito” é masculino.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Coesão sequencial (conectivos por relação de sentido) e recorrencial',
          colunas: ['Relação ou mecanismo', 'Elementos mais cobrados'],
          linhas: [
            ['Oposição / contraste', 'mas, porém, contudo, todavia, no entanto'],
            ['Concessão', 'embora, ainda que, apesar de'],
            ['Conclusão', 'portanto, logo, por isso, por conseguinte, em vista disso'],
            ['Explicação', 'pois; porque, quando introduz uma explicação'],
            ['Finalidade', 'para, a fim de, para que'],
            ['Tempo', 'quando, enquanto, assim que, logo que'],
            ['Recorrencial', 'repetição de palavras, paralelismo sintático e paráfrase (introduzida por “ou seja”, “isto é”)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tipos de coerência',
          colunas: ['Tipo', 'O que verificar'],
          linhas: [
            ['Narrativa', 'harmonia e lógica entre os fatos e as ações das personagens; quem perdeu o celular não pode, logo depois, ligar com esse aparelho'],
            ['Argumentativa', 'os argumentos sustentam a tese e não se contradizem'],
            ['Figurativa', 'as imagens e comparações combinam com o assunto e com o clima descrito'],
            ['Temporal', 'a ordem dos fatos respeita o que aconteceu antes e o que aconteceu depois'],
            ['De registro', 'um único nível de linguagem (formal ou informal) do início ao fim'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'Manutenção temática: o parágrafo não muda de assunto sem motivo.',
          'Conhecimento de mundo: a informação precisa ser compatível com o que se sabe; dizer que o Rio Amazonas desemboca no Oceano Pacífico rompe a coerência.',
          'Situação de comunicação: linguagem e tom combinam com o interlocutor e com a finalidade (uma carta formal de demissão não admite gírias nem ameaças).',
          'Mecanismos gramaticais e semânticos: a escolha de palavras precisa do sentido exato; sinônimos e parônimos são trocados com frequência (sobrepeso x obesidade; coalizão x colisão).',
          'Intertextualidade: citar outro texto deve reforçar a tese; uma citação que contraria o argumento gera incoerência.',
          'Intencionalidade: a tese precisa estar clara; duas teses opostas no parágrafo introdutório confundem o leitor.',
        ],
      },
      {
        tipo: 'atencao',
        texto: '**Trocar conectivo sem checar a relação.** “No entanto” indica oposição, e não conclusão. Se a ideia é de consequência, o conectivo correto é “portanto”, “por isso” ou “logo”. Antes de trocar, identifique o sentido.\n\n**Repetição sem progressão.** Cada segmento precisa acrescentar informação nova. Repetir a mesma ideia com outras palavras faz o texto girar em torno de si mesmo, salvo quando a repetição é enfática.\n\n**Continuidade gramatical.** Em questões de continuidade textual, a banca costuma pedir a sequência “coesa, coerente e gramaticalmente correta”. Elimine primeiro as alternativas com erro de regência, crase, concordância, pronome ou pontuação; costuma ser o caminho mais rápido.',
      },
    ],
    fontes: [PESTANA_35],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-registros',
    titulo: 'Registros e variações linguísticas',
    resumo: 'A língua varia por tempo, região, grupo social, situação e canal (fala ou escrita). Em prova, “certo” é o que segue a norma culta, e a banca cobra essas regras em acentuação, ortografia, classes gramaticais, pontuação, concordância, regência e crase.',
    blocos: [
      {
        tipo: 'texto',
        texto: 'Não existe erro de português no sentido de língua “estragada”: a língua muda o tempo todo, e todo falante se comunica com o mesmo código. O que existe é adequação ou inadequação à situação. Há falha real só quando a mensagem não estabelece vínculo comunicativo.\n\nJá o certo e o errado que cai em concurso é convencional: é **certo** o que segue a **norma culta** (a língua-padrão descrita nas gramáticas normativas) e **errado** o que desobedece a essas regras. Fora da prova, o registro coloquial é natural e legítimo; na prova, a norma culta é o padrão cobrado.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Variações linguísticas',
          colunas: ['Variação', 'O que a define', 'Exemplo'],
          linhas: [
            ['Diacrônica', 'o tempo: a língua muda ao longo da história', 'vitrola, bonde e lambreta, termos pouco usados hoje'],
            ['Diatópica', 'a região: sotaque, vocabulário e construções', '“aipim”, “macaxeira” e “mandioca” nomeiam a mesma planta em regiões diferentes'],
            ['Diastrática', 'o grupo social ou a profissão: gírias, jargões e tecnoletos', 'o juridiquês e o economês são tecnoletos; uma gíria como “maneiro” indica grupo social'],
            ['Diafásica', 'a situação e o grau de formalidade com o interlocutor', 'a mesma pessoa fala de um jeito com amigos e de outro numa entrevista de emprego'],
            ['Diamésica', 'o canal: fala ou escrita', 'uma palestra oral pode ser formal; um bilhete pode ser informal'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto: 'O **registro** é a variedade da língua escolhida conforme a situação social. Ele pode ser **culto** (planejado, preciso, segundo a norma-padrão) ou **coloquial** (espontâneo, do dia a dia).\n\nRegistro culto e coloquial não coincidem com fala e escrita: há registro coloquial escrito (mensagem de aplicativo) e registro culto falado (discurso formal).\n\nA norma culta é um conjunto de regras gramaticais baseadas no uso formal da língua por falantes escolarizados. É o alvo das provas de correção gramatical.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Língua falada x língua escrita',
          colunas: ['Traço', 'Língua falada', 'Língua escrita'],
          linhas: [
            ['Planejamento', 'espontânea, com pouco planejamento', 'planejada e mais precisa'],
            ['Vocabulário', 'mais repetitivo, com clichês e expressões idiomáticas', 'maior seleção de palavras'],
            ['Marcadores', 'muitos marcadores como “né”, “tipo”, “então”, “viu?”', 'quase ausentes'],
            ['Estrutura', 'frases curtas, anacolutos e truncamentos (“pra”, “tá”)', 'frases mais completas e maior vigilância gramatical'],
            ['Finalidade', 'conversação, debates e seminários', 'textos utilitários (contratos, ofícios, notícias) e literatura'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'Acentuação: “tem” e “vem” no singular não levam acento; no plural, “têm” e “vêm” levam circunflexo diferencial (eles têm, eles vêm).',
          'Os porquês: “por que” (pergunta ou equivale a “por qual razão”); “porque” (equivale a “pois”, explica); “porquê” (substantivo, com artigo ou determinante: “o porquê”); “por quê” (no fim da frase).',
          'Ortografia atual (Acordo Ortográfico de 1990, em vigor no Brasil desde 2009): sem trema e sem acento em ditongos abertos de paroxítonas (“ideia”, “assembleia”); “voo” sem acento.',
          'Classes gramaticais: no futuro do subjuntivo o verbo muda (“se alguém fizer”, e não “fazer”); no futuro do presente e do pretérito, sem palavra atrativa, a norma culta usa a mesóclise (“ser-lhe-ei grato”, e não “serei-lhe”).',
          'Pontuação: não se separa o sujeito do verbo com vírgula.',
          'Concordância: “haver”, no sentido de existir, é impessoal e fica no singular (“deve haver vagas”); se houver locução, o auxiliar também fica no singular.',
          'Regência: “perdoar” pede a preposição “a” quando o complemento é pessoa (“perdoou a alguém”); com artigo feminino, há crase (“perdoou à prima”).',
          'Crase: ocorre na junção de preposição “a” com artigo feminino, como em “remeti o documento à diretora”.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Concordância com haver',
        enunciado: 'Reescreva conforme o registro culto: “Devem haver pelo menos três vagas disponíveis para o cargo.”',
        resolucao: '“Haver”, no sentido de existir, é impessoal e fica sempre na 3ª pessoa do singular. Como “deve haver” é uma locução verbal, o auxiliar também vai para o singular. Forma correta: “Deve haver pelo menos três vagas disponíveis para o cargo.”',
      },
      {
        tipo: 'atencao',
        texto: '**Uniformidade de tratamento.** Se o texto começa com “tu”, verbos e pronomes devem seguir essa pessoa até o fim. Misturar “tu” e “você” no mesmo discurso quebra a uniformidade e costuma aparecer como erro ou incoerência.\n\n**Falada não é sinônimo de coloquial; escrita não é sinônimo de erudição.** Um seminário formal é oral e pode seguir a norma culta; uma crônica pode usar linguagem coloquial de propósito.\n\n**Situação antes do julgamento.** Antes de julgar uma frase como adequada ou não, identifique a situação (formal ou informal). Um desvio natural numa conversa entre amigos pode estar errado num requerimento.',
      },
    ],
    fontes: [PESTANA_36],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-reescrita',
    titulo: 'Reescritura de frases',
    resumo: 'Reescrever é dizer de outro modo sem mudar o sentido e sem criar erro. A banca cobra a equivalência entre locuções e palavras, a nominalização, a transformação de orações reduzidas e a troca de pronomes relativos e conectivos, sempre com checagem de sentido e de gramática.',
    blocos: [
      {
        tipo: 'texto',
        texto: 'Paráfrase é dizer algo de outro modo, mantendo o sentido. Nas provas, o enunciado pergunta se a reescritura **mantém** ou **altera** o sentido e se continua **correta**. Para cada alternativa, faça duas checagens: o sentido foi preservado? A gramática foi mantida (regência, concordância, crase, pontuação)?\n\nEntre as dezenas de formas de parafrasear, os casos mais cobrados são: inversão de termos, equivalência de locuções e palavras, verbos e advérbios, sinônimos, substituição de substantivos por pronomes, nominalização, orações reduzidas e desenvolvidas, pronomes relativos e demonstrativos, paralelismo e relação de causa e consequência.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Equivalência entre locuções e palavras',
          colunas: ['Tipo de locução', 'Equivalente', 'Exemplo'],
          linhas: [
            ['Adjetiva (preposição + substantivo)', 'adjetivo', '“jogada de mestre” = “jogada magistral”'],
            ['Verbal (auxiliar + verbo principal)', 'verbo simples', '“estavam trabalhando” = “trabalhavam”'],
            ['Adverbial', 'advérbio', '“de repente” = “repentinamente”; “de seis em seis meses” = “semestralmente”'],
            ['Prepositiva (termina em preposição)', 'preposição', '“a fim de” = “para”; “acerca de” = “sobre”'],
            ['Conjuntiva', 'conjunção', '“ainda que” = “embora”; “desde que” (condição) = “se”'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Locução prepositiva de finalidade',
        enunciado: 'Qual substituição mantém o sentido de “Estudei muito a fim de ser aprovado”? (a) Embora eu tenha sido aprovado. (b) Para ser aprovado. (c) Porque fui aprovado.',
        resolucao: '“A fim de” é locução prepositiva de finalidade e equivale a “para”. “Embora” indica concessão e “porque” indica causa, e ambos alteram o sentido. Gabarito: (b).',
      },
      {
        tipo: 'lista',
        itens: [
          'Mudança de posição: inverter termos pode não alterar o sentido, mas advérbios, adjetivos e palavras denotativas (só, apenas, até, já) mudam o sentido quando deslocados. “Apenas os aprovados receberam a nota” não significa o mesmo que “Os aprovados receberam apenas a nota”.',
          'Verbo e advérbio: “parece” = “aparentemente”; “pode” = “possivelmente”; “precisa” = “necessariamente”; “costuma” = “geralmente”.',
          'Sinônimos e hiperônimos/hipônimos: sinônimos mantêm o sentido; hiperônimo e hipônimo só são equivalentes quando não há perda de precisão.',
          'Substituição de substantivos por pronomes: o pronome deve retomar exatamente o referente. Em “João e Pedro passaram, mas nenhum ficou satisfeito”, “nenhum” retoma “João e Pedro”.',
          'Pronomes relativos e demonstrativos: “que” e “o qual” se substituem, mas “o qual” flexiona e aparece depois de preposição. “O lugar em que estive” = “o lugar no qual estive” = “o lugar onde estive”. Os demonstrativos “o, a, os, as” antes de “que” ou “de” podem virar “aquele(s)”, “aquela(s)”, “isso” ou “aquilo”.',
          'Paralelismo com termos preposicionados: são corretas “direito a saúde, educação e segurança”, “direito a saúde, a educação e a segurança”, “direito à saúde, educação e segurança” e “direito à saúde, à educação e à segurança”. Misturar as formas quebra o paralelismo.',
          'Causa e consequência: a relação pode vir sem conectivo (justaposição) ou com conectivo: conclusivos (portanto, logo, por isso), causais (porque, como, visto que, já que), consecutivos (de modo que, tanto que) e preposições (devido a, graças a, em razão de).',
          'Redução de orações: a oração adjetiva pode virar adjetivo, como em “O aluno que é inteligente passou” = “O aluno inteligente passou”.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Nominalização: verbo que vira substantivo (menos verbos, mais concisão)',
          colunas: ['Verbo', 'Nome', 'Tipo de derivação'],
          linhas: [
            ['fabricar', 'fabricação', 'sufixal (-ção)'],
            ['ceder', 'cessão', 'sufixal (-são)'],
            ['chegar', 'chegada', 'sufixal (-da)'],
            ['conhecer', 'conhecimento', 'sufixal (-mento)'],
            ['tolerar', 'tolerância', 'sufixal (-ância)'],
            ['cantar', 'canto', 'regressiva (retira a terminação do verbo)'],
            ['jantar', 'janta', 'regressiva'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto: '**Oração reduzida** tem verbo no infinitivo, gerúndio ou particípio, muitas vezes iniciada por preposição. **Oração desenvolvida** tem verbo conjugado, normalmente introduzido por conjunção ou pronome relativo.\n\nPara transformar uma reduzida em desenvolvida: (1) troque a preposição por uma conjunção de sentido equivalente; (2) conjugue o verbo com a correlação adequada, lembrando que o futuro do pretérito pede o pretérito imperfeito do subjuntivo (“seria importante que ajudassem”) e o presente pede o presente do subjuntivo; (3) ajuste a voz (ativa ou passiva) e a concordância ao novo sujeito.\n\nExemplo: “Ela estuda muito para passar na prova” = “Ela estuda muito para que passe na prova”.',
      },
      {
        tipo: 'atencao',
        texto: '**Pronome relativo com preposição.** “Que” e “o qual” são trocáveis, mas, depois de preposição, a forma precisa acompanhar a regência: “a coordenadora a que devo o emprego” = “à qual devo o emprego” (crase de “a” + “a qual”). “Onde” só se usa para lugar.\n\n**Desde que.** Equivale a “se” apenas quando indica condição (“Desde que vocês entendam” = “Se vocês entenderem”). Com sentido de tempo, não há essa troca.\n\n**Causa e consequência.** “Porque” antecede a causa e “portanto” antecede a consequência. Ao trocar um pelo outro, a ordem das orações precisa ser invertida.\n\n**Sentido intacto?** Antes de aceitar uma reescritura, confirme se a troca não criou ambiguidade, não alterou quantificadores (“todos” x “alguns”) e não quebrou a regência do novo termo.',
      },
    ],
    fontes: [PESTANA_37],
    atualizadoEm: HOJE,
  },
];
