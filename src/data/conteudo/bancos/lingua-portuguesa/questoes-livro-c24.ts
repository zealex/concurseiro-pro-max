import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 24 — Orações reduzidas), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C24: QuestaoTreino[] = [
  {
    id: 'lp-periodo-composto-qlivro24-01',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FSAI — Auditor Fiscal da Receita Federal — 2000) (Adaptada) (...) Mais uma vez, milhares de pessoas ganharam as ruas e forçaram os organizadores do encontro a antecipar o fim da reunião. (...) A afirmação abaixo está correta ou incorreta? O trecho “a antecipar o fim da reunião” funciona como objeto indireto.',
    gabaritoCE: true,
    comentario:
      'Com o verbo forçar, “os organizadores” é objeto direto e a oração reduzida de infinitivo “a antecipar o fim da reunião” é objeto indireto, pois se força alguém a fazer algo. Por isso a afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-02',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf — Auditor Fiscal Receita Federal — SRF — 2002) (Adaptada) “(...) O comportamento das pessoas em grupo, tornando suas ações conhecidas e avaliadas, segundo critérios éticos do mesmo grupo quanto ao caráter, às condutas ou às intenções manifestadas e assim por diante, só repercute no direito se extrapolarem os limites deste. (...)”. A afirmação abaixo está correta ou incorreta? A oração subordinada reduzida de gerúndio “tornando suas ações conhecidas e avaliadas” mantém seu valor adjetivo ao ser substituída pela desenvolvida adjetiva restritiva “que tornam suas ações conhecidas e avaliadas”.',
    gabaritoCE: false,
    comentario:
      'A oração de gerúndio indica a condição em que o comportamento é avaliado, o que tem valor circunstancial, e não de qualificação de um substantivo. Por isso a troca por uma adjetiva restritiva altera o sentido original, e a afirmação está incorreta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-03',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT (15ª R) — Analista Judiciário — 2005) A persistirem os sintomas, deve-se consultar o médico. A expressão sublinhada na frase acima tem o mesmo sentido que:',
    alternativas: [
      'ainda que persistam;',
      'tão logo persistam;',
      'a menos que persistam;',
      'caso venham a persistir;',
      'mesmo se vierem a persistir.',
    ],
    correta: 3,
    comentario:
      'A expressão “a persistirem os sintomas” é reduzida de infinitivo com valor condicional, equivalente a “caso venham a persistir”. As alternativas A e E têm sentido concessivo, B é temporal e C é condicional negativa, por isso não servem.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-04',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV — SSP-RJ — Perito Criminal — 2008) “Não vale a pena, nessa conjuntura, fragilizar o governo e sua política externa, como se fosse possível tornar esta matéria elemento decisivo para o jogo eleitoral para daqui a dois anos”. A respeito do trecho acima, analise os itens a seguir: I. O sujeito do primeiro verbo do trecho é oracional. II. O termo elemento decisivo tem função de predicativo do objeto. III. O sujeito do verbo no subjuntivo é oracional. Assinale:',
    alternativas: [
      'Se apenas os itens I e II estiverem corretos.',
      'Se apenas os itens I e III estiverem corretos.',
      'Se apenas os itens II e III estiverem corretos.',
      'Se nenhum item estiver correto.',
      'Se todos os itens estiverem corretos.',
    ],
    correta: 4,
    comentario:
      'Os três itens estão corretos: “fragilizar o governo ...” é o sujeito oracional de “vale a pena”; “elemento decisivo” é predicativo do objeto de “tornar esta matéria”; e “tornar esta matéria ...” é o sujeito oracional do verbo “fosse”. Por isso vale a alternativa E.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-05',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — Senado Federal — Polícia Legislativa — 2008) “Em julho de 1898, temendo por sua saúde, escreveu um testamento, deixando para Carolina, sua esposa, entre outros bens, 7.000 contos em títulos da dívida pública do empréstimo nacional de 1895”. No período acima, a oração destacada tem valor:',
    alternativas: ['condicional;', 'concessivo;', 'causal;', 'consecutivo;', 'conformativo.'],
    correta: 2,
    comentario:
      'A oração reduzida de gerúndio “temendo por sua saúde” explica o motivo de ter escrito o testamento, por isso tem valor causal, e pode ser desenvolvida por “porque temia por sua saúde”. Condição, concessão, consequência e conformidade não correspondem ao sentido da frase.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-06',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TST — Analista Judiciário — 2008) “(...) O capital, podendo optar por um investimento de porte em automação, em informática e em tecnologia de ponta, cada vez mais barata e acessível, não mais teria seu funcionamento embasado exclusivamente na exploração dos trabalhadores, cada vez mais exigentes quanto ao valor de sua força de trabalho. (...)”. O valor de adjetivo do gerúndio em “podendo optar” fica preservado se essa oração reduzida for substituída pela subordinada adjetiva correspondente: que pode optar. Essa substituição manteria a coerência e a correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      'O gerúndio “podendo optar” qualifica o substantivo “capital”, por isso tem valor adjetivo. A forma desenvolvida “que pode optar” mantém esse sentido restritivo e a mesma estrutura, sem prejuízo de coerência. A afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-07',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNCAB — Pref. Porto Velho/RO — Médico — 2009) “Desde cedo, a cidade teve o mérito de dar ao homem a possibilidade de evoluir além da luta pela sobrevivência pura e simples”. Aponte o período em que a oração reduzida abaixo foi corretamente desenvolvida. “Ninguém precisa ter medo da morte sabendo que seus genes serão imortais”.',
    alternativas: [
      'Ninguém precisava ter medo da morte de tal modo que sabia que seus genes são imortais.',
      'Embora soubesse que seus genes eram imortais, ninguém precisou ter medo da morte.',
      'Ninguém precisa ter medo da morte para saber que seus genes são imortais.',
      'Mesmo que soubesse que seus genes são imortais, ninguém precisaria ter medo da morte.',
      'Ninguém precisa ter medo da morte se sabe que seus genes serão imortais.',
    ],
    correta: 4,
    comentario:
      'A reduzida de gerúndio “sabendo que seus genes serão imortais” tem valor condicional e pode ser desenvolvida por “se sabe que seus genes serão imortais”, mantendo o sentido e o tempo verbal. As demais mudam o sentido, com consequência (de tal modo que), concessão (embora, mesmo que) ou finalidade (para saber).',
  },
  {
    id: 'lp-periodo-composto-qlivro24-08',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/MA (16ª R) — Técnico Judiciário — 2009) Ao falarem de chuva ... A frase acima está corretamente transcrita, sem alteração do sentido original, em:',
    alternativas: [
      'Quando falam de chuva ...',
      'À medida que falam de chuva ...',
      'Como falam de chuva ...',
      'Visto que falam de chuva ...',
      'Conquanto falem de chuva ...',
    ],
    correta: 0,
    comentario:
      'A reduzida “Ao falarem de chuva” tem valor temporal, e “Quando falam de chuva” mantém esse sentido com a mesma ideia de momento. “À medida que” indica proporção, “visto que” causa e “conquanto” concessão, por isso não servem.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-09',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/MG (3ª R) — Técnico Judiciário — 2009) Elas jogam milhões de toneladas de sedimentos no rio, inviabilizando sua navegabilidade. A oração grifada acima denota, considerando-se o contexto:',
    alternativas: ['causa;', 'ressalva;', 'consequência;', 'temporalidade;', 'proporcionalidade.'],
    correta: 2,
    comentario:
      'A reduzida de gerúndio “inviabilizando sua navegabilidade” expressa o resultado de jogar milhões de toneladas de sedimentos no rio, portanto uma consequência. Pode ser desenvolvida por “de modo que inviabiliza sua navegabilidade”. As demais relações não se aplicam ao contexto.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-10',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV — CODESP/SP — Técnico em Informática — 2010) Em 1994, foi criado o Conselho Nacional de Desenvolvimento Econômico e do Trabalho (National Economic Development and Labour Council — NEDLAC), cujo principal objetivo consistia em promover a integração entre governo, empresários e trabalhadores, tornando as decisões econômicas mais abrangentes para promover as metas do crescimento econômico e da igualdade social. Em relação ao período acima, analise as afirmativas a seguir: I. O período é composto por quatro orações. II. Há duas ocorrências de predicativo do objeto. III. Há um caso de oração subordinada substantiva objetiva direta. Assinale:',
    alternativas: [
      'Se apenas as afirmativas I e III estiverem corretas.',
      'Se apenas as afirmativas II e III estiverem corretas.',
      'Se apenas as afirmativas I e II estiverem corretas.',
      'Se nenhuma afirmativa estiver correta.',
      'Se todas as afirmativas estiverem corretas.',
    ],
    correta: 3,
    comentario:
      'Nenhuma afirmativa se sustenta, e a alternativa D é a correta. O período tem mais de quatro orações, pois há cinco formas verbais (foi criado, consistia, promover, tornando, promover), o que torna I falsa; II e III não se confirmam na análise dos termos.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-11',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Petrobras — Administrador Júnior — 2010) Em qual das orações reduzidas abaixo há ERRO quanto à circunstância a ela atribuída?',
    alternativas: [
      'Sem pensar, poderá, no futuro, pagar caro por suas decisões. (condição)',
      'Não vendo o mundo a seu redor, fez um julgamento que o prejudicou. (causa)',
      'Apesar de ser orgulhoso, estava disposto a novas tentativas. (consequência)',
      'Ao criticar o amigo, não se lembrou de que o mundo dá voltas. (tempo)',
      'Para ser finalmente feliz, era preciso mais uma vez analisar seu passado. (finalidade)',
    ],
    correta: 2,
    comentario:
      'Em C, “apesar de ser orgulhoso” expressa concessão, e não consequência: a disposição para novas tentativas contrasta com o orgulho, em vez de decorrer dele. As demais estão corretas: condição em “sem pensar”, causa em “não vendo”, tempo em “ao criticar” e finalidade em “para ser feliz”.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-12',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNCAB — PRODAM/AM — Analista de TI — 2010) A oração reduzida de gerúndio no período “Batendo de quina pode até matar” exprime, em relação à oração principal, a circunstância de:',
    alternativas: ['causa;', 'comparação;', 'condição;', 'consequência;', 'concessão.'],
    correta: 2,
    comentario:
      'A reduzida “Batendo de quina” equivale a “se bater de quina”, e expressa condição: a morte só ocorre se a batida acontecer. Causa, comparação, consequência e concessão não descrevem essa relação.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-13',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — BACEN — Analista do Banco Central — 2010) “Vemos incontáveis estrelas, emitindo sua radiação eletromagnética, perfeitamente indiferentes às atribulações humanas”. No período acima, encontram-se uma oração:',
    alternativas: [
      'principal e outra subordinada reduzida de infinitivo;',
      'principal e outra subordinada adjetiva reduzida de gerúndio;',
      'principal e outra subordinada adjetiva reduzida de particípio;',
      'coordenada e outra subordinada adjetiva restritiva;',
      'coordenada e outra subordinada reduzida de gerúndio.',
    ],
    correta: 1,
    comentario:
      'A oração “emitindo sua radiação eletromagnética” é reduzida de gerúndio com valor adjetivo, pois qualifica “incontáveis estrelas”, e a outra é a principal, “Vemos incontáveis estrelas”. A alternativa B reúne essas duas informações, enquanto as demais trocam o tipo de reduzida ou a relação entre as orações.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-14',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAURGS — TJ/RS — Oficial Escrevente — 2010) Considere a estrutura sintática do período seguinte: “Quando jovem, atravessou o mundo no navio Beagle, colhendo espécies diversas da flora, observando o comportamento da fauna local, colecionando fatos e anotações”. A respeito desse período, assinale a alternativa INCORRETA.',
    alternativas: [
      'A oração principal é atravessou o mundo no navio Beagle.',
      'A sequência Quando jovem pode ser interpretada como uma oração subordinada adverbial proporcional, em que o verbo era está elíptico.',
      'As orações colhendo espécies diversas da flora / observando o comportamento da fauna local / colecionando fatos e anotações estabelecem com a principal uma relação de subordinação explicitada pelo emprego do gerúndio.',
      'As orações colhendo espécies diversas da flora / observando o comportamento da fauna local / colecionando fatos e anotações estabelecem entre si uma relação de coordenação em que está ausente a conjunção.',
      'As orações colhendo espécies diversas da flora / observando o comportamento da fauna local / colecionando fatos e anotações classificam-se como subordinadas adverbiais, nas quais se observa uma relação de simultaneidade de eventos.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a incorreta: “quando jovem” tem valor temporal, pois equivale a “quando era jovem”, e não proporcional. As demais descrevem corretamente a principal e as reduzidas de gerúndio como subordinadas adverbiais de simultaneidade, sem conjunção entre si.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-15',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC — TJ/PI — Analista Judiciário — 2010) (Adaptada) “(...) Dada a extrema desigualdade no perfil brasileiro de distribuição de renda, os bons e os maus caminhos bifurcam-se logo adiante. (...)”. A afirmação abaixo está correta ou incorreta? A noção transmitida pelo segmento grifado em “Dada a extrema desigualdade no perfil brasileiro de distribuição de renda” permanecerá a mesma se ele for substituído por “Devido à extrema desigualdade.”',
    gabaritoCE: true,
    comentario:
      'O segmento “Dada a extrema desigualdade” é reduzida de particípio com valor causal, e “Devido à extrema desigualdade” também expressa causa. Como o sentido se mantém, a afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-16',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf — Auditor Fiscal do Trabalho — 2010) (Adaptada) “(...) Por meio do aumento dos padrões de conforto e acesso à informação, essa civilização cria condições favoráveis para desafiar radicalmente os velhos laços de autoridade”. A afirmação abaixo está correta ou incorreta? Pode-se substituir o segmento “para desafiar” por “para que se desafiem”.',
    gabaritoCE: true,
    comentario:
      'O segmento “para desafiar” é reduzida de infinitivo com valor final. Na forma desenvolvida, “para que se desafiem” mantém a finalidade, com o sujeito do infinitivo passando a sujeito de uma oração própria. A substituição é possível, e a afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-17',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — IFB — Cargos de Nível Médio — 2011) Considerando-se apenas o trecho “Viver em ambiente sem gravidade faz coisas curiosas com o corpo”, não se pode determinar, do ponto de vista sintático, o sujeito da forma verbal “faz”.',
    gabaritoCE: false,
    comentario:
      'O sujeito de “faz” é “Viver em ambiente sem gravidade”, uma oração reduzida de infinitivo com função de sujeito, que está identificada na própria frase. Como o sujeito pode ser determinado, a afirmação está errada.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-18',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB — TJ/ES — Analista Judiciário (Letras) — 2011) Para que a argumentação do texto seja coerente, a oração “pertencendo a grupos sociais diferentes” (Diferentes pessoas, pertencendo a grupos sociais diferentes, têm não apenas histórias diferentes para contar, mas formas diferentes de contá-las...) deve ser interpretada como condicional, correspondente à seguinte oração: caso pertençam a grupos sociais diferentes.',
    gabaritoCE: false,
    comentario:
      'A frase afirma um fato, e não uma hipótese: as pessoas têm histórias diferentes, e o gerúndio explica ou qualifica essa diferença. Como não há ideia de condição, a interpretação condicional está errada.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-19',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TJ/ES — Analista Judiciário (Letras) — 2011) Preservam-se a coerência e a correção gramatical do texto ao se substituir “a separar” (... é ideal que o fosso material a separar as pessoas seja menos profundo) por que separa.',
    gabaritoCE: true,
    comentario:
      'O infinitivo “a separar” é reduzida com valor adjetivo, pois qualifica “fosso material”. A forma “que separa” é a oração adjetiva correspondente e mantém o sentido e a concordância do texto. A afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-20',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(COPEVE/UFAL — UFAL — Bibliotecário Documentalista — 2011) (Adaptada) “Na Espanha, as mulheres estão prontas a conseguir mais uma vitória no que toca à igualdade de direitos entre os sexos. Um projeto de lei, em debate no parlamento espanhol, propõe que não seja mais obrigatório o sobrenome do pai vir em primeiro lugar — deixando a cargo dos pais escolher a ordem dos sobrenomes. No caso de não haver consenso, porém, valerá a ordem alfabética”. A afirmação abaixo está correta ou incorreta? Os verbos conseguir, vir e haver introduzem orações reduzidas de infinitivo.',
    gabaritoCE: true,
    comentario:
      'Os verbos conseguir, vir e haver estão no infinitivo e funcionam como núcleos de orações reduzidas: “a conseguir”, “o sobrenome do pai vir” (com sujeito próprio) e “não haver consenso”. Por isso a afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-21',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(FESMIP/BA — MPE/BA — Analista de Sistemas — 2011) (Adaptada) “Assim, cabe frisar que reconhecer a importância da educação na existência da humanidade é dar valor àquilo que consideramos como nossa própria descendência cultural”. A afirmação abaixo está correta ou incorreta? A expressão “cabe frisar” forma uma locução verbal, uma vez que o verbo no infinitivo não pode ser desdobrado em uma oração com a presença de um conectivo.',
    gabaritoCE: false,
    comentario:
      'O verbo “caber” tem como sujeito a oração “frisar que reconhecer a importância ... é dar valor ...”, que é um sujeito complexo, e não uma locução verbal. A afirmação está incorreta, pois o infinitivo pode, sim, ser desdobrado em oração.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-22',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(FCC — TRE/AP — Analista Judiciário — 2011) (Adaptada) “A extensão do star-system não se dá sem uma forma de banalização ou mesmo de degradação – da figura pura da estrela, trazendo consigo uma imagem de eternidade, chega-se à vedete do momento, à figura fugidia da celebridade do dia; do ícone único e insubstituível, passa-se a uma comunidade internacional de pessoas conhecidas, “celebrizadas”, das quais revistas especializadas divulgam as fotos, contam os segredos, perseguem a intimidade”. A afirmação abaixo está correta ou incorreta? A forma trazendo expressa, na frase, sentido de condicionalidade, equivalendo a “se trouxer”.',
    gabaritoCE: false,
    comentario:
      'A forma “trazendo” é reduzida de gerúndio com valor circunstancial de modo, pois descreve como se chega à vedete. Não há hipótese nem condição, por isso a equivalência com “se trouxer” está errada.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-23',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC — TRT/MT (23ª R) — Analista Judiciário — 2011) Quando a bordo, e por não poderem acender fogo, os viajantes tinham de contentar-se, geralmente, com feijão frio, feito de véspera. Identificam-se nos segmentos grifados na frase acima, respectivamente, noções de:',
    alternativas: [
      'modo e consequência;',
      'causa e concessão;',
      'temporalidade e causa;',
      'modo e temporalidade;',
      'consequência e oposição.',
    ],
    correta: 2,
    comentario:
      'Em “Quando a bordo”, a expressão indica tempo, e em “por não poderem acender fogo”, indica causa, a razão de terem de se contentar com feijão frio. Por isso a alternativa C é a correta; as demais misturam noções de modo, consequência e oposição que não aparecem no trecho.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-24',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — CTEPE — Mecânico Têxtil Pleno — 2011) A oração reduzida “Ela, ao tentar puxar a ponta de fio do casulo, fez com que fino fio de seda se desenrolasse” transmite uma ideia de:',
    alternativas: ['finalidade;', 'concessão;', 'condição;', 'tempo;', 'consequência.'],
    correta: 3,
    comentario:
      'A reduzida “ao tentar puxar a ponta de fio do casulo” indica o momento em que a ação ocorreu, valor temporal, pois equivale a “quando tentava puxar”. Finalidade, concessão, condição e consequência não descrevem a ideia da expressão.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-25',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — BNDES — Engenheiro — 2011) “O diabo é que, de tanto ver, a gente banaliza o olhar”. Na linha argumentativa do texto, a oração “que a gente banaliza o olhar” em relação à oração “de tanto ver” encerra uma:',
    alternativas: [
      'causa;',
      'consequência;',
      'conformidade;',
      'condição;',
      'concessão.',
    ],
    correta: 1,
    comentario:
      'A reduzida “de tanto ver” indica a causa do fato, e a oração “que a gente banaliza o olhar” apresenta a consequência desse excesso de ver. A locução “de tanto” é o recurso típico para introduzir essa relação de consequência.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-26',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRF (2ª R) — Analista Judiciário — 2012) “... uma espécie de religiosidade de resultados, que invoca as forças celestes para garantir as ambições terrenas dos fiéis”. No contexto da frase acima, é correto dizer que o segmento grifado possui sentido de:',
    alternativas: [
      'consequência;',
      'finalidade;',
      'concessão;',
      'proporção;',
      'condição.',
    ],
    correta: 1,
    comentario:
      'O segmento “para garantir as ambições terrenas dos fiéis” é reduzida de infinitivo com valor final, pois indica o objetivo de invocar as forças celestes. As demais relações, como consequência, concessão, proporção e condição, não se aplicam a essa ideia de objetivo.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-27',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp — CREFITO/SP — Secretário da Presidência — 2012) Em “Com o mChip, basta uma espetada e uma gota de sangue para o texto sair em minutos, dizendo na hora se a pessoa está saudável ou não”, a expressão em destaque pode ser substituída, sem alteração de sentido, por:',
    alternativas: ['embora diga;', 'mas dirá;', 'visto que diga;', 'logo dirá;', 'e dirá.'],
    correta: 4,
    comentario:
      'O gerúndio “dizendo” acrescenta uma informação ao que o texto faz, e por isso equivale a “e dirá”, que preserva o sentido. “Embora diga”, “mas dirá” e “visto que diga” introduzem concessão, oposição ou causa, que não estão no trecho.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-28',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB — TELEBRAS — Especialista — 2013) No trecho “Cooper usou sua nova invenção para ligar para Joel Engel”, a preposição “para” expressa, em ambas as ocorrências, ideia de finalidade, introduzindo expressões adverbiais.',
    gabaritoCE: false,
    comentario:
      'Na primeira ocorrência, “para ligar” expressa finalidade. Na segunda, “para Joel Engel” é complemento do verbo ligar (objeto indireto), e não expressão adverbial de finalidade. Por isso a afirmação está errada.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-29',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — Prefeitura de Osasco/SP — Fiscal Tributário — 2014) “PASSADA A COPA, na retomada do cotidiano, é provável que encontremos, intactos, o desencanto e o mau humor (...)”. A oração que corresponde adequadamente à reduzida de particípio acima destacada é:',
    alternativas: [
      'à medida que a Copa vai passando.',
      'embora a Copa tenha passado.',
      'se a Copa tiver passado.',
      'na medida em que a Copa passar.',
      'quando a Copa tiver passado.',
    ],
    correta: 4,
    comentario:
      'A reduzida de particípio “passada a Copa” indica o momento posterior ao fim do evento, com valor temporal, e equivale a “quando a Copa tiver passado”. As demais alteram o sentido: “à medida que” indica proporção, “embora” concessão e “se” condição.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-30',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB — TJDFT — Técnico Judiciário — 2015) Em “Importa destacar” (“Importa destacar que a violência intrafamiliar pode se dar...”), a oração “destacar” exerce função de sujeito.',
    gabaritoCE: true,
    comentario:
      'O infinitivo “destacar” é o sujeito de “importa”, pois o que importa é destacar. A oração reduzida tem função de sujeito, e a afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-31',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNRIO — IF/PA — Auxiliar em Administração — 2016) “(...) De acordo com a tradição católica, São Jorge foi um santo romano... que passou a ser perseguido pelo imperador até ser morto, por se posicionar contrário às perseguições do Império Romano”. A oração que termina o parágrafo acima é classificada sintaticamente como:',
    alternativas: [
      'subordinada adverbial causal.',
      'coordenada sindética explicativa.',
      'subordinada adjetiva explicativa.',
      'subordinada substantiva predicativa.',
      'subordinada substantiva objetiva indireta.',
    ],
    correta: 0,
    comentario:
      'A oração “por se posicionar contrário às perseguições do Império Romano” indica a razão pela qual São Jorge foi morto, função de adjunto adverbial de causa, expressa por oração reduzida de infinitivo. Por isso é subordinada adverbial causal, e não explicativa, adjetiva ou substantiva.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-32',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE — STM — Analista Judiciário (Revisão de Texto) — 2018) Fragmento de texto: “Ademais, disseminou-se, na estrutura do movimento em torno da qualidade total, a relevância de as organizações públicas considerarem com maior atenção seus clientes e outras partes interessadas, rompendo corporativismos e privilégios históricos.” No contexto em que aparece, a oração reduzida “rompendo corporativismos e privilégios históricos” possui sentido de finalidade.',
    gabaritoCE: false,
    comentario:
      'O gerúndio “rompendo corporativismos e privilégios históricos” descreve a maneira como as organizações devem atuar, ou seja, valor de modo, e não indica o propósito da atenção aos clientes. Por isso a afirmação está errada.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-33',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(INSTITUTO AOCP — UFPB — Administrador de Edifícios — 2019) (Adaptada) Em “É importante informar todos os trabalhos dos quais participou”, tem-se uma oração subordinada substantiva subjetiva reduzida de infinitivo.',
    gabaritoCE: true,
    comentario:
      'O infinitivo “informar” é o sujeito de “é importante”, o que caracteriza uma oração subordinada substantiva subjetiva reduzida de infinitivo. Por isso a afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-34',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUNDATEC — Prefeitura de Santiago do Sul/SC — Assistente Social — 2020) Em “o grupo acusado de criar o programa espião...”, tem-se uma oração subordinada ____ reduzida de ____. Assinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.',
    alternativas: [
      'adverbial - particípio',
      'adverbial - infinitivo',
      'adjetiva - infinitivo',
      'substantiva - particípio',
      'substantiva - infinitivo',
    ],
    correta: 4,
    comentario:
      'O infinitivo “de criar o programa espião” completa o particípio “acusado”, o que caracteriza uma oração substantiva completiva, reduzida de infinitivo. As alternativas que trazem oração adjetiva ou adverbial não correspondem a essa relação de complemento.',
  },
  {
    id: 'lp-periodo-composto-qlivro24-35',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — SFPOG/RO — Analista em Tecnologia da Informação e Comunicação — 2017) Alguns locais são impróprios “para a construção de moradias”. Se substituirmos o segmento destacado por uma oração reduzida, teremos como forma correta:',
    alternativas: [
      'para construírem-se moradias.',
      'para que se construísse moradias.',
      'para que se construa moradias.',
      'para que se construam moradias.',
      'para moradias ser construídas.',
    ],
    correta: 0,
    comentario:
      'O segmento expressa finalidade, e a forma reduzida de infinitivo traz o verbo sem flexão de tempo e modo, com o pronome “se” ligado a ele: “para construírem-se moradias”. As alternativas com “que” e verbo conjugado são orações desenvolvidas, não reduzidas. “Para moradias ser construídas” não concorda com o sujeito plural do infinitivo e não é a forma correta.',
  },
];
