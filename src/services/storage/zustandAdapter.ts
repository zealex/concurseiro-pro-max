import { createJSONStorage, type StateStorage } from 'zustand/middleware';
import { armazenamentoEscopado } from './escopo';

/**
 * StateStorage do Zustand apoiado no escopo atual (ver escopo.ts).
 * Leituras com falha lançam erro de propósito: o `persist` não marca a store como hidratada
 * e o app mostra a tela de erro em vez de seguir com dados vazios.
 */
const stateStorage: StateStorage = {
  getItem: (nome) => armazenamentoEscopado.getItem(nome),
  setItem: (nome, valor) => armazenamentoEscopado.setItem(nome, valor),
  removeItem: (nome) => armazenamentoEscopado.removeItem(nome),
};

export const zustandStorage = createJSONStorage(() => stateStorage);
