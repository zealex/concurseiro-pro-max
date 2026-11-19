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

  /* ===================== PILAR D — SUS, ÉTICA E BÁSICAS ===================== */
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
  {
    id: 'basicas',
    eixo: 'tronco',
    nome: 'Disciplinas Básicas de Edital',
    temas: [
      { id: 'portugues', nome: 'Português' },
      { id: 'rlm', nome: 'Raciocínio Lógico' },
      { id: 'informatica', nome: 'Informática' },
      { id: 'direito-adm', nome: 'Direito Administrativo e Constitucional (Lei 8.112)' },
      { id: 'etica-servico-publico', nome: 'Ética no serviço público, LAI e LGPD' },
    ],
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
