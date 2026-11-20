import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FormatoQuestao } from '@/data/types';
import { STORE_KEYS } from '@/services/storage/keys';
import { zustandStorage } from '@/services/storage/zustandAdapter';
import type { DateKey } from '@/utils/dates';
import { NOVOS_POR_DIA_PADRAO, responderCartao, type EstadoCartao, type RespostaCartao } from '@/utils/flashcards';
import type { FiltroTreino, HistoricoQuestao } from '@/utils/treino';

/**
 * Treino interno: histórico por questão (totais, não um log — o armazenamento web é limitado),
 * estado dos flashcards (caixas de Leitner) e preferências do treino.
 */

export interface PrefsTreino {
  novosPorDia: number;
  quantidade: number;
  modo: 'estudo' | 'prova';
  formato: 'todos' | FormatoQuestao;
  filtro: FiltroTreino;
}

export interface TreinoData {
  questoes: Record<string, HistoricoQuestao>;
  cartoes: Record<string, EstadoCartao>;
  prefs: PrefsTreino;
}

interface TreinoState extends TreinoData {
  registrarRespostas: (respostas: { id: string; certa: boolean }[], hoje: DateKey) => void;
  responderCartao: (id: string, resposta: RespostaCartao, hoje: DateKey) => void;
  setPrefs: (p: Partial<PrefsTreino>) => void;
}

export const VERSAO_TREINO = 1;

export const prefsPadrao = (): PrefsTreino => ({ novosPorDia: NOVOS_POR_DIA_PADRAO, quantidade: 10, modo: 'estudo', formato: 'todos', filtro: 'todas' });

export const treinoPadrao = (): TreinoData => ({ questoes: {}, cartoes: {}, prefs: prefsPadrao() });

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
    }),
    {
      name: STORE_KEYS.treino,
      storage: zustandStorage,
      version: VERSAO_TREINO,
      merge: (persistido, atual) => {
        const p = (persistido ?? {}) as Partial<TreinoData>;
        return { ...atual, ...p, prefs: { ...prefsPadrao(), ...(p.prefs ?? {}) } };
      },
      partialize: ({ questoes, cartoes, prefs }) => ({ questoes, cartoes, prefs }),
    },
  ),
);
