/**
 * Extratores de informação em texto livre de notícias/editais (português).
 * Funções puras — testadas com fixtures reais.
 */
import { classificarCargo, extrairNomesCargosMedicos } from '../../src/shared/concursos/classify';
import { chaveCargo, mencionaCadastroReserva, normalizar, semAcentos, todosReais } from '../../src/shared/concursos/normalize';
import type { Cargo } from '../../src/shared/concursos/schema';

const MESES: Record<string, number> = {
  janeiro: 1, fevereiro: 2, marco: 3, abril: 4, maio: 5, junho: 6,
  julho: 7, agosto: 8, setembro: 9, outubro: 10, novembro: 11, dezembro: 12,
};

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function iso(ano: number, mes: number, dia: number): string | null {
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) return null;
  const d = new Date(Date.UTC(ano, mes - 1, dia));
  if (d.getUTCMonth() !== mes - 1) return null;
  return `${ano}-${pad(mes)}-${pad(dia)}`;
}

export interface DataEncontrada {
  data: string;
  indice: number;
}

/**
 * Datas no texto: "14 de novembro de 2026", "1º de dezembro", "02/12/2026", "02/12".
 * Sem ano explícito → usa o ano de referência (ou o seguinte, se a data ficar > 6 meses no passado).
 */
export function datasNoTexto(texto: string, referencia: Date): DataEncontrada[] {
  const t = semAcentos(texto).toLowerCase();
  const anoRef = referencia.getUTCFullYear();
  const achadas: DataEncontrada[] = [];
  const inferirAno = (mes: number, dia: number): number => {
    const tentativa = Date.UTC(anoRef, mes - 1, dia);
    return tentativa < referencia.getTime() - 183 * 86_400_000 ? anoRef + 1 : anoRef;
  };

  const reExtenso = /(\d{1,2})(?:º|o)?\s+de\s+(janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)(?:\s+de\s+(\d{4}))?/g;
  for (const m of t.matchAll(reExtenso)) {
    const dia = Number(m[1]);
    const mes = MESES[m[2] ?? ''] ?? 0;
    const ano = m[3] ? Number(m[3]) : inferirAno(mes, dia);
    const d = iso(ano, mes, dia);
    if (d) achadas.push({ data: d, indice: m.index ?? 0 });
  }
  const reNumerica = /\b(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/g;
  for (const m of t.matchAll(reNumerica)) {
    const dia = Number(m[1]);
    const mes = Number(m[2]);
    let ano = m[3] ? Number(m[3]) : inferirAno(mes, dia);
    if (ano < 100) ano += 2000;
    const d = iso(ano, mes, dia);
    if (d) achadas.push({ data: d, indice: m.index ?? 0 });
  }
  return achadas.sort((a, b) => a.indice - b.indice);
}

/** Período do campo de data da listagem do PCI: "23 a 27/11/2026", "23/11 a 01/12/2026", "02/12/2026", "Reaberto até 24/11/2026". */
export function periodoListagem(texto: string, referencia: Date): { inicio: string | null; fim: string | null } {
  const t = texto.replace(/\s+/g, ' ').trim();
  const intervalo = t.match(/(\d{1,2})(?:\/(\d{1,2}))?(?:\/(\d{4}))?\s*a\s*(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (intervalo) {
    const [, d1, m1, a1, d2, m2, a2] = intervalo;
    const fim = iso(Number(a2), Number(m2), Number(d2));
    const inicio = iso(Number(a1 ?? a2), Number(m1 ?? m2), Number(d1));
    return { inicio, fim };
  }
  const datas = datasNoTexto(t, referencia);
  return { inicio: null, fim: datas.at(-1)?.data ?? null };
}

export function dividirSentencas(texto: string): string[] {
  return texto
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?;])\s+(?=[A-ZÀ-Ý0-9])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Período de inscrições a partir das frases que mencionam "inscri". */
export function extrairInscricoes(texto: string, referencia: Date): { inicio: string | null; fim: string | null } {
  for (const frase of dividirSentencas(texto)) {
    const n = normalizar(frase);
    if (!/inscri/.test(n) || /isencao|taxa .*ate|pagamento/.test(n.split('inscri')[0] ?? '')) continue;
    // Ignora trechos de taxa/isenção dentro da frase.
    const recorte = frase.split(/\. A taxa|taxa de|isen[çc][ãa]o/i)[0] ?? frase;
    const datas = datasNoTexto(recorte, referencia).map((d) => d.data);
    if (datas.length >= 2) {
      const [a, b] = datas;
      if (a && b) return a <= b ? { inicio: a, fim: b } : { inicio: b, fim: a };
    }
    if (datas.length === 1 && /ate|encerra|termina|prazo/.test(normalizar(recorte))) {
      return { inicio: null, fim: datas[0] ?? null };
    }
  }
  return { inicio: null, fim: null };
}

/** Data da prova objetiva (primeira data numa frase sobre a prova, após o fim das inscrições, se conhecido). */
export function extrairDataProva(texto: string, referencia: Date, depoisDe: string | null): string | null {
  for (const frase of dividirSentencas(texto)) {
    const n = normalizar(frase);
    if (!/\bprovas?\b/.test(n)) continue;
    if (!/(prevista|previstas|marcada|agendada|aplicada|aplicadas|realizada|realizadas|sera|serao|acontece|ocorrera|dia|data)/.test(n)) continue;
    for (const { data } of datasNoTexto(frase, referencia)) {
      if (!depoisDe || data > depoisDe) return data;
    }
  }
  return null;
}

const BANCAS_CONHECIDAS: [RegExp, string][] = [
  [/\bfundatec\b/i, 'FUNDATEC'],
  [/\bfepese\b/i, 'FEPESE'],
  [/objetiva concursos|instituto objetiva|objetiva instituto|objetivas\.com\.br/i, 'Instituto Objetiva'],
  [/\biobv\b/i, 'IOBV'],
  [/funda[çc][ãa]o la salle|\bla salle\b/i, 'Fundação La Salle'],
  [/\bfaurgs\b/i, 'FAURGS'],
  [/\bunifil\b/i, 'Instituto UniFil'],
  [/\bameosc\b/i, 'AMEOSC'],
  [/\bcesgranrio\b/i, 'Cesgranrio'],
  [/instituto mais\b/i, 'Instituto Mais'],
  [/\bibgp\b/i, 'IBGP'],
  [/\bfcc\b|funda[çc][ãa]o carlos chagas/i, 'FCC'],
  [/\bcopese\b/i, 'COPESE'],
  [/\bcomperve\b/i, 'COMPERVE'],
  [/\bcoperve\b/i, 'COPERVE'],
  [/\bfadesp\b/i, 'FADESP'],
  [/\bfunrio\b/i, 'FUNRIO'],
  [/\bavalia sc\b|\bavaliasc\b/i, 'AvaliaSC'],
  [/\bunoesc\b/i, 'UNOESC'],
  [/\bunivali\b/i, 'UNIVALI'],
  [/\bfacet\b/i, 'FACET Concursos'],
  [/\bfuncern\b/i, 'FUNCERN'],
  [/\bcetap\b/i, 'CETAP'],
  [/instituto verbena/i, 'Instituto Verbena'],
  [/\bfurb\b/i, 'FURB'],
  [/n[uú]cleo de concursos da (ufpr|universidade federal do paran[aá])|\bnc[- ]?ufpr\b/i, 'NC-UFPR'],
  [/\bfauel\b/i, 'FAUEL'],
  [/\bcebraspe\b|\bcespe\b/i, 'CEBRASPE'],
  [/\bfgv\b|funda[çc][ãa]o get[uú]lio vargas/i, 'FGV'],
  [/\bvunesp\b/i, 'VUNESP'],
  [/instituto aocp|\baocp\b/i, 'Instituto AOCP'],
  [/\bibfc\b/i, 'IBFC'],
  [/\bibam\b/i, 'IBAM'],
  [/\blegalle\b/i, 'Legalle Concursos'],
  [/\bfafipa\b/i, 'FAFIPA'],
  [/instituto unicampo/i, 'Instituto Unicampo'],
  [/\bconsulpam\b/i, 'Consulpam'],
  [/\bconsulplan\b/i, 'Consulplan'],
  [/\bquadrix\b/i, 'Quadrix'],
  [/\bidecan\b/i, 'IDECAN'],
  [/\bunesc\b/i, 'UNESC'],
  [/\bamauc\b/i, 'AMAUC'],
  [/\bacafe\b/i, 'ACAFE'],
  [/instituto excel[eê]ncia/i, 'Instituto Excelência'],
  [/\bigecs\b/i, 'IGECS'],
  [/\bigam\b/i, 'IGAM'],
  [/\bibade\b/i, 'IBADE'],
  [/\bselecon\b/i, 'SELECON'],
  [/\bmeritum\b/i, 'Meritum'],
  [/instituto access/i, 'Instituto Access'],
  [/\bfundep\b/i, 'FUNDEP'],
  [/\bcetrede\b/i, 'CETREDE'],
  [/instituto ibdo|\bibdo\b/i, 'IBDO'],
  [/\bplanejar\b(?= concursos| consultoria)/i, 'Planejar Concursos'],
  [/instituto o[- ]?dia|\bo dia concursos\b/i, 'Instituto O Dia'],
];

const NAO_BANCA = /^(Prefeitura|C[âa]mara|Munic[íi]pio|Secretaria|Governo|Di[áa]rio|Edital|Portal da Transpar|Concurso|Processo|Hospital|Fundo|Consórcio|Estado|Uni[ãa]o)/;

/** Nome próprio de 1 a 6 palavras, sem atravessar ponto final ou quebra de linha. */
const NOME_PROPRIO = `[A-ZÀ-Ý][\\wÀ-ÿ&-]*(?:[ \\t]+(?:d[aeo]s?[ \\t]+)?[A-ZÀ-Ý][\\wÀ-ÿ&-]*){0,5}`;

function limparBanca(bruto: string | undefined): string | null {
  const s = bruto?.split(/\n|\.\s|\.$/)[0]?.replace(/^(O|A|Os|As)\s+/, '').trim();
  if (!s || NAO_BANCA.test(s) || s.length > 70 || s.length < 3) return null;
  return s;
}

export function extrairBanca(texto: string): string | null {
  for (const [re, nome] of BANCAS_CONHECIDAS) if (re.test(texto)) return nome;
  // "O Instituto X é a banca organizadora", "A empresa Y será responsável pela organização"
  const sujeito = texto.match(
    new RegExp(`(${NOME_PROPRIO})[ \\t]+(?:é|será|foi)[ \\t]+(?:a[ \\t]+)?(?:banca|empresa organizadora|institui[çc][ãa]o organizadora|respons[áa]vel pela organiza)`),
  );
  const s = limparBanca(sujeito?.[1]);
  if (s) return s;
  const generica = texto.match(
    new RegExp(
      `(?:organizad[oa]s? pel[oa]|realizad[oa]s? pel[oa]|conduzid[oa]s? pel[oa]|executad[oa]s? pel[oa]|banca(?: organizadora| examinadora)?(?: [ée]| ser[áa])?:?|no site d[oa]|no portal d[oa])[ \\t]+(?:(?:o|a)[ \\t]+)?(${NOME_PROPRIO})`,
    ),
  );
  return limparBanca(generica?.[1]);
}

/** Ano do edital ("Edital nº 001/2026", "Concurso Público 02/2027"). */
export function anoDoEdital(texto: string): number | null {
  const m = texto.match(/(?:edital|concurso p[úu]blico|processo seletivo(?: simplificado)?)\s*(?:de abertura\s*)?(?:n[º°o.]*\s*)?\d{1,4}\s*\/\s*(20\d{2})/i);
  return m?.[1] ? Number(m[1]) : null;
}

/**
 * Número do certame, normalizado ("Concurso Público nº 003/2026" → "3/2026").
 * Prefere "Concurso Público/Processo Seletivo nº" a "Edital nº" (o edital de abertura costuma ter numeração própria)
 * e ignora retificações, resultados e convocações.
 */
export function numeroEdital(texto: string): string | null {
  const padroes = [
    /(concurso p[úu]blico|processo seletivo(?: simplificado| p[úu]blico)?)\s*(?:n[º°o.]*\s*)?(\d{1,4})\s*\/\s*(20\d{2})/gi,
    /(edital(?: de abertura)?(?: de (?:concurso p[úu]blico|processo seletivo))?)\s*(?:n[º°o.]*\s*)?(\d{1,4})\s*\/\s*(20\d{2})/gi,
  ];
  for (const re of padroes) {
    for (const m of texto.matchAll(re)) {
      const contexto = normalizar(texto.slice(Math.max(0, (m.index ?? 0) - 40), (m.index ?? 0) + m[0].length));
      if (/retifica|complementar|resultado|homologa|convoca|prorroga|suspens|cancel|anula/.test(contexto)) continue;
      return `${Number(m[2])}/${m[3]}`;
    }
  }
  return null;
}

export function extrairCargaHoraria(texto: string): string | null {
  const m = normalizar(texto).match(/(\d{1,2})\s*(?:h|horas)(?:\s*semanais)?/);
  return m?.[1] ? `${m[1]}h semanais` : null;
}

/** Cargos médicos de um conjunto de linhas (itens de lista, células de tabela, frases). */
export function extrairCargosMedicos(linhas: string[]): Cargo[] {
  const mapa = new Map<string, Cargo>();
  for (const linha of linhas) {
    for (const nome of extrairNomesCargosMedicos(linha)) {
      const chave = chaveCargo(nome);
      const { tag, subcategoria } = classificarCargo(nome);
      const vagasM = normalizar(linha).match(/\(?\s*(\d{1,4})\s*vagas?\b|\((\d{1,4})\)/);
      const vagas = vagasM ? Number(vagasM[1] ?? vagasM[2]) : null;
      const reais = todosReais(linha).filter((v) => v >= 1000);
      const atual = mapa.get(chave);
      const novo: Cargo = {
        nome,
        tag,
        subcategoria,
        vagas: Number.isFinite(vagas) ? vagas : null,
        cadastroReserva: mencionaCadastroReserva(linha),
        remuneracao: reais.length ? Math.max(...reais) : null,
        cargaHoraria: extrairCargaHoraria(linha),
      };
      if (!atual) {
        mapa.set(chave, novo);
      } else {
        // Mesmo cargo em jornadas diferentes ("20h (2 vagas)" e "40h (2 vagas)") → soma vagas.
        mapa.set(chave, {
          ...atual,
          vagas: atual.vagas !== null && novo.vagas !== null && atual.cargaHoraria !== novo.cargaHoraria
            ? atual.vagas + novo.vagas
            : atual.vagas ?? novo.vagas,
          remuneracao: Math.max(atual.remuneracao ?? 0, novo.remuneracao ?? 0) || null,
          cargaHoraria:
            atual.cargaHoraria && novo.cargaHoraria && atual.cargaHoraria !== novo.cargaHoraria
              ? `${atual.cargaHoraria.replace(' semanais', '')} ou ${novo.cargaHoraria}`
              : atual.cargaHoraria ?? novo.cargaHoraria,
          cadastroReserva: atual.cadastroReserva || novo.cadastroReserva,
        });
      }
    }
  }
  return [...mapa.values()];
}

/** "Concurso Público" × "Processo Seletivo" pelo texto. */
export function tipoDoTexto(texto: string): 'concurso' | 'processo-seletivo' {
  return /processo seletivo|sele[çc][ãa]o|seletivo|contrata[çc][ãa]o tempor/i.test(texto) && !/concurso p[úu]blico/i.test(texto)
    ? 'processo-seletivo'
    : 'concurso';
}
