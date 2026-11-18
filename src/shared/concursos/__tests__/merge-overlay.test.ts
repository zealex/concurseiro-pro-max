import { describe, expect, it } from 'vitest';
import { deduplicar, deveSerPodado, isNovo, mesclarFeed, precisaReescrever } from '../merge';
import { mesclarComOverlay, atualizarConhecidos, type Overlay } from '../overlay';
import { ConcursoSchema, parseFeedTolerante, type Concurso } from '../schema';

function concurso(parcial: Partial<Concurso> & { id: string }): Concurso {
  return ConcursoSchema.parse({
    titulo: 'Prefeitura de Teste abre concurso para médicos',
    orgao: 'Prefeitura de Teste',
    cidade: 'Umuarama',
    uf: 'PR',
    tipo: 'concurso',
    tag: 'medicina-geral-especialidades',
    subcategoria: 'clinico-esf-plantonista',
    cargos: [{ nome: 'Médico Generalista', tag: 'medicina-geral-especialidades', subcategoria: 'clinico-esf-plantonista' }],
    fonte: 'pci',
    fonteUrl: 'https://www.pciconcursos.com.br/noticias/teste',
    ano: 2026,
    firstSeenAt: '2026-11-01T12:00:00.000Z',
    lastSeenAt: '2026-11-01T12:00:00.000Z',
    ...parcial,
  });
}

const AGORA = new Date('2026-11-18T12:00:00.000Z');

describe('isNovo', () => {
  it('7 dias', () => {
    expect(isNovo('2026-11-12T12:00:00.000Z', AGORA)).toBe(true);
    expect(isNovo('2026-11-10T11:59:00.000Z', AGORA)).toBe(false);
  });
});

describe('deduplicar', () => {
  it('funde o mesmo id vindo de duas fontes, completando campos', () => {
    const a = concurso({ id: 'x', banca: null, dataProva: null, cargos: [{ nome: 'Médicos Generalistas', tag: 'medicina-geral-especialidades', subcategoria: 'clinico-esf-plantonista', vagas: null, cadastroReserva: false, remuneracao: null, cargaHoraria: null }] });
    const b = concurso({
      id: 'x',
      fonte: 'concursos-no-brasil',
      fonteUrl: 'https://concursosnobrasil.com/x',
      banca: 'FUNDATEC',
      dataProva: '2026-12-20',
      cargos: [{ nome: 'Médico Generalista', tag: 'medicina-geral-especialidades', subcategoria: 'clinico-esf-plantonista', vagas: 4, cadastroReserva: false, remuneracao: 14994.61, cargaHoraria: '40h semanais' }],
    });
    const [r] = deduplicar([a, b]);
    expect(r?.fonte).toBe('pci');
    expect(r?.banca).toBe('FUNDATEC');
    expect(r?.dataProva).toBe('2026-12-20');
    expect(r?.cargos).toHaveLength(1);
    expect(r?.cargos[0]?.vagas).toBe(4);
    expect(r?.relacionados.some((l) => l.url === 'https://concursosnobrasil.com/x')).toBe(true);
  });
});

