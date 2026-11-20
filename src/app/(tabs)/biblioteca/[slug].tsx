import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, ExternalLink } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import { Button, Callout, Card, Checkbox, DataTable, EmptyState, H3, Label, Muted, Row, Screen, Section, Tag, Toggle, Txt } from '@/components/ui';
import { PaginaDisciplina } from '@/components/biblioteca/PaginaDisciplina';
import { PaginaEditais } from '@/components/biblioteca/PaginaEditais';
import { PaginaGuia } from '@/components/biblioteca/PaginaGuia';
import { PaginaResumo } from '@/components/biblioteca/PaginaResumo';
import { BANCAS } from '@/data/bancas';
import { CARREIRAS_GENERALISTA } from '@/data/carreiras';
import { getCheatSheet } from '@/data/cheatSheets';
import { getChecklist, totalItens } from '@/data/checklistsLeiSeca';
import { BIBLIOGRAFIA, CURSINHOS } from '@/data/cursinhos';
import { FILTROS_BANCOS, FONTES_OFICIAIS } from '@/data/fontesOficiais';
import { MESOCICLOS, PLANO_12_SEMANAS, minutosDaSemana } from '@/data/plano12Semanas';
import { EIXO_LABEL, EIXOS, TRILHA_CURTA, TRILHA_LABEL, TRILHAS } from '@/data/types';
import { useHoje } from '@/store/selectors';
import { useChecklistStore } from '@/store/useChecklistStore';
import { COR_EIXO, useCores } from '@/theme/cores';
import { horasMinutos } from '@/utils/format';

function abrir(url: string) {
  void Linking.openURL(url).catch(() => {});
}

function Voltar() {
  const router = useRouter();
  const cores = useCores();
  return (
    <Pressable
      onPress={() => (router.canGoBack() ? router.back() : router.replace('/biblioteca'))}
      className="mb-3 flex-row items-center self-start rounded px-1 py-1 hover:bg-hover dark:hover:bg-hover-dark"
    >
      <ArrowLeft size={16} color={cores.suave} />
      <Muted className="ml-1">Biblioteca</Muted>
    </Pressable>
  );
}

