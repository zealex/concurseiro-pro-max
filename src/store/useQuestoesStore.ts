import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ErroCaderno, ItemRevisao, SessaoQuestoes } from '@/domain/types';
import { STORE_KEYS } from '@/services/storage/keys';
import { zustandStorage } from '@/services/storage/zustandAdapter';
import type { DateKey } from '@/utils/dates';
import { concluirRevisao, type ResultadoRevisao } from '@/utils/spacedRepetition';

export interface QuestoesData {
  sessoes: SessaoQuestoes[];
  erros: ErroCaderno[];
  revisoes: ItemRevisao[];
}

interface QuestoesState extends QuestoesData {
  addSessao: (s: SessaoQuestoes) => void;
  removeSessao: (id: string) => void;
  addErro: (e: ErroCaderno) => void;
  updateErro: (id: string, patch: Partial<ErroCaderno>) => void;
  toggleResolvido: (id: string, hoje: DateKey) => void;
  removeErro: (id: string) => void;
  addRevisao: (r: ItemRevisao) => void;
  concluirRevisao: (id: string, hoje: DateKey, r: ResultadoRevisao) => void;
  removeRevisao: (id: string) => void;
  removeRevisoesDaRef: (refId: string) => void;
}

export const questoesPadrao = (): QuestoesData => ({ sessoes: [], erros: [], revisoes: [] });

export const useQuestoesStore = create<QuestoesState>()(
  persist(
    (set) => ({
      ...questoesPadrao(),
      addSessao: (s) => set((st) => ({ sessoes: [s, ...st.sessoes] })),
      removeSessao: (id) => set((st) => ({ sessoes: st.sessoes.filter((s) => s.id !== id) })),
      addErro: (e) => set((st) => ({ erros: [e, ...st.erros] })),
      updateErro: (id, patch) => set((st) => ({ erros: st.erros.map((e) => (e.id === id ? { ...e, ...patch } : e)) })),
      toggleResolvido: (id, hoje) =>
        set((st) => ({
          erros: st.erros.map((e) => (e.id === id ? { ...e, resolvido: !e.resolvido, resolvidoEm: e.resolvido ? null : hoje } : e)),
        })),
      removeErro: (id) =>
        set((st) => ({ erros: st.erros.filter((e) => e.id !== id), revisoes: st.revisoes.filter((r) => !(r.origem === 'erro' && r.refId === id)) })),
      addRevisao: (r) => set((st) => ({ revisoes: [...st.revisoes, r] })),
      concluirRevisao: (id, hoje, r) =>
        set((st) => ({ revisoes: st.revisoes.map((item) => (item.id === id ? concluirRevisao(item, hoje, r) : item)) })),
      removeRevisao: (id) => set((st) => ({ revisoes: st.revisoes.filter((r) => r.id !== id) })),
      removeRevisoesDaRef: (refId) =>
        set((st) => ({ revisoes: st.revisoes.filter((r) => !(r.refId === refId && r.historico.length === 0)) })),
    }),
    {
      name: STORE_KEYS.questoes,
      storage: zustandStorage,
      version: 1,
      partialize: ({ sessoes, erros, revisoes }) => ({ sessoes, erros, revisoes }),
    },
  ),
);
