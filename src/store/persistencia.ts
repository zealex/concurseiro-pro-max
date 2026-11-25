import { registrarHidratacao } from '@/services/storage/escopo';
import type { StoreKey } from '@/services/storage/keys';
import { zustandStorage } from '@/services/storage/zustandAdapter';

/**
 * Opções comuns do `persist` de todas as stores:
 *  - `skipHydration`: nada é lido no import; a leitura acontece só quando um escopo é aberto
 *    (src/store/escopoStores.ts), já sabendo de quem são os dados;
 *  - `onRehydrateStorage`: informa sucesso/falha da leitura para o escopo decidir se libera gravações.
 * O tipo do estado (S) é explícito para não atrapalhar a inferência do `persist`.
 */
export function opcoesPersistencia<S>(nome: StoreKey) {
  return {
    name: nome,
    storage: zustandStorage,
    skipHydration: true,
    onRehydrateStorage: (_inicial: S) => (_estado: S | undefined, erro: unknown) => registrarHidratacao(nome, erro),
  };
}
