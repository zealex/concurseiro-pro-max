import { criarBackendPlataforma } from './backend';
import { chaveGlobal, chaveNoEscopo, pertenceAoEscopo, prefixoDoEscopo, type Escopo } from './keys';
import type { BackendKV } from './tipos';

/**
 * Escopo de armazenamento: de quem são os dados que as stores leem e gravam agora.
 *
 * Regras de segurança (o motivo deste módulo existir):
 *  - Sem escopo aberto, nada é lido e nada é gravado → trocar de usuário nunca mistura dados.
 *  - Se alguma leitura falhar, o escopo fica BLOQUEADO: o app não grava os valores-padrão por cima
 *    dos dados reais que não conseguiu ler.
 *  - Aba inativa (outra aba assumiu o app na web) fica só-leitura.
 *  - Gravações são enfileiradas por chave; se chegam várias seguidas, só a mais nova vai ao disco.
 */

export type EstadoEscopo = 'fechado' | 'hidratando' | 'aberto' | 'bloqueado';

let backend: BackendKV | null = null;
let iniciando: Promise<BackendKV> | null = null;
let escopo: Escopo | null = null;
let estado: EstadoEscopo = 'fechado';
let somenteLeitura = false;
const resultadosHidratacao = new Map<string, unknown>();

const versoes = new Map<string, number>();
const filas = new Map<string, Promise<void>>();
const pendentes = new Set<Promise<void>>();
let ultimaFalhaEscrita: unknown = null;

// ---------- backend ----------

/** Troca o backend (testes). `null` volta ao backend da plataforma na próxima inicialização. */
export function definirBackend(b: BackendKV | null): void {
  backend = b;
  iniciando = null;
}

export function iniciarBackend(): Promise<BackendKV> {
  if (backend) return Promise.resolve(backend);
  if (!iniciando) {
    iniciando = criarBackendPlataforma().then((b) => {
      backend = b;
      return b;
    });
    // Falha na inicialização: permite tentar de novo.
    iniciando.catch(() => {
      iniciando = null;
    });
  }
  return iniciando;
}

function exigirBackend(): BackendKV {
  if (!backend) throw new Error('Armazenamento ainda não iniciado.');
  return backend;
}

// ---------- ciclo de vida do escopo ----------

export function escopoAtual(): Escopo | null {
  return escopo;
}

export function estadoEscopo(): EstadoEscopo {
  return estado;
}

export function podeGravar(): boolean {
  return escopo !== null && (estado === 'hidratando' || estado === 'aberto') && !somenteLeitura;
}

/** Nada é lido nem gravado até o próximo `definirEscopo`. */
export function fecharEscopo(): void {
  escopo = null;
  estado = 'fechado';
}

/** Começa a hidratação de um escopo (leituras liberadas; gravações de migração liberadas). */
export function definirEscopo(e: Escopo): void {
  escopo = e;
  estado = 'hidratando';
  resultadosHidratacao.clear();
}

export function marcarAberto(): void {
  if (escopo) estado = 'aberto';
}

export function bloquearEscopo(): void {
  estado = 'bloqueado';
}

export function definirSomenteLeitura(v: boolean): void {
  somenteLeitura = v;
}

export function estaSomenteLeitura(): boolean {
  return somenteLeitura;
}

/** Chamado pelo `onRehydrateStorage` de cada store (erro `undefined`/`null` = sucesso). */
export function registrarHidratacao(nome: string, erro: unknown): void {
  resultadosHidratacao.set(nome, erro ?? null);
}

/** Stores que falharam ou não reportaram a hidratação. */
export function falhasDeHidratacao(nomes: readonly string[]): { nome: string; erro: unknown }[] {
  return nomes
    .filter((n) => !resultadosHidratacao.has(n) || resultadosHidratacao.get(n) !== null)
    .map((nome) => ({ nome, erro: resultadosHidratacao.get(nome) ?? new Error('hidratação não concluída') }));
}

// ---------- gravações ----------

function enfileirar(chave: string, op: (b: BackendKV) => Promise<void>): Promise<void> {
  const versao = (versoes.get(chave) ?? 0) + 1;
  versoes.set(chave, versao);
  const anterior = filas.get(chave) ?? Promise.resolve();
  const p = anterior.then(async () => {
    if (versoes.get(chave) !== versao) return; // há uma gravação mais nova na fila
    try {
      await op(exigirBackend());
    } catch (e) {
      ultimaFalhaEscrita = e;
      console.error(`[armazenamento] Falha ao gravar ${chave}`, e);
    }
  });
  filas.set(chave, p);
  pendentes.add(p);
  void p.finally(() => {
    pendentes.delete(p);
    if (filas.get(chave) === p) filas.delete(chave);
  });
  return p;
}

