import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Direito Penal: parte geral, crimes contra a administração pública
 * e crimes do médico, leis penais especiais
 * ------------------------------------------------------------------ */

export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- dp-parte-geral ---------- */
  {
    id: 'dp-parte-geral-q01',
    temaId: 'dp-parte-geral',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'O laudo de exame de sanidade mental conclui que o acusado, por doença mental, era, ao tempo da ação, inteiramente incapaz de entender o caráter ilícito do fato. Segundo o Código Penal, o acusado:',
    alternativas: [
      'terá a pena reduzida de um a dois terços.',
      'terá a pena reduzida de um sexto a um terço.',
      'é isento de pena, sujeitando-se a medida de segurança.',
      'responde normalmente, porque a doença mental não interfere na culpabilidade.',
      'responde apenas a título de culpa, se houver previsão de crime culposo.',
    ],
    correta: 2,
    comentario:
      'A incapacidade inteira de entender o caráter ilícito do fato, por doença mental, torna o agente inimputável: é isento de pena (art. 26, caput) e recebe medida de segurança (art. 97). A redução de 1/3 a 2/3 é do semi-imputável (parágrafo único). A de 1/6 a 1/3 é da participação de menor importância. A doença mental afeta, sim, a culpabilidade, e não converte o crime em culposo.',
    fundamento: 'CP, art. 26, caput, e art. 97',
  },
  {
    id: 'dp-parte-geral-q02',
    temaId: 'dp-parte-geral',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'Sobre a embriaguez no Código Penal, assinale a alternativa correta.',
    alternativas: [
      'A embriaguez completa, proveniente de caso fortuito ou força maior, que torna o agente inteiramente incapaz de entender o caráter ilícito do fato, isenta de pena.',
      'A embriaguez voluntária completa isenta de pena, pois o agente perde a capacidade de entendimento.',
      'A embriaguez culposa reduz a pena de um a dois terços.',
      'A emoção e a paixão excluem a imputabilidade penal quando intensas.',
      'A embriaguez incompleta proveniente de caso fortuito sempre isenta de pena.',
    ],
    correta: 0,
    comentario:
      'Só a embriaguez completa por caso fortuito ou força maior, com inteira incapacidade, isenta de pena (art. 28, § 1º). A voluntária e a culposa não excluem a imputabilidade (art. 28, II) e não geram redução. Emoção e paixão também não a excluem (art. 28, I). A embriaguez fortuita incompleta, sem a plena capacidade, só reduz a pena de 1/3 a 2/3 (art. 28, § 2º).',
    fundamento: 'CP, art. 28, I, II e §§ 1º e 2º',
  },
  {
    id: 'dp-parte-geral-q03',
    temaId: 'dp-parte-geral',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Em 10 de março, “A” disparou contra “B”, que morreu no hospital em 25 de março. Em 20 de março, entrou em vigor lei que aumentou a pena do crime praticado. Assinalar a alternativa que indica a lei aplicável e o fundamento.',
    alternativas: [
      'A lei nova, porque o crime se consumou com a morte, em 25 de março.',
      'A lei nova, porque a lei penal mais grave tem aplicação imediata.',
      'A lei que o juiz considerar mais adequada à gravidade do fato.',
      'A lei vigente na data da sentença condenatória.',
      'A lei vigente em 10 de março, porque se considera praticado o crime no momento da ação, ainda que outro seja o momento do resultado.',
    ],
    correta: 4,
    comentario:
      'O CP adota a teoria da atividade: o crime é praticado no momento da ação ou omissão, ainda que o resultado ocorra depois (art. 4º). A lei posterior mais grave não retroage; só retroage a que de qualquer modo favorece o agente (art. 2º, parágrafo único). As demais alternativas usam o momento do resultado, a aplicação imediata da lei mais grave ou critérios sem previsão legal.',
    fundamento: 'CP, arts. 2º, parágrafo único, e 4º',
  },
  {
    id: 'dp-parte-geral-q04',
    temaId: 'dp-parte-geral',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Querendo matar a vítima, o agente coloca veneno em sua bebida. Arrependido, leva-a imediatamente ao pronto-socorro, onde a lavagem gástrica impede a morte; resta apenas lesão corporal leve. O agente:',
    alternativas: [
      'responde por tentativa de homicídio, com pena reduzida de um a dois terços.',
      'responde apenas pelos atos já praticados, em razão do arrependimento eficaz.',
      'tem a pena do homicídio reduzida de um a dois terços pelo arrependimento posterior.',
      'não responde por crime algum, por se tratar de crime impossível.',
      'é isento de qualquer pena, pois evitou o resultado voluntariamente.',
    ],
    correta: 1,
    comentario:
      'Quem voluntariamente impede que o resultado se produza responde só pelos atos já praticados (art. 15, arrependimento eficaz): aqui, a lesão corporal. Não há tentativa, porque a não consumação não decorreu de circunstância alheia à vontade (art. 14, II). O arrependimento posterior (art. 16) pressupõe crime sem violência e reparação do dano. O meio era eficaz, logo não há crime impossível. E os atos praticados continuam puníveis.',
    fundamento: 'CP, arts. 14, II, 15 e 16',
  },
  {
    id: 'dp-parte-geral-q05',
    temaId: 'dp-parte-geral',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'Quanto ao estado de necessidade, conforme o Código Penal, é correto afirmar que',
    alternativas: [
      'exige a existência de injusta agressão, atual ou iminente.',
      'pode ser alegado diante de perigo futuro, desde que provável.',
      'pode ser invocado por quem provocou o perigo por sua vontade.',
      'não pode ser alegado por quem tinha o dever legal de enfrentar o perigo.',
      'exclui o crime mesmo quando era razoável exigir o sacrifício do direito ameaçado.',
    ],
    correta: 3,
    comentario:
      'O art. 24, § 1º, veda o estado de necessidade a quem tinha o dever legal de enfrentar o perigo. A injusta agressão é requisito da legítima defesa (art. 25). O perigo deve ser atual e não provocado pela vontade do agente (art. 24, caput). Se era razoável exigir o sacrifício, não há excludente: a pena pode apenas ser reduzida de 1/3 a 2/3 (art. 24, § 2º).',
    fundamento: 'CP, art. 24, caput e §§ 1º e 2º',
  },
  {
    id: 'dp-parte-geral-q06',
    temaId: 'dp-parte-geral',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Paciente inconsciente, em iminente perigo de vida, é submetido a cirurgia de urgência sem que fosse possível obter o consentimento dele ou do representante legal. De acordo com o Código Penal, a intervenção:',
    alternativas: [
      'não configura constrangimento ilegal, por expressa previsão legal.',
      'configura constrangimento ilegal, com pena reduzida.',
      'configura lesão corporal culposa.',
      'só é lícita se houver autorização judicial prévia.',
      'configura crime, mas o médico é isento de pena por erro de proibição.',
    ],
    correta: 0,
    comentario:
      'O art. 146, § 3º, I, exclui do constrangimento ilegal a intervenção médica ou cirúrgica sem o consentimento do paciente ou do representante legal, se justificada por iminente perigo de vida. Não há crime, logo não se fala em pena reduzida, lesão culposa ou erro de proibição. A lei não exige autorização judicial.',
    fundamento: 'CP, art. 146, § 3º, I',
  },
  {
    id: 'dp-parte-geral-q07',
    temaId: 'dp-parte-geral',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'A perícia conclui que o réu, por perturbação da saúde mental, não era inteiramente capaz de determinar-se de acordo com o entendimento do caráter ilícito do fato e necessita de especial tratamento curativo. Nessa situação, o juiz',
    alternativas: [
      'deve absolvê-lo e aplicar-lhe medida de segurança por tempo indeterminado, sem prazo mínimo.',
      'deve isentá-lo de pena, pois basta a capacidade parcial de autodeterminação para afastar a culpabilidade.',
      'deve condená-lo, com pena reduzida de um a dois terços, e pode substituir a pena privativa de liberdade por internação ou tratamento ambulatorial, pelo prazo mínimo de um a três anos.',
      'deve condená-lo com redução de um sexto a um terço da pena, vedada a substituição por medida de segurança.',
      'deve aplicar a pena integral, pois a perturbação da saúde mental não é doença mental.',
    ],
    correta: 2,
    comentario:
      'O réu é semi-imputável (art. 26, parágrafo único): é condenado, com pena reduzida de 1/3 a 2/3. Precisando de especial tratamento curativo, a pena privativa de liberdade pode ser substituída por internação ou tratamento ambulatorial, com prazo mínimo de 1 a 3 anos (art. 98). A absolvição com medida de segurança é para o inimputável (art. 26, caput). A fração de 1/6 a 1/3 não se aplica. A perturbação da saúde mental está expressamente prevista no parágrafo único.',
    fundamento: 'CP, art. 26, parágrafo único, e art. 98',
  },
  {
    id: 'dp-parte-geral-q08',
    temaId: 'dp-parte-geral',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Segundo o Código Penal, a internação ou o tratamento ambulatorial aplicados como medida de segurança duram por tempo indeterminado, enquanto não averiguada, mediante perícia médica, a cessação da periculosidade, e o prazo mínimo deve ser de um a três anos, com perícia ao termo desse prazo e repetida de ano em ano.',
    gabaritoCE: true,
    comentario:
      'Certo. É a redação do art. 97, §§ 1º e 2º: tempo indeterminado, prazo mínimo de 1 a 3 anos e perícia médica ao fim do prazo mínimo, repetida de ano em ano ou a qualquer tempo, se o juiz da execução determinar. Fora da letra do CP, a Súmula 527 do STJ limita a duração ao máximo da pena abstratamente cominada.',
    fundamento: 'CP, art. 97, §§ 1º e 2º',
  },
  {
    id: 'dp-parte-geral-q09',
    temaId: 'dp-parte-geral',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O erro sobre a ilicitude do fato, ainda que inevitável, apenas diminui a pena de um sexto a um terço, pois o desconhecimento da lei é inescusável.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 21 diferencia: o erro sobre a ilicitude inevitável isenta de pena; só o evitável permite diminuí-la de 1/6 a 1/3. O desconhecimento da lei é inescusável, mas isso não se confunde com o erro sobre a ilicitude do fato.',
    fundamento: 'CP, art. 21',
  },
  {
    id: 'dp-parte-geral-q10',
    temaId: 'dp-parte-geral',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Médico plantonista que, podendo agir, deixa deliberadamente de atender paciente internado sob seus cuidados pode responder pelo resultado morte, porque a omissão é penalmente relevante quando o omitente devia e podia agir para evitá-lo, e o dever de agir incumbe a quem assumiu a responsabilidade de impedir o resultado.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 13, § 2º, torna relevante a omissão de quem devia e podia agir. O dever incumbe a quem tem por lei obrigação de cuidado, proteção ou vigilância, a quem de outra forma assumiu a responsabilidade de impedir o resultado e a quem criou o risco. O plantonista responsável pelo paciente é garantidor e responde pelo resultado (omissão imprópria), não só por omissão de socorro.',
    fundamento: 'CP, art. 13, § 2º',
  },

  /* ---------- dp-crimes-adm-publica ---------- */
  {
    id: 'dp-crimes-adm-publica-q01',
    temaId: 'dp-crimes-adm-publica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Médico de hospital público condiciona a realização de cirurgia, que deveria ser feita gratuitamente pelo SUS, ao pagamento de R$ 2.000,00 pelo paciente, impondo a exigência como única forma de ser operado. O médico pratica o crime de:',
    alternativas: ['corrupção passiva.', 'concussão.', 'prevaricação.', 'peculato.', 'corrupção ativa.'],
    correta: 1,
    comentario:
      'O núcleo “exigir” vantagem indevida em razão da função caracteriza a concussão (art. 316), com pena de reclusão de 2 a 12 anos e multa. Na corrupção passiva, o funcionário solicita, recebe ou aceita promessa (art. 317). A prevaricação visa a interesse ou sentimento pessoal (art. 319). O peculato envolve apropriação ou desvio de bem (art. 312). A corrupção ativa é crime do particular (art. 333).',
    fundamento: 'CP, art. 316',
  },
  {
    id: 'dp-crimes-adm-publica-q02',
    temaId: 'dp-crimes-adm-publica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Médico contratado por clínica privada conveniada ao SUS atende pacientes do SUS no ambulatório da clínica. Segundo o art. 327 do Código Penal e a jurisprudência do STF, para os efeitos penais, ele é:',
    alternativas: [
      'particular, pois só é funcionário público quem ocupa cargo efetivo.',
      'particular, pois não recebe remuneração diretamente dos cofres públicos.',
      'funcionário público apenas se ocupar cargo em comissão.',
      'equiparado a funcionário público, pois trabalha para empresa conveniada para a execução de atividade típica da Administração Pública.',
      'particular, pois a assistência à saúde não é atividade típica da Administração.',
    ],
    correta: 3,
    comentario:
      'O art. 327, § 1º, equipara a funcionário público quem trabalha para empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da Administração Pública. O STF aplica a regra ao médico que atende pelo SUS em hospital privado conveniado (HC 97.710 e RHC 90.523, 2ª Turma), pois a saúde é dever do Estado (CF, art. 196). O caput dispensa cargo efetivo e remuneração direta (“embora transitoriamente ou sem remuneração”). O cargo em comissão só aumenta a pena em um terço (§ 2º).',
    fundamento: 'CP, art. 327, caput e § 1º; STF, HC 97.710',
  },
  {
    id: 'dp-crimes-adm-publica-q03',
    temaId: 'dp-crimes-adm-publica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Hospital privado exige do acompanhante de paciente em situação de emergência a assinatura de nota promissória como condição para iniciar o atendimento. Assinalar a alternativa que indica o tipo penal correspondente.',
    alternativas: [
      'Omissão de socorro (art. 135 do CP).',
      'Constrangimento ilegal (art. 146 do CP).',
      'Extorsão (art. 158 do CP).',
      'Exercício arbitrário das próprias razões (art. 345 do CP).',
      'Condicionamento de atendimento médico-hospitalar emergencial (art. 135-A do CP).',
    ],
    correta: 4,
    comentario:
      'O art. 135-A pune quem exige cheque-caução, nota promissória ou qualquer garantia, bem como o preenchimento prévio de formulários administrativos, como condição para o atendimento médico-hospitalar emergencial. A pena é de detenção de 3 meses a 1 ano e multa. É tipo específico, que prevalece sobre a omissão de socorro e o constrangimento ilegal.',
    fundamento: 'CP, art. 135-A',
  },
  {
    id: 'dp-crimes-adm-publica-q04',
    temaId: 'dp-crimes-adm-publica',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Servidor responsável pelo almoxarifado de uma UPA deixa, por descuido, a farmácia destrancada, e um colega subtrai medicamentos. O servidor descuidado repara integralmente o prejuízo antes da sentença irrecorrível. Quanto a ele, é correto afirmar:',
    alternativas: [
      'Está extinta a punibilidade, pois a reparação do dano no peculato culposo, se precede à sentença irrecorrível, extingue a punibilidade.',
      'Responde por peculato doloso, com pena reduzida de metade.',
      'Responde por peculato culposo, com pena reduzida de um a dois terços pelo arrependimento posterior.',
      'Responde por peculato-furto, pois concorreu para a subtração.',
      'A reparação do dano é irrelevante nos crimes contra a administração pública.',
    ],
    correta: 0,
    comentario:
      'O servidor concorreu culposamente para o crime de outrem: peculato culposo (art. 312, § 2º). A reparação do dano antes da sentença irrecorrível extingue a punibilidade; depois dela, reduz de metade a pena imposta (§ 3º). O peculato-furto (§ 1º) é doloso. O arrependimento posterior é regra geral que cede à específica do § 3º.',
    fundamento: 'CP, art. 312, §§ 2º e 3º',
  },
  {
    id: 'dp-crimes-adm-publica-q05',
    temaId: 'dp-crimes-adm-publica',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Médico, no exercício da profissão, fornece atestado falso a um amigo para justificar faltas ao trabalho, cobrando R$ 200,00 pelo documento. Considerando o Código Penal, o médico',
    alternativas: [
      'comete falsidade ideológica, punida com reclusão de um a cinco anos e multa.',
      'comete certidão ou atestado ideologicamente falso, punido com detenção de dois meses a um ano.',
      'comete falsidade de atestado médico, punida com detenção de um mês a um ano, aplicando-se também multa por ter agido com fim de lucro.',
      'não comete crime, pois o atestado médico só é falso se o paciente nunca tiver sido examinado.',
      'comete falsidade de atestado médico apenas porque cobrou, já que o tipo exige o fim de lucro.',
    ],
    correta: 2,
    comentario:
      'O art. 302 pune o médico que, no exercício da profissão, dá atestado falso: detenção de 1 mês a 1 ano. Se o crime é cometido com fim de lucro, aplica-se também multa (parágrafo único). O lucro não é elementar, apenas acrescenta a multa. O art. 299 é a falsidade ideológica genérica, e o art. 301 exige atestação em razão de função pública. Os dois cedem ao tipo específico.',
    fundamento: 'CP, art. 302 e parágrafo único',
  },
  {
    id: 'dp-crimes-adm-publica-q06',
    temaId: 'dp-crimes-adm-publica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'O médico que deixa de denunciar à autoridade pública doença cuja notificação é compulsória',
    alternativas: [
      'comete apenas infração administrativa, sem repercussão penal.',
      'comete o crime de omissão de notificação de doença, punido com detenção de seis meses a dois anos e multa.',
      'comete crime comum, que pode ser praticado por qualquer profissional de saúde.',
      'comete violação do segredo profissional.',
      'comete prevaricação, desde que seja servidor público.',
    ],
    correta: 1,
    comentario:
      'O art. 269 tipifica a omissão de notificação de doença: “Deixar o médico de denunciar à autoridade pública doença cuja notificação é compulsória”, com detenção de 6 meses a 2 anos e multa. É crime próprio do médico, que não depende de vínculo público. Notificar doença compulsória é dever legal, não violação de segredo.',
    fundamento: 'CP, art. 269',
  },
  {
    id: 'dp-crimes-adm-publica-q07',
    temaId: 'dp-crimes-adm-publica',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'Chefe do serviço de emergência de hospital municipal descobre que um médico subordinado abandonou plantões e, por pena do colega, que passa por dificuldades pessoais, deixa de instaurar qualquer providência e não comunica o fato a quem teria competência para apurá-lo. A conduta do chefe caracteriza',
    alternativas: [
      'prevaricação.',
      'corrupção passiva privilegiada.',
      'advocacia administrativa.',
      'condescendência criminosa.',
      'mera falta disciplinar, sem relevância penal.',
    ],
    correta: 3,
    comentario:
      'O art. 320 pune o funcionário que deixa, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo ou, sem competência, não leva o fato à autoridade competente: condescendência criminosa, com detenção de 15 dias a 1 mês ou multa. A prevaricação genérica (art. 319) cede ao tipo específico. A corrupção privilegiada (art. 317, § 2º) exige ceder a pedido ou influência de outrem.',
    fundamento: 'CP, art. 320',
  },
  {
    id: 'dp-crimes-adm-publica-q08',
    temaId: 'dp-crimes-adm-publica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O crime de violação do segredo profissional, praticado pelo médico que revela sem justa causa segredo de paciente, é de ação penal pública incondicionada.',
    gabaritoCE: false,
    comentario:
      'Errado. O parágrafo único do art. 154 determina que “somente se procede mediante representação”. A ação é pública condicionada à representação do ofendido.',
    fundamento: 'CP, art. 154, parágrafo único',
  },
  {
    id: 'dp-crimes-adm-publica-q09',
    temaId: 'dp-crimes-adm-publica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No crime de omissão de socorro, a pena é aumentada de metade se da omissão resulta lesão corporal de natureza grave, e triplicada se resulta a morte.',
    gabaritoCE: true,
    comentario:
      'Certo. É a redação literal do parágrafo único do art. 135. Não confunda com o art. 135-A, cuja pena aumenta até o dobro (lesão grave) e até o triplo (morte).',
    fundamento: 'CP, art. 135, parágrafo único',
  },
  {
    id: 'dp-crimes-adm-publica-q10',
    temaId: 'dp-crimes-adm-publica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Considerando os núcleos do tipo do art. 333 do Código Penal, o particular que, diante da exigência de vantagem indevida feita por funcionário público, apenas entrega o valor exigido comete o crime de corrupção ativa.',
    gabaritoCE: false,
    comentario:
      'Errado. Os núcleos da corrupção ativa são “oferecer ou prometer” vantagem indevida (art. 333); o verbo “dar” não está no tipo. Quem apenas cede à exigência não ofereceu nem prometeu nada: é vítima da concussão praticada pelo funcionário (art. 316), que “exige” a vantagem.',
    fundamento: 'CP, arts. 316 e 333',
  },

  /* ---------- dp-leis-especiais ---------- */
  {
    id: 'dp-leis-especiais-q01',
    temaId: 'dp-leis-especiais',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Segundo o art. 306, § 1º, I, do Código de Trânsito Brasileiro, a condução de veículo com capacidade psicomotora alterada pela influência de álcool é constatada por concentração:',
    alternativas: [
      'de qualquer quantidade de álcool por litro de sangue ou de ar alveolar.',
      'igual ou superior a 2 decigramas de álcool por litro de sangue ou igual ou superior a 0,1 miligrama por litro de ar alveolar.',
      'igual ou superior a 0,3 decigrama de álcool por litro de sangue ou igual ou superior a 6 miligramas por litro de ar alveolar.',
      'superior a 8 decigramas de álcool por litro de sangue ou superior a 0,4 miligrama por litro de ar alveolar.',
      'igual ou superior a 6 decigramas de álcool por litro de sangue ou igual ou superior a 0,3 miligrama por litro de ar alveolar.',
    ],
    correta: 4,
    comentario:
      'O art. 306, § 1º, I, fixa ≥ 6 dg de álcool por litro de sangue ou ≥ 0,3 mg por litro de ar alveolar. A alternativa C inverte os números. “Qualquer concentração” é a regra da infração administrativa (art. 276), não do crime. Os demais índices não estão na lei. O crime também pode ser constatado por sinais de alteração psicomotora (inciso II).',
    fundamento: 'CTB, art. 306, § 1º, I',
  },
  {
    id: 'dp-leis-especiais-q02',
    temaId: 'dp-leis-especiais',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'De acordo com a Lei 13.869/2019 (abuso de autoridade), é correto afirmar que',
    alternativas: [
      'as condutas só constituem crime quando praticadas com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.',
      'os crimes admitem a modalidade culposa quando o agente atua com negligência.',
      'a divergência na interpretação de lei configura abuso de autoridade quando prejudica o investigado.',
      'os crimes são de ação penal pública condicionada à representação do ofendido.',
      'somente servidores ocupantes de cargo efetivo podem ser sujeitos ativos.',
    ],
    correta: 0,
    comentario:
      'O art. 1º, § 1º, exige a finalidade específica: prejudicar outrem, beneficiar a si ou a terceiro, ou mero capricho ou satisfação pessoal. Não há forma culposa. A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso (§ 2º). A ação é pública incondicionada (art. 3º). O sujeito ativo é qualquer agente público, servidor ou não (art. 2º).',
    fundamento: 'Lei 13.869/2019, arts. 1º, §§ 1º e 2º, 2º e 3º',
  },
  {
    id: 'dp-leis-especiais-q03',
    temaId: 'dp-leis-especiais',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Com a redação dada pela Lei 14.843/2024 ao art. 112, § 1º, da Lei de Execução Penal, a progressão de regime exige que o apenado:',
    alternativas: [
      'cumpra o tempo de pena exigido, sendo vedada a realização de exame criminológico.',
      'seja submetido a exame criminológico apenas se condenado por crime hediondo.',
      'ostente boa conduta carcerária, comprovada pelo diretor do estabelecimento, e apresente os resultados do exame criminológico.',
      'seja submetido a exame criminológico somente se o juiz o determinar, de forma fundamentada.',
      'apresente exame criminológico apenas na progressão para o regime aberto.',
    ],
    correta: 2,
    comentario:
      'Pela redação da Lei 14.843/2024, o apenado só tem direito à progressão se ostentar boa conduta carcerária, comprovada pelo diretor, e pelos resultados do exame criminológico, respeitadas as normas que vedam a progressão (art. 112, § 1º). A lei não restringe a exigência aos hediondos nem ao regime aberto, embora o art. 114, II, também cite o exame para o ingresso no aberto. A antiga regra do exame só por decisão motivada (Súmula 439 do STJ) segue valendo para crimes anteriores à lei, que o STJ considera mais gravosa e irretroativa.',
    fundamento: 'Lei 7.210/1984, art. 112, § 1º (redação da Lei 14.843/2024)',
  },
  {
    id: 'dp-leis-especiais-q04',
    temaId: 'dp-leis-especiais',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'Sobre a prova pericial na Lei 11.343/2006 (Lei de Drogas), assinale a alternativa correta.',
    alternativas: [
      'A lavratura do auto de prisão em flagrante depende do laudo toxicológico definitivo.',
      'O perito que subscreve o laudo de constatação fica impedido de participar do laudo definitivo.',
      'O laudo de constatação só pode ser firmado por perito oficial, sem exceção.',
      'Para a lavratura do auto de prisão em flagrante e o estabelecimento da materialidade, é suficiente o laudo de constatação da natureza e quantidade da droga, firmado por perito oficial ou, na falta deste, por pessoa idônea.',
      'Recebido o auto de prisão em flagrante, o juiz determina a destruição de toda a droga apreendida, sem guarda de amostra.',
    ],
    correta: 3,
    comentario:
      'O art. 50, § 1º, admite o laudo de constatação para o flagrante e a materialidade, firmado por perito oficial ou, na falta, por pessoa idônea. O perito que o subscreve não fica impedido de participar do laudo definitivo (§ 2º). Na destruição, guarda-se a amostra necessária ao laudo definitivo (§ 3º).',
    fundamento: 'Lei 11.343/2006, art. 50, §§ 1º a 3º',
  },
  {
    id: 'dp-leis-especiais-q05',
    temaId: 'dp-leis-especiais',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Motorista que conduz veículo automotor sob a influência de álcool e pratica homicídio culposo na direção está sujeito, segundo o CTB, a:',
    alternativas: [
      'detenção de dois a quatro anos, aumentada de um terço à metade.',
      'reclusão de cinco a oito anos, e suspensão ou proibição do direito de se obter a permissão ou a habilitação.',
      'reclusão de dois a cinco anos, além da suspensão da habilitação.',
      'detenção de seis meses a três anos, multa e suspensão da habilitação.',
      'reclusão de quatro a doze anos, por se tratar de crime preterdoloso.',
    ],
    correta: 1,
    comentario:
      'O art. 302, § 3º, prevê reclusão de 5 a 8 anos e suspensão ou proibição da habilitação para o homicídio culposo de quem conduz sob influência de álcool ou outra substância psicoativa. Detenção de 2 a 4 anos é o caput. Reclusão de 2 a 5 anos é a lesão culposa grave com embriaguez (art. 303, § 2º). Detenção de 6 meses a 3 anos é o art. 306. Reclusão de 4 a 12 anos é a lesão seguida de morte do CP.',
    fundamento: 'CTB, art. 302, § 3º',
  },
  {
    id: 'dp-leis-especiais-q06',
    temaId: 'dp-leis-especiais',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'Agente policial, após confronto, leva ao pronto-socorro pessoa já morta e, sob grave ameaça, obriga o médico plantonista a registrar a admissão para tratamento, com o fim de alterar o local e o momento do crime. Segundo a Lei 13.869/2019, a conduta',
    alternativas: [
      'não é abuso de autoridade, mas apenas fraude processual prevista no Código Penal.',
      'configura o crime de constranger o preso a exibir o corpo à curiosidade pública (art. 13).',
      'configura o crime de invasão de imóvel alheio sem determinação judicial (art. 22).',
      'só será punida se houver representação da família da vítima.',
      'configura o crime do art. 24, punido com detenção de um a quatro anos e multa, além da pena correspondente à violência.',
    ],
    correta: 4,
    comentario:
      'O art. 24 pune quem constrange, com violência ou grave ameaça, funcionário de instituição hospitalar a admitir para tratamento pessoa cujo óbito já ocorreu, para alterar local ou momento de crime, prejudicando sua apuração. A pena é de detenção de 1 a 4 anos e multa, além da pena da violência. Os arts. 13 e 22 descrevem outras condutas. A ação penal é pública incondicionada (art. 3º).',
    fundamento: 'Lei 13.869/2019, arts. 3º e 24',
  },
  {
    id: 'dp-leis-especiais-q07',
    temaId: 'dp-leis-especiais',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Segundo a Lei de Execução Penal, o condenado ao cumprimento de pena privativa de liberdade em regime fechado será submetido a exame criminológico, e o condenado em regime semiaberto poderá ser submetido a esse exame.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 8º da LEP torna o exame obrigatório no regime fechado (“será submetido”) e facultativo no semiaberto (“poderá ser submetido”, parágrafo único), para fins de classificação e individualização da execução.',
    fundamento: 'Lei 7.210/1984, art. 8º e parágrafo único',
  },
  {
    id: 'dp-leis-especiais-q08',
    temaId: 'dp-leis-especiais',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A constatação do crime de embriaguez ao volante depende exclusivamente de teste em etilômetro ou de exame de sangue, sendo vedado o uso de prova testemunhal ou de vídeo.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 306, § 1º, II, admite a constatação por sinais de alteração da capacidade psicomotora. O § 2º permite teste de alcoolemia ou toxicológico, exame clínico, perícia, vídeo, prova testemunhal ou outros meios admitidos em direito, observado o direito à contraprova.',
    fundamento: 'CTB, art. 306, §§ 1º, II, e 2º',
  },
  {
    id: 'dp-leis-especiais-q09',
    temaId: 'dp-leis-especiais',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Comete crime previsto na Lei de Drogas o médico que, culposamente, prescreve droga a paciente que dela não necessita ou em dose excessiva, devendo o juiz comunicar a condenação ao conselho federal da categoria profissional.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 38 da Lei 11.343/2006 pune com detenção de 6 meses a 2 anos e multa quem prescreve ou ministra, culposamente, drogas sem que delas necessite o paciente, ou em doses excessivas ou em desacordo com a norma. O parágrafo único manda comunicar a condenação ao Conselho Federal da categoria.',
    fundamento: 'Lei 11.343/2006, art. 38 e parágrafo único',
  },
  {
    id: 'dp-leis-especiais-q10',
    temaId: 'dp-leis-especiais',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Na Lei 13.869/2019, a perda do cargo é efeito automático de toda condenação por crime de abuso de autoridade, dispensando declaração motivada na sentença.',
    gabaritoCE: false,
    comentario:
      'Errado. A inabilitação de 1 a 5 anos e a perda do cargo, mandato ou função dependem de reincidência em crime de abuso de autoridade. Esses efeitos não são automáticos e devem ser declarados motivadamente na sentença (art. 4º, parágrafo único).',
    fundamento: 'Lei 13.869/2019, art. 4º, II e III e parágrafo único',
  },
];
