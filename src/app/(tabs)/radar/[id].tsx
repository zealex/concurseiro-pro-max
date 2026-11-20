import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, ClipboardList, ExternalLink, Target, Trash2 } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { Linking, Pressable, Text, TextInput, View } from 'react-native';
import { StatusBotao } from '@/components/radar/ConcursoCard';
import { Button, Callout, Campo, Card, EmptyState, Label, Muted, Row, Screen, Section, SeloNovo, Sheet, Tag, Txt, useToast } from '@/components/ui';
import { ACESSO_LABEL, CATEGORIA_LABEL, FONTE_LABEL, UF_NOME } from '@/shared/concursos/schema';
import { definirProvaAlvo, restaurarProvaAlvo, trilhaParaConcurso } from '@/store/acoes';
import { useConcursos, useHoje } from '@/store/selectors';
import { useRadarStore } from '@/store/useRadarStore';
import { useSettingsStore } from '@/store/useSettingsStore';
import { COR_CATEGORIA, COR_UF, useCores } from '@/theme/cores';
import { TRILHA_LABEL } from '@/data/types';
import { formatBR, parseBR, relativo } from '@/utils/dates';
import { moeda } from '@/utils/format';

function Propriedade({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <View className="flex-row border-b border-line py-2 dark:border-line-dark">
      <Text className="w-[150px] text-[13px] text-ink-soft dark:text-ink-dark-soft">{rotulo}</Text>
      <Text className="flex-1 text-[14px] text-ink dark:text-ink-dark">{valor}</Text>
    </View>
  );
}

function abrir(url: string) {
  void Linking.openURL(url).catch(() => {});
}

/** Página do município no IBGE Cidades (história, população, economia — base de "Conhecimentos Gerais"). */
function urlIbgeCidades(uf: string, cidade: string): string {
  const slug = cidade
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `https://cidades.ibge.gov.br/brasil/${uf.toLowerCase()}/${slug}/panorama`;
}

