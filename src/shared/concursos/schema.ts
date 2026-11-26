import { z } from 'zod';

/**
 * Esquema único de concursos do Radar Sul — usado pelo robô (scripts/) e pelo app (src/).
 * Datas de calendário: "YYYY-MM-DD". Instantes: ISO 8601 completo.
 */

export const UFS = ['PR', 'SC', 'RS'] as const;
export type UF = (typeof UFS)[number];
export const UF_NOME: Record<UF, string> = { PR: 'Paraná', SC: 'Santa Catarina', RS: 'Rio Grande do Sul' };

/**
 * Tag do grupo de cargo. Faz parte do id do registro (ver id.ts), então novos valores só são acrescentados.
 * pericia-medica = Perito Médico Federal/INSS, peritos de regimes próprios, juntas médicas e auditoria.
 */
export const TAGS = ['medicina-do-trabalho', 'medico-legista', 'pericia-medica', 'medicina-geral-especialidades'] as const;
export type TagCargo = (typeof TAGS)[number];

export const SUBCATEGORIAS = ['clinico-esf-plantonista', 'especialidades'] as const;
export type Subcategoria = (typeof SUBCATEGORIAS)[number];

/** As 5 categorias exibidas nos filtros do app — as três primeiras aceitam o médico generalista. */
export const CATEGORIAS = ['clinico-esf-plantonista', 'pericia-medica', 'medico-legista', 'medicina-do-trabalho', 'especialidades'] as const;
export type Categoria = (typeof CATEGORIAS)[number];
export const CATEGORIA_LABEL: Record<Categoria, string> = {
  'clinico-esf-plantonista': 'Clínico Geral / ESF / Plantonista',
  'pericia-medica': 'Perícia Médica (INSS / RPPS)',
  'medico-legista': 'Médico Legista (Polícia Científica / IGP)',
  'medicina-do-trabalho': 'Medicina do Trabalho (exige especialização)',
  especialidades: 'Especialidades (exige residência/RQE)',
};

/** Rótulo curto para tags (tabela, cards, Dashboard). */
export const CATEGORIA_CURTA: Record<Categoria, string> = {
  'clinico-esf-plantonista': 'Clínico / ESF / Plantão',
  'pericia-medica': 'Perícia Médica',
  'medico-legista': 'Médico Legista',
  'medicina-do-trabalho': 'Med. do Trabalho',
  especialidades: 'Especialidade',
};

/** Quem pode disputar a vaga: o generalista recém-formado (graduação + CRM) ou só o especialista. */
export const ACESSOS = ['generalista', 'especialista'] as const;
export type Acesso = (typeof ACESSOS)[number];
export const ACESSO_LABEL: Record<Acesso, string> = {
  generalista: 'Para generalista',
  especialista: 'Exige especialidade',
};

export const FONTES = ['pci', 'concursos-no-brasil', 'fundatec', 'fepese', 'curadoria', 'manual'] as const;
export type Fonte = (typeof FONTES)[number];
export const FONTE_LABEL: Record<Fonte, string> = {
  pci: 'PCI Concursos',
  'concursos-no-brasil': 'Concursos no Brasil',
  fundatec: 'FUNDATEC',
  fepese: 'FEPESE',
  curadoria: 'Curadoria (verificado manualmente)',
  manual: 'Cadastro manual',
};

const dataCalendario = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Data deve estar no formato AAAA-MM-DD');
const url = z.string().url();

export const CargoSchema = z.object({
  nome: z.string().min(2),
  tag: z.enum(TAGS),
  subcategoria: z.enum(SUBCATEGORIAS).nullable().default(null),
  vagas: z.number().int().nonnegative().nullable().default(null),
  cadastroReserva: z.boolean().default(false),
  remuneracao: z.number().nonnegative().nullable().default(null),
  cargaHoraria: z.string().nullable().default(null),
});
export type Cargo = z.infer<typeof CargoSchema>;

export const LinkSchema = z.object({ rotulo: z.string(), url });
export type Link = z.infer<typeof LinkSchema>;

