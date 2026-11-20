import type { QuestaoTreino } from '../../../types';
import { hm, relogio } from './questoes-1';

/* ------------------------------------------------------------------
 * Juros, equações, funções, medidas
 * ------------------------------------------------------------------ */

export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- mat-juros ---------- */
  {
    id: 'mat-juros-q01',
    temaId: 'mat-juros',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Um capital de R$ 2.000,00 foi aplicado a juros simples de 1,5% ao mês durante 8 meses. Assinalar a alternativa que apresenta os juros obtidos.',
    alternativas: ['R$ 24,00', 'R$ 240,00', 'R$ 252,99', 'R$ 2.240,00', 'R$ 2.400,00'],
    correta: 1,
    comentario:
      'J = C · i · t = 2.000 × 0,015 × 8 = R$ 240,00. R$ 2.240,00 é o montante (capital + juros), não os juros; R$ 252,99 seria o juro composto (2.000 × 1,015⁸ − 2.000); R$ 24,00 e R$ 2.400,00 erram a vírgula da taxa (usam 0,15% e 15%).',
    verificar: () => 2000 * 0.015 * 8,
  },
  {
    id: 'mat-juros-q02',
    temaId: 'mat-juros',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Uma servidora aplicou R$ 5.000,00 a juros compostos de 2% ao mês. Ao fim de 3 meses, sem retiradas, o montante será de:',
    alternativas: ['R$ 5.100,00', 'R$ 5.300,00', 'R$ 5.306,04', 'R$ 5.412,16', 'R$ 8.000,00'],
    correta: 2,
    comentario:
      'M = C · (1 + i)ᵗ = 5.000 × 1,02³ = 5.000 × 1,061208 = R$ 5.306,04. R$ 5.300,00 é o montante a juros simples (5.000 × 1,06); R$ 5.412,16 usa 4 meses (1,02⁴); R$ 5.100,00 considera um único mês; R$ 8.000,00 lê a taxa como 20% ao mês, em juros simples (5.000 × 1,6).',
    verificar: () => 5000 * 1.02 ** 3,
  },
  {
    id: 'mat-juros-q03',
    temaId: 'mat-juros',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Um capital de R$ 3.600,00, aplicado a juros simples de 2,5% ao mês, produziu montante de R$ 4.500,00. O prazo da aplicação foi de:',
    alternativas: ['10 meses', '12 meses', '15 meses', '40 meses', '50 meses'],
    correta: 0,
    comentario:
      'Juros = M − C = 4.500 − 3.600 = R$ 900,00. Juros por mês: 3.600 × 0,025 = R$ 90,00. Prazo: 900 ÷ 90 = 10 meses. 50 meses divide o montante (4.500) pelos juros mensais; 40 meses divide o capital (3.600).',
    verificar: () => (4500 - 3600) / (3600 * 0.025),
  },
  {
    id: 'mat-juros-q04',
    temaId: 'mat-juros',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'A taxa mensal de juros simples que faz um capital dobrar de valor em 25 meses é de:',
    alternativas: ['2,5%', '4%', '5%', '8%', '25%'],
    correta: 1,
    comentario:
      'Dobrar significa juros iguais ao capital: J = C. Então C = C · i · 25, e i = 1/25 = 0,04 = 4% ao mês. 8% ao mês renderia 200% em 25 meses, triplicando o capital; 2,5% confunde 25 meses com 2,5.',
    verificar: () => ((2 - 1) / 25) * 100,
  },
  {
    id: 'mat-juros-q05',
    temaId: 'mat-juros',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado:
      'Um capital de R$ 10.000,00 foi aplicado por 3 anos à taxa de 10% ao ano. A diferença entre o montante obtido no regime de juros compostos e o obtido no regime de juros simples é de:',
    alternativas: ['R$ 100,00', 'R$ 210,00', 'R$ 300,00', 'R$ 310,00', 'R$ 3.310,00'],
    correta: 3,
    comentario:
      'Compostos: 10.000 × 1,1³ = 10.000 × 1,331 = R$ 13.310,00. Simples: 10.000 × (1 + 0,1 × 3) = R$ 13.000,00. Diferença: R$ 310,00, que são os “juros sobre juros”. R$ 100,00 é a diferença para 2 anos; R$ 3.310,00 são os juros compostos totais.',
    verificar: () => 10000 * 1.1 ** 3 - 10000 * (1 + 0.1 * 3),
  },
  {
    id: 'mat-juros-q06',
    temaId: 'mat-juros',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Uma clínica oferece um equipamento por R$ 1.200,00 à vista ou em duas vezes: entrada de R$ 600,00 e mais R$ 636,00 um mês depois. Um gestor concluiu que os juros do parcelamento são de 3% ao mês, porque R$ 36,00 representam 3% de R$ 1.200,00. A taxa mensal efetivamente cobrada é de:',
    alternativas: ['3%', '3,6%', '5%', '5,66%', '6%'],
    correta: 4,
    comentario:
      'A entrada é paga no ato, então o valor financiado é 1.200 − 600 = R$ 600,00. Por esse saldo, paga-se R$ 636,00 um mês depois: juros de R$ 36,00 sobre R$ 600,00, ou 6% ao mês. O erro do gestor (3%) foi calcular a taxa sobre o preço total; 5,66% divide os juros pela parcela (36 ÷ 636).',
    verificar: () => ((636 - (1200 - 600)) / (1200 - 600)) * 100,
  },
  {
    id: 'mat-juros-q07',
    temaId: 'mat-juros',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Um capital de R$ 1.000,00 é aplicado a juros compostos de 10% ao mês. Os juros acumulados após 2 meses são de:',
    alternativas: ['R$ 20,00', 'R$ 100,00', 'R$ 110,00', 'R$ 200,00', 'R$ 210,00'],
    correta: 4,
    comentario:
      '1º mês: 10% de 1.000 = R$ 100,00 (saldo de 1.100). 2º mês: 10% de 1.100 = R$ 110,00 (saldo de 1.210). Juros acumulados: 100 + 110 = R$ 210,00, ou 1.000 × 1,1² − 1.000. R$ 200,00 seria o juro simples; R$ 100,00 e R$ 110,00 são os juros de apenas um dos meses.',
    verificar: () => 1000 * 1.1 ** 2 - 1000,
  },
  {
    id: 'mat-juros-q08',
    temaId: 'mat-juros',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado: 'Um valor de R$ 6.000,00 foi aplicado a juros simples de 18% ao ano durante 5 meses. Os juros obtidos foram de:',
    alternativas: ['R$ 450,00', 'R$ 540,00', 'R$ 1.080,00', 'R$ 5.400,00', 'R$ 6.450,00'],
    correta: 0,
    comentario:
      'Taxa e tempo devem estar na mesma unidade. No regime simples, 18% ao ano = 18% ÷ 12 = 1,5% ao mês. J = 6.000 × 0,015 × 5 = R$ 450,00. R$ 5.400,00 usa 5 anos em vez de 5 meses; R$ 1.080,00 é o juro de 1 ano; R$ 6.450,00 é o montante.',
    verificar: () => 6000 * 0.18 * (5 / 12),
  },
  {
    id: 'mat-juros-q09',
    temaId: 'mat-juros',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Aplicando-se R$ 1.000,00 a juros compostos de 1% ao mês durante 12 meses, obtém-se montante superior ao que se obteria aplicando-se o mesmo capital a juros simples de 12% ao ano, pelo mesmo período.',
    gabaritoCE: true,
    comentario:
      'Compostos: 1.000 × 1,01¹² ≈ R$ 1.126,83. Simples: 1.000 × (1 + 0,12 × 1) = R$ 1.120,00. Como 1,01¹² ≈ 1,1268 > 1,12, o regime composto rende mais quando o prazo supera 1 período da taxa. Item certo.',
    verificar: () => (1000 * 1.01 ** 12 > 1000 * 1.12 ? 'Certo' : 'Errado'),
  },

  /* ---------- mat-equacoes ---------- */
  {
    id: 'mat-equacoes-q01',
    temaId: 'mat-equacoes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que apresenta a solução da equação 3(x − 2) + 5 = 2x + 7.',
    alternativas: ['x = 2', 'x = 4', 'x = 6', 'x = 8', 'x = 12'],
    correta: 3,
    comentario:
      'Aplicando a distributiva: 3x − 6 + 5 = 2x + 7 → 3x − 1 = 2x + 7 → 3x − 2x = 7 + 1 → x = 8. Conferindo: 3(8 − 2) + 5 = 23 e 2 · 8 + 7 = 23. x = 4 resulta de não multiplicar o −2 por 3 (3x − 2 + 5 = 2x + 7).',
    verificar: () => (7 + 6 - 5) / (3 - 2),
  },
  {
    id: 'mat-equacoes-q02',
    temaId: 'mat-equacoes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Uma UBS realizou 52 atendimentos em um dia, nos turnos da manhã e da tarde. O número de atendimentos da tarde foi igual ao triplo dos da manhã, mais 4. Quantos atendimentos foram realizados pela manhã?',
    alternativas: ['12', '13', '16', '36', '40'],
    correta: 0,
    comentario:
      'Manhã = x; tarde = 3x + 4. Então x + 3x + 4 = 52 → 4x = 48 → x = 12 (e a tarde teve 40). 40 é o número da tarde; 13 ignora o “mais 4” (52 ÷ 4); 16 divide 48 por 3, esquecendo o x da manhã.',
    verificar: () => (52 - 4) / 4,
  },
  {
    id: 'mat-equacoes-q03',
    temaId: 'mat-equacoes',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Uma farmácia de manipulação vendeu 40 frascos de dois tipos: o tipo A, a R$ 12,00, e o tipo B, a R$ 18,00, arrecadando R$ 570,00. Quantos frascos do tipo B foram vendidos?',
    alternativas: ['10', '15', '20', '25', '30'],
    correta: 1,
    comentario:
      'Sistema: a + b = 40 e 12a + 18b = 570. Atalho: se os 40 fossem do tipo A, a receita seria 40 × 12 = R$ 480,00; os R$ 90,00 restantes vêm dos frascos B, cada um R$ 6,00 mais caro: 90 ÷ 6 = 15. Logo b = 15 e a = 25. 25 é o número de frascos do tipo A.',
    verificar: () => (570 - 12 * 40) / (18 - 12),
  },
  {
    id: 'mat-equacoes-q04',
    temaId: 'mat-equacoes',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'A maior raiz da equação x² − 5x − 14 = 0 é:',
    alternativas: ['−7', '−2', '2', '5', '7'],
    correta: 4,
    comentario:
      'Δ = (−5)² − 4 · 1 · (−14) = 25 + 56 = 81. x = (5 ± 9) ÷ 2, então x = 7 ou x = −2; a maior é 7. Por soma e produto: S = 5 e P = −14, raízes 7 e −2. −7 e 2 resultam de trocar o sinal de b na fórmula; 5 é a soma das raízes.',
    verificar: () => {
      const a = 1;
      const b = -5;
      const c = -14;
      return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    },
  },
  {
    id: 'mat-equacoes-q05',
    temaId: 'mat-equacoes',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado:
      'Um terreno retangular destinado à construção de uma UBS tem 600 m² de área, e seu comprimento excede a largura em 10 m. A largura do terreno é de:',
    alternativas: ['15 m', '18 m', '20 m', '25 m', '30 m'],
    correta: 2,
    comentario:
      'Largura x e comprimento x + 10: x(x + 10) = 600 → x² + 10x − 600 = 0. Δ = 100 + 2.400 = 2.500 e √Δ = 50. x = (−10 + 50) ÷ 2 = 20 m (a raiz −30 não serve como medida). 30 m é o comprimento; 25 m aproxima √600 ≈ 24,5, como se o terreno fosse quadrado.',
    verificar: () => (-10 + Math.sqrt(10 ** 2 + 4 * 600)) / 2,
  },
  {
    id: 'mat-equacoes-q06',
    temaId: 'mat-equacoes',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'A clínica X cobra R$ 80,00 de taxa de adesão mais R$ 45,00 por consulta. A clínica Y não cobra adesão, mas cobra R$ 60,00 por consulta. A partir de quantas consultas o total pago na clínica X passa a ser menor que o pago na clínica Y?',
    alternativas: ['4', '5', '6', '7', '8'],
    correta: 2,
    comentario:
      'Inequação: 80 + 45n < 60n → 80 < 15n → n > 5,33… Como n é inteiro, X fica mais barata a partir de 6 consultas (com 6: X = R$ 350,00 e Y = R$ 360,00). 5 é o erro de truncar 5,33 em vez de tomar o inteiro seguinte (com 5: X = R$ 305,00 e Y = R$ 300,00).',
    verificar: () => {
      let n = 1;
      while (80 + 45 * n >= 60 * n) n++;
      return n;
    },
  },
  {
    id: 'mat-equacoes-q07',
    temaId: 'mat-equacoes',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Se 2x/3 − 4 = 6, então x é igual a:',
    alternativas: ['3', '15', '20', '30', '45'],
    correta: 1,
    comentario:
      '2x/3 = 6 + 4 = 10 → 2x = 30 → x = 15. 30 é o valor de 2x (faltou dividir por 2); 20 multiplica 10 por 2 em vez de por 3/2; 3 erra o sinal ao passar o 4 para o outro lado (2x/3 = 2).',
    verificar: () => ((6 + 4) * 3) / 2,
  },
  {
    id: 'mat-equacoes-q08',
    temaId: 'mat-equacoes',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 3,
    enunciado:
      'Em um mês, Ana fez o dobro de plantões de Bruno, e Carla fez 4 plantões a menos que Ana. Juntos, os três fizeram 46 plantões. Quantos plantões Carla fez?',
    alternativas: ['8', '10', '12', '16', '20'],
    correta: 3,
    comentario:
      'Bruno = b, Ana = 2b e Carla = 2b − 4. Então b + 2b + (2b − 4) = 46 → 5b = 50 → b = 10. Ana fez 20 e Carla, 16. 10 e 20 são os plantões de Bruno e de Ana; responder um deles é o erro de não voltar à pergunta.',
    verificar: () => {
      const bruno = (46 + 4) / 5;
      return 2 * bruno - 4;
    },
  },
  {
    id: 'mat-equacoes-q09',
    temaId: 'mat-equacoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'A equação x² − 6x + 9 = 0 possui duas raízes reais e distintas.',
    gabaritoCE: false,
    comentario:
      'Δ = (−6)² − 4 · 1 · 9 = 36 − 36 = 0. Com Δ = 0, há duas raízes reais iguais (raiz dupla x = 3), pois x² − 6x + 9 = (x − 3)². Item errado.',
    verificar: () => ((-6) ** 2 - 4 * 1 * 9 > 0 ? 'Certo' : 'Errado'),
  },

  /* ---------- mat-funcoes ---------- */
  {
    id: 'mat-funcoes-q01',
    temaId: 'mat-funcoes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'O custo mensal de um laboratório municipal, em reais, é dado por C(x) = 1.500 + 12x, em que x é o número de exames realizados no mês. Assinalar a alternativa que apresenta o custo de um mês com 250 exames.',
    alternativas: ['R$ 1.762,00', 'R$ 3.000,00', 'R$ 4.500,00', 'R$ 5.250,00', 'R$ 378.000,00'],
    correta: 2,
    comentario:
      'C(250) = 1.500 + 12 × 250 = 1.500 + 3.000 = R$ 4.500,00. R$ 3.000,00 esquece o custo fixo; R$ 1.762,00 soma 12 e 250 em vez de multiplicar; R$ 378.000,00 multiplica também o custo fixo, fazendo (1.500 + 12) × 250.',
    verificar: () => 1500 + 12 * 250,
  },
  {
    id: 'mat-funcoes-q02',
    temaId: 'mat-funcoes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'O gráfico de uma função afim f passa pelos pontos (2, 7) e (5, 16). O valor de f(10) é:',
    alternativas: ['30', '31', '32', '35', '37'],
    correta: 1,
    comentario:
      'Taxa de variação: a = (16 − 7) ÷ (5 − 2) = 3. Com f(2) = 7: 3 · 2 + b = 7, logo b = 1. Então f(x) = 3x + 1 e f(10) = 31. 32 supõe proporcionalidade, f(10) = 2 · f(5), o que só valeria com b = 0; 30 esquece o b; 37 usa b = 7.',
    verificar: () => {
      const a = (16 - 7) / (5 - 2);
      const b = 7 - a * 2;
      return a * 10 + b;
    },
  },
  {
    id: 'mat-funcoes-q03',
    temaId: 'mat-funcoes',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Em um experimento, a altura h (em metros) de um objeto lançado verticalmente, t segundos após o lançamento, é dada por h(t) = −5t² + 20t + 1. A altura máxima atingida é de:',
    alternativas: ['2 m', '16 m', '20 m', '21 m', '61 m'],
    correta: 3,
    comentario:
      'Parábola com a < 0: o máximo está no vértice. tᵥ = −b/2a = −20 ÷ (−10) = 2 s, e h(2) = −5 · 4 + 40 + 1 = 21 m (ou yᵥ = −Δ/4a = −420 ÷ (−20) = 21). 2 é o instante do máximo, não a altura; 16 m é h(1); 20 m esquece o termo independente; 61 m erra o sinal de −5t².',
    verificar: () => {
      const a = -5;
      const b = 20;
      const c = 1;
      const t = -b / (2 * a);
      return a * t * t + b * t + c;
    },
  },
  {
    id: 'mat-funcoes-q04',
    temaId: 'mat-funcoes',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Em um modelo didático de eliminação de um fármaco, a quantidade presente no organismo cai pela metade a cada 6 horas (meia-vida). Se a quantidade inicial é de 400 mg, após 24 horas restarão:',
    alternativas: ['25 mg', '50 mg', '66,7 mg', '100 mg', '200 mg'],
    correta: 0,
    comentario:
      'Em 24 h cabem 24 ÷ 6 = 4 meias-vidas: Q = 400 × (1/2)⁴ = 400 ÷ 16 = 25 mg (400 → 200 → 100 → 50 → 25). 100 mg divide 400 por 4, tratando o decaimento como linear, erro típico em função exponencial; 50 mg para na 3ª meia-vida; 66,7 mg divide 400 por 6.',
    verificar: () => 400 * 0.5 ** (24 / 6),
  },
  {
    id: 'mat-funcoes-q05',
    temaId: 'mat-funcoes',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado: 'Considerando log 2 = 0,30 e log 3 = 0,48, o valor de log 72 é:',
    alternativas: ['0,78', '1,08', '1,56', '1,74', '1,86'],
    correta: 4,
    comentario:
      '72 = 8 × 9 = 2³ × 3². Pelas propriedades, log 72 = 3 · log 2 + 2 · log 3 = 0,90 + 0,96 = 1,86. 1,74 troca os expoentes (2 × 3³ = 54); 0,78 é log 6; 1,08 é log 12 e 1,56 é log 36, de fatorações erradas.',
    verificar: () => 3 * 0.3 + 2 * 0.48,
  },
  {
    id: 'mat-funcoes-q06',
    temaId: 'mat-funcoes',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'O zero (raiz) da função f(x) = 3x − 12 é:',
    alternativas: ['−12', '−4', '3', '4', '12'],
    correta: 3,
    comentario:
      'O zero da função é o x que torna f(x) = 0: 3x − 12 = 0 → x = 4, ponto (4, 0), onde a reta corta o eixo x. −12 é o valor de f(0), onde a reta corta o eixo y; −4 erra o sinal ao isolar x; 3 é a taxa de variação.',
    verificar: () => 12 / 3,
  },
  {
    id: 'mat-funcoes-q07',
    temaId: 'mat-funcoes',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'O lucro mensal de uma pequena farmácia, em milhares de reais, é modelado por L(x) = −x² + 40x − 300, em que x é o número de lotes vendidos. A menor quantidade de lotes que gera lucro igual a zero é:',
    alternativas: ['10', '15', '20', '30', '40'],
    correta: 0,
    comentario:
      'L(x) = 0 → x² − 40x + 300 = 0. Δ = 1.600 − 1.200 = 400, e x = (40 ± 20) ÷ 2 = 10 ou 30. A menor é 10. Entre 10 e 30 lotes há lucro; 20 é a abscissa do vértice (lucro máximo, de 100 mil reais); 30 é a outra raiz.',
    verificar: () => {
      const a = -1;
      const b = 40;
      const c = -300;
      const r = Math.sqrt(b * b - 4 * a * c);
      return Math.min((-b + r) / (2 * a), (-b - r) / (2 * a));
    },
  },
  {
    id: 'mat-funcoes-q08',
    temaId: 'mat-funcoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'O gráfico da função f(x) = −2x + 5 é uma reta decrescente que intercepta o eixo das ordenadas no ponto (0, 5).',
    gabaritoCE: true,
    comentario:
      'Na função afim f(x) = ax + b, a = −2 < 0 indica reta decrescente, e b = 5 é o valor de f(0), ponto em que a reta corta o eixo y (das ordenadas). Item certo.',
    verificar: () => {
      const a: number = -2;
      const b: number = 5;
      return a < 0 && a * 0 + b === 5 ? 'Certo' : 'Errado';
    },
  },

  /* ---------- mat-medidas ---------- */
  {
    id: 'mat-medidas-q01',
    temaId: 'mat-medidas',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Um galão com 5 litros de álcool 70% será fracionado em frascos de 250 mL. Assinalar a alternativa que apresenta o número de frascos que podem ser completamente cheios.',
    alternativas: ['20 frascos', '25 frascos', '50 frascos', '200 frascos', '1.250 frascos'],
    correta: 0,
    comentario:
      '5 L = 5.000 mL, e 5.000 ÷ 250 = 20 frascos. 200 frascos resulta de converter 5 L em 50.000 mL (zero a mais); 1.250 multiplica 5 por 250 em vez de dividir.',
    verificar: () => (5 * 1000) / 250,
  },
  {
    id: 'mat-medidas-q02',
    temaId: 'mat-medidas',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Um plantão começou às 19h40 de uma sexta-feira e durou 13 horas e 35 minutos. Esse plantão terminou, no sábado, às:',
    alternativas: ['7h55', '8h15', '8h55', '9h15', '10h15'],
    correta: 3,
    comentario:
      'Some separadamente: 19 h + 13 h = 32 h e 40 min + 35 min = 75 min = 1 h 15 min. Total: 33 h 15 min, ou seja, meia-noite (24 h) mais 9 h 15 min: 9h15 de sábado. Outro caminho: até a meia-noite são 4 h 20 min, e 13 h 35 min − 4 h 20 min = 9 h 15 min. 8h15 despreza a hora que vem dos 75 min; 10h15 a acrescenta duas vezes; 8h55 e 7h55 erram o trecho até a meia-noite (usam 4 h 40 min e 5 h 40 min).',
    verificar: () => relogio(19 * 60 + 40 + 13 * 60 + 35),
  },
  {
    id: 'mat-medidas-q03',
    temaId: 'mat-medidas',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Um terreno doado ao município para a construção de uma unidade de saúde mede 0,35 hectare. Essa área corresponde a:',
    alternativas: ['35 m²', '350 m²', '3.500 m²', '35.000 m²', '350.000 m²'],
    correta: 2,
    comentario:
      '1 hectare = 10.000 m² (um quadrado de 100 m × 100 m). Então 0,35 × 10.000 = 3.500 m². As demais alternativas erram a quantidade de zeros. Lembre que 1 ha = 1 hm² e que, em área, cada degrau da escala de unidades vale ×100.',
    verificar: () => 0.35 * 10000,
  },
  {
    id: 'mat-medidas-q04',
    temaId: 'mat-medidas',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Uma caixa-d’água em forma de paralelepípedo tem dimensões internas de 1,2 m × 0,8 m × 0,5 m. Sua capacidade é de:',
    alternativas: ['48 L', '480 L', '4.800 L', '48.000 L', '480.000 L'],
    correta: 1,
    comentario:
      'Volume = 1,2 × 0,8 × 0,5 = 0,48 m³. Como 1 m³ = 1.000 L, a capacidade é de 0,48 × 1.000 = 480 L. As demais alternativas erram a conversão (lembre: 1 m³ = 1.000 L e 1 dm³ = 1 L).',
    verificar: () => 1.2 * 0.8 * 0.5 * 1000,
  },
  {
    id: 'mat-medidas-q05',
    temaId: 'mat-medidas',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Em um teste de caminhada, um paciente manteve velocidade média de 1,5 m/s. Essa velocidade, em km/h, corresponde a:',
    alternativas: ['0,42 km/h', '1,5 km/h', '4,5 km/h', '5,4 km/h', '90 km/h'],
    correta: 3,
    comentario:
      'Para passar de m/s para km/h, multiplica-se por 3,6, pois 1 m/s = 3.600 m/h = 3,6 km/h: 1,5 × 3,6 = 5,4 km/h. 0,42 km/h divide por 3,6 (sentido inverso); 90 km/h multiplica por 60, convertendo só segundos em minutos.',
    verificar: () => 1.5 * 3.6,
  },
  {
    id: 'mat-medidas-q06',
    temaId: 'mat-medidas',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Um médico registrou, em uma semana, três plantões de 12 horas e 45 minutos cada. O tempo total trabalhado nesses plantões foi de:',
    alternativas: ['36 h 45 min', '37 h 15 min', '37 h 35 min', '38 h 05 min', '38 h 15 min'],
    correta: 4,
    comentario:
      '3 × 12 h = 36 h e 3 × 45 min = 135 min = 2 h 15 min. Total: 38 h 15 min. 37 h 15 min converte 135 min em apenas 1 h 15 min; 37 h 35 min lê 135 min como 1 h 35 min; 36 h 45 min multiplica só as horas.',
    verificar: () => hm((3 * (12 * 60 + 45)) / 60),
  },
  {
    id: 'mat-medidas-q07',
    temaId: 'mat-medidas',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado: 'Uma solução tem densidade de 1,2 g/mL. O volume, em litros, ocupado por 6 kg dessa solução é de:',
    alternativas: ['5 L', '7,2 L', '50 L', '500 L', '5.000 L'],
    correta: 0,
    comentario:
      'Densidade = massa ÷ volume, logo volume = massa ÷ densidade. 6 kg = 6.000 g; 6.000 ÷ 1,2 = 5.000 mL = 5 L. 7,2 L multiplica em vez de dividir (6 × 1,2); 5.000 L esquece que o resultado da divisão está em mililitros.',
    verificar: () => (6 * 1000) / 1.2 / 1000,
  },
  {
    id: 'mat-medidas-q08',
    temaId: 'mat-medidas',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Um frasco contém 0,045 kg de um insumo em pó. Assinalar a alternativa que apresenta essa massa em miligramas.',
    alternativas: ['4,5 mg', '45 mg', '450 mg', '4.500 mg', '45.000 mg'],
    correta: 4,
    comentario:
      '1 kg = 1.000 g e 1 g = 1.000 mg, então 1 kg = 1.000.000 mg. Assim, 0,045 kg = 45 g = 45.000 mg. 45 mg faz só a conversão de kg para g e troca a unidade; as demais erram a quantidade de zeros.',
    verificar: () => 0.045 * 1000 * 1000,
  },
];
