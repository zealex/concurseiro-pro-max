import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Lei Maria da Penha e ECA (com Leis 13.431/2017 e 14.344/2022)
 * ------------------------------------------------------------------ */

export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- lg-maria-penha ---------- */
  {
    id: 'lg-maria-penha-q01',
    temaId: 'lg-maria-penha',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Durante consulta de planejamento reprodutivo, uma paciente relata que o companheiro a impede de usar anticoncepcional para obrigá-la a engravidar. Essa conduta está descrita expressamente, no art. 7º da Lei 11.340/2006, como forma de violência:',
    alternativas: ['física.', 'moral.', 'sexual.', 'vicária.', 'institucional.'],
    correta: 2,
    comentario:
      'O art. 7º, III, inclui na violência sexual a conduta que impeça a mulher de usar qualquer método contraceptivo ou que a force à gravidez. A física ofende a integridade ou a saúde corporal; a moral é calúnia, difamação ou injúria; a vicária é praticada contra filhos, parentes ou rede de apoio da mulher para atingi-la (inciso VI). “Violência institucional” não é uma das formas do art. 7º.',
    fundamento: 'Lei 11.340/2006, art. 7º, III',
  },
  {
    id: 'lg-maria-penha-q02',
    temaId: 'lg-maria-penha',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre o âmbito de aplicação da Lei Maria da Penha:\n\nI. A violência praticada em relação íntima de afeto só é abrangida se o agressor coabitar com a ofendida.\nII. As relações pessoais que configuram violência doméstica e familiar independem de orientação sexual.\nIII. A unidade doméstica abrange o espaço de convívio permanente de pessoas, com ou sem vínculo familiar, inclusive as esporadicamente agregadas.\nIV. A lei só se aplica quando ficar comprovado que a motivação do agressor foi exclusivamente de gênero.\n\nQuais estão corretas?',
    alternativas: ['Apenas I e II.', 'Apenas I e IV.', 'Apenas II e IV.', 'Apenas II, III e IV.', 'Apenas II e III.'],
    correta: 4,
    comentario:
      'II reproduz o parágrafo único do art. 5º e III, o inciso I. A I está errada: o inciso III do art. 5º dispensa a coabitação. A IV também: o art. 40-A manda aplicar a lei a todas as situações do art. 5º, independentemente da causa ou da motivação dos atos de violência e da condição do ofensor ou da ofendida.',
    fundamento: 'Lei 11.340/2006, art. 5º, I, III e parágrafo único; art. 40-A',
  },
  {
    id: 'lg-maria-penha-q03',
    temaId: 'lg-maria-penha',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado: 'Sobre as medidas protetivas de urgência da Lei 11.340/2006, é correto afirmar:',
    alternativas: [
      'Podem ser concedidas independentemente do registro de boletim de ocorrência e da existência de inquérito policial.',
      'Dependem da instauração prévia de inquérito policial e da tipificação penal da conduta.',
      'Só podem ser requeridas pelo Ministério Público, vedado o pedido direto da ofendida.',
      'Exigem audiência prévia das partes antes de serem concedidas, em respeito ao contraditório.',
      'Vigoram por prazo fixo e improrrogável, independentemente da persistência do risco.',
    ],
    correta: 0,
    comentario:
      'O art. 19, § 5º, diz que as medidas são concedidas independentemente da tipificação penal, de ação penal ou cível, de inquérito ou de boletim de ocorrência. Podem ser pedidas pela ofendida ou pelo MP (caput), concedidas de imediato sem audiência das partes (§ 1º) e vigoram enquanto persistir o risco (§ 6º).',
    fundamento: 'Lei 11.340/2006, art. 19, caput e §§ 1º, 5º e 6º',
  },
  {
    id: 'lg-maria-penha-q04',
    temaId: 'lg-maria-penha',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado: 'De acordo com o art. 9º da Lei Maria da Penha, a assistência à mulher em situação de violência doméstica e familiar:',
    alternativas: [
      'será prestada exclusivamente pelos Centros de Referência da Assistência Social, vedado o atendimento hospitalar sem ordem judicial.',
      'dependerá de prévio registro da ocorrência na delegacia para ter acesso aos serviços de saúde.',
      'será prestada pelo SUS sem prioridade, para não violar a igualdade no acesso.',
      'será prestada em caráter prioritário no SUS e no Susp e compreende, nos casos de violência sexual, contracepção de emergência e profilaxia de IST e HIV/aids.',
      'não gera ao agressor obrigação de ressarcir os custos do SUS, por se tratar de serviço universal e gratuito.',
    ],
    correta: 3,
    comentario:
      'O caput do art. 9º (redação da Lei 14.887/2024) prevê atendimento prioritário no SUS e no Susp, e o § 3º inclui contracepção de emergência e profilaxia de IST e HIV/aids. Não há exigência de B.O. para o atendimento. O § 4º obriga o agressor a ressarcir o SUS pelos custos, conforme a tabela SUS.',
    fundamento: 'Lei 11.340/2006, art. 9º, caput e §§ 3º e 4º',
  },
  {
    id: 'lg-maria-penha-q05',
    temaId: 'lg-maria-penha',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 3,
    enunciado:
      'Em relação à notificação compulsória da violência contra a mulher prevista na Lei 10.778/2003, assinalar a alternativa CORRETA.',
    alternativas: [
      'Restringe-se aos serviços públicos de saúde; os privados apenas podem notificar.',
      'Abrange os casos com indícios ou confirmação de violência contra a mulher atendida em serviços de saúde públicos e privados, que também devem ser comunicados à autoridade policial em 24 horas.',
      'Só é obrigatória quando a violência estiver confirmada por exame de corpo de delito.',
      'Alcança apenas a violência ocorrida na unidade doméstica, excluídas a praticada na comunidade e a perpetrada ou tolerada por agentes do Estado.',
      'Deve ser comunicada à autoridade policial no prazo de 48 horas, apenas para fins estatísticos.',
    ],
    correta: 1,
    comentario:
      'O art. 1º (redação da Lei 13.931/2019) torna objeto de notificação compulsória os casos com indícios ou confirmação de violência contra mulher atendida em serviços públicos e privados, e o § 4º manda comunicá-los à autoridade policial em 24 horas, para providências e fins estatísticos. Basta o indício (C errada). O § 2º abrange a violência na família, na comunidade e a praticada ou tolerada pelo Estado (D errada). A notificação em si tem caráter sigiloso perante as autoridades sanitárias (art. 3º).',
    fundamento: 'Lei 10.778/2003, art. 1º, caput, §§ 2º e 4º; art. 3º',
  },
  {
    id: 'lg-maria-penha-q06',
    temaId: 'lg-maria-penha',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Quanto ao crime de descumprimento de medidas protetivas de urgência (art. 24-A da Lei 11.340/2006), assinale a alternativa correta.',
    alternativas: [
      'A pena é de detenção, de 3 meses a 2 anos, admitida a transação penal.',
      'Só se configura se a medida tiver sido deferida por juiz com competência criminal.',
      'A pena é de reclusão, de 2 a 5 anos, e multa, e, em caso de prisão em flagrante, apenas a autoridade judicial pode conceder fiança.',
      'O delegado de polícia pode conceder fiança, desde que a pena máxima não ultrapasse 4 anos.',
      'A aplicação desse crime exclui a responsabilização por outras infrações praticadas no mesmo contexto.',
    ],
    correta: 2,
    comentario:
      'Desde a Lei 14.994/2024, a pena é de reclusão de 2 a 5 anos e multa. O § 1º diz que o crime independe da competência civil ou criminal do juiz; o § 2º reserva a fiança à autoridade judicial; o § 3º preserva outras sanções. A pena antiga, de detenção de 3 meses a 2 anos, não vigora mais, e a Lei 9.099 não se aplica (art. 41).',
    fundamento: 'Lei 11.340/2006, art. 24-A, caput e §§ 1º a 3º; art. 41',
  },
  {
    id: 'lg-maria-penha-q07',
    temaId: 'lg-maria-penha',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A Lei Maria da Penha considera violência vicária a violência praticada contra descendente, dependente, parente ou pessoa da rede de apoio da mulher, com vistas a atingi-la.',
    gabaritoCE: true,
    comentario:
      'Certo. O inciso VI do art. 7º, incluído pela Lei 15.384/2026, define a violência vicária como qualquer forma de violência praticada contra descendente, ascendente, dependente, enteado, parente, pessoa sob guarda ou responsabilidade direta da mulher ou pessoa de sua rede de apoio, com vistas a atingi-la.',
    fundamento: 'Lei 11.340/2006, art. 7º, VI',
  },
  {
    id: 'lg-maria-penha-q08',
    temaId: 'lg-maria-penha',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Homem é processado por crime praticado com violência doméstica e familiar contra a companheira. Segundo a Lei 11.340/2006, é correto afirmar que:',
    alternativas: [
      'não se aplica a Lei 9.099/1995, independentemente da pena prevista, e é vedada a substituição da pena que implique o pagamento isolado de multa.',
      'cabe transação penal, se o crime for de menor potencial ofensivo.',
      'admite-se a suspensão condicional do processo da Lei 9.099/1995, desde que a vítima concorde.',
      'o juiz pode substituir a pena pela entrega de cestas básicas a entidade assistencial.',
      'a Lei 9.099/1995 só é afastada se a pena máxima cominada ao crime for superior a 4 anos.',
    ],
    correta: 0,
    comentario:
      'O art. 41 afasta a Lei 9.099/1995 dos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena prevista. Por isso não cabem transação penal (B) nem suspensão condicional do processo (C), e o corte de 4 anos (E) não existe. O art. 17 veda penas de cesta básica ou outras prestações pecuniárias (D) e a substituição que implique pagamento isolado de multa.',
    fundamento: 'Lei 11.340/2006, arts. 17 e 41',
  },
  {
    id: 'lg-maria-penha-q09',
    temaId: 'lg-maria-penha',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'Em Município que não é sede de comarca, verifica-se risco atual à vida de mulher em situação de violência doméstica, e não há delegado de polícia disponível no momento da denúncia. Segundo o art. 12-C da Lei 11.340/2006, o afastamento imediato do agressor do lar:',
    alternativas: [
      'só pode ser determinado pelo juiz, que decidirá em até 48 horas após receber o expediente.',
      'pode ser determinado pelo Conselho Tutelar, se houver filhos menores no lar.',
      'pode ser determinado pelo Ministério Público, com comunicação ao juiz em até 48 horas.',
      'pode ser determinado pelo policial, devendo o juiz ser comunicado em até 24 horas para decidir, em igual prazo, sobre a manutenção ou a revogação da medida.',
      'pode ser determinado pelo policial, mas depende de ratificação pelo delegado da comarca vizinha em até 72 horas.',
    ],
    correta: 3,
    comentario:
      'O art. 12-C permite o afastamento pelo juiz (I); pelo delegado, se o Município não for sede de comarca (II); e pelo policial, se além disso não houver delegado disponível (III). Nos casos II e III, o juiz é comunicado em até 24 horas e decide em igual prazo, com ciência ao MP (§ 1º). O prazo de 48 horas é o do expediente das medidas protetivas (arts. 12, III, e 18). MP, Conselho Tutelar e ratificação por delegado não constam do artigo.',
    fundamento: 'Lei 11.340/2006, art. 12-C, I a III, e § 1º',
  },

  /* ---------- lg-eca ---------- */
  {
    id: 'lg-eca-q01',
    temaId: 'lg-eca',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Para os efeitos do Estatuto da Criança e do Adolescente, assinalar a alternativa CORRETA.',
    alternativas: [
      'Criança é a pessoa até 14 anos incompletos; adolescente, entre 14 e 18 anos.',
      'Criança é a pessoa até 12 anos de idade incompletos; adolescente, aquela entre 12 e 18 anos de idade.',
      'Criança é a pessoa até 12 anos completos; adolescente, entre 13 e 21 anos.',
      'Criança é a pessoa até 10 anos; adolescente, entre 10 e 19 anos, conforme critério da OMS.',
      'O ECA não distingue criança de adolescente, tratando ambos como “menores”.',
    ],
    correta: 1,
    comentario:
      'O art. 2º define criança como a pessoa até 12 anos incompletos e adolescente como aquela entre 12 e 18 anos. A faixa de 10 a 19 anos é critério epidemiológico da OMS, não do ECA. A aplicação entre 18 e 21 anos é excepcional, só nos casos expressos em lei (parágrafo único).',
    fundamento: 'Lei 8.069/1990, art. 2º',
  },
  {
    id: 'lg-eca-q02',
    temaId: 'lg-eca',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Médico de pronto-socorro atende lactente com equimoses em diferentes estágios e história incompatível com as lesões. Segundo o art. 13 do ECA, os casos de suspeita ou confirmação de castigo físico, de tratamento cruel ou degradante e de maus-tratos contra criança ou adolescente serão obrigatoriamente comunicados:',
    alternativas: [
      'ao juiz da Infância e da Juventude, somente após a confirmação diagnóstica.',
      'ao Ministério Público, desde que haja autorização dos pais ou responsável.',
      'à direção do hospital, a quem cabe decidir sobre a comunicação externa.',
      'ao Conselho Tutelar da respectiva localidade, sem prejuízo de outras providências legais.',
      'à Vigilância Epidemiológica, sendo vedada a comunicação a outros órgãos.',
    ],
    correta: 3,
    comentario:
      'O art. 13 manda comunicar ao Conselho Tutelar da respectiva localidade, já na suspeita, sem prejuízo de outras providências legais (como a notificação ao sistema de saúde e a comunicação à polícia). Não há exigência de confirmação nem de autorização dos responsáveis, que podem ser os próprios agressores.',
    fundamento: 'Lei 8.069/1990, art. 13, caput',
  },
  {
    id: 'lg-eca-q03',
    temaId: 'lg-eca',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'O médico que deixa de comunicar à autoridade competente caso de que tenha conhecimento envolvendo suspeita de maus-tratos contra criança incorre, segundo o art. 245 do ECA, em:',
    alternativas: [
      'infração administrativa punida com multa de 3 a 20 salários de referência, aplicada em dobro na reincidência.',
      'crime de omissão de socorro, punido com detenção de 1 a 6 meses.',
      'infração ética, exclusivamente, a ser apurada pelo Conselho Regional de Medicina.',
      'crime de tortura por omissão, punido com reclusão de 2 a 8 anos.',
      'nenhuma sanção, pois o dever de comunicar é apenas do diretor do estabelecimento.',
    ],
    correta: 0,
    comentario:
      'O art. 245 está entre as infrações administrativas do ECA e alcança o médico, o professor e o responsável por estabelecimento de saúde ou de ensino. A pena é multa de 3 a 20 salários de referência, em dobro na reincidência. Crime de omissão de comunicar existe, mas na Lei Henry Borel (art. 26), e não no art. 245.',
    fundamento: 'Lei 8.069/1990, art. 245',
  },
  {
    id: 'lg-eca-q04',
    temaId: 'lg-eca',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Nos termos da Lei 13.431/2017, a escuta especializada é:',
    alternativas: [
      'a oitiva da criança perante a autoridade judiciária, gravada em áudio e vídeo.',
      'o interrogatório do suposto autor da violência na presença da vítima.',
      'a perícia psicológica obrigatória realizada pelo Instituto Médico Legal.',
      'o depoimento prestado pela criança diretamente ao delegado, sem intermediação.',
      'o procedimento de entrevista sobre situação de violência com criança ou adolescente perante órgão da rede de proteção, limitado o relato estritamente ao necessário para o cumprimento de sua finalidade.',
    ],
    correta: 4,
    comentario:
      'A definição é do art. 7º: a escuta especializada ocorre na rede de proteção (saúde, assistência social, educação), com relato limitado ao necessário. A oitiva perante autoridade policial ou judiciária é o depoimento especial (art. 8º), gravado em áudio e vídeo (art. 12, VI). A criança deve ser resguardada de qualquer contato com o suposto autor (art. 9º).',
    fundamento: 'Lei 13.431/2017, arts. 7º, 8º e 9º',
  },
  {
    id: 'lg-eca-q05',
    temaId: 'lg-eca',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 3,
    enunciado: 'Segundo a Lei 13.431/2017, o depoimento especial seguirá o rito cautelar de antecipação de prova:',
    alternativas: [
      'em todos os casos envolvendo adolescentes com mais de 16 anos.',
      'somente quando houver requerimento expresso da defesa do investigado.',
      'quando a criança ou o adolescente tiver menos de 7 anos ou em caso de violência sexual.',
      'apenas nos casos de violência patrimonial e institucional.',
      'quando a vítima tiver menos de 12 anos, independentemente do tipo de violência.',
    ],
    correta: 2,
    comentario:
      'O art. 11, § 1º, prevê o rito cautelar de antecipação de prova em duas hipóteses: vítima ou testemunha com menos de 7 anos (I) e violência sexual (II). Fora delas, o depoimento especial segue as regras gerais, sempre que possível em uma única vez. O corte de 12 anos é o do conceito de criança do ECA, não o do rito cautelar.',
    fundamento: 'Lei 13.431/2017, art. 11, § 1º, I e II',
  },
  {
    id: 'lg-eca-q06',
    temaId: 'lg-eca',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 1,
    enunciado:
      'Os hospitais e demais estabelecimentos de atenção à saúde de gestantes, públicos e particulares, são obrigados, de acordo com o art. 10 do ECA, a',
    alternativas: [
      'manter os prontuários das gestantes pelo prazo mínimo de 5 anos.',
      'identificar o recém-nascido exclusivamente pela pulseira com o nome da mãe.',
      'manter alojamento conjunto apenas quando houver vaga disponível e pedido escrito da mãe.',
      'manter registro das atividades desenvolvidas, por meio de prontuários individuais, pelo prazo de 18 anos.',
      'fornecer declaração de nascimento somente quando houver intercorrências no parto.',
    ],
    correta: 3,
    comentario:
      'O art. 10, I, fixa o prazo de 18 anos para os prontuários individuais. O inciso II exige a impressão plantar e digital do RN e a digital da mãe; o V, o alojamento conjunto; o IV, a declaração de nascimento com as intercorrências do parto e do desenvolvimento do neonato. As demais alternativas restringem ou trocam esses deveres.',
    fundamento: 'Lei 8.069/1990, art. 10, I, II, IV e V',
  },
  {
    id: 'lg-eca-q07',
    temaId: 'lg-eca',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Em relação à omissão de comunicar à autoridade pública a prática de violência contra criança ou adolescente, assinalar a alternativa CORRETA.',
    alternativas: [
      'Configura apenas infração administrativa, punida com multa, pois a legislação não a tipifica como crime.',
      'Configura o crime de omissão de socorro do Código Penal, qualquer que seja o resultado.',
      'É crime previsto no próprio ECA, punido com reclusão de 2 a 8 anos.',
      'Só é punível quando praticada por médico ou professor no exercício da profissão.',
      'É crime previsto na Lei 14.344/2022 (Lei Henry Borel), punido com detenção de 6 meses a 3 anos; o ECA mantém, para o médico e o professor, a infração administrativa do art. 245.',
    ],
    correta: 4,
    comentario:
      'O art. 26 da Lei Henry Borel pune quem deixa de comunicar à autoridade pública violência, tratamento cruel ou degradante ou formas violentas de educação contra criança ou adolescente: detenção de 6 meses a 3 anos, aumentada de metade se resulta lesão grave e triplicada se resulta morte. O tipo alcança qualquer pessoa, e não só médico ou professor. O art. 245 do ECA segue como multa administrativa. Reclusão de 2 a 8 anos é a pena da tortura.',
    fundamento: 'Lei 14.344/2022, art. 26; Lei 8.069/1990, art. 245',
  },
  {
    id: 'lg-eca-q08',
    temaId: 'lg-eca',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O Conselho Tutelar é órgão permanente e autônomo, não jurisdicional, a quem compete, com exclusividade, determinar o afastamento da criança ou do adolescente do convívio familiar em caso de maus-tratos.',
    gabaritoCE: false,
    comentario:
      'Errado. A primeira parte reproduz o art. 131 do ECA, mas o afastamento da criança ou do adolescente do convívio familiar é de competência exclusiva da autoridade judiciária (art. 101, § 2º), sem prejuízo de medidas emergenciais de proteção. O Conselho Tutelar aplica as medidas de proteção do art. 101, I a VII (art. 136, I).',
    fundamento: 'Lei 8.069/1990, arts. 101, § 2º; 131; 136, I',
  },
  {
    id: 'lg-eca-q09',
    temaId: 'lg-eca',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 3,
    enunciado: 'Sobre o depoimento especial de criança ou adolescente vítima de violência, previsto na Lei 13.431/2017, é correto afirmar:',
    alternativas: [
      'É realizado perante o Conselho Tutelar, com relato limitado ao estritamente necessário.',
      'Será realizado, sempre que possível, uma única vez; novo depoimento só é admitido quando justificada sua imprescindibilidade pela autoridade competente e houver concordância da vítima ou testemunha, ou de seu representante legal.',
      'É vedada, em qualquer hipótese, a tomada de novo depoimento especial.',
      'A criança deve ser ouvida na presença do suposto autor, para garantir o contraditório.',
      'Não pode ser gravado, para preservar a intimidade da vítima.',
    ],
    correta: 1,
    comentario:
      'É o art. 11, caput e § 2º; por isso a C está errada. A entrevista na rede de proteção com relato limitado ao necessário é a escuta especializada (art. 7º); o depoimento especial ocorre perante autoridade policial ou judiciária (art. 8º). A criança é resguardada de qualquer contato, ainda que visual, com o suposto autor (art. 9º), e o depoimento é gravado em áudio e vídeo (art. 12, VI).',
    fundamento: 'Lei 13.431/2017, arts. 7º, 8º, 9º, 11, caput e § 2º, e 12, VI',
  },
];
