import { useColorScheme } from 'nativewind';

/** Cores para ícones e componentes que não aceitam className (lucide, ActivityIndicator, navegação). */
export interface Cores {
  escuro: boolean;
  fundo: string;
  lateral: string;
  texto: string;
  suave: string;
  fraco: string;
  borda: string;
  hover: string;
  accent: string;
  sucesso: string;
  perigo: string;
  aviso: string;
}

const CLARO: Cores = {
  escuro: false,
  fundo: '#FFFFFF',
  lateral: '#F7F7F5',
  texto: '#37352F',
  suave: '#787774',
  fraco: '#9B9A97',
  borda: '#E9E9E7',
  hover: '#EFEFED',
  accent: '#2383E2',
  sucesso: '#0F7B6C',
  perigo: '#E03E3E',
  aviso: '#D9730D',
};

const ESCURO: Cores = {
  escuro: true,
  fundo: '#191919',
  lateral: '#202020',
  texto: '#E6E6E5',
  suave: '#9B9B9B',
  fraco: '#7F7F7F',
  borda: '#2F2F2F',
  hover: '#2C2C2C',
  accent: '#529CCA',
  sucesso: '#4DAB9A',
  perigo: '#FF7369',
  aviso: '#FFA344',
};

export function useCores(): Cores {
  const { colorScheme } = useColorScheme();
  return colorScheme === 'dark' ? ESCURO : CLARO;
}

/** Cores de etiqueta no estilo Notion (fundo claro/escuro + texto). */
export type CorTag = 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';

export const TAG_CLASSES: Record<CorTag, string> = {
  gray: 'bg-tag-gray dark:bg-tag-gray-dark',
  brown: 'bg-tag-brown dark:bg-tag-brown-dark',
  orange: 'bg-tag-orange dark:bg-tag-orange-dark',
  yellow: 'bg-tag-yellow dark:bg-tag-yellow-dark',
  green: 'bg-tag-green dark:bg-tag-green-dark',
  blue: 'bg-tag-blue dark:bg-tag-blue-dark',
  purple: 'bg-tag-purple dark:bg-tag-purple-dark',
  pink: 'bg-tag-pink dark:bg-tag-pink-dark',
  red: 'bg-tag-red dark:bg-tag-red-dark',
};

export const COR_EIXO = { trabalho: 'blue', legal: 'purple', tronco: 'green' } as const satisfies Record<string, CorTag>;
export const COR_UF = { PR: 'yellow', SC: 'blue', RS: 'red' } as const satisfies Record<string, CorTag>;
export const COR_STATUS = {
  radar: 'gray',
  analisando: 'yellow',
  inscrito: 'blue',
  'prova-agendada': 'orange',
  finalizado: 'green',
} as const satisfies Record<string, CorTag>;
export const COR_CATEGORIA = {
  'medicina-do-trabalho': 'blue',
  'medico-legista': 'purple',
  'clinico-esf-plantonista': 'green',
  especialidades: 'pink',
} as const satisfies Record<string, CorTag>;
export const COR_TIPO_BLOCO = {
  diagnostico: 'orange',
  teoria: 'blue',
  'lei-seca': 'brown',
  questoes: 'green',
  revisao: 'purple',
  simulado: 'red',
  'caderno-erros': 'pink',
} as const satisfies Record<string, CorTag>;
