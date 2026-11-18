import { useRouter } from 'expo-router';
import { ArrowLeft, Trash2 } from 'lucide-react-native';
import { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Callout, Card, EmptyState, IconButton, Muted, Row, Screen, Section, Tag, Txt, useToast } from '@/components/ui';
import { EIXO_LABEL } from '@/data/types';
import type { ItemRevisao } from '@/domain/types';
import { useHoje } from '@/store/selectors';
import { useCronogramaStore } from '@/store/useCronogramaStore';
import { useQuestoesStore } from '@/store/useQuestoesStore';
import { COR_EIXO, useCores } from '@/theme/cores';
import { formatBR, relativo } from '@/utils/dates';
import { feedback } from '@/utils/haptics';
import { cronogramaDoCiclo, ETAPA_LABEL, revisoesDoDia } from '@/utils/spacedRepetition';

const ORIGEM = { teoria: '📘 Teoria', questoes: '🎯 Questões', erro: '📕 Erro' } as const;

export default function Revisoes() {
  const router = useRouter();
  const toast = useToast();
  const cores = useCores();
  const hoje = useHoje();
  const revisoes = useQuestoesStore((s) => s.revisoes);
  const concluir = useQuestoesStore((s) => s.concluirRevisao);
  const remover = useQuestoesStore((s) => s.removeRevisao);
  const registrarAtividade = useCronogramaStore((s) => s.registrarAtividade);
  const listas = useMemo(() => revisoesDoDia(revisoes, hoje, 14), [revisoes, hoje]);
  const concluidas = revisoes.filter((r) => r.status === 'concluido').length;

  const marcar = (r: ItemRevisao, dificil: boolean) => {
    concluir(r.id, hoje, { dificil });
    registrarAtividade(hoje);
    feedback('sucesso');
    toast(dificil ? 'Ciclo reiniciado: nova revisão amanhã (D1).' : r.etapa >= 3 ? 'Ciclo concluído — tema dominado! 🎉' : `Próxima etapa: ${ETAPA_LABEL[r.etapa + 1]}.`);
  };

  const Item = ({ r, acoes }: { r: ItemRevisao; acoes: boolean }) => (
    <Card className="mb-2">
      <Row className="mb-1 flex-wrap gap-1.5">
        <Tag texto={ETAPA_LABEL[r.etapa] ?? 'D1'} cor="purple" />
        <Tag texto={EIXO_LABEL[r.eixo]} cor={COR_EIXO[r.eixo]} />
        <Tag texto={ORIGEM[r.origem]} />
      </Row>
      <Txt className="font-medium">{r.titulo}</Txt>
      <Muted>
        Vence {formatBR(r.proxima)} ({relativo(hoje, r.proxima)}) · ciclo iniciado em {formatBR(r.baseDate)}
      </Muted>
      <Muted className="mt-1">Etapas: {cronogramaDoCiclo(r.baseDate).map((d, i) => `${ETAPA_LABEL[i]} ${formatBR(d).slice(0, 5)}`).join(' → ')}</Muted>
      <Row className="mt-2 flex-wrap gap-2">
        {acoes ? (
          <>
            <Button pequeno variante="primario" titulo="✅ Lembrei bem" onPress={() => marcar(r, false)} />
            <Button pequeno titulo="😬 Difícil" onPress={() => marcar(r, true)} />
          </>
        ) : null}
        <IconButton icone={Trash2} rotulo="Remover do ciclo" onPress={() => remover(r.id)} />
      </Row>
    </Card>
  );

  return (
    <Screen emoji="🔁" titulo="Revisão espaçada" descricao="Ciclos D1 → D7 → D15 → D30 criados automaticamente ao concluir teoria, registrar baterias por tema e lançar erros.">
      <Pressable onPress={() => router.back()} className="mb-3 flex-row items-center self-start rounded px-1 py-1 hover:bg-hover dark:hover:bg-hover-dark">
        <ArrowLeft size={16} color={cores.suave} />
        <Muted className="ml-1">Central de Questões</Muted>
      </Pressable>
      <Callout emoji="🧠">
        <Txt>
          D1: releia o resumo e refaça 5 questões · D7: 10 questões sem consulta · D15: refaça o cheat sheet de memória · D30: 10 questões mistas da banca-alvo. Abaixo
          de 70% (ou "difícil") o ciclo recomeça.
        </Txt>
      </Callout>
      <Muted className="mb-4">
        {revisoes.filter((r) => r.status === 'ativo').length} ciclos ativos · {concluidas} concluídos
      </Muted>

      {listas.atrasadas.length ? (
        <Section titulo={`⏰ Atrasadas (${listas.atrasadas.length})`}>
          {listas.atrasadas.map((r) => (
            <Item key={r.id} r={r} acoes />
          ))}
        </Section>
      ) : null}
      <Section titulo={`📅 Hoje (${listas.hoje.length})`}>
        {listas.hoje.length ? listas.hoje.map((r) => <Item key={r.id} r={r} acoes />) : <EmptyState emoji="✅" titulo="Nenhuma revisão para hoje" />}
      </Section>
      <Section titulo={`🔜 Próximos 14 dias (${listas.proximas.length})`}>
        {listas.proximas.length ? listas.proximas.map((r) => <Item key={r.id} r={r} acoes={false} />) : <Muted>Nada agendado.</Muted>}
      </Section>
      <View className="h-4" />
    </Screen>
  );
}
