import type { CorTag } from '@/theme/cores';
import type { StatusMinimo } from '@/utils/edital';

/** Rótulo e cor de cada situação diante do mínimo do edital (Meu Edital e Simulado). */
export const STATUS_MINIMO: Record<StatusMinimo, { texto: string; cor: CorTag }> = {
  ok: { texto: 'Folga', cor: 'green' },
  atencao: { texto: 'No limite', cor: 'yellow' },
  abaixo: { texto: 'Abaixo do mínimo', cor: 'red' },
  'sem-dados': { texto: 'Sem dados', cor: 'gray' },
  'sem-minimo': { texto: 'Sem mínimo', cor: 'gray' },
};
