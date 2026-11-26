import { useRouter } from 'expo-router';
import { Plus, RefreshCw } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { ConcursoCard, StatusBotao } from '@/components/radar/ConcursoCard';
import { aplicarFiltros, bancasDisponiveis, contarPorAcesso, FILTROS_PADRAO, type FiltrosRadar } from '@/components/radar/filtros';
import { saudeDoRadar, tempoDesde } from '@/components/radar/saude';
import { Button, Callout, Campo, Chip, EmptyState, Muted, Row, Screen, Segmented, Seletor, SeloNovo, Tag, Txt, useDesktop, useToast } from '@/components/ui';
import { STATUS_LABEL, STATUS_PESSOAL, type ConcursoView } from '@/shared/concursos/overlay';
import { ACESSO_LABEL, CATEGORIA_CURTA, CATEGORIAS, UF_NOME, UFS, type Categoria } from '@/shared/concursos/schema';
import { sincronizarRadar } from '@/services/concursosTrackerService';
import { useConcursos, useHoje } from '@/store/selectors';
import { useRadarStore } from '@/store/useRadarStore';
import { COR_CATEGORIA, COR_STATUS, COR_UF } from '@/theme/cores';
import { formatBR } from '@/utils/dates';
import { moeda } from '@/utils/format';

type Visao = 'tabela' | 'kanban';

