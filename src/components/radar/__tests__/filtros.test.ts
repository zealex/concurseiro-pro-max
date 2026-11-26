import { describe, expect, it } from 'vitest';
import type { ConcursoView } from '@/shared/concursos/overlay';
import type { UF } from '@/shared/concursos/schema';
import { aplicarFiltros, contarPorLocal, filtrosPadrao, FILTROS_PADRAO } from '../filtros';

const HOJE = '2026-11-26';
function view(id: string, uf: UF, extra: Partial<ConcursoView> = {}): ConcursoView {
  return {
    id,
    uf,
    cidade: 'Cidade',
    orgao: `Prefeitura ${id}`,
    cargos: [{ nome: 'Médico Clínico Geral' }],
    banca: null,
    acesso: 'generalista',
    categoria: 'clinico-esf-plantonista',
    status: 'radar',
    manual: false,
    inscricoes: { inicio: null, fim: null },
    ...extra,
  } as unknown as ConcursoView;
}

const LISTA = [view('chapeco', 'SC'), view('salvador', 'BA'), view('campinas', 'SP'), view('manaus', 'AM')];
const ids = (l: ConcursoView[]) => l.map((c) => c.id);

describe('filtros do Radar por local', () => {
  it('sem "Meus estados": abre no Brasil todo', () => {
    expect(filtrosPadrao([]).local).toBe('brasil');
    expect(ids(aplicarFiltros(LISTA, filtrosPadrao([]), HOJE, []))).toEqual(['chapeco', 'salvador', 'campinas', 'manaus']);
  });
  it('com "Meus estados": abre neles', () => {
    const meus: UF[] = ['SC', 'PR', 'RS'];
    expect(ids(aplicarFiltros(LISTA, filtrosPadrao(meus), HOJE, meus))).toEqual(['chapeco']);
  });
  it('região e UF', () => {
    expect(ids(aplicarFiltros(LISTA, { ...FILTROS_PADRAO, local: 'nordeste' }, HOJE))).toEqual(['salvador']);
    expect(ids(aplicarFiltros(LISTA, { ...FILTROS_PADRAO, local: 'brasil', uf: 'AM' }, HOJE))).toEqual(['manaus']);
  });
  it('concurso acompanhado (status) ou cadastrado à mão nunca some pelo local', () => {
    const lista = [...LISTA, view('inscrito-rj', 'RJ', { status: 'inscrito' }), view('manual-go', 'GO', { manual: true })];
    const meus: UF[] = ['SC'];
    expect(ids(aplicarFiltros(lista, filtrosPadrao(meus), HOJE, meus))).toEqual(['chapeco', 'inscrito-rj', 'manual-go']);
  });
  it('busca pelo nome do estado', () => {
    expect(ids(aplicarFiltros(LISTA, { ...FILTROS_PADRAO, busca: 'bahia' }, HOJE))).toEqual(['salvador']);
  });
  it('contagem por região e UF', () => {
    const c = contarPorLocal(LISTA);
    expect(c.regiao).toEqual({ sul: 1, sudeste: 1, 'centro-oeste': 0, nordeste: 1, norte: 1 });
    expect(c.uf.SC).toBe(1);
  });
});
