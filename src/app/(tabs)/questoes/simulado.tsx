import { useRouter } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { Voltar } from '@/components/biblioteca/comum';
import { useTodosBancos } from '@/components/conteudo/useBanco';
import { STATUS_MINIMO } from '@/components/edital/status';
import { QuestaoCard } from '@/components/questoes/QuestaoCard';
import { Button, Callout, Card, EmptyState, Label, Muted, ProgressBar, Row, Screen, Section, Segmented, Seletor, Sheet, Tag, Toggle, Txt, useToast } from '@/components/ui';
import { EDITAIS_MODELO, getEditalModelo } from '@/data/editais';
import { getTema } from '@/data/eixos';
import type { BancoConteudo, QuestaoTreino, TextoBase } from '@/data/types';
import type { EditalAlvo } from '@/shared/edital';
import { enviarErrosAoCaderno, registrarResultadoTreino } from '@/store/acoes';
import { useDesempenhoPorDisciplina, useHoje } from '@/store/selectors';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useTreinoStore, type SimuladoAtivo } from '@/store/useTreinoStore';
import { useCores } from '@/theme/cores';
import { acertoDoItem, editalDoModelo } from '@/utils/edital';
import { gerarId } from '@/utils/id';
import { alvoDoItem, corrigirSimulado, idsDoSimulado, montarSimulado, type PlanoSimulado, type TamanhoSimulado } from '@/utils/simulado';
import { estaCerta, type RespostaTreino } from '@/utils/treino';

/**
 * Simulado no formato do edital: questões sorteadas por item, cronômetro proporcional ao da prova,
 * Certo/Errado com penalidade e itens em branco, resultado por prova com os mínimos do edital.
 * O simulado em andamento fica salvo (dá para recarregar a página e continuar).
 */

type Mapa = ReadonlyMap<string, QuestaoTreino>;
type Textos = ReadonlyMap<string, TextoBase>;

interface Encerrado {
  nome: string;
  plano: PlanoSimulado;
  respostas: Record<string, RespostaTreino>;
  usadoMs: number;
  porTempo: boolean;
}

const fmt = (n: number, casas = 0) => n.toLocaleString('pt-BR', { maximumFractionDigits: casas });

