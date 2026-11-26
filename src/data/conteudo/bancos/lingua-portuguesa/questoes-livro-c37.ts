import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 37 — Reescritura de Frases), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C37: QuestaoTreino[] = [
  {
    id: 'lp-reescrita-qlivro37-01',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — ANCINE — Técnico Administrativo — 2012) “O riso é tão universal como a seriedade; ele abarca a totalidade do universo, toda a sociedade, a história, a concepção de mundo. É uma verdade que se diz sobre o mundo, que se estende a todas as coisas e à qual nada escapa. É, de alguma maneira, o aspecto festivo do mundo inteiro, em todos os seus níveis, uma espécie de segunda revelação do mundo”. Apesar do mesmo grau de universalidade atribuído pelo autor do texto ao “riso” e à “seriedade”, se o trecho “O riso é tão universal como a seriedade” fosse reescrito como “A seriedade é tão universal como o riso”, as estruturas sintáticas e argumentativas do texto seriam prejudicadas.',
    gabaritoCE: true,
    comentario:
      'O item está certo: a inversão para “A seriedade é tão universal como o riso” mantém a comparação de igualdade, mas desloca o termo que o autor destaca como tema, e com isso altera a estrutura argumentativa do parágrafo. A reescrita não é neutra, e a ordem original tem função no encadeamento das ideias.',
  },
  {
    id: 'lp-reescrita-qlivro37-02',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB — PM/CE — Soldado — 2012) Estaria mantida a correção gramatical do texto caso o trecho “estarem seguindo o exemplo” fosse reescrito da seguinte forma: estarem aderindo ao exemplo.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “seguir o exemplo” e “aderir ao exemplo” são expressões equivalentes, e “aderir a” rege corretamente o complemento “ao exemplo”. O verbo continua no plural (“estarem”) concordando com o sujeito, e a troca não prejudica a correção gramatical.',
  },
  {
    id: 'lp-reescrita-qlivro37-03',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAURGS — TJ/RS — Analista Judiciário — 2012) Considere as seguintes propostas de reescrita do trecho “A migração do morto, em vez de ser da vida para o nada, era só entre categorias verbais”. I. A migração do morto, em lugar de ser da vida para o nada, era tão somente entre categorias verbais. II. A imigração do morto, ao invés de ser da vida para o nada, era apenas entre categorias verbais. III. A migração do morto, ao contrário de ser da vida para o nada, era restrita a categorias verbais. Quais estão corretas do ponto de vista da norma?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e II.', 'Apenas II e III.'],
    correta: 0,
    comentario:
      'A alternativa A está correta: em I, “em lugar de” e “tão somente” são equivalentes a “em vez de” e “só”, e o sentido se mantém. Em II, trocar “migração” por “imigração” muda o sentido, pois imigrar é entrar em outro país, e em III a expressão “ao contrário de” inverte a ideia original.',
  },
  {
    id: 'lp-reescrita-qlivro37-04',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAURGS - TJ/RS - Analista Judiciário - 2012) Fragmento de texto: “(...) A biblioteca está e vai com você onde você estiver, como uma Babel feita do paradoxo do conhecimento: quanto mais se sabe, mais há para saber, de modo que, o máximo sendo também o mínimo, nunca nos falte nem a pergunta ilimitada, nem a resposta periódica... (...)”. A oração reduzida de gerúndio o máximo sendo também o mínimo, no período em que ocorre no texto, pode ser substituída, sem alteração de sentido, pela seguinte forma:',
    alternativas: [
      'a despeito de o máximo ser também o mínimo;',
      'contanto que o máximo seja também o mínimo;',
      'a não ser que o máximo seja também o mínimo;',
      'a fim de que o máximo seja também o mínimo;',
      'visto ser o máximo também o mínimo.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está correta: o gerúndio “sendo” exprime causa, e “visto ser” é a forma causal equivalente. As demais mudam o valor lógico da oração: “a despeito de” é concessiva, “contanto que” é condicional, “a não ser que” indica exceção e “a fim de que” indica finalidade.',
  },
  {
    id: 'lp-reescrita-qlivro37-05',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUNIVERSA - PC/DF - Perito Criminal - 2012) Fragmentos de texto: “Considerada ponto-chave em todas as investigações criminais, a perícia técnica vem ganhando destaque nos últimos anos por conta dos crimes de grande repercussão e que parecem ser de difícil solução. Além disso, seriados que mostram policiais ou peritos que utilizam ciência e tecnologia para desvendar casos complexos também ajudam a aumentar o interesse pela área. (...) Entrevistado hoje, Ferreira explicou que um perito não pode se envolver com nenhum caso. (...) A perícia é imparcial. Não importa se os vestígios ajudarem a defesa ou a acusação. (...)”. Assinale a alternativa que apresenta reescrita correta de fragmentos do texto, com preservação do sentido original.',
    alternativas: [
      'Considerada ponto-chave em todas as investigações criminais, a perícia técnica vem ganhando destaque nos últimos anos em virtude de crimes de grande repercussão e de solução aparentemente difícil.',
      'seriados que mostram policiais e peritos e que utilizam ciência e tecnologia para desvendar casos complexos também ajudam a aumentar o interesse pela área.',
      'Entrevistado na noite da morte da menina Isabella Nardoni, em março de 2008, Ferreira explicou que o perito não pode ter envolvimento emocional com o caso que examina.',
      'Por isso, policiais ou peritos que utilizam ciência e tecnologia para desvendar casos complexos também ajudam a aumentar o interesse pela área.',
      'A perícia é imparcial, embora não tenha nenhum valor o fato de os vestígios ajudarem a defesa ou a acusação.',
    ],
    correta: 0,
    comentario:
      'A alternativa A preserva o sentido: “em virtude de” substitui “por conta de” com valor causal, e “de solução aparentemente difícil” retoma a ideia de “parecem ser de difícil solução”. A alternativa C acrescenta informação que não está no texto, a alternativa D cria uma relação causal (“Por isso”) inexistente no original e a alternativa E inverte o sentido com “embora não tenha nenhum valor”.',
  },
  {
    id: 'lp-reescrita-qlivro37-06',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNIVERSA - PC/DF - Perito Criminal - 2012) Fragmentos de texto: “(...) para chegar à tal felicidade, precisamos ter amigos. (...) Outro benefício decorrente de ter amigos é manter a saúde em ordem. (...) ‘A amizade libera substâncias hormonais no cérebro que favorecem a alegria de viver e o bem-estar’. (...) o único jeito de ultrapassar a barreira da solidão é justamente ter pelo menos um amigo e um amor. (...) Para termos pelo menos um amigo, diz ele, precisamos nos livrar daquilo que ele chama de ‘avareza de si mesmo’”. Assinale a alternativa em que a reescrita de fragmento do texto preserva a correção gramatical e o sentido original.',
    alternativas: [
      'para se chegar à tal felicidade, precisamos ter amigos.',
      'Outro benefício resultante de ter amigos é a manutenção da saúde em ordem.',
      'A amizade libera substâncias hormonais no cérebro que favorece a alegria de viver e o bem-estar.',
      'o único jeito de ultrapassar a barreira da solidão é justo ter pelo menos um amigo e um amor.',
      'Para termos pelo menos um amigo, diz ele, precisamos nos livrar daquilo que o amigo chama de “avareza de si mesmo”.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está correta: “resultante de” substitui “decorrente de”, e “manutenção da saúde” é a nominalização de “manter a saúde”, sem perda de sentido. Em C, o verbo deveria concordar com “substâncias” (favorecem); em D, “justo” é adjetivo e deveria ser o advérbio “justamente”; em E, a troca de “ele chama” por “o amigo chama” altera a referência do sujeito.',
  },
  {
    id: 'lp-reescrita-qlivro37-07',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(AOCP - BRDE - Assistente Administrativo - 2012) As alternativas abaixo apresentam propostas de reescrita de fragmentos do texto, que se encontram entre aspas. Assinale a alternativa em que a reescrita NÃO preserva a correção gramatical e o sentido original do texto.',
    alternativas: [
      '“Não entendem a grandeza desses e outros grandes romances do passado” → Não entendem a grandeza desses e de outros grandes romances do passado.',
      '“uma etapa importante da formação do jovem: a da compreensão, análise e, por consequência, do domínio de textos complexos” → uma etapa importante da formação do jovem: a da compreensão, da análise e, por consequência, do domínio de textos complexos.',
      '“As ilustrações são feias e caricatas, limitando-se a servir aos balões e descrições extraídas diretamente do livro” → As ilustrações são feias, caricatas, limitando-se a servir aos balões e às descrições extraídas diretamente do livro.',
      '“Repare que esses grandes artistas dificilmente se submetem a adaptações feitas diretamente de uma obra” → Repare que esses grandes artistas dificilmente se submetem às adaptações feitas diretamente de uma obra.',
      '“Infelizmente, os quadrinhos são inocentes úteis, pois viraram instrumentos eficientes para a desmoralização da literatura” → Infelizmente, os quadrinhos são inocentes úteis, pois viraram instrumentos eficientes à desmoralização da literatura.',
    ],
    correta: 3,
    comentario:
      'A alternativa D não preserva o sentido: o artigo “as” torna “adaptações” determinadas (“às adaptações feitas”), enquanto o original fala de adaptações em geral. As demais reescritas mantêm a norma e o sentido, pois apenas repetem o artigo, reorganizam a pontuação ou ajustam a crase sem alterar a ideia.',
  },
  {
    id: 'lp-reescrita-qlivro37-08',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TCE/AM - Analista de Controle Externo - 2012) À época de Nabuco, os Estados Unidos despontavam já como um país poderoso, o moralismo desse país representando, no entanto, um entrave para que se promovesse nesse país uma disputa eleitoral em alto nível. Evita-se a viciosa repetição de palavras na frase acima substituindo-se, de modo adequado, as expressões sublinhadas, respectivamente, por:',
    alternativas: [
      'cujo moralismo representaria – lá se promovesse.',
      'aonde o moralismo representa – ali se promova.',
      'no qual o moralismo representasse – neles se promovam.',
      'em cujo moralismo representa-se – neste se promovesse.',
      'conquanto seu moralismo representa – lá se promova.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está correta: “cujo” substitui “desse país” com valor possessivo, sem repetir o termo, e “lá” substitui “nesse país” com valor de lugar. A correlação entre “representaria” e “se promovesse” é adequada; as demais usam “aonde” e “ali” de forma inadequada, trocam o número da referência (neles, neste) ou empregam “conquanto” com sentido e forma incorretos.',
  },
  {
    id: 'lp-reescrita-qlivro37-09',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NUCEPE - PM/PI - Agente de Polícia (Cabo) - 2012) Assinale a opção em que a reescrita do trecho “Se for assaltado, não reaja – entregue tudo” altera o sentido do que é dito na frase original.',
    alternativas: [
      '“Sendo assaltado, não reaja – entregue tudo.”',
      '“Em caso de assalto, não reaja – entregue tudo.”',
      '“Caso seja assaltado, não reaja – entregue tudo.”',
      '“Assaltando, não reaja – entregue tudo.”',
      '“Para caso de assalto, não reaja – entregue tudo.”',
    ],
    correta: 3,
    comentario:
      'A alternativa D altera o sentido: “Assaltando” (gerúndio) indica ação simultânea, e não a condição expressa por “Se for assaltado”. As demais preservam a condição (“Sendo assaltado”, “Em caso de assalto”, “Caso seja assaltado”), e “Para caso de assalto” desvia da norma sem mudar a condição.',
  },
  {
    id: 'lp-reescrita-qlivro37-10',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(COPESE — UFT - Vestibular - 2012) Em produções escritas é comum o uso excessivo do elemento “que”. Substituí-lo por substantivos e orações reduzidas pode ser uma alternativa no sentido de eliminar seu uso exagerado. Considerando o enunciado “A coordenadora exigiu que adiasse o encontro até que as infrações que o funcionário cometeu fossem solucionadas”, assinale a alternativa em que a substituição do “que” por substantivos e/ou orações reduzidas pode deixar o texto mais leve, sem alterar o sentido.',
    alternativas: [
      'A coordenadora exigiu o adiamento do encontro com o funcionário até as infrações serem solucionadas.',
      'A coordenadora exigiu o adiamento do encontro até a solução das infrações cometidas pelo funcionário.',
      'A coordenadora exigiu o adiamento do encontro com o funcionário até as infrações serem solucionadas por ele.',
      'A coordenadora exigiu o adiamento do encontro até as infrações cometidas serem solucionadas pelo funcionário.',
      'A coordenadora exigiu o adiamento do encontro até o funcionário solucionar as infrações cometidas por ele.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a que substitui as orações por termos nominais sem alterar o sentido: “a solução das infrações” e “cometidas pelo funcionário” condensam as orações e eliminam o “que” repetido. As alternativas A e C mantêm orações desenvolvidas, enquanto D e E trocam quem comete ou quem resolve as infrações, o que altera o sentido.',
  },
  {
    id: 'lp-reescrita-qlivro37-11',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf — SRF — Auditor-Fiscal da Receita Federal — 2012) Assinale a paráfrase (escrever a mesma coisa de forma diferente) correta e adequada do período “A solução foi muito simples: de todos os trabalhadores, sindicalizados ou não, era descontado anualmente, na folha de pagamento, o salário de um dia de trabalho”.',
    alternativas: [
      'Descontava-se um dia de trabalho do salário, na folha de pagamento anual, dos sindicalizados ou não, de todos os trabalhadores, como solução fácil para a falta de recursos do imposto sindical.',
      'Para solucionar a escassez de recursos dos sindicatos, a solução se encaminhou no sentido de serem descontados, de todos os trabalhadores, sindicalizados ou não, da folha anual de pagamento, o salário de um dia de trabalho.',
      'Para conseguirem sobreviver, os sindicatos adotaram uma solução simples de todos os trabalhadores, sindicalizados ou não — o desconto anual, na folha de pagamento, do salário de um dia de trabalho.',
      'Não foi complicada achar a solução. De todos os trabalhadores, sindicalizados ou não, descontava-se um dia de trabalho, anualmente, juntamente com a folha de pagamento.',
      'Foi simples a solução adotada — seria descontado anualmente, na folha de pagamento de todos os trabalhadores, sindicalizados ou não, o valor equivalente a um dia de trabalho.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a paráfrase adequada: mantém a ideia de que a solução foi simples, o desconto anual na folha e a aplicação a todos os trabalhadores, com o valor de um dia de trabalho. As demais acrescentam justificativas ou alteram o núcleo do período, como “escassez de recursos”, “imposto sindical”, “para conseguirem sobreviver” e “juntamente com a folha de pagamento”.',
  },
  {
    id: 'lp-reescrita-qlivro37-12',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TST - Analista Judiciário (Taquigrafia) - 2012) Assinale a alternativa em que a nova redação para o fragmento está clara e correta.',
    alternativas: [
      'Original: “Colocava sob minha análise um texto que já nascera das vozes do folclore, e propunha-me entender as relações deste texto com suas variantes intertextuais.” → Nova redação: “Submetia a meu escrutínio um texto que, como se não bastasse haver nascido das vozes da cultura popular, eu desejava interpretar tendo em vista as relações que mantém com suas variantes intertextuais.”',
      'Original: “Escolhi Chapeuzinho Vermelho que, por alguma razão, foi retomado tantas vezes, a serviço de outras enunciações.” → Nova redação: “Elegi Chapeuzinho Vermelho, o qual foi recaptulado imensas vezes, a serviço de diferentes formações ideológico-discursivas – nem imagino por quê.”',
      'Original: “A obra não poderia mais ser vista como um monólogo de um sujeito independente, que pressupõe, além de seus limites, apenas um leitor receptivo, privilegiado por uma intuição especial.” → Nova redação: “O trabalho estaria impedido de ser enxergado como fala de uma pessoa com ela mesma, o que implica, além de seus limites, num só leitor para a recepção, sendo que ele seja dotado de sensibilidade diferenciada.”',
      'Original: “Entendi que o que acontecia não era apenas a perda de um centro único. Era o diálogo que perpassa todo discurso.” → Nova redação: “Atinei que não só estava se dando a perca de um centro restrito, mas também do diálogo que atravessa todo discurso.”',
      'Original: “Teria de entender que há sempre a palavra de um outro, junto daquela que eu julgo ser de um.” → Nova redação: “Haveria de compreender que permanece a palavra de outro, pegada naquela que eu penso ser do primeiro.”',
    ],
    correta: 0,
    comentario:
      'A alternativa A traz a nova redação clara e correta: “como se não bastasse haver nascido” e “tendo em vista” mantêm a ideia do original e a norma. Nas demais há falhas, como “a perca” (o correto é “a perda”) em D, “sendo que ele seja” em C e a expressão imprecisa “pegada naquela” em E.',
  },
  {
    id: 'lp-reescrita-qlivro37-13',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRF (5ª R) - Analista Judiciário - 2012) Atente para as afirmações abaixo. I. A frase “Sem essa consciência, não há poeta” pode ser corretamente reescrita do seguinte modo: “Não há essa consciência em quem não seja poeta”. II. A frase “este palíndromo não só encantou o menino Cortázar, como decidiu o seu destino de escritor” tem seu sentido corretamente reproduzido nesta outra construção: “este palíndromo, além de ter encantado o menino Cortázar, decidiu o seu destino de escritor”. III. Em “Mesmo para um menino aberto ao que der e vier, a frase é bastante surrealista”, a substituição do verbo é por parecia implica a alteração do segmento grifado para “um menino aberto ao que desse e viesse”. Está correto o que consta em:',
    alternativas: ['I, II e III.', 'II, apenas.', 'I e III, apenas.', 'II e III, apenas.', 'I, apenas.'],
    correta: 3,
    comentario:
      'A alternativa D está correta: II mantém o sentido de adição do original, com “além de ter encantado” em lugar de “não só ... como”; III mostra que trocar “é” por “parecia” exige o imperfeito do subjuntivo (“desse” e “viesse”). I altera o sentido, porque “não há essa consciência em quem não seja poeta” não equivale a “sem essa consciência, não há poeta”.',
  },
  {
    id: 'lp-reescrita-qlivro37-14',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (5ª R) - Analista Judiciário - 2012) Devemos evitar, especialmente, posturas que venham a contribuir – ainda que indiretamente – para o estabelecimento de elo automático entre a coerção e a promoção da democracia e dos direitos humanos. Mantendo-se a correção e a lógica, uma redação alternativa para a frase acima está em:',
    alternativas: [
      'Deve ser especialmente evitada posturas que possam contribuir, embora de maneira apenas indireta, para o estabelecimento de elo automático entre a coerção e a promoção da democracia e dos direitos humanos.',
      'Posturas que contribuem, para o estabelecimento de elo automático entre a coerção e a promoção da democracia e dos direitos humanos, devem ser especialmente evitados, ainda que indiretamente.',
      'Ainda que contribua, apenas indiretamente, para o estabelecimento de elo automático entre a coerção e a promoção da democracia e dos direitos humanos, tais posturas devem ser especialmente evitadas.',
      'Posturas que contribuam, mesmo que de maneira indireta, para o estabelecimento de elo automático entre a coerção e a promoção da democracia e dos direitos humanos, devem ser especialmente evitadas.',
      'Conquanto contribuam apenas de modo indireto, posturas que estabeleçam elo automático entre a coerção e a promoção da democracia e dos direitos humanos, devem ser especialmente evitados.',
    ],
    correta: 3,
    comentario:
      'A alternativa D mantém a norma e o sentido: “posturas que contribuam” concorda com o plural e o subjuntivo marca a hipótese, e “devem ser ... evitadas” concorda com “posturas” no feminino plural. As demais têm falhas de concordância, como “deve ser ... posturas”, “evitados” e “contribua” referidos a “posturas”.',
  },
  {
    id: 'lp-reescrita-qlivro37-15',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB — MPE/TO — Promotor de Justiça — 2012) Fragmento de texto: “Embora a realização de investigações criminais diretamente pelo MP não deva ser a regra — no dia a dia, as polícias têm maior estrutura para isso, além de ser essa a sua função primordial —, não se pode impedir que, em determinados casos, o MP investigue, sob pena de que criminosos permaneçam sem punição. Uma primeira vantagem da investigação direta do MP é o ganho de qualidade e rapidez, uma vez que a prova será obtida diretamente por aquele que avaliará sua pertinência e legitimidade para o processo. Sob a direção imediata do MP, serão produzidas somente as provas que realmente permitam a condenação dos culpados (ou o arquivamento dos autos, caso se verifique a inocência do investigado). Além de zelar pela regularidade da prova, o que contribui para evitar nulidades que muitas vezes levam à perda de investigações importantíssimas, é dever do MP assegurar o respeito aos direitos do investigado, evitando abusos lamentavelmente ainda rotineiros em procedimentos da polícia”. Seriam mantidos o sentido original e a correção gramatical do texto caso se substituísse o trecho:',
    alternativas: [
      '“evitando abusos lamentavelmente ainda rotineiros em procedimentos da polícia” por “ainda prevenindo abusos lamentáveis na rotina investigatória policial”.',
      '“além de ser essa a sua função primordial” por “demais de essa ser a sua junção desde os primórdios”.',
      '“sob pena de que criminosos permaneçam sem punição” por “no risco de se manter criminosos na impunidade”.',
      '“Sob a direção imediata do MP” por “Dirigidos imediatamente pelo MP”.',
      '“caso se verifique a inocência do investigado” por “na hipótese de ser o investigado dado por inocente”.',
    ],
    correta: 4,
    comentario:
      'A alternativa E mantém o sentido e a correção: “na hipótese de ser o investigado dado por inocente” equivale à condição expressa por “caso se verifique a inocência do investigado”. As demais trocam palavras que mudam o sentido ou a construção, como “função” por “junção”, “lamentavelmente” por “lamentáveis” e “sob pena de” por “no risco de”.',
  },
  {
    id: 'lp-reescrita-qlivro37-16',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TRE/RJ — Cargos de Nível Superior — 2012) “O povo a que remete a ideia de soberania popular constitui uma unidade, e não, a soma de indivíduos.” De acordo com as informações presentes no texto, a expressão “de indivíduos” poderia ser substituída por individual sem que houvesse alteração do sentido textual.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “individual” é adjetivo no singular, e a expressão “de indivíduos” é um complemento nominal no plural. A substituição mudaria a estrutura da frase e o sentido de “soma de indivíduos”, que o texto usa para opor a unidade do povo à soma de partes.',
  },
  {
    id: 'lp-reescrita-qlivro37-17',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TRE/RJ — Técnico Judiciário — 2012) Prejudica-se a correção gramatical do período ao se substituir “São considerados” (São considerados inelegíveis os enquadrados...) por Consideram-se.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “São considerados” (voz passiva analítica) e “Consideram-se” (voz passiva sintética) são equivalentes, e a concordância de “inelegíveis” com “enquadrados” se mantém. Por isso a troca não prejudica a correção gramatical do período.',
  },
  {
    id: 'lp-reescrita-qlivro37-18',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TRE/RJ — Técnico Judiciário — 2012) Mantém-se a correção gramatical do período ao se substituir “onde” (Mas a realidade é bem outra na maioria dos municípios, onde a missão dos eleitos é discutível) por nos quais.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “nos quais” é a forma de “em + os quais” e retoma “municípios” com o mesmo valor locativo de “onde”. A substituição mantém a correção gramatical e o sentido do período, com antecedente claro e concordância no plural.',
  },
  {
    id: 'lp-reescrita-qlivro37-19',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB — TRE/RJ — Técnico Judiciário — 2012) Ao se substituir “o que facilita” (... muitos não lembram em quem votaram, o que facilita o surgimento de...) por o que vem facilitando ou por o que tem facilitado, mantém-se a correção gramatical do período.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “o que vem facilitando” e “o que tem facilitado” mantêm o valor de “o que facilita”, que retoma a ideia do período anterior, com a forma verbal composta adequada ao aspecto de continuidade. Não há falhas de concordância nem de regência na substituição.',
  },
  {
    id: 'lp-reescrita-qlivro37-20',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CEPERJ - DEGASE - Técnico de Suporte e Comunicação - 2012) “A verdade é que já há algum tempo vêm se sentindo menos pobres, vêm comprando”. O período acima poderia ser reescrito com a introdução de um conectivo, de modo a explicitar a relação de sentido do contexto original. A inserção do conectivo preserva o sentido original da frase na seguinte alternativa:',
    alternativas: ['embora venham comprando;', 'para virem comprando;', 'porque vêm comprando;', 'contudo vêm comprando;', 'apesar de virem comprando.'],
    correta: 2,
    comentario:
      'A alternativa C está correta: “porque” introduz a causa do fato de as pessoas se sentirem menos pobres e comprarem, relação que o contexto explicita. “Embora” e “apesar de” introduzem concessão, “contudo” introduz oposição e “para” introduz finalidade, todos com valor lógico diferente do original.',
  },
  {
    id: 'lp-reescrita-qlivro37-21',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TJ/AL - Auxiliar Judiciário - 2012) Assinale a opção que apresenta proposta de reescrita correta para trecho do texto indicado entre aspas.',
    alternativas: [
      '“O igualitarismo formal vem decantado enfaticamente na Carta Política em dois trechos (art. 5.º, inc. I, e art. 226, § 5.º), o que não basta, por si só, para se alcançar a absoluta equivalência social e jurídica de homens e mulheres”: A Carta Política menciona o igualitarismo formal em apenas dois artigos e isso é insuficiente para conseguir a absoluta equivalência social e jurídica do ser humano.',
      '“Agora, não mais é o marido o ‘cabeça’ do casal, o representante legal da família, nem o único responsável por prover o seu sustento”: Antes, o representante legal da família era o homem. Era dele apenas a responsabilidade de prover o sustento da mesma.',
      '“O simples estabelecimento do princípio da igualdade, no entanto, não logrou eliminar as diferenciações existentes”: O mero estabelecimento do princípio da igualdade, entretanto, não conseguiu abolir as discriminações existentes.',
      '“Resta nítida a intenção do novo sistema jurídico de consagrar a máxima aristotélica”: A intenção do novo sistema jurídico de consagrar a iminência do princípio de Aristóteles é clara.',
      'A Constituição Federal de 1988 (CF) buscou resgatar a igualdade, cânone da democracia desde a Revolução Francesa e linha mestra da Declaração dos Direitos Humanos: A igualdade, a qual, desde a Revolução Francesa, é cânone da democracia e linha mestra da Declaração dos Direitos Humanos, foi resgatada pela Constituição Federal de 1988.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a reescrita correta: “logrou” e “conseguiu” são equivalentes, assim como “no entanto” e “entretanto”, e a estrutura concessiva se preserva. Em D, “máxima aristotélica” virou “iminência do princípio”, o que muda completamente o sentido; em B, a mudança de tempo e de sujeito altera o conteúdo da frase original.',
  },
  {
    id: 'lp-reescrita-qlivro37-22',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CEPERJ - PROCON/RJ — Técnico em Contabilidade - 2012) “Àquela altura já éramos amigas. O infortúnio tinha nos unido”. O trecho acima poderia ser reescrito, unindo-se as orações por meio de um conectivo. A reescritura que preservaria o sentido original do trecho seria:',
    alternativas: [
      'contudo o infortúnio tinha nos unido;',
      'porque o infortúnio tinha nos unido;',
      'embora o infortúnio tinha nos unido;',
      'portanto o infortúnio tinha nos unido;',
      'enquanto o infortúnio tinha nos unido.',
    ],
    correta: 1,
    comentario:
      'A alternativa B preserva o sentido: “porque” indica a causa de as duas já serem amigas, relação que o contexto sugere. “Contudo” e “embora” indicam oposição ou concessão, “portanto” apresenta conclusão e “enquanto” indica simultaneidade, e “embora o infortúnio tinha” ainda traz erro de tempo verbal, pois a concessão pede o subjuntivo.',
  },
  {
    id: 'lp-reescrita-qlivro37-23',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CEPERJ - PROCON/RJ — Técnico em Contabilidade - 2012) “Mesmo não havendo registro de incidentes no País...”. O trecho acima poderia ser reescrito, sem alteração do sentido essencial, da seguinte forma:',
    alternativas: [
      'Como não há registro de incidentes no país;',
      'Embora não haja registro de incidentes no país;',
      'Para que não haja registro de incidentes no país;',
      'Enquanto não há registro de incidentes no país;',
      'Quando não houver registro de incidentes no país.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está correta: “mesmo” com gerúndio tem valor concessivo, e “embora não haja” com o subjuntivo traduz a mesma ideia de oposição ao registro de incidentes. “Como” é causal, “para que” é final, e “enquanto” e “quando” são temporais, por isso mudam o sentido do original.',
  },
  {
    id: 'lp-reescrita-qlivro37-24',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(CONSULPLAN - TSE - Analista Judiciário - 2012) Assinale a alternativa em que a alteração estrutural de um trecho do texto NÃO tenha provocado inadequação de ordem gramatical ou discursiva nem alteração semântica.',
    alternativas: [
      '“Se a moral é medida em dinheiro, não entregar-se a ele poderá parecer um luxo.” → “Se a moral em dinheiro é medida, poderá parecer um luxo não se entregar a ele.”',
      '“Mas teria também todo o perdão?” → “Mas teria também todo perdão?”',
      '“O simples fato de que essa pergunta seja colocada implica o pressuposto de que uma verdade ética tal como a honestidade foi transvalorada.” → “O simples fato que essa pergunta seja colocada implica no pressuposto que uma verdade ética tal como a honestidade foi transvalorada.”',
      '“É por meio dela que se faz o cálculo do ‘sentido’ no qual, fora da vantagem que define a regra, o sujeito honesto se transfigura imediatamente em otário.” → “É através dela que faz-se o cálculo do ‘sentido’ onde, fora da vantagem que define a regra, o sujeito honesto se transfigura imediatamente em otário.”',
    ],
    correta: 0,
    comentario:
      'A alternativa A preserva a norma e o sentido: a inversão “poderá parecer um luxo não se entregar a ele” mantém a relação condicional e a posição do pronome “se” após a negação. Em C, “fato que” sem a preposição “de” e “implica no” contrariam a regência de “implicar”, que é transitivo direto.',
  },
  {
    id: 'lp-reescrita-qlivro37-25',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC - PC/RJ - Inspetor de Polícia Civil (6ª Classe) - 2012) A sugestão de reescrita que altera fundamentalmente o sentido de: “Um programa como esse pode ser iniciado de imediato, mas demora a ser implementado em todo o país, sobretudo por falta de recursos humanos em quantidade. A solução é executá-lo por cidades” encontra-se em:',
    alternativas: [
      'reescrever “Um programa como esse” como “Semelhante programa”;',
      'simplificar a forma verbal composta “ser iniciado”, escrevendo em seu lugar “iniciar-se”;',
      'substituir a forma verbal auxiliar “pode” por “deve”;',
      'coordenar as orações do 1º período com o uso de “não obstante”, em vez da conjunção “mas”;',
      'unir os dois períodos num período único, usando para tanto a conjunção “por conseguinte”.',
    ],
    correta: 2,
    comentario:
      'A alternativa C altera o sentido: trocar “pode” por “deve” muda a modalidade, pois a possibilidade de iniciar o programa passa a ser uma obrigação. As demais trocas preservam o núcleo do período, como a sinonímia de “semelhante”, a equivalência entre “ser iniciado” e “iniciar-se” e a relação concessiva de “não obstante” com “mas”.',
  },
  {
    id: 'lp-reescrita-qlivro37-26',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC - PC/RJ - Inspetor de Polícia Civil (6ª Classe) - 2012) Preserva-se o sentido de: “A Educação é um processo de acúmulo de conhecimento, não de consumo de aulas” com a seguinte redação:',
    alternativas: [
      'A Educação é antes um processo de acúmulo de conhecimento que de consumo de aulas.',
      'A Educação não é um processo de acúmulo de conhecimento, senão de consumo de aulas.',
      'A Educação é, não só um processo de consumo de aulas, senão de acúmulo de conhecimento.',
      'A Educação é, não um processo de consumo de aulas, senão de acúmulo de conhecimento.',
      'A Educação é um processo de acúmulo de conhecimento, tanto quanto de consumo de aulas.',
    ],
    correta: 3,
    comentario:
      'A alternativa D preserva o sentido por meio da estrutura “não ... senão”, que nega o consumo de aulas e afirma o acúmulo de conhecimento. A alternativa B inverte a ideia original, ao negar o acúmulo e afirmar o consumo; C e E alteram a oposição, com “não só” e “tanto quanto” que somam em vez de opor.',
  },
  {
    id: 'lp-reescrita-qlivro37-27',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC — PC/RJ — Inspetor de Polícia Civil (6ª Classe) — 2012) Altera-se o sentido de: “Mesmo considerando a necessidade de vagas para antigos concluintes do ensino médio, esta diferença é uma distorção absurda” reescrevendo-se a oração subordinada como:',
    alternativas: [
      'Ainda que considerada a necessidade de vagas para antigos concluintes do ensino médio.',
      'Conquanto se considere a necessidade de vagas para antigos concluintes do ensino médio.',
      'A despeito de se considerar a necessidade de vagas para antigos concluintes do ensino médio.',
      'Posto que considerando a necessidade de vagas para antigos concluintes do ensino médio.',
      'Visto considerar-se a necessidade de vagas para antigos concluintes do ensino médio.',
    ],
    correta: 4,
    comentario:
      'A alternativa E altera o sentido: “visto considerar-se” introduz causa, enquanto o original tem valor concessivo (“mesmo considerando”). As demais (ainda que, conquanto, a despeito de e posto que) são concessivas e mantêm a relação de oposição entre a necessidade de vagas e a distorção.',
  },
  {
    id: 'lp-reescrita-qlivro37-28',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FEC — PC/RJ — Inspetor de Polícia Civil (6ª Classe) — 2012) Invertem-se os termos da relação causa/consequência expressa em: “Pela baixa qualificação dos alunos, o aumento nas vagas do ensino superior não trará o resultado desejado” na alternativa:',
    alternativas: [
      'Dado que é baixa qualificação dos alunos, o aumento nas vagas do ensino superior não trará o resultado desejado.',
      'É baixa a qualificação dos alunos, motivo por que o aumento nas vagas do ensino superior não trará o resultado desejado.',
      'O aumento nas vagas do ensino superior não trará o resultado desejado, porquanto é baixa a qualificação dos alunos.',
      'É baixa a qualificação dos alunos, a ponto de que o aumento nas vagas do ensino superior não trará o resultado desejado.',
      'O aumento nas vagas do ensino superior não trará o resultado desejado, portanto é baixa a qualificação dos alunos.',
    ],
    correta: 4,
    comentario:
      'A alternativa E inverte a relação: “portanto” apresenta a baixa qualificação como consequência do aumento de vagas, o que troca a causa pela consequência. Em C, “porquanto” mantém a mesma causa (a baixa qualificação) e a mesma consequência, apenas reordenadas, por isso não inverte a relação.',
  },
  {
    id: 'lp-reescrita-qlivro37-29',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Dom Cintra — Pref. Petrópolis/RJ (INPAS) — Advogado — 2012) Das alterações feitas abaixo na redação do período “Segundo o Instituto Nacional do Câncer (Inca), no ano passado, foram registrados 28.110 novos casos, sendo 13.310 em homens e 14.800 em mulheres”, aquela em que foi mantido o sentido original do texto é:',
    alternativas: [
      'Análogo ao que diz o Instituto Nacional do Câncer (Inca), no ano passado, foram registrados 28.110 novos casos, uma vez que 13.310 em homens e 14.800 em mulheres.',
      'Consoante o Instituto Nacional do Câncer (Inca), no ano passado, foram registrados 28.110 novos casos, conquanto 13.310 em homens e 14.800 em mulheres.',
      'De acordo com o Instituto Nacional do Câncer (Inca), no ano passado, foram registrados 28.110 novos casos, dos quais 13.310 em homens e 14.800 em mulheres.',
      'Coincidente com o que informa o Instituto Nacional do Câncer (Inca), no ano passado, foram registrados 28.110 novos casos, onde 13.310 em homens e 14.800 em mulheres.',
      'Em conformidade com o Instituto Nacional do Câncer (Inca), no ano passado, foram registrados 28.110 novos casos, cujos 13.310 em homens e 14.800 em mulheres.',
    ],
    correta: 2,
    comentario:
      'A alternativa C mantém o sentido: “dos quais” retoma os “28.110 novos casos” e explicita a distribuição por sexo, e “De acordo com” substitui “Segundo” sem alterar a ideia. As alternativas A e B criam relações lógicas inexistentes no original (causa e concessão), e D usa “onde” para algo que não indica lugar.',
  },
  {
    id: 'lp-reescrita-qlivro37-30',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Dom Cintra - Pref. Itaboraí/RJ - Analista de Sistemas - 2012) “Já vi muita coisa neste mundo, mas nunca assisti pessoalmente a um pau de sebo de verdade,...”; o segmento assisti pessoalmente poderia ser substituído por um só verbo: presenciei. A frase em que esse mesmo tipo de substituição está corretamente feita é:',
    alternativas: [
      'Destruir completamente um conjunto de apartamentos. / desmoronar.',
      'Acabar completamente com a resistência dos traficantes. / aniquilar.',
      'Matar totalmente as abelhas de uma colmeia. / esquartejar.',
      'Pagar integralmente uma dívida ao banco. / negociar.',
      'Amar profundamente a mulher. / extinguir-se.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está correta: a locução “acabar completamente com” é substituída pelo verbo “aniquilar”, de mesmo sentido. Em A, “desmoronar” não significa destruir; em C, “esquartejar” significa cortar em pedaços; em D, “negociar” não equivale a pagar, e em E “extinguir-se” não significa amar.',
  },
  {
    id: 'lp-reescrita-qlivro37-31',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Dom Cintra - Câmara de Duque de Caxias/RJ - Consultor Contábil — 2012) Feitas as mudanças na ordem dos termos, tal como indicadas, o enunciado que mantém seu sentido básico original é:',
    alternativas: [
      'até, finalmente, chamarem a atenção de alguém mais antenado / até chamarem a atenção de alguém, finalmente, mais antenado;',
      'um mundo sem editoras seria um caos para nós, leitores / seria, leitores, um caos para nós;',
      'até porque, como objeto, o livro é um produto singularmente bem resolvido / porque até;',
      'há transformações já em curso que serão cada vez mais interessantes de acompanhar / já há transformações em curso;',
      'as editoras têm linhas editoriais com as quais os editores aprendem a se identificar / aprendem os editores a se identificar.',
    ],
    correta: 4,
    comentario:
      'A alternativa E mantém o sentido ao inverter o sujeito para depois do verbo (“aprendem os editores a se identificar”), sem alterar a relação entre as ideias. Nas demais, o deslocamento altera o conteúdo: “já há transformações em curso” perde a ideia de futuro presente em “serão cada vez mais interessantes”, e “porque até” troca a relação lógica do original.',
  },
  {
    id: 'lp-reescrita-qlivro37-32',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(VUNESP - Academia Barro Branco - Aluno Oficial - 2012) Em “Não posso auxiliar a nossa polícia legal, porquanto desde muito que não vou a cinematógrafos...”, a conjunção destacada pode ser substituída, sem prejuízo de sentido, por:',
    alternativas: ['no entanto;', 'enquanto;', 'uma vez que;', 'por conseguinte;', 'embora.'],
    correta: 2,
    comentario:
      'A alternativa C está correta: “porquanto” é conjunção causal, e “uma vez que” tem o mesmo valor causal. “No entanto” e “embora” são adversativa e concessiva, “enquanto” é temporal ou adversativa e “por conseguinte” é conclusiva, por isso alteram o sentido da frase.',
  },
  {
    id: 'lp-reescrita-qlivro37-33',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(VUNESP - Academia Barro Branco - Aluno Oficial - 2012) Em “Apesar disso tudo”, e na assistência delas que nasce muito amor condenado, a expressão destacada pode ser substituída, sem prejuízo de sentido, por:',
    alternativas: [
      'Não obstante isso tudo;',
      'Em detrimento disso tudo;',
      'Conforme isso tudo;',
      'De acordo com isso tudo;',
      'Por conseguinte a isso tudo.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está correta: “apesar de” expressa concessão, o mesmo valor de “não obstante”, e mantém a oposição do original. As demais locuções (em detrimento de, conforme, de acordo com e por conseguinte) indicam prejuízo, conformidade ou conclusão, sem a noção de oposição.',
  },
  {
    id: 'lp-reescrita-qlivro37-34',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(VUNESP - Pref. Cubatão/SP — Agente Fiscal de Tributos — 2012) Assinale a alternativa que apresenta o trecho “Poderá também dizer que ocorreram reduções de impostos para alguns setores.” reescrito de acordo com a norma-padrão e sem alteração de sentido.',
    alternativas: [
      'Poderá também dizer que houve reduções de impostos para alguns setores.',
      'Poderá também dizer que ocorrera reduções de impostos para alguns setores.',
      'Poderá também dizer que houveram reduções de impostos para alguns setores.',
      'Poderá também dizer que ocorrerão reduções de impostos para alguns setores.',
      'Poderá também dizer que haveria reduções de impostos para alguns setores.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está correta: “houve” é o verbo haver no sentido de ocorrer, impessoal e no singular, e a frase mantém o sentido de “ocorreram reduções”. Em B, o mais-que-perfeito “ocorrera” muda o tempo; em C, “houveram” é erro, pois o verbo impessoal fica no singular; em D e E, o futuro “ocorrerão” e o condicional “haveria” alteram o tempo e a certeza da informação.',
  },
  {
    id: 'lp-reescrita-qlivro37-35',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UFMT - COPEL - Profissional de Nível Médio - 2013) No trecho “Como o Brasil é o campeão mundial de mortes causadas por essa modalidade, o tema muito nos interessa”, há uma relação de causa-consequência. Assinale a reescritura do trecho que NÃO conserva essa relação de sentido.',
    alternativas: [
      'Por ser o Brasil o campeão mundial de mortes causadas por essa modalidade, o tema muito nos interessa.',
      'Embora o Brasil seja o campeão mundial de mortes causadas por essa modalidade, o tema muito nos interessa.',
      'Visto que o Brasil é o campeão mundial de mortes causadas por essa modalidade, o tema muito nos interessa.',
      'Porque o Brasil é o campeão mundial de mortes causadas por essa modalidade, o tema muito nos interessa.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a que não conserva a relação causa-consequência: “embora” é concessiva e cria uma oposição entre ser campeão de mortes e o interesse pelo tema. As outras (por ser, visto que e porque) são causais e mantêm a relação do original.',
  },
  {
    id: 'lp-reescrita-qlivro37-36',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Prefeitura de Cuiabá/MT - Contador - 2015) “A Prefeitura de São Paulo vai criar um manual PARA ORIENTAR funcionários de empresas de limpeza urbana sobre como proceder ao se depararem com grafites e pichações em muros públicos”. Assinale a opção que indica o segmento destacado transformado em uma oração desenvolvida.',
    alternativas: [
      'Para a orientação de funcionários.',
      'Para se orientarem funcionários.',
      'Para que se orientassem funcionários.',
      'Para que se orientem funcionários.',
      'Para que fossem orientados funcionários.',
    ],
    correta: 3,
    comentario:
      'A alternativa D está correta: a oração desenvolvida com “para que” e o presente do subjuntivo “orientem” mantém a correlação com o presente de “vai criar” e concorda com o sujeito “funcionários”. Em A, a oração fica nominal; em B, a forma infinitiva não é oração desenvolvida; em C e E, o imperfeito do subjuntivo não se correlaciona com o presente de “vai criar”.',
  },
  {
    id: 'lp-reescrita-qlivro37-37',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ESAF - ANAC - Técnico Administrativo - 2016) Fragmento de texto: “Há quase dois anos fui empossado técnico administrativo na ANAC/SP... Nesse tempo já fui nomeado para outros dois cargos... Trabalho na área administrativa junto com outros técnicos e analistas... Tenho de analisar documentação, preparar processos..., resolver alguns ‘pepinos’ que sempre aparecem ao longo do mês, além, é claro, de efetuar trabalhos eventuais...”. Assinale a substituição proposta que causa erro de morfossintaxe no texto.',
    alternativas: [
      'substituir “Há” por “A”.',
      'substituir “Nesse tempo” por “Durante esse tempo”.',
      'substituir “junto” por “juntamente”.',
      'substituir “Tenho de” por “Tenho que”.',
      'substituir “ao longo do mês” por “no decorrer do mês”.',
    ],
    correta: 0,
    comentario:
      'A alternativa A causa erro: “Há quase dois anos” indica tempo decorrido com o verbo haver impessoal, e trocar “Há” por “A” produz “A quase dois anos”, incorreto. As demais substituições (durante esse tempo, juntamente, tenho que e no decorrer do mês) mantêm a correção e o sentido do texto.',
  },
  {
    id: 'lp-reescrita-qlivro37-38',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TCE/SP — Agente de Fiscalização (Administração) — 2017) Assinale a alternativa cuja frase, redigida com base nos versos “Mesmo a quem não tem fé / A fé costuma acompanhar”, está em conformidade com a norma-padrão.',
    alternativas: [
      'Podem haver pessoas sem fé, e mesmo assim a fé costuma acompanhar-lhes.',
      'Mesmo as pessoas que não têm fé costuma ter esta acompanhando-lhes.',
      'Há pessoas que não têm fé; mesmo assim, a fé costuma acompanhá-las.',
      'Se tem pessoas sem fé, mesmo assim esta costuma acompanhar elas.',
      'Se têm pessoas sem fé, esta, mesmo assim, tem acompanhado-as.',
    ],
    correta: 2,
    comentario:
      'A alternativa C está de acordo com a norma: “Há pessoas” usa o verbo haver impessoal no singular, e “costuma acompanhá-las” tem o pronome átono na forma adequada. As demais erram no uso de haver (“Podem haver”, “Se têm pessoas”) e na colocação ou forma dos pronomes (“acompanhar elas”, “acompanhado-as”).',
  },
  {
    id: 'lp-reescrita-qlivro37-39',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - FUB - Cargos de Nível Médio - 2018) A correção gramatical e o sentido original do texto seriam mantidos se o trecho “A revolução (...) para o atual” fosse reescrito da seguinte forma: A revolução nas comunicações, na produção de alimentos, na diversificação de máquinas, nos equipamentos e na sofisticação da medicina atestam avanços extraordinários alcançados pela sociedade, na transição do século XX para o atual.',
    gabaritoCE: false,
    comentario:
      'O item está errado: o núcleo do sujeito, “revolução”, é singular e pede o verbo no singular (“atesta”), e não “atestam”. A enumeração com várias expressões preposicionadas também dificulta a leitura e compromete a clareza do trecho original.',
  },
  {
    id: 'lp-reescrita-qlivro37-40',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE — SEFAZ/RS — Auditor Fiscal da Receita Estadual — 2019 — adaptada) Fragmento de texto: “... o poder de tributar está na origem do Estado ou do ente político, a partir da qual foi possível que as pessoas deixassem de viver no que Hobbes definiu como o estado natural (ou a vida pré-política da humanidade) e passassem a constituir uma sociedade de fato...”. A supressão dos parênteses empregados no trecho “(ou a vida pré-política da humanidade)” alteraria os sentidos originais do texto.',
    gabaritoCE: true,
    comentario:
      'O item está certo: sem os parênteses, o “ou” passa a ser lido como alternativa entre “estado natural” e “vida pré-política”, e não como explicação equivalente. A supressão, portanto, altera a leitura do conceito de Hobbes e o sentido original do texto.',
  },
  {
    id: 'lp-reescrita-qlivro37-41',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(IDECAN — IF/RR — Técnico em informática — 2020) Assinale a única alternativa em que a reescritura do trecho fornecido permanece adequada ao que preceitua a norma culta da língua portuguesa e com o mesmo sentido presente no texto. “Levei um choque, e sua fala me fez perceber que todos enfrentamos turmas que colocam em xeque nossa habilidade e experiência.”',
    alternativas: [
      'Fiquei muito surpreso, sua fala me fez compreender que todos nos deparamos com turmas que nos fazem questionar nossa habilidade e experiência.',
      'Me assustei, e seu sentimento me fez notar que todos enfrentamos turmas que nos fazem desconfiar da nossa habilidade e experiência.',
      'Levei um susto, mas sua fala me fez desconfiar que todos somos colocados diante de turmas que nos levam a perceber que não somos tão competentes quanto pensávamos.',
      'Fiquei perplexo, mas sua fala me fez notar que todos encaramos grupos que os fazem perceber o quanto somos habilidosos e experientes.',
      'Nossa habilidade e experiência é posta em cheque por turmas que enfrentamos e sua fala foi onde, assustado, percebi isso.',
    ],
    correta: 0,
    comentario:
      'A alternativa A mantém a norma e o sentido: “nos deparamos com” e “nos fazem questionar” têm regência e concordância adequadas. Em B, “seu sentimento” muda a informação do original e “Me assustei” destoa do registro formal; em C, o “mas” cria uma oposição inexistente; em E, “foi onde” é uso impróprio do advérbio.',
  },
  {
    id: 'lp-reescrita-qlivro37-42',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - IMBEL - Engenheiro de materiais - 2021) “Muita sabedoria unida a uma santidade moderada é preferível a muita santidade com pouca sabedoria.” (Santo Inácio de Loyola). Essa frase pode ser reescrita, mantendo-se o sentido original e sua correção gramatical tradicional, da seguinte forma:',
    alternativas: [
      'É preferível a muita santidade com pouca sabedoria do que muita sabedoria unida a uma santidade moderada.',
      'Deve-se preferir muita sabedoria unida a uma santidade moderada do que muita santidade com pouca sabedoria.',
      'Muita santidade com pouca sabedoria é preferível a muita sabedoria unida a uma santidade moderada.',
      'É preferível muita sabedoria unida a uma santidade moderada a muita santidade com pouca sabedoria.',
      'Uma santidade moderada unida a muita sabedoria é preferível do que pouca sabedoria unida a muita santidade.',
    ],
    correta: 3,
    comentario:
      'A alternativa D mantém o sentido e a regência de “preferível”, que pede a preposição “a”: “é preferível X a Y”. As alternativas A e C invertem a preferência, e em E “preferível do que” contraria a regência do adjetivo, que pede “a”.',
  },
  {
    id: 'lp-reescrita-qlivro37-43',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE — IBAMA — Analista Administrativo — 2022) Fragmento de texto: “Incluindo o processo produtivo e as práticas sociais, a cultura é o que nos dá a consciência de pertencer a um grupo...”. Seria mantida a coerência do texto se a oração “Incluindo o processo produtivo e as práticas sociais” fosse substituída tanto por “Por incluir o processo produtivo e as práticas sociais” quanto por “Como inclui o processo produtivo e as práticas sociais”.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “Por incluir” e “Como inclui” são orações causais equivalentes ao gerúndio “Incluindo”, que exprime a mesma relação de causa. Como a relação de causa e consequência se mantém nas duas substituições, a coerência do texto é preservada.',
  },
];
