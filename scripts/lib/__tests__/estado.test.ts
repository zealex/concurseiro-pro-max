import { describe, expect, it } from 'vitest';
import {
  assinaturaItem,
  carregarEstado,
  estadoVazio,
  MAX_FALHAS_VISITA,
  motivoVisita,
  podarEstado,
  registrarFalhaVisita,
  registrarSaudeFonte,
  registrarVisita,
  registrarVisto,
  serializarEstado,
} from '../estado';
import type { ItemListagem } from '../sources/types';

const URL = 'https://www.pciconcursos.com.br/noticias/x';
const T0 = new Date('2026-11-25T12:00:00Z');
const horas = (h: number) => new Date(T0.getTime() + h * 3_600_000);

function item(parcial: Partial<ItemListagem> = {}): ItemListagem {
  return {
    fonte: 'pci',
    url: URL,
    orgao: 'Prefeitura de Chapecó',
    titulo: 'Município de Chapecó - SC abre concurso com 91 vagas',
    uf: 'SC',
    cargosTexto: 'Vários cargos',
    vagas: 91,
    remuneracaoMax: 25599.11,
    escolaridade: 'Médio / Superior',
    inscricoes: { inicio: '2026-12-07', fim: '2027-01-07' },
    incompleto: true,
    ...parcial,
  };
}

describe('memória do robô (estado)', () => {
  it('notícia nunca vista é aberta', () => {
    expect(motivoVisita(estadoVazio(), URL, assinaturaItem(item()), T0)).toBe('nova');
  });

  it('não médica e sem mudança na listagem não é reaberta', () => {
    const e = estadoVazio();
    const a = assinaturaItem(item());
    registrarVisita(e, URL, a, false, T0);
    expect(motivoVisita(e, URL, a, horas(1))).toBeNull();
    expect(motivoVisita(e, URL, a, horas(24 * 30))).toBeNull();
  });

  it('listagem alterada (retificação, novas datas) reabre a notícia', () => {
    const e = estadoVazio();
    registrarVisita(e, URL, assinaturaItem(item()), false, T0);
    const nova = assinaturaItem(item({ cargosTexto: 'Médico Clínico Geral, Enfermeiro' }));
    expect(motivoVisita(e, URL, nova, horas(1))).toBe('alterada');
    // Vista na listagem mas sem visita bem-sucedida → continua pendente de abertura.
    registrarVisto(e, URL, nova, horas(1));
    expect(motivoVisita(e, URL, nova, horas(2))).toBe('pendente');
  });

  it('notícia médica é revisitada depois de 24 h', () => {
    const e = estadoVazio();
    const a = assinaturaItem(item());
    registrarVisita(e, URL, a, true, T0);
    expect(motivoVisita(e, URL, a, horas(23))).toBeNull();
    expect(motivoVisita(e, URL, a, horas(25))).toBe('revisita');
  });

  it('item que ficou sem orçamento fica pendente para a próxima execução', () => {
    const e = estadoVazio();
    const a = assinaturaItem(item());
    registrarVisto(e, URL, a, T0);
    expect(motivoVisita(e, URL, a, horas(1))).toBe('pendente');
  });

  it('falha ao abrir: tenta de novo até o limite, preservando o "médico" da última visita boa', () => {
    const e = estadoVazio();
    const a = assinaturaItem(item());
    registrarVisita(e, URL, a, true, T0);
    registrarFalhaVisita(e, URL, a, horas(25));
    expect(e.urls[URL]?.medico).toBe(true);
    expect(e.urls[URL]?.falhas).toBe(1);

    const novaUrl = `${URL}-2`;
    for (let i = 0; i < MAX_FALHAS_VISITA; i++) registrarFalhaVisita(e, novaUrl, a, horas(i));
    expect(motivoVisita(e, novaUrl, a, horas(10))).toBeNull();
  });

  it('poda notícias que sumiram das listagens há mais de 30 dias', () => {
    const e = estadoVazio();
    const a = assinaturaItem(item());
    registrarVisto(e, URL, a, T0);
    registrarVisto(e, `${URL}-recente`, a, horas(24 * 29));
    expect(podarEstado(e, horas(24 * 31))).toBe(1);
    expect(Object.keys(e.urls)).toEqual([`${URL}-recente`]);
  });

  it('saúde da fonte conta falhas seguidas e zera no sucesso', () => {
    const e = estadoVazio();
    registrarSaudeFonte(e, 'PCI Concursos', false, 0, 'HTTP 503', T0);
    registrarSaudeFonte(e, 'PCI Concursos', false, 0, 'HTTP 503', horas(1));
    expect(e.fontes['PCI Concursos']?.falhasSeguidas).toBe(2);
    registrarSaudeFonte(e, 'PCI Concursos', true, 180, null, horas(2));
    expect(e.fontes['PCI Concursos']).toMatchObject({ falhasSeguidas: 0, itens: 180, ultimoErro: null });
  });

  it('JSON inválido vira estado vazio; serialização é estável', () => {
    expect(carregarEstado('lixo')).toEqual(estadoVazio());
    expect(carregarEstado({ versao: 2 })).toEqual(estadoVazio());
    const e = estadoVazio();
    registrarVisto(e, 'https://b', 'x', T0);
    registrarVisto(e, 'https://a', 'x', T0);
    const json = serializarEstado(e);
    expect(json.indexOf('https://a')).toBeLessThan(json.indexOf('https://b'));
    expect(carregarEstado(JSON.parse(json))).toEqual(e);
  });
});
