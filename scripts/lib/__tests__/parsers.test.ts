import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { criarGeo, type MunicipiosPorUF } from '../../../src/shared/concursos/geo';
import { ConcursoSchema } from '../../../src/shared/concursos/schema';
import { construirConcursos, construirDeBanca, enriquecerComBancas, tituloDeDocencia } from '../build';
import {
  anoDoEdital,
  datasNoTexto,
  extrairBanca,
  extrairCargosMedicos,
  extrairDataProva,
  extrairInscricoes,
  numeroEdital,
  periodoListagem,
  tipoDoTexto,
} from '../extract';
import { decodificar, interpretarRobots, permitidoPorRobots } from '../http';
import { parseFepese, parseFundatec } from '../sources/bancas';
import { parseDetalheCnb, parseListagemCnb } from '../sources/concursosNoBrasil';
import { atoDeAbertura, ofereceVagaMedica, parseBuscaDiario, parseMateriaDiario, tituloPodeSerAbertura } from '../sources/diarios';
import { orgaoJc, parseDetalheJc, parseListagemJc, ufDoItemJc, ufsDoCampoJc } from '../sources/jc';
import { itensBancaObjetiva, orgaoObjetiva, parseDetalheObjetiva, parseListagemObjetiva, partesTituloObjetiva } from '../sources/objetiva';
import { parseDetalhePci, parseListagemPci } from '../sources/pci';