/** Resolve quando todas as gravações enfileiradas até agora chegaram ao disco. */
export async function aguardarEscritas(): Promise<void> {
  while (pendentes.size > 0) await Promise.allSettled([...pendentes]);
}

export function ultimaFalhaDeEscrita(): unknown {
  return ultimaFalhaEscrita;
}

// ---------- acesso ----------

/** Interface de strings usada pelo `persist` do zustand: o nome da store é resolvido no escopo atual. */
export const armazenamentoEscopado = {
  async getItem(nome: string): Promise<string | null> {
    if (!escopo) throw new Error('Nenhum escopo de armazenamento aberto.');
    const chave = chaveNoEscopo(escopo, nome);
    await filas.get(chave); // leitura sempre depois das gravações pendentes da mesma chave
    return exigirBackend().getItem(chave);
  },
  setItem(nome: string, valor: string): Promise<void> {
    if (!escopo || !podeGravar()) return Promise.resolve();
    const chave = chaveNoEscopo(escopo, nome);
    return enfileirar(chave, (b) => b.setItem(chave, valor));
  },
  removeItem(nome: string): Promise<void> {
    if (!escopo || !podeGravar()) return Promise.resolve();
    const chave = chaveNoEscopo(escopo, nome);
    return enfileirar(chave, (b) => b.removeItem(chave));
  },
};

/** Dados do aparelho fora de qualquer escopo (ex.: conta atual, id do aparelho). */
export const armazenamentoGlobal = {
  async ler(nome: string): Promise<string | null> {
    const b = await iniciarBackend();
    const chave = chaveGlobal(nome);
    await filas.get(chave);
    return b.getItem(chave);
  },
  async gravar(nome: string, valor: string): Promise<void> {
    await iniciarBackend();
    const chave = chaveGlobal(nome);
    return enfileirar(chave, (b) => b.setItem(chave, valor));
  },
  async remover(nome: string): Promise<void> {
    await iniciarBackend();
    const chave = chaveGlobal(nome);
    return enfileirar(chave, (b) => b.removeItem(chave));
  },
};

/** Chaves (completas) de um escopo. */
export async function chavesDoEscopo(e: Escopo): Promise<string[]> {
  const b = await iniciarBackend();
  return (await b.chaves()).filter((k) => pertenceAoEscopo(k, e));
}

/** Apaga do disco todas as chaves de um escopo (não mexe nos outros escopos nem nas globais). */
export async function limparEscopo(e: Escopo): Promise<void> {
  await aguardarEscritas();
  const b = await iniciarBackend();
  const alvo = (await b.chaves()).filter((k) => pertenceAoEscopo(k, e));
  if (alvo.length > 0) await b.removerVarias(alvo);
}

/**
 * Move todas as chaves de um escopo para outro (ex.: dados de antes do login → escopo do usuário).
 * Cada chave é gravada e conferida no destino antes de sair da origem. Não roda com nenhum dos dois
 * escopos aberto (quem chama garante). Retorna quantas chaves foram movidas.
 */
export async function moverEscopo(origem: Escopo, destino: Escopo): Promise<number> {
  await aguardarEscritas();
  const b = await iniciarBackend();
  const prefixo = prefixoDoEscopo(origem);
  const chaves = (await b.chaves()).filter((k) => pertenceAoEscopo(k, origem));
  for (const chave of chaves) {
    const valor = await b.getItem(chave);
    if (valor === null) continue;
    const nova = chaveNoEscopo(destino, chave.slice(prefixo.length));
    await b.setItem(nova, valor);
    if ((await b.getItem(nova)) !== valor) throw new Error(`Falha ao conferir a cópia de ${chave}`);
  }
  if (chaves.length > 0) await b.removerVarias(chaves);
  return chaves.length;
}

/** Lê o valor bruto de uma store em qualquer escopo (ex.: dados legados no primeiro login). */
export async function lerNoEscopo(e: Escopo, nome: string): Promise<string | null> {
  const b = await iniciarBackend();
  const chave = chaveNoEscopo(e, nome);
  await filas.get(chave);
  return b.getItem(chave);
}
