import type { ResumoTema } from '../../../types';

const PESTANA_33 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 33).';
const PESTANA_34 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 34).';
const HOJE = '2026-11-26';

/** Resumos do lote R14: interpretação de textos e tipologia textual (caps. 33 e 34). */
export const RESUMOS_LIVRO_R14: ResumoTema[] = [
  {
    temaId: 'lp-interpretacao',
    titulo: 'Compreensão, interpretação e funções da linguagem',
    resumo:
      'A banca cobra a diferença entre compreender (o que está escrito) e interpretar (o que se deduz do texto), além das seis funções da linguagem, dos operadores argumentativos e dos pressupostos e subentendidos que sustentam a leitura.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Todo texto é um ato de comunicação. Há um **emissor** que envia uma **mensagem**, um **receptor** que a recebe, um **código** comum aos dois (a língua), um **referente** (o assunto de que se fala) e um **canal** (o meio, como papel, tela ou voz). Em concursos, o foco é a linguagem verbal, falada ou escrita.\n\n**Compreender** é perceber o que o texto diz de forma explícita, muitas vezes com outras palavras (paráfrase). **Interpretar** é dar sentido ao que não está dito, deduzindo com lógica a partir do que está escrito: é a **inferência**. Quando o comando pede “segundo o texto” ou “de acordo com o autor”, trata-se de compreensão; quando pede “infere-se”, “depreende-se” ou “conclui-se”, trata-se de interpretação, sempre limitada ao que o texto autoriza.\n\nUm signo verbal tem **significante** (a forma, sonora ou escrita) e **significado** (a ideia). Quanto à relação com o objeto, o signo pode ser **ícone** (semelhança, como uma foto), **índice** (indica algo por proximidade ou consequência, como fumaça que indica fogo) ou **símbolo** (convenção, como a pomba que representa a paz).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'As seis funções da linguagem (Jakobson)',
          colunas: ['Função', 'Elemento em destaque', 'Marca típica', 'Exemplo novo'],
          linhas: [
            ['Emotiva (expressiva)', 'Emissor', 'Primeira pessoa, interjeições, exclamações, reticências', '“Que notícia maravilhosa! Estou emocionada.”'],
            ['Conativa (apelativa)', 'Receptor', 'Segunda pessoa, imperativo, vocativo, perguntas dirigidas ao leitor', '“Abra a janela e respire fundo, Renato.”'],
            ['Referencial (informativa)', 'Referente', 'Terceira pessoa, linguagem denotativa e objetiva, frases declarativas', '“A represa atingiu 40% da capacidade em março.”'],
            ['Poética', 'Mensagem (a forma)', 'Figuras de linguagem, conotação, construções incomuns', '“O mar desfaz as horas na areia, sem pressa.”'],
            ['Metalinguística', 'Código', 'O texto explica a própria língua ou o próprio gênero', '“Chama-se advérbio a palavra que modifica verbo, adjetivo ou outro advérbio.”'],
            ['Fática', 'Canal (contato)', 'Saudações, testes de contato, expressões como “alô” e “né?”', '“Alô, você está me ouvindo?”'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Operadores argumentativos por relação de sentido',
          colunas: ['Relação', 'Operadores (amostra)', 'Exemplo novo'],
          linhas: [
            ['Soma de argumentos', 'não só... mas também; além disso; tanto... quanto', '“A prova é longa e, além disso, exige atenção.”'],
            ['Oposição', 'mas, porém, no entanto, embora, ainda que, apesar de', '“O edital era extenso; no entanto, a turma concluiu o conteúdo.”'],
            ['Alternância', 'ora... ora; quer... quer; seja... seja', '“Ora estuda de manhã, ora prefere a madrugada.”'],
            ['Conclusão', 'logo, portanto, por isso, em suma', '“Chegou atrasado; por isso, perdeu a primeira aula.”'],
            ['Explicação ou retificação', 'ou seja, isto é, a saber, ou melhor', '“Ele chegou tarde, ou seja, perdeu o início da palestra.”'],
            ['Condição', 'se, caso, desde que, salvo se', '“Você será aprovado, desde que revise a matéria.”'],
            ['Proporção', 'à medida que, quanto mais... mais', '“Quanto mais revisa, mais segurança ganha.”'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Pressuposto**: informação implícita que vem de uma palavra ou construção da própria frase. Teste pela negação: se a informação continua valendo quando a frase é negada, ela é pressuposto. “O prefeito deixou de cobrar a taxa” e “O prefeito não deixou de cobrar a taxa” pressupõem que ele cobrava antes.',
          '**Gatilhos mais cobrados**: verbos de mudança ou permanência de estado (**continuar**, **deixar de**, **voltar a**, **passar a**, **parar de**); advérbios como **ainda** e **já**; palavras de inclusão (**até**, **inclusive**, **mesmo**) e de exclusão (**só**, **apenas**, **somente**).',
          '**Oração adjetiva**: a restritiva pressupõe que só parte do grupo tem a característica; a explicativa pressupõe que o grupo inteiro a tem. “Os servidores que chegaram atrasados foram advertidos” (alguns) e “Os servidores, que chegaram atrasados, foram advertidos” (todos). A vírgula muda o sentido.',
          '**Subentendido**: insinuação que o leitor deduz do contexto e que pode não corresponder ao que o falante quis dizer. Em “Você vai à festa de sábado?” — “Tenho prova na segunda”, o subentendido é que a pessoa não pretende ir, mas essa leitura depende da situação.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — pressuposto ou afirmação?',
        enunciado:
          'Texto: “Desde que o novo sistema foi instalado, o atendimento deixou de ser lento: as filas diminuíram e os servidores passaram a responder mais rápido.” Item: “O texto informa que, antes da instalação do sistema, o atendimento era lento.” O item está correto?',
        resolucao:
          'Está correto, e exige interpretação. A lentidão anterior não é afirmada diretamente: ela é pressuposta pela locução “deixou de ser lento”, que só faz sentido se o atendimento era lento antes. Mesmo que o item use o verbo “informa”, o conteúdo está no pressuposto. Um item que dissesse que o sistema “aumentou o atendimento em 50%” extrapolaria o texto, pois esse dado não aparece.',
      },
      {
        tipo: 'atencao',
        texto:
          'A banca troca os conceitos de propósito. **Pressuposto** é marcado pela própria frase e sobrevive à negação; **subentendido** depende de quem lê e do contexto, por isso raramente é a alternativa segura. Atenção também às palavras que mudam de função conforme o contexto: “quando” indica tempo (“Quando chegou, ele sorriu”) ou oposição (“Eles vieram de carro, quando podiam ter vindo a pé”). O “pois” é explicativo quando vem antes do verbo (“Ficaremos em casa, pois está chovendo”) e conclusivo quando vem depois dele (“Estava chovendo, pois, e não havia como sair”). Por fim, um texto costuma ter várias funções, e a questão pede a **predominante**, identificada pelo elemento em destaque, não por uma marca isolada.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Leia o comando antes do texto e identifique se ele pede compreensão (o que está escrito) ou interpretação (o que se deduz).',
          'Leia o texto inteiro uma vez, sem pressa, para captar o assunto e a forma como ele foi organizado.',
          'Resuma cada parágrafo em uma frase e marque a tese, que costuma estar no início ou no fim.',
          'Observe os conectivos entre os parágrafos: eles revelam se há soma, oposição, conclusão ou explicação.',
          'Para cada alternativa, localize no texto a passagem que a confirma ou a contradiz.',
          'Descarte o que extrapola o texto, seja um dado externo, seja a sua opinião sobre o assunto.',
        ],
      },
    ],
    fontes: [PESTANA_33, PESTANA_34],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-tipologia',
    titulo: 'Tipologia textual e discurso alheio',
    resumo:
      'A banca pede o tipo predominante do texto (narrativo, descritivo, injuntivo, dialogal ou dissertativo) e a forma como a fala de outra pessoa é citada; a dissertação, sobretudo a argumentativa, é o tipo que mais aparece.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Tipologia textual** estuda os modos de organizar o discurso, isto é, a estrutura em que um texto se apresenta. São cinco os tipos clássicos que aparecem em prova: **narrativo**, **descritivo**, **injuntivo**, **dialogal** e **dissertativo**. Destes, a dissertação merece atenção especial, pois se divide em expositiva e argumentativa e é a base das redações e dos textos de opinião.\n\n**Gênero textual** é o texto concreto que circula na sociedade, com função, suporte e forma reconhecíveis: notícia, conto, receita, lei, carta, editorial. Um gênero costuma combinar mais de um tipo, por isso a questão pede o tipo **predominante**, e não o único.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Como reconhecer cada tipo',
          colunas: ['Tipo', 'Como se reconhece', 'Gêneros comuns'],
          linhas: [
            ['Narrativo', 'Conta fatos ligados por enredo, com personagens, tempo, espaço e conflito; verbos no passado', 'Conto, fábula, romance, notícia de fato, crônica narrativa'],
            ['Descritivo', 'Retrata seres, lugares e objetos com adjetivos e locuções adjetivas; tempo estático; verbos de ligação na abertura', 'Retrato literário, anúncio, biografia, trecho descritivo de romance'],
            ['Injuntivo', 'Orienta a ação ou impõe conduta; imperativo ou futuro com tom de ordem; frases curtas; marcas de interlocução', 'Receita, manual de instruções, bula, lei, regulamento'],
            ['Dialogal', 'Reproduz a conversa entre personagens, com discurso direto, travessões ou aspas e marcas da oralidade', 'Peça de teatro, diálogo dentro de romance ou conto'],
            ['Dissertativo', 'Desenvolve um tema em introdução, desenvolvimento e conclusão; a expositiva explica sem tomar partido, a argumentativa defende uma tese', 'Verbete e texto didático (expositivo); redação, artigo de opinião, editorial, resenha (argumentativo)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Do discurso direto para o indireto',
          colunas: ['Discurso direto', 'Discurso indireto', 'O que mudou'],
          linhas: [
            ['“Estou cansada”, disse ela.', 'Ela disse que estava cansada.', 'Presente do indicativo vira pretérito imperfeito; 1ª pessoa vira 3ª'],
            ['“Perdi as chaves”, lamentou.', 'Lamentou que havia perdido as chaves.', 'Pretérito perfeito vira mais-que-perfeito (composto ou simples, como “perdera”)'],
            ['“Iremos ao cinema amanhã”, prometeu.', 'Prometeu que iriam ao cinema no dia seguinte.', 'Futuro do presente vira futuro do pretérito; “amanhã” vira “no dia seguinte”'],
            ['“Feche a porta”, pediu o pai.', 'O pai pediu que fechasse a porta.', 'Imperativo vira pretérito imperfeito do subjuntivo'],
            ['“Não volte aqui”, avisou o guarda.', 'O guarda avisou que não voltasse ali.', 'Advérbio “aqui” vira “ali”; a ordem passa para o subjuntivo'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Discurso direto**: a fala aparece na íntegra, com verbo de elocução (disse, perguntou, exclamou) e aspas, travessão ou dois-pontos.',
          '**Discurso indireto**: o narrador reproduz a fala em oração subordinada substantiva, geralmente objetiva direta, sem aspas.',
          '**Discurso indireto livre**: o pensamento da personagem aparece no meio da narração, sem verbo de elocução e sem marca clara; a banca costuma indicá-lo com ponto de exclamação ou de interrogação.',
          '**Modalização em discurso segundo**: o autor cita uma fonte sem assumir a informação (“segundo a diretora”, “de acordo com o relatório”, “para especialistas”).',
          '**Ilha textual**: trecho entre aspas inserido na fala do próprio autor, como em “O ministro afirmou que “a economia já se recuperou”.”',
        ],
      },
      {
        tipo: 'texto',
        texto:
          'A **dissertação expositiva** explica um tema com linguagem clara e impessoal, em geral no presente atemporal, sem defender uma tese. A **dissertação argumentativa** apresenta uma **tese** (ponto de vista), sustentada por **argumentos** e fechada por uma **conclusão** que retoma a tese e propõe algo. Seus verbos ficam no presente do indicativo ou no futuro do presente, o que dá ar de verdade ao que se afirma. A linguagem é cuidada e impessoal, com modalizadores como “é preciso” e “é provável”, e o desenvolvimento segue de forma coerente, sem rodeios.\n\nSão doze estratégias argumentativas clássicas: modalização, exemplificação, enumeração, fato histórico, comparação, contraposição, causa e efeito, dados estatísticos, definição, testemunho de autoridade, contra-argumentação e pergunta retórica.\n\nNos métodos de raciocínio, o **dedutivo** parte do geral para o particular e, com premissas verdadeiras, chega a uma conclusão necessária; o **indutivo** parte de casos particulares para uma regra geral e chega a uma conclusão provável; o **dialético** apresenta tese, antítese e síntese, que reúne as duas. O **silogismo** encadeia duas premissas e uma conclusão. Uma **falácia** é um raciocínio que parece válido sem ser, como o apelo à tradição (“sempre foi assim, logo deve continuar assim”).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — tipo predominante',
        enunciado:
          'A feira de livros abriu às nove horas. Um senhor de chapéu entrou primeiro, foi direto à seção de romances e procurou o exemplar de capa azul que lera na juventude. Ao encontrá-lo, sorriu e sentou-se para folheá-lo. Qual é o tipo textual predominante?',
        resolucao:
          'Narrativo. Há personagem, tempo e espaço definidos e uma sequência de ações ligadas por verbos no passado: “abriu”, “entrou”, “foi”, “sorriu”, “sentou-se”. A descrição do chapéu e da capa é secundária e serve à narração.',
      },
      {
        tipo: 'atencao',
        texto:
          'Três confusões que a banca explora. (1) Narrar não é argumentar: um relato com uma opinião do narrador continua narrativo, e um texto de opinião que conta um caso como exemplo continua argumentativo. Uma crônica pode narrar ou argumentar, porque gênero não define tipo. (2) O injuntivo prescreve conduta, como a lei e a receita. Prever acontecimentos é função do texto preditivo (horóscopo, prognóstico), que não entra entre os cinco tipos clássicos. (3) O narrador de primeira pessoa participa da história e só conhece o que vive ou testemunha; o de terceira pessoa está fora da história e pode ser onisciente, isto é, conhecer os pensamentos das personagens.',
      },
    ],
    fontes: [PESTANA_34],
    atualizadoEm: HOJE,
  },
];