describe('mesclarFeed', () => {
  it('preserva firstSeenAt dos já conhecidos e marca isNew só nos recém-encontrados', () => {
    const existente = concurso({ id: 'antigo', firstSeenAt: '2026-10-01T00:00:00.000Z', lastSeenAt: '2026-11-17T00:00:00.000Z' });
    const coletados = [
      concurso({ id: 'antigo', firstSeenAt: AGORA.toISOString(), lastSeenAt: AGORA.toISOString(), banca: 'FEPESE' }),
      concurso({ id: 'novo', firstSeenAt: AGORA.toISOString(), lastSeenAt: AGORA.toISOString() }),
    ];
    const r = mesclarFeed([existente], coletados, AGORA);
    const antigo = r.find((c) => c.id === 'antigo');
    const novo = r.find((c) => c.id === 'novo');
    expect(antigo?.firstSeenAt).toBe('2026-10-01T00:00:00.000Z');
    expect(antigo?.lastSeenAt).toBe(AGORA.toISOString());
    expect(antigo?.banca).toBe('FEPESE');
    expect(antigo?.isNew).toBe(false);
    expect(novo?.isNew).toBe(true);
    expect(r[0]?.id).toBe('novo'); // novos primeiro
  });

  it('mantém registro não visto nesta rodada até a poda', () => {
    const naoVisto = concurso({ id: 'sumiu', lastSeenAt: '2026-11-10T00:00:00.000Z' });
    expect(mesclarFeed([naoVisto], [], AGORA).map((c) => c.id)).toEqual(['sumiu']);
  });

  it('poda prova antiga, inscrição muito antiga e registro coletado não visto há 120 dias', () => {
    expect(deveSerPodado(concurso({ id: 'a', dataProva: '2026-08-01' }), AGORA)).toBe(true);
    expect(deveSerPodado(concurso({ id: 'b', dataProva: '2026-10-01' }), AGORA)).toBe(false);
    expect(deveSerPodado(concurso({ id: 'c', inscricoes: { inicio: null, fim: '2026-06-01' } }), AGORA)).toBe(true);
    expect(deveSerPodado(concurso({ id: 'd', lastSeenAt: '2026-06-01T00:00:00.000Z' }), AGORA)).toBe(true);
    expect(deveSerPodado(concurso({ id: 'e', fonte: 'curadoria', lastSeenAt: '2026-06-01T00:00:00.000Z' }), AGORA)).toBe(false);
  });

  it('precisaReescrever ignora apenas lastSeenAt recente', () => {
    const a = [concurso({ id: 'a', isNew: false, lastSeenAt: '2026-11-17T00:00:00.000Z' })];
    const b = [concurso({ id: 'a', isNew: false, lastSeenAt: '2026-11-18T00:00:00.000Z' })];
    expect(precisaReescrever(a, b, AGORA)).toBe(false);
    expect(precisaReescrever(a, [concurso({ id: 'a', isNew: false, banca: 'FURB' })], AGORA)).toBe(true);
    expect(precisaReescrever(a, [...b, concurso({ id: 'z' })], AGORA)).toBe(true);
  });
});

describe('overlay do usuário', () => {
  const feed = [concurso({ id: 'f1', firstSeenAt: '2026-11-15T00:00:00.000Z' }), concurso({ id: 'f2' })];
  const overlay: Overlay = {
    f1: { status: 'inscrito', notas: 'pagar boleto', atualizadoEm: '2026-11-16T00:00:00.000Z' },
    sumido: { status: 'prova-agendada', notas: '', atualizadoEm: '2026-11-16T00:00:00.000Z' },
    semValor: { status: 'radar', notas: '', atualizadoEm: '2026-11-16T00:00:00.000Z' },
  };
  const conhecidos = { sumido: concurso({ id: 'sumido' }), semValor: concurso({ id: 'semValor' }) };

  it('status pessoal sobrevive à atualização do feed', () => {
    const v = mesclarComOverlay({ feed, manuais: [], overlay, conhecidos, agora: AGORA });
    const f1 = v.find((c) => c.id === 'f1');
    expect(f1?.status).toBe('inscrito');
    expect(f1?.notas).toBe('pagar boleto');
    expect(f1?.isNew).toBe(true);
    expect(v.find((c) => c.id === 'f2')?.status).toBe('radar');
  });

  it('mantém como arquivado o que saiu do feed mas tem status pessoal', () => {
    const v = mesclarComOverlay({ feed, manuais: [], overlay, conhecidos, agora: AGORA });
    expect(v.find((c) => c.id === 'sumido')?.arquivado).toBe(true);
    expect(v.find((c) => c.id === 'semValor')).toBeUndefined();
  });

  it('concursos manuais convivem com o feed e nunca são "novos"', () => {
    const manual = concurso({ id: 'manual-pr-x', fonte: 'manual', firstSeenAt: AGORA.toISOString() });
    const v = mesclarComOverlay({ feed, manuais: [manual], overlay: {}, conhecidos: {}, agora: AGORA });
    const m = v.find((c) => c.id === 'manual-pr-x');
    expect(m?.manual).toBe(true);
    expect(m?.isNew).toBe(false);
  });

  it('atualizarConhecidos guarda só concursos com overlay', () => {
    const r = atualizarConhecidos({}, feed, overlay);
    expect(Object.keys(r)).toEqual(['f1']);
  });
});

describe('parseFeedTolerante', () => {
  it('descarta registros inválidos sem derrubar o feed', () => {
    const r = parseFeedTolerante({ version: 1, generatedAt: AGORA.toISOString(), concursos: [concurso({ id: 'ok' }), { id: 'ruim' }] });
    expect(r?.feed.concursos.map((c) => c.id)).toEqual(['ok']);
    expect(r?.descartados).toBe(1);
  });
  it('rejeita estrutura inválida', () => {
    expect(parseFeedTolerante({ foo: 1 })).toBeNull();
    expect(parseFeedTolerante(null)).toBeNull();
  });
});
