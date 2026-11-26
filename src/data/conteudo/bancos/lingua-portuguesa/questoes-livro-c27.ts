import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 27 — Pontuação), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C27: QuestaoTreino[] = [
  {
    id: 'lp-pontuacao-qlivro27-01',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE-TJ/SE - ANALISTA (CARGOS 3, 8 A 18) - 2014) Fragmento de texto: “O Código Penal de 1890 livrava da condenação quem matava em estado de completa privação de sentidos. O atual Código Penal, de 1940, abrevia a pena dos criminosos que agem sob o domínio de violenta emoção”. O emprego das vírgulas que isolam “de 1940” é facultativo, de modo que a supressão dessas vírgulas não prejudicaria o sentido original ou a correção gramatical do texto.',
    gabaritoCE: false,
    comentario:
      'Errado. As vírgulas que isolam “de 1940” formam um adjunto adnominal explicativo, que não é facultativo: sem elas, o texto passa a sugerir que existem vários Códigos Penais de 1940. A supressão altera o sentido, e não apenas o estilo.',
  },
  {
    id: 'lp-pontuacao-qlivro27-02',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CFSPE - PREVIC - TÉCNICO ADMINISTRATIVO - 2011) Fragmento de texto: “Para saber se o documento foi realmente enviado pelo INSS, basta o usuário ligar para a Central 135 ou acessar o sítio da previdência social na Internet e seguir as instruções ali contidas”. O trecho “basta o usuário ligar (...) ali contidas” pode ser reescrito, mantendo-se a correção gramatical do período, da seguinte forma: basta que os usuários telefonem para o número 135, da Central de Atendimentos, ou acessem a página eletrônica da previdência social e sigam as instruções ali contidas.',
    gabaritoCE: true,
    comentario:
      'Certo. A expressão “da Central de Atendimentos” é um adjunto adnominal explicativo, isolado por vírgulas, que apenas identifica o número 135. Sem essas vírgulas, a leitura seria a de que a Central tem mais de um número, o que alteraria a informação.',
  },
  {
    id: 'lp-pontuacao-qlivro27-03',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - ABIN - OFICIAL TÉCNICO DE INTELIGÊNCIA - 2010) Fragmento de texto: “No projeto Segurança Pública para o Brasil, da Secretaria Nacional de Segurança Pública, aponta-se como principal causa do aumento da criminalidade, o tráfico de drogas e de armas”. A supressão das vírgulas que isolam a expressão “da Secretaria Nacional de Segurança Pública” alteraria o sentido do texto, visto que estaria subentendida a existência de, pelo menos, mais um projeto denominado Segurança Pública para o Brasil.',
    gabaritoCE: true,
    comentario:
      'Certo. A expressão isolada é um adjunto adnominal explicativo; retirada as vírgulas, ela passa a restringir o nome, sugerindo outros projetos com o mesmo título. A mudança de sentido comprova que a pontuação não é facultativa.',
  },
  {
    id: 'lp-pontuacao-qlivro27-04',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - IPHAN - Cargos de Nível Superior - 2018) Com relação aos sentidos e aos aspectos linguísticos do texto precedente, julgue o item que segue. “Os outros nascem para viver, estes para servir”. Seria mantida a correção gramatical do texto caso a vírgula empregada logo após “viver” fosse substituída por ponto e vírgula.',
    gabaritoCE: true,
    comentario:
      'Certo, segundo o gabarito da banca. A vírgula marca a elipse do verbo da segunda oração (“estes [nascem] para servir”), e a troca por ponto e vírgula exige uma adaptação que a banca desconsiderou. O item é controverso, e o livro o trata como mal formulado.',
  },
  {
    id: 'lp-pontuacao-qlivro27-05',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - PC/RJ - Inspetor - 2008) Porém, havendo um número “excepcionalmente elevado” de estrangeiros, estes podem ser mesclados aos presos comuns, e as famílias podem ser separadas. (l. 30-33) No trecho acima, seguindo as regras da boa discursividade, utilizou-se apropriadamente a vírgula antes da conjunção e. Assinale a alternativa em que isso não tenha ocorrido.',
    alternativas: [
      'Eles se esforçaram muito, e acabaram sendo reprovados.',
      'Eles chegaram à janela muito timidamente, espiaram com cuidado, e depois abriram um sorriso.',
      'A turba gritava, e vociferava, e brandia ameaçadoramente.',
      'Fiz, e faria tudo novamente.',
      'Ele esperava, naquela tarde, a chegada do malote, e, depois, ela esperaria após anoitecer.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a resposta: a vírgula antes do “e” aparece em orações com o mesmo sujeito (eles), e isso não se justifica. Em A, o “e” tem valor adversativo (= mas); em C há polissíndeto, em que as vírgulas são obrigatórias; em D, a vírgula é enfática; e em E as orações têm sujeitos diferentes, o que legitima a vírgula.',
  },
  {
    id: 'lp-pontuacao-qlivro27-06',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - TRE/PA - Analista Judiciário - 2011) Os sócios e colaboradores dificilmente são consultados, e muitas vezes o apoio reflete mais as posições pessoais dos controladores do que os valores e princípios das empresas. (l. 9-13) A respeito da vírgula no período acima, é correto afirmar que:',
    alternativas: [
      'está correta, pois se trata de vírgula antes da conjunção E com valor adversativo;',
      'está correta, pois é caso de vírgula antes da conjunção E que inicia oração com sujeito diferente do da anterior;',
      'está incorreta, uma vez que não é necessário usar vírgula já havendo a conjunção E, mesmo sem valor aditivo;',
      'está incorreta, já que introduz oração aditiva, mesmo que os sujeitos sejam diversos;',
      'é facultativa, pois as orações apenas se justapõem e não se coordenam.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o “e” liga duas orações com sujeitos diferentes (os sócios e colaboradores... / o apoio...), caso em que a vírgula antes da conjunção é o uso esperado. A alternativa A confunde o “e” com valor adversativo; C e D negam uma regra que se aplica ao caso; e E afirma que as orações não se coordenam, quando de fato se coordenam.',
  },
  {
    id: 'lp-pontuacao-qlivro27-07',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/PA/AP (8ª R) - Técnico Judiciário - 2010) Considere: I. O Polo Norte está ameaçado: o oceano gelado que o rodeia começou a derreter. II. Vamos assistir a um fenômeno raro: uma subversão da geografia que se desenrolará diante de nossos olhos. III. As nações que margeiam o Oceano Ártico já estão na linha de largada: Estados Unidos, Rússia, Canadá, Groenlândia (Dinamarca) e Noruega. Identifica-se, nos segmentos introduzidos por dois pontos, respectivamente, a noção de:',
    alternativas: [
      'explicação de sentido causal, especificação do significado da expressão anterior a eles e enumeração;',
      'consequência de um fato, explicação adicional e especificação necessária para o entendimento do texto;',
      'causa e consequência, conclusão decorrente da afirmativa anterior e especificação dos interesses em disputa;',
      'temporalidade, explicação com sentido causal e repetição enfática de dados já constantes anteriormente;',
      'especificação do sentido de um termo anterior, constatação decorrente da exposição e repetição enumerativa.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: no item I, os dois-pontos introduzem a causa da ameaça; no II, a expressão seguinte especifica o “fenômeno raro”; no III, eles introduzem uma enumeração. As demais atribuem consequência, conclusão ou temporalidade a segmentos que não têm esses valores.',
  },
  {
    id: 'lp-pontuacao-qlivro27-08',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - FINEP - Técnico - 2011) A vírgula pode ser retirada sem prejuízo para o significado e mantendo a norma-padrão na seguinte sentença:',
    alternativas: [
      'Mário, vem falar comigo depois do expediente.',
      'Amanhã, apresentaremos a proposta de trabalho.',
      'Telefonei para o Tavares, meu antigo chefe.',
      'Encomendei canetas, blocos e crachás para a reunião.',
      'Entrou na sala, cumprimentou a todos e iniciou o discurso.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “Amanhã” é um adjunto adverbial de curta extensão, deslocado para o início da oração, e nesse caso a vírgula é facultativa. A alternativa A traz vocativo, que é obrigatoriamente isolado; C traz aposto explicativo; D, uma enumeração; e E, orações coordenadas assindéticas, cuja vírgula não pode ser retirada.',
  },
  {
    id: 'lp-pontuacao-qlivro27-09',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - FINEP - Analista de Suporte - 2011) Os trechos transcritos abaixo apresentam apenas um sinal de pontuação. Em qual deles, o sinal pode ser substituído por ponto e vírgula (;), com as adaptações necessárias, se for o caso?',
    alternativas: [
      'Há 15 dias, uma educadora no Recife',
      'indagou a um grupo de estudantes quais os meios de comunicação que eles conheciam. Nenhum citou cartões-postais',
      'Para se ter uma ideia de sua importância, basta lembrar um pouco da história',
      'tornou-se uma mania que invadiu toda a cidade — lembra o colecionador Liedo Maranhão',
      'reduto da cultura popular do Recife, onde eram encontrados em caixas de sapato',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o ponto separa duas frases independentes que tratam do mesmo assunto, e ele pode ser trocado por ponto e vírgula sem alterar a norma. Nas demais, a vírgula ou o travessão marca uma pausa interna ao período (adjunto deslocado, oração intercalada ou enumeração), que não admite a troca.',
  },
  {
    id: 'lp-pontuacao-qlivro27-10',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Técnico de Enfermagem do Trabalho - 2011) Há ERRO quanto ao emprego dos sinais de pontuação em:',
    alternativas: [
      'Ao dizer tais palavras, levantou-se, despediu-se dos convidados e retirou-se da sala: era o final da reunião.',
      'Quem disse que, hoje, enquanto eu dormia, ela saiu sorrateiramente pela porta?',
      'Na infância, era levada e teimosa; na juventude, tornou-se tímida e arredia; na velhice, estava sempre alheia a tudo.',
      'Perdida no tempo, vinham-lhe à lembrança a imagem muito branca da mãe, as brincadeiras no quintal, à tarde, com os irmãos e o mundo mágico dos brinquedos.',
      'Estava sempre dizendo coisas de que mais tarde se arrependeria. Prometia a si própria que da próxima vez, tomaria cuidado com as palavras, o que entretanto, não acontecia.',
    ],
    correta: 4,
    comentario:
      'A alternativa E tem erro: “entretanto” aparece intercalado, mas a vírgula só vem depois dele, sem a que deveria abrir a intercalação; o correto seria “o que, entretanto, não acontecia”. As demais alternativas empregam vírgulas e ponto e vírgula de acordo com enumerações e intercalações.',
  },
  {
    id: 'lp-pontuacao-qlivro27-11',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - Transpetro - Técnico de Contabilidade - 2011) A mudança na pontuação mantém o sentido da frase original, preservando a norma-padrão da língua, em:',
    alternativas: [
      '“(...) realizada efetivamente há uns quatro ou cinco anos,” / realizada efetivamente há uns quatro, ou cinco anos',
      '“(...) analisa o impacto da criação do telégrafo (surgido em 1837).” / analisa o impacto da criação do telégrafo: surgido em 1837',
      '“Romances floresceram sob impacto do telégrafo. Códigos secretos foram inventados (...)” / Romances floresceram sob impacto do telégrafo, códigos secretos foram inventados',
      '“Igual impacto teve a Internet.” / Igual impacto, teve a Internet',
      '“(...) não se ouviam notícias delas durante anos.” / não se ouviam notícias, delas, durante anos',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: duas orações coordenadas assindéticas podem ser separadas por vírgula, e a troca do ponto mantém a leitura e o sentido. Em A, a vírgula antes de “ou” altera a ideia de alternativa entre os números; em B, os dois-pontos são indevidos após um parêntese; em D e E, a vírgula separa sujeito e verbo ou o sujeito de seu predicado, o que a norma não admite.',
  },
  {
    id: 'lp-pontuacao-qlivro27-12',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Transpetro - Administrador Júnior - 2011) No diálogo abaixo, cada fala corresponde a um número. I. Por que ele adquiriu somente um ingresso! II. Comprou dois: um para você outro para mim. III. Mas ele saiu daqui dizendo: “Só comprarei o meu!” IV. Pelo visto você acredita em tudo, o que ele diz. Em relação ao diálogo, a pontuação está correta APENAS em:',
    alternativas: ['I;', 'III;', 'I e II;', 'II e IV;', 'III e IV.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: a fala III está bem pontuada, com a citação entre aspas e o ponto final dentro delas. A fala I usa ponto de exclamação numa pergunta; a II falta a vírgula em “um para você, outro para mim”; e a IV separa indevidamente “tudo” da oração relativa restritiva “o que ele diz”.',
  },
  {
    id: 'lp-pontuacao-qlivro27-13',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TCU — Auditor Federal de Controle Externo - 2011) (...) Tanto na menor como na maior felicidade, porém, há sempre algo que faz que a felicidade seja uma felicidade: a faculdade de esquecer, ou melhor, em palavras mais eruditas, a faculdade de sentir as coisas, durante todo o tempo que dura a felicidade, fora de qualquer perspectiva histórica. (...) No segundo período do texto, o trecho introduzido pelos dois-pontos apresenta uma explicação do que o autor entende por “maior felicidade”.',
    gabaritoCE: false,
    comentario:
      'Errado. Os dois-pontos introduzem a explicação do termo “algo” (a faculdade de esquecer), e não do que o autor entende por “maior felicidade”. O referente explicado é outro, e por isso a afirmação não se sustenta.',
  },
  {
    id: 'lp-pontuacao-qlivro27-14',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — EBC — Gestor de Atividade Jornalística - 2011) (...) “Pode parecer uma difícil realidade agora, mas, na Idade Média, os monges escreviam em conjunto os livros para a posteridade”, observou. No trecho acima, a vírgula que antecede “observou” poderia ser substituída por travessão, sem prejuízo para o sentido original e para a correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      'Certo. A vírgula isola o verbo de dizer intercalado na fala, e o travessão cumpre a mesma função de isolamento, sem alterar a gramática nem o sentido. Muda apenas a convenção gráfica adotada pelo texto.',
  },
  {
    id: 'lp-pontuacao-qlivro27-15',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - BRB - Analista de Tecnologia da Informação - 2011) (...) Em meio à turbulência financeira, essas nações também ganharam voz e importância no contexto geopolítico que culminou com a ascensão do G-20 (...) Para dar mais destaque ao complemento da forma verbal “ganharam”, duas vírgulas poderiam ser inseridas no período: uma antes e outra depois da expressão “voz e importância”.',
    gabaritoCE: false,
    comentario:
      'Errado. O complemento “voz e importância” está em sua posição normal, depois do verbo, e não pode ser separado dele por vírgulas. Essa separação só é possível quando o complemento está deslocado da ordem direta.',
  },
  {
    id: 'lp-pontuacao-qlivro27-16',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TJ/ES — Analista Judiciário (Letras) - 2011) (...) Assim, a interação é vista como processo social que dá aos atores que interagem não apenas um papel de agentes de reprodução, mas de reinventores da vida social. A ausência de vírgulas logo depois de “atores” e de “interagem” indica que há outros atores que não interagem.',
    gabaritoCE: true,
    comentario:
      'Certo. Sem vírgula após “atores”, a oração “que interagem” é restritiva e delimita quais atores são considerados, o que implica que há outros atores que não interagem. Com vírgula, a oração seria explicativa e abrangeria todos os atores.',
  },
  {
    id: 'lp-pontuacao-qlivro27-17',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Correios - Cargos de Nível Superior - 2011) (...) Para apreciar o valor e o significado dessas indicações, é preciso entender as principais razões que levavam o padre a interessar-se pelo tempo (...) O emprego de vírgula logo após o vocábulo “indicações” é obrigatório.',
    gabaritoCE: true,
    comentario:
      'Certo. A expressão “Para apreciar o valor e o significado dessas indicações” é um adjunto adverbial deslocado de grande extensão, que deve ser isolado por vírgula da oração principal. Nesse caso a vírgula não é opcional.',
  },
  {
    id: 'lp-pontuacao-qlivro27-18',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES — Analista Judiciário (Taquigrafia) - 2011) (...) Abri uma página ao acaso e li uma frase que dizia ser um sinal de fraqueza, e não de virtude, ir agachar-se sob o túmulo a fim de escapar dos golpes do destino. (...) Caso se omitisse a vírgula empregada imediatamente antes da conjunção “e”, a correção gramatical e a coerência do texto seriam preservadas.',
    gabaritoCE: false,
    comentario:
      'Errado. Antes do “e” com valor de contraste (“e não de virtude”), a vírgula marca a oposição entre “fraqueza” e “virtude”. Sem ela, perde-se a clareza do contraste, e o texto deixa de expressar com precisão a ideia que pretende.',
  },
  {
    id: 'lp-pontuacao-qlivro27-19',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES — Analista Judiciário (Taquigrafia) - 2011) Fragmento de texto: (...) a vida depende da vontade de outrem, a morte, da nossa. (...) No trecho “a morte, da nossa”, a vírgula foi empregada para indicar a omissão do vocábulo “vontade”.',
    gabaritoCE: false,
    comentario:
      'Errado. A vírgula marca a elipse do verbo (“depende”), que já aparece na primeira oração coordenada, e não a omissão do substantivo “vontade”. O substantivo permanece implícito, mas a vírgula não sinaliza esse elemento.',
  },
  {
    id: 'lp-pontuacao-qlivro27-20',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - FCC - Infraero - Administrador - 2011) Está inteiramente correta a pontuação do seguinte período:',
    alternativas: [
      'Os personagens principais de uma história, responsáveis pelo sentido maior dela, dependem, muitas vezes, de pequenas providências que, tomadas por figurantes aparentemente sem importância, ditam o rumo de toda a história.',
      'Os personagens principais, de uma história, responsáveis pelo sentido maior dela, dependem muitas vezes, de pequenas providências que tomadas por figurantes, aparentemente sem importância, ditam o rumo de toda a história.',
      'Os personagens principais de uma história, responsáveis pelo sentido maior dela dependem muitas vezes de pequenas providências, que tomadas por figurantes aparentemente, sem importância, ditam o rumo de toda a história.',
      'Os personagens principais, de uma história, responsáveis pelo sentido maior dela, dependem, muitas vezes de pequenas providências, que tomadas por figurantes aparentemente sem importância, ditam o rumo de toda a história.',
      'Os personagens principais de uma história, responsáveis, pelo sentido maior dela, dependem muitas vezes de pequenas providências, que tomadas por figurantes, aparentemente, sem importância, ditam o rumo de toda a história.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: isola corretamente o adjunto adnominal explicativo “responsáveis pelo sentido maior dela” e a oração reduzida “tomadas por figurantes”, sem separar sujeito de verbo nem verbo de complemento. As demais erram por vírgula entre o nome e seu complemento, por vírgula entre sujeito e verbo ou por isolamento incompleto da oração intercalada.',
  },
  {
    id: 'lp-pontuacao-qlivro27-21',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRE/PE - Analista Judiciário - 2011) Está plenamente adequada a pontuação da frase:',
    alternativas: [
      'Não cabe aos jovens, ao menos os livres de cinismo tentar justificar, suas ações pela pressão do mercado de trabalho, pois os velhos jornalistas, igualmente pressionados, não costumavam abdicar dos princípios éticos.',
      'Não cabe aos jovens, ao menos os livres de cinismo, tentar justificar suas ações, pela pressão do mercado de trabalho; pois os velhos jornalistas igualmente pressionados, não costumavam abdicar dos princípios éticos.',
      'Não cabe aos jovens, ao menos, os livres de cinismo, tentar justificar suas ações, pela pressão do mercado de trabalho, pois, os velhos jornalistas, igualmente pressionados, não costumavam abdicar dos princípios éticos.',
      'Não cabe aos jovens, ao menos os livres de cinismo tentar justificar suas ações pela pressão do mercado de trabalho, pois os velhos jornalistas, igualmente pressionados, não costumavam abdicar dos princípios éticos.',
      'Não cabe aos jovens, ao menos, os livres de cinismo, tentar justificar suas ações, pela pressão do mercado de trabalho, pois os velhos jornalistas, igualmente pressionados não costumavam abdicar, dos princípios éticos.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: não há vírgula entre o verbo e seu complemento, e a oração intercalada “igualmente pressionados” vem isolada. A alternativa A separa o verbo do complemento; B usa ponto e vírgula seguido de vírgula indevida após o adjunto; C põe vírgula depois de “pois”; e E separa o verbo de seu complemento e o objeto do verbo.',
  },
  {
    id: 'lp-pontuacao-qlivro27-22',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRT/SE (20ª R) - Analista Judiciário - 2011) Está inteiramente adequada a pontuação da seguinte frase:',
    alternativas: [
      'Para o gosto moderno, a grandiloquência não surge ao contrário de outras épocas, como prova de gosto refinado, na verdade a pompa retórica indicia, o vazio do pensamento.',
      'Para o gosto moderno, a grandiloquência, não surge, ao contrário de outras épocas como prova de gosto refinado, na verdade a pompa retórica indicia: o vazio do pensamento.',
      'Para o gosto moderno, a grandiloquência não surge, ao contrário de outras épocas, como prova de gosto refinado; na verdade, a pompa retórica indicia o vazio do pensamento.',
      'Para o gosto moderno, a grandiloquência não surge, ao contrário de outras épocas como prova de gosto refinado, na verdade, a pompa retórica indicia o vazio do pensamento.',
      'Para o gosto, moderno, a grandiloquência, não surge, ao contrário de outras épocas, como prova de gosto refinado: na verdade a pompa retórica indicia o vazio do pensamento.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: vírgulas isolam o adjunto deslocado “ao contrário de outras épocas”, e o ponto e vírgula separa as duas orações, com a expressão “na verdade” isolada no início da segunda. As demais põem vírgula entre sujeito e verbo ou entre o verbo e seu complemento, ou usam dois-pontos e vírgulas fora de lugar.',
  },
  {
    id: 'lp-pontuacao-qlivro27-23',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - MDIC - Analista de Comércio Exterior - 2012) Os trechos a seguir constituem um texto adaptado do Editorial de O Globo de 20/3/2012. Assinale a opção correta quanto ao emprego dos sinais de pontuação.',
    alternativas: [
      'Estudo recente de uma instituição americana, mostra que, em termos da produtividade do trabalho, estamos atrás da Argentina, do Chile, do México, do Uruguai, do Peru e da Colômbia, para citar apenas algumas nações sul-americanas. Superamos apenas a Bolívia e Equador.',
      'O aumento da escolaridade, foi um passo à frente, pois os jovens estarão mais aptos ao aprendizado necessário, a um bom desempenho em suas profissões e atividades do que as gerações anteriores.',
      'Porém, para se nivelar aos parâmetros, até mesmo, da maioria dos países do continente, o Brasil, terá de andar bem mais rápido.',
      'O país já se encontra em um estágio no qual os saltos de produtividade não ocorrerão sem investimentos mais expressivos. Além de equipamentos, automação e outras ferramentas da tecnologia, parte desses investimentos precisará estar voltada para os recursos humanos.',
      'É recente (menos de vinte anos) um envolvimento mais vigoroso do poder público, nesse esforço, para qualificar os recursos humanos disponíveis. Até então, a iniciativa partia de instituições privadas ou das empresas, muitas vezes agindo de maneira isolada.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: a expressão “Além de equipamentos, automação e outras ferramentas da tecnologia” é um adjunto deslocado de grande extensão, e a vírgula que a fecha é obrigatória. As demais erram por vírgula entre sujeito e verbo (A, B, C), o que a norma não admite.',
  },
  {
    id: 'lp-pontuacao-qlivro27-24',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf - CGU - Analista de Finanças e Controle - 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? “Há erro gramatical (vírgula depois de “minerais”) inserido na transcrição do fragmento abaixo. O dinamismo da indústria ao longo do ano, particularmente no setor de veículos automotores, metalurgia e produtos minerais, assegurou o crescimento real da receita...”',
    gabaritoCE: false,
    comentario:
      'Errado. A vírgula depois de “minerais” fecha a expressão intercalada entre o sujeito (“O dinamismo da indústria”) e o verbo (“assegurou”), e é exigida pela estrutura. Não há erro gramatical, e a afirmação está incorreta.',
  },
  {
    id: 'lp-pontuacao-qlivro27-25',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - CGU - Analista de Finanças e Controle - 2012) Desconsiderando os necessários ajustes nas letras iniciais maiúsculas e minúsculas, provoca-se erro gramatical e/ou incoerência textual ao: O Brasil vive uma situação intrigante: enquanto a economia alterna altos e baixos, a taxa de desemprego cai de forma consistente. Uma das possíveis causas é a redução do crescimento demográfico, que desacelera a expansão da população apta a trabalhar. Com menos pessoas buscando uma ocupação, a taxa de desemprego pode cair mesmo com o baixo crescimento. Isso é bom? Depende. Por um lado, a escassez de mão de obra reduz o número de desempregados e aumenta a renda. Por outro, eleva os custos e reduz a competitividade das empresas, o que pode levá-las a demitir para reequilibrar as contas. É uma bomba-relógio que só pode ser desarmada com o aumento da produtividade - para manter o emprego, os trabalhadores precisarão ser treinados para produzir mais.',
    alternativas: [
      'substituir o sinal de interrogação depois de “bom” por um sinal de ponto e vírgula;',
      'inserir uma vírgula depois de “cair”;',
      'retirar o sinal de dois pontos depois de “intrigante” e, ao mesmo tempo, substituir a vírgula depois de “baixos” pelo sinal de dois pontos;',
      'substituir o ponto depois de “Depende” pelo sinal de dois pontos e, ao mesmo tempo, substituir o ponto depois de “renda” por ponto e vírgula;',
      'substituir o travessão depois de “produtividade” pelo sinal de dois pontos.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: o ponto de interrogação de “Isso é bom?” abre a pergunta que o “Depende” responde; trocá-lo por ponto e vírgula encadeia a pergunta à resposta de modo incoerente. Nas demais, a troca de sinal mantém a gramática e a leitura, ou apenas altera o estilo.',
  },
  {
    id: 'lp-pontuacao-qlivro27-26',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - MI-CENAD — Analista de Sistemas - 2012) Provoca-se erro gramatical e incoerência textual ao fazer a seguinte alteração nos sinais de pontuação do texto: Sabe-se muito pouco dos rumos que as grandes cidades tomarão nas próximas décadas. Muitas vezes nem se prevê a dinâmica metropolitana do próximo quinquênio. Mesmo com a capacitação e o preparo dos técnicos dos órgãos envolvidos com a questão urbana, há variáveis independentes que interferem nos planos e projetos elaborados pelos legislativos e encaminhados ao Executivo. Logicamente não se prevê o malfadado caos urbano, mas ele pode ensejar que o país se adiante aos eventos e tome medidas preventivas ao desarranjo econômico, que teria consequências nefastas. (...) Medidas nessa direção podem (e devem) estar em consonância com a projeção de tendências e mesmo com a antevisão de demandas dos destinatários da gestão urbana - os cidadãos, urbanos ou não.',
    alternativas: [
      'substituir o ponto depois de “quinquênio”, por vírgula;',
      'substituir o ponto depois de “décadas” pelo sinal de dois pontos;',
      'inserir uma vírgula depois de “Logicamente”;',
      'retirar os parênteses que destacam “e devem”;',
      'substituir o travessão depois de “urbana” por vírgula.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: o ponto depois de “quinquênio” encerra a frase sobre a previsão; trocá-lo por vírgula funde esse enunciado à frase seguinte sobre as variáveis independentes e quebra a coerência do parágrafo. As demais alterações mantêm a gramática e o sentido, ou são apenas escolhas de estilo.',
  },
  {
    id: 'lp-pontuacao-qlivro27-27',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf - MI-CENAD — Analista de Sistemas - 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? (...) Existe consenso entre especialistas de que aumentar a densidade habitacional ao redor dos grandes eixos de transporte público, bem como ampliar os investimentos no modelo que realmente pode chegar a todos os cantos da cidade — os corredores de ônibus —, será a chave do sucesso para qualquer cidade que almeja ser líder global. - A presença do travessão depois de “ônibus” torna desnecessário o uso da vírgula; por isso, sua omissão manteria a correção gramatical do texto.',
    gabaritoCE: false,
    comentario:
      'Errado. O par de travessões isola “os corredores de ônibus” entre o sujeito e o verbo “será”, e a vírgula após o travessão de fechamento é exigida pela estrutura. A presença do travessão não dispensa essa vírgula, e sua omissão quebra a correção.',
  },
  {
    id: 'lp-pontuacao-qlivro27-28',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf - MPOG - Analista de Planejamento e Orçamento - 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? Assim como a ideia de civilização implica a ideia de barbárie, a experiência da modernidade (que não deve ser pensada como algo que já aconteceu, mas como algo que deve estar sempre acontecendo, um porvir) implica a experiência da violência que a tornou possível — a violência fundadora da modernidade. - O sinal de travessão exerce função semelhante ao sinal de dois pontos, que é a de introduzir uma explicação ou uma especificação para a ideia anterior.',
    gabaritoCE: true,
    comentario:
      'Certo. Nesse trecho, o travessão introduz “a violência fundadora da modernidade”, que explica e especifica a violência mencionada antes, função típica também dos dois-pontos. A afirmação está correta.',
  },
  {
    id: 'lp-pontuacao-qlivro27-29',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf - MPOG - Analista de Planejamento e Orçamento - 2012) Provoca-se erro gramatical ou incoerência na argumentação do texto ao substituir os dois travessões por vírgulas: “O desenvolvimento é um processo complexo, que deriva de uma gama de fatores — entre os quais se realça a educação — e precisa de tempo para enraizar-se”.',
    gabaritoCE: false,
    comentario:
      'Errado. As vírgulas isolam a mesma expressão intercalada (“entre os quais se realça a educação”), e a gramática e a argumentação do período permanecem. A troca de travessões por vírgulas é uma escolha de estilo que não produz erro.',
  },
  {
    id: 'lp-pontuacao-qlivro27-30',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf - SUSEP — Analista Técnico - 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? Prejudica-se a correção gramatical do período ao se substituir os travessões por vírgulas: “Dados do Sine - uma rede pública de agências de emprego, associada ao Ministério do Trabalho - mostram que apenas 39% das vagas ali oferecidas em 2009 foram preenchidas”.',
    gabaritoCE: false,
    comentario:
      'Errado. Vírgulas podem isolar a expressão explicativa “uma rede pública de agências de emprego, associada ao Ministério do Trabalho”, como os travessões fazem, e a correção gramatical é mantida. Não há prejuízo.',
  },
  {
    id: 'lp-pontuacao-qlivro27-31',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — MPE/PI — Analista Ministerial — 2012) Preserva-se a correção gramatical do texto ao se substituírem os dois-pontos, após a expressão “ou seja” (... o sistema nervoso causaria uma pane nos outros órgãos, ou seja: chegamos a um ponto em que...), por vírgula.',
    gabaritoCE: true,
    comentario:
      'Certo. Depois da expressão “ou seja”, que já sinaliza a explicação, os dois-pontos podem ser trocados por vírgula sem prejuízo gramatical. Os dois-pontos são a escolha mais usual, mas a vírgula é aceita neste caso.',
  },
  {
    id: 'lp-pontuacao-qlivro27-32',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB — IRBr - Diplomata - 2012) E certo que, de modo geral, toda obra literária deve ser a expressão, a revelação de uma personalidade. Sem alteração da informação expressa no primeiro período do texto, a expressão adverbial “de modo geral” poderia ser deslocada, com as vírgulas, para imediatamente depois da locução verbal “deve ser” ou, eliminando-se as vírgulas que a isolam, para imediatamente após o núcleo nominal “personalidade”.',
    gabaritoCE: false,
    comentario:
      'Errado. A primeira possibilidade é válida, mas a segunda não: sem vírgulas, a expressão colada a “personalidade” passa a modificar o nome, e não o verbo, o que altera a informação do período.',
  },
  {
    id: 'lp-pontuacao-qlivro27-33',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TCDF - Auditor de Controle Externo - 2012) (...) representaram profundas mudanças para a sociedade da época, mas, do ponto de vista político, assistiu-se a uma concentração ainda maior (...) Justifica-se o emprego da vírgula logo após “mas” para enfatizar o sentido de contraste introduzido por essa conjunção, razão por que a supressão desse sinal de pontuação não acarretaria prejuízo gramatical ao texto.',
    gabaritoCE: false,
    comentario:
      'Errado. A conjunção “mas” não aceita vírgula depois de si, salvo quando uma expressão intercalada vem logo em seguida; aqui, “do ponto de vista político” é essa intercalação. Por isso a vírgula é exigida, e sua supressão prejudicaria a correção gramatical.',
  },
  {
    id: 'lp-pontuacao-qlivro27-34',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PC/CE - Inspetor - 2012) (...) os dirigentes políticos sonham com estabilidade. Ora, as formas de governo utilizadas pelos impérios fascinam por sua resistência (...) A vírgula após “Ora” pode ser suprimida sem prejuízo para a correção gramatical e para o sentido original do texto.',
    gabaritoCE: false,
    comentario:
      'Errado. Quando “Ora” inicia o período como expressão de transição, a vírgula que o segue isola esse conectivo do restante da frase. Retirá-la deixa a expressão colada à oração seguinte e prejudica a correção gramatical.',
  },
  {
    id: 'lp-pontuacao-qlivro27-35',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - PC/CE - Inspetor - 2012) (...) o fato de o império absorver povos diferentes faz que alguns de seus componentes desejem destacar-se do conjunto. Isso explica por que os impérios perduram (...) Sem que haja prejuízo para o sentido original do texto, “Isso” pode ser corretamente substituído por o que, desde que se substitua o ponto que antecede esse pronome por ponto e vírgula.',
    gabaritoCE: false,
    comentario:
      'Errado. “Isso” é pronome demonstrativo que retoma todo o fato anterior; ao trocá-lo por “o que”, a palavra passa a introduzir oração relativa, e a relação com o período muda. O ponto e vírgula não resolve essa mudança de estrutura.',
  },
  {
    id: 'lp-pontuacao-qlivro27-36',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PC/CE - Inspetor - 2012) (...) Pensar o império não significa ressuscitá-lo dos mundos passados. Trata-se de considerar a multiplicidade (...) Com os devidos ajustes de maiúsculas e minúsculas, o ponto após “passados” pode ser substituído por dois-pontos sem que haja prejuízo para a correção gramatical e o sentido original do texto.',
    gabaritoCE: true,
    comentario:
      'Certo. Os dois-pontos podem introduzir a explicação que segue (“Trata-se de considerar...”), e, com o ajuste da maiúscula, a correção e o sentido permanecem. A troca é uma opção estilística válida.',
  },
  {
    id: 'lp-pontuacao-qlivro27-37',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - PC/CE - Inspetor - 2012) Fragmento de texto: “... outras formas de soberania que respondam melhor a um mundo caracterizado ao mesmo tempo pela desigualdade e pela diversidade”. Caso se insira, antes de “caracterizado”, o segmento que é, será necessário, para a manutenção da correção gramatical e do sentido do período, o emprego de vírgula após “mundo”.',
    gabaritoCE: false,
    comentario:
      'Errado. Com a inserção de “que é”, a oração passa a ser adjetiva restritiva, que delimita “um mundo” pela caracterização. A vírgula após “mundo” só seria necessária para torná-la explicativa, o que mudaria o sentido do texto e não é exigido para a correção.',
  },
  {
    id: 'lp-pontuacao-qlivro27-38',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - STJ - Técnico Judiciário - 2012) Fragmento de texto: “A um coronel que se queixava da vida de quartel, um jornalista disse:...” O emprego da vírgula após “quartel” é facultativo.',
    gabaritoCE: true,
    comentario:
      'Certo. Trata-se de oração adjetiva longa em início de período, após a qual a vírgula é facultativa segundo parte dos gramáticos (como Bechara e Sacconi), o que a banca aceita. A regra não é unânime, mas a questão a considera facultativa.',
  },
  {
    id: 'lp-pontuacao-qlivro27-39',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/SP - Analista Judiciário - 2012) Está inteiramente adequada a pontuação do seguinte período:',
    alternativas: [
      'Em qualquer escalão do governo costuma haver mais cedo, ou mais tarde, atritos entre o pessoal técnico-administrativo estabilizado, por concurso, e o pessoal indicado para cargos de confiança que ficam ao sabor, das conveniências políticas.',
      'Em qualquer escalão, do governo, costuma haver mais cedo ou mais tarde, atritos entre o pessoal técnico-administrativo estabilizado por concurso, e o pessoal indicado para cargos de confiança, que ficam ao sabor das conveniências políticas.',
      'Em qualquer escalão do governo, costuma haver, mais cedo ou mais tarde, atritos entre o pessoal técnico-administrativo, estabilizado por concurso, e o pessoal indicado para cargos de confiança, que ficam ao sabor das conveniências políticas.',
      'Em qualquer escalão do governo costuma haver, mais cedo ou mais tarde, atritos, entre o pessoal técnico-administrativo, estabilizado por concurso e o pessoal, indicado para cargos de confiança, que ficam ao sabor das conveniências políticas.',
      'Em qualquer escalão do governo costuma haver mais cedo, ou mais tarde atritos, entre o pessoal técnico-administrativo estabilizado, por concurso, e o pessoal indicado, para cargos de confiança, que ficam ao sabor das conveniências políticas.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: a expressão “mais cedo ou mais tarde” vem intercalada entre vírgulas, o particípio “estabilizado por concurso” é explicativo e isolado, e a oração “que ficam ao sabor das conveniências políticas” é restritiva, sem vírgula. As demais separam indevidamente sujeito e verbo ou verbo e complemento.',
  },
  {
    id: 'lp-pontuacao-qlivro27-40',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TCE/SP - Agente de Fiscalização Financeira - 2012) Pois se, por exemplo, criticamos a falta de liberdade e a injustiça social, seria sempre em nome de valores que ainda não se realizaram, mas a respeito dos quais nós, ocidentais, saberíamos, de antemão, seu sentido. Do ponto de vista da pontuação, o padrão culto escrito abonaria também, sem prejuízo do sentido original, a substituição proposta no seguinte segmento:',
    alternativas: [
      'Pois se por exemplo,',
      'Pois se, por exemplo:',
      'em nome de valores, que ainda não se realizaram,',
      'saberíamos de antemão, seu sentido.',
      'mas a respeito dos quais nós ocidentais saberíamos, de antemão, seu sentido.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: o pronome relativo “dos quais” retoma os valores, e “de antemão” fica isolada por vírgulas, mantendo o sentido e a pontuação padrão. As demais quebram a estrutura: A e B alteram a oração de “Pois se”, C insere vírgula entre o termo e o relativo, e D separa o verbo de seu objeto.',
  },
  {
    id: 'lp-pontuacao-qlivro27-41',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/PR - Analista Judiciário - 2012) Considere os itens abaixo. Em cada um deles, encontram-se a transcrição de um segmento do texto e o mesmo segmento pontuado de maneira diferente da original. I. frequentemente reivindicando para si as principais qualidades de “Kane” e a coautoria do roteiro / frequentemente reivindicando, para si, as principais qualidades de “Kane” e a coautoria do roteiro. II. Independentemente do quanto de justiça e veracidade “Raising Kane” trazia (o artigo foi bastante contestado na época), / Independentemente do quanto de justiça e veracidade “Raising Kane” trazia - o artigo foi bastante contestado na época —. III. surgem agora evidências de que a própria Pauline atuou de modo tão pouco ético como ela acusava Welles de ter agido. / surgem agora, evidências de que a própria Pauline atuou de modo tão pouco ético como ela acusava Welles de ter agido. O padrão culto escrito abona a nova pontuação de:',
    alternativas: [
      'I, apenas.',
      'I e II, apenas.',
      'I, II e III.',
      'II e III, apenas.',
      'I e III, apenas.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: no item I, a vírgula isola a expressão intercalada “para si”, o que o padrão aceita. O item II abre o trecho com traço e o fecha com travessão, sem par coerente, e o item III separa indevidamente o verbo “surgem” do sujeito “evidências”.',
  },
  {
    id: 'lp-pontuacao-qlivro27-42',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - ISS/SP - Auditor-Fiscal Tributário Municipal - 2012) O equilíbrio alcançado pelo sistema de Estados nacionais não foi um mero fantasma, mas ruiu exatamente conforme as previsões de Kant. Outra pontuação para a frase acima, que mantém o sentido e a correção originais, é:',
    alternativas: [
      'O equilíbrio alcançado pelo sistema de Estados nacionais, não foi um mero fantasma (mas: ruiu exatamente conforme as previsões de Kant).',
      'O equilíbrio alcançado pelo sistema de Estados nacionais não foi: um mero fantasma; mas ruiu, exatamente, conforme as previsões de Kant.',
      'O equilíbrio alcançado pelo sistema de Estados nacionais não foi um mero fantasma. Mas ruiu exatamente, conforme as previsões de Kant.',
      'O equilíbrio alcançado pelo sistema de Estados, nacionais, não foi um mero fantasma - mas ruiu; exatamente conforme as previsões de Kant.',
      'O equilíbrio alcançado pelo sistema de Estados nacionais não foi um mero fantasma; mas ruiu, exatamente conforme as previsões de Kant.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: o ponto e vírgula separa as duas orações adversativas, e o “mas” inicia a segunda sem vírgula antes, que é a forma usual. As demais erram por vírgula entre sujeito e verbo (A), dois-pontos sem função explicativa (B), ponto final que quebra a relação adversativa (C) ou separação indevida de “Estados” e “nacionais” (D).',
  },
  {
    id: 'lp-pontuacao-qlivro27-43',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras Distribuidora - Técnico de Administração e Controle Júnior - 2012) A substituição da vírgula por ponto pode ser feita, mantendo dois períodos bem-formados sintaticamente, em:',
    alternativas: [
      'Ela nasceu em Salvador, capital do estado da Bahia.',
      'O rapaz andava com passos rápidos, estava com pressa.',
      'Pedi informação a um senhor, que parecia saber o caminho.',
      'Se você não souber o caminho, procure a informação no mapa.',
      'Todas as ruas, avenidas e praças de Copacabana estão sinalizadas.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “O rapaz andava com passos rápidos” e “estava com pressa” são duas orações independentes e bem formadas, que podem ser separadas por ponto. Nas demais, a vírgula isola um aposto (A), uma oração adjetiva explicativa que não forma frase própria (C), uma oração condicional (D) ou os termos de um sujeito enumerado (E).',
  },
  {
    id: 'lp-pontuacao-qlivro27-44',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CHESF - Analista de Sistemas - 2012) “Hoje, informação é poder.” No fragmento acima, a vírgula é empregada para separar o adjunto adverbial de tempo deslocado. Outro exemplo do texto em que a vírgula é utilizada com a mesma função encontra-se em:',
    alternativas: [
      'nomes e números em profusão, que nos chegam por jornais.',
      'O estado de nossas células cerebrais, as nossas emoções.',
      'Para quem, como eu, viaja bastante e tem de trabalhar em aviões ou em hotéis.',
      'De repente eu me dava conta de como nossa existência é frágil, de como somos governados pelo acaso e pelo imprevisto.',
      'meu palpite é que, no dia do Juízo Final, cada um de nós vai inserir o pen drive de sua vida no Grande Computador Celestial.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “no dia do Juízo Final” é adjunto adverbial de tempo deslocado, isolado por vírgulas, como “Hoje” no fragmento-base. As demais usam a vírgula para isolar oração adjetiva (A), aposto (B), oração de finalidade ou sujeito antecipado (C) e enumeração de orações (D).',
  },
  {
    id: 'lp-pontuacao-qlivro27-45',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - PROMINP - Nível Superior - Área de Qualidade - 2012) O trecho “Gente não vem com manual de instruções quando nasce. Nem para viver nem para morrer”. Está reescrito em uma única sentença, sem alteração do sentido, e pontuada de acordo com a norma-padrão, em:',
    alternativas: [
      'Gente não vem com manual de instruções quando nasce; nem para viver; nem para morrer.',
      'Gente não vem com manual de instruções quando nasce: nem para viver - nem para morrer.',
      'Gente não vem com manual de instruções quando nasce, nem para viver: nem para morrer.',
      'Gente não vem com manual de instruções quando nasce - nem para viver - nem para morrer.',
      'Gente não vem com manual de instruções quando nasce: nem para viver, nem para morrer.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: os dois-pontos introduzem a explicação “nem para viver, nem para morrer”, e a repetição de “nem” com vírgula é a forma padrão de enumeração. As demais usam ponto e vírgula sem função, travessões sem par adequado ou vírgula no lugar do dois-pontos que a relação exige.',
  },
  {
    id: 'lp-pontuacao-qlivro27-46',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - CEF - Arquiteto - 2012) O trecho “Mas não. Não serve qualquer uma” pode ter sua pontuação alterada, sem modificar-lhe o sentido original, em:',
    alternativas: [
      'Mas não: não serve qualquer uma.',
      'Mas, não; não, serve qualquer uma.',
      'Mas não; não serve, qualquer uma.',
      'Mas: não, não. Serve qualquer uma.',
      'Mas não - não; serve qualquer uma.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: os dois-pontos introduzem a explicação de “Mas não” e a frase “não serve qualquer uma” mantém o sentido original. As demais quebram a pontuação com vírgula após “Mas” (B), vírgula entre o verbo e o sujeito (C) ou pausas sem função (D, E).',
  },
  {
    id: 'lp-pontuacao-qlivro27-47',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(CEPERJ - Procon - Advogado - 2012) O emprego da vírgula marca anteposição de termos, com alteração da ordem direta da frase, no seguinte exemplo do texto:',
    alternativas: [
      'O consumismo é uma ideologia, um hábito mental forjado que se tornou umas das características culturais mais marcantes da sociedade atual.',
      'obesidade infantil, erotização precoce, consumo precoce de tabaco e álcool, estresse familiar, banalização da agressividade e violência, entre outras.',
      'Para o mercado, antes de tudo, a criança é um consumidor em formação.',
      'A publicidade na TV é a principal ferramenta do mercado para a persuasão do público infantil, que cada vez mais cedo é chamado a participar do universo adulto.',
      'salvo decisões relacionadas a planos de seguro, combustível e produtos de limpeza.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “Para o mercado, antes de tudo” é adjunto adverbial anteposto, deslocado da ordem direta sujeito-verbo-complemento, e a vírgula o isola. As demais trazem enumerações (A, B), oração adjetiva explicativa (D) ou expressão de exceção sem deslocamento da ordem.',
  },
  {
    id: 'lp-pontuacao-qlivro27-48',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Consulplan - TSE — Analista Judiciário — 2012) Se a conduta de praxe seria não apenas aceitar, mas exigir dinheiro em troca de uma ação qualquer na contramão do dever, é porque no sistema da corrupção o valor da honestidade, que garantiria ao sujeito a sua autonomia, foi substituído pela vantagem do dinheiro. Assinale a alternativa que apresente pontuação para o trecho anterior igualmente correta.',
    alternativas: [
      'Se a conduta de praxe seria não apenas aceitar - mas exigir dinheiro em troca de uma ação qualquer na contramão do dever, é porque — no sistema da corrupção —, o valor da honestidade, que garantiria ao sujeito a sua autonomia, foi substituído pela vantagem do dinheiro.',
      'Se a conduta de praxe seria não, apenas, aceitar, mas exigir dinheiro, em troca de uma ação qualquer na contramão do dever, é porque no sistema da corrupção, o valor da honestidade, que garantiria - ao sujeito - a sua autonomia, foi substituído pela vantagem do dinheiro.',
      'Se a conduta de praxe seria não apenas aceitar, mas exigir dinheiro em troca de uma ação qualquer na contramão do dever, é porque, no sistema da corrupção, o valor da honestidade - que garantiria ao sujeito a sua autonomia -, foi substituído pela vantagem do dinheiro.',
      'Se a conduta de praxe seria não apenas aceitar - mas exigir dinheiro em troca de uma ação qualquer na contramão do dever -, é porque, no sistema da corrupção, o valor da honestidade - que garantiria ao sujeito a sua autonomia - foi substituído pela vantagem do dinheiro.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: cada intercalação fica entre um par de travessões, sem vírgulas que a dupliquem, e o sujeito “o valor da honestidade” permanece ligado ao verbo “foi”. As demais misturam travessões e vírgulas no mesmo par de intercalação (A, C) ou separam sujeito e verbo com vírgula (B, C).',
  },
  {
    id: 'lp-pontuacao-qlivro27-49',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUMARC - TJ/MG - Oficial Judiciário - 2012) Fragmento de texto: “(...) o que é detectado pelas respostas vagas, inconsistentes, sem coerência, coesão (...) O x dá lugar ao ch em “xícara”, “mexer” e “vexame”; o inverso ocorre em “chuchu”, “enchimento” e “pichação”. (...) A tecnologia deveria ser uma parceira em vez de contribuir para a alienação dos jovens. Como ensinar redação a estudantes sem argumentos para defender seu ponto de vista? É imprescindível enfatizar a necessidade da leitura para redigir com clareza, no português padrão, usando um vocabulário rico e adequado, de forma coerente, concisa e sem repetição de ideias”. Sobre o emprego dos sinais de pontuação, analise as afirmativas a seguir, nos trechos: I. “(...) respostas vagas, inconsistentes, sem coerência, coesão...” o uso das vírgulas se justifica pela enumeração das informações. II. “xícara”, “mexer” e “vexame”: os sinais das aspas nas palavras foram utilizados para enfatizar a maneira correta como cada uma deve ser grafada. III. “Como ensinar redação a estudantes sem argumentos para defender seu ponto de vista?” compreende-se o uso do ponto de interrogação, nesta frase, numa articulação de indignação. Estão CORRETAS as afirmativas:',
    alternativas: [
      'I, II e III.',
      'Apenas I e III.',
      'Apenas II e III.',
      'Apenas I.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: a enumeração de “respostas vagas, inconsistentes, sem coerência, coesão” é marcada por vírgulas (I); as aspas destacam as palavras tratadas como termos de análise (II); e o ponto de interrogação, aqui retórico, expressa indignação (III). Todas as três afirmativas estão corretas.',
  },
  {
    id: 'lp-pontuacao-qlivro27-50',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUNCAB - MPE/RO - Analista - 2012) Assinale a opção correta quanto à pontuação.',
    alternativas: [
      'O nosso século, que se iniciou e tem se desenvolvido sob a insígnia da civilização industrial, primeiro inventou a máquina e depois fez dela o seu modelo de vida.',
      'O nosso século, que se iniciou e tem se desenvolvido, sob a insígnia, da civilização industrial primeiro inventou a máquina e depois fez dela o seu modelo de vida.',
      'O nosso século que se iniciou e tem se desenvolvido sob a insígnia da civilização industrial, primeiro inventou a máquina, e depois fez dela, o seu modelo de vida.',
      'O nosso século que se iniciou, e tem se desenvolvido, sob a insígnia da civilização industrial, primeiro inventou a máquina e, depois fez dela o seu modelo de vida.',
      'O nosso século que se iniciou, e tem se desenvolvido sob a insígnia da civilização industrial primeiro, inventou a máquina e depois, fez dela o seu modelo de vida.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: a oração explicativa “que se iniciou e tem se desenvolvido sob a insígnia da civilização industrial” vem isolada por vírgulas, e a sequência “primeiro inventou... e depois fez” não recebe vírgula indevida. As demais separam sujeito e verbo ou verbo e complemento (B, C, D, E).',
  },
  {
    id: 'lp-pontuacao-qlivro27-51',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Pref. São José dos Campos/SP - Analista Técnico - 2012) Nos versos — Quando se vê, já é sexta-feira / Quando se vê, já passaram 60 anos — o emprego da vírgula é obrigatório, mas ele é facultativo em:',
    alternativas: [
      'Se pudesse, o poeta nem olharia o relógio.',
      'Já era sexta-feira, quando ele se deu conta da passagem do tempo.',
      'Se me dessem uma oportunidade, seguiria sempre em frente.',
      'Embora tenha sido reprovado, o poeta espera nova oportunidade.',
      'Conforme se constatou, já se passaram 60 anos.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: a oração subordinada adverbial temporal “quando ele se deu conta da passagem do tempo” vem depois da principal, e a vírgula é facultativa nessa posição, segundo gramáticos como Infante e Cereja. As demais têm oração adverbial condicional, concessiva ou conformativa anteposta, em que a vírgula é obrigatória.',
  },
  {
    id: 'lp-pontuacao-qlivro27-52',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/PR - Técnico Judiciário - 2012) A maioria desses usos é nobre, já que eles aumentam o nosso conforto, o nosso bem-estar, a nossa saúde. Considere as afirmativas seguintes sobre o emprego das vírgulas no segmento acima. I. A vírgula colocada após é nobre pode ser retirada, sem prejuízo da correção. II. A vírgula que separa as expressões o nosso bem-estar, a nossa saúde pode ser corretamente substituída por um e. III. A vírgula após a expressão o nosso conforto pode ser substituída por dois-pontos, sem prejuízo da correção e do sentido original. Está correto o que se afirma APENAS em:',
    alternativas: ['III.', 'II.', 'I e III.', 'I e II.', 'I.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: a vírgula que separa os termos “o nosso bem-estar, a nossa saúde” enumera itens de mesma função, e o “e” pode substituí-la sem prejuízo. A afirmativa I é falsa, pois a vírgula após “é nobre” isola a oração causal posposta; e a III é falsa, pois os dois-pontos não substituem a vírgula de uma enumeração.',
  },
  {
    id: 'lp-pontuacao-qlivro27-53',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CESGRANRIO - BNDES - Técnico Administrativo - 2013) Em que período a vírgula pode ser retirada, mantendo-se o sentido e a obediência à norma-padrão?',
    alternativas: [
      'Quando o técnico chegou, a equipe começou o treino.',
      'Antônio, quer saber as últimas novidades dos esportes?',
      'As Olimpíadas de 2016 ocorrerão no Rio, que se prepara para o evento.',
      'Atualmente, várias áreas contribuem para o aprimoramento do desportista.',
      'Eis alguns esportes que a Ciência do Esporte ajuda: judô, natação e canoagem.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “Atualmente” é adjunto adverbial de curta extensão, anteposto ao sujeito, cuja vírgula é facultativa. As demais trazem oração adverbial temporal anteposta (A), vocativo (B) e oração adjetiva explicativa (C), todos com vírgula obrigatória; em E, os dois-pontos introduzem a enumeração.',
  },
  {
    id: 'lp-pontuacao-qlivro27-54',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ESAF - MTUR - Analista Técnico-Administrativo - 2014) Assinale a opção que justifica corretamente o emprego de vírgulas no trecho abaixo. É neste admirável e desconcertante mundo novo que se encontram os desafios da modernidade, a mudança de paradigmas culturais, a substituição de atividades profissionais, as transformações em diversas áreas do conhecimento e os contrastes cada vez mais acentuados entre as gerações de seres humanos. (Adaptado de Zero Hora (RS), 31.12.2013) As vírgulas:',
    alternativas: [
      'isolam elementos de mesma função sintática componentes de uma enumeração.',
      'separam termos que funcionam como apostos.',
      'isolam adjuntos adverbiais deslocados de sua posição tradicional.',
      'separam orações coordenadas assindéticas.',
      'isolam orações intercaladas na oração principal.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: as vírgulas separam os itens da enumeração “a mudança de paradigmas culturais, a substituição de atividades profissionais, as transformações... e os contrastes...”, todos com a mesma função. As demais descrevem funções que não estão no trecho: apostos, adjuntos deslocados, orações assindéticas e orações intercaladas.',
  },
  {
    id: 'lp-pontuacao-qlivro27-55',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FGV - TJ/PI - Analista Judiciário - 2015) (Adaptada) “Atualmente, a grande maioria dos casos de adultério é combinada por telefones pessoais, pois dessa forma não há tanto risco de outra pessoa atender às ligações”. A afirmação a seguir está correta: “a primeira vírgula do segmento marca a presença de um termo deslocado da ordem direta”?',
    gabaritoCE: true,
    comentario:
      'Certo. A primeira vírgula isola “Atualmente”, adjunto adverbial de tempo anteposto ao sujeito, o que representa deslocamento em relação à ordem direta. A afirmação está correta.',
  },
  {
    id: 'lp-pontuacao-qlivro27-56',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - FUB - Assistente de TI - 2016) “E cada dia, milhares de vezes, sinto minha vida - corpo e alma - integralmente tributária do trabalho dos vivos e dos mortos”. O uso de travessões no segundo parágrafo indica mudança de interlocutores no texto.',
    gabaritoCE: false,
    comentario:
      'Errado. Os travessões intercalam a expressão explicativa “corpo e alma” dentro da mesma fala, e não marcam mudança de interlocutor, que é função do travessão no diálogo.',
  },
  {
    id: 'lp-pontuacao-qlivro27-57',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - SEDF - Cargo de Nível Médio - 2017) Seria mantida a correção gramatical do texto caso a vírgula empregada imediatamente após “educadores” (Como qualquer profissional do ambiente escolar, os monitores também são educadores, e cabe à equipe gestora realizar ações formativas) fosse suprimida.',
    gabaritoCE: true,
    comentario:
      'Certo. A vírgula antes do “e” liga orações de sujeitos diferentes (“os monitores” e “a equipe gestora”), e, para a banca e para parte dos gramáticos citados no livro, essa vírgula é facultativa. Sua supressão mantém a correção.',
  },
  {
    id: 'lp-pontuacao-qlivro27-58',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - BNB - Especialista Técnico - Analista de Sistema - 2018) Seriam preservados a correção gramatical e o sentido original do texto caso os travessões empregados no quarto parágrafo (E aquele caso da cabra, em que — Deus me perdoe! — pela primeira vez tinha botado a mão em cima do alheio...), para efeito de ênfase, fossem substituídos por parênteses ou por vírgulas.',
    gabaritoCE: false,
    comentario:
      'Errado. Parênteses poderiam substituir os travessões, mas vírgulas não: a exclamação “Deus me perdoe!” intercalada perde o isolamento, e o efeito de ênfase depende do travessão.',
  },
  {
    id: 'lp-pontuacao-qlivro27-59',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(CESPE - SEFAZ/RS - Auditor Fiscal da Receita Estadual - 2019) Em “O ICMS, adotado no país, é o único caso no mundo de imposto que, embora se pareça com o IVA, não é administrado pelo governo federal”, o emprego de vírgulas para isolar as expressões “adotado no país” e “embora se pareça com o IVA” é:',
    alternativas: [
      'facultativo em ambas as expressões.',
      'obrigatório apenas na primeira expressão.',
      'apenas uma escolha estilística do autor.',
      'justificado por regras distintas de pontuação.',
      'necessário devido ao deslocamento dessas expressões dentro do período.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “adotado no país” é expressão de caráter explicativo, enquanto “embora se pareça com o IVA” é oração concessiva intercalada, e cada uma segue sua própria regra de isolamento. As demais afirmam facultatividade ou mero estilo, o que não se aplica, ou atribuem a necessidade a um deslocamento que não ocorre.',
  },
  {
    id: 'lp-pontuacao-qlivro27-60',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE — Ministério da Economia - Técnico de Complexidade Intelectual (Arquivologia) - 2020) A correção gramatical do texto seria mantida caso as vírgulas que isolam o trecho “com relação à vida social” (Nos centros, com relação à vida social, vigora uma cultura pluralista...) fossem suprimidas.',
    gabaritoCE: false,
    comentario:
      'Errado. A expressão “com relação à vida social” está deslocada da posição normal, e por ter mais de duas palavras não é de curta extensão; sua vírgula é obrigatória. Sem ela, o adjunto perde o isolamento e a leitura se prejudica.',
  },
  {
    id: 'lp-pontuacao-qlivro27-61',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IDECAN - PEFOCE - Engenharia Civil - 2021) A beleza é um dado social, definida na interação entre as pessoas, e seus critérios mudam com o tempo. Assinale a alternativa que apresente pontuação igualmente correta para o período acima.',
    alternativas: [
      'A beleza, é um dado social, definida na interação entre as pessoas e seus critérios mudam com o tempo.',
      'A beleza é um dado social definida na interação entre as pessoas e seus critérios, mudam com o tempo.',
      'A beleza é um dado social, definida na interação, entre as pessoas, e seus critérios mudam, com o tempo.',
      'A beleza é um dado social - definida na interação entre as pessoas - e seus critérios mudam com o tempo.',
      'A beleza é um dado social - definida na interação entre as pessoas -, e seus critérios mudam com o tempo.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: o par de travessões isola a oração reduzida “definida na interação entre as pessoas”, e a vírgula após o travessão de fechamento separa a segunda oração coordenada, como no original. A alternativa D omite essa vírgula; A, B e C põem vírgulas entre sujeito e verbo ou entre termos ligados.',
  },
  {
    id: 'lp-pontuacao-qlivro27-62',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Câmara de Aracaju/SE - Analista Legislativo - 2021) Uma manchete de um jornal carioca dizia o seguinte: “Chuva castiga o estado. Quatro pessoas morreram durante temporal, que deixou rastro de destruição”. A vírgula antes da última oração se deve ao fato de ser uma oração explicativa; nas frases abaixo, aquela que deveria ter uma vírgula pela mesma razão é:',
    alternativas: [
      'Apaixonar-se é criar uma religião que tem um deus falível;',
      'As grandes ideias encontram sempre os homens que as procuram;',
      'As ideias geniais são aquelas que nos espantamos de não ter tido antes;',
      'Ao dar, não imite as galinhas que põem ovos e não param mais de cacarejar;',
      'Uma ideia não é responsável pelas pessoas que acreditam nela.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “as galinhas, que põem ovos e não param mais de cacarejar” é oração adjetiva explicativa, pois caracteriza todas as galinhas, e por isso exige vírgula. As demais orações são restritivas, pois delimitam o termo antecedente (que deus, quais homens, quais ideias, quais pessoas), e a vírgula seria indevida.',
  },
  {
    id: 'lp-pontuacao-qlivro27-63',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - IBAMA — Técnico Ambiental - 2022) Fragmento de texto: “(...) Por outro lado, para que possamos fazer melhores escolhas e praticar o verdadeiro consumo consciente, é necessário que, em primeiro lugar, as empresas realizem a produção consciente (...)” Feitos os devidos ajustes de maiúsculas e minúsculas, seriam mantidos os sentidos originais do texto e sua correção gramatical se, no último período do quarto parágrafo, a expressão “Por outro lado” fosse deslocada para imediatamente após o vocábulo “necessário”, caso em que deveria ser isolada por vírgulas.',
    gabaritoCE: true,
    comentario:
      'Certo. Deslocado para depois de “necessário”, o adjunto “Por outro lado” fica intercalado no período, o que exige vírgulas de isolamento. A alteração preserva o sentido e a gramática.',
  },
  {
    id: 'lp-pontuacao-qlivro27-64',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - SRF - Auditor Fiscal da Receita Federal - 2000) Numa época de crise longa e generalizada como a que estamos vivendo que desestruturou o campo das ideias e dos projetos políticos e econômicos consolidados no século XX, a discussão sobre uma alternativa histórica que contemple o interesse dos fracos e inferiorizados não pode ficar prisioneira de um debate meramente conjuntural nem muito menos das ideias e propostas dos mais fortes e ganhadores. Sua primeira providência nesse sentido é clarificar o que foi a grande transformação da ordem capitalista que se cristalizou nos últimos 25 anos do século XX. (Adaptado de José Luís Fiori, Correio Braziliense, 20/10/2000) No que se refere à pontuação do texto, assinale a opção incorreta:',
    alternativas: [
      'Estaria correto usar vírgula isolando a expressão como a que estamos vivendo.',
      'Seria correto colocar vírgulas isolando a expressão nesse sentido.',
      'Caso não se coloque uma vírgula após alternativa histórica seria correto colocar uma vírgula antes de não pode ficar prisioneira.',
      'A expressão meramente conjuntural deve ser isolada por vírgulas para que o texto fique correto.',
      'Se a oração que contemple o interesse dos fracos e inferiorizados vier entre vírgulas será uma subordinada explicativa.',
    ],
    correta: 3,
    comentario:
      'O gabarito indicado pelo livro é a D, mas o autor manda desconsiderá-lo e aponta a C. A D está errada porque “meramente conjuntural” é adjunto restritivo de “debate” e não admite vírgulas de isolamento. A C também contém erro, pois a vírgula antes de “não pode ficar prisioneira” separaria a discussão do seu verbo, o que a norma não permite, e por isso a questão é controversa.',
  },
];
