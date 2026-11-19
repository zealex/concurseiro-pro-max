import { describe, expect, it } from 'vitest';
import { getBloco, PLANO_12_SEMANAS } from '../plano12Semanas';
import legados from './blocos-legados.json';

/**
 * O progresso salvo do usuário (blocos concluídos e notas) é indexado pelo id do bloco ("s03-b07").
 * Estes testes congelam os 244 ids do plano para que nenhuma mudança de conteúdo os desloque.
 */
describe('ids legados do plano de 12 semanas', () => {
  it('os blocos legados mantêm id, tipo e primeiro tema', () => {
    for (const [id, assinatura] of Object.entries(legados as Record<string, string>)) {
      const b = getBloco(id);
      expect(b, id).toBeDefined();
      expect(`${b!.tipo}|${b!.temaIds[0]}`, id).toBe(assinatura);
    }
  });

  it('não surgem ids posicionais novos — blocos novos usam ids explícitos', () => {
    const posicionais = PLANO_12_SEMANAS.flatMap((s) => s.blocos.map((b) => b.id)).filter((id) => /^s\d{2}-b\d{2}$/.test(id));
    expect(posicionais.sort()).toEqual(Object.keys(legados).sort());
  });
});
