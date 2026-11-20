import type { ResumoTema } from '../../../types';
import { RESUMOS_GRAMATICA_1 } from './resumos-gramatica-1';
import { RESUMOS_GRAMATICA_2 } from './resumos-gramatica-2';

const BECHARA = 'BECHARA, Evanildo. Moderna Gramática Portuguesa (obra de referência).';
const CUNHA_CINTRA = 'CUNHA, Celso; CINTRA, Lindley. Nova Gramática do Português Contemporâneo (obra de referência).';
const MANUAL =
  'BRASIL. Presidência da República. Manual de Redação da Presidência da República. 3ª ed., revista, atualizada e ampliada. Brasília, 2018 — https://www.gov.br/pt-br/servicos/consultar-o-manual-de-redacao-da-presidencia-da-republica';
const DECRETO_9758 = 'Decreto nº 9.758, de 11 de abril de 2019 (formas de tratamento na administração pública federal) — https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/d9758.htm';
const HOJE = '2026-11-20';

/** Resumos dos temas de leitura e produção de texto + Redação Oficial. */
const RESUMOS_TEXTO: ResumoTema[] = [
  {
    temaId: 'lp-interpretacao',
    titulo: 'Compreensão e interpretação de textos',
    resumo:
      'A banca cobra a diferença entre o que o texto diz (compreensão) e o que se pode concluir dele (inferência), além de ideia central, pressupostos e subentendidos. Os distratores quase sempre extrapolam, reduzem ou contradizem o texto.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Compreender** é localizar o que está escrito: a informação está na superfície do texto, muitas vezes dita com outras palavras (paráfrase). **Interpretar** é concluir algo que não está escrito, mas decorre necessariamente do que está: é a **inferência**.\n\nO comando da questão indica o que se pede. “Segundo o texto”, “de acordo com o autor” e “o texto afirma” pedem compreensão. “Infere-se”, “depreende-se”, “conclui-se” e “o texto permite concluir” pedem inferência — mas uma inferência **autorizada pelo texto**, não pela sua opinião ou pelo seu conhecimento de medicina.\n\nA **ideia central** (tese) costuma estar no primeiro ou no último parágrafo e é retomada ao longo do texto. Os demais parágrafos trazem argumentos, exemplos e ressalvas.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Os três erros que viram alternativa',
          colunas: ['Erro', 'O que a alternativa faz', 'Como reconhecer'],
          linhas: [
            ['Extrapolação', 'Vai além do texto: acrescenta dado, causa ou juízo de valor', 'Você precisa de informação externa para concordar com ela'],
            ['Redução', 'Toma a parte pelo todo', 'Vale para um trecho, mas é apresentada como ideia central do texto'],
            ['Contradição', 'Diz o oposto do texto', 'Negação invertida ou quantificador trocado (todos × alguns × nenhum)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Pressuposto**: informação implícita marcada por palavras do próprio texto. “Ele **voltou a** atender” pressupõe que já atendeu e parou; “**deixou de** fumar” pressupõe que fumava; “**ainda** está internado” pressupõe que já estava.',
          '**Subentendido**: insinuação que depende do contexto (“Está frio aqui”, dito a quem abriu a janela). É de responsabilidade do leitor e raramente é a resposta “segura”.',
          '**Quantificadores**: “nem todo” não é “nenhum”; “muitos” não é “todos”; “alguns” não é “a maioria”.',
          '**Modalizadores**: “talvez”, “é possível”, “pode” indicam hipótese; a alternativa que transforma hipótese em certeza (“comprova”, “sempre”) extrapola.',
          '**Ironia**: o sentido é o contrário do literal; perceba pelo exagero e pelo contraste com o contexto (como no narrador de Machado de Assis).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — inferência × extrapolação',
        enunciado:
          'Trecho: “Estudos observacionais são valiosos para levantar hipóteses, mas suas conclusões exigem cautela.” Item: “O autor considera inúteis os estudos observacionais.” Certo ou errado?',
        resolucao:
          'Errado. O texto diz que os estudos são “valiosos” e só pede cautela nas conclusões. “Inúteis” contradiz o trecho. Se o item dissesse “o autor reconhece limites nesses estudos”, estaria certo — é inferência autorizada por “exigem cautela”.',
      },
      {
        tipo: 'atencao',
        texto:
          'Palavras absolutas na alternativa (**sempre, nunca, apenas, exclusivamente, todos, comprova**) são sinal de alerta para extrapolação, mas não são erro automático: volte ao trecho e confira. E nunca responda com o que você sabe do assunto — a banca quer o que **o texto** sustenta.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Leia o comando antes do texto e identifique se ele pede compreensão ou inferência.',
          'Leia o texto marcando a tese e os conectores (mas, portanto, embora).',
          'Para cada alternativa, ache o trecho que a confirma ou derruba.',
          'Elimine extrapolação, redução e contradição; sobra a correta.',
        ],
      },
    ],
    fontes: [CUNHA_CINTRA, BECHARA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-tipologia',
    titulo: 'Tipologia e gêneros textuais',
    resumo:
      'A banca pede o tipo textual predominante (narrativo, descritivo, expositivo, argumentativo, injuntivo) ou o gênero (notícia, editorial, laudo, ofício) e as marcas linguísticas que os identificam.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Tipo textual** é a estrutura, o modo de organizar a linguagem: narrar, descrever, expor, argumentar, instruir. São poucos e definidos por marcas linguísticas. **Gênero textual** é o texto concreto que circula na sociedade com função, suporte e formato reconhecíveis: notícia, crônica, editorial, bula, receita, ofício, laudo, ata.\n\nUm mesmo gênero combina vários tipos. Uma notícia narra e expõe; um laudo descreve, expõe e conclui; um romance narra, descreve e dialoga. Por isso as questões falam em tipo **predominante**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tipos textuais e suas marcas',
          colunas: ['Tipo', 'Marcas linguísticas', 'Gêneros típicos'],
          linhas: [
            ['Narrativo', 'Fatos em sequência temporal, narrador, personagens; pretérito perfeito; discurso direto ou indireto', 'Conto, romance, crônica narrativa, notícia, relato'],
            ['Descritivo', 'Características de seres e lugares; adjetivos; pretérito imperfeito ou presente; ações simultâneas, sem progressão', 'Retrato, trechos de romance, laudo (parte descritiva), classificado'],
            ['Expositivo (dissertativo-expositivo)', 'Explica um tema de forma objetiva, sem defender tese; presente atemporal; definições e dados', 'Verbete, aula, artigo de divulgação científica'],
            ['Argumentativo (dissertativo-argumentativo)', 'Tese + argumentos + conclusão; conectores lógicos; modalizadores', 'Editorial, artigo de opinião, redação de concurso, parecer'],
            ['Injuntivo (instrucional)', 'Orienta a ação do leitor; imperativo ou infinitivo; passos em sequência', 'Receita, manual, bula (modo de usar), edital (instruções)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Notícia**: fato recente, 3ª pessoa, linguagem objetiva, atribuição à fonte (“informou a Secretaria”).',
          '**Editorial**: opinião do veículo, sem assinatura; **artigo de opinião**: opinião assinada.',
          '**Crônica**: texto curto sobre o cotidiano, tom leve ou reflexivo, pode narrar ou argumentar.',
          '**Laudo e parecer**: linguagem técnica e impessoal; descrevem, discutem e concluem com fundamento.',
          '**Ofício e e-mail oficial**: gêneros da redação oficial (veja o tema Redação Oficial).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — tipo predominante',
        enunciado:
          '“Das portas surgiam cabeças congestionadas de sono; ouviam-se amplos bocejos; o cheiro quente do café aquecia [...]” (Aluísio Azevedo, O Cortiço). Qual o tipo predominante?',
        resolucao:
          'Descritivo. Os verbos no pretérito imperfeito apresentam ações simultâneas, como num quadro, e acumulam percepções sensoriais. Não há progressão de acontecimentos (narração), tese (argumentação) nem instrução.',
      },
      {
        tipo: 'atencao',
        texto:
          'Não confunda **expor** com **argumentar**: o texto expositivo informa sem tomar partido; o argumentativo defende um ponto de vista. Pista: conectores conclusivos e adversativos a serviço de uma tese (“portanto”, “no entanto”), modalizadores (“é inaceitável”, “é preciso”) e conclusão propositiva indicam argumentação. Um exemplo narrado dentro de um artigo de opinião não o torna narrativo.',
      },
    ],
    fontes: [CUNHA_CINTRA, BECHARA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-coesao',
    titulo: 'Coesão, coerência e conectores',
    resumo:
      'A banca cobra o referente de pronomes e expressões (quem retoma quem), o valor semântico dos conectores e a troca de um conector por outro sem mudar o sentido nem a correção.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Coesão** é a ligação entre as partes do texto, feita por marcas linguísticas. **Coerência** é a lógica do sentido: um texto pode ser coeso e incoerente (“Choveu muito, portanto o chão ficou seco”).\n\nA **coesão referencial** retoma ou antecipa termos: pronomes (ele, o, lhe, que, cujo), demonstrativos, sinônimos, hiperônimos (“o médico” → “o profissional”), numerais e a **elipse** (omissão de termo recuperável). Retomar o que já foi dito é **anáfora**; anunciar o que virá é **catáfora**.\n\nA **coesão sequencial** liga orações e parágrafos por **conectores** (conjunções, advérbios, locuções), que expressam relações lógicas.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Conectores por relação lógica',
          colunas: ['Relação', 'Conectores', 'Observação'],
          linhas: [
            ['Adição', 'e, nem, não só... mas também, além disso', '“Nem” já contém negação: evite “e nem” (salvo ênfase)'],
            ['Oposição (adversativa)', 'mas, porém, contudo, todavia, entretanto, no entanto', 'Verbo no indicativo; podem vir deslocados entre vírgulas (exceto “mas”)'],
            ['Concessão', 'embora, ainda que, mesmo que, conquanto, apesar de', 'Verbo no subjuntivo (embora seja); “apesar de” + infinitivo ou substantivo'],
            ['Causa', 'porque, como (anteposto), já que, visto que, uma vez que', '“Como” causal vem antes da oração principal'],
            ['Explicação', 'pois (anteposto ao verbo), porque, que', 'Justifica ordem ou opinião: “Saia, pois vai chover”'],
            ['Conclusão', 'portanto, logo, por isso, por conseguinte, pois (posposto ao verbo)', '“Pois” conclusivo vem entre vírgulas, depois do verbo'],
            ['Condição', 'se, caso, desde que, contanto que, a menos que', '“Caso” e “desde que” (condicional) pedem subjuntivo'],
            ['Finalidade', 'para que, a fim de que, para (+ infinitivo)', 'Subjuntivo: “para que todos compreendam”'],
            ['Tempo', 'quando, assim que, logo que, desde que (+ indicativo)', '“Desde que chegou” = tempo; “desde que chegue” = condição'],
            ['Proporção', 'à medida que, à proporção que, quanto mais... (tanto) mais', 'Não confundir com “na medida em que” (= porque)'],
            ['Conformidade', 'conforme, segundo, consoante, como', '“Como determina a lei” = conforme'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Este / isto**: o que está perto de quem fala e o que ainda vai ser dito (catáfora): “O problema é **este**: faltam leitos”.',
          '**Esse / isso**: o que está perto de quem ouve e o que já foi dito (anáfora): “Faltam leitos. **Esse** é o problema”.',
          'Retomando dois termos, **este** = o mais próximo; **aquele** = o mais distante: “Médicos e enfermeiros vieram; estes (enfermeiros) organizaram, aqueles (médicos) discursaram”.',
          '**Elipse e zeugma**: “A enfermagem registra os sinais vitais; a farmácia, a dispensação” — a vírgula marca o verbo omitido.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — troca de conector',
        enunciado:
          '“O paciente foi orientado; ainda assim, recusou a internação.” Qual substituição mantém o sentido: (a) portanto; (b) no entanto; (c) porque?',
        resolucao:
          '(b). “Ainda assim” tem valor de oposição (o fato contraria a expectativa). “No entanto” é adversativo e preserva o sentido. “Portanto” indicaria conclusão (absurda aqui) e “porque”, causa.',
      },
      {
        tipo: 'atencao',
        texto:
          'Trocar conector não é só trocar sentido: veja também a **sintaxe**. “Mas” pede indicativo (“é caro, mas funciona”); “embora” pede subjuntivo (“embora seja caro, funciona”). Na reescrita, a banca adora manter o sentido e quebrar o modo verbal. E “pois” muda de valor conforme a posição: antes do verbo, explica; depois do verbo e entre vírgulas, conclui.',
      },
    ],
    fontes: [MANUAL, BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-semantica',
    titulo: 'Semântica e figuras de linguagem',
    resumo:
      'A banca cobra sentido de palavras no contexto (sinônimos, antônimos, parônimos, homônimos, polissemia), denotação e conotação e a identificação das figuras de linguagem mais comuns.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Denotação** é o sentido literal, de dicionário; **conotação** é o sentido figurado, ampliado pelo contexto (“sete horas de chumbo” = sono pesado). **Polissemia** é uma mesma palavra com vários sentidos relacionados (“a **cabeça** do paciente”, “a **cabeça** do movimento”).\n\n**Sinônimos** têm sentido semelhante; **antônimos**, sentido oposto. **Homônimos** têm a mesma pronúncia e/ou grafia e sentidos diferentes (sessão/seção/cessão; são homófonos). **Parônimos** são parecidos na forma e diferentes no sentido (eminente/iminente) — a fonte preferida das pegadinhas.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Parônimos e homônimos que caem (com versão médica)',
          colunas: ['Par', 'Sentidos', 'Exemplo'],
          linhas: [
            ['vultoso × vultuoso', 'volumoso, de grande vulto × congestionado, inchado (face)', 'quantia vultosa; face vultuosa'],
            ['eminente × iminente', 'ilustre, elevado × prestes a acontecer', 'eminente cirurgião; parada iminente'],
            ['ratificar × retificar', 'confirmar × corrigir', 'ratificou o laudo; retificou o erro'],
            ['deferir × diferir', 'conceder × adiar; ser diferente', 'deferiu o pedido; diferiu a perícia'],
            ['infringir × infligir', 'violar (lei) × aplicar (pena)', 'infringiu a norma; infligiu a sanção'],
            ['descrição × discrição', 'ato de descrever × reserva, sigilo', 'descrição da lesão; discrição com o prontuário'],
            ['mandado × mandato', 'ordem judicial × período de representação', 'mandado de segurança; mandato de conselheiro'],
            ['sessão × seção × cessão', 'reunião × divisão, setor × ato de ceder', 'sessão do conselho; seção de pediatria; cessão de servidor'],
            ['tráfego × tráfico', 'trânsito × comércio ilegal', 'tráfego intenso; tráfico de drogas'],
            ['absolver × absorver', 'inocentar × sorver', 'o réu foi absolvido; a gaze absorveu'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Figuras de linguagem mais cobradas',
          colunas: ['Figura', 'Definição', 'Exemplo'],
          linhas: [
            ['Comparação', 'Aproxima dois termos com conectivo (como, tal qual)', '“bocejos fortes como o marulhar das ondas”'],
            ['Metáfora', 'Comparação sem conectivo; um termo assume o sentido do outro', '“Aquele cirurgião é uma rocha”'],
            ['Metonímia', 'Troca por proximidade: autor pela obra, marca pelo produto, parte pelo todo', '“Leu Machado de Assis”'],
            ['Prosopopeia', 'Atribui ações humanas a seres inanimados', '“o cortiço acordava”'],
            ['Hipérbole', 'Exagero intencional', '“Chorei rios de lágrimas”'],
            ['Eufemismo', 'Suaviza ideia desagradável', '“partiu desta para melhor”'],
            ['Antítese', 'Aproxima ideias opostas', '“amplia tanto o cuidado quanto o descuido”'],
            ['Paradoxo (oxímoro)', 'Une ideias contraditórias numa mesma afirmação', '“dor que desatina sem doer”'],
            ['Ironia', 'Diz o contrário do que pensa, com intenção crítica', '“demonstrando os teoremas com cataplasmas”'],
            ['Anáfora', 'Repetição no início de frases ou versos', '“Tudo se transforma, tudo varia”'],
            ['Zeugma', 'Omissão de termo já expresso', '“mais amargo o riso, mais dolorosa a ironia”'],
            ['Catacrese', 'Metáfora cristalizada por falta de termo próprio', '“pé da mesa”, “braço da cadeira”'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — metáfora ou comparação?',
        enunciado: '“Ouviam-se amplos bocejos, fortes como o marulhar das ondas.” Há metáfora?',
        resolucao:
          'Não. Há comparação (símile), porque a aproximação é feita com o conectivo explícito “como”. Seria metáfora se dissesse, por exemplo, “os bocejos eram ondas”.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Metonímia × metáfora**: na metonímia há relação real de proximidade (autor/obra, continente/conteúdo: “bebeu dois copos”); na metáfora, só semelhança. **Antítese × paradoxo**: na antítese, os opostos convivem sem contradição lógica; no paradoxo, a afirmação parece impossível. E lembre: “vultuoso” é termo médico (face congesta); “vultoso” é volumoso.',
      },
    ],
    fontes: [CUNHA_CINTRA, BECHARA, 'Academia Brasileira de Letras. Vocabulário Ortográfico da Língua Portuguesa (VOLP) — https://www.academia.org.br/nossa-lingua/busca-no-vocabulario'],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-reescrita',
    titulo: 'Reescrita e substituição de trechos',
    resumo:
      'A banca apresenta um trecho e pede a reescrita que mantém o sentido original e a correção gramatical. É a soma de todos os temas: conectores, pontuação, concordância, regência, colocação e vozes verbais.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Toda questão de reescrita tem **dois filtros**: (1) o sentido foi mantido? (2) a nova frase está correta? Muitas alternativas passam no primeiro e caem no segundo — ou o contrário. Leia o comando: às vezes ele pede só a correção (“mantém a correção gramatical”), às vezes as duas coisas.\n\nAs transformações mais comuns são: troca de conector, mudança de voz verbal, passagem de discurso direto para indireto, deslocamento de termos, troca de pontuação, substituição de palavra por sinônimo e junção de períodos com pronome relativo.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Transformações e o que conferir',
          colunas: ['Transformação', 'O que conferir', 'Exemplo correto'],
          linhas: [
            ['Ativa → passiva analítica', 'Objeto vira sujeito; “ser” no tempo do verbo original; particípio concorda', 'A comissão analisará os prontuários → Os prontuários serão analisados pela comissão'],
            ['Passiva sintética', 'Só com verbo transitivo direto; verbo concorda com o sujeito', 'Analisaram-se os prontuários'],
            ['Discurso direto → indireto', 'Pessoa (1ª → 3ª), tempo (presente → imperfeito; futuro → futuro do pretérito), advérbios (amanhã → no dia seguinte)', 'Disse: “Assinarei amanhã” → Disse que assinaria no dia seguinte'],
            ['Troca de conector', 'Mesmo valor lógico e mesmo modo verbal exigido', 'mas não bastam → embora sejam necessárias, não bastam'],
            ['Junção com relativo', 'Preposição exigida pelo verbo antes do relativo', 'Precisamos do protocolo → o protocolo de que precisamos'],
            ['Deslocamento de termo', 'Vírgulas do adjunto deslocado; colocação pronominal; concordância com sujeito posposto', 'nos une o amor da rua → o amor da rua nos une'],
            ['Troca de pontuação', 'Restritiva × explicativa; vírgula entre sujeito e verbo', 'Os médicos que atuam na emergência (sem vírgulas = só esses)'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — sentido e correção',
        enunciado:
          'Original: “Se a escala é montada com lacunas, alguém as cobrirá.” Qual reescrita é correta e fiel: (a) Caso a escala é montada com lacunas, alguém as cobrirá. (b) Caso a escala seja montada com lacunas, alguém as cobrirá. (c) Embora a escala seja montada com lacunas, alguém as cobrirá.',
        resolucao:
          '(b). “Caso” mantém a condição, mas exige subjuntivo (“seja”), por isso (a) erra a correção. (c) é correta gramaticalmente, mas troca condição por concessão: muda o sentido.',
      },
      {
        tipo: 'atencao',
        texto:
          'Desconfie de reescritas que parecem “mais bonitas”: a banca troca **restritiva por explicativa** (só alguns × todos), **quantificadores** (alguns → todos), **tempos verbais** (fez → fazia) e **conectores de valor parecido mas não igual** (“portanto” × “porque”). Compare palavra por palavra com o original.',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-redacao-oficial',
    titulo: 'Redação Oficial (Manual da Presidência, 3ª ed., 2018)',
    resumo:
      'A banca cobra atributos da redação oficial, pronomes de tratamento (endereçamento, vocativo, concordância), os dois fechos, a estrutura do padrão ofício, o e-mail e os gêneros exposição de motivos e mensagem — tudo pelo Manual de 2018.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Redação oficial** é a maneira pela qual o Poder Público redige comunicações oficiais e atos normativos. Quem comunica é sempre o serviço público; o assunto é sempre de interesse público. Por isso não há lugar para impressões pessoais.\n\nO Manual lista os **atributos**: clareza e precisão; objetividade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa. Eles decorrem dos princípios do art. 37 da Constituição (legalidade, impessoalidade, moralidade, publicidade e eficiência). Formalidade não é rebuscamento: o jargão burocrático deve ser evitado.\n\nNa introdução do texto, evite “Tenho a honra de”, “Tenho o prazer de” e “Cumpre-me informar que”; prefira a forma direta: **Informo, Solicito, Comunico**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Pronomes de tratamento — exemplos do Manual (item 4.1)',
          colunas: ['Autoridade', 'Endereçamento', 'Vocativo', 'No corpo do texto', 'Abreviatura'],
          linhas: [
            ['Presidente da República', 'A Sua Excelência o Senhor', 'Excelentíssimo Senhor Presidente da República,', 'Vossa Excelência', 'Não se usa'],
            ['Presidente do Congresso Nacional; Presidente do STF', 'A Sua Excelência o Senhor', 'Excelentíssimo Senhor Presidente do Congresso Nacional, (ou do Supremo Tribunal Federal,)', 'Vossa Excelência', 'Não se usa'],
            ['Vice-Presidente da República', 'A Sua Excelência o Senhor', 'Senhor Vice-Presidente da República,', 'Vossa Excelência', 'V. Exa.'],
            ['Ministro de Estado, Senador, Deputado Federal, Embaixador, Ministro do TCU e dos Tribunais Superiores', 'A Sua Excelência o Senhor', 'Senhor + cargo, (ex.: Senhor Ministro,)', 'Vossa Excelência', 'V. Exa.'],
            ['Oficial-General das Forças Armadas', 'A Sua Excelência o Senhor', 'Senhor + Posto,', 'Vossa Excelência', 'V. Exa.'],
            ['Outros postos militares', 'Ao Senhor', 'Senhor + Posto,', 'Vossa Senhoria', 'V. Sa.'],
          ],
          nota: 'O próprio Manual diz que a lista é exemplificativa: há muitas normas que atribuem “Vossa Excelência” a outras categorias.',
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Concordância**: o pronome de tratamento leva verbo e possessivos para a 3ª pessoa (“Vossa Senhoria designará **seu** substituto”, e não “vosso”); o adjetivo concorda com o **sexo** da pessoa (“Vossa Excelência está atarefado/atarefada”).',
          '**Vossa** × **Sua**: “Vossa Excelência” para falar **com** a autoridade; “Sua Excelência” para falar **dela** (inclusive no endereçamento: “A Sua Excelência o Ministro...”).',
          '**Endereçamento**: “A Sua Excelência o Senhor”/“a Senhora” (sem crase); para Vossa Senhoria, “Ao Senhor”/“À Senhora” — nunca “A Sua Senhoria o Senhor”.',
          '**Vocativo**: sempre seguido de vírgula. “Excelentíssimo Senhor” + cargo só para os Chefes de Poder; demais autoridades, “Senhor/Senhora” + cargo (“Senhora Senadora,”, “Senhor Juiz,”). Particulares: “Senhor/Senhora” + nome ou forma institucional (“Senhor Contribuinte,”, “Senhora Beneficiária,”) ou “Prezado Senhor,”.',
          '**Abolidos**: Digníssimo (DD) e Ilustríssimo (Ilmo.). Evite “doutor” indiscriminadamente — “Senhor” já confere a formalidade.',
          '**Fechos** (só dois): **Respeitosamente,** para autoridades de hierarquia superior, inclusive o Presidente da República; **Atenciosamente,** para mesma hierarquia, hierarquia inferior e demais casos. Autoridades estrangeiras seguem rito próprio.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Padrão ofício — partes e regras (item 5)',
          colunas: ['Parte', 'Regra do Manual'],
          linhas: [
            ['Nomenclatura', 'Aviso e memorando foram abolidos: tudo é “ofício” (variações: ofício circular, conjunto, conjunto circular)'],
            ['Cabeçalho', 'Só na 1ª página: Brasão de Armas da República, órgão principal e secundários (da maior para a menor hierarquia)'],
            ['Identificação', 'Nome do documento em maiúsculas + Nº + número/ano com quatro dígitos/siglas da menor para a maior hierarquia: OFÍCIO Nº 652/2018/SAA/SE/MT, à esquerda'],
            ['Local e data', 'Cidade sem sigla da UF, vírgula; dia 1º em ordinal, demais em cardinal sem zero à esquerda; mês em minúscula; ponto-final; alinhado à direita: Brasília, 2 de fevereiro de 2018.'],
            ['Endereçamento', 'Vocativo de endereçamento, nome, cargo e endereço, à esquerda'],
            ['Assunto', '“Assunto:” + frase com inicial maiúscula, sem verbos, de quatro a cinco palavras, em negrito, com ponto-final'],
            ['Texto', 'Introdução, desenvolvimento e conclusão (encaminhamento: começa citando o documento); parágrafos numerados só se houver três ou mais (vocativo e fecho não se numeram)'],
            ['Formatação', 'Calibri ou Carlito 12 (citações 11, notas 10); papel A4; margem esquerda mínima de 3 cm, direita 1,5 cm, superior e inferior 2 cm; recuo de parágrafo 2,5 cm; destaque só em negrito, sem abuso'],
            ['Signatário', 'Nome em maiúsculas, sem negrito; cargo com iniciais maiúsculas; centralizado. “Interino” e “substituto” depois do cargo, sem hífen, sem vírgula e em minúsculas'],
            ['Páginas', 'Numeração obrigatória só a partir da segunda página, centralizada no rodapé'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Exposição de motivos (EM)**: dirigida ao Presidente ou ao Vice-Presidente da República, em regra por Ministro de Estado, para propor medida, submeter projeto de ato normativo ou informar. Se envolve mais de um ministério, é **interministerial** e assinada por todos. Fecho: Respeitosamente.',
          '**Mensagem**: comunicação entre Chefes dos Poderes, sobretudo do Executivo ao Legislativo (encaminhar projeto, comunicar veto, abrir a sessão legislativa). Não traz identificação do signatário.',
          '**E-mail**: pode ser documento oficial; o endereço deve ser oficial (ex.: “.gov.br”); o assunto deve ser claro e específico; local e data são desnecessários; saudação com vocativo; fecho padrão **Atenciosamente** — “Att.”, “Abraços” e “Saudações” não são fechos oficiais; linguagem formal; sem caixa alta para destaque, emoticons ou abreviações como “vc”. Valor documental: certificação digital da ICP-Brasil (MP 2.200-2/2001).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — monte o início de um ofício',
        enunciado: 'Ofício de um coordenador para uma Ministra de Estado, convidando-a para um evento. Quais são o endereçamento, o vocativo e o fecho?',
        resolucao:
          'Endereçamento: “A Sua Excelência a Senhora [Nome], Ministra de Estado [...]”. Vocativo: “Senhora Ministra,” (Excelentíssima só para Chefes de Poder). No corpo: “Convido Vossa Excelência a participar...”. Fecho: “Respeitosamente,” (autoridade de hierarquia superior). Se o adjetivo se referir a ela: “Vossa Excelência está convidada”.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Decreto nº 9.758/2019**: na administração pública federal, o único pronome de tratamento na comunicação com agentes públicos federais é “senhor” (flexionado em gênero e número), e ficam vedadas Vossa Excelência/Excelentíssimo, Vossa Senhoria, Vossa Magnificência, doutor, ilustre/ilustríssimo, digno/digníssimo e respeitável; no endereçamento, omitem-se pronome e nome do agente, salvo exceções. O decreto não se aplica às comunicações com autoridades estrangeiras e organismos internacionais, nem às com agentes de outros Poderes, Ministério Público, Defensoria, Tribunais de Contas e outros entes federativos quando estes exigirem tratamento especial previsto em norma própria. As provas continuam cobrando o **Manual de 2018**: quando o enunciado citar o Manual, responda pelo Manual. Pegadinhas clássicas: “Excelentíssimo” para Ministro (errado), fecho “Atenciosamente” ao Presidente (errado), “A Sua Senhoria o Senhor” (errado), crase em “À Sua Excelência” (errado) e data “01 de Fevereiro” (errado).',
      },
    ],
    fontes: [MANUAL, DECRETO_9758],
    atualizadoEm: HOJE,
  },
];

export const RESUMOS: ResumoTema[] = [...RESUMOS_TEXTO, ...RESUMOS_GRAMATICA_1, ...RESUMOS_GRAMATICA_2];
