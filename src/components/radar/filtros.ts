import type { ConcursoView, StatusPessoal } from '@/shared/concursos/overlay';
import { normalizar } from '@/shared/concursos/normalize';
import { regiaoDe, REGIOES, UF_NOME, type Acesso, type Categoria, type Regiao, type UF } from '@/shared/concursos/schema';
import type { DateKey } from '@/utils/dates';

/** Onde procurar: os estados escolhidos em Configurações, o Brasil todo ou uma região. */
export type LocalRadar = 'meus' | 'brasil' | Regiao;

export interface FiltrosRadar {
  /** Foco do app: por padrão mostra só o que o generalista pode disputar (especialidades a um toque). */
  acesso: Acesso | 'todos';
  local: LocalRadar;
  /** UF específica (dentro do local escolhido). */
  uf: UF | 'todos';
  busca: string;
  categoria: Categoria | 'todas';
  banca: string | 'todas';
  status: StatusPessoal | 'todos';
  somenteAbertos: boolean;
}

export const FILTROS_PADRAO: FiltrosRadar = {
  acesso: 'generalista',
  local: 'brasil',
  uf: 'todos',
  busca: '',
  categoria: 'todas',
  banca: 'todas',
  status: 'todos',
  somenteAbertos: false,
};

/** Filtros iniciais: com "Meus estados" definidos, o Radar abre neles. */
export function filtrosPadrao(meusEstados: readonly UF[]): FiltrosRadar {
  return { ...FILTROS_PADRAO, local: meusEstados.length ? 'meus' : 'brasil' };
}

/** O concurso está no local escolhido? */
export function noLocal(c: Pick<ConcursoView, 'uf'>, local: LocalRadar, meusEstados: readonly UF[]): boolean {
  if (local === 'brasil') return true;
  if (local === 'meus') return !meusEstados.length || meusEstados.includes(c.uf);
  return regiaoDe(c.uf) === local;
}

export function aplicarFiltros(lista: ConcursoView[], f: FiltrosRadar, hoje: DateKey, meusEstados: readonly UF[] = []): ConcursoView[] {
  const termo = normalizar(f.busca);
  return lista.filter((c) => {
    // Concursos que o usuário já acompanha (status ≠ radar) ou cadastrou nunca somem pelo filtro de acesso/local.
    const acompanhado = c.status !== 'radar' || c.manual;
    if (f.acesso !== 'todos' && c.acesso !== f.acesso && c.status === 'radar') return false;
    if (f.uf !== 'todos') {
      if (c.uf !== f.uf) return false;
    } else if (!acompanhado && !noLocal(c, f.local, meusEstados)) {
      return false;
    }
    if (f.categoria !== 'todas' && c.categoria !== f.categoria) return false;
    if (f.banca !== 'todas' && (c.banca ?? 'Não informada') !== f.banca) return false;
    if (f.status !== 'todos' && c.status !== f.status) return false;
    if (f.somenteAbertos && c.inscricoes.fim && c.inscricoes.fim < hoje) return false;
    if (termo) {
      const alvo = normalizar(`${c.cidade} ${c.orgao} ${c.cargos.map((x) => x.nome).join(' ')} ${c.banca ?? ''} ${c.uf} ${UF_NOME[c.uf] ?? ''}`);
      if (!termo.split(' ').every((t) => alvo.includes(t))) return false;
    }
    return true;
  });
}

export function contarPorAcesso(lista: ConcursoView[]): Record<Acesso | 'todos', number> {
  const generalista = lista.filter((c) => c.acesso === 'generalista').length;
  return { generalista, especialista: lista.length - generalista, todos: lista.length };
}

/** Quantos concursos há em cada região e UF (para os rótulos dos chips). */
export function contarPorLocal(lista: ConcursoView[]): { regiao: Record<Regiao, number>; uf: Partial<Record<UF, number>> } {
  const regiao = Object.fromEntries(REGIOES.map((r) => [r, 0])) as Record<Regiao, number>;
  const uf: Partial<Record<UF, number>> = {};
  for (const c of lista) {
    regiao[regiaoDe(c.uf)]++;
    uf[c.uf] = (uf[c.uf] ?? 0) + 1;
  }
  return { regiao, uf };
}

export function bancasDisponiveis(lista: ConcursoView[]): string[] {
  return [...new Set(lista.map((c) => c.banca ?? 'Não informada'))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
}
