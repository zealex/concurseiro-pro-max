import { z } from 'zod';
import { create } from 'zustand';
import { armazenamentoGlobal, chavesDoEscopo, moverEscopo } from '@/services/storage/escopo';
import { ESCOPO_LEGADO, ESCOPO_LOCAL, escopoUsuario, type Escopo } from '@/services/storage/keys';

/**
 * "Quem está usando o app neste aparelho": um retrato salvo localmente, lido na abertura do app.
 * É ele (e não uma consulta ao servidor) que decide se o app abre logado — assim o app funciona
 * offline. O servidor só é consultado em segundo plano; um 401 real marca a sessão como expirada
 * (aviso no topo), sem apagar nada.
 */

const ContaSchema = z.discriminatedUnion('modo', [
  z.object({
    modo: z.literal('usuario'),
    userId: z.string().min(1),
    email: z.string(),
    nome: z.string(),
    provedores: z.array(z.string()),
    atualizadoEm: z.string(),
  }),
  z.object({ modo: z.literal('local'), atualizadoEm: z.string() }),
]);

export type Conta = z.infer<typeof ContaSchema>;
export type ContaUsuario = Extract<Conta, { modo: 'usuario' }>;

interface EstadoConta {
  conta: Conta | null;
  /** O servidor respondeu 401: os dados continuam, a sincronização pausa até entrar de novo. */
  sessaoExpirada: boolean;
}

export const useConta = create<EstadoConta>(() => ({ conta: null, sessaoExpirada: false }));

const CHAVE = 'conta';

export async function lerContaSalva(): Promise<Conta | null> {
  const bruto = await armazenamentoGlobal.ler(CHAVE);
  if (!bruto) return null;
  try {
    const r = ContaSchema.safeParse(JSON.parse(bruto));
    return r.success ? r.data : null;
  } catch {
    return null;
  }
}

export async function salvarConta(conta: Conta | null): Promise<void> {
  if (conta) await armazenamentoGlobal.gravar(CHAVE, JSON.stringify(conta));
  else await armazenamentoGlobal.remover(CHAVE);
  useConta.setState({ conta, ...(conta ? {} : { sessaoExpirada: false }) });
}

export function escopoDaConta(conta: Conta): Escopo {
  return conta.modo === 'usuario' ? escopoUsuario(conta.userId) : ESCOPO_LOCAL;
}

/**
 * Primeiro uso de uma conta (ou do modo sem conta) neste aparelho: se o escopo dela ainda está vazio,
 * adota o progresso que já existia aqui (modo sem conta, ou dados de antes das contas). Assim o
 * progresso local vai junto para a conta e sobe para a nuvem na primeira sincronização.
 * Se o escopo da conta já tem dados, nada é movido (os dados antigos ficam guardados).
 */
export async function adotarDadosDoAparelho(conta: Conta): Promise<number> {
  const destino = escopoDaConta(conta);
  if ((await chavesDoEscopo(destino)).length > 0) return 0;
  const origens = conta.modo === 'usuario' ? [ESCOPO_LOCAL, ESCOPO_LEGADO] : [ESCOPO_LEGADO];
  for (const origem of origens) {
    if ((await chavesDoEscopo(origem)).length === 0) continue;
    return moverEscopo(origem, destino);
  }
  return 0;
}
