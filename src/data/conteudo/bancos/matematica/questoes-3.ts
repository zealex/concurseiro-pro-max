import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Geometria, progressões, estatística
 * ------------------------------------------------------------------ */

export const QUESTOES_3: QuestaoTreino[] = [
  /* ---------- mat-geometria ---------- */
  {
    id: 'mat-geometria-q01',
    temaId: 'mat-geometria',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'O piso de uma sala de espera retangular, com 6,5 m de comprimento e 4 m de largura, será trocado. Assinalar a alternativa que apresenta a área a ser revestida.',
    alternativas: ['10,5 m²', '13 m²', '21 m²', '26 m²', '52 m²'],
    correta: 3,
    comentario:
      'Área do retângulo = comprimento × largura = 6,5 × 4 = 26 m². 21 corresponde ao perímetro (2 × 6,5 + 2 × 4 = 21 m, que nem é medida de área); 10,5 soma os lados; 13 m² divide por 2, como se fosse triângulo; 52 m² dobra a área.',
    verificar: () => 6.5 * 4,
  },
  {
    id: 'mat-geometria-q02',
    temaId: 'mat-geometria',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Uma escada está apoiada em um muro vertical. O pé da escada está a 1,2 m da base do muro, e o topo toca o muro a 3,5 m de altura do chão. O comprimento da escada é de:',
    alternativas: ['3,7 m', '4,1 m', '4,7 m', '6,85 m', '13,69 m'],
    correta: 0,
    comentario:
      'Muro, chão e escada formam um triângulo retângulo, e a escada é a hipotenusa. Por Pitágoras: x² = 1,2² + 3,5² = 1,44 + 12,25 = 13,69, logo x = √13,69 = 3,7 m. 13,69 esquece de extrair a raiz; 4,7 m soma os catetos; 6,85 divide 13,69 por 2.',
    verificar: () => Math.sqrt(1.2 ** 2 + 3.5 ** 2),
  },
  {
    id: 'mat-geometria-q03',
    temaId: 'mat-geometria',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Uma praça em frente a um posto de saúde terá um canteiro circular com 3 m de raio. Usando π = 3,14, a área do canteiro é de:',
    alternativas: ['9,42 m²', '18,84 m²', '28,26 m²', '56,52 m²', '113,04 m²'],
    correta: 2,
    comentario:
      'Área do círculo = π · r² = 3,14 × 3² = 3,14 × 9 = 28,26 m². 18,84 é o comprimento da circunferência (2πr, em metros); 9,42 é πr; 113,04 usa o diâmetro no lugar do raio (π · 6²); 56,52 dobra a área.',
    verificar: () => 3.14 * 3 ** 2,
  },
  {
    id: 'mat-geometria-q04',
    temaId: 'mat-geometria',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Um reservatório cilíndrico de água tem raio interno de 1 m e altura de 2,5 m. Usando π = 3,14, sua capacidade é de:',
    alternativas: ['7,85 L', '15,7 L', '78,5 L', '785 L', '7.850 L'],
    correta: 4,
    comentario:
      'Volume do cilindro = π · r² · h = 3,14 × 1² × 2,5 = 7,85 m³. Como 1 m³ = 1.000 L, a capacidade é de 7.850 L. 7,85 L esquece a conversão de m³ para litros; 15,7 usa a área lateral (2πrh) em vez do volume; 78,5 L e 785 L erram a conversão.',
    verificar: () => 3.14 * 1 ** 2 * 2.5 * 1000,
  },
  {
    id: 'mat-geometria-q05',
    temaId: 'mat-geometria',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado:
      'Um terreno tem a forma de um trapézio com bases de 30 m e 18 m e altura de 12 m. Nele será construída uma sala quadrada de 8 m de lado, e o restante será área livre. A área livre será de:',
    alternativas: ['152 m²', '224 m²', '256 m²', '288 m²', '512 m²'],
    correta: 1,
    comentario:
      'Área do trapézio = (B + b) · h ÷ 2 = (30 + 18) × 12 ÷ 2 = 288 m². Área da sala: 8² = 64 m². Área livre: 288 − 64 = 224 m². 512 m² esquece de dividir por 2 (576 − 64); 288 m² não desconta a sala; 256 m² desconta o perímetro da sala (32) em vez da área; 152 m² usa só a base menor (18 × 12 − 64).',
    verificar: () => ((30 + 18) * 12) / 2 - 8 ** 2,
  },
  {
    id: 'mat-geometria-q06',
    temaId: 'mat-geometria',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Uma pista de caminhada circular, usada em um programa de atividade física da UBS, tem 50 m de diâmetro. Usando π = 3,14, quantas voltas completas uma pessoa precisa dar para percorrer 3,14 km?',
    alternativas: ['2 voltas', '10 voltas', '20 voltas', '40 voltas', '200 voltas'],
    correta: 2,
    comentario:
      'Comprimento de uma volta: C = π · d = 3,14 × 50 = 157 m. Distância: 3,14 km = 3.140 m. Voltas: 3.140 ÷ 157 = 20. 10 voltas toma 50 m como raio (C = 2 × 3,14 × 50 = 314 m); 40 voltas usa o raio de 25 m, mas esquece o fator 2 (C = 3,14 × 25 = 78,5 m); 2 e 200 voltas erram a conversão de km em m (usam 314 m e 31.400 m).',
    verificar: () => (3.14 * 1000) / (3.14 * 50),
  },
  {
    id: 'mat-geometria-q07',
    temaId: 'mat-geometria',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Na planta de um loteamento, desenhada na escala 1:500, a área reservada para uma futura UBS ocupa 12 cm² do papel. A área real correspondente é de:',
    alternativas: ['0,6 m²', '6 m²', '300 m²', '3.000 m²', '30.000 m²'],
    correta: 2,
    comentario:
      'Com escala linear de 1:500, as áreas ficam na razão 1:500² = 1:250.000. Área real = 12 × 250.000 = 3.000.000 cm². Como 1 m² = 10.000 cm², isso dá 300 m². 0,6 m² é o erro de aplicar a escala linear à área (12 × 500 = 6.000 cm²); 6 m² repete esse erro e ainda divide por 1.000 na conversão; 3.000 m² e 30.000 m² erram a conversão de cm² para m² (dividem por 1.000 e por 100).',
    verificar: () => (12 * 500 ** 2) / 10000,
  },
  {
    id: 'mat-geometria-q08',
    temaId: 'mat-geometria',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'Se a medida da aresta de um cubo for dobrada, o volume desse cubo também será dobrado.',
    gabaritoCE: false,
    comentario:
      'V = a³. Com aresta 2a, o volume passa a (2a)³ = 8a³: fica multiplicado por 8, e não por 2. Em geral, multiplicar as medidas lineares por k multiplica as áreas por k² e os volumes por k³. Item errado.',
    verificar: () => ((2 * 3) ** 3 / 3 ** 3 === 2 ? 'Certo' : 'Errado'),
  },

  /* ---------- mat-sequencias ---------- */
  {
    id: 'mat-sequencias-q01',
    temaId: 'mat-sequencias',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Uma UBS atendeu 40 pacientes no primeiro dia de uma campanha e, a partir daí, 3 pacientes a mais a cada dia. Assinalar a alternativa que apresenta o número de pacientes atendidos no 15º dia.',
    alternativas: ['82', '85', '88', '91', '600'],
    correta: 0,
    comentario:
      'PA com a₁ = 40 e r = 3: a₁₅ = a₁ + 14r = 40 + 42 = 82. 85 usa 15r em vez de (n − 1)r, o erro mais comum no termo geral; 600 multiplica 40 por 15.',
    verificar: () => 40 + (15 - 1) * 3,
  },
  {
    id: 'mat-sequencias-q02',
    temaId: 'mat-sequencias',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'A soma dos 20 primeiros termos da progressão aritmética (5, 9, 13, …) é:',
    alternativas: ['81', '430', '800', '820', '860'],
    correta: 4,
    comentario:
      'Razão r = 4; a₂₀ = 5 + 19 × 4 = 81. S₂₀ = (a₁ + a₂₀) · n ÷ 2 = (5 + 81) × 20 ÷ 2 = 860. 81 é só o 20º termo; 430 divide por 2 duas vezes; 820 usa a₂₀ = 77, somando 18 razões em vez de 19.',
    verificar: () => {
      const an = 5 + (20 - 1) * 4;
      return ((5 + an) * 20) / 2;
    },
  },
  {
    id: 'mat-sequencias-q03',
    temaId: 'mat-sequencias',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Em uma simulação didática de surto, o número de casos novos triplica a cada semana. Se na 1ª semana houve 4 casos novos, na 6ª semana haverá:',
    alternativas: ['72', '324', '972', '1.456', '2.916'],
    correta: 2,
    comentario:
      'PG com a₁ = 4 e q = 3: a₆ = a₁ · q⁵ = 4 × 243 = 972. 2.916 usa q⁶ (expoente n em vez de n − 1); 324 é o 5º termo; 1.456 é a soma das 6 semanas, não os casos da 6ª; 72 multiplica 4 × 3 × 6, como se o crescimento fosse linear.',
    verificar: () => 4 * 3 ** (6 - 1),
  },
  {
    id: 'mat-sequencias-q04',
    temaId: 'mat-sequencias',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Em uma campanha de mobilização, 5 pessoas foram convidadas no 1º dia, e, a cada dia, o número de novos convidados foi o dobro do dia anterior. Ao final do 8º dia, o total de pessoas convidadas foi de:',
    alternativas: ['40', '320', '635', '640', '1.275'],
    correta: 4,
    comentario:
      'Soma de PG com a₁ = 5, q = 2 e n = 8: S₈ = 5 · (2⁸ − 1) ÷ (2 − 1) = 5 × 255 = 1.275. 640 é só o número de convidados do 8º dia (5 × 2⁷); 635 é a soma de apenas 7 dias; 320 é o 7º termo; 40 supõe 5 convidados por dia.',
    verificar: () => (5 * (2 ** 8 - 1)) / (2 - 1),
  },
  {
    id: 'mat-sequencias-q05',
    temaId: 'mat-sequencias',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado:
      'Um servidor guardou R$ 50,00 no primeiro mês, R$ 70,00 no segundo, R$ 90,00 no terceiro, e assim por diante, sempre R$ 20,00 a mais que no mês anterior. O total guardado atingirá exatamente R$ 1.920,00 ao final do mês de número:',
    alternativas: ['8', '10', '12', '14', '16'],
    correta: 2,
    comentario:
      'PA com a₁ = 50 e r = 20. Sₙ = [2a₁ + (n − 1)r] · n ÷ 2 = (40 + 10n) · n. Fazendo 10n² + 40n = 1.920: n² + 4n − 192 = 0, Δ = 784 e n = (−4 + 28) ÷ 2 = 12. Conferindo: a₁₂ = 50 + 11 × 20 = 270 e S₁₂ = (50 + 270) × 12 ÷ 2 = 1.920. Nos demais prazos o total não fecha: 8 meses dão R$ 960,00; 10, R$ 1.400,00; 14, R$ 2.520,00; 16, R$ 3.200,00.',
    verificar: () => {
      let n = 0;
      let soma = 0;
      while (soma < 1920) {
        soma += 50 + n * 20;
        n += 1;
      }
      return n;
    },
  },
  {
    id: 'mat-sequencias-q06',
    temaId: 'mat-sequencias',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'O 7º termo da progressão geométrica (3, 6, 12, …) é:',
    alternativas: ['192', '384', '576', '729', '2.187'],
    correta: 0,
    comentario:
      'Razão q = 6 ÷ 3 = 2. a₇ = a₁ · q⁶ = 3 × 64 = 192. 384 usa q⁷ (é o 8º termo); 729 e 2.187 trocam a razão pelo primeiro termo (3⁶ e 3⁷).',
    verificar: () => 3 * 2 ** (7 - 1),
  },
  {
    id: 'mat-sequencias-q07',
    temaId: 'mat-sequencias',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado: 'Em uma progressão aritmética, o 3º termo é 14 e o 8º termo é 39. O 20º termo dessa progressão é:',
    alternativas: ['94', '99', '100', '104', '114'],
    correta: 1,
    comentario:
      'Do 3º ao 8º termo há 5 razões: 5r = 39 − 14 = 25, então r = 5. a₁ = a₃ − 2r = 14 − 10 = 4. a₂₀ = 4 + 19 × 5 = 99. 94 é o 19º termo; 104 é o 21º; 114 soma 20 razões a partir do 3º termo (14 + 100).',
    verificar: () => {
      const r = (39 - 14) / (8 - 3);
      const a1 = 14 - 2 * r;
      return a1 + 19 * r;
    },
  },
  {
    id: 'mat-sequencias-q08',
    temaId: 'mat-sequencias',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado: 'A soma infinita 8 + 4 + 2 + 1 + 1/2 + … é igual a:',
    alternativas: ['12', '15', '15,75', '16', '32'],
    correta: 3,
    comentario:
      'PG infinita com a₁ = 8 e q = 1/2 (|q| < 1): S∞ = a₁ ÷ (1 − q) = 8 ÷ (1/2) = 16. 15,75 é a soma dos 6 primeiros termos; 15, a dos 4 primeiros; 32 divide 8 por 1/4.',
    verificar: () => 8 / (1 - 1 / 2),
  },

  /* ---------- mat-estatistica ---------- */
  {
    id: 'mat-estatistica-q01',
    temaId: 'mat-estatistica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Nos cinco dias úteis de uma semana, um consultório registrou 30, 28, 35, 41 e 26 atendimentos. Assinalar a alternativa que apresenta a média diária de atendimentos.',
    alternativas: ['15', '26', '28', '30', '32'],
    correta: 4,
    comentario:
      'Média = soma ÷ quantidade = (30 + 28 + 35 + 41 + 26) ÷ 5 = 160 ÷ 5 = 32. 30 é a mediana (valor central dos dados ordenados: 26, 28, 30, 35, 41); 15 é a amplitude (41 − 26); 26 e 28 são apenas valores do conjunto.',
    verificar: () => [30, 28, 35, 41, 26].reduce((s, x) => s + x, 0) / 5,
  },
  {
    id: 'mat-estatistica-q02',
    temaId: 'mat-estatistica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'As idades de oito servidores de uma UBS são: 34, 29, 41, 52, 29, 38, 45 e 31 anos. A mediana dessas idades é de:',
    alternativas: ['29 anos', '34 anos', '36 anos', '38 anos', '40,5 anos'],
    correta: 2,
    comentario:
      'Ordene: 29, 29, 31, 34, 38, 41, 45, 52. Com n = 8 (par), a mediana é a média dos dois termos centrais, o 4º e o 5º: (34 + 38) ÷ 2 = 36. 40,5 é a média do 4º e do 5º valores sem ordenar (52 e 29); 29 é a moda; 34 e 38 são só um dos termos centrais.',
    verificar: () => {
      const v = [34, 29, 41, 52, 29, 38, 45, 31].sort((a, b) => a - b);
      return (v[3]! + v[4]!) / 2;
    },
  },
  {
    id: 'mat-estatistica-q03',
    temaId: 'mat-estatistica',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Em um concurso, as notas de um candidato foram: Português 7,0 (peso 2), Matemática 6,0 (peso 3) e Conhecimentos Específicos 8,0 (peso 5). Sua média ponderada foi de:',
    alternativas: ['7,0', '7,2', '7,4', '7,6', '24,0'],
    correta: 1,
    comentario:
      'Média ponderada = Σ(nota × peso) ÷ Σpesos = (14 + 18 + 40) ÷ 10 = 72 ÷ 10 = 7,2. 7,0 é a média simples ((7 + 6 + 8) ÷ 3); 24,0 divide 72 pelo número de provas, e não pela soma dos pesos.',
    verificar: () => (2 * 7 + 3 * 6 + 5 * 8) / (2 + 3 + 5),
  },
  {
    id: 'mat-estatistica-q04',
    temaId: 'mat-estatistica',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Uma UBS levantou o número de consultas realizadas no último mês por 20 pacientes de um grupo de acompanhamento:\n0 consulta: 5 pacientes; 1 consulta: 8 pacientes; 2 consultas: 4 pacientes; 3 consultas: 3 pacientes.\nO percentual desses pacientes com pelo menos 2 consultas no mês é de:',
    alternativas: ['15%', '20%', '25%', '35%', '40%'],
    correta: 3,
    comentario:
      '“Pelo menos 2” inclui 2 e 3 consultas: 4 + 3 = 7 pacientes, e 7 ÷ 20 = 0,35 = 35%. 20% conta só quem fez 2 consultas; 15%, só quem fez 3; 40% é a frequência de quem fez 1 consulta; 25%, a de quem não fez nenhuma.',
    verificar: () => ((4 + 3) / (5 + 8 + 4 + 3)) * 100,
  },
  {
    id: 'mat-estatistica-q05',
    temaId: 'mat-estatistica',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado: 'Considere o conjunto de dados {4, 6, 8, 10, 12}, tratado como população. A variância desse conjunto é:',
    alternativas: ['2,83', '8', '10', '40', '64'],
    correta: 1,
    comentario:
      'Média = 40 ÷ 5 = 8. Desvios: −4, −2, 0, 2, 4; quadrados: 16, 4, 0, 4, 16, com soma 40. Variância populacional = 40 ÷ 5 = 8. 2,83 ≈ √8 é o desvio padrão; 10 é a variância amostral (40 ÷ 4); 40 é a soma dos quadrados dos desvios sem dividir; 64 é o quadrado da média.',
    verificar: () => {
      const v = [4, 6, 8, 10, 12];
      const m = v.reduce((s, x) => s + x, 0) / v.length;
      return v.reduce((s, x) => s + (x - m) ** 2, 0) / v.length;
    },
  },
  {
    id: 'mat-estatistica-q06',
    temaId: 'mat-estatistica',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Um relatório apresenta, em gráfico de setores (pizza), a distribuição dos atendimentos de uma UBS por motivo. Os atendimentos de hipertensos correspondem a 18% do total. O ângulo central do setor que os representa mede:',
    alternativas: ['18°', '32,4°', '36°', '54°', '64,8°'],
    correta: 4,
    comentario:
      'O círculo inteiro (100%) tem 360°. Ângulo = 0,18 × 360° = 64,8°. 18° confunde percentual com grau; 32,4° usa 180° (meio círculo) como total.',
    verificar: () => 0.18 * 360,
  },
  {
    id: 'mat-estatistica-q07',
    temaId: 'mat-estatistica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'As glicemias de jejum (em mg/dL) de nove pacientes foram: 92, 105, 98, 92, 110, 126, 98, 92 e 101. A moda desse conjunto é:',
    alternativas: ['92 mg/dL', '98 mg/dL', '105 mg/dL', '110 mg/dL', '126 mg/dL'],
    correta: 0,
    comentario:
      'Moda é o valor de maior frequência: 92 aparece 3 vezes, 98 aparece 2 vezes e os demais, 1 vez cada. Logo, a moda é 92 mg/dL. 98 mg/dL é a mediana (5º valor dos dados ordenados), e não a moda.',
    verificar: () => {
      const v = [92, 105, 98, 92, 110, 126, 98, 92, 101];
      const freq = (x: number) => v.filter((y) => y === x).length;
      return v.reduce((moda, x) => (freq(x) > freq(moda) ? x : moda), v[0]!);
    },
  },
  {
    id: 'mat-estatistica-q08',
    temaId: 'mat-estatistica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'No conjunto de dados {2, 3, 3, 5, 7, 10}, a média aritmética é maior que a mediana.',
    gabaritoCE: true,
    comentario:
      'Média = 30 ÷ 6 = 5. Mediana (n par) = média dos dois termos centrais, 3 e 5, ou seja, 4. Como 5 > 4, o item está certo. O valor 10, mais afastado, “puxa” a média para cima, mas não altera a mediana.',
    verificar: () => {
      const v = [2, 3, 3, 5, 7, 10];
      const media = v.reduce((s, x) => s + x, 0) / v.length;
      const mediana = (v[2]! + v[3]!) / 2;
      return media > mediana ? 'Certo' : 'Errado';
    },
  },
];
