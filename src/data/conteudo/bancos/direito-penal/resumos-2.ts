import type { ResumoTema } from '../../../types';
import {
  ADI_6298,
  ATUALIZADO,
  CP,
  CPP,
  DROGAS,
  HEDIONDOS,
  JECRIM,
  L15358,
  L15438,
  SUMULA_145,
  TEMPORARIA,
} from './fontes';

export const RESUMOS_2: ResumoTema[] = [
  /* ---------- dpp-inquerito-acao ---------- */
  {
    temaId: 'dpp-inquerito-acao',
    titulo: 'Inquérito policial e ação penal',
    resumo:
      'A banca cobra as características do inquérito (escrito, sigiloso, dispensável, indisponível pela autoridade policial), as formas de instauração, os prazos de 10 e 30 dias, o arquivamento do art. 28 e as espécies de ação penal com seus prazos de decadência e de denúncia.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **inquérito policial** é o procedimento administrativo da **polícia judiciária** para apurar a infração penal e sua autoria (CPP, art. 4º). Serve de base à denúncia ou queixa e a acompanha quando for usado (art. 12), mas é **dispensável**: o MP dispensa o inquérito se a representação já traz elementos suficientes (art. 39, § 5º).\n\nLogo que souber da infração, a autoridade policial deve **ir ao local** e providenciar que não se alterem o estado e a conservação das coisas **até a chegada dos peritos criminais**; apreender os objetos **após liberados pelos peritos**; e determinar, se for o caso, o **exame de corpo de delito** e outras perícias (art. 6º, I, II e VII).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Características e regras do inquérito',
          colunas: ['Característica', 'Base no CPP', 'O que cai'],
          linhas: [
            ['Escrito', 'Art. 9º', 'Todas as peças reduzidas a escrito num só processado'],
            ['Sigiloso', 'Art. 20', 'Sigilo necessário à elucidação do fato ou exigido pelo interesse da sociedade'],
            ['Indisponível para a polícia', 'Art. 17', 'A autoridade policial **não pode mandar arquivar** os autos'],
            ['Discricionário nas diligências', 'Art. 14', 'Ofendido e indiciado podem requerer diligências, realizadas ou não a juízo da autoridade'],
            ['Prazo (regra geral)', 'Art. 10', '**10 dias** se preso (contados da execução da prisão); **30 dias** se solto, com ou sem fiança'],
            ['Prazo na Lei de Drogas', 'Lei 11.343/2006, art. 51', '30 dias preso e 90 dias solto, duplicáveis pelo juiz'],
            ['Novas provas após arquivamento', 'Art. 18', 'A autoridade policial pode fazer novas pesquisas se tiver notícia de outras provas'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Instauração em crime de ação pública** (art. 5º): **de ofício**; por **requisição** do juiz ou do MP; ou a **requerimento** do ofendido. Qualquer pessoa do povo pode comunicar a infração à autoridade (§ 3º, a chamada *delatio criminis*).',
          '**Ação pública condicionada**: o inquérito **não pode ser iniciado sem a representação** (art. 5º, § 4º).',
          '**Ação privada**: a autoridade só instaura inquérito **a requerimento de quem pode intentar a ação** (art. 5º, § 5º).',
          '**Arquivamento** (art. 28, redação da Lei 13.964/2019): ordenado o arquivamento, o MP comunica a **vítima, o investigado e a autoridade policial** e encaminha os autos à **instância de revisão ministerial** para homologação. A vítima que discordar pode, em **30 dias**, submeter a matéria à revisão (§ 1º). No julgamento das ADIs 6.298, 6.299, 6.300 e 6.305 (agosto de 2023), o **STF deu interpretação conforme** ao art. 28 e manteve o **controle judicial**: o MP **submete sua manifestação de arquivamento ao juiz competente** (e comunica vítima, investigado e autoridade policial), e o juiz, se verificar **patente ilegalidade ou teratologia**, também pode submeter a matéria à revisão da instância ministerial (§ 1º).',
          '**Acordo de não persecução penal** (art. 28-A): infração **sem violência ou grave ameaça**, pena mínima **inferior a 4 anos** e **confissão formal e circunstanciada**; não cabe, entre outros casos, em violência doméstica ou familiar.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Espécies de ação penal',
          colunas: ['Espécie', 'Quem promove', 'Exemplo ou regra'],
          linhas: [
            ['Pública incondicionada', 'MP, por **denúncia**', 'Regra geral (CP, art. 100); crimes em detrimento do patrimônio ou interesse da União, Estado ou Município são sempre de ação pública (CPP, art. 24, § 2º)'],
            ['Pública condicionada', 'MP, após **representação** do ofendido ou **requisição** do Ministro da Justiça', 'Violação de segredo profissional (CP, art. 154); lesões leves e culposas (Lei 9.099/1995, art. 88)'],
            ['Privada', 'Ofendido, por **queixa**', 'Só quando a lei expressamente a declara (CP, art. 100)'],
            ['Privada subsidiária da pública', 'Ofendido, se o MP **não age no prazo legal**', 'O MP pode aditar a queixa, repudiá-la e oferecer denúncia substitutiva (CPP, art. 29)'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Prazos que mais caem.** Decadência do direito de queixa ou de representação: **6 meses** contados do dia em que o ofendido **soube quem é o autor** (art. 38). Nos crimes de violência doméstica e familiar contra a mulher, o prazo passou a ser de **12 meses**, com o mesmo termo inicial (art. 38, § 2º, incluído pela Lei 15.438/2026, que fez a mesma mudança no art. 103 do CP e na Lei Maria da Penha, art. 16-A). A representação é **irretratável depois de oferecida a denúncia** (art. 25). Denúncia: **5 dias** com réu preso e **15 dias** com réu solto, contados do recebimento dos autos (art. 46). Morto o ofendido, o direito passa ao cônjuge, ascendente, descendente ou irmão (arts. 24, § 1º, e 31).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Quem arquiva?',
        enunciado:
          'O delegado conclui que o fato investigado é atípico e determina, por despacho, o arquivamento do inquérito. O ato é válido?',
        resolucao:
          'Não. A autoridade policial **não pode mandar arquivar** autos de inquérito (art. 17). Ela faz o relatório e remete os autos; quem promove o arquivamento é o **Ministério Público**, que, segundo o STF, submete sua manifestação ao juiz competente (art. 28).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) o prazo de **10 dias** do preso conta da **execução da prisão**; (2) a **representação** é retratável **só até o oferecimento** da denúncia; (3) o inquérito é **dispensável**, mas, se existir, acompanha a denúncia; (4) o prazo de decadência conta do conhecimento da **autoria**, não da data do fato.',
      },
    ],
    fontes: [CPP, CP, DROGAS, JECRIM, ADI_6298, L15438],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- dpp-prisoes ---------- */
  {
    temaId: 'dpp-prisoes',
    titulo: 'Prisões, medidas cautelares e liberdade provisória',
    resumo:
      'Cai a classificação do flagrante (art. 302), os prazos de 24 horas (comunicação do flagrante, nota de culpa e audiência de custódia), os requisitos da preventiva (arts. 311 a 316) e os prazos da temporária (5 + 5 dias; 30 + 30 nos hediondos).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Ninguém será preso senão **em flagrante delito** ou por **ordem escrita e fundamentada** do juiz competente, em decorrência de **prisão cautelar** ou de **condenação transitada em julgado** (CPP, art. 283). A prisão pode ser efetuada em qualquer dia e hora, respeitada a inviolabilidade do domicílio (§ 2º).\n\n**Qualquer do povo poderá** e as **autoridades policiais e seus agentes deverão** prender quem esteja em flagrante (art. 301): é o flagrante **facultativo** × **obrigatório**. Nas infrações **permanentes**, o flagrante dura enquanto não cessar a permanência (art. 303).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Espécies de flagrante (art. 302)',
          colunas: ['Inciso', 'Situação', 'Nome doutrinário'],
          linhas: [
            ['I', 'Está cometendo a infração', 'Próprio (real)'],
            ['II', 'Acaba de cometê-la', 'Próprio (real)'],
            ['III', 'É **perseguido, logo após**, em situação que faça presumir ser o autor', 'Impróprio (quase flagrante)'],
            ['IV', 'É **encontrado, logo depois**, com instrumentos, armas ou objetos que façam presumir ser o autor', 'Presumido (ficto)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Flagrante preparado**: “Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação” (**Súmula 145 do STF**). Diferente do **flagrante esperado**, em que a polícia apenas aguarda o crime, sem provocá-lo.',
          '**Auto de prisão em flagrante** (art. 304): ouvem-se o condutor, as testemunhas e o preso. Em até **24 horas**, o auto vai ao juiz (e à Defensoria, se o preso não indicar advogado), e o preso recebe a **nota de culpa** (art. 306, §§ 1º e 2º).',
          '**Audiência de custódia** (art. 310): em até **24 horas** da prisão. Desde a **Lei 15.358/2026**, a regra é a **videoconferência em tempo real**, com o preso, seu advogado ou defensor público e o MP (também no art. 3º-B, § 1º); o ato presencial fica para situações excepcionais de **força maior**, por decisão justificada do juiz (§ 13). A regra é questionada no STF (ADIs 7.952 e 7.956, entre outras), sem decisão até a conferência deste resumo. O juiz deve: **relaxar** a prisão ilegal; **converter** o flagrante em preventiva, se presentes os requisitos do art. 312 e insuficientes as cautelares diversas; ou conceder **liberdade provisória**, com ou sem fiança.',
          '**Trânsito**: não se impõe flagrante nem se exige fiança do condutor que presta pronto e integral socorro à vítima (CTB, art. 301).',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Preventiva × temporária',
          colunas: ['Aspecto', 'Preventiva (CPP, arts. 311 a 316)', 'Temporária (Lei 7.960/1989)'],
          linhas: [
            ['Quando', 'Investigação ou processo', 'Só na investigação (imprescindível ao inquérito)'],
            ['Quem pede', 'MP, querelante, assistente ou representação da autoridade policial; **sem decretação de ofício**', 'Representação da autoridade policial ou requerimento do MP'],
            ['Requisitos', 'Prova da existência do crime, indício suficiente de autoria e **perigo gerado pelo estado de liberdade** + garantia da ordem pública ou econômica, conveniência da instrução ou aplicação da lei penal (art. 312)', 'Hipóteses do art. 1º (rol de crimes graves)'],
            ['Cabimento principal', 'Crime doloso com pena máxima **superior a 4 anos**, reincidente em crime doloso, violência doméstica para garantir medidas protetivas, entre outros (art. 313)', '—'],
            ['Prazo', 'Sem prazo fixo; revisão **a cada 90 dias**, de ofício (art. 316, parágrafo único)', '**5 dias + 5**; nos hediondos, tortura, tráfico e terrorismo, **30 + 30** (Lei 8.072/1990, art. 2º, § 4º)'],
            ['Vedação', 'Não cabe se o fato foi praticado sob excludente de ilicitude (art. 314) nem para antecipar pena (art. 313, § 2º)', 'Findo o prazo do mandado, o preso é solto sem nova ordem (art. 2º, § 7º)'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'As **medidas cautelares diversas da prisão** (art. 319) incluem comparecimento periódico, proibição de frequentar lugares ou de contatar pessoas, recolhimento noturno, suspensão de função pública, monitoração eletrônica, fiança e a **internação provisória** do acusado de crime com violência ou grave ameaça **quando os peritos concluírem ser inimputável ou semi-imputável** e houver risco de reiteração (inciso VII). A preventiva só é decretada quando não couber substituí-la por outra cautelar (art. 282, § 6º).\n\n**Fiança**: a autoridade policial pode concedê-la quando a pena máxima **não for superior a 4 anos**; nos demais casos, quem decide é o juiz, em 48 horas (art. 322). São **inafiançáveis** racismo, tortura, tráfico, terrorismo, crimes hediondos e ação de grupos armados contra a ordem constitucional (art. 323), o que não impede a liberdade provisória sem fiança.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Classificando o flagrante',
        enunciado:
          'Após roubo a uma farmácia, a vítima aciona a polícia, que localiza o suspeito duas horas depois, a três quarteirões, com a arma e o dinheiro subtraído. Não houve perseguição. Que flagrante é esse?',
        resolucao:
          'É o **flagrante presumido** (art. 302, IV): o agente é **encontrado, logo depois**, com objetos que fazem presumir a autoria. Se tivesse havido **perseguição logo após** o crime, seria **impróprio** (inciso III).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) após a Lei 13.964/2019, o juiz **não decreta preventiva de ofício**, mas pode **revogá-la** de ofício (art. 316); (2) a temporária **não existe no processo**, só no inquérito; (3) “qualquer do povo **poderá**”, a polícia “**deverá**”; (4) a audiência de custódia é em **24 horas** e, desde 2026, por videoconferência como regra.',
      },
    ],
    fontes: [CPP, L15358, TEMPORARIA, HEDIONDOS, SUMULA_145],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- dpp-provas ---------- */
  {
    temaId: 'dpp-provas',
    titulo: 'Provas: corpo de delito, perícias, cadeia de custódia e lesão corporal',
    resumo:
      'É o tema que mais cai para perito: o art. 158 (exame indispensável, confissão não supre), o perito oficial e os dois peritos não oficiais (art. 159), o prazo de 10 dias do laudo (art. 160), o exame complementar de 30 dias (art. 168), as etapas da cadeia de custódia (arts. 158-A a 158-F) e as qualificadoras do art. 129 do CP.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O juiz forma sua convicção pela **livre apreciação da prova produzida em contraditório judicial** e não pode fundamentar a decisão **exclusivamente** nos elementos da investigação, **ressalvadas as provas cautelares, não repetíveis e antecipadas** (CPP, art. 155), como a maioria dos exames periciais. Provas **ilícitas** e, em regra, as derivadas são inadmissíveis (art. 157).\n\n**Quando a infração deixar vestígios, é indispensável o exame de corpo de delito, direto ou indireto, e a confissão do acusado não pode supri-lo** (art. 158). Há **prioridade** na violência doméstica contra a mulher e na violência contra criança, adolescente, idoso ou pessoa com deficiência. No exame **direto**, o perito examina o próprio vestígio; no **indireto**, conclui a partir de outros elementos, como prontuários. Se os vestígios **desapareceram**, a **prova testemunhal** pode suprir a falta (art. 167).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Perícias no CPP: o que o perito precisa saber de cor',
          colunas: ['Artigo', 'Regra'],
          linhas: [
            ['159, caput', 'Exame feito por **perito oficial**, portador de **diploma de curso superior**'],
            ['159, §§ 1º e 2º', 'Na falta de perito oficial: **2 pessoas idôneas**, com diploma superior, preferencialmente na área; prestam **compromisso**'],
            ['159, §§ 3º a 6º', 'MP, assistente de acusação, ofendido, querelante e acusado podem formular **quesitos** e indicar **assistente técnico**, que atua **após admitido pelo juiz** e **após a conclusão do laudo** oficial'],
            ['160 e 161', 'Laudo com descrição minuciosa e resposta aos quesitos, em **10 dias**, prorrogáveis em casos excepcionais a requerimento dos peritos; exame em **qualquer dia e hora**'],
            ['162', 'Autópsia **pelo menos 6 horas após o óbito**, salvo evidência dos sinais de morte; na morte violenta, o exame externo pode bastar'],
            ['163 e 164', 'Exumação em dia e hora marcados, com auto circunstanciado; cadáveres **sempre fotografados na posição em que encontrados**'],
            ['168', '**Exame complementar** de lesões se o primeiro foi incompleto; para o art. 129, § 1º, I, do CP, feito **logo que decorram 30 dias** da data do crime; pode ser suprido por prova testemunhal'],
            ['170', 'Perícia de laboratório: guardar **material suficiente** para nova perícia'],
            ['180 e 182', 'Divergência entre peritos: a autoridade nomeia um terceiro; o **juiz não fica adstrito ao laudo**'],
            ['279', 'Não podem ser peritos quem já depôs ou **opinou antes** sobre o objeto, os analfabetos e os **menores de 21 anos**'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Cadeia de custódia** (arts. 158-A a 158-F, Lei 13.964/2019): conjunto de procedimentos para **manter e documentar a história cronológica do vestígio**, rastreando posse e manuseio **do reconhecimento até o descarte**. Começa com a **preservação do local** ou com o procedimento em que se detecta o vestígio. **Vestígio** é todo objeto ou material bruto, **visível ou latente**, constatado ou recolhido, que se relaciona à infração penal. Quem reconhece um elemento de potencial interesse pericial **fica responsável por sua preservação**.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          '**Reconhecimento**: distinguir o elemento de potencial interesse pericial.',
          '**Isolamento**: evitar alteração do estado das coisas (ambiente imediato, mediato e relacionado).',
          '**Fixação**: descrição detalhada do vestígio como encontrado, com fotos, filmagens ou croqui; a descrição no laudo é **indispensável**.',
          '**Coleta**: recolher o vestígio respeitando suas características.',
          '**Acondicionamento**: embalagem **individualizada**, com data, hora e nome de quem coletou e acondicionou.',
          '**Transporte**: em condições adequadas, mantendo características e controle da posse.',
          '**Recebimento**: transferência formal da posse, documentada.',
          '**Processamento**: o exame pericial em si, formalizado em laudo.',
          '**Armazenamento**: guarda para processamento, contraperícia, descarte ou transporte, vinculada ao número do laudo.',
          '**Descarte**: liberação do vestígio conforme a lei e, quando pertinente, com autorização judicial.',
        ],
      },
      {
        tipo: 'texto',
        texto:
          'A coleta é feita **preferencialmente por perito oficial** (art. 158-C). Entrar em local isolado ou remover vestígio **antes da liberação pelo perito** é proibido e tipificado como **fraude processual** (§ 2º). Os recipientes têm **lacre com numeração individualizada** e só são abertos pelo perito que fará a análise ou, motivadamente, por pessoa autorizada; o **lacre rompido vai dentro do novo recipiente** (art. 158-D). Todo Instituto de Criminalística deve ter **central de custódia**, que registra quem acessa o vestígio, data e hora (art. 158-E); o material volta a ela após a perícia (art. 158-F).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Lesão corporal (CP, art. 129): a classificação que o laudo sustenta',
          colunas: ['Forma', 'Resultados (texto literal)', 'Pena'],
          linhas: [
            ['Leve (caput)', 'Ofender a integridade corporal ou a saúde de outrem', 'Detenção, 3 meses a 1 ano'],
            ['Grave (§ 1º)', 'I – incapacidade para as ocupações habituais, **por mais de trinta dias**; II – **perigo de vida**; III – **debilidade permanente** de membro, sentido ou função; IV – **aceleração de parto**', 'Reclusão, 1 a 5 anos'],
            ['Gravíssima (§ 2º)', 'I – incapacidade **permanente para o trabalho**; II – **enfermidade incurável**; III – **perda ou inutilização** do membro, sentido ou função; IV – **deformidade permanente**; V – **aborto**', 'Reclusão, 2 a 8 anos'],
            ['Seguida de morte (§ 3º)', 'Resulta morte, e as circunstâncias evidenciam que o agente **não quis o resultado nem assumiu o risco** de produzi-lo', 'Reclusão, 4 a 12 anos'],
            ['Culposa (§ 6º)', 'Lesão por imprudência, negligência ou imperícia', 'Detenção, 2 meses a 1 ano'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Exame complementar',
        enunciado:
          'Vítima de agressão fratura o antebraço, e o primeiro laudo não pode afirmar a duração da incapacidade. Como enquadrar a lesão no art. 129, § 1º, I?',
        resolucao:
          'Faz-se **exame complementar** logo que decorram **30 dias** da data do crime (CPP, art. 168, § 2º), para verificar se a incapacidade para as ocupações habituais passou de **trinta dias**. Sua falta pode ser suprida por **prova testemunhal** (§ 3º).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) **debilidade** permanente é lesão **grave**; **perda ou inutilização** é **gravíssima**; (2) **aceleração de parto** é grave, **aborto** é gravíssima; (3) **confissão não supre** o corpo de delito, mas a **prova testemunhal** supre se os vestígios desapareceram; (4) o assistente técnico atua **depois** do laudo oficial; (5) a fixação é a etapa em que a **descrição no laudo é indispensável**.',
      },
    ],
    fontes: [CPP, CP],
    atualizadoEm: ATUALIZADO,
  },
];
