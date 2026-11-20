import type { ResumoTema } from '../../../types';

const ATUALIZADO = '2026-11-19';
const IEZZI = 'IEZZI, G. et al. Fundamentos de Matemática Elementar. São Paulo: Atual (coleção) — referência geral.';
const DANTE = 'DANTE, L. R. Matemática: contexto e aplicações. São Paulo: Ática — referência geral.';

export const RESUMOS: ResumoTema[] = [
  /* ---------- mat-operacoes ---------- */
  {
    temaId: 'mat-operacoes',
    titulo: 'Números, operações, frações, MMC/MDC, potências e raízes',
    resumo:
      'A banca cobra conta bem feita dentro de um problema: ordem das operações, frações e decimais, MMC em situações de reencontro, MDC em divisões sem sobra e propriedades de potências e raízes.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Em provas de prefeitura, este tema quase nunca aparece como teoria de conjuntos. O que cai é **conta bem feita**: expressões numéricas, frações e decimais, **MMC** e **MDC** em situações do dia a dia e **propriedades de potências e raízes**.\n\nA **ordem das operações** é fixa: (1) parênteses, colchetes e chaves, de dentro para fora; (2) potências e raízes; (3) multiplicações e divisões, na ordem em que aparecem, da esquerda para a direita; (4) adições e subtrações, também da esquerda para a direita.\n\nCom **frações**: para somar ou subtrair, iguale os denominadores (pelo MMC); para multiplicar, multiplique numerador por numerador e denominador por denominador; para dividir, multiplique a primeira pelo **inverso** da segunda. A palavra “de” indica multiplicação: 2/3 de 90 = 60.',
      },
      {
        tipo: 'texto',
        texto:
          '**MMC ou MDC?** Use o **MMC** quando eventos periódicos precisam **voltar a coincidir** (doses, plantões, revisões de equipamento). Use o **MDC** quando é preciso **dividir em partes iguais, do maior tamanho possível, sem sobra** (kits, lotes, pedaços de tecido). Para calcular os dois, fatore os números em primos: o MMC pega **todos** os fatores com o **maior** expoente; o MDC pega só os fatores **comuns** com o **menor** expoente.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Propriedade', 'Exemplo', 'Pegadinha'],
          linhas: [
            ['aᵐ · aⁿ = aᵐ⁺ⁿ', '2³ · 2² = 2⁵ = 32', 'Não multiplique os expoentes'],
            ['aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '5⁶ ÷ 5⁴ = 5² = 25', 'Base diferente não se simplifica assim'],
            ['(aᵐ)ⁿ = aᵐ·ⁿ', '(2²)³ = 2⁶ = 64', '2^(3²) = 2⁹ é outra coisa'],
            ['a⁰ = 1 e a⁻ⁿ = 1/aⁿ (a ≠ 0)', '7⁰ = 1; 2⁻³ = 1/8', 'Expoente negativo não deixa o número negativo'],
            ['√(a · b) = √a · √b', '√144 = √16 · √9 = 12', '√(a + b) ≠ √a + √b: √(9 + 16) = 5, não 7'],
            ['(−a)² = a²', '(−3)² = 9', '−3² = −9 (só o 3 é elevado)'],
          ],
        },
      },
      {
        tipo: 'formula',
        formula: 'MMC(a, b) × MDC(a, b) = a × b',
        legenda: 'Vale para dois números naturais. Ex.: 12 e 18 → MDC = 6, MMC = 36 e 6 × 36 = 12 × 18 = 216.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Divisível por 2**: termina em algarismo par.',
          '**Por 3**: a soma dos algarismos é divisível por 3 (7.425 → 18).',
          '**Por 4**: os dois últimos algarismos formam múltiplo de 4 (1.316 → 16).',
          '**Por 5**: termina em 0 ou 5. **Por 10**: termina em 0.',
          '**Por 6**: divisível por 2 e por 3 ao mesmo tempo.',
          '**Por 9**: a soma dos algarismos é divisível por 9.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Reencontro (MMC)',
        enunciado:
          'Um equipamento passa por calibração a cada 10 dias e por limpeza técnica a cada 15 dias. Hoje as duas foram feitas. Daqui a quantos dias coincidirão de novo?',
        resolucao:
          '10 = 2 · 5 e 15 = 3 · 5. MMC = 2 · 3 · 5 = 30. As duas tarefas voltam a coincidir em 30 dias. (Somar os intervalos, 25 dias, é o erro típico.)',
      },
      {
        tipo: 'exemplo',
        titulo: 'Divisão sem sobra (MDC)',
        enunciado:
          'Há 84 frascos de álcool e 126 pacotes de gaze para montar o maior número possível de caixas iguais, sem sobra. Quantas caixas, e com quanto de cada item?',
        resolucao:
          '84 = 2² · 3 · 7 e 126 = 2 · 3² · 7. MDC = 2 · 3 · 7 = 42 caixas, cada uma com 84 ÷ 42 = 2 frascos e 126 ÷ 42 = 3 pacotes.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas de fração e decimal: **2/5 + 1/3 não é 3/8** (nunca some numeradores e denominadores); **dividir por 0,5 é multiplicar por 2**; e, em “múltiplos de 4 **ou** de 6”, desconte os que são múltiplos dos dois (os múltiplos de 12), senão eles são contados duas vezes.',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-razao-proporcao ---------- */
  {
    temaId: 'mat-razao-proporcao',
    titulo: 'Razão, proporção, divisão proporcional e escalas',
    resumo:
      'Caem escalas de mapa e planta (com conversão de unidades), razões com unidade (densidade, velocidade) e, sobretudo, divisão de verbas ou prêmios em partes diretamente, inversamente ou compostamente proporcionais.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Razão** é o quociente a/b entre duas grandezas. Quando as unidades são diferentes, a razão ganha nome: **velocidade média** (km/h), **densidade demográfica** (habitantes por km²), **concentração** (mg/mL). **Proporção** é a igualdade entre duas razões, a/b = c/d, e sua propriedade fundamental permite achar o termo desconhecido.\n\n**Escala** é a razão entre a medida no desenho e a medida real, **na mesma unidade**. Na escala 1:50.000, 1 cm do mapa equivale a 50.000 cm (500 m) no terreno. Quase todo erro de escala é de conversão: 1 m = 100 cm e 1 km = 100.000 cm.',
      },
      { tipo: 'formula', formula: 'a/b = c/d  ⇔  a · d = b · c', legenda: 'Produto dos meios = produto dos extremos.' },
      { tipo: 'formula', formula: 'Escala = medida no desenho ÷ medida real (mesma unidade)', legenda: 'Para áreas, a razão vai ao quadrado; para volumes, ao cubo.' },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Tipo de divisão', 'Peso de cada parte', 'Quem recebe mais'],
          linhas: [
            ['Diretamente proporcional a x', 'x', 'Quem tem o maior x'],
            ['Inversamente proporcional a y', '1/y', 'Quem tem o menor y'],
            ['Direta a x e inversa a y', 'x/y', 'Quem tem a maior razão x/y'],
          ],
        },
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Calcule o **peso** de cada parte (x, 1/y ou x/y). Se houver frações, multiplique todos pelo MMC dos denominadores para trabalhar com inteiros.',
          'Some os pesos.',
          'Constante: **k = total ÷ soma dos pesos**.',
          'Cada parte = **peso × k**. Confira: as partes devem somar o total.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Divisão inversamente proporcional',
        enunciado: 'R$ 3.000,00 serão divididos entre dois servidores em partes inversamente proporcionais às faltas: 2 e 3 faltas. Quanto recebe cada um?',
        resolucao:
          'Pesos 1/2 e 1/3; multiplicando pelo MMC 6, ficam 3 e 2. Soma = 5; k = 3.000 ÷ 5 = 600. Quem faltou 2 vezes recebe 3 × 600 = R$ 1.800,00; quem faltou 3 vezes, 2 × 600 = R$ 1.200,00.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Escala',
        enunciado: 'Na escala 1:200.000, duas cidades distam 7,5 cm no mapa. Qual a distância real?',
        resolucao: '7,5 × 200.000 = 1.500.000 cm. Dividindo por 100.000 (cm → km): 15 km.',
      },
      {
        tipo: 'atencao',
        texto:
          'Na divisão **inversamente** proporcional, quem tem **mais** faltas (ou mais dias de atraso) recebe **menos**. Se a sua conta deu o contrário, você dividiu em proporção direta. Em escala de **área**, eleve a escala ao quadrado: 1:500 vira 1:250.000.',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-regra-tres ---------- */
  {
    temaId: 'mat-regra-tres',
    titulo: 'Regra de três simples e composta',
    resumo:
      'Tema certo em prova: a banca testa se você identifica grandezas diretas e inversas, sobretudo na regra de três composta com trabalhadores, horas, dias e produção, e se converte corretamente horas decimais.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Duas grandezas são **diretamente proporcionais** quando, ao dobrar uma, a outra também dobra (a razão é constante): volume de xarope e dias de uso, distância e tempo a velocidade constante. São **inversamente proporcionais** quando, ao dobrar uma, a outra cai pela metade (o produto é constante): número de técnicos e dias para concluir a mesma tarefa, velocidade e tempo de viagem.\n\nNa **regra de três composta**, há três ou mais grandezas. O segredo é comparar **cada grandeza com a da incógnita, uma de cada vez**, imaginando as demais fixas.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Monte uma tabela com uma coluna por grandeza e a incógnita x em destaque.',
          'Pergunte, para cada grandeza: “se ela aumenta, x aumenta ou diminui?”. Aumenta → **direta**; diminui → **inversa**.',
          'Escreva x = valor conhecido × (razões das diretas) × (razões **invertidas** das inversas).',
          'Simplifique antes de multiplicar e confira se o resultado faz sentido.',
        ],
      },
      {
        tipo: 'formula',
        formula: 'x = valor conhecido × (novo ÷ antigo das diretas) × (antigo ÷ novo das inversas)',
        legenda: 'Forma prática da regra de três composta.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Regra de três composta',
        enunciado:
          'Três equipes de vacinação, trabalhando 6 h por dia, vacinam 1.800 pessoas em 4 dias. Em quantos dias 2 equipes, trabalhando 8 h por dia, vacinam 2.400 pessoas?',
        resolucao:
          'Comparando com “dias”: pessoas é direta (mais pessoas, mais dias); equipes e horas são inversas (menos equipes, mais dias; mais horas, menos dias). x = 4 × (2.400/1.800) × (3/2) × (6/8) = 4 × 4/3 × 3/2 × 3/4 = 6 dias.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Trabalho conjunto',
        enunciado: 'Uma torneira enche um tanque em 4 h e outra em 12 h. Juntas, em quanto tempo?',
        resolucao: 'Por hora: 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3 do tanque. Juntas, levam 3 h. Atalho para dois agentes: (4 × 12) ÷ (4 + 12) = 3.',
      },
      {
        tipo: 'atencao',
        texto:
          'Horas decimais não são minutos: **6,4 h = 6 h 24 min** (0,4 × 60), e não 6 h 40 min. E desconfie de resultados absurdos: com mais trabalhadores, o prazo tem de **diminuir**; o tempo de duas máquinas juntas é sempre **menor** que o da mais rápida.',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-porcentagem ---------- */
  {
    temaId: 'mat-porcentagem',
    titulo: 'Porcentagem, aumentos e descontos sucessivos',
    resumo:
      'Está entre os temas de Matemática mais cobrados em concurso. A banca explora fator multiplicativo, variação percentual, “valor original” e, principalmente, aumentos e descontos sucessivos, que não se somam.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**p% = p/100.** Calcular p% de um valor é multiplicar: 15% de 240 = 0,15 × 240 = 36. A ferramenta que resolve quase tudo é o **fator multiplicativo**: aumento de p% multiplica por (1 + p/100); desconto de p% multiplica por (1 − p/100). Assim, +8% é × 1,08 e −30% é × 0,70.\n\nEm **variações sucessivas**, multiplicam-se os fatores. Por isso +20% seguido de −20% não volta ao valor inicial: 1,2 × 0,8 = 0,96, uma perda de 4%. Na **variação percentual**, a base é sempre o valor **inicial**.',
      },
      { tipo: 'formula', formula: 'Valor final = valor inicial × (1 ± i₁) × (1 ± i₂) × …', legenda: 'i em forma decimal: 12% = 0,12.' },
      { tipo: 'formula', formula: 'Variação percentual = (final − inicial) ÷ inicial × 100', legenda: 'A base é o valor de partida.' },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Situação', 'Fator', 'Resultado'],
          linhas: [
            ['Aumento de 20%', '1,20', '+20%'],
            ['Desconto de 15%', '0,85', '−15%'],
            ['+20% e depois −20%', '1,2 × 0,8 = 0,96', '−4%'],
            ['Três aumentos de 10%', '1,1³ = 1,331', '+33,1%'],
            ['Dois descontos de 10%', '0,9² = 0,81', '−19%'],
            ['Anular desconto de 20%', '1 ÷ 0,8 = 1,25', 'Aumento de 25%'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Valor original',
        enunciado: 'Após aumento de 12%, um exame passou a custar R$ 168,00. Qual era o preço antes do aumento?',
        resolucao:
          'R$ 168,00 = preço × 1,12. Preço = 168 ÷ 1,12 = R$ 150,00. Errado seria tirar 12% de 168 (168 × 0,88 = 147,84), porque os 12% incidiram sobre o preço antigo.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Percentual de percentual',
        enunciado: 'Dos 800 servidores de uma secretaria, 45% atuam na saúde; destes, 30% são médicos. Quantos são médicos e que percentual isso representa do total?',
        resolucao: '0,30 × 0,45 = 0,135 = 13,5% do total; 0,135 × 800 = 108 médicos.',
      },
      {
        tipo: 'atencao',
        texto:
          'Três pegadinhas campeãs: (1) **somar percentuais sucessivos**; (2) calcular o preço original **aplicando o percentual ao contrário** sobre o valor final (o certo é dividir pelo fator); (3) confundir **pontos percentuais** com percentual: uma taxa que vai de 10% para 12% sobe 2 pontos percentuais, o que representa um aumento de 20% sobre a taxa inicial (2 ÷ 10).',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-juros ---------- */
  {
    temaId: 'mat-juros',
    titulo: 'Juros simples e compostos',
    resumo:
      'A banca cobra as fórmulas de juros simples e compostos, a conversão de taxa e prazo para a mesma unidade, a comparação entre os regimes e a taxa embutida em parcelamentos com entrada.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Os elementos são: **capital** (C, valor aplicado ou financiado), **taxa** (i, em decimal), **tempo** (t), **juros** (J) e **montante** (M = C + J). A regra de ouro: **taxa e tempo na mesma unidade** (taxa mensal com tempo em meses).\n\nNos **juros simples**, os juros de cada período incidem só sobre o capital inicial; o montante cresce em **PA** (linear). Nos **juros compostos**, os juros de cada período são incorporados e passam a render (“juros sobre juros”); o montante cresce em **PG** (exponencial).',
      },
      { tipo: 'formula', formula: 'Juros simples: J = C · i · t   e   M = C · (1 + i · t)', legenda: 'i em decimal: 2% = 0,02.' },
      { tipo: 'formula', formula: 'Juros compostos: M = C · (1 + i)ᵗ   e   J = M − C', legenda: 'Bancas costumam fornecer potências como 1,02³ = 1,061208.' },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Tempo (R$ 1.000,00 a 10% a.m.)', 'Montante simples', 'Montante composto'],
          linhas: [
            ['0,5 mês', 'R$ 1.050,00', 'R$ 1.048,81'],
            ['1 mês', 'R$ 1.100,00', 'R$ 1.100,00'],
            ['2 meses', 'R$ 1.200,00', 'R$ 1.210,00'],
            ['3 meses', 'R$ 1.300,00', 'R$ 1.331,00'],
          ],
          nota: 'Antes de 1 período o simples rende mais; em 1 período são iguais; depois, o composto rende mais.',
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Taxas proporcionais** (regime simples): 12% ao ano equivale a 1% ao mês, basta dividir por 12. **Taxas equivalentes** (regime composto): 1% ao mês equivale a cerca de 12,68% ao ano, porque 1,01¹² ≈ 1,1268. Por isso, no composto, não se divide nem se multiplica a taxa pelo número de períodos.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Montante composto',
        enunciado: 'R$ 8.000,00 aplicados a 3% ao mês, em juros compostos, por 2 meses. Qual o montante?',
        resolucao: 'M = 8.000 × 1,03² = 8.000 × 1,0609 = R$ 8.487,20. No regime simples seriam 8.000 × 1,06 = R$ 8.480,00.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Taxa embutida no parcelamento',
        enunciado: 'Um aparelho custa R$ 1.000,00 à vista ou R$ 520,00 de entrada mais R$ 520,00 após 1 mês. Qual a taxa mensal cobrada?',
        resolucao:
          'Valor financiado: 1.000 − 520 = R$ 480,00. Paga-se R$ 520,00 um mês depois: juros de R$ 40,00 sobre R$ 480,00, ou seja, 40 ÷ 480 ≈ 8,33% ao mês (e não 4%, que seria 40 ÷ 1.000).',
      },
      {
        tipo: 'atencao',
        texto:
          'Erros que a banca espera: dar o **montante** quando se pedem os **juros** (ou o contrário); usar taxa anual com prazo em meses; calcular a taxa do parcelamento sobre o **preço total**, e não sobre o **saldo financiado**; usar juros simples onde o enunciado diz “compostos”.',
      },
    ],
    fontes: [IEZZI, DANTE, 'ASSAF NETO, A. Matemática Financeira e suas Aplicações. São Paulo: Atlas — referência geral.'],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-equacoes ---------- */
  {
    temaId: 'mat-equacoes',
    titulo: 'Equações, inequações e sistemas (1º e 2º graus)',
    resumo:
      'Problemas em linguagem corrente que viram equação: idades, turnos de atendimento, compras com dois preços, terrenos retangulares. A banca cobra montar a equação, resolver sistemas, aplicar Bhaskara e interpretar inequações.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Resolver uma **equação do 1º grau** é isolar x com operações inversas, sempre nos dois membros. A parte difícil é **traduzir o texto**: “o triplo de um número mais 4” é 3x + 4; “o triplo de um número mais 4, tudo dividido por 2” é (3x + 4)/2.\n\n**Sistemas** com duas incógnitas se resolvem por **substituição** (isola uma letra e substitui na outra equação) ou por **adição** (soma as equações para eliminar uma letra). Na **equação do 2º grau** ax² + bx + c = 0, use Bhaskara ou, quando as raízes forem inteiras, **soma e produto**.',
      },
      { tipo: 'formula', formula: 'x = (−b ± √Δ) ÷ 2a,  com  Δ = b² − 4ac', legenda: 'Fórmula de Bhaskara.' },
      { tipo: 'formula', formula: 'Soma das raízes S = −b/a;  produto P = c/a', legenda: 'Ex.: x² − 7x + 10 = 0 → S = 7, P = 10 → raízes 2 e 5.' },
      {
        tipo: 'lista',
        itens: [
          '**Δ > 0**: duas raízes reais distintas.',
          '**Δ = 0**: duas raízes reais iguais (raiz dupla).',
          '**Δ < 0**: nenhuma raiz real.',
          'Em problema de medida (lado, idade, quantidade), descarte a raiz negativa.',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Inequações** se resolvem como equações, com uma diferença: ao **multiplicar ou dividir por número negativo, inverte-se o sinal** da desigualdade. Em perguntas do tipo “a partir de quantas consultas…”, a resposta é o **menor inteiro** que satisfaz a desigualdade estrita.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Sistema pelo método da suposição',
        enunciado: 'Em um estacionamento há 25 veículos, entre carros e motos, com 80 rodas ao todo. Quantos são carros?',
        resolucao:
          'Sistema: c + m = 25 e 4c + 2m = 80. Atalho: se todos fossem motos, haveria 50 rodas; sobram 30 rodas, e cada carro tem 2 a mais que uma moto: 30 ÷ 2 = 15 carros (e 10 motos).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Equação do 2º grau em problema',
        enunciado: 'Um canteiro retangular tem 24 m² e comprimento 2 m maior que a largura. Qual a largura?',
        resolucao: 'x(x + 2) = 24 → x² + 2x − 24 = 0. Δ = 4 + 96 = 100; x = (−2 + 10) ÷ 2 = 4 m (a raiz −6 é descartada). Comprimento: 6 m.',
      },
      {
        tipo: 'atencao',
        texto:
          'Na inequação, **truncar** é o erro clássico: se n > 5,33, a resposta é 6, e não 5. E, depois de resolver, **volte à pergunta**: a banca costuma colocar entre as alternativas o valor da outra incógnita.',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-funcoes ---------- */
  {
    temaId: 'mat-funcoes',
    titulo: 'Funções: afim, quadrática, exponencial e logarítmica (noções)',
    resumo:
      'A banca cobra leitura de função afim (custo fixo + variável), vértice da parábola em problemas de máximo e mínimo, crescimento e decaimento exponencial (meia-vida) e propriedades básicas de logaritmos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Função afim**, f(x) = ax + b: o gráfico é uma reta. O coeficiente **a** é a **taxa de variação** (quanto f aumenta quando x aumenta 1): a > 0, crescente; a < 0, decrescente. O termo **b** é o valor de f(0), onde a reta corta o eixo y; em problemas de custo, b é o **custo fixo** e a, o **custo por unidade**. O zero da função é x = −b/a.\n\n**Função quadrática**, f(x) = ax² + bx + c: o gráfico é uma parábola. Se a > 0, a concavidade é para cima e o vértice é ponto de **mínimo**; se a < 0, para baixo, e o vértice é ponto de **máximo**.',
      },
      { tipo: 'formula', formula: 'a = (y₂ − y₁) ÷ (x₂ − x₁)', legenda: 'Taxa de variação da função afim a partir de dois pontos.' },
      { tipo: 'formula', formula: 'xᵥ = −b/2a   e   yᵥ = −Δ/4a', legenda: 'Coordenadas do vértice da parábola; também é possível calcular yᵥ = f(xᵥ).' },
      {
        tipo: 'texto',
        texto:
          '**Função exponencial**, f(x) = k · aˣ (com k > 0): cresce se a > 1 e decresce se 0 < a < 1. Modela crescimento de populações, juros compostos e **meia-vida** (a quantidade cai pela metade a cada intervalo fixo). O **logaritmo** é a operação inversa: logₐ b = x significa aˣ = b. Sem base escrita, a base é 10.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Propriedade', 'Exemplo (log 2 = 0,30; log 3 = 0,48)'],
          linhas: [
            ['log (a · b) = log a + log b', 'log 6 = 0,30 + 0,48 = 0,78'],
            ['log (a ÷ b) = log a − log b', 'log 1,5 = 0,48 − 0,30 = 0,18'],
            ['log aⁿ = n · log a', 'log 8 = 3 × 0,30 = 0,90'],
            ['log 1 = 0 e logₐ a = 1', 'log 10 = 1; log 100 = 2'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Máximo de uma função quadrática',
        enunciado: 'O lucro de uma empresa é L(x) = −2x² + 80x − 600. Qual a quantidade que maximiza o lucro e qual é o lucro máximo?',
        resolucao: 'xᵥ = −80 ÷ (2 × (−2)) = 20 unidades. L(20) = −2 × 400 + 1.600 − 600 = 200. Lucro máximo: 200.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Meia-vida (modelo didático)',
        enunciado: 'Uma substância tem meia-vida de 4 h. De 800 mg iniciais, quanto resta após 12 h?',
        resolucao: '12 ÷ 4 = 3 meias-vidas: 800 × (1/2)³ = 800 ÷ 8 = 100 mg (800 → 400 → 200 → 100).',
      },
      {
        tipo: 'atencao',
        texto:
          '“Quantidade que dá lucro máximo” é **xᵥ**; “lucro máximo” é **yᵥ**. No decaimento exponencial, não divida a quantidade pelo número de meias-vidas (isso seria queda linear). E **log (a + b) não é log a + log b**.',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-medidas ---------- */
  {
    temaId: 'mat-medidas',
    titulo: 'Sistema métrico, medidas de tempo e conversões',
    resumo:
      'Conversões de comprimento, área, volume, capacidade e massa (com destaque para L, mL, mg e hectare), velocidade em km/h e m/s e operações com horas e minutos, que seguem a base 60.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'No **Sistema Internacional (SI)**, os prefixos indicam potências de 10: quilo (k) = 1.000, hecto (h) = 100, deca (da) = 10, deci (d) = 0,1, centi (c) = 0,01, mili (m) = 0,001, micro (µ) = 0,000001 (na prática clínica, o micrograma costuma ser escrito “mcg” em vez de µg). Na tabela de unidades, cada degrau vale **× 10** em comprimento, **× 100** em área e **× 1.000** em volume.\n\nA ponte entre volume e capacidade é **1 dm³ = 1 L**. Daí saem 1 m³ = 1.000 L e 1 cm³ = 1 mL (o “cc” das seringas).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Grandeza', 'Equivalências mais cobradas'],
          linhas: [
            ['Comprimento', '1 km = 1.000 m; 1 m = 100 cm = 1.000 mm'],
            ['Área', '1 m² = 10.000 cm²; 1 ha = 10.000 m²; 1 km² = 100 ha'],
            ['Volume e capacidade', '1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL'],
            ['Massa', '1 t = 1.000 kg; 1 kg = 1.000 g; 1 g = 1.000 mg; 1 mg = 1.000 mcg'],
            ['Tempo', '1 h = 60 min = 3.600 s; 1 dia = 24 h = 1.440 min'],
          ],
        },
      },
      { tipo: 'formula', formula: 'km/h ÷ 3,6 = m/s     m/s × 3,6 = km/h', legenda: 'Porque 1 km/h = 1.000 m ÷ 3.600 s.' },
      {
        tipo: 'texto',
        texto:
          'O tempo usa o **sistema sexagesimal**: 60 minutos formam 1 hora. Ao somar horários, some horas com horas e minutos com minutos e depois converta o excesso de minutos. Horas decimais devem ser convertidas multiplicando a parte decimal por 60.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Horas decimais',
        enunciado: 'Um atendimento durou 2,4 h. Quanto é isso em horas e minutos?',
        resolucao: '0,4 h × 60 = 24 min. Logo, 2,4 h = 2 h 24 min (e não 2 h 40 min).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Soma de tempos',
        enunciado: 'Um plantão começou às 7h50 e durou 5 h 35 min. A que horas terminou?',
        resolucao: '7 h + 5 h = 12 h; 50 min + 35 min = 85 min = 1 h 25 min. Total: 13h25.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Volume em litros',
        enunciado: 'Quantos litros cabem em um tanque de 2 m × 1,5 m × 0,8 m?',
        resolucao: 'V = 2 × 1,5 × 0,8 = 2,4 m³ = 2,4 × 1.000 = 2.400 L.',
      },
      {
        tipo: 'atencao',
        texto:
          'Em área, cada degrau vale **100**; em volume, **1.000**: 1 m² = 10.000 cm², e não 100 cm². E cuidado com **mg × mcg** e com **g × mg**: um erro de unidade aqui multiplica o resultado por mil.',
      },
    ],
    fontes: [IEZZI, DANTE, 'INMETRO. Sistema Internacional de Unidades (SI) — tradução da brochura do BIPM.'],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-geometria ---------- */
  {
    temaId: 'mat-geometria',
    titulo: 'Geometria plana e espacial (áreas, volumes, Pitágoras)',
    resumo:
      'Áreas de figuras planas (inclusive compostas), comprimento e área do círculo, Teorema de Pitágoras, volumes de prismas e cilindros convertidos em litros e efeito da semelhança sobre área e volume.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A geometria de concurso é aplicada: piso de uma sala, canteiro circular, rampa, caixa-d’água, reservatório cilíndrico. Quase sempre há uma **conversão de unidade** escondida (m³ para litros, cm² para m²) e um detalhe de leitura (**raio ou diâmetro?**). Figuras compostas se resolvem somando ou subtraindo áreas conhecidas.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Figura plana', 'Área', 'Perímetro'],
          linhas: [
            ['Quadrado (lado l)', 'l²', '4l'],
            ['Retângulo (b × h)', 'b · h', '2b + 2h'],
            ['Triângulo', 'b · h ÷ 2', 'soma dos lados'],
            ['Trapézio', '(B + b) · h ÷ 2', 'soma dos lados'],
            ['Losango', 'D · d ÷ 2', '4l'],
            ['Círculo (raio r)', 'π · r²', '2 · π · r'],
          ],
        },
      },
      { tipo: 'formula', formula: 'a² = b² + c²', legenda: 'Teorema de Pitágoras: a é a hipotenusa (lado oposto ao ângulo reto); b e c são os catetos.' },
      {
        tipo: 'lista',
        itens: [
          'Ternos pitagóricos que poupam conta: **3-4-5**, **5-12-13**, **8-15-17**, **7-24-25** e múltiplos (6-8-10; 0,6-0,8-1).',
          '**Diagonal do quadrado** de lado l: l√2. **Altura do triângulo equilátero** de lado l: l√3 ÷ 2.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Sólido', 'Volume'],
          linhas: [
            ['Cubo (aresta a)', 'a³'],
            ['Paralelepípedo', 'a · b · c'],
            ['Cilindro', 'π · r² · h'],
            ['Cone e pirâmide', 'área da base × h ÷ 3'],
            ['Esfera', '4 · π · r³ ÷ 3'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Semelhança**: se todas as medidas lineares forem multiplicadas por k, as **áreas** ficam multiplicadas por **k²** e os **volumes** por **k³**. Dobrar o raio de uma piscina circular quadruplica a área do fundo; dobrar a aresta de um cubo multiplica o volume por 8.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Volume do cilindro em litros',
        enunciado: 'Um reservatório cilíndrico tem 2 m de raio e 3 m de altura. Quantos litros comporta (π = 3,14)?',
        resolucao: 'V = 3,14 × 2² × 3 = 3,14 × 12 = 37,68 m³. Como 1 m³ = 1.000 L, são 37.680 L.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Pitágoras',
        enunciado: 'Uma escada de 2,5 m está apoiada em uma parede, com o pé a 0,7 m da base. A que altura ela toca a parede?',
        resolucao: 'h² + 0,7² = 2,5² → h² = 6,25 − 0,49 = 5,76 → h = 2,4 m (terno 7-24-25 dividido por 10).',
      },
      {
        tipo: 'atencao',
        texto:
          'Confira se o enunciado deu **raio ou diâmetro**; não confunda **perímetro** (m) com **área** (m²); e, ao final de um volume em m³, multiplique por 1.000 para ter litros. Na hipotenusa, não se esqueça de **extrair a raiz**.',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-sequencias ---------- */
  {
    temaId: 'mat-sequencias',
    titulo: 'Progressões aritméticas e geométricas',
    resumo:
      'Termo geral e soma de PA e de PG em contextos como atendimentos que crescem a cada dia, economias mensais e casos que dobram ou triplicam; a banca explora o “n − 1” do termo geral e a confusão entre termo e soma.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Na **progressão aritmética (PA)**, cada termo é o anterior **mais** uma constante, a razão r (5, 9, 13, 17… tem r = 4). Na **progressão geométrica (PG)**, cada termo é o anterior **vezes** uma constante, a razão q (3, 6, 12, 24… tem q = 2).\n\nHá uma ponte com o tema de juros: montantes em **juros simples** formam uma PA; em **juros compostos**, uma PG. Em três termos consecutivos, o do meio é a **média aritmética** dos vizinhos na PA (b = (a + c)/2) e a **média geométrica** na PG (b² = a · c).',
      },
      { tipo: 'formula', formula: 'PA:  aₙ = a₁ + (n − 1) · r     Sₙ = (a₁ + aₙ) · n ÷ 2', legenda: 'Do 1º ao n-ésimo termo há n − 1 “saltos” de razão r.' },
      { tipo: 'formula', formula: 'PG:  aₙ = a₁ · qⁿ⁻¹     Sₙ = a₁ · (qⁿ − 1) ÷ (q − 1)', legenda: 'Para q ≠ 1.' },
      { tipo: 'formula', formula: 'PG infinita:  S∞ = a₁ ÷ (1 − q),  se −1 < q < 1', legenda: 'Ex.: 8 + 4 + 2 + 1 + … = 8 ÷ (1 − 1/2) = 16.' },
      {
        tipo: 'exemplo',
        titulo: 'Termo e soma da PA',
        enunciado: 'Em uma PA, a₁ = 7 e r = 4. Calcule a₂₅ e a soma dos 25 primeiros termos.',
        resolucao: 'a₂₅ = 7 + 24 × 4 = 103. S₂₅ = (7 + 103) × 25 ÷ 2 = 110 × 12,5 = 1.375.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Termo e soma da PG',
        enunciado: 'Na PG (3, 6, 12, …), calcule o 8º termo e a soma dos 8 primeiros termos.',
        resolucao: 'a₈ = 3 × 2⁷ = 3 × 128 = 384. S₈ = 3 × (2⁸ − 1) ÷ (2 − 1) = 3 × 255 = 765.',
      },
      {
        tipo: 'exemplo',
        titulo: 'PA a partir de dois termos',
        enunciado: 'Numa PA, a₄ = 17 e a₁₀ = 41. Quanto vale a₁?',
        resolucao: 'Do 4º ao 10º termo há 6 razões: 6r = 41 − 17 = 24 → r = 4. a₁ = a₄ − 3r = 17 − 12 = 5.',
      },
      {
        tipo: 'atencao',
        texto:
          'O expoente e o multiplicador do termo geral são **n − 1**, e não n. Leia se a pergunta quer **um termo** (“no 8º dia”) ou **a soma** (“até o 8º dia”, “ao todo”). Para contar termos de uma PA: **(último − primeiro) ÷ r + 1**.',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-estatistica ---------- */
  {
    temaId: 'mat-estatistica',
    titulo: 'Estatística descritiva, tabelas e gráficos',
    resumo:
      'Medidas de tendência central (média, média ponderada, mediana, moda), dispersão (amplitude, variância, desvio padrão), leitura de tabelas de frequência e cálculo de setores em gráficos de pizza.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'As **medidas de tendência central** resumem os dados em um valor típico. A **média** soma tudo e divide pela quantidade; é sensível a valores extremos. A **mediana** é o valor do meio dos dados **ordenados**; não se deixa levar por extremos. A **moda** é o valor mais frequente (pode haver mais de uma ou nenhuma).\n\nAs **medidas de dispersão** dizem quanto os dados se espalham: **amplitude** (maior − menor), **variância** (média dos quadrados dos desvios em relação à média) e **desvio padrão** (raiz quadrada da variância, na mesma unidade dos dados).',
      },
      { tipo: 'formula', formula: 'Média = Σx ÷ n     Média ponderada = Σ(x · p) ÷ Σp', legenda: 'Na ponderada, divide-se pela soma dos pesos.' },
      { tipo: 'formula', formula: 'σ² = Σ(x − x̄)² ÷ n     σ = √σ²', legenda: 'Variância e desvio padrão populacionais. Na amostra, divide-se por n − 1.' },
      {
        tipo: 'lista',
        itens: [
          '**Mediana com n ímpar**: o termo central (posição (n + 1)/2).',
          '**Mediana com n par**: a média dos dois termos centrais (posições n/2 e n/2 + 1).',
          'Somar uma constante a todos os dados soma a constante à média e **não muda** o desvio padrão.',
          'Multiplicar todos os dados por k multiplica média e desvio padrão por k (e a variância por k²).',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Gráfico', 'Para que serve', 'Conta típica'],
          linhas: [
            ['Setores (pizza)', 'Partes de um todo', 'Ângulo = % × 360°'],
            ['Colunas ou barras', 'Comparar categorias', 'Diferenças e razões entre barras'],
            ['Linhas', 'Evolução no tempo', 'Variação percentual entre dois pontos'],
            ['Histograma', 'Distribuição de dados contínuos em classes', 'Frequência de cada classe'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Média ponderada',
        enunciado: 'Um candidato tirou 6,0 na prova objetiva (peso 3) e 9,0 na discursiva (peso 2). Qual a média final?',
        resolucao: '(6 × 3 + 9 × 2) ÷ (3 + 2) = (18 + 18) ÷ 5 = 7,2. A média simples, 7,5, seria o erro.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Tabela de frequências',
        enunciado: 'Número de filhos de 10 servidores: 0 (2 servidores), 1 (5), 2 (2) e 3 (1). Calcule média, mediana e moda.',
        resolucao:
          'Média = (0 × 2 + 1 × 5 + 2 × 2 + 3 × 1) ÷ 10 = 12 ÷ 10 = 1,2. Dados ordenados: 0, 0, 1, 1, 1, 1, 1, 2, 2, 3; mediana = (5º + 6º) ÷ 2 = (1 + 1) ÷ 2 = 1. Moda = 1.',
      },
      {
        tipo: 'atencao',
        texto:
          'Nunca calcule a mediana **sem ordenar** os dados. Na média ponderada, divida pela **soma dos pesos**. Em tabela de frequência, a média é Σ(valor × frequência) ÷ total, e não a média dos valores da primeira coluna.',
      },
    ],
    fontes: [IEZZI, DANTE, 'IBGE. Normas de apresentação tabular. 3. ed. Rio de Janeiro: IBGE, 1993.'],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-contagem-probabilidade ---------- */
  {
    temaId: 'mat-contagem-probabilidade',
    titulo: 'Análise combinatória e probabilidade',
    resumo:
      'Princípio fundamental da contagem, arranjo × combinação (a ordem importa?), anagramas e probabilidade clássica, com “e/ou”, sorteio sem reposição, complementar e probabilidade condicional.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Princípio fundamental da contagem (PFC)**: se uma escolha pode ser feita de m modos e outra, independente, de n modos, as duas juntas podem ser feitas de m × n modos. Quase toda questão de contagem é o PFC com um cuidado: **a ordem importa?**\n\nSe trocar a ordem dos escolhidos gera outra possibilidade (presidente e vice, senha, pódio), é **arranjo**. Se não gera (comissão, grupo, equipe sem funções), é **combinação**. **Permutação** é o arranjo de todos os elementos (filas, anagramas).',
      },
      { tipo: 'formula', formula: 'n! = n · (n − 1) · … · 2 · 1     (0! = 1)', legenda: 'Fatorial.' },
      { tipo: 'formula', formula: 'A(n, p) = n! ÷ (n − p)!     C(n, p) = n! ÷ [p! · (n − p)!]', legenda: 'Arranjo e combinação de n elementos tomados p a p.' },
      { tipo: 'formula', formula: 'Permutação com repetição = n! ÷ (a! · b! · …)', legenda: 'a, b… são as quantidades de elementos repetidos. Ex.: ARARA → 5! ÷ (3! · 2!) = 10.' },
      {
        tipo: 'texto',
        texto:
          '**Probabilidade clássica**: P = casos favoráveis ÷ casos possíveis, quando todos os resultados são igualmente prováveis. Eventos **independentes** que ocorrem juntos (“e”): multiplique. Eventos **mutuamente exclusivos** (“ou”): some. Se não forem exclusivos, P(A ou B) = P(A) + P(B) − P(A e B). Para “**pelo menos um**”, use o complementar: 1 − P(nenhum). **Probabilidade condicional**: P(A | B) = P(A e B) ÷ P(B).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Combinação × arranjo',
        enunciado: 'De 6 enfermeiros, de quantos modos se forma (a) uma comissão de 3 membros e (b) uma diretoria com presidente, vice e secretário?',
        resolucao: '(a) Ordem não importa: C(6, 3) = (6 × 5 × 4) ÷ (3 × 2 × 1) = 20. (b) Ordem importa: A(6, 3) = 6 × 5 × 4 = 120.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Probabilidade com dois dados',
        enunciado: 'Lançando dois dados, qual a probabilidade de a soma ser 8?',
        resolucao: 'Casos possíveis: 36. Favoráveis: (2,6), (3,5), (4,4), (5,3), (6,2) = 5. P = 5/36.',
      },
      {
        tipo: 'atencao',
        texto:
          'Em sorteio **sem reposição**, o denominador diminui a cada retirada (3/12 × 2/11). Não troque P(A | B) por P(B | A). E, se a soma das opções aparecer nas alternativas (4 + 3 + 2), lembre que escolhas sucessivas se **multiplicam**.',
      },
    ],
    fontes: [IEZZI, DANTE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- mat-saude ---------- */
  {
    temaId: 'mat-saude',
    titulo: 'Matemática aplicada à saúde (dose, gotejamento, IMC, diluições)',
    resumo:
      'Regra de três e conversão de unidades em contexto de saúde: dose por peso, volume a administrar, gotejamento em macro e microgotas, vazão de bomba, diluição (C₁V₁ = C₂V₂) e IMC. Treino de cálculo, não protocolo clínico.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Este tema aparece em concursos de saúde como **aplicação de regra de três, porcentagem e conversão de unidades**. Os números das questões deste banco são **fictícios e servem apenas para treinar a conta**: nada aqui substitui bula, protocolo institucional ou prescrição.\n\nO roteiro é sempre o mesmo: (1) coloque tudo na **mesma unidade** (g ↔ mg, h ↔ min, L ↔ mL); (2) monte a regra de três ou aplique a fórmula; (3) arredonde **só no final** e apenas se o enunciado mandar.',
      },
      { tipo: 'formula', formula: 'Dose (mg) = dose prescrita (mg/kg) × peso (kg)', legenda: 'Se a prescrição for “por dia”, divida pelo número de tomadas para obter a dose de cada uma.' },
      { tipo: 'formula', formula: 'Volume (mL) = dose desejada (mg) × volume da apresentação (mL) ÷ quantidade na apresentação (mg)', legenda: 'É uma regra de três: 200 mg/5 mL e dose de 270 mg → 270 × 5 ÷ 200 = 6,75 mL.' },
      { tipo: 'formula', formula: 'Macrogotas/min = V (mL) ÷ [T (h) × 3]     Microgotas/min = V (mL) ÷ T (h)', legenda: 'Padrão dos equipos: 1 mL = 20 macrogotas = 60 microgotas. Microgotas/min é numericamente igual a mL/h.' },
      { tipo: 'formula', formula: 'C₁ · V₁ = C₂ · V₂', legenda: 'Diluição: concentração e volume da solução estoque (1) e da solução final (2).' },
      { tipo: 'formula', formula: 'IMC = peso (kg) ÷ altura² (m²)', legenda: 'Altura em metros, elevada ao quadrado.' },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['IMC (adultos)', 'Classificação'],
          linhas: [
            ['Menor que 18,5', 'Baixo peso'],
            ['18,5 a 24,9', 'Peso adequado (eutrofia)'],
            ['25,0 a 29,9', 'Sobrepeso'],
            ['30,0 a 34,9', 'Obesidade grau I'],
            ['35,0 a 39,9', 'Obesidade grau II'],
            ['40,0 ou mais', 'Obesidade grau III'],
          ],
          nota: 'Classificação da OMS adotada pelo Ministério da Saúde para adultos.',
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Concentração em porcentagem (m/v)** significa gramas por 100 mL: soro fisiológico a 0,9% tem 0,9 g de NaCl em 100 mL, ou 9 g por litro; soro glicosado a 5% tem 5 g de glicose em 100 mL, ou 50 g por litro.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Gotejamento',
        enunciado: 'Devem correr 1.500 mL em 12 horas. Calcule o gotejamento em macrogotas e em microgotas por minuto (arredonde ao inteiro mais próximo).',
        resolucao: 'Macrogotas: 1.500 ÷ (12 × 3) = 1.500 ÷ 36 ≈ 41,7 → 42 gotas/min. Microgotas: 1.500 ÷ 12 = 125 microgotas/min (equivale a 125 mL/h).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Diluição',
        enunciado: 'Quantos mL de uma solução a 1% são necessários para preparar 200 mL a 0,2%?',
        resolucao: '1 × V₁ = 0,2 × 200 → V₁ = 40 mL da solução a 1%, completados com 160 mL de diluente.',
      },
      {
        tipo: 'exemplo',
        titulo: 'IMC',
        enunciado: 'Calcule o IMC de um adulto com 70 kg e 1,70 m.',
        resolucao: '1,70² = 2,89. IMC = 70 ÷ 2,89 ≈ 24,2 kg/m², faixa de peso adequado.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: usar a fórmula de **micro** quando o equipo é de **macro** (o resultado sai 3 vezes maior); dividir o peso pela altura **sem elevar ao quadrado**; esquecer de converter **g em mg** (fator 1.000) ou **minutos em horas** (fator 60) antes da conta.',
      },
    ],
    fontes: [
      DANTE,
      'WORLD HEALTH ORGANIZATION. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894. Geneva: WHO, 2000 (classificação do IMC).',
      'BRASIL. Ministério da Saúde. Estratégias para o cuidado da pessoa com doença crônica: obesidade. Cadernos de Atenção Básica, n. 38. Brasília: Ministério da Saúde, 2014.',
      'ISO 8536-4:2019 — Infusion equipment for medical use — Part 4: Infusion sets for single use, gravity feed (requisitos da câmara e do tubo gotejador dos equipos de macrogotas: 20 gotas por mL).',
    ],
    atualizadoEm: ATUALIZADO,
  },
];
