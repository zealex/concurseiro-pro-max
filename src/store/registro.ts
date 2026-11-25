import type { StoreKey } from '@/services/storage/keys';
import { checklistPadrao, useChecklistStore } from './useChecklistStore';
import { cronogramaPadrao, useCronogramaStore } from './useCronogramaStore';
import { focusPadrao, useFocusStore } from './useFocusStore';
import { questoesPadrao, useQuestoesStore } from './useQuestoesStore';
import { radarPadrao, useRadarStore } from './useRadarStore';
import { settingsPadrao, useSettingsStore } from './useSettingsStore';
import { treinoPadrao, useTreinoStore } from './useTreinoStore';

/** O mínimo que o escopo precisa de uma store persistida. */
export interface StorePersistida {
  nome: StoreKey;
  store: {
    setState: (parcial: never) => void;
    persist: { rehydrate: () => Promise<void> | void; hasHydrated: () => boolean };
  };
  padrao: () => object;
}

/** Todas as stores com dados do usuário, na ordem em que são lidas. */
export const STORES_PERSISTIDAS: readonly StorePersistida[] = [
  { nome: 'settings', store: useSettingsStore, padrao: settingsPadrao },
  { nome: 'cronograma', store: useCronogramaStore, padrao: cronogramaPadrao },
  { nome: 'questoes', store: useQuestoesStore, padrao: questoesPadrao },
  { nome: 'treino', store: useTreinoStore, padrao: treinoPadrao },
  { nome: 'radar', store: useRadarStore, padrao: () => ({ ...radarPadrao(), sincronizando: false }) },
  { nome: 'checklist', store: useChecklistStore, padrao: checklistPadrao },
  { nome: 'focus', store: useFocusStore, padrao: focusPadrao },
];

export const NOMES_STORES: readonly StoreKey[] = STORES_PERSISTIDAS.map((s) => s.nome);

/** Volta a memória de todas as stores ao padrão (as ações são preservadas: setState faz merge). */
export function resetarStoresParaPadrao(): void {
  for (const s of STORES_PERSISTIDAS) s.store.setState(s.padrao() as never);
}
