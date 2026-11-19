import { Check, ChevronDown, ChevronRight, X } from 'lucide-react-native';
import { useState, type ReactNode } from 'react';
import { Modal, Pressable, ScrollView, Text, TextInput, View, type TextInputProps } from 'react-native';
import { useCores } from '@/theme/cores';
import { feedback } from '@/utils/haptics';
import { Label, Muted, Row, Txt } from './primitives';

/* Checkbox estilo Notion */
export function Checkbox({ marcado, onChange, rotulo }: { marcado: boolean; onChange: (v: boolean) => void; rotulo: string }) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: marcado }}
      accessibilityLabel={rotulo}
      hitSlop={10}
      onPress={() => {
        feedback('leve');
        onChange(!marcado);
      }}
      className={`h-[18px] w-[18px] items-center justify-center rounded-[3px] border ${
        marcado ? 'border-accent bg-accent' : 'border-ink-faint bg-page dark:border-ink-dark-soft dark:bg-page-dark'
      }`}
    >
      {marcado ? <Check size={13} color="#FFFFFF" strokeWidth={3} /> : null}
    </Pressable>
  );
}

/* Bloco expansível (toggle do Notion) */
export function Toggle({
  titulo,
  subtitulo,
  inicialAberto = false,
  direita,
  children,
}: {
  titulo: ReactNode;
  subtitulo?: string;
  inicialAberto?: boolean;
  direita?: ReactNode;
  children: ReactNode;
}) {
  const [aberto, setAberto] = useState(inicialAberto);
  const cores = useCores();
  return (
    <View className="mb-1">
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: aberto }}
        onPress={() => setAberto((a) => !a)}
        className="flex-row items-start rounded-notion px-1 py-1.5 hover:bg-hover dark:hover:bg-hover-dark"
      >
        <View className="mr-1 mt-1">{aberto ? <ChevronDown size={16} color={cores.suave} /> : <ChevronRight size={16} color={cores.suave} />}</View>
        <View className="flex-1">
          {typeof titulo === 'string' ? <Txt className="font-medium">{titulo}</Txt> : titulo}
          {subtitulo ? <Muted>{subtitulo}</Muted> : null}
        </View>
        {direita}
      </Pressable>
      {aberto ? <View className="ml-6 mt-1">{children}</View> : null}
    </View>
  );
}

/* Callout */
export function Callout({ emoji = '💡', children, tom = 'neutro' }: { emoji?: string; children: ReactNode; tom?: 'neutro' | 'azul' | 'amarelo' | 'vermelho' | 'verde' }) {
  const fundo = {
    neutro: 'bg-side dark:bg-side-dark',
    azul: 'bg-tag-blue dark:bg-tag-blue-dark',
    amarelo: 'bg-tag-yellow dark:bg-tag-yellow-dark',
    vermelho: 'bg-tag-red dark:bg-tag-red-dark',
    verde: 'bg-tag-green dark:bg-tag-green-dark',
  }[tom];
  return (
    <View className={`mb-4 flex-row rounded-notion p-3 ${fundo}`}>
      <Text className="mr-2 text-[18px]">{emoji}</Text>
      <View className="flex-1">{typeof children === 'string' ? <Txt>{children}</Txt> : children}</View>
    </View>
  );
}

/* Barra de progresso */
export function ProgressBar({ valor, cor = 'bg-accent', className = '' }: { valor: number; cor?: string; className?: string }) {
  const pct = Math.max(0, Math.min(1, Number.isFinite(valor) ? valor : 0));
  return (
    <View className={`h-1.5 overflow-hidden rounded-full bg-line dark:bg-line-dark ${className}`}>
      <View className={`h-full rounded-full ${cor}`} style={{ width: `${pct * 100}%` }} />
    </View>
  );
}

/* Controle segmentado */
export function Segmented<T extends string>({
  opcoes,
  valor,
  onChange,
  rolavel = false,
}: {
  opcoes: { valor: T; rotulo: string }[];
  valor: T;
  onChange: (v: T) => void;
  /** Rolagem horizontal quando as opções não cabem na largura (ex.: 5 eixos no celular). */
  rolavel?: boolean;
}) {
  const grupo = (
    <View className="flex-row self-start rounded-notion bg-side p-0.5 dark:bg-side-dark">
      {opcoes.map((o) => {
        const ativo = o.valor === valor;
        return (
          <Pressable
            key={o.valor}
            accessibilityRole="tab"
            accessibilityState={{ selected: ativo }}
            onPress={() => {
              feedback('leve');
              onChange(o.valor);
            }}
            className={`rounded-[5px] px-3 py-1.5 ${ativo ? 'bg-page shadow-sm dark:bg-hover-dark' : ''}`}
          >
            <Text className={`text-[13px] ${ativo ? 'font-medium text-ink dark:text-ink-dark' : 'text-ink-soft dark:text-ink-dark-soft'}`}>{o.rotulo}</Text>
          </Pressable>
        );
      })}
    </View>
  );
  if (!rolavel) return grupo;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      {grupo}
    </ScrollView>
  );
}

