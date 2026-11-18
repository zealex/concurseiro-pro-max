import type { ConcursoView, StatusPessoal } from '@/shared/concursos/overlay';
import { normalizar } from '@/shared/concursos/normalize';
import type { Categoria, UF } from '@/shared/concursos/schema';
import type { DateKey } from '@/utils/dates';

export interface FiltrosRadar {
  uf: UF | 'todos';
  busca: string;
  categoria: Categoria | 'todas';
  banca: string | 'todas';
  status: StatusPessoal | 'todos';
  somenteAbertos: boolean;
}

export const FILTROS_PADRAO: FiltrosRadar = { uf: 'todos', busca: '', categoria: 'todas', banca: 'todas', status: 'todos', somenteAbertos: false };

export function aplicarFiltros(lista: ConcursoView[], f: FiltrosRadar, hoje: DateKey): ConcursoView[] {
  const termo = normalizar(f.busca);
  return lista.filter((c) => {
    if (f.uf !== 'todos' && c.uf !== f.uf) return false;
    if (f.categoria !== 'todas' && c.categoria !== f.categoria) return false;
    if (f.banca !== 'todas' && (c.banca ?? 'Não informada') !== f.banca) return false;
    if (f.status !== 'todos' && c.status !== f.status) return false;
    if (f.somenteAbertos && c.inscricoes.fim && c.inscricoes.fim < hoje) return false;
    if (termo) {
      const alvo = normalizar(`${c.cidade} ${c.orgao} ${c.cargos.map((x) => x.nome).join(' ')} ${c.banca ?? ''}`);
      if (!termo.split(' ').every((t) => alvo.includes(t))) return false;
    }
    return true;
  });
}

export function bancasDisponiveis(lista: ConcursoView[]): string[] {
  return [...new Set(lista.map((c) => c.banca ?? 'Não informada'))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
}
