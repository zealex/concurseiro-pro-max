import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 27).';
const HOJE = '2026-11-26';

export const RESUMOS_LIVRO_R11: ResumoTema[] = [
  {
    temaId: 'lp-pontuacao',
    titulo: 'Pontuação',
    resumo: 'A banca cobra a pontuação como efeito da sintaxe: vírgula entre sujeito e verbo, aposto, oração explicativa e elipse verbal. Os demais sinais são cobrados pela função e pela posição.',
    blocos: [
      {
        tipo: 'texto',
        texto: 'A pontuação não é enfeite do texto: ela reflete a estrutura do período. Para decidir se um sinal cabe em certo lugar, é preciso identificar sujeito, verbo, complementos, adjuntos e a relação entre as orações. Por isso a banca costuma tratar a vírgula como problema de análise sintática, e não de pausa na fala.\n\nA **vírgula** separa termos e orações. Quando ela muda o sentido, quase sempre muda também a função sintática de algum termo, e é isso que a prova explora.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Sinais e funções centrais',
          colunas: ['Sinal', 'Função central', 'Cobrança típica'],
          linhas: [
            ['Vírgula', 'Separa termos e orações; isola vocativo, aposto, deslocamentos e intercalações; marca elipse verbal', 'Análise sintática de sujeito, complementos e adjuntos'],
            ['Ponto e vírgula', 'Pausa maior que a vírgula; separa blocos já pontuados por vírgula e itens de uma enumeração longa', 'Orações coordenadas e elipse após o sinal'],
            ['Dois-pontos', 'Introduz citação, aposto, enumeração, explicação ou resumo', 'Relação entre o trecho anterior e o que vem depois; uso de maiúscula'],
            ['Travessão', 'Destaca intercalação (sempre em par) ou marca a fala de outro interlocutor no diálogo', 'Fechamento do par e convivência com outros sinais'],
            ['Parênteses', 'Isolam informação acessória, referência bibliográfica ou marcação cênica', 'Substituição por vírgula ou travessão'],
            ['Aspas', 'Citação textual, estrangeirismo, gíria, ironia e título de obra', 'Posição do ponto final em relação às aspas'],
            ['Reticências', 'Interrupção do pensamento, supressão de trecho, hesitação ou ênfase irônica', 'Supressão de trecho indicada com colchetes'],
            ['Ponto de interrogação', 'Marca pergunta direta, dúvida ou pergunta retórica', 'Interrogação retórica com efeito argumentativo'],
            ['Ponto de exclamação', 'Marca ordem, admiração, interjeição e vocativo enfático', 'Repetição do sinal para intensificar'],
            ['Ponto', 'Encerra frase declarativa; separa parágrafos; acompanha abreviaturas', 'Abreviatura que coincide com o fim do período'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'Sujeito e verbo, mesmo quando o sujeito é longo ou traz oração inserida: “A decisão tomada pelos diretores da escola surpreendeu os pais.”',
          'Verbo e seu complemento (objeto direto, objeto indireto ou oração objetiva): “A prefeitura contratou novos professores.”',
          'Verbo e predicativo do sujeito que vem logo depois dele: “Os vizinhos ficaram desconfiados.”',
          'Nome e seu complemento nominal ou adjunto adnominal: “O pedido de revisão das provas foi negado.”',
          'Locução verbal da voz passiva e o agente da passiva: “O edital foi publicado pela comissão.”',
          'Advérbio de negação ou advérbio que modifica o verbo, quando vem antes dele: “Nunca errarei esta questão.”',
          'Conjunção “e” aditiva que liga orações de mesmo sujeito: “Ela estudou a tarde toda e foi aprovada.”',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Aposto ou adjunto adnominal?',
        enunciado: 'Compare as frases: (I) “Minha irmã enfermeira trabalha à noite.” (II) “Minha irmã, enfermeira, trabalha à noite.” As duas estão gramaticalmente corretas? O que muda entre elas?',
        resolucao: 'As duas são corretas, mas a análise sintática é diferente. Em (I), “enfermeira” é adjunto adnominal restritivo: identifica qual irmã está sendo falada, o que sugere que há outras irmãs. Em (II), “enfermeira” é aposto explicativo, isolado por vírgulas, que apenas acrescenta uma informação sobre a única irmã. Aposto explicativo sempre vem entre vírgulas; adjunto restritivo não.',
      },
      {
        tipo: 'texto',
        texto: '**Vírgula obrigatória.** Isole o vocativo (“Ana, abra a janela.”), o aposto explicativo, o predicativo do sujeito deslocado (“Cansado da viagem, o motorista dormiu cedo.”), as expressões explicativas como “ou seja” e “isto é” (“O edital, ou seja, o documento oficial, foi publicado ontem.”) e o adjunto adverbial longo deslocado (“Durante toda a madrugada de chuva forte, a equipe trabalhou sem parar.”).\n\n**Adjetiva restritiva e explicativa.** A restritiva limita o antecedente a um grupo e não recebe vírgula: “Os candidatos que chegaram atrasados perderam a vaga” (só alguns perderam). A explicativa acrescenta uma informação sobre o grupo inteiro e vem entre vírgulas: “Os candidatos, que chegaram atrasados, perderam a vaga” (todos perderam). O sentido muda, e a banca costuma explorar essa diferença.\n\n**Período composto.** Coordenadas assindéticas são separadas por vírgula: “Levantei cedo, tomei café, saí.” Quando o verbo da segunda oração some (elipse), a vírgula marca essa omissão, sobretudo depois de ponto e vírgula: “O primeiro grupo estuda pela manhã; o segundo, à tarde.” O ponto e vírgula também organiza blocos longos: “A prova terá três partes; a primeira, objetiva; a segunda, discursiva; a terceira, prática.”',
      },
      {
        tipo: 'atencao',
        texto: 'Pontos em que os gramáticos divergem, e o que a banca costuma cobrar. (1) Vírgula antes de “e” ligando orações de sujeitos diferentes: a maioria exige a vírgula, mas alguns gramáticos a tratam como facultativa, e bancas já seguiram essa visão. Exemplo: “Os professores chegaram cedo, e os alunos ainda dormiam.” (2) “E” com valor adversativo (= mas) ou enfático: alguns gramáticos recomendam a vírgula. (3) “Não só..., mas também”: há quem separe e quem não separe; em trechos enfáticos, bancas já cobraram a vírgula antes de “mas também”. (4) Oração adverbial posposta à principal (“Chegamos tarde porque o ônibus atrasou.”): a vírgula é facultativa para muitos gramáticos e obrigatória para outros; quando a oração vem antes da principal, a vírgula é obrigatória. (5) Adjunto adverbial curto deslocado (“Hoje a equipe encerra o turno”): a vírgula é facultativa; o adjunto longo deslocado pede vírgula. (6) Vírgula ao fim de oração adjetiva restritiva longa: alguns gramáticos a admitem, mas algumas bancas já a tomaram como erro. (7) Vírgula de elipse após vírgula simples, sem ponto e vírgula antes: há quem a aceite, mas a orientação mais segura é reservá-la para os casos com ponto e vírgula, ponto ou travessão antes. Em caso de dúvida entre duas alternativas, escolha a que segue a regra tradicional.',
      },
      {
        tipo: 'atencao',
        texto: 'Pegadinhas de sinal. “Mas” nunca vem seguido de vírgula, salvo quando há expressão intercalada: “Ele estudou a semana toda. Mas, sem dúvida, a prova foi difícil.” Antes de “mas” que liga orações, a vírgula é obrigatória: “Ele estudou a semana toda, mas errou a questão.”\n\n“Etc.” já traz o ponto final: não acrescente outro ponto nem reticências logo depois. A vírgula antes de “etc.” é controversa e, por isso, facultativa.\n\nEm intercalação com sigla, use o mesmo travessão antes e depois da sigla: “O Sistema Único de Saúde — SUS — apresenta falhas.” Dois-pontos são seguidos de letra minúscula, salvo nome próprio, sigla ou início de citação.\n\nQuando a citação é a frase inteira, o ponto final fica dentro das aspas. Se a frase começa fora das aspas, o ponto final do período vai depois delas. Interrogação, exclamação e reticências que pertencem à própria citação ficam dentro das aspas.',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
