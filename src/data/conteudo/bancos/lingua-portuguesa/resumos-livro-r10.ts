import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (caps. 22 a 26).';
const HOJE = '2026-11-26';

export const RESUMOS_LIVRO_R10: ResumoTema[] = [
  {
    temaId: 'lp-periodo-composto',
    titulo: 'Período composto: coordenação, subordinação e período misto',
    resumo:
      'A banca cobra a classificação de cada oração (coordenada ou subordinada), o sentido das conjunções, a função sintática das subordinadas e o paralelismo na reescrita de orações reduzidas. A elipse do verbo e o período misto são as armadilhas mais exploradas.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Um **período composto** tem mais de um verbo e, portanto, mais de uma oração. A relação entre elas é de **coordenação** (as orações são sintaticamente independentes: cada uma tem sujeito e predicado próprios e nenhuma exerce função na outra) ou de **subordinação** (uma oração, a subordinada, completa ou acrescenta algo à outra, a principal, e por isso depende dela).\n\nMétodo de análise: (1) conte os verbos, lembrando que locução verbal e tempo composto formam uma só oração e que infinitivo substantivado (“o comer”) não forma oração; (2) localize a conjunção ou o pronome relativo que liga as orações, porque ele revela a relação; (3) verifique se a oração depende da outra: se não depende, é coordenada; se depende, é subordinada, e você identifica a função dela. Não esqueça a **elipse**: um verbo oculto continua formando uma oração, e a contagem de orações é um dos pontos mais explorados.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Orações coordenadas',
          colunas: ['Tipo', 'Sentido', 'Conjunções mais cobradas', 'Exemplo'],
          linhas: [
            ['Aditiva', 'Soma, adição', 'e, nem, não só... mas também', 'A prova foi longa, e os candidatos saíram exaustos.'],
            ['Adversativa', 'Oposição, contraste', 'mas, porém, contudo, todavia, entretanto, no entanto, não obstante', 'O edital saiu cedo, porém as inscrições demoraram.'],
            ['Alternativa', 'Alternância ou exclusão', 'ou, ou... ou, ora... ora, quer... quer', 'Ou você estuda agora, ou desiste da vaga.'],
            ['Conclusiva', 'Conclusão, consequência', 'logo, portanto, por isso, assim', 'Revisei todo o conteúdo, por isso acertei a questão.'],
            ['Explicativa', 'Explicação, justificativa', 'que, porque, pois, porquanto', 'Estude com calma, que a prova é difícil.'],
            ['Assindética', 'Sentido sem conjunção', 'nenhuma (vírgula, ponto e vírgula, dois-pontos ou travessão)', 'Ana estuda de manhã; Bruno, à noite (verbo elíptico).'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Orações subordinadas adverbiais (função de adjunto adverbial)',
          colunas: ['Tipo', 'Ideia', 'Conjunções mais comuns', 'Exemplo'],
          linhas: [
            ['Causal', 'Causa', 'porque, como (anteposta), visto que, já que, uma vez que', 'Como a inscrição venceu, perdi a chance de participar.'],
            ['Consecutiva', 'Consequência', 'de modo que, de forma que, tanto... que, tão... que', 'Estudou tanto que memorizou o livro inteiro.'],
            ['Condicional', 'Condição', 'se, caso, desde que, salvo se, contanto que', 'Você avança na lista, desde que revise a matéria.'],
            ['Concessiva', 'Concessão, obstáculo que não impede', 'embora, ainda que, conquanto, posto que, por mais que', 'Embora estivesse cansado, fez a prova até o fim.'],
            ['Conformativa', 'Conformidade', 'conforme, como, segundo, consoante', 'Conforme combinamos, o gabarito saiu na sexta.'],
            ['Comparativa', 'Comparação', 'como, do que, quanto', 'A matéria é mais extensa do que parece.'],
            ['Final', 'Finalidade', 'para que, a fim de que', 'Revisei os erros para que não se repetissem na prova.'],
            ['Proporcional', 'Proporção entre dois fatos', 'à medida que, à proporção que, ao passo que, quanto mais... mais', 'À medida que o tempo passava, a ansiedade aumentava.'],
            ['Temporal', 'Tempo', 'quando, enquanto, depois que, assim que, sempre que', 'Enquanto você lia, eu resolvia as questões.'],
            ['Modal (fora da NGB)', 'Modo, maneira', 'sem que', 'Saiu da sala sem que ninguém percebesse.'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Orações substantivas** exercem função de substantivo (sujeito, predicativo, objeto direto, objeto indireto, complemento nominal ou aposto). São iniciadas pelas conjunções integrantes **que** e **se** e podem ser trocadas por “isso” ou “isto”. Casos mais cobrados:\n\n- **Subjetiva**: é o sujeito da principal, que fica na 3ª pessoa do singular. Ex.: “É necessário que todos revisem o conteúdo.” (= Isso é necessário.)\n- **Objetiva direta**: complementa VTD ou VTDI. Ex.: “Desejo que você seja aprovado.”\n- **Objetiva indireta**: complementa VTI ou VTDI. Ex.: “Lembrei-me de que o edital saía em março.”\n- **Completiva nominal**: complementa nome ou adjetivo que pede preposição. Ex.: “Tenho certeza de que a prova será longa.”\n- **Predicativa**: vem depois do verbo de ligação “ser”. Ex.: “O problema é que o prazo acabou.”\n- **Apositiva**: explica um termo, geralmente após dois-pontos ou travessão. Ex.: “Tenho um objetivo: que você passe no concurso.”\n\n**Orações adjetivas** exercem função de adjunto adnominal e começam por pronome ou advérbio relativo (que, o qual, quem, cujo, quanto, onde, como, quando). Na **restritiva**, sem vírgula, a oração limita o antecedente: “Os candidatos que estudaram aos sábados foram aprovados” (apenas parte deles). Na **explicativa**, isolada por vírgula, travessão ou parênteses, a oração só acrescenta informação: “Os candidatos, que estudaram aos sábados, foram aprovados” (todos eles).\n\nPara descobrir a função de um relativo, substitua-o pelo antecedente, coloque a oração na ordem direta e analise o termo substituído. A preposição exigida pelo verbo ou pelo nome vem antes do relativo: “o concurso a que me referi”. O **cujo** não aceita artigo e concorda com o termo seguinte, não com o antecedente: “a empresa cujos lucros cresceram”.',
      },
      {
        tipo: 'texto',
        texto:
          '**Orações reduzidas** têm o verbo no infinitivo, no gerúndio ou no particípio, não começam por conjunção nem por pronome relativo e, em geral, podem ser desenvolvidas. Ex.: “Terminada a prova, saímos” = “Depois que a prova terminou, saímos”. Nas adverbiais, a preposição inicial costuma indicar o sentido: **ao** (tempo), **a** (condição), **para** (finalidade), **por** (causa), **sem** (concessão ou condição). O particípio concorda com o termo a que se refere.\n\n**Paralelismo sintático**: termo com termo; oração desenvolvida com desenvolvida (com o mesmo conectivo); reduzida com reduzida; e as estruturas de correlação (como “não só... mas também”) devem ser respeitadas. Certo: “Gosto de estudar pela manhã e de revisar à noite.” Errado: “Gosto de estudar pela manhã e que revise à noite.”\n\n**Período misto**: há coordenação e subordinação no mesmo período. As subordinadas podem estar coordenadas entre si (são equipolentes). A conjunção coordenativa apenas liga as orações; ela não transforma uma subordinada em coordenada. Analise oração por oração, identificando a principal de cada grupo.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Dequeísmo**: “É necessário de que todos estudem” está errado, porque o sujeito oracional não pede preposição; o certo é “É necessário que todos estudem”. Já “Tenho certeza de que” está correto, pois “certeza” exige complemento com “de”.\n\n**Pedir para que**: pela tradição gramatical, o certo é “Pedi que ele saísse”. A preposição só se justifica quando estão implícitas as palavras licença ou permissão (“Ela pediu [licença] para que passasse”). A banca costuma cobrar esse ponto.\n\n**Porque, causal ou explicativa**: a diferença é semântica, pois sintaticamente as duas são iguais. Se o verbo da principal estiver no imperativo ou indicar desejo, a oração é explicativa. Se o porque introduz consequência ou uma dedução feita a partir de uma constatação, também é explicativa. Se introduz a causa real do fato, é causal. Gramáticos divergem, e a banca costuma cobrar a leitura de sentido.\n\n**Quando como relativo**: bancas divergem. A FCC não considera “quando” pronome relativo; a FGV considera.\n\n**É que**: em “A verdade é que ele errou”, o “é” é verbo de ligação e a oração não pode ser suprimida. Em “A verdade é que incomoda muita gente”, o “é que” é expletivo e pode sair sem prejuízo. Também cuidado com “Tomara que chova”: “tomara” é a principal e “que chova” é objeto direto, ou seja, subordinada substantiva.',
      },
      {
        tipo: 'lista',
        itens: [
          'Classificar cada oração e nomear a relação entre elas (coordenada ou subordinada, e qual tipo).',
          'Sentido das coordenadas e das adverbiais, a partir da conjunção.',
          'Função sintática do pronome relativo, pela substituição pelo antecedente.',
          'Subordinada substantiva: teste de substituição por “isso” ou “isto”, e concordância verbal quando o sujeito é oracional.',
          'Reescrita de reduzida em desenvolvida (e o inverso), com a preposição certa.',
          'Paralelismo sintático e correlações mal empregadas.',
          'Contagem de orações com elipse do verbo, que a FGV costuma explorar.',
          'Orações intercaladas: pouco frequentes, em geral sem função sintática; os valores mais citados são esclarecimento, opinião, desejo, desculpa, permissão e ressalva.',
        ],
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
