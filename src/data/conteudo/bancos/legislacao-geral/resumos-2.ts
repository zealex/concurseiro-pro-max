import type { ResumoTema } from '../../../types';
import {
  ATUALIZADO,
  CF,
  CNJ_213,
  CP,
  DEC_4463,
  DEC_678,
  DUDH,
  LEI_12288,
  LEI_13146,
  LEI_13869,
  LEI_14532,
  LEI_7716,
  LEI_9455,
  PROTOCOLO_ISTAMBUL,
  PROTOCOLO_ISTAMBUL_PT,
  SV_25,
} from './fontes';

export const RESUMOS_2: ResumoTema[] = [
  /* ---------- lg-igualdade-racial ---------- */
  {
    temaId: 'lg-igualdade-racial',
    titulo: 'Estatuto da Igualdade Racial (Lei 12.288/2010) e crimes de racismo',
    resumo:
      'A banca cobra os conceitos do art. 1º do Estatuto (população negra, discriminação, ações afirmativas), a Política Nacional de Saúde Integral da População Negra e a distinção, depois da Lei 14.532/2023, entre injúria racial (Lei 7.716, art. 2º-A) e a injúria qualificada que ficou no Código Penal.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **Estatuto da Igualdade Racial** destina-se a garantir à **população negra** a efetivação da igualdade de oportunidades, a defesa dos direitos étnicos individuais, coletivos e difusos e o combate à discriminação (art. 1º). Para o Estatuto, população negra é o conjunto de pessoas que se **autodeclaram pretas e pardas**, conforme o quesito cor ou raça do **IBGE**, ou que adotam autodefinição análoga. O critério é a **autodeclaração**.\n\nNa saúde, o direito da população negra é garantido por **políticas universais**, sociais e econômicas destinadas à redução do risco de doenças (art. 6º). O conjunto de ações forma a **Política Nacional de Saúde Integral da População Negra** (art. 7º), que tem entre seus objetivos combater a discriminação nas instituições e serviços do SUS, melhorar a coleta de dados **desagregados por cor, etnia e gênero** e incluir o tema na formação dos trabalhadores da saúde (art. 8º). Os moradores de **comunidades remanescentes de quilombos** recebem incentivos específicos (art. 8º, parágrafo único). O Estatuto também instituiu o **Sinapir**, Sistema Nacional de Promoção da Igualdade Racial (arts. 5º e 47).\n\nNo plano penal, a **Lei 7.716/1989** pune os crimes resultantes de discriminação ou preconceito de **raça, cor, etnia, religião ou procedência nacional** (art. 1º). A **Lei 14.532/2023** levou a **injúria racial** para dentro dela (art. 2º-A), tipificando-a como crime de racismo, com **reclusão de 2 a 5 anos e multa**. A Constituição diz que a prática do racismo constitui crime **inafiançável e imprescritível**, sujeito a reclusão (art. 5º, XLII).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Conceito (art. 1º, parágrafo único)', 'Definição resumida'],
          linhas: [
            ['Discriminação racial ou étnico-racial', 'Distinção, exclusão, restrição ou preferência baseada em raça, cor, descendência ou origem nacional ou étnica que anule ou restrinja direitos'],
            ['Desigualdade racial', 'Diferenciação injustificada de acesso a bens, serviços e oportunidades em virtude de raça, cor, descendência ou origem'],
            ['Desigualdade de gênero e raça', 'Assimetria que acentua a distância social entre mulheres negras e os demais segmentos'],
            ['População negra', 'Pessoas que se autodeclaram pretas e pardas (quesito do IBGE) ou adotam autodefinição análoga'],
            ['Ações afirmativas', 'Programas e medidas especiais do Estado e da iniciativa privada para corrigir desigualdades raciais e promover igualdade de oportunidades'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Conduta', 'Onde está', 'Pena'],
          linhas: [
            ['Injuriar alguém em razão de raça, cor, etnia ou procedência nacional', 'Lei 7.716, art. 2º-A', 'Reclusão de 2 a 5 anos e multa; aumento de metade se em concurso de 2 ou mais pessoas'],
            ['Injúria com elementos de religião ou da condição de pessoa idosa ou com deficiência', 'CP, art. 140, § 3º', 'Reclusão de 1 a 3 anos e multa'],
            ['Praticar, induzir ou incitar discriminação ou preconceito', 'Lei 7.716, art. 20', 'Reclusão de 1 a 3 anos e multa; 2 a 5 anos se por meios de comunicação, redes sociais ou internet'],
            ['Recusar ou impedir acesso a estabelecimento comercial', 'Lei 7.716, art. 5º', 'Reclusão de 1 a 3 anos'],
            ['Recusar ou impedir matrícula de aluno', 'Lei 7.716, art. 6º', 'Reclusão de 3 a 5 anos; agravada de 1/3 se a vítima é menor de 18 anos'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'Art. 20-A: penas aumentadas de 1/3 até a metade quando o crime ocorre em contexto ou com intuito de **descontração, diversão ou recreação** (o chamado racismo recreativo).',
          'Art. 20-B: aumento de 1/3 até a metade nos crimes dos arts. 2º-A e 20 praticados por **funcionário público** no exercício das funções ou a pretexto de exercê-las.',
          'Art. 20-D: a vítima dos crimes de racismo deve estar acompanhada de **advogado ou defensor público** em todos os atos processuais.',
          'Art. 16 e 18: a perda do cargo do servidor e a suspensão do estabelecimento (até 3 meses) **não são automáticas**; devem ser declaradas motivadamente na sentença.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Ofensa na recepção do hospital',
        enunciado:
          'Um acompanhante, irritado com a espera, chama a recepcionista negra de “macaca” na frente de outros pacientes. Outro acompanhante ofende um paciente com termos depreciativos ligados à religião dele. Como se enquadram as condutas?',
        resolucao:
          'A primeira é **injúria racial**, crime de racismo do art. 2º-A da Lei 7.716 (reclusão de 2 a 5 anos e multa). A segunda é a injúria qualificada do **art. 140, § 3º, do Código Penal**, que abrange elementos referentes a religião ou à condição de pessoa idosa ou com deficiência (reclusão de 1 a 3 anos e multa). Se, em vez de ofender pessoa determinada, alguém incitar o preconceito religioso em rede social, o crime é o do art. 20, § 2º, da Lei 7.716 (reclusão de 2 a 5 anos e multa).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) o art. 2º-A da Lei 7.716 fala em raça, cor, etnia ou **procedência nacional** — **religião não está nele**; a injúria religiosa continua no **CP, art. 140, § 3º**; (b) população negra = **pretos e pardos**, por **autodeclaração**; (c) a perda do cargo pela Lei 7.716 **não é automática**; (d) racismo é **inafiançável e imprescritível** (CF, art. 5º, XLII), ao passo que a tortura é inafiançável e insuscetível de graça ou anistia, mas **não** imprescritível.',
      },
    ],
    fontes: [LEI_12288, LEI_7716, LEI_14532, CP, CF],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- lg-pcd ---------- */
  {
    temaId: 'lg-pcd',
    titulo: 'Estatuto da Pessoa com Deficiência (LBI — Lei 13.146/2015)',
    resumo:
      'A banca cobra o conceito de deficiência (art. 2º), a avaliação biopsicossocial e seus quatro elementos, o atendimento prioritário (art. 9º), o consentimento livre e esclarecido (arts. 11 a 13), a notificação compulsória da violência (art. 26) e a curatela restrita aos atos patrimoniais (art. 85).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A LBI tem como base a **Convenção sobre os Direitos das Pessoas com Deficiência**, aprovada pelo rito do **art. 5º, § 3º, da Constituição** e promulgada pelo Decreto 6.949/2009 (LBI, art. 1º, parágrafo único) — por isso a Convenção tem **equivalência de emenda constitucional** (CF, art. 5º, § 3º).\n\nPelo **art. 2º**, pessoa com deficiência é aquela que tem **impedimento de longo prazo** de natureza **física, mental, intelectual ou sensorial**, o qual, **em interação com uma ou mais barreiras**, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições. É o **modelo social**: a deficiência resulta da interação entre o impedimento e as barreiras, e não só da lesão.\n\nA avaliação da deficiência, quando necessária, é **biopsicossocial**, feita por **equipe multiprofissional e interdisciplinar** (art. 2º, § 1º). O exame médico-pericial que a integra pode ser feito por **telemedicina** ou por análise documental, conforme regulamento (§ 3º). O **cordão de fita com desenhos de girassóis** é o símbolo nacional de deficiências ocultas; seu uso é **opcional** e não dispensa documento comprobatório, se solicitado (art. 2º-A).\n\nA deficiência **não afeta a plena capacidade civil** (art. 6º): a pessoa pode casar, exercer direitos sexuais e reprodutivos, conservar a fertilidade (é **vedada a esterilização compulsória**) e exercer a guarda e a adoção.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Avaliação biopsicossocial considera (art. 2º, § 1º)'],
          linhas: [
            ['I — os impedimentos nas funções e nas estruturas do corpo'],
            ['II — os fatores socioambientais, psicológicos e pessoais'],
            ['III — a limitação no desempenho de atividades'],
            ['IV — a restrição de participação'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Tema', 'Regra', 'Base'],
          linhas: [
            ['Atendimento prioritário', 'Proteção e socorro, atendimento em instituições e serviços, restituição do IR, tramitação processual, entre outros', 'Art. 9º'],
            ['Extensão ao acompanhante', 'Os direitos de prioridade se estendem ao acompanhante ou atendente pessoal, exceto restituição do IR e tramitação processual', 'Art. 9º, § 1º'],
            ['Emergência', 'Nos serviços de emergência, a prioridade fica condicionada aos protocolos de atendimento médico', 'Art. 9º, § 2º'],
            ['Tratamento forçado', 'A pessoa com deficiência não pode ser obrigada a intervenção clínica ou cirúrgica, tratamento ou institucionalização forçada', 'Art. 11'],
            ['Consentimento', 'Prévio, livre e esclarecido, indispensável para tratamento, procedimento, hospitalização e pesquisa', 'Art. 12'],
            ['Sem consentimento', 'Só em risco de morte e emergência em saúde, resguardado o superior interesse', 'Art. 13'],
            ['Acompanhante na internação', 'Direito a acompanhante ou atendente pessoal; a impossibilidade deve ser justificada por escrito pelo profissional', 'Art. 22'],
            ['Violência', 'Suspeita ou confirmação: notificação compulsória pelos serviços de saúde à autoridade policial e ao MP, além dos Conselhos dos Direitos da Pessoa com Deficiência', 'Art. 26'],
            ['Discriminação', 'Praticar, induzir ou incitar discriminação: reclusão de 1 a 3 anos e multa', 'Art. 88'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Curatela e consentimento',
        enunciado:
          'Paciente de 30 anos com deficiência intelectual, sob curatela, precisa de cirurgia eletiva. A mãe, curadora, quer autorizar também uma laqueadura “para evitar problemas”. O que diz a LBI?',
        resolucao:
          'A curatela afeta **apenas atos patrimoniais e negociais** e não alcança o direito ao próprio corpo, à sexualidade e à saúde (art. 85, § 1º). O consentimento da pessoa sob curatela pode ser suprido na forma da lei (art. 11, parágrafo único), mas deve ser assegurada sua participação no maior grau possível (art. 12, § 1º). A esterilização compulsória é vedada (art. 6º, IV).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) o impedimento é de **longo prazo**, e a deficiência surge da **interação com barreiras**; (b) a avaliação é **biopsicossocial** e por **equipe multiprofissional** — item que diga “exclusivamente médica” está errado; (c) a notificação do art. 26 vai à **autoridade policial e ao MP**, além dos Conselhos — diferente do Estatuto da Pessoa Idosa, em que a notificação vai à autoridade sanitária; (d) a curatela é **medida extraordinária**, dura o menor tempo possível e não alcança o voto, o casamento e a saúde; (e) na emergência, vale o **protocolo médico** (art. 9º, § 2º).',
      },
    ],
    fontes: [LEI_13146],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- lg-tortura-abuso ---------- */
  {
    temaId: 'lg-tortura-abuso',
    titulo: 'Tortura (Lei 9.455/1997), abuso de autoridade (Lei 13.869/2019) e Protocolo de Istambul',
    resumo:
      'Nas provas de perícia, cai a tipificação da tortura (art. 1º), a omissão de quem devia evitar ou apurar, as causas de aumento e os efeitos da condenação; no abuso de autoridade, o dolo específico e o art. 24 (hospital). O Protocolo de Istambul é o manual da ONU que orienta a documentação médico-legal da tortura.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Diferente da definição internacional, a lei brasileira trata a tortura como **crime comum** em suas formas principais: o inciso I pode ser praticado por **qualquer pessoa**. O **art. 1º** prevê: **I** — constranger alguém com violência ou grave ameaça, causando sofrimento físico ou mental, (a) para obter **informação, declaração ou confissão**, (b) para provocar **ação ou omissão criminosa** ou (c) em razão de **discriminação racial ou religiosa**; **II** — submeter alguém **sob sua guarda, poder ou autoridade** a intenso sofrimento físico ou mental, como **castigo pessoal ou medida de caráter preventivo**; **III** — submeter **mulher, reiteradamente**, a intenso sofrimento físico ou mental, **no contexto de violência doméstica e familiar** (incluído pela **Lei 15.410/2026**). Pena: **reclusão de 2 a 8 anos**.\n\nO **§ 1º** pune quem submete **pessoa presa ou sujeita a medida de segurança** a sofrimento por ato não previsto em lei. O **§ 2º** pune com **detenção de 1 a 4 anos** quem **se omite** diante dessas condutas quando tinha o **dever de evitá-las ou apurá-las** — situação que pode alcançar o médico ou o perito que, por dever funcional, deveria documentar e comunicar. A Constituição declara a tortura **inafiançável e insuscetível de graça ou anistia** (art. 5º, XLIII), o que a lei repete (§ 6º).\n\nA **Lei 13.869/2019** define os crimes de **abuso de autoridade** cometidos por **agente público, servidor ou não**. Só há crime com **finalidade específica** de prejudicar outrem, beneficiar a si ou a terceiro, ou por **mero capricho ou satisfação pessoal** (art. 1º, § 1º). A **divergência na interpretação de lei** ou na avaliação de fatos e provas **não** configura abuso (§ 2º). A ação penal é **pública incondicionada** (art. 3º). O **art. 24** interessa ao médico: constranger, sob violência ou grave ameaça, funcionário de **hospital** a admitir para tratamento **pessoa já morta**, para alterar local ou momento de crime.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Lei 9.455/1997', 'Regra'],
          linhas: [
            ['§ 3º', 'Lesão grave ou gravíssima: reclusão de 4 a 10 anos; morte: reclusão de 8 a 16 anos'],
            ['§ 4º', 'Aumento de 1/6 até 1/3: agente público; vítima criança, gestante, pessoa com deficiência, adolescente ou maior de 60 anos; mediante sequestro'],
            ['§ 5º', 'A condenação “acarretará” a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada — efeito que decorre da própria lei'],
            ['§ 7º', 'Regime inicial fechado, salvo na omissão do § 2º'],
            ['Art. 2º', 'Aplica-se ao crime cometido fora do Brasil se a vítima for brasileira ou o agente estiver em local sob jurisdição brasileira'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Protocolo de Istambul', 'O que saber'],
          linhas: [
            ['O que é', 'Manual da ONU sobre Investigação e Documentação Eficazes de Tortura e Outras Penas ou Tratamentos Cruéis, Desumanos ou Degradantes; Série de Treinamento Profissional nº 8/Rev. 2 do OHCHR (tradução para o português do CNJ, 2024)'],
            ['Histórico', 'Endossado pela Alta Comissária da ONU em 9/8/1999; incluído na série do OHCHR em 2001, atualizado em 2004 e revisto em 2022'],
            ['Princípios de Istambul', 'Padrões mínimos para a investigação e a documentação eficazes; promovidos pela Resolução 55/89 da Assembleia Geral (2000)'],
            ['Exame (par. 199)', 'Consentimento informado; exame em privado, sob controle do perito e fora da presença de agentes de segurança; relatório escrito preparado prontamente'],
            ['Níveis de consistência (par. 380)', '“Não consistente com”; “consistente com”; “altamente consistente com”; “típico de”; “diagnóstico de”'],
            ['Ausência de achados (par. 390)', 'A ausência de evidência física ou psicológica não significa que a tortura não ocorreu'],
            ['Credibilidade (par. 389)', 'O clínico não deve opinar sobre a credibilidade do examinado; opina sobre a confiabilidade e a consistência da evidência clínica'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Perito e escolta policial',
        enunciado:
          'Perito do IML examina preso que relata espancamento durante interrogatório. Os policiais da escolta insistem em permanecer na sala. O exame não mostra lesões recentes. Como agir segundo o Protocolo de Istambul?',
        resolucao:
          'O exame deve ocorrer **em privado**, sob controle do perito e **fora da presença de agentes de segurança**, com consentimento informado. O laudo relaciona os achados à alegação pelos graus de consistência. A **ausência de lesões não exclui a tortura** e deve ser interpretada, por exemplo, pelo tempo decorrido ou pelos métodos que não deixam marcas. Se o perito, tendo o dever de apurar, se omitir, pode responder pelo art. 1º, § 2º, da Lei 9.455/1997.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) a tortura do inciso I é **crime comum**; ser agente público é **causa de aumento** (§ 4º, I); (b) a omissão do § 2º tem pena de **detenção** de 1 a 4 anos e **não** começa obrigatoriamente em regime fechado; (c) na tortura, a perda do cargo decorre da própria condenação (“acarretará”, § 5º); no abuso de autoridade, **depende de reincidência** e deve ser declarada motivadamente (Lei 13.869, art. 4º, parágrafo único); (d) a discriminação da alínea “c” é **racial ou religiosa** — não inclui orientação sexual; (e) o Protocolo de Istambul é um **manual da ONU**, e não um tratado com força de lei; (f) desde 2026, há tortura contra **mulher em violência doméstica** quando o sofrimento intenso é **reiterado** (inciso III).',
      },
    ],
    fontes: [LEI_9455, LEI_13869, PROTOCOLO_ISTAMBUL, PROTOCOLO_ISTAMBUL_PT, CF],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- lg-direitos-humanos ---------- */
  {
    temaId: 'lg-direitos-humanos',
    titulo: 'DUDH e Convenção Americana (Pacto de São José da Costa Rica)',
    resumo:
      'A banca cobra a natureza da DUDH (resolução de 1948), os artigos mais conhecidos das duas normas, a promulgação do Pacto pelo Decreto 678/1992, a prisão civil só por alimentos, a composição da Comissão e da Corte Interamericanas e o reconhecimento da competência da Corte pelo Brasil.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **Declaração Universal dos Direitos Humanos (DUDH)** foi proclamada pela **Assembleia Geral da ONU** em **10 de dezembro de 1948**, pela **Resolução 217 A (III)**, como ideal comum a ser atingido por todos os povos. É uma **resolução**, e não um tratado ratificado. Seu **art. I** diz que todos os seres humanos nascem **livres e iguais em dignidade e direitos**; o **art. V** proíbe a **tortura** e o tratamento cruel, desumano ou degradante; o **art. XI** consagra a **presunção de inocência**; o **art. XXV** garante padrão de vida capaz de assegurar **saúde e bem-estar**, incluindo **cuidados médicos**, e cuidados especiais à **maternidade e à infância**.\n\nA **Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica)** é de **22/11/1969**. O Brasil aderiu em **25/9/1992** e a promulgou pelo **Decreto 678, de 6/11/1992**, com uma **declaração interpretativa**: os arts. 43 e 48, “d”, não incluem o direito automático de **visitas e inspeções in loco** da Comissão, que dependem da **anuência expressa** do Estado. Por não ter sido aprovado pelo rito do art. 5º, § 3º, da CF, o Pacto tem, segundo o STF, status **supralegal**, abaixo da Constituição e acima das leis (RE 466.343, 2008) — por isso a **Súmula Vinculante 25** declara ilícita a prisão civil do depositário infiel.\n\nO sistema tem dois órgãos (art. 33): a **Comissão Interamericana**, com **7 membros**, que recebe petições de **qualquer pessoa, grupo de pessoas ou ONG** (art. 44), e a **Corte Interamericana**, com **7 juízes** (art. 52), a quem **somente os Estados-Partes e a Comissão** podem submeter casos (art. 61). O Brasil reconheceu a competência obrigatória da Corte pelo **Decreto 4.463/2002**, para **fatos posteriores a 10/12/1998**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Pacto de São José', 'Regra'],
          linhas: [
            ['Art. 4º — Vida', 'Protegida pela lei “em geral, desde o momento da concepção”; pena de morte não pode ser restabelecida onde abolida nem aplicada a menor de 18, maior de 70 ou gestante'],
            ['Art. 5º — Integridade', 'Ninguém será submetido a torturas nem a penas ou tratos cruéis, desumanos ou degradantes; a pena não passa da pessoa do delinquente; processados separados dos condenados'],
            ['Art. 7º — Liberdade', 'Pessoa detida é conduzida sem demora à presença de um juiz (art. 7.5, citado pela Resolução CNJ 213/2015 como base da audiência de custódia); ninguém será detido por dívida, salvo inadimplemento de obrigação alimentar'],
            ['Art. 8º — Garantias judiciais', 'Presunção de inocência; defensor; intérprete gratuito; não ser obrigado a depor contra si; direito de recorrer; confissão só vale sem coação'],
            ['Art. 27 — Suspensão', 'Em guerra ou emergência, não se suspendem, entre outros, os direitos à vida, à integridade pessoal, à personalidade jurídica, a proibição da escravidão e a legalidade'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['DUDH', 'Conteúdo'],
          linhas: [
            ['Art. III', 'Direito à vida, à liberdade e à segurança pessoal'],
            ['Art. IX', 'Ninguém será arbitrariamente preso, detido ou exilado'],
            ['Art. XII', 'Proteção contra interferências arbitrárias na vida privada, na família, no lar e na correspondência'],
            ['Art. XIV', 'Direito de procurar e gozar asilo, salvo perseguição legitimamente motivada por crimes de direito comum'],
            ['Art. XV', 'Direito a uma nacionalidade; ninguém será arbitrariamente privado dela nem do direito de mudá-la'],
            ['Art. XXI', 'Igual direito de acesso ao serviço público do seu país'],
            ['Art. XXVI', 'Educação gratuita pelo menos nos graus elementares e fundamentais; ensino fundamental obrigatório; ensino superior acessível com base no mérito'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Quem leva o caso à Corte?',
        enunciado:
          'Família de paciente que morreu em hospital psiquiátrico público alega violação do direito à vida e à integridade pelo Estado brasileiro. Pode ajuizar o caso diretamente na Corte Interamericana?',
        resolucao:
          'Não. A família pode apresentar **petição à Comissão** (art. 44). Esgotado o procedimento da Comissão (arts. 48 a 50), **somente a Comissão ou um Estado-Parte** podem submeter o caso à Corte (art. 61). A Corte pode julgar o Brasil porque o país reconheceu sua competência obrigatória para fatos posteriores a 10/12/1998 (Decreto 4.463/2002).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) a DUDH é **resolução da Assembleia Geral**, de **1948**, e não tratado; (b) o Pacto é de **1969**, mas foi promulgado no Brasil em **1992**; (c) o indivíduo **não** acessa diretamente a Corte; peticiona à **Comissão**; (d) Comissão e Corte têm **7** membros cada; (e) a única prisão civil admitida é a do **devedor de alimentos** (Pacto, art. 7.7; SV 25); (f) a pena de morte não se aplica a quem tinha menos de 18 anos **ou mais de 70** na data do delito, nem à mulher grávida.',
      },
    ],
    fontes: [DUDH, DEC_678, DEC_4463, SV_25, CNJ_213, CF],
    atualizadoEm: ATUALIZADO,
  },
];