export const ConcursoSchema = z.object({
  id: z.string().min(1),
  titulo: z.string().min(3),
  orgao: z.string().min(2),
  cidade: z.string().min(2),
  uf: z.enum(UFS),
  tipo: z.enum(['concurso', 'processo-seletivo']),
  tag: z.enum(TAGS),
  subcategoria: z.enum(SUBCATEGORIAS).nullable().default(null),
  cargos: z.array(CargoSchema).min(1),
  vagasTotal: z.number().int().nonnegative().nullable().default(null),
  remuneracaoMax: z.number().nonnegative().nullable().default(null),
  cargaHoraria: z.string().nullable().default(null),
  banca: z.string().nullable().default(null),
  inscricoes: z
    .object({ inicio: dataCalendario.nullable().default(null), fim: dataCalendario.nullable().default(null) })
    .default({ inicio: null, fim: null }),
  dataProva: dataCalendario.nullable().default(null),
  editalUrl: url.nullable().default(null),
  inscricaoUrl: url.nullable().default(null),
  relacionados: z.array(LinkSchema).default([]),
  fonte: z.enum(FONTES),
  fonteUrl: url,
  ano: z.number().int().min(2000).max(2100),
  /** Número do certame ("3/2026"), quando a notícia o informa. Separa editais diferentes do mesmo órgão no mesmo ano. */
  edital: z.string().nullable().default(null),
  firstSeenAt: z.string().min(10),
  lastSeenAt: z.string().min(10),
  isNew: z.boolean().default(false),
  observacoes: z.string().nullable().default(null),
});
export type Concurso = z.infer<typeof ConcursoSchema>;
export type ConcursoInput = z.input<typeof ConcursoSchema>;

export const SourceStatusSchema = z.object({
  nome: z.string(),
  ok: z.boolean(),
  itens: z.number().int().nonnegative(),
  medicos: z.number().int().nonnegative().default(0),
  erro: z.string().nullable().default(null),
  /** Fonte principal (agregadores): se falhar, o app avisa que o Radar pode estar incompleto. */
  essencial: z.boolean().default(false),
});
export type SourceStatus = z.infer<typeof SourceStatusSchema>;

export const FeedSchema = z.object({
  version: z.literal(1),
  generatedAt: z.string(),
  escopo: z.string().default('Concursos e processos seletivos médicos em PR, SC e RS'),
  sources: z.array(SourceStatusSchema).default([]),
  concursos: z.array(ConcursoSchema),
});
export type Feed = z.infer<typeof FeedSchema>;

/** Categoria de filtro (5 opções da UI) a partir de tag + subcategoria. */
export function categoriaDe(c: { tag: TagCargo; subcategoria: Subcategoria | null }): Categoria {
  if (c.tag === 'medicina-do-trabalho') return 'medicina-do-trabalho';
  if (c.tag === 'medico-legista') return 'medico-legista';
  if (c.tag === 'pericia-medica') return 'pericia-medica';
  return c.subcategoria === 'especialidades' ? 'especialidades' : 'clinico-esf-plantonista';
}

/**
 * Acesso a partir da categoria. Legista e perícia exigem, em regra, só graduação + CRM;
 * clínico/ESF/plantonista também. Médico do Trabalho exige especialização (NR-04 remete ao CFM)
 * e as demais especialidades exigem residência ou título. Sempre confirme no edital.
 */
export function acessoDe(c: { tag: TagCargo; subcategoria: Subcategoria | null }): Acesso {
  const cat = categoriaDe(c);
  return cat === 'medicina-do-trabalho' || cat === 'especialidades' ? 'especialista' : 'generalista';
}

/**
 * Valida um feed descartando apenas os registros inválidos (um registro ruim não derruba a lista).
 * Retorna null se a estrutura geral for inválida.
 */
export function parseFeedTolerante(raw: unknown): { feed: Feed; descartados: number } | null {
  const base = z
    .object({ version: z.literal(1), generatedAt: z.string(), concursos: z.array(z.unknown()) })
    .passthrough()
    .safeParse(raw);
  if (!base.success) return null;
  const concursos: Concurso[] = [];
  let descartados = 0;
  for (const item of base.data.concursos) {
    const r = ConcursoSchema.safeParse(item);
    if (r.success) concursos.push(r.data);
    else descartados++;
  }
  const sources = z.array(SourceStatusSchema).safeParse((raw as { sources?: unknown }).sources);
  const escopo = (raw as { escopo?: unknown }).escopo;
  return {
    feed: {
      version: 1,
      generatedAt: base.data.generatedAt,
      escopo: typeof escopo === 'string' ? escopo : 'Concursos e processos seletivos médicos em PR, SC e RS',
      sources: sources.success ? sources.data : [],
      concursos,
    },
    descartados,
  };
}