/* Campo de texto */
export function Campo({ rotulo, ajuda, erro, className = '', ...p }: TextInputProps & { rotulo?: string; ajuda?: string; erro?: string | null; className?: string }) {
  const cores = useCores();
  return (
    <View className={`mb-3 ${className}`}>
      {rotulo ? <Label className="mb-1">{rotulo}</Label> : null}
      <TextInput
        placeholderTextColor={cores.fraco}
        className={`min-h-[40px] rounded-notion border px-3 py-2 text-[15px] text-ink dark:text-ink-dark ${
          erro ? 'border-red-400' : 'border-line dark:border-line-dark'
        } bg-page dark:bg-page-dark`}
        {...p}
      />
      {erro ? <Text className="mt-1 text-[12px] text-red-600 dark:text-red-400">{erro}</Text> : ajuda ? <Muted className="mt-1">{ajuda}</Muted> : null}
    </View>
  );
}

/* Modal/Sheet multiplataforma */
export function Sheet({ visivel, onFechar, titulo, children }: { visivel: boolean; onFechar: () => void; titulo: string; children: ReactNode }) {
  const cores = useCores();
  return (
    <Modal visible={visivel} transparent animationType="fade" onRequestClose={onFechar}>
      <Pressable accessibilityLabel="Fechar" onPress={onFechar} className="flex-1 items-center justify-end bg-black/40 md:justify-center">
        <Pressable
          onPress={(e) => e.stopPropagation()}
          className="max-h-[88%] w-full rounded-t-2xl bg-page p-4 dark:bg-side-dark md:max-w-[560px] md:rounded-2xl"
        >
          <Row className="mb-3 justify-between">
            <Txt className="text-[17px] font-semibold">{titulo}</Txt>
            <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onFechar} hitSlop={10} className="rounded p-1 hover:bg-hover dark:hover:bg-hover-dark">
              <X size={18} color={cores.suave} />
            </Pressable>
          </Row>
          <ScrollView keyboardShouldPersistTaps="handled">{children}</ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

/* Seletor (abre uma lista em modal) */
export function Seletor<T extends string>({
  rotulo,
  valor,
  opcoes,
  onChange,
  placeholder = 'Selecionar…',
  className = '',
}: {
  rotulo?: string;
  valor: T | null;
  opcoes: { valor: T; rotulo: string; grupo?: string }[];
  onChange: (v: T) => void;
  placeholder?: string;
  className?: string;
}) {
  const [aberto, setAberto] = useState(false);
  const cores = useCores();
  const atual = opcoes.find((o) => o.valor === valor);
  let ultimoGrupo: string | undefined;
  return (
    <View className={`mb-3 ${className}`}>
      {rotulo ? <Label className="mb-1">{rotulo}</Label> : null}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={rotulo ?? placeholder}
        onPress={() => setAberto(true)}
        className="min-h-[40px] flex-row items-center justify-between rounded-notion border border-line bg-page px-3 py-2 hover:bg-hover dark:border-line-dark dark:bg-page-dark dark:hover:bg-hover-dark"
      >
        <Text numberOfLines={1} className={`flex-1 text-[15px] ${atual ? 'text-ink dark:text-ink-dark' : 'text-ink-faint'}`}>
          {atual?.rotulo ?? placeholder}
        </Text>
        <ChevronDown size={16} color={cores.suave} />
      </Pressable>
      <Sheet visivel={aberto} onFechar={() => setAberto(false)} titulo={rotulo ?? 'Selecionar'}>
        {opcoes.map((o) => {
          const cabecalho = o.grupo && o.grupo !== ultimoGrupo ? o.grupo : null;
          ultimoGrupo = o.grupo;
          return (
            <View key={o.valor}>
              {cabecalho ? <Label className="mb-1 mt-3">{cabecalho}</Label> : null}
              <Pressable
                onPress={() => {
                  onChange(o.valor);
                  setAberto(false);
                }}
                className={`flex-row items-center justify-between rounded-notion px-2 py-2.5 hover:bg-hover dark:hover:bg-hover-dark ${o.valor === valor ? 'bg-accent-soft dark:bg-accent-dark-soft' : ''}`}
              >
                <Txt className="flex-1">{o.rotulo}</Txt>
                {o.valor === valor ? <Check size={16} color={cores.accent} /> : null}
              </Pressable>
            </View>
          );
        })}
      </Sheet>
    </View>
  );
}

/* Estatística (tile) */
export function StatTile({ rotulo, valor, detalhe, className = '' }: { rotulo: string; valor: string; detalhe?: string; className?: string }) {
  return (
    <View className={`min-w-[140px] flex-1 rounded-notion border border-line p-3 dark:border-line-dark ${className}`}>
      <Label>{rotulo}</Label>
      <Text className="mt-1 text-[24px] font-semibold text-ink dark:text-ink-dark">{valor}</Text>
      {detalhe ? <Muted>{detalhe}</Muted> : null}
    </View>
  );
}

export function EmptyState({ emoji = '🗒️', titulo, texto, acao }: { emoji?: string; titulo: string; texto?: string; acao?: ReactNode }) {
  return (
    <View className="items-center rounded-notion border border-dashed border-line px-4 py-8 dark:border-line-dark">
      <Text className="mb-2 text-[28px]">{emoji}</Text>
      <Txt className="text-center font-medium">{titulo}</Txt>
      {texto ? <Muted className="mt-1 max-w-[420px] text-center">{texto}</Muted> : null}
      {acao ? <View className="mt-3">{acao}</View> : null}
    </View>
  );
}

export { Row };
