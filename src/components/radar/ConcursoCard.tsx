import { useRouter } from 'expo-router';
import { Archive, Calendar, MapPin } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { STATUS_LABEL, STATUS_PESSOAL, type ConcursoView, type StatusPessoal } from '@/shared/concursos/overlay';
import { CATEGORIA_LABEL } from '@/shared/concursos/schema';
import { useRadarStore } from '@/store/useRadarStore';
import { COR_CATEGORIA, COR_STATUS, COR_UF, useCores } from '@/theme/cores';
import { formatBR } from '@/utils/dates';
import { moeda } from '@/utils/format';
import { feedback } from '@/utils/haptics';
import { Sheet } from '../ui/Controls';
import { Muted, Row, Txt } from '../ui/primitives';
import { SeloNovo, Tag } from '../ui/Tag';

export function StatusBotao({ concurso }: { concurso: ConcursoView }) {
  const [aberto, setAberto] = useState(false);
  const setStatus = useRadarStore((s) => s.setStatus);
  return (
    <>
      <Pressable accessibilityRole="button" accessibilityLabel={`Status: ${STATUS_LABEL[concurso.status]}`} onPress={() => setAberto(true)} hitSlop={6}>
        <Tag texto={`● ${STATUS_LABEL[concurso.status]}`} cor={COR_STATUS[concurso.status]} />
      </Pressable>
      <Sheet visivel={aberto} onFechar={() => setAberto(false)} titulo="Mover para…">
        {STATUS_PESSOAL.map((s: StatusPessoal) => (
          <Pressable
            key={s}
            onPress={() => {
              setStatus(concurso.id, s);
              feedback('leve');
              setAberto(false);
            }}
            className={`mb-1 flex-row items-center rounded-notion px-2 py-2.5 hover:bg-hover dark:hover:bg-hover-dark ${s === concurso.status ? 'bg-side dark:bg-side-dark' : ''}`}
          >
            <Tag texto={STATUS_LABEL[s]} cor={COR_STATUS[s]} />
            {s === concurso.status ? <Muted className="ml-2">(atual)</Muted> : null}
          </Pressable>
        ))}
      </Sheet>
    </>
  );
}

export function ConcursoCard({ concurso: c, compacto = false }: { concurso: ConcursoView; compacto?: boolean }) {
  const router = useRouter();
  const cores = useCores();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${c.orgao}, ${c.cidade}`}
      onPress={() => router.push(`/radar/${encodeURIComponent(c.id)}`)}
      className="mb-2 rounded-notion border border-line bg-page p-3 hover:bg-hover active:bg-hover dark:border-line-dark dark:bg-page-dark dark:hover:bg-hover-dark"
    >
      <Row className="mb-1.5 flex-wrap gap-1.5">
        {c.isNew ? <SeloNovo /> : null}
        {c.arquivado ? <Tag texto="Arquivado" /> : null}
        {c.manual ? <Tag texto="Manual" cor="brown" /> : null}
        <Tag texto={c.uf} cor={COR_UF[c.uf]} />
        <Tag texto={CATEGORIA_LABEL[c.categoria]} cor={COR_CATEGORIA[c.categoria]} />
      </Row>
      <Txt numberOfLines={2} className="font-semibold">
        {c.orgao}
      </Txt>
      <Row className="mt-0.5">
        <MapPin size={12} color={cores.suave} />
        <Muted className="ml-1">
          {c.cidade} / {c.uf}
        </Muted>
      </Row>
      {!compacto ? (
        <Text numberOfLines={2} className="mt-1 text-[13px] text-ink dark:text-ink-dark">
          {c.cargos.map((x) => x.nome).join(' · ')}
        </Text>
      ) : null}
      <View className="mt-2 flex-row flex-wrap items-center gap-x-3 gap-y-1">
        {c.vagasTotal !== null ? <Muted>👥 {c.vagasTotal} {c.vagasTotal === 1 ? 'vaga' : 'vagas'}</Muted> : null}
        {c.remuneracaoMax !== null ? <Muted>💰 até {moeda(c.remuneracaoMax)}</Muted> : null}
        {c.banca ? <Muted>🏛️ {c.banca}</Muted> : null}
      </View>
      <Row className="mt-2 justify-between">
        <Row>
          <Calendar size={12} color={cores.suave} />
          <Muted className="ml-1">
            {c.inscricoes.fim ? `Inscrições até ${formatBR(c.inscricoes.fim)}` : 'Inscrições: ver edital'}
            {c.dataProva ? ` · Prova ${formatBR(c.dataProva)}` : ''}
          </Muted>
        </Row>
        {c.arquivado ? <Archive size={14} color={cores.fraco} /> : null}
      </Row>
      <View className="mt-2">
        <StatusBotao concurso={c} />
      </View>
    </Pressable>
  );
}
