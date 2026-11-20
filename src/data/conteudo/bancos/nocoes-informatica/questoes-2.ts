import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Excel/Calc, PowerPoint, internet, e-mail e redes.
 * Funções no Excel em português, com ; como separador de argumentos.
 * ------------------------------------------------------------------ */

export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- inf-excel ---------- */
  {
    id: 'inf-excel-q01',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'No Excel, a célula C1 contém a fórmula =A1*$B$1. Se ela for copiada para a célula C5, a fórmula resultante será:',
    alternativas: ['=A5*$B$1', '=A5*$B$5', '=A1*$B$1', '=A5*B5', '=B5*$B$1'],
    correta: 0,
    comentario:
      'De C1 para C5 a fórmula desce 4 linhas e não muda de coluna. A referência relativa A1 vira A5; a absoluta $B$1 não muda. Por isso o $ é usado para fixar uma taxa ou constante.',
  },
  {
    id: 'inf-excel-q02',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado: 'A célula C2 de uma planilha do Excel contém =$A2*B$1. Copiando-se essa célula para D4, obtém-se:',
    alternativas: ['=$A2*C$1', '=$B4*C$1', '=$A4*C$1', '=$A4*B$3', '=$A4*C$3'],
    correta: 2,
    comentario:
      'O deslocamento é +1 coluna e +2 linhas. Em $A2 a coluna está fixa e a linha anda: $A4. Em B$1 a linha está fixa e a coluna anda: C$1. Resultado: =$A4*C$1.',
  },
  {
    id: 'inf-excel-q03',
    temaId: 'inf-excel',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No Excel, durante a edição de uma fórmula, selecionar a referência A1 e pressionar F4 alterna entre os tipos de referência, como $A$1, A$1 e $A1.',
    gabaritoCE: true,
    comentario:
      'Certo. Segundo o suporte da Microsoft, com uma referência selecionada na fórmula, F4 alterna entre absoluta e relativa, passando pelas mistas. Fora da edição, F4 repete a última ação.',
  },
  {
    id: 'inf-excel-q04',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 3,
    enunciado: 'As células A1, A2, A3 e A4 contêm, respectivamente, 2, 4, 6 e 8. O resultado da fórmula =SOMA(A1;A4)+MÉDIA(A1:A4) é:',
    alternativas: ['25', '10', '20', '30', '15'],
    correta: 4,
    comentario:
      'SOMA(A1;A4) soma só A1 e A4 (o ; separa células avulsas): 2 + 8 = 10. MÉDIA(A1:A4) usa o intervalo inteiro: 20 ÷ 4 = 5. Total: 15. Quem lê o ; como intervalo chega a 25.',
    verificar: () => 2 + 8 + (2 + 4 + 6 + 8) / 4,
  },
  {
    id: 'inf-excel-q05',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado: 'A célula B2 contém 5. Qual é o resultado de =SE(B2>=7;"Aprovado";SE(B2>=5;"Recuperação";"Reprovado"))?',
    alternativas: ['Aprovado', 'Recuperação', 'Reprovado', 'FALSO', '#VALOR!'],
    correta: 1,
    comentario:
      'O primeiro teste (5 >= 7) é falso, então o Excel avalia o SE interno: 5 >= 5 é verdadeiro e retorna “Recuperação”. O SE aninhado só é avaliado quando o teste externo é falso.',
  },
  {
    id: 'inf-excel-q06',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'O intervalo B2:B8 contém as notas 8; 6,5; 7; 9,5; 5; 7 e 4. O resultado de =CONT.SE(B2:B8;">=7") é:',
    alternativas: ['3', '4', '5', '6', '7'],
    correta: 1,
    comentario:
      'CONT.SE conta as células que atendem ao critério. Notas maiores ou iguais a 7: 8, 7, 9,5 e 7 = 4 células. O operador >= inclui o próprio 7; quem usa > 7 encontra 2.',
    verificar: () => [8, 6.5, 7, 9.5, 5, 7, 4].filter((n) => n >= 7).length,
  },
  {
    id: 'inf-excel-q07',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Em A2:A6 estão os setores Clínica, Pediatria, Clínica, Cirurgia e Clínica; em B2:B6, os atendimentos 12, 8, 15, 6 e 10. O resultado de =SOMASE(A2:A6;"Clínica";B2:B6) é:',
    alternativas: ['3', '51', '27', '37', '12'],
    correta: 3,
    comentario:
      'SOMASE(intervalo do critério; critério; intervalo da soma) soma B quando A é “Clínica”: 12 + 15 + 10 = 37. O 3 seria CONT.SE (quantas linhas são Clínica) e 51 é o total geral.',
    verificar: () => 12 + 15 + 10,
  },
  {
    id: 'inf-excel-q08',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'No cadastro A2:C50, a coluna A tem o CPF, a B o nome e a C o setor do servidor. Para exibir em G1 o setor do CPF digitado em F1, com correspondência exata, a fórmula correta é:',
    alternativas: [
      '=PROCV(F1;A2:C50;3;FALSO)',
      '=PROCV(F1;A2:C50;2;FALSO)',
      '=PROCV(A2:C50;F1;3;FALSO)',
      '=PROCV(F1;A2:C50;3;VERDADEIRO)',
      '=PROCV(F1;C2:C50;1;FALSO)',
    ],
    correta: 0,
    comentario:
      'Sintaxe: PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; FALSO). O CPF está na 1ª coluna da matriz e o setor é a 3ª. Coluna 2 traria o nome; VERDADEIRO faz correspondência aproximada; a matriz C2:C50 não contém o CPF.',
  },
  {
    id: 'inf-excel-q09',
    temaId: 'inf-excel',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Na função PROCV do Excel, se o quarto argumento for omitido, a função faz correspondência exata e retorna #N/D quando o valor procurado não existe na tabela.',
    gabaritoCE: false,
    comentario:
      'Errado. Pelo suporte da Microsoft, omitido o quarto argumento, o padrão é a correspondência aproximada (VERDADEIRO), que pressupõe a 1ª coluna classificada. Para correspondência exata, informe FALSO ou 0.',
  },
  {
    id: 'inf-excel-q10',
    temaId: 'inf-excel',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado: 'No Excel, a fórmula =-2^2 retorna -4, pois a potenciação é calculada antes da negação.',
    gabaritoCE: false,
    comentario:
      'Errado. Na tabela de precedência do suporte da Microsoft, a negação (como em –1) vem antes da exponenciação (^): calcula-se (-2)^2 = 4. Para obter -4, escreva =-(2^2) ou =0-2^2 (a subtração tem prioridade menor que a potência).',
  },
  {
    id: 'inf-excel-q11',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'A1 contém 10, A2 está vazia, A3 contém 6 e A4 contém o texto “pendente”. O resultado de =MÉDIA(A1:A4) é:',
    alternativas: ['4', '5,33', '16', '#VALOR!', '8'],
    correta: 4,
    comentario:
      'Em referências de intervalo, MÉDIA ignora células vazias e com texto: (10 + 6) ÷ 2 = 8. Dividir por 4 (= 4) ou por 3 (= 5,33) é o erro típico. Se A2 tivesse 0, o zero entraria na conta.',
    verificar: () => (10 + 6) / 2,
  },
  {
    id: 'inf-excel-q12',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado: 'Ao digitar =SOMAR(B2:B10) no Excel em português, a célula exibirá o erro:',
    alternativas: ['#DIV/0!', '#REF!', '#NOME?', '#N/D', '#VALOR!'],
    correta: 2,
    comentario:
      '#NOME? indica nome de função (ou de intervalo) não reconhecido: a função correta é SOMA. #DIV/0! é divisão por zero; #REF!, referência inválida; #N/D, valor não encontrado; #VALOR!, tipo de dado errado.',
  },
  {
    id: 'inf-excel-q13',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'No Excel para Windows, os atalhos Ctrl+; e Alt+= executam, respectivamente:',
    alternativas: [
      'Formatar Células e Soma.',
      'inserir a hora atual e inserir função.',
      'selecionar a coluna e AutoSoma.',
      'inserir a data atual e AutoSoma.',
      'inserir a data atual e alternar a exibição de fórmulas.',
    ],
    correta: 3,
    comentario:
      'Pelo suporte da Microsoft, Ctrl+; insere a data atual (Ctrl+Shift+: insere a hora) e Alt+= insere a AutoSoma. Formatar Células é Ctrl+1; alternar fórmulas é Ctrl+`; selecionar a coluna é Ctrl+Espaço.',
  },
  {
    id: 'inf-excel-q14',
    temaId: 'inf-excel',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Na configuração padrão, para referenciar a célula A1 da planilha Planilha2 em uma fórmula, usa-se Planilha2!A1 no Microsoft Excel e Planilha2.A1 no LibreOffice Calc.',
    gabaritoCE: true,
    comentario:
      'Certo. O Excel separa o nome da planilha da célula com ponto de exclamação; o Calc, na sintaxe padrão (Calc A1), com ponto. Em português, os dois usam ; entre argumentos e $ para referências absolutas.',
  },
  {
    id: 'inf-excel-q15',
    temaId: 'inf-excel',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado: 'Com B2 = 8 e C2 = 70%, a fórmula =SE(E(B2>=7;C2>=75%);"Aprovado";"Reprovado") retorna:',
    alternativas: [
      'Reprovado, porque a função E exige que as duas condições sejam verdadeiras.',
      'Aprovado, porque basta uma das condições ser verdadeira.',
      'Aprovado, porque a nota é maior que 7.',
      '#VALOR!, porque 75% não é um valor válido em fórmula.',
      'FALSO, porque a função E não pode ser usada dentro do SE.',
    ],
    correta: 0,
    comentario:
      'E(...) só é VERDADEIRO se todas as condições forem verdadeiras: 8 >= 7 é verdadeiro, mas 70% >= 75% é falso, então o SE retorna “Reprovado”. “Basta uma” descreve a função OU. Porcentagem é número válido (75% = 0,75).',
  },

  /* ---------- inf-powerpoint ---------- */
  {
    id: 'inf-powerpoint-q01',
    temaId: 'inf-powerpoint',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'No PowerPoint para Windows, para iniciar a apresentação a partir do slide atual, e não do primeiro, utiliza-se:',
    alternativas: ['F5', 'F7', 'Shift+F5', 'Alt+F4', 'Ctrl+M'],
    correta: 2,
    comentario:
      'Shift+F5 inicia do slide atual; F5 inicia do primeiro slide. Alt+F4 fecha a janela e Ctrl+M insere novo slide.',
  },
  {
    id: 'inf-powerpoint-q02',
    temaId: 'inf-powerpoint',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Um médico quer que o logotipo do hospital e o rodapé institucional apareçam em todos os slides de uma aula, sem inseri-los um a um. O recurso indicado é:',
    alternativas: ['Transição.', 'Animação.', 'Classificação de Slides.', 'Ocultar Slide.', 'Slide Mestre.'],
    correta: 4,
    comentario:
      'O Slide Mestre (Exibir > Slide Mestre) define layout, fontes, cores e elementos que se repetem em todos os slides. Transição e animação são efeitos; Classificação de Slides é um modo de exibição.',
  },
  {
    id: 'inf-powerpoint-q03',
    temaId: 'inf-powerpoint',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No PowerPoint, transição é o efeito aplicado a um objeto dentro do slide, como a entrada de um gráfico após um clique.',
    gabaritoCE: false,
    comentario:
      'Errado. Transição é o efeito na passagem de um slide para o seguinte. O efeito aplicado a objetos dentro do slide (texto, imagem, gráfico) é a animação.',
  },
  {
    id: 'inf-powerpoint-q04',
    temaId: 'inf-powerpoint',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado: 'No PowerPoint para Windows, o atalho que adiciona um novo slide à apresentação é:',
    alternativas: ['Ctrl+P', 'Ctrl+M', 'Shift+F5', 'Ctrl+D', 'F5'],
    correta: 1,
    comentario:
      'Pelo suporte da Microsoft, Ctrl+M adiciona um novo slide. Ctrl+P imprime, Ctrl+D duplica o objeto selecionado, F5 e Shift+F5 iniciam a apresentação.',
  },
  {
    id: 'inf-powerpoint-q05',
    temaId: 'inf-powerpoint',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Para que um arquivo enviado aos participantes de um curso abra diretamente no modo de apresentação de slides ao receber um duplo clique, ele deve ser salvo como:',
    alternativas: ['.pptx', '.ppsx', '.potx', '.pdf', '.odp'],
    correta: 1,
    comentario:
      'O .ppsx (apresentação de slides) abre direto em tela cheia. O .pptx abre no modo de edição, o .potx é modelo, o .odp é do Impress e o .pdf não é apresentação do PowerPoint.',
  },
  {
    id: 'inf-powerpoint-q06',
    temaId: 'inf-powerpoint',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No PowerPoint, um slide marcado como oculto continua no arquivo e pode ser editado, mas é pulado durante a apresentação.',
    gabaritoCE: true,
    comentario:
      'Certo. Ocultar slide não o exclui: ele permanece no arquivo e na edição, mas não é exibido na apresentação. É útil para slides de reserva.',
  },
  {
    id: 'inf-powerpoint-q07',
    temaId: 'inf-powerpoint',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Em um congresso com projetor, o palestrante quer ver em seu notebook as anotações e o próximo slide, enquanto o público vê apenas o slide atual. Deve usar o modo:',
    alternativas: ['Normal.', 'Classificação de Slides.', 'Modo de Exibição de Leitura.', 'Modo de Exibição do Apresentador.', 'Anotações.'],
    correta: 3,
    comentario:
      'O Modo de Exibição do Apresentador mostra ao orador anotações, cronômetro e próximo slide, e projeta só o slide atual. O modo Anotações serve para editar e imprimir as notas, não para apresentar.',
  },

  /* ---------- inf-internet ---------- */
  {
    id: 'inf-internet-q01',
    temaId: 'inf-internet',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que define corretamente intranet:',
    alternativas: [
      'Rede privada de uma organização que usa as mesmas tecnologias da internet, com acesso restrito a usuários autorizados.',
      'Rede pública mundial que interliga computadores por meio do TCP/IP.',
      'Parte da internet reservada a órgãos públicos, identificada pelo domínio .gov.br.',
      'Rede que dispensa o TCP/IP e, por isso, é imune a ataques externos.',
      'Conjunto de sites de uma organização acessíveis livremente a qualquer cidadão.',
    ],
    correta: 0,
    comentario:
      'Intranet é rede privada que usa TCP/IP, HTTP e navegador, como a internet, mas com acesso restrito. A rede pública mundial é a internet; domínio .gov.br é endereço, não rede; e intranet não é imune a ataques.',
  },
  {
    id: 'inf-internet-q02',
    temaId: 'inf-internet',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A extranet permite que usuários externos autorizados, como fornecedores e parceiros, acessem parte dos sistemas e informações da intranet de uma organização.',
    gabaritoCE: true,
    comentario:
      'Certo. A extranet estende parte da intranet a públicos externos autorizados, em geral com autenticação e conexão segura. Não é aberta a qualquer pessoa.',
  },
  {
    id: 'inf-internet-q03',
    temaId: 'inf-internet',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Na URL https://www.saude.rs.gov.br/servicos/agenda.html, os trechos “https” e “/servicos/agenda.html” correspondem, respectivamente, ao:',
    alternativas: [
      'domínio e ao protocolo.',
      'protocolo e ao domínio.',
      'servidor DNS e à porta.',
      'número da porta e à consulta (query).',
      'protocolo e ao caminho do recurso no servidor.',
    ],
    correta: 4,
    comentario:
      'A URL começa pelo protocolo (https), segue com o nome do host e o domínio (www.saude.rs.gov.br) e termina com o caminho do recurso (/servicos/agenda.html). Porta e consulta, quando existem, aparecem como :porta e ?parâmetros.',
  },
  {
    id: 'inf-internet-q04',
    temaId: 'inf-internet',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O cadeado exibido ao lado do endereço de um site acessado por HTTPS garante que o site é legítimo e pertence à instituição que diz representar.',
    gabaritoCE: false,
    comentario:
      'Errado. O cadeado indica que a conexão é cifrada (TLS) com o servidor daquele endereço. Golpistas também obtêm certificados para seus domínios falsos; é preciso conferir o endereço e o contexto.',
  },
  {
    id: 'inf-internet-q05',
    temaId: 'inf-internet',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado: 'Sobre a navegação anônima (janela privativa ou InPrivate) dos navegadores, é correto afirmar que ela:',
    alternativas: [
      'impede que o provedor de internet e o empregador saibam quais sites foram acessados.',
      'apaga os arquivos baixados durante a sessão quando a janela é fechada.',
      'não mantém o histórico nem os cookies da sessão depois que a janela é fechada.',
      'impede a instalação de qualquer código malicioso no computador.',
      'oculta o endereço IP do usuário perante os sites visitados.',
    ],
    correta: 2,
    comentario:
      'A janela privativa só deixa de guardar histórico, cookies e dados de formulário no próprio dispositivo. Provedor, rede da empresa e sites continuam vendo o acesso e o IP; downloads e favoritos permanecem; não protege contra malware.',
  },
  {
    id: 'inf-internet-q06',
    temaId: 'inf-internet',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado:
      'Pequenos arquivos gravados pelo site no navegador do usuário, usados para manter a sessão iniciada e lembrar preferências, são chamados de:',
    alternativas: ['plug-ins.', 'certificados digitais.', 'spywares.', 'cookies.', 'proxies.'],
    correta: 3,
    comentario:
      'Cookies guardam informações como sessão e preferências. Plug-ins e extensões ampliam o navegador; certificados digitais autenticam sites e pessoas; spyware é malware; proxy é intermediário de conexão.',
  },
  {
    id: 'inf-internet-q07',
    temaId: 'inf-internet',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Em um buscador como o Google, para localizar páginas que contenham exatamente a expressão perícia médica federal, nessa ordem, deve-se pesquisar:',
    alternativas: [
      '"perícia médica federal"',
      'perícia+médica+federal',
      'perícia -médica federal',
      'site:perícia médica federal',
      'filetype:perícia médica federal',
    ],
    correta: 0,
    comentario:
      'As aspas buscam a expressão exata. O hífen exclui um termo (aqui excluiria “médica”); site: restringe a um domínio (site:gov.br); filetype: filtra o tipo de arquivo (filetype:pdf).',
  },
  {
    id: 'inf-internet-q08',
    temaId: 'inf-internet',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Uma intranet, por definição, não pode estar conectada à internet nem ser acessada remotamente, pois isso a transformaria automaticamente em extranet.',
    gabaritoCE: false,
    comentario:
      'Errado. A intranet costuma estar ligada à internet (protegida por firewall) e pode ser acessada de fora por VPN pelos próprios usuários autorizados. Extranet é a abertura a usuários externos, como parceiros.',
  },
  {
    id: 'inf-internet-q09',
    temaId: 'inf-internet',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'No Google Chrome e no Microsoft Edge, o atalho Ctrl+Shift+T:',
    alternativas: [
      'abre uma janela anônima.',
      'abre o histórico de navegação.',
      'reabre a última guia fechada.',
      'abre a lista de downloads.',
      'adiciona a página atual aos favoritos.',
    ],
    correta: 2,
    comentario:
      'Ctrl+Shift+T reabre a última guia fechada. Janela anônima/InPrivate é Ctrl+Shift+N; histórico, Ctrl+H; downloads, Ctrl+J; favoritos, Ctrl+D.',
  },
  {
    id: 'inf-internet-q10',
    temaId: 'inf-internet',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado: 'Na URL https://www.saude.rs.gov.br/servicos?id=5#topo, o trecho “?id=5” corresponde a:',
    alternativas: [
      'porta de comunicação do servidor.',
      'domínio de primeiro nível.',
      'protocolo de transferência.',
      'fragmento que indica um ponto da página.',
      'consulta (query string), que envia parâmetros ao servidor.',
    ],
    correta: 4,
    comentario:
      'Após o ? vem a consulta, com pares parâmetro=valor enviados ao servidor. O fragmento é o trecho após # (#topo); a porta viria após dois-pontos (:443); o domínio de primeiro nível é .br; o protocolo é https.',
  },

  /* ---------- inf-email ---------- */
  {
    id: 'inf-email-q01',
    temaId: 'inf-email',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Os protocolos usados, respectivamente, para enviar mensagens de e-mail e para recebê-las mantendo-as sincronizadas no servidor são:',
    alternativas: ['POP3 e SMTP.', 'SMTP e IMAP.', 'IMAP e POP3.', 'HTTP e FTP.', 'SMTP e DNS.'],
    correta: 1,
    comentario:
      'SMTP envia. Para receber, o IMAP mantém as mensagens no servidor e sincroniza pastas entre dispositivos; o POP3 baixa as mensagens. HTTP e FTP servem a páginas e arquivos; DNS resolve nomes.',
  },
  {
    id: 'inf-email-q02',
    temaId: 'inf-email',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Com o protocolo IMAP, as mensagens permanecem no servidor, o que permite acessar a mesma caixa postal, com as mesmas pastas e o mesmo status de leitura, em vários dispositivos.',
    gabaritoCE: true,
    comentario:
      'Certo. O IMAP trabalha sobre as mensagens no servidor e sincroniza o estado entre computador, celular e webmail. O POP3, ao contrário, baixa as mensagens para o dispositivo.',
  },
  {
    id: 'inf-email-q03',
    temaId: 'inf-email',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Um servidor vai convidar 40 médicos da rede para uma capacitação e não quer que um destinatário veja o endereço dos demais. Os endereços devem ser colocados no campo:',
    alternativas: ['Para.', 'Cco.', 'Cc.', 'Assunto.', 'Responder para.'],
    correta: 1,
    comentario:
      'Os destinatários em Cco (cópia oculta) recebem a mensagem sem que os outros vejam seus endereços. Em Para e Cc, todos os endereços ficam visíveis a todos.',
  },
  {
    id: 'inf-email-q04',
    temaId: 'inf-email',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Ao usar a opção Responder a todos, a resposta é enviada ao remetente e a todos os destinatários da mensagem original, inclusive aos que estavam em cópia oculta (Cco).',
    gabaritoCE: false,
    comentario:
      'Errado. Responder a todos alcança o remetente e quem estava em Para e Cc. Quem estava em Cco não aparece para os demais e, por isso, não é incluído na resposta.',
  },
  {
    id: 'inf-email-q05',
    temaId: 'inf-email',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado:
      'Um médico recebeu um e-mail com um laudo em PDF anexado e quer repassá-lo a um colega, com o anexo. A opção adequada é:',
    alternativas: [
      'Responder, que mantém os anexos originais.',
      'Responder a todos, que mantém os anexos originais.',
      'incluir o colega em Cco da mensagem recebida.',
      'Encaminhar, que inclui os anexos originais.',
      'Marcar como lida, que libera o anexo para os contatos.',
    ],
    correta: 3,
    comentario:
      'Encaminhar envia a mensagem a um novo destinatário com os anexos. Responder e Responder a todos, por padrão, não reenviam os anexos recebidos. Não se altera o Cco de mensagem já recebida.',
  },
  {
    id: 'inf-email-q06',
    temaId: 'inf-email',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'O webmail caracteriza-se por:',
    alternativas: [
      'permitir ler e enviar mensagens pelo navegador, sem instalar programa cliente de e-mail.',
      'dispensar o protocolo SMTP no envio das mensagens entre servidores.',
      'funcionar apenas dentro da intranet da organização.',
      'baixar obrigatoriamente as mensagens pelo protocolo POP3.',
      'não permitir o envio de arquivos anexos.',
    ],
    correta: 0,
    comentario:
      'No webmail o acesso é pelo navegador (HTTP/HTTPS). Por trás, os servidores continuam usando SMTP para enviar; webmail funciona de qualquer lugar com internet e aceita anexos.',
  },
  {
    id: 'inf-email-q07',
    temaId: 'inf-email',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'No endereço de correio eletrônico ana.souza@saude.rs.gov.br, o trecho saude.rs.gov.br identifica o domínio.',
    gabaritoCE: true,
    comentario:
      'Certo. O formato é usuario@dominio: antes da arroba fica a identificação da caixa postal (ana.souza); depois, o domínio responsável pelo serviço de correio (saude.rs.gov.br).',
  },
  {
    id: 'inf-email-q08',
    temaId: 'inf-email',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Um servidor recebeu e-mail cujo campo “De” mostra o endereço da diretoria do hospital, mas a mensagem foi enviada por um golpista. A técnica de falsificar o remetente de uma mensagem chama-se:',
    alternativas: ['pharming.', 'botnet.', 'keylogger.', 'ransomware.', 'e-mail spoofing.'],
    correta: 4,
    comentario:
      'E-mail spoofing é a falsificação de campos do cabeçalho, como o remetente, para que a mensagem pareça vir de fonte confiável. Pharming altera o DNS; botnet é rede de zumbis; keylogger captura teclas; ransomware sequestra dados.',
  },

  /* ---------- inf-redes ---------- */
  {
    id: 'inf-redes-q01',
    temaId: 'inf-redes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'O serviço responsável por traduzir nomes de domínio, como www.gov.br, em endereços IP é o:',
    alternativas: ['DHCP.', 'SMTP.', 'DNS.', 'FTP.', 'HTTP.'],
    correta: 2,
    comentario:
      'O DNS (Domain Name System) resolve nomes em endereços IP. O DHCP atribui IP automaticamente; SMTP envia e-mail; FTP transfere arquivos; HTTP transfere páginas web.',
  },
  {
    id: 'inf-redes-q02',
    temaId: 'inf-redes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'As portas padrão dos protocolos HTTP e HTTPS são, respectivamente:',
    alternativas: ['21 e 22.', '25 e 110.', '443 e 80.', '80 e 443.', '53 e 443.'],
    correta: 3,
    comentario:
      'Pelo registro da IANA, HTTP usa a porta 80 e HTTPS a 443. A 21 é do FTP (controle), a 22 do SSH, a 25 do SMTP, a 110 do POP3 e a 53 do DNS.',
  },
  {
    id: 'inf-redes-q03',
    temaId: 'inf-redes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O TCP é orientado à conexão e confirma a entrega dos dados, ao passo que o UDP não estabelece conexão nem garante a entrega, sendo mais leve para aplicações como transmissão de voz e vídeo.',
    gabaritoCE: true,
    comentario:
      'Certo. O TCP confirma, reenvia e ordena os segmentos (web, e-mail). O UDP envia sem conexão e sem garantias, com menos atraso — por isso é usado em streaming, voz e consultas DNS.',
  },
  {
    id: 'inf-redes-q04',
    temaId: 'inf-redes',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'O equipamento que interliga os computadores de uma rede local e encaminha cada quadro apenas para a porta do destinatário, com base no endereço MAC, é o:',
    alternativas: ['switch.', 'hub.', 'modem.', 'repetidor.', 'roteador.'],
    correta: 0,
    comentario:
      'O switch aprende os endereços MAC e entrega o quadro só à porta de destino. O hub e o repetidor reenviam o sinal sem selecionar destino; o roteador interliga redes diferentes usando o endereço IP; o modem converte sinais para o meio de acesso.',
  },
  {
    id: 'inf-redes-q05',
    temaId: 'inf-redes',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'Os endereços IPv4 e IPv6 têm, respectivamente:',
    alternativas: ['16 e 32 bits.', '32 e 64 bits.', '32 e 128 bits.', '64 e 128 bits.', '128 e 32 bits.'],
    correta: 2,
    comentario:
      'O IPv4 tem 32 bits (quatro octetos, como 192.168.0.10). O IPv6 tem 128 bits, escritos em hexadecimal separados por dois-pontos, o que amplia muito o número de endereços.',
  },
  {
    id: 'inf-redes-q06',
    temaId: 'inf-redes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'O serviço DHCP é responsável por converter o nome www.gov.br no endereço IP do servidor correspondente.',
    gabaritoCE: false,
    comentario:
      'Errado. Converter nomes em IP é tarefa do DNS. O DHCP distribui automaticamente aos dispositivos o endereço IP, a máscara, o gateway e os servidores DNS a usar.',
  },
  {
    id: 'inf-redes-q07',
    temaId: 'inf-redes',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'A conexão entre um celular e um fone de ouvido sem fio, por Bluetooth, a poucos metros de distância, é exemplo de rede:',
    alternativas: ['WAN.', 'MAN.', 'LAN.', 'VPN.', 'PAN.'],
    correta: 4,
    comentario:
      'PAN (rede pessoal) cobre poucos metros em torno de uma pessoa. LAN é local (prédio), MAN é metropolitana (cidade), WAN é de longa distância. VPN é túnel seguro, não uma classe de alcance.',
  },
  {
    id: 'inf-redes-q08',
    temaId: 'inf-redes',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Para proteger a rede sem fio de um consultório, a configuração mais adequada é:',
    alternativas: [
      'WEP com senha numérica curta.',
      'WPA2 ou WPA3 com senha forte.',
      'rede aberta, apenas com o nome (SSID) oculto.',
      'WEP com filtragem por endereço MAC.',
      'rede aberta, porque o roteador já tem firewall.',
    ],
    correta: 1,
    comentario:
      'WPA2 e WPA3 cifram o tráfego da rede sem fio; o WEP é obsoleto e quebrado com facilidade. Ocultar o SSID e filtrar MAC não substituem a criptografia, e firewall não cifra a rede aberta.',
  },
];