export default function DetalheConcurso() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const toast = useToast();
  const cores = useCores();
  const hoje = useHoje();
  const todos = useConcursos();
  const c = useMemo(() => todos.find((x) => x.id === decodeURIComponent(String(id))), [todos, id]);
  const notasSalvas = useRadarStore((s) => (c ? (s.overlay[c.id]?.notas ?? '') : ''));
  const setNotas = useRadarStore((s) => s.setNotas);
  const removeManual = useRadarStore((s) => s.removeManual);
  const provaAlvo = useSettingsStore((s) => s.provaAlvo);
  const [notas, setNotasLocal] = useState(notasSalvas);
  const [pedirData, setPedirData] = useState(false);
  const [dataTexto, setDataTexto] = useState('');
  const [erroData, setErroData] = useState<string | null>(null);

  if (!c) {
    return (
      <Screen emoji="📡" titulo="Concurso não encontrado">
        <EmptyState titulo="Este concurso não está mais no Radar" texto="Ele pode ter sido removido da base por estar encerrado." acao={<Button titulo="Voltar ao Radar" onPress={() => router.replace('/radar')} />} />
      </Screen>
    );
  }

  const ehAlvo = provaAlvo?.concursoId === c.id;

  const aplicarAlvo = (data: string) => {
    const anterior = definirProvaAlvo(c, data);
    toast(`Prova-alvo: ${formatBR(data)} · foco ajustado para ${TRILHA_LABEL[trilhaParaConcurso(c)]}.`, {
      rotulo: 'Desfazer',
      onPress: () => restaurarProvaAlvo(anterior),
    });
  };

  const clicarAlvo = () => {
    if (c.dataProva) aplicarAlvo(c.dataProva);
    else {
      setDataTexto('');
      setErroData(null);
      setPedirData(true);
    }
  };

  return (
    <Screen emoji="🏛️" titulo={c.orgao} descricao={`${c.cidade} · ${UF_NOME[c.uf]}`}>
      <Pressable onPress={() => (router.canGoBack() ? router.back() : router.replace('/radar'))} className="mb-3 flex-row items-center self-start rounded px-1 py-1 hover:bg-hover dark:hover:bg-hover-dark">
        <ArrowLeft size={16} color={cores.suave} />
        <Muted className="ml-1">Radar Sul</Muted>
      </Pressable>

      <Row className="mb-4 flex-wrap gap-1.5">
        {c.isNew ? <SeloNovo /> : null}
        {c.arquivado ? <Tag texto="Arquivado (saiu do feed)" /> : null}
        <Tag texto={c.uf} cor={COR_UF[c.uf]} />
        <Tag texto={CATEGORIA_LABEL[c.categoria]} cor={COR_CATEGORIA[c.categoria]} />
        <Tag texto={ACESSO_LABEL[c.acesso]} cor={c.acesso === 'generalista' ? 'green' : 'gray'} />
        <Tag texto={c.tipo === 'concurso' ? 'Concurso público' : 'Processo seletivo'} />
        <StatusBotao concurso={c} />
      </Row>

      <View className="mb-5 flex-row flex-wrap gap-2">
        <Button variante={ehAlvo ? 'secundario' : 'primario'} icone={Target} titulo={ehAlvo ? 'Prova-alvo atual ✓' : 'Definir como Prova-Alvo'} onPress={clicarAlvo} />
        {c.editalUrl ? <Button icone={ExternalLink} titulo="Edital / notícia" onPress={() => abrir(c.editalUrl!)} /> : null}
        {c.inscricaoUrl ? <Button icone={ExternalLink} titulo="Página da banca" onPress={() => abrir(c.inscricaoUrl!)} /> : null}
        <Button icone={ClipboardList} titulo="Montar meu edital" onPress={() => router.push(`/edital?banca=${encodeURIComponent(c.banca ?? '')}`)} />
        {/prefeitura|munic[ií]pio/i.test(c.orgao) ? (
          <Button icone={ExternalLink} titulo="Município no IBGE Cidades" onPress={() => abrir(urlIbgeCidades(c.uf, c.cidade))} />
        ) : null}
      </View>

      <Card className="mb-5">
        <Propriedade rotulo="Título" valor={c.titulo} />
        <Propriedade rotulo="Órgão" valor={c.orgao} />
        <Propriedade rotulo="Cidade / UF" valor={`${c.cidade} / ${c.uf}`} />
        <Propriedade rotulo="Banca" valor={c.banca ?? 'Não informada (ver edital)'} />
        <Propriedade rotulo="Vagas" valor={c.vagasTotal !== null ? String(c.vagasTotal) : 'Ver edital'} />
        <Propriedade rotulo="Remuneração" valor={c.remuneracaoMax !== null ? `até ${moeda(c.remuneracaoMax)}` : 'Ver edital'} />
        <Propriedade rotulo="Carga horária" valor={c.cargaHoraria ?? 'Ver edital'} />
        <Propriedade
          rotulo="Inscrições"
          valor={
            c.inscricoes.inicio || c.inscricoes.fim
              ? `${c.inscricoes.inicio ? `${formatBR(c.inscricoes.inicio)} a ` : 'até '}${formatBR(c.inscricoes.fim)}${c.inscricoes.fim ? ` (${relativo(hoje, c.inscricoes.fim)})` : ''}`
              : 'Ver edital'
          }
        />
        <Propriedade rotulo="Data da prova" valor={c.dataProva ? `${formatBR(c.dataProva)} (${relativo(hoje, c.dataProva)}) — segundo a notícia` : 'Ainda não divulgada'} />
        <Propriedade rotulo="Fonte" valor={FONTE_LABEL[c.fonte]} />
        <Propriedade rotulo="Detectado em" valor={formatBR(c.firstSeenAt.slice(0, 10))} />
      </Card>

      <Section titulo={`Cargos médicos (${c.cargos.length})`}>
        {c.cargos.map((cargo) => (
          <View key={cargo.nome} className="border-b border-line py-2 dark:border-line-dark">
            <Txt className="font-medium">{cargo.nome}</Txt>
            <Muted>
              {[
                cargo.vagas !== null ? `${cargo.vagas} vaga(s)` : null,
                cargo.cadastroReserva ? 'cadastro de reserva' : null,
                cargo.remuneracao !== null ? moeda(cargo.remuneracao) : null,
                cargo.cargaHoraria,
              ]
                .filter(Boolean)
                .join(' · ') || 'Detalhes no edital'}
            </Muted>
          </View>
        ))}
      </Section>

      {c.relacionados.length ? (
        <Section titulo="Links relacionados">
          {c.relacionados.map((r) => (
            <Pressable key={r.url} onPress={() => abrir(r.url)} className="flex-row items-center rounded px-1 py-2 hover:bg-hover dark:hover:bg-hover-dark">
              <ExternalLink size={14} color={cores.accent} />
              <Text className="ml-2 flex-1 text-[14px] text-accent">{r.rotulo}</Text>
            </Pressable>
          ))}
        </Section>
      ) : null}

      {c.observacoes ? <Callout emoji="📎">{c.observacoes}</Callout> : null}

      <Section titulo="Minhas notas">
        <TextInput
          value={notas}
          onChangeText={setNotasLocal}
          onBlur={() => setNotas(c.id, notas)}
          multiline
          placeholder="Taxa paga? Local de prova? Conteúdo específico do edital?"
          placeholderTextColor={cores.fraco}
          className="min-h-[90px] rounded-notion border border-line bg-side px-3 py-2 text-[14px] text-ink dark:border-line-dark dark:bg-side-dark dark:text-ink-dark"
        />
      </Section>

      <Callout emoji="⚠️" tom="amarelo">
        <Txt>Dados extraídos automaticamente de fontes públicas. Confirme datas, vagas e requisitos no edital oficial antes de se inscrever.</Txt>
      </Callout>

      {c.manual ? (
        <Button
          variante="perigo"
          icone={Trash2}
          titulo="Excluir cadastro manual"
          onPress={() => {
            removeManual(c.id);
            toast('Concurso removido.');
            router.replace('/radar');
          }}
        />
      ) : null}

      <Sheet visivel={pedirData} onFechar={() => setPedirData(false)} titulo="Data da prova">
        <Muted className="mb-3">A notícia ainda não informa a data da prova. Informe a data prevista (você pode alterar depois em Configurações).</Muted>
        <Campo rotulo="Data (dd/mm/aaaa)" value={dataTexto} onChangeText={setDataTexto} placeholder="20/12/2026" keyboardType="numbers-and-punctuation" erro={erroData} />
        <Button
          variante="primario"
          titulo="Definir como Prova-Alvo"
          onPress={() => {
            const d = parseBR(dataTexto);
            if (!d) return setErroData('Data inválida. Use dd/mm/aaaa.');
            setPedirData(false);
            aplicarAlvo(d);
          }}
        />
        <Label className="mt-3">Efeito</Label>
        <Muted>A contagem regressiva passa a mirar esta prova e o cronograma muda o foco para {TRILHA_LABEL[trilhaParaConcurso(c)]}.</Muted>
      </Sheet>
    </Screen>
  );
}
