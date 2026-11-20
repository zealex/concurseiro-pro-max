import type { QuestaoTreino } from '../../../types';
import { comb, fatorial, fracao, quais } from './questoes-1';

/* ------------------------------------------------------------------
 * Contagem e probabilidade; matemática aplicada à saúde
 * (mat-saude: treino de cálculo com dados fictícios — não é protocolo clínico)
 * ------------------------------------------------------------------ */

export const QUESTOES_4: QuestaoTreino[] = [
  /* ---------- mat-contagem-probabilidade ---------- */
  {
    id: 'mat-contagem-probabilidade-q01',
    temaId: 'mat-contagem-probabilidade',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Para compor uma equipe de plantão, é preciso escolher 1 médico entre 4, 1 enfermeiro entre 3 e 1 técnico entre 2. Assinalar a alternativa que apresenta o número de equipes diferentes que podem ser formadas.',
    alternativas: ['9', '12', '24', '36', '48'],
    correta: 2,
    comentario:
      'Princípio fundamental da contagem: escolhas independentes e sucessivas se multiplicam, 4 × 3 × 2 = 24 equipes. 9 soma as opções (4 + 3 + 2), o erro de usar “ou” quando o problema pede “e”; 12 esquece a escolha do técnico (4 × 3); 48 conta o técnico duas vezes.',
    verificar: () => 4 * 3 * 2,
  },
  {
    id: 'mat-contagem-probabilidade-q02',
    temaId: 'mat-contagem-probabilidade',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'De um grupo de 8 médicos, será escolhida uma comissão de 3 membros, sem cargos definidos. O número de comissões diferentes possíveis é:',
    alternativas: ['24', '56', '112', '336', '512'],
    correta: 1,
    comentario:
      'A ordem não importa (comissão sem cargos): combinação. C(8, 3) = 8! ÷ (3! · 5!) = (8 × 7 × 6) ÷ (3 × 2 × 1) = 336 ÷ 6 = 56. 336 é o arranjo, que seria a resposta se houvesse cargos distintos; 512 = 8³ permite repetir a mesma pessoa; 24 = 8 × 3.',
    verificar: () => comb(8, 3),
  },
  {
    id: 'mat-contagem-probabilidade-q03',
    temaId: 'mat-contagem-probabilidade',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Entre 7 servidores, serão escolhidos um presidente, um vice-presidente e um secretário para a comissão de ética, sem acúmulo de cargos. O número de maneiras de fazer essa escolha é:',
    alternativas: ['21', '35', '210', '343', '5.040'],
    correta: 2,
    comentario:
      'Cargos distintos: a ordem importa (arranjo). A(7, 3) = 7 × 6 × 5 = 210. 35 é a combinação C(7, 3), que ignora os cargos; 343 = 7³ permite que a mesma pessoa ocupe dois cargos; 5.040 = 7! ordena todos os 7 servidores.',
    verificar: () => fatorial(7) / fatorial(7 - 3),
  },
  {
    id: 'mat-contagem-probabilidade-q04',
    temaId: 'mat-contagem-probabilidade',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'O número de anagramas da palavra ESCALA é:',
    alternativas: ['36', '120', '180', '360', '720'],
    correta: 3,
    comentario:
      'ESCALA tem 6 letras, com a letra A repetida 2 vezes. Permutação com repetição: 6! ÷ 2! = 720 ÷ 2 = 360. 720 ignora a repetição; 180 divide por 2 duas vezes, como se houvesse duas letras repetidas; 120 é 5!.',
    verificar: () => fatorial(6) / fatorial(2),
  },
  {
    id: 'mat-contagem-probabilidade-q05',
    temaId: 'mat-contagem-probabilidade',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Uma caixa contém 12 frascos de um lote, dos quais 3 estão com o lacre danificado. Retirando-se 2 frascos ao acaso, um após o outro e sem reposição, a probabilidade de ambos estarem com o lacre danificado é de:',
    alternativas: ['1/22', '1/16', '1/11', '1/8', '1/4'],
    correta: 0,
    comentario:
      'Sem reposição, o segundo sorteio muda: P = 3/12 × 2/11 = 6/132 = 1/22. 1/16 = (3/12)² supõe reposição; 1/4 é a chance de apenas o primeiro frasco estar danificado.',
    verificar: () => fracao(3 * 2, 12 * 11),
  },
  {
    id: 'mat-contagem-probabilidade-q06',
    temaId: 'mat-contagem-probabilidade',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Em um município, 60% das gestantes fazem pré-natal na UBS Centro e 40% na UBS Norte. Na UBS Centro, 5% das gestantes faltam à primeira consulta; na UBS Norte, 10%. Escolhendo-se ao acaso uma gestante que faltou à primeira consulta, a probabilidade de que ela seja da UBS Norte é de:',
    alternativas: ['1/10', '2/5', '3/7', '1/2', '4/7'],
    correta: 4,
    comentario:
      'Faltosas da Centro: 0,60 × 0,05 = 0,03. Faltosas da Norte: 0,40 × 0,10 = 0,04. Total de faltosas: 0,07. P(Norte | faltou) = 0,04 ÷ 0,07 = 4/7. 1/10 é a probabilidade de faltar dado que é da Norte (condicional invertida); 2/5 ignora a informação de que ela faltou; 3/7 é a probabilidade de ser da Centro.',
    verificar: () => fracao(40 * 10, 60 * 5 + 40 * 10),
  },
  {
    id: 'mat-contagem-probabilidade-q07',
    temaId: 'mat-contagem-probabilidade',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Lançando-se simultaneamente dois dados comuns, não viciados, a probabilidade de que a soma dos resultados seja 7 é de:',
    alternativas: ['1/12', '1/6', '7/36', '1/3', '7/12'],
    correta: 1,
    comentario:
      'Há 6 × 6 = 36 resultados igualmente prováveis. Soma 7: (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1), ou seja, 6 casos. P = 6/36 = 1/6. 1/12 conta cada par uma só vez, ignorando a ordem (3/36); 7/36 confunde a soma com o número de casos favoráveis.',
    verificar: () => {
      let casos = 0;
      for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b === 7) casos++;
      return fracao(casos, 36);
    },
  },
  {
    id: 'mat-contagem-probabilidade-q08',
    temaId: 'mat-contagem-probabilidade',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'Lançando-se uma moeda honesta três vezes, a probabilidade de se obterem exatamente duas caras é igual a 3/8.',
    gabaritoCE: true,
    comentario:
      'Há 2³ = 8 sequências equiprováveis. Com exatamente duas caras (C) e uma coroa (K): CCK, CKC e KCC, isto é, C(3, 2) = 3 sequências. P = 3/8. Item certo.',
    verificar: () => (fracao(comb(3, 2), 2 ** 3) === '3/8' ? 'Certo' : 'Errado'),
  },

  /* ---------- mat-saude ---------- */
  {
    id: 'mat-saude-q01',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Treino de cálculo (dados fictícios): a prescrição de um medicamento é de 15 mg/kg por dose para uma criança de 18 kg. Assinalar a alternativa que apresenta a dose, em mg, a ser administrada em cada tomada.',
    alternativas: ['270 mg', '540 mg', '810 mg', '1.080 mg', '2.700 mg'],
    correta: 0,
    comentario:
      'Dose = dose prescrita (mg/kg) × peso (kg) = 15 × 18 = 270 mg por dose. 540, 810 e 1.080 mg correspondem a 2, 3 e 4 doses somadas (confusão entre dose e dose diária); 2.700 mg erra a casa decimal. Questão de treino de cálculo, não de conduta clínica.',
    verificar: () => 15 * 18,
  },
  {
    id: 'mat-saude-q02',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Treino de cálculo (dados fictícios): deve-se administrar uma dose de 270 mg de um medicamento disponível em suspensão oral de 200 mg/5 mL. O volume a ser administrado é de:',
    alternativas: ['1,35 mL', '3,7 mL', '6,75 mL', '54 mL', '67,5 mL'],
    correta: 2,
    comentario:
      'Regra de três: 200 mg estão em 5 mL; 270 mg estão em x. x = 270 × 5 ÷ 200 = 6,75 mL (a suspensão tem 40 mg/mL, e 270 ÷ 40 = 6,75). 1,35 mL esquece que os 200 mg estão em 5 mL (270 ÷ 200); 3,7 mL inverte a regra de três (200 × 5 ÷ 270 ≈ 3,7); 54 mL divide a dose pelo volume (270 ÷ 5); 67,5 mL erra a casa decimal.',
    verificar: () => (270 * 5) / 200,
  },
  {
    id: 'mat-saude-q03',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Treino de cálculo: foram prescritos 1.000 mL de soro fisiológico a 0,9% para correr em 8 horas, com equipo de macrogotas (1 mL = 20 gotas). Arredondando para o número inteiro mais próximo, o gotejamento deve ser de:',
    alternativas: ['2 gotas/min', '42 gotas/min', '125 gotas/min', '375 gotas/min', '2.500 gotas/min'],
    correta: 1,
    comentario:
      'Macrogotas/min = volume (mL) ÷ [tempo (h) × 3] = 1.000 ÷ 24 ≈ 41,67, que arredonda para 42 gotas/min. O “× 3” vem de 20 gotas/mL ÷ 60 min/h. 125 é o valor em microgotas/min (1.000 ÷ 8); 375 multiplica por 3 em vez de dividir; 2 esquece de converter mL em gotas (1.000 ÷ 480 min); 2.500 é o número de gotas por hora (20.000 ÷ 8), sem dividir por 60.',
    verificar: () => Math.round(1000 / (8 * 3)),
  },
  {
    id: 'mat-saude-q04',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Treino de cálculo: devem ser infundidos 500 mL de uma solução em 6 horas, com equipo de microgotas (1 mL = 60 microgotas). Arredondando para o inteiro mais próximo, o gotejamento é de:',
    alternativas: ['8 microgotas/min', '28 microgotas/min', '83 microgotas/min', '167 microgotas/min', '5.000 microgotas/min'],
    correta: 2,
    comentario:
      'Microgotas/min = volume (mL) ÷ tempo (h) = 500 ÷ 6 ≈ 83,3, que arredonda para 83 microgotas/min (numericamente igual à vazão em mL/h). 28 aplica a fórmula de macrogotas (500 ÷ 18); 167 divide por 3 em vez de por 6; 8 divide 500 por 60 sem considerar as 6 horas; 5.000 é o número de microgotas por hora (30.000 ÷ 6), sem dividir por 60.',
    verificar: () => Math.round(500 / 6),
  },
  {
    id: 'mat-saude-q05',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado: 'Um paciente adulto pesa 88,2 kg e mede 1,75 m. Seu índice de massa corporal (IMC) é de:',
    alternativas: ['7,2 kg/m²', '25,2 kg/m²', '28,8 kg/m²', '50,4 kg/m²', '154,4 kg/m²'],
    correta: 2,
    comentario:
      'IMC = peso ÷ altura² = 88,2 ÷ (1,75 × 1,75) = 88,2 ÷ 3,0625 = 28,8 kg/m², faixa de sobrepeso em adultos (25 a 29,9). 50,4 divide pela altura sem elevar ao quadrado; 25,2 divide pelo dobro da altura (3,5); 7,2 eleva o dobro da altura ao quadrado; 154,4 multiplica em vez de dividir.',
    verificar: () => 88.2 / 1.75 ** 2,
  },
  {
    id: 'mat-saude-q06',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Treino de cálculo: um serviço precisa preparar 500 mL de uma solução a 0,5% a partir de uma solução estoque a 2%, completando o volume com diluente. Pela relação C₁ · V₁ = C₂ · V₂, o volume de solução estoque a ser utilizado é de:',
    alternativas: ['125 mL', '250 mL', '375 mL', '1.000 mL', '2.000 mL'],
    correta: 0,
    comentario:
      'C₁ · V₁ = C₂ · V₂ → 2% × V₁ = 0,5% × 500 mL → V₁ = 250 ÷ 2 = 125 mL de solução estoque, completados com 375 mL de diluente. 375 mL é o volume de diluente, e não de estoque; 2.000 mL inverte as concentrações (2 × 500 ÷ 0,5).',
    verificar: () => (0.5 * 500) / 2,
  },
  {
    id: 'mat-saude-q07',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Treino de cálculo (dados fictícios, não é protocolo clínico): um frasco-ampola contém 1 g de um antibiótico em pó. Após a reconstituição, o volume final é de 10 mL. Para retirar desse frasco 750 mg do antibiótico, deve-se aspirar:',
    alternativas: ['0,75 mL', '1,33 mL', '2,5 mL', '5 mL', '7,5 mL'],
    correta: 4,
    comentario:
      'Converta para a mesma unidade: 1 g = 1.000 mg em 10 mL, ou 100 mg/mL. 750 mg ÷ 100 mg/mL = 7,5 mL. 0,75 mL divide 750 por 1.000, esquecendo o volume de 10 mL; 1,33 mL inverte a regra de três (10 ÷ 7,5); 2,5 mL é o volume que sobra no frasco; 5 mL corresponderia a 500 mg.',
    verificar: () => (750 * 10) / (1 * 1000),
  },
  {
    id: 'mat-saude-q08',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 3,
    enunciado:
      'Treino de cálculo (dados fictícios, não é protocolo clínico): prescreve-se a infusão contínua de um fármaco na dose de 2 mg/min. A solução preparada contém 500 mg do fármaco em 250 mL. A vazão a ser programada na bomba de infusão, em mL/h, é de:',
    alternativas: ['1 mL/h', '2 mL/h', '4 mL/h', '60 mL/h', '120 mL/h'],
    correta: 3,
    comentario:
      'Concentração: 500 mg ÷ 250 mL = 2 mg/mL. Dose por hora: 2 mg/min × 60 = 120 mg/h. Vazão: 120 ÷ 2 = 60 mL/h (ou 1 mL/min × 60). 1 mL/h acha 1 mL/min e esquece de converter para hora; 2 mL/h apenas repete o número da dose; 4 mL/h multiplica dose e concentração (2 × 2) em vez de dividir; 120 mL/h é a dose em mg/h, sem converter para volume.',
    verificar: () => (2 * 60) / (500 / 250),
  },
  {
    id: 'mat-saude-q09',
    temaId: 'mat-saude',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Treino de cálculo. Analise as assertivas:\nI. Em equipo de macrogotas, 1 mL corresponde a 20 gotas.\nII. Para infundir 720 mL em 12 horas com equipo de microgotas, o gotejamento é de 60 microgotas/min.\nIII. Um adulto com 64 kg e 1,60 m de altura tem IMC de 25 kg/m².\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e II.', 'Apenas II e III.', 'I, II e III.'],
    correta: 4,
    comentario:
      'I: correta (1 mL = 20 macrogotas = 60 microgotas). II: 720 ÷ 12 = 60 microgotas/min (correta). III: 64 ÷ 1,6² = 64 ÷ 2,56 = 25 kg/m² (correta). Cuidado: dividir 64 por 1,6 sem elevar ao quadrado daria 40, erro clássico.',
    verificar: () => {
      const microgotasPorMl = 60;
      const macrogotasPorMl = microgotasPorMl / 3;
      return quais(macrogotasPorMl === 20, 720 / 12 === 60, Math.abs(64 / 1.6 ** 2 - 25) < 1e-9);
    },
  },
  {
    id: 'mat-saude-q10',
    temaId: 'mat-saude',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Treino de cálculo: para infundir 1.500 mL de solução em 24 horas com equipo de macrogotas, o gotejamento deve ser de aproximadamente 63 gotas por minuto.',
    gabaritoCE: false,
    comentario:
      'Macrogotas/min = 1.500 ÷ (24 × 3) = 1.500 ÷ 72 ≈ 20,8, ou cerca de 21 gotas/min. O valor 63 (1.500 ÷ 24 = 62,5) corresponde ao gotejamento em microgotas, e não em macrogotas. Item errado.',
    verificar: () => (Math.round(1500 / (24 * 3)) === 63 ? 'Certo' : 'Errado'),
  },
];
