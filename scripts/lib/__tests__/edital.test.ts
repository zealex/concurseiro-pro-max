import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  buscar,
  chaveBusca,
  contarPaginas,
  ehTitulo,
  encontrarQuadros,
  encontrarSecoes,
  extrairDisciplinasComQuestoes,
  linhasComPagina,
  nivelDoTitulo,
  pareceEscaneado,
  recortarPaginas,
} from '../edital/texto';

const PMF = readFileSync(resolve(__dirname, '../../__fixtures__/edital-pmf-2024.txt'), 'utf8');

describe('texto do edital — navegação', () => {
  it('conta páginas separadas por form feed (ignora o \\f final do pdftotext)', () => {
    expect(contarPaginas(PMF)).toBe(5);
    expect(contarPaginas('a\fb')).toBe(2);
  });

  it('numera linhas com a página correta', () => {
    const linhas = linhasComPagina('um\ndois\fTRÊS');
    expect(linhas.map((l) => [l.pagina, l.linha, l.texto])).toEqual([
      [1, 1, 'um'],
      [1, 2, 'dois'],
      [2, 3, 'TRÊS'],
    ]);
  });

  it('busca sem acento e sem caixa, com contexto', () => {
    const r = buscar(PMF, 'regencia verbal', 1);
    expect(r).toHaveLength(1);
    expect(r[0]!.texto).toContain('Regência verbal e nominal');
    expect(r[0]!.contexto).toHaveLength(3);
    expect(chaveBusca('Conteúdo  Programático')).toBe('CONTEUDO PROGRAMATICO');
  });

  it('reconhece títulos numerados e níveis', () => {
    expect(ehTitulo('14.2.2 CONHECIMENTOS GERAIS')).toBe(true);
    expect(ehTitulo('7 DAS FASES DO CONCURSO')).toBe(true);
    expect(ehTitulo('LÍNGUA PORTUGUESA: 1 Compreensão e interpretação de textos de gêneros variados.')).toBe(false);
    expect(nivelDoTitulo('14.2.2 CONHECIMENTOS GERAIS')).toBe(3);
    expect(nivelDoTitulo('ANEXO II')).toBe(0);
  });

  it('recorta intervalos de páginas', () => {
    expect(recortarPaginas(PMF, '2')).toContain('DAS FASES DO CONCURSO');
    expect(recortarPaginas(PMF, '2')).not.toContain('CONHECIMENTOS GERAIS\n');
    expect(() => recortarPaginas(PMF, 'abc')).toThrow();
  });

  it('detecta PDF escaneado (quase sem texto)', () => {
    expect(pareceEscaneado('\f \f\f')).toBe(true);
    expect(pareceEscaneado(PMF)).toBe(false);
  });
});

describe('texto do edital — seções e quadro de provas (edital real do PMF 2024)', () => {
  it('extrai a seção de conhecimentos gerais e para no próximo título do mesmo nível', () => {
    const [secao] = encontrarSecoes(PMF, 'conhecimentos gerais');
    expect(secao).toBeDefined();
    const corpo = secao!.linhas.map((l) => l.texto).join('\n');
    expect(corpo).toContain('LÍNGUA PORTUGUESA');
    expect(corpo).toContain('ÉTICA NO SERVIÇO PÚBLICO');
    expect(corpo).toContain('NOÇÕES DE INFORMÁTICA');
    expect(corpo).not.toContain('MEDICINA GERAL');
  });

  it('encontra o quadro com o número de itens por prova', () => {
    const quadros = encontrarQuadros(PMF);
    expect(quadros.length).toBeGreaterThan(0);
    const texto = quadros.map((q) => q.linhas.map((l) => l.texto).join('\n')).join('\n');
    expect(texto).toMatch(/Conhecimentos gerais/);
    expect(texto).toMatch(/Conhecimentos específicos/);
  });
});

describe('extrairDisciplinasComQuestoes', () => {
  const linhas = (xs: string[]) => xs.map((texto, i) => ({ pagina: 1, linha: i + 1, texto }));

  it('lê cabeçalhos de caderno e quadros com pontilhado', () => {
    const r = extrairDisciplinasComQuestoes(
      linhas([
        'LÍNGUA PORTUGUESA | 10 QUESTÕES',
        'Matemática/Raciocínio Lógico ........ 05',
        'Conhecimentos Específicos 20 questões',
        'Art. 37 da Constituição 10',
        'texto sem número',
      ]),
    );
    expect(r.map((d) => [d.disciplina, d.questoes])).toEqual([
      ['LÍNGUA PORTUGUESA', 10],
      ['Matemática/Raciocínio Lógico', 5],
      ['Conhecimentos Específicos', 20],
    ]);
  });
});
