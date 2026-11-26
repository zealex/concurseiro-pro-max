import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (caps. 5 e 6).';
const HOJE = '2026-11-26';

export const RESUMOS_LIVRO_R04: ResumoTema[] = [
  {
    temaId: 'lp-classes',
    titulo: 'Morfologia e formação de palavras',
    resumo:
      'A banca cobra a diferença entre vocábulo e palavra, as dez classes gramaticais, a análise mórfica (morfemas) e, sobretudo, os processos de formação, com destaque para derivação e composição, além das pegadinhas de parassíntese e de hífen com prefixos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **morfologia** estuda a forma das palavras: sua estrutura, seu processo de formação e as classes em que se dividem. Ela começa pela diferença entre **vocábulo** e **palavra**. Toda palavra é um vocábulo, mas nem todo vocábulo é palavra: a palavra tem **significação própria** e **existência isolada**, podendo ser usada sozinha numa resposta. Os vocábulos **dependentes** (artigos, preposições, conjunções e pronomes átonos) só se sustentam junto de outra forma, enquanto as **formas presas** (afixos, radicais, desinências e vogal temática) nunca aparecem isoladas e entram na composição das palavras.\n\nA análise sintática depende de identificar bem a classe de cada palavra. A banca costuma cobrar com mais frequência **pronome, verbo e conjunção**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'As dez classes gramaticais e a variação',
          colunas: ['Classe', 'Variação', 'Exemplo'],
          linhas: [
            ['Substantivo', 'Variável (gênero e número)', 'professora / professoras'],
            ['Adjetivo', 'Variável (gênero e número)', 'cansado / cansada'],
            ['Artigo', 'Variável (gênero e número)', 'o / as'],
            ['Numeral', 'Variável (gênero e número)', 'terceiro / terceiras'],
            ['Pronome', 'Variável (pessoa, gênero e número)', 'minha / minhas'],
            ['Verbo', 'Variável (modo, tempo, número e pessoa)', 'cantamos'],
            ['Advérbio', 'Invariável', 'ontem, aqui'],
            ['Preposição', 'Invariável', 'para, com'],
            ['Conjunção', 'Invariável', 'porque, mas'],
            ['Interjeição', 'Invariável', 'Ufa!, Psiu!'],
            ['Palavras denotativas (à parte)', 'Invariável', 'inclusive, até, só'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Morfema**: menor parte significativa da palavra. Pode ser lexical (o radical), derivacional (os afixos) ou flexional (as desinências).',
          '**Radical** (morfema lexical): carrega o sentido básico e é a base de que nascem outras palavras. Palavras da mesma família (cognatas) compartilham o radical, que pode mudar de forma, como em fazer, faço e fiz.',
          '**Prefixo**: vem antes do radical e pode mudar o sentido, como o in- de infeliz (negação) e o de infiltrar (movimento para dentro).',
          '**Sufixo**: vem depois do radical e costuma mudar a classe, como em tristeza (de triste, adjetivo para substantivo). Uma mesma palavra pode ter mais de um afixo.',
          '**Desinências** (flexionais): não criam palavra nova, apenas flexionam. Nos nomes, indicam gênero (o -a do feminino é a desinência clara; o -o do masculino divide opiniões, pois alguns o veem como desinência e outros como vogal temática) e número (-s). Nos verbos, indicam modo, tempo, número e pessoa.',
          '**Vogal temática**: vogal logo após o radical, que forma o tema. Nos nomes, são as vogais a, e, o átonas finais (casa, leve, porto); nos verbos, a, e, i marcam a 1ª, 2ª e 3ª conjugação.',
          '**Vogal ou consoante de ligação**: não tem significado; só favorece a pronúncia, como o e de cafeteira.',
          '**Alomorfia**: variação de um mesmo morfema, sem mudança de sentido, para facilitar a pronúncia ou preservar a origem.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Processos de formação de palavras',
          colunas: ['Processo', 'Como ocorre', 'Exemplo'],
          linhas: [
            ['Derivação prefixal', 'Prefixo acrescentado à palavra primitiva ou já formada', 'in- + feliz = infeliz'],
            ['Derivação sufixal', 'Sufixo acrescentado à base, muitas vezes mudando a classe', 'Brasil + -eiro = brasileiro'],
            ['Derivação parassintética', 'Prefixo e sufixo entram juntos; sem um deles, a palavra não existe', 'en- + tarde + -ecer = entardecer'],
            ['Derivação regressiva', 'O verbo perde a terminação e dá origem a substantivo de ação', 'lutar > luta'],
            ['Derivação imprópria (conversão)', 'Muda só a classe, sem afixo', 'o jantar (substantivo) / vou jantar (verbo)'],
            ['Composição por justaposição', 'Radicais unidos sem perda de elementos, geralmente com hífen', 'couve-flor'],
            ['Composição por aglutinação', 'Radicais unidos com perda de elementos, sem hífen', 'pernalta (perna + alta)'],
            ['Recomposição', 'Radical que traz o sentido de uma palavra inteira (pseudoprefixo)', 'ecoturismo (eco, de ecologia)'],
            ['Onomatopeia', 'Palavra que imita um som', 'cocoricó'],
            ['Abreviação (redução)', 'Corte de parte da palavra, mantendo o sentido', 'foto (de fotografia)'],
            ['Siglonimização', 'Sigla formada pelas iniciais de uma expressão', 'ONU (Organização das Nações Unidas)'],
            ['Hibridismo', 'Morfemas de línguas diferentes', 'caju (tupi) + -eiro (latim)'],
            ['Combinação (palavra-valise)', 'Mistura de partes de duas palavras, geralmente informal', 'pizza + hambúrguer = pizzaburguer'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Análise mórfica de um verbo',
        enunciado: 'Faça a análise mórfica da forma verbal “cantaríamos”.',
        resolucao:
          'cant- (radical) + -a- (vogal temática da 1ª conjugação) + -ría- (desinência modo-temporal do futuro do pretérito do indicativo) + -mos (desinência número-pessoal da 1ª pessoa do plural). Não há afixo: a forma é flexionada, não derivada.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Mesma palavra, mais de um rótulo.** Em “reabertura”, há quem veja a sequência abrir > reabrir (derivação prefixal) > reabertura (derivação sufixal) e quem considere apenas o último afixo acrescentado. Leia o enunciado para ver o critério exigido (palavra primitiva ou último elemento) e, na dúvida, marque a alternativa mais bem fundamentada.\n\n**Parassíntese.** Retire um dos afixos: se a palavra que sobra não existe com o mesmo sentido, houve parassíntese (em “entardecer”, nem “entarde” nem “tardecer” existem). Palavras em -mento nunca são parassintéticas, pois -mento é sufixo que forma substantivo a partir de verbo (desmatar + mento = desmatamento). Em -ado, se a forma é particípio de verbo, é flexão, não sufixo.\n\n**Sincronia.** A análise de prova é feita na língua de hoje. Um prefixo antigo que já não se separa do radical não deve ser tratado como afixo, salvo se a questão pedir a origem da palavra (análise diacrônica).',
      },
      {
        tipo: 'atencao',
        texto:
          '**Hífen com prefixos** (Acordo Ortográfico de 1990, em vigor no Brasil desde 2009). O hífen é usado antes de h (anti-higiênico) e quando a letra final do prefixo se repete no início da palavra seguinte (inter-regional). Fora desses casos, o prefixo se une à palavra, como em extraoficial e autoescola. Compostos formados por palavras, como bem-vindo, mantêm o hífen. Na mesma linha, bem-me-quer leva hífen, mas malmequer não.\n\n**Classe pelo contexto.** A forma não define a classe. Em “o jantar estava pronto”, jantar é substantivo; em “vamos jantar cedo”, é verbo. Classifique pela função que a palavra exerce no enunciado.',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
