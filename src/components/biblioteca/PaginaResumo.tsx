import { useRouter } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { EMOJI_DISCIPLINA, rotaDisciplina, rotaResumo } from '@/data/biblioteca';
import { getTema } from '@/data/eixos';
import { useCores } from '@/theme/cores';
import { formatBR } from '@/utils/dates';
import { BlocosResumo, TextoRico } from '../conteudo/BlocosResumo';
import { useBanco } from '../conteudo/useBanco';
import { Button } from '../ui/Button';
import { Callout } from '../ui/Controls';
import { Divider, Muted, Row, Section, Txt } from '../ui/primitives';
import { Screen } from '../ui/Screen';
import { rotaFlashcards, rotaTreino, Voltar } from './comum';

export function PaginaResumo({ temaId }: { temaId: string }) {
  const router = useRouter();
  const cores = useCores();
  const alvo = getTema(temaId);
  const { banco, carregando, erro } = useBanco(alvo?.disciplina.id);

  if (!alvo) {
    return (
      <Screen emoji="🔎" titulo="Tema não encontrado">
        <Voltar />
      </Screen>
    );
  }
  const { tema, disciplina } = alvo;
  const resumo = banco?.resumos.find((r) => r.temaId === temaId);
  const nQuestoes = banco?.questoes.filter((q) => q.temaId === temaId).length ?? 0;
  const nCartoes = banco?.flashcards.filter((f) => f.temaId === temaId).length ?? 0;
  const comResumo = disciplina.temas.filter((t) => banco?.resumos.some((r) => r.temaId === t.id));
  const pos = comResumo.findIndex((t) => t.id === temaId);
  const anterior = pos > 0 ? comResumo[pos - 1] : undefined;
  const proximo = pos >= 0 ? comResumo[pos + 1] : undefined;

  return (
    <Screen emoji={EMOJI_DISCIPLINA[disciplina.id] ?? '📘'} titulo={resumo?.titulo ?? tema.nome} descricao={disciplina.nome}>
      <Voltar rotulo={disciplina.nome} destino={rotaDisciplina(disciplina.id)} />
      {carregando ? <ActivityIndicator color={cores.accent} /> : null}
      {erro ? <Callout emoji="⚠️" tom="vermelho">{erro}</Callout> : null}
      {!carregando && !resumo ? <Callout emoji="🛠️" tom="amarelo">O resumo deste tema ainda está em produção.</Callout> : null}
      {resumo ? (
        <>
          <Callout emoji="🎯" tom="azul">
            <TextoRico texto={resumo.resumo} />
          </Callout>
          <BlocosResumo blocos={resumo.blocos} />
          <Row className="my-3 flex-wrap gap-2">
            {nQuestoes ? <Button variante="primario" titulo={`🎯 Treinar este tema (${nQuestoes})`} onPress={() => router.push(rotaTreino(disciplina.id, [temaId]))} /> : null}
            {nCartoes ? <Button titulo={`🗂️ Flashcards (${nCartoes})`} onPress={() => router.push(rotaFlashcards(disciplina.id))} /> : null}
          </Row>
          <Divider />
          <Section titulo="Fontes">
            {resumo.fontes.map((f) => (
              <Muted key={f} className="mb-1">
                • {f}
              </Muted>
            ))}
            <Muted className="mt-1">Conferido em {formatBR(resumo.atualizadoEm)}. Normas mudam: em caso de dúvida, vale o texto oficial vigente.</Muted>
          </Section>
          <Row className="mt-2 justify-between gap-2">
            {anterior ? <Button pequeno variante="fantasma" titulo={`← ${anterior.nome}`} onPress={() => router.replace(rotaResumo(anterior.id))} /> : <View />}
            {proximo ? <Button pequeno variante="fantasma" titulo={`${proximo.nome} →`} onPress={() => router.replace(rotaResumo(proximo.id))} /> : null}
          </Row>
        </>
      ) : null}
      <Txt className="h-4"> </Txt>
    </Screen>
  );
}
