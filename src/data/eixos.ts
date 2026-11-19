import type { Disciplina, Eixo, Tema } from './types';

/**
 * Mapa curricular: Eixo → Disciplina → Tema.
 * Os ids são estáveis e usados por plano, questões, revisões, pontos fracos e biblioteca.
 *
 * Recorte: o que o médico generalista (sem residência/RQE) precisa para os concursos que pode prestar —
 * Perito Médico Federal/INSS e peritos de RPPS, Perito Médico-Legista (Polícia Científica/IGP)
 * e Clínico Geral/ESF/Plantonista. Medicina do Trabalho entra como CONTEÚDO (saúde do trabalhador,
 * NRs e nexo cobrados na perícia), não como cargo — o cargo "Médico do Trabalho" exige especialização.
 */
export const DISCIPLINAS: Disciplina[] = [
  /* ============ PILAR A — PERÍCIA MÉDICA, PREVIDÊNCIA E SAÚDE DO TRABALHADOR ============ */
  {
    id: 'pericia-medica',
    eixo: 'pericia',
    nome: 'Perícia Médica (INSS, RPPS e servidor)',
    temas: [
      { id: 'pericia-conceitos', nome: 'Perícia médica: ato pericial, Res. CFM e ética do perito', refs: ['beneficios-incapacidade'] },
      { id: 'incapacidade-laboral', nome: 'Incapacidade laborativa (DID, DII, temporária × permanente)', refs: ['beneficios-incapacidade'] },
      { id: 'pericia-previdenciaria', nome: 'Benefícios por incapacidade e reabilitação profissional', refs: ['beneficios-incapacidade', 'lei-8213'] },
      { id: 'pericia-deficiencia-bpc', nome: 'BPC/LOAS e avaliação biopsicossocial da deficiência', refs: ['lei-8742', 'beneficios-incapacidade'] },
      { id: 'pericia-servidor', nome: 'Perícia do servidor público (Lei 8.112, junta médica, RPPS)', refs: ['lei-8112-saude'] },
      { id: 'nexo-causal', nome: 'Nexo causal, NTEP e CAT (Schilling, Res. CFM 2.183/2018)', refs: ['nexo-cat', 'decreto-3048'] },
      { id: 'pericia-saude-mental', nome: 'Perícia em saúde mental (transtornos mais periciados, simulação)' },
      { id: 'telepericia', nome: 'Telemedicina e teleperícia (Lei 14.510/2022)' },
    ],
  },
  {
    id: 'previdenciaria',
    eixo: 'pericia',
    nome: 'Legislação Previdenciária, Assistencial e Trabalhista',
    temas: [
      { id: 'seguridade', nome: 'Seguridade social (CF 194–204) e custeio (Lei 8.212/91)' },
      { id: 'lei8213', nome: 'Lei 8.213/91 — benefícios e acidente do trabalho', refs: ['lei-8213', 'beneficios-incapacidade'] },
      { id: 'dec3048-ntep', nome: 'Decreto 3.048/99 — Anexo II, NTEP, FAP', refs: ['decreto-3048', 'nexo-cat'] },
      { id: 'loas', nome: 'Lei 8.742/93 (LOAS), LBI e Decreto 6.214/2007', refs: ['lei-8742'] },
      { id: 'clt-sst', nome: 'CLT Arts. 154–201 e estabilidade acidentária', refs: ['clt-sst'] },
      { id: 'ldrt', nome: 'LDRT — Portaria GM/MS 1.999/2023' },
    ],
  },
  {
    id: 'nrs',
    eixo: 'pericia',
    nome: 'Normas Regulamentadoras essenciais',
    temas: [
      { id: 'nr01', nome: 'NR-01 — GRO/PGR e riscos psicossociais', refs: ['nr-01', 'nr-prazos'] },
      { id: 'nr04', nome: 'NR-04 — SESMT', refs: ['nr-04'] },
      { id: 'nr05', nome: 'NR-05 — CIPA (acidentes e assédio)', refs: ['nr-05', 'nr-prazos'] },
      { id: 'nr06', nome: 'NR-06 — EPI', refs: ['nr-06'] },
      { id: 'nr07', nome: 'NR-07 — PCMSO e exames ocupacionais', refs: ['nr-07', 'nr-prazos', 'ibe'] },
      { id: 'nr09', nome: 'NR-09 — Agentes físicos, químicos e biológicos', refs: ['nr-09'] },
      { id: 'nr15', nome: 'NR-15 — Insalubridade', refs: ['nr-15', 'nr-prazos'] },
      { id: 'nr16', nome: 'NR-16 — Periculosidade', refs: ['nr-16'] },
      { id: 'nr17', nome: 'NR-17 — Ergonomia', refs: ['nr-17'] },
      { id: 'nr32', nome: 'NR-32 — Serviços de saúde', refs: ['nr-32'] },
    ],
  },
  {
    id: 'clinica-ocupacional',
    eixo: 'pericia',
    nome: 'Doenças Relacionadas ao Trabalho',
    temas: [
      { id: 'pneumoconioses', nome: 'Pneumoconioses (silicose, asbestose, PTC)' },
      { id: 'pair', nome: 'PAIR e audiometria ocupacional', refs: ['nr-07'] },
      { id: 'ler-dort', nome: 'LER/DORT' },
      { id: 'dermatoses', nome: 'Dermatoses ocupacionais' },
      { id: 'cancer-ocupacional', nome: 'Câncer relacionado ao trabalho' },
      { id: 'saude-mental-trabalho', nome: 'Burnout, assédio e transtornos mentais relacionados ao trabalho' },
    ],
  },
  {
    id: 'toxicologia',
    eixo: 'pericia',
    nome: 'Toxicologia Ocupacional',
    temas: [
      { id: 'tox-metais', nome: 'Metais (chumbo, mercúrio, cádmio, cromo, manganês)', refs: ['ibe'] },
      { id: 'tox-solventes', nome: 'Solventes (benzeno, tolueno, xileno, n-hexano)', refs: ['ibe'] },
      { id: 'tox-agrotoxicos', nome: 'Agrotóxicos (organofosforados, carbamatos, paraquat)', refs: ['ibe'] },
      { id: 'tox-gases', nome: 'Gases e asfixiantes (CO, cianeto)', refs: ['ibe'] },
      { id: 'ibe', nome: 'Indicadores biológicos (NR-07 Anexo I)', refs: ['ibe'] },
    ],
  },

  /* ===================== PILAR B — MEDICINA LEGAL ===================== */
  {
    id: 'ml-geral',
    eixo: 'legal',
    nome: 'Medicina Legal — Fundamentos',
    temas: [
      { id: 'intro-ml', nome: 'Perícia e peritos' },
      { id: 'documentos-ml', nome: 'Documentos médico-legais' },
      { id: 'etica-pericia', nome: 'Ética pericial e sigilo' },
    ],
  },
  {
    id: 'traumatologia',
    eixo: 'legal',
    nome: 'Traumatologia Forense',
    temas: [
      { id: 'trauma-mecanica', nome: 'Energias mecânicas (instrumentos)', refs: ['lesao-corporal'] },
      { id: 'paf', nome: 'Projéteis de arma de fogo', refs: ['paf'] },
      { id: 'energias-fisicas', nome: 'Energias físicas (temperatura, eletricidade, pressão)' },
      { id: 'energias-quimicas', nome: 'Energias químicas (cáusticos e venenos)' },
    ],
  },
  {
    id: 'tanatologia',
    eixo: 'legal',
    nome: 'Tanatologia Forense',
    temas: [
      { id: 'tanato-fenomenos', nome: 'Fenômenos cadavéricos', refs: ['cronotanatognose'] },
      { id: 'cronotanatognose', nome: 'Cronotanatognose', refs: ['cronotanatognose'] },
      { id: 'declaracao-obito', nome: 'Declaração de Óbito e necropsia' },
    ],
  },
  {
    id: 'asfixiologia',
    eixo: 'legal',
    nome: 'Asfixiologia Forense',
    temas: [
      { id: 'asfixias-constricao', nome: 'Enforcamento, estrangulamento, esganadura', refs: ['asfixias'] },
      { id: 'afogamento', nome: 'Afogamento', refs: ['asfixias'] },
      { id: 'sufocacao', nome: 'Sufocação, soterramento, confinamento', refs: ['asfixias'] },
    ],
  },
  {
    id: 'sexologia',
    eixo: 'legal',
    nome: 'Sexologia Forense',
    temas: [
      { id: 'crimes-sexuais', nome: 'Crimes contra a dignidade sexual' },
      { id: 'himenologia', nome: 'Himenologia e conjunção carnal' },
      { id: 'gravidez-parto', nome: 'Gravidez, parto e puerpério' },
      { id: 'aborto-infanticidio', nome: 'Aborto e infanticídio' },
    ],
  },
  {
    id: 'antropologia',
    eixo: 'legal',
    nome: 'Antropologia Forense',
    temas: [{ id: 'identificacao', nome: 'Identidade e identificação' }],
  },
  {
    id: 'psicopatologia',
    eixo: 'legal',
    nome: 'Psicopatologia e Toxicologia Forense',
    temas: [
      { id: 'imputabilidade', nome: 'Imputabilidade (CP 26–28)' },
      { id: 'transtornos-mentais-forense', nome: 'Transtornos mentais e capacidade civil' },
      { id: 'embriaguez', nome: 'Embriaguez e drogas de abuso' },
    ],
  },
  {
    id: 'direito-penal-processual',
    eixo: 'legal',
    nome: 'Direito Penal e Processual Penal aplicados',
    temas: [
      { id: 'cpp-pericias', nome: 'CPP Arts. 158–184 — perícias', refs: ['cpp-158-184'] },
      { id: 'cadeia-custodia', nome: 'Cadeia de custódia (Lei 13.964/19)', refs: ['cpp-158-184'] },
      { id: 'cp-crimes-vida', nome: 'CP Arts. 121–128 — crimes contra a vida', refs: ['cp-121-129'] },
      { id: 'cp-lesao-corporal', nome: 'CP Art. 129 — lesão corporal', refs: ['cp-121-129', 'lesao-corporal'] },
    ],
  },
  {
    id: 'criminalistica',
    eixo: 'legal',
    nome: 'Noções de Criminalística',
    trilhas: ['generalista', 'legista'],
    temas: [
      { id: 'crim-local', nome: 'Local de crime: isolamento, preservação e levantamento' },
      { id: 'crim-vestigios', nome: 'Vestígios, evidências e indícios' },
      { id: 'crim-balistica', nome: 'Balística forense' },
      { id: 'crim-papiloscopia', nome: 'Papiloscopia e identificação humana' },
      { id: 'crim-genetica', nome: 'Genética forense e DNA' },
    ],
  },

  /* ===================== PILAR C — CLÍNICA MÉDICA E URGÊNCIA ===================== */
  {
    id: 'clinica-medica',
    eixo: 'clinica',
    nome: 'Clínica Médica por sistemas',
    temas: [
      { id: 'cm-cardiometabolica', nome: 'HAS, DM, dislipidemia, IC e FA' },
      { id: 'cm-respiratoria', nome: 'Asma, DPOC, pneumonia e tuberculose' },
      { id: 'cm-renal-gastro', nome: 'Nefro e gastro (DRC, ITU, DRGE, hepatopatias)' },
      { id: 'cm-endocrino', nome: 'Tireoide e obesidade' },
      { id: 'cm-neuro', nome: 'Cefaleia, tontura, epilepsia, AVC e cuidados paliativos' },
      { id: 'cm-hemato', nome: 'Anemias, anticoagulação e prescrição segura' },
      { id: 'cm-musculoesqueletico', nome: 'Ortopedia e reumato: lombalgia, ombro, joelho, gota, OA' },
      { id: 'cm-dermato', nome: 'Hanseníase e dermatoses comuns' },
    ],
  },
  {
    id: 'infectologia',
    eixo: 'clinica',
    nome: 'Infectologia e Doenças de Notificação',
    temas: [
      { id: 'cm-infecto', nome: 'HIV, sífilis, hepatites, arboviroses e meningites' },
      { id: 'cm-zoonoses', nome: 'Zoonoses e peçonhentos do Sul (raiva, leptospirose, hantavirose, loxoscelismo)' },
    ],
  },
  {
    id: 'urgencia',
    eixo: 'clinica',
    nome: 'Urgência e Emergência (plantão)',
    temas: [
      { id: 'cm-urgencia', nome: 'PCR, choque, sepse, SCA, AVC agudo e anafilaxia', refs: ['urgencias'] },
      { id: 'cm-trauma', nome: 'Trauma e intoxicações no pronto atendimento', refs: ['urgencias'] },
    ],
  },
  {
    id: 'aps-ciclos',
    eixo: 'clinica',
    nome: 'APS, Saúde Mental e Ciclos de Vida',
    temas: [
      { id: 'cm-saude-mental', nome: 'Saúde mental: depressão, ansiedade, bipolar, psicoses e substâncias' },
      { id: 'cm-saude-mulher', nome: 'Saúde da mulher e pré-natal' },
      { id: 'cm-saude-crianca', nome: 'Saúde da criança e PNI' },
      { id: 'cm-idoso', nome: 'Saúde do idoso' },
      { id: 'cm-rastreamento', nome: 'Rastreamento, prevenção e vacinação do adulto' },
    ],
  },

  /* ============== PILAR D — SUS, EPIDEMIOLOGIA E ÉTICA MÉDICA ============== */
  {
    id: 'sus',
    eixo: 'tronco',
    nome: 'Legislação do SUS e Políticas de Saúde',
    temas: [
      { id: 'cf-saude', nome: 'CF/88 Arts. 196–200', refs: ['sus-leis'] },
      { id: 'lei8080', nome: 'Lei 8.080/90', refs: ['sus-leis'] },
      { id: 'lei8142', nome: 'Lei 8.142/90', refs: ['sus-leis'] },
      { id: 'dec7508', nome: 'Decreto 7.508/11', refs: ['sus-leis'] },
      { id: 'pnab', nome: 'PNAB e ESF' },
      { id: 'redes-raps-pcd', nome: 'RAPS e Rede de Cuidados à Pessoa com Deficiência' },
      { id: 'renast-cerest', nome: 'RENAST, CEREST e PNSTT' },
      { id: 'vigilancia-notificacao', nome: 'Vigilância e notificação compulsória' },
    ],
  },
  {
    id: 'epidemiologia',
    eixo: 'tronco',
    nome: 'Epidemiologia',
    temas: [
      { id: 'epi-indicadores', nome: 'Indicadores de saúde e transição epidemiológica' },
      { id: 'epi-estudos', nome: 'Desenhos de estudo, medidas de associação e testes diagnósticos' },
    ],
  },
  {
    id: 'etica-medica',
    eixo: 'tronco',
    nome: 'Ética Médica e Documentos',
    temas: [
      { id: 'cem', nome: 'Código de Ética Médica' },
      { id: 'documentos-medicos', nome: 'Documentos médicos (Res. CFM 2.381/2024) e sigilo (Lei 14.289/2022)' },
    ],
  },

  /* ============== PILAR E — CONHECIMENTOS BÁSICOS E GERAIS ==============
   * Em prova de prefeitura as básicas valem 60–75% das questões (FUNDATEC Xangri-lá 2025: 40 de 60;
   * Objetiva Cachoeira do Sul 2026: 30 de 40). No Perito Médico Federal 2024, a P1 tem 50 itens de
   * conhecimentos gerais com mínimo eliminatório. Os ids legados (portugues, rlm, informatica,
   * direito-adm, etica-servico-publico) viraram o tema "questões mistas" de cada disciplina.
   */
  {
    id: 'lingua-portuguesa',
    eixo: 'basicos',
    nome: 'Língua Portuguesa',
    trilhas: ['generalista', 'pericia', 'legista', 'clinico'],
    temas: [
      { id: 'portugues', nome: 'Português — questões mistas e diagnóstico' },
      { id: 'lp-interpretacao', nome: 'Compreensão e interpretação de textos' },
      { id: 'lp-tipologia', nome: 'Tipologia e gêneros textuais' },
      { id: 'lp-coesao', nome: 'Coesão, coerência e conectores' },
      { id: 'lp-ortografia', nome: 'Ortografia oficial, acentuação, hífen e uso dos porquês' },
      { id: 'lp-classes', nome: 'Classes de palavras e formação de palavras' },
      { id: 'lp-verbos', nome: 'Verbos: tempos, modos, vozes e correlação' },
      { id: 'lp-termos-oracao', nome: 'Termos da oração (período simples)' },
      { id: 'lp-periodo-composto', nome: 'Período composto: coordenação e subordinação' },
      { id: 'lp-pontuacao', nome: 'Pontuação' },
      { id: 'lp-concordancia', nome: 'Concordância verbal e nominal' },
      { id: 'lp-regencia', nome: 'Regência verbal e nominal' },
      { id: 'lp-crase', nome: 'Crase' },
      { id: 'lp-colocacao', nome: 'Colocação pronominal' },
      { id: 'lp-semantica', nome: 'Semântica e figuras de linguagem' },
      { id: 'lp-reescrita', nome: 'Reescrita e substituição de trechos' },
      { id: 'lp-redacao-oficial', nome: 'Redação Oficial (Manual da Presidência da República)' },
    ],
  },
  {
    id: 'matematica',
    eixo: 'basicos',
    nome: 'Matemática',
    trilhas: ['generalista', 'legista', 'clinico'],
    temas: [
      { id: 'mat-operacoes', nome: 'Números, operações, frações, MMC/MDC, potências e raízes' },
      { id: 'mat-razao-proporcao', nome: 'Razão, proporção, divisão proporcional e escalas' },
      { id: 'mat-regra-tres', nome: 'Regra de três simples e composta' },
      { id: 'mat-porcentagem', nome: 'Porcentagem, aumentos e descontos sucessivos' },
      { id: 'mat-juros', nome: 'Juros simples e compostos' },
      { id: 'mat-equacoes', nome: 'Equações, inequações e sistemas (1º e 2º graus)' },
      { id: 'mat-funcoes', nome: 'Funções: afim, quadrática, exponencial e logarítmica (noções)' },
      { id: 'mat-medidas', nome: 'Sistema métrico, medidas de tempo e conversões' },
      { id: 'mat-geometria', nome: 'Geometria plana e espacial (áreas, volumes, Pitágoras)' },
      { id: 'mat-sequencias', nome: 'Progressões aritméticas e geométricas' },
      { id: 'mat-estatistica', nome: 'Estatística descritiva, tabelas e gráficos' },
      { id: 'mat-contagem-probabilidade', nome: 'Análise combinatória e probabilidade' },
      { id: 'mat-saude', nome: 'Matemática aplicada à saúde (dose por peso, gotejamento, IMC, diluições)' },
    ],
  },
  {
    id: 'raciocinio-logico',
    eixo: 'basicos',
    nome: 'Raciocínio Lógico',
    trilhas: ['generalista', 'pericia', 'legista', 'clinico'],
    temas: [
      { id: 'rlm', nome: 'Raciocínio lógico — questões mistas' },
      { id: 'rl-proposicoes', nome: 'Proposições, conectivos e tabela-verdade' },
      { id: 'rl-equivalencias', nome: 'Equivalências e negações (De Morgan, contrapositiva)' },
      { id: 'rl-tautologia', nome: 'Tautologia, contradição e contingência' },
      { id: 'rl-argumentos', nome: 'Argumentos, validade e silogismos' },
      { id: 'rl-quantificadores', nome: 'Quantificadores e diagramas lógicos' },
      { id: 'rl-sequencias', nome: 'Sequências lógicas de números, letras e figuras' },
      { id: 'rl-associacao', nome: 'Associação lógica, verdades e mentiras' },
      { id: 'rl-conjuntos', nome: 'Conjuntos e problemas com diagramas de Venn' },
      { id: 'rl-cientifico', nome: 'Raciocínio científico: método, hipóteses, causalidade e vieses' },
    ],
  },
  {
    id: 'lingua-inglesa',
    eixo: 'basicos',
    nome: 'Língua Inglesa (leitura instrumental)',
    // Cobrada em perícia oficial (IGP-RS 2025 e Polícia Científica-SC 2025: 5 questões cada).
    trilhas: ['generalista', 'legista'],
    temas: [
      { id: 'ing-leitura', nome: 'Leitura e interpretação de textos técnicos em inglês' },
      { id: 'ing-vocabulario', nome: 'Vocabulário médico e forense; falsos cognatos' },
      { id: 'ing-gramatica', nome: 'Gramática instrumental: tempos verbais, modais, voz passiva e conectivos' },
    ],
  },
  {
    id: 'nocoes-informatica',
    eixo: 'basicos',
    nome: 'Noções de Informática',
    trilhas: ['generalista', 'pericia', 'legista', 'clinico'],
    temas: [
      { id: 'informatica', nome: 'Informática — questões mistas' },
      { id: 'inf-hardware', nome: 'Hardware, software e armazenamento' },
      { id: 'inf-windows', nome: 'Windows 10/11: arquivos, pastas e atalhos' },
      { id: 'inf-linux', nome: 'Linux (noções)' },
      { id: 'inf-word', nome: 'Editor de textos (Word/Writer)' },
      { id: 'inf-excel', nome: 'Planilhas (Excel/Calc): fórmulas, referências e funções' },
      { id: 'inf-powerpoint', nome: 'Apresentações (PowerPoint/Impress)' },
      { id: 'inf-internet', nome: 'Internet, intranet, extranet, navegadores e URLs' },
      { id: 'inf-email', nome: 'Correio eletrônico' },
      { id: 'inf-seguranca', nome: 'Segurança da informação: malware, phishing, backup, criptografia e VPN' },
      { id: 'inf-nuvem', nome: 'Nuvem e colaboração (OneDrive, Google Drive, Microsoft 365, Teams)' },
      { id: 'inf-redes', nome: 'Redes e protocolos (TCP/IP, DNS, HTTP/HTTPS, Wi-Fi)' },
      { id: 'inf-sei', nome: 'SEI — Sistema Eletrônico de Informações' },
      { id: 'inf-ia', nome: 'Noções de inteligência artificial' },
    ],
  },
  {
    id: 'direito-constitucional',
    eixo: 'basicos',
    nome: 'Direito Constitucional',
    trilhas: ['generalista', 'pericia', 'legista', 'clinico'],
    temas: [
      { id: 'dc-principios', nome: 'Princípios fundamentais (arts. 1º a 4º)' },
      { id: 'dc-direitos-individuais', nome: 'Direitos e deveres individuais e coletivos (art. 5º) e remédios constitucionais' },
      { id: 'dc-direitos-sociais-politicos', nome: 'Direitos sociais, nacionalidade e direitos políticos' },
      { id: 'dc-organizacao-estado', nome: 'Organização do Estado: União, estados e municípios' },
      { id: 'dc-administracao-publica', nome: 'Administração pública na Constituição (arts. 37 a 41)' },
      { id: 'dc-poderes-controle', nome: 'Organização dos Poderes e controle de constitucionalidade (noções)' },
    ],
  },
  {
    id: 'direito-administrativo',
    eixo: 'basicos',
    nome: 'Direito Administrativo',
    trilhas: ['generalista', 'pericia', 'legista'],
    temas: [
      { id: 'direito-adm', nome: 'Direito Administrativo e Constitucional — questões mistas' },
      { id: 'da-principios', nome: 'Administração pública: conceito e princípios' },
      { id: 'da-organizacao', nome: 'Organização administrativa: direta e indireta' },
      { id: 'da-poderes', nome: 'Poderes administrativos e abuso de poder' },
      { id: 'da-atos', nome: 'Atos administrativos' },
      { id: 'da-agentes', nome: 'Agentes públicos: espécies, cargo, emprego e função' },
      { id: 'da-responsabilidade', nome: 'Responsabilidade civil do Estado' },
      { id: 'da-improbidade', nome: 'Improbidade administrativa (Lei 8.429/1992)' },
      { id: 'da-processo', nome: 'Processo administrativo federal (Lei 9.784/1999)' },
      { id: 'da-licitacoes', nome: 'Licitações e contratos (Lei 14.133/2021 — noções)' },
      { id: 'da-controle', nome: 'Controle da administração pública' },
    ],
  },
  {
    id: 'direito-penal',
    eixo: 'basicos',
    nome: 'Direito Penal e Processual Penal (noções)',
    // Parte geral e processo — cobrados nas provas de perito oficial (PR, SC, RS) e da PF;
    // os crimes e perícias do interesse médico-legal estão no eixo Medicina Legal.
    trilhas: ['generalista', 'legista'],
    temas: [
      { id: 'dp-parte-geral', nome: 'Direito Penal: princípios, crime, excludentes e imputabilidade' },
      { id: 'dp-crimes-adm-publica', nome: 'Crimes contra a administração pública' },
      { id: 'dp-leis-especiais', nome: 'Leis penais especiais: drogas, armas, trânsito e execução penal (noções)' },
      { id: 'dpp-inquerito-acao', nome: 'Inquérito policial e ação penal' },
      { id: 'dpp-prisoes', nome: 'Prisões, medidas cautelares e liberdade provisória' },
      { id: 'dpp-provas', nome: 'Provas no processo penal (CPP, arts. 155 a 250)' },
    ],
  },
  {
    id: 'servidor-publico',
    eixo: 'basicos',
    nome: 'Regime Jurídico do Servidor Público',
    trilhas: ['generalista', 'pericia', 'legista', 'clinico'],
    temas: [
      { id: 'srv-8112-provimento', nome: 'Lei 8.112: provimento, posse, exercício, estágio probatório e vacância', refs: ['lei-8112-saude'] },
      { id: 'srv-8112-direitos', nome: 'Lei 8.112: vencimento, vantagens, férias, licenças e afastamentos', refs: ['lei-8112-saude'] },
      { id: 'srv-8112-disciplinar', nome: 'Lei 8.112: deveres, proibições, penalidades, sindicância e PAD' },
      { id: 'srv-estatutos-sul', nome: 'Estatutos dos servidores do PR, SC e RS' },
      { id: 'srv-municipal', nome: 'Estatuto municipal e Lei Orgânica: como estudar a lei do seu município' },
      { id: 'srv-ebserh', nome: 'EBSERH: Lei 12.550/2011, estatuto social e código de ética' },
    ],
  },
  {
    id: 'etica-publica',
    eixo: 'basicos',
    nome: 'Ética no Serviço Público, Transparência e LGPD',
    trilhas: ['generalista', 'pericia', 'legista'],
    temas: [
      { id: 'etica-servico-publico', nome: 'Ética no serviço público — questões mistas' },
      { id: 'etp-1171', nome: 'Código de Ética do servidor federal (Decreto 1.171/1994)' },
      { id: 'etp-6029', nome: 'Sistema de Gestão da Ética (Decreto 6.029/2007)' },
      { id: 'etp-conflito', nome: 'Conflito de interesses (Lei 12.813/2013)' },
      { id: 'etp-lai', nome: 'Lei de Acesso à Informação (Lei 12.527/2011)' },
      { id: 'etp-lgpd', nome: 'LGPD (Lei 13.709/2018) e dados pessoais de saúde' },
      { id: 'etp-assedio', nome: 'Prevenção e enfrentamento do assédio na administração pública' },
    ],
  },
  {
    id: 'legislacao-geral',
    eixo: 'basicos',
    nome: 'Legislação Geral e Direitos Humanos',
    trilhas: ['generalista', 'legista', 'clinico'],
    temas: [
      { id: 'lg-maria-penha', nome: 'Lei Maria da Penha (Lei 11.340/2006)' },
      { id: 'lg-eca', nome: 'Estatuto da Criança e do Adolescente (Lei 8.069/1990)' },
      { id: 'lg-pessoa-idosa', nome: 'Estatuto da Pessoa Idosa (Lei 10.741/2003)' },
      { id: 'lg-igualdade-racial', nome: 'Estatuto da Igualdade Racial (Lei 12.288/2010) e crimes de racismo' },
      { id: 'lg-pcd', nome: 'Estatuto da Pessoa com Deficiência (Lei 13.146/2015)' },
      { id: 'lg-tortura-abuso', nome: 'Tortura (Lei 9.455/1997), abuso de autoridade (Lei 13.869/2019) e Protocolo de Istambul' },
      { id: 'lg-direitos-humanos', nome: 'Direitos humanos: DUDH e Convenção Americana (Pacto de San José)' },
    ],
  },
  {
    id: 'regionais-sul',
    eixo: 'basicos',
    nome: 'História e Geografia do Sul',
    trilhas: ['generalista', 'legista', 'clinico'],
    temas: [
      { id: 'reg-pr-historia', nome: 'Paraná: história' },
      { id: 'reg-pr-geografia', nome: 'Paraná: geografia e economia' },
      { id: 'reg-sc-historia', nome: 'Santa Catarina: história' },
      { id: 'reg-sc-geografia', nome: 'Santa Catarina: geografia e economia' },
      { id: 'reg-rs-historia', nome: 'Rio Grande do Sul: história' },
      { id: 'reg-rs-geografia', nome: 'Rio Grande do Sul: geografia e economia' },
      { id: 'reg-municipio', nome: 'Município do edital: como estudar história, geografia e dados (IBGE Cidades)' },
    ],
  },
  {
    id: 'conhecimentos-gerais',
    eixo: 'basicos',
    nome: 'Conhecimentos Gerais e Atualidades',
    trilhas: ['generalista', 'clinico'],
    temas: [
      { id: 'cg-metodo', nome: 'Atualidades: como estudar e recorte do edital' },
      { id: 'cg-saude-ciencia', nome: 'Saúde pública e ciência' },
      { id: 'cg-meio-ambiente', nome: 'Meio ambiente, clima e desastres' },
      { id: 'cg-economia-sociedade', nome: 'Economia e sociedade brasileira' },
      { id: 'cg-politica', nome: 'Política e instituições' },
      { id: 'cg-tecnologia', nome: 'Tecnologia e inteligência artificial' },
      { id: 'cg-mundo', nome: 'Brasil e o mundo' },
    ],
  },
  {
    id: 'redacao-discursiva',
    eixo: 'basicos',
    nome: 'Redação e Prova Discursiva',
    trilhas: ['generalista', 'legista'],
    temas: [
      { id: 'red-dissertacao', nome: 'Texto dissertativo-argumentativo' },
      { id: 'red-laudo-parecer', nome: 'Laudo, parecer e relatório na prova discursiva' },
      { id: 'red-criterios', nome: 'Critérios de correção e gestão do tempo' },
    ],
  },
  {
    id: 'basicas',
    eixo: 'basicos',
    nome: 'Básicas — simulados e questões mistas',
    trilhas: ['generalista', 'pericia', 'legista', 'clinico'],
    temas: [{ id: 'basicas-mistas', nome: 'Simulados e baterias mistas de básicas' }],
  },
];

const temaIndex = new Map<string, { tema: Tema; disciplina: Disciplina }>();
for (const disciplina of DISCIPLINAS) {
  for (const tema of disciplina.temas) temaIndex.set(tema.id, { tema, disciplina });
}

export function getTema(temaId: string): { tema: Tema; disciplina: Disciplina } | undefined {
  return temaIndex.get(temaId);
}

export function getDisciplina(disciplinaId: string): Disciplina | undefined {
  return DISCIPLINAS.find((d) => d.id === disciplinaId);
}

export function disciplinasDoEixo(eixo: Eixo): Disciplina[] {
  return DISCIPLINAS.filter((d) => d.eixo === eixo);
}

export function eixoDoTema(temaId: string): Eixo | undefined {
  return temaIndex.get(temaId)?.disciplina.eixo;
}

export const TODOS_TEMAS: { id: string; nome: string; disciplinaId: string; eixo: Eixo }[] = DISCIPLINAS.flatMap(
  (d) => d.temas.map((t) => ({ id: t.id, nome: t.nome, disciplinaId: d.id, eixo: d.eixo })),
);
