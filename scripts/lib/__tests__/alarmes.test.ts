import { describe, expect, it } from 'vitest';
import { planejarAlarmes, tituloAlarme } from '../../verificar-radar';
import { estadoVazio, registrarSaudeFonte } from '../estado';

const T0 = new Date('2026-11-25T12:00:00Z');
const horas = (h: number) => new Date(T0.getTime() + h * 3_600_000);

function falhar(vezes: number, fonte = 'PCI Concursos') {
  const e = estadoVazio();
  for (let i = 0; i < vezes; i++) registrarSaudeFonte(e, fonte, false, 0, 'HTTP 503', horas(i));
  return e;
}

describe('alarmes do Radar', () => {
  it('abre issue depois de 3 falhas seguidas de uma fonte essencial', () => {
    expect(planejarAlarmes(falhar(2), new Map())).toEqual([]);
    const acoes = planejarAlarmes(falhar(3), new Map());
    expect(acoes).toHaveLength(1);
    expect(acoes[0]).toMatchObject({ tipo: 'abrir', fonte: 'PCI Concursos', titulo: tituloAlarme('PCI Concursos') });
  });

  it('não reabre: lembra uma vez por dia enquanto continuar falhando', () => {
    const abertas = new Map([[tituloAlarme('PCI Concursos'), 42]]);
    expect(planejarAlarmes(falhar(4), abertas)).toEqual([]);
    expect(planejarAlarmes(falhar(27), abertas)).toMatchObject([{ tipo: 'lembrar', numero: 42 }]);
  });

  it('fecha a issue quando a fonte volta', () => {
    const e = falhar(5);
    registrarSaudeFonte(e, 'PCI Concursos', true, 180, null, horas(6));
    expect(planejarAlarmes(e, new Map([[tituloAlarme('PCI Concursos'), 42]]))).toMatchObject([{ tipo: 'fechar', numero: 42 }]);
  });

  it('fonte "melhor esforço" (banca) não gera alarme', () => {
    expect(planejarAlarmes(falhar(10, 'FUNDATEC'), new Map())).toEqual([]);
  });
});
