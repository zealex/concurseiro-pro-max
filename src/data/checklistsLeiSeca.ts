import type { ChecklistNorma } from './types';

/**
 * Checklists interativos de lei seca e NRs.
 * Cada item é marcado pelo usuário depois de lido/compreendido no texto oficial.
 * Nas NRs, a referência indica o assunto (a numeração de itens muda entre revisões);
 * nas leis, o artigo.
 */

const NR_URL =
  'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes';

export const CHECKLISTS: ChecklistNorma[] = [
  {
    id: 'nr-01',
    sigla: 'NR-01',
    titulo: 'Disposições Gerais e Gerenciamento de Riscos Ocupacionais',
    eixo: 'pericia',
    origem: 'Portaria SEPRT 6.730/2020; riscos psicossociais: Portaria MTE 1.419/2024 (vigência 26/05/2026 — Portaria MTE 765/2025)',
    url: NR_URL,
    secoes: [
      {
        titulo: 'Disposições gerais',
        itens: [
          { id: 'nr01-1', referencia: 'Campo de aplicação', texto: 'As NRs obrigam empregadores e órgãos públicos com empregados regidos pela CLT.' },
          { id: 'nr01-2', referencia: 'Responsabilidades do empregador', texto: 'Cumprir e fazer cumprir as NRs, informar os trabalhadores sobre riscos e medidas de prevenção, permitir a representação dos trabalhadores no acompanhamento da fiscalização.' },
          { id: 'nr01-3', referencia: 'Deveres do trabalhador', texto: 'Cumprir as disposições legais de SST, usar o EPI fornecido, submeter-se aos exames médicos previstos nas NRs.' },
          { id: 'nr01-4', referencia: 'Direito de recusa', texto: 'O trabalhador pode interromper a atividade diante de risco grave e iminente, comunicando o superior hierárquico.' },
        ],
      },
      {
        titulo: 'GRO e PGR',
        itens: [
          { id: 'nr01-5', referencia: 'GRO', texto: 'Gerenciamento de Riscos Ocupacionais é o processo; o PGR é o documento que o materializa.', dica: 'Banca troca GRO por PGR — o PGR contém inventário de riscos + plano de ação.' },
          { id: 'nr01-6', referencia: 'Inventário de riscos', texto: 'Caracteriza processos e ambientes, descreve perigos, possíveis lesões/agravos, fontes, grupos expostos, medidas existentes e a avaliação (classificação) do risco.' },
          { id: 'nr01-7', referencia: 'Avaliação de riscos', texto: 'Nível de risco a partir da combinação de severidade e probabilidade.' },
          { id: 'nr01-8', referencia: 'Hierarquia de controle', texto: 'Eliminação → substituição/minimização → medidas de proteção coletiva → medidas administrativas/organizacionais → EPI.' },
          { id: 'nr01-9', referencia: 'Revisão', texto: 'Avaliação de riscos revista a cada 2 anos ou quando houver mudanças, acidentes ou falhas; 3 anos para organizações com certificação em sistema de gestão de SST.', dica: 'Prazo de 2 anos × 3 anos com certificação.' },
          { id: 'nr01-10', referencia: 'Riscos psicossociais', texto: 'Fatores de risco psicossociais relacionados ao trabalho integram o GRO e devem constar do inventário, em consonância com a NR-17.', dica: 'Vigência das novas disposições em 26/05/2026.' },
          { id: 'nr01-11', referencia: 'Tratamento diferenciado', texto: 'MEI, ME e EPP têm tratamento diferenciado; graus de risco 1 e 2 que não identificarem exposições a agentes físicos, químicos e biológicos podem ser dispensados do PGR mediante declaração digital.' },
        ],
      },
      {
        titulo: 'Capacitação',
        itens: [
          { id: 'nr01-12', referencia: 'Treinamentos', texto: 'Inicial, periódico e eventual; podem ser em EAD ou semipresencial conforme as diretrizes do Anexo II; carga horária e conteúdo definidos nas NRs específicas.' },
        ],
      },
    ],
  },
  {
    id: 'nr-04',
    sigla: 'NR-04',
    titulo: 'Serviços Especializados em Segurança e Medicina do Trabalho (SESMT)',
    eixo: 'pericia',
    origem: 'Portaria MTP 2.318/2022',
    url: NR_URL,
    secoes: [
      {
        titulo: 'SESMT',
        itens: [
          { id: 'nr04-1', referencia: 'Finalidade', texto: 'Promover a saúde e proteger a integridade do trabalhador.' },
          { id: 'nr04-2', referencia: 'Dimensionamento', texto: 'Pelo grau de risco da atividade principal (CNAE — Anexo I) e pelo número de empregados (Anexo II).', dica: 'Duas variáveis: grau de risco × número de empregados.' },
          { id: 'nr04-3', referencia: 'Composição', texto: 'Engenheiro de segurança, médico do trabalho, enfermeiro do trabalho, técnico de segurança e auxiliar/técnico de enfermagem do trabalho.' },
          { id: 'nr04-4', referencia: 'Modalidades', texto: 'SESMT individual e compartilhado (entre estabelecimentos/empresas), conforme as hipóteses da norma.' },
          { id: 'nr04-5', referencia: 'Vedação', texto: 'Profissionais do SESMT não devem ser desviados para atividades alheias às suas atribuições.' },
        ],
      },
    ],
  },
  {
    id: 'nr-05',
    sigla: 'NR-05',
    titulo: 'Comissão Interna de Prevenção de Acidentes e de Assédio (CIPA)',
    eixo: 'pericia',
    origem: 'Portaria SEPRT 422/2021; Lei 14.457/2022',
    url: NR_URL,
    secoes: [
      {
        titulo: 'Constituição e funcionamento',
        itens: [
          { id: 'nr05-1', referencia: 'Nome', texto: 'CIPA = Comissão Interna de Prevenção de Acidentes e de Assédio (Lei 14.457/2022).', dica: 'Questão recente: "e de Assédio".' },
          { id: 'nr05-2', referencia: 'Composição', texto: 'Representantes do empregador (designados) e dos empregados (eleitos); presidente indicado pelo empregador, vice-presidente eleito pelos empregados.' },
          { id: 'nr05-3', referencia: 'Mandato', texto: '1 ano, permitida uma reeleição.' },
          { id: 'nr05-4', referencia: 'Garantia de emprego', texto: 'Representante eleito dos empregados não pode sofrer dispensa arbitrária desde o registro da candidatura até 1 ano após o fim do mandato.' },
          { id: 'nr05-5', referencia: 'Reuniões', texto: 'Ordinárias mensais, conforme calendário; extraordinárias em acidente grave/fatal ou denúncia de risco grave e iminente.' },
          { id: 'nr05-6', referencia: 'Nomeado', texto: 'Estabelecimento desobrigado de CIPA designa um representante para cumprir os objetivos da norma.' },
          { id: 'nr05-7', referencia: 'Treinamento', texto: 'Carga horária mínima crescente conforme o grau de risco do estabelecimento.' },
        ],
      },
    ],
  },
  {
    id: 'nr-06',
    sigla: 'NR-06',
    titulo: 'Equipamento de Proteção Individual (EPI)',
    eixo: 'pericia',
    origem: 'Portaria MTP 2.175/2022',
    url: NR_URL,
    secoes: [
      {
        titulo: 'EPI',
        itens: [
          { id: 'nr06-1', referencia: 'Certificado de Aprovação', texto: 'Só pode ser comercializado e utilizado o EPI com CA emitido pelo órgão nacional competente.' },
          { id: 'nr06-2', referencia: 'Fornecimento', texto: 'Gratuito, adequado ao risco, em perfeito estado, quando as medidas coletivas forem inviáveis, insuficientes ou estiverem em implantação, ou em emergências.', dica: 'EPI é a última opção da hierarquia de controle.' },
          { id: 'nr06-3', referencia: 'Obrigações do empregador', texto: 'Adquirir o adequado, exigir o uso, orientar e treinar, substituir quando danificado/extraviado, responsabilizar-se pela higienização e manutenção, comunicar irregularidades, registrar o fornecimento.' },
          { id: 'nr06-4', referencia: 'Obrigações do empregado', texto: 'Usar apenas para a finalidade, responsabilizar-se pela guarda e conservação, comunicar alteração que o torne impróprio, cumprir as determinações.' },
          { id: 'nr06-5', referencia: 'Seleção', texto: 'Escolha do EPI considera os riscos do inventário do PGR e a participação dos trabalhadores.' },
        ],
      },
    ],
  },
  {
    id: 'nr-07',
    sigla: 'NR-07',
    titulo: 'Programa de Controle Médico de Saúde Ocupacional (PCMSO)',
    eixo: 'pericia',
    origem: 'Portaria SEPRT 6.734/2020 (vigência 2022); Anexos atualizados pela Portaria MTP 567/2022',
    url: NR_URL,
    secoes: [
      {
        titulo: 'Diretrizes',
        itens: [
          { id: 'nr07-1', referencia: 'Objetivo', texto: 'Proteger e preservar a saúde dos empregados em relação aos riscos ocupacionais identificados no PGR.' },
          { id: 'nr07-2', referencia: 'Responsável', texto: 'Médico do trabalho responsável pelo PCMSO, indicado pela organização.' },
          { id: 'nr07-3', referencia: 'Caráter', texto: 'Rastreamento e detecção precoce de agravos relacionados ao trabalho, inclusive de natureza subclínica; constatação de doenças profissionais.' },
        ],
      },
      {
        titulo: 'Exames clínicos',
        itens: [
          { id: 'nr07-4', referencia: 'Admissional', texto: 'Antes que o empregado assuma suas atividades.' },
          { id: 'nr07-5', referencia: 'Periódico', texto: 'Expostos a riscos: anual ou em intervalos menores a critério do médico; demais empregados: a cada 2 anos; doenças crônicas: intervalo definido pelo médico.', dica: 'A versão atual não usa mais faixas etárias para definir a periodicidade.' },
          { id: 'nr07-6', referencia: 'Retorno ao trabalho', texto: 'Antes de reassumir, quando afastado por período igual ou superior a 30 dias por doença ou acidente, ocupacional ou não.', dica: '≥ 30 dias; qualquer natureza.' },
          { id: 'nr07-7', referencia: 'Mudança de risco ocupacional', texto: 'Antes da data da mudança, quando houver alteração do risco a que o empregado está exposto.' },
          { id: 'nr07-8', referencia: 'Demissional', texto: 'Em até 10 dias contados do término do contrato; dispensado se o último exame clínico ocupacional ocorreu há menos de 135 dias (graus de risco 1 e 2) ou 90 dias (graus 3 e 4).', dica: '10 dias / 135 dias / 90 dias.' },
        ],
      },
      {
        titulo: 'ASO e documentação',
        itens: [
          { id: 'nr07-9', referencia: 'Conteúdo do ASO', texto: 'Razão social e CNPJ; nome, CPF e função do empregado; perigos/fatores de risco que necessitem de controle médico (ou sua ausência); exames realizados com datas; apto ou inapto para a função; nome e CRM do médico responsável pelo PCMSO; data, nome, CRM e assinatura do médico que realizou o exame.' },
          { id: 'nr07-10', referencia: 'Relatório analítico', texto: 'Elaborado anualmente pelo médico responsável, com número e tipos de exames, resultados alterados, CATs emitidas e análise comparativa.' },
          { id: 'nr07-11', referencia: 'Prontuário', texto: 'Dados obtidos nos exames registrados em prontuário individual, guardado por no mínimo 20 anos após o desligamento.' },
        ],
      },
      {
        titulo: 'Anexos',
        itens: [
          { id: 'nr07-12', referencia: 'Anexo I', texto: 'Monitoração de agentes químicos: Quadro 1 (IBE/EE — exposição excessiva, sem significado diagnóstico) e Quadro 2 (IBE/SC — significado clínico).' },
          { id: 'nr07-13', referencia: 'Anexo II', texto: 'Audiometria tonal: admissional, 6 meses após a admissão, anual e na demissão; repouso auditivo mínimo de 14 horas.', dica: 'O "6 meses após a admissão" é a pegadinha clássica.' },
          { id: 'nr07-14', referencia: 'Anexo III', texto: 'Controle radiológico (radiografia de tórax padrão OIT) e espirométrico da exposição a poeiras minerais.' },
          { id: 'nr07-15', referencia: 'Anexo IV', texto: 'Controle médico de trabalhadores expostos a condições hiperbáricas.' },
          { id: 'nr07-16', referencia: 'Anexo V', texto: 'Controle médico da exposição a substâncias cancerígenas e a radiações ionizantes.' },
        ],
      },
    ],
  },
  {
    id: 'nr-09',
    sigla: 'NR-09',
    titulo: 'Avaliação e Controle das Exposições Ocupacionais a Agentes Físicos, Químicos e Biológicos',
    eixo: 'pericia',
    origem: 'Portaria SEPRT 6.735/2020',
    url: NR_URL,
    secoes: [
      {
        titulo: 'Estrutura',
        itens: [
          { id: 'nr09-1', referencia: 'Objetivo', texto: 'Requisitos para avaliação das exposições a agentes físicos, químicos e biológicos quando identificados no PGR, subsidiando medidas de prevenção.', dica: 'O PPRA deixou de existir: o PGR da NR-01 o substituiu.' },
          { id: 'nr09-2', referencia: 'Avaliação', texto: 'Avaliação preliminar e, quando necessário, quantitativa, comparada aos limites de exposição (NR-15 ou, na falta, ACGIH).' },
          { id: 'nr09-3', referencia: 'Medidas de prevenção', texto: 'Adotadas quando ultrapassados níveis de ação/limites, com prioridade às medidas coletivas.' },
          { id: 'nr09-4', referencia: 'Anexos', texto: 'Anexos: vibração (mãos e braços; corpo inteiro), benzeno em postos revendedores de combustíveis e calor.' },
        ],
      },
    ],
  },
  {
    id: 'nr-15',
    sigla: 'NR-15',
    titulo: 'Atividades e Operações Insalubres',
    eixo: 'pericia',
    origem: 'Portaria MTb 3.214/1978 e alterações',
    url: NR_URL,
    secoes: [
      {
        titulo: 'Regras gerais',
        itens: [
          { id: 'nr15-1', referencia: 'Graus', texto: 'Máximo 40%, médio 20%, mínimo 10% (sobre o salário mínimo da região).' },
          { id: 'nr15-2', referencia: 'Mais de um agente', texto: 'Considera-se apenas o de grau mais elevado — vedada a percepção cumulativa de adicionais de insalubridade.' },
          { id: 'nr15-3', referencia: 'Eliminação/neutralização', texto: 'Cessa o adicional com medidas que conservem o ambiente dentro dos limites ou com EPI que diminua a intensidade do agente.' },
        ],
      },
      {
        titulo: 'Anexos',
        itens: [
          { id: 'nr15-4', referencia: 'Anexo 1', texto: 'Ruído contínuo/intermitente: 85 dB(A) por 8 h; q = 5; 115 dB(A) é o máximo sem proteção adequada (risco grave e iminente acima disso).' },
          { id: 'nr15-5', referencia: 'Anexo 2', texto: 'Ruído de impacto: 130 dB linear (ou 120 dB(C) em resposta rápida); risco grave e iminente acima de 140 dB linear (130 dB(C)).' },
          { id: 'nr15-6', referencia: 'Anexo 3', texto: 'Calor: IBUTG com taxa metabólica.' },
          { id: 'nr15-7', referencia: 'Anexo 4', texto: 'Iluminamento — revogado.', dica: 'Pegadinha frequente.' },
          { id: 'nr15-8', referencia: 'Anexos 5 a 10', texto: 'Radiações ionizantes, condições hiperbáricas, radiações não ionizantes, vibrações, frio e umidade.' },
          { id: 'nr15-9', referencia: 'Anexos 11 e 13', texto: 'Agentes químicos com limite de tolerância (avaliação quantitativa) × por atividade (avaliação qualitativa).' },
          { id: 'nr15-10', referencia: 'Anexo 12', texto: 'Poeiras minerais: asbesto, manganês e sílica livre cristalizada.' },
          { id: 'nr15-11', referencia: 'Anexo 13-A', texto: 'Benzeno: prevenção da exposição ocupacional.' },
          { id: 'nr15-12', referencia: 'Anexo 14', texto: 'Agentes biológicos: grau máximo para contato permanente com pacientes em isolamento por doenças infectocontagiosas (e objetos não esterilizados), esgotos e lixo urbano; grau médio em hospitais e serviços de saúde com contato com pacientes ou material infectocontagioso.' },
        ],
      },
    ],
  },
  {
    id: 'nr-16',
    sigla: 'NR-16',
    titulo: 'Atividades e Operações Perigosas',
    eixo: 'pericia',
    origem: 'Portaria MTb 3.214/1978 e alterações',
    url: NR_URL,
    secoes: [
      {
        titulo: 'Periculosidade',
        itens: [
          { id: 'nr16-1', referencia: 'Adicional', texto: '30% sobre o salário, sem os acréscimos de gratificações, prêmios ou participação nos lucros.' },
          { id: 'nr16-2', referencia: 'Opção', texto: 'O empregado pode optar pelo adicional de insalubridade que porventura lhe seja devido — não há cumulação.' },
          { id: 'nr16-3', referencia: 'Anexos', texto: 'Explosivos, inflamáveis, roubos ou outras violências físicas (segurança pessoal/patrimonial), energia elétrica, atividades em motocicleta; radiações ionizantes ou substâncias radioativas.' },
          { id: 'nr16-4', referencia: 'Caracterização', texto: 'Por perícia de médico do trabalho ou engenheiro de segurança do trabalho (CLT Art. 195).' },
        ],
      },
    ],
  },
  {
    id: 'nr-17',
    sigla: 'NR-17',
    titulo: 'Ergonomia',
    eixo: 'pericia',
    origem: 'Portaria MTP 423/2021',
    url: NR_URL,
    secoes: [
      {
        titulo: 'Avaliação ergonômica',
        itens: [
          { id: 'nr17-1', referencia: 'AEP', texto: 'Avaliação Ergonômica Preliminar das situações de trabalho, integrada ao GRO.' },
          { id: 'nr17-2', referencia: 'AET', texto: 'Análise Ergonômica do Trabalho quando a AEP indicar necessidade, houver inadequações, for sugerida pelo acompanhamento de saúde (PCMSO) ou indicada na análise de acidentes/doenças.' },
          { id: 'nr17-3', referencia: 'Organização do trabalho', texto: 'Considera normas de produção, ritmo, conteúdo das tarefas, pausas e exigências de tempo.' },
          { id: 'nr17-4', referencia: 'Anexo I', texto: 'Trabalho dos operadores de checkout.' },
          { id: 'nr17-5', referencia: 'Anexo II', texto: 'Teleatendimento/telemarketing: jornada e pausas obrigatórias fora do posto de trabalho.' },
        ],
      },
    ],
  },
  {
    id: 'nr-32',
    sigla: 'NR-32',
    titulo: 'Segurança e Saúde no Trabalho em Serviços de Saúde',
    eixo: 'pericia',
    origem: 'Portaria MTE 485/2005 e alterações (inclusive Portaria MTE 1.748/2011 — perfurocortantes)',
    url: NR_URL,
    secoes: [
      {
        titulo: 'Riscos biológicos',
        itens: [
          { id: 'nr32-1', referencia: 'Vacinação', texto: 'Gratuita contra tétano, difteria, hepatite B e as estabelecidas no PCMSO; registrada no prontuário e com comprovante ao trabalhador.' },
          { id: 'nr32-2', referencia: 'Perfurocortantes', texto: 'Vedados o reencape e a desconexão manual de agulhas; recipientes de descarte adequados; plano de prevenção de riscos de acidentes com perfurocortantes e dispositivos de segurança.' },
          { id: 'nr32-3', referencia: 'Proibições', texto: 'Adornos, calçados abertos, consumo e guarda de alimentos e bebidas nos postos de trabalho, fumar, manusear lentes de contato.' },
          { id: 'nr32-4', referencia: 'Higiene das mãos', texto: 'Lavatório exclusivo para higiene das mãos em locais com possibilidade de exposição a agentes biológicos.' },
          { id: 'nr32-5', referencia: 'Acidente com material biológico', texto: 'Protocolo de atendimento, emissão de CAT e acompanhamento sorológico.' },
        ],
      },
      {
        titulo: 'Riscos químicos e radiações',
        itens: [
          { id: 'nr32-6', referencia: 'Quimioterápicos antineoplásicos', texto: 'Preparo em área exclusiva com cabine de segurança biológica, EPI específico e capacitação.' },
          { id: 'nr32-7', referencia: 'Radiações ionizantes', texto: 'Dosímetro individual; trabalhadora com gravidez confirmada deve ser afastada das atividades com radiações ionizantes e remanejada.' },
          { id: 'nr32-8', referencia: 'Resíduos', texto: 'Segregação, acondicionamento e transporte conforme a classificação dos resíduos de serviços de saúde.' },
        ],
      },
    ],
  },
  {
    id: 'lei-8213',
    sigla: 'Lei 8.213/91',
    titulo: 'Planos de Benefícios — incapacidade, perícia e acidente do trabalho',
    eixo: 'pericia',
    origem: 'Lei 8.213/1991 (texto compilado)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm',
    secoes: [
      {
        titulo: 'Acidente do trabalho',
        itens: [
          { id: 'l8213-19', referencia: 'Art. 19', texto: 'Acidente típico: pelo exercício do trabalho a serviço da empresa ou do empregador doméstico (ou do segurado especial), causando lesão corporal ou perturbação funcional com morte, perda ou redução, permanente ou temporária, da capacidade.' },
          { id: 'l8213-20', referencia: 'Art. 20, I e II', texto: 'Doença profissional (peculiar a determinada atividade, consta da relação) × doença do trabalho (adquirida em função de condições especiais em que o trabalho é realizado).' },
          { id: 'l8213-20-1', referencia: 'Art. 20, §1º', texto: 'Não são doença do trabalho: degenerativa; inerente a grupo etário; que não produza incapacidade laborativa; endêmica (salvo exposição pela natureza do trabalho).', dica: 'Lista de exclusões muito cobrada.' },
          { id: 'l8213-21', referencia: 'Art. 21', texto: 'Equiparados: concausa; agressão, sabotagem, ato de terceiro, desabamento, inundação e incêndio no local e horário; contaminação acidental; acidente em serviço fora do local, em viagem a serviço e no percurso residência–trabalho.' },
          { id: 'l8213-21a', referencia: 'Art. 21-A', texto: 'NTEP: nexo presumido entre trabalho e agravo pela relação CNAE × CID; a empresa pode requerer a não aplicação.' },
          { id: 'l8213-22', referencia: 'Art. 22', texto: 'CAT até o 1º dia útil seguinte ao acidente; em caso de morte, de imediato. Na falta, podem formalizar o próprio acidentado, dependentes, sindicato, médico assistente ou autoridade pública, sem prazo.' },
          { id: 'l8213-23', referencia: 'Art. 23', texto: 'Dia do acidente na doença = início da incapacidade, segregação compulsória ou diagnóstico — o que ocorrer primeiro.' },
        ],
      },
      {
        titulo: 'Benefícios por incapacidade (o núcleo da perícia do INSS)',
        itens: [
          { id: 'l8213-25', referencia: 'Art. 25, I', texto: 'Carência de 12 contribuições mensais para o auxílio por incapacidade temporária e a aposentadoria por incapacidade permanente.' },
          { id: 'l8213-27a', referencia: 'Art. 27-A', texto: 'Perdida a qualidade de segurado, o novo pedido exige metade da carência (6 contribuições) a partir da nova filiação.' },
          { id: 'l8213-26', referencia: 'Art. 26', texto: 'Independem de carência: auxílio-acidente e benefícios por incapacidade decorrentes de acidente de qualquer natureza ou de doenças da lista do Art. 151.' },
          { id: 'l8213-151', referencia: 'Art. 151', texto: 'Dispensam carência: tuberculose ativa, hanseníase, alienação mental, esclerose múltipla, hepatopatia grave, neoplasia maligna, cegueira, paralisia irreversível e incapacitante, cardiopatia grave, doença de Parkinson, espondiloartrose anquilosante, nefropatia grave, doença de Paget avançada, aids e contaminação por radiação.', dica: 'A lista do Art. 151 é quase igual à do Art. 186 da Lei 8.112 — compare as duas.' },
          { id: 'l8213-59', referencia: 'Art. 59', texto: 'Auxílio por incapacidade temporária: incapacidade para o trabalho ou atividade habitual por mais de 15 dias consecutivos. Não é devido a quem se filiou já portador da doença, salvo se a incapacidade decorrer de progressão ou agravamento.', dica: 'Doença preexistente ≠ incapacidade preexistente: o que importa é a DII.' },
          { id: 'l8213-60', referencia: 'Art. 60', texto: 'Empregado: a empresa paga os primeiros 15 dias; o benefício começa no 16º dia. A concessão deve fixar a data estimada de cessação; sem ela, o benefício cessa em 120 dias, salvo pedido de prorrogação.' },
          { id: 'l8213-61', referencia: 'Art. 61', texto: 'Renda mensal do auxílio por incapacidade temporária: 91% do salário de benefício (limitada à média dos últimos 12 salários de contribuição — Art. 29, §10).' },
          { id: 'l8213-62', referencia: 'Art. 62', texto: 'Insuscetível de recuperação para a atividade habitual → processo de reabilitação profissional; o benefício é mantido até a reabilitação ou, se não recuperável, a aposentadoria.' },
          { id: 'l8213-42', referencia: 'Art. 42', texto: 'Aposentadoria por incapacidade permanente: segurado incapaz e insuscetível de reabilitação para atividade que lhe garanta a subsistência; doença preexistente só gera direito se a incapacidade vier de progressão ou agravamento.', dica: 'Pós-EC 103/2019: 60% da média + 2% por ano acima de 20 (H) / 15 (M) anos de contribuição; 100% se acidente do trabalho, doença profissional ou do trabalho.' },
          { id: 'l8213-45', referencia: 'Art. 45', texto: 'Acréscimo de 25% ao aposentado por incapacidade permanente que precisa da assistência permanente de outra pessoa (situações do Anexo I do Decreto 3.048), mesmo acima do teto.' },
          { id: 'l8213-86', referencia: 'Art. 86', texto: 'Auxílio-acidente: indenização de 50% do salário de benefício quando, após a consolidação das lesões de acidente de qualquer natureza, restarem sequelas que reduzam a capacidade para o trabalho habitual; dura até a aposentadoria.' },
          { id: 'l8213-101', referencia: 'Art. 101', texto: 'O beneficiário por incapacidade é obrigado a se submeter a exame médico-pericial, a processo de reabilitação e a tratamento gratuito (exceto cirurgia e transfusão), sob pena de suspensão.' },
          { id: 'l8213-118', referencia: 'Art. 118', texto: 'Garantia de 12 meses de manutenção do contrato após a cessação do auxílio acidentário.' },
        ],
      },
    ],
  },
  {
    id: 'decreto-3048',
    sigla: 'Decreto 3.048/99',
    titulo: 'Regulamento da Previdência Social — Anexo II e NTEP',
    eixo: 'pericia',
    origem: 'Decreto 3.048/1999 (texto compilado)',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm',
    secoes: [
      {
        titulo: 'Anexo II e nexo',
        itens: [
          { id: 'd3048-1', referencia: 'Anexo II — Lista A', texto: 'Agentes ou fatores de risco de natureza ocupacional relacionados às doenças.' },
          { id: 'd3048-2', referencia: 'Anexo II — Lista B', texto: 'Doenças relacionadas ao trabalho e respectivos agentes, organizadas por grupos da CID.' },
          { id: 'd3048-3', referencia: 'Anexo II — Lista C', texto: 'Intervalos de CID × códigos CNAE que caracterizam o NTEP.' },
          { id: 'd3048-4', referencia: 'Art. 337', texto: 'Caracterização técnica do acidente do trabalho pela perícia médica do INSS, mediante identificação do nexo entre o trabalho e o agravo; NTEP; contestação pela empresa.' },
          { id: 'd3048-5', referencia: 'FAP/RAT', texto: 'FAP (0,5 a 2,0) multiplica a alíquota RAT (1%, 2% ou 3%) conforme o desempenho acidentário da empresa.' },
        ],
      },
    ],
  },
  {
    id: 'clt-sst',
    sigla: 'CLT 154–201',
    titulo: 'CLT — Da Segurança e da Medicina do Trabalho',
    eixo: 'pericia',
    origem: 'Decreto-Lei 5.452/1943, Título II, Capítulo V',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    secoes: [
      {
        titulo: 'Disposições',
        itens: [
          { id: 'clt-157', referencia: 'Art. 157', texto: 'Deveres das empresas: cumprir as normas, instruir os empregados por ordens de serviço, facilitar a fiscalização.' },
          { id: 'clt-158', referencia: 'Art. 158', texto: 'Deveres dos empregados; constitui ato faltoso a recusa injustificada à observância das instruções e ao uso do EPI.' },
          { id: 'clt-161', referencia: 'Art. 161', texto: 'Embargo de obra e interdição de estabelecimento/setor/máquina diante de grave e iminente risco.' },
          { id: 'clt-162', referencia: 'Arts. 162–165', texto: 'SESMT e CIPA; garantia de emprego dos titulares da representação dos empregados na CIPA.' },
          { id: 'clt-166', referencia: 'Arts. 166–167', texto: 'EPI gratuito, adequado e com Certificado de Aprovação.' },
          { id: 'clt-168', referencia: 'Art. 168', texto: 'Exames médicos obrigatórios, por conta do empregador: na admissão, na demissão e periodicamente; resultados comunicados ao trabalhador.' },
          { id: 'clt-169', referencia: 'Art. 169', texto: 'Notificação obrigatória das doenças profissionais e das produzidas em virtude de condições especiais de trabalho.' },
          { id: 'clt-189', referencia: 'Arts. 189–192', texto: 'Insalubridade: conceito, quadro do MTE, eliminação/neutralização e adicional de 40%, 20% ou 10%.' },
          { id: 'clt-193', referencia: 'Arts. 193–194', texto: 'Periculosidade: inflamáveis, explosivos, energia elétrica, roubos/violência física em segurança, motocicleta; adicional de 30%; opção pelo de insalubridade; cessa com a eliminação do risco.' },
          { id: 'clt-195', referencia: 'Art. 195', texto: 'Caracterização por perícia de médico do trabalho ou engenheiro de segurança do trabalho registrados no MTE.' },
          { id: 'clt-198', referencia: 'Art. 198', texto: 'Peso máximo de 60 kg para remoção individual (ressalvadas formas mecânicas).' },
          { id: 'clt-200', referencia: 'Art. 200', texto: 'Competência do MTE para estabelecer disposições complementares (base legal das NRs).' },
        ],
      },
    ],
  },
  {
    id: 'lei-8742',
    sigla: 'Lei 8.742/93',
    titulo: 'LOAS — Benefício de Prestação Continuada (BPC) e avaliação da deficiência',
    eixo: 'pericia',
    origem: 'Lei 8.742/1993 (texto compilado), Lei 13.146/2015 (LBI) e Decreto 6.214/2007',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8742compilado.htm',
    secoes: [
      {
        titulo: 'BPC (Art. 20)',
        itens: [
          { id: 'l8742-20', referencia: 'Art. 20, caput', texto: 'BPC: 1 salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 anos ou mais que comprovem não ter meios de prover a própria manutenção nem de tê-la provida pela família.', dica: 'Benefício assistencial: independe de contribuição.' },
          { id: 'l8742-20-2', referencia: 'Art. 20, §2º', texto: 'Pessoa com deficiência: impedimento de longo prazo de natureza física, mental, intelectual ou sensorial que, em interação com uma ou mais barreiras, pode obstruir a participação plena e efetiva na sociedade em igualdade de condições.', dica: 'Conceito idêntico ao do Art. 2º da LBI (modelo biopsicossocial).' },
          { id: 'l8742-20-10', referencia: 'Art. 20, §10', texto: 'Impedimento de longo prazo: produz efeitos pelo prazo mínimo de 2 anos.', dica: 'Número muito cobrado.' },
          { id: 'l8742-20-3', referencia: 'Art. 20, §3º', texto: 'Critério de renda: renda mensal familiar per capita igual ou inferior a 1/4 do salário-mínimo (o regulamento pode ampliar o limite em situações definidas em lei).' },
          { id: 'l8742-20-1', referencia: 'Art. 20, §1º', texto: 'Família: requerente, cônjuge ou companheiro, pais (ou madrasta/padrasto), irmãos solteiros, filhos e enteados solteiros e menores tutelados, desde que vivam sob o mesmo teto.' },
          { id: 'l8742-20-6', referencia: 'Art. 20, §6º', texto: 'A concessão depende da avaliação da deficiência e do grau de impedimento, composta por avaliação médica (Perícia Médica Federal) e avaliação social (serviço social do INSS).' },
          { id: 'l8742-20-4', referencia: 'Art. 20, §4º', texto: 'Não acumula com outro benefício da seguridade social ou de outro regime, salvo assistência médica e pensão especial de natureza indenizatória.' },
        ],
      },
      {
        titulo: 'Manutenção e regulamento',
        itens: [
          { id: 'l8742-21', referencia: 'Art. 21', texto: 'Revisão a cada 2 anos para avaliar a continuidade das condições que lhe deram origem.' },
          { id: 'l8742-21a', referencia: 'Art. 21-A', texto: 'Suspensão quando a pessoa com deficiência passa a exercer atividade remunerada (inclusive como MEI); cessada a atividade, o pagamento é retomado sem nova perícia, dentro do prazo de revisão.' },
          { id: 'd6214-23', referencia: 'Decreto 6.214/2007', texto: 'O BPC é intransferível: não gera pensão por morte nem abono anual (13º).' },
          { id: 'lbi-2', referencia: 'LBI (Lei 13.146/2015), Art. 2º, §1º', texto: 'Avaliação biopsicossocial da deficiência, por equipe multiprofissional e interdisciplinar: impedimentos nas funções e estruturas do corpo, fatores socioambientais, psicológicos e pessoais, limitação no desempenho de atividades e restrição de participação.' },
        ],
      },
    ],
  },
  {
    id: 'lei-8112-saude',
    sigla: 'Lei 8.112/90',
    titulo: 'Servidor público federal — licenças de saúde, junta médica e aposentadoria',
    eixo: 'pericia',
    origem: 'Lei 8.112/1990 (texto compilado); modelo seguido por muitos regimes próprios estaduais e municipais',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm',
    secoes: [
      {
        titulo: 'Licença para tratamento de saúde',
        itens: [
          { id: 'l8112-202', referencia: 'Art. 202', texto: 'Licença para tratamento de saúde, a pedido ou de ofício, com base em perícia médica, sem prejuízo da remuneração.' },
          { id: 'l8112-203', referencia: 'Art. 203', texto: 'Concedida por perícia oficial; a licença que exceder 120 dias no período de 12 meses (a contar do primeiro dia de afastamento) exige avaliação por junta médica oficial.', dica: '120 dias → junta médica.' },
          { id: 'l8112-204', referencia: 'Art. 204', texto: 'Licença inferior a 15 dias, dentro de 1 ano, pode ser dispensada de perícia oficial, na forma do regulamento (Decreto 7.003/2009).' },
          { id: 'l8112-205', referencia: 'Art. 205', texto: 'Atestado e laudo da junta não mencionam o nome ou a natureza da doença, salvo lesões de acidente em serviço, doença profissional ou doenças do Art. 186, §1º.' },
          { id: 'l8112-206', referencia: 'Arts. 206 e 206-A', texto: 'Inspeção médica quando houver indícios de lesão orgânica ou funcional; exames médicos periódicos do servidor.' },
          { id: 'l8112-83', referencia: 'Art. 83', texto: 'Licença por motivo de doença em pessoa da família, condicionada à comprovação por perícia médica oficial.' },
        ],
      },
      {
        titulo: 'Acidente em serviço, readaptação e aposentadoria',
        itens: [
          { id: 'l8112-212', referencia: 'Arts. 211–214', texto: 'Acidente em serviço: dano físico ou mental relacionado, mediata ou imediatamente, às atribuições do cargo; equipara-se a agressão não provocada no exercício do cargo e o acidente no percurso residência–trabalho; prova em até 10 dias, prorrogáveis.' },
          { id: 'l8112-24', referencia: 'Art. 24', texto: 'Readaptação: investidura em cargo de atribuições compatíveis com a limitação sofrida, verificada em inspeção médica; se incapaz para o serviço público, será aposentado.' },
          { id: 'l8112-188', referencia: 'Art. 188, §§1º e 2º', texto: 'A aposentadoria por invalidez é precedida de licença para tratamento de saúde por até 24 meses; expirado o prazo sem condições de reassumir ou ser readaptado, o servidor é aposentado.' },
          { id: 'l8112-186', referencia: 'Art. 186, §1º', texto: 'Doenças graves (proventos integrais no regime da lei): tuberculose ativa, alienação mental, esclerose múltipla, neoplasia maligna, cegueira posterior ao ingresso, hanseníase, cardiopatia grave, Parkinson, paralisia irreversível e incapacitante, espondiloartrose anquilosante, nefropatia grave, Paget avançado e aids.', dica: 'Após a EC 103/2019, o cálculo dos proventos segue as regras da emenda e do regime próprio; a lista continua cobrada.' },
        ],
      },
    ],
  },
  {
    id: 'cpp-158-184',
    sigla: 'CPP 158–184',
    titulo: 'CPP — Do Exame de Corpo de Delito, da Cadeia de Custódia e das Perícias em Geral',
    eixo: 'legal',
    origem: 'Decreto-Lei 3.689/1941; cadeia de custódia pela Lei 13.964/2019',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm',
    secoes: [
      {
        titulo: 'Corpo de delito e cadeia de custódia',
        itens: [
          { id: 'cpp-158', referencia: 'Art. 158', texto: 'Infração que deixa vestígios exige exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado.' },
          { id: 'cpp-158-pu', referencia: 'Art. 158, parágrafo único', texto: 'Prioridade quando se tratar de violência doméstica e familiar contra a mulher ou de violência contra criança, adolescente, idoso ou pessoa com deficiência.' },
          { id: 'cpp-158a', referencia: 'Art. 158-A', texto: 'Cadeia de custódia: conjunto de procedimentos para manter e documentar a história cronológica do vestígio; vestígio é todo objeto ou material bruto, visível ou latente, relacionado à infração penal.' },
          { id: 'cpp-158b', referencia: 'Art. 158-B', texto: 'Etapas: reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.', dica: '10 etapas, nesta ordem.' },
          { id: 'cpp-158c', referencia: 'Art. 158-C', texto: 'Coleta preferencialmente por perito oficial; proibida a entrada em locais isolados e a remoção de vestígios antes da liberação pelo perito, sob pena de fraude processual.' },
          { id: 'cpp-158d', referencia: 'Arts. 158-D a 158-F', texto: 'Recipientes lacrados e individualizados; central de custódia; retorno do material à central após a perícia.' },
        ],
      },
      {
        titulo: 'Peritos e laudo',
        itens: [
          { id: 'cpp-159', referencia: 'Art. 159', texto: 'Perito oficial com diploma de curso superior; na falta, duas pessoas idôneas com diploma superior, preferencialmente na área; quesitos e assistente técnico pelas partes.' },
          { id: 'cpp-160', referencia: 'Art. 160', texto: 'Laudo em até 10 dias, prorrogável em casos excepcionais.' },
          { id: 'cpp-161', referencia: 'Art. 161', texto: 'Exame de corpo de delito em qualquer dia e a qualquer hora.' },
          { id: 'cpp-162', referencia: 'Art. 162', texto: 'Autópsia pelo menos 6 horas depois do óbito, salvo evidência dos sinais de morte; em morte violenta basta o exame externo quando não houver infração a apurar ou as lesões externas permitirem precisar a causa da morte.' },
          { id: 'cpp-163', referencia: 'Arts. 163–166', texto: 'Exumação (dia e hora designados, auto circunstanciado), fotografia do cadáver na posição encontrada, esquemas e desenhos, reconhecimento de cadáver exumado.' },
          { id: 'cpp-167', referencia: 'Art. 167', texto: 'Desaparecidos os vestígios, a prova testemunhal pode suprir a falta do exame.' },
          { id: 'cpp-168', referencia: 'Art. 168', texto: 'Exame complementar em lesões corporais; para a incapacidade por mais de 30 dias, exame logo que decorrido o prazo de 30 dias da data do crime; a falta pode ser suprida por prova testemunhal.' },
          { id: 'cpp-169', referencia: 'Arts. 169–175', texto: 'Local do crime, perícias de laboratório (guardar material para contraprova), destruição de obstáculo, avaliação, incêndio, exame grafotécnico e de instrumentos do crime.' },
          { id: 'cpp-176', referencia: 'Arts. 176–181', texto: 'Quesitos até o ato da diligência, perícia por precatória, divergência entre peritos, suprimento de omissões.' },
          { id: 'cpp-182', referencia: 'Art. 182', texto: 'O juiz não ficará adstrito ao laudo, podendo aceitá-lo ou rejeitá-lo, no todo ou em parte.' },
          { id: 'cpp-184', referencia: 'Art. 184', texto: 'Salvo o exame de corpo de delito, a autoridade negará a perícia requerida quando não for necessária ao esclarecimento da verdade.' },
        ],
      },
    ],
  },
  {
    id: 'cp-121-129',
    sigla: 'CP 121–129',
    titulo: 'Código Penal — Crimes contra a Vida e Lesões Corporais',
    eixo: 'legal',
    origem: 'Decreto-Lei 2.848/1940 (texto compilado); feminicídio autônomo pela Lei 14.994/2024',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm',
    secoes: [
      {
        titulo: 'Crimes contra a vida',
        itens: [
          { id: 'cp-121', referencia: 'Art. 121', texto: 'Homicídio simples, privilegiado (§1º), qualificado (§2º) e culposo (§3º).' },
          { id: 'cp-121a', referencia: 'Art. 121-A', texto: 'Feminicídio como crime autônomo (Lei 14.994/2024).', dica: 'Deixou de ser qualificadora do Art. 121.' },
          { id: 'cp-122', referencia: 'Art. 122', texto: 'Induzimento, instigação ou auxílio a suicídio ou a automutilação.' },
          { id: 'cp-123', referencia: 'Art. 123', texto: 'Infanticídio: matar, sob a influência do estado puerperal, o próprio filho, durante o parto ou logo após.' },
          { id: 'cp-124', referencia: 'Arts. 124–127', texto: 'Aborto provocado pela gestante ou com seu consentimento; por terceiro com e sem consentimento; forma majorada.' },
          { id: 'cp-128', referencia: 'Art. 128', texto: 'Não se pune o aborto praticado por médico se não há outro meio de salvar a vida da gestante ou se a gravidez resulta de estupro (com consentimento da gestante ou do representante legal).', dica: 'ADPF 54: anencefalia.' },
        ],
      },
      {
        titulo: 'Lesão corporal (Art. 129)',
        itens: [
          { id: 'cp-129', referencia: 'Caput', texto: 'Ofender a integridade corporal ou a saúde de outrem (lesão leve — residual).' },
          { id: 'cp-129-1', referencia: '§1º (grave)', texto: 'Incapacidade para as ocupações habituais por mais de 30 dias; perigo de vida; debilidade permanente de membro, sentido ou função; aceleração de parto.' },
          { id: 'cp-129-2', referencia: '§2º (gravíssima)', texto: 'Incapacidade permanente para o trabalho; enfermidade incurável; perda ou inutilização do membro, sentido ou função; deformidade permanente; aborto.', dica: 'Debilidade = grave; perda/inutilização = gravíssima. Aceleração de parto = grave; aborto = gravíssima.' },
          { id: 'cp-129-3', referencia: '§3º', texto: 'Lesão corporal seguida de morte (resultado morte culposo).' },
          { id: 'cp-129-9', referencia: '§§ 9º a 13', texto: 'Violência doméstica e lesão contra a mulher por razões da condição do sexo feminino — penas alteradas por leis de 2021 e 2024: conferir o texto compilado.' },
        ],
      },
    ],
  },
  {
    id: 'sus-leis',
    sigla: 'SUS',
    titulo: 'CF/88 Arts. 196–200, Lei 8.080/90, Lei 8.142/90 e Decreto 7.508/11',
    eixo: 'tronco',
    origem: 'Constituição Federal; Leis 8.080 e 8.142 de 1990; Decreto 7.508/2011',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8080.htm',
    secoes: [
      {
        titulo: 'Constituição Federal',
        itens: [
          { id: 'cf-196', referencia: 'Art. 196', texto: 'Saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas, com acesso universal e igualitário.' },
          { id: 'cf-197', referencia: 'Art. 197', texto: 'Ações e serviços de saúde são de relevância pública.' },
          { id: 'cf-198', referencia: 'Art. 198', texto: 'Rede regionalizada e hierarquizada, sistema único; diretrizes: descentralização (direção única em cada esfera), atendimento integral (prioridade às atividades preventivas) e participação da comunidade.' },
          { id: 'cf-199', referencia: 'Art. 199', texto: 'Assistência livre à iniciativa privada, de forma complementar; vedadas subvenções a instituições privadas com fins lucrativos.' },
          { id: 'cf-200', referencia: 'Art. 200', texto: 'Competências do SUS, incluindo vigilância sanitária e epidemiológica, saúde do trabalhador e proteção do meio ambiente, nele compreendido o do trabalho.' },
        ],
      },
      {
        titulo: 'Lei 8.080/90',
        itens: [
          { id: 'l8080-6', referencia: 'Art. 6º, §3º', texto: 'Saúde do trabalhador: conjunto de atividades que, por meio da vigilância epidemiológica e sanitária, promove e protege a saúde dos trabalhadores e visa à recuperação e reabilitação dos submetidos a riscos e agravos.' },
          { id: 'l8080-7', referencia: 'Art. 7º', texto: 'Princípios: universalidade, integralidade, preservação da autonomia, igualdade, direito à informação, epidemiologia para prioridades, participação da comunidade, descentralização político-administrativa com ênfase na municipalização, regionalização e hierarquização, entre outros.' },
          { id: 'l8080-19m', referencia: 'Arts. 19-M a 19-U', texto: 'Assistência terapêutica e incorporação de tecnologias (CONITEC).' },
        ],
      },
      {
        titulo: 'Lei 8.142/90',
        itens: [
          { id: 'l8142-1', referencia: 'Art. 1º', texto: 'Conferência de Saúde (a cada 4 anos, avalia a situação e propõe diretrizes) e Conselho de Saúde (permanente e deliberativo); representação dos usuários paritária em relação ao conjunto dos demais segmentos.' },
          { id: 'l8142-4', referencia: 'Art. 4º', texto: 'Para receber recursos: Fundo de Saúde, Conselho de Saúde, plano de saúde, relatórios de gestão, contrapartida de recursos e comissão de elaboração do plano de carreira.' },
        ],
      },
      {
        titulo: 'Decreto 7.508/11',
        itens: [
          { id: 'd7508-5', referencia: 'Art. 5º', texto: 'Região de Saúde deve conter, no mínimo: atenção primária, urgência e emergência, atenção psicossocial, atenção ambulatorial especializada e hospitalar, vigilância em saúde.' },
          { id: 'd7508-9', referencia: 'Art. 9º', texto: 'Portas de Entrada: atenção primária, urgência e emergência, atenção psicossocial e serviços especiais de acesso aberto.' },
          { id: 'd7508-30', referencia: 'Arts. 30–32', texto: 'Comissões Intergestores: CIT (nacional), CIB (estadual) e CIR (regional).' },
          { id: 'd7508-33', referencia: 'Art. 33', texto: 'COAP — Contrato Organizativo da Ação Pública da Saúde.' },
          { id: 'd7508-rename', referencia: 'RENASES / RENAME', texto: 'Relação Nacional de Ações e Serviços de Saúde e Relação Nacional de Medicamentos Essenciais.' },
        ],
      },
    ],
  },
];

export function getChecklist(id: string): ChecklistNorma | undefined {
  return CHECKLISTS.find((c) => c.id === id);
}

export function totalItens(checklist: ChecklistNorma): number {
  return checklist.secoes.reduce((acc, s) => acc + s.itens.length, 0);
}