function Link({ url, rotulo }: { url: string; rotulo?: string }) {
  const cores = useCores();
  return (
    <Pressable onPress={() => abrir(url)} className="mt-1 flex-row items-center self-start" accessibilityRole="link">
      <ExternalLink size={13} color={cores.accent} />
      <Text numberOfLines={1} className="ml-1 text-[13px] text-accent">
        {rotulo ?? url.replace(/^https?:\/\//, '').slice(0, 60)}
      </Text>
    </Pressable>
  );
}

export default function PaginaBiblioteca() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const s = String(slug ?? '');

  if (s.startsWith('checklist-')) return <PaginaChecklist id={s.slice('checklist-'.length)} />;
  if (s.startsWith('cheat-')) return <PaginaCheat id={s.slice('cheat-'.length)} />;
  if (s.startsWith('disciplina-')) return <PaginaDisciplina disciplinaId={s.slice('disciplina-'.length)} />;
  if (s.startsWith('resumo-')) return <PaginaResumo temaId={s.slice('resumo-'.length)} />;
  if (s.startsWith('guia-')) return <PaginaGuia id={s.slice('guia-'.length)} />;

  const paginas: Record<string, () => ReactNode> = {
    editais: PaginaEditais,
    'concursos-generalista': PaginaCarreiras,
    cursinhos: PaginaCursinhos,
    bibliografia: PaginaBibliografia,
    bancas: PaginaBancas,
    fontes: PaginaFontes,
    filtros: PaginaFiltros,
    plano: PaginaPlano,
  };
  const Pagina = paginas[s];
  if (!Pagina) {
    return (
      <Screen emoji="📚" titulo="Página não encontrada">
        <Voltar />
        <EmptyState titulo="Esta página não existe" />
      </Screen>
    );
  }
  return <Pagina />;
}

function PaginaCarreiras() {
  return (
    <Screen
      emoji="🩺"
      titulo="Concursos para o generalista"
      descricao="O que o médico recém-formado (graduação + CRM, sem residência) pode prestar nas áreas de perícia, Medicina Legal e clínica — e qual trilha do plano usar."
    >
      <Voltar />
      <Callout emoji="🎯" tom="azul">
        <Txt className="font-semibold">Estratégia do app</Txt>
        <Muted>A trilha Generalista Completo prepara para as três portas ao mesmo tempo. Quando um edital sair, defina-o como prova-alvo no Radar: o foco muda sozinho para Perícia, Legista ou Clínico.</Muted>
      </Callout>
      {CARREIRAS_GENERALISTA.map((c) => (
        <Toggle
          key={c.id}
          inicialAberto={c.acessivel && c.id !== 'perito-rpps'}
          titulo={
            <Row className="flex-wrap gap-2">
              <Txt className="font-semibold">{c.cargo}</Txt>
              {c.acessivel ? <Tag texto="Aceita generalista" cor="green" /> : <Tag texto="Exige especialização" cor="orange" />}
            </Row>
          }
          subtitulo={c.orgaos}
        >
          <Label className="mt-1">Requisito</Label>
          <Txt className="text-[14px]">{c.requisito}</Txt>
          <Label className="mt-2">Prova</Label>
          <Txt className="text-[14px]">{c.prova}</Txt>
          <Label className="mt-2">O que cai</Label>
          {c.conteudo.map((p) => (
            <Txt key={p} className="text-[14px]">
              • {p}
            </Txt>
          ))}
          <Callout emoji="🗓️">{c.historico}</Callout>
          <Muted>Trilha do plano: {TRILHA_LABEL[c.trilha]}</Muted>
        </Toggle>
      ))}
      <Callout emoji="⚠️" tom="amarelo">
        <Txt>Requisitos mudam entre editais. Antes de se inscrever, confirme no edital oficial a exigência de especialização, CNH, idade e etapas físicas.</Txt>
      </Callout>
    </Screen>
  );
}

function PaginaCursinhos() {
  return (
    <Screen emoji="🎓" titulo="Cursinhos e kit para 90 dias" descricao="Preços mudam toda semana; o guia mostra como avaliar custo-benefício para uma janela de 90 dias.">
      <Voltar />
      <Callout emoji="🧰" tom="azul">
        <Txt className="font-semibold">Kit recomendado</Txt>
        <Muted>1 curso principal (pacote do edital-alvo ou assinatura curta) + lei seca oficial (Lei 8.213, LOAS, Lei 8.112, NRs, CPP/CP) + 1 banco de questões com filtros + manuais de perícia do INSS + França/Hércules por consulta + protocolos gratuitos do MS.</Muted>
        <Muted className="mt-1">Regra de ouro: se uma ferramenta não aparece no cronograma desta semana, você não precisa dela agora.</Muted>
      </Callout>
      {CURSINHOS.map((c) => (
        <Toggle
          key={c.id}
          inicialAberto={c.recomendado}
          titulo={
            <Row className="flex-wrap gap-2">
              <Txt className="font-semibold">{c.nome}</Txt>
              {c.recomendado ? <Tag texto="Recomendado" cor="green" /> : <Tag texto="Opcional" />}
            </Row>
          }
          subtitulo={c.formato}
        >
          <Label className="mt-1">Pontos fortes</Label>
          {c.pontosFortes.map((p) => (
            <Txt key={p} className="text-[14px]">
              • {p}
            </Txt>
          ))}
          <Label className="mt-2">Limitações</Label>
          {c.limitacoes.map((p) => (
            <Txt key={p} className="text-[14px]">
              • {p}
            </Txt>
          ))}
          <Callout emoji="⏱️">{c.veredito90Dias}</Callout>
        </Toggle>
      ))}
    </Screen>
  );
}

function PaginaBibliografia() {
  return (
    <Screen emoji="📖" titulo="Bibliografia" descricao="As bancas cobram literalmente classificações e sinais dos autores de referência.">
      <Voltar />
      {EIXOS.filter((eixo) => BIBLIOGRAFIA.some((l) => l.eixo === eixo)).map((eixo) => (
        <Section key={eixo} titulo={EIXO_LABEL[eixo]}>
          {BIBLIOGRAFIA.filter((l) => l.eixo === eixo).map((l) => (
            <Card key={l.id} className="mb-2">
              <Row className="flex-wrap gap-2">
                <Txt className="font-semibold">{l.titulo}</Txt>
                {l.gratuito ? <Tag texto="Gratuito" cor="green" /> : null}
              </Row>
              <Muted>{l.autor}</Muted>
              <Txt className="mt-1 text-[14px]">{l.porQue}</Txt>
              <Muted className="mt-1">Uso em 90 dias: {l.uso90Dias}</Muted>
              {l.url ? <Link url={l.url} /> : null}
            </Card>
          ))}
        </Section>
      ))}
    </Screen>
  );
}

function PaginaBancas() {
  return (
    <Screen emoji="🏛️" titulo="Perfil das bancas" descricao="Use para escolher como treinar. Confirme sempre a banca no edital do concurso-alvo.">
      <Voltar />
      <Section titulo="Bancas do Sul">
        {BANCAS.filter((b) => b.sul).map((b) => (
          <Card key={b.id} className="mb-2">
            <Txt className="font-semibold">{b.nome}</Txt>
            <Muted>{b.regiao}</Muted>
            <Txt className="mt-1 text-[14px]">{b.estilo}</Txt>
            <Muted className="mt-1">Como treinar: {b.comoTreinar}</Muted>
            {b.basicas ? <Muted className="mt-1">📚 Básicas: {b.basicas}</Muted> : null}
          </Card>
        ))}
      </Section>
      <Section titulo="Bancas nacionais">
        {BANCAS.filter((b) => !b.sul).map((b) => (
          <Card key={b.id} className="mb-2">
            <Txt className="font-semibold">{b.nome}</Txt>
            <Muted>{b.regiao}</Muted>
            <Txt className="mt-1 text-[14px]">{b.estilo}</Txt>
            <Muted className="mt-1">Como treinar: {b.comoTreinar}</Muted>
            {b.basicas ? <Muted className="mt-1">📚 Básicas: {b.basicas}</Muted> : null}
          </Card>
        ))}
      </Section>
      <Callout emoji="🪤" tom="amarelo">
        <Txt className="font-semibold">Pegadinhas recorrentes</Txt>
        <Muted>• Perícia: doença ≠ incapacidade; o que define direito e preexistência é a DII, não a DID.</Muted>
        <Muted>• Lei 8.213: carência de 12 contribuições, dispensada em acidente de qualquer natureza e nas doenças do Art. 151.</Muted>
        <Muted>• BPC: impedimento de longo prazo = mínimo de 2 anos; renda per capita ≤ 1/4 do salário-mínimo; sem 13º.</Muted>
        <Muted>• NR-07: retorno ≥ 30 dias; demissional até 10 dias; dispensa &lt; 135 d (GR 1–2) / &lt; 90 d (GR 3–4).</Muted>
        <Muted>• NR-15 × NR-16: 10/20/40% × 30%, sem cumulação.</Muted>
        <Muted>• Lei 8.213: doença profissional × do trabalho e as exclusões do §1º do Art. 20.</Muted>
        <Muted>• CP 129: "mais de 30 dias" (grave) × "permanente" (gravíssima).</Muted>
        <Muted>• Esganadura é sempre homicida; enforcamento tem sulco oblíquo e descontínuo.</Muted>
      </Callout>
    </Screen>
  );
}

function PaginaFontes() {
  return (
    <Screen emoji="🔗" titulo="Fontes oficiais gratuitas" descricao="Não pague por PDF de NR: os textos oficiais são gratuitos e sempre atualizados.">
      <Voltar />
      {FONTES_OFICIAIS.map((f) => (
        <Card key={f.id} className="mb-2">
          <Txt className="font-semibold">{f.nome}</Txt>
          <Txt className="mt-1 text-[14px]">{f.oQueTem}</Txt>
          <Muted className="mt-1">Como usar: {f.comoUsar}</Muted>
          <Link url={f.url} />
        </Card>
      ))}
    </Screen>
  );
}

function PaginaFiltros() {
  return (
    <Screen emoji="🔎" titulo="Filtros nos bancos de questões" descricao="Configure antes da Semana 1 — o diagnóstico depende deles.">
      <Voltar />
      {FILTROS_BANCOS.map((f) => (
        <Section key={f.plataforma} titulo={f.plataforma}>
          <Card>
            {f.passos.map((p, i) => (
              <Row key={i} className="mb-1.5 items-start">
                <Text className="mr-2 w-5 text-[14px] font-semibold text-ink-soft dark:text-ink-dark-soft">{i + 1}.</Text>
                <Txt className="flex-1 text-[14px]">{p}</Txt>
              </Row>
            ))}
            <Link url={f.url} />
          </Card>
        </Section>
      ))}
      <Callout emoji="📏">
        <Txt>Diagnóstico: 40 questões mistas sem consulta. Baterias: 20–30 por tema com correção imediata. Simulados do Mês 3: tempo real, sem pausa, na banca-alvo.</Txt>
      </Callout>
    </Screen>
  );
}

function PaginaPlano() {
  return (
    <Screen emoji="🗺️" titulo="Plano de 90 dias" descricao="Resumo do documento docs/plano-estudos-90-dias.md — o Cronograma executa exatamente este plano.">
      <Voltar />
      {MESOCICLOS.map((m) => (
        <Callout key={m.id} emoji={m.id === 1 ? '🧱' : m.id === 2 ? '🔬' : '🏁'} tom={m.id === 1 ? 'azul' : m.id === 2 ? 'amarelo' : 'verde'}>
          <Txt className="font-semibold">{m.titulo}</Txt>
          <Muted>{m.objetivo}</Muted>
        </Callout>
      ))}
      <Section titulo="Perfis de carga">
        <Card>
          <Txt className="font-semibold">☀️ Dia Padrão — 3 h a 4 h líquidas</Txt>
          <Muted>Revisões devidas → teoria do eixo A → teoria do eixo B/Tronco → lei seca/NR → questões + caderno de erros → redistribuídas (até +1 h).</Muted>
          <Txt className="mt-3 font-semibold">⚡ Modo Plantão — 45 a 60 min</Txt>
          <Muted>Revisões devidas + versões curtas de questões e lei seca. A teoria do dia vai para a fila de redistribuição.</Muted>
          <Txt className="mt-3 font-semibold">⏩ Compressão por prova-alvo</Txt>
          <Muted>Se a prova cai antes de 12 semanas: as 4 últimas semanas viram reta final e as anteriores recebem só os blocos essenciais.</Muted>
        </Card>
      </Section>
      <Section titulo="Semanas">
        {PLANO_12_SEMANAS.map((sem) => (
          <Toggle key={sem.semana} titulo={`Semana ${sem.semana} — ${sem.titulo}`} subtitulo={`Meta: ${sem.metaQuestoes} questões · ${sem.bancasFoco.join(', ')}`}>
            <Txt className="mb-2 text-[14px]">{sem.objetivo}</Txt>
            <Muted className="mb-2">Carga: {TRILHAS.map((t) => `${TRILHA_CURTA[t]} ${horasMinutos(minutosDaSemana(sem.semana, t))}`).join(' · ')}</Muted>
            {sem.blocos.map((b) => (
              <Row key={b.id} className="mb-1 items-start">
                <Text className="mr-1.5 text-[13px]">{b.essencial ? '★' : '·'}</Text>
                <View className="flex-1">
                  <Text className="text-[13px] text-ink dark:text-ink-dark">{b.titulo}</Text>
                  <Row className="gap-1">
                    <Tag texto={EIXO_LABEL[b.eixo]} cor={COR_EIXO[b.eixo]} />
                    <Muted>{b.minutos} min</Muted>
                  </Row>
                </View>
              </Row>
            ))}
          </Toggle>
        ))}
      </Section>
    </Screen>
  );
}

function PaginaChecklist({ id }: { id: string }) {
  const c = getChecklist(id);
  const marcados = useChecklistStore((s) => s.marcados);
  const toggle = useChecklistStore((s) => s.toggle);
  const limpar = useChecklistStore((s) => s.limparNorma);
  const hoje = useHoje();
  if (!c) {
    return (
      <Screen emoji="☑️" titulo="Checklist não encontrado">
        <Voltar />
      </Screen>
    );
  }
  const ids = c.secoes.flatMap((s) => s.itens.map((i) => i.id));
  const feitos = ids.filter((i) => marcados[i]).length;
  return (
    <Screen emoji="☑️" titulo={`${c.sigla} — lei seca`} descricao={c.titulo}>
      <Voltar />
      <Callout emoji="📜">
        <Txt>Leia no texto oficial e marque cada item quando conseguir explicá-lo sem olhar.</Txt>
        <Muted className="mt-1">Origem: {c.origem}</Muted>
        <Link url={c.url} rotulo="Abrir texto oficial" />
      </Callout>
      <Muted className="mb-3">
        {feitos}/{totalItens(c)} itens lidos
      </Muted>
      {c.secoes.map((s) => (
        <Section key={s.titulo} titulo={s.titulo}>
          {s.itens.map((i) => (
            <View key={i.id} className="mb-2 flex-row items-start border-b border-line pb-2 dark:border-line-dark">
              <View className="pr-3 pt-1">
                <Checkbox marcado={!!marcados[i.id]} onChange={() => toggle(i.id, hoje)} rotulo={i.referencia} />
              </View>
              <View className="flex-1">
                <Text className="text-[13px] font-semibold text-ink-soft dark:text-ink-dark-soft">{i.referencia}</Text>
                <Txt className={`text-[14px] ${marcados[i.id] ? 'text-ink-soft line-through dark:text-ink-dark-soft' : ''}`}>{i.texto}</Txt>
                {i.dica ? <Text className="mt-1 text-[13px] text-amber-700 dark:text-amber-300">💡 {i.dica}</Text> : null}
              </View>
            </View>
          ))}
        </Section>
      ))}
      {feitos ? <Button variante="fantasma" titulo="Desmarcar todos (nova rodada de leitura)" onPress={() => limpar(ids)} /> : null}
    </Screen>
  );
}

function PaginaCheat({ id }: { id: string }) {
  const c = getCheatSheet(id);
  if (!c) {
    return (
      <Screen emoji="📄" titulo="Cheat sheet não encontrado">
        <Voltar />
      </Screen>
    );
  }
  return (
    <Screen emoji="📄" titulo={c.titulo} descricao={EIXO_LABEL[c.eixo]} larga>
      <Voltar />
      <Callout emoji="🧭">{c.resumo}</Callout>
      {c.tabelas.map((t, i) => (
        <View key={i}>
          {t.titulo ? <H3 className="mb-2">{t.titulo}</H3> : null}
          <DataTable colunas={t.colunas} linhas={t.linhas} nota={t.nota} />
        </View>
      ))}
      <Callout emoji="🪤" tom="amarelo">
        <Txt className="font-semibold">Pegadinhas</Txt>
        {c.pegadinhas.map((p) => (
          <Muted key={p}>• {p}</Muted>
        ))}
      </Callout>
      <Muted>Fontes: {c.fontes.join(' · ')}</Muted>
    </Screen>
  );
}
