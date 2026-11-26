import { useEffect, useMemo, useState } from 'react';
import type { AgendaDia } from '@/domain/types';
import { mesclarComOverlay, type ConcursoView } from '@/shared/concursos/overlay';
import { addDays, diffDays, todayKey, type DateKey } from '@/utils/dates';
import { desempenhoPorDisciplina, perfilBasicas, projetarNota, type MapaDesempenho, type ProjecaoEdital } from '@/utils/edital';
import { ofensiva, minutosNaSemana, placar, pontosFracos, porEixo, type PontoFraco } from '@/utils/metrics';
import { montarAgenda, TOTAL_SEMANAS_PLANO, type ConfigAgenda } from '@/utils/scheduler';
import { revisoesDevidas } from '@/utils/spacedRepetition';
import { useCronogramaStore } from './useCronogramaStore';
import { useFocusStore } from './useFocusStore';
import { useQuestoesStore } from './useQuestoesStore';
import { useRadarStore } from './useRadarStore';
import { useSettingsStore } from './useSettingsStore';
import { useTreinoStore } from './useTreinoStore';
import { contarVencidos } from '@/utils/flashcards';

/** Data de hoje, atualizada sozinha na virada do dia. */
export function useHoje(): DateKey {
  const [hoje, setHoje] = useState(todayKey());
  useEffect(() => {
    const t = setInterval(() => {
      const agora = todayKey();
      setHoje((h) => (h === agora ? h : agora));
    }, 30_000);
    return () => clearInterval(t);
  }, []);
  return hoje;
}

export function usePontosFracos(): PontoFraco[] {
  const sessoes = useQuestoesStore((s) => s.sessoes);
  return useMemo(() => pontosFracos(sessoes), [sessoes]);
}

/**
 * Configuração da agenda montada a partir das preferências — fonte única para a agenda do dia
 * e para a visão das 12 semanas. Cada campo é selecionado separadamente (referências estáveis)
 * e o objeto só muda quando algum deles muda.
 */
export function useConfigAgenda(): ConfigAgenda {
  const trilha = useSettingsStore((s) => s.trilha);
  const dataInicio = useSettingsStore((s) => s.dataInicio);
  const orcamentoMin = useSettingsStore((s) => s.orcamentoMin);
  const diasPlantao = useSettingsStore((s) => s.diasPlantao);
  const provaAlvo = useSettingsStore((s) => s.provaAlvo);
  // Seleciona a referência estável do edital e deriva o perfil com useMemo (um seletor que cria
  // objeto novo a cada chamada faria o zustand v5 re-renderizar em loop).
  const editalAlvo = useSettingsStore((s) => s.editalAlvo);
  const basicas = useMemo(() => perfilBasicas(editalAlvo), [editalAlvo]);
  return useMemo(
    () => ({ trilha, dataInicio, orcamentoMin, diasPlantao, provaAlvo: provaAlvo?.data ?? null, basicas }),
    [trilha, dataInicio, orcamentoMin, diasPlantao, provaAlvo, basicas],
  );
}

/** Desempenho por disciplina (todas as sessões) — base da nota projetada do Meu Edital. */
export function useDesempenhoPorDisciplina(): MapaDesempenho {
  const sessoes = useQuestoesStore((s) => s.sessoes);
  return useMemo(() => desempenhoPorDisciplina(sessoes), [sessoes]);
}

/** Projeção da nota no edital-alvo (null sem edital). */
export function useProjecaoEdital(): ProjecaoEdital | null {
  const edital = useSettingsStore((s) => s.editalAlvo);
  const desempenho = useDesempenhoPorDisciplina();
  return useMemo(() => (edital ? projetarNota(edital, desempenho) : null), [edital, desempenho]);
}

export function useAgenda(data: DateKey): AgendaDia {
  const config = useConfigAgenda();
  const concluidos = useCronogramaStore((s) => s.concluidos);
  const revisoes = useQuestoesStore((s) => s.revisoes);
  const cartoes = useTreinoStore((s) => s.cartoes);
  const fracos = usePontosFracos();
  const flashcardsDevidos = useMemo(() => contarVencidos(cartoes, data), [cartoes, data]);
  return useMemo(
    () =>
      montarAgenda(data, config, {
        concluidos,
        revisoes,
        piorTema: fracos[0] ? { temaId: fracos[0].temaId, nome: fracos[0].nome } : null,
        flashcardsDevidos,
      }),
    [data, config, concluidos, revisoes, fracos, flashcardsDevidos],
  );
}

export interface Contagem {
  data: DateKey;
  dias: number;
  rotulo: string;
  vinculadoAConcurso: boolean;
}

/** Prova-alvo escolhida ou, por padrão, 90 dias a partir do início do plano. */
export function useContagem(hoje: DateKey): Contagem {
  const provaAlvo = useSettingsStore((s) => s.provaAlvo);
  const dataInicio = useSettingsStore((s) => s.dataInicio);
  return useMemo(() => {
    if (provaAlvo) return { data: provaAlvo.data, dias: diffDays(hoje, provaAlvo.data), rotulo: provaAlvo.rotulo, vinculadoAConcurso: !!provaAlvo.concursoId };
    const data = addDays(dataInicio, TOTAL_SEMANAS_PLANO * 7 + 6);
    return { data, dias: diffDays(hoje, data), rotulo: 'Fim do plano de 90 dias', vinculadoAConcurso: false };
  }, [provaAlvo, dataInicio, hoje]);
}

export function useMetricas(hoje: DateKey) {
  const sessoes = useQuestoesStore((s) => s.sessoes);
  const revisoes = useQuestoesStore((s) => s.revisoes);
  const erros = useQuestoesStore((s) => s.erros);
  const focos = useFocusStore((s) => s.sessoes);
  const diasAtivos = useCronogramaStore((s) => s.diasAtivos);
  return useMemo(() => {
    const dias = new Set<DateKey>(diasAtivos);
    for (const s of sessoes) dias.add(s.data);
    for (const f of focos) if (f.minutos >= 10) dias.add(f.data);
    return {
      global: placar(sessoes),
      eixos: porEixo(sessoes),
      minutosSemana: minutosNaSemana(focos, hoje),
      ofensiva: ofensiva(dias, hoje),
      revisoesHoje: revisoesDevidas(revisoes, hoje).length,
      errosPendentes: erros.filter((e) => !e.resolvido).length,
      errosTotal: erros.length,
      totalSessoes: sessoes.length,
    };
  }, [sessoes, revisoes, erros, focos, diasAtivos, hoje]);
}

export function useConcursos(): ConcursoView[] {
  const feed = useRadarStore((s) => s.feed);
  const manuais = useRadarStore((s) => s.manuais);
  const overlay = useRadarStore((s) => s.overlay);
  const conhecidos = useRadarStore((s) => s.conhecidos);
  const hoje = useHoje();
  return useMemo(
    // `hoje` entra na dependência para recalcular o selo NOVO na virada do dia.
    () => mesclarComOverlay({ feed, manuais, overlay, conhecidos, agora: new Date(`${hoje}T12:00:00`) }),
    [feed, manuais, overlay, conhecidos, hoje],
  );
}

/** Concursos novos (7 dias) nos "Meus estados" do usuário (todos, se ele não escolheu). */
export function useNovosNoRadar(): number {
  const lista = useConcursos();
  const meus = useSettingsStore((s) => s.ufsRadar);
  return useMemo(() => lista.filter((c) => c.isNew && (!meus.length || meus.includes(c.uf))).length, [lista, meus]);
}
