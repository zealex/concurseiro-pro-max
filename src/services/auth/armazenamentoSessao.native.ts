import * as SecureStore from 'expo-secure-store';
import Storage from 'expo-sqlite/kv-store';

/**
 * Onde o cookie da sessão fica no Android/iOS: no cofre do sistema (SecureStore → Keystore/Keychain).
 *
 * Alguns aparelhos e emuladores (ex.: BlueStacks) têm o cofre quebrado: as operações do SecureStore
 * falham ou ficam penduradas para sempre — e, como o cliente de autenticação enfileira todo acesso ao
 * cookie, uma gravação pendurada travaria login e cadastro ("carregando infinito"). Por isso cada
 * operação tem prazo; se o cofre falhar ou não responder, passamos a usar o armazenamento privado do
 * app (SQLite na área do app, inacessível a outros apps) e lembramos dessa escolha neste aparelho.
 */

const PRAZO_MS = 6_000;
const CHAVE_MODO = 'cpm:v1:global:sessao-modo';
const PREFIXO_RESERVA = 'cpm:v1:global:sessao:';

type Modo = 'seguro' | 'reserva';

let modo: Modo = (() => {
  try {
    return Storage.getItemSync(CHAVE_MODO) === 'reserva' ? 'reserva' : 'seguro';
  } catch {
    return 'seguro';
  }
})();

function usarReserva(motivo: unknown): void {
  if (modo === 'reserva') return;
  modo = 'reserva';
  try {
    Storage.setItemSync(CHAVE_MODO, 'reserva');
  } catch {
    /* segue só em memória nesta execução */
  }
  console.warn('[sessão] Cofre do sistema indisponível neste aparelho; usando o armazenamento privado do app.', motivo);
}

function comPrazo<T>(p: Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('O cofre do sistema não respondeu.')), PRAZO_MS);
    p.then(
      (v) => {
        clearTimeout(t);
        resolve(v);
      },
      (e) => {
        clearTimeout(t);
        reject(e);
      },
    );
  });
}

const reserva = (chave: string) => `${PREFIXO_RESERVA}${chave}`;

export const armazenamentoSessao = {
  getItem(chave: string): string | null {
    if (modo === 'reserva') return Storage.getItemSync(reserva(chave));
    try {
      return SecureStore.getItem(chave);
    } catch (e) {
      usarReserva(e);
      return Storage.getItemSync(reserva(chave));
    }
  },
  async getItemAsync(chave: string): Promise<string | null> {
    if (modo === 'reserva') return Storage.getItemAsync(reserva(chave));
    try {
      return await comPrazo(SecureStore.getItemAsync(chave));
    } catch (e) {
      usarReserva(e);
      return Storage.getItemAsync(reserva(chave));
    }
  },
  setItem(chave: string, valor: string): void {
    if (modo === 'reserva') return Storage.setItemSync(reserva(chave), valor);
    try {
      SecureStore.setItem(chave, valor);
    } catch (e) {
      usarReserva(e);
      Storage.setItemSync(reserva(chave), valor);
    }
  },
  async setItemAsync(chave: string, valor: string): Promise<void> {
    if (modo === 'reserva') return Storage.setItemAsync(reserva(chave), valor);
    try {
      await comPrazo(SecureStore.setItemAsync(chave, valor));
    } catch (e) {
      usarReserva(e);
      await Storage.setItemAsync(reserva(chave), valor);
    }
  },
};

export function modoArmazenamentoSessao(): Modo {
  return modo;
}
