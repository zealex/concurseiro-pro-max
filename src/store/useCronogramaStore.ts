import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ConclusaoBloco } from '@/domain/types';
import { STORE_KEYS } from '@/services/storage/keys';
import { zustandStorage } from '@/services/storage/zustandAdapter';
import type { DateKey } from '@/utils/dates';

export interface CronogramaData {
  /** Tarefas concluídas: id do bloco (ou id sintético) → quando. */
  concluidos: Record<string, ConclusaoBloco>;
  /** Notas rápidas por bloco do plano. */
  notas: Record<string, string>;
  /** Dias com qualquer atividade de estudo (ofensiva). */
  diasAtivos: DateKey[];
}

interface CronogramaState extends CronogramaData {
  concluir: (id: string, c: ConclusaoBloco) => void;
  desmarcar: (id: string) => void;
  setNota: (blocoId: string, texto: string) => void;
  registrarAtividade: (d: DateKey) => void;
  resetar: () => void;
}

export const cronogramaPadrao = (): CronogramaData => ({ concluidos: {}, notas: {}, diasAtivos: [] });

export const useCronogramaStore = create<CronogramaState>()(
  persist(
    (set) => ({
      ...cronogramaPadrao(),
      concluir: (id, c) => set((s) => ({ concluidos: { ...s.concluidos, [id]: c } })),
      desmarcar: (id) =>
        set((s) => {
          const { [id]: _removido, ...resto } = s.concluidos;
          return { concluidos: resto };
        }),
      setNota: (blocoId, texto) =>
        set((s) => {
          const notas = { ...s.notas };
          if (texto.trim()) notas[blocoId] = texto;
          else delete notas[blocoId];
          return { notas };
        }),
      registrarAtividade: (d) => set((s) => (s.diasAtivos.includes(d) ? s : { diasAtivos: [...s.diasAtivos, d].sort() })),
      resetar: () => set(cronogramaPadrao()),
    }),
    {
      name: STORE_KEYS.cronograma,
      storage: zustandStorage,
      version: 1,
      partialize: ({ concluidos, notas, diasAtivos }) => ({ concluidos, notas, diasAtivos }),
    },
  ),
);
