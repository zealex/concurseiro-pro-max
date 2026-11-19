import { BANCAS } from '../bancas';
import { getDisciplina } from '../eixos';
import type { BancoConteudo, BlocoResumo, QuestaoTreino } from '../types';

/**
 * Validação automática dos bancos de conteúdo (resumos, questões autorais, flashcards).
 * Usada pelos testes e pelo script `npm run conteudo:validar -- <disciplina>`.
 * `erros` reprovam o banco; `avisos` apontam lacunas de cobertura.
 */

export interface ResultadoValidacao {
  erros: string[];
  avisos: string[];
}

/** Disciplinas cujas questões precisam de `fundamento` (artigo de lei/norma). */
const DISCIPLINAS_DE_LEI = new Set([
  'direito-constitucional',
  'direito-administrativo',
  'servidor-publico',
  'etica-publica',
  'legislacao-geral',
]);

/** Temas legados ("questões mistas") — não exigem resumo próprio. */
export const TEMAS_MISTOS = new Set(['portugues', 'rlm', 'informatica', 'direito-adm', 'etica-servico-publico', 'basicas-mistas']);

export interface RegraCobertura {
  resumo: boolean;
  minQuestoes: number;
  minFlashcards: number;
}

/** Cobertura mínima por tema (não misto). Atualidades: sem banco de questões (conteúdo datado). */
export function regraCobertura(disciplinaId: string): RegraCobertura {
  if (disciplinaId === 'conhecimentos-gerais') return { resumo: true, minQuestoes: 0, minFlashcards: 4 };
  if (disciplinaId === 'redacao-discursiva') return { resumo: true, minQuestoes: 0, minFlashcards: 0 };
  return { resumo: true, minQuestoes: 4, minFlashcards: 4 };
}

const RE_DATA = /^\d{4}-\d{2}-\d{2}$/;
const IDS_BANCAS = new Set(BANCAS.map((b) => b.id));

/** Primeiro número de um texto em formato brasileiro ("R$ 1.234,56" → 1234.56; "12,5%" → 12.5). */
export function numeroDoTexto(texto: string): { valor: number; casas: number } | null {
  const m = texto.replace(/−/g, '-').match(/-?\d{1,3}(?:\.\d{3})+(?:,\d+)?|-?\d+(?:,\d+)?/);
  if (!m) return null;
  const bruto = m[0];
  const casas = bruto.includes(',') ? bruto.split(',')[1]!.length : 0;
  return { valor: Number(bruto.replace(/\./g, '').replace(',', '.')), casas };
}

function normalizarTexto(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
}

/** Confere `verificar()` contra a alternativa correta. Devolve mensagem de erro ou null. */
export function conferirCalculo(q: QuestaoTreino): string | null {
  if (!q.verificar || q.formato !== 'multipla' || !q.alternativas || q.correta === undefined) return null;
  const alternativa = q.alternativas[q.correta];
  if (alternativa === undefined) return null;
  let esperado: string | number;
  try {
    esperado = q.verificar();
  } catch (e) {
    return `verificar() lançou erro: ${(e as Error).message}`;
  }
  if (typeof esperado === 'string') {
    return normalizarTexto(esperado) === normalizarTexto(alternativa) ? null : `verificar() = "${esperado}", mas a alternativa correta é "${alternativa}"`;
  }
  const n = numeroDoTexto(alternativa);
  if (!n) return `alternativa correta "${alternativa}" não tem número para comparar com verificar() = ${esperado}`;
  const tolerancia = n.casas > 0 ? 0.5 * 10 ** -n.casas + 1e-9 : 1e-9;
  return Math.abs(n.valor - esperado) <= tolerancia ? null : `verificar() = ${esperado}, mas a alternativa correta mostra ${n.valor}`;
}

function textoDoBloco(b: BlocoResumo): string {
  switch (b.tipo) {
    case 'texto':
    case 'atencao':
      return b.texto;
    case 'lista':
      return b.itens.join(' ');
    case 'exemplo':
      return `${b.enunciado} ${b.resolucao}`;
    case 'formula':
      return `${b.formula} ${b.legenda ?? ''}`;
    case 'tabela':
      return b.tabela.linhas.flat().join(' ');
  }
}

