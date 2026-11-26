import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 03 — Ortografia), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C03: QuestaoTreino[] = [
  {
    id: 'lp-ortografia-qlivro03-01',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio — AL/TO — Assistente Legislativo - 2005) Marque a opção em que a palavra é escrita com s.',
    alternativas: ['Avare___a.', 'Apra___ível.', 'Ra___ão.', 'De___ertas.', 'Cafe___al.'],
    correta: 3,
    comentario:
      'A palavra escrita com s é “desertas” (de-s-ertas). As demais exigem z: “avareza”, “aprazível”, “razão” e “cafezal”.',
  },
  {
    id: 'lp-ortografia-qlivro03-02',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ACEP - BNB - Técnico de Nível Superior - 2006) Assinale a alternativa com palavras ortograficamente corretas de acordo com a sequência: “peixe”, “anzol”, “concessão”.',
    alternativas: [
      'laxante - cataqueze — sessão.',
      'trouxer - catequizar - assento.',
      'broxa - analizar - passo.',
      'xácara — deleitozo — obsessão.',
      'taxa - catálize - admissão.',
    ],
    correta: 1,
    comentario:
      'A sequência pede x como em “peixe”, z como em “anzol” e ss como em “concessão”. Em B, “trouxer”, “catequizar” e “assento” seguem essa ordem e estão corretas. As erradas trazem “cataqueze” (catequese), “analizar” (analisar), “deleitozo” (deleitoso) e “catálize” (catálise).',
  },
  {
    id: 'lp-ortografia-qlivro03-03',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - MPE/RJ - Analista (Processual) - 2007) O adjetivo que os autores utilizam no título é uma das palavras que costumeiramente geram dúvidas ortográficas. Nos casos abaixo, a grafia de ambas as palavras só está correta em:',
    alternativas: [
      'mantegueira / aterrissagem;',
      'cataclismo / adivinhar;',
      'mortadela / meretíssimo;',
      'entitulado / embutido;',
      'prostração / beneficiente.',
    ],
    correta: 1,
    comentario:
      'Em B, “cataclismo” e “adivinhar” estão grafadas corretamente. Em A, “mantegueira” deveria ser “manteigueira”; em C, “meretíssimo” deveria ser “meritíssimo”; em D, “entitulado” deveria ser “intitulado”; e em E, “beneficiente” deveria ser “beneficente”.',
  },
  {
    id: 'lp-ortografia-qlivro03-04',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - Analista de Comércio Exterior - 2008) Julgue o item a seguir levando em conta a correção gramatical (apegue-se apenas à ortografia): Portanto, ao se iniciar a nova década, o ambiente que se formula e gerencia a política de comércio exterior brasileira é radicalmente diverso daquele que vigiu à época em que a CACEX atuava como superagência nessa área. A institucionalidade da política distanciou-se do modelo CACEX, mas é pouco nítido o modelo desejável e adequado aos novos condicionantes e objetivos.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “vigiu” é forma do verbo “vigiar”, e não do verbo “viger”, que tem o sentido de estar em vigor. Na frase, a forma correta do verbo “viger” seria “vigeu”, com g.',
  },
  {
    id: 'lp-ortografia-qlivro03-05',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB — Ministério da Saúde — Área de Redação Oficial — 2008) De acordo com o padrão da língua portuguesa, são variantes da palavra “imundície” as seguintes formas: imundice e imundícia.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: o padrão da língua registra as três formas, “imundície”, “imundice” e “imundícia”, como variantes da mesma palavra.',
  },
  {
    id: 'lp-ortografia-qlivro03-06',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — PGE/RJ — Técnico Assistente de Procuradoria — 2009) Todas as palavras estão escritas corretamente na frase:',
    alternativas: [
      'Intervensões governamentais massiças e até agora sem precedentes não conseguiram conter os impactos da crise financeira em diversos países.',
      'A permanência e a gravidade dos desdobramentos da crise financeira deicham dúvidas e originam expeculações em todo o mundo.',
      'A ganância por lucros cada vez maiores fez com que os riscos dos investimentos crecessem esponencialmente no mercado financeiro.',
      'A excessiva circulação de instrumentos financeiros imbutia imenço potencial de perigos redundando, como se viu, em enormes prejuízos.',
      'O êxito das resoluções tomadas em outros países depende de um maior controle das instituições financeiras, o que atinge interesses múltiplos e provoca resistência.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a única com todas as palavras corretas. As demais trazem erros: “intervenções” e “maciças” (A), “deixam” e “especulações” (B), “crescessem” e “exponencialmente” (C), e “embutia” e “imenso” (D).',
  },
  {
    id: 'lp-ortografia-qlivro03-07',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT (16ª R) - Técnico Judiciário - 2009) A frase em que há palavras escritas de modo INCORRETO é:',
    alternativas: [
      'A aridez que sempre caracterizou as paisagens do Nordeste brasileiro aparece agora, para assombro de todos, na região Sul, comprometendo as safras de grãos.',
      'Alguns estudiosos reagem com sensatez às recentes explicações, considerando se o papel da bomba biótica é realmente crucial na circulação do ar.',
      'Se for comprovada a correção da nova teoria, a preservação das florestas torna-se essencial para garantir a qualidade de vida em todo o planeta.',
      'O desmatamento indescriminado, que reduz os índices de chuvas e altera o ciclo das águas, pode transformar um continente em um estenso e inabitável deserto.',
      'Com ventos mais próximos ao mar, o ar úmido resultante da evaporação da água do oceano é puxado para o continente, distribuindo a chuva ao redor do planeta.',
    ],
    correta: 3,
    comentario:
      'A alternativa D tem duas grafias erradas: “indescriminado” (indiscriminado) e “estenso” (extenso). As demais frases estão escritas corretamente.',
  },
  {
    id: 'lp-ortografia-qlivro03-08',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - MPE-AP - Técnico Administrativo - 2009) Está correta a grafia de todas as palavras da frase:',
    alternativas: [
      'Compadecido com a humilhação de seu velho servo, o rei Psamênito não conteu as lágrimas e as verteu abundantemente.',
      'O príncipe e a princesa ainda poderiam insurgir-se contra os persas, mas não o velho servo, cujas forças esmoresciam.',
      'Talvez Psamênito não previlegiasse o velho servo, talvez este tivesse sido a última gota de tanto sofrimento.',
      'As forças e a dignidade do rei egípcio apenas titubiaram quando se deparou com a imagem do velho servo.',
      'Há divergências quanto à interpretação do porquê de haver chorado o rei Psamênito, sucumbindo à visão do velho servo.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a única com todas as palavras corretas, incluindo “porquê”, substantivo. Em A, “conteu” deveria ser “conteve”; em B, “esmoresciam” deveria ser “esmoreciam”; em C, “previlegiasse” deveria ser “privilegiasse”; e em D, “titubiaram” deveria ser “titubearam”.',
  },
  {
    id: 'lp-ortografia-qlivro03-09',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - PGE-RJ — Técnico Superior de Procuradoria - 2009) É adequado o emprego e correta a grafia de todas as palavras da frase:',
    alternativas: [
      'É prazeroso o reconhecimento de uma pessoa que, surgindo longínqua, parece então mais próxima que nunca — paradoxo pleno de poesia.',
      'A abstensão da proximidade de alguém não impede, segundo o cronista, que nossa afetividade aflore e haja para promover uma aproximação.',
      'Nenhuma distância dilui o afeto, pelo contrário: o reconhecimento da amada longeva avisinha-a de nós, fá-la mais próxima que nunca.',
      'O cronista ratifica o que diz um velho provérbio: a distância que os olhos acusam não exclue a proximidade que o nosso coração promove.',
      'Os poetas românticos eram obsecados por imagens que, figurando a distância, expressavam com ela a gososa inatingibilidade de um ideal.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a única com grafia correta: “prazeroso” está bem escrito. Em B, “abstensão” deveria ser “abstenção”; em C, “avisinha-a” deveria ser “avizinha-a”; em D, “exclue” deveria ser “exclui”; e em E, “obsecados” deveria ser “obcecados”.',
  },
  {
    id: 'lp-ortografia-qlivro03-10',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - TJ/SP — Escrevente Técnico Judiciário - 2010) Não precisa ir ao sebo, LPs_______ vão voltar às lojas. Obra do autor revela________ pelo purgatório. Boato de________ piora o mau-humor dos norte-coreanos. Decisão do tribunal é um marco e traz princípios_________. Assinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    alternativas: [
      'imprecindíveis ... obseção ... dezerção ... balisadores;',
      'imprescindíveis ... obsessão ... deserção ... balizadores;',
      'imprecindíveis ... obsessão ... dezerção ... balizadores;',
      'imprescindíveis ... obseção ... deserção ... balisadores;',
      'imprescindíveis ... obsessão ... dezerção ... balisadores.',
    ],
    correta: 1,
    comentario:
      'As grafias corretas são “imprescindíveis” (com sc), “obsessão” (com ss), “deserção” (com s) e “balizadores” (com z). As demais trazem “imprecindíveis”, “obseção”, “dezerção” ou “balisadores”, todas erradas.',
  },
  {
    id: 'lp-ortografia-qlivro03-11',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf - MTE - Auditor-Fiscal do Trabalho - 2010) (Adaptada) A frase abaixo está correta ou incorreta quanto à ortografia? — Constroe-se o espaço social de tal modo que os agentes ou grupos são aí distribuídos em razão de sua posição nas distribuições estatísticas de acordo com os dois princípios de diferenciação que, em sociedades mais desenvolvidas, são sem dúvida, os mais eficientes: o capital econômico e o capital cultural.',
    gabaritoCE: false,
    comentario:
      'A frase está incorreta: “Constroe-se” deveria ser “Constrói-se”, forma do verbo “construir”.',
  },
  {
    id: 'lp-ortografia-qlivro03-12',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TCU — Auditor Federal de Controle Externo — 2010) O uso das letras iniciais maiúsculas em “Império Romano”, “Cristianismo” e “Revolução Francesa” são exemplos de que substantivo usado para designar ente singular deve ser grafado com inicial maiúscula, como, por exemplo, Lei nº 8.888/1998.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: nomes de entidades singulares, como “Império Romano” e “Revolução Francesa”, e de documentos oficiais, como “Lei nº 8.888/1998”, levam inicial maiúscula.',
  },
  {
    id: 'lp-ortografia-qlivro03-13',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - Casa Civil/SP - Executivo Público - 2010) A frase em que a grafia respeita totalmente o padrão culto escrito é:',
    alternativas: [
      'Muitas eram as reminiscências, algumas esdrúxulas, outras comuns, repetindo-se iguaizinhas de tempo em tempo, em circuito que não exorbitava os limites da fazenda.',
      'O espaço era exiguo, à exceção da cozinha, mas nada impedia que os vizinhos tentassem grangear a simpatia do padre inflingindo-lhe pratos que excitavam sua gula.',
      'Sabiam que pouco tempo teriam para descançar, mas ninguém quis alterar o trajeto, minuciosamente pensado e repensado durante meses.',
      'Era tão grande a sua presunsão, que entendia como ato lisonjeiro até um breve aceno do mais distraído dos transeuntes de seu vilarejo.',
      'Tal era sua ogeriza pela política que se excedia em palavras e tons assim que algum desavisado puxava o assunto tabu, sem intenção alguma de ferí-lo.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a única com toda a grafia correta. Em B, “exiguo” (exíguo), “grangear” (granjear) e “inflingindo” (infligindo); em C, “descançar” (descansar); em D, “presunsão” (presunção); e em E, “ogeriza” (ojeriza) e “ferí-lo” (feri-lo).',
  },
  {
    id: 'lp-ortografia-qlivro03-14',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRE/AM — Técnico Judiciário - 2010) A frase em que a grafia respeita totalmente o padrão culto escrito é:',
    alternativas: [
      'À exceção dos que se abstiveram de opinar sobre a qualidade dos serviços, os participantes da pesquisa puderam usufruir gratuitamente de um dia de lazer no hotel.',
      'A escursão prometida não ocorreu, pois o número de interessados foi excessivo; mas até isso colaborou para o explendor da viagem, pois o desconto oferecido surpreendeu.',
      'Casualmente encontraram-se no saguão; ela parecia advinhar o que ele tinha a lhe dizer, por isso não lhe deu oportunidade de ser posta em cheque.',
      'Considerou ultrage o comentário adivindo do seu sucessor, mas, para preservar-se, abdicou de dar-lhe resposta à altura.',
      'Com a dispensa abarrotada de produtos nobres, não exitou um minuto ao negar um jantar aos participantes do programa de inclusão social.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a única com toda a grafia correta. Em B, “escursão” (excursão) e “explendor” (esplendor); em C, “cheque” (xeque); em D, “ultrage” (ultraje) e “adivindo” (advindo); e em E, “exitou” (hesitou).',
  },
  {
    id: 'lp-ortografia-qlivro03-15',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - CAPS - Assistente Social - 2011) Os sentidos e a correção da grafia das palavras do texto seriam mantidas caso se substituísse:',
    alternativas: [
      'massacre por assacinar;',
      'ampliar por almentar;',
      'ostensivo por esibido;',
      'precariedade por deficiência;',
      'acessível por alcanse.',
    ],
    correta: 3,
    comentario:
      '“Precariedade” e “deficiência” estão grafadas corretamente e mantêm o sentido de insuficiência. As demais substituições trocam a palavra por forma errada: “assacinar” (assassinar), “almentar” (aumentar), “esibido” (exibido) e “alcanse” (alcance).',
  },
  {
    id: 'lp-ortografia-qlivro03-16',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/AL (19ª R) - Técnico Judiciário - 2011) Estão grafadas corretamente todas as palavras da frase:',
    alternativas: [
      'O mercado mais atraente é necessáriamente aquele que possue mais produtos disponíveis.',
      'Com o adivento da internet, deparamos com uma imença cidade virtual, onde há os melhores preços do mercado.',
      'A escacés de mercadorias no campo foi determinante para explicar o porque dos homens se agruparem nas cidades.',
      'As empresas virtuais vêm se tornando concorrentes desleais das que se encontram no mundo físico.',
      'O mercado de relacionamentos virtuais assistiu a um avanço discomunal com a consolidassão da internet.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a única com todas as palavras corretas: “vêm”, na terceira pessoa do plural, concorda com “as empresas virtuais”. As demais têm erros: “necessáriamente” e “possue” (A), “adivento” e “imença” (B), “escacés” e “porque” (C), e “discomunal” e “consolidassão” (E).',
  },
  {
    id: 'lp-ortografia-qlivro03-17',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (1ª R) - Técnico Judiciário - 2011) As palavras estão corretamente grafadas na seguinte frase:',
    alternativas: [
      'Que eles viajem sempre é muito bom, mas não é boa a ansiedade com que enfrentam o excesso de passageiros nos aeroportos.',
      'Comete muitos deslises, talvez por sua espontaneidade, mas nada que ponha em cheque sua reputação de pessoa cortês.',
      'Ele era rabugento e tinha ojeriza ao hábito do sócio de descançar após o almoço sob a frondoza árvore do pátio.',
      'Não sei se isso influe, mas a persistência dessa mágoa pode estar sendo o grande impecilho na superação dessa sua crise.',
      'O diretor exitou ao aprovar a retenção dessa alta quantia, mas não quiz ser taxado de conivente na concessão de privilégios ilegítimos.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a única com grafia correta. Em B, “deslises” (deslizes) e “cheque” (xeque); em C, “descançar” (descansar) e “frondoza” (frondosa); em D, “influe” (influi) e “impecilho” (empecilho); e em E, “exitou” (hesitou) e “quiz” (quis).',
  },
  {
    id: 'lp-ortografia-qlivro03-18',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PC/ES — Auxiliar de Perícia Médico-Legal — 2011) Julgue o item com referência à correção gramatical. (Preocupe-se apenas com a ortografia nesta questão.) Não há dúvida de que o caminho é perseverar, ampliar a presença da polícia nas ruas, avançar com as UPPs e ir ao encalso dos responsáveis pelos ataques; e não apenas da arraia miúda. São imensas, no entanto as dificuldades em superar, desde a carência de efetivos e recursos policiais à extensão e a profundidade que o problema adquiriu.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “encalso” deveria ser “encalço”, substantivo da expressão “ir ao encalço”. As demais palavras do trecho, como “perseverar” e “adquiriu”, estão grafadas corretamente.',
  },
  {
    id: 'lp-ortografia-qlivro03-19',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - FINEP — Técnico (Apoio Administrativo e Secretariado) — 2011) Em que frase o verbo está conjugado de acordo com a norma-padrão?',
    alternativas: [
      'Não receiem os desafios da vida.',
      'As crianças passeiaram no jardim.',
      'É bom que vocês nomeem o novo diretor.',
      'Ele sapatea como um dançarino americano.',
      'É preciso que os carros freem lentamente.',
    ],
    correta: 0,
    comentario:
      'Em A, “receiem” é a forma correta do presente do subjuntivo de “recear”. As demais têm erro de conjugação: “passeiaram” (o certo é “passearam”), “nomeem” (o certo é “nomeiem”), “sapatea” (o certo é “sapateia”) e “freem” (o certo é “freiem”).',
  },
  {
    id: 'lp-ortografia-qlivro03-20',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio — FINEP — Técnico (Apoio Administrativo e Secretariado) - 2011) A palavra corretamente grafada é:',
    alternativas: ['admissão;', 'distenção;', 'discursão;', 'excessão;', 'extenção.'],
    correta: 0,
    comentario:
      '“Admissão” é a grafia correta, com ss. As demais estão erradas: a forma correta é “distensão”, “discussão”, “exceção” e “extensão”.',
  },
  {
    id: 'lp-ortografia-qlivro03-21',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TCE/SP — Agente de Fiscalização Financeira - 2012) A frase que respeita a ortografia é:',
    alternativas: [
      'Antes de cochilar, era-lhe natural fazer um exame de consciência e reiterar a si próprio seu empenho em vencer a itemperança.',
      'O desleixo com que passou a manuzear os objetos da coleção fez o respeitado colecionador optar pela despensa do já antigo colaborador.',
      'O debate recrudesceu, mas os mais bem-intencionados foram hábeis em dirimir as provocações, às vezes pungentes, das lideranças que se confrontavam.',
      'Estava bastante ciente de que era à sua gulodice que podia creditar a desinteria que o abatera às vésperas do exótico casamento.',
      'O poder descricionário dos ditadores, responsável por tantas atrocidades em tantas partes do mundo, é analisado na obra com um rigor admirável.',
    ],
    correta: 2,
    comentario:
      'A alternativa C está correta, com “recrudesceu”, “dirimir” e “pungentes” grafadas corretamente. Em A, “itemperança” (intemperança); em B, “manuzear” (manusear) e “despensa” (dispensa); em D, “desinteria” (disenteria); e em E, “descricionário” (discricionário).',
  },
  {
    id: 'lp-ortografia-qlivro03-22',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - PM/CE - Soldado - 2012) O emprego da inicial maiúscula confere aos vocábulos “Pátria”, “Nação” e “País” sentido particular e determinado, elevando-os à categoria de alto conceito político ou nacionalista.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: a inicial maiúscula em “Pátria”, “Nação” e “País” marca sentido particular e determinado, elevando o termo a conceito político ou nacionalista.',
  },
  {
    id: 'lp-ortografia-qlivro03-23',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - Banco da Amazônia - Técnico Científico - 2012) Mantém-se a correção gramatical do texto e suas informações originais ao se substituir o termo “percentual” por percentil.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “percentil” (valor que divide uma distribuição ordenada) não tem o mesmo sentido de “percentual” (proporção em centésimos), e a troca altera a informação original do texto.',
  },
  {
    id: 'lp-ortografia-qlivro03-24',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Técnico de Contabilidade - 2012) No Texto I, aparecem substantivos grafados com ç que são derivados de verbos, como produção, redução, desaceleração, projeção. Os verbos a seguir formam substantivos com a mesma grafia:',
    alternativas: [
      'admitir, agredir, intuir.',
      'discutir, emitir, aferir.',
      'inquirir, imprimir, perseguir.',
      'obstruir, intervir, conduzir.',
      'reduzir, omitir, extinguir.',
    ],
    correta: 3,
    comentario:
      'Em D, “obstruir”, “intervir” e “conduzir” formam, respectivamente, “obstrução”, “intervenção” e “condução”, todos com ç. Nas demais há pelo menos um verbo que forma substantivo com ss, como “admitir” (admissão), “discutir” (discussão), “imprimir” (impressão) e “omitir” (omissão).',
  },
  {
    id: 'lp-ortografia-qlivro03-25',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - ISS/SP - Auditor-Fiscal Tributário Municipal - 2012) A frase em que a ortografia está adequada ao padrão culto escrito é:',
    alternativas: [
      'À mínima contrariedade, exarcebava-se de tal maneira que seus excessos verbais eram já conhecidos de todos.',
      'A expontaneidade com que se referiu ao local como “impesteado” fez que todo o auditório explodisse em risos.',
      'Quanto à infraestrutura, será necessário reconstrui-la em prazo curto, mas sem que haja qualquer tipo de displiscência.',
      'O docente não viu como retaliação a rasura no cartaz que afixara, mas sua intenção era advertir quanto ao desleixo com a coisa pública.',
      'A obra faraónica será uma excresséncia naquela paisagem bucólica, mas ninguém teve hêsito em convencer os responsáveis da necessidade de revisão do projeto.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “retaliação”, “rasura”, “advertir” e “desleixo” estão grafadas corretamente. Em A, “exarcebava-se” (exacerbava-se); em B, “expontaneidade” (espontaneidade) e “impesteado” (empesteado); em C, “displiscência” (displicência); e em E, “excresséncia” (excrescência) e “hêsito” (hesito).',
  },
  {
    id: 'lp-ortografia-qlivro03-26',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CHESF - Engenheiro Civil — 2012) Ao escrever frases que deveriam estar de acordo com a norma-padrão, um funcionário se equivocou constantemente na ortografia. Ele só NÃO se enganou em:',
    alternativas: [
      'O homem foi acusado de estuprar várias vítimas.',
      'A belesa da duquesa era realmente de se admirar.',
      'Porque o sapato deslisou na lama, a mulher foi ao chão.',
      'Sem exitar, as crianças correram para os brinquedos do parque.',
      'Sem maiores pretenções, o time venceu o jogo e se classificou para a final.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a única com grafia correta: “estuprar” se escreve com s. Em B, “belesa” (beleza); em C, “deslisou” (deslizou); em D, “exitar” (hesitar); e em E, “pretenções” (pretensões).',
  },
  {
    id: 'lp-ortografia-qlivro03-27',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IBFC - SDHPR - Arquiteto - 2013) Quem foi o_________que___________na minha ? Assinale abaixo a alternativa que completa, correta e respectivamente, as lacunas.',
    alternativas: [
      'encherido/mexeu/enxada.',
      'enxerido/mecheu/enchada.',
      'encherido/mecheu/inxada.',
      'enxerido/mexeu/enxada.',
    ],
    correta: 3,
    comentario:
      '“Enxerido” (intrometido), “mexeu” (de mexer) e “enxada” são as grafias corretas. As demais trazem “encherido”, “mecheu”, “enchada” ou “inxada”, todas erradas.',
  },
  {
    id: 'lp-ortografia-qlivro03-28',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - SEDUC/AM - Assistente Social - 2014) “Maioria crescente dos brasileiros”. No fragmento, o adjetivo “crescente” está grafado com sc-. Assinale, dentre as opções a seguir, a que apresenta vocábulo corretamente grafado.',
    alternativas: [
      'prescisáo.',
      'conscisão.',
      'dcscisão.',
      'ascensão.',
      'inscisáo.',
    ],
    correta: 3,
    comentario:
      '“Ascensão” é a única grafia correta, com sc. As demais formas (“prescisão”, “conscisão”, “dcscisão” e “inscisão”) não existem como grafias corretas.',
  },
  {
    id: 'lp-ortografia-qlivro03-29',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNDATEC - Pref. Imbé/RS - Agente de Combate a Endemias - 2015) Fragmentos de texto: 01: “... a escasse_ de água para populações em crescimento...” 11: “... liquidou as ten_óes entre os países nessa área...” 20: “... a ta_a de cooperação supera a incidência de conflitos graves...” Assinale a alternativa que preenche, correta e respectivamente, as lacunas das palavras das linhas 01, 11 e 20.',
    alternativas: ['s - ss - ch.', 'z - s - ch.', 'z - s - x.', 's - ss - x.', 'z - ss - x.'],
    correta: 2,
    comentario:
      'As lacunas se preenchem com “escassez” (z), “tensões” (s) e “taxa” (x). As demais combinações trazem letras que não correspondem a essas palavras.',
  },
  {
    id: 'lp-ortografia-qlivro03-30',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(INSTITUTO AOCP - CASAN — Advogado — 2016) Assinale a alternativa correta em relação à ortografia.',
    alternativas: [
      'chuchu - berinjela.',
      'mecher - jiló.',
      'chuchu - giló.',
      'xuxu - beringela.',
      'mexer - beringela.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a única com as duas palavras grafadas corretamente: “chuchu” e “berinjela”. Em B, “mecher” deveria ser “mexer”; em C, “giló” deveria ser “jiló”; e em D e E, “beringela” deveria ser “berinjela”.',
  },
  {
    id: 'lp-ortografia-qlivro03-31',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CESGRANRIO — LIQUIGÁS — Profissional Júnior (Direito) — 2018) A seguinte frase está totalmente escrita de acordo com as normas da ortografia vigente:',
    alternativas: [
      'Ele ficou paralizado diante daquela notícia.',
      'Não quero que haja nenhuma excessão.',
      'Não sei por que eles não vem nos visitar.',
      'Para reivindicar o serviço, é preciso suavizar o preço.',
      'Depois de advinhar o resultado do jogo, ele foi ao cabelereiro.',
    ],
    correta: 3,
    comentario:
      'A frase D é a única totalmente correta: “reivindicar”, “suavizar” e “preço” estão grafados corretamente. Em A, “paralizado” (paralisado); em B, “excessão” (exceção); em C, “vem” (vêm); e em E, “cabelereiro” (cabeleireiro).',
  },
  {
    id: 'lp-ortografia-qlivro03-32',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fepese - Prefeitura de Coronel Freitas/SC — Auxiliar Administrativo - 2020) Assinale a alternativa em que a frase está corretamente escrita.',
    alternativas: [
      'A paralisação de ônibus foi para reivindicar preços mais justos nas passagens.',
      'Tomei uma chícara de café e depois um duxa de água fria.',
      'A salchicha estava quente e eu quiz esperar um pouco para comer o cachorro-quente.',
      'É preciso fazer a análize das finanças antes da viajem para o exterior.',
      'Nesses tempos de crise, iorgute e mortandela são opção de comida mais acessível à população.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a única com a frase escrita corretamente. Em B, “chícara” (xícara) e “duxa” (ducha); em C, “salchicha” (salsicha) e “quiz” (quis); em D, “análize” (análise) e “viajem” (viagem); e em E, “iorgute” (iogurte) e “mortandela” (mortadela).',
  },
  {
    id: 'lp-ortografia-qlivro03-33',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Quadrix - Cremese - Médico - 2021) A palavra “discussão” poderia ser substituída por “discursão”, pois ambas as grafias são corretas e têm o mesmo significado.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “discursão” não é grafia aceita. A forma correta é “discussão”, com dois “s”, e a substituição não é possível.',
  },
  {
    id: 'lp-ortografia-qlivro03-34',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado: '(Consulplan - IBGE - Supervisor de Pesquisas (Estatística) - 2011) Quanto à grafia marque a alternativa correta.',
    alternativas: [
      'A sensasão de poder torna as pessoas autoritárias e exigentes.',
      'A sociedade quer fazer contenção de despezas em relação a obras públicas.',
      'Nabuco advinhou o que aconteceria no Brasil.',
      'As classes mais desfavorecidas vencem os impecilhos impostos pelas elites.',
      'As pessoas solidárias trabalharão em projetos beneficentes.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “trabalharão” e “beneficentes” seguem a ortografia atual. Em A, “sensasão” deveria ser “sensação”; em B, “despezas” deveria ser “despesas”; e em D, “impecilhos” deveria ser “empecilhos”. A alternativa C, com “advinhou”, é variante de “adivinhou”, mas o gabarito do livro a considera incorreta.',
  },
  {
    id: 'lp-ortografia-qlivro03-35',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado: '(FCC - TRT/AL (19ª R) - Analista Judiciário - 2011) Quanto à ortografia, há INCORREÇÕES na frase:',
    alternativas: [
      'O crescimento da classe C tem tido uma importância incomensurável para o comércio, mas vem ocasionando também uma elevação na taxa de inadimplência, o que é perturbador.',
      'Milhões de pessoas têm sido beneficiadas com o crescimento econômico que se vê no país, saltando da classe D para a C, algo que há poucos anos não pareceria factível.',
      'Alguns especialistas vêm disseminando a teoria de que, a partir da distribuição de riqueza por meio da geração de milhões de novos empregos, a classe E deixe de existir.',
      'Os “consumidores emergentes”, como vêm sendo chamados os novos integrantes da classe C, ainda têm dificuldade em poupar e adquirem grande parcela de produtos a crédito.',
      'Sabe-se que a ascenção da classe D tem proporcionado um aumento expressivo do consumo de bens duráveis, o que pode acelerar sobremaneira esse mercado.',
    ],
    correta: 4,
    comentario:
      'A alternativa E tem a incorreção: “ascenção” deveria ser “ascensão”, com dois “s”. As demais frases estão corretas quanto à ortografia, com “incomensurável”, “factível”, “emergentes” e “poupar” grafadas como manda o padrão.',
  },
  {
    id: 'lp-ortografia-qlivro03-36',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Prefeitura de Porto Velho/RO - Assistente Administrativo - 2012) “E agiliza o aprendizado”. Assim como a palavra destacada (agiliza), são escritas com “z” todas as palavras da seguinte alternativa:',
    alternativas: [
      'reali___ar / pesqui___ar / fiscali___ar;',
      'avi___ar / enrai___ar / legali___ar;',
      'arbori___ar / anali___ar / suavi___ar;',
      'generali___ar / utili___ar / u___ar;',
      'hospitali___ar / civili___ar / humani___ar.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “hospitalizar”, “civilizar” e “humanizar” são escritos com z, como “agilizar”. Nas demais há ao menos uma palavra com s: “pesquisar” (A), “avisar” (B), “analisar” (C) e “usar” (D).',
  },
  {
    id: 'lp-ortografia-qlivro03-37',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundatec - Prefeitura de Porto Alegre/RS - Técnico em Enfermagem - 2022) As lacunas dos trechos “___ políticas daquela época”, “o bom _ parece que saiu de férias” e “não há ___ político sobre nada” devem ser preenchidas, respectivamente, por:',
    alternativas: [
      'Fações – censo – concenso',
      'Facções – senso – consenso',
      'Faccões – senso – consenso',
      'Fações – senso – concenso',
      'Faccões – censo – concenso',
    ],
    correta: 1,
    comentario:
      'A alternativa B, “Facções – senso – consenso”, é a correta. “Facções” é a grafia com ç, e o plural “facções políticas” exige essa forma; “senso”, no sentido de juízo, faz parte de “o bom senso”, enquanto “censo” é levantamento estatístico. “Consenso” significa acordo geral e se escreve com s, por isso as opções com “concenso” e “faccões” erram.',
  },
];
