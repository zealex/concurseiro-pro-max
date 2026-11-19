import type { ConcursoView, StatusPessoal } from '@/shared/concursos/overlay';
import { normalizar } from '@/shared/concursos/normalize';
import type { Acesso, Categoria, UF } from '@/shared/concursos/schema';
import type { DateKey } from '@/utils/dates';

export interface FiltrosRadar {
  /** Foco do app: por padrão mostra só o que o generalista pode disputar (especialidades a um toque). */
  acesso: Acesso | 'todos';
  uf: UF | 'todos';
  busca: string;
  categoria: Categoria | 'todas';
  banca: string | 'todas';
  status: StatusPessoal | 'todos';
  somenteAbertos: boolean;
}

export const FILTROS_PADRAO: FiltrosRadar = {
  acesso: 'generalista',
  uf: 'todos',
  busca: '',
  categoria: 'todas',
  banca: 'todas',
  status: 'todos',
  somenteAbertos: false,
};

export function aplicarFiltros(lista: ConcursoView[], f: FiltrosRadar, hoje: DateKey): ConcursoView[] {
  const termo = normalizar(f.busca);
  return lista.filter((c) => {
    // Concursos que o usuário já acompanha (status ≠ radar) nunca somem pelo filtro de acesso.
    if (f.acesso !== 'todos' && c.acesso !== f.acesso && c.status === 'radar') return false;
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

export function contarPorAcesso(lista: ConcursoView[]): Record<Acesso | 'todos', number> {
  const generalista = lista.filter((c) => c.acesso === 'generalista').length;
  return { generalista, especialista: lista.length - generalista, todos: lista.length };
}

export function bancasDisponiveis(lista: ConcursoView[]): string[] {
  return [...new Set(lista.map((c) => c.banca ?? 'Não informada'))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
}
