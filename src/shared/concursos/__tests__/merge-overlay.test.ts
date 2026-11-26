import { describe, expect, it } from 'vitest';
import { deduplicar, deveSerPodado, idComEdital, isNovo, mesclarFeed, precisaReescrever, reclassificarCargos, separarPorEdital, unirCargos } from '../merge';
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

describe('reclassificarCargos (regras novas aplicadas ao feed antigo)', () => {
  const cargo = (nome: string, tag: Concurso['tag'], subcategoria: Concurso['subcategoria']) => ({ nome, tag, subcategoria, vagas: null, cadastroReserva: false, remuneracao: null, cargaHoraria: null });
  it('remove do registro de clínico o cargo que agora pertence à perícia', () => {
    const r = reclassificarCargos(
      concurso({ id: 'pr-x', cargos: [cargo('Médico Clínico Geral', 'medicina-geral-especialidades', 'clinico-esf-plantonista'), cargo('Médico Auditor', 'medicina-geral-especialidades', 'especialidades')] }),
    );
    expect(r.cargos.map((c) => c.nome)).toEqual(['Médico Clínico Geral']);
    expect(r.subcategoria).toBe('clinico-esf-plantonista');
  });
  it('registro só com especialidades passa a "especialidades"', () => {
    const r = reclassificarCargos(concurso({ id: 'rs-ghc', cargos: [cargo('Médico (Medicina de Emergência: UPA)', 'medicina-geral-especialidades', 'clinico-esf-plantonista'), cargo('Médico (Dermatologia)', 'medicina-geral-especialidades', 'especialidades')] }));
    expect(r.subcategoria).toBe('especialidades');
  });
  it('cadastro manual não é alterado', () => {
    const c = concurso({ id: 'manual-1', fonte: 'manual', cargos: [cargo('Médico Auditor', 'medicina-geral-especialidades', 'especialidades')] });
    expect(reclassificarCargos(c)).toBe(c);
  });
});

describe('unirCargos', () => {
  const cargo = (nome: string, tag: Concurso['tag'], subcategoria: Concurso['subcategoria']) => ({ nome, tag, subcategoria, vagas: null, cadastroReserva: false, remuneracao: null, cargaHoraria: null });
  const nomes = (...lista: string[]) => unirCargos(lista.map((n) => cargo(n, 'medicina-geral-especialidades', 'especialidades')), []).map((c) => c.nome);
  it('qualificador cria cargo diferente (Chapecó/SC 2026)', () => {
    expect(nomes('Médico Endocrinologista', 'Médico Endocrinologista Pediátrico', 'Médico Pneumologista', 'Médico Pneumologista Infantil')).toEqual([
      'Médico Endocrinologista',
      'Médico Endocrinologista Pediátrico',
      'Médico Pneumologista',
      'Médico Pneumologista Infantil',
    ]);
  });
  it('mesmo cargo com e sem "Médico" fica com o nome completo', () => {
    expect(nomes('Pediatra', 'Médico Pediatra')).toEqual(['Médico Pediatra']);
    expect(nomes('Clínico Geral', 'Médico Clínico Geral')).toEqual(['Médico Clínico Geral']);
  });
  it('parte de cargo composto some', () => {
    expect(nomes('Obstetra', 'Médico Ginecologista e Obstetra')).toEqual(['Médico Ginecologista e Obstetra']);
  });
  it('ESF e ESF II são cargos distintos', () => {
    expect(nomes('Médico ESF', 'Médico ESF II')).toEqual(['Médico ESF', 'Médico ESF II']);
  });
});

describe('selo NOVO pela data da notícia', () => {
  it('edital publicado há semanas e encontrado agora não é NOVO; publicado ontem é', () => {
    const antigo = concurso({ id: 'ba-x', uf: 'BA', cidade: 'Salvador', firstSeenAt: '2026-10-20T12:00:00.000Z' });
    const recente = concurso({ id: 'ba-y', uf: 'BA', cidade: 'Salvador', firstSeenAt: '2026-11-17T12:00:00.000Z' });
    const feed = mesclarFeed([], [antigo, recente], AGORA);
    expect(feed.map((c) => [c.id, c.isNew, c.firstSeenAt])).toEqual([
      ['ba-y', true, '2026-11-17T12:00:00.000Z'],
      ['ba-x', false, '2026-10-20T12:00:00.000Z'],
    ]);
  });
  it('data futura (fuso/erro da fonte) vira o instante da coleta', () => {
    const futuro = concurso({ id: 'sp-z', uf: 'SP', cidade: 'Campinas', firstSeenAt: '2026-12-01T12:00:00.000Z' });
    expect(mesclarFeed([], [futuro], AGORA)[0]?.firstSeenAt).toBe(AGORA.toISOString());
  });
});

