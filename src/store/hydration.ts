import { useEffect, useState } from 'react';
import { useChecklistStore } from './useChecklistStore';
import { useCronogramaStore } from './useCronogramaStore';
import { useFocusStore } from './useFocusStore';
import { useQuestoesStore } from './useQuestoesStore';
import { useRadarStore } from './useRadarStore';
import { useSettingsStore } from './useSettingsStore';
import { useTreinoStore } from './useTreinoStore';

const STORES = [useSettingsStore, useCronogramaStore, useQuestoesStore, useRadarStore, useChecklistStore, useFocusStore, useTreinoStore];

function todasHidratadas(): boolean {
  return STORES.every((s) => s.persist.hasHydrated());
}

/** true quando todas as stores leram o armazenamento local (evita "piscar" estado vazio). */
export function useHidratado(): boolean {
  const [ok, setOk] = useState(todasHidratadas);
  useEffect(() => {
    if (ok) return;
    const desinscrever = STORES.map((s) => s.persist.onFinishHydration(() => setOk(todasHidratadas())));
    // Caso a hidratação tenha terminado entre o render e o efeito.
    setOk(todasHidratadas());
    // Rede de segurança: armazenamento travado não pode prender o app na tela de carregamento.
    const t = setTimeout(() => setOk(true), 4000);
    return () => {
      clearTimeout(t);
      desinscrever.forEach((d) => d());
    };
  }, [ok]);
  return ok;
}
