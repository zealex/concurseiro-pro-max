import { getDisciplina } from './eixos';
import type { BlocoSemana, Trilha } from './types';

/**
 * Seleção dos blocos de uma semana para uma trilha — fonte única usada pelo plano, pelo agendador,
 * pela visão das 12 semanas e pelo gerador do PLANO em Markdown.
 *
 * - Blocos "fixos" (médicos e legados, sem `nivel`): entram se pertencem à trilha.
 * - Blocos flexíveis (com `nivel`: básicas e criminalística):
 *     elegíveis → com edital-alvo, as disciplinas do edital (ignora a trilha); sem edital, a trilha;
 *     núcleo sempre; depois complemento e reforço enquanto a semana couber em 5 × orçamento diário;
 *     reforço só quando as básicas valem ≥ 50% da prova (sem edital: trilha Clínico/prefeituras).
 */

export interface PerfilBasicas {
  /** Disciplinas do edital-alvo; `null` = sem edital (usa as trilhas). */
  disciplinas: readonly string[] | null;
  /** Inclui blocos de reforço (básicas ≥ 50% dos pontos). */
  reforco: boolean;
}

/** Orçamento diário padrão (min) quando nada é informado. */
export const ORCAMENTO_PADRAO = 210;

export interface OpcoesSelecao {
  perfil?: PerfilBasicas | null;
  orcamentoMin?: number;
  /** Semana comprimida (prova-alvo próxima): só blocos essenciais/núcleo e o do dia 6. */
  essencialApenas?: boolean;
}

/** Sem edital-alvo, só a trilha de prefeituras recebe o reforço de básicas. */
export function reforcoPadrao(trilha: Trilha): boolean {
  return trilha === 'clinico';
}

export function capacidadeSemanal(orcamentoMin: number = ORCAMENTO_PADRAO): number {
  return 5 * orcamentoMin;
}

/** Chave estável do perfil (para caches). */
export function chavePerfil(perfil: PerfilBasicas | null | undefined): string {
  if (!perfil) return 'trilha';
  const disc = perfil.disciplinas ? [...perfil.disciplinas].sort().join('+') : '*';
  return `${disc}|${perfil.reforco ? 1 : 0}`;
}

function elegivel(b: BlocoSemana, trilha: Trilha, edital: Set<string> | null, editalTemBasicas: boolean): boolean {
  if (!edital) return b.trilhas.includes(trilha);
  // Simulados/baterias mistas de básicas valem para qualquer edital que cobre básicas.
  if (b.disciplinaId === 'basicas') return editalTemBasicas;
  return edital.has(b.disciplinaId);
}

export function selecionarBlocos(blocos: BlocoSemana[], trilha: Trilha, op: OpcoesSelecao = {}): BlocoSemana[] {
  const essencialApenas = op.essencialApenas ?? false;
  const perfil = op.perfil ?? null;
  const capacidade = capacidadeSemanal(op.orcamentoMin);
  const reforco = perfil ? perfil.reforco : reforcoPadrao(trilha);
  const edital = perfil?.disciplinas ? new Set(perfil.disciplinas) : null;
  const editalTemBasicas = !!perfil?.disciplinas?.some((id) => getDisciplina(id)?.eixo === 'basicos');

  const fixos = new Set(
    blocos.filter((b) => !b.nivel && b.trilhas.includes(trilha) && (!essencialApenas || b.essencial || b.sabado)).map((b) => b.id),
  );
  const elegiveis = blocos.filter((b) => {
    if (!b.nivel) return false;
    if (!elegivel(b, trilha, edital, editalTemBasicas)) return false;
    if (b.nivel === 'reforco' && !reforco) return false;
    if (essencialApenas && b.nivel !== 'nucleo') return false;
    return true;
  });

  let carga = blocos.filter((b) => fixos.has(b.id) && !b.sabado).reduce((acc, b) => acc + b.minutos, 0);
  const escolhidos = new Set<string>();
  for (const nivel of ['nucleo', 'complemento', 'reforco'] as const) {
    for (const b of elegiveis) {
      if (b.nivel !== nivel) continue;
      if (nivel !== 'nucleo' && carga + b.minutos > capacidade) continue;
      escolhidos.add(b.id);
      carga += b.minutos;
    }
  }
  return blocos.filter((b) => fixos.has(b.id) || escolhidos.has(b.id));
}
