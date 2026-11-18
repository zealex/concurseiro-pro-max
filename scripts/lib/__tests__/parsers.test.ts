import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { criarGeo, type MunicipiosPorUF } from '../../../src/shared/concursos/geo';
import { ConcursoSchema } from '../../../src/shared/concursos/schema';
import { construirConcursos, construirDeBanca } from '../build';
import {
  anoDoEdital,
  datasNoTexto,
  extrairBanca,
  extrairCargosMedicos,
  extrairDataProva,
  extrairInscricoes,
  periodoListagem,
  tipoDoTexto,
} from '../extract';
import { decodificar, interpretarRobots, permitidoPorRobots } from '../http';
import { parseFepese, parseFundatec } from '../sources/bancas';
import { cnbVaiDetalhar, parseDetalheCnb, parseListagemCnb } from '../sources/concursosNoBrasil';
import { parseDetalhePci, parseListagemPci } from '../sources/pci';

const FIX = resolve(__dirname, '../../__fixtures__');
const html = (nome: string) => readFileSync(resolve(FIX, nome), 'utf8');
const geo = criarGeo(
  (JSON.parse(readFileSync(resolve(__dirname, '../../data/municipios-sul.json'), 'utf8')) as { municipios: MunicipiosPorUF }).municipios,
);
const AGORA = new Date('2026-11-18T12:00:00.000Z');

describe('extratores de texto', () => {
  it('datas por extenso e numéricas', () => {
    expect(datasNoTexto('de 14 de novembro de 2026 a 2 de dezembro de 2026', AGORA).map((d) => d.data)).toEqual(['2026-11-14', '2026-12-02']);
    expect(datasNoTexto('prova em 1º de março', AGORA).map((d) => d.data)).toEqual(['2027-03-01']);
    expect(datasNoTexto('até 05/12/2026', AGORA).map((d) => d.data)).toEqual(['2026-12-05']);
  });
  it('período da listagem do PCI', () => {
    expect(periodoListagem('23 a 27/11/2026', AGORA)).toEqual({ inicio: '2026-11-23', fim: '2026-11-27' });
    expect(periodoListagem('23/11 a 01/12/2026', AGORA)).toEqual({ inicio: '2026-11-23', fim: '2026-12-01' });
    expect(periodoListagem('Reaberto até 24/11/2026', AGORA)).toEqual({ inicio: null, fim: '2026-11-24' });
  });
  it('inscrições, prova e banca a partir do texto da notícia', () => {
    const t =
      'As inscrições serão realizadas exclusivamente pela internet, no site do Instituto Unicampo, de 14 de novembro de 2026 a 2 de dezembro de 2026. A taxa é de R$ 70,00, com pagamento até 3 de dezembro de 2026. A prova objetiva está prevista para 20 de dezembro de 2026.';
    expect(extrairInscricoes(t, AGORA)).toEqual({ inicio: '2026-11-14', fim: '2026-12-02' });
    expect(extrairDataProva(t, AGORA, '2026-12-02')).toBe('2026-12-20');
    expect(extrairBanca(t)).toBe('Instituto Unicampo');
    expect(extrairBanca('O Instituto Omni é a banca organizadora do processo seletivo')).toBe('Instituto Omni');
    expect(extrairBanca('A prova objetiva terá 40 questões')).toBeNull();
    // Não atravessa ponto final nem quebra de linha
    expect(extrairBanca('O concurso será organizado pela Unioeste.\nEncontra-se aberto')).toBe('Unioeste');
    expect(extrairBanca('A banca é o Instituto Fênix.\nCompartilhe')).toBe('Instituto Fênix');
  });
  it('ano do edital', () => {
    expect(anoDoEdital('EDITAL DE ABERTURA Nº 130/2026')).toBe(2026);
    expect(anoDoEdital('Concurso Público nº 03/2027')).toBe(2027);
    expect(anoDoEdital('sem número')).toBeNull();
  });
  it('cargos médicos com vagas somadas por jornada', () => {
    const cargos = extrairCargosMedicos(['Médico Generalista, 20 horas semanais (2 vagas)', 'Médico Generalista, 40 horas semanais (2 vagas)']);
    expect(cargos).toHaveLength(1);
    expect(cargos[0]).toMatchObject({ nome: 'Médico Generalista', vagas: 4, cargaHoraria: '20h ou 40h semanais' });
  });
  it('tipo do certame', () => {
    expect(tipoDoTexto('Prefeitura abre processo seletivo para médicos')).toBe('processo-seletivo');
    expect(tipoDoTexto('Prefeitura abre concurso público para médicos')).toBe('concurso');
  });
});

