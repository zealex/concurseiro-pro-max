import { z } from 'zod';

/** Formato do arquivo de backup (.json) — puro, testável fora do app. */
export const BACKUP_APP = 'concurseiro-pro-max';
/**
 * 1 = versão inicial · 2 = foco no generalista (novos eixos/trilhas) · 3 = eixo de Conhecimentos Básicos.
 * Backups antigos são migrados na importação (tabela de versões em src/store/importacao.ts).
 * Um app desatualizado rejeita backups de versão mais nova em vez de perder dados em silêncio.
 */
export const BACKUP_VERSAO = 3;

const objeto = z.record(z.string(), z.unknown());

export const BackupSchema = z.object({
  app: z.literal(BACKUP_APP),
  schemaVersion: z.number().int().min(1).max(BACKUP_VERSAO),
  exportedAt: z.string(),
  data: z.object({
    settings: objeto.optional(),
    cronograma: objeto.optional(),
    questoes: objeto.optional(),
    radar: objeto.optional(),
    checklist: objeto.optional(),
    focus: objeto.optional(),
  }),
});
export type Backup = z.infer<typeof BackupSchema>;

export function validarBackup(texto: string): { ok: true; backup: Backup } | { ok: false; erro: string } {
  let bruto: unknown;
  try {
    bruto = JSON.parse(texto);
  } catch {
    return { ok: false, erro: 'O arquivo não é um JSON válido.' };
  }
  const r = BackupSchema.safeParse(bruto);
  if (!r.success) return { ok: false, erro: 'Este arquivo não é um backup do Concurseiro Pro Max (ou é de uma versão mais nova).' };
  return { ok: true, backup: r.data };
}
