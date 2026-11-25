import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FormatoQuestao } from '@/data/types';
import type { DateKey } from '@/utils/dates';
import { NOVOS_POR_DIA_PADRAO, responderCartao, type EstadoCartao, type RespostaCartao } from '@/utils/flashcards';
import { simuladoValidoOuNulo, type SimuladoAtivo } from '@/utils/simulado';
import type { FiltroTreino, HistoricoQuestao, RespostaTreino } from '@/utils/treino';
import { VERSAO_TREINO } from './migracoes';
import { opcoesPersistencia } from './persistencia';

/**
 * Treino interno: histórico por questão (totais, não um log — o armazenamento web é limitado),
 * estado dos flashcards (caixas de Leitner), preferências do treino e o simulado em andamento.
 */

export interface PrefsTreino {
  novosPorDia: number;
  quantidade: number;
  modo: 'estudo' | 'prova';
  formato: 'todos' | FormatoQuestao;
  filtro: FiltroTreino;
}

export type { SimuladoAtivo };

export interface TreinoData {
  questoes: Record<string, HistoricoQuestao>;
  cartoes: Record<string, EstadoCartao>;
  prefs: PrefsTreino;
  simuladoAtivo: SimuladoAtivo | null;
}

interface TreinoState extends TreinoData {
  registrarRespostas: (respostas: { id: string; certa: boolean }[], hoje: DateKey) => void;
  responderCartao: (id: string, resposta: RespostaCartao, hoje: DateKey) => void;
  setPrefs: (p: Partial<PrefsTreino>) => void;
  iniciarSimulado: (s: SimuladoAtivo) => void;
  responderSimulado: (questaoId: string, r: RespostaTreino) => void;
  irParaQuestao: (indice: number) => void;
  encerrarSimulado: () => void;
}

export const prefsPadrao = (): PrefsTreino => ({ novosPorDia: NOVOS_POR_DIA_PADRAO, quantidade: 10, modo: 'estudo', formato: 'todos', filtro: 'todas' });

export const treinoPadrao = (): TreinoData => ({ questoes: {}, cartoes: {}, prefs: prefsPadrao(), simuladoAtivo: null });

export const useTreinoStore = create<TreinoState>()(
  persist(
    (set) => ({
      ...treinoPadrao(),
      registrarRespostas: (respostas, hoje) =>
        set((st) => {
          const questoes = { ...st.questoes };
          for (const r of respostas) {
            const h = questoes[r.id];
            questoes[r.id] = { n: (h?.n ?? 0) + 1, acertos: (h?.acertos ?? 0) + (r.certa ? 1 : 0), ultima: hoje, ultimaCerta: r.certa };
          }
          return { questoes };
        }),
      responderCartao: (id, resposta, hoje) => set((st) => ({ cartoes: { ...st.cartoes, [id]: responderCartao(st.cartoes[id], resposta, hoje) } })),
      setPrefs: (p) => set((st) => ({ prefs: { ...st.prefs, ...p } })),
      iniciarSimulado: (s) => set({ simuladoAtivo: s }),
      responderSimulado: (questaoId, r) =>
        set((st) => (st.simuladoAtivo ? { simuladoAtivo: { ...st.simuladoAtivo, respostas: { ...st.simuladoAtivo.respostas, [questaoId]: r } } } : {})),
      irParaQuestao: (indice) => set((st) => (st.simuladoAtivo ? { simuladoAtivo: { ...st.simuladoAtivo, indice } } : {})),
      encerrarSimulado: () => set({ simuladoAtivo: null }),
    }),
    {
      ...opcoesPersistencia<TreinoState>('treino'),
      version: VERSAO_TREINO,
      merge: (persistido, atual) => {
        const p = (persistido ?? {}) as Partial<TreinoData>;
        return { ...atual, ...p, prefs: { ...prefsPadrao(), ...(p.prefs ?? {}) }, simuladoAtivo: simuladoValidoOuNulo(p.simuladoAtivo) };
      },
      partialize: ({ questoes, cartoes, prefs, simuladoAtivo }) => ({ questoes, cartoes, prefs, simuladoAtivo }),
    },
  ),
);
