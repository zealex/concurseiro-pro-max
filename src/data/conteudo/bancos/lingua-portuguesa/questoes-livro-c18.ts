import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 18 — Frase, oração e período), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C18: QuestaoTreino[] = [
  {
    id: 'lp-termos-oracao-qlivro18-01',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Senado Federal - Analista de Sistemas — 2008) “É com uma ação eficiente do governo e do setor privado que certamente poderemos promover o desenvolvimento dos países.” (l. 86-88) Ao fazermos a seguinte alteração no período acima: “É com uma ação eficiente do governo e do setor privado que certamente promoveremos o desenvolvimento dos países”, é correto afirmar que:',
    alternativas: [
      'tem duas orações',
      'é composto por subordinação somente',
      'é composto por coordenação e subordinação',
      'é simples',
      'é composto por coordenação somente',
    ],
    correta: 3,
    comentario:
      'O período é simples. A expressão “é com ... que” é expletiva: o verbo “ser” apenas realça o termo, e, retirada a expressão, sobra uma única oração, “certamente promoveremos o desenvolvimento dos países”, com um só verbo. Por isso não há duas orações, e as alternativas sobre subordinação ou coordenação não se aplicam.',
  },
  {
    id: 'lp-termos-oracao-qlivro18-02',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CONSULPLAN - Pref. Mimoso do Sul/ES - Professor de Língua Portuguesa — 2007) Assinale a alternativa que é frase, mas NÃO é oração:',
    alternativas: [
      '“às quatro em ponto me casarei contigo no mais alto beiral — disse o pombo”.',
      '“Como a brisa é triste”.',
      '“... porque as andorinhas mais velhas enfileiravam-se nas cornijas...”.',
      '“Irônica, perguntou a pomba”.',
      '“Que tarde azul!”.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é uma frase nominal, sem verbo, por isso é frase, mas não é oração. As demais têm verbo ou locução verbal (“me casarei” e “disse” em A, “é” em B, “enfileiravam-se” em C e “perguntou” em D), e cada uma constitui uma oração. Para acertar, basta lembrar que oração exige verbo ou locução verbal.',
  },
  {
    id: 'lp-termos-oracao-qlivro18-03',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Questão 04 FUNRIO - CEITEC - Administração - 2012) O primeiro parágrafo da crônica “O Verão e as Mulheres”, de Rubem Braga, diz: “Talvez tenha acabado o verão. Há um grande vento frio cavalgando as ondas, mas o céu está limpo e o sol é muito claro. Duas aves dançam sobre as espumas assanhadas. As cigarras não cantam mais. Talvez tenha acabado o verão.” Observando-se as orações e períodos existentes no parágrafo anterior, pode-se reconhecer que o cronista escreveu:',
    alternativas: [
      'três períodos simples e dois períodos compostos',
      'quatro períodos simples e dois períodos compostos',
      'quatro períodos e nove orações',
      'cinco períodos e sete orações',
      'cinco períodos e oito orações',
    ],
    correta: 4,
    comentario:
      'O parágrafo tem cinco períodos, cada um iniciado por maiúscula e encerrado por pontuação final. A contagem de orações chega a oito, somando as duas ocorrências de “tenha acabado”, “Há”, “cavalgando” (oração reduzida de gerúndio), “está”, “é”, “dançam” e “cantam”. Por isso a alternativa E é a correta.',
  },
];
