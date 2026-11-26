import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 30 — Crase), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C30: QuestaoTreino[] = [
  {
    id: 'lp-crase-qlivro30-01',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - MPE/PI - TÉCNICO MINISTERIAL - 2018) É obrigatório o sinal indicativo de crase empregado em “dando viço às suas peregrinações”, de maneira que sua supressão acarretaria incorreção gramatical no texto.',
    gabaritoCE: true,
    comentario:
      'O enunciado fala do sinal indicativo de crase, e não da crase em si, e essa distinção é a pegadinha. O verbo dar exige a preposição a e o artigo as está explícito, o que resulta em a + as = às; sem o acento o trecho ficaria incorreto. O possessivo plural torna o artigo facultativo, mas, uma vez presente o artigo, o acento passa a ser obrigatório.',
  },
  {
    id: 'lp-crase-qlivro30-02',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE-ABIN-2018) Fragmento de texto: “a espionagem... não tem natureza de crime em sentido técnico, mas, sim, de infração política sujeita a cassação de mandato e suspensão dos direitos políticos”. O paralelismo sintático do último parágrafo do texto seria prejudicado se fosse inserido sinal indicativo de crase em “a cassação”.',
    gabaritoCE: true,
    comentario:
      'Os termos coordenados “a cassação de mandato e suspensão dos direitos políticos” têm estrutura diferente: o primeiro vem com preposição e o segundo sem ela. Inserir crase em “a cassação” criaria uma assimetria que quebra o paralelismo sintático, o que torna a afirmação certa. Aqui a regra do paralelismo prevalece sobre a regência isolada do verbo.',
  },
  {
    id: 'lp-crase-qlivro30-03',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - IPHAN - 2018) Fragmento de texto: “conceitos rígidos dão lugar à flexibilidade, à análise de cenários alternativos e à inclusão da sociedade na formulação das políticas”. No trecho “à análise de cenários alternativos e à inclusão da sociedade na formulação das políticas”, o emprego do sinal indicativo de crase é obrigatório em ambas as ocorrências.',
    gabaritoCE: true,
    comentario:
      'A série coordenada apresenta preposição com artigo diante de cada termo, e o verbo “dar lugar” exige a preposição a. Em cada ocorrência o a preposicionado se funde com o artigo feminino, o que torna o acento obrigatório nas duas. Como a estrutura com artigo expresso é a norma nesse caso, a afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-04',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - DEPEN - 2015) Sem prejuízo para a correção gramatical do texto, o sinal indicativo de crase poderia ser eliminado em ambas as ocorrências no trecho “projetos voltados à recuperação e à reinserção social”.',
    gabaritoCE: true,
    comentario:
      'A preposição a aparece antes de cada termo coordenado, e a série admite a leitura com ou sem artigo sem perda de sentido. Retirando o acento, teríamos “voltados a recuperação e a reinserção”, construção coordenada que a norma aceita por paralelismo. A supressão não prejudica o texto, e a afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-05',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE/UnB - PF - 2014) O acento indicativo de crase em “O uso indevido de drogas constitui ameaça a humanidade e à estabilidade” é de uso facultativo, razão por que sua supressão não prejudicaria a correção gramatical do texto.',
    gabaritoCE: false,
    comentario:
      '“Humanidade”, no sentido de espécie humana, sempre vem com artigo, e por isso não pode ser lida ora como genérica, ora como específica. Nesse contexto a preposição a pede o artigo e a crase é obrigatória, pois a supressão causaria erro. A afirmação, que trata o acento como facultativo, está errada.',
  },
  {
    id: 'lp-crase-qlivro30-06',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE/UnB - CEF - 2014) Seria mantida a correção gramatical do texto caso fosse empregado o sinal indicativo de crase no “a” em “ligados a computação, informática, TI e análise de sistemas”.',
    gabaritoCE: false,
    comentario:
      'Os termos da enumeração têm sentido genérico e não recebem artigo, e a preposição aparece uma só vez. Acrescentar o acento introduziria um artigo com determinação que a série não comporta, deixando a frase incorreta. O gabarito oficial foi errado, embora o preliminar tivesse marcado certo.',
  },
  {
    id: 'lp-crase-qlivro30-07',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - MJ - 2013) O emprego do sinal indicativo de crase na expressão “respeito ao controle e à vigilância dos comportamentos humanos” é facultativo.',
    gabaritoCE: false,
    comentario:
      'Em “ao controle e à vigilância” o artigo aparece diante dos dois termos, e o segundo é feminino, o que produz a fusão a + a. Como “respeito” exige a preposição e os termos estão determinados, o acento é obrigatório e não facultativo. Por isso a afirmação está errada.',
  },
  {
    id: 'lp-crase-qlivro30-08',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE/UnB - PC/BA - 2013) O emprego do sinal indicativo de crase é obrigatório em “O respeito às diferentes manifestações” e facultativo em “atividades ligadas às artes plásticas, à literatura, à música e ao artesanato”.',
    gabaritoCE: false,
    comentario:
      'Em “O respeito às diferentes manifestações” o acento é obrigatório, por regência de respeito com artigo plural. Já em “ligadas às artes plásticas, à literatura, à música e ao artesanato” o acento também é obrigatório, pois ligar-se exige a preposição e cada termo vem determinado pelo artigo. Como a segunda parte está errada, a afirmação é errada.',
  },
  {
    id: 'lp-crase-qlivro30-09',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE/UnB - TRE/GO - ANALISTA JUDICIÁRIO - 2009) No segundo período do texto (Os filósofos gregos começaram a buscar a verdade em relação ou oposição à falsidade, ilusão, aparência), mantêm-se as relações semânticas, bem como a correção gramatical, ao se inserir “à” antes de “ilusão” e antes de “aparência”.',
    gabaritoCE: true,
    comentario:
      'A preposição a aparece antes de cada termo da enumeração, o que caracteriza paralelismo com preposição repetida. Inserir “à” antes de “ilusão” e de “aparência” mantém a estrutura e o sentido, porque todos os termos recebem o mesmo tratamento. A afirmação, portanto, está certa.',
  },
  {
    id: 'lp-crase-qlivro30-10',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PRF - Policial Rodoviário Federal - 2004) “O mais recente êxito de Lula na ordem internacional foi o discurso proferido na Assembleia Geral da Organização das Nações Unidas (ONU), em Nova Iorque, quando propôs a criação de um comité de chefes de Estado para dinamizar as ações de combate à fome e à miséria em todo o mundo”. Os sinais indicativos de crase em “combate à fome e à miséria” podem ser eliminados sem prejuízo para a correção do período.',
    gabaritoCE: true,
    comentario:
      'Os substantivos “fome” e “miséria” são usados em sentido genérico, sem artigo, pois se fala do combate a esses males em geral. Nesse caso a preposição a permanece sem acento e a frase continua correta. Por isso a supressão não prejudica o período, e a afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-11',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - FUB - Analista de TI - 2011) O uso do sinal indicativo de crase em “à imediata erosão” (“Tudo o que eu aprendo está sujeito à imediata erosão”, afirma.) é obrigatório.',
    gabaritoCE: false,
    comentario:
      '“Erosão” está em sentido genérico, pois não se fala de uma erosão específica, mas de qualquer erosão que possa acontecer. O adjetivo “imediata” é modalizador e não individualiza o substantivo, por isso não surge artigo e não há crase. A obrigatoriedade afirmada está errada.',
  },
  {
    id: 'lp-crase-qlivro30-12',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe - CORREIOS - nível superior - 2011) O emprego do sinal indicativo de crase em “Sujeitado a residência forçada” (Sujeitado a residência forçada, Antônio Vieira ansiava pela chegada do correio...) manteria a correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      'O verbo “sujeitar” pede a preposição a, e “residência” aparece determinada, pois se trata da residência específica imposta a Vieira. Assim o “a” se funde com o artigo implícito e a crase se justifica, como mostra a substituição por “ao trabalho forçado”. A afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-13',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe - MPE/PI — nível médio — 2012) O emprego do sinal indicativo de crase em “ligados à globalização” (Eles estão inextricavelmente ligados à globalização) é facultativo, pois o termo “globalização” poderia ser empregado, nesse contexto, de forma indeterminada, indefinida e, consequentemente, sem o artigo definido.',
    gabaritoCE: true,
    comentario:
      'O substantivo “globalização” pode ser usado em sentido genérico, sem artigo, como ocorre com outros termos indeterminados. Nesse caso a preposição fica sem artigo e a frase permanece correta sem o acento. Por isso o acento é facultativo e a afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-14',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe - SEFAZ/RS - Auditor Fiscal da Receita Estadual - 2019) Fragmento de texto: “... qualquer imposição tributária privada seria comparável a usurpação ou roubo”. A inserção do sinal indicativo de crase em “a usurpação” não prejudicaria a correção gramatical do texto.',
    gabaritoCE: false,
    comentario:
      '“Usurpação” e “roubo” são usados em sentido genérico, como se equivalessem a infinitivos (“ao ato de usurpar ou roubar”), e por isso não recebem artigo. Sem artigo não existe crase, e o acento em “a usurpação” introduziria um artigo que a frase não tem, prejudicando a correção. A afirmação está errada.',
  },
  {
    id: 'lp-crase-qlivro30-15',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EAGS — Sargento — 2012) Assinale a alternativa na qual o grupo em negrito atua como conjunção subordinativa.',
    alternativas: [
      'Eu me referi à medida que contemplaria a maioria.',
      'O sol ardia mais manso à medida que a tarde se esvaía.',
      'Os moradores deram crédito à medida que cortou a água.',
      'À medida que una os dois povos é o que todos visam hoje.',
    ],
    correta: 1,
    comentario:
      'Na alternativa b, “à medida que” é locução conjuntiva proporcional que introduz oração subordinada adverbial, e a crase é obrigatória por se tratar de locução de núcleo feminino. Nas alternativas a, c e d, “medida” é antecedente de um pronome relativo, e a crase vem da preposição exigida pelo verbo (referir-se, dar, visar), não de uma conjunção. Por isso só a alternativa b apresenta o grupo como conjunção.',
  },
  {
    id: 'lp-crase-qlivro30-16',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — Senado Federal — Policial Legislativo Federal — 2008) Assinale a alternativa em que se tenha optado corretamente por utilizar ou não o acento grave indicativo de crase.',
    alternativas: [
      'Vou à Brasília dos meus sonhos.',
      'Nosso expediente é de segunda à sexta.',
      'Pretendo viajar a Paraíba.',
      'Ele gosta de bife à cavalo.',
      'Ele tem dinheiro à valer.',
    ],
    correta: 0,
    comentario:
      'Em “Vou à Brasília dos meus sonhos” o nome da cidade vem especificado pelo complemento, o que autoriza o artigo e a crase. Nas demais há erro: em “de segunda à sexta” a correlação “de... a” exige a sem acento, em “viajar a Paraíba” o topônimo feminino aceita artigo e deveria ter crase, em “bife à cavalo” a expressão não tem artigo, e em “à valer” a locução correta é “a valer”.',
  },
  {
    id: 'lp-crase-qlivro30-17',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC — MAPA — Analista de Sistemas — 2010) Na oração “Eles nos deixaram À VONTADE” e no trecho “inviabilizando o ataque, que, naturalmente, deveria ser feito À DISTÂNCIA”, observa-se a ocorrência da crase nas locuções adverbiais em caixa-alta. Nas locuções das frases abaixo também ocorre a crase, que deve ser marcada com o acento, EXCETO em:',
    alternativas: [
      'Todos estavam à espera de uma solução para o problema.',
      'À proporção que o tempo passava, maior era a angústia do eleitorado pelo resultado final.',
      'Um problema à toa emperrou o funcionamento do sistema.',
      'Os técnicos estavam face à face com um problema insolúvel.',
      'O Tribunal ficou à mercê dos hackers que invadiram o sistema.',
    ],
    correta: 3,
    comentario:
      'Em “face à face” a palavra se repete sem artigo, formando locução de sentido recíproco, e por isso não recebe crase: é a exceção pedida. As demais são locuções adverbiais, prepositivas ou conjuntivas com núcleo feminino (à espera de, à proporção que, à toa, à mercê de), e nelas o acento grave é obrigatório.',
  },
  {
    id: 'lp-crase-qlivro30-18',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB — EAGS — Sargento — 2011) Em qual alternativa a ausência da crase pode alterar a função sintática do adjunto adverbial?',
    alternativas: [
      'Saiu às escondidas antes do final do jantar.',
      'Saiu às onze horas antes do final do jantar.',
      'Saiu às pressas antes do final do jantar.',
      'Saiu à francesa antes do final do jantar.',
    ],
    correta: 3,
    comentario:
      'Em “saiu à francesa” a expressão é adjunto adverbial de modo, e sem o acento “a francesa” passa a ser um sintagma nominal com núcleo substantivo, que pode exercer outra função. Nas demais alternativas, retirar o acento muda a grafia, mas a expressão continua como adjunto adverbial de modo ou de tempo, com a mesma função. Por isso a resposta é a alternativa d.',
  },
  {
    id: 'lp-crase-qlivro30-19',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf — MDIC — Analista de Comércio Exterior — 2012) O texto abaixo foi transcrito com adaptações. Assinale a opção que manteve o emprego correto do sinal indicativo de crase. “Interessa à (1) todo o País, por sua importância para à (2) produção, à (3) criação de empregos e o desenvolvimento, a agenda levada ao Congresso pelo presidente da Confederação Nacional da Indústria - CNI. Ao apresentar uma lista de 131 projetos considerados favoráveis ou prejudiciais ao setor, ele cobrou dos parlamentares, como de costume, atenção urgente às (4) questões de grande relevância para à (5) economia, especialmente numa fase de crise internacional”.',
    alternativas: ['(1)', '(2)', '(3)', '(4)', '(5)'],
    correta: 3,
    comentario:
      'Só o acento de “às (4) questões” está adequado: “atenção” exige a preposição a e “questões” vem determinado pelo artigo plural. Em (1), “todo” é pronome indefinido e dispensa artigo; em (2), (3) e (5), o acento aparece diante de termos sem artigo, como “produção” e “criação”, ou junto de “para”, que não se funde com o artigo. Por isso a opção correta é a (4).',
  },
  {
    id: 'lp-crase-qlivro30-21',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf — SRF — Analista Tributário da Receita Federal — 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) Não estão em pauta medidas juridicamente controversas nem de impacto sobre o orçamento no curto prazo, mas decisões a serem tomadas logo para atenuar, no futuro, a expansão da despesa com a Previdência. Hoje, ela já é da ordem de 10% do PIB (incluindo o setor público), comparável à de países mais ricos e com maior número de idosos. (...)” O emprego do sinal indicativo de crase em “à de países” justifica-se pela fusão da preposição “a”, exigida pelo adjetivo “comparável”, com o artigo definido feminino singular “a” que acompanha o substantivo “despesa”, elíptico na frase.',
    gabaritoCE: true,
    comentario:
      'O adjetivo “comparável” exige a preposição a, e o termo “de países” traz o artigo feminino elíptico que concorda com “despesa”. A fusão a + a produz o “à” e a justificativa dada está correta. A afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-22',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Assinale a opção que corresponde a erro gramatical na transcrição do texto abaixo. A pequena reação da indústria em junho (crescimento de 0,2% em relação a maio) não foi suficiente para compensar a (1) queda da produção no primeiro semestre, da ordem de 3,8%, quando comparada à (2) produção do mesmo período de 2011. Segundo o IBGE, responsável por essa estatística, a indústria brasileira hoje produz o mesmo que há (3) três anos. Mesmo que o setor tenha passado por um ponto de inflexão, como acredita o ministro da Fazenda, Guido Mantega, é pouco provável que a (4) produção chegue à (5) registrar crescimento em 2012. Os especialistas projetam uma queda de até 2%, o que contribuirá para o fraco desempenho do Produto Interno Bruto (PIB) este ano.',
    alternativas: ['(1)', '(2)', '(3)', '(4)', '(5)'],
    correta: 4,
    comentario:
      'O erro está em “chegue à (5) registrar”, pois a crase não ocorre antes de verbo no infinitivo, já que não há artigo a ser fundido com a preposição de “chegar”. Em (1), “compensar” é verbo transitivo direto e o “a” é artigo sem preposição; em (2), “comparada à produção” tem preposição com artigo, correto; em (3), “há” é verbo haver e não recebe acento; e em (4), “a produção” é sujeito, sem preposição.',
  },
  {
    id: 'lp-crase-qlivro30-23',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Adaptada) A afirmação abaixo está correta ou incorreta? — Em “O encarecimento dos importados, associado à contração da demanda...”, o emprego de sinal indicativo de crase em “à contratação” justifica-se porque a palavra “associado” exige complemento antecedido pela preposição “a” e “contratação” é antecedida por artigo definido feminino.',
    gabaritoCE: true,
    comentario:
      'O verbo “associar” pede a preposição a, e o substantivo que vem depois está determinado pelo artigo feminino, o que gera a fusão a + a = à. A justificativa dada está correta, e a afirmação é certa.',
  },
  {
    id: 'lp-crase-qlivro30-25',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TCDF - Auditor de Controle Externo - 2012) No trecho “Exceção a essa regra”, é opcional o emprego do sinal indicativo de crase no “a”.',
    gabaritoCE: false,
    comentario:
      'Em “Exceção a essa regra”, o “a” é preposição exigida pelo substantivo “exceção”, e o demonstrativo “essa” começa por e, o que impede qualquer fusão com a preposição. Não há artigo nem vogal a para fundir, por isso o acento não é opcional e sim inexistente. A afirmação está errada.',
  },
  {
    id: 'lp-crase-qlivro30-26',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - MPE/PI - Analista Ministerial - 2012) No trecho “somado aos que vinham sendo realizados nos últimos anos”, o elemento “aos” poderia ser corretamente substituído por àqueles.',
    gabaritoCE: true,
    comentario:
      'O “aos” é a preposição a com o artigo plural “os”, e esse artigo pode ser trocado pelo demonstrativo “aqueles”, o que gera a fusão a + aqueles = àqueles, sem alteração de regência. A substituição mantém o sentido e a correção, então a afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-28',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC — INSS — Perito Médico Previdenciário — 2012) ... levava à crença mz contínua evolução da sociedade... O emprego do sinal de crase, exemplificado acima, estará correto, unicamente, em:',
    alternativas: [
      'aludir à felicidade geral',
      'buscar à felicidade',
      'propor à toda a população',
      'impor à esse grupo',
      'discutir à obrigatoriedade da lei',
    ],
    correta: 0,
    comentario:
      'Em “aludir à felicidade geral” o verbo pede a preposição a e o termo seguinte é determinado pelo artigo feminino, então a fusão é correta. Em “buscar à felicidade” e “discutir à obrigatoriedade” os verbos são transitivos diretos e não pedem preposição; em “propor à toda a população” o indefinido “toda” bloqueia o artigo; e em “impor à esse grupo” o demonstrativo “esse” não se funde com a preposição.',
  },
  {
    id: 'lp-crase-qlivro30-30',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC — TJ/RJ — Analista Judiciário — 2012) ... e chegou à conclusão de que o funcionário passou o dia inteiro tomando café. Do mesmo modo que se justifica o sinal indicativo de crase em destaque na frase acima, está correto o seu emprego em:',
    alternativas: [
      'e chegou à uma conclusão totalmente inesperada',
      'e chegou então à tirar conclusões precipitadas',
      'e chegou à tempo de ouvir as conclusões finais',
      'e chegou finalmente à inevitável conclusão',
      'e chegou à conclusões as mais disparatadas',
    ],
    correta: 3,
    comentario:
      'A crase de “à conclusão” se justifica porque “chegar” exige a preposição a e “conclusão” vem determinada pelo artigo feminino. Na alternativa d, “à inevitável conclusão” repete a mesma estrutura, com preposição e artigo diante de substantivo feminino determinado. As demais erram com crase diante de artigo indefinido (“uma”), de infinitivo (“tirar”) ou de palavra sem artigo (“tempo”).',
  },
  {
    id: 'lp-crase-qlivro30-32',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(FCC — TRE/PR — Analista Judiciário — 2012) (Adaptada) É possível encontrar antecedentes a esse tipo de análise na teoria do imperialismo. No entanto, a elaboração anterior à CEPAL preocupava-se principalmente com os países capitalistas avançados, interessando-se pelos países “atrasados” na medida em que desenvolvimentos ocorridos neles repercutissem para além deles. Considerado o trecho acima transcrito, é correto afirmar que o sinal gráfico indicativo da crase está adequadamente empregado em à CEPAL, mas se, em vez de Comissão, tivesse sido empregada uma palavra masculina, o padrão culto escrito abonaria unicamente o emprego de a.',
    gabaritoCE: false,
    comentario:
      'A crase em “anterior à CEPAL” está certa, pois “anterior” pede a preposição a e “CEPAL” vem com artigo feminino implícito, a Comissão. Com palavra masculina, o artigo seria “o” e a fusão daria “ao”, e não apenas a preposição sem acento. A afirmação está errada, porque a norma culta abonaria “ao”.',
  },
  {
    id: 'lp-crase-qlivro30-33',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Funiversa — PC/DF — Perito Criminal — 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? — Nas orações “para chegar à tal felicidade”, “ou são ligadas à sua comunidade” e “se comparadas àquelas pessoas”, os acentos graves marcadores de crase são todos opcionais.',
    gabaritoCE: false,
    comentario:
      'Em “se comparadas àquelas pessoas” a crase é obrigatória, pois o demonstrativo “aquelas” se funde com a preposição exigida por “comparar”. Como ao menos um dos acentos não é opcional, a afirmação de que todos são facultativos está errada.',
  },
  {
    id: 'lp-crase-qlivro30-34',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Liquigás - Profissional Jr. — 2012) As crases grafadas no início de cada uma das seguintes frases do texto se justificam pela exigência do verbo acostumar: “Às bactérias de água potável. À contaminação da água do mar. A lenta morte dos rios”. Uma quarta frase que poderia estar nessa sequência, grafada de acordo com a norma-padrão, seria a seguinte:',
    alternativas: [
      'A ver injustiças.',
      'À vida sem prazer.',
      'À alguma forma de tristeza.',
      'À todas as mazelas do mundo.',
      'À essa correria em busca do sucesso.',
    ],
    correta: 1,
    comentario:
      'O verbo “acostumar-se” exige a preposição a, e a crase aparece onde o termo seguinte admite artigo definido, como em “à vida sem prazer”. A alternativa a tem infinitivo, que não recebe crase; c e d trazem indefinidos (“alguma”, “todas”) que bloqueiam o artigo; e e traz o demonstrativo “essa”, que começa por e e não se funde com a preposição.',
  },
  {
    id: 'lp-crase-qlivro30-35',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe - TRE/RJ — Nível Superior — 2012) A correção gramatical do texto seria mantida caso a expressão “aos contornos constitucionais” fosse substituída por à legislação constitucional.',
    gabaritoCE: true,
    comentario:
      'A expressão “aos contornos” é a preposição a com o artigo plural “os”, e a troca por “à legislação constitucional” mantém a preposição a, agora com artigo feminino singular determinado pelo adjetivo. A regência se conserva e a substituição não altera a correção, então a afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-36',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CMB — Analista (Arquitetura) — 2012) Observa-se o uso adequado do acento grave no trecho “estamos nos referindo à não ativação de elementos”. Verifica-se um DESRESPEITO à norma-padrão quanto ao emprego desse acento em:',
    alternativas: [
      'O professor se reportou àquele texto de Machado de Assis.',
      'Sonhamos em viajar à terra de Gonçalves Dias.',
      'Ele sempre fazia alusão à palavras de seu poeta favorito.',
      'Os alunos compreenderam o poema à custa de muito empenho.',
      'Prefiro as poesias de Drummond às de Olavo Bilac.',
    ],
    correta: 2,
    comentario:
      'O verbo “fazer alusão” exige a preposição a, mas “palavras” vem sem artigo nessa frase, e a crase fica indevida: a alternativa c desrespeita a norma. Nas demais, a crase está correta: “reportar-se” pede a com demonstrativo aquele, “viajar à terra” tem termo determinado, “à custa de” é locução prepositiva de núcleo feminino, e “às de Olavo Bilac” é a + as.',
  },
  {
    id: 'lp-crase-qlivro30-37',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — CITEPE — Operador de Utilidades Têxtil II — 2012) Observe a seguinte frase, correta quanto ao emprego do acento grave: “[...] competências comportamentais referentes à forma [...]”. O emprego do acento indicativo de crase está também corretamente feito em:',
    alternativas: [
      'Os empregados mostraram-se resistentes à mudanças na empresa.',
      'Muitos gostariam de ter um tempo maior à fim de se qualificar.',
      'O mercado oferece menos chances à quem está afastado.',
      'O bom profissional está atento à todas as transformações do mercado.',
      'Quem quer voltar ao mercado deve atender às necessidades de hoje.',
    ],
    correta: 4,
    comentario:
      'O verbo “atender” pede a preposição a, e “necessidades” vem determinado pelo artigo plural, o que gera “às necessidades”, com crase obrigatória. Nas demais há erro: “resistentes a mudanças” não admite artigo, a locução é “a fim de” sem crase, “quem” não admite artigo, e “todas” é pronome indefinido que bloqueia a crase.',
  },
  {
    id: 'lp-crase-qlivro30-38',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CEF - Técnico Bancário Novo - 2012) O sinal indicativo de crase está adequadamente usado em:',
    alternativas: [
      'Os pesquisadores dedicaram um estudo sobre games à um conjunto de pessoas idosas.',
      'Daqui à alguns anos, os pesquisadores pretendem verificar por que os games são viciantes para os jovens.',
      'Muitos dos idosos pesquisados obtiveram resultados positivos e passaram à se comportar de nova maneira.',
      'A escolha de um determinado game se deveu à preocupação dos pesquisadores com as características que tal jogo apresentava.',
      'Os estudos dos efeitos dos jogos eletrónicos sobre os idosos vêm sendo realizados à vários anos.',
    ],
    correta: 3,
    comentario:
      '“Deveu-se” exige a preposição a e “preocupação” vem determinada pelo artigo feminino, o que produz a fusão e a crase correta. Nas demais, há erro: “à um conjunto” e “à vários anos” trazem indefinidos que bloqueiam o artigo, “à alguns anos” também, e “passaram à se comportar” tem verbo no infinitivo, que não recebe crase.',
  },
  {
    id: 'lp-crase-qlivro30-39',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Banco da Amazônia - Técnico Científico - 2012) “(...) Para isso, criou instrumentos efetivos para melhor adequar os serviços às populações de menor renda... (...)”. O emprego do sinal indicativo de crase em “às populações” deve-se à presença da forma verbal “adequar” e do artigo feminino definido que precede o substantivo.',
    gabaritoCE: true,
    comentario:
      '“Adequar” é transitivo direto e indireto, pedindo a preposição a para o complemento “às populações”, cujo artigo feminino plural “as” se funde com ela. A justificativa dada pela afirmação é correta, então a afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-40',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/RR - Nível Superior - 2012) Se fosse empregado o termo espécie humana em lugar de “gênero humano”, a substituição de “ao” por à seria obrigatória para a manutenção da correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      '“Gênero humano” é masculino e por isso pede o artigo “o”, que se funde com a preposição em “ao”. Trocando por “espécie humana”, feminino, o artigo passa a “a” e a fusão gera “à”, que se torna obrigatória para manter a regência. A afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-41',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - MP - Analista de Infraestrutura - 2012) Na linha 7 (... força de trabalho às voltas com questões...), o sinal indicativo de crase em “às voltas” decorre da presença do artigo definido e do uso da preposição a exigida pelo substantivo “força”.',
    gabaritoCE: false,
    comentario:
      'O acento em “às voltas com” decorre da locução “às voltas”, de núcleo feminino plural, e não de regência do substantivo “força”, que não exige a preposição a nesse contexto. A justificativa dada está errada, e a afirmação é errada.',
  },
  {
    id: 'lp-crase-qlivro30-42',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - PF - Papiloscopista - 2012) “(...) largo, frustrados, zelamos pela prisão daqueles que não se impõem as mesmas renúncias. (...)” Na linha 24, considerando-se a dupla regência do verbo impor e a presença do pronome “mesmas”, seria facultado o emprego do acento indicativo de crase na palavra “as” da expressão “as mesmas renúncias”.',
    gabaritoCE: false,
    comentario:
      'Em “impõem as mesmas renúncias” a palavra “as” é artigo do objeto direto, e não há preposição a antes dela, pois a dupla regência de impor coloca a preposição no outro complemento. Sem preposição não há fusão, de modo que o acento não é facultativo, mas inexistente. A afirmação está errada.',
  },
  {
    id: 'lp-crase-qlivro30-43',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(AOCP - BRDE - Analista de Sistemas — 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) A tradição se tornou um arquivo atemporal, ao qual recorre a produção poética para...” - O emprego do sinal indicativo de crase no “a”, na expressão “a produção poética”, não altera a correção gramatical.',
    gabaritoCE: false,
    comentario:
      'Em “ao qual recorre a produção poética”, o “a” é artigo do sujeito, porque é a produção que recorre, e não preposição exigida pelo verbo. Um acento grave ali seria erro, já que crase exige preposição, e sua inserção alteraria a correção. A afirmação está errada.',
  },
  {
    id: 'lp-crase-qlivro30-44',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - MPE/RO - Analista Processual - 2012) Assinale a opção em que o espaço deve ser preenchido com A (preposição e pronome), como destacado em “(...) uma média semelhante à de um casal de classe média (...)”.',
    alternativas: [
      '____ medida que caminhava, recordava-se da terra natal.',
      'Esta cena corresponde ___ que presenciei ontem.',
      'Aproveite ___ oferta e se contente com a cor do tecido.',
      'Referia-se, com certeza, ___ terra de seus pais.',
      'Obedeceu ___ ordem dada, sem reclamar.',
    ],
    correta: 1,
    comentario:
      'Em “corresponde àquela que presenciei” o verbo pede a preposição a, e ela se funde com o pronome demonstrativo “aquela”, que aparece implícito. Esse é o caso de preposição e pronome. Nas demais alternativas o espaço pede preposição com artigo (“à medida”, “à terra”, “à ordem”) ou apenas artigo (“a oferta”), sem o pronome demonstrativo.',
  },
  {
    id: 'lp-crase-qlivro30-45',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Vunesp - Pref. São José dos Campos/SP - Analista em Gestão Municipal - 2012) Analise as afirmações: I. De acordo com a norma-padrão da língua portuguesa, está correta quanto à crase: Se, por outro lado, tem um temperamento saturnino, é melhor adaptar-se à ele. II. De acordo com a norma-padrão da língua portuguesa, está correta quanto à regência nominal: Andrew Oswald avaliou o impacto dessas sequelas e chegou à conclusão que, num primeiro momento, elas reduzem bastante o grau de felicidade. III. De acordo com a norma-padrão da língua portuguesa, está correta quanto à regência verbal: Mu, com o passar do tempo, este volta a elevar-se, até atingir níveis semelhantes aos verificados antes do acidente e estacionar. Está correto apenas o que se afirma em:',
    alternativas: ['I.', 'II.', 'III.', 'I e III.', 'II e III.'],
    correta: 2,
    comentario:
      'A afirmação I erra, porque não há crase diante do pronome pessoal “ele”, que é masculino e não admite artigo, então o correto seria “adaptar-se a ele”. A II falha na regência nominal, pois “chegar à conclusão” pede “de que”, e não “que”. Só a III está de acordo com a norma, na regência de “atingir” e de “estacionar”, e por isso a resposta é a alternativa c.',
  },
  {
    id: 'lp-crase-qlivro30-46',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Upenet — Jucepe — Técnico — 2012) Em “Bem-vindos à Feira de Caruaru”, a crase é obrigatória. Em qual das alternativas abaixo, o uso da crase É FACULTATIVO?',
    alternativas: [
      'A Feira de Caruaru é atração devido à grande diversidade lá existente.',
      'Na Feira de Caruaru, tudo está à venda.',
      'Em feiras, como a de Caruaru, vendem-se coisas às pessoas de diferentes classes sociais.',
      'Nas cidades de pequeno comércio, há mais pagamentos à vista.',
      'Todos os dias, os comerciantes da Feira de Caruaru permanecem até às 18h.',
    ],
    correta: 4,
    comentario:
      'Com “até” seguido de artigo, a norma admite “até a” ou “até à”, e por isso a crase em “até às 18h” é facultativa: a frase fica correta com ou sem o acento. Nas demais, a crase é obrigatória por regência ou locução feminina: “devido à” (a + a), “à venda” e “à vista” (locuções de núcleo feminino), e “vendem-se coisas às pessoas” (a + as, pela regência de vender).',
  },
  {
    id: 'lp-crase-qlivro30-47',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Vunesp - Fapesp - Analista de Sistemas Jr. — 2012) À semelhança do trecho – “Nem sempre o que era desconhecido... restringe-se à descoberta” –, assinale a alternativa em que, após o verbo restringir, deve ser empregado o acento grave da crase.',
    alternativas: [
      'O alcance desses sensores restringe-se a limites claros.',
      'Sua tarefa restringe-se a medir os intervalos.',
      'O alcance do radar restringe-se a Brasília.',
      'A visita a esse hospital restringe-se a horários predeterminados.',
      'Essa proibição restringe-se a presença de menores de 18 anos.',
    ],
    correta: 4,
    comentario:
      '“Restringir-se” pede a preposição a, e quando o termo seguinte é substantivo feminino determinado pelo artigo (“a presença”), a fusão produz a crase. Nas alternativas a e d os termos seguintes não têm artigo, em b o termo é verbo no infinitivo, e em c “Brasília” é topônimo que não recebe artigo nessa frase, por isso a resposta é a alternativa e.',
  },
  {
    id: 'lp-crase-qlivro30-48',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Pref. Barra Velha/SC — Advogado — 2012) Em “... um ano e tanto depois da chegada do primeiro pastor alemão àquela casa, ...”, a ocorrência de crase no segmento anterior ocorre devido à:',
    alternativas: [
      'fusão do artigo “a” com o pronome “aquela”;',
      'fusão da preposição “a” com o pronome “aquela”;',
      'colocação do pronome “aquela” diante de “casa”;',
      'especificação atribuída ao cachorro;',
      'substituição do artigo “a” pelo pronome “aquela”.',
    ],
    correta: 1,
    comentario:
      'A crase de “àquela casa” resulta da preposição a, exigida por “chegada”, fundida com o pronome demonstrativo feminino “aquela”. A alternativa b descreve exatamente essa fusão. A alternativa a fala em artigo, que não é o caso, e as demais atribuem a crase a posição, especificação ou substituição, o que não explica o acento.',
  },
  {
    id: 'lp-crase-qlivro30-49',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE/UnB — MPU — TÉCNICO — 2013) Mantém-se a correção gramatical do texto ao se substituir o trecho “a uma série” (... dão margem a uma série de...) por à uma série, dado o caráter facultativo do emprego do sinal indicativo de crase nesse caso.',
    gabaritoCE: false,
    comentario:
      'Diante do artigo indefinido “uma” não se usa crase, pois ela só ocorre diante de artigo definido ou pronome demonstrativo. Escrever “à uma série” é erro, e a substituição prejudicaria a correção. A afirmação está errada.',
  },
  {
    id: 'lp-crase-qlivro30-50',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CONSULPLAN — CODERN — ADMINISTRADOR — 2014) O uso do acento grave em “proteção à floresta” justifica-se, pois:',
    alternativas: [
      'a palavra “proteção” está determinada pelo artigo “a”.',
      '“proteção” e “floresta” são duas palavras de gênero feminino.',
      'o termo “a” trata-se de um monossílabo tônico nesta expressão.',
      'o termo regente admite o artigo “a” diante do termo regido “floresta”.',
      '“proteção” exige a preposição “a”, e, ainda, “floresta” admite o artigo feminino “a”.',
    ],
    correta: 4,
    comentario:
      'A crase de “proteção à floresta” se explica porque “proteção” exige a preposição a e “floresta” admite o artigo feminino, e os dois se fundem em à. A alternativa e reúne exatamente essas duas condições. As demais atribuem a crase a causas que não a produzem, como o gênero das palavras, o caráter tônico do monossílabo ou uma determinação que o termo regente não recebe.',
  },
  {
    id: 'lp-crase-qlivro30-51',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe-TJDFT — Técnico Judiciário — 2015) O item a seguir, que apresenta uma proposta de reescrita de trecho do texto — entre aspas —, deve ser julgado certo se, ao mesmo tempo, a proposta estiver gramaticalmente correta e não acarretar prejuízo ao sentido original do texto, ou errado, em caso contrário. “Obviamente os membros da família ficam apavorados diante da possibilidade da agressão”: Os integrantes da família apavoram-se, de fato, perante à possibilidade da agressão.',
    gabaritoCE: false,
    comentario:
      '“Perante” é preposição que não se funde com o artigo, então o acento em “perante à possibilidade” é indevido e a reescrita comete erro gramatical. A forma original, “diante da possibilidade”, é a correta. A afirmação é errada.',
  },
  {
    id: 'lp-crase-qlivro30-53',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - SEDF - Cargo de Nível Superior (TI) - 2017) A supressão do acento grave, indicativo de crase, no trecho “É essa revolução... que Claparède compara à que Copérnico realizou na astronomia”, prejudicaria a correção gramatical do texto, dada a impossibilidade de omissão do artigo definido no contexto.',
    gabaritoCE: true,
    comentario:
      'O verbo “comparar” exige a preposição a, e “a que” equivale a “aquela que”, pronome demonstrativo que se funde com a preposição. Sem o acento a regência ficaria incompleta, e o artigo não pode ser omitido no contexto. A afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-54',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - PF - Agente de Polícia Federal - 2018) A supressão do sinal indicativo de crase em “à sua maneira” (“A polícia parisiense... é extremamente hábil à sua maneira”) manteria a correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      'A locução “à maneira de” é prepositiva de núcleo feminino, e diante de possessivo feminino o artigo pode ou não aparecer, por isso a crase é facultativa. Retirando o acento, “a sua maneira” continua correta, e a afirmação está certa.',
  },
  {
    id: 'lp-crase-qlivro30-56',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Consulplan — Prefeitura de Formiga - MG - Auxiliar de Educação Especial - 2020) Em “(...) mas nada pode se comparar à transformação ocorrida nos últimos dez anos, com o boom dos smartphones”, registra-se a ocorrência da crase. O emprego da crase está INCORRETO em:',
    alternativas: [
      'Fui à Itália na semana passada.',
      'Pedro ficou frente à frente comigo.',
      'Essa casa foi comprada à custa de muito trabalho.',
      'À medida que o tempo passava, ele ficava mais tranquilo.',
    ],
    correta: 1,
    comentario:
      'Em “frente a frente” as palavras se repetem sem artigo, formando locução sem crase, de modo que o acento em “frente à frente” é indevido. Nas demais, a crase está correta: “à Itália” segue topônimo feminino que aceita artigo, “à custa de” é locução prepositiva feminina, e “à medida que” é conjuntiva com crase obrigatória.',
  },
  {
    id: 'lp-crase-qlivro30-57',
    temaId: 'lp-crase',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — PC/RN — Agente e escrivão de polícia civil substituto — 2021) “É minha opinião que não se deve dizer mal de ninguém, e ainda menos da polícia. A polícia é uma instituição necessária à ordem e à vida da cidade.” (Machado de Assis, A Semana — 1871) Nesse texto, Machado emprega corretamente o acento grave indicativo da crase; a frase abaixo em que esse mesmo acento está empregado de forma adequada é:',
    alternativas: [
      'Os clientes pagaram a compra à crédito;',
      'A ordem é necessária à todo grupo social;',
      'Ninguém abandonou o local à correr;',
      'O motorista deu à documentação ao policial;',
      'Todos os policiais saíram à mesma hora.',
    ],
    correta: 4,
    comentario:
      'Em “saíram à mesma hora” a locução adverbial de tempo tem núcleo feminino determinado pelo artigo, e a preposição se funde com ele. Em “a crédito” a locução não tem artigo, em “a todo grupo” o indefinido bloqueia a crase, em “a correr” o infinitivo não recebe acento, e em “deu a documentação” o termo é objeto direto sem preposição.',
  },
  {
    id: 'lp-crase-qlivro30-58',
    temaId: 'lp-crase',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE — DPE-RS - Defensor Público — 2022) A supressão do sinal indicativo de crase no vocábulo “às”, em “às mudanças tecnológicas” (Nem mesmo o hermético universo do direito resistiu às mudanças tecnológicas trazidas pela rede mundial de computadores), prejudicaria a correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      '“Resistir” exige a preposição a, e “mudanças” vem determinado pelo artigo plural “as”, o que gera a fusão a + as = às. Sem o acento a preposição desapareceria e a regência ficaria incorreta, então a supressão prejudica o texto e a afirmação está certa.',
  },
];
