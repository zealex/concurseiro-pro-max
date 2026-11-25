import { create } from 'zustand';
import { useConta } from '@/services/auth/conta';
import { aguardarEscritas, armazenamentoGlobal } from '@/services/storage/escopo';
import { registrarAntesDeFechar } from '@/store/hydration';
import { gerarId } from '@/utils/id';
import { apiSync } from './api';
import { ligarGatilhos } from './gatilhos';
import { criarMotor, STATUS_INICIAL, type MotorSync, type StatusSync, type Temporizador } from './motor';
import { SPECS } from './specs';
import type { StoreSync } from './contrato';
import { repoEstadoSync, VINCULOS } from './vinculos';

/** Ciclo de vida do motor de sincronização do app (um por vez) e o status para a interface. */

export const useStatusSync = create<StatusSync>(() => STATUS_INICIAL);

const temporizadorReal: Temporizador = {
  agora: () => Date.now(),
  agendar: (fn, ms) => setTimeout(fn, ms),
  cancelar: (id) => clearTimeout(id as ReturnType<typeof setTimeout>),
};

let motor: MotorSync | null = null;
let ligando: Promise<void> | null = null;
let desligarGatilhos: (() => void) | null = null;

async function idDoAparelho(): Promise<string> {
  const salvo = await armazenamentoGlobal.ler('dispositivo');
  if (salvo) return salvo;
  const novo = gerarId('disp');
  await armazenamentoGlobal.gravar('dispositivo', novo);
  return novo;
}

/** Liga a sincronização para a conta aberta (idempotente). */
export function ligarSync(): Promise<void> {
  if (motor || ligando) return ligando ?? Promise.resolve();
  ligando = (async () => {
    const m = criarMotor({
      api: apiSync,
      specs: SPECS,
      vinculos: VINCULOS,
      estado: repoEstadoSync,
      aguardarEscritas,
      deviceId: await idDoAparelho(),
      temporizador: temporizadorReal,
      aoMudarStatus: (s) => useStatusSync.setState(s),
      aoSessaoExpirada: () => useConta.setState({ sessaoExpirada: true }),
    });
    motor = m;
    desligarGatilhos = ligarGatilhos(m);
    await m.iniciar();
  })().finally(() => {
    ligando = null;
  });
  return ligando;
}

/** Desliga a sincronização. Com `flush`, tenta enviar o pendente antes (até `timeoutMs`). */
export async function desligarSync(op: { flush?: boolean; timeoutMs?: number } = {}): Promise<{ pendentes: StoreSync[] }> {
  if (ligando) await ligando.catch(() => undefined);
  const m = motor;
  motor = null;
  desligarGatilhos?.();
  desligarGatilhos = null;
  if (!m) return { pendentes: [] };
  const r = await m.parar({ flush: op.flush, timeoutMs: op.timeoutMs ?? 8_000 });
  useStatusSync.setState({ ...STATUS_INICIAL });
  return r;
}

// Antes de fechar o progresso aberto (sair, trocar de conta), tenta enviar o que estiver pendente.
registrarAntesDeFechar(() => desligarSync({ flush: true }));

/** Botão "Sincronizar agora". */
export function sincronizarAgora(): Promise<void> {
  return motor?.sincronizarAgora('manual') ?? Promise.resolve();
}

export function syncLigado(): boolean {
  return motor !== null;
}
