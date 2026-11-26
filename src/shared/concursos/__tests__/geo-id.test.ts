import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CAPITAL, criarGeo, type MunicipiosPorUF } from '../geo';
import { gerarIdConcurso, gerarIdManual } from '../id';
import { chaveCargo, chaveOrgao, parseReais, parseVagas, slug, todosReais } from '../normalize';

const municipios = JSON.parse(
  readFileSync(resolve(__dirname, '../../../../scripts/data/municipios-brasil.json'), 'utf8'),
) as { municipios: MunicipiosPorUF };
const geo = criarGeo(municipios.municipios);

describe('lista do IBGE', () => {
  it('tem os 1.191 municípios do Sul', () => {
    expect(municipios.municipios.PR).toHaveLength(399);
    expect(municipios.municipios.SC).toHaveLength(295);
    expect(municipios.municipios.RS).toHaveLength(497);
  });
});

describe('geo', () => {
  it('cidade por padrão explícito', () => {
    expect(geo.cidadeNoTexto('Prefeitura de Umuarama - PR abre concurso', 'PR')).toBe('Umuarama');
    expect(geo.cidadeNoTexto('Prefeitura Municipal de São José dos Pinhais', 'PR')).toBe('São José dos Pinhais');
    expect(geo.cidadeNoTexto('Município de Caxias do Sul/RS', 'RS')).toBe('Caxias do Sul');
    expect(geo.cidadeNoTexto('Prefeitura do Município de Curitibanos', 'SC')).toBe('Curitibanos');
  });
  it('não confunde nome de instituição com município', () => {
    expect(geo.cidadeNoTexto('FHGV - Fundação Hospitalar Getúlio Vargas - RS', 'RS')).toBeNull();
  });
  it('busca livre só com nomes não ambíguos', () => {
    expect(geo.cidadeNoTexto('O hospital fica em Sapucaia do Sul, na região metropolitana.', 'RS')).toBe('Sapucaia do Sul');
    expect(geo.cidadeNoTexto('No planalto e com saudades do progresso', 'RS')).toBeNull();
  });
  it('respeita a UF', () => {
    expect(geo.cidadeNoTexto('Prefeitura de Umuarama', 'SC')).toBeNull();
    expect(geo.ufsDoMunicipio('Cruzeiro do Sul').sort()).toEqual(['AC', 'PR', 'RS']);
  });
  it('UFs mencionadas (órgãos nacionais)', () => {
    expect(geo.ufsMencionadas('Vagas no HU-UFSC e no HC-UFPR')).toEqual(['PR', 'SC']);
    expect(geo.ufsMencionadas('Lotação em Porto Alegre')).toEqual(['RS']);
    expect(geo.ufsMencionadas('Vagas em São Paulo e Minas Gerais')).toEqual(['SP', 'MG']);
  });
});

describe('geo — Brasil (27 UFs)', () => {
  it('siglas que também são palavras só valem com "/", "-" ou "("', () => {
    expect(geo.ufsMencionadas('Aracaju/SE, Maceió - AL e Teresina (PI)')).toEqual(['SE', 'AL', 'PI']);
    expect(geo.ufsMencionadas('AS INSCRIÇÕES SE ENCERRAM NO DIA 10 E O EDITAL AL')).toEqual([]);
    expect(geo.ufPorSigla('Hospital em Chapecó, SC')).toBe('SC');
  });
  it('"para" (preposição) não é o Pará; "Vale do Paraíba" não é a Paraíba', () => {
    expect(geo.ufsMencionadas('Edital para médicos, para todo o país')).toEqual([]);
    expect(geo.ufsMencionadas('Vagas em Belém do Pará e no interior do Pará')).toEqual(['PA']);
    expect(geo.ufsMencionadas('Hospital regional do Vale do Paraíba')).toEqual([]);
    expect(geo.ufsMencionadas('Vagas em João Pessoa, na Paraíba')).toEqual(['PB']);
  });
  it('Mato Grosso × Mato Grosso do Sul; Brasília (sede de órgão federal) não conta como lotação', () => {
    expect(geo.ufsMencionadas('Vagas em Mato Grosso do Sul')).toEqual(['MS']);
    expect(geo.ufsMencionadas('Vagas em Mato Grosso')).toEqual(['MT']);
    expect(geo.ufsMencionadas('O Ministério da Saúde, em Brasília, divulgou o edital')).toEqual([]);
    expect(geo.ufsMencionadas('Vagas no Distrito Federal')).toEqual(['DF']);
  });
  it('hospitais universitários e polos', () => {
    expect(geo.ufsMencionadas('HU-UFJF, em Juiz de Fora - MG')).toEqual(['MG']);
    expect(geo.ufsMencionadas('Lotação no HUWC, em Fortaleza')).toEqual(['CE']);
    expect(geo.ufsMencionadas('vagas na fortaleza do exército')).toEqual([]);
  });
  it('cidade e capital nas 27 UFs', () => {
    expect(geo.cidadeNoTexto('Prefeitura de Juazeiro do Norte abre concurso', 'CE')).toBe('Juazeiro do Norte');
    expect(geo.cidadeNoTexto('Prefeitura de Juazeiro abre concurso', 'BA')).toBe('Juazeiro');
    expect(geo.cidadeNoTexto('Concurso em Petrolina/PE', 'PE')).toBe('Petrolina');
    expect(geo.cidadeNoTexto('Prefeitura de Umuarama', 'SP')).toBeNull();
    expect(CAPITAL.TO).toBe('Palmas');
    expect(Object.keys(CAPITAL)).toHaveLength(27);
  });
});