describe('robots.txt e charset', () => {
  const regras = interpretarRobots('User-agent: Mediapartners-Google\nAllow: /\n\nUser-agent: *\nAllow: /\nDisallow: /pdf/\nDisallow: /*.php\n');
  it('respeita Disallow do grupo *', () => {
    expect(permitidoPorRobots(regras, '/concursos/sul/')).toBe(true);
    expect(permitidoPorRobots(regras, '/noticias/x')).toBe(true);
    expect(permitidoPorRobots(regras, '/pdf/edital.pdf')).toBe(false);
    expect(permitidoPorRobots(regras, '/portal/index.php')).toBe(false);
  });
  it('decodifica ISO-8859-1 (FUNDATEC)', () => {
    const bytes = new Uint8Array(readFileSync(resolve(FIX, 'fundatec-abertos.html')));
    expect(decodificar(bytes, 'text/html; charset=iso-8859-1')).toContain('Inscrições abertas');
  });
});

describe('PCI Concursos (fixture real)', () => {
  const itens = parseListagemPci(html('pci-sul.html'), AGORA);
  it('lê todos os itens da listagem do Sul com UF', () => {
    expect(itens.length).toBeGreaterThan(100);
    expect(itens.every((i) => i.uf === 'PR' || i.uf === 'SC' || i.uf === 'RS')).toBe(true);
  });
  it('item médico completo (Umuarama)', () => {
    const item = itens.find((i) => i.url.includes('medicos-generalistas'));
    expect(item).toMatchObject({ orgao: 'Prefeitura de Umuarama', uf: 'PR', cargosTexto: 'Médico Generalista', vagas: 4, remuneracaoMax: 14994.61 });
    const detalhe = parseDetalhePci(html('pci-detalhe-medico.html'));
    const [c, ...resto] = construirConcursos({ item: item!, detalhe, geo, agora: AGORA });
    expect(resto).toHaveLength(0);
    expect(ConcursoSchema.safeParse(c).success).toBe(true);
    expect(c).toMatchObject({
      id: 'pr-umuarama-prefeitura-medicina-geral-especialidades-2026',
      cidade: 'Umuarama',
      banca: 'Instituto Unicampo',
      vagasTotal: 4,
      dataProva: '2026-12-20',
      inscricoes: { inicio: '2026-11-14', fim: '2026-12-02' },
      subcategoria: 'clinico-esf-plantonista',
    });
  });
  it('não cria vaga médica para docência ("Professor Visitante")', () => {
    const ifpr = itens.find((i) => i.orgao.startsWith('IFPR'));
    expect(ifpr).toBeDefined();
    expect(construirConcursos({ item: ifpr!, detalhe: null, geo, agora: AGORA })).toEqual([]);
  });
});

describe('Concursos no Brasil (fixture real)', () => {
  it('listagem e triagem de detalhe', () => {
    const itens = parseListagemCnb(html('cnb-pr.html'), 'PR');
    expect(itens.length).toBeGreaterThan(20);
    expect(itens.every((i) => i.uf === 'PR' && i.url.startsWith('https://concursosnobrasil.com/'))).toBe(true);
    expect(itens.filter(cnbVaiDetalhar).length).toBeLessThan(itens.length);
  });
  it('detalhe sem vaga médica não gera registro', () => {
    const det = parseDetalheCnb(html('cnb-detalhe.html'));
    expect(det.publicadoEm).toBe('2026-11-17T07:10:55-03:00');
    expect(extrairBanca(det.texto)).toBe('Instituto Omni');
    const item = parseListagemCnb(html('cnb-pr.html'), 'PR').find((i) => i.orgao === 'Prefeitura de Alto Piquiri')!;
    expect(construirConcursos({ item, detalhe: det, geo, agora: AGORA })).toEqual([]);
  });
});

describe('bancas (fixtures reais)', () => {
  it('FUNDATEC: registro próprio quando o título cita médicos', () => {
    const bytes = new Uint8Array(readFileSync(resolve(FIX, 'fundatec-abertos.html')));
    const itens = parseFundatec(decodificar(bytes, 'text/html; charset=iso-8859-1'), geo, AGORA);
    expect(itens.length).toBeGreaterThan(5);
    const proprios = itens.flatMap((i) => construirDeBanca(i, geo, AGORA));
    expect(proprios).toHaveLength(1);
    expect(proprios[0]).toMatchObject({ uf: 'RS', cidade: 'Caxias do Sul', banca: 'FUNDATEC', inscricoes: { fim: '2026-11-29' } });
  });
  it('FEPESE: destaques com UF por município', () => {
    const itens = parseFepese(html('fepese-concursos.html'), geo);
    expect(itens.length).toBeGreaterThan(0);
    expect(itens.every((i) => i.uf === 'SC')).toBe(true);
  });
});
