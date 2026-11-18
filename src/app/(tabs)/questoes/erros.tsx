import { useRouter } from 'expo-router';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { selecaoInicial, TemaPicker, type SelecaoTema } from '@/components/questoes/TemaPicker';
import { Button, Campo, Card, Checkbox, EmptyState, IconButton, Muted, ProgressBar, Row, Screen, Section, Segmented, Seletor, Sheet, Tag, Txt, useToast } from '@/components/ui';
import { getTema } from '@/data/eixos';
import { NOMES_BANCAS } from '@/data/bancas';
import { EIXO_LABEL } from '@/data/types';
import { registrarErro } from '@/store/acoes';
import { useHoje } from '@/store/selectors';
import { useQuestoesStore } from '@/store/useQuestoesStore';
import { useSettingsStore } from '@/store/useSettingsStore';
import { COR_EIXO, useCores } from '@/theme/cores';
import { formatBR } from '@/utils/dates';

type Filtro = 'pendentes' | 'resolvidos' | 'todos';

export default function CadernoDeErros() {
  const router = useRouter();
  const toast = useToast();
  const cores = useCores();
  const hoje = useHoje();
  const erros = useQuestoesStore((s) => s.erros);
  const toggleResolvido = useQuestoesStore((s) => s.toggleResolvido);
  const removeErro = useQuestoesStore((s) => s.removeErro);
  const bancaAlvo = useSettingsStore((s) => s.bancaAlvo);
  const [filtro, setFiltro] = useState<Filtro>('pendentes');
  const [novo, setNovo] = useState(false);
  const [sel, setSel] = useState<SelecaoTema>(selecaoInicial());
  const [banca, setBanca] = useState(bancaAlvo);
  const [enunciado, setEnunciado] = useState('');
  const [porque, setPorque] = useState('');
  const [regra, setRegra] = useState('');
  const [fonte, setFonte] = useState('');

  const resolvidos = erros.filter((e) => e.resolvido).length;
  const lista = useMemo(() => erros.filter((e) => (filtro === 'todos' ? true : filtro === 'resolvidos' ? e.resolvido : !e.resolvido)), [erros, filtro]);

  const salvar = () => {
    if (!enunciado.trim() && !regra.trim()) {
      toast('Descreva o erro ou a regra correta.');
      return;
    }
    registrarErro({
      data: hoje,
      eixo: sel.eixo,
      disciplinaId: sel.disciplinaId,
      temaId: sel.temaId,
      banca: banca || null,
      enunciado: enunciado.trim(),
      porqueErrei: porque.trim(),
      regraCorreta: regra.trim(),
      fonte: fonte.trim(),
    });
    setEnunciado('');
    setPorque('');
    setRegra('');
    setFonte('');
    setNovo(false);
    toast('Erro registrado — revisão D1 agendada para amanhã.');
  };

  return (
    <Screen
      emoji="📕"
      titulo="Caderno de Erros"
      descricao="Registre só os erros que ensinam algo. Cada um ganha um ciclo D1/D7/D15/D30; a meta é zerar o caderno até a Semana 12."
      acoes={<Button variante="primario" icone={Plus} titulo="Novo erro" onPress={() => setNovo(true)} />}
    >
      <Pressable onPress={() => router.back()} className="mb-3 flex-row items-center self-start rounded px-1 py-1 hover:bg-hover dark:hover:bg-hover-dark">
        <ArrowLeft size={16} color={cores.suave} />
        <Muted className="ml-1">Central de Questões</Muted>
      </Pressable>

      <Card className="mb-4">
        <Row className="mb-1 justify-between">
          <Txt className="font-medium">Zeramento</Txt>
          <Muted>
            {resolvidos}/{erros.length} resolvidos
          </Muted>
        </Row>
        <ProgressBar valor={erros.length ? resolvidos / erros.length : 0} cor="bg-emerald-500" />
        <Muted className="mt-2">Metas: 25% na Semana 9 · 50% na 10 · 75% na 11 · 100% na 12.</Muted>
      </Card>

      <View className="mb-4">
        <Segmented<Filtro>
          valor={filtro}
          onChange={setFiltro}
          opcoes={[
            { valor: 'pendentes', rotulo: `Pendentes (${erros.length - resolvidos})` },
            { valor: 'resolvidos', rotulo: `Resolvidos (${resolvidos})` },
            { valor: 'todos', rotulo: 'Todos' },
          ]}
        />
      </View>

      <Section titulo="Erros">
        {lista.length === 0 ? (
          <EmptyState emoji="📕" titulo={filtro === 'pendentes' ? 'Nada pendente' : 'Nenhum erro aqui'} texto="Ao corrigir uma bateria, lance os erros relevantes com o botão “Novo erro”." />
        ) : (
          lista.map((e) => (
            <Card key={e.id} className="mb-2">
              <Row className="items-start">
                <View className="pr-3 pt-1">
                  <Checkbox marcado={e.resolvido} onChange={() => toggleResolvido(e.id, hoje)} rotulo="Marcar como resolvido" />
                </View>
                <View className="flex-1">
                  <Row className="mb-1 flex-wrap gap-1.5">
                    <Tag texto={EIXO_LABEL[e.eixo]} cor={COR_EIXO[e.eixo]} />
                    {e.temaId ? <Tag texto={getTema(e.temaId)?.tema.nome ?? e.temaId} /> : null}
                    {e.banca ? <Tag texto={e.banca} cor="gray" /> : null}
                  </Row>
                  {e.enunciado ? <Txt className={e.resolvido ? 'line-through' : ''}>{e.enunciado}</Txt> : null}
                  {e.porqueErrei ? (
                    <Text className="mt-1 text-[13px] text-red-700 dark:text-red-300">❌ Por que errei: {e.porqueErrei}</Text>
                  ) : null}
                  {e.regraCorreta ? (
                    <Text className="mt-1 text-[13px] text-emerald-700 dark:text-emerald-300">✅ Regra correta: {e.regraCorreta}</Text>
                  ) : null}
                  <Muted className="mt-1">
                    {formatBR(e.data)}
                    {e.fonte ? ` · ${e.fonte}` : ''}
                    {e.resolvidoEm ? ` · resolvido em ${formatBR(e.resolvidoEm)}` : ''}
                  </Muted>
                </View>
                <IconButton icone={Trash2} rotulo="Excluir erro" onPress={() => removeErro(e.id)} />
              </Row>
            </Card>
          ))
        )}
      </Section>

      <Sheet visivel={novo} onFechar={() => setNovo(false)} titulo="Novo erro">
        <TemaPicker valor={sel} onChange={setSel} />
        <Seletor rotulo="Banca" valor={banca || null} onChange={setBanca} opcoes={NOMES_BANCAS.map((b) => ({ valor: b, rotulo: b }))} placeholder="Banca (opcional)" />
        <Campo rotulo="Resumo do enunciado" value={enunciado} onChangeText={setEnunciado} multiline placeholder="Ex.: prazo do exame demissional na NR-07" />
        <Campo rotulo="Por que errei" value={porque} onChangeText={setPorque} multiline placeholder="Ex.: confundi 10 dias com 135 dias" />
        <Campo rotulo="Regra correta" value={regra} onChangeText={setRegra} multiline placeholder="Ex.: até 10 dias do término; dispensa se último exame < 135 d (GR 1–2) / < 90 d (GR 3–4)" />
        <Campo rotulo="Fonte" value={fonte} onChangeText={setFonte} placeholder="Ex.: NR-07, FUNDATEC 2025, Q1234" />
        <Button variante="primario" titulo="Salvar no caderno" onPress={salvar} />
      </Sheet>
    </Screen>
  );
}