export default function RadarSul() {
  const router = useRouter();
  const toast = useToast();
  const desktop = useDesktop();
  const hoje = useHoje();
  const todos = useConcursos();
  const [f, setF] = useState<FiltrosRadar>(FILTROS_PADRAO);
  const [visao, setVisao] = useState<Visao>('tabela');
  const sincronizando = useRadarStore((s) => s.sincronizando);
  const ultimaSync = useRadarStore((s) => s.ultimaSync);
  const feedGeradoEm = useRadarStore((s) => s.feedGeradoEm);
  const origemFeed = useRadarStore((s) => s.origemFeed);
  const ultimoErro = useRadarStore((s) => s.ultimoErro);
  const fontes = useRadarStore((s) => s.fontes);

  const lista = useMemo(() => aplicarFiltros(todos, f, hoje), [todos, f, hoje]);
  const bancas = useMemo(() => bancasDisponiveis(todos), [todos]);
  const porAcesso = useMemo(() => contarPorAcesso(todos), [todos]);
  const novos = todos.filter((c) => c.isNew).length;
  const saude = useMemo(() => saudeDoRadar(feedGeradoEm, fontes), [feedGeradoEm, fontes]);
  const offline = !!ultimoErro && origemFeed !== 'remoto';

  const atualizar = async () => {
    const r = await sincronizarRadar();
    toast(r.ok ? `Radar atualizado: ${r.total} concursos médicos no Sul.` : (r.erro ?? 'Usando dados salvos.'));
  };

  const set = <K extends keyof FiltrosRadar>(k: K, v: FiltrosRadar[K]) => setF((x) => ({ ...x, [k]: v }));

  return (
    <Screen
      emoji="📡"
      titulo="Radar Sul — Concursos Médicos"
      descricao="Concursos e processos seletivos médicos de PR, SC e RS — em destaque os que o generalista (graduação + CRM) pode disputar: perícia, legista e clínico. O robô procura novos editais de hora em hora."
      larga
      onRefresh={atualizar}
      atualizando={sincronizando}
      acoes={
        <>
          <Button variante="primario" icone={RefreshCw} titulo={sincronizando ? 'Atualizando…' : 'Atualizar Radar Agora'} carregando={sincronizando} onPress={atualizar} />
          <Button icone={Plus} titulo="Cadastrar edital" onPress={() => router.push('/radar/novo')} />
        </>
      }
    >
      <Muted className="mb-3">
        {todos.length} concursos · {novos} novos nos últimos 7 dias · dados de {feedGeradoEm ? formatBR(feedGeradoEm.slice(0, 10)) : '—'}
        {origemFeed === 'embarcado' ? ' (base embarcada)' : origemFeed === 'cache' ? ' (cópia offline)' : ''}
        {ultimaSync ? ` · sincronizado ${formatBR(ultimaSync.slice(0, 10))}` : ''}
      </Muted>
      {offline ? (
        <Callout emoji="📴" tom="amarelo">
          <Txt>{ultimoErro}</Txt>
          <Muted className="mt-1">Configure a URL do feed do seu repositório em Configurações para receber as atualizações do robô.</Muted>
        </Callout>
      ) : saude.desatualizado && saude.horas !== null ? (
        <Callout emoji="⏳" tom="amarelo">
          <Txt>O Radar não recebe dados novos {tempoDesde(saude.horas)}.</Txt>
          <Muted className="mt-1">O robô procura editais de hora em hora; um intervalo assim indica falha na coleta. Concursos publicados nesse período podem estar faltando — confira também os sites das bancas.</Muted>
        </Callout>
      ) : null}
      {saude.fontesFora.length ? (
        <Callout emoji="⚠️" tom="amarelo">
          <Txt>
            {saude.fontesFora.join(' e ')} {saude.fontesFora.length > 1 ? 'ficaram indisponíveis' : 'ficou indisponível'} na última coleta.
          </Txt>
          <Muted className="mt-1">Concursos divulgados só nessa fonte podem demorar a aparecer. O robô tenta de novo na próxima hora.</Muted>
        </Callout>
      ) : null}

      {/* Filtros */}
      <View className="mb-3">
        <Segmented<FiltrosRadar['acesso']>
          valor={f.acesso}
          onChange={(v) => set('acesso', v)}
          opcoes={[
            { valor: 'generalista', rotulo: `${ACESSO_LABEL.generalista} (${porAcesso.generalista})` },
            { valor: 'todos', rotulo: `Todos (${porAcesso.todos})` },
            { valor: 'especialista', rotulo: `Especialidades (${porAcesso.especialista})` },
          ]}
        />
      </View>
      <View className="mb-1 flex-row flex-wrap">
        <Chip texto="Todos os estados" ativo={f.uf === 'todos'} onPress={() => set('uf', 'todos')} />
        {UFS.map((uf) => (
          <Chip key={uf} texto={`${UF_NOME[uf]} - ${uf}`} ativo={f.uf === uf} cor={COR_UF[uf]} onPress={() => set('uf', f.uf === uf ? 'todos' : uf)} />
        ))}
      </View>
      <View className="mb-1 flex-row flex-wrap">
        <Chip texto="Todas as categorias" ativo={f.categoria === 'todas'} onPress={() => set('categoria', 'todas')} />
        {CATEGORIAS.map((c: Categoria) => (
          <Chip key={c} texto={CATEGORIA_CURTA[c]} ativo={f.categoria === c} cor={COR_CATEGORIA[c]} onPress={() => set('categoria', f.categoria === c ? 'todas' : c)} />
        ))}
      </View>
      <View className="gap-x-3 md:flex-row">
        <Campo className="md:flex-[2]" rotulo="Buscar cidade, órgão ou cargo" value={f.busca} onChangeText={(t) => set('busca', t)} placeholder="Ex.: Caxias, legista, ESF, GHC" />
        <Seletor
          className="md:flex-1"
          rotulo="Banca"
          valor={f.banca}
          opcoes={[{ valor: 'todas', rotulo: 'Todas as bancas' }, ...bancas.map((b) => ({ valor: b, rotulo: b }))]}
          onChange={(v) => set('banca', v)}
        />
        <Seletor
          className="md:flex-1"
          rotulo="Status"
          valor={f.status}
          opcoes={[{ valor: 'todos', rotulo: 'Todos os status' }, ...STATUS_PESSOAL.map((s) => ({ valor: s, rotulo: STATUS_LABEL[s] }))]}
          onChange={(v) => set('status', v as FiltrosRadar['status'])}
        />
      </View>
      <Row className="mb-4 flex-wrap justify-between gap-2">
        <Segmented<Visao>
          valor={visao}
          onChange={setVisao}
          opcoes={[
            { valor: 'tabela', rotulo: desktop ? '▤ Tabela' : '▤ Lista' },
            { valor: 'kanban', rotulo: '▥ Kanban' },
          ]}
        />
        <Row className="gap-2">
          <Chip texto="Só inscrições abertas" ativo={f.somenteAbertos} onPress={() => set('somenteAbertos', !f.somenteAbertos)} />
          {JSON.stringify(f) !== JSON.stringify(FILTROS_PADRAO) ? <Button pequeno variante="fantasma" titulo="Limpar filtros" onPress={() => setF(FILTROS_PADRAO)} /> : null}
        </Row>
      </Row>

      <Muted className="mb-2">{lista.length} resultado(s)</Muted>

      {lista.length === 0 ? (
        <EmptyState
          emoji="🔎"
          titulo="Nenhum concurso com esses filtros"
          texto={
            f.acesso === 'generalista'
              ? 'Nenhuma vaga para generalista com esses filtros. Veja "Todos", limpe os filtros ou cadastre manualmente um edital que você encontrou.'
              : 'Limpe os filtros, atualize o Radar ou cadastre manualmente um edital que você encontrou.'
          }
          acao={<Button titulo="Cadastrar edital" icone={Plus} onPress={() => router.push('/radar/novo')} />}
        />
      ) : visao === 'kanban' ? (
        <Kanban lista={lista} />
      ) : desktop ? (
        <Tabela lista={lista} />
      ) : (
        lista.map((c) => <ConcursoCard key={c.id} concurso={c} />)
      )}

      {fontes.length ? (
        <Muted className="mt-6">
          Fontes da última coleta: {fontes.map((s) => `${s.nome} ${s.ok ? '✓' : '✗'}`).join(' · ')}. Confirme sempre no edital oficial.
        </Muted>
      ) : null}
    </Screen>
  );
}

