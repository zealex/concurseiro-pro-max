import { describe, expect, it } from 'vitest';
import { saudeDoRadar, tempoDesde } from '../saude';

const AGORA = Date.parse('2026-11-26T12:00:00Z');
const fonte = (nome: string, ok: boolean, essencial: boolean) => ({ nome, ok, essencial, itens: 0, medicos: 0, erro: ok ? null : 'HTTP 503' });

describe('saúde do Radar no app', () => {
  it('feed com mais de 12 h é desatualizado', () => {
    expect(saudeDoRadar('2026-11-26T05:00:00Z', [], AGORA)).toMatchObject({ desatualizado: false, horas: 7 });
    expect(saudeDoRadar('2026-11-25T20:00:00Z', [], AGORA)).toMatchObject({ desatualizado: true, horas: 16 });
    expect(saudeDoRadar(null, [], AGORA)).toMatchObject({ desatualizado: false, horas: null });
  });
  it('só fontes essenciais com falha entram no aviso (bancas não)', () => {
    const r = saudeDoRadar('2026-11-26T11:00:00Z', [fonte('PCI Concursos', false, true), fonte('FUNDATEC', false, false), fonte('Concursos no Brasil', true, true)], AGORA);
    expect(r.fontesFora).toEqual(['PCI Concursos']);
  });
  it('texto do tempo', () => {
    expect(tempoDesde(0.2)).toBe('há 1 h');
    expect(tempoDesde(16)).toBe('há 16 h');
    expect(tempoDesde(72)).toBe('há 3 dias');
  });
});
