import type { ResumoTema } from '../../../types';
import { ATUALIZADO, CF, CUNHA_CINTRA, EDITAIS, GARCIA, MANUAL_PR, PNAB } from './fontes';

export const RESUMO_DISSERTACAO: ResumoTema = {
  temaId: 'red-dissertacao',
  titulo: 'Texto dissertativo-argumentativo',
  resumo:
    'A banca pede um texto que defenda um ponto de vista sobre o tema proposto, com tese clara, argumentos desenvolvidos em parágrafos e conclusão coerente. Perde pontos quem tangencia o tema, narra em vez de argumentar ou escreve sem coesão; a fuga ao tema pode zerar a nota.',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'O **texto dissertativo-argumentativo** defende um **ponto de vista** (a **tese**) sobre um tema e procura convencer o leitor por meio de **argumentos**. Não basta expor informações: é preciso tomar posição e sustentá-la. Por isso, a banca avalia, ao mesmo tempo, o que você pensa, como organiza o raciocínio e como escreve.\n\nA linguagem é **impessoal e formal**: terceira pessoa, norma-padrão, vocabulário preciso, sem gírias nem marcas de oralidade. Imagine um avaliador culto que não conhece a sua opinião: tudo o que você afirmar precisa estar explícito e justificado no papel.\n\nO comando costuma vir com **textos motivadores**. Eles situam o tema e não devem ser copiados: trechos transcritos, em geral, não contam como produção própria. Leia o comando duas vezes e sublinhe o **recorte**, isto é, o que exatamente se pede, onde e para quem.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Introdução (1 parágrafo, cerca de 5 a 7 linhas):** contextualize o tema em uma ou duas frases e apresente a **tese**, de preferência anunciando os eixos que serão desenvolvidos. Evite começar por definição de dicionário ou por pergunta retórica.',
        '**Desenvolvimento (2 ou 3 parágrafos, cerca de 6 a 8 linhas cada):** cada parágrafo abre com um **tópico frasal**, a frase que resume a ideia do parágrafo; em seguida, vem **um argumento** desenvolvido (explicação + prova) e, por fim, uma frase que amarra o argumento à tese.',
        '**Conclusão (1 parágrafo, cerca de 5 a 7 linhas):** retome a tese com outras palavras, sintetize os argumentos e, quando o comando pedir ou couber, proponha **soluções** concretas (quem faz, o quê, como e para quê). Não traga argumento novo.',
        'Regra prática: **um parágrafo, uma ideia**. Se o parágrafo trata de dois assuntos, divida-o; se dois parágrafos dizem a mesma coisa, junte-os.',
      ],
    },
    {
      tipo: 'tabela',
      tabela: {
        titulo: 'Tipos de argumento',
        colunas: ['Tipo', 'Como funciona', 'Exemplo em saúde pública', 'Cuidado'],
        linhas: [
          ['Dados', 'Fatos e números verificáveis dão concretude', 'Indicador citado nos textos motivadores, com a fonte', 'Nunca invente número; sem certeza, use informação qualitativa'],
          ['Exemplo', 'Um caso concreto ilustra a tese', 'Equipe itinerante que leva vacinação a comunidades rurais', 'Sozinho, o exemplo ilustra, mas não prova: explique por que é representativo'],
          ['Causa e consequência', 'Mostra a cadeia que gera o problema ou que dele decorre', 'Falta de médico fixo → consultas adiadas → doenças crônicas descompensadas → mais internações', 'Cada elo precisa ser plausível; evite saltos lógicos'],
          ['Autoridade', 'Apoia a tese em norma, instituição ou especialista', '“A saúde é direito de todos e dever do Estado” (CF/88, art. 196)', 'Cite só o que sabe com segurança; citação errada pesa contra'],
          ['Comparação', 'Confronta realidades para destacar diferenças', 'Acesso à consulta na capital × em comunidade rural', 'Compare o que é comparável e tire uma conclusão da comparação'],
        ],
      },
    },
    {
      tipo: 'tabela',
      tabela: {
        titulo: 'Coesão: conectivos por relação de sentido',
        colunas: ['Relação', 'Conectivos', 'Exemplo'],
        linhas: [
          ['Adição', 'além disso, ademais, também, não só… mas também', '“Além disso, a rotatividade rompe o vínculo com a comunidade.”'],
          ['Oposição', 'mas, porém, contudo, todavia, no entanto, entretanto', '“A cobertura cresceu; no entanto, a resolutividade não acompanhou.”'],
          ['Concessão', 'embora, ainda que, mesmo que, apesar de', '“Embora haja recursos, falta gestão.” (“embora” + subjuntivo)'],
          ['Causa', 'porque, visto que, uma vez que, já que', '“…, uma vez que o transporte é escasso.”'],
          ['Consequência', 'de modo que, de forma que, tanto… que', '“As filas cresceram, de modo que muitos desistiram.”'],
          ['Conclusão', 'portanto, logo, assim, dessa forma, em suma', '“Portanto, fixar o médico exige mais que salário.”'],
          ['Explicação', 'isto é, ou seja, vale dizer', '“…a longitudinalidade, isto é, o cuidado contínuo…”'],
          ['Exemplificação', 'por exemplo, como, a exemplo de', '“…doenças crônicas, como hipertensão e diabetes.”'],
          ['Condição', 'se, caso, desde que, contanto que', '“Caso haja transporte, o acesso melhora.”'],
          ['Finalidade', 'para que, a fim de que, a fim de', '“…a fim de que o paciente não perca o seguimento.”'],
        ],
        nota: 'Varie os conectivos e confira o sentido: trocar “portanto” (conclusão) por “porém” (oposição) inverte a lógica do parágrafo. Conjunções concessivas como “embora” e “ainda que” pedem subjuntivo (“embora seja”, nunca “embora é”); a locução “apesar de” pede substantivo ou infinitivo (“apesar de haver recursos”).',
      },
    },
    {
      tipo: 'lista',
      itens: [
        '**Fuga ao tema:** escrever sobre outro assunto (pede-se “atenção primária no interior” e o texto discute planos de saúde privados). Em geral, zera a nota ou elimina, conforme o edital.',
        '**Tangenciamento:** tratar do assunto amplo e ignorar o recorte (fala de “saúde no Brasil” sem tratar do interior nem da atenção primária). Em geral, não zera, mas derruba bastante a nota de conteúdo.',
        '**Tipo textual errado:** narrar uma história (“Certo dia, num posto de saúde…”), escrever carta ou relato pessoal quando se pede dissertação.',
        '**Primeira pessoa excessiva:** “eu acho”, “na minha opinião”. A tese já é a sua opinião; afirme-a de forma impessoal (“É necessário…”, “Percebe-se que…”). A primeira pessoa do plural costuma ser tolerada, mas confira o edital e use-a com moderação.',
        '**Clichês:** “desde os primórdios”, “nos dias de hoje”, “é de suma importância”, “cada vez mais”. Ocupam linhas e não dizem nada.',
        '**Argumento sem desenvolvimento:** enumerar três problemas num parágrafo sem explicar nenhum. Profundidade vale mais que quantidade.',
        '**Conclusão vazia ou nova:** “Diante do exposto, conclui-se que o tema é complexo”, ou um argumento que não apareceu antes.',
      ],
    },
    {
      tipo: 'atencao',
      texto:
        'A diferença entre **fuga ao tema** e **tangenciamento** é a que mais pesa. Antes de escrever, transforme o tema em pergunta (“Quais são os desafios da atenção primária **no interior do Sul**?”) e confira se a tese responde a **essa** pergunta, com todas as palavras-chave do recorte. Se o comando manda “propor soluções”, a falta de proposta é falha de conteúdo, não de estilo.',
    },
    {
      tipo: 'exemplo',
      titulo: 'Modelo comentado: “Os desafios da atenção primária no interior do Sul”',
      enunciado:
        'Proposta (fictícia): redija um texto dissertativo-argumentativo, de 25 a 30 linhas, sobre o tema “Os desafios da atenção primária no interior do Sul”, com proposta de enfrentamento.\n\n**Texto-modelo**\n\nA Constituição Federal de 1988 estabelece que a saúde é direito de todos e dever do Estado. No Sistema Único de Saúde, a atenção primária é a principal porta de entrada e o lugar do cuidado contínuo. No interior da Região Sul, porém, o direito à saúde esbarra em obstáculos que vão além da falta de recursos: a dificuldade de fixar profissionais e a distância entre o paciente e o serviço. Enfrentá-los exige políticas que tornem o trabalho no interior atraente e levem o cuidado até onde o usuário está.\n\nEm primeiro lugar, a rotatividade de médicos compromete a essência da atenção primária: o vínculo contínuo com a comunidade. Em muitos municípios pequenos, contratos precários, isolamento profissional e falta de carreira fazem o médico permanecer poucos meses na unidade. Como consequência, o hipertenso e o diabético perdem o acompanhamento, os exames se repetem e complicações evitáveis chegam ao pronto-socorro regional. Sem continuidade, a porta de entrada do sistema se transforma em mero ponto de passagem.\n\nAlém disso, a geografia do interior impõe barreiras de acesso que a lógica urbana ignora. Enquanto o morador da capital costuma ter uma unidade de saúde perto de casa, o agricultor de uma comunidade rural pode depender de transporte escasso e de estradas precárias para chegar à consulta. Nessas condições, o idoso adia o retorno, a gestante falta ao pré-natal e a doença só é percebida quando já está avançada. A distância, portanto, não é apenas física: ela se converte em desigualdade no cuidado.\n\nDiante desse quadro, garantir atenção primária efetiva no interior do Sul exige mais que recursos: é preciso fixar o médico e aproximar o cuidado do usuário. Cabe ao Ministério da Saúde e aos estados oferecer carreira estável, educação permanente e apoio a distância aos médicos de municípios pequenos, a fim de reduzir o isolamento e a rotatividade. Às prefeituras, por sua vez, compete organizar o transporte sanitário e as visitas domiciliares das equipes, para que o cuidado alcance quem vive longe da unidade. Só assim o direito previsto na Constituição deixará de depender do endereço do paciente.',
      resolucao:
        '**1º parágrafo (introdução):** contextualiza com um argumento de autoridade (CF/88, art. 196) e apresenta a **tese**: os obstáculos vão além da falta de recursos. Também anuncia os dois eixos (fixação de profissionais e distância), e o leitor já sabe o que vem a seguir. Repare que a “porta de entrada” não é atribuída à Constituição: a expressão está na Política Nacional de Atenção Básica (Portaria GM/MS nº 2.436/2017, art. 2º, § 1º), e o texto a usa como informação geral, sem citar a norma.\n\n**2º parágrafo (desenvolvimento 1):** o **tópico frasal** (“a rotatividade de médicos compromete… o vínculo”) traz a ideia, e “Em primeiro lugar” anuncia a sequência. O argumento é de **causa e consequência**: contratos precários → saída do médico → perda de seguimento → complicações. A última frase amarra o parágrafo à tese.\n\n**3º parágrafo (desenvolvimento 2):** “Além disso” marca a adição, e o **tópico frasal** (“a geografia do interior impõe barreiras de acesso”) traz o segundo eixo. O argumento combina **comparação** (capital × comunidade rural) e **exemplos** concretos (o idoso, a gestante). “Portanto” introduz o fechamento parcial, que volta à ideia de desigualdade.\n\n**4º parágrafo (conclusão):** retoma a tese com outras palavras (“exige mais que recursos”) e apresenta **proposta completa**, com agentes (Ministério, estados, prefeituras), ações (carreira, educação permanente, transporte sanitário, visitas domiciliares) e finalidades (“a fim de reduzir…”, “para que o cuidado alcance…”). A frase final retoma a Constituição citada na introdução e fecha o texto em círculo.\n\n**Observe ainda:** nenhuma primeira pessoa, nenhum número inventado e nenhum clichê; conectivos variados (porém, em primeiro lugar, como consequência, além disso, enquanto, portanto, diante desse quadro, por sua vez). São cerca de 340 palavras. Quantas linhas isso ocupa depende da letra e da folha: conte as linhas no rascunho e, se passar do máximo, corte.',
    },
  ],
  fontes: [GARCIA, MANUAL_PR, CUNHA_CINTRA, CF, PNAB, EDITAIS],
  atualizadoEm: ATUALIZADO,
};