export function validarBanco(banco: BancoConteudo): ResultadoValidacao {
  const erros: string[] = [];
  const avisos: string[] = [];
  const disciplina = getDisciplina(banco.disciplinaId);
  if (!disciplina) return { erros: [`disciplina inexistente: ${banco.disciplinaId}`], avisos };
  const temasDaDisciplina = new Set(disciplina.temas.map((t) => t.id));
  const temaValido = (temaId: string, onde: string) => {
    if (!temasDaDisciplina.has(temaId)) erros.push(`${onde}: tema "${temaId}" não pertence a ${banco.disciplinaId}`);
  };

  /* ---- textos-base ---- */
  const textos = new Set<string>();
  for (const t of banco.textos) {
    if (textos.has(t.id)) erros.push(`texto duplicado: ${t.id}`);
    textos.add(t.id);
    if (t.texto.trim().length < 300) erros.push(`${t.id}: texto-base curto demais (< 300 caracteres)`);
    if (!t.autoria.trim()) erros.push(`${t.id}: sem autoria`);
  }

  /* ---- resumos ---- */
  const comResumo = new Set<string>();
  for (const r of banco.resumos) {
    const onde = `resumo ${r.temaId}`;
    temaValido(r.temaId, onde);
    if (comResumo.has(r.temaId)) erros.push(`${onde}: duplicado`);
    comResumo.add(r.temaId);
    if (!r.titulo.trim() || !r.resumo.trim()) erros.push(`${onde}: título/resumo vazio`);
    if (r.blocos.length < 3) erros.push(`${onde}: menos de 3 blocos`);
    if (!r.fontes.length) erros.push(`${onde}: sem fontes`);
    if (!RE_DATA.test(r.atualizadoEm)) erros.push(`${onde}: atualizadoEm inválido`);
    for (const b of r.blocos) {
      if (!textoDoBloco(b).trim()) erros.push(`${onde}: bloco ${b.tipo} vazio`);
      if (b.tipo === 'tabela') {
        const n = b.tabela.colunas.length;
        b.tabela.linhas.forEach((l, i) => {
          if (l.length !== n) erros.push(`${onde}: linha ${i + 1} da tabela tem ${l.length} células (esperado ${n})`);
        });
      }
    }
  }

  /* ---- questões ---- */
  const ids = new Set<string>();
  const contagemPorTema = new Map<string, number>();
  const letras = [0, 0, 0, 0, 0];
  let multiplas = 0;
  let ce = 0;
  let certos = 0;
  for (const q of banco.questoes) {
    const onde = `questão ${q.id}`;
    if (ids.has(q.id)) erros.push(`${onde}: id duplicado`);
    ids.add(q.id);
    temaValido(q.temaId, onde);
    if (!q.id.startsWith(`${q.temaId}-q`)) erros.push(`${onde}: id deve começar com "${q.temaId}-q"`);
    contagemPorTema.set(q.temaId, (contagemPorTema.get(q.temaId) ?? 0) + 1);
    if (!q.enunciado.trim()) erros.push(`${onde}: enunciado vazio`);
    if (q.comentario.trim().length < 40) erros.push(`${onde}: comentário curto (< 40 caracteres)`);
    if (![1, 2, 3].includes(q.dificuldade)) erros.push(`${onde}: dificuldade inválida`);
    if (q.estilo && !IDS_BANCAS.has(q.estilo)) erros.push(`${onde}: estilo "${q.estilo}" não é uma banca cadastrada`);
    if (q.textoBaseId && !textos.has(q.textoBaseId)) erros.push(`${onde}: textoBaseId "${q.textoBaseId}" inexistente`);
    if (DISCIPLINAS_DE_LEI.has(banco.disciplinaId) && !q.fundamento?.trim()) erros.push(`${onde}: questão de lei sem fundamento`);
    if (q.formato === 'multipla') {
      multiplas += 1;
      const alts = q.alternativas ?? [];
      if (alts.length < 4 || alts.length > 5) erros.push(`${onde}: múltipla escolha precisa de 4 ou 5 alternativas`);
      if (alts.some((a) => !a.trim())) erros.push(`${onde}: alternativa vazia`);
      if (new Set(alts.map(normalizarTexto)).size !== alts.length) erros.push(`${onde}: alternativas repetidas`);
      if (q.correta === undefined || !Number.isInteger(q.correta) || q.correta < 0 || q.correta >= alts.length) {
        erros.push(`${onde}: índice da correta inválido`);
      } else {
        letras[q.correta] = (letras[q.correta] ?? 0) + 1;
      }
      if (q.gabaritoCE !== undefined) erros.push(`${onde}: múltipla escolha não usa gabaritoCE`);
    } else {
      ce += 1;
      if (typeof q.gabaritoCE !== 'boolean') erros.push(`${onde}: Certo/Errado precisa de gabaritoCE booleano`);
      else if (q.gabaritoCE) certos += 1;
      if (q.alternativas?.length) erros.push(`${onde}: Certo/Errado não tem alternativas`);
    }
    const calc = conferirCalculo(q);
    if (calc) erros.push(`${onde}: ${calc}`);
  }
  if (multiplas >= 10) {
    letras.forEach((n, i) => {
      if (n / multiplas > 0.4) erros.push(`gabarito desequilibrado: letra ${'ABCDE'[i]} é a correta em ${n} de ${multiplas} questões (> 40%)`);
    });
  }
  if (ce >= 10) {
    const p = certos / ce;
    if (p < 0.3 || p > 0.7) erros.push(`gabarito C/E desequilibrado: ${Math.round(p * 100)}% "Certo" (aceito: 30–70%)`);
  }
  if (banco.disciplinaId === 'matematica') {
    const semVerificar = banco.questoes.filter((q) => q.formato === 'multipla' && !q.verificar && q.temaId !== 'mat-saude');
    if (semVerificar.length) avisos.push(`${semVerificar.length} questão(ões) de Matemática sem verificar(): ${semVerificar.slice(0, 5).map((q) => q.id).join(', ')}`);
  }

  /* ---- flashcards ---- */
  const idsF = new Set<string>();
  const cartoesPorTema = new Map<string, number>();
  for (const f of banco.flashcards) {
    const onde = `flashcard ${f.id}`;
    if (idsF.has(f.id)) erros.push(`${onde}: id duplicado`);
    idsF.add(f.id);
    temaValido(f.temaId, onde);
    if (!f.id.startsWith(`${f.temaId}-f`)) erros.push(`${onde}: id deve começar com "${f.temaId}-f"`);
    cartoesPorTema.set(f.temaId, (cartoesPorTema.get(f.temaId) ?? 0) + 1);
    if (!f.frente.trim() || !f.verso.trim()) erros.push(`${onde}: frente/verso vazio`);
    if (f.verso.length > 400) erros.push(`${onde}: verso longo demais (> 400 caracteres) — divida em dois cartões`);
    if (f.validoAte !== undefined && !RE_DATA.test(f.validoAte)) erros.push(`${onde}: validoAte inválido`);
  }

  /* ---- cobertura ---- */
  const regra = regraCobertura(banco.disciplinaId);
  for (const t of disciplina.temas) {
    if (TEMAS_MISTOS.has(t.id)) continue;
    if (regra.resumo && !comResumo.has(t.id)) avisos.push(`tema ${t.id}: sem resumo`);
    const nq = contagemPorTema.get(t.id) ?? 0;
    if (nq < regra.minQuestoes) avisos.push(`tema ${t.id}: ${nq} questão(ões) (mínimo ${regra.minQuestoes})`);
    const nf = cartoesPorTema.get(t.id) ?? 0;
    if (nf < regra.minFlashcards) avisos.push(`tema ${t.id}: ${nf} flashcard(s) (mínimo ${regra.minFlashcards})`);
  }

  return { erros, avisos };
}
