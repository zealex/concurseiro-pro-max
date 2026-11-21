import type { ResumoTema } from '../../../types';

const ATUALIZADO = '2026-11-20';
const CF = 'Constituição Federal de 1988, texto compilado — https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm';
const L9784 = 'Lei 9.784/1999 (processo administrativo federal), texto compilado — https://www.planalto.gov.br/ccivil_03/leis/l9784.htm';
const DL200 = 'Decreto-Lei 200/1967, texto compilado — https://www.planalto.gov.br/ccivil_03/decreto-lei/del0200.htm';
const L13303 = 'Lei 13.303/2016 (estatuto das estatais), texto compilado — https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13303.htm';
const L12550 = 'Lei 12.550/2011 (EBSERH) — https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12550.htm';
const L11107 = 'Lei 11.107/2005 (consórcios públicos), texto compilado — https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11107.htm';
const CC = 'Código Civil (Lei 10.406/2002), art. 41 — https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm';
const CTN = 'Código Tributário Nacional (Lei 5.172/1966), art. 78 — https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm';
const L4717 = 'Lei 4.717/1965 (ação popular), art. 2º — https://www.planalto.gov.br/ccivil_03/leis/l4717.htm';
const L8112 = 'Lei 8.112/1990, texto compilado — https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm';
const SUM473 = 'STF, Súmula 473 — https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=30&sumula=1602';
const SV13 = 'STF, Súmula Vinculante 13 — https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26&sumula=1227';
const TEMA532 = 'STF, Tema 532 da repercussão geral (RE 633.782) — https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=532';

