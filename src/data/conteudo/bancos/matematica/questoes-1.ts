import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Utilitários de conferência usados pelos verificar() deste banco.
 * Recalculam a resposta a partir dos dados do enunciado.
 * ------------------------------------------------------------------ */

export const mdc = (a: number, b: number): number => (b === 0 ? a : mdc(b, a % b));
export const mmc = (a: number, b: number): number => (a * b) / mdc(a, b);
export const fatorial = (n: number): number => (n <= 1 ? 1 : n * fatorial(n - 1));
export const comb = (n: number, p: number): number => fatorial(n) / (fatorial(p) * fatorial(n - p));

/** Fração irredutível no formato "n/d". */
export const fracao = (n: number, d: number): string => {
  const g = mdc(Math.abs(n), Math.abs(d));
  return n / g + '/' + d / g;
};

const ROMANOS = ['I', 'II', 'III', 'IV', 'V'];

/** Alternativa no padrão FUNDATEC ("Apenas I e III.", "I, II e III.") a partir das assertivas verdadeiras. */
export const quais = (...v: boolean[]): string => {
  const certas = ROMANOS.slice(0, v.length).filter((_, i) => v[i]);
  const lista = certas.length === 1 ? certas[0]! : certas.slice(0, -1).join(', ') + ' e ' + certas[certas.length - 1]!;
  return certas.length === v.length ? lista + '.' : 'Apenas ' + lista + '.';
};

const dois = (n: number): string => String(n).padStart(2, '0');

/** Duração "6 h 24 min" a partir de horas decimais. */
export const hm = (horas: number): string => {
  const total = Math.round(horas * 60);
  return Math.floor(total / 60) + ' h ' + dois(total % 60) + ' min';
};

/** Horário de relógio "9h15" a partir de minutos contados desde a meia-noite (aceita passar de 24 h). */
export const relogio = (minutos: number): string => {
  const m = minutos % 1440;
  return Math.floor(m / 60) + 'h' + dois(m % 60);
};

/* ------------------------------------------------------------------
 * Operações, razão e proporção, regra de três, porcentagem
 * ------------------------------------------------------------------ */

