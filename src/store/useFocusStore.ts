import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Eixo } from '@/data/types';
import type { ConfigPomodoro, FaseTimer, SessaoFoco, TimerEmAndamento } from '@/domain/types';
import { STORE_KEYS } from '@/services/storage/keys';
import { zustandStorage } from '@/services/storage/zustandAdapter';
import { toKey } from '@/utils/dates';
import { gerarId } from '@/utils/id';

export interface FocusData {
  config: ConfigPomodoro;
  timer: TimerEmAndamento | null;
  sessoes: SessaoFoco[];
}

interface FocusState extends FocusData {
  setConfig: (c: Partial<ConfigPomodoro>) => void;
  iniciar: (p: { disciplinaId: string | null; eixo: Eixo | null; fase?: FaseTimer; agora?: number }) => void;
  pausar: (agora?: number) => void;
  retomar: (agora?: number) => void;
  cancelar: () => void;
  /** Encerra a fase atual (no tempo ou antecipadamente) e avança para a próxima. Retorna a sessão registrada, se houve foco. */
  concluirFase: (agora?: number, rotulo?: string) => SessaoFoco | null;
  addSessaoManual: (s: SessaoFoco) => void;
  removeSessao: (id: string) => void;
}

export const configPadrao: ConfigPomodoro = { focoMin: 50, pausaCurtaMin: 10, pausaLongaMin: 25, ciclosAtePausaLonga: 3 };

export const focusPadrao = (): FocusData => ({ config: configPadrao, timer: null, sessoes: [] });

function duracaoDaFase(config: ConfigPomodoro, fase: FaseTimer): number {
  const min = fase === 'foco' ? config.focoMin : fase === 'pausa-curta' ? config.pausaCurtaMin : config.pausaLongaMin;
  return Math.max(1, min) * 60_000;
}

export function restanteMs(timer: TimerEmAndamento, agora = Date.now()): number {
  return timer.terminaEm === null ? timer.restanteMs : Math.max(0, timer.terminaEm - agora);
}

export const useFocusStore = create<FocusState>()(
  persist(
    (set, get) => ({
      ...focusPadrao(),
      setConfig: (c) => set((s) => ({ config: { ...s.config, ...c } })),
      iniciar: ({ disciplinaId, eixo, fase = 'foco', agora = Date.now() }) => {
        const duracaoMs = duracaoDaFase(get().config, fase);
        set((s) => ({
          timer: {
            fase,
            terminaEm: agora + duracaoMs,
            restanteMs: duracaoMs,
            duracaoMs,
            inicioFase: new Date(agora).toISOString(),
            cicloAtual: s.timer?.cicloAtual ?? 1,
            disciplinaId,
            eixo,
          },
        }));
      },
      pausar: (agora = Date.now()) =>
        set((s) => (s.timer && s.timer.terminaEm !== null ? { timer: { ...s.timer, restanteMs: restanteMs(s.timer, agora), terminaEm: null } } : s)),
      retomar: (agora = Date.now()) =>
        set((s) => (s.timer && s.timer.terminaEm === null ? { timer: { ...s.timer, terminaEm: agora + s.timer.restanteMs } } : s)),
      cancelar: () => set({ timer: null }),
      concluirFase: (agora = Date.now(), rotulo = 'Foco') => {
        const { timer, config } = get();
        if (!timer) return null;
        let sessao: SessaoFoco | null = null;
        if (timer.fase === 'foco') {
          const decorrido = timer.duracaoMs - restanteMs(timer, agora);
          const minutos = Math.round(decorrido / 60_000);
          if (minutos >= 1) {
            sessao = {
              id: gerarId('foco'),
              data: toKey(new Date(Date.parse(timer.inicioFase))),
              inicio: timer.inicioFase,
              minutos,
              eixo: timer.eixo,
              disciplinaId: timer.disciplinaId,
              rotulo,
            };
          }
        }
        const proximaFase: FaseTimer =
          timer.fase !== 'foco' ? 'foco' : timer.cicloAtual % Math.max(1, config.ciclosAtePausaLonga) === 0 ? 'pausa-longa' : 'pausa-curta';
        // Um ciclo = foco + pausa; ao terminar a pausa começa o ciclo seguinte.
        const cicloAtual = timer.fase !== 'foco' ? timer.cicloAtual + 1 : timer.cicloAtual;
        const duracaoMs = duracaoDaFase(config, proximaFase);
        set((s) => ({
          sessoes: sessao ? [sessao, ...s.sessoes] : s.sessoes,
          timer: {
            ...timer,
            fase: proximaFase,
            cicloAtual,
            duracaoMs,
            restanteMs: duracaoMs,
            terminaEm: null, // a próxima fase começa pausada; o usuário confirma
            inicioFase: new Date(agora).toISOString(),
          },
        }));
        return sessao;
      },
      addSessaoManual: (s) => set((st) => ({ sessoes: [s, ...st.sessoes] })),
      removeSessao: (id) => set((st) => ({ sessoes: st.sessoes.filter((s) => s.id !== id) })),
    }),
    {
      name: STORE_KEYS.focus,
      storage: zustandStorage,
      version: 1,
      partialize: ({ config, timer, sessoes }) => ({ config, timer, sessoes }),
    },
  ),
);
