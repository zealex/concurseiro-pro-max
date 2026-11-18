import type { Disciplina, Eixo, Tema } from './types';

/**
 * Mapa curricular: Eixo → Disciplina → Tema.
 * Os ids são estáveis e usados por plano, questões, revisões, pontos fracos e biblioteca.
 */
export const DISCIPLINAS: Disciplina[] = [
  /* ===================== PILAR A — MEDICINA DO TRABALHO ===================== */
  {
    id: 'nrs',
    eixo: 'trabalho',
    nome: 'Normas Regulamentadoras (NRs)',
    temas: [
      { id: 'nr01', nome: 'NR-01 — GRO/PGR e riscos psicossociais', refs: ['nr-01', 'nr-prazos'] },
      { id: 'nr04', nome: 'NR-04 — SESMT', refs: ['nr-04'] },
      { id: 'nr05', nome: 'NR-05 — CIPA (acidentes e assédio)', refs: ['nr-05', 'nr-prazos'] },
      { id: 'nr06', nome: 'NR-06 — EPI', refs: ['nr-06'] },
      { id: 'nr07', nome: 'NR-07 — PCMSO', refs: ['nr-07', 'nr-prazos', 'ibe'] },
      { id: 'nr09', nome: 'NR-09 — Agentes físicos, químicos e biológicos', refs: ['nr-09'] },
      { id: 'nr15', nome: 'NR-15 — Insalubridade', refs: ['nr-15', 'nr-prazos'] },
      { id: 'nr16', nome: 'NR-16 — Periculosidade', refs: ['nr-16'] },
      { id: 'nr17', nome: 'NR-17 — Ergonomia', refs: ['nr-17'] },
      { id: 'nr32', nome: 'NR-32 — Serviços de saúde', refs: ['nr-32'] },
    ],
  },
  {
    id: 'previdenciaria',
    eixo: 'trabalho',
    nome: 'Legislação Previdenciária e Trabalhista',
    temas: [
      { id: 'lei8213', nome: 'Lei 8.213/91 — acidente do trabalho e benefícios', refs: ['lei-8213'] },
      { id: 'dec3048-ntep', nome: 'Decreto 3.048/99 — Anexo II, NTEP, FAP', refs: ['decreto-3048'] },
      { id: 'clt-sst', nome: 'CLT Arts. 154–201', refs: ['clt-sst'] },
      { id: 'ldrt', nome: 'LDRT — Portaria GM/MS 1.999/2023' },
    ],
  },
  {
    id: 'clinica-ocupacional',
    eixo: 'trabalho',
    nome: 'Clínica Ocupacional',
    temas: [
      { id: 'pneumoconioses', nome: 'Pneumoconioses (silicose, asbestose, PTC)' },
      { id: 'pair', nome: 'PAIR e audiometria ocupacional', refs: ['nr-07'] },
      { id: 'ler-dort', nome: 'LER/DORT' },
      { id: 'dermatoses', nome: 'Dermatoses ocupacionais' },
      { id: 'cancer-ocupacional', nome: 'Câncer relacionado ao trabalho' },
      { id: 'saude-mental-trabalho', nome: 'Transtornos mentais e Burnout' },
    ],
  },
  {
    id: 'toxicologia',
    eixo: 'trabalho',
    nome: 'Toxicologia Ocupacional',
    temas: [
      { id: 'tox-metais', nome: 'Metais (chumbo, mercúrio, cádmio, cromo, manganês)', refs: ['ibe'] },
      { id: 'tox-solventes', nome: 'Solventes (benzeno, tolueno, xileno, n-hexano)', refs: ['ibe'] },
      { id: 'tox-agrotoxicos', nome: 'Agrotóxicos (organofosforados, carbamatos, paraquat)', refs: ['ibe'] },
      { id: 'tox-gases', nome: 'Gases e asfixiantes (CO, cianeto)', refs: ['ibe'] },
      { id: 'ibe', nome: 'Indicadores biológicos (NR-07 Anexo I)', refs: ['ibe'] },
    ],
  },
  {
    id: 'pericia-ocupacional',
    eixo: 'trabalho',
    nome: 'Perícia e Nexo Ocupacional',
    temas: [
      { id: 'nexo-causal', nome: 'Nexo causal (Schilling, Bradford Hill, Res. CFM 2.183/2018)' },
      { id: 'pericia-previdenciaria', nome: 'Perícia previdenciária e trabalhista' },
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

  /* ===================== PILAR C — TRONCO COMUM ===================== */
  {
    id: 'sus',
    eixo: 'tronco',
    nome: 'Legislação do SUS',
    temas: [
      { id: 'cf-saude', nome: 'CF/88 Arts. 196–200', refs: ['sus-leis'] },
      { id: 'lei8080', nome: 'Lei 8.080/90', refs: ['sus-leis'] },
      { id: 'lei8142', nome: 'Lei 8.142/90', refs: ['sus-leis'] },
      { id: 'dec7508', nome: 'Decreto 7.508/11', refs: ['sus-leis'] },
      { id: 'pnab', nome: 'PNAB e ESF' },
      { id: 'renast-cerest', nome: 'RENAST, CEREST e PNSTT' },
      { id: 'vigilancia-notificacao', nome: 'Vigilância e notificação compulsória' },
    ],
  },
  {
    id: 'etica-medica',
    eixo: 'tronco',
    nome: 'Ética Médica e Documentos',
    temas: [
      { id: 'cem', nome: 'Código de Ética Médica' },
      { id: 'documentos-medicos', nome: 'Documentos médicos (Res. CFM 2.381/2024)' },
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
      { id: 'direito-adm', nome: 'Direito Administrativo e Constitucional' },
    ],
  },
  {
    id: 'clinica-medica',
    eixo: 'tronco',
    nome: 'Clínica Médica e Saúde Coletiva (editais municipais)',
    temas: [
      { id: 'cm-cardiometabolica', nome: 'HAS, DM, dislipidemia e risco CV' },
      { id: 'cm-respiratoria', nome: 'Asma, DPOC, pneumonia e tuberculose' },
      { id: 'cm-infecto', nome: 'HIV, sífilis, hepatites e arboviroses' },
      { id: 'cm-urgencia', nome: 'Urgência e emergência' },
      { id: 'cm-saude-mulher', nome: 'Saúde da mulher e pré-natal' },
      { id: 'cm-saude-crianca', nome: 'Saúde da criança e PNI' },
      { id: 'cm-saude-mental', nome: 'Saúde mental na APS' },
      { id: 'cm-idoso', nome: 'Saúde do idoso' },
      { id: 'cm-rastreamento', nome: 'Rastreamento e prevenção' },
      { id: 'cm-renal-gastro', nome: 'Nefro e gastro na APS' },
      { id: 'cm-endocrino', nome: 'Tireoide e obesidade' },
      { id: 'cm-musculoesqueletico', nome: 'Lombalgia, gota e osteoartrite' },
      { id: 'cm-zoonoses', nome: 'Zoonoses e peçonhentos do Sul (raiva, leptospirose, hantavirose, loxoscelismo)' },
      { id: 'cm-dermato', nome: 'Hanseníase e dermatoses comuns na APS' },
      { id: 'cm-hemato', nome: 'Anemias e prescrição segura' },
      { id: 'cm-neuro', nome: 'Cefaleia, tontura, epilepsia e cuidados paliativos' },
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
