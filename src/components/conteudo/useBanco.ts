import { useEffect, useState } from 'react';
import { carregarBanco, carregarBancos, disciplinasComBanco, temBanco } from '@/data/conteudo/carregar';
import type { BancoConteudo } from '@/data/types';

export interface EstadoBanco {
  banco: BancoConteudo | null;
  carregando: boolean;
  erro: string | null;
  /** A disciplina tem banco cadastrado (mesmo que ainda não carregado). */
  disponivel: boolean;
}

/** Carrega sob demanda o banco de uma disciplina. */
export function useBanco(disciplinaId: string | null | undefined): EstadoBanco {
  const disponivel = !!disciplinaId && temBanco(disciplinaId);
  const [estado, setEstado] = useState<{ banco: BancoConteudo | null; carregando: boolean; erro: string | null }>({
    banco: null,
    carregando: disponivel,
    erro: null,
  });
  useEffect(() => {
    let vivo = true;
    if (!disciplinaId || !disponivel) {
      setEstado({ banco: null, carregando: false, erro: null });
      return;
    }
    setEstado((e) => ({ ...e, carregando: true, erro: null }));
    carregarBanco(disciplinaId)
      .then((banco) => vivo && setEstado({ banco, carregando: false, erro: null }))
      .catch(() => vivo && setEstado({ banco: null, carregando: false, erro: 'Não foi possível carregar o conteúdo. Se o app acabou de ser atualizado, recarregue a página.' }));
    return () => {
      vivo = false;
    };
  }, [disciplinaId, disponivel]);
  return { ...estado, disponivel };
}

/** Carrega todos os bancos cadastrados (flashcards do dia, simulado). */
export function useTodosBancos(ativo = true): { bancos: BancoConteudo[]; carregando: boolean; erro: string | null } {
  const [estado, setEstado] = useState<{ bancos: BancoConteudo[]; carregando: boolean; erro: string | null }>({ bancos: [], carregando: ativo, erro: null });
  useEffect(() => {
    if (!ativo) return;
    let vivo = true;
    carregarBancos(disciplinasComBanco())
      .then((bancos) => vivo && setEstado({ bancos, carregando: false, erro: null }))
      .catch(() => vivo && setEstado({ bancos: [], carregando: false, erro: 'Não foi possível carregar o conteúdo. Recarregue a página.' }));
    return () => {
      vivo = false;
    };
  }, [ativo]);
  return estado;
}
