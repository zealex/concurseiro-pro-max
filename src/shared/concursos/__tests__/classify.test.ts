import { describe, expect, it } from 'vitest';
import {
  classificarCargo,
  extrairNomesCargosMedicos,
  isCargoMedico,
  textoMencionaMedicina,
  tituloIndicaVagaMedica,
} from '../classify';

describe('isCargoMedico', () => {
  it.each([
    'Médico',
    'Médico Generalista',
    'Médica do Trabalho',
    'Médico Clínico Geral 40h',
    'Médico ESF',
    'Perito Médico-Legista',
    'Médico Legista',
    'Psiquiatra',
    'Médico Ginecologista e Obstetra',
    'Médico Plantonista',
    'Anestesiologista',
  ])('reconhece "%s" como vaga médica', (nome) => {
    expect(isCargoMedico(nome)).toBe(true);
  });

  it.each([
    'Médico Veterinário',
    'Técnico em Enfermagem',
    'Enfermeiro Plantonista',
    'Físico Médico',
    'Cirurgião-Dentista',
    'Biomédico',
    'Auxiliar de Consultório Médico',
    'Perito Criminal',
    'Professor de Medicina',
    'Engenheiro Sanitarista',
    'Residência Médica em Pediatria',
    'Nutricionista',
  ])('rejeita "%s"', (nome) => {
    expect(isCargoMedico(nome)).toBe(false);
  });
});

describe('classificarCargo', () => {
  it('legista', () => {
    expect(classificarCargo('Perito Médico-Legista').tag).toBe('medico-legista');
    expect(classificarCargo('Médico Legista Psiquiatra').tag).toBe('medico-legista');
  });
  it('medicina do trabalho', () => {
    expect(classificarCargo('Médico do Trabalho').tag).toBe('medicina-do-trabalho');
    expect(classificarCargo('Perito Médico Federal').tag).toBe('medicina-do-trabalho');
  });
  it('clínico/ESF/plantonista', () => {
    for (const nome of ['Médico', 'Médico Clínico Geral', 'Médico ESF', 'Médico Plantonista', 'Médico Generalista', 'Médico 40 horas']) {
      expect(classificarCargo(nome)).toEqual({ tag: 'medicina-geral-especialidades', subcategoria: 'clinico-esf-plantonista' });
    }
  });
  it('especialidades', () => {
    for (const nome of ['Médico Pediatra', 'Psiquiatra', 'Médico Cardiologista', 'Médico Auditor']) {
      expect(classificarCargo(nome)).toEqual({ tag: 'medicina-geral-especialidades', subcategoria: 'especialidades' });
    }
  });
});

describe('extrairNomesCargosMedicos', () => {
  it('extrai cargo de item de lista com jornada e vagas', () => {
    expect(extrairNomesCargosMedicos('Médico Generalista, 20 horas semanais (2 vagas)')).toEqual(['Médico Generalista']);
  });
  it('separa "Médico Pediatra e Médico Psiquiatra"', () => {
    expect(extrairNomesCargosMedicos('Médico Pediatra e Médico Psiquiatra')).toEqual(['Médico Pediatra', 'Médico Psiquiatra']);
  });
  it('mantém "Ginecologista e Obstetra" como um cargo', () => {
    expect(extrairNomesCargosMedicos('Médico Ginecologista e Obstetra (1 vaga)')).toEqual(['Médico Ginecologista e Obstetra']);
  });
  it('ignora adjetivos ("Laudo Médico", "Assistência Médico-Hospitalar")', () => {
    expect(extrairNomesCargosMedicos('Plano de Assistência Médico-Hospitalar;')).toEqual([]);
    expect(extrairNomesCargosMedicos('Candidatos PcD devem enviar Laudo Médico atualizado')).toEqual([]);
  });
  it('ignora especialidade de outra profissão ("Enfermeiro Intensivista", "Engenheiro Sanitarista")', () => {
    expect(extrairNomesCargosMedicos('Enfermeiro Intensivista e Engenheiro Sanitarista')).toEqual([]);
  });
  it('aceita especialista sem a palavra Médico', () => {
    expect(extrairNomesCargosMedicos('Vagas: Psiquiatra (1), Pediatra (2)')).toEqual(['Psiquiatra', 'Pediatra']);
  });
  it('lista de cargos com Médico no meio', () => {
    expect(
      extrairNomesCargosMedicos('Para o ensino superior completo, as oportunidades são para Assistente Social, Cirurgião-Dentista, Fonoaudiólogo, Médico, Nutricionista e Psicólogo(a).'),
    ).toEqual(['Médico']);
  });
  it('formato "Médico (Especialidade)" (GHC)', () => {
    expect(extrairNomesCargosMedicos('Médico (Anestesiologia)')).toEqual(['Médico (Anestesiologia)']);
    expect(extrairNomesCargosMedicos('Médico (Medicina de Emergência: UPA)')).toEqual(['Médico (Medicina de Emergência: UPA)']);
    expect(classificarCargo('Médico (Medicina de Emergência: UPA)').subcategoria).toBe('clinico-esf-plantonista');
    expect(classificarCargo('Médico (Medicina do Trabalho)').tag).toBe('medicina-do-trabalho');
  });
  it('não confunde "(1 vaga)" e "(cadastro de reserva)" com especialidade', () => {
    expect(extrairNomesCargosMedicos('Médico (1 vaga)')).toEqual(['Médico']);
    expect(extrairNomesCargosMedicos('Médico (cadastro de reserva)')).toEqual(['Médico']);
  });
  it('"Ginecologista/Obstetra" não gera "Obstetra" solto', () => {
    expect(extrairNomesCargosMedicos('Médico Ginecologista/Obstetra')).toEqual(['Médico Ginecologista']);
  });
  it('ignora "Enfermeiro (Intensivista Adulto)"', () => {
    expect(extrairNomesCargosMedicos('Enfermeiro (Intensivista Adulto)')).toEqual([]);
  });
  it('"e" separa cargos diferentes', () => {
    expect(extrairNomesCargosMedicos('Médico do Trabalho e Endocrinologista')).toEqual(['Médico do Trabalho', 'Endocrinologista']);
  });
  it('não pega Médico Veterinário', () => {
    expect(extrairNomesCargosMedicos('Engenheiro Agrônomo, Médico Veterinário, Nutricionista')).toEqual([]);
  });
});

describe('manchetes', () => {
  it('textoMencionaMedicina', () => {
    expect(textoMencionaMedicina('Prefeitura de Umuarama - PR abre concurso público para médicos generalistas')).toBe(true);
    expect(textoMencionaMedicina('Prefeitura abre vagas para médico veterinário')).toBe(false);
    expect(textoMencionaMedicina('Concurso para técnico em enfermagem')).toBe(false);
  });
  it('tituloIndicaVagaMedica descarta docência e residência', () => {
    expect(tituloIndicaVagaMedica('UFPR abre concurso para professor de Medicina')).toBe(false);
    expect(tituloIndicaVagaMedica('Hospital abre seleção de residência médica')).toBe(false);
    expect(tituloIndicaVagaMedica('Fundação Hospitalar abre processo seletivo para médicos')).toBe(true);
  });
});