describe('normalização e ids', () => {
  it('slug', () => {
    expect(slug('Prefeitura de São José - SC')).toBe('prefeitura-de-sao-jose-sc');
  });
  it('chaveOrgao unifica grafias do mesmo órgão', () => {
    expect(chaveOrgao('Prefeitura Municipal de Umuarama')).toBe(chaveOrgao('Prefeitura de Umuarama'));
    expect(chaveOrgao('Prefeitura do Município de Curitibanos')).toBe('prefeitura');
    expect(chaveOrgao('Município de Caxias do Sul')).toBe('prefeitura');
    expect(chaveOrgao('FHGV - Fundação Hospitalar Getúlio Vargas')).toBe(chaveOrgao('FHGV'));
    expect(chaveOrgao('Fundação Hospitalar Getúlio Vargas')).toBe('fhgv');
    expect(chaveOrgao('GHC - Grupo Hospitalar Conceição')).toBe(chaveOrgao('Grupo Hospitalar Conceição S.A'));
    expect(chaveOrgao('IMA SC')).toBe(chaveOrgao('IMA - Instituto do Meio Ambiente do Estado de Santa Catarina'));
    expect(chaveOrgao('SES')).toBe(chaveOrgao('SES - Secretaria de Estado da Saúde de Santa Catarina'));
    // Brasil: sigla e nome de qualquer UF saem da chave; "para" (preposição) não é o Pará.
    expect(chaveOrgao('SESAB/BA')).toBe(chaveOrgao('SESAB - Secretaria da Saúde do Estado da Bahia'));
    expect(chaveOrgao('Hospital das Clínicas de Goiás')).toBe(chaveOrgao('Hospital das Clínicas'));
    expect(chaveOrgao('Consórcio Intermunicipal para o Desenvolvimento da Saúde')).not.toBe(chaveOrgao('Consórcio Intermunicipal o Desenvolvimento da Saúde'));
    expect(chaveOrgao('Câmara Municipal de Ijuí')).toBe('camara');
  });
  it('chaveCargo ignora plural e acentos', () => {
    expect(chaveCargo('Médicos Generalistas')).toBe(chaveCargo('Médico Generalista'));
  });
  it('id determinístico', () => {
    const p = { uf: 'PR' as const, cidade: 'Umuarama', orgao: 'Prefeitura Municipal de Umuarama', tag: 'medicina-geral-especialidades' as const, ano: 2026 };
    expect(gerarIdConcurso(p)).toBe('pr-umuarama-prefeitura-medicina-geral-especialidades-2026');
    expect(gerarIdConcurso({ ...p, orgao: 'Prefeitura de Umuarama' })).toBe(gerarIdConcurso(p));
    expect(gerarIdConcurso({ ...p, tag: 'medicina-do-trabalho' })).not.toBe(gerarIdConcurso(p));
    expect(gerarIdManual({ uf: 'SC', cidade: 'Lages', orgao: 'Prefeitura de Lages', ano: 2026 }, 'abc123')).toMatch(/^manual-sc-lages-prefeitura-2026-abc123$/);
  });
  it('valores monetários e vagas', () => {
    expect(parseReais('4 vagas até R$ 14.994,61')).toBe(14994.61);
    expect(todosReais('salários de R$ 7.401,76 e R$ 14.994,61; até R$ 10,3 mil')).toEqual([7401.76, 14994.61, 10300]);
    expect(parseVagas('4 vagas até R$ 14.994,61')).toBe(4);
    expect(parseVagas('1 vaga')).toBe(1);
  });
});
