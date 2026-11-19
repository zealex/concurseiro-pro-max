import { z } from 'zod';

/**
 * Edital-alvo do usuário ("Meu Edital") — composição da prova usada para pesar o plano,
 * projetar a nota e montar simulados. Puro (sem React Native): validado ao salvar, ao
 * reidratar do armazenamento e ao importar backup.
 */

const ItemSchema = z.object({
  rotulo: z.string().min(1).max(160),
  disciplinaIds: z.array(z.string().min(1)).min(1).max(30),
  questoes: z.number().int().min(1).max(300),
  peso: z.number().positive().max(100),
  minimo: z.number().min(0).nullable().optional(),
});

const ProvaSchema = z.object({
  id: z.string().min(1).max(40),
  nome: z.string().min(1).max(160),
  formato: z.enum(['multipla', 'certo-errado']),
  alternativas: z.number().int().min(2).max(6).optional(),
  penalidadeErro: z.number().min(0).max(2).optional(),
  duracaoMin: z.number().int().positive().max(24 * 60).optional(),
  itens: z.array(ItemSchema).min(1).max(40),
  minimoPontos: z.number().min(0).nullable().optional(),
  minimoPct: z.number().min(0).max(100).nullable().optional(),
});

const FaseSchema = z.object({
  tipo: z.enum(['objetiva', 'discursiva', 'titulos', 'taf', 'psicologica', 'investigacao-social', 'saude', 'pratica', 'curso-formacao']),
  carater: z.string().max(120),
  detalhe: z.string().max(1200).optional(),
});

export const EditalAlvoSchema = z.object({
  /** Preset de origem (id de src/data/editais.ts) ou null quando montado do zero. */
  baseId: z.string().nullable(),
  nome: z.string().min(1).max(200),
  banca: z.string().max(120),
  provas: z.array(ProvaSchema).min(1).max(6),
  minimoTotal: z.number().min(0).nullable(),
  fases: z.array(FaseSchema).max(12),
  fonteUrl: z.string().max(500).optional(),
});

export type EditalAlvo = z.infer<typeof EditalAlvoSchema>;

/** Valida o edital-alvo salvo; qualquer coisa inválida vira `null` (o app segue sem edital). */
export function editalValidoOuNulo(valor: unknown): EditalAlvo | null {
  if (valor === null || valor === undefined) return null;
  const r = EditalAlvoSchema.safeParse(valor);
  return r.success ? r.data : null;
}
