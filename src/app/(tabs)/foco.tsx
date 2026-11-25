import { Pause, Play, Square, SkipForward, Trash2 } from 'lucide-react-native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { selecaoInicial, TemaPicker, type SelecaoTema } from '@/components/questoes/TemaPicker';
import { Button, Campo, Card, IconButton, Muted, Row, Screen, Section, Segmented, StatTile, Txt, useToast } from '@/components/ui';
import { getDisciplina } from '@/data/eixos';
import type { FaseTimer } from '@/domain/types';
import { useHoje } from '@/store/selectors';
import { useCronogramaStore } from '@/store/useCronogramaStore';
import { restanteMs, useFocusStore } from '@/store/useFocusStore';
import { formatBR } from '@/utils/dates';
import { horasMinutos, mmss } from '@/utils/format';
import { agendarFimDaFase, cancelarFimDaFase } from '@/services/notificacoes';
import { feedback } from '@/utils/haptics';
import { gerarId } from '@/utils/id';
import { minutosNaSemana } from '@/utils/metrics';

const FASE_LABEL: Record<FaseTimer, string> = { foco: '🎯 Foco', 'pausa-curta': '☕ Pausa curta', 'pausa-longa': '🌿 Pausa longa' };

export default function Foco() {
  const toast = useToast();
  const hoje = useHoje();
  const timer = useFocusStore((s) => s.timer);
  const config = useFocusStore((s) => s.config);
  const sessoes = useFocusStore((s) => s.sessoes);
  const { iniciar, pausar, retomar, cancelar, concluirFase, setConfig, addSessaoManual, removeSessao } = useFocusStore.getState();
  const registrarAtividade = useCronogramaStore((s) => s.registrarAtividade);
  const [sel, setSel] = useState<SelecaoTema>(selecaoInicial());
  const [agora, setAgora] = useState(Date.now());
  const [manual, setManual] = useState('');
  const encerrando = useRef(false);

  // Relógio baseado em timestamp: preciso mesmo com a aba em segundo plano.
  useEffect(() => {
    const t = setInterval(() => setAgora(Date.now()), 500);
    return () => clearInterval(t);
  }, []);

  const restante = timer ? restanteMs(timer, agora) : config.focoMin * 60_000;
  const rodando = !!timer && timer.terminaEm !== null;

  useEffect(() => {
    if (!timer || timer.terminaEm === null || restante > 0 || encerrando.current) return;
    encerrando.current = true;
    const nome = timer.disciplinaId ? (getDisciplina(timer.disciplinaId)?.nome ?? 'Foco') : 'Foco';
    const sessao = concluirFase(Date.now(), nome);
    feedback('sucesso');
    if (sessao) registrarAtividade(sessao.data);
    toast(timer.fase === 'foco' ? `Foco concluído (+${sessao?.minutos ?? 0} min). Hora da pausa!` : 'Pausa encerrada. Pronto para o próximo foco?');
    if (Platform.OS === 'web' && typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(timer.fase === 'foco' ? 'Foco concluído!' : 'Pausa encerrada', { body: 'Concurseiro Pro Max' });
      } catch {
        /* ignora */
      }
    }
    setTimeout(() => (encerrando.current = false), 1000);
  }, [restante, timer, concluirFase, registrarAtividade, toast]);

  // Android/iOS: notificação agendada para o fim da fase (avisa mesmo com o app em segundo plano).
  const terminaEm = timer?.terminaEm ?? null;
  const faseTimer = timer?.fase ?? 'foco';
  useEffect(() => {
    if (terminaEm !== null) void agendarFimDaFase(terminaEm, faseTimer);
    else void cancelarFimDaFase();
  }, [terminaEm, faseTimer]);

  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;
    const original = 'Concurseiro Pro Max';
    document.title = rodando ? `${mmss(restante)} · ${timer?.fase === 'foco' ? 'Foco' : 'Pausa'}` : original;
    return () => {
      document.title = original;
    };
  }, [rodando, restante, timer?.fase]);

  const hojeMin = useMemo(() => sessoes.filter((s) => s.data === hoje).reduce((a, s) => a + s.minutos, 0), [sessoes, hoje]);
  const semanaMin = useMemo(() => minutosNaSemana(sessoes, hoje), [sessoes, hoje]);

  const comecar = () => {
    if (Platform.OS === 'web' && typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
      void Notification.requestPermission().catch(() => {});
    }
    feedback('medio');
    if (timer && timer.terminaEm === null) retomar();
    else iniciar({ disciplinaId: sel.disciplinaId, eixo: sel.eixo, fase: timer?.fase ?? 'foco' });
  };

  return (
    <Screen emoji="⏱️" titulo="Timer de Foco" descricao="Pomodoro vinculado à disciplina. O tempo de foco vira horas líquidas no Dashboard.">
      <Card className="mb-6 items-center py-8">
        <Text className="text-[15px] text-ink-soft dark:text-ink-dark-soft">{FASE_LABEL[timer?.fase ?? 'foco']} · ciclo {timer?.cicloAtual ?? 1}</Text>
        <Text accessibilityRole="timer" className="my-2 font-mono text-[72px] font-bold text-ink dark:text-ink-dark">
          {mmss(restante)}
        </Text>
        <Muted>{timer?.disciplinaId ? getDisciplina(timer.disciplinaId)?.nome : (getDisciplina(sel.disciplinaId)?.nome ?? '')}</Muted>
        <Row className="mt-5 flex-wrap justify-center gap-2">
          {rodando ? (
            <Button variante="secundario" icone={Pause} titulo="Pausar" onPress={() => pausar()} />
          ) : (
            <Button variante="primario" icone={Play} titulo={timer ? 'Continuar' : 'Iniciar foco'} onPress={comecar} />
          )}
          {timer ? (
            <>
              <Button
                icone={SkipForward}
                titulo={timer.fase === 'foco' ? 'Encerrar foco' : 'Pular pausa'}
                onPress={() => {
                  const s = concluirFase(Date.now(), getDisciplina(timer.disciplinaId ?? '')?.nome ?? 'Foco');
                  if (s) {
                    registrarAtividade(s.data);
                    toast(`+${s.minutos} min registrados.`);
                  }
                }}
              />
              <Button variante="fantasma" icone={Square} titulo="Cancelar" onPress={() => cancelar()} />
            </>
          ) : null}
        </Row>
      </Card>

      <View className="mb-6 flex-row flex-wrap gap-3">
        <StatTile rotulo="Hoje" valor={horasMinutos(hojeMin)} />
        <StatTile rotulo="Esta semana" valor={horasMinutos(semanaMin)} />
        <StatTile rotulo="Sessões" valor={String(sessoes.length)} />
      </View>

      {!timer ? (
        <Section titulo="Vincular à disciplina">
          <TemaPicker valor={sel} onChange={setSel} />
        </Section>
      ) : null}

      <Section titulo="Configuração">
        <Muted className="mb-1">Foco</Muted>
        <View className="mb-3">
          <Segmented valor={String(config.focoMin)} onChange={(v) => setConfig({ focoMin: Number(v) })} opcoes={[25, 50, 90].map((n) => ({ valor: String(n), rotulo: `${n} min` }))} />
        </View>
        <Muted className="mb-1">Pausa curta / longa</Muted>
        <Row className="mb-3 flex-wrap gap-2">
          <Segmented valor={String(config.pausaCurtaMin)} onChange={(v) => setConfig({ pausaCurtaMin: Number(v) })} opcoes={[5, 10, 15].map((n) => ({ valor: String(n), rotulo: `${n}` }))} />
          <Segmented valor={String(config.pausaLongaMin)} onChange={(v) => setConfig({ pausaLongaMin: Number(v) })} opcoes={[15, 25, 30].map((n) => ({ valor: String(n), rotulo: `${n}` }))} />
        </Row>
        <Muted className="mb-1">Ciclos até a pausa longa</Muted>
        <Segmented valor={String(config.ciclosAtePausaLonga)} onChange={(v) => setConfig({ ciclosAtePausaLonga: Number(v) })} opcoes={[2, 3, 4].map((n) => ({ valor: String(n), rotulo: `${n}` }))} />
      </Section>

      <Section titulo="Registrar tempo estudado sem o timer">
        <Row className="items-end gap-2">
          <Campo className="flex-1" rotulo="Minutos" value={manual} onChangeText={setManual} keyboardType="number-pad" placeholder="Ex.: 45" />
          <Button
            className="mb-3"
            titulo="Adicionar"
            onPress={() => {
              const min = Number(manual);
              if (!Number.isFinite(min) || min <= 0 || min > 600) return toast('Informe de 1 a 600 minutos.');
              addSessaoManual({ id: gerarId('foco'), data: hoje, inicio: new Date().toISOString(), minutos: Math.round(min), eixo: sel.eixo, disciplinaId: sel.disciplinaId, rotulo: 'Registro manual' });
              registrarAtividade(hoje);
              setManual('');
              toast(`+${Math.round(min)} min adicionados.`);
            }}
          />
        </Row>
      </Section>

      <Section titulo="Sessões recentes">
        {sessoes.slice(0, 15).map((s) => (
          <Row key={s.id} className="border-b border-line py-1.5 dark:border-line-dark">
            <View className="flex-1">
              <Txt>{s.rotulo}</Txt>
              <Muted>
                {formatBR(s.data)} · {horasMinutos(s.minutos)}
              </Muted>
            </View>
            <IconButton icone={Trash2} rotulo="Excluir sessão" onPress={() => removeSessao(s.id)} />
          </Row>
        ))}
        {!sessoes.length ? <Muted>Nenhuma sessão ainda.</Muted> : null}
      </Section>
    </Screen>
  );
}
