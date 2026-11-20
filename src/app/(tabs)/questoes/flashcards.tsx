import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { TextoRico } from '@/components/conteudo/BlocosResumo';
import { useTodosBancos } from '@/components/conteudo/useBanco';
import { Button, Callout, Card, Chip, EmptyState, Label, Muted, ProgressBar, Row, Screen, Segmented, Tag, Txt } from '@/components/ui';
import { getDisciplina, getTema } from '@/data/eixos';
import type { Flashcard } from '@/data/types';
import { useHoje } from '@/store/selectors';
import { useTreinoStore } from '@/store/useTreinoStore';
import { useCores } from '@/theme/cores';
import { CAIXAS, filaDoDia, type RespostaCartao } from '@/utils/flashcards';

export default function Flashcards() {
  const router = useRouter();
  const cores = useCores();
  const hoje = useHoje();
  const params = useLocalSearchParams<{ disciplina?: string }>();
  const { bancos, carregando, erro } = useTodosBancos();
  const estados = useTreinoStore((s) => s.cartoes);
  const responder = useTreinoStore((s) => s.responderCartao);
  const novosPorDia = useTreinoStore((s) => s.prefs.novosPorDia);
  const setPrefs = useTreinoStore((s) => s.setPrefs);
  const [filtro, setFiltro] = useState<string>(params.disciplina ?? 'todas');
  const [sessao, setSessao] = useState<Flashcard[] | null>(null);
  const [pos, setPos] = useState(0);
  const [virado, setVirado] = useState(false);
  const [feitos, setFeitos] = useState(0);

  const cartoes = useMemo(() => bancos.filter((b) => filtro === 'todas' || b.disciplinaId === filtro).flatMap((b) => b.flashcards), [bancos, filtro]);
  const fila = useMemo(() => filaDoDia(cartoes, estados, hoje, novosPorDia), [cartoes, estados, hoje, novosPorDia]);

  const iniciar = () => {
    setSessao(fila.fila);
    setPos(0);
    setVirado(false);
    setFeitos(0);
  };

  const responderAtual = (r: RespostaCartao) => {
    if (!sessao) return;
    const c = sessao[pos];
    if (!c) return;
    responder(c.id, r, hoje);
    setFeitos((n) => n + 1);
    // "Errei" volta para o fim da sessão de hoje (mais uma tentativa).
    if (r === 'errei') setSessao((s) => (s ? [...s, c] : s));
    setPos((p) => p + 1);
    setVirado(false);
  };

  const voltar = (
    <Pressable onPress={() => (router.canGoBack() ? router.back() : router.replace('/questoes'))} className="mb-3 flex-row items-center self-start rounded px-1 py-1" accessibilityRole="link">
      <ArrowLeft size={16} color={cores.suave} />
      <Muted className="ml-1">Questões</Muted>
    </Pressable>
  );

  if (carregando) {
    return (
      <Screen emoji="🗂️" titulo="Flashcards">
        {voltar}
        <ActivityIndicator color={cores.accent} />
      </Screen>
    );
  }

  if (!bancos.length) {
    return (
      <Screen emoji="🗂️" titulo="Flashcards">
        {voltar}
        {erro ? <Callout emoji="⚠️" tom="vermelho">{erro}</Callout> : null}
        <EmptyState emoji="🛠️" titulo="Flashcards em produção" texto="Os baralhos das básicas chegam nas próximas atualizações." />
      </Screen>
    );
  }

  /* ------------------------------ Sessão ------------------------------ */
  if (sessao) {
    const c = sessao[pos];
    if (!c) {
      return (
        <Screen emoji="🎉" titulo="Sessão concluída" descricao={`${feitos} respostas hoje`}>
          <Callout emoji="✅" tom="verde">
            Ótimo! Os cartões voltam em 1, 3, 7, 15 e 30 dias conforme você acerta. Volte amanhã para os próximos.
          </Callout>
          <Row className="gap-2">
            <Button titulo="Voltar" onPress={() => setSessao(null)} />
            <Button variante="primario" titulo="Treinar questões" onPress={() => router.push('/questoes/treino')} />
          </Row>
        </Screen>
      );
    }
    const estado = estados[c.id];
    const tema = getTema(c.temaId);
    return (
      <Screen emoji="🗂️" titulo="Flashcards" descricao={`Cartão ${pos + 1} de ${sessao.length}`}>
        <ProgressBar valor={pos / sessao.length} className="mb-3" />
        <Pressable onPress={() => setVirado((v) => !v)} accessibilityRole="button" accessibilityLabel={virado ? 'Ver a frente' : 'Ver a resposta'}>
          <Card className="min-h-[220px] justify-center">
            <Row className="mb-3 flex-wrap gap-1.5">
              {tema ? <Tag texto={tema.tema.nome} cor="orange" /> : null}
              <Tag texto={estado ? `caixa ${estado.caixa + 1}/${CAIXAS.length}` : 'novo'} cor={estado ? 'blue' : 'green'} />
            </Row>
            <TextoRico texto={c.frente} className="text-center text-[18px] leading-7" />
            {virado ? (
              <View className="mt-4 border-t border-line pt-4 dark:border-line-dark">
                <TextoRico texto={c.verso} className="text-center text-[16px] leading-7" />
                {c.fonte ? <Muted className="mt-2 text-center">{c.fonte}</Muted> : null}
              </View>
            ) : (
              <Text className="mt-4 text-center text-[13px] text-ink-faint">Toque para ver a resposta</Text>
            )}
          </Card>
        </Pressable>
        {virado ? (
          <Row className="mt-3 gap-2">
            <Button className="flex-1" variante="perigo" titulo="Errei" onPress={() => responderAtual('errei')} />
            <Button className="flex-1" titulo="Difícil" onPress={() => responderAtual('dificil')} />
            <Button className="flex-1" variante="primario" titulo="Acertei" onPress={() => responderAtual('acertei')} />
          </Row>
        ) : (
          <Button className="mt-3" variante="primario" titulo="Mostrar resposta" onPress={() => setVirado(true)} />
        )}
        <Pressable onPress={() => setSessao(null)} className="mt-4 self-center">
          <Muted>Encerrar sessão</Muted>
        </Pressable>
      </Screen>
    );
  }

  /* ------------------------------ Início ------------------------------ */
  return (
    <Screen emoji="🗂️" titulo="Flashcards" descricao="Repetição espaçada em caixas: acertou, o cartão volta em 1 → 3 → 7 → 15 → 30 dias; errou, volta amanhã.">
      {voltar}
      <Card className="mb-4">
        <Label className="mb-1">Baralho</Label>
        <Row className="flex-wrap">
          <Chip texto="Todos" ativo={filtro === 'todas'} onPress={() => setFiltro('todas')} />
          {bancos
            .filter((b) => b.flashcards.length)
            .map((b) => (
              <Chip key={b.disciplinaId} texto={`${getDisciplina(b.disciplinaId)?.nome ?? b.disciplinaId} (${b.flashcards.length})`} ativo={filtro === b.disciplinaId} onPress={() => setFiltro(b.disciplinaId)} />
            ))}
        </Row>
        <Row className="mt-3 flex-wrap gap-3">
          <Card className="min-w-[120px] flex-1">
            <Muted>Para revisar hoje</Muted>
            <Txt className="text-[24px] font-semibold">{fila.vencidos}</Txt>
          </Card>
          <Card className="min-w-[120px] flex-1">
            <Muted>Novos de hoje</Muted>
            <Txt className="text-[24px] font-semibold">{fila.novos}</Txt>
          </Card>
        </Row>
        <Label className="mb-1 mt-3">Cartões novos por dia</Label>
        <Segmented<string> valor={String(novosPorDia)} opcoes={['10', '20', '30', '50'].map((n) => ({ valor: n, rotulo: n }))} onChange={(v) => setPrefs({ novosPorDia: Number(v) })} />
        <Button variante="primario" className="mt-4 self-start" titulo={fila.fila.length ? `Começar (${fila.fila.length} cartões)` : 'Nada para hoje 🎉'} disabled={!fila.fila.length} onPress={iniciar} />
      </Card>
    </Screen>
  );
}
