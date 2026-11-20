import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pencil, Plus, Trash2 } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  Callout,
  Campo,
  Card,
  DataTable,
  EmptyState,
  H3,
  IconButton,
  LinkExterno,
  Muted,
  ProgressBar,
  Row,
  Screen,
  Section,
  Seletor,
  Tag,
  Toggle,
  Txt,
  useToast,
} from '@/components/ui';
import { DISCIPLINAS, getDisciplina } from '@/data/eixos';
import { EDITAIS_MODELO, getEditalModelo, modelosDaBanca } from '@/data/editais';
import { GUIA_DA_FASE, rotaGuia } from '@/data/guiasFases';
import { TRILHA_LABEL, type ModeloEdital, type TipoFase } from '@/data/types';
import { EditalAlvoSchema, type EditalAlvo } from '@/shared/edital';
import { useProjecaoEdital } from '@/store/selectors';
import { useSettingsStore } from '@/store/useSettingsStore';
import { STATUS_MINIMO } from '@/components/edital/status';
import { divisaoDeTempo, editalDoModelo, fatiaBasicas, LIMIAR_REFORCO, pontosDoItem, pontosMaximos, totalQuestoes } from '@/utils/edital';

const STATUS = STATUS_MINIMO;

const FASE: Record<TipoFase, string> = {
  objetiva: '📝 Prova objetiva',
  discursiva: '✍️ Discursiva / redação',
  titulos: '🎓 Títulos',
  taf: '🏃 Teste de aptidão física (TAF)',
  psicologica: '🧠 Avaliação psicológica',
  'investigacao-social': '🔎 Investigação social',
  saude: '🩺 Exames de saúde / toxicológico',
  pratica: '🛠️ Prova prática',
  'curso-formacao': '🏛️ Curso de formação',
};

const GRUPOS: { titulo: string; filtro: (m: ModeloEdital) => boolean }[] = [
  { titulo: 'Perícia médica', filtro: (m) => m.trilhaSugerida === 'pericia' },
  { titulo: 'Perícia oficial (médico-legista)', filtro: (m) => m.trilhaSugerida === 'legista' },
  { titulo: 'Prefeituras do Sul (clínico/generalista)', filtro: (m) => m.trilhaSugerida === 'clinico' || m.trilhaSugerida === 'generalista' },
];

function fmt(n: number, casas = 2): string {
  return n.toLocaleString('pt-BR', { maximumFractionDigits: casas });
}

function pct(n: number | null): string {
  return n === null ? '—' : `${Math.round(n * 100)}%`;
}

function numero(texto: string): number {
  return Number(texto.replace(',', '.'));
}

function EscolherModelo({ destaque, onEscolher }: { destaque: ModeloEdital[]; onEscolher: (m: ModeloEdital) => void }) {
  const ids = new Set(destaque.map((m) => m.id));
  return (
    <View>
      {destaque.length ? (
        <Section titulo="Sugeridos para a banca do concurso">
          {destaque.map((m) => (
            <CartaoModelo key={m.id} m={m} onEscolher={onEscolher} />
          ))}
        </Section>
      ) : null}
      {GRUPOS.map((g) => {
        const lista = EDITAIS_MODELO.filter((m) => g.filtro(m) && !ids.has(m.id));
        if (!lista.length) return null;
        return (
          <Section key={g.titulo} titulo={g.titulo}>
            {lista.map((m) => (
              <CartaoModelo key={m.id} m={m} onEscolher={onEscolher} />
            ))}
          </Section>
        );
      })}
    </View>
  );
}

function CartaoModelo({ m, onEscolher }: { m: ModeloEdital; onEscolher: (m: ModeloEdital) => void }) {
  const e = editalDoModelo(m);
  return (
    <Card className="mb-2">
      <Txt className="font-semibold">{m.nome}</Txt>
      <Muted>
        {m.banca} · {totalQuestoes(e)} questões · básicas = {pct(fatiaBasicas(e))} dos pontos
      </Muted>
      {m.observacoes ? <Muted className="mt-1">{m.observacoes}</Muted> : null}
      <Row className="mt-2 flex-wrap items-center gap-2">
        <Button pequeno variante="primario" titulo="Usar este edital" onPress={() => onEscolher(m)} />
        <LinkExterno url={m.fonteUrl} rotulo="Edital (PDF)" />
      </Row>
    </Card>
  );
}

