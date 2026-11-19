/**
 * Funções puras para navegar no texto extraído de editais e cadernos de prova (PDF → texto).
 * O `pdftotext` separa páginas com form feed (\f); o fallback em JS faz o mesmo.
 */

/** Remove acentos e padroniza caixa para buscas tolerantes ("CONTEÚDO" ≡ "conteudo"). */
export function semAcento(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export function chaveBusca(s: string): string {
  return semAcento(s).toUpperCase().replace(/\s+/g, ' ').trim();
}

export interface LinhaEdital {
  /** Número da página (1-based). */
  pagina: number;
  /** Número da linha no texto todo (1-based). */
  linha: number;
  texto: string;
}

/** Divide o texto em páginas (form feed) e devolve as linhas com página e número. */
export function linhasComPagina(texto: string): LinhaEdital[] {
  const out: LinhaEdital[] = [];
  let n = 0;
  texto.split('\f').forEach((pagina, i) => {
    for (const linha of pagina.split(/\r?\n/)) {
      n += 1;
      out.push({ pagina: i + 1, linha: n, texto: linha });
    }
  });
  return out;
}

export function contarPaginas(texto: string): number {
  const partes = texto.split('\f');
  // pdftotext termina com \f após a última página → último pedaço vazio.
  return partes.length > 1 && partes[partes.length - 1]!.trim() === '' ? partes.length - 1 : partes.length;
}

/** Heurística: PDF escaneado (sem camada de texto) tem pouquíssimos caracteres por página. */
export function pareceEscaneado(texto: string): boolean {
  const paginas = Math.max(1, contarPaginas(texto));
  const uteis = texto.replace(/\s+/g, '').length;
  return uteis / paginas < 150;
}

export interface Ocorrencia extends LinhaEdital {
  contexto: LinhaEdital[];
}

/** Busca por regex (case-insensitive e sem acento) com N linhas de contexto antes/depois. */
export function buscar(texto: string, padrao: string, contexto = 2): Ocorrencia[] {
  const linhas = linhasComPagina(texto);
  const re = new RegExp(semAcento(padrao), 'i');
  const out: Ocorrencia[] = [];
  linhas.forEach((l, i) => {
    if (!re.test(semAcento(l.texto))) return;
    const ini = Math.max(0, i - contexto);
    const fim = Math.min(linhas.length, i + contexto + 1);
    out.push({ ...l, contexto: linhas.slice(ini, fim) });
  });
  return out;
}

/** Linha "título" típica de edital: numerada (ex.: "14 DOS OBJETOS…", "9.2 DAS PROVAS") ou toda em maiúsculas. */
export function ehTitulo(linha: string): boolean {
  const t = linha.trim();
  if (t.length < 6 || t.length > 120) return false;
  const letras = semAcento(t).replace(/[^A-Za-z]/g, '');
  if (letras.length < 5) return false;
  const maiusculas = letras.replace(/[^A-Z]/g, '').length / letras.length;
  if (/^(ANEXO|CAP[IÍ]TULO)\b/i.test(t)) return true;
  if (/^\d+(\.\d+)*\.?\s+(DA|DO|DAS|DOS|DE)\s/.test(t) && maiusculas > 0.85) return true;
  return maiusculas > 0.9 && !/[.;:,]$/.test(t) && t.split(/\s+/).length <= 12;
}

export interface Secao {
  titulo: LinhaEdital;
  linhas: LinhaEdital[];
}

/**
 * Encontra seções cujo título contém `nome` (sem acento, sem caixa) e devolve o texto até o próximo
 * título de mesmo "peso" (numerado no mesmo nível ou ANEXO), limitado a `maxLinhas`.
 */
export function encontrarSecoes(texto: string, nome: string, maxLinhas = 400): Secao[] {
  const linhas = linhasComPagina(texto);
  const alvo = chaveBusca(nome);
  const out: Secao[] = [];
  for (let i = 0; i < linhas.length; i++) {
    const l = linhas[i]!;
    if (!chaveBusca(l.texto).includes(alvo) || !ehTitulo(l.texto)) continue;
    const nivel = nivelDoTitulo(l.texto);
    const corpo: LinhaEdital[] = [];
    for (let j = i + 1; j < linhas.length && corpo.length < maxLinhas; j++) {
      const prox = linhas[j]!;
      if (ehTitulo(prox.texto) && fechaSecao(prox.texto, nivel)) break;
      corpo.push(prox);
    }
    out.push({ titulo: l, linhas: corpo });
  }
  return out;
}

/** Nível do título numerado ("14" → 1, "14.2" → 2); ANEXO = 0; sem número = 99. */
export function nivelDoTitulo(linha: string): number {
  const t = linha.trim();
  if (/^ANEXO\b/i.test(t)) return 0;
  const m = t.match(/^(\d+(?:\.\d+)*)\.?\s/);
  return m ? m[1]!.split('.').length : 99;
}

function fechaSecao(linha: string, nivelAtual: number): boolean {
  const n = nivelDoTitulo(linha);
  if (n === 0) return true;
  if (nivelAtual === 99) return n !== 99; // seção sem número termina no próximo título numerado
  return n <= nivelAtual;
}

/**
 * Linhas que anunciam o quadro de provas em editais ("NÚMERO DE QUESTÕES", "QUADRO DE PROVAS"…)
 * ou cabeçalhos de cadernos ("LÍNGUA PORTUGUESA | 10 QUESTÕES").
 */
const RE_GATILHO_QUADRO =
  /(QUADRO DE PROVAS|QUADRO DEMONSTRATIVO|N(?:UMERO|O)? ?DE (?:QUESTOES|ITENS)|QUANTIDADE DE (?:QUESTOES|ITENS)|QTDE ?DE QUESTOES|AREA DE CONHECIMENTO|\b\d{1,3} QUESTOES\b)/;

/** Linha com cara de "disciplina … número" (ou "número QUESTÕES"). */
function linhaDeQuadro(texto: string): boolean {
  const t = semAcento(texto).trim();
  if (/\b\d{1,3}\s+QUEST/i.test(t)) return true;
  // pdftotext -layout às vezes solta a coluna de números em linhas próprias.
  if (/^\d{1,3}$/.test(t)) return true;
  return /[A-Za-z]{4,}.*\s\d{1,3}\s*(?:quest\w*|itens)?$/i.test(t) && !/\b(art|item|subitem|lei|decreto)\b\.?\s*\d/i.test(t);
}

export interface TrechoQuadro {
  inicio: LinhaEdital;
  linhas: LinhaEdital[];
}

/** Trechos candidatos a "quadro de provas", sem sobreposição. Exige ≥ 2 linhas com números de questões. */
export function encontrarQuadros(texto: string, linhasDepois = 30): TrechoQuadro[] {
  const linhas = linhasComPagina(texto);
  const out: TrechoQuadro[] = [];
  let ate = -1;
  for (let i = 0; i < linhas.length; i++) {
    if (i <= ate) continue;
    const chave = chaveBusca(linhas[i]!.texto).replace(/[º°ª.]/g, '');
    if (!RE_GATILHO_QUADRO.test(chave)) continue;
    const trecho = linhas.slice(i, Math.min(linhas.length, i + linhasDepois + 1));
    const comNumeros = trecho.slice(0, 15).filter((l) => linhaDeQuadro(l.texto)).length;
    if (comNumeros < 2 && !/\b\d{1,3} QUESTOES\b/.test(chave)) continue;
    out.push({ inicio: linhas[i]!, linhas: trecho });
    ate = i + linhasDepois;
  }
  return out;
}

export interface DisciplinaQuestoes {
  disciplina: string;
  questoes: number;
  linha: number;
}

/**
 * Extrai pares "disciplina → nº de questões" de linhas como:
 *   "LÍNGUA PORTUGUESA | 10 QUESTÕES"   (cadernos da Objetiva)
 *   "Língua Portuguesa ........ 10"     (quadros com pontilhado)
 *   "(P1) Objetiva  Conhecimentos gerais   50"
 * Heurística: nome com ≥ 2 letras seguidas + número de 1 a 3 dígitos no fim (ou seguido de "questões/itens").
 */
export function extrairDisciplinasComQuestoes(linhas: LinhaEdital[]): DisciplinaQuestoes[] {
  const out: DisciplinaQuestoes[] = [];
  const re = /^(.*?[A-Za-zÀ-ú][A-Za-zÀ-ú\s,/()–-]{3,}?)[\s.|:–-]{1,}(\d{1,3})(?:\s*(?:quest[õo]es|itens|quest[ãa]o))?\s*$/i;
  for (const l of linhas) {
    const t = l.texto.replace(/\s{2,}/g, '  ').trim();
    const m = t.match(re);
    if (!m) continue;
    const nome = m[1]!.replace(/^\(?P\d\)?\s*/i, '').replace(/^Objetiva\s+/i, '').replace(/[|.\s]+$/, '').trim();
    const n = Number(m[2]);
    if (!nome || n < 1 || n > 200) continue;
    if (/^(art|item|subitem|anexo|p[aá]gina|lei|decreto|portaria)\b/i.test(nome)) continue;
    out.push({ disciplina: nome, questoes: n, linha: l.linha });
  }
  return out;
}

/** Recorta o texto às páginas pedidas ("10-14" ou "7"). */
export function recortarPaginas(texto: string, intervalo: string): string {
  const m = intervalo.trim().match(/^(\d+)(?:\s*-\s*(\d+))?$/);
  if (!m) throw new Error(`Intervalo de páginas inválido: "${intervalo}" (use 10-14 ou 7)`);
  const ini = Number(m[1]);
  const fim = Number(m[2] ?? m[1]);
  const paginas = texto.split('\f');
  return paginas.slice(Math.max(0, ini - 1), Math.min(paginas.length, fim)).join('\f');
}
