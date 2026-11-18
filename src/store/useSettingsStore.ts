import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Trilha } from '@/data/types';
import type { ProvaAlvo } from '@/domain/types';
import { STORE_KEYS } from '@/services/storage/keys';
import { zustandStorage } from '@/services/storage/zustandAdapter';
import { todayKey, type DateKey } from '@/utils/dates';
import { ORCAMENTO_MAX, ORCAMENTO_MIN } from '@/utils/scheduler';

export type PreferenciaTema = 'sistema' | 'claro' | 'escuro';

export interface SettingsData {
  trilha: Trilha;
  dataInicio: DateKey;
  orcamentoMin: number;
  diasPlantao: DateKey[];
  provaAlvo: ProvaAlvo | null;
  feedUrl: string;
  tema: PreferenciaTema;
  bancaAlvo: string;
}

interface SettingsState extends SettingsData {
  setTrilha: (t: Trilha) => void;
  setDataInicio: (d: DateKey) => void;
  setOrcamento: (min: number) => void;
  togglePlantao: (d: DateKey) => void;
  setProvaAlvo: (p: ProvaAlvo | null) => void;
  setFeedUrl: (url: string) => void;
  setTema: (t: PreferenciaTema) => void;
  setBancaAlvo: (b: string) => void;
}

export const settingsPadrao = (): SettingsData => ({
  trilha: 'hibrida',
  dataInicio: todayKey(),
  orcamentoMin: 210,
  diasPlantao: [],
  provaAlvo: null,
  feedUrl: '',
  tema: 'sistema',
  bancaAlvo: '',
});

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...settingsPadrao(),
      setTrilha: (trilha) => set({ trilha }),
      setDataInicio: (dataInicio) => set({ dataInicio }),
      setOrcamento: (min) => set({ orcamentoMin: Math.min(ORCAMENTO_MAX, Math.max(ORCAMENTO_MIN, Math.round(min))) }),
      togglePlantao: (d) =>
        set((s) => ({
          diasPlantao: s.diasPlantao.includes(d) ? s.diasPlantao.filter((x) => x !== d) : [...s.diasPlantao, d].sort().slice(-200),
        })),
      setProvaAlvo: (provaAlvo) => set({ provaAlvo }),
      setFeedUrl: (feedUrl) => set({ feedUrl: feedUrl.trim() }),
      setTema: (tema) => set({ tema }),
      setBancaAlvo: (bancaAlvo) => set({ bancaAlvo }),
    }),
    {
      name: STORE_KEYS.settings,
      storage: zustandStorage,
      version: 1,
      partialize: ({ trilha, dataInicio, orcamentoMin, diasPlantao, provaAlvo, feedUrl, tema, bancaAlvo }) => ({
        trilha,
        dataInicio,
        orcamentoMin,
        diasPlantao,
        provaAlvo,
        feedUrl,
        tema,
        bancaAlvo,
      }),
    },
  ),
);