/** Edição simples: nome, questões, peso e mínimo de cada item; remover/adicionar itens. */
function EditorEdital({ inicial, onSalvar, onCancelar }: { inicial: EditalAlvo; onSalvar: (e: EditalAlvo) => void; onCancelar: () => void }) {
  const [rascunho, setRascunho] = useState<EditalAlvo>(() => JSON.parse(JSON.stringify(inicial)) as EditalAlvo);
  const [novaDisciplina, setNovaDisciplina] = useState(DISCIPLINAS[0]?.id ?? '');
  const [erro, setErro] = useState<string | null>(null);

  const alterarItem = (p: number, i: number, campo: 'questoes' | 'peso' | 'minimo', valor: string) => {
    setRascunho((r) => {
      const c = JSON.parse(JSON.stringify(r)) as EditalAlvo;
      const item = c.provas[p]?.itens[i];
      if (!item) return r;
      if (campo === 'minimo') item.minimo = valor.trim() ? numero(valor) : null;
      else item[campo] = numero(valor);
      return c;
    });
  };
  const removerItem = (p: number, i: number) =>
    setRascunho((r) => {
      const c = JSON.parse(JSON.stringify(r)) as EditalAlvo;
      c.provas[p]?.itens.splice(i, 1);
      return c;
    });
  const adicionarItem = (p: number) =>
    setRascunho((r) => {
      const c = JSON.parse(JSON.stringify(r)) as EditalAlvo;
      const d = getDisciplina(novaDisciplina);
      if (d) c.provas[p]?.itens.push({ rotulo: d.nome, disciplinaIds: [d.id], questoes: 5, peso: 1, minimo: null });
      return c;
    });

  const salvar = () => {
    const r = EditalAlvoSchema.safeParse(rascunho);
    if (!r.success) {
      setErro('Confira os números: cada item precisa de pelo menos 1 questão e peso maior que zero, e cada prova precisa de ao menos um item.');
      return;
    }
    onSalvar(r.data);
  };

  return (
    <Card className="mb-4">
      <Campo rotulo="Nome do edital" value={rascunho.nome} onChangeText={(nome) => setRascunho({ ...rascunho, nome })} />
      {rascunho.provas.map((prova, p) => (
        <View key={prova.id} className="mb-4">
          <H3>{prova.nome}</H3>
          {prova.itens.map((item, i) => (
            <View key={`${item.rotulo}-${i}`} className="mb-2 rounded-notion border border-line p-2 dark:border-line-dark">
              <Row className="items-start justify-between">
                <Txt className="flex-1 pr-2 font-medium">{item.rotulo}</Txt>
                <IconButton icone={Trash2} rotulo="Remover item" onPress={() => removerItem(p, i)} />
              </Row>
              <Row className="gap-2">
                <Campo className="flex-1" rotulo="Questões" keyboardType="number-pad" value={String(item.questoes)} onChangeText={(v) => alterarItem(p, i, 'questoes', v)} />
                <Campo className="flex-1" rotulo="Pontos/questão" keyboardType="decimal-pad" value={String(item.peso)} onChangeText={(v) => alterarItem(p, i, 'peso', v)} />
                <Campo className="flex-1" rotulo="Mínimo (pts)" keyboardType="decimal-pad" value={item.minimo == null ? '' : String(item.minimo)} onChangeText={(v) => alterarItem(p, i, 'minimo', v)} />
              </Row>
            </View>
          ))}
          <Row className="flex-wrap items-end gap-2">
            <View className="min-w-[220px] flex-1">
              <Seletor rotulo="Adicionar disciplina" valor={novaDisciplina} opcoes={DISCIPLINAS.map((d) => ({ valor: d.id, rotulo: d.nome }))} onChange={setNovaDisciplina} />
            </View>
            <Button pequeno icone={Plus} titulo="Adicionar" onPress={() => adicionarItem(p)} />
          </Row>
        </View>
      ))}
      {erro ? <Callout emoji="⚠️" tom="vermelho">{erro}</Callout> : null}
      <Row className="gap-2">
        <Button variante="primario" titulo="Salvar edital" onPress={salvar} />
        <Button titulo="Cancelar" onPress={onCancelar} />
      </Row>
    </Card>
  );
}

