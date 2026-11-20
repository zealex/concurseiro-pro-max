import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { Download, RefreshCw, Upload } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Callout, Campo, Card, Label, Muted, Row, Screen, Section, Segmented, Seletor, Sheet, Txt, useToast } from '@/components/ui';
import { NOMES_BANCAS } from '@/data/bancas';
import { TRILHA_LABEL, TRILHAS, type Trilha } from '@/data/types';
import { aplicarBackup, escolherBackup, exportarBackup, resetarTudo, type Backup } from '@/services/backupService';
import { inicializarRadar, sincronizarRadar, urlsDoFeed } from '@/services/concursosTrackerService';
import { reiniciarPlanoHoje } from '@/store/acoes';
import { useRadarStore } from '@/store/useRadarStore';
import { useSettingsStore, type PreferenciaTema } from '@/store/useSettingsStore';
import { formatBR, parseBR } from '@/utils/dates';
import { horasMinutos } from '@/utils/format';
import { OPCOES_ORCAMENTO } from '@/utils/scheduler';

export default function Configuracoes() {
  const router = useRouter();
  const toast = useToast();
  const s = useSettingsStore();
  const sincronizando = useRadarStore((r) => r.sincronizando);
  const urlFeed = useRadarStore((r) => r.urlFeed);
  const [inicioTexto, setInicioTexto] = useState(formatBR(s.dataInicio));
  const [provaTexto, setProvaTexto] = useState(s.provaAlvo ? formatBR(s.provaAlvo.data) : '');
  const [provaRotulo, setProvaRotulo] = useState(s.provaAlvo?.rotulo ?? '');
  const [feed, setFeed] = useState(s.feedUrl);
  const [backupPendente, setBackupPendente] = useState<Backup | null>(null);
  const [confirmarApagar, setConfirmarApagar] = useState(false);

  const salvarInicio = () => {
    const d = parseBR(inicioTexto);
    if (!d) return toast('Data inválida (dd/mm/aaaa).');
    s.setDataInicio(d);
    toast(`Plano começa em ${formatBR(d)}.`);
  };

  const salvarProva = () => {
    const d = parseBR(provaTexto);
    if (!d) return toast('Data inválida (dd/mm/aaaa).');
    s.setProvaAlvo({ data: d, rotulo: provaRotulo.trim() || 'Prova-alvo', concursoId: s.provaAlvo?.concursoId ?? null });
    toast('Prova-alvo atualizada — o cronograma se ajusta automaticamente.');
  };

  const testarFeed = async () => {
    s.setFeedUrl(feed);
    const r = await sincronizarRadar();
    toast(r.ok ? `Feed OK: ${r.total} concursos.` : (r.erro ?? 'Falha ao ler o feed.'));
  };

  const importar = async () => {
    const r = await escolherBackup();
    if (!r) return;
    if (!r.ok) return toast(r.erro);
    setBackupPendente(r.backup);
  };

  return (
    <Screen emoji="⚙️" titulo="Configurações" descricao="Plano, prova-alvo, feed do Radar, aparência e backup do seu progresso.">
      <Section titulo="Plano de estudos">
        <Card>
          <Seletor<Trilha> rotulo="Foco ativo" valor={s.trilha} onChange={s.setTrilha} opcoes={TRILHAS.map((t) => ({ valor: t, rotulo: TRILHA_LABEL[t] }))} />
          <Row className="items-end gap-2">
            <Campo className="flex-1" rotulo="Data de início do plano" value={inicioTexto} onChangeText={setInicioTexto} placeholder="dd/mm/aaaa" />
            <Button className="mb-3" titulo="Salvar" onPress={salvarInicio} />
          </Row>
          <Button
            variante="fantasma"
            titulo="Reiniciar o plano a partir de hoje"
            onPress={() => {
              reiniciarPlanoHoje();
              setInicioTexto(formatBR(useSettingsStore.getState().dataInicio));
              toast('Plano reiniciado a partir de hoje (seu histórico foi mantido).');
            }}
          />
          <Label className="mb-1 mt-3">Orçamento do Dia Padrão</Label>
          <Segmented rolavel valor={String(s.orcamentoMin)} onChange={(v) => s.setOrcamento(Number(v))} opcoes={OPCOES_ORCAMENTO.map((n) => ({ valor: String(n), rotulo: horasMinutos(n) }))} />
          <View className="mt-3">
            <Seletor rotulo="Banca-alvo (padrão nos registros)" valor={s.bancaAlvo || null} onChange={s.setBancaAlvo} opcoes={NOMES_BANCAS.map((b) => ({ valor: b, rotulo: b }))} placeholder="Nenhuma" />
          </View>
        </Card>
      </Section>

      <Section titulo="Prova-alvo">
        <Card>
          <Muted className="mb-2">
            {s.provaAlvo ? `Atual: ${s.provaAlvo.rotulo} — ${formatBR(s.provaAlvo.data)}` : 'Sem prova-alvo: a contagem usa os 90 dias do plano.'} Dica: no Radar, use “Definir como Prova-Alvo”.
          </Muted>
          <Campo rotulo="Rótulo" value={provaRotulo} onChangeText={setProvaRotulo} placeholder="Ex.: IGP-RS Perito Médico-Legista" />
          <Campo rotulo="Data da prova" value={provaTexto} onChangeText={setProvaTexto} placeholder="dd/mm/aaaa" />
          <Row className="gap-2">
            <Button variante="primario" titulo="Salvar prova-alvo" onPress={salvarProva} />
            {s.provaAlvo ? (
              <Button
                variante="fantasma"
                titulo="Remover"
                onPress={() => {
                  s.setProvaAlvo(null);
                  setProvaTexto('');
                  setProvaRotulo('');
                  toast('Prova-alvo removida.');
                }}
              />
            ) : null}
          </Row>
        </Card>
      </Section>

      <Section titulo="Meu Edital">
        <Card>
          <Muted className="mb-2">
            {s.editalAlvo
              ? `Edital-alvo: ${s.editalAlvo.nome}. O cronograma pesa as básicas deste edital e o Dashboard projeta sua nota.`
              : 'Sem edital-alvo: as básicas seguem o padrão da trilha. Escolha o edital do seu concurso para o app pesar as disciplinas certas.'}
          </Muted>
          <Button titulo={s.editalAlvo ? 'Abrir Meu Edital' : 'Escolher edital'} onPress={() => router.push('/edital')} className="self-start" />
        </Card>
      </Section>

      <Section titulo="Radar Sul — feed remoto">
        <Card>
          <Muted className="mb-2">
            Depois de publicar o projeto no GitHub, cole aqui a URL “raw” do arquivo gerado pelo robô, por exemplo:
            https://raw.githubusercontent.com/SEU-USUARIO/SEU-REPO/main/public/data/concursos-sul.json
          </Muted>
          <Campo rotulo="URL do feed" value={feed} onChangeText={setFeed} autoCapitalize="none" keyboardType="url" placeholder="https://raw.githubusercontent.com/…/concursos-sul.json" />
          <Button variante="primario" icone={RefreshCw} titulo="Salvar e testar" carregando={sincronizando} onPress={testarFeed} />
          <Label className="mb-1 mt-3">Ordem de busca</Label>
          {urlsDoFeed(s.feedUrl).map((u) => (
            <Muted key={u} numberOfLines={1}>
              • {u}
            </Muted>
          ))}
          <Muted>• cópia offline salva no aparelho → base embarcada no app</Muted>
          {urlFeed ? <Muted className="mt-2">Última leitura bem-sucedida: {urlFeed}</Muted> : null}
        </Card>
      </Section>

      <Section titulo="Aparência">
        <Segmented<PreferenciaTema>
          valor={s.tema}
          onChange={s.setTema}
          opcoes={[
            { valor: 'sistema', rotulo: 'Sistema' },
            { valor: 'claro', rotulo: 'Claro' },
            { valor: 'escuro', rotulo: 'Escuro' },
          ]}
        />
      </Section>

      <Section titulo="Backup portátil (.json)">
        <Card>
          <Muted className="mb-3">Todo o progresso fica só neste dispositivo. Exporte um backup para trocar de aparelho ou levar do celular para o computador.</Muted>
          <Row className="flex-wrap gap-2">
            <Button
              icone={Download}
              titulo="Exportar progresso"
              onPress={async () => {
                const r = await exportarBackup();
                toast(r.mensagem);
              }}
            />
            <Button icone={Upload} titulo="Importar progresso" onPress={importar} />
          </Row>
          <View className="mt-4">
            <Button variante="perigo" titulo="Apagar todos os dados locais" onPress={() => setConfirmarApagar(true)} />
          </View>
        </Card>
      </Section>

      <Callout emoji="ℹ️">
        <Txt>
          Concurseiro Pro Max v{Constants.expoConfig?.version ?? '1.0.0'} · dados locais (offline-first). Conteúdo normativo conferido nas fontes oficiais; confirme sempre o edital do seu concurso.
        </Txt>
      </Callout>

      <Sheet visivel={!!backupPendente} onFechar={() => setBackupPendente(null)} titulo="Importar backup?">
        <Muted className="mb-3">
          Backup de {backupPendente ? formatBR(backupPendente.exportedAt.slice(0, 10)) : ''}. Isso substitui TODO o progresso atual deste dispositivo.
        </Muted>
        <Button
          variante="primario"
          titulo="Substituir pelo backup"
          onPress={() => {
            if (backupPendente) aplicarBackup(backupPendente);
            setBackupPendente(null);
            const atual = useSettingsStore.getState();
            setInicioTexto(formatBR(atual.dataInicio));
            setFeed(atual.feedUrl);
            toast('Backup importado.');
          }}
        />
      </Sheet>

      <Sheet visivel={confirmarApagar} onFechar={() => setConfirmarApagar(false)} titulo="Apagar todos os dados?">
        <Muted className="mb-3">Remove progresso, questões, revisões, notas e status do Radar deste dispositivo. Exporte um backup antes se quiser guardar.</Muted>
        <Button
          variante="perigo"
          titulo="Apagar definitivamente"
          onPress={async () => {
            await resetarTudo();
            inicializarRadar();
            setConfirmarApagar(false);
            const atual = useSettingsStore.getState();
            setInicioTexto(formatBR(atual.dataInicio));
            setFeed('');
            setProvaTexto('');
            setProvaRotulo('');
            toast('Dados apagados. O plano recomeça hoje.');
          }}
        />
      </Sheet>
    </Screen>
  );
}
