import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { useBanco } from '@/components/conteudo/useBanco';
import { QuestaoCard } from '@/components/questoes/QuestaoCard';
import { Button, Callout, Card, Chip, EmptyState, Label, Muted, ProgressBar, Row, Screen, Section, Segmented, Seletor, Toggle, Txt, useToast } from '@/components/ui';
import { rotaDisciplina } from '@/data/biblioteca';
import { disciplinasComBanco } from '@/data/conteudo/carregar';
import { getDisciplina, getTema } from '@/data/eixos';
import type { QuestaoTreino } from '@/data/types';
import { enviarErrosAoCaderno, registrarResultadoTreino } from '@/store/acoes';
import { useHoje } from '@/store/selectors';
import { useTreinoStore, type PrefsTreino } from '@/store/useTreinoStore';
import { useCores } from '@/theme/cores';
import { corrigirTreino, estaCerta, montarTreino, type RespostaTreino } from '@/utils/treino';

type Fase = 'config' | 'sessao' | 'resultado';

function mmss(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

export default function Treino() {
  const router = useRouter();
  const cores = useCores();
  const toast = useToast();
  const hoje = useHoje();
  const params = useLocalSearchParams<{ disciplina?: string; temas?: string }>();
  const disponiveis = useMemo(() => disciplinasComBanco(), []);
  const [disciplinaId, setDisciplinaId] = useState<string>(params.disciplina && disponiveis.includes(params.disciplina) ? params.disciplina : (disponiveis[0] ?? ''));
  const [temasSel, setTemasSel] = useState<string[]>(params.temas ? params.temas.split(',').filter(Boolean) : []);
  const { banco, carregando, erro } = useBanco(disciplinaId || null);
  const historico = useTreinoStore((s) => s.questoes);
  const prefs = useTreinoStore((s) => s.prefs);
  const setPrefs = useTreinoStore((s) => s.setPrefs);

  const [fase, setFase] = useState<Fase>('config');
  const [questoes, setQuestoes] = useState<QuestaoTreino[]>([]);
  const [respostas, setRespostas] = useState<Record<string, RespostaTreino>>({});
  const [indice, setIndice] = useState(0);
  const [inicio, setInicio] = useState(0);
  const [agora, setAgora] = useState(Date.now());
  const registrado = useRef(false);

  // Cronômetro (modo prova).
  useEffect(() => {
    if (fase !== 'sessao') return;
    const t = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(t);
  }, [fase]);

  // Reaplica os temas do link quando a disciplina muda pelo seletor.
  useEffect(() => {
    if (params.disciplina !== disciplinaId) setTemasSel([]);
  }, [disciplinaId, params.disciplina]);

  const temasComQuestoes = useMemo(() => {
    const disc = getDisciplina(disciplinaId);
    const contagem = new Map<string, number>();
    for (const q of banco?.questoes ?? []) contagem.set(q.temaId, (contagem.get(q.temaId) ?? 0) + 1);
    return (disc?.temas ?? []).filter((t) => contagem.has(t.id)).map((t) => ({ ...t, n: contagem.get(t.id) ?? 0 }));
  }, [banco, disciplinaId]);

  const textos = useMemo(() => new Map((banco?.textos ?? []).map((t) => [t.id, t])), [banco]);

  const comecar = (lista?: QuestaoTreino[]) => {
    if (!banco) return;
    const qs = lista ?? montarTreino(banco.questoes, historico, { temas: temasSel, quantidade: prefs.quantidade, filtro: prefs.filtro, formato: prefs.formato });
    if (!qs.length) {
      toast(prefs.filtro === 'erradas' ? 'Nenhuma questão errada nesses temas — ótimo sinal!' : 'Nenhuma questão com esses filtros.');
      return;
    }
    registrado.current = false;
    setQuestoes(qs);
    setRespostas({});
    setIndice(0);
    setInicio(Date.now());
    setAgora(Date.now());
    setFase('sessao');
  };

  const responder = (q: QuestaoTreino, r: RespostaTreino) => setRespostas((rs) => ({ ...rs, [q.id]: r }));

  const finalizar = () => {
    setFase('resultado');
    if (registrado.current) return;
    registrado.current = true;
    const respondidas = questoes.filter((q) => q.id in respostas);
    if (!respondidas.length) return;
    registrarResultadoTreino(
      respondidas.map((q) => ({ questao: q, certa: estaCerta(q, respostas[q.id] ?? null) })),
      { data: hoje, tipo: 'bateria', origem: 'treino', duracaoMin: Math.max(1, Math.round((Date.now() - inicio) / 60000)), banca: null },
    );
  };

  const disciplina = getDisciplina(disciplinaId);

  /* ------------------------------ Sem bancos ------------------------------ */
  if (!disponiveis.length) {
    return (
      <Screen emoji="🎯" titulo="Treino">
        <Voltar />
        <EmptyState emoji="🛠️" titulo="Bancos de questões em produção" texto="As questões comentadas das básicas chegam nas próximas atualizações. Enquanto isso, registre baterias na Central de Questões." />
      </Screen>
    );
  }

  /* ------------------------------ Sessão ------------------------------ */
  if (fase === 'sessao') {
    const q = questoes[indice];
    if (!q) return null;
    const revelar = prefs.modo === 'estudo' && q.id in respostas;
    const respondidas = Object.keys(respostas).length;
    return (
      <Screen emoji="🎯" titulo={`Treino — ${disciplina?.nome ?? ''}`} descricao={`Questão ${indice + 1} de ${questoes.length} · ${prefs.modo === 'prova' ? `modo prova · ${mmss(agora - inicio)}` : 'modo estudo'}`}>
        <ProgressBar valor={(indice + 1) / questoes.length} className="mb-3" />
        <QuestaoCard
          questao={q}
          texto={q.textoBaseId ? textos.get(q.textoBaseId) : undefined}
          resposta={respostas[q.id]}
          revelar={revelar}
          permitirBranco={prefs.modo === 'prova'}
          onResponder={(r) => responder(q, r)}
        />
        <Row className="mt-3 flex-wrap justify-between gap-2">
          <Button titulo="← Anterior" disabled={indice === 0} onPress={() => setIndice((i) => Math.max(0, i - 1))} />
          {indice < questoes.length - 1 ? (
            <Button variante="primario" titulo="Próxima →" onPress={() => setIndice((i) => i + 1)} />
          ) : (
            <Button variante="primario" titulo={`Finalizar (${respondidas}/${questoes.length})`} onPress={finalizar} />
          )}
        </Row>
        {indice < questoes.length - 1 ? (
          <Pressable onPress={finalizar} className="mt-4 self-center" accessibilityRole="button">
            <Muted>Encerrar agora e ver o resultado</Muted>
          </Pressable>
        ) : null}
      </Screen>
    );
  }

  /* ------------------------------ Resultado ------------------------------ */
  if (fase === 'resultado') {
    const r = corrigirTreino(questoes, respostas, 0.5);
    const erradas = questoes.filter((q) => estaCerta(q, respostas[q.id] ?? null) === false);
    const pct = r.total ? r.acertos / r.total : 0;
    return (
      <Screen emoji={pct >= 0.7 ? '🏆' : '📈'} titulo="Resultado do treino" descricao={`${disciplina?.nome ?? ''} · ${mmss(Date.now() - inicio)}`}>
        <Row className="mb-4 flex-wrap gap-3">
          <Card className="min-w-[140px] flex-1">
            <Muted>Acertos</Muted>
            <Txt className="text-[26px] font-semibold">
              {r.acertos}/{r.total}
            </Txt>
            <Muted>{Math.round(pct * 100)}%</Muted>
          </Card>
          <Card className="min-w-[140px] flex-1">
            <Muted>Erros · em branco</Muted>
            <Txt className="text-[26px] font-semibold">
              {r.erros} · {r.brancos}
            </Txt>
          </Card>
          {r.liquidaCE !== null ? (
            <Card className="min-w-[140px] flex-1">
              <Muted>Certo/Errado líquido (−0,5)</Muted>
              <Txt className="text-[26px] font-semibold">{r.liquidaCE.toLocaleString('pt-BR')}</Txt>
            </Card>
          ) : null}
        </Row>
        <Callout emoji="📊" tom="azul">
          Resultado registrado na Central de Questões (por tema): ele alimenta o desempenho por disciplina, os pontos fracos e a nota projetada do Meu Edital.
        </Callout>
        <Section titulo="Por tema">
          {r.porTema.map((t) => (
            <View key={t.temaId} className="mb-2">
              <Row className="justify-between">
                <Txt className="flex-1 pr-2 text-[14px]">{getTema(t.temaId)?.tema.nome ?? t.temaId}</Txt>
                <Muted>
                  {t.acertos}/{t.total}
                </Muted>
              </Row>
              <ProgressBar valor={t.total ? t.acertos / t.total : 0} cor={t.total && t.acertos / t.total >= 0.7 ? 'bg-emerald-500' : 'bg-amber-500'} />
            </View>
          ))}
        </Section>
        <Row className="mb-4 flex-wrap gap-2">
          {erradas.length ? (
            <Button
              variante="primario"
              titulo={`📕 Enviar ${erradas.length} erro(s) ao caderno`}
              onPress={() => {
                const n = enviarErrosAoCaderno(erradas, hoje);
                toast(n ? `${n} erro(s) no Caderno de Erros, com revisão D1 agendada.` : 'Esses erros já estavam no caderno.');
              }}
            />
          ) : null}
          {erradas.length ? <Button titulo="🔁 Refazer as erradas" onPress={() => comecar(erradas)} /> : null}
          <Button titulo="Novo treino" onPress={() => setFase('config')} />
        </Row>
        {questoes.length ? (
          <Section titulo="Correção">
            {questoes.map((q, i) => {
              const c = estaCerta(q, respostas[q.id] ?? null);
              return (
                <Toggle key={q.id} titulo={`${c === true ? '✅' : c === false ? '❌' : '⏭️'} Questão ${i + 1}`} subtitulo={getTema(q.temaId)?.tema.nome}>
                  <QuestaoCard questao={q} texto={q.textoBaseId ? textos.get(q.textoBaseId) : undefined} resposta={respostas[q.id] ?? null} revelar onResponder={() => {}} />
                </Toggle>
              );
            })}
          </Section>
        ) : null}
      </Screen>
    );
  }

  /* ------------------------------ Configuração ------------------------------ */
  const alternarTema = (id: string) => setTemasSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  return (
    <Screen emoji="🎯" titulo="Treino" descricao="Questões autorais comentadas, no estilo das bancas, com correção na hora (modo estudo) ou cronômetro (modo prova).">
      <Voltar />
      <Card className="mb-4">
        <Seletor
          rotulo="Disciplina"
          valor={disciplinaId}
          opcoes={disponiveis.map((id) => ({ valor: id, rotulo: getDisciplina(id)?.nome ?? id }))}
          onChange={setDisciplinaId}
        />
        {carregando ? <ActivityIndicator color={cores.accent} /> : null}
        {erro ? <Callout emoji="⚠️" tom="vermelho">{erro}</Callout> : null}
        {banco ? (
          <>
            <Label className="mb-1">Temas ({temasSel.length ? `${temasSel.length} escolhidos` : 'todos'})</Label>
            <Row className="flex-wrap">
              <Chip texto="Todos" ativo={!temasSel.length} onPress={() => setTemasSel([])} />
              {temasComQuestoes.map((t) => (
                <Chip key={t.id} texto={`${t.nome} (${t.n})`} ativo={temasSel.includes(t.id)} onPress={() => alternarTema(t.id)} />
              ))}
            </Row>
            <Label className="mb-1 mt-2">Quantidade</Label>
            <Segmented<string> valor={String(prefs.quantidade)} opcoes={['5', '10', '20', '30'].map((n) => ({ valor: n, rotulo: n }))} onChange={(v) => setPrefs({ quantidade: Number(v) })} />
            <Label className="mb-1 mt-3">Quais questões</Label>
            <Segmented<PrefsTreino['filtro']>
              valor={prefs.filtro}
              opcoes={[
                { valor: 'todas', rotulo: 'Todas' },
                { valor: 'ineditas', rotulo: 'Inéditas' },
                { valor: 'erradas', rotulo: 'Que errei' },
              ]}
              onChange={(filtro) => setPrefs({ filtro })}
            />
            <Label className="mb-1 mt-3">Formato</Label>
            <Segmented<PrefsTreino['formato']>
              valor={prefs.formato}
              opcoes={[
                { valor: 'todos', rotulo: 'Todos' },
                { valor: 'multipla', rotulo: 'Múltipla escolha' },
                { valor: 'certo-errado', rotulo: 'Certo/Errado' },
              ]}
              onChange={(formato) => setPrefs({ formato })}
            />
            <Label className="mb-1 mt-3">Modo</Label>
            <Segmented<PrefsTreino['modo']>
              valor={prefs.modo}
              opcoes={[
                { valor: 'estudo', rotulo: 'Estudo (corrige na hora)' },
                { valor: 'prova', rotulo: 'Prova (cronômetro)' },
              ]}
              onChange={(modo) => setPrefs({ modo })}
            />
            <Button variante="primario" className="mt-4 self-start" titulo="Começar treino" onPress={() => comecar()} />
          </>
        ) : null}
      </Card>
      {disciplina ? (
        <Pressable onPress={() => router.push(rotaDisciplina(disciplina.id))} accessibilityRole="link">
          <Muted>📚 Ver resumos e temas de {disciplina.nome} na Biblioteca →</Muted>
        </Pressable>
      ) : null}
    </Screen>
  );
}

function Voltar() {
  const router = useRouter();
  const cores = useCores();
  return (
    <Pressable
      onPress={() => (router.canGoBack() ? router.back() : router.replace('/questoes'))}
      className="mb-3 flex-row items-center self-start rounded px-1 py-1 hover:bg-hover dark:hover:bg-hover-dark"
      accessibilityRole="link"
    >
      <ArrowLeft size={16} color={cores.suave} />
      <Muted className="ml-1">Questões</Muted>
    </Pressable>
  );
}
