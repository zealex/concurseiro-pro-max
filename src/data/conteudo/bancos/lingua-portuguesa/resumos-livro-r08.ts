import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (caps. 13 a 16).';
const HOJE = '2026-11-26';

export const RESUMOS_LIVRO_R08: ResumoTema[] = [
  {
    temaId: 'lp-invariaveis',
    titulo: 'Advérbio, preposição, conjunção e interjeição',
    resumo:
      'A banca cobra a identificação de cada classe pela função (o que modifica, liga ou exprime) e pelo valor de sentido que a palavra assume no contexto. Como as quatro classes são invariáveis, o erro típico está em confundir palavras que mudam de classe conforme a função, como que, mas, como, só e nem.',
    blocos: [
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'As quatro classes em síntese',
          colunas: ['Classe', 'Função principal', 'Como reconhecer', 'Exemplo de elaboração própria'],
          linhas: [
            [
              'Advérbio',
              'Modifica verbo, adjetivo, outro advérbio ou oração inteira',
              'Responde a perguntas como, quando, onde ou quanto, ou expressa opinião sobre o que foi dito',
              'O professor explicou bem a lição, infelizmente sem tempo para exercícios.',
            ],
            [
              'Preposição',
              'Liga um termo a outro, subordinando o segundo ao primeiro',
              'Vem antes de um termo que completa o sentido de um verbo, de um nome ou de um adjetivo',
              'Dependemos de boa vontade para vencer a crise.',
            ],
            [
              'Conjunção',
              'Liga orações, termos ou períodos e explicita a relação lógica entre eles',
              'Faz a ponte entre duas partes do texto, indicando adição, oposição, causa, condição e assim por diante',
              'Estudou pouco, mas foi aprovado.',
            ],
            [
              'Interjeição',
              'Exprime emoção, reação ou apelo, sem função sintática',
              'Costuma vir seguida de ponto de exclamação ou de entonação marcada',
              'Puxa! Esqueci o caderno em casa.',
            ],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Advérbio.** Amplia ou restringe o sentido de um verbo, de um adjetivo, de outro advérbio ou de uma oração inteira. Pode indicar circunstâncias como modo, lugar, tempo, intensidade, afirmação, negação, dúvida, causa, meio, assunto ou companhia. A NGB reconhece sete circunstâncias básicas (afirmação, negação, modo, tempo, lugar, dúvida e intensidade); as demais aparecem quase sempre em locuções adverbiais, grupos de palavras com valor de advérbio, como de repente, às vezes ou com amor.\n\nSintaticamente, o advérbio funciona como **adjunto adverbial**. Morfologicamente, é **invariável**: pela visão tradicional, que é a mais cobrada, não há advérbio no plural nem no feminino. Alguns dicionaristas admitem variação em palavras como todo e alerta, mas a banca costuma cobrar a forma invariável. Os terminados em **-mente** vêm de adjetivos, geralmente no feminino, e nem sempre indicam modo: podem marcar tempo (semanalmente), dúvida (provavelmente) ou opinião (lamentavelmente). A mesma palavra muda de valor conforme o contexto: "bem" é de modo em "Ela canta bem" e de intensidade em "A sala está bem arejada".',
      },
      {
        tipo: 'texto',
        texto:
          '**Preposição.** Palavra invariável que liga dois termos e, na maioria das vezes, subordina o segundo ao primeiro. Nunca exerce função sintática: participa da transitividade de verbos, nomes e adjetivos, introduzindo complementos, ou constrói adjuntos. As **essenciais** são a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob e sobre; per e trás sobrevivem apenas em expressões fixas, como por trás. As **acidentais** são palavras de outras classes que atuam como preposição em certo contexto, como conforme, durante, mediante, salvo, exceto, afora, senão, inclusive e segundo.\n\nO ponto mais cobrado é a distinção entre valor **relacional**, exigido por verbo, nome ou adjetivo ("gostar de", "favorável a", "diferente de"), e valor **nocional**, que indica tempo, lugar, causa, meio ou modo e não é exigido por nenhum termo. Se a preposição for relacional, o termo que ela introduz é complemento; se for nocional, é adjunto. Também entram as **locuções prepositivas**, como em vez de, a fim de, devido a, de acordo com e em face de, todas terminadas em preposição.',
      },
      {
        tipo: 'texto',
        texto:
          '**Conjunção.** Palavra invariável que liga partes do texto (palavras, orações, períodos e parágrafos) e explicita a relação lógica entre elas. Por isso é também chamada de conector ou conectivo, e tem papel decisivo na coesão textual. Não exerce função sintática. As **coordenativas** ligam partes sintaticamente independentes; as **subordinativas** ligam uma oração dependente a outra que ela complementa ou modifica.\n\nAlgumas conjunções são **correlatas** e aparecem em dupla (não só... mas também; ora... ora; seja... seja). As únicas que não carregam sentido próprio são as **integrantes** (que e se), que apenas introduzem a oração completiva. Muitas conjunções podem mudar de posição na frase, mas o mas não se desloca, ao contrário de porém, contudo e todavia.',
      },
      {
        tipo: 'lista',
        itens: [
          'Coordenativas aditivas: e, nem, não só... mas também, tanto... quanto.',
          'Coordenativas adversativas: mas, porém, contudo, todavia, entretanto, no entanto, não obstante.',
          'Coordenativas alternativas: ou, ora... ora, seja... seja, quer... quer.',
          'Coordenativas conclusivas: portanto, logo, pois (depois do verbo ou entre vírgulas), por conseguinte, em vista disso.',
          'Coordenativas explicativas: porque, que, porquanto, pois (antes do verbo).',
          'Subordinativas integrantes: que e se (sem sentido próprio).',
          'Subordinativas causais: porque, como, visto que, já que, uma vez que, dado que, na medida em que.',
          'Subordinativas consecutivas: tão... que, tanto... que, de modo que, de sorte que.',
          'Subordinativas concessivas: embora, ainda que, posto que, mesmo que, apesar de que.',
          'Subordinativas condicionais: se, caso, desde que (com subjuntivo), a menos que, contanto que, salvo se.',
          'Subordinativas temporais: quando, enquanto, logo que, assim que, depois que, sempre que, até que.',
          'Subordinativas proporcionais: à medida que, à proporção que, ao passo que, quanto mais... mais.',
          'Subordinativas comparativas: como, qual, assim como, tal qual, mais/menos/melhor/pior... do que.',
          'Subordinativas conformativas: conforme, segundo, consoante, como (no sentido de conforme).',
          'Subordinativas finais: para que, a fim de que, de modo que (no sentido de para que).',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Interjeição.** Palavra invariável, sem função sintática, que exprime emoção, reação, apelo ou ordem. É identificada sobretudo pela entonação e pelo ponto de exclamação. Pode ser uma palavra comum usada em tom exclamativo (Silêncio!, Cuidado!, Bravo!), uma locução interjetiva (Meu Deus!, Graças a Deus!, Pelo amor de Deus!) ou uma onomatopeia (Bum!, Tibum!). Palavrões também são interjeições.\n\nVale distinguir: "ó" serve para apelo e chamamento ("Ó Senhor, ajudai-nos!"), enquanto "oh" exprime emoção. Tomara e oxalá levam o verbo ao subjuntivo ("Oxalá ele chegue cedo"). A classificação se faz pelo valor no contexto: alegria, surpresa, impaciência, saudação, dor, desejo etc.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas mais exploradas.**\n\n1) A classe se define pela função na frase, não pela forma. Que, mas, como, só, nem, mais e logo mudam de classe conforme o contexto. Só é advérbio de exclusão quando modifica verbo, adjetivo ou advérbio; quando equivale a "sozinho", é adjetivo.\n\n2) Locuções como de repente, às vezes e com efeito formam uma unidade: a banca cobra a classe do grupo inteiro. Logo é conclusiva em "Faltou muito às aulas, logo perdeu o prazo", mas advérbio de tempo em "Chegue logo".\n\n3) Não obstante é adversativa com verbo no indicativo ("Ele estudou pouco; não obstante, foi aprovado") e concessiva com verbo no subjuntivo ("Não obstante esteja cansado, ele treina todos os dias"). Ainda assim e no entanto também têm valor adversativo.\n\n4) Desde que é condicional com verbo no subjuntivo ("Desde que estudes, passarás") e temporal com verbo no indicativo ("Desde que se mudou, não nos falamos"). Posto que e embora são concessivas.\n\n5) Na medida em que é causal ("Na medida em que não estudou, reprovou"). À medida que é proporcional ("À medida que o tempo passa, a dor diminui"). Na medida que não existe na norma culta.\n\n6) Sendo que, usado no lugar de e ou de mas, é visto como coloquial pela maioria dos gramáticos, e a banca costuma cobrar como inadequado. Uma minoria o defende.\n\n7) Depois de preposição essencial, o pronome é oblíquo tônico ("entre mim e você"); depois de preposição acidental, é do caso reto ("menos tu").\n\n8) Porque (conjunção, uma só palavra) não se confunde com por que (pergunta ou "por que motivo"), por quê (no fim da frase) e porquê (substantivo).\n\n9) Frente a e face a são evitadas pelo Manual de Redação da Presidência, que prefere em face de ou diante de. Algumas provas já aceitaram frente a, por isso, se a questão cobrar a forma oficial, prefira diante de.',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
