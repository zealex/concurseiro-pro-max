import type { ResumoTema } from '../../../types';
import { RESUMOS_LIVRO } from './resumos-livro';
import { RESUMOS_REDACAO_OFICIAL } from './resumos-redacao-oficial';

export const RESUMOS: ResumoTema[] = [...RESUMOS_LIVRO, ...RESUMOS_REDACAO_OFICIAL];
