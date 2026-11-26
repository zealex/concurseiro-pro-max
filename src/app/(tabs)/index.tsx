import { useRouter } from 'expo-router';
import { ArrowRight, CalendarCheck, Radar as RadarIcon, Zap } from 'lucide-react-native';
import { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { TarefaItem } from '@/components/agenda/TarefaItem';
import { Button, Callout, Card, H2, Label, Muted, ProgressBar, Row, Screen, SeloNovo, Section, StatTile, Tag, Txt } from '@/components/ui';
import { rotaTreino } from '@/components/biblioteca/comum';
import { resolverRef } from '@/data/biblioteca';
import { temBanco } from '@/data/conteudo/carregar';
import { getTema } from '@/data/eixos';
import { EIXO_LABEL, EIXOS, TRILHA_LABEL } from '@/data/types';
import { CATEGORIA_CURTA } from '@/shared/concursos/schema';
import { useAgenda, useConcursos, useContagem, useHoje, useMetricas, usePontosFracos, useProjecaoEdital } from '@/store/selectors';
import { fatiaBasicas } from '@/utils/edital';
import { useSettingsStore } from '@/store/useSettingsStore';
import { COR_CATEGORIA, COR_EIXO, COR_UF, useCores } from '@/theme/cores';
import { formatBR, formatLongo } from '@/utils/dates';
import { horasMinutos } from '@/utils/format';
import { formatPct } from '@/utils/metrics';


export default function Dashboard() {
  const router = useRouter();
  const cores = useCores();
  const hoje = useHoje();
  const contagem = useContagem(hoje);
  const m = useMetricas(hoje);
  const fracos = usePontosFracos();
  const agenda = useAgenda(hoje);
  const trilha = useSettingsStore((s) => s.trilha);
  const togglePlantao = useSettingsStore((s) => s.togglePlantao);
  const edital = useSettingsStore((s) => s.editalAlvo);
  const projecao = useProjecaoEdital();
  const concursos = useConcursos();
  const meusEstados = useSettingsStore((s) => s.ufsRadar);
  const ultimos = useMemo(
    () =>
      [...concursos]
        .filter((c) => !c.manual && !c.arquivado && c.acesso === 'generalista' && (!meusEstados.length || meusEstados.includes(c.uf)))
        .sort((a, b) => b.firstSeenAt.localeCompare(a.firstSeenAt))
        .slice(0, 5),
    [concursos, meusEstados],
  );
  const progressoDia = agenda.minutosPlanejados ? agenda.minutosConcluidos / agenda.minutosPlanejados : 0;
  const pendentesHoje = agenda.tarefas.filter((t) => !t.concluida);

  return (
    <Screen emoji="🩺" titulo="Dashboard de Prontidão" descricao={`${formatLongo(hoje)} · ${TRILHA_LABEL[trilha]}`} larga>
      <View className="gap-6 lg:flex-row">
        {/* Coluna principal */}
        <View className="flex-1">
          {/* Contagem regressiva */}
          <Pressable onPress={() => router.push(contagem.vinculadoAConcurso ? '/radar' : '/configuracoes')} accessibilityRole="button">
            <View className="mb-4 rounded-xl bg-[#191919] p-5 dark:bg-[#252525]">
              <Text className="text-[12px] font-medium uppercase tracking-widest text-[#9B9A97]">
                {contagem.vinculadoAConcurso ? 'Contagem para a prova-alvo' : 'Contagem do plano de 90 dias'}
              </Text>
              <View className="mt-1 flex-row items-end">
                <Text className="text-[56px] font-bold leading-[60px] text-white">{Math.max(0, contagem.dias)}</Text>
                <Text className="mb-2 ml-2 text-[18px] text-[#C7C7C5]">{Math.abs(contagem.dias) === 1 ? 'dia' : 'dias'}</Text>
              </View>
              <Text className="text-[14px] text-[#E6E6E5]" numberOfLines={2}>
                {contagem.rotulo} · {formatBR(contagem.data)}
              </Text>
              {contagem.dias < 0 ? <Text className="mt-1 text-[13px] text-[#FFA344]">A data já passou — defina uma nova prova-alvo.</Text> : null}
              {!contagem.vinculadoAConcurso ? (
                <Text className="mt-2 text-[12px] text-[#9B9A97]">Toque para vincular uma prova do Radar ou ajustar a data.</Text>
              ) : null}
            </View>
          </Pressable>

          {/* KPIs */}
          <View className="mb-6 flex-row flex-wrap gap-3">
            <StatTile rotulo="Questões" valor={String(m.global.total)} detalhe={`${m.totalSessoes} registros`} />
            <StatTile rotulo="Acerto global" valor={formatPct(m.global.pct)} detalhe={m.global.total ? `${m.global.acertos} acertos` : 'registre baterias'} />
            <StatTile rotulo="Horas na semana" valor={horasMinutos(m.minutosSemana)} detalhe="Timer de foco" />
            <StatTile rotulo="Ofensiva" valor={`🔥 ${m.ofensiva}`} detalhe={m.ofensiva === 1 ? 'dia seguido' : 'dias seguidos'} />
          </View>

          <Section titulo="Acerto por eixo">
            <Card>
              {EIXOS.map((e) => {
                const p = m.eixos[e];
                return (
                  <View key={e} className="mb-3 last:mb-0">
                    <Row className="mb-1 justify-between">
                      <Row>
                        <Tag texto={EIXO_LABEL[e]} cor={COR_EIXO[e]} />
                      </Row>
                      <Muted>
                        {formatPct(p.pct)} · {p.total} questões
                      </Muted>
                    </Row>
                    <ProgressBar valor={p.pct ?? 0} cor={p.pct === null ? 'bg-line' : p.pct >= 0.7 ? 'bg-emerald-500' : 'bg-amber-500'} />
                  </View>
                );
              })}
            </Card>
          </Section>

          <Section
            titulo="Hoje"
            acao={<Button pequeno variante="fantasma" titulo="Cronograma" icone={CalendarCheck} onPress={() => router.push('/cronograma')} />}
          >
            <Card>
              <Row className="mb-2 justify-between">
                <Muted>
                  {agenda.fase === 'antes'
                    ? 'O plano ainda não começou.'
                    : agenda.fase === 'apos-prova'
                      ? 'A prova-alvo já passou.'
                      : `Semana ${agenda.semanaIndice} de ${agenda.totalSemanas} · ${horasMinutos(agenda.minutosConcluidos)} de ${horasMinutos(agenda.minutosPlanejados)}`}
                </Muted>
                <Button
                  pequeno
                  variante={agenda.modo === 'plantao' ? 'primario' : 'secundario'}
                  icone={Zap}
                  titulo={agenda.modo === 'plantao' ? 'Plantão ativo' : 'Modo Plantão'}
                  onPress={() => togglePlantao(hoje)}
                />
              </Row>
              <ProgressBar valor={progressoDia} className="mb-2" />
              {pendentesHoje.slice(0, 4).map((t) => (
                <TarefaItem key={t.id} tarefa={t} data={hoje} modo={agenda.modo} compacto />
              ))}
              {pendentesHoje.length === 0 && agenda.tarefas.length > 0 ? <Txt className="py-2">✅ Tudo feito hoje. Excelente!</Txt> : null}
              {pendentesHoje.length > 4 ? (
                <Pressable onPress={() => router.push('/cronograma')} className="mt-2 flex-row items-center">
                  <Muted>+{pendentesHoje.length - 4} tarefas no cronograma</Muted>
                  <ArrowRight size={14} color={cores.suave} />
                </Pressable>
              ) : null}
            </Card>
          </Section>
        </View>

        {/* Coluna lateral */}
        <View className="lg:w-[380px]">
          <Section titulo="📋 Meu Edital" acao={<Button pequeno variante="fantasma" titulo={edital ? 'Abrir' : 'Escolher'} onPress={() => router.push('/edital')} />}>
            {edital && projecao ? (
              <Pressable onPress={() => router.push('/edital')} accessibilityRole="button">
                <Card>
                  <Txt numberOfLines={2} className="font-medium">
                    {edital.nome}
                  </Txt>
                  <Muted>Básicas = {Math.round(fatiaBasicas(edital) * 100)}% dos pontos</Muted>
                  {projecao.cobertura > 0 ? (
                    <>
                      <Row className="mt-2 items-center justify-between">
                        <Txt>Nota projetada</Txt>
                        <Txt className="font-semibold">
                          {projecao.pontos === null ? '—' : projecao.pontos.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} / {projecao.maximo.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                        </Txt>
                      </Row>
                      {projecao.riscoEliminacao ? (
                        <Text className="mt-1 text-[13px] text-red-600 dark:text-red-400">🚨 Risco de eliminação por nota mínima — veja as disciplinas em vermelho.</Text>
                      ) : (
                        <Muted className="mt-1">Mínimos do edital atendidos com o desempenho atual.</Muted>
                      )}
                    </>
                  ) : (
                    <Muted className="mt-2">Registre questões com a disciplina marcada para ver a nota projetada.</Muted>
                  )}
                </Card>
              </Pressable>
            ) : (
              <Callout emoji="🎯">
                <Txt>Escolha o edital do seu concurso: o cronograma passa a pesar as básicas certas e o app projeta sua nota e o risco de eliminação.</Txt>
              </Callout>
            )}
          </Section>

          <Section titulo="⚠️ Radar de pontos fracos">
            {fracos.length ? (
              fracos.map((p) => (
                <Card key={p.temaId} className="mb-2">
                  <Row className="justify-between">
                    <Txt className="flex-1 font-medium">{p.nome}</Txt>
                    <Text className="text-[15px] font-semibold text-red-600 dark:text-red-400">{formatPct(p.placar.pct)}</Text>
                  </Row>
                  <Muted>
                    {p.placar.acertos}/{p.placar.total} acertos · {EIXO_LABEL[p.eixo]}
                  </Muted>
                  <View className="mt-2 flex-row flex-wrap gap-2">
                    {p.refs.map((r) => {
                      const ref = resolverRef(r);
                      return ref ? <Button key={r} pequeno titulo={ref.rotulo} onPress={() => router.push(ref.rota)} /> : null;
                    })}
                    {(() => {
                      const d = getTema(p.temaId)?.disciplina.id;
                      return d && temBanco(d) ? <Button pequeno variante="primario" titulo="🎯 Treinar no app" onPress={() => router.push(rotaTreino(d, [p.temaId]))} /> : null;
                    })()}
                    <Button pequeno variante="fantasma" titulo="Registrar bateria" onPress={() => router.push('/questoes')} />
                  </View>
                </Card>
              ))
            ) : (
              <Callout emoji="📊">
                <Txt>Nenhum tema abaixo de 70% (com pelo menos 10 questões). Registre suas baterias na Central de Questões para o radar funcionar.</Txt>
              </Callout>
            )}
          </Section>

          <Section
            titulo={`📡 Últimos editais para generalista ${meusEstados.length ? `em ${meusEstados.join(', ')}` : 'no Brasil'}`}
            acao={<Button pequeno variante="fantasma" titulo="Radar" icone={RadarIcon} onPress={() => router.push('/radar')} />}
          >
            <Card className="p-0">
              {ultimos.length === 0 ? (
                <Muted className="p-4">Sem concursos no momento. Toque em “Atualizar Radar” na aba Radar.</Muted>
              ) : (
                ultimos.map((c, i) => (
                  <Pressable
                    key={c.id}
                    onPress={() => router.push(`/radar/${encodeURIComponent(c.id)}`)}
                    className={`px-3 py-2.5 hover:bg-hover dark:hover:bg-hover-dark ${i < ultimos.length - 1 ? 'border-b border-line dark:border-line-dark' : ''}`}
                  >
                    <Row className="mb-1 gap-1.5">
                      {c.isNew ? <SeloNovo /> : null}
                      <Tag texto={c.uf} cor={COR_UF[c.uf]} />
                      <Tag texto={CATEGORIA_CURTA[c.categoria]} cor={COR_CATEGORIA[c.categoria]} />
                    </Row>
                    <Txt numberOfLines={1} className="font-medium">
                      {c.cidade} — {c.orgao}
                    </Txt>
                    <Muted numberOfLines={1}>
                      {c.cargos.map((x) => x.nome).join(', ')}
                      {c.inscricoes.fim ? ` · inscrições até ${formatBR(c.inscricoes.fim)}` : ''}
                    </Muted>
                  </Pressable>
                ))
              )}
            </Card>
          </Section>

          <Section titulo="Pendências">
            <Card>
              <Row className="justify-between py-1">
                <Txt>🔁 Revisões para hoje</Txt>
                <Txt className="font-semibold">{m.revisoesHoje}</Txt>
              </Row>
              <Row className="justify-between py-1">
                <Txt>📕 Caderno de erros a zerar</Txt>
                <Txt className="font-semibold">
                  {m.errosPendentes}/{m.errosTotal}
                </Txt>
              </Row>
              <Row className="justify-between py-1">
                <Txt>↻ Blocos na fila de redistribuição</Txt>
                <Txt className="font-semibold">{agenda.pendentesNaFila}</Txt>
              </Row>
              <Label className="mt-2">Dica</Label>
              <Muted>Plantão hoje? Ative o Modo Plantão: a agenda vira 45–60 min de questões, lei seca e revisões.</Muted>
            </Card>
          </Section>
        </View>
      </View>
    </Screen>
  );
}
