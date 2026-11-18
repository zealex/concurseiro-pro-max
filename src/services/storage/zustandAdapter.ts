import { createJSONStorage, type StateStorage } from 'zustand/middleware';
import { armazenamento } from './repository';

/** StateStorage do Zustand apoiado no repositório (prefixo "cpm:v1:" + tolerância a falhas). */
const stateStorage: StateStorage = {
  getItem: (nome) => armazenamento.getItem(nome),
  setItem: (nome, valor) => armazenamento.setItem(nome, valor),
  removeItem: (nome) => armazenamento.removeItem(nome),
};

export const zustandStorage = createJSONStorage(() => stateStorage);
