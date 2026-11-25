import type { StoreApi, UseBoundStore } from 'zustand';
import { armazenamentoEscopado } from '@/services/storage/escopo';
import { useChecklistStore } from '@/store/useChecklistStore';
import { useCronogramaStore } from '@/store/useCronogramaStore';
import { useFocusStore } from '@/store/useFocusStore';
import { useQuestoesStore } from '@/store/useQuestoesStore';
import { useRadarStore } from '@/store/useRadarStore';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useTreinoStore } from '@/store/useTreinoStore';
import type { StoreSync } from './contrato';
import type { Doc, SpecStore } from './merge/tipos';
import type { EstadoSyncStore, RepoEstadoSync, Vinculo } from './motor';
import { SPECS } from './specs';

/** Liga cada spec de sincronização à store zustand correspondente. */
function vincular(store: UseBoundStore<StoreApi<object>>, spec: SpecStore): Vinculo {
  const campos = Object.keys(spec.campos);
  return {
    ler: () => spec.projetar(store.getState()),
    // setState faz merge: ações e campos só do aparelho ficam como estão; o persist grava sozinho.
    aplicar: (doc: Doc) => store.setState(doc),
    // Mudança detectada por referência (atualizações do zustand são imutáveis): barato mesmo em listas grandes.
    assinar: (aoMudar) =>
      store.subscribe((novo, antigo) => {
        const n = novo as Record<string, unknown>;
        const a = antigo as Record<string, unknown>;
        if (campos.some((k) => n[k] !== a[k])) aoMudar();
      }),
  };
}

const lojas: { [S in StoreSync]: UseBoundStore<StoreApi<object>> } = {
  settings: useSettingsStore as never,
  cronograma: useCronogramaStore as never,
  questoes: useQuestoesStore as never,
  treino: useTreinoStore as never,
  radar: useRadarStore as never,
  checklist: useChecklistStore as never,
  focus: useFocusStore as never,
};

export const VINCULOS = Object.fromEntries(Object.entries(lojas).map(([s, store]) => [s, vincular(store, SPECS[s as StoreSync])])) as {
  [S in StoreSync]: Vinculo;
};

/** Estado da sincronização por store, guardado no escopo do usuário (junto com os dados dele). */
export const repoEstadoSync: RepoEstadoSync = {
  async ler(store) {
    const bruto = await armazenamentoEscopado.getItem(`sync:${store}`);
    if (!bruto) return null;
    try {
      return JSON.parse(bruto) as EstadoSyncStore;
    } catch {
      return null;
    }
  },
  gravar(store, estado) {
    return armazenamentoEscopado.setItem(`sync:${store}`, JSON.stringify(estado));
  },
};
