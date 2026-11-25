import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { DateKey } from '@/utils/dates';
import { VERSAO_CHECKLIST } from './migracoes';
import { opcoesPersistencia } from './persistencia';

export interface ChecklistData {
  /** Item de lei seca/NR marcado como lido → data. */
  marcados: Record<string, DateKey>;
}

interface ChecklistState extends ChecklistData {
  toggle: (itemId: string, hoje: DateKey) => void;
  limparNorma: (itemIds: string[]) => void;
}

export const checklistPadrao = (): ChecklistData => ({ marcados: {} });

export const useChecklistStore = create<ChecklistState>()(
  persist(
    (set) => ({
      ...checklistPadrao(),
      toggle: (itemId, hoje) =>
        set((s) => {
          const marcados = { ...s.marcados };
          if (marcados[itemId]) delete marcados[itemId];
          else marcados[itemId] = hoje;
          return { marcados };
        }),
      limparNorma: (ids) =>
        set((s) => {
          const marcados = { ...s.marcados };
          for (const id of ids) delete marcados[id];
          return { marcados };
        }),
    }),
    { ...opcoesPersistencia<ChecklistState>('checklist'), version: VERSAO_CHECKLIST, partialize: ({ marcados }) => ({ marcados }) },
  ),
);
