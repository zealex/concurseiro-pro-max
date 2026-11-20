import { getBloco } from '@/data/plano12Semanas';
import { getTema } from '@/data/eixos';
import type { QuestaoTreino, Trilha } from '@/data/types';
import type { ErroCaderno, ItemRevisao, ModoDia, ProvaAlvo, SessaoQuestoes, TarefaAgenda } from '@/domain/types';
import type { ConcursoView } from '@/shared/concursos/overlay';
import { todayKey, type DateKey } from '@/utils/dates';
import { feedback } from '@/utils/haptics';
import { gerarId } from '@/utils/id';
import { criarItemRevisao, existeCicloAtivo, type ResultadoRevisao } from '@/utils/spacedRepetition';
import { useCronogramaStore } from './useCronogramaStore';
import { useQuestoesStore } from './useQuestoesStore';
import { useSettingsStore } from './useSettingsStore';
import { useTreinoStore } from './useTreinoStore';

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
    // Teoria concluída (versão completa) abre um ciclo D1/D7/D15/D30 — exceto blocos de básicas,
    // cuja retenção fica com os flashcards (evita uma avalanche de revisões).
    const bloco = tarefa.blocoId ? getBloco(tarefa.blocoId) : undefined;
    if (bloco && bloco.tipo === 'teoria' && !bloco.semRevisao && !tarefa.versaoPlantao && !existeCicloAtivo(quest.revisoes, 'teoria', { refId: bloco.id })) {
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

/* ------------------------------------------------------------------ */
/* Treino interno                                                      */
/* ------------------------------------------------------------------ */

export interface RespostaRegistrada {
  questao: QuestaoTreino;
  /** true/false = acertou/errou; null = em branco (Certo/Errado). */
  certa: boolean | null;
}

/** Revisão D1/D7/D15/D30 só para tema fraco: ≥ 10 questões no treino e < 70% de acerto. */
const MIN_QUESTOES_REVISAO_TREINO = 10;

/**
 * Registra um treino/simulado inteiro numa única atualização: uma sessão por tema (com o mesmo
 * `lote`), histórico por questão, revisão só para temas fracos e um único feedback háptico.
 */
export function registrarResultadoTreino(
  respostas: RespostaRegistrada[],
  op: { data: DateKey; tipo: 'bateria' | 'simulado'; origem: 'treino' | 'simulado'; duracaoMin: number | null; banca: string | null },
): { lote: string; sessoes: SessaoQuestoes[] } {
  const lote = gerarId('lote');
  const agora = new Date().toISOString();
  const porTema = new Map<string, { total: number; acertos: number; erros: number }>();
  for (const r of respostas) {
    const t = porTema.get(r.questao.temaId) ?? { total: 0, acertos: 0, erros: 0 };
    t.total += 1;
    if (r.certa === true) t.acertos += 1;
    if (r.certa === false) t.erros += 1;
    porTema.set(r.questao.temaId, t);
  }
  const quest = useQuestoesStore.getState();
  const sessoes: SessaoQuestoes[] = [...porTema.entries()].map(([temaId, v]) => {
    const tema = getTema(temaId);
    return {
      id: gerarId('sq'),
      data: op.data,
      tipo: op.tipo,
      eixo: tema?.disciplina.eixo ?? 'basicos',
      disciplinaId: tema?.disciplina.id ?? 'basicas',
      temaId,
      banca: op.banca,
      total: v.total,
      acertos: v.acertos,
      erros: v.erros,
      duracaoMin: op.duracaoMin === null ? null : Math.max(1, Math.round((op.duracaoMin * v.total) / Math.max(1, respostas.length))),
      notas: op.origem === 'simulado' ? 'Simulado do app' : 'Treino do app',
      criadoEm: agora,
      origem: op.origem,
      lote,
    };
  });
  const revisoes: ItemRevisao[] = [];
  for (const s of sessoes) {
    if (!s.temaId || s.total < MIN_QUESTOES_REVISAO_TREINO || s.acertos / s.total >= 0.7) continue;
    if (existeCicloAtivo(quest.revisoes, 'questoes', { temaId: s.temaId })) continue;
    revisoes.push(
      criarItemRevisao({
        id: gerarId('rev'),
        origem: 'questoes',
        refId: s.id,
        temaId: s.temaId,
        eixo: s.eixo,
        titulo: `Questões: ${getTema(s.temaId)?.tema.nome ?? 'tema'}`,
        data: s.data,
        agoraIso: agora,
      }),
    );
  }
  useQuestoesStore.setState((st) => ({ sessoes: [...sessoes, ...st.sessoes], revisoes: [...st.revisoes, ...revisoes] }));
  useTreinoStore.getState().registrarRespostas(
    respostas.filter((r) => r.certa !== null).map((r) => ({ id: r.questao.id, certa: r.certa === true })),
    op.data,
  );
  useCronogramaStore.getState().registrarAtividade(op.data);
  feedback('sucesso');
  return { lote, sessoes };
}

/** Manda as questões erradas para o Caderno de Erros (sem duplicar as que já estão pendentes). */
export function enviarErrosAoCaderno(questoes: QuestaoTreino[], data: DateKey): number {
  const quest = useQuestoesStore.getState();
  const pendentes = new Set(quest.erros.filter((e) => !e.resolvido).map((e) => e.fonte.split(' · ')[0]));
  const agora = new Date().toISOString();
  const erros: ErroCaderno[] = [];
  const revisoes: ItemRevisao[] = [];
  for (const q of questoes) {
    const chave = `treino:${q.id}`;
    if (pendentes.has(chave)) continue;
    pendentes.add(chave);
    const tema = getTema(q.temaId);
    const erro: ErroCaderno = {
      id: gerarId('erro'),
      data,
      eixo: tema?.disciplina.eixo ?? 'basicos',
      disciplinaId: tema?.disciplina.id ?? 'basicas',
      temaId: q.temaId,
      banca: null,
      enunciado: q.enunciado.length > 280 ? `${q.enunciado.slice(0, 277)}…` : q.enunciado,
      porqueErrei: '',
      regraCorreta: q.comentario,
      fonte: q.fundamento ? `${chave} · ${q.fundamento}` : chave,
      resolvido: false,
      resolvidoEm: null,
      criadoEm: agora,
    };
    erros.push(erro);
    revisoes.push(
      criarItemRevisao({
        id: gerarId('rev'),
        origem: 'erro',
        refId: erro.id,
        temaId: erro.temaId,
        eixo: erro.eixo,
        titulo: `Erro: ${tema?.tema.nome ?? 'treino'}`,
        data,
        agoraIso: agora,
      }),
    );
  }
  if (erros.length) {
    useQuestoesStore.setState((st) => ({ erros: [...erros, ...st.erros], revisoes: [...st.revisoes, ...revisoes] }));
    feedback('sucesso');
  }
  return erros.length;
}

/** Trilha sugerida pela categoria do cargo. */
export function trilhaParaConcurso(c: Pick<ConcursoView, 'tag'>): Trilha {
  if (c.tag === 'medico-legista') return 'legista';
  // Medicina do Trabalho exige especialização; o conteúdo mais próximo para o generalista é o da perícia.
  if (c.tag === 'pericia-medica' || c.tag === 'medicina-do-trabalho') return 'pericia';
  return 'clinico';
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
