import { describe, expect, it } from 'vitest';
import { getGuia, GUIA_DA_FASE, GUIAS_FASES } from '../guiasFases';

describe('guias das fases', () => {
  it('ids únicos, conteúdo e fontes em todos', () => {
    const ids = GUIAS_FASES.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const g of GUIAS_FASES) {
      expect(g.secoes.length, g.id).toBeGreaterThan(0);
      expect(g.secoes.every((s) => s.blocos.length > 0), g.id).toBe(true);
      expect(g.fontes.length, g.id).toBeGreaterThan(0);
      expect(g.atualizadoEm).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('toda fase com guia aponta para um guia existente', () => {
    for (const id of Object.values(GUIA_DA_FASE)) expect(getGuia(id!), id).toBeDefined();
  });
});
