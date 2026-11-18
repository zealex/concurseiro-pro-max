import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { atualizarConhecidos, type Overlay, type StatusPessoal } from '@/shared/concursos/overlay';
import type { Concurso, SourceStatus } from '@/shared/concursos/schema';
import { STORE_KEYS } from '@/services/storage/keys';
import { zustandStorage } from '@/services/storage/zustandAdapter';

export type OrigemFeed = 'remoto' | 'cache' | 'embarcado';

export interface RadarData {
  feed: Concurso[];
  feedGeradoEm: string | null;
  fontes: SourceStatus[];
  origemFeed: OrigemFeed | null;
  urlFeed: string | null;
  ultimaSync: string | null;
  ultimoErro: string | null;
  overlay: Overlay;
  manuais: Concurso[];
  /** Última cópia de concursos com status pessoal (sobrevive à saída do feed). */
  conhecidos: Record<string, Concurso>;
}

interface RadarState extends RadarData {
  sincronizando: boolean;
  aplicarFeed: (p: { concursos: Concurso[]; geradoEm: string; fontes: SourceStatus[]; origem: OrigemFeed; url: string | null }) => void;
  registrarFalha: (erro: string) => void;
  setSincronizando: (v: boolean) => void;
  setStatus: (id: string, status: StatusPessoal) => void;
  setNotas: (id: string, notas: string) => void;
  addManual: (c: Concurso) => void;
  updateManual: (c: Concurso) => void;
  removeManual: (id: string) => void;
}

export const radarPadrao = (): RadarData => ({
  feed: [],
  feedGeradoEm: null,
  fontes: [],
  origemFeed: null,
  urlFeed: null,
  ultimaSync: null,
  ultimoErro: null,
  overlay: {},
  manuais: [],
  conhecidos: {},
});

export const useRadarStore = create<RadarState>()(
  persist(
    (set) => ({
      ...radarPadrao(),
      sincronizando: false,
      aplicarFeed: ({ concursos, geradoEm, fontes, origem, url }) =>
        set((s) => ({
          feed: concursos,
          feedGeradoEm: geradoEm,
          fontes,
          origemFeed: origem,
          urlFeed: url,
          ultimaSync: origem === 'remoto' ? new Date().toISOString() : s.ultimaSync,
          ultimoErro: origem === 'remoto' ? null : s.ultimoErro,
          conhecidos: atualizarConhecidos(s.conhecidos, concursos, s.overlay),
        })),
      registrarFalha: (erro) => set({ ultimoErro: erro }),
      setSincronizando: (sincronizando) => set({ sincronizando }),
      setStatus: (id, status) =>
        set((s) => {
          const atual = s.overlay[id];
          const overlay = { ...s.overlay, [id]: { status, notas: atual?.notas ?? '', atualizadoEm: new Date().toISOString() } };
          return { overlay, conhecidos: atualizarConhecidos(s.conhecidos, [...s.feed, ...s.manuais], overlay) };
        }),
      setNotas: (id, notas) =>
        set((s) => {
          const atual = s.overlay[id];
          const overlay = { ...s.overlay, [id]: { status: atual?.status ?? 'radar', notas, atualizadoEm: new Date().toISOString() } };
          return { overlay, conhecidos: atualizarConhecidos(s.conhecidos, [...s.feed, ...s.manuais], overlay) };
        }),
      addManual: (c) => set((s) => ({ manuais: [c, ...s.manuais.filter((m) => m.id !== c.id)] })),
      updateManual: (c) => set((s) => ({ manuais: s.manuais.map((m) => (m.id === c.id ? c : m)) })),
      removeManual: (id) =>
        set((s) => {
          const { [id]: _o, ...overlay } = s.overlay;
          return { manuais: s.manuais.filter((m) => m.id !== id), overlay };
        }),
    }),
    {
      name: STORE_KEYS.radar,
      storage: zustandStorage,
      version: 1,
      partialize: ({ feed, feedGeradoEm, fontes, origemFeed, urlFeed, ultimaSync, ultimoErro, overlay, manuais, conhecidos }) => ({
        feed,
        feedGeradoEm,
        fontes,
        origemFeed: origemFeed === 'remoto' ? 'cache' : origemFeed,
        urlFeed,
        ultimaSync,
        ultimoErro,
        overlay,
        manuais,
        conhecidos,
      }),
    },
  ),
);