function relogio(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = String(s % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${String(m).padStart(2, '0')}:${ss}`;
}

function duracaoTexto(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h} h${m ? ` ${m} min` : ''}` : `${m} min`;
}

export default function Simulado() {
  const ativo = useTreinoStore((s) => s.simuladoAtivo);
  const [encerrado, setEncerrado] = useState<Encerrado | null>(null);
  const { bancos, carregando, erro } = useTodosBancos();
  const mapa = useMemo<Mapa>(() => new Map(bancos.flatMap((b) => b.questoes.map((q) => [q.id, q] as const))), [bancos]);
  const textos = useMemo<Textos>(() => new Map(bancos.flatMap((b) => b.textos.map((t) => [t.id, t] as const))), [bancos]);
  const cores = useCores();

  if (carregando) {
    return (
      <Screen emoji="🧪" titulo="Simulado">
        <ActivityIndicator color={cores.accent} />
      </Screen>
    );
  }
  if (erro) {
    return (
      <Screen emoji="🧪" titulo="Simulado">
        <Voltar rotulo="Questões" destino="/questoes" />
        <Callout emoji="⚠️" tom="vermelho">
          {erro}
        </Callout>
      </Screen>
    );
  }
  if (encerrado) return <Resultado encerrado={encerrado} mapa={mapa} textos={textos} onNovo={() => setEncerrado(null)} />;
  if (ativo) return <Prova ativo={ativo} mapa={mapa} textos={textos} onEncerrar={setEncerrado} />;
  return <Configuracao bancos={bancos} />;
}

/* ------------------------------------------------------------------ */
/* Configuração                                                        */
/* ------------------------------------------------------------------ */

function Configuracao({ bancos }: { bancos: BancoConteudo[] }) {
  const router = useRouter();
  const editalAlvo = useSettingsStore((s) => s.editalAlvo);
  const historico = useTreinoStore((s) => s.questoes);
  const iniciar = useTreinoStore((s) => s.iniciarSimulado);
  const desempenho = useDesempenhoPorDisciplina();
  const [fonte, setFonte] = useState<string>(editalAlvo ? 'meu' : (EDITAIS_MODELO[0]?.id ?? ''));
  const [tamanho, setTamanho] = useState<TamanhoSimulado>('completo');
  const [sorteio, setSorteio] = useState(0);

  const edital = useMemo<EditalAlvo | null>(() => {
    if (fonte === 'meu') return editalAlvo;
    const m = getEditalModelo(fonte);
    return m ? editalDoModelo(m) : null;
  }, [fonte, editalAlvo]);
  const questoes = useMemo(() => bancos.flatMap((b) => b.questoes), [bancos]);
  // `sorteio` força um novo sorteio sem mudar as outras escolhas.
  const plano = useMemo(
    () => (edital && sorteio >= 0 ? montarSimulado(edital, questoes, historico, { tamanho }) : null),
    [edital, questoes, historico, tamanho, sorteio],
  );
  const total = plano ? idsDoSimulado(plano).length : 0;
  const temCE = !!edital?.provas.some((p) => p.formato === 'certo-errado' && (p.penalidadeErro ?? 0) > 0);

  const opcoes = [
    ...(editalAlvo ? [{ valor: 'meu', rotulo: `Meu edital — ${editalAlvo.nome}`, grupo: 'Meu Edital' }] : []),
    ...EDITAIS_MODELO.map((m) => ({ valor: m.id, rotulo: m.nome, grupo: 'Editais de referência' })),
  ];

  const comecar = () => {
    if (!edital || !plano || !total) return;
    iniciar({ id: gerarId('sim'), nome: edital.nome, banca: edital.banca, inicioMs: Date.now(), duracaoMin: plano.duracaoMin, plano, respostas: {}, indice: 0 });
  };

  if (!questoes.length) {
    return (
      <Screen emoji="🧪" titulo="Simulado">
        <Voltar rotulo="Questões" destino="/questoes" />
        <EmptyState emoji="🛠️" titulo="Bancos de questões em produção" texto="O simulado usa as questões comentadas do app, que chegam nas próximas atualizações." />
      </Screen>
    );
  }

  return (
    <Screen emoji="🧪" titulo="Simulado" descricao="Prova no formato do edital: mesmas disciplinas e pesos, tempo proporcional, penalidade do Certo/Errado e mínimos para não ser eliminado.">
      <Voltar rotulo="Questões" destino="/questoes" />
      <Card className="mb-4">
        <Seletor rotulo="Edital do simulado" valor={fonte} opcoes={opcoes} onChange={setFonte} />
        {!editalAlvo ? (
          <Pressable onPress={() => router.push('/edital')} className="mb-3 self-start" accessibilityRole="link">
            <Text className="text-[13px] text-accent">📋 Montar o meu edital (prova-alvo) →</Text>
          </Pressable>
        ) : null}
        <Label className="mb-1">Tamanho</Label>
        <Segmented<TamanhoSimulado>
          valor={tamanho}
          opcoes={[
            { valor: 'completo', rotulo: 'Prova completa' },
            { valor: 'metade', rotulo: 'Meia prova' },
          ]}
          onChange={setTamanho}
        />
      </Card>

      {edital && plano ? (
        <>
          <Section titulo="Como fica a prova">
            {plano.provas.map((p) => (
              <Card key={p.id} className="mb-2">
                <Row className="flex-wrap items-center justify-between gap-2">
                  <Txt className="font-semibold">{p.nome}</Txt>
                  <Tag texto={p.formato === 'certo-errado' ? `Certo/Errado${p.penalidade ? ` · erro −${fmt(p.penalidade, 2)}` : ''}` : 'Múltipla escolha'} cor={p.formato === 'certo-errado' ? 'purple' : 'blue'} />
                </Row>
                {p.minimo !== null ? <Muted>Mínimo da prova: {fmt(p.minimo, 2)} pontos</Muted> : null}
                {p.itens.map((it) => {
                  const alvo = alvoDoItem({ questoes: it.questoesEdital }, tamanho);
                  const n = it.questaoIds.length;
                  const pctHist = n ? null : acertoDoItem({ rotulo: it.rotulo, disciplinaIds: it.disciplinaIds, questoes: it.questoesEdital, peso: it.peso }, desempenho);
                  return (
                    <View key={it.rotulo} className="mt-2 border-t border-line pt-2 dark:border-line-dark">
                      <Row className="items-start justify-between gap-2">
                        <Txt className="flex-1 text-[14px]">{it.rotulo}</Txt>
                        <Muted>
                          {n}/{alvo} q.
                        </Muted>
                      </Row>
                      {n === 0 ? (
                        <Muted className="text-[12px]">
                          {pctHist !== null
                            ? `Sem questões no app ainda: entra na nota pelo seu histórico (${Math.round(pctHist * 100)}% de acerto).`
                            : 'Sem questões no app e sem histórico: fica fora da nota (prova parcial).'}
                        </Muted>
                      ) : n < alvo ? (
                        <Muted className="text-[12px]">Banco ainda menor que o edital: a nota do item é projetada para {it.questoesEdital} questões.</Muted>
                      ) : null}
                    </View>
                  );
                })}
              </Card>
            ))}
          </Section>

          <Row className="mb-4 flex-wrap gap-3">
            <Card className="min-w-[140px] flex-1">
              <Muted>Questões</Muted>
              <Txt className="text-[22px] font-semibold">{total}</Txt>
            </Card>
            <Card className="min-w-[140px] flex-1">
              <Muted>Tempo</Muted>
              <Txt className="text-[22px] font-semibold">{total ? duracaoTexto(plano.duracaoMin) : '—'}</Txt>
              <Muted>proporcional ao da prova real</Muted>
            </Card>
          </Row>

          {plano.cobertura < 1 ? (
            <Callout emoji="🧩" tom="amarelo">
              O app ainda não tem questões de todas as disciplinas deste edital: as médicas chegam numa próxima atualização. Esses itens entram na nota pelo seu desempenho registrado na Central de
              Questões, se houver.
            </Callout>
          ) : null}
          {temCE ? (
            <Callout emoji="🎲" tom="azul">
              Certo/Errado com penalidade: deixar em branco não desconta. Chute só quando a chance de acertar passar de 1/3. Com erro valendo −0,5, abaixo disso o chute tira mais do que dá.
            </Callout>
          ) : null}

          <Row className="flex-wrap gap-2">
            <Button variante="primario" titulo={`Começar simulado (${total} questões)`} disabled={!total} onPress={comecar} />
            <Button titulo="Sortear outras questões" disabled={!total} onPress={() => setSorteio((s) => s + 1)} />
          </Row>
        </>
      ) : (
        <EmptyState emoji="📋" titulo="Escolha um edital" texto="Monte o seu edital ou escolha um edital de referência para montar o simulado." />
      )}
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* Prova                                                               */
/* ------------------------------------------------------------------ */

function Prova({ ativo, mapa, textos, onEncerrar }: { ativo: SimuladoAtivo; mapa: Mapa; textos: Textos; onEncerrar: (e: Encerrado) => void }) {
  const toast = useToast();
  const hoje = useHoje();
  const responder = useTreinoStore((s) => s.responderSimulado);
  const irPara = useTreinoStore((s) => s.irParaQuestao);
  const encerrar = useTreinoStore((s) => s.encerrarSimulado);
  const [agora, setAgora] = useState(Date.now());
  const [confirmar, setConfirmar] = useState(false);
  const entregue = useRef(false);

  // Questões que sumiram do banco (atualização do app) são ignoradas.
  const ids = useMemo(() => idsDoSimulado(ativo.plano).filter((id) => mapa.has(id)), [ativo.plano, mapa]);
  const duracaoMs = ativo.duracaoMin * 60_000;
  const fimMs = ativo.inicioMs + duracaoMs;
  const restante = fimMs - agora;
  const esgotado = restante <= 0;

  useEffect(() => {
    const t = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const entregar = (porTempo: boolean) => {
    if (entregue.current) return;
    entregue.current = true;
    const fim = Math.min(Date.now(), fimMs);
    const qs = ids.map((id) => mapa.get(id)).filter((q): q is QuestaoTreino => !!q);
    if (qs.length) {
      registrarResultadoTreino(
        qs.map((q) => ({ questao: q, certa: estaCerta(q, ativo.respostas[q.id] ?? null) })),
        { data: hoje, tipo: 'simulado', origem: 'simulado', duracaoMin: Math.max(1, Math.round((fim - ativo.inicioMs) / 60_000)), banca: ativo.banca || null },
      );
    }
    const snapshot: Encerrado = { nome: ativo.nome, plano: ativo.plano, respostas: ativo.respostas, usadoMs: fim - ativo.inicioMs, porTempo };
    encerrar();
    onEncerrar(snapshot);
  };

  // Tempo esgotado (inclusive ao voltar para um simulado esquecido): entrega com o que foi marcado.
  useEffect(() => {
    if (esgotado) entregar(true);
  }, [esgotado]);

  if (!ids.length) {
    return (
      <Screen emoji="🧪" titulo={ativo.nome}>
        <Callout emoji="⚠️" tom="amarelo">
          As questões deste simulado não estão mais disponíveis (o conteúdo do app foi atualizado).
        </Callout>
        <Button variante="primario" titulo="Descartar e montar outro" onPress={encerrar} />
      </Screen>
    );
  }

  const indice = Math.min(Math.max(0, ativo.indice), ids.length - 1);
  const q = mapa.get(ids[indice]!)!;
  const resposta = ativo.respostas[q.id];
  const respondida = (id: string) => ativo.respostas[id] !== undefined && ativo.respostas[id] !== null;
  const respondidas = ids.filter(respondida).length;
  const prova = ativo.plano.provas.find((p) => p.itens.some((it) => it.questaoIds.includes(q.id)));
  const pouco = restante < 5 * 60_000;

  return (
    <Screen emoji="🧪" titulo={ativo.nome} descricao={`Questão ${indice + 1} de ${ids.length} · ${respondidas} respondidas`}>
      <Card className="mb-3">
        <Row className="items-center justify-between gap-2">
          <Text className={`text-[22px] font-semibold ${pouco ? 'text-red-600 dark:text-red-400' : 'text-ink dark:text-ink-dark'}`} accessibilityLabel={`Tempo restante ${relogio(restante)}`}>
            ⏱ {relogio(restante)}
          </Text>
          <Button variante="primario" titulo="Entregar" onPress={() => setConfirmar(true)} />
        </Row>
        <ProgressBar valor={1 - restante / duracaoMs} cor={pouco ? 'bg-red-500' : 'bg-accent'} className="mt-2" />
      </Card>

      {prova ? (
        <Row className="mb-2 flex-wrap gap-1.5">
          <Tag texto={prova.nome} />
          {prova.penalidade && q.formato === 'certo-errado' ? <Tag texto={`erro desconta ${fmt(prova.penalidade, 2)}`} cor="red" /> : null}
        </Row>
      ) : null}

      <QuestaoCard
        questao={q}
        texto={q.textoBaseId ? textos.get(q.textoBaseId) : undefined}
        resposta={resposta}
        revelar={false}
        permitirBranco
        onResponder={(r) => responder(q.id, r)}
      />
      {q.formato === 'multipla' && typeof resposta === 'number' ? (
        <Pressable onPress={() => responder(q.id, null)} className="mt-2 self-start" accessibilityRole="button">
          <Muted>Limpar resposta</Muted>
        </Pressable>
      ) : null}

      <Row className="mt-3 flex-wrap justify-between gap-2">
        <Button titulo="← Anterior" disabled={indice === 0} onPress={() => irPara(indice - 1)} />
        {indice < ids.length - 1 ? <Button variante="primario" titulo="Próxima →" onPress={() => irPara(indice + 1)} /> : <Button variante="primario" titulo="Entregar" onPress={() => setConfirmar(true)} />}
      </Row>

      <Section titulo="Mapa da prova">
        <Row className="flex-wrap gap-1.5">
          {ids.map((id, k) => (
            <Pressable
              key={id}
              onPress={() => irPara(k)}
              accessibilityRole="button"
              accessibilityLabel={`Questão ${k + 1}${respondida(id) ? ', respondida' : ''}`}
              className={`h-9 w-9 items-center justify-center rounded-md border ${k === indice ? 'border-2 border-accent' : 'border-line dark:border-line-dark'} ${
                respondida(id) ? 'bg-accent-soft dark:bg-accent-dark-soft' : 'bg-page dark:bg-page-dark'
              }`}
            >
              <Text className="text-[12px] text-ink dark:text-ink-dark">{k + 1}</Text>
            </Pressable>
          ))}
        </Row>
      </Section>

      <Sheet visivel={confirmar} onFechar={() => setConfirmar(false)} titulo="Entregar o simulado?">
        <Muted className="mb-3">
          {respondidas} de {ids.length} respondidas
          {ids.length - respondidas ? ` · ${ids.length - respondidas} em branco` : ''} · faltam {relogio(restante)}.
        </Muted>
        <View className="gap-2">
          <Button
            variante="primario"
            titulo="Entregar e ver o resultado"
            onPress={() => {
              setConfirmar(false);
              entregar(false);
            }}
          />
          <Button titulo="Continuar a prova" onPress={() => setConfirmar(false)} />
          <Button
            variante="perigo"
            titulo="Abandonar sem registrar"
            onPress={() => {
              setConfirmar(false);
              entregue.current = true;
              encerrar();
              toast('Simulado descartado — nada foi registrado.');
            }}
          />
        </View>
      </Sheet>
    </Screen>
  );
}

/* ------------------------------------------------------------------ */
/* Resultado                                                           */
/* ------------------------------------------------------------------ */

function Resultado({ encerrado, mapa, textos, onNovo }: { encerrado: Encerrado; mapa: Mapa; textos: Textos; onNovo: () => void }) {
  const router = useRouter();
  const toast = useToast();
  const hoje = useHoje();
  const desempenho = useDesempenhoPorDisciplina();
  // O desempenho entra só nos itens sem questões; fixado na entrega para a nota não "mexer" depois.
  const [desempenhoNaEntrega] = useState(desempenho);
  const r = useMemo(() => corrigirSimulado(encerrado.plano, mapa, encerrado.respostas, desempenhoNaEntrega), [encerrado, mapa, desempenhoNaEntrega]);
  const questoes = useMemo(() => idsDoSimulado(encerrado.plano).map((id) => mapa.get(id)).filter((q): q is QuestaoTreino => !!q), [encerrado.plano, mapa]);
  const erradas = questoes.filter((q) => estaCerta(q, encerrado.respostas[q.id] ?? null) === false);
  const abaixo = r.provas.flatMap((p) => [...(p.status === 'abaixo' ? [p.nome] : []), ...p.itens.filter((i) => i.status === 'abaixo').map((i) => i.rotulo)]);
  const pctAcerto = r.feitas ? r.acertos / r.feitas : 0;

  return (
    <Screen
      emoji={r.riscoEliminacao ? '🚨' : pctAcerto >= 0.7 ? '🏆' : '📈'}
      titulo="Resultado do simulado"
      descricao={`${encerrado.nome} · ${relogio(encerrado.usadoMs)}${encerrado.porTempo ? ' · tempo esgotado' : ''}`}
    >
      <Row className="mb-4 flex-wrap gap-3">
        <Card className="min-w-[150px] flex-1">
          <Muted>Nota (escala do edital)</Muted>
          <Txt className="text-[26px] font-semibold">
            {fmt(r.pontos, 2)}
            <Muted> / {fmt(r.maximo, 2)}</Muted>
          </Txt>
          {!r.completa ? <Muted>parcial: há itens sem dados</Muted> : r.minimoTotal !== null ? <Muted>mínimo {fmt(r.minimoTotal, 2)}</Muted> : null}
        </Card>
        <Card className="min-w-[150px] flex-1">
          <Muted>Acertos</Muted>
          <Txt className="text-[26px] font-semibold">
            {r.acertos}/{r.feitas}
          </Txt>
          <Muted>{Math.round(pctAcerto * 100)}%</Muted>
        </Card>
        <Card className="min-w-[150px] flex-1">
          <Muted>Erros · em branco</Muted>
          <Txt className="text-[26px] font-semibold">
            {r.erros} · {r.brancos}
          </Txt>
        </Card>
      </Row>

      {r.riscoEliminacao ? (
        <Callout emoji="🚨" tom="vermelho">
          <Txt className="font-semibold">Pelas regras do edital, este resultado eliminaria você.</Txt>
          <Muted>Abaixo do mínimo: {abaixo.join(' · ')}</Muted>
        </Callout>
      ) : r.completa && r.provas.every((p) => p.status !== 'atencao') ? (
        <Callout emoji="✅" tom="verde">
          Passaria em todos os mínimos do edital. Para virar aprovação, a nota precisa ficar acima da nota de corte, então siga subindo.
        </Callout>
      ) : !r.completa ? (
        <Callout emoji="🧩" tom="amarelo">
          Nota parcial: algumas disciplinas não têm questões no app nem histórico registrado. Registre baterias dessas disciplinas na Central de Questões para completar a projeção.
        </Callout>
      ) : null}

      <Section titulo="Por prova">
        {r.provas.map((p) => (
          <Card key={p.id} className="mb-2">
            <Row className="flex-wrap items-center justify-between gap-2">
              <Txt className="font-semibold">{p.nome}</Txt>
              {p.minimo !== null ? <Tag texto={STATUS_MINIMO[p.status].texto} cor={STATUS_MINIMO[p.status].cor} /> : null}
            </Row>
            <Muted>
              {fmt(p.pontos, 2)} de {fmt(p.maximo, 2)} pontos{p.minimo !== null ? ` · mínimo ${fmt(p.minimo, 2)}` : ''}
              {!p.completa ? ' · parcial' : ''}
            </Muted>
            <ProgressBar valor={p.maximo ? Math.max(0, p.pontos) / p.maximo : 0} className="mt-2" cor={p.status === 'abaixo' ? 'bg-red-500' : 'bg-accent'} />
            {p.itens.map((i) => (
              <View key={i.rotulo} className="mt-2 border-t border-line pt-2 dark:border-line-dark">
                <Row className="items-start justify-between gap-2">
                  <Txt className="flex-1 text-[14px]">{i.rotulo}</Txt>
                  {i.minimo !== null ? <Tag texto={STATUS_MINIMO[i.status].texto} cor={STATUS_MINIMO[i.status].cor} /> : null}
                </Row>
                <Muted className="text-[12px]">
                  {i.fonte === 'simulado'
                    ? `${i.acertos} certas · ${i.erros} erradas · ${i.brancos} em branco → ${fmt(i.pontos ?? 0, 2)} de ${fmt(i.maximo, 2)}`
                    : i.fonte === 'historico'
                      ? `Estimado pelo seu histórico: ${fmt(i.pontos ?? 0, 2)} de ${fmt(i.maximo, 2)}`
                      : 'Sem questões no app e sem histórico'}
                  {i.minimo !== null ? ` · mínimo ${fmt(i.minimo, 2)}` : ''}
                </Muted>
              </View>
            ))}
          </Card>
        ))}
      </Section>

      <Callout emoji="📊" tom="azul">
        O simulado foi registrado na Central de Questões. Ele aparece na evolução dos simulados e alimenta o desempenho por disciplina e a nota projetada do Meu Edital.
      </Callout>

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
        <Button titulo="Novo simulado" onPress={onNovo} />
        <Button titulo="📋 Meu Edital" onPress={() => router.push('/edital')} />
      </Row>

      <Section titulo="Correção">
        {questoes.map((q, k) => {
          const c = estaCerta(q, encerrado.respostas[q.id] ?? null);
          return (
            <Toggle key={q.id} titulo={`${c === true ? '✅' : c === false ? '❌' : '⏭️'} Questão ${k + 1}`} subtitulo={getTema(q.temaId)?.tema.nome}>
              <QuestaoCard questao={q} texto={q.textoBaseId ? textos.get(q.textoBaseId) : undefined} resposta={encerrado.respostas[q.id] ?? null} revelar onResponder={() => {}} />
            </Toggle>
          );
        })}
      </Section>
    </Screen>
  );
}
