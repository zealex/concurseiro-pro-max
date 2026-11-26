/** Normalização de texto para comparação, slugs e deduplicação. Sem dependências. */

/** As 27 siglas de UF (sem importar schema.ts: este módulo não tem dependências). */
const SIGLAS_UF = 'AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO';
const RE_SIGLA_UF_BARRA = new RegExp(`\\/(${SIGLAS_UF})\\b`, 'gi');
const RE_SIGLA_UF_SOLTA = new RegExp(`^(${SIGLAS_UF})$`);
const RE_SIGLA_UF_SOLTA_I = new RegExp(`^(${SIGLAS_UF})$`, 'i');
/** Nomes dos estados (sem acento), para tirar "do Estado de X" da chave do órgão. */
const RE_NOME_ESTADO = new RegExp(
  `\\b(de |do |da )?(${[
    'Santa Catarina', 'Parana', 'Rio Grande do Sul', 'Sao Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espirito Santo',
    'Distrito Federal', 'Goias', 'Mato Grosso do Sul', 'Mato Grosso', 'Bahia', 'Sergipe', 'Alagoas', 'Pernambuco',
    'Paraiba', 'Rio Grande do Norte', 'Ceara', 'Piaui', 'Maranhao', 'Amazonas', 'Acre', 'Rondonia', 'Roraima',
    'Amapa', 'Tocantins',
    // "Pará" sem acento é a preposição "para": só "do Pará".
  ].join('|')})\\b|\\bdo Para\\b`,
  'gi',
);

/** Remove acentos/diacríticos preservando maiúsculas. */
export function semAcentos(texto: string): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/** Minúsculas, sem acentos, espaços colapsados. */
export function normalizar(texto: string): string {
  return semAcentos(texto).toLowerCase().replace(/\s+/g, ' ').trim();
}

/** Slug ASCII: "Prefeitura de São José - SC" → "prefeitura-de-sao-jose-sc". */
export function slug(texto: string): string {
  return normalizar(texto)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

const STOPWORDS_INICIAIS = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'a', 'o', 'em', 'sa', 'ltda', 'eireli']);

/**
 * Chave canônica de órgão, para deduplicar a mesma instituição escrita de formas diferentes
 * (a cidade e a UF já entram no id, então a chave só precisa distinguir órgãos da mesma cidade):
 * - "Prefeitura Municipal de Umuarama" ≡ "Prefeitura do Município de X" ≡ "Município de X" → "prefeitura";
 * - "FHGV - Fundação Hospitalar Getúlio Vargas" ≡ "FHGV" ≡ "Fundação Hospitalar Getúlio Vargas" → "fhgv";
 * - "IMA SC" ≡ "IMA - Instituto do Meio Ambiente do Estado de Santa Catarina" → "ima".
 */
export function chaveOrgao(orgao: string): string {
  const n = normalizar(orgao);
  if (/^(prefeitura|municipio|fundo municipal|secretaria municipal)\b/.test(n) || /\bprefeitura\b/.test(n)) return 'prefeitura';
  if (/^camara\b/.test(n)) return 'camara';

  let base = semAcentos(orgao)
    .replace(/\(.*?\)/g, ' ')
    .replace(RE_SIGLA_UF_BARRA, ' ')
    .replace(/\b(S\.?\s?A\.?|Ltda\.?)\s*$/i, ' ')
    .replace(/\b(do|de|da) Estado( d[eoa]s?)?\b/gi, ' ')
    .replace(RE_NOME_ESTADO, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // "SIGLA - Nome por extenso": a sigla é a chave
  const partes = base.split(/\s+[-–]\s+/).map((p) => p.trim()).filter((p) => p && !RE_SIGLA_UF_SOLTA_I.test(p));
  const sigla = partes.find((p) => /^[A-Z0-9][A-Z0-9.&-]{1,9}$/.test(p));
  if (sigla) return sigla.toLowerCase().replace(/[^a-z0-9]/g, '');
  base = partes.sort((a, b) => b.length - a.length)[0] ?? base;

  const tokens = base
    .split(/\s+/)
    .map((t) => t.replace(/[^A-Za-z0-9]/g, ''))
    .filter((t) => t && !RE_SIGLA_UF_SOLTA.test(t));
  // Sigla isolada com sufixo de UF ("IMA SC", "SES")
  if (tokens.length <= 2 && tokens[0] && /^[A-Z0-9]{2,10}$/.test(tokens[0])) return tokens[0].toLowerCase();
  const significativas = tokens.map((t) => t.toLowerCase()).filter((t) => !STOPWORDS_INICIAIS.has(t));
  if (significativas.length >= 3) return significativas.map((t) => t[0]).join('');
  return significativas.join(' ');
}

/** Chave de cargo: sem acentos, minúsculas e no singular ("Médicos Generalistas" ≡ "Médico Generalista"). */
export function chaveCargo(nome: string): string {
  return normalizar(nome)
    .replace(/[^a-z0-9 ]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => (w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w))
    .join(' ');
}

/** Converte "R$ 14.994,61" → 14994.61. */
export function parseReais(texto: string): number | null {
  const m = texto.match(/R\$\s*([\d.]+(?:,\d{1,2})?)/);
  if (!m?.[1]) return null;
  const n = Number(m[1].replace(/\./g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/** Todos os valores em reais de um texto. Suporta "R$ 10,3 mil". */
export function todosReais(texto: string): number[] {
  const out: number[] = [];
  const re = /R\$\s*([\d.]+(?:,\d{1,2})?)(\s*mil\b)?/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(texto))) {
    const bruto = m[1];
    if (!bruto) continue;
    let n = Number(bruto.replace(/\./g, '').replace(',', '.'));
    if (m[2]) n = Number(bruto.replace(/\./g, '').replace(',', '.')) * 1000;
    if (Number.isFinite(n) && n > 0) out.push(Math.round(n * 100) / 100);
  }
  return out;
}

/** Primeira contagem de vagas ("4 vagas", "1 vaga", "(2 vagas)"). */
export function parseVagas(texto: string): number | null {
  const m = normalizar(texto).match(/(\d[\d.]*)\s*vagas?\b/);
  if (!m?.[1]) return null;
  const n = Number(m[1].replace(/\./g, ''));
  return Number.isFinite(n) ? n : null;
}

export function mencionaCadastroReserva(texto: string): boolean {
  return /cadastro\s+(de\s+)?reserva|\bCR\b/i.test(semAcentos(texto));
}