describe('separarPorEdital (2º certame do mesmo órgão no mesmo ano)', () => {
  const ID = 'sc-chapeco-prefeitura-medicina-geral-especialidades-2026';
  const URL_A = 'https://www.pciconcursos.com.br/noticias/chapeco-edital-1';
  const URL_B = 'https://www.pciconcursos.com.br/noticias/chapeco-edital-3';

  it('edital novo de outra notícia da mesma fonte ganha id próprio e aparece como NOVO', () => {
    const antigo = concurso({ id: ID, edital: '1/2026', fonteUrl: URL_A, firstSeenAt: '2026-03-01T12:00:00.000Z' });
    const novo = concurso({ id: ID, edital: '3/2026', fonteUrl: URL_B, firstSeenAt: '2026-11-17T14:24:00.000Z' });
    const ids = separarPorEdital([novo], [antigo]).map((c) => c.id);
    expect(ids).toEqual([idComEdital(ID, '3/2026')]);
    const feed = mesclarFeed([antigo], separarPorEdital([novo], [antigo]), AGORA);
    expect(feed.map((c) => [c.id, c.isNew])).toEqual([[`${ID}-ed3`, true], [ID, false]]);
  });

  it('na mesma rodada, sem histórico: o menor edital fica com o id base', () => {
    const r = separarPorEdital(
      [concurso({ id: ID, edital: '3/2026', fonteUrl: URL_B }), concurso({ id: ID, edital: '1/2026', fonteUrl: URL_A })],
      [],
    );
    expect(r.map((c) => `${c.edital} ${c.id}`).sort()).toEqual([`1/2026 ${ID}`, `3/2026 ${ID}-ed3`]);
  });

  it('fontes diferentes com números diferentes continuam fundidas (pode ser o mesmo certame)', () => {
    const pci = concurso({ id: ID, edital: '3/2026', fonteUrl: URL_B });
    const cnb = concurso({ id: ID, edital: '1/2026', fonte: 'concursos-no-brasil', fonteUrl: 'https://concursosnobrasil.com/concursos/sc/chapeco' });
    expect(separarPorEdital([pci, cnb], []).map((c) => c.id)).toEqual([ID, ID]);
  });

  it('a mesma notícia com número diferente (texto atualizado) não duplica', () => {
    const antigo = concurso({ id: ID, edital: '1/2026', fonteUrl: URL_A });
    const mesmo = concurso({ id: ID, edital: '2/2026', fonteUrl: URL_A });
    expect(separarPorEdital([mesmo], [antigo]).map((c) => c.id)).toEqual([ID]);
  });

  it('registro antigo sem número de edital continua recebendo a coleta (compatível com o feed atual)', () => {
    const antigo = concurso({ id: ID, fonteUrl: URL_A });
    expect(separarPorEdital([concurso({ id: ID, edital: '3/2026', fonteUrl: URL_B })], [antigo]).map((c) => c.id)).toEqual([ID]);
  });

  it('outra fonte citando o número de um certame já separado vai para ele', () => {
    const base = concurso({ id: ID, edital: '1/2026', fonteUrl: URL_A });
    const separado = concurso({ id: `${ID}-ed3`, edital: '3/2026', fonteUrl: URL_B });
    const cnb = concurso({ id: ID, edital: '3/2026', fonte: 'concursos-no-brasil', fonteUrl: 'https://concursosnobrasil.com/concursos/sc/chapeco' });
    expect(separarPorEdital([cnb], [base, separado]).map((c) => c.id)).toEqual([`${ID}-ed3`]);
  });
});
