import { Fragment } from 'react';
import { Text, View } from 'react-native';
import type { BlocoResumo } from '@/data/types';
import { DataTable } from '../ui/DataTable';
import { Callout } from '../ui/Controls';
import { H3, Muted, Txt } from '../ui/primitives';

/** Texto com **negrito** (sem dependência de Markdown). */
export function TextoRico({ texto, className = '' }: { texto: string; className?: string }) {
  const partes = texto.split(/(\*\*[^*]+\*\*)/g);
  return (
    <Txt className={className}>
      {partes.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <Text key={i} className="font-semibold">
            {p.slice(2, -2)}
          </Text>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </Txt>
  );
}

export function BlocoResumoView({ bloco }: { bloco: BlocoResumo }) {
  switch (bloco.tipo) {
    case 'texto':
      return <TextoRico texto={bloco.texto} className="mb-3 text-[15px] leading-6" />;
    case 'lista':
      return (
        <View className="mb-3">
          {bloco.itens.map((item, i) => (
            <View key={i} className="mb-1 flex-row">
              <Txt className="w-6 text-[15px]">{bloco.ordenada ? `${i + 1}.` : '•'}</Txt>
              <View className="flex-1">
                <TextoRico texto={item} className="text-[15px] leading-6" />
              </View>
            </View>
          ))}
        </View>
      );
    case 'tabela':
      return (
        <View className="mb-3">
          {bloco.tabela.titulo ? <H3>{bloco.tabela.titulo}</H3> : null}
          <DataTable colunas={bloco.tabela.colunas} linhas={bloco.tabela.linhas} nota={bloco.tabela.nota} />
        </View>
      );
    case 'exemplo':
      return (
        <View className="mb-3 rounded-notion border border-line bg-side p-3 dark:border-line-dark dark:bg-side-dark">
          <Txt className="mb-1 font-semibold">✏️ {bloco.titulo ?? 'Exemplo resolvido'}</Txt>
          <TextoRico texto={bloco.enunciado} className="mb-2 text-[14px] leading-6" />
          <Muted className="mb-1 font-medium">Resolução</Muted>
          <TextoRico texto={bloco.resolucao} className="text-[14px] leading-6" />
        </View>
      );
    case 'atencao':
      return (
        <Callout emoji="⚠️" tom="amarelo">
          <TextoRico texto={bloco.texto} />
        </Callout>
      );
    case 'formula':
      return (
        <View className="mb-3 items-center rounded-notion bg-side px-3 py-3 dark:bg-side-dark">
          <Text selectable className="font-mono text-[16px] text-ink dark:text-ink-dark">
            {bloco.formula}
          </Text>
          {bloco.legenda ? <Muted className="mt-1 text-center">{bloco.legenda}</Muted> : null}
        </View>
      );
  }
}

export function BlocosResumo({ blocos }: { blocos: BlocoResumo[] }) {
  return (
    <View>
      {blocos.map((b, i) => (
        <BlocoResumoView key={i} bloco={b} />
      ))}
    </View>
  );
}
