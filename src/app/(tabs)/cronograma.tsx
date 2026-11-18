import { ChevronLeft, ChevronRight, Zap } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { TarefaItem } from '@/components/agenda/TarefaItem';
import { Button, Callout, Card, IconButton, Muted, ProgressBar, Row, Screen, Section, Segmented, Seletor, Tag, Toggle, Txt, useToast } from '@/components/ui';
import { MESOCICLOS, getSemana } from '@/data/plano12Semanas';
import { TIPO_BLOCO_LABEL, TRILHA_LABEL, TRILHAS, type Trilha } from '@/data/types';
import type { TarefaAgenda } from '@/domain/types';
import { useAgenda, useHoje } from '@/store/selectors';
import { useCronogramaStore } from '@/store/useCronogramaStore';
import { useSettingsStore } from '@/store/useSettingsStore';
import { COR_TIPO_BLOCO, useCores } from '@/theme/cores';
import { addDays, diaSemanaCurto, formatBR, formatLongo, relativo } from '@/utils/dates';
import { horasMinutos } from '@/utils/format';
import { progressoPorSemana, visaoDaSemana } from '@/utils/scheduler';
import { feedback } from '@/utils/haptics';

function capitalizarInicio(t: string): string {
  return t.charAt(0).toUpperCase() + t.slice(1);
}

const GRUPOS: { titulo: string; filtro: (t: TarefaAgenda) => boolean }[] = [
  { titulo: '🔁 Revisões espaçadas', filtro: (t) => t.origem === 'revisao' },
  { titulo: '📌 Plano do dia', filtro: (t) => t.origem === 'plano' },
  { titulo: '↻ Redistribuídas (dias anteriores)', filtro: (t) => t.origem === 'redistribuida' },
  { titulo: '🎯 Complementos', filtro: (t) => t.origem === 'adaptativa' || t.origem === 'manutencao' },
];

