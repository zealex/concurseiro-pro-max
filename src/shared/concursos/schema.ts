import { z } from 'zod';

/**
 * Esquema único de concursos do Radar Sul — usado pelo robô (scripts/) e pelo app (src/).
 * Datas de calendário: "YYYY-MM-DD". Instantes: ISO 8601 completo.
 */

export const UFS = ['PR', 'SC', 'RS'] as const;
export type UF = (typeof UFS)[number];
export const UF_NOME: Record<UF, string> = { PR: 'Paraná', SC: 'Santa Catarina', RS: 'Rio Grande do Sul' };

export const TAGS = ['medicina-do-trabalho', 'medico-legista', 'medicina-geral-especialidades'] as const;
export type TagCargo = (typeof TAGS)[number];

export const SUBCATEGORIAS = ['clinico-esf-plantonista', 'especialidades'] as const;
export type Subcategoria = (typeof SUBCATEGORIAS)[number];

/** As 4 categorias exibidas nos filtros do app. */
export const CATEGORIAS = ['medicina-do-trabalho', 'medico-legista', 'clinico-esf-plantonista', 'especialidades'] as const;
export type Categoria = (typeof CATEGORIAS)[number];
export const CATEGORIA_LABEL: Record<Categoria, string> = {
  'medicina-do-trabalho': 'Medicina do Trabalho',
  'medico-legista': 'Médico Legista / Perito',
  'clinico-esf-plantonista': 'Médico Clínico / ESF / Plantonista',
  especialidades: 'Outras Especialidades Médicas',
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

/** Categoria de filtro (4 opções da UI) a partir de tag + subcategoria. */
export function categoriaDe(c: { tag: TagCargo; subcategoria: Subcategoria | null }): Categoria {
  if (c.tag === 'medicina-do-trabalho') return 'medicina-do-trabalho';
  if (c.tag === 'medico-legista') return 'medico-legista';
  return c.subcategoria === 'especialidades' ? 'especialidades' : 'clinico-esf-plantonista';
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
