import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Callout, Campo, Muted, Row, Screen, Segmented, Seletor, useToast } from '@/components/ui';
import { NOMES_BANCAS } from '@/data/bancas';
import { gerarIdManual } from '@/shared/concursos/id';
import { CATEGORIA_LABEL, CATEGORIAS, ConcursoSchema, UF_NOME, UFS, type Categoria, type UF } from '@/shared/concursos/schema';
import { useRadarStore } from '@/store/useRadarStore';
import { parseBR, todayKey } from '@/utils/dates';
import { gerarId } from '@/utils/id';

const TAG_DA_CATEGORIA = {
  'medicina-do-trabalho': { tag: 'medicina-do-trabalho', subcategoria: null },
  'medico-legista': { tag: 'medico-legista', subcategoria: null },
  'pericia-medica': { tag: 'pericia-medica', subcategoria: null },
  'clinico-esf-plantonista': { tag: 'medicina-geral-especialidades', subcategoria: 'clinico-esf-plantonista' },
  especialidades: { tag: 'medicina-geral-especialidades', subcategoria: 'especialidades' },
} as const;

function numero(t: string): number | null {
  const n = Number(t.replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, ''));
  return t.trim() && Number.isFinite(n) ? n : null;
}

export default function NovoConcurso() {
  const router = useRouter();
  const toast = useToast();
  const addManual = useRadarStore((s) => s.addManual);
  const [uf, setUf] = useState<UF>('PR');
  const [cidade, setCidade] = useState('');
  const [orgao, setOrgao] = useState('');
  const [cargos, setCargos] = useState('');
  const [categoria, setCategoria] = useState<Categoria>('clinico-esf-plantonista');
  const [tipo, setTipo] = useState<'concurso' | 'processo-seletivo'>('concurso');
  const [banca, setBanca] = useState<string>('');
  const [vagas, setVagas] = useState('');
  const [remuneracao, setRemuneracao] = useState('');
  const [carga, setCarga] = useState('');
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [prova, setProva] = useState('');
  const [link, setLink] = useState('');
  const [erros, setErros] = useState<Record<string, string>>({});

  const salvar = () => {
    const e: Record<string, string> = {};
    if (cidade.trim().length < 2) e.cidade = 'Informe a cidade.';
    if (orgao.trim().length < 2) e.orgao = 'Informe o órgão.';
    if (!cargos.trim()) e.cargos = 'Informe ao menos um cargo.';
    const datas = { inicio: inicio ? parseBR(inicio) : null, fim: fim ? parseBR(fim) : null, prova: prova ? parseBR(prova) : null };
    if (inicio && !datas.inicio) e.inicio = 'Use dd/mm/aaaa.';
    if (fim && !datas.fim) e.fim = 'Use dd/mm/aaaa.';
    if (prova && !datas.prova) e.prova = 'Use dd/mm/aaaa.';
    const url = link.trim();
    if (url && !/^https?:\/\/\S+\.\S+/.test(url)) e.link = 'Link deve começar com http:// ou https://';
    setErros(e);
    if (Object.keys(e).length) return;

    const agora = new Date().toISOString();
    const ano = Number((datas.fim ?? datas.prova ?? todayKey()).slice(0, 4));
    const base = TAG_DA_CATEGORIA[categoria];
    const listaCargos = cargos
      .split(/[,;\n]/)
      .map((n) => n.trim())
      .filter(Boolean)
      .map((nome) => ({
        nome,
        tag: base.tag,
        subcategoria: base.subcategoria,
        vagas: null,
        cadastroReserva: false,
        remuneracao: null,
        cargaHoraria: null,
      }));
    const r = ConcursoSchema.safeParse({
      id: gerarIdManual({ uf, cidade, orgao, ano }, gerarId('m')),
      titulo: `${orgao.trim()} — ${cidade.trim()}/${uf}`,
      orgao: orgao.trim(),
      cidade: cidade.trim(),
      uf,
      tipo,
      tag: base.tag,
      subcategoria: base.subcategoria,
      cargos: listaCargos,
      vagasTotal: numero(vagas),
      remuneracaoMax: numero(remuneracao),
      cargaHoraria: carga.trim() || null,
      banca: banca || null,
      inscricoes: { inicio: datas.inicio, fim: datas.fim },
      dataProva: datas.prova,
      editalUrl: url || null,
      inscricaoUrl: null,
      relacionados: [],
      fonte: 'manual',
      fonteUrl: url || 'https://www.gov.br/',
      ano,
      firstSeenAt: agora,
      lastSeenAt: agora,
      isNew: false,
      observacoes: null,
    });
    if (!r.success) {
      toast('Revise os campos: ' + (r.error.issues[0]?.message ?? 'dados inválidos'));
      return;
    }
    addManual(r.data);
    toast('Edital cadastrado no seu Radar.');
    router.replace(`/radar/${encodeURIComponent(r.data.id)}`);
  };

  return (
    <Screen emoji="➕" titulo="Cadastrar edital" descricao="Adicione um concurso ou processo seletivo médico que você encontrou (diário oficial, site da prefeitura, indicação).">
      <Callout emoji="🔒">Cadastros manuais ficam só no seu dispositivo e nunca são sobrescritos pelas atualizações do robô.</Callout>
      <Muted className="mb-1">Estado</Muted>
      <View className="mb-3">
        <Segmented valor={uf} onChange={setUf} opcoes={UFS.map((u) => ({ valor: u, rotulo: `${u} · ${UF_NOME[u]}` }))} />
      </View>
      <Row className="flex-wrap gap-x-3">
        <Campo className="min-w-[220px] flex-1" rotulo="Cidade" value={cidade} onChangeText={setCidade} placeholder="Ex.: Chapecó" erro={erros.cidade} />
        <Campo className="min-w-[220px] flex-1" rotulo="Órgão" value={orgao} onChangeText={setOrgao} placeholder="Ex.: Prefeitura de Chapecó" erro={erros.orgao} />
      </Row>
      <Campo rotulo="Cargos médicos (separados por vírgula)" value={cargos} onChangeText={setCargos} placeholder="Ex.: Médico ESF, Médico do Trabalho" erro={erros.cargos} multiline />
      <Seletor<Categoria> rotulo="Categoria" valor={categoria} onChange={setCategoria} opcoes={CATEGORIAS.map((c) => ({ valor: c, rotulo: CATEGORIA_LABEL[c] }))} />
      <Muted className="mb-1">Tipo</Muted>
      <View className="mb-3">
        <Segmented
          valor={tipo}
          onChange={setTipo}
          opcoes={[
            { valor: 'concurso', rotulo: 'Concurso público' },
            { valor: 'processo-seletivo', rotulo: 'Processo seletivo' },
          ]}
        />
      </View>
      <Seletor rotulo="Banca" valor={banca || null} onChange={setBanca} opcoes={NOMES_BANCAS.map((b) => ({ valor: b, rotulo: b }))} placeholder="Selecionar banca (opcional)" />
      <Row className="flex-wrap gap-x-3">
        <Campo className="min-w-[140px] flex-1" rotulo="Vagas" value={vagas} onChangeText={setVagas} keyboardType="number-pad" placeholder="Ex.: 3" />
        <Campo className="min-w-[160px] flex-1" rotulo="Remuneração (R$)" value={remuneracao} onChangeText={setRemuneracao} keyboardType="decimal-pad" placeholder="Ex.: 15.000,00" />
        <Campo className="min-w-[160px] flex-1" rotulo="Carga horária" value={carga} onChangeText={setCarga} placeholder="Ex.: 40h semanais" />
      </Row>
      <Row className="flex-wrap gap-x-3">
        <Campo className="min-w-[150px] flex-1" rotulo="Inscrições de" value={inicio} onChangeText={setInicio} placeholder="dd/mm/aaaa" erro={erros.inicio} />
        <Campo className="min-w-[150px] flex-1" rotulo="Inscrições até" value={fim} onChangeText={setFim} placeholder="dd/mm/aaaa" erro={erros.fim} />
        <Campo className="min-w-[150px] flex-1" rotulo="Data da prova" value={prova} onChangeText={setProva} placeholder="dd/mm/aaaa" erro={erros.prova} />
      </Row>
      <Campo rotulo="Link do edital / inscrição" value={link} onChangeText={setLink} autoCapitalize="none" keyboardType="url" placeholder="https://" erro={erros.link} />
      <Row className="mt-2 gap-2">
        <Button variante="primario" titulo="Salvar no Radar" onPress={salvar} />
        <Button variante="fantasma" titulo="Cancelar" onPress={() => router.back()} />
      </Row>
    </Screen>
  );
}
