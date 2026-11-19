import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import type { BancoConteudo, QuestaoTreino } from '../../types';
import { CARREGADORES } from '../carregar';
import { conferirCalculo, numeroDoTexto, validarBanco } from '../validar';

const SRC = resolve(__dirname, '../../..');

describe('bancos de conteúdo cadastrados', () => {
  it('cada banco carrega, corresponde à disciplina e passa na validação', async () => {
    const problemas: string[] = [];
    for (const [id, carregar] of Object.entries(CARREGADORES)) {
      const banco = (await carregar()).default;
      if (banco.disciplinaId !== id) problemas.push(`${id}: disciplinaId do arquivo é "${banco.disciplinaId}"`);
      problemas.push(...validarBanco(banco).erros.map((e) => `${id}: ${e}`));
    }
    expect(problemas).toEqual([]);
  });

  it('ids de questões e flashcards são únicos entre todos os bancos', async () => {
    const vistos = new Map<string, string>();
    const repetidos: string[] = [];
    for (const [id, carregar] of Object.entries(CARREGADORES)) {
      const banco = (await carregar()).default;
      for (const item of [...banco.questoes, ...banco.flashcards]) {
        const outro = vistos.get(item.id);
        if (outro) repetidos.push(`${item.id} (${outro} e ${id})`);
        vistos.set(item.id, id);
      }
    }
    expect(repetidos).toEqual([]);
  });

  it('nenhum arquivo importa os bancos estaticamente (só o carregador)', () => {
    const ofensores: string[] = [];
    const varrer = (dir: string) => {
      for (const nome of readdirSync(dir)) {
        const caminho = join(dir, nome);
        if (statSync(caminho).isDirectory()) {
          if (nome !== 'node_modules') varrer(caminho);
          continue;
        }
        if (!/\.(ts|tsx)$/.test(nome) || /\.test\.ts$/.test(nome) || caminho.endsWith(join('conteudo', 'carregar.ts'))) continue;
        if (caminho.includes(join('conteudo', 'bancos'))) continue;
        const texto = readFileSync(caminho, 'utf8');
        if (/from\s+['"][^'"]*conteudo\/bancos\//.test(texto) || /require\(\s*['"][^'"]*conteudo\/bancos\//.test(texto)) {
          ofensores.push(relative(SRC, caminho));
        }
      }
    };
    varrer(SRC);
    expect(ofensores).toEqual([]);
  });
});

describe('validarBanco (regras)', () => {
  const base = (p: Partial<BancoConteudo> = {}): BancoConteudo => ({ disciplinaId: 'matematica', resumos: [], questoes: [], textos: [], flashcards: [], ...p });
  const q = (p: Partial<QuestaoTreino>): QuestaoTreino => ({
    id: 'mat-porcentagem-q01',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    dificuldade: 1,
    enunciado: 'Quanto é 20% de 150?',
    alternativas: ['20', '25', '30', '35', '40'],
    correta: 2,
    comentario: '20% = 0,2; 0,2 × 150 = 30. As demais alternativas erram a conta.',
    ...p,
  });

  it('aceita questão bem formada com verificar() correto', () => {
    const r = validarBanco(base({ questoes: [q({ verificar: () => 0.2 * 150 })] }));
    expect(r.erros).toEqual([]);
  });

  it('acusa gabarito que não bate com o cálculo', () => {
    const r = validarBanco(base({ questoes: [q({ correta: 1, verificar: () => 30 })] }));
    expect(r.erros.join(' ')).toMatch(/verificar\(\) = 30/);
  });

  it('acusa tema de outra disciplina, id fora do padrão e alternativas repetidas', () => {
    const r = validarBanco(base({ questoes: [q({ id: 'x-1', temaId: 'lp-crase', alternativas: ['1', '1', '2', '3'], correta: 0 })] }));
    const t = r.erros.join(' | ');
    expect(t).toMatch(/não pertence/);
    expect(t).toMatch(/id deve começar/);
    expect(t).toMatch(/alternativas repetidas/);
  });

  it('Certo/Errado exige gabarito booleano e lei exige fundamento', () => {
    const r = validarBanco({
      disciplinaId: 'direito-administrativo',
      resumos: [],
      textos: [],
      flashcards: [],
      questoes: [{ id: 'da-atos-q01', temaId: 'da-atos', formato: 'certo-errado', dificuldade: 2, enunciado: 'Item.', comentario: 'Comentário com explicação suficiente para o aluno.' }],
    });
    const t = r.erros.join(' | ');
    expect(t).toMatch(/gabaritoCE booleano/);
    expect(t).toMatch(/sem fundamento/);
  });

  it('aponta temas sem cobertura como aviso', () => {
    const r = validarBanco(base());
    expect(r.erros).toEqual([]);
    expect(r.avisos.some((a) => a.includes('mat-juros'))).toBe(true);
  });

  it('lê números no formato brasileiro', () => {
    expect(numeroDoTexto('R$ 1.234,56')).toEqual({ valor: 1234.56, casas: 2 });
    expect(numeroDoTexto('12,5%')).toEqual({ valor: 12.5, casas: 1 });
    expect(numeroDoTexto('−3 graus')?.valor).toBe(-3);
    expect(conferirCalculo(q({ alternativas: ['R$ 10,00', 'R$ 12,10', 'R$ 12,00', 'R$ 13,31', 'R$ 14,00'], correta: 3, verificar: () => 10 * 1.1 ** 3 }))).toBeNull();
  });
});