const FIX = resolve(__dirname, '../../__fixtures__');
const html = (nome: string) => readFileSync(resolve(FIX, nome), 'utf8');
const geo = criarGeo(
  (JSON.parse(readFileSync(resolve(__dirname, '../../data/municipios-brasil.json'), 'utf8')) as { municipios: MunicipiosPorUF }).municipios,
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

describe('Chapecó/SC 2026 (edital que ficou fora do Radar)', () => {
  const det = parseDetalhePci(html('pci-detalhe-chapeco.html'));
  const item = {
    fonte: 'pci' as const,
    url: 'https://www.pciconcursos.com.br/noticias/municipio-de-chapeco-sc-abre-concurso-com-91-vagas-e-salarios-de-ate-25599',
    orgao: 'Prefeitura de Chapecó',
    titulo: 'Município de Chapecó - SC abre concurso com 91 vagas e salários de até R$ 25.599,11',
    uf: 'SC' as const,
    cargosTexto: 'Assistente Social, Atendente de Consultório Dentário, Cirurgião Dentista, ...',
    vagas: 91,
    remuneracaoMax: 25599.11,
    escolaridade: 'Médio / Superior',
    inscricoes: { inicio: '2026-12-07', fim: '2027-01-07' },
    incompleto: true,
  };
  const registros = construirConcursos({ item, detalhe: det, geo, agora: new Date('2026-11-25T21:00:00Z') });

  it('gera Medicina do Trabalho + clínico/especialidades com os 22 cargos médicos (sem perder qualificados)', () => {
    expect(registros.map((r) => r.tag).sort()).toEqual(['medicina-do-trabalho', 'medicina-geral-especialidades']);
    const geral = registros.find((r) => r.tag === 'medicina-geral-especialidades')!;
    const nomes = geral.cargos.map((c) => c.nome);
    expect(nomes).toHaveLength(21);
    expect(nomes).toEqual(expect.arrayContaining(['Médico Endocrinologista', 'Médico Endocrinologista Pediátrico', 'Médico Pneumologista', 'Médico Pneumologista Infantil', 'Médico ESF', 'Médico Clínico Geral']));
    expect(nomes).not.toContain('Médico Veterinário');
    expect(geral.subcategoria).toBe('clinico-esf-plantonista');
    expect(geral.cidade).toBe('Chapecó');
  });

  it('extrai número do edital, inscrições e prova', () => {
    for (const r of registros) {
      expect(r.edital).toBe('3/2026');
      expect(r.inscricoes).toEqual({ inicio: '2026-12-07', fim: '2027-01-07' });
      expect(r.ano).toBe(2026);
    }
  });
});

describe('número do edital', () => {
  it('prefere "Concurso Público nº" e normaliza zeros', () => {
    expect(numeroEdital('Edital nº 001/2026 – Edital de Abertura. Concurso Público nº 003/2026')).toBe('3/2026');
    expect(numeroEdital('PROCESSO SELETIVO SIMPLIFICADO Nº 12/2026')).toBe('12/2026');
    expect(numeroEdital('Edital de Abertura nº 05/2027')).toBe('5/2027');
  });
  it('ignora retificação, resultado e convocação', () => {
    expect(numeroEdital('Edital de Retificação nº 002/2026')).toBeNull();
    expect(numeroEdital('Resultado do Concurso Público nº 001/2025')).toBeNull();
    expect(numeroEdital('Concurso público para médicos em 2026')).toBeNull();
  });
});

describe('seleção de docência não vira vaga médica', () => {
  it('título de professor/residência sem "médico"', () => {
    expect(tituloDeDocencia('UFFS - RS abre seleção para professor de Medicina no campus de Passo Fundo')).toBe(true);
    expect(tituloDeDocencia('Hospital abre seleção de residência médica')).toBe(true);
    expect(tituloDeDocencia('Prefeitura abre concurso para médicos e professores')).toBe(false);
    expect(tituloDeDocencia('Prefeitura de Chapecó abre concurso com 91 vagas')).toBe(false);
  });
  it('especialidade solta numa seleção de professor é descartada', () => {
    const item = {
      fonte: 'pci' as const,
      url: 'https://www.pciconcursos.com.br/noticias/uffs-professor',
      orgao: 'UFFS - Universidade Federal da Fronteira Sul',
      titulo: 'UFFS - RS abre seleção para professor de Medicina no campus de Passo Fundo',
      uf: 'RS' as const,
      cargosTexto: '',
      vagas: 1,
      remuneracaoMax: 5037.78,
      escolaridade: 'Superior',
      inscricoes: { inicio: null, fim: null },
      incompleto: true,
    };
    const detalhe = { titulo: item.titulo, texto: 'Área: Medicina de Família e Comunidade', linhas: ['Área: Medicina de Família e Comunidade (1 vaga)'], publicadoEm: null, observacoes: [] };
    expect(construirConcursos({ item, detalhe, geo, agora: AGORA })).toEqual([]);
  });
});

describe('Instituto Objetiva (fixtures reais, 25/11/2026)', () => {
  const latin1 = (nome: string) => decodificar(new Uint8Array(readFileSync(resolve(FIX, nome))), 'text/html; charset=ISO-8859-1');
  const REF = new Date('2026-11-25T21:00:00Z');

  it('home: Chapecó aparece no dia do edital, antes de abrir inscrição', () => {
    const itens = parseListagemObjetiva(html('objetiva-home.html'), 'https://www.objetivas.com.br/home', REF);
    const chapeco = itens.find((i) => i.url === 'https://concursos.objetivas.com.br/informacoes/2650/');
    expect(chapeco).toMatchObject({ fonte: 'objetiva', uf: 'SC', orgao: 'Prefeitura de Chapecó', inscricoes: { inicio: '2026-12-07', fim: '2027-01-07' } });
    expect(itens.length).toBeGreaterThan(10);
    expect(new Set(itens.map((i) => i.url)).size).toBe(itens.length);
  });

  it('inscrições abertas: tipo de órgão vem do título', () => {
    const itens = parseListagemObjetiva(latin1('objetiva-abertos.html'), 'https://concursos.objetivas.com.br/index/abertos/', REF);
    expect(itens.length).toBeGreaterThan(0);
    expect(itens.find((i) => i.url.endsWith('/informacoes/2630/'))).toMatchObject({ uf: 'RS', orgao: 'Câmara Municipal de Soledade' });
  });

  it('página do concurso: tabela de vagas completa, PDF do edital e data de publicação', () => {
    const det = parseDetalheObjetiva(latin1('objetiva-informacoes-chapeco.html'));
    expect(det.titulo).toBe('CHAPECÓ/SC - Município - Concurso Público 003/2026');
    expect(det.editalUrl).toMatch(/^https:\/\/anexos-r2\.selecao\.net\.br\/.+\.pdf$/);
    expect(det.publicadoEm).toBe('2026-11-25T12:00:00-03:00');
    const item = parseListagemObjetiva(html('objetiva-home.html'), 'https://www.objetivas.com.br/home', REF).find((i) => i.url.endsWith('/2650/'))!;
    const regs = construirConcursos({ item, detalhe: det, geo, agora: REF });
    expect(regs.map((r) => r.tag).sort()).toEqual(['medicina-do-trabalho', 'medicina-geral-especialidades']);
    const geral = regs.find((r) => r.tag === 'medicina-geral-especialidades')!;
    expect(geral.cargos).toHaveLength(21);
    expect(geral.id).toBe('sc-chapeco-prefeitura-medicina-geral-especialidades-2026');
    expect(geral.edital).toBe('3/2026');
    expect(geral.editalUrl).toBe(det.editalUrl);
    expect(geral.firstSeenAt).toBe('2026-11-25T15:00:00.000Z');
  });

  it('sem a página do concurso (403), a listagem vira link oficial no registro do PCI', () => {
    const det = parseDetalhePci(html('pci-detalhe-chapeco.html'));
    const item = {
      fonte: 'pci' as const,
      url: 'https://www.pciconcursos.com.br/noticias/municipio-de-chapeco-sc-abre-concurso-com-91-vagas-e-salarios-de-ate-25599',
      orgao: 'Prefeitura de Chapecó',
      titulo: 'Município de Chapecó - SC abre concurso com 91 vagas e salários de até R$ 25.599,11',
      uf: 'SC' as const,
      cargosTexto: '',
      vagas: 91,
      remuneracaoMax: 25599.11,
      escolaridade: 'Superior',
      inscricoes: { inicio: '2026-12-07', fim: '2027-01-07' },
      incompleto: true,
    };
    const banca = itensBancaObjetiva(parseListagemObjetiva(html('objetiva-home.html'), 'https://www.objetivas.com.br/home', REF));
    const [geral] = enriquecerComBancas(construirConcursos({ item, detalhe: det, geo, agora: REF }), banca, geo);
    expect(geral?.relacionados.map((r) => r.url)).toContain('https://concursos.objetivas.com.br/informacoes/2650/');
  });

  it('partes do título', () => {
    expect(partesTituloObjetiva('SÃO MIGUEL DO OESTE/SC - Consórcio Intermunicipal - Processo Seletivo 02/2026')).toEqual({
      cidade: 'São Miguel do Oeste',
      uf: 'SC',
      tipoOrgao: 'Consórcio Intermunicipal',
      nomeOrgao: null,
      resto: 'Processo Seletivo 02/2026',
    });
    expect(orgaoObjetiva('Chapecó', 'Município')).toBe('Prefeitura de Chapecó');
    // Órgão antes da cidade; "S/A" não é UF.
    const eptc = partesTituloObjetiva('EMPRESA PÚBLICA DE TRANSPORTE E CIRCULAÇÃO S/A (EPTC) - PORTO ALEGRE/RS');
    expect(eptc).toMatchObject({ cidade: 'Porto Alegre', uf: 'RS', nomeOrgao: 'Empresa Pública de Transporte e Circulação S/A (EPTC)' });
    expect(orgaoObjetiva(eptc.cidade, eptc.tipoOrgao, eptc.nomeOrgao)).toBe('Empresa Pública de Transporte e Circulação S/A (EPTC)');
  });
});

describe('JC Concursos (fixtures reais, 25/11/2026)', () => {
  const itens = parseListagemJc(html('jc-inscricoes-abertas.html'));

  it('lista nacional de inscrições abertas numa página só', () => {
    expect(itens).toHaveLength(82);
    expect(itens.find((i) => i.url.endsWith('/concurso-aparecida-de-goiania-go-81274'))).toMatchObject({
      fonte: 'jc-concursos',
      uf: 'GO',
      orgao: 'Aparecida de Goiânia',
      remuneracaoMax: 4508.28,
      vagas: 6859,
    });
    // Órgão nacional (sem UF no título nem no slug): a UF vem da página ("Estados com Vagas").
    expect(itens.find((i) => i.url.endsWith('/concurso-ministerio-da-saude-79866'))?.uf).toBeNull();
  });

  it('UF pelo título ou pelo slug', () => {
    expect(ufDoItemJc('Bombeiros PB – CFO', 'concurso-bombeiros-pb-oficiais-81387')).toBe('PB');
    expect(ufDoItemJc('Aparecida de Goiânia (GO) 2026', '/concurso/x-81274')).toBe('GO');
    expect(ufDoItemJc('Banestes', 'concurso-banestes-81438')).toBeNull();
  });

  it('página do concurso: campos, agenda, banca e cargo médico', () => {
    const det = parseDetalheJc(html('jc-concurso-ghc.html'));
    expect(det.titulo).toBe('Concurso GHC 2026');
    expect(det.campos).toMatchObject({ Organizadora: 'Fundatec', inicioIso: '2026-11-05', fimIso: '2026-12-04', provaIso: '2027-01-10' });
    expect(ufsDoCampoJc(det.campos?.['Estados com Vagas'])).toEqual(['RS']);
    expect(extrairCargosMedicos(det.linhas).map((c) => c.nome)).toEqual(['Médico']);
  });

  it('processo administrativo do Ministério da Saúde não vira vaga médica', () => {
    const det = parseDetalheJc(html('jc-concurso-ministerio-saude.html'));
    expect(ufsDoCampoJc(det.campos?.['Estados com Vagas'])).toEqual(['DF', 'GO', 'MG', 'PA', 'PR', 'PE', 'SP']);
    expect(extrairCargosMedicos(det.linhas)).toEqual([]);
  });

  it('nome do órgão no padrão das outras fontes', () => {
    expect(orgaoJc('Prefeitura Aparecida de Goiânia')).toBe('Prefeitura de Aparecida de Goiânia');
    expect(orgaoJc('Prefeitura de Campinas')).toBe('Prefeitura de Campinas');
    expect(orgaoJc('GHC - Grupo Hospitalar Conceição')).toBe('GHC - Grupo Hospitalar Conceição');
  });
});

describe('Diários Oficiais dos Municípios (SIGPub, fixtures reais de 25/11/2026)', () => {
  it('busca: matérias com entidade e paginação', () => {
    const r = parseBuscaDiario(html('diariomunicipal-busca-amm-mg.html'));
    expect(r.itens.length).toBe(r.ate);
    expect(r.total).toBeGreaterThanOrEqual(r.ate);
    const monlevade = r.itens.find((i) => /MONLEVADE|M[ÉE]DICO PLANTONISTA/.test(i.titulo));
    expect(monlevade).toMatchObject({ fonte: 'diario-oficial', orgao: 'Prefeitura de João Monlevade' });
    expect(monlevade?.url).toMatch(/^https:\/\/www\.diariomunicipal\.com\.br\/amm-mg\/materia\/[A-Z0-9]+$/);
  });

  it('título: descarta convocação, posse, licitação e resultado; mantém abertura e títulos genéricos', () => {
    expect(tituloPodeSerAbertura('EDITAL DE CONVOCAÇÃO PARA NOMEAÇÃO E POSSE N.º 86/2026')).toBe(false);
    expect(tituloPodeSerAbertura('AVISO DO EDITAL DO PREGÃO ELETRÔNICO Nº. 85/2026')).toBe(false);
    expect(tituloPodeSerAbertura('EDITAL Nº 182/2026 DEFERIMENTO DAS INCRIÇÕES')).toBe(false);
    expect(tituloPodeSerAbertura('EXTRATO DE CONTRATOS EDITAL DE CREDENCIAMENTO Nº 03/2026')).toBe(false);
    expect(tituloPodeSerAbertura('EDITAL Nº 16/2026 PROCESSO SELETIVO PÚBLICO PARA O CARGO DE MÉDICO PLANTONISTA')).toBe(true);
    expect(tituloPodeSerAbertura('EDITAL 171/2026 CONTRATO TEMPORÁRIO')).toBe(true);
    expect(tituloPodeSerAbertura('EDITAL Nº 209/2026')).toBe(true);
  });

  it('matéria de abertura vira concurso com os cargos médicos', () => {
    const det = parseMateriaDiario(html('diariomunicipal-materia-monlevade.html'));
    expect(det.titulo).toMatch(/^EDITAL Nº 16\/2026 PROCESSO SELETIVO/);
    expect(det.publicadoEm).toBe('2026-11-24T12:00:00-03:00');
    expect(det.campos?.estado).toBe('ESTADO DE MINAS GERAIS');
    expect(atoDeAbertura(det.texto)).toBe(true);
    expect(ofereceVagaMedica(det.texto)).toBe(true);
    expect(geo.ufPorNomeEstado(det.campos?.estado ?? '')).toBe('MG');
    const item = { ...parseBuscaDiario(html('diariomunicipal-busca-amm-mg.html')).itens.find((i) => /MONLEVADE|PLANTONISTA/.test(i.titulo))!, uf: 'MG' as const };
    const [reg] = construirConcursos({ item, detalhe: det, geo, agora: new Date('2026-11-25T21:00:00Z') });
    expect(reg).toMatchObject({ uf: 'MG', cidade: 'João Monlevade', tipo: 'processo-seletivo', subcategoria: 'especialidades', firstSeenAt: '2026-11-24T15:00:00.000Z' });
    expect(reg?.cargos.map((c) => c.nome)).toEqual(['Médico Plantonista (Pneumologista)', 'Médico Plantonista (Endocrinologista)']);
  });

  it('convocação e "atestado médico" não viram vaga', () => {
    expect(atoDeAbertura('O Município convoca os candidatos aprovados no Processo Seletivo 02/2026 para posse.')).toBe(false);
    expect(ofereceVagaMedica('Os aprovados apresentarão exames e atestados médicos no ato da posse.')).toBe(false);
    expect(ofereceVagaMedica('Vaga para Médico Veterinário, 40 horas.')).toBe(false);
    expect(ofereceVagaMedica('cargo de Médico Clínico Geral, 40 horas semanais, R$ 15.000,00')).toBe(true);
  });
});