function Tabela({ lista }: { lista: ConcursoView[] }) {
  const router = useRouter();
  const COLS = [
    { t: 'Órgão / Cidade', w: 260 },
    { t: 'Categoria', w: 220 },
    { t: 'Cargos', w: 260 },
    { t: 'Vagas', w: 70 },
    { t: 'Remuneração', w: 130 },
    { t: 'Banca', w: 150 },
    { t: 'Inscrições até', w: 115 },
    { t: 'Prova', w: 100 },
    { t: 'Status', w: 160 },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator>
      <View className="rounded-notion border border-line dark:border-line-dark">
        <View className="flex-row border-b border-line bg-side dark:border-line-dark dark:bg-side-dark">
          {COLS.map((c) => (
            <View key={c.t} style={{ width: c.w }} className="px-3 py-2">
              <Text className="text-[12px] font-semibold uppercase tracking-wide text-ink-soft dark:text-ink-dark-soft">{c.t}</Text>
            </View>
          ))}
        </View>
        {lista.map((c) => (
          <Pressable
            key={c.id}
            onPress={() => router.push(`/radar/${encodeURIComponent(c.id)}`)}
            className="flex-row border-b border-line hover:bg-hover dark:border-line-dark dark:hover:bg-hover-dark"
          >
            <View style={{ width: 260 }} className="px-3 py-2">
              <Row className="mb-0.5 gap-1">
                {c.isNew ? <SeloNovo /> : null}
                <Tag texto={c.uf} cor={COR_UF[c.uf]} />
              </Row>
              <Text numberOfLines={2} className="text-[13px] font-medium text-ink dark:text-ink-dark">
                {c.orgao}
              </Text>
              <Muted>{c.cidade}</Muted>
            </View>
            <View style={{ width: 220 }} className="px-3 py-2">
              <Tag texto={CATEGORIA_CURTA[c.categoria]} cor={COR_CATEGORIA[c.categoria]} />
              {c.acesso === 'especialista' ? <Muted className="mt-1">{ACESSO_LABEL.especialista}</Muted> : null}
            </View>
            <View style={{ width: 260 }} className="px-3 py-2">
              <Text numberOfLines={3} className="text-[13px] text-ink dark:text-ink-dark">
                {c.cargos.map((x) => x.nome).join(', ')}
              </Text>
            </View>
            <View style={{ width: 70 }} className="px-3 py-2">
              <Text className="text-[13px] text-ink dark:text-ink-dark">{c.vagasTotal ?? '—'}</Text>
            </View>
            <View style={{ width: 130 }} className="px-3 py-2">
              <Text className="text-[13px] text-ink dark:text-ink-dark">{c.remuneracaoMax ? `até ${moeda(c.remuneracaoMax)}` : '—'}</Text>
            </View>
            <View style={{ width: 150 }} className="px-3 py-2">
              <Text numberOfLines={2} className="text-[13px] text-ink dark:text-ink-dark">
                {c.banca ?? '—'}
              </Text>
            </View>
            <View style={{ width: 115 }} className="px-3 py-2">
              <Text className="text-[13px] text-ink dark:text-ink-dark">{formatBR(c.inscricoes.fim)}</Text>
            </View>
            <View style={{ width: 100 }} className="px-3 py-2">
              <Text className="text-[13px] text-ink dark:text-ink-dark">{formatBR(c.dataProva)}</Text>
            </View>
            <View style={{ width: 160 }} className="px-3 py-2">
              <StatusBotao concurso={c} />
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

function Kanban({ lista }: { lista: ConcursoView[] }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={{ gap: 12, paddingBottom: 8 }}>
      {STATUS_PESSOAL.map((s) => {
        const coluna = lista.filter((c) => c.status === s);
        return (
          <View key={s} className="w-[290px] rounded-notion bg-side p-2 dark:bg-side-dark">
            <Row className="mb-2 justify-between px-1">
              <Tag texto={STATUS_LABEL[s]} cor={COR_STATUS[s]} />
              <Muted>{coluna.length}</Muted>
            </Row>
            {coluna.length ? coluna.map((c) => <ConcursoCard key={c.id} concurso={c} compacto />) : <Muted className="px-1 py-3">Vazio — mova cards pelo selo de status.</Muted>}
          </View>
        );
      })}
    </ScrollView>
  );
}
