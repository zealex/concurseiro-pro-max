/** Ids locais curtos e únicos (sem dependência de crypto, que varia entre plataformas). */
let contador = 0;

export function gerarId(prefixo = 'id'): string {
  contador = (contador + 1) % 1_000_000;
  return `${prefixo}-${Date.now().toString(36)}-${contador.toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
