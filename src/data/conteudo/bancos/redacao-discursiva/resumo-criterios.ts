import type { ResumoTema } from '../../../types';
import { ACORDO, ATUALIZADO, BECHARA, CUNHA_CINTRA, EDITAIS, MANUAL_PR } from './fontes';

export const RESUMO_CRITERIOS: ResumoTema = {
  temaId: 'red-criterios',
  titulo: 'Critérios de correção e gestão do tempo',
  resumo:
    'Saber como a banca corrige muda o jeito de escrever: conteúdo, estrutura e língua têm pesos definidos no edital, e falhas de forma podem anular o texto. Planejamento, controle do tempo e revisão sistemática evitam surpresas na nota.',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'A nota da discursiva costuma ser dividida em três blocos: **conteúdo** (atendimento ao tema e ao comando, domínio técnico, qualidade dos argumentos), **estrutura** (parágrafos, progressão, coesão e coerência) e **língua** (norma-padrão: ortografia, acentuação, concordância, regência, pontuação e crase). O peso de cada bloco, a nota mínima e a forma de desconto **variam conforme o edital**. Algumas bancas publicam, depois da prova, um **espelho de correção** com os pontos que esperavam encontrar.\n\nEm muitos editais, os erros de língua são contados um a um e descontados da nota, às vezes em proporção ao número de linhas escritas. Por isso, o texto curto demais é duplamente arriscado: pode não atingir o mínimo de linhas e concentra o peso de cada erro. Leia a seção da discursiva no edital **antes** de começar a treinar e anote as regras do seu concurso.',
    },
    {
      tipo: 'tabela',
      tabela: {
        titulo: 'O que o corretor procura',
        colunas: ['Critério', 'O que se avalia', 'Como garantir o ponto'],
        linhas: [
          ['Tema', 'Todas as palavras-chave do recorte tratadas', 'Transforme o tema em pergunta e responda a ela na tese'],
          ['Comando', 'Cada item pedido (“discorra”, “aborde”, “proponha”) respondido', 'Numere os itens no rascunho e marque cada um ao escrever'],
          ['Argumentação', 'Argumentos corretos, pertinentes e desenvolvidos', 'Um argumento por parágrafo, com explicação e prova'],
          ['Estrutura', 'Introdução, desenvolvimento e conclusão equilibrados', 'Siga o esquema e reserve linhas para cada parte'],
          ['Coesão e coerência', 'Ligação lógica entre frases e parágrafos, sem contradição', 'Conectivo adequado na abertura dos parágrafos de desenvolvimento e da conclusão'],
          ['Norma-padrão', 'Ortografia, acentuação, concordância, regência, pontuação, crase', 'Revisão final com o checklist abaixo'],
        ],
        nota: 'Pesos, nota mínima e fórmula de desconto: sempre os do edital do seu concurso.',
      },
    },
    {
      tipo: 'lista',
      itens: [
        '**Limites de linhas:** o edital fixa o mínimo e o máximo. Em geral, o que passa do máximo é desconsiderado, e o texto abaixo do mínimo pode receber nota zero. Conte as linhas do rascunho antes de passar a limpo.',
        '**Identificação:** nome, assinatura, rubrica ou qualquer marca que identifique o candidato fora do campo próprio costuma anular a prova. Isso inclui assinar o laudo ou o parecer com o próprio nome: use a identificação que o comando indicar.',
        '**Rascunho:** não vale como resposta. Só se corrige o texto transcrito para a **folha definitiva**, com a caneta especificada no edital.',
        '**Legibilidade:** o trecho ilegível costuma ser desconsiderado ou contado como erro. Se o edital exigir distinção clara entre maiúsculas e minúsculas, cumpra.',
        '**Rasuras:** corrija como o edital orientar; na falta de regra, risque o erro com um traço simples e siga escrevendo. Use corretivo só se o edital permitir.',
        '**Título:** só quando o edital pedir ou permitir; verifique também se a linha do título conta no total.',
      ],
    },
    {
      tipo: 'tabela',
      tabela: {
        titulo: 'Divisão do tempo (sugestão): discursiva de 25 a 30 linhas em 1 hora',
        colunas: ['Etapa', 'Tempo', 'O que fazer'],
        linhas: [
          ['Leitura do comando', '5 min', 'Sublinhar as palavras-chave e numerar os itens pedidos'],
          ['Esquema', '5 min', 'Tese, um tópico frasal por parágrafo, argumento de cada um e proposta; no laudo, a lista de lesões e o rascunho das respostas aos quesitos'],
          ['Rascunho', '20 min', 'Escrever o texto inteiro; se faltar tempo, rascunhar só a introdução e a conclusão'],
          ['Revisão do rascunho', '5 min', 'Cortar repetições, contar as linhas e aplicar o checklist'],
          ['Transcrição', '20 min', 'Passar a limpo com letra legível, sem pular linhas'],
          ['Revisão final', '5 min', 'Ler a folha definitiva atrás de acento, crase e palavra esquecida'],
        ],
        nota: 'Sugestão de treino, não regra de banca: ajuste os tempos à duração e ao limite de linhas fixados no edital. Quando a discursiva divide o tempo com a objetiva, decida antes da prova em que momento fará cada parte. Muitos candidatos começam pela discursiva, com a cabeça descansada. O essencial é ter uma hora-limite para começar a transcrição.',
      },
    },
    {
      tipo: 'atencao',
      texto:
        'O erro de gestão mais caro é **não transcrever a tempo**. Anote no rascunho a hora-limite para começar a passar a limpo e cumpra-a, mesmo com o rascunho imperfeito. Um texto completo e razoável vale mais que um rascunho brilhante que ficou pela metade.',
    },
    {
      tipo: 'exemplo',
      titulo: 'Esquema de 5 minutos',
      enunciado:
        'Tema (fictício): “O uso de tecnologia para ampliar o acesso à saúde em municípios pequenos”. Limite hipotético: 25 a 30 linhas. Monte o esquema antes de escrever.',
      resolucao:
        '**Pergunta-guia:** como a tecnologia pode ampliar o acesso à saúde **em municípios pequenos**?\n**Tese:** a telessaúde amplia o acesso, desde que venha acompanhada de infraestrutura e de vínculo com a equipe local.\n**D1 (causa e consequência):** a teleconsultoria com especialistas evita encaminhamentos e deslocamentos desnecessários.\n**D2 (comparação):** sem internet estável e sem capacitação, a tecnologia aprofunda a desigualdade entre municípios.\n**Conclusão (proposta):** União e estados financiam conectividade e capacitação; os municípios integram a telessaúde à rotina da equipe.\n**Linhas:** introdução 5, D1 8, D2 8, conclusão 6, total de 27.',
    },
    {
      tipo: 'tabela',
      tabela: {
        titulo: 'Checklist de revisão',
        colunas: ['Ponto', 'Pergunta de revisão', 'Exemplo correto'],
        linhas: [
          ['Crase', 'Há preposição “a” + artigo “a”? Antes de palavra masculina, verbo ou pronome pessoal, não há crase', '“atendimento à população”; “acesso a serviços”; “a partir de”'],
          ['Crase em locuções', 'É locução feminina adverbial, prepositiva ou conjuntiva?', '“às vezes”, “à medida que”, “à custa de”'],
          ['Concordância verbal', 'O verbo concorda com o sujeito, mesmo posposto ou distante?', '“Faltam médicos”; “Existem desafios”; “Há desafios” (haver = existir: singular)'],
          ['Concordância nominal', 'Adjetivos e particípios concordam com o substantivo?', '“Seguem anexas as cópias”; “É necessária a fixação do médico”'],
          ['Vírgula proibida', 'Há vírgula entre sujeito e verbo ou entre verbo e complemento?', '“A falta de médicos no interior compromete o vínculo.”'],
          ['Vírgula que isola', 'Apostos e termos explicativos estão entre vírgulas? A oração adverbial anteposta está separada da principal?', '“Quando o médico sai, o paciente perde o seguimento.”'],
          ['Que restritivo × explicativo', 'A oração restringe (sem vírgula) ou explica (entre vírgulas)?', '“Os municípios que têm transporte…” (só alguns) × “Os municípios, que têm transporte, …” (todos)'],
          ['Paralelismo', 'Termos coordenados têm a mesma estrutura?', '“Cabe ao gestor contratar médicos e garantir transporte” (e não “contratar médicos e a garantia de transporte”)'],
          ['Regência', 'O verbo pede a preposição usada?', '“obedecer às normas”; “preferir prevenir a remediar” (e não “do que remediar”)'],
          ['Ortografia', 'A grafia segue o Acordo de 1990? Homônimos como “há” e “a” foram bem usados?', '“ideia”, “assembleia” (sem acento); “há dois anos” (passado) × “daqui a dois anos” (futuro)'],
          ['Repetição', 'A mesma palavra aparece em linhas próximas?', 'Alterne: “o médico… o profissional… ele”'],
        ],
        nota: 'Revise em duas passadas: a primeira procura o sentido (tese, tópicos frasais, conectivos); a segunda procura só a língua, linha por linha.',
      },
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Segunda (30 min) — repertório:** leia um documento técnico sobre saúde pública e anote dois argumentos e uma informação com fonte.',
        '**Terça (20 min) — esquemas:** faça três esquemas de 5 minutos sobre temas diferentes, sem escrever o texto.',
        '**Quarta (60 min) — texto completo:** redação à mão, cronometrada, em folha com o número de linhas da prova.',
        '**Quinta (30 min) — correção:** corrija o próprio texto com a grade do edital e o checklist, conte os erros de língua e reescreva o pior parágrafo.',
        '**Sexta (20 min) — gramática dirigida:** questões do banco de Língua Portuguesa sobre o erro que mais apareceu na semana.',
        '**Sábado (60 min) — trilha pericial:** um laudo ou parecer a partir de caso fictício com quesitos. Quem não vai prestar concurso de perícia faz uma segunda redação.',
        '**Domingo — descanso** ou releitura dos textos corrigidos.',
      ],
    },
    {
      tipo: 'texto',
      texto:
        '**Progressão:** nas primeiras semanas, priorize esquemas e parágrafos isolados; depois, textos completos sem limite de tempo; na reta final, textos completos nas condições da prova. Guarde os textos corrigidos e mantenha uma **lista pessoal de erros recorrentes**: é ela que orienta a revisão da véspera.',
    },
  ],
  fontes: [EDITAIS, MANUAL_PR, BECHARA, CUNHA_CINTRA, ACORDO],
  atualizadoEm: ATUALIZADO,
};
