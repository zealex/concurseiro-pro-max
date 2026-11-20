import type { ResumoTema } from '../../../types';
import { ATUALIZADO, CF, EC_138, EC_139, EC_140, SV_13 } from './fontes';

export const RESUMOS_2: ResumoTema[] = [
  /* ---------- dc-organizacao-estado ---------- */
  {
    temaId: 'dc-organizacao-estado',
    titulo: 'Organização do Estado: União, estados e municípios',
    resumo:
      'Em prova de prefeitura, o foco é o município: lei orgânica (art. 29), competências (art. 30) e fiscalização (art. 31). Também caem os entes da federação (art. 18), a repartição de competências (arts. 21 a 24) e a intervenção nos municípios (art. 35).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Pelo **art. 18**, a organização político-administrativa compreende **a União, os Estados, o Distrito Federal e os Municípios, todos autônomos**. Brasília é a Capital Federal. Os **Territórios** integram a União; sua criação depende de lei complementar.\n\nNovos **Estados** dependem de plebiscito da população diretamente interessada e de **lei complementar** do Congresso Nacional (§ 3º). A criação, a incorporação, a fusão e o desmembramento de **Municípios** se fazem por **lei estadual**, dentro do período determinado por **lei complementar federal**, e dependem de **plebiscito** às populações dos Municípios envolvidos, após a divulgação dos **Estudos de Viabilidade Municipal** (§ 4º).\n\nO **art. 19** proíbe a todos os entes estabelecer cultos religiosos ou igrejas (o Estado é laico), recusar fé aos documentos públicos e criar distinções entre brasileiros ou preferências entre si.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Competência', 'Quem', 'Exemplos'],
          linhas: [
            ['Exclusiva, administrativa (art. 21)', 'União', 'Emitir moeda; declarar guerra; manter o serviço postal; decretar estado de sítio e intervenção federal'],
            ['Privativa, legislativa (art. 22)', 'União; lei complementar pode autorizar os Estados a legislar sobre questões específicas', 'Direito civil, penal, processual, eleitoral e do trabalho; trânsito; seguridade social; normas gerais de licitação'],
            ['Comum, administrativa (art. 23)', 'União, Estados, DF e Municípios', 'Cuidar da saúde e assistência pública (II); proteger o meio ambiente; combater as causas da pobreza'],
            ['Concorrente, legislativa (art. 24)', 'União, Estados e DF (Municípios não constam do caput)', 'Direito tributário, financeiro e urbanístico; orçamento; previdência social, proteção e defesa da saúde (XII)'],
            ['Municipal (art. 30)', 'Municípios', 'Legislar sobre interesse local (I); suplementar leis federal e estadual no que couber (II); prestar, com cooperação técnica e financeira da União e do Estado, serviços de atendimento à saúde da população (VII); transporte coletivo, serviço essencial (V)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'Na competência concorrente, a União edita **normas gerais** (art. 24, § 1º); os Estados têm competência **suplementar** (§ 2º). Sem lei federal de normas gerais, os Estados exercem competência **plena** (§ 3º). A lei federal superveniente **suspende a eficácia** da lei estadual no que lhe for contrário (§ 4º); não a revoga.',
          '**Lei Orgânica** (art. 29, caput): votada em **dois turnos**, com interstício mínimo de **dez dias**, aprovada por **dois terços** dos membros da Câmara Municipal, **que a promulgará**.',
          'Prefeito, Vice e Vereadores: mandato de **quatro anos** (art. 29, I); posse do Prefeito e do Vice em **1º de janeiro** (III); segundo turno só em Municípios com mais de **200 mil eleitores** (II).',
          'Número de Vereadores (art. 29, IV): limite máximo de **9** nos Municípios de até 15 mil habitantes, subindo em faixas até **55** nos de mais de 8 milhões.',
          'O **Prefeito é julgado perante o Tribunal de Justiça** (art. 29, X). Os Vereadores são invioláveis por opiniões, palavras e votos **no exercício do mandato e na circunscrição do Município** (VIII).',
          'Iniciativa popular de projetos de lei de interesse do Município, da cidade ou de bairros: pelo menos **5% do eleitorado** (art. 29, XIII).',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Fiscalização do Município (art. 31).** É exercida pela **Câmara Municipal**, mediante **controle externo**, e pelos sistemas de **controle interno do Executivo**. O controle externo conta com o auxílio dos Tribunais de Contas dos Estados ou do Município, ou dos Conselhos ou Tribunais de Contas dos Municípios, onde houver; desde a **EC 139/2026**, o § 1º veda sua extinção, criação ou instalação. O **parecer prévio** sobre as contas anuais do Prefeito **só deixa de prevalecer por decisão de dois terços** dos membros da Câmara (§ 2º). As contas ficam **60 dias** por ano à disposição de **qualquer contribuinte** (§ 3º). É **vedada a criação** de Tribunais, Conselhos ou órgãos de Contas Municipais (§ 4º).\n\n**Intervenção.** Em regra, os entes não intervêm uns nos outros. O **Estado** pode intervir nos seus Municípios nas hipóteses do **art. 35**, entre elas quando **não tiver sido aplicado o mínimo** da receita municipal na manutenção e desenvolvimento do ensino e **nas ações e serviços públicos de saúde** (III). A União **não** intervém em Municípios de Estados; só nos localizados em Território Federal. O decreto de intervenção vai à Assembleia Legislativa ou ao Congresso Nacional em **24 horas** (art. 36, § 1º).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Competência na saúde',
        enunciado:
          'Uma lei municipal organiza o funcionamento das unidades básicas de saúde do Município. Outra lei municipal pretende disciplinar normas gerais nacionais de proteção e defesa da saúde. Qual é válida?',
        resolucao:
          'A primeira: cuidar da saúde é competência **comum** (art. 23, II), e cabe ao Município prestar serviços de atendimento à saúde (art. 30, VII) e legislar sobre interesse local (art. 30, I). A segunda não: “proteção e defesa da saúde” é competência legislativa **concorrente** (art. 24, XII), em que as **normas gerais são da União**. O Município só pode suplementar no que couber (art. 30, II).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) Lei Orgânica é **promulgada pela Câmara**, sem sanção do Prefeito; quórum de **2/3**, e não 3/5. (b) Parecer prévio do Tribunal de Contas: a Câmara só o derruba com **2/3**. (c) Contas à disposição por **60** dias, e não 30 ou 90. (d) Municípios **não** aparecem no caput do art. 24. (e) Criação de Município é por **lei estadual**, e não por lei complementar federal; a LC federal só fixa o período.',
      },
    ],
    fontes: [CF, EC_139],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- dc-administracao-publica ---------- */
  {
    temaId: 'dc-administracao-publica',
    titulo: 'Administração pública na Constituição (arts. 37 a 41)',
    resumo:
      'É o tema mais cobrado em concurso de prefeitura. Caem os princípios (LIMPE), o concurso público, a acumulação de cargos (com atenção à do médico, art. 37, XVI, c), o teto, o servidor com mandato eletivo e a estabilidade.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **caput do art. 37** submete a administração direta e indireta de todos os Poderes e entes aos princípios de **legalidade, impessoalidade, moralidade, publicidade e eficiência** (LIMPE), na redação da EC 19/1998.\n\nA investidura em cargo ou emprego público depende de **concurso de provas ou de provas e títulos**, salvo para **cargo em comissão** declarado em lei de livre nomeação e exoneração (II). O concurso vale **até dois anos, prorrogável uma vez, por igual período** (III). Durante o prazo improrrogável do edital, o aprovado tem **prioridade** sobre novos concursados (IV). Desrespeitar os incisos II e III gera **nulidade do ato e punição** da autoridade (§ 2º).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Inciso', 'Regra'],
          linhas: [
            ['V', 'Funções de confiança: exclusivamente servidores de cargo efetivo. Cargos em comissão: preenchidos por servidores de carreira nos casos, condições e percentuais mínimos da lei. Ambos só para direção, chefia e assessoramento'],
            ['VI e VII', 'Servidor civil tem direito à livre associação sindical; greve nos termos e limites de lei específica'],
            ['VIII e IX', 'Reserva de vagas para pessoas com deficiência; contratação por tempo determinado para necessidade temporária de excepcional interesse público'],
            ['X', 'Remuneração e subsídio só por lei específica; revisão geral anual, sempre na mesma data e sem distinção de índices'],
            ['XI', 'Teto geral: subsídio dos Ministros do STF. Nos Municípios: subsídio do Prefeito'],
            ['XVI', 'Acumulação remunerada vedada, salvo, com compatibilidade de horários e respeito ao teto: (a) dois cargos de professor; (b) um de professor com outro de qualquer natureza; (c) dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas'],
            ['XVII', 'A proibição de acumular alcança empregos e funções e a administração indireta (autarquias, fundações, empresas públicas, sociedades de economia mista, subsidiárias e controladas)'],
            ['§ 4º', 'Improbidade: suspensão dos direitos políticos, perda da função pública, indisponibilidade dos bens e ressarcimento ao erário, sem prejuízo da ação penal'],
            ['§ 6º', 'Pessoas jurídicas de direito público e de direito privado prestadoras de serviço público respondem pelos danos que seus agentes causarem a terceiros (responsabilidade objetiva); regresso contra o agente só com dolo ou culpa'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Servidor com mandato eletivo (art. 38).** Mandato federal, estadual ou distrital: fica **afastado**. Prefeito: afastado, podendo **optar pela remuneração**. Vereador: com compatibilidade de horários, recebe as vantagens do cargo **sem prejuízo** da remuneração do mandato; sem compatibilidade, aplica-se a regra do Prefeito. O tempo de afastamento conta para todos os efeitos, **exceto promoção por merecimento**.\n\n**Art. 39, § 4º:** membros de Poder, detentores de mandato eletivo, Ministros e Secretários estaduais e municipais recebem **subsídio em parcela única**. **Art. 40:** aposentadoria compulsória aos **70 anos**, ou aos **75**, na forma de lei complementar. A EC 140/2026 criou idade reduzida para os agentes comunitários de saúde e de combate às endemias: **57 anos, se mulher, e 60, se homem**, com pelo menos 25 anos de contribuição e de efetivo exercício na função (§ 5º-A).\n\n**Estabilidade (art. 41).** O servidor nomeado para cargo efetivo em virtude de concurso fica estável após **três anos de efetivo exercício**, e a **avaliação especial de desempenho** por comissão é condição obrigatória (§ 4º). O estável só perde o cargo por **sentença judicial transitada em julgado**, por **processo administrativo** com ampla defesa ou por **avaliação periódica de desempenho**, na forma de lei complementar, com ampla defesa (§ 1º). Se a demissão for invalidada por sentença, ele é **reintegrado**; o ocupante da vaga, se estável, é **reconduzido** ao cargo de origem, sem indenização, aproveitado em outro cargo ou posto em disponibilidade (§ 2º). Extinto o cargo, o estável fica em **disponibilidade, com remuneração proporcional ao tempo de serviço** (§ 3º).\n\n**Nepotismo.** Pela **Súmula Vinculante 13** do STF, viola a Constituição nomear cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, **até o terceiro grau, inclusive**, da autoridade nomeante ou de servidor da mesma pessoa jurídica com cargo de direção, chefia ou assessoramento, para cargo em comissão, de confiança ou função gratificada. Isso vale também para o ajuste mediante designações recíprocas, o chamado nepotismo cruzado.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Acumulação do médico',
        enunciado:
          'Uma médica tem cargo de médica na prefeitura, com 20 horas semanais. Ela pode assumir: (1) cargo de médica no Estado; (2) cargo de professora de medicina em universidade federal; (3) cargo de analista administrativo na Câmara Municipal; (4) dois outros cargos de médica?',
        resolucao:
          '(1) Sim: dois cargos privativos de profissionais de saúde (XVI, c), com compatibilidade de horários e respeito ao teto. (2) Sim: professor com outro de qualquer natureza (XVI, b, redação da EC 138/2025). (3) Não: cargo administrativo que não é de professor nem privativo de saúde. (4) Não: as exceções permitem **dois** cargos, nunca três. A vedação vale também para empregos (por exemplo, em empresa pública ou fundação) (XVII).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) até a EC 138/2025, a alínea “b” falava em “professor com outro **técnico ou científico**”; a redação vigente é “com outro **de qualquer natureza**”. Questões antigas podem trazer o texto revogado. (b) O concurso vale “**até** dois anos”, prorrogável **uma vez**, por **igual** período. (c) A avaliação **especial** é condição para adquirir a estabilidade; a avaliação **periódica** é causa de perda do cargo. (d) O teto nos Municípios é o subsídio do **Prefeito**, e não o do Vereador. (e) O regresso contra o agente exige **dolo ou culpa**; a responsabilidade do Estado perante a vítima é objetiva. (f) Na improbidade, os direitos políticos são **suspensos**, e não cassados.',
      },
    ],
    fontes: [CF, EC_138, EC_140, SV_13],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- dc-poderes-controle ---------- */
  {
    temaId: 'dc-poderes-controle',
    titulo: 'Organização dos Poderes e controle de constitucionalidade (noções)',
    resumo:
      'Em provas de nível “noções”, caem números e quóruns: composição do Congresso, emenda constitucional, lei complementar, veto, medida provisória e CPI. Também caem a linha sucessória do Presidente, o TCU e quem pode propor ADI.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Legislativo.** O Congresso Nacional tem duas Casas (art. 44). A **Câmara** representa o povo e é eleita pelo sistema **proporcional** (art. 45). O **Senado** representa os Estados e o DF e é eleito pelo princípio **majoritário**: **três Senadores** por Estado e pelo DF, com **mandato de oito anos**, renovação alternada de um terço e dois terços a cada quatro anos e **dois suplentes** para cada um (art. 46). Cada legislatura dura quatro anos (art. 44, parágrafo único). Salvo disposição em contrário, as deliberações se tomam por **maioria dos votos, presente a maioria absoluta** dos membros (art. 47). As **CPIs** têm poderes de investigação próprios das autoridades judiciais. São criadas por requerimento de **um terço** dos membros, para **fato determinado** e por **prazo certo**, e suas conclusões vão ao **Ministério Público** (art. 58, § 3º).\n\n**Executivo.** É eleito Presidente quem obtiver a **maioria absoluta** dos votos, sem contar brancos e nulos; se ninguém a alcançar, há segundo turno entre os dois mais votados (art. 77). O mandato é de **4 anos** e começa em **5 de janeiro** do ano seguinte à eleição (art. 82, redação da EC 111/2021). Na falta do Presidente e do Vice, assumem, nesta ordem, os Presidentes da **Câmara**, do **Senado** e do **STF** (art. 80). Se os dois cargos vagarem, há nova eleição em 90 dias; nos **últimos dois anos** do período, a eleição é feita **pelo Congresso Nacional**, 30 dias depois da última vaga (art. 81). A acusação contra o Presidente é admitida por **dois terços da Câmara**. O julgamento cabe ao **STF** nas infrações penais comuns e ao **Senado** nos crimes de responsabilidade (art. 86).\n\n**Judiciário.** Os juízes têm **vitaliciedade** (no primeiro grau, após dois anos de exercício), **inamovibilidade** e **irredutibilidade de subsídio** (art. 95). O **STF** tem **onze Ministros**, com mais de 35 e menos de 70 anos, nomeados pelo Presidente após aprovação pela **maioria absoluta do Senado** (art. 101).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Processo legislativo', 'Regra', 'Base'],
          linhas: [
            ['Emenda constitucional: iniciativa', '1/3 da Câmara ou do Senado; Presidente da República; mais da metade das Assembleias Legislativas, cada uma pela maioria relativa', 'Art. 60, I a III'],
            ['Emenda constitucional: votação', 'Dois turnos em cada Casa, 3/5 dos votos; promulgação pelas Mesas da Câmara e do Senado, sem sanção', 'Art. 60, §§ 2º e 3º'],
            ['Limites à emenda', 'Não se emenda a Constituição durante intervenção federal, estado de defesa ou estado de sítio. São cláusulas pétreas a forma federativa; o voto direto, secreto, universal e periódico; a separação dos Poderes; e os direitos e garantias individuais', 'Art. 60, §§ 1º e 4º'],
            ['Lei complementar', 'Aprovada por maioria absoluta', 'Art. 69'],
            ['Veto', '15 dias úteis; silêncio = sanção; o veto é apreciado em sessão conjunta em 30 dias e só é rejeitado pela maioria absoluta dos Deputados e Senadores', 'Art. 66, §§ 1º, 3º e 4º'],
            ['Medida provisória', 'Relevância e urgência; 60 dias, prorrogáveis uma vez por igual período; prazo suspenso no recesso; votação começa na Câmara; tranca a pauta após 45 dias; não pode ser reeditada na mesma sessão legislativa se rejeitada ou caducada', 'Art. 62, §§ 3º, 4º, 6º, 8º e 10'],
            ['Vedações à MP (exemplos)', 'Nacionalidade, cidadania, direitos políticos e eleitoral; direito penal, processual penal e processual civil; matéria reservada a lei complementar', 'Art. 62, § 1º'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Controle externo.** O controle externo da União é exercido pelo **Congresso Nacional** com o auxílio do **TCU** (art. 71). O TCU **aprecia** as contas anuais do Presidente por **parecer prévio**, em **60 dias**; quem as **julga** é o Congresso. Já as contas dos administradores e demais responsáveis por dinheiros públicos, o TCU **julga** (art. 71, I e II). O TCU tem **nove Ministros** (art. 73). Qualquer **cidadão, partido político, associação ou sindicato** pode denunciar irregularidades ao TCU (art. 74, § 2º). A EC 139/2026 declarou os Tribunais de Contas **instituições permanentes e essenciais** ao controle externo (art. 75).\n\n**Controle de constitucionalidade (noções).** No controle **difuso**, qualquer juiz pode afastar lei inconstitucional no caso concreto. Os tribunais, porém, só declaram a inconstitucionalidade pelo voto da **maioria absoluta** de seus membros ou do órgão especial: é a **cláusula de reserva de plenário** (art. 97). Quando o STF declara uma lei inconstitucional por decisão definitiva, o **Senado** pode suspender sua execução (art. 52, X). No controle **concentrado**, o STF julga a **ADI** e a **ADC** (art. 102, I, a) e a **ADPF** (art. 102, § 1º). As decisões definitivas de mérito em ADI e ADC têm **eficácia contra todos e efeito vinculante** para os demais órgãos do Judiciário e para a administração pública (art. 102, § 2º). O **AGU** defende o ato impugnado, e o **PGR** é ouvido previamente (art. 103, §§ 1º e 3º). A **súmula vinculante** exige **dois terços** dos Ministros e reiteradas decisões; contra ato que a contrarie cabe **reclamação** ao STF (art. 103-A).',
      },
      {
        tipo: 'lista',
        itens: [
          'Podem propor ADI e ADC (art. 103): Presidente da República; Mesa do Senado; Mesa da Câmara; Mesa de Assembleia Legislativa ou da Câmara Legislativa do DF; Governador de Estado ou do DF; Procurador-Geral da República; Conselho Federal da OAB; partido político com representação no Congresso Nacional; confederação sindical ou entidade de classe de âmbito nacional.',
          'Não estão no rol: Prefeito, Câmara Municipal, sindicato de base e Senador ou Deputado isolado.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Quórum certo',
        enunciado:
          'Associe: (1) aprovar PEC; (2) aprovar lei complementar; (3) derrubar veto; (4) admitir acusação contra o Presidente; (5) criar CPI.',
        resolucao:
          '(1) 3/5, em dois turnos, em cada Casa (art. 60, § 2º). (2) Maioria absoluta (art. 69). (3) Maioria absoluta dos Deputados e Senadores, em sessão conjunta (art. 66, § 4º). (4) 2/3 da Câmara (art. 86). (5) Requerimento de 1/3 dos membros (art. 58, § 3º).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) na linha sucessória, a **Câmara** vem antes do Senado. (b) A emenda constitucional **não** passa por sanção presidencial. (c) A CPI **não** pune: ela encaminha as conclusões ao MP. (d) O TCU **não julga** as contas do Presidente; ele emite parecer prévio. (e) Quem suspende a execução de lei declarada inconstitucional pelo STF no controle difuso é o **Senado**. (f) O **Prefeito não** propõe ADI no STF.',
      },
    ],
    fontes: [CF, EC_139],
    atualizadoEm: ATUALIZADO,
  },
];