export const RESUMOS_1: ResumoTema[] = [
  /* ---------- da-principios ---------- */
  {
    temaId: 'da-principios',
    titulo: 'Administração pública: conceito e princípios',
    resumo:
      'A banca cobra o LIMPE do art. 37 da CF, a diferença entre legalidade para o particular e para o administrador, os princípios “implícitos” (que a Lei 9.784/1999 torna expressos) e as aplicações práticas: promoção pessoal, nepotismo e autotutela.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Em sentido **subjetivo** (orgânico), administração pública é o conjunto de órgãos, entidades e agentes que exercem a função administrativa. Em sentido **objetivo** (material), é a própria atividade: prestar serviços públicos, exercer o poder de polícia, fomentar e intervir. Toda a administração **direta e indireta**, de **qualquer dos Poderes** e de **todos os entes** (União, Estados, DF e Municípios), obedece aos princípios do art. 37, caput, da CF.\n\nOs cinco princípios expressos formam o **LIMPE**: **L**egalidade, **I**mpessoalidade, **M**oralidade, **P**ublicidade e **E**ficiência. A eficiência foi incluída pela **EC 19/1998**; os outros quatro estão no texto original.\n\nA **legalidade administrativa** é mais estreita que a do particular: o particular pode fazer tudo o que a lei não proíbe; o administrador só pode fazer o que a lei autoriza. Por isso a Lei 9.784/1999 fala em “atuação conforme a lei e o Direito” (art. 2º, parágrafo único, I).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'LIMPE na prática',
          colunas: ['Princípio', 'O que exige', 'Exemplo cobrado'],
          linhas: [
            ['Legalidade', 'Agir só com base em lei', 'Criar obrigação ao cidadão por portaria sem amparo legal é ilegal'],
            ['Impessoalidade', 'Finalidade pública, sem favorecer nem perseguir; o ato é do órgão, não do agente', 'Publicidade oficial sem nomes, símbolos ou imagens de promoção pessoal (CF, art. 37, § 1º)'],
            ['Moralidade', 'Ética, boa-fé e probidade, além da lei', 'Nepotismo (SV 13); ato legal na forma, mas desonesto no fim'],
            ['Publicidade', 'Transparência e divulgação oficial; condição de eficácia dos atos', 'Sigilo só nas exceções da CF e da lei (segurança da sociedade e do Estado, intimidade)'],
            ['Eficiência', 'Resultado, qualidade, economicidade', 'Avaliação de desempenho; contrato de metas (CF, art. 37, § 8º)'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'Os chamados **princípios implícitos** não estão no caput do art. 37, mas a doutrina e a jurisprudência os reconhecem: **supremacia do interesse público** sobre o privado, **indisponibilidade do interesse público**, **autotutela**, **continuidade do serviço público**, **razoabilidade**, **proporcionalidade**, **motivação** e **segurança jurídica**.\n\nPegadinha clássica: vários deles são **expressos na Lei 9.784/1999**. O art. 2º manda a Administração obedecer aos princípios da legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência. A **autotutela** está no art. 53 da mesma lei e na **Súmula 473 do STF**: a Administração anula seus atos ilegais e revoga os inconvenientes ou inoportunos, respeitados os direitos adquiridos e ressalvada a apreciação judicial.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Nepotismo (SV 13):** nomear cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade **até o 3º grau** da autoridade nomeante ou de servidor da mesma pessoa jurídica com cargo de direção, chefia ou assessoramento, para cargo em comissão, de confiança ou função gratificada, viola a CF. Vale para todos os Poderes e entes, inclusive o **nepotismo cruzado** (designações recíprocas).',
          '**Promoção pessoal:** a publicidade oficial deve ter caráter educativo, informativo ou de orientação social (CF, art. 37, § 1º). Logomarca pessoal do prefeito em obra pública fere a impessoalidade.',
          '**Razoabilidade/proporcionalidade:** a Lei 9.784 veda impor obrigações, restrições e sanções “em medida superior àquelas estritamente necessárias” ao interesse público (art. 2º, parágrafo único, VI).',
          '**Segurança jurídica:** é vedada a aplicação retroativa de nova interpretação (Lei 9.784, art. 2º, parágrafo único, XIII).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'Um prefeito manda pintar nas ambulâncias do Município o slogan pessoal de sua campanha e a sua fotografia. Qual princípio do art. 37 da CF é mais diretamente violado?',
        resolucao:
          'Impessoalidade. O § 1º do art. 37 proíbe, na publicidade de atos, programas, obras, serviços e campanhas, nomes, símbolos ou imagens que caracterizem promoção pessoal. A moralidade também é atingida, mas a banca costuma cobrar a impessoalidade como resposta “mais direta”.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas frequentes: (1) **eficiência** entrou pela **EC 19/1998**, não estava no texto original de 1988; (2) os princípios do art. 37 valem para a administração **direta e indireta**, inclusive empresas estatais; (3) “razoabilidade” e “motivação” não estão no art. 37, caput, mas **estão expressos no art. 2º da Lei 9.784/1999** — item que os chame de princípios “não previstos em nenhuma lei” está errado; (4) **publicidade não é absoluta**: o sigilo imprescindível à segurança da sociedade e do Estado é ressalvado (CF, art. 5º, XXXIII).',
      },
    ],
    fontes: [CF, L9784, SUM473, SV13],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- da-organizacao ---------- */
  {
    temaId: 'da-organizacao',
    titulo: 'Organização administrativa: direta e indireta',
    resumo:
      'Caem a diferença entre desconcentração e descentralização, órgão e entidade, as quatro espécies da administração indireta (como são criadas, regime jurídico e regime de pessoal), os consórcios públicos e exemplos reais como a EBSERH.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **administração direta** é formada pelos próprios entes políticos — União, Estados, DF e Municípios — e por seus **órgãos** (ministérios, secretarias, departamentos). Órgão é unidade de atuação **sem personalidade jurídica** (Lei 9.784, art. 1º, § 2º, I); entidade é unidade **com personalidade jurídica** (inciso II).\n\n**Desconcentração** é a distribuição interna de competências **dentro da mesma pessoa jurídica**, criando órgãos e hierarquia (ex.: a Secretaria Municipal de Saúde cria um departamento de vigilância). **Descentralização** é a transferência da atividade para **outra pessoa**, física ou jurídica: por **outorga** (lei cria entidade da administração indireta e lhe transfere a titularidade do serviço) ou por **delegação** (contrato ou ato transfere só a execução, como na concessão).\n\nA **administração indireta** reúne entidades com personalidade própria: **autarquias, fundações públicas, empresas públicas e sociedades de economia mista** (DL 200/1967, art. 4º, II). Elas são **vinculadas** ao ente que as criou e sofrem **controle finalístico** (supervisão, tutela), **não subordinação hierárquica**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'As quatro entidades da administração indireta',
          colunas: ['Entidade', 'Personalidade', 'Como nasce (CF, art. 37, XIX)', 'Pessoal', 'Exemplos'],
          linhas: [
            ['Autarquia', 'Direito público (CC, art. 41, IV)', 'Criada diretamente por lei específica', 'Estatutário (regra)', 'INSS, agências reguladoras, autarquias municipais de saúde'],
            ['Fundação pública', 'Direito público (fundação autárquica) ou direito privado, conforme a lei', 'Lei específica autoriza (ou cria, se de direito público); lei complementar define as áreas', 'Conforme o regime adotado', 'Fundações de saúde e de pesquisa'],
            ['Empresa pública', 'Direito privado', 'Lei específica autoriza; nasce com o registro', 'Celetista, com concurso', 'EBSERH, Caixa, Correios'],
            ['Sociedade de economia mista', 'Direito privado', 'Lei específica autoriza; forma obrigatória de S/A', 'Celetista, com concurso', 'Banco do Brasil, Petrobras'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Empresa pública (Lei 13.303, art. 3º):** capital **integralmente** público (detido pelo ente; admite participação de outras pessoas de direito público ou da indireta, desde que a maioria do capital votante fique com o ente). Pode adotar **qualquer forma** societária.',
          '**Sociedade de economia mista (Lei 13.303, art. 4º):** **sempre S/A**, com a **maioria das ações com direito a voto** do ente ou de entidade da indireta; admite capital privado.',
          '**Estatais que exploram atividade econômica** sujeitam-se ao regime próprio das empresas privadas quanto a obrigações civis, comerciais, trabalhistas e tributárias (CF, art. 173, § 1º, II) e não podem ter privilégios fiscais não extensivos ao setor privado (§ 2º).',
          '**Subsidiárias** e participação em empresa privada dependem de autorização legislativa (CF, art. 37, XX).',
          '**Licitações das estatais:** seguem a Lei 13.303/2016, não a Lei 14.133/2021 (Lei 14.133, art. 1º, § 1º, ressalvado o art. 178).',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**EBSERH** — exemplo que interessa ao médico: a Lei 12.550/2011 autorizou a criação da Empresa Brasileira de Serviços Hospitalares como **empresa pública unipessoal**, de **direito privado**, com capital **integralmente da União**, **vinculada ao Ministério da Educação** (arts. 1º e 2º). Presta assistência gratuita no âmbito **exclusivo do SUS** e apoia ensino e pesquisa nos hospitais universitários federais (art. 3º). O pessoal permanente é **celetista**, admitido por **concurso público** de provas ou de provas e títulos (art. 10).\n\n**Consórcios públicos** (Lei 11.107/2005): entes federados se associam para objetivos comuns — muito usados na saúde (consórcios intermunicipais), que devem obedecer às normas do SUS (art. 1º, § 3º). O consórcio é constituído por contrato, precedido de **protocolo de intenções** ratificado por lei (arts. 3º e 5º). Pode ser **associação pública** (direito público, que **integra a administração indireta de todos os entes consorciados**) ou pessoa jurídica de **direito privado** (art. 6º). Em ambos os casos segue normas de direito público em licitação, contratos, prestação de contas e admissão de pessoal, que é regido pela **CLT** (art. 6º, § 2º).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'Três Municípios gaúchos querem gerir juntos um serviço de atendimento especializado. Constituem associação pública. Que natureza jurídica ela terá e onde se insere?',
        resolucao:
          'Será pessoa jurídica de direito público (Lei 11.107, art. 6º, I) — o Código Civil a enquadra entre as autarquias (art. 41, IV) — e integrará a administração indireta de todos os Municípios consorciados (art. 6º, § 1º). O ingresso no consórcio depende de lei de ratificação do protocolo de intenções.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) lei **cria** autarquia, mas apenas **autoriza** a instituição de empresa pública, sociedade de economia mista e fundação (CF, art. 37, XIX); (2) empresa pública admite **qualquer forma** societária; sociedade de economia mista é **sempre S/A**; (3) entre a administração direta e a indireta há **vinculação/controle finalístico**, não hierarquia; (4) órgão **não** tem personalidade jurídica — desconcentrar não cria pessoa nova; (5) a EBSERH é **empresa pública**, e não autarquia, apesar de prestar serviço público de saúde.',
      },
    ],
    fontes: [CF, DL200, L13303, L12550, L11107, CC, L9784],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- da-poderes ---------- */
  {
    temaId: 'da-poderes',
    titulo: 'Poderes administrativos e abuso de poder',
    resumo:
      'A banca pede para identificar o poder em um caso concreto (hierárquico × disciplinar × de polícia), cobra o conceito do art. 78 do CTN, os atributos do poder de polícia e as duas formas de abuso de poder: excesso e desvio de finalidade.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Poderes administrativos são **instrumentos** que a lei dá à Administração para cumprir o interesse público. São também **deveres** (poder-dever): o agente não pode renunciar a eles, e a omissão pode ser ilegal. A Lei 9.784/1999 diz que a competência é **irrenunciável** (art. 11) e veda a renúncia de poderes, salvo autorização em lei (art. 2º, parágrafo único, II).\n\n**Vinculado** e **discricionário** descrevem o **grau de liberdade** da lei. No vinculado, a lei fixa todos os elementos e só há uma conduta possível (ex.: concessão de aposentadoria compulsória por idade). No discricionário, a lei deixa ao administrador **juízo de conveniência e oportunidade** sobre motivo e objeto, dentro dos limites legais (ex.: autorização de uso de bem público). O Judiciário controla a **legalidade** do ato discricionário (inclusive razoabilidade e proporcionalidade), mas não substitui o **mérito** administrativo.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Os poderes em um quadro',
          colunas: ['Poder', 'Para que serve', 'Exemplo típico'],
          linhas: [
            ['Hierárquico', 'Organizar, ordenar, rever, delegar e avocar dentro da estrutura', 'Secretário revoga ordem de diretor subordinado; delegação de competência'],
            ['Disciplinar', 'Apurar e punir infrações de servidores e de quem tem vínculo especial com a Administração', 'Suspensão de servidor após PAD; multa a empresa contratada'],
            ['Regulamentar (normativo)', 'Editar atos gerais para fiel execução da lei (CF, art. 84, IV)', 'Decreto regulamentar; não pode inovar criando obrigação sem lei'],
            ['De polícia', 'Limitar ou disciplinar direito, interesse ou liberdade em favor do interesse público (CTN, art. 78)', 'Vigilância sanitária interdita cozinha de restaurante; alvará; multa de trânsito'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Poder de polícia (CTN, art. 78):** atividade da Administração que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato em razão de interesse público ligado à segurança, higiene, ordem, costumes, mercado, tranquilidade pública e respeito à propriedade e aos direitos. É **regular** quando exercido pelo órgão competente, nos limites da lei, com devido processo e, se discricionário, **sem abuso ou desvio de poder** (parágrafo único).\n\nAtributos citados pela doutrina: **discricionariedade** (em regra), **autoexecutoriedade** (executa sem ordem judicial, como apreender alimento estragado) e **coercibilidade**. O **ciclo de polícia** tem ordem, consentimento (licença, autorização), fiscalização e sanção.\n\n**Delegação a estatais:** no **Tema 532** (RE 633.782), o STF admitiu delegar o poder de polícia, **por lei**, a pessoas jurídicas de direito privado da administração indireta **de capital majoritariamente público** que prestem **exclusivamente serviço público de atuação própria do Estado** e em **regime não concorrencial**. O caso concreto foi a aplicação de multas de trânsito pela BHTrans. A fase de **ordem de polícia** (legislar) continua indelegável.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Abuso de poder** é gênero, com duas espécies:',
          '**Excesso de poder:** o agente é competente, mas **vai além** dos limites da competência (vício de competência). Ex.: fiscal aplica sanção que só o secretário pode aplicar.',
          '**Desvio de poder (de finalidade):** o agente age dentro da competência, mas **visando fim diverso** do previsto em lei (vício de finalidade). Ex.: remover servidor “por necessidade do serviço” para puni-lo. A Lei 4.717/1965, art. 2º, parágrafo único, “e”, define o desvio de finalidade.',
          'O abuso pode ser **comissivo ou omissivo** (omissão ilegal de quem tinha o dever de agir).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'A vigilância sanitária municipal, durante fiscalização, inutiliza no local lotes de carne vencida de um mercado e aplica multa prevista em lei. Que poder foi exercido e qual atributo permitiu a inutilização sem ordem judicial?',
        resolucao:
          'Poder de polícia (CTN, art. 78), com o atributo da autoexecutoriedade. Não é poder disciplinar, porque o mercado não tem vínculo especial (funcional ou contratual) com a Administração; o vínculo é geral, de qualquer particular.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) **disciplinar × polícia**: o disciplinar alcança servidores e quem tem **vínculo específico** (contratado, concessionário); o de polícia alcança **particulares em geral**; (2) **hierárquico × disciplinar**: dar ordem e rever ato é hierárquico; **punir** é disciplinar; (3) decreto regulamentar **não inova** na ordem jurídica; (4) **excesso** = vício de **competência**; **desvio** = vício de **finalidade**; (5) não é delegável a **edição de atos normativos**, a **decisão de recursos** e a matéria de **competência exclusiva** (Lei 9.784, art. 13).',
      },
    ],
    fontes: [CF, CTN, L9784, L4717, TEMA532],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- da-atos ---------- */
  {
    temaId: 'da-atos',
    titulo: 'Atos administrativos',
    resumo:
      'Cobram os cinco elementos (competência, finalidade, forma, motivo, objeto) e quais são vinculados, os atributos (presunção de legitimidade, imperatividade, autoexecutoriedade, tipicidade), a diferença entre anulação e revogação (Súmula 473 do STF), a decadência de 5 anos e a convalidação.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Ato administrativo é a manifestação unilateral de vontade da Administração (ou de quem lhe faça as vezes), sob regime de direito público, que produz efeitos jurídicos imediatos e se sujeita a controle.\n\nA base legal dos **cinco elementos (requisitos)** é a **Lei 4.717/1965 (ação popular), art. 2º**, que declara nulos os atos com **incompetência, vício de forma, ilegalidade do objeto, inexistência dos motivos e desvio de finalidade**. Mnemônico: **COFIFOMOB** — **CO**mpetência, **FI**nalidade, **FO**rma, **MO**tivo, **OB**jeto.\n\n**Motivo × motivação:** motivo é a **situação de fato e de direito** que autoriza o ato; motivação é a **exposição** desse motivo, por escrito. A Lei 9.784, art. 50, exige motivação, com fatos e fundamentos jurídicos, quando o ato nega ou limita direitos, impõe sanções, decide concurso, dispensa ou declara inexigível a licitação, decide recurso, discrepa de pareceres ou anula, revoga, suspende ou convalida outro ato. Pela **teoria dos motivos determinantes**, o motivo declarado vincula: se for falso ou inexistente, o ato é nulo, mesmo que ele fosse discricionário.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Elementos do ato',
          colunas: ['Elemento', 'Pergunta', 'Vinculado ou discricionário?', 'Vício típico'],
          linhas: [
            ['Competência', 'Quem pode praticar?', 'Sempre vinculado', 'Excesso de poder; usurpação'],
            ['Finalidade', 'Para quê? (interesse público e fim específico da lei)', 'Sempre vinculado', 'Desvio de finalidade'],
            ['Forma', 'Como se exterioriza?', 'Em regra vinculado', 'Omissão de formalidade essencial'],
            ['Motivo', 'Por quê? (fato e direito)', 'Vinculado ou discricionário', 'Motivo falso ou inexistente'],
            ['Objeto', 'O que o ato determina?', 'Vinculado ou discricionário', 'Objeto ilícito ou impossível'],
          ],
          nota: 'Motivo e objeto formam o mérito administrativo nos atos discricionários.',
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Presunção de legitimidade e veracidade:** o ato presume-se legal e os fatos, verdadeiros, até prova em contrário (presunção relativa). Está em **todos** os atos.',
          '**Imperatividade:** impõe obrigações a terceiros independentemente de concordância. **Não** existe em atos enunciativos (certidão, atestado, parecer) nem nos que apenas atendem pedido do interessado (licença, autorização).',
          '**Autoexecutoriedade:** a Administração executa por meios próprios, sem ordem judicial, quando a lei autoriza ou em urgência. **Não** está em todos os atos — a cobrança de multa não paga, por exemplo, exige execução judicial.',
          '**Tipicidade:** o ato deve corresponder a figura definida em lei.',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Classificações úteis:** atos **gerais** (destinatários indeterminados, como o regulamento) × **individuais**; **simples** (um órgão) × **complexos** (duas ou mais vontades de órgãos diferentes formam um ato único) × **compostos** (um ato principal e outro acessório, como o visto); **vinculados** × **discricionários**. Espécies: **normativos** (decreto, regulamento), **ordinatórios** (portaria, ordem de serviço), **negociais** (licença — vinculada e definitiva; autorização e permissão — discricionárias e precárias), **enunciativos** (certidão, atestado, parecer) e **punitivos** (multa, interdição).\n\n**Extinção do ato:** cumprimento dos efeitos, desaparecimento do sujeito ou do objeto, renúncia, **cassação** (o beneficiário descumpre condições), **caducidade** (lei posterior torna o ato incompatível), **contraposição** (ato posterior com efeitos opostos), **anulação** e **revogação**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Anulação × revogação × convalidação',
          colunas: ['', 'Anulação', 'Revogação', 'Convalidação'],
          linhas: [
            ['Motivo', 'Ilegalidade', 'Conveniência e oportunidade (mérito)', 'Defeito sanável'],
            ['Quem faz', 'Administração (de ofício) ou Judiciário (provocado)', 'Só a Administração que praticou o ato', 'Administração'],
            ['Efeitos', 'Retroativos (ex tunc), em regra', 'Para o futuro (ex nunc)', 'Retroativos, preservando o ato'],
            ['Dever ou faculdade', 'Dever: “deve anular” (Lei 9.784, art. 53)', 'Faculdade: “pode revogar”', 'Faculdade (“poderão ser convalidados”, art. 55)'],
            ['Limites', 'Decadência de 5 anos para atos favoráveis, salvo má-fé (art. 54)', 'Respeitar direitos adquiridos; não cabe para atos vinculados ou que já exauriram efeitos', 'Sem lesão ao interesse público nem prejuízo a terceiros'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Súmula 473 do STF:** a Administração pode anular seus próprios atos quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial.\n\n**Decadência (Lei 9.784, art. 54):** o direito de anular atos de que decorram **efeitos favoráveis** aos destinatários decai em **5 anos**, contados da prática do ato, **salvo comprovada má-fé**. Se os efeitos patrimoniais são contínuos (ex.: gratificação paga todo mês), o prazo conta da **percepção do primeiro pagamento** (§ 1º).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'Em 2019 um servidor passou a receber, por erro de interpretação da Administração e sem má-fé, uma gratificação indevida. Em 2026 a Administração descobre o erro e quer anular o ato. Pode?',
        resolucao:
          'Não, pela regra do art. 54 da Lei 9.784: o ato é favorável, não houve má-fé e já passaram mais de 5 anos do primeiro pagamento (§ 1º). Decaiu o direito de anular. Se houvesse má-fé comprovada, a decadência não correria.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) o Judiciário **anula**, mas **não revoga** atos de outro Poder (revogação é juízo de mérito); ele só revoga os próprios atos administrativos; (2) revogação gera efeitos **ex nunc**; anulação, **ex tunc**; (3) **atos vinculados não podem ser revogados**; (4) **imperatividade e autoexecutoriedade não estão em todos os atos**; a presunção de legitimidade está; (5) **competência e finalidade são sempre vinculadas**; (6) vício de **competência** (não exclusiva) e de **forma** (não essencial) costumam ser **sanáveis**; vício de motivo, objeto e finalidade, em regra, não.',
      },
    ],
    fontes: [L4717, L9784, SUM473, CF],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- da-agentes ---------- */
  {
    temaId: 'da-agentes',
    titulo: 'Agentes públicos: espécies, cargo, emprego e função',
    resumo:
      'Cobram a classificação dos agentes (políticos, administrativos, particulares em colaboração), a diferença entre cargo, emprego e função, as regras constitucionais de acesso (concurso, cargo em comissão, função de confiança, contratação temporária), acumulação — inclusive a dos profissionais de saúde — e estabilidade.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Agente público** é toda pessoa que exerce, ainda que transitoriamente ou sem remuneração, mandato, cargo, emprego ou função pública. A Lei de Improbidade usa esse conceito amplo (Lei 8.429/1992, art. 2º). A doutrina divide os agentes em:\n\n• **Agentes políticos:** chefes do Executivo e seus auxiliares imediatos (ministros, secretários), parlamentares; para parte da doutrina, também magistrados e membros do MP.\n• **Agentes administrativos:** servidores **estatutários** (ocupam **cargo**), **empregados públicos** (ocupam **emprego**, regime da CLT) e **temporários** (CF, art. 37, IX).\n• **Particulares em colaboração:** exercem função pública sem perder a condição de particulares — jurados, mesários, conscritos (requisitados), concessionários e delegatários (delegados) e quem age em emergência (gestores de negócio).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Cargo, emprego e função',
          colunas: ['Figura', 'Regime', 'Onde aparece', 'Base'],
          linhas: [
            ['Cargo público', 'Estatutário', 'Administração direta, autarquias e fundações de direito público', 'Lei 8.112, art. 3º: criado por lei, com denominação própria e vencimento pago pelos cofres públicos'],
            ['Emprego público', 'Celetista (CLT)', 'Empresas públicas e sociedades de economia mista (ex.: EBSERH)', 'CF, art. 37, II (exige concurso); Lei 12.550, art. 10'],
            ['Função de confiança', 'Exercida só por servidor de cargo efetivo', 'Direção, chefia e assessoramento', 'CF, art. 37, V'],
            ['Função temporária', 'Contrato por tempo determinado', 'Necessidade temporária de excepcional interesse público (ex.: surto epidêmico)', 'CF, art. 37, IX'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Concurso público:** investidura em cargo **ou emprego** depende de concurso de provas ou de provas e títulos, ressalvados os **cargos em comissão** declarados em lei de livre nomeação e exoneração (CF, art. 37, II).',
          '**Validade do concurso:** até **2 anos**, prorrogável **uma vez, por igual período** (art. 37, III). Durante o prazo improrrogável do edital, o aprovado tem prioridade sobre novos concursados (inciso IV).',
          '**Cargo em comissão × função de confiança:** a função de confiança é exercida **exclusivamente** por servidor efetivo; o cargo em comissão pode ser ocupado por pessoa sem vínculo, respeitado o percentual mínimo de servidores de carreira fixado em lei. Ambos destinam-se **apenas** a direção, chefia e assessoramento (art. 37, V).',
          '**Acumulação:** é vedada, exceto com **compatibilidade de horários** e respeitado o teto: dois cargos de professor; um de professor com outro **de qualquer natureza** (redação da **EC 138, de 19/12/2025**; antes era “técnico ou científico”); **dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas** (art. 37, XVI, “c”). A proibição alcança empregos e funções na administração indireta (inciso XVII).',
          '**Estabilidade:** após **3 anos** de efetivo exercício, para nomeados em cargo efetivo por concurso, com **avaliação especial de desempenho** obrigatória (CF, art. 41 e § 4º). O estável só perde o cargo por sentença transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica de desempenho, na forma de lei complementar (§ 1º); fora do art. 41, também pode perdê-lo por excesso de despesa com pessoal (art. 169, § 4º). Extinto o cargo, o estável fica em **disponibilidade**, com remuneração proporcional ao tempo de serviço (art. 41, § 3º).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'Uma médica ocupa cargo efetivo de 20 h semanais em uma prefeitura e é aprovada em concurso da EBSERH (emprego público, 24 h). Os horários são compatíveis. Pode acumular?',
        resolucao:
          'Sim. A CF permite acumular dois cargos ou empregos privativos de profissionais de saúde, com profissão regulamentada, havendo compatibilidade de horários (art. 37, XVI, “c”). A vedação alcança empregos em empresa pública (inciso XVII), e a exceção da alínea “c” também, pois fala em “cargos ou empregos”.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) **empregado público também faz concurso** — o inciso II fala em “cargo **ou emprego**”; (2) a prorrogação do concurso é **uma vez** e **por igual período**, não “por até dois anos”; (3) **função de confiança** é **só** para servidor efetivo; cargo em comissão admite pessoa de fora; (4) a estabilidade exige **3 anos** de efetivo exercício **e** aprovação na **avaliação especial de desempenho** por comissão (CF, art. 41, § 4º); (5) o temporário (art. 37, IX) **não** ocupa cargo nem emprego: exerce **função**.',
      },
    ],
    fontes: [CF, L8112, L12550, 'Lei 8.429/1992, art. 2º — https://www.planalto.gov.br/ccivil_03/leis/l8429.htm'],
    atualizadoEm: ATUALIZADO,
  },
];
