import { useRouter } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { EMOJI_DISCIPLINA, resolverRef, rotaResumo } from '@/data/biblioteca';
import { getDisciplina } from '@/data/eixos';
import { EIXO_LABEL } from '@/data/types';
import { useTreinoStore } from '@/store/useTreinoStore';
import { useCores } from '@/theme/cores';
import { useBanco } from '../conteudo/useBanco';
import { Button } from '../ui/Button';
import { Callout, EmptyState, ProgressBar } from '../ui/Controls';
import { Card, Muted, Row, Section, Txt } from '../ui/primitives';
import { Screen } from '../ui/Screen';
import { Tag } from '../ui/Tag';
import { rotaFlashcards, rotaTreino, Voltar } from './comum';

export function PaginaDisciplina({ disciplinaId }: { disciplinaId: string }) {
  const router = useRouter();
  const cores = useCores();
  const disciplina = getDisciplina(disciplinaId);
  const { banco, carregando, erro, disponivel } = useBanco(disciplinaId);
  const historico = useTreinoStore((s) => s.questoes);

  if (!disciplina) {
    return (
      <Screen emoji="🔎" titulo="Disciplina não encontrada">
        <Voltar />
      </Screen>
    );
  }

  const resumos = new Set(banco?.resumos.map((r) => r.temaId) ?? []);
  const questoesPorTema = new Map<string, string[]>();
  for (const q of banco?.questoes ?? []) questoesPorTema.set(q.temaId, [...(questoesPorTema.get(q.temaId) ?? []), q.id]);
  const cartoesPorTema = new Map<string, number>();
  for (const f of banco?.flashcards ?? []) cartoesPorTema.set(f.temaId, (cartoesPorTema.get(f.temaId) ?? 0) + 1);
  const feitas = (ids: string[]) => ids.filter((id) => historico[id]).length;

  return (
    <Screen
      emoji={EMOJI_DISCIPLINA[disciplina.id] ?? '📚'}
      titulo={disciplina.nome}
      descricao={`${disciplina.temas.length} temas · ${EIXO_LABEL[disciplina.eixo]}`}
      acoes={
        banco ? (
          <>
            {banco.questoes.length ? <Button variante="primario" titulo={`🎯 Treinar (${banco.questoes.length} questões)`} onPress={() => router.push(rotaTreino(disciplina.id))} /> : null}
            {banco.flashcards.length ? <Button titulo={`🗂️ Flashcards (${banco.flashcards.length})`} onPress={() => router.push(rotaFlashcards(disciplina.id))} /> : null}
          </>
        ) : undefined
      }
    >
      <Voltar />
      {carregando ? <ActivityIndicator color={cores.accent} /> : null}
      {erro ? <Callout emoji="⚠️" tom="vermelho">{erro}</Callout> : null}
      {!disponivel ? (
        <Callout emoji="🛠️" tom="amarelo">
          O conteúdo próprio desta disciplina (resumos, questões comentadas e flashcards) está em produção e chega numa próxima atualização. Enquanto isso, use o cronograma, os checklists de lei seca e os filtros dos bancos de questões da Biblioteca.
        </Callout>
      ) : null}

      <Section titulo="Temas">
        {disciplina.temas.map((t) => {
          const qs = questoesPorTema.get(t.id) ?? [];
          const nf = cartoesPorTema.get(t.id) ?? 0;
          const refs = (t.refs ?? []).map(resolverRef).filter((r) => r !== null);
          return (
            <Card key={t.id} className="mb-2">
              <Txt className="font-medium">{t.nome}</Txt>
              {banco ? (
                <Row className="mt-1 flex-wrap items-center gap-1.5">
                  {resumos.has(t.id) ? <Tag texto="Resumo" cor="blue" /> : null}
                  {qs.length ? <Tag texto={`${qs.length} questões`} cor="green" /> : null}
                  {nf ? <Tag texto={`${nf} flashcards`} cor="purple" /> : null}
                  {qs.length ? <Muted className="ml-1">{feitas(qs)} feitas</Muted> : null}
                </Row>
              ) : null}
              {qs.length ? <ProgressBar valor={feitas(qs) / qs.length} className="mt-2" /> : null}
              <Row className="mt-2 flex-wrap gap-2">
                {resumos.has(t.id) ? <Button pequeno titulo="📘 Resumo" onPress={() => router.push(rotaResumo(t.id))} /> : null}
                {qs.length ? <Button pequeno titulo="🎯 Treinar" onPress={() => router.push(rotaTreino(disciplina.id, [t.id]))} /> : null}
                {refs.map((r) => (
                  <Button key={r.id} pequeno variante="fantasma" titulo={r.rotulo} onPress={() => router.push(r.rota)} />
                ))}
              </Row>
            </Card>
          );
        })}
      </Section>
      {banco && !banco.questoes.length && !banco.resumos.length ? <EmptyState titulo="Sem conteúdo ainda" /> : null}
      <View className="h-4" />
    </Screen>
  );
}
