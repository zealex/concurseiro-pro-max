import { useRouter } from 'expo-router';
import { ChevronDown, ChevronRight, StickyNote } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { getCheatSheet } from '@/data/cheatSheets';
import { getChecklist } from '@/data/checklistsLeiSeca';
import { EIXO_LABEL, TIPO_BLOCO_LABEL } from '@/data/types';
import type { ModoDia, TarefaAgenda } from '@/domain/types';
import { concluirTarefa, desfazerTarefa } from '@/store/acoes';
import { useCronogramaStore } from '@/store/useCronogramaStore';
import { COR_EIXO, COR_TIPO_BLOCO, useCores } from '@/theme/cores';
import type { DateKey } from '@/utils/dates';
import { horasMinutos } from '@/utils/format';
import { Button } from '../ui/Button';
import { Checkbox, Sheet } from '../ui/Controls';
import { Muted, Txt } from '../ui/primitives';
import { Tag } from '../ui/Tag';

const ORIGEM_LABEL: Partial<Record<TarefaAgenda['origem'], string>> = {
  redistribuida: '↻ Redistribuída',
  revisao: '🔁 Revisão',
  adaptativa: '🎯 Adaptativa',
};

export function TarefaItem({ tarefa, data, modo, compacto = false }: { tarefa: TarefaAgenda; data: DateKey; modo: ModoDia; compacto?: boolean }) {
  const [aberto, setAberto] = useState(false);
  const [pedirResultado, setPedirResultado] = useState(false);
  const nota = useCronogramaStore((s) => (tarefa.blocoId ? (s.notas[tarefa.blocoId] ?? '') : ''));
  const setNota = useCronogramaStore((s) => s.setNota);
  const [rascunho, setRascunho] = useState(nota);
  const cores = useCores();
  const router = useRouter();

  const alternar = (v: boolean) => {
    if (tarefa.revisaoId && v) return setPedirResultado(true);
    if (v) concluirTarefa(tarefa, data, modo);
    else desfazerTarefa(tarefa);
  };

  const refs = tarefa.refs
    .map((id) => {
      const c = getChecklist(id);
      if (c) return { id, rotulo: `☑️ ${c.sigla}`, slug: `checklist-${id}` };
      const s = getCheatSheet(id);
      if (s) return { id, rotulo: `📄 ${s.titulo}`, slug: `cheat-${id}` };
      return null;
    })
    .filter((r): r is { id: string; rotulo: string; slug: string } => r !== null);

  return (
    <View className={`border-b border-line py-2 dark:border-line-dark ${tarefa.concluida ? 'opacity-60' : ''}`}>
      <View className="flex-row items-start">
        <View className="pr-2.5 pt-[3px]">
          <Checkbox marcado={tarefa.concluida} onChange={alternar} rotulo={`Concluir: ${tarefa.titulo}`} />
        </View>
        <Pressable className="flex-1" onPress={() => setAberto((a) => !a)} accessibilityRole="button" accessibilityLabel={`Detalhes: ${tarefa.titulo}`}>
          <Txt className={`${tarefa.concluida ? 'line-through' : ''} font-medium`}>{tarefa.titulo}</Txt>
          <View className="mt-1 flex-row flex-wrap items-center gap-1">
            <Tag texto={TIPO_BLOCO_LABEL[tarefa.tipo]} cor={COR_TIPO_BLOCO[tarefa.tipo]} />
            {!compacto ? <Tag texto={EIXO_LABEL[tarefa.eixo]} cor={COR_EIXO[tarefa.eixo]} /> : null}
            {ORIGEM_LABEL[tarefa.origem] ? <Tag texto={ORIGEM_LABEL[tarefa.origem] ?? ''} /> : null}
            {tarefa.versaoPlantao ? <Tag texto="⚡ Versão plantão" cor="orange" /> : null}
            <Muted className="ml-1">{horasMinutos(tarefa.minutos)}</Muted>
            {nota ? <StickyNote size={13} color={cores.aviso} /> : null}
          </View>
        </Pressable>
        <Pressable onPress={() => setAberto((a) => !a)} hitSlop={10} className="p-1" accessibilityLabel="Expandir">
          {aberto ? <ChevronDown size={16} color={cores.suave} /> : <ChevronRight size={16} color={cores.suave} />}
        </Pressable>
      </View>

      {aberto ? (
        <View className="ml-7 mt-2">
          <Txt className="text-[14px] text-ink-soft dark:text-ink-dark-soft">{tarefa.descricao}</Txt>
          {refs.length ? (
            <View className="mt-2 flex-row flex-wrap gap-2">
              {refs.map((r) => (
                <Button key={r.id} pequeno variante="secundario" titulo={r.rotulo} onPress={() => router.push(`/biblioteca/${r.slug}`)} />
              ))}
            </View>
          ) : null}
          {tarefa.blocoId ? (
            <TextInput
              value={rascunho}
              onChangeText={setRascunho}
              onBlur={() => setNota(tarefa.blocoId!, rascunho)}
              placeholder="Nota rápida (dúvidas, páginas, questões erradas)…"
              placeholderTextColor={cores.fraco}
              multiline
              className="mt-2 min-h-[56px] rounded-notion border border-line bg-side px-3 py-2 text-[14px] text-ink dark:border-line-dark dark:bg-side-dark dark:text-ink-dark"
            />
          ) : null}
        </View>
      ) : null}

      <Sheet visivel={pedirResultado} onFechar={() => setPedirResultado(false)} titulo="Como foi a revisão?">
        <Muted className="mb-3">
          Se acertou menos de 70% ou achou difícil, o ciclo D1 → D7 → D15 → D30 recomeça a partir de hoje.
        </Muted>
        <View className="gap-2">
          <Button
            variante="primario"
            titulo="✅ Lembrei bem (≥ 70%)"
            onPress={() => {
              concluirTarefa(tarefa, data, modo, { dificil: false });
              setPedirResultado(false);
            }}
          />
          <Button
            variante="secundario"
            titulo="😬 Difícil / < 70% — reiniciar ciclo"
            onPress={() => {
              concluirTarefa(tarefa, data, modo, { dificil: true });
              setPedirResultado(false);
            }}
          />
        </View>
        <Text className="mt-3 text-[12px] text-ink-faint">A revisão fica registrada no histórico do item.</Text>
      </Sheet>
    </View>
  );
}