export default function MeuEdital() {
  const router = useRouter();
  const toast = useToast();
  const params = useLocalSearchParams<{ banca?: string; modelo?: string }>();
  const edital = useSettingsStore((s) => s.editalAlvo);
  const setEditalAlvo = useSettingsStore((s) => s.setEditalAlvo);
  const trilha = useSettingsStore((s) => s.trilha);
  const setTrilha = useSettingsStore((s) => s.setTrilha);
  const projecao = useProjecaoEdital();
  const [trocando, setTrocando] = useState(false);
  const [editando, setEditando] = useState(false);

  const destaque = useMemo(() => {
    const porId = params.modelo ? getEditalModelo(params.modelo) : undefined;
    const daBanca = modelosDaBanca(params.banca);
    return porId ? [porId, ...daBanca.filter((m) => m.id !== porId.id)] : daBanca;
  }, [params.banca, params.modelo]);

  const modeloBase = edital?.baseId ? getEditalModelo(edital.baseId) : undefined;
  const trilhaSugerida = modeloBase?.trilhaSugerida;

  const escolher = (m: ModeloEdital) => {
    setEditalAlvo(editalDoModelo(m));
    setTrocando(false);
    setEditando(false);
    toast(`Edital-alvo: ${m.nome}. O cronograma passou a pesar as básicas deste edital.`);
  };

  if (!edital || trocando) {
    return (
      <Screen emoji="📋" titulo="Meu Edital" descricao="Escolha o edital do seu concurso (ou o modelo mais parecido) para o app pesar as básicas no cronograma, projetar sua nota e avisar o risco de eliminação.">
        {edital ? <Button titulo="Voltar ao meu edital" onPress={() => setTrocando(false)} className="mb-3 self-start" /> : null}
        {!edital ? (
          <Callout emoji="🎯" tom="azul">
            Nas prefeituras do Sul as básicas são de 40% a 75% das questões; nas perícias oficiais o bloco geral tem nota mínima própria. Cada modelo abaixo veio de um edital real lido no PDF — confira no seu edital e ajuste os números depois.
          </Callout>
        ) : null}
        <EscolherModelo destaque={destaque} onEscolher={escolher} />
      </Screen>
    );
  }

  const maximo = pontosMaximos(edital);
  const fatia = fatiaBasicas(edital);
  const tempo = divisaoDeTempo(edital);

  return (
    <Screen
      emoji="📋"
      titulo="Meu Edital"
      descricao={edital.nome}
      acoes={
        <>
          <Button pequeno variante="primario" titulo="🧪 Fazer simulado" onPress={() => router.push('/questoes/simulado')} />
          <Button pequeno icone={Pencil} titulo={editando ? 'Fechar edição' : 'Editar números'} onPress={() => setEditando((v) => !v)} />
          <Button pequeno titulo="Trocar edital" onPress={() => setTrocando(true)} />
          <Button
            pequeno
            variante="perigo"
            titulo="Remover"
            onPress={() => {
              setEditalAlvo(null);
              toast('Edital removido — o cronograma volta ao padrão da trilha.');
            }}
          />
        </>
      }
    >
      {editando ? (
        <EditorEdital
          inicial={edital}
          onCancelar={() => setEditando(false)}
          onSalvar={(e) => {
            setEditalAlvo(e);
            setEditando(false);
            toast('Edital atualizado.');
          }}
        />
      ) : null}

      <Row className="mb-4 flex-wrap gap-3">
        <Card className="min-w-[150px] flex-1">
          <Muted>Questões</Muted>
          <Txt className="text-[22px] font-semibold">{totalQuestoes(edital)}</Txt>
        </Card>
        <Card className="min-w-[150px] flex-1">
          <Muted>Pontos possíveis</Muted>
          <Txt className="text-[22px] font-semibold">{fmt(maximo)}</Txt>
        </Card>
        <Card className="min-w-[150px] flex-1">
          <Muted>Peso das básicas</Muted>
          <Txt className="text-[22px] font-semibold">{pct(fatia)}</Txt>
          <Muted>{fatia >= LIMIAR_REFORCO ? 'Reforço de básicas ativo no cronograma' : 'Básicas no ritmo normal do cronograma'}</Muted>
        </Card>
      </Row>

      {trilhaSugerida && trilhaSugerida !== trilha ? (
        <Callout emoji="🧭" tom="amarelo">
          <Txt>Este edital combina com a trilha “{TRILHA_LABEL[trilhaSugerida]}”.</Txt>
          <Button
            pequeno
            className="mt-2 self-start"
            titulo="Usar esta trilha"
            onPress={() => {
              setTrilha(trilhaSugerida);
              toast(`Foco alterado: ${TRILHA_LABEL[trilhaSugerida]}`);
            }}
          />
        </Callout>
      ) : null}

      {/* Nota projetada */}
      <Section titulo="Nota projetada (com o seu desempenho registrado)">
        {projecao && projecao.cobertura > 0 ? (
          <>
            {projecao.riscoEliminacao ? (
              <Callout emoji="🚨" tom="vermelho">
                Pelo seu desempenho atual, algum mínimo do edital ficaria abaixo do exigido. Priorize as disciplinas marcadas em vermelho.
              </Callout>
            ) : null}
            {projecao.provas.map((p) => (
              <Card key={p.id} className="mb-2">
                <Row className="flex-wrap items-center justify-between gap-2">
                  <Txt className="font-semibold">{p.nome}</Txt>
                  <Tag texto={STATUS[p.status].texto} cor={STATUS[p.status].cor} />
                </Row>
                <Muted>
                  {p.pontos === null ? 'Sem dados' : `${fmt(p.pontos, 1)} de ${fmt(p.maximo)} pontos`}
                  {p.minimo !== null ? ` · mínimo ${fmt(p.minimo)}` : ''}
                  {p.cobertura < 1 ? ` · estimativa (${pct(1 - p.cobertura)} dos pontos sem dados)` : ''}
                </Muted>
                <ProgressBar valor={p.pontos === null || !p.maximo ? 0 : Math.max(0, p.pontos) / p.maximo} className="mt-2" />
                {p.itens.map((i) => (
                  <Row key={i.rotulo} className="mt-2 items-center justify-between gap-2">
                    <Txt className="flex-1 text-[13px]">{i.rotulo}</Txt>
                    <Muted>{i.pct === null ? 'sem dados' : `acerto ${pct(i.pct)}`}</Muted>
                    {i.minimo !== null ? <Tag texto={STATUS[i.status].texto} cor={STATUS[i.status].cor} /> : null}
                  </Row>
                ))}
              </Card>
            ))}
            {projecao.minimoTotal !== null ? (
              <Muted>
                Total: {projecao.pontos === null ? '—' : fmt(projecao.pontos, 1)} de {fmt(projecao.maximo)} · mínimo {fmt(projecao.minimoTotal)} ({STATUS[projecao.status].texto.toLowerCase()})
              </Muted>
            ) : null}
          </>
        ) : (
          <EmptyState
            emoji="📈"
            titulo="Ainda sem desempenho registrado"
            texto="Registre baterias na Central de Questões (ou resolva o Treino do app) com a disciplina marcada: a nota projetada aparece aqui."
            acao={<Button variante="primario" titulo="Ir para Questões" onPress={() => router.push('/questoes')} />}
          />
        )}
      </Section>

      {/* Distribuição */}
      <Section titulo="Distribuição de pontos">
        {edital.provas.map((p) => (
          <View key={p.id} className="mb-3">
            <H3>{p.nome}</H3>
            <DataTable
              colunas={['Disciplina', 'Questões × pontos', '% da prova', 'Mínimo']}
              linhas={p.itens.map((i) => [
                i.rotulo,
                `${i.questoes} × ${fmt(i.peso)}`,
                pct(maximo ? pontosDoItem(i) / maximo : 0),
                i.minimo ? fmt(i.minimo) : '—',
              ])}
              nota={[
                p.formato === 'certo-errado' ? `Certo/Errado${p.penalidadeErro ? ` — cada erro desconta ${fmt(p.penalidadeErro)}` : ''}` : `Múltipla escolha${p.alternativas ? ` (${p.alternativas} alternativas)` : ''}`,
                p.minimoPontos != null ? `mínimo da prova: ${fmt(p.minimoPontos)} pontos` : p.minimoPct != null ? `mínimo da prova: ${fmt(p.minimoPct)}%` : null,
              ]
                .filter(Boolean)
                .join(' · ')}
            />
          </View>
        ))}
      </Section>

      {/* Tempo */}
      <Section titulo="Divisão de tempo sugerida">
        <Muted className="mb-2">Proporcional aos pontos de cada disciplina, com peso extra para quem tem nota mínima própria. Use como guia para a semana.</Muted>
        {tempo.map((t) => (
          <View key={t.rotulo} className="mb-2">
            <Row className="justify-between">
              <Txt className="flex-1 pr-2 text-[13px]">
                {t.rotulo}
                {t.basico ? ' · básica' : ''}
              </Txt>
              <Muted>{pct(t.fatia)}</Muted>
            </Row>
            <ProgressBar valor={t.fatia} cor={t.basico ? 'bg-orange-400' : 'bg-accent'} />
          </View>
        ))}
      </Section>

      {/* Fases */}
      {edital.fases.length ? (
        <Section titulo="Fases do concurso">
          {edital.fases.map((f, i) => (
            <Toggle key={`${f.tipo}-${i}`} titulo={FASE[f.tipo]} subtitulo={f.carater}>
              <Txt className="text-[14px]">{f.detalhe ?? 'Confira os detalhes no edital.'}</Txt>
              {GUIA_DA_FASE[f.tipo] ? (
                <Button pequeno className="mt-2 self-start" titulo="📘 Como se preparar para esta fase" onPress={() => router.push(rotaGuia(GUIA_DA_FASE[f.tipo]!))} />
              ) : null}
            </Toggle>
          ))}
        </Section>
      ) : null}

      {edital.fonteUrl ? (
        <Muted className="mt-2">
          Fonte: <LinkExterno url={edital.fonteUrl} rotulo="edital oficial (PDF)" />
        </Muted>
      ) : null}
      <Muted className="mt-2">Os números vêm do edital lido; confira sempre o edital do SEU concurso — a composição muda de um município para outro.</Muted>
    </Screen>
  );
}
