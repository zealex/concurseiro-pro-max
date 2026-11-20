import type { Flashcard } from '../../../types';

export const FLASHCARDS: Flashcard[] = [
  /* ---------- mat-operacoes ---------- */
  {
    id: 'mat-operacoes-f01',
    temaId: 'mat-operacoes',
    frente: 'Problema de “voltar a coincidir” (doses, plantões, ônibus): MMC ou MDC?',
    verso: 'MMC. O reencontro acontece no menor múltiplo comum dos intervalos. Ex.: doses a cada 6 h e a cada 8 h coincidem a cada 24 h.',
  },
  {
    id: 'mat-operacoes-f02',
    temaId: 'mat-operacoes',
    frente: 'Problema de “dividir em partes iguais, do maior tamanho possível, sem sobra”: MMC ou MDC?',
    verso: 'MDC. Ex.: 180 e 240 itens em kits idênticos, sem sobra → MDC(180, 240) = 60 kits.',
  },
  {
    id: 'mat-operacoes-f03',
    temaId: 'mat-operacoes',
    frente: 'Relação entre o MMC e o MDC de dois números a e b',
    verso: 'MMC(a, b) × MDC(a, b) = a × b. Ex.: 12 e 18 → MDC = 6 e MMC = 36; 6 × 36 = 216 = 12 × 18.',
  },
  {
    id: 'mat-operacoes-f04',
    temaId: 'mat-operacoes',
    frente: 'Quanto vale a⁻ⁿ? E a⁰ (com a ≠ 0)?',
    verso: 'a⁻ⁿ = 1/aⁿ (ex.: 2⁻³ = 1/8). a⁰ = 1.',
  },
  {
    id: 'mat-operacoes-f05',
    temaId: 'mat-operacoes',
    frente: '(−3)² e −3² dão o mesmo resultado?',
    verso: 'Não. (−3)² = 9, pois o sinal está dentro do parêntese; −3² = −9, pois só o 3 é elevado ao quadrado.',
  },
  {
    id: 'mat-operacoes-f06',
    temaId: 'mat-operacoes',
    frente: 'Dividir por 0,5, por 0,25 e por 0,2 equivale a…',
    verso: 'Multiplicar por 2, por 4 e por 5, respectivamente. Dividir por uma fração é multiplicar pelo seu inverso.',
  },
  {
    id: 'mat-operacoes-f07',
    temaId: 'mat-operacoes',
    frente: 'Critério de divisibilidade por 3 e por 9',
    verso: 'A soma dos algarismos deve ser divisível por 3 (ou por 9). Ex.: 7.425 → 7 + 4 + 2 + 5 = 18 → divisível por 3 e por 9.',
  },

  /* ---------- mat-razao-proporcao ---------- */
  {
    id: 'mat-razao-proporcao-f01',
    temaId: 'mat-razao-proporcao',
    frente: 'Propriedade fundamental das proporções',
    verso: 'Produto dos meios = produto dos extremos: a/b = c/d ⇔ a · d = b · c.',
  },
  {
    id: 'mat-razao-proporcao-f02',
    temaId: 'mat-razao-proporcao',
    frente: 'Num mapa na escala 1:200.000, quanto vale 1 cm na realidade?',
    verso: '200.000 cm = 2.000 m = 2 km. Lembre: 1 km = 100.000 cm.',
  },
  {
    id: 'mat-razao-proporcao-f03',
    temaId: 'mat-razao-proporcao',
    frente: 'Divisão diretamente proporcional: como achar a constante k?',
    verso: 'k = total ÷ soma dos pesos. Cada parte = peso × k. Ex.: 72.000 entre 1.200, 1.800 e 3.000 → k = 12.',
  },
  {
    id: 'mat-razao-proporcao-f04',
    temaId: 'mat-razao-proporcao',
    frente: 'Divisão inversamente proporcional a 2 e 3: quais pesos usar?',
    verso: 'Os inversos, 1/2 e 1/3, ou, multiplicando pelo MMC 6, os pesos 3 e 2. Quem tem o número maior recebe menos.',
  },
  {
    id: 'mat-razao-proporcao-f05',
    temaId: 'mat-razao-proporcao',
    frente: 'Num mapa 1:1.000, a quanto corresponde 1 cm² do papel?',
    verso: '1.000² cm² = 1.000.000 cm² = 100 m². Em área, a escala vai ao quadrado (em volume, ao cubo).',
  },
  {
    id: 'mat-razao-proporcao-f06',
    temaId: 'mat-razao-proporcao',
    frente: 'Divisão proporcional composta (direta a x e inversa a y): qual o peso de cada parte?',
    verso: 'Peso = x ÷ y. Ex.: 8 plantões e 2 faltas → peso 4; 12 plantões e 4 faltas → peso 3.',
  },

  /* ---------- mat-regra-tres ---------- */
  {
    id: 'mat-regra-tres-f01',
    temaId: 'mat-regra-tres',
    frente: 'Como reconhecer grandezas inversamente proporcionais?',
    verso: 'Quando uma dobra, a outra cai pela metade (o produto é constante). Ex.: mais técnicos → menos dias para a mesma tarefa.',
  },
  {
    id: 'mat-regra-tres-f02',
    temaId: 'mat-regra-tres',
    frente: 'Na regra de três composta, com que grandeza cada uma deve ser comparada?',
    verso: 'Sempre com a grandeza da incógnita (x), uma de cada vez, supondo as demais constantes. As inversas entram com a razão invertida.',
  },
  {
    id: 'mat-regra-tres-f03',
    temaId: 'mat-regra-tres',
    frente: 'Produção × trabalhadores × horas por dia × dias: que relação há entre elas?',
    verso: 'A produção é diretamente proporcional a cada uma das outras. Já, para a mesma produção, dias e trabalhadores são inversamente proporcionais.',
  },
  {
    id: 'mat-regra-tres-f04',
    temaId: 'mat-regra-tres',
    frente: '6,4 h correspondem a quantas horas e minutos?',
    verso: '6 h 24 min (0,4 × 60 = 24). Erro clássico: ler 6 h 40 min.',
  },
  {
    id: 'mat-regra-tres-f05',
    temaId: 'mat-regra-tres',
    frente: 'A faz um serviço em a horas e B em b horas. Juntos, em quanto tempo?',
    verso: 'T = (a · b) ÷ (a + b), ou 1/T = 1/a + 1/b. Ex.: 6 h e 3 h → 2 h. O tempo conjunto é sempre menor que o do mais rápido.',
  },

  /* ---------- mat-porcentagem ---------- */
  {
    id: 'mat-porcentagem-f01',
    temaId: 'mat-porcentagem',
    frente: 'Aumento de 20% seguido de desconto de 20%: qual o efeito total?',
    verso: 'Fator 1,2 × 0,8 = 0,96: redução de 4%. Percentuais sucessivos se multiplicam, não se somam.',
  },
  {
    id: 'mat-porcentagem-f02',
    temaId: 'mat-porcentagem',
    frente: 'Fator multiplicativo de um aumento de p% e de um desconto de p%',
    verso: '(1 + p/100) e (1 − p/100). Ex.: +15% → × 1,15; −15% → × 0,85.',
  },
  {
    id: 'mat-porcentagem-f03',
    temaId: 'mat-porcentagem',
    frente: 'Depois de um desconto de 20%, que aumento faz voltar ao preço original?',
    verso: '25%, pois 1 ÷ 0,8 = 1,25.',
  },
  {
    id: 'mat-porcentagem-f04',
    temaId: 'mat-porcentagem',
    frente: 'Como achar o valor original depois de um aumento de p%?',
    verso: 'Divida pelo fator: original = final ÷ (1 + p/100). Ex.: R$ 168,00 após +12% → 168 ÷ 1,12 = R$ 150,00.',
  },
  {
    id: 'mat-porcentagem-f05',
    temaId: 'mat-porcentagem',
    frente: 'Uma taxa passou de 10% para 12%. Ela subiu 2% ou 20%?',
    verso: 'Subiu 2 pontos percentuais, o que corresponde a um aumento de 20% sobre a taxa original (2 ÷ 10).',
  },
  {
    id: 'mat-porcentagem-f06',
    temaId: 'mat-porcentagem',
    frente: 'Três aumentos sucessivos de 10% equivalem a que aumento único?',
    verso: '1,1³ = 1,331: aumento acumulado de 33,1% (e não de 30%).',
  },

  /* ---------- mat-juros ---------- */
  {
    id: 'mat-juros-f01',
    temaId: 'mat-juros',
    frente: 'Fórmulas do regime de juros simples',
    verso: 'J = C · i · t e M = C · (1 + i · t). Taxa e tempo na mesma unidade.',
  },
  {
    id: 'mat-juros-f02',
    temaId: 'mat-juros',
    frente: 'Fórmula do montante no regime de juros compostos',
    verso: 'M = C · (1 + i)ᵗ; os juros são J = M − C.',
  },
  {
    id: 'mat-juros-f03',
    temaId: 'mat-juros',
    frente: 'Juros simples crescem como uma ___; juros compostos, como uma ___.',
    verso: 'PA (crescimento linear); PG (crescimento exponencial).',
  },
  {
    id: 'mat-juros-f04',
    temaId: 'mat-juros',
    frente: 'Para prazo menor que 1 período da taxa, o que rende mais: juros simples ou compostos?',
    verso: 'Simples. Em t = 1 os dois são iguais; para t > 1, o composto rende mais.',
  },
  {
    id: 'mat-juros-f05',
    temaId: 'mat-juros',
    frente: 'Taxa proporcional × taxa equivalente',
    verso: 'Proporcional (juros simples): 12% a.a. = 1% a.m. Equivalente (compostos): 1% a.m. ≈ 12,68% a.a., pois 1,01¹² ≈ 1,1268.',
  },
  {
    id: 'mat-juros-f06',
    temaId: 'mat-juros',
    frente: 'Parcelamento com entrada: sobre que valor se calcula a taxa de juros?',
    verso: 'Sobre o saldo financiado (preço à vista − entrada), e não sobre o preço total.',
  },

  /* ---------- mat-equacoes ---------- */
  {
    id: 'mat-equacoes-f01',
    temaId: 'mat-equacoes',
    frente: 'Fórmula de Bhaskara',
    verso: 'x = (−b ± √Δ) ÷ 2a, com Δ = b² − 4ac.',
  },
  {
    id: 'mat-equacoes-f02',
    temaId: 'mat-equacoes',
    frente: 'O que indica o discriminante quando Δ > 0, Δ = 0 e Δ < 0?',
    verso: 'Duas raízes reais distintas; duas raízes reais iguais (raiz dupla); nenhuma raiz real.',
  },
  {
    id: 'mat-equacoes-f03',
    temaId: 'mat-equacoes',
    frente: 'Soma e produto das raízes de ax² + bx + c = 0',
    verso: 'S = −b/a e P = c/a. Ex.: x² − 5x + 6 = 0 → S = 5 e P = 6 → raízes 2 e 3.',
  },
  {
    id: 'mat-equacoes-f04',
    temaId: 'mat-equacoes',
    frente: 'O que muda ao multiplicar ou dividir uma inequação por um número negativo?',
    verso: 'O sentido da desigualdade se inverte. Ex.: −2x > 6 → x < −3.',
  },
  {
    id: 'mat-equacoes-f05',
    temaId: 'mat-equacoes',
    frente: 'Atalho para o sistema “carros e motos” (cabeças e rodas)',
    verso: 'Suponha todos do tipo de menor valor e divida a sobra pela diferença. Ex.: 25 veículos e 80 rodas: 25 × 2 = 50; sobram 30; 30 ÷ 2 = 15 carros.',
  },

  /* ---------- mat-funcoes ---------- */
  {
    id: 'mat-funcoes-f01',
    temaId: 'mat-funcoes',
    frente: 'Na função afim f(x) = ax + b, o que significam a e b?',
    verso: 'a é a taxa de variação (a > 0: crescente; a < 0: decrescente). b é o valor em x = 0, onde a reta corta o eixo y.',
  },
  {
    id: 'mat-funcoes-f02',
    temaId: 'mat-funcoes',
    frente: 'Coordenadas do vértice da parábola y = ax² + bx + c',
    verso: 'xᵥ = −b/2a e yᵥ = −Δ/4a (ou f(xᵥ)). Se a < 0, o vértice é ponto de máximo; se a > 0, de mínimo.',
  },
  {
    id: 'mat-funcoes-f03',
    temaId: 'mat-funcoes',
    frente: '“Quantidade que maximiza o lucro” × “lucro máximo”: qual coordenada do vértice?',
    verso: 'A quantidade que maximiza é xᵥ; o valor máximo (lucro, altura) é yᵥ.',
  },
  {
    id: 'mat-funcoes-f04',
    temaId: 'mat-funcoes',
    frente: 'Meia-vida: quanto resta após n meias-vidas?',
    verso: 'Q = Q₀ × (1/2)ⁿ. Ex.: 400 mg após 4 meias-vidas → 400 ÷ 16 = 25 mg (modelo didático).',
  },
  {
    id: 'mat-funcoes-f05',
    temaId: 'mat-funcoes',
    frente: 'Propriedades operatórias do logaritmo',
    verso: 'log(a · b) = log a + log b; log(a/b) = log a − log b; log aⁿ = n · log a. Atenção: log(a + b) não se simplifica.',
  },

  /* ---------- mat-medidas ---------- */
  {
    id: 'mat-medidas-f01',
    temaId: 'mat-medidas',
    frente: '1 m³ = ___ L; 1 dm³ = ___ L; 1 cm³ = ___ mL',
    verso: '1.000 L; 1 L; 1 mL.',
  },
  {
    id: 'mat-medidas-f02',
    temaId: 'mat-medidas',
    frente: '1 hectare = ___ m²',
    verso: '10.000 m² (um quadrado de 100 m × 100 m). E 1 km² = 100 ha = 1.000.000 m².',
  },
  {
    id: 'mat-medidas-f03',
    temaId: 'mat-medidas',
    frente: 'Na tabela de unidades, quanto vale cada “degrau” para comprimento, área e volume?',
    verso: 'Comprimento: × 10. Área: × 100. Volume: × 1.000.',
  },
  {
    id: 'mat-medidas-f04',
    temaId: 'mat-medidas',
    frente: 'Como converter km/h em m/s e vice-versa?',
    verso: 'km/h ÷ 3,6 = m/s; m/s × 3,6 = km/h. Ex.: 72 km/h = 20 m/s.',
  },
  {
    id: 'mat-medidas-f05',
    temaId: 'mat-medidas',
    frente: '1 g = ___ mg; 1 mg = ___ mcg (µg)',
    verso: '1.000 mg; 1.000 mcg. Logo, 1 g = 1.000.000 mcg.',
  },
  {
    id: 'mat-medidas-f06',
    temaId: 'mat-medidas',
    frente: 'Quanto dá 7 h 50 min + 5 h 35 min?',
    verso: '12 h 85 min = 13 h 25 min, pois 85 min = 1 h 25 min. Tempo é contado na base 60.',
  },

  /* ---------- mat-geometria ---------- */
  {
    id: 'mat-geometria-f01',
    temaId: 'mat-geometria',
    frente: 'Área do trapézio',
    verso: '(B + b) × h ÷ 2, em que B e b são as bases e h é a altura.',
  },
  {
    id: 'mat-geometria-f02',
    temaId: 'mat-geometria',
    frente: 'Área e comprimento do círculo',
    verso: 'A = πr²; C = 2πr (= πd). Cuidado: o enunciado pode dar o diâmetro em vez do raio.',
  },
  {
    id: 'mat-geometria-f03',
    temaId: 'mat-geometria',
    frente: 'Ternos pitagóricos mais cobrados',
    verso: '3-4-5, 5-12-13, 8-15-17, 7-24-25 e seus múltiplos (6-8-10; 0,6-0,8-1).',
  },
  {
    id: 'mat-geometria-f04',
    temaId: 'mat-geometria',
    frente: 'Volume do cilindro e do cone',
    verso: 'Cilindro: πr²h. Cone: πr²h ÷ 3 (um terço do cilindro de mesma base e altura).',
  },
  {
    id: 'mat-geometria-f05',
    temaId: 'mat-geometria',
    frente: 'Se as medidas lineares de uma figura são multiplicadas por k, a área e o volume ficam multiplicados por…',
    verso: 'k² e k³. Dobrar a aresta de um cubo multiplica o volume por 8.',
  },
  {
    id: 'mat-geometria-f06',
    temaId: 'mat-geometria',
    frente: 'Área do losango e do triângulo',
    verso: 'Losango: D × d ÷ 2 (produto das diagonais sobre 2). Triângulo: b × h ÷ 2.',
  },

  /* ---------- mat-sequencias ---------- */
  {
    id: 'mat-sequencias-f01',
    temaId: 'mat-sequencias',
    frente: 'Termo geral da PA',
    verso: 'aₙ = a₁ + (n − 1) · r.',
  },
  {
    id: 'mat-sequencias-f02',
    temaId: 'mat-sequencias',
    frente: 'Soma dos n primeiros termos da PA',
    verso: 'Sₙ = (a₁ + aₙ) · n ÷ 2.',
  },
  {
    id: 'mat-sequencias-f03',
    temaId: 'mat-sequencias',
    frente: 'Termo geral e soma dos n primeiros termos da PG',
    verso: 'aₙ = a₁ · qⁿ⁻¹; Sₙ = a₁ · (qⁿ − 1) ÷ (q − 1), com q ≠ 1.',
  },
  {
    id: 'mat-sequencias-f04',
    temaId: 'mat-sequencias',
    frente: 'Soma dos infinitos termos de uma PG',
    verso: 'S∞ = a₁ ÷ (1 − q), válida para −1 < q < 1. Ex.: 8 + 4 + 2 + … = 8 ÷ 0,5 = 16.',
  },
  {
    id: 'mat-sequencias-f05',
    temaId: 'mat-sequencias',
    frente: 'Quantos termos tem a PA de 105 a 497 com razão 7?',
    verso: '(497 − 105) ÷ 7 + 1 = 57. Não esqueça o “+ 1”.',
  },

  /* ---------- mat-estatistica ---------- */
  {
    id: 'mat-estatistica-f01',
    temaId: 'mat-estatistica',
    frente: 'Como encontrar a mediana?',
    verso: 'Ordene os dados. Se n é ímpar, é o termo central; se n é par, é a média dos dois termos centrais.',
  },
  {
    id: 'mat-estatistica-f02',
    temaId: 'mat-estatistica',
    frente: 'Fórmula da média ponderada',
    verso: 'Σ(valor × peso) ÷ Σpesos. Divida pela soma dos pesos, e não pela quantidade de valores.',
  },
  {
    id: 'mat-estatistica-f03',
    temaId: 'mat-estatistica',
    frente: 'Ângulo de um setor no gráfico de pizza',
    verso: 'Percentual × 360°. Ex.: 25% → 90°; 18% → 64,8°.',
  },
  {
    id: 'mat-estatistica-f04',
    temaId: 'mat-estatistica',
    frente: 'Somar uma constante a todos os dados altera a média? E o desvio padrão?',
    verso: 'A média aumenta essa mesma constante; o desvio padrão e a variância não mudam, pois todos os dados se deslocam igualmente.',
  },
  {
    id: 'mat-estatistica-f05',
    temaId: 'mat-estatistica',
    frente: 'Variância populacional e desvio padrão',
    verso: 'σ² = Σ(x − média)² ÷ n e σ = √σ². Na variância amostral, divide-se por n − 1.',
  },

  /* ---------- mat-contagem-probabilidade ---------- */
  {
    id: 'mat-contagem-probabilidade-f01',
    temaId: 'mat-contagem-probabilidade',
    frente: 'Arranjo ou combinação?',
    verso: 'Se trocar a ordem gera outra possibilidade (cargos, senhas, pódio), é arranjo. Se não gera (comissão, grupo), é combinação.',
  },
  {
    id: 'mat-contagem-probabilidade-f02',
    temaId: 'mat-contagem-probabilidade',
    frente: 'Fórmula da combinação simples',
    verso: 'C(n, p) = n! ÷ [p! · (n − p)!]. Ex.: C(8, 3) = 336 ÷ 6 = 56.',
  },
  {
    id: 'mat-contagem-probabilidade-f03',
    temaId: 'mat-contagem-probabilidade',
    frente: 'Anagramas de uma palavra com letras repetidas',
    verso: 'n! ÷ (a! · b! · …), em que a, b… são as repetições. Ex.: ESCALA → 6! ÷ 2! = 360.',
  },
  {
    id: 'mat-contagem-probabilidade-f04',
    temaId: 'mat-contagem-probabilidade',
    frente: 'Como calcular a probabilidade de “pelo menos um”?',
    verso: 'Pelo complementar: 1 − P(nenhum). Ex.: 3 moedas, pelo menos uma cara → 1 − 1/8 = 7/8.',
  },
  {
    id: 'mat-contagem-probabilidade-f05',
    temaId: 'mat-contagem-probabilidade',
    frente: '“E” e “OU” em probabilidade',
    verso: 'E (eventos independentes): multiplica. OU (mutuamente exclusivos): soma. Se não forem exclusivos: P(A) + P(B) − P(A e B).',
  },

  /* ---------- mat-saude ---------- */
  {
    id: 'mat-saude-f01',
    temaId: 'mat-saude',
    frente: 'Fórmula do gotejamento em macrogotas por minuto',
    verso: 'Gotas/min = volume (mL) ÷ [tempo (h) × 3]. O 3 vem de 1 mL = 20 gotas e 1 h = 60 min (20/60 = 1/3).',
  },
  {
    id: 'mat-saude-f02',
    temaId: 'mat-saude',
    frente: 'Fórmula do gotejamento em microgotas por minuto',
    verso: 'Microgotas/min = volume (mL) ÷ tempo (h). Como 1 mL = 60 microgotas, o valor é numericamente igual à vazão em mL/h.',
  },
  {
    id: 'mat-saude-f03',
    temaId: 'mat-saude',
    frente: '1 mL = ___ macrogotas = ___ microgotas',
    verso: '20 macrogotas = 60 microgotas (1 macrogota = 3 microgotas).',
  },
  {
    id: 'mat-saude-f04',
    temaId: 'mat-saude',
    frente: 'IMC de adultos: faixas de classificação (OMS)',
    verso: 'Menor que 18,5: baixo peso; 18,5 a 24,9: adequado; 25 a 29,9: sobrepeso; 30 ou mais: obesidade (graus I, II e III a partir de 30, 35 e 40).',
    fonte: 'OMS (WHO TRS 894, 2000); Ministério da Saúde, Cadernos de Atenção Básica nº 38 (2014)',
  },
  {
    id: 'mat-saude-f05',
    temaId: 'mat-saude',
    frente: 'Fórmula de diluição de soluções',
    verso: 'C₁ · V₁ = C₂ · V₂. Ex.: 500 mL a 0,5% a partir de solução a 2% → V₁ = 0,5 × 500 ÷ 2 = 125 mL de estoque + 375 mL de diluente.',
  },
  {
    id: 'mat-saude-f06',
    temaId: 'mat-saude',
    frente: 'Soro fisiológico a 0,9%: quantos gramas de NaCl há em 1 litro?',
    verso: '9 g/L (0,9 g em cada 100 mL). Concentração em % (m/v) = gramas por 100 mL.',
  },
  {
    id: 'mat-saude-f07',
    temaId: 'mat-saude',
    frente: 'Treino de cálculo: 10 mg/kg/dia, divididos de 8 em 8 horas, para 24 kg. Quanto por dose?',
    verso: '10 × 24 = 240 mg/dia; de 8 em 8 h são 3 doses por dia → 80 mg por dose. (Exercício de conta, não protocolo.)',
  },
  {
    id: 'mat-saude-f08',
    temaId: 'mat-saude',
    frente: 'Fórmula do IMC (com as unidades)',
    verso: 'IMC = peso (kg) ÷ [altura (m)]². Ex.: 64 kg e 1,60 m → 64 ÷ 2,56 = 25 kg/m². Erro clássico: dividir pela altura sem elevar ao quadrado.',
  },
];
