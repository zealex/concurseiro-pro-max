import { getBloco } from '@/data/plano12Semanas';
import { getTema } from '@/data/eixos';
import type { Trilha } from '@/data/types';
import type { ErroCaderno, ModoDia, ProvaAlvo, SessaoQuestoes, TarefaAgenda } from '@/domain/types';
import type { ConcursoView } from '@/shared/concursos/overlay';
import { todayKey, type DateKey } from '@/utils/dates';
import { feedback } from '@/utils/haptics';
import { gerarId } from '@/utils/id';
import { criarItemRevisao, existeCicloAtivo, type ResultadoRevisao } from '@/utils/spacedRepetition';
import { useCronogramaStore } from './useCronogramaStore';
import { useQuestoesStore } from './useQuestoesStore';
import { useSettingsStore } from './useSettingsStore';

/**
 * Ações que atravessam mais de uma store.
 * Mantêm as stores simples (CRUD) e concentram as regras de negócio aqui.
 */

export function concluirTarefa(tarefa: TarefaAgenda, data: DateKey, modo: ModoDia, resultado?: ResultadoRevisao): void {
  const cron = useCronogramaStore.getState();
  const quest = useQuestoesStore.getState();

  if (tarefa.revisaoId) {
    quest.concluirRevisao(tarefa.revisaoId, data, resultado ?? {});
  } else {
    cron.concluir(tarefa.id, { data, plantao: tarefa.versaoPlantao || modo === 'plantao' });
    // Teoria concluída (versão completa) abre um ciclo D1/D7/D15/D30.
    const bloco = tarefa.blocoId ? getBloco(tarefa.blocoId) : undefined;
    if (bloco && bloco.tipo === 'teoria' && !tarefa.versaoPlantao && !existeCicloAtivo(quest.revisoes, 'teoria', { refId: bloco.id })) {
      quest.addRevisao(
        criarItemRevisao({
          id: gerarId('rev'),
          origem: 'teoria',
          refId: bloco.id,
          temaId: bloco.temaIds[0] ?? null,
          eixo: bloco.eixo,
          titulo: bloco.titulo,
          data,
          agoraIso: new Date().toISOString(),
        }),
      );
    }
  }
  cron.registrarAtividade(data);
  feedback('sucesso');
}

export function desfazerTarefa(tarefa: TarefaAgenda): void {
  if (tarefa.revisaoId) return; // revisões são registradas no histórico; não há "desfazer"
  useCronogramaStore.getState().desmarcar(tarefa.id);
  // Remove o ciclo de revisão aberto por engano (ainda sem nenhuma revisão feita).
  if (tarefa.blocoId) useQuestoesStore.getState().removeRevisoesDaRef(tarefa.blocoId);
  feedback('leve');
}

export function registrarSessao(dados: Omit<SessaoQuestoes, 'id' | 'criadoEm'>): SessaoQuestoes {
  const sessao: SessaoQuestoes = { ...dados, id: gerarId('sq'), criadoEm: new Date().toISOString() };
  const quest = useQuestoesStore.getState();
  quest.addSessao(sessao);
  if (sessao.temaId && sessao.tipo === 'bateria' && !existeCicloAtivo(quest.revisoes, 'questoes', { temaId: sessao.temaId })) {
    quest.addRevisao(
      criarItemRevisao({
        id: gerarId('rev'),
        origem: 'questoes',
        refId: sessao.id,
        temaId: sessao.temaId,
        eixo: sessao.eixo,
        titulo: `Questões: ${getTema(sessao.temaId)?.tema.nome ?? 'tema'}`,
        data: sessao.data,
        agoraIso: sessao.criadoEm,
      }),
    );
  }
  useCronogramaStore.getState().registrarAtividade(sessao.data);
  feedback('sucesso');
  return sessao;
}

export function registrarErro(dados: Omit<ErroCaderno, 'id' | 'criadoEm' | 'resolvido' | 'resolvidoEm'>): ErroCaderno {
  const erro: ErroCaderno = { ...dados, id: gerarId('erro'), criadoEm: new Date().toISOString(), resolvido: false, resolvidoEm: null };
  const quest = useQuestoesStore.getState();
  quest.addErro(erro);
  quest.addRevisao(
    criarItemRevisao({
      id: gerarId('rev'),
      origem: 'erro',
      refId: erro.id,
      temaId: erro.temaId,
      eixo: erro.eixo,
      titulo: `Erro: ${erro.enunciado.slice(0, 60) || getTema(erro.temaId ?? '')?.tema.nome || 'caderno'}`,
      data: erro.data,
      agoraIso: erro.criadoEm,
    }),
  );
  useCronogramaStore.getState().registrarAtividade(erro.data);
  feedback('sucesso');
  return erro;
}

/** Trilha sugerida pela categoria do cargo. */
export function trilhaParaConcurso(c: Pick<ConcursoView, 'tag'>): Trilha {
  if (c.tag === 'medico-legista') return 'legista';
  if (c.tag === 'medicina-do-trabalho') return 'trabalho';
  return 'municipal';
}

export interface EstadoAnteriorProva {
  provaAlvo: ProvaAlvo | null;
  trilha: Trilha;
}

/** Vincula a prova do concurso ao cronômetro e ajusta o foco do cronograma. Devolve o estado anterior (para desfazer). */
export function definirProvaAlvo(c: ConcursoView, dataProva: DateKey): EstadoAnteriorProva {
  const s = useSettingsStore.getState();
  const anterior = { provaAlvo: s.provaAlvo, trilha: s.trilha };
  s.setProvaAlvo({ data: dataProva, rotulo: `${c.orgao} — ${c.cidade}/${c.uf}`, concursoId: c.id });
  s.setTrilha(trilhaParaConcurso(c));
  if (c.banca) s.setBancaAlvo(c.banca);
  feedback('sucesso');
  return anterior;
}

export function restaurarProvaAlvo(anterior: EstadoAnteriorProva): void {
  const s = useSettingsStore.getState();
  s.setProvaAlvo(anterior.provaAlvo);
  s.setTrilha(anterior.trilha);
}

export function reiniciarPlanoHoje(): void {
  useSettingsStore.getState().setDataInicio(todayKey());
}
