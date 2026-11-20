import { useRouter } from 'expo-router';
import { BookX, Layers, RotateCcw, Target, Trash2 } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { selecaoInicial, TemaPicker, type SelecaoTema } from '@/components/questoes/TemaPicker';
import { Button, Callout, Campo, Card, EmptyState, IconButton, Muted, ProgressBar, Row, Screen, Section, Segmented, Seletor, StatTile, Tag, Txt, useToast } from '@/components/ui';
import { getDisciplina, getTema } from '@/data/eixos';
import { NOMES_BANCAS } from '@/data/bancas';
import { EIXO_LABEL, EIXOS } from '@/data/types';
import { registrarSessao } from '@/store/acoes';
import { useHoje, useMetricas, usePontosFracos } from '@/store/selectors';
import { useQuestoesStore } from '@/store/useQuestoesStore';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useTreinoStore } from '@/store/useTreinoStore';
import { contarVencidos } from '@/utils/flashcards';
import { COR_EIXO } from '@/theme/cores';
import { formatBR, parseBR } from '@/utils/dates';
import { evolucaoSimulados, formatPct, porBanca, porDisciplina } from '@/utils/metrics';

export default function CentralQuestoes() {
  const router = useRouter();
  const toast = useToast();
  const hoje = useHoje();
  const m = useMetricas(hoje);
  const fracos = usePontosFracos();
  const sessoes = useQuestoesStore((s) => s.sessoes);
  const removeSessao = useQuestoesStore((s) => s.removeSessao);
  const bancaAlvo = useSettingsStore((s) => s.bancaAlvo);
  const estadosCartoes = useTreinoStore((s) => s.cartoes);
  const cartoesHoje = useMemo(() => contarVencidos(estadosCartoes, hoje), [estadosCartoes, hoje]);

  const [tipo, setTipo] = useState<'bateria' | 'simulado'>('bateria');
  const [sel, setSel] = useState<SelecaoTema>(selecaoInicial());
  const [banca, setBanca] = useState<string>(bancaAlvo);
  const [total, setTotal] = useState('');
  const [acertos, setAcertos] = useState('');
  const [dataTexto, setDataTexto] = useState('');
  const [duracao, setDuracao] = useState('');
  const [erro, setErro] = useState<string | null>(null);

  const disciplinas = useMemo(() => porDisciplina(sessoes), [sessoes]);
  const bancas = useMemo(() => porBanca(sessoes), [sessoes]);
  const simulados = useMemo(() => evolucaoSimulados(sessoes), [sessoes]);

  const registrar = () => {
    const t = Number(total);
    const a = Number(acertos);
    const data = dataTexto.trim() ? parseBR(dataTexto) : hoje;
    if (!Number.isInteger(t) || t <= 0) return setErro('Total de questões deve ser um número inteiro maior que zero.');
    if (!Number.isInteger(a) || a < 0 || a > t) return setErro('Acertos deve estar entre 0 e o total.');
    if (!data) return setErro('Data inválida (use dd/mm/aaaa).');
    if (data > hoje) return setErro('A data não pode estar no futuro.');
    setErro(null);
    registrarSessao({
      data,
      tipo,
      eixo: sel.eixo,
      disciplinaId: sel.disciplinaId,
      temaId: sel.temaId,
      banca: banca || null,
      total: t,
      acertos: a,
      duracaoMin: duracao ? Number(duracao) || null : null,
      notas: '',
    });
    setTotal('');
    setAcertos('');
    setDuracao('');
    toast(
      `Registrado: ${a}/${t} (${Math.round((a / t) * 100)}%).${sel.temaId && tipo === 'bateria' ? ' Ciclo D1/D7/D15/D30 do tema ativado.' : ''}`,
    );
  };

  return (
    <Screen
      emoji="🎯"
      titulo="Central de Questões & Simulados"
      descricao="Treine com as questões comentadas do app, revise flashcards e registre baterias feitas em outros bancos; o app calcula seu desempenho e agenda as revisões."
      larga
      acoes={
        <>
          <Button variante="primario" icone={Target} titulo="Treinar no app" onPress={() => router.push('/questoes/treino')} />
          <Button icone={Layers} titulo={`Flashcards${cartoesHoje ? ` (${cartoesHoje} hoje)` : ''}`} onPress={() => router.push('/questoes/flashcards')} />
          <Button icone={RotateCcw} titulo={`Revisões (${m.revisoesHoje} hoje)`} onPress={() => router.push('/questoes/revisoes')} />
          <Button icone={BookX} titulo={`Caderno de Erros (${m.errosPendentes})`} onPress={() => router.push('/questoes/erros')} />
        </>
      }
    >
      <View className="gap-6 lg:flex-row">
        <View className="lg:w-[420px]">
          <Section titulo="Registro rápido">
            <Card>
              <View className="mb-3">
                <Segmented
                  valor={tipo}
                  onChange={setTipo}
                  opcoes={[
                    { valor: 'bateria', rotulo: 'Bateria de questões' },
                    { valor: 'simulado', rotulo: 'Simulado' },
                  ]}
                />
              </View>
              <TemaPicker valor={sel} onChange={setSel} />
              <Seletor rotulo="Banca" valor={banca || null} onChange={setBanca} opcoes={NOMES_BANCAS.map((b) => ({ valor: b, rotulo: b }))} placeholder="Banca (opcional)" />
              <Row className="gap-3">
                <Campo className="flex-1" rotulo="Total" value={total} onChangeText={setTotal} keyboardType="number-pad" placeholder="30" />
                <Campo className="flex-1" rotulo="Acertos" value={acertos} onChangeText={setAcertos} keyboardType="number-pad" placeholder="24" />
              </Row>
              <Row className="gap-3">
                <Campo className="flex-1" rotulo="Data" value={dataTexto} onChangeText={setDataTexto} placeholder={`hoje (${formatBR(hoje)})`} />
                <Campo className="flex-1" rotulo="Duração (min)" value={duracao} onChangeText={setDuracao} keyboardType="number-pad" placeholder="opcional" />
              </Row>
              {erro ? <Text className="mb-2 text-[13px] text-red-600 dark:text-red-400">{erro}</Text> : null}
              <Button variante="primario" titulo="Registrar" onPress={registrar} />
            </Card>
          </Section>
        </View>

        <View className="flex-1">
          <View className="mb-6 flex-row flex-wrap gap-3">
            <StatTile rotulo="Questões" valor={String(m.global.total)} />
            <StatTile rotulo="Acerto global" valor={formatPct(m.global.pct)} />
            {EIXOS.map((e) => (
              <StatTile key={e} rotulo={EIXO_LABEL[e]} valor={formatPct(m.eixos[e].pct)} detalhe={`${m.eixos[e].total} questões`} />
            ))}
          </View>

          {fracos.length ? (
            <Callout emoji="⚠️" tom="vermelho">
              <Txt className="font-semibold">Pontos fracos (&lt; 70%)</Txt>
              {fracos.map((p) => (
                <Muted key={p.temaId}>
                  • {p.nome}: {formatPct(p.placar.pct)} ({p.placar.acertos}/{p.placar.total})
                </Muted>
              ))}
            </Callout>
          ) : null}

          <Section titulo="Desempenho por disciplina">
            {disciplinas.length ? (
              <Card>
                {disciplinas.map((d) => (
                  <View key={d.disciplinaId} className="mb-3 last:mb-0">
                    <Row className="mb-1 justify-between">
                      <Row className="flex-1 gap-2">
                        <Tag texto={EIXO_LABEL[d.eixo]} cor={COR_EIXO[d.eixo]} />
                        <Txt numberOfLines={1} className="flex-1">
                          {d.nome}
                        </Txt>
                      </Row>
                      <Muted>
                        {formatPct(d.placar.pct)} · {d.placar.total}
                      </Muted>
                    </Row>
                    <ProgressBar valor={d.placar.pct ?? 0} cor={(d.placar.pct ?? 0) >= 0.7 ? 'bg-emerald-500' : 'bg-amber-500'} />
                  </View>
                ))}
              </Card>
            ) : (
              <EmptyState emoji="📊" titulo="Sem registros ainda" texto="Comece pelo diagnóstico da Semana 1: 40 questões mistas sem consulta." />
            )}
          </Section>

          {bancas.length ? (
            <Section titulo="Desempenho por banca">
              <Card>
                {bancas.map((b) => (
                  <Row key={b.banca} className="justify-between border-b border-line py-1.5 last:border-b-0 dark:border-line-dark">
                    <Txt>{b.banca}</Txt>
                    <Muted>
                      {formatPct(b.placar.pct)} · {b.placar.acertos}/{b.placar.total}
                    </Muted>
                  </Row>
                ))}
              </Card>
            </Section>
          ) : null}

          {simulados.length ? (
            <Section titulo="Evolução nos simulados">
              <Card>
                {simulados.map((s, i) => (
                  <Row key={`${s.data}-${i}`} className="mb-2 gap-3">
                    <Muted className="w-[90px]">{formatBR(s.data)}</Muted>
                    <View className="flex-1">
                      <ProgressBar valor={s.pct} cor={s.pct >= 0.8 ? 'bg-emerald-500' : s.pct >= 0.7 ? 'bg-accent' : 'bg-amber-500'} />
                    </View>
                    <Txt className="w-[90px] text-right">
                      {formatPct(s.pct)} ({s.total})
                    </Txt>
                  </Row>
                ))}
              </Card>
            </Section>
          ) : null}

          <Section titulo="Histórico recente">
            {sessoes.slice(0, 25).map((s) => (
              <Row key={s.id} className="border-b border-line py-2 dark:border-line-dark">
                <View className="flex-1">
                  <Txt numberOfLines={1}>
                    {s.tipo === 'simulado' ? '🧪 ' : ''}
                    {s.temaId ? getTema(s.temaId)?.tema.nome : (getDisciplina(s.disciplinaId)?.nome ?? s.disciplinaId)}
                  </Txt>
                  <Muted>
                    {formatBR(s.data)} · {s.banca ?? 'sem banca'} · {s.acertos}/{s.total} ({formatPct(s.acertos / s.total)})
                  </Muted>
                </View>
                <IconButton icone={Trash2} rotulo="Excluir registro" onPress={() => removeSessao(s.id)} />
              </Row>
            ))}
            {!sessoes.length ? <Muted>Nenhum registro.</Muted> : null}
          </Section>
        </View>
      </View>
    </Screen>
  );
}
