/**
 * Datas de calendário como chaves "YYYY-MM-DD" no fuso local do usuário.
 * Toda aritmética é feita em UTC sobre a chave → imune a horário de verão.
 */
export type DateKey = string;

const DIA_MS = 86_400_000;

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/** Chave da data local de `d`. */
export function toKey(d: Date): DateKey {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function todayKey(agora: Date = new Date()): DateKey {
  return toKey(agora);
}

function toUtcMs(k: DateKey): number {
  const [a, m, d] = k.split('-').map(Number);
  return Date.UTC(a ?? 1970, (m ?? 1) - 1, d ?? 1);
}

function fromUtcMs(ms: number): DateKey {
  const d = new Date(ms);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

export function isDateKey(v: unknown): v is DateKey {
  return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
}

export function addDays(k: DateKey, n: number): DateKey {
  return fromUtcMs(toUtcMs(k) + n * DIA_MS);
}

/** Dias de `a` até `b` (b − a). */
export function diffDays(a: DateKey, b: DateKey): number {
  return Math.round((toUtcMs(b) - toUtcMs(a)) / DIA_MS);
}

export function maxKey(a: DateKey, b: DateKey): DateKey {
  return a >= b ? a : b;
}

/** 0 = domingo … 6 = sábado. */
export function weekday(k: DateKey): number {
  return new Date(toUtcMs(k)).getUTCDay();
}

/** Segunda-feira da semana ISO que contém `k`. */
export function startOfIsoWeek(k: DateKey): DateKey {
  const wd = weekday(k);
  return addDays(k, wd === 0 ? -6 : 1 - wd);
}

/** Date local à meia-noite (para exibição com date-fns). */
export function keyToLocalDate(k: DateKey): Date {
  const [a, m, d] = k.split('-').map(Number);
  return new Date(a ?? 1970, (m ?? 1) - 1, d ?? 1);
}

const DIAS_CURTOS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const DIAS_LONGOS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const MESES_CURTOS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const MESES_LONGOS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

/** "18/11/2026" */
export function formatBR(k: DateKey | null | undefined): string {
  if (!k || !isDateKey(k)) return '—';
  const [a, m, d] = k.split('-');
  return `${d}/${m}/${a}`;
}

/** "18/11/2026" → "2026-11-18" (null se inválida). */
export function parseBR(texto: string): DateKey | null {
  const m = texto.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  const k = `${m[3]}-${pad(Number(m[2]))}-${pad(Number(m[1]))}`;
  // Valida a data real (31/02 não existe).
  return fromUtcMs(toUtcMs(k)) === k ? k : null;
}

/** "18 nov" */
export function formatCurto(k: DateKey): string {
  const [, m, d] = k.split('-').map(Number);
  return `${d} ${MESES_CURTOS[(m ?? 1) - 1]}`;
}

/** "quarta-feira, 18 de novembro" */
export function formatLongo(k: DateKey): string {
  const [, m, d] = k.split('-').map(Number);
  return `${DIAS_LONGOS[weekday(k)]}, ${d} de ${MESES_LONGOS[(m ?? 1) - 1]}`;
}

export function diaSemanaCurto(k: DateKey): string {
  return DIAS_CURTOS[weekday(k)] ?? '';
}

/** "hoje", "amanhã", "em 3 dias", "há 2 dias" */
export function relativo(hoje: DateKey, alvo: DateKey): string {
  const d = diffDays(hoje, alvo);
  if (d === 0) return 'hoje';
  if (d === 1) return 'amanhã';
  if (d === -1) return 'ontem';
  return d > 0 ? `em ${d} dias` : `há ${-d} dias`;
}