export default function Cronograma() {
  const hoje = useHoje();
  const [data, setData] = useState(hoje);
  const agenda = useAgenda(data);
  const trilha = useSettingsStore((s) => s.trilha);
  const setTrilha = useSettingsStore((s) => s.setTrilha);
  const orcamento = useSettingsStore((s) => s.orcamentoMin);
  const setOrcamento = useSettingsStore((s) => s.setOrcamento);
  const togglePlantao = useSettingsStore((s) => s.togglePlantao);
  const dataInicio = useSettingsStore((s) => s.dataInicio);
  const provaAlvo = useSettingsStore((s) => s.provaAlvo);
  const diasPlantao = useSettingsStore((s) => s.diasPlantao);
  const concluidos = useCronogramaStore((s) => s.concluidos);
  const toast = useToast();
  const cores = useCores();

  const config = useMemo(
    () => ({ trilha, dataInicio, orcamentoMin: orcamento, diasPlantao, provaAlvo: provaAlvo?.data ?? null }),
    [trilha, dataInicio, orcamento, diasPlantao, provaAlvo],
  );
  const semanas = useMemo(() => progressoPorSemana(config, concluidos), [config, concluidos]);
  const semanaPlano = agenda.semanasPlano.length ? getSemana(agenda.semanasPlano[agenda.semanasPlano.length - 1] ?? 1) : undefined;

  const alternarPlantao = () => {
    togglePlantao(data);
    feedback('medio');
    toast(agenda.modo === 'plantao' ? 'Dia Padrão restaurado.' : 'Modo Plantão: meta recalibrada para 45–60 min. A teoria vai para a fila de redistribuição.');
  };

  return (
    <Screen emoji="🗓️" titulo="Cronograma — 12 semanas" descricao="Checklist diário do plano periodizado, com revisões espaçadas e redistribuição automática." larga>
      <View className="gap-6 lg:flex-row">
        <View className="flex-1">
          <Seletor<Trilha>
            rotulo="Foco ativo"
            valor={trilha}
            opcoes={TRILHAS.map((t) => ({ valor: t, rotulo: TRILHA_LABEL[t] }))}
            onChange={(t) => {
              setTrilha(t);
              toast(`Foco alterado: ${TRILHA_LABEL[t]}`);
            }}
          />

          {/* Navegação de dia + Modo Plantão */}
          <Card className="mb-4">
            <Row className="justify-between">
              <IconButton icone={ChevronLeft} rotulo="Dia anterior" onPress={() => setData(addDays(data, -1))} />
              <Pressable onPress={() => setData(hoje)} className="flex-1 items-center" accessibilityRole="button" accessibilityLabel="Voltar para hoje">
                <Txt className="font-semibold">{capitalizarInicio(formatLongo(data))}</Txt>
                <Muted>
                  {relativo(hoje, data)}
                  {agenda.semanaIndice ? ` · Semana ${agenda.semanaIndice}/${agenda.totalSemanas} · Dia ${agenda.diaDaSemana}` : ''}
                </Muted>
              </Pressable>
              <IconButton icone={ChevronRight} rotulo="Próximo dia" onPress={() => setData(addDays(data, 1))} />
            </Row>
            <View className={`mt-3 flex-row items-center justify-between rounded-notion p-3 ${agenda.modo === 'plantao' ? 'bg-tag-orange dark:bg-tag-orange-dark' : 'bg-side dark:bg-side-dark'}`}>
              <View className="flex-1 pr-3">
                <Txt className="font-semibold">{agenda.modo === 'plantao' ? '⚡ Modo Plantão ativo' : '☀️ Dia Padrão'}</Txt>
                <Muted>
                  {agenda.modo === 'plantao'
                    ? 'Meta de 45–60 min: questões rápidas, lei seca e revisões.'
                    : `Meta de ${horasMinutos(agenda.orcamento)} líquidas.`}
                </Muted>
              </View>
              <Button pequeno variante={agenda.modo === 'plantao' ? 'secundario' : 'primario'} icone={Zap} titulo={agenda.modo === 'plantao' ? 'Voltar ao padrão' : 'Estou de plantão'} onPress={alternarPlantao} />
            </View>
            {agenda.modo === 'padrao' ? (
              <View className="mt-3">
                <Muted className="mb-1">Orçamento do Dia Padrão</Muted>
                <Segmented
                  valor={String(orcamento)}
                  opcoes={[180, 210, 240].map((n) => ({ valor: String(n), rotulo: horasMinutos(n) }))}
                  onChange={(v) => setOrcamento(Number(v))}
                />
              </View>
            ) : null}
          </Card>

          {agenda.comprimido ? (
            <Callout emoji="⏩" tom="amarelo">
              <Txt>
                Plano comprimido para a prova-alvo ({provaAlvo ? formatBR(provaAlvo.data) : ''}): {agenda.totalSemanas} semanas, com os blocos essenciais
                primeiro e as 4 semanas finais em reta final.
              </Txt>
            </Callout>
          ) : null}

          {semanaPlano && agenda.fase === 'plano' ? (
            <Callout emoji="🎯" tom="azul">
              <Txt className="font-semibold">
                {agenda.semanasPlano.length > 1 ? `Semanas ${agenda.semanasPlano.join(' + ')}` : `Semana ${semanaPlano.semana}`}: {semanaPlano.titulo}
              </Txt>
              <Muted className="mt-1">{semanaPlano.objetivo}</Muted>
              <Muted className="mt-1">Bancas-foco: {semanaPlano.bancasFoco.join(', ')} · Meta: {semanaPlano.metaQuestoes} questões</Muted>
            </Callout>
          ) : null}

          {agenda.fase === 'antes' ? (
            <Callout emoji="⏳">O plano começa em {formatBR(dataInicio)}. Você pode mudar a data de início em Configurações.</Callout>
          ) : null}
          {agenda.fase === 'apos-prova' ? <Callout emoji="🏁">A prova-alvo já passou. Defina uma nova no Radar Sul ou em Configurações.</Callout> : null}
          {agenda.fase === 'manutencao' ? (
            <Callout emoji="🛠️" tom="verde">As 12 semanas terminaram. O app segue em modo manutenção até a prova: revisões, caderno de erros e um simulado por semana.</Callout>
          ) : null}

          <Row className="mb-1 justify-between">
            <Muted>
              {horasMinutos(agenda.minutosConcluidos)} de {horasMinutos(agenda.minutosPlanejados)} concluídos
            </Muted>
            <Muted>{agenda.tarefas.filter((t) => t.concluida).length}/{agenda.tarefas.length} tarefas</Muted>
          </Row>
          <ProgressBar valor={agenda.minutosPlanejados ? agenda.minutosConcluidos / agenda.minutosPlanejados : 0} className="mb-4" />

          {GRUPOS.map((g) => {
            const lista = agenda.tarefas.filter(g.filtro);
            if (!lista.length) return null;
            return (
              <Section key={g.titulo} titulo={g.titulo}>
                {lista.map((t) => (
                  <TarefaItem key={t.id} tarefa={t} data={data} modo={agenda.modo} />
                ))}
              </Section>
            );
          })}

          {agenda.revisoesExtras > 0 ? <Muted className="mb-2">+{agenda.revisoesExtras} revisões atrasadas — veja todas em Questões → Revisões.</Muted> : null}
          {agenda.pendentesNaFila > 0 ? (
            <Callout emoji="↻">
              {`${agenda.pendentesNaFila} bloco(s) (${horasMinutos(agenda.minutosNaFila)}) aguardam redistribuição nos próximos Dias Padrão (até +1h por dia).`}
            </Callout>
          ) : null}
        </View>

        {/* Visão das 12 semanas */}
        <View className="lg:w-[400px]">
          <Section titulo="Visão do plano">
            {MESOCICLOS.map((meso) => {
              const doMeso = semanas.filter((s) => {
                const ultima = s.semanas[s.semanas.length - 1] ?? 1;
                return ultima >= meso.semanas[0] && ultima <= meso.semanas[1];
              });
              if (!doMeso.length) return null;
              return (
              <View key={meso.id} className="mb-3">
                <Text className="mb-1 text-[12px] font-semibold uppercase tracking-wide text-ink-faint">{meso.titulo}</Text>
                {doMeso
                  .map((s) => {
                    const info = getSemana(s.semanas[s.semanas.length - 1] ?? 1);
                    const atual = agenda.semanaIndice === s.semanaIndice;
                    return (
                      <Toggle
                        key={s.semanaIndice}
                        titulo={
                          <View>
                            <Txt className={`font-medium ${atual ? 'text-accent' : ''}`}>
                              Semana {s.semanaIndice}
                              {s.semanas.length > 1 || s.semanas[0] !== s.semanaIndice ? ` (conteúdo ${s.semanas.join('+')})` : ''} · {info?.titulo}
                            </Txt>
                            <ProgressBar valor={s.total ? s.feitos / s.total : 0} className="mt-1" cor={s.feitos === s.total && s.total ? 'bg-emerald-500' : 'bg-accent'} />
                          </View>
                        }
                        subtitulo={`${s.feitos}/${s.total} blocos`}
                      >
                        {visaoDaSemana(s.semanaIndice, config).map((d) =>
                          d.blocos.length ? (
                            <View key={d.dia} className="mb-2">
                              <Pressable onPress={() => setData(d.data)}>
                                <Text className="text-[12px] font-semibold text-ink-soft dark:text-ink-dark-soft">
                                  Dia {d.dia} · {diaSemanaCurto(d.data)} {formatBR(d.data).slice(0, 5)}
                                </Text>
                              </Pressable>
                              {d.blocos.map((b) => (
                                <Row key={b.id} className="mt-1 items-start">
                                  <Text className="mr-1.5 text-[13px]">{concluidos[b.id] ? '✅' : '⬜'}</Text>
                                  <View className="flex-1">
                                    <Text className="text-[13px] text-ink dark:text-ink-dark">{b.titulo}</Text>
                                    <Row className="mt-0.5 gap-1">
                                      <Tag texto={TIPO_BLOCO_LABEL[b.tipo]} cor={COR_TIPO_BLOCO[b.tipo]} />
                                      <Muted>{b.minutos} min</Muted>
                                    </Row>
                                  </View>
                                </Row>
                              ))}
                            </View>
                          ) : null,
                        )}
                      </Toggle>
                    );
                  })}
              </View>
              );
            })}
            <Muted style={{ color: cores.fraco }}>Toque no dia para abrir a agenda daquela data.</Muted>
          </Section>
        </View>
      </View>
    </Screen>
  );
}
