import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 14 — Preposição), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C14: QuestaoTreino[] = [
  {
    id: 'lp-invariaveis-qlivro14-01',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PC/CE - Inspetor - 2012) Na linha 2, pode-se substituir “diante das” por perante as, sem prejuízo para a correção gramatical ou para o sentido original do texto.',
    gabaritoCE: true,
    comentario:
      '“Diante das” e “perante as” indicam lugar e, por isso, podem ser trocadas sem prejuízo para a correção nem para o sentido. O artigo mantido após a locução preserva a gramaticalidade do trecho, o que confirma a afirmação.',
  },
  {
    id: 'lp-invariaveis-qlivro14-02',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/DF - Técnico Administrativo - 2008) A retirada da preposição em “de transformar” (... nossa capacidade de trabalhar, de transformar o mundo...) violaria as regras de gramática da língua portuguesa, já que essa expressão complementa “capacidade”.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “trabalhar” e “de transformar” estão coordenadas, como numa enumeração, e nesse caso a preposição pode ser omitida sem prejuízo. A repetição da preposição só é obrigatória quando for importante para a clareza.',
  },
  {
    id: 'lp-invariaveis-qlivro14-03',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - MEC - Administrador de Banco de Dados - 2009) “Com o real, os brasileiros redescobriram o valor do dinheiro e das coisas”; a frase a seguir em que a preposição com tem o mesmo valor semântico da ocorrência sublinhada é:',
    alternativas: [
      'Com a chuva, todas as ruas ficaram alagadas.',
      'Os turistas encontraram-se com os amigos no aeroporto.',
      'Todos saímos com os amigos recém-chegados.',
      'Com quem eles viajaram nós não vimos.',
      'Brigaram com os adversários durante horas.',
    ],
    correta: 0,
    comentario:
      'Em “Com a chuva”, a preposição indica causa, o motivo do alagamento, mesmo sentido de “Com o real”, que expressa a causa da redescoberta do valor do dinheiro. As demais expressam companhia ou reciprocidade, e não causa.',
  },
  {
    id: 'lp-invariaveis-qlivro14-04',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC/UFF - MPA - Engenheiro - 2010) Cometeria grande equívoco quem fizesse, no texto, a substituição da preposição pela locução prepositiva, ou vice-versa, proposta em:',
    alternativas: [
      'sobre (Quem se mantém informado sobre os imensos problemas...) / acerca de.',
      'com exceção de (Tudo parece conspirar para que o consumo de peixe seja uma prática muito pouco sustentável — com exceção dos peixes que são criados em um parque na Espanha.) / salvo.',
      'para (Esta é uma receita para o futuro da boa alimentação...) / a fim de.',
      'diante de (E diante da usual pergunta sobre se este tipo de sistema poderia...) / ante.',
      'em direção a (... podemos avançar em direção a um futuro...) / para.',
    ],
    correta: 2,
    comentario:
      '“Para o futuro” indica destino, e “a fim de” exige um verbo no infinitivo para expressar finalidade; a troca altera a regência e o sentido. As demais substituições são equivalentes: sobre e acerca de, com exceção de e salvo, diante de e ante, em direção a e para.',
  },
  {
    id: 'lp-invariaveis-qlivro14-05',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TCU - Auditor-Federal de Controle Externo - 2010) O uso da preposição De em lugar de “Sob” (Sob uma forma paradigmática, a língua encarna esse tipo de dados sociais...) alteraria as relações de significação entre os termos da oração e, por isso, prejudicaria a coerência entre os argumentos do texto.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: trocar “sob” por “de” muda a relação estabelecida entre os termos, mas a banca não considerou que isso prejudique a coerência do texto. O item atribui à troca um efeito que não se confirma.',
  },
  {
    id: 'lp-invariaveis-qlivro14-06',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (IR) - Analista Judiciário - 2011) (Adaptada) Em Chicago, melhor do que em qualquer outro ponto, pode-se acompanhar o processo sumário que usais para conseguir, de plantas alienígenas, ao fim de curto estágio de aclimação, frutos genuinamente americanos. Na frase acima, a preposição de, em de plantas alienígenas, expressa ideia de procedência?',
    gabaritoCE: true,
    comentario:
      'Na expressão “de plantas alienígenas”, a preposição indica procedência, isto é, de onde as plantas vêm. A afirmação, portanto, está correta.',
  },
  {
    id: 'lp-invariaveis-qlivro14-07',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PC/ES - Cargos de Nível Superior - 2011) No trecho “estão convencidos de que as desigualdades são, em sua maior parte, sociais ou históricas”, a omissão da preposição “de” prejudicaria a correção gramatical do período.',
    gabaritoCE: true,
    comentario:
      'O adjetivo “convencidos” exige a preposição “de” (convencido de algo), por isso a sua omissão em “convencidos que” deixaria o período incorreto. A afirmação está correta.',
  },
  {
    id: 'lp-invariaveis-qlivro14-08',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - FUB - Cargos de Nível Médio - 2011) Em “importar dos Estados Unidos da América”, a preposição de, contida em “dos”, expressa ideia de procedência.',
    gabaritoCE: true,
    comentario:
      'A preposição “de”, contraída com o artigo “os” em “dos”, indica a origem do que é importado, ou seja, a procedência. Por isso a afirmação está correta.',
  },
  {
    id: 'lp-invariaveis-qlivro14-09',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - FUB - Analista de TI - 2011) Com relação ao vocabulário e à estrutura do texto, julgue os itens que se seguem. A retirada da preposição “de” em “A indicação inicial é a de que, sim, a rede (...)” não implicaria alteração do texto, quer do ponto de vista semântico, quer sintático.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “a de que” é uma construção em que a preposição “de” liga “indicação” ao conteúdo seguinte (a indicação é de que...), de modo que sua retirada altera a estrutura sintática e o sentido.',
  },
  {
    id: 'lp-invariaveis-qlivro14-10',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - IFB - Cargos de Nível Médio - 2011) No primeiro parágrafo do texto, contrapõem-se duas realidades diferentes; tal raciocínio é evidenciado pelo emprego da locução “Apesar de” (Apesar de estarmos em pleno século XXI, a aldeia deles ainda vive a realidade do subdesenvolvimento...).',
    gabaritoCE: true,
    comentario:
      '“Apesar de” introduz uma concessão, ou seja, um fato que contrasta com a expectativa, neste caso o século XXI e a realidade da aldeia. A locução evidencia a oposição entre as duas realidades, e a afirmação está correta.',
  },
  {
    id: 'lp-invariaveis-qlivro14-11',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES - Analista Judiciário - 2011) A substituição da locução “a fim de” (... agachar-se sob o túmulo a fim de escapar dos golpes...) por para manteria a correção gramatical e o sentido original do texto.',
    gabaritoCE: true,
    comentario:
      '“A fim de” e “para” expressam finalidade quando seguidos de infinitivo, de modo que são intercambiáveis. A substituição mantém a correção e o sentido do texto, o que torna a afirmação correta.',
  },
  {
    id: 'lp-invariaveis-qlivro14-12',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - SAP/SP - Oficial Administrativo - 2011) Considere a frase: Não se sabe ao certo quem foram os responsáveis pela agressão a moças obesas em uma festa de estudantes. Assinale a alternativa em que a preposição a está corretamente substituída.',
    alternativas: ['até.', 'contra.', 'entre.', 'por.', 'sobre.'],
    correta: 1,
    comentario:
      '“Agressão a moças” indica o alvo da ação, relação que se preserva com “contra”. As outras preposições alteram o sentido (até, entre, sobre) ou a gramática (por), por isso não servem.',
  },
  {
    id: 'lp-invariaveis-qlivro14-13',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - SAP/SP - Oficial Administrativo - 2011) Leia o texto. Uma resolução da Organização das Nações Unidas (ONU) pede o fim do apedrejamento no Irã. A resolução ainda condena Teerã ____ silenciar opositores. O Brasil optou ____ não se manifestar sobre o assunto. A mesma preposição que preenche, corretamente, ambas as lacunas é:',
    alternativas: ['com;', 'para;', 'por;', 'sob;', 'sobre.'],
    correta: 2,
    comentario:
      '“Condenar” pede a preposição “por” para indicar a razão da condenação, e “optar” também se constrói com “por” (optar por algo). A mesma preposição, portanto, preenche as duas lacunas.',
  },
  {
    id: 'lp-invariaveis-qlivro14-14',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Correios - Analista de Correios (Letras) - 2011) Fragmento de texto: “(...) Entretanto, insistimos em colocar a pergunta ‘o quê?’ antes da pergunta ‘quem?’, a despeito da tradição filosófica, cuja tendência foi fazer... (...)”. Em “a despeito da tradição filosófica”, o emprego da preposição “a” deve-se à relação sintática que o substantivo “despeito” estabelece com o verbo “colocar”.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “a despeito de” é locução prepositiva fixa, e o “a” faz parte da expressão, não se explica por regência do verbo “colocar”. A preposição é exigida pela locução, e não pelo verbo.',
  },
  {
    id: 'lp-invariaveis-qlivro14-15',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Correios - Cargos de Nível Superior - 2011) Seria mantida a correção gramatical do texto, se a preposição “de”, em sua primeira ocorrência, no trecho “de 17 de dezembro de 1663 a 28 de setembro de 1665” fosse substituída por entre.',
    gabaritoCE: false,
    comentario:
      'A correção não se mantém: “de ... a” marca o início e o fim de um período, e a substituição por “entre” destrói essa correlação temporal, pois “entre ... a” não é construção gramatical. O item, portanto, está errado.',
  },
  {
    id: 'lp-invariaveis-qlivro14-16',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - CNPQ - Analista em Ciência e Tecnologia Júnior - 2011) Fragmento de texto: “Na ciência moderna, a ruptura epistemológica simboliza o salto qualitativo do conhecimento do senso comum para o conhecimento científico (...)”. A primeira preposição em “do conhecimento do senso comum” exprime noção de origem do movimento expresso por “salto”, e a preposição empregada no trecho “para o conhecimento científico” exprime noção de fim desse movimento.',
    gabaritoCE: true,
    comentario:
      '“Do conhecimento do senso comum” indica o ponto de partida do movimento (origem), e “para o conhecimento científico” indica o ponto de chegada (fim). A afirmação está correta ao nomear essas noções.',
  },
  {
    id: 'lp-invariaveis-qlivro14-17',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - STM - Técnico Judiciário - 2011) Fragmento de texto: “... o cérebro faz uma espécie de faxina na memória de curto prazo para facilitar o armazenamento de novas informações. ‘Medidas como essa não só melhoram a capacidade cognitiva como são extremamente importantes para compensar a restrição ao sono...’”. A preposição para, em ambas as ocorrências, nas linhas 10 e 13, estabelece uma relação de consequência entre a oração de que faz parte e a oração que a antecede.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: nas duas ocorrências, “para” introduz a finalidade da ação anterior (facilitar o armazenamento, compensar a restrição), e não uma consequência.',
  },
  {
    id: 'lp-invariaveis-qlivro14-18',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - DPE/RS - Defensor Público - 2011) A passagem “..., em contraposição a tentações apressadas de recorrer à censura” contém o elemento gramatical a, que:',
    alternativas: [
      'define quais são as tentações, porque é um artigo;',
      'não define quais são as tentações, porque é artigo;',
      'define quais são as tentações, porque é uma preposição;',
      'não define quais são as tentações, porque é artigo indefinido;',
      'não define quais são as tentações, porque é preposição.',
    ],
    correta: 4,
    comentario:
      'O “a” de “em contraposição a tentações” é preposição, pois liga “contraposição” ao seu complemento; por isso não define quais são as tentações, função típica de um artigo definido. A alternativa E reúne essas duas informações corretas.',
  },
  {
    id: 'lp-invariaveis-qlivro14-19',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - DPE/RS - Defensor Público - 2011) A palavra para (... meios para convencer o Irã...) é uma:',
    alternativas: [
      'preposição derivada da regência verbal da palavra meios;',
      'conjunção que liga uma oração coordenada a uma subordinada;',
      'preposição que liga meios a um verbo intransitivo;',
      'preposição derivada da regência nominal da palavra meios;',
      'preposição que liga meios a um verbo.',
    ],
    correta: 3,
    comentario:
      '“Meios” é substantivo, e “para” liga esse nome ao infinitivo que expressa finalidade: trata-se de regência nominal. A alternativa D aponta exatamente isso, enquanto C e E atribuem a “para” uma ligação com verbo.',
  },
  {
    id: 'lp-invariaveis-qlivro14-20',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - Correios - Agente de Correios - 2011) (Adaptada) A afirmação abaixo está correta ou incorreta? A substituição da preposição “por” (... um património cultural de 246 km de areias pontilhado por montanhas...) por de prejudica a correção gramatical e a coerência do período.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “pontilhado de” e “pontilhado por” são construções aceitas, com sentido próximo, e a troca não prejudica a correção nem a coerência do período.',
  },
  {
    id: 'lp-invariaveis-qlivro14-21',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - PC/RJ - Guarda Municipal - 2011) Marque a alternativa em que o vocábulo “para” introduz ideia de finalidade.',
    alternativas: [
      '“... a meu ver, um dos documentos mais inspiradores para a presente crise.”',
      '“Dois valores, entre outros, considero axiais para esse novo começo...”',
      '“... o cuidado é uma arte, um paradigma novo de relacionamento para com a natureza, para com a terra...”',
      '“... se transforme em tragédia e para conferir eficácia...”',
    ],
    correta: 3,
    comentario:
      'Em D, “para conferir eficácia” introduz a finalidade da ação, ideia de propósito. Nas demais, “para” indica destinação, adequação ou relação (inspirador para, axiais para, para com a natureza), sem finalidade.',
  },
  {
    id: 'lp-invariaveis-qlivro14-22',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - PC/RJ - Perito Legista (Odontologia) - 2011) Por precaução, a maioria dos médicos recomenda evitar a combinação de bebida e remédios. A preposição “por”, no fragmento acima, tem valor de:',
    alternativas: ['meio;', 'modo;', 'condição;', 'consequência;', 'causa.'],
    correta: 4,
    comentario:
      '“Por precaução” indica o motivo da recomendação, ou seja, causa. Meio, modo, condição e consequência não se ajustam, pois o “por” não indica instrumento nem resultado do que se recomenda.',
  },
  {
    id: 'lp-invariaveis-qlivro14-23',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC/UFF - Pref. Angra dos Reis/RJ - Administrador - 2012) Em “Os mumificadores, ao abrirem os corpos dos faraós para retirar as entranhas...” (parágrafo 1), a preposição PARA indica relação de:',
    alternativas: ['lugar;', 'tempo;', 'fim;', 'proporção;', 'consequência.'],
    correta: 2,
    comentario:
      '“Para retirar as entranhas” indica a finalidade da ação de abrir os corpos, ou seja, o fim. Lugar, tempo, proporção e consequência não se ajustam à ideia de propósito do trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro14-24',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC/UFF - Pref. Angra dos Reis/RJ - Agente Administrativo - 2012) Na frase “O povo está muito satisfeito com as maquininhas PARA preocupar-se com o sumiço das letras”, a preposição em destaque indica relação de:',
    alternativas: ['finalidade', 'lugar', 'tempo', 'proporção', 'consequência'],
    correta: 4,
    comentario:
      'Ninguém se satisfaz com o propósito de se preocupar; a ideia é de resultado, pois o povo está tão satisfeito que chega a se preocupar. Por isso o “para” expressa consequência, e não finalidade.',
  },
  {
    id: 'lp-invariaveis-qlivro14-25',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FEC/UFF - PC/RJ - Inspetor de Polícia Civil - 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? APESAR DE introduz argumento orientado para a conclusão do texto.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “apesar de” introduz uma concessão, isto é, um argumento contrário à conclusão que o texto defende, e não um argumento que a reforça.',
  },
  {
    id: 'lp-invariaveis-qlivro14-26',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC/UFF - Câmara Municipal de Duque de Caxias/RJ - Agente de Processamento de Dados - 2012) No trecho “E apontava com o queixo, ATÉ curvando a boca com certo desdém”, a palavra destacada tem o valor semântico de:',
    alternativas: ['explanação;', 'retificação;', 'situação;', 'exclusão;', 'inclusão.'],
    correta: 4,
    comentario:
      '“Até”, nesse trecho, acrescenta a ação de curvar a boca à de apontar com o queixo, ideia de inclusão. Explanação, retificação, situação e exclusão não se aplicam a essa adição.',
  },
  {
    id: 'lp-invariaveis-qlivro14-27',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FEC/UFF - Câmara Municipal de Duque de Caxias/RJ - Agente de Processamento de Dados - 2012) No período “A esposa começou a chorar assim que a juíza a interrogou” há quatro ocorrências da palavra A, que se classifica, respectivamente, como:',
    alternativas: [
      'artigo, pronome, preposição, pronome;',
      'artigo, preposição, artigo, pronome;',
      'pronome, artigo, pronome, artigo;',
      'artigo, pronome, preposição, artigo;',
      'artigo, preposição, pronome, artigo.',
    ],
    correta: 1,
    comentario:
      'Em “A esposa” e “a juíza”, o “a” é artigo definido; em “começou a chorar”, é preposição que liga o verbo ao infinitivo; e em “a interrogou”, é pronome oblíquo. A sequência é artigo, preposição, artigo e pronome, correspondente à alternativa B.',
  },
  {
    id: 'lp-invariaveis-qlivro14-28',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FEC/UFF - Câmara Municipal de Duque de Caxias/RJ - Agente de Processamento de Dados - 2012) Para o correto preenchimento das lacunas na frase “O controle das faltas do funcionário ____ o patrão se referira era o mais eficiente recurso ____ os empregadores dispunham para procederem ao desconto no final do mês”, têm de ser usadas, respectivamente, as formas:',
    alternativas: [
      'a que - de que;',
      'a que - com que;',
      'que - a que;',
      'de que - que;',
      'de que - com que.',
    ],
    correta: 0,
    comentario:
      '“Referir-se a” pede “a que” (o funcionário a que o patrão se referia), e “dispor de” pede “de que” (o recurso de que dispunham). As demais combinações trocam a preposição exigida pelo verbo.',
  },
  {
    id: 'lp-invariaveis-qlivro14-29',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - CGU - Analista de Finanças e Controle - 2012) Assinale o conectivo que provoca erro gramatical e/ou incoerência textual ao preencher a lacuna do fragmento abaixo: A dívida pública mobiliária tem algumas características específicas. No que diz respeito à participação dos indexadores da dívida, continua crescendo a participação dos títulos atrelados à Selic (64,6% do total), ____ sua alta rentabilidade, segurança e liquidez; enquanto os títulos prefixados mantêm uma posição em torno de 35,5%. Quanto ao prazo, os títulos emitidos pelo BCB e pelo Tesouro Nacional têm prazo médio de 40,19 meses.',
    alternativas: ['ademais de;', 'em face de;', 'devido à;', 'em função de;', 'haja vista.'],
    correta: 0,
    comentario:
      '“Ademais” é advérbio (além disso) e não se constrói com a preposição “de”, por isso “ademais de” é construção errada. As demais locuções (em face de, devido a, em função de, haja vista) são aceitas como conectores de causa ou motivo.',
  },
  {
    id: 'lp-invariaveis-qlivro14-30',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(AOCP - BRDE - Analista de Projetos (Agronomia) - 2012) “Por um desses quiproquós da vida cultural, a tradicionalização, ou a referência à tradição, tornou-se um tema dos mais presentes na poesia contemporânea brasileira, quer dizer, a que vem sendo escrita desde meados dos anos 80”. O fragmento em que o elemento por (ou pelo/pela) estabelece a mesma relação semântica do elemento por do fragmento acima é:',
    alternativas: [
      '“Nessa visada, o passado é continuamente refeito pelo novo”.',
      '“sustentavam o tradicionalismo, tradição é o que se cultua por todos os lados”.',
      '“Eles recombinam formas, amparados por modelos anteriores”.',
      '“recriado pela contribuição do poeta moderno consciente de seus processos artísticos”.',
      '“por prazer de inventar, queria mudar o passado a partir da atualidade viva”.',
    ],
    correta: 4,
    comentario:
      'Em “por prazer de inventar”, o “por” indica causa, o motivo da ação de querer mudar o passado, como o “por” inicial do fragmento de referência. As demais indicam agente da passiva ou lugar, sem a ideia de causa.',
  },
  {
    id: 'lp-invariaveis-qlivro14-31',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe-SEE/AL - Professor de Língua Portuguesa - 2013) No trecho “pelos corredores da Escola Estadual Padre Afonso Paschotte, em Mauá, na Grande São Paulo”, os elementos “pelos”, “em” e “na” introduzem circunstâncias locativas.',
    gabaritoCE: true,
    comentario:
      '“Pelos corredores”, “em Mauá” e “na Grande São Paulo” indicam o espaço em que os fatos ocorrem, ou seja, circunstâncias locativas. Por isso a afirmação está correta.',
  },
  {
    id: 'lp-invariaveis-qlivro14-32',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto AOCP - EBSERH - Enfermeiro (HDT-UFT) - 2015) Assinale a alternativa cujo “para” em destaque NÃO tem função de introduzir uma ideia de finalidade.',
    alternativas: [
      '“a indústria farmacêutica gasta um grande valor para obter informações sobre a venda de remédios”.',
      '“obter informações sobre a venda de remédios para poder definir estratégias de marketing e a atuação dos representantes de laboratórios...”.',
      '“é proposto que cada membro da cadeia tenha seu próprio banco de dados (...) para que o governo federal construa seu próprio banco de dados”.',
      '“Porém, há uma disputa em jogo que pode levar o prazo de adequação para só depois de 2025”.',
      '“que o governo federal construa seu próprio banco de dados para armazenar e consultar todas as movimentações dos medicamentos”.',
    ],
    correta: 3,
    comentario:
      'Em “para só depois de 2025”, o “para” indica prazo, um limite de tempo, e não finalidade. As demais alternativas trazem finalidade, expressa por obter, definir, armazenar e pela oração “para que”.',
  },
  {
    id: 'lp-invariaveis-qlivro14-33',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Compesa - Analista de Gestão (Administrador de Banco de Dados) - 2016) Assinale a frase em que houve troca indevida entre sob/sobre.',
    alternativas: [
      '“Infância é vida sob uma ditadura”.',
      '“Falar sobre música é como dançar sobre arquitetura”.',
      '“O verso é uma vitória sobre os limites da linguagem”.',
      '“A interpretação é a vingança do intelecto sob a arte”.',
      '“Se tudo está sob controle é porque não se está indo suficientemente rápido”.',
    ],
    correta: 3,
    comentario:
      'A troca indevida está em “sob a arte”: a vingança do intelecto se dirige contra a arte, o que pede “contra”, e não “sob”, que indica posição inferior ou submissão. As demais expressões usam “sob” ou “sobre” de forma adequada.',
  },
  {
    id: 'lp-invariaveis-qlivro14-34',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Vunesp - Câmara de Barretos/SP - Advogado - 2017) O termo destacado na frase “Ninguém deixa de falar comigo POR falta de telefone” forma uma expressão com sentido de',
    alternativas: ['finalidade.', 'origem.', 'modo.', 'meio.', 'causa.'],
    correta: 4,
    comentario:
      '“Por falta de telefone” indica a razão pela qual ninguém deixa de falar, ou seja, causa. Finalidade, origem, modo e meio não descrevem o motivo expresso pelo complemento.',
  },
  {
    id: 'lp-invariaveis-qlivro14-35',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - DPE-RJ - Técnico Médio de Defensoria Pública - 2019) “Perseguido PELO branco, o negro no Brasil escondeu as suas crenças NOS terreiros das macumbas e dos candomblés. O folclore foi a válvula pela qual ele se comunicou COM a civilização branca, impregnando-a de maneira definitiva. As suas primitivas festas cíclicas — de religião e magia, de amor, de guerra, de caça e de pesca... — entremostraram-se assim disfarçadas E irreconhecíveis. O negro aproveitou as instituições aqui encontradas e POR elas canalizou o seu inconsciente ancestral...” Os termos destacados no texto são conectores; o sentido INADEQUADO de um desses conectores é:',
    alternativas: [
      'pelo / agente de ação;',
      'nos / lugar;',
      'com / companhia;',
      'e / adição;',
      'por / meio.',
    ],
    correta: 2,
    comentario:
      'Em “se comunicou COM a civilização branca”, a preposição indica o destinatário da comunicação, não companhia; por isso o sentido de companhia é inadequado. Os demais pares (pelo/agente, nos/lugar, e/adição, por/meio) estão corretos.',
  },
  {
    id: 'lp-invariaveis-qlivro14-36',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Instituto Consulplan - Prefeitura de Formiga/MG - Agente Social - 2020) A expressão “cerca de” em “Anualmente, são geradas cerca de 300 milhões de toneladas de lixo plástico no mundo” é classificada, morfologicamente, como:',
    alternativas: ['Advérbio.', 'Substantivo.', 'Locução conjuntiva.', 'Locução prepositiva.'],
    correta: 3,
    comentario:
      '“Cerca de” introduz uma quantidade aproximada (300 milhões), funciona como locução prepositiva e não é advérbio (que modifica verbo ou adjetivo) nem conjuntiva (que liga orações).',
  },
  {
    id: 'lp-invariaveis-qlivro14-37',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Prefeitura de Jundiaí — SP - Agente de Trânsito - 2021) Considere os trechos do texto. • ... para aguentar perto de quinze dias na casa do tio, onde ficaria ATÉ conseguir emprego. (2º parágrafo) • Adulto só encostava em criança PARA dar cascudo. (2º parágrafo) • Andou sozinho até a rodoviária, SEM ninguém junto para encurtar a partida. (3º parágrafo) As preposições destacadas passam, respectivamente, a noção de',
    alternativas: [
      'limite; conformidade; oposição.',
      'limite; finalidade; privação.',
      'limite; direção; tempo.',
      'distância; finalidade; oposição.',
      'distância; conformidade; privação.',
    ],
    correta: 1,
    comentario:
      '“Até” indica limite de tempo (até conseguir emprego), “para” indica finalidade (para dar cascudo) e “sem” indica privação (sem ninguém junto). Só a alternativa B traz essas três noções na ordem do texto.',
  },
  {
    id: 'lp-invariaveis-qlivro14-38',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Fundatec - IPE Saúde - Analista de Gestão em Saúde (Administração) - 2022) Assinale a alternativa que indica o número correto de preposições presentes no trecho a seguir, incluindo as que possam aparecer contraídas com outras palavras. “Essa lógica de estruturação e financiamento das atividades de atenção e assistência à saúde, além das evidentes discriminações dela decorrentes.”',
    alternativas: ['3.', '4.', '5.', '6.', '7.'],
    correta: 3,
    comentario:
      'Contadas as preposições puras e as contraídas, há seis: de (lógica de), de (das atividades), de (atividades de atenção), a (à saúde), de (além das) e de (dela). Esse total corresponde à alternativa D.',
  },
];
