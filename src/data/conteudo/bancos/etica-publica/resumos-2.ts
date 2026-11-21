import type { ResumoTema } from '../../../types';
import { ATUALIZADO, F_D7724, F_L12527, F_L13709, F_L15141, F_L15352 } from './fontes';

export const RESUMOS_2: ResumoTema[] = [
  /* ---------- etp-lai ---------- */
  {
    temaId: 'etp-lai',
    titulo: 'Lei de Acesso à Informação (Lei 12.527/2011 e Decreto 7.724/2012)',
    resumo:
      'Prazos (20 + 10 para responder, 10 para recorrer, 5 para decidir), graus de sigilo (25/15/5 anos), informação pessoal (100 anos e hipóteses sem consentimento), quem se sujeita e a vedação de exigir motivos. Em saúde: prontuário e dados de pacientes.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A LAI garante o acesso previsto no art. 5º, XXXIII, no art. 37, § 3º, II, e no art. 216, § 2º, da CF. Ela se aplica à **União, aos Estados, ao DF e aos Municípios**: administração direta dos três Poderes (inclusive Tribunais de Contas) e do Ministério Público, autarquias, fundações, empresas públicas, sociedades de economia mista e demais entidades controladas (art. 1º). **Entidades privadas sem fins lucrativos** que recebem recursos públicos também se sujeitam, no que couber, mas a publicidade se limita à **parcela recebida e à sua destinação** (art. 2º).\n\nA diretriz é a **publicidade como preceito geral e o sigilo como exceção** (art. 3º, I). Há **transparência ativa**, que é divulgar independentemente de pedido, obrigatoriamente em sítio oficial (art. 8º), e **transparência passiva**, que é responder a pedidos (arts. 10 e seguintes). **Municípios com até 10.000 habitantes** ficam dispensados da divulgação obrigatória na internet, mas continuam obrigados a divulgar **em tempo real a execução orçamentária e financeira** (art. 8º, § 4º, e LC 101/2000, art. 73-B).\n\nNo pedido, qualquer interessado se identifica e especifica a informação; é **vedada qualquer exigência relativa aos motivos** (art. 10, § 3º). O serviço é **gratuito**, salvo o custo de reprodução, e é isento quem declara não poder pagar sem prejuízo do sustento (art. 12). No Executivo federal, não são atendidos pedidos **genéricos, desproporcionais ou desarrazoados** (Decreto 7.724, art. 13).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Etapa', 'Prazo', 'Base'],
          linhas: [
            ['Resposta ao pedido', 'Imediata; se impossível, até 20 dias', 'LAI, art. 11, caput e § 1º'],
            ['Prorrogação', '+10 dias, com justificativa expressa e ciência do requerente', 'LAI, art. 11, § 2º'],
            ['Recurso contra negativa', '10 dias da ciência, à autoridade hierarquicamente superior', 'LAI, art. 15'],
            ['Decisão do recurso', '5 dias', 'LAI, art. 15, parágrafo único'],
            ['Executivo federal: 2ª instância', '10 dias para recorrer à autoridade máxima; 5 dias para decidir', 'Dec. 7.724, art. 21, parágrafo único'],
            ['Omissão de resposta', 'Reclamação em 10 dias à autoridade de monitoramento (conta a partir de 30 dias do pedido); resposta em 5 dias', 'Dec. 7.724, art. 22'],
            ['Recurso à CGU', '10 dias; CGU decide em 5 dias', 'LAI, art. 16; Dec. 7.724, art. 23'],
            ['Recurso à CMRI', '10 dias', 'LAI, art. 16, § 3º; Dec. 7.724, art. 24'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Grau', 'Prazo máximo (da produção)', 'Quem classifica no Executivo federal (art. 27)'],
          linhas: [
            ['Ultrassecreta', '25 anos (a CMRI pode prorrogar uma única vez)', 'Presidente, Vice, Ministros e equiparados, Comandantes das Forças Armadas, chefes de missões diplomáticas e consulares permanentes no exterior'],
            ['Secreta', '15 anos', 'Os anteriores + titulares de autarquias, fundações, empresas públicas e SEM'],
            ['Reservada', '5 anos', 'Os anteriores + cargos de direção, comando ou chefia DAS 101.5 ou superior, ou equivalentes'],
            ['Informação pessoal', 'Até 100 anos, independentemente de classificação (art. 31)', 'Não é classificada; acesso restrito a agentes autorizados e à própria pessoa'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Informação pessoal (art. 31):** acesso a terceiros só com previsão legal ou **consentimento expresso**. O consentimento é dispensado para: prevenção e diagnóstico médico, quando a pessoa estiver física ou legalmente incapaz, e para uso único e exclusivo no tratamento médico; estatísticas e pesquisas científicas de evidente interesse público ou geral, vedada a identificação; cumprimento de ordem judicial; defesa de direitos humanos; proteção do interesse público e geral preponderante.',
          '**Limites à restrição:** não se nega acesso a informação necessária à tutela de **direitos fundamentais**; informação sobre **violação de direitos humanos** por agentes públicos não pode ser restringida (art. 21). A proteção da informação pessoal não serve para prejudicar a apuração de irregularidades (art. 31, § 4º).',
          '**Fim do prazo:** vencido o prazo ou ocorrido o evento final, a informação torna-se **automaticamente pública** (art. 24, § 4º).',
          '**Novidade (Lei 15.141/2025, art. 216):** a LAI ganhou o art. 8º-A, que obriga os **serviços sociais autônomos** que recebem contribuições ou recursos federais de contrato de gestão a divulgar plano de cargos e salários, quantitativo de empregados por cargo e faixa salarial (com nome e cargo), parcelas remuneratórias e indenizatórias e funções gratificadas; e o art. 8º-B, que obriga os **conselhos de fiscalização profissional** (como os CRMs) a divulgar, de forma **nominal e individualizada**, as parcelas remuneratórias e indenizatórias que os empregados possam receber.',
          '**Responsabilidade (art. 32):** recusar, retardar deliberadamente ou fornecer informação incorreta é infração administrativa punida, **no mínimo, com suspensão** (Lei 8.112), após contraditório e ampla defesa, podendo haver improbidade.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Pedido ao hospital público',
        enunciado:
          'Pelo SIC de um hospital federal, um cidadão pede: (a) o número de cirurgias eletivas canceladas no ano; (b) o prontuário de um vizinho internado. Ele não informa por que quer os dados. Como o hospital deve agir?',
        resolucao:
          '(a) É informação de interesse público e deve ser fornecida em até 20 dias (prorrogáveis por 10), sem exigir motivo. (b) Prontuário é **informação pessoal**: acesso restrito por até 100 anos, só para o paciente, agentes autorizados ou terceiro com previsão legal ou consentimento expresso. A negativa deve ser fundamentada e informar o recurso cabível (10 dias).',
      },
      {
        tipo: 'atencao',
        texto:
          '**20 + 10** é o prazo para responder; **10** é o prazo para recorrer; **5** é o prazo para a autoridade superior decidir. Não confunda com a ouvidoria da Lei 13.460 (**30 + 30**). Os prazos de sigilo contam **da data de produção** da informação, não do pedido. E informação pessoal **não recebe grau** de sigilo: tem restrição própria de até 100 anos.',
      },
    ],
    fontes: [F_L12527, F_D7724, F_L15141],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- etp-lgpd ---------- */
  {
    temaId: 'etp-lgpd',
    titulo: 'LGPD (Lei 13.709/2018) e dados pessoais de saúde',
    resumo:
      'Caem os conceitos (dado sensível, anonimizado, controlador, operador, encarregado), as bases legais do art. 7º × art. 11, as regras de dados de saúde (art. 11, §§ 4º e 5º; art. 13), os direitos do titular, o tratamento pelo poder público e as sanções. Atenção à Lei 15.352/2026, que criou a Agência Nacional de Proteção de Dados (ANPD), sucessora da antiga Autoridade.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A LGPD protege os direitos fundamentais de liberdade, privacidade e livre desenvolvimento da personalidade. Ela vale para tratamento por pessoa natural ou jurídica, **pública ou privada**, inclusive nos meios digitais (art. 1º) e independentemente do meio (art. 3º), e suas normas gerais são de interesse nacional, obrigando **União, Estados, DF e Municípios** (art. 1º, parágrafo único). **Não se aplica** (art. 4º) ao tratamento por pessoa natural para fins exclusivamente particulares e não econômicos; para fins exclusivamente jornalísticos, artísticos ou acadêmicos (o acadêmico ainda observa os arts. 7º e 11); para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais.\n\n**Dado pessoal sensível** (art. 5º, II) é o dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização religiosa, filosófica ou política, **dado referente à saúde ou à vida sexual**, dado genético ou biométrico, quando vinculado a uma pessoa natural. **Dado anonimizado** não é dado pessoal, salvo se a anonimização puder ser revertida (art. 12). **Controlador** decide sobre o tratamento; **operador** trata em nome do controlador; **encarregado** é o canal de comunicação entre controlador, titulares e a ANPD (art. 5º, VI a VIII).\n\nPrincípios (art. 6º): boa-fé e finalidade, adequação, **necessidade**, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação, responsabilização e prestação de contas.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Base legal', 'Dado comum (art. 7º)', 'Dado sensível (art. 11)'],
          linhas: [
            ['Consentimento', 'I: livre, informado e inequívoco', 'I: específico e destacado, para finalidades específicas'],
            ['Obrigação legal ou regulatória', 'II', 'II, a'],
            ['Políticas públicas (administração pública)', 'III', 'II, b'],
            ['Estudos por órgão de pesquisa (anonimização sempre que possível)', 'IV', 'II, c'],
            ['Execução de contrato', 'V', 'Não é base autônoma (só exercício de direitos, “inclusive em contrato”)'],
            ['Exercício regular de direitos em processo', 'VI', 'II, d'],
            ['Proteção da vida ou da incolumidade física', 'VII', 'II, e'],
            ['Tutela da saúde, só por profissionais de saúde, serviços de saúde ou autoridade sanitária', 'VIII', 'II, f'],
            ['Legítimo interesse', 'IX', 'Não cabe'],
            ['Proteção do crédito', 'X', 'Não cabe'],
            ['Prevenção à fraude e segurança do titular em identificação e autenticação', '—', 'II, g'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Saúde e vantagem econômica (art. 11, § 4º):** é vedado comunicar ou compartilhar dados de saúde entre controladores para obter vantagem econômica, salvo na prestação de serviços de saúde, assistência farmacêutica e assistência à saúde, em benefício do titular, para portabilidade pedida por ele ou para transações financeiras e administrativas desses serviços.',
          '**Planos de saúde (art. 11, § 5º):** proibido tratar dados de saúde para **seleção de riscos** na contratação e na contratação e exclusão de beneficiários.',
          '**Estudos em saúde pública (art. 13):** órgãos de pesquisa podem acessar bases de dados pessoais; os dados ficam **dentro do órgão**, só para pesquisa, em ambiente controlado e seguro, com anonimização ou **pseudonimização** sempre que possível. Resultados não podem revelar dados pessoais, e a **transferência a terceiros é vedada**.',
          '**Direitos do titular (art. 18):** confirmação, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, eliminação dos dados tratados com consentimento, informação sobre compartilhamento, informação sobre a possibilidade de negar consentimento e revogação. Declaração completa em **até 15 dias** (art. 19, II). Revogar o consentimento é gratuito e facilitado (art. 8º, § 5º).',
          '**Poder público (art. 23):** trata dados para finalidade pública, na persecução do interesse público e para executar competências legais; informa as hipóteses de tratamento, de preferência no sítio, e indica encarregado. Estatal em **concorrência** segue o regime privado; quando executa política pública, o regime público (art. 24).',
          '**Sanções (art. 52):** advertência; **multa simples de até 2% do faturamento, limitada a R$ 50 milhões por infração**; multa diária; publicização; bloqueio; eliminação; suspensão parcial do banco ou da atividade (até 6 meses, prorrogáveis); proibição. Vigentes desde **1º/8/2021**. Para órgãos públicos, **não há multa** (art. 52, § 3º).',
          '**ANPD:** a **Lei 15.352/2026** (conversão da MP 1.317/2025) deu nova redação ao art. 55-A: fica criada a **Agência Nacional de Proteção de Dados**, autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública, com autonomia funcional, técnica, decisória, administrativa e financeira, nos termos da Lei 13.848/2019 (agências reguladoras). Ela sucede a antiga Autoridade Nacional de Proteção de Dados (Lei 15.352/2026, art. 15).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Prontuário na UBS',
        enunciado:
          'Na UBS, a médica registra no prontuário eletrônico o diagnóstico de diabetes de um paciente, sem termo de consentimento. A secretaria municipal depois envia os dados ao Ministério da Saúde para um programa de controle de doenças crônicas. Há base legal?',
        resolucao:
          'Sim. O registro clínico se apoia na **tutela da saúde** (art. 11, II, f), sem necessidade de consentimento. O envio ao Ministério se apoia no **uso compartilhado pela administração pública para políticas públicas** previstas em lei ou regulamento (art. 11, II, b). Legítimo interesse não serviria, porque não é base para dado sensível.',
      },
      {
        tipo: 'atencao',
        texto:
          'Para **dado sensível não existe legítimo interesse nem proteção do crédito**. Órgão público **não leva multa** da ANPD (art. 52, § 3º, só permite os incisos I, IV, V, VI, X, XI e XII). Desde 2026, a sigla ANPD significa **Agência** Nacional de Proteção de Dados (antes era Autoridade); questões antigas usam o nome anterior. Não confunda **pseudonimização** (o dado ainda pode ser ligado ao titular pela informação adicional guardada à parte pelo controlador, art. 13, § 4º) com **anonimização** (art. 12).',
      },
    ],
    fontes: [F_L13709, F_L15352],
    atualizadoEm: ATUALIZADO,
  },
];