export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- mat-operacoes ---------- */
  {
    id: 'mat-operacoes-q01',
    temaId: 'mat-operacoes',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado:
      'Um paciente internado recebe o medicamento A a cada 6 horas, o B a cada 8 horas e o C a cada 12 horas. Às 8h de uma segunda-feira, os três foram administrados juntos. Mantidos os intervalos, os três voltarão a ser administrados juntos, pela primeira vez, após:',
    alternativas: ['12 horas', '24 horas', '26 horas', '48 horas', '576 horas'],
    correta: 1,
    comentario:
      'Problema de reencontro: MMC(6, 8, 12). Fatorando, 6 = 2 · 3, 8 = 2³ e 12 = 2² · 3, logo MMC = 2³ · 3 = 24. Os três coincidem 24 h depois, às 8h de terça. 12 h é o MMC só de 6 e 12; 26 h é a soma dos intervalos; 48 h é múltiplo comum, mas não o menor; 576 h é o produto 6 × 8 × 12.',
    verificar: () => mmc(mmc(6, 8), 12),
  },
  {
    id: 'mat-operacoes-q02',
    temaId: 'mat-operacoes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Uma UBS recebeu 180 seringas de 3 mL, 240 seringas de 5 mL e 300 seringas de 10 mL. A equipe quer montar o maior número possível de kits idênticos, usando todas as seringas, sem sobras. Assinalar a alternativa que apresenta o número total de seringas em cada kit.',
    alternativas: ['3 seringas', '5 seringas', '12 seringas', '24 seringas', '60 seringas'],
    correta: 2,
    comentario:
      'O maior número de kits iguais, sem sobra, é o MDC(180, 240, 300) = 60 kits. Cada kit leva 180 ÷ 60 = 3 seringas de 3 mL, 240 ÷ 60 = 4 de 5 mL e 300 ÷ 60 = 5 de 10 mL, num total de 3 + 4 + 5 = 12 seringas. 60 é o número de kits, não o conteúdo de cada um; 3 e 5 contam só um tipo de seringa; 24 usa 30 kits, divisor comum mas não o maior (6 + 8 + 10).',
    verificar: () => {
      const kits = mdc(mdc(180, 240), 300);
      return 180 / kits + 240 / kits + 300 / kits;
    },
  },
  {
    id: 'mat-operacoes-q03',
    temaId: 'mat-operacoes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Um médico cumpriu 2/5 da carga horária mensal na primeira semana e 1/3 na segunda. A fração da carga horária mensal que ainda falta cumprir é:',
    alternativas: ['4/15', '2/5', '3/5', '5/8', '11/15'],
    correta: 0,
    comentario:
      'Some as frações cumpridas com denominador comum (MMC = 15): 2/5 + 1/3 = 6/15 + 5/15 = 11/15. Falta 1 − 11/15 = 4/15. 11/15 é o que já foi cumprido; 5/8 vem de somar numeradores e denominadores (2/5 + 1/3 não é 3/8, e 1 − 3/8 = 5/8); 3/5 esquece a segunda semana; 2/5 lê o 1/3 como fração do que restava (3/5 − 1/5).',
    verificar: () => fracao(5 * 3 - 2 * 3 - 1 * 5, 5 * 3),
  },
  {
    id: 'mat-operacoes-q04',
    temaId: 'mat-operacoes',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'O valor da expressão (2³ · 2⁻¹)² ÷ 2³ + √144 é:',
    alternativas: ['2', '12,5', '13', '14', '28'],
    correta: 3,
    comentario:
      'Produto de potências de mesma base: soma dos expoentes, 2³ · 2⁻¹ = 2². Potência de potência: multiplica os expoentes, (2²)² = 2⁴ = 16. Então 16 ÷ 2³ = 2 e √144 = 12, logo 2 + 12 = 14. 2 esquece a raiz; 28 esquece a divisão (16 + 12); 13 divide por 2⁴; 12,5 esquece o quadrado externo (4 ÷ 8 + 12).',
    verificar: () => (2 ** 3 * 2 ** -1) ** 2 / 2 ** 3 + Math.sqrt(144),
  },
  {
    id: 'mat-operacoes-q05',
    temaId: 'mat-operacoes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Assinalar a alternativa que apresenta o valor de 2,5 ÷ 0,05 − 1,2 × 0,5.',
    alternativas: ['4,4', '24,4', '44', '48,8', '49,4'],
    correta: 4,
    comentario:
      'Primeiro divisões e multiplicações: 2,5 ÷ 0,05 = 250 ÷ 5 = 50 e 1,2 × 0,5 = 0,6. Depois a subtração: 50 − 0,6 = 49,4. 24,4 ignora a precedência, fazendo (50 − 1,2) × 0,5; 4,4 erra a vírgula na divisão (2,5 ÷ 0,05 ≠ 5); 44 erra a vírgula no produto (1,2 × 0,5 ≠ 6); 48,8 esquece de multiplicar 1,2 por 0,5.',
    verificar: () => 2.5 / 0.05 - 1.2 * 0.5,
  },
  {
    id: 'mat-operacoes-q06',
    temaId: 'mat-operacoes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Uma secretaria municipal de saúde comprou 1.250 caixas de luvas a R$ 18,40 a caixa e 340 frascos de álcool a R$ 7,25 o frasco. Pagou R$ 465,00 de entrada e dividiu o restante em 5 parcelas iguais, sem juros. O valor de cada parcela é:',
    alternativas: ['R$ 5.000,00', 'R$ 5.093,00', 'R$ 5.186,00', 'R$ 6.250,00', 'R$ 25.000,00'],
    correta: 0,
    comentario:
      'Luvas: 1.250 × 18,40 = R$ 23.000,00. Álcool: 340 × 7,25 = R$ 2.465,00. Total: R$ 25.465,00. Descontada a entrada, restam R$ 25.000,00, que divididos por 5 dão R$ 5.000,00. R$ 5.093,00 ignora a entrada; R$ 5.186,00 soma a entrada em vez de descontá-la; R$ 6.250,00 divide por 4; R$ 25.000,00 é o saldo inteiro.',
    verificar: () => (1250 * 18.4 + 340 * 7.25 - 465) / 5,
  },
  {
    id: 'mat-operacoes-q07',
    temaId: 'mat-operacoes',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Uma cultura de laboratório contém 3,2 × 10⁶ bactérias por mililitro. O número de bactérias em 250 mL dessa cultura é de:',
    alternativas: ['8 milhões', '80 milhões', '800 milhões', '8 bilhões', '80 bilhões'],
    correta: 2,
    comentario:
      '3,2 × 10⁶ × 250 = (3,2 × 250) × 10⁶ = 800 × 10⁶ = 8 × 10⁸, isto é, 800 milhões (10⁶ é um milhão). As demais alternativas erram a potência de 10: cada uma difere da correta por um fator 10 ou 100.',
    verificar: () => (3.2e6 * 250) / 1e6,
  },
  {
    id: 'mat-operacoes-q08',
    temaId: 'mat-operacoes',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado: 'Quantos números inteiros de 1 a 200, inclusive, são múltiplos de 4 ou de 6?',
    alternativas: ['16', '34', '50', '67', '83'],
    correta: 3,
    comentario:
      'Múltiplos de 4: 200 ÷ 4 = 50. Múltiplos de 6: parte inteira de 200 ÷ 6 = 33. Os que são múltiplos dos dois ao mesmo tempo são os de MMC(4, 6) = 12: parte inteira de 200 ÷ 12 = 16, contados duas vezes. Total: 50 + 33 − 16 = 67. 83 esquece de descontar a interseção; 50 conta só os múltiplos de 4; 34 conta só os múltiplos de 4 que não são de 6 (50 − 16); 16 conta só os comuns.',
    verificar: () => {
      let c = 0;
      for (let n = 1; n <= 200; n++) if (n % 4 === 0 || n % 6 === 0) c++;
      return c;
    },
  },
  {
    id: 'mat-operacoes-q09',
    temaId: 'mat-operacoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'Considere a = 0,4 e b = 3/8. Nesse caso, a é maior que b, e a diferença a − b é igual a 1/40.',
    gabaritoCE: true,
    comentario:
      'Como 3/8 = 0,375, tem-se a = 0,400 > 0,375 = b, e a − b = 0,025 = 25/1.000 = 1/40. As duas partes da afirmação estão corretas. Item certo.',
    verificar: () => (0.4 > 3 / 8 && Math.abs(0.4 - 3 / 8 - 1 / 40) < 1e-9 ? 'Certo' : 'Errado'),
  },

  /* ---------- mat-razao-proporcao ---------- */
  {
    id: 'mat-razao-proporcao-q01',
    temaId: 'mat-razao-proporcao',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Em um mapa na escala 1:250.000, a distância em linha reta entre uma UBS rural e o hospital regional é de 6,4 cm. A distância real correspondente é de:',
    alternativas: ['0,016 km', '0,16 km', '1,6 km', '16 km', '160 km'],
    correta: 3,
    comentario:
      'Na escala 1:250.000, cada 1 cm do mapa vale 250.000 cm reais: 6,4 × 250.000 = 1.600.000 cm. Como 1 km = 100.000 cm, a distância é 1.600.000 ÷ 100.000 = 16 km. As outras alternativas erram a conversão de centímetros para quilômetros por potências de 10.',
    verificar: () => (6.4 * 250000) / 100000,
  },
  {
    id: 'mat-razao-proporcao-q02',
    temaId: 'mat-razao-proporcao',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Uma verba de R$ 72.000,00 será dividida entre três UBS em partes diretamente proporcionais ao número de famílias cadastradas em cada uma: 1.200, 1.800 e 3.000 famílias. A UBS com 1.800 famílias receberá:',
    alternativas: ['R$ 14.400,00', 'R$ 21.600,00', 'R$ 24.000,00', 'R$ 36.000,00', 'R$ 43.200,00'],
    correta: 1,
    comentario:
      'Soma dos pesos: 1.200 + 1.800 + 3.000 = 6.000. Constante de proporcionalidade: k = 72.000 ÷ 6.000 = 12 reais por família. UBS com 1.800 famílias: 1.800 × 12 = R$ 21.600,00. R$ 14.400,00 e R$ 36.000,00 são as partes das outras UBS; R$ 24.000,00 seria a divisão em partes iguais; R$ 43.200,00 usa a razão 1.800/3.000, comparando com a maior UBS em vez de com o total de famílias.',
    verificar: () => (72000 * 1800) / (1200 + 1800 + 3000),
  },
  {
    id: 'mat-razao-proporcao-q03',
    temaId: 'mat-razao-proporcao',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado:
      'Um prêmio de R$ 5.200,00 será dividido entre dois setores em partes inversamente proporcionais ao número de faltas registradas no mês: o setor X teve 4 faltas e o setor Y, 9 faltas. O setor X receberá:',
    alternativas: ['R$ 400,00', 'R$ 1.300,00', 'R$ 1.600,00', 'R$ 2.600,00', 'R$ 3.600,00'],
    correta: 4,
    comentario:
      'Inversamente proporcional a 4 e 9 equivale a diretamente proporcional a 1/4 e 1/9, ou, multiplicando pelo MMC 36, a 9 e 4. Soma dos pesos: 13; k = 5.200 ÷ 13 = 400. X recebe 9 × 400 = R$ 3.600,00 e Y, 4 × 400 = R$ 1.600,00. R$ 1.600,00 é o erro de dividir em proporção direta; R$ 2.600,00 é a divisão em partes iguais; R$ 1.300,00 divide o prêmio pelas 4 faltas de X; R$ 400,00 é só a constante.',
    verificar: () => {
      const k = 5200 / (1 / 4 + 1 / 9);
      return k / 4;
    },
  },
  {
    id: 'mat-razao-proporcao-q04',
    temaId: 'mat-razao-proporcao',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 1,
    enunciado:
      'Em uma equipe de Saúde da Família, a razão entre o número de mulheres e o de homens é de 3 para 2. Se a equipe tem 20 profissionais, o número de homens é:',
    alternativas: ['4', '8', '10', '12', '30'],
    correta: 1,
    comentario:
      'Razão 3 : 2 significa dividir a equipe em 3 + 2 = 5 partes iguais de 20 ÷ 5 = 4 profissionais. Homens: 2 × 4 = 8; mulheres: 3 × 4 = 12. 4 é o tamanho de cada parte, não o número de homens; 12 é o número de mulheres; 10 seria a divisão ao meio; 30 vem de 20 × 3/2, aplicando a razão ao total como se fosse uma fração dele.',
    verificar: () => (20 * 2) / (3 + 2),
  },
  {
    id: 'mat-razao-proporcao-q05',
    temaId: 'mat-razao-proporcao',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'A razão entre as idades de dois irmãos é 5/7, e o mais velho tem 6 anos a mais que o mais novo. A soma das idades dos dois é de:',
    alternativas: ['12 anos', '24 anos', '30 anos', '36 anos', '42 anos'],
    correta: 3,
    comentario:
      'Escreva as idades como 5k e 7k. A diferença é 7k − 5k = 2k = 6, então k = 3: idades 15 e 21, soma 36. 12 soma apenas os termos da razão (5 + 7); 24 usa k = 2, a diferença entre os termos da razão, em vez de k = 3; 30 e 42 multiplicam 5 e 7 por 6, usando a diferença de idades como se fosse a constante k.',
    verificar: () => {
      const k = 6 / (7 - 5);
      return 5 * k + 7 * k;
    },
  },
  {
    id: 'mat-razao-proporcao-q06',
    temaId: 'mat-razao-proporcao',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'A planta baixa de uma UBS foi desenhada na escala 1:50. Uma sala com 4,5 m de comprimento aparece no desenho com:',
    alternativas: ['0,9 cm', '9 cm', '90 cm', '225 cm', '450 cm'],
    correta: 1,
    comentario:
      'Converta para a mesma unidade: 4,5 m = 450 cm. Na escala 1:50, o desenho é 50 vezes menor que o real: 450 ÷ 50 = 9 cm. 450 cm ignora a escala; 225 multiplica 4,5 por 50 em vez de dividir; 90 cm e 0,9 cm erram a conversão de metros em centímetros (usam 4.500 cm e 45 cm).',
    verificar: () => (4.5 * 100) / 50,
  },
  {
    id: 'mat-razao-proporcao-q07',
    temaId: 'mat-razao-proporcao',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'Um município tem 48.600 habitantes e área territorial de 1.215 km². Sua densidade demográfica é de:',
    alternativas: ['0,025 hab/km²', '4 hab/km²', '40 hab/km²', '400 hab/km²', '4.000 hab/km²'],
    correta: 2,
    comentario:
      'Densidade demográfica é a razão habitantes ÷ área: 48.600 ÷ 1.215 = 40 hab/km² (confira: 1.215 × 40 = 48.600). 0,025 é a razão invertida (área ÷ habitantes); 4, 400 e 4.000 erram a divisão por potências de 10.',
    verificar: () => 48600 / 1215,
  },
  {
    id: 'mat-razao-proporcao-q08',
    temaId: 'mat-razao-proporcao',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'Uma gratificação de R$ 8.400,00 será dividida entre dois médicos em partes diretamente proporcionais ao número de plantões realizados e inversamente proporcionais ao número de faltas. O médico P fez 8 plantões e teve 2 faltas; o médico Q fez 12 plantões e teve 4 faltas. O médico Q receberá:',
    alternativas: ['R$ 2.800,00', 'R$ 3.360,00', 'R$ 3.600,00', 'R$ 4.800,00', 'R$ 5.040,00'],
    correta: 2,
    comentario:
      'Na divisão composta, o peso de cada um é (grandeza direta) ÷ (grandeza inversa): P = 8 ÷ 2 = 4 e Q = 12 ÷ 4 = 3. Soma: 7; k = 8.400 ÷ 7 = 1.200. Q recebe 3 × 1.200 = R$ 3.600,00 (e P, R$ 4.800,00). R$ 5.040,00 considera só os plantões (e R$ 3.360,00 seria a parte de P nesse caso); R$ 2.800,00 considera só as faltas; R$ 4.800,00 é a parte de P.',
    verificar: () => {
      const pesoP = 8 / 2;
      const pesoQ = 12 / 4;
      return (8400 * pesoQ) / (pesoP + pesoQ);
    },
  },

  /* ---------- mat-regra-tres ---------- */
  {
    id: 'mat-regra-tres-q01',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Um frasco de 120 mL de um xarope dura 8 dias com a dose prescrita. Mantida a mesma dose diária, um frasco de 300 mL durará:',
    alternativas: ['3,2 dias', '12 dias', '20 dias', '24 dias', '30 dias'],
    correta: 2,
    comentario:
      'Volume e duração são diretamente proporcionais (mais xarope, mais dias): x = 300 × 8 ÷ 120 = 20 dias. Outra forma: o consumo é de 120 ÷ 8 = 15 mL por dia, e 300 ÷ 15 = 20. 3,2 dias resulta de montar a regra como inversa (120 × 8 ÷ 300); 12 dias é só o acréscimo em relação aos 8 dias (20 − 8); 24 dias arredonda a razão 300/120 = 2,5 para 3.',
    verificar: () => (300 * 8) / 120,
  },
  {
    id: 'mat-regra-tres-q02',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Seis técnicos de enfermagem, trabalhando no mesmo ritmo, vacinam a população-alvo de um bairro em 15 dias. Com 9 técnicos nesse mesmo ritmo, a vacinação seria concluída em:',
    alternativas: ['8 dias', '10 dias', '12 dias', '18 dias', '22,5 dias'],
    correta: 1,
    comentario:
      'Mais técnicos, menos dias: as grandezas são inversamente proporcionais, e o produto técnicos × dias é constante. 6 × 15 = 90 = 9 × x, logo x = 10 dias. 22,5 dias é o erro de tratar a relação como direta (15 × 9 ÷ 6).',
    verificar: () => (6 * 15) / 9,
  },
  {
    id: 'mat-regra-tres-q03',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado:
      'Oito enfermeiros, trabalhando 6 horas por dia, aplicam 2.400 doses de vacina em 5 dias. Mantido o ritmo individual, quantas doses 10 enfermeiros aplicariam trabalhando 8 horas por dia durante 4 dias?',
    alternativas: ['1.800', '2.400', '2.560', '3.200', '4.000'],
    correta: 3,
    comentario:
      'O número de doses é diretamente proporcional ao número de enfermeiros, às horas por dia e aos dias. x = 2.400 × (10/8) × (8/6) × (4/5) = 2.400 × 1,25 × 4/3 × 0,8 = 3.200 doses. 4.000 esquece de ajustar os dias; 2.560 esquece os enfermeiros; 2.400 esquece as horas (os efeitos de enfermeiros e dias se compensam); 1.800 inverte a razão das horas (6/8).',
    verificar: () => 2400 * (10 / 8) * (8 / 6) * (4 / 5),
  },
  {
    id: 'mat-regra-tres-q04',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'Cinco médicos, trabalhando 6 horas por dia, atendem 400 pacientes em 8 dias. Quantos dias seriam necessários para 4 médicos, trabalhando 5 horas por dia, atenderem 500 pacientes, no mesmo ritmo?',
    alternativas: ['9,6 dias', '10 dias', '12 dias', '12,5 dias', '15 dias'],
    correta: 4,
    comentario:
      'Compare cada grandeza com “dias”: pacientes é direta (mais pacientes, mais dias); médicos e horas por dia são inversas (menos médicos ou menos horas, mais dias). x = 8 × (500/400) × (5/4) × (6/5) = 8 × 1,25 × 1,25 × 1,2 = 15 dias. 10 dias ajusta só os pacientes; 9,6 dias ajusta só as horas; 12,5 dias esquece as horas; 12 dias esquece os pacientes.',
    verificar: () => 8 * (500 / 400) * (5 / 4) * (6 / 5),
  },
  {
    id: 'mat-regra-tres-q05',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado:
      'Uma ambulância percorre 90 km em 1 hora e 15 minutos. Mantida a mesma velocidade média, ela percorrerá 54 km em:',
    alternativas: ['36 min', '40 min', '45 min', '48 min', '54 min'],
    correta: 2,
    comentario:
      'Converta o tempo para minutos: 1 h 15 min = 75 min. Distância e tempo são diretamente proporcionais: x = 54 × 75 ÷ 90 = 45 min (velocidade média de 72 km/h). 36 min surge ao usar 60 min em vez de 75 min; 54 min supõe 1 km por minuto.',
    verificar: () => (54 * 75) / 90,
  },
  {
    id: 'mat-regra-tres-q06',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Na farmácia de um hospital, a máquina A, sozinha, embala os medicamentos de um turno em 6 horas, e a máquina B, sozinha, faz o mesmo serviço em 3 horas. Trabalhando juntas, cada uma no seu ritmo, as duas embalarão os medicamentos do turno em:',
    alternativas: ['2 h', '2,5 h', '3 h', '4,5 h', '9 h'],
    correta: 0,
    comentario:
      'Em 1 hora, A faz 1/6 do serviço e B faz 1/3 = 2/6. Juntas, fazem 3/6 = 1/2 do serviço por hora e terminam em 2 h. Atalho para dois agentes: (6 × 3) ÷ (6 + 3) = 2. 4,5 h (média) e 9 h (soma) são erros comuns: o tempo conjunto é sempre menor que o do mais rápido (3 h).',
    verificar: () => 1 / (1 / 6 + 1 / 3),
  },
  {
    id: 'mat-regra-tres-q07',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Um hospital consumiu 40 cilindros de oxigênio em 10 dias. Se o consumo diário aumentar 25%, quantos cilindros serão consumidos em 30 dias?',
    alternativas: ['120 cilindros', '125 cilindros', '130 cilindros', '145 cilindros', '150 cilindros'],
    correta: 4,
    comentario:
      'Consumo diário atual: 40 ÷ 10 = 4 cilindros. Com aumento de 25%: 4 × 1,25 = 5 cilindros por dia. Em 30 dias: 5 × 30 = 150. 120 ignora o aumento; 130 soma aos 120 apenas 25% de 40 (10 cilindros); 145 soma 25 cilindros aos 120.',
    verificar: () => (40 / 10) * 1.25 * 30,
  },
  {
    id: 'mat-regra-tres-q08',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Se 8 caixas de máscaras cirúrgicas custam R$ 140,00, assinalar a alternativa que apresenta o preço de 5 caixas iguais.',
    alternativas: ['R$ 87,50', 'R$ 100,00', 'R$ 112,00', 'R$ 224,00', 'R$ 700,00'],
    correta: 0,
    comentario:
      'Preço unitário: 140 ÷ 8 = R$ 17,50. Cinco caixas: 5 × 17,50 = R$ 87,50 (ou 140 × 5 ÷ 8). R$ 224,00 inverte a regra de três (140 × 8 ÷ 5); R$ 700,00 multiplica 140 por 5 sem dividir por 8.',
    verificar: () => (140 / 8) * 5,
  },
  {
    id: 'mat-regra-tres-q09',
    temaId: 'mat-regra-tres',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 3,
    enunciado:
      'Duas impressoras iguais imprimem 3.000 cartilhas de vacinação em 4 horas. Três impressoras iguais a essas imprimirão 7.200 cartilhas em:',
    alternativas: ['5 h 20 min', '6 h 24 min', '6 h 40 min', '9 h 36 min', '14 h 24 min'],
    correta: 1,
    comentario:
      'O tempo é diretamente proporcional ao número de cartilhas e inversamente proporcional ao de impressoras: x = 4 × (7.200/3.000) × (2/3) = 6,4 h. Como 0,4 h = 0,4 × 60 = 24 min, x = 6 h 24 min. 6 h 40 min é o erro clássico de ler 6,4 h como 6 h 40 min; 9 h 36 min esquece as impressoras; 14 h 24 min as trata como grandeza direta.',
    verificar: () => hm(4 * (7200 / 3000) * (2 / 3)),
  },

  /* ---------- mat-porcentagem ---------- */
  {
    id: 'mat-porcentagem-q01',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Um município vacinou 6.840 das 9.000 crianças previstas na meta de uma campanha. Assinalar a alternativa que apresenta a cobertura vacinal alcançada.',
    alternativas: ['7,6%', '24%', '76%', '84%', '131,6%'],
    correta: 2,
    comentario:
      'Cobertura = vacinados ÷ meta × 100 = 6.840 ÷ 9.000 × 100 = 76%. 24% é o que faltou para atingir a meta; 131,6% inverte a divisão (9.000 ÷ 6.840); 7,6% erra a vírgula.',
    verificar: () => (6840 / 9000) * 100,
  },
  {
    id: 'mat-porcentagem-q02',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'O preço de um medicamento sofreu aumento de 20% em março e, em abril, desconto de 20% sobre o novo preço. Em relação ao preço do início de março, o preço do fim de abril apresenta:',
    alternativas: ['variação nula', 'aumento de 4%', 'redução de 2%', 'redução de 4%', 'redução de 20%'],
    correta: 3,
    comentario:
      'Percentuais sucessivos se multiplicam: 1,20 × 0,80 = 0,96. O preço final é 96% do inicial: redução de 4%. A ideia de que +20% e −20% se anulam é o erro mais cobrado, porque o desconto incide sobre um valor já aumentado. Exemplo: R$ 100 → R$ 120 → R$ 96.',
    verificar: () => {
      const v = Math.round((1.2 * 0.8 - 1) * 100);
      if (v === 0) return 'variação nula';
      return v > 0 ? 'aumento de ' + v + '%' : 'redução de ' + -v + '%';
    },
  },
  {
    id: 'mat-porcentagem-q03',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Após um desconto de 15%, um esfigmomanômetro foi comprado por R$ 204,00. O preço sem desconto era de:',
    alternativas: ['R$ 173,40', 'R$ 189,00', 'R$ 219,00', 'R$ 234,60', 'R$ 240,00'],
    correta: 4,
    comentario:
      'R$ 204,00 correspondem a 85% do preço original (100% − 15%). Original = 204 ÷ 0,85 = R$ 240,00. R$ 234,60 é o erro clássico de somar 15% ao valor pago (204 × 1,15): o desconto foi calculado sobre o preço original, não sobre R$ 204,00. R$ 173,40 aplica um novo desconto.',
    verificar: () => 204 / 0.85,
  },
  {
    id: 'mat-porcentagem-q04',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'O número mensal de atendimentos de uma UBS passou de 1.250 para 1.600. O aumento percentual foi de:',
    alternativas: ['21,9%', '28%', '35%', '128%', '350%'],
    correta: 1,
    comentario:
      'Variação percentual = (final − inicial) ÷ inicial × 100 = 350 ÷ 1.250 × 100 = 28%. 21,9% divide pelo valor final (350 ÷ 1.600); 128% corresponde à razão final ÷ inicial (1,28), que inclui os 100% originais; 350 é o aumento absoluto, não percentual.',
    verificar: () => ((1600 - 1250) / 1250) * 100,
  },
  {
    id: 'mat-porcentagem-q05',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado: 'O valor de 30% de 40% de 2.500 é:',
    alternativas: ['12', '30', '70', '120', '300'],
    correta: 4,
    comentario:
      '“De” indica multiplicação: 0,30 × 0,40 × 2.500 = 0,12 × 2.500 = 300. Note que 30% de 40% = 12% (e não 70%, que seria a soma dos percentuais). 12 e 120 erram a escala ao aplicar os 12%.',
    verificar: () => 0.3 * 0.4 * 2500,
  },
  {
    id: 'mat-porcentagem-q06',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Um insumo custava R$ 80,00. Sofreu dois aumentos sucessivos, de 10% e de 20%, e depois um desconto de 25% sobre o último preço. Um gestor afirmou que, como 10 + 20 − 25 = 5, o preço final seria 5% maior que o inicial. Na verdade, o preço final é de:',
    alternativas: ['R$ 79,20', 'R$ 80,00', 'R$ 84,00', 'R$ 88,00', 'R$ 105,60'],
    correta: 0,
    comentario:
      'Multiplique os fatores: 80 × 1,10 × 1,20 × 0,75 = 80 × 0,99 = R$ 79,20, ou seja, redução de 1% em relação ao preço inicial. R$ 84,00 é o raciocínio errado do gestor (somar percentuais); R$ 105,60 esquece o desconto; R$ 88,00 aplica só o primeiro aumento.',
    verificar: () => 80 * 1.1 * 1.2 * 0.75,
  },
  {
    id: 'mat-porcentagem-q07',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Em uma UBS, 35% dos pacientes cadastrados são hipertensos. Entre os hipertensos, 40% também são diabéticos. O percentual do total de pacientes cadastrados que é, ao mesmo tempo, hipertenso e diabético é de:',
    alternativas: ['5%', '14%', '21%', '40%', '75%'],
    correta: 1,
    comentario:
      'Percentual de percentual se multiplica: 40% de 35% = 0,40 × 0,35 = 0,14 = 14%. 75% soma os percentuais; 5% os subtrai; 21% é o percentual de hipertensos não diabéticos (60% de 35%); 40% é relativo apenas aos hipertensos, não ao total.',
    verificar: () => 0.4 * 0.35 * 100,
  },
  {
    id: 'mat-porcentagem-q08',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Analise as assertivas abaixo:\nI. Um aumento de 25% seguido de uma redução de 20% faz um valor voltar ao original.\nII. Para anular um desconto de 20%, basta aplicar um aumento de 20% sobre o preço com desconto.\nIII. Dois aumentos sucessivos de 50% equivalem a um único aumento de 125%.\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e III.', 'Apenas II e III.', 'I, II e III.'],
    correta: 2,
    comentario:
      'I: 1,25 × 0,80 = 1, o valor volta ao original (correta). II: 0,80 × 1,20 = 0,96, ainda 4% abaixo; para anular um desconto de 20% é preciso aumento de 25%, pois 1 ÷ 0,8 = 1,25 (incorreta). III: 1,5 × 1,5 = 2,25, isto é, aumento de 125% (correta).',
    verificar: () => quais(Math.abs(1.25 * 0.8 - 1) < 1e-9, Math.abs(0.8 * 1.2 - 1) < 1e-9, Math.abs(1.5 * 1.5 - 2.25) < 1e-9),
  },
  {
    id: 'mat-porcentagem-q09',
    temaId: 'mat-porcentagem',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 1,
    enunciado: 'Um servidor recebe salário de R$ 4.800,00 e terá reajuste de 6,5%. O novo salário será de:',
    alternativas: ['R$ 312,00', 'R$ 4.831,20', 'R$ 4.865,00', 'R$ 5.112,00', 'R$ 7.920,00'],
    correta: 3,
    comentario:
      'Fator de aumento: 1 + 0,065 = 1,065. Novo salário: 4.800 × 1,065 = R$ 5.112,00. R$ 312,00 é só o valor do reajuste; R$ 4.831,20 usa 0,65%; R$ 7.920,00 usa 65%; R$ 4.865,00 soma 65 reais em vez de 6,5%.',
    verificar: () => 4800 * 1.065,
  },
  {
    id: 'mat-porcentagem-q10',
    temaId: 'mat-porcentagem',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Um produto que custa R$ 250,00 recebe um desconto de 10% e, sobre o novo valor, outro desconto de 10%. Nessa situação, o preço final do produto será de R$ 200,00.',
    gabaritoCE: false,
    comentario:
      'Descontos sucessivos se multiplicam: 250 × 0,90 × 0,90 = 250 × 0,81 = R$ 202,50, um desconto total de 19%, e não de 20%. O valor de R$ 200,00 resultaria de somar os dois descontos. Item errado.',
    verificar: () => (Math.abs(250 * 0.9 * 0.9 - 200) < 0.005 ? 'Certo' : 'Errado'),
  },
];
