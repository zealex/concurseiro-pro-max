import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Hardware, Windows, Linux e Word/Writer.
 * Atalhos conferidos no suporte da Microsoft (pt-BR) e na ajuda do LibreOffice em 2026-11-19.
 * ------------------------------------------------------------------ */

export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- inf-hardware ---------- */
  {
    id: 'inf-hardware-q01',
    temaId: 'inf-hardware',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que apresenta a memória principal de trabalho do computador, que guarda os programas em execução e perde seu conteúdo quando o equipamento é desligado:',
    alternativas: ['ROM.', 'RAM.', 'SSD.', 'HD.', 'Memória flash do pen drive.'],
    correta: 1,
    comentario:
      'A RAM é a memória principal e é volátil: perde os dados sem energia. A ROM é não volátil e guarda o firmware; SSD, HD e pen drive são memórias secundárias (armazenamento permanente).',
  },
  {
    id: 'inf-hardware-q02',
    temaId: 'inf-hardware',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'Em comparação com o disco rígido tradicional (HD), a unidade de estado sólido (SSD):',
    alternativas: [
      'armazena os dados magneticamente em pratos giratórios.',
      'é uma memória volátil, que perde os dados ao desligar o computador.',
      'é mais lenta, porém mais resistente a impactos.',
      'não tem partes móveis e oferece acesso mais rápido aos dados.',
      'só pode ser usada como memória cache do processador.',
    ],
    correta: 3,
    comentario:
      'O SSD usa memória flash, sem partes móveis: é mais rápido e mais resistente a impacto que o HD, e é não volátil. Pratos magnéticos giratórios são característica do HD; cache é outra memória, interna ao processador.',
  },
  {
    id: 'inf-hardware-q03',
    temaId: 'inf-hardware',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A memória cache, situada entre o processador e a memória RAM, armazena dados e instruções usados com frequência, o que reduz o tempo de espera do processador.',
    gabaritoCE: true,
    comentario:
      'Certo. A cache é pequena e muito mais rápida que a RAM; ao manter perto da CPU o que é usado com frequência, evita acessos mais lentos à memória principal. Na hierarquia, só os registradores são mais rápidos.',
  },
  {
    id: 'inf-hardware-q04',
    temaId: 'inf-hardware',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado: 'Qual dos dispositivos a seguir é classificado como periférico de entrada e saída?',
    alternativas: ['Monitor com tela sensível ao toque.', 'Scanner.', 'Impressora a laser.', 'Microfone.', 'Projetor multimídia.'],
    correta: 0,
    comentario:
      'A tela sensível ao toque exibe informações (saída) e recebe comandos pelo toque (entrada). Scanner e microfone são só de entrada; impressora e projetor, só de saída.',
  },
  {
    id: 'inf-hardware-q05',
    temaId: 'inf-hardware',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Cada exame de imagem de um serviço gera um arquivo de 512 MB. Adotando 1 GB = 1.024 MB, quantos desses arquivos cabem, no máximo, em um pen drive com 4 GB livres?',
    alternativas: ['2 arquivos.', '4 arquivos.', '6 arquivos.', '7 arquivos.', '8 arquivos.'],
    correta: 4,
    comentario:
      '4 GB = 4 × 1.024 = 4.096 MB, e 4.096 ÷ 512 = 8 arquivos. Quem usa 1 GB = 1.000 MB, contrariando o enunciado, obtém 4.000 ÷ 512 ≈ 7,8 e marca 7. Lembre: 1 byte = 8 bits; não confunda MB (megabyte) com Mb (megabit).',
    verificar: () => (4 * 1024) / 512,
  },
  {
    id: 'inf-hardware-q06',
    temaId: 'inf-hardware',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'Software livre é aquele distribuído gratuitamente, sendo vedada a sua comercialização.',
    gabaritoCE: false,
    comentario:
      'Errado. Software livre é definido pelas liberdades de executar, estudar e modificar (com acesso ao código-fonte) e redistribuir, inclusive versões modificadas. Pode ser vendido. Gratuidade sem essas liberdades caracteriza o freeware.',
  },
  {
    id: 'inf-hardware-q07',
    temaId: 'inf-hardware',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado:
      'O firmware gravado na placa-mãe, que testa os componentes ao ligar o computador e dá início ao carregamento do sistema operacional, é o(a):',
    alternativas: ['driver de vídeo.', 'Gerenciador de Tarefas.', 'BIOS/UEFI.', 'memória cache.', 'kernel do Windows.'],
    correta: 2,
    comentario:
      'BIOS (ou seu sucessor, UEFI) é o firmware da placa-mãe: faz o POST (autoteste) e localiza o carregador do sistema. Driver controla um dispositivo; o kernel é carregado depois, já como parte do sistema operacional.',
  },
  {
    id: 'inf-hardware-q08',
    temaId: 'inf-hardware',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Um programa distribuído sem custo, que pode ser usado por tempo indeterminado e sem limitação de recursos, mas tem código-fonte fechado, que o usuário não pode estudar nem modificar, classifica-se como:',
    alternativas: ['software livre.', 'shareware.', 'software de código aberto.', 'freeware.', 'firmware.'],
    correta: 3,
    comentario:
      'Freeware é gratuito por tempo indeterminado, mas não concede as liberdades do software livre nem abre o código. Shareware é versão de avaliação, limitada por tempo ou recursos. Software livre e código aberto pressupõem acesso ao código. Firmware é software embarcado no hardware.',
  },

  /* ---------- inf-windows ---------- */
  {
    id: 'inf-windows-q01',
    temaId: 'inf-windows',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'No Windows 11, o atalho de teclado que bloqueia imediatamente o computador, exigindo a senha para voltar à sessão, é:',
    alternativas: ['Win+L.', 'Win+D.', 'Win+M.', 'Win+E.', 'Alt+F4.'],
    correta: 0,
    comentario:
      'Win+L bloqueia o computador (ou permite trocar de conta), conforme o suporte da Microsoft. Win+D mostra a área de trabalho, Win+M minimiza as janelas, Win+E abre o Explorador e Alt+F4 fecha a janela ativa.',
  },
  {
    id: 'inf-windows-q02',
    temaId: 'inf-windows',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'No Explorador de Arquivos do Windows, para excluir um arquivo do disco local sem enviá-lo para a Lixeira, utiliza-se:',
    alternativas: ['Delete.', 'F2.', 'Shift+Delete.', 'Alt+Delete.', 'Ctrl+Z.'],
    correta: 2,
    comentario:
      'Shift+Delete exclui definitivamente, sem passar pela Lixeira. Delete sozinho envia para a Lixeira; F2 renomeia; Ctrl+Z desfaz a última ação.',
  },
  {
    id: 'inf-windows-q03',
    temaId: 'inf-windows',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'No Windows, ao excluir da área de trabalho o atalho de um programa, o programa é desinstalado e seus arquivos são apagados do computador.',
    gabaritoCE: false,
    comentario:
      'Errado. O atalho (.lnk) apenas aponta para o arquivo ou programa original. Excluí-lo remove só o ponteiro; o programa continua instalado. Desinstalar exige Configurações > Aplicativos.',
  },
  {
    id: 'inf-windows-q04',
    temaId: 'inf-windows',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado:
      'Ana arrasta com o botão esquerdo do mouse, sem pressionar nenhuma tecla, o arquivo laudo.pdf da pasta Documentos (unidade C:) para um pen drive (unidade E:). No Windows, o resultado padrão é:',
    alternativas: [
      'o arquivo é movido para o pen drive.',
      'é criado um atalho para o arquivo no pen drive.',
      'o arquivo é excluído definitivamente da origem.',
      'o Windows exige que se escolha entre mover e copiar.',
      'o arquivo é copiado para o pen drive e permanece em Documentos.',
    ],
    correta: 4,
    comentario:
      'Arrastar para outra unidade copia; arrastar dentro da mesma unidade move. Para mover entre unidades, segura-se Shift; para criar atalho, Alt; Ctrl força a cópia.',
  },
  {
    id: 'inf-windows-q05',
    temaId: 'inf-windows',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Assinale o nome de arquivo que o Windows NÃO aceita:',
    alternativas: [
      'laudo_pericial-2026.docx',
      'laudo:final.docx',
      'laudo (versão 2).docx',
      'Laudo Final.DOCX',
      'laudo.final.docx',
    ],
    correta: 1,
    comentario:
      'Os caracteres \\ / : * ? " < > | são proibidos em nomes de arquivos do Windows; o dois-pontos invalida “laudo:final.docx”. Espaços, parênteses, acentos, hífen, sublinhado e mais de um ponto são permitidos.',
  },
  {
    id: 'inf-windows-q06',
    temaId: 'inf-windows',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No Windows 11, o atalho Win+V abre o histórico da área de transferência, recurso que precisa estar ativado para guardar vários itens copiados.',
    gabaritoCE: true,
    comentario:
      'Certo. Segundo o suporte da Microsoft, Win+V abre o histórico da área de transferência, que deve ser ativado antes. Sem ele, a área de transferência guarda apenas o último item copiado.',
  },
  {
    id: 'inf-windows-q07',
    temaId: 'inf-windows',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Um programa travou e o usuário quer encerrá-lo. O atalho que abre diretamente o Gerenciador de Tarefas no Windows é:',
    alternativas: ['Ctrl+Alt+Tab.', 'Ctrl+Shift+Esc.', 'Win+Tab.', 'Alt+F4.', 'Win+R.'],
    correta: 1,
    comentario:
      'Ctrl+Shift+Esc abre o Gerenciador de Tarefas. Win+Tab abre a Visão de Tarefas (janelas e áreas de trabalho virtuais), Alt+F4 fecha a janela ativa e Win+R abre Executar.',
  },
  {
    id: 'inf-windows-q08',
    temaId: 'inf-windows',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'No Windows 11, para selecionar com o mouse apenas uma região da tela e copiá-la para a área de transferência, o atalho é:',
    alternativas: ['Win+PrtScn.', 'Win+Tab.', 'Win+X.', 'Win+Shift+S.', 'Win+. (ponto).'],
    correta: 3,
    comentario:
      'Win+Shift+S abre a seleção de região e copia a captura para a área de transferência. Win+PrtScn captura a tela inteira e salva o arquivo em Imagens > Capturas de Tela; Win+X abre o menu Link Rápido; Win+. abre os emojis.',
  },
  {
    id: 'inf-windows-q09',
    temaId: 'inf-windows',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Um vídeo de 6 GB não pôde ser copiado para um pen drive, embora houvesse 20 GB livres nele. A causa mais provável é o pen drive estar formatado com o sistema de arquivos:',
    alternativas: ['FAT32.', 'NTFS.', 'exFAT.', 'ext4.', 'APFS.'],
    correta: 0,
    comentario:
      'O FAT32 limita cada arquivo a 4 GB, mesmo havendo espaço. NTFS (padrão do Windows) e exFAT (comum em pen drives) aceitam arquivos grandes; ext4 e APFS são sistemas do Linux e do macOS.',
  },
  {
    id: 'inf-windows-q10',
    temaId: 'inf-windows',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No Windows 10 e no Windows 11, na configuração padrão, os arquivos excluídos de um pen drive com a tecla Delete ficam disponíveis na Lixeira para posterior restauração.',
    gabaritoCE: false,
    comentario:
      'Errado. Por padrão, unidades removíveis (pen drive, cartão de memória) não têm Lixeira: o Windows pede confirmação para excluir o item permanentemente. O mesmo vale para unidades de rede, cujos arquivos não vão para a Lixeira do computador. A Lixeira atende às unidades internas.',
  },
  {
    id: 'inf-windows-q11',
    temaId: 'inf-windows',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado: 'Sobre atalhos de teclado do Windows 11, todas as associações estão corretas, EXCETO:',
    alternativas: [
      'Win+E — abre o Explorador de Arquivos.',
      'Win+R — abre a caixa de diálogo Executar.',
      'Win+I — abre as Configurações.',
      'Alt+Tab — alterna entre as janelas abertas.',
      'Win+M — mostra ou oculta a área de trabalho, alternando o estado das janelas.',
    ],
    correta: 4,
    comentario:
      'Win+M minimiza todas as janelas; quem “mostra ou oculta” a área de trabalho, alternando, é o Win+D. As demais associações seguem a tabela oficial de atalhos da Microsoft.',
  },

  /* ---------- inf-linux ---------- */
  {
    id: 'inf-linux-q01',
    temaId: 'inf-linux',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'No terminal do Linux, o comando que exibe o caminho completo do diretório em que o usuário se encontra é:',
    alternativas: ['ls', 'cd', 'pwd', 'cat', 'whoami'],
    correta: 2,
    comentario:
      'pwd (print working directory) mostra o diretório atual. ls lista o conteúdo, cd muda de diretório, cat exibe o conteúdo de arquivos e whoami mostra o nome do usuário logado.',
  },
  {
    id: 'inf-linux-q02',
    temaId: 'inf-linux',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado: 'Após o comando chmod 754 relatorio.sh, as permissões do arquivo, na ordem dono, grupo e outros, ficam:',
    alternativas: ['rwxrwxr--', 'rwxr--r-x', 'rw-r-xr--', 'rwxr-xr--', 'r-xrwxr--'],
    correta: 3,
    comentario:
      'Some r = 4, w = 2, x = 1 em cada dígito: 7 = rwx (dono), 5 = r-x (grupo), 4 = r-- (outros). Resultado: rwxr-xr--. As outras opções trocam a ordem dos dígitos ou somam errado.',
  },
  {
    id: 'inf-linux-q03',
    temaId: 'inf-linux',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'No Linux, os nomes Relatorio.txt e relatorio.txt referem-se ao mesmo arquivo, pois o sistema não diferencia letras maiúsculas de minúsculas.',
    gabaritoCE: false,
    comentario:
      'Errado. O Linux é case-sensitive: os dois nomes designam arquivos diferentes, que podem coexistir no mesmo diretório. Essa é uma diferença clássica em relação ao Windows.',
  },
  {
    id: 'inf-linux-q04',
    temaId: 'inf-linux',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'Em distribuições Linux, os arquivos de configuração do sistema ficam tradicionalmente no diretório:',
    alternativas: ['/etc', '/home', '/tmp', '/dev', '/boot'],
    correta: 0,
    comentario:
      '/etc guarda as configurações. /home tem as pastas pessoais dos usuários, /tmp os temporários, /dev os arquivos de dispositivos e /boot os arquivos de inicialização (como o kernel).',
  },
  {
    id: 'inf-linux-q05',
    temaId: 'inf-linux',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Para renomear o arquivo rascunho.txt para laudo.txt, no mesmo diretório, utiliza-se no terminal do Linux:',
    alternativas: [
      'cp rascunho.txt laudo.txt',
      'rm rascunho.txt laudo.txt',
      'mv rascunho.txt laudo.txt',
      'ren rascunho.txt laudo.txt',
      'cd rascunho.txt laudo.txt',
    ],
    correta: 2,
    comentario:
      'O mv move ou renomeia. O cp faria uma cópia, mantendo o original; o rm apagaria os arquivos; ren é comando do prompt do Windows; cd só muda de diretório.',
  },
  {
    id: 'inf-linux-q06',
    temaId: 'inf-linux',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No Linux, o root é o superusuário, com permissões irrestritas, e o comando sudo permite que um usuário autorizado execute um comando com privilégios administrativos.',
    gabaritoCE: true,
    comentario:
      'Certo. O root administra todo o sistema. O sudo permite que usuários autorizados executem comandos como superusuário sem entrar na conta root, o que aplica o princípio do privilégio mínimo.',
  },
  {
    id: 'inf-linux-q07',
    temaId: 'inf-linux',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Um usuário tentou apagar o diretório antigos, que contém arquivos, com o comando rmdir antigos, e recebeu erro. O comando que remove o diretório com todo o seu conteúdo é:',
    alternativas: ['rmdir -a antigos', 'del antigos', 'mv antigos', 'ls -r antigos', 'rm -r antigos'],
    correta: 4,
    comentario:
      'rmdir só remove diretório vazio. rm -r remove recursivamente o diretório e o que houver dentro dele (use com cuidado). del é do Windows; mv sem destino é inválido; ls apenas lista.',
  },

  /* ---------- inf-word ---------- */
  {
    id: 'inf-word-q01',
    temaId: 'inf-word',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'No Microsoft Word em português (Microsoft 365), os atalhos para negrito, itálico e sublinhado são, respectivamente:',
    alternativas: [
      'Ctrl+B, Ctrl+I e Ctrl+U.',
      'Ctrl+N, Ctrl+I e Ctrl+S.',
      'Ctrl+N, Ctrl+T e Ctrl+S.',
      'Ctrl+B, Ctrl+I e Ctrl+S.',
      'Ctrl+G, Ctrl+I e Ctrl+U.',
    ],
    correta: 1,
    comentario:
      'No Word em português: Ctrl+N negrito, Ctrl+I itálico, Ctrl+S sublinhado (e Ctrl+B salva). Ctrl+B, Ctrl+I e Ctrl+U é a combinação do LibreOffice Writer e do Word em inglês.',
  },
  {
    id: 'inf-word-q02',
    temaId: 'inf-word',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Para gerar um sumário automático, que se atualiza com a numeração das páginas, o usuário do Word deve formatar os títulos com estilos de título e usar o recurso da guia:',
    alternativas: ['Inserir.', 'Referências.', 'Revisão.', 'Correspondências.', 'Layout.'],
    correta: 1,
    comentario:
      'O Sumário fica na guia Referências, junto com notas de rodapé e citações. Ele é montado a partir dos estilos Título 1, Título 2 etc. Revisão tem ortografia e Controlar Alterações; Correspondências, a mala direta.',
  },
  {
    id: 'inf-word-q03',
    temaId: 'inf-word',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'No Word, o atalho Ctrl+Enter insere uma quebra de página, fazendo o texto seguinte começar na próxima página.',
    gabaritoCE: true,
    comentario:
      'Certo. Pelo suporte da Microsoft, Ctrl+Enter insere quebra de página (o mesmo vale no Writer). Shift+Enter quebra só a linha, e Enter cria novo parágrafo.',
  },
  {
    id: 'inf-word-q04',
    temaId: 'inf-word',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Um relatório da comissão de perícias está todo em orientação retrato, mas uma tabela larga exige que uma única página fique em paisagem. A forma correta de fazer isso no Word (Microsoft 365) é:',
    alternativas: [
      'inserir quebras de página antes e depois da tabela e girar a tabela em 90 graus.',
      'aplicar o estilo Título 1 à página da tabela.',
      'inserir uma quebra de coluna antes da tabela.',
      'inserir quebras de seção antes e depois da página e alterar a orientação só dessa seção.',
      'alterar a orientação em Layout, que por padrão muda apenas a página onde está o cursor.',
    ],
    correta: 3,
    comentario:
      'Orientação, margens e cabeçalhos podem variar por seção. Com quebras de seção (Layout > Quebras) isolando a página, muda-se a orientação só dela. Quebra de página não cria seção; sem seções, a orientação vale para o documento todo.',
  },
  {
    id: 'inf-word-q05',
    temaId: 'inf-word',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No Word, o recurso Mala Direta, usado para gerar cartas personalizadas a partir de uma lista de destinatários, encontra-se na guia Revisão.',
    gabaritoCE: false,
    comentario:
      'Errado. A Mala Direta fica na guia Correspondências, com envelopes e etiquetas. A guia Revisão reúne ortografia, contagem de palavras, comentários e Controlar Alterações.',
  },
  {
    id: 'inf-word-q06',
    temaId: 'inf-word',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado: 'No Word, o triplo clique com o botão esquerdo do mouse sobre um trecho do texto seleciona:',
    alternativas: ['o parágrafo.', 'a palavra.', 'a linha.', 'a frase.', 'o documento inteiro.'],
    correta: 0,
    comentario:
      'Duplo clique seleciona a palavra; triplo clique, o parágrafo. Ctrl+clique seleciona a frase, e um clique na margem esquerda seleciona a linha.',
  },
  {
    id: 'inf-word-q07',
    temaId: 'inf-word',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'No Word para Windows, as teclas F7 e F12, pressionadas sozinhas, executam, respectivamente:',
    alternativas: [
      'Salvar como e Imprimir.',
      'Ajuda e Salvar.',
      'Localizar e Substituir.',
      'Repetir a última ação e Fechar o documento.',
      'abrir o painel Editor (ortografia e gramática) e Salvar como.',
    ],
    correta: 4,
    comentario:
      'Pelo suporte da Microsoft, F7 exibe o painel Editor para verificar ortografia e gramática, e F12 abre a caixa Salvar como. Repetir a última ação é F4; Ajuda é F1.',
  },
  {
    id: 'inf-word-q08',
    temaId: 'inf-word',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Um documento do Word contém macros que automatizam o preenchimento de campos. Para que as macros sejam preservadas em um documento comum (não modelo), ele deve ser salvo no formato:',
    alternativas: ['.docx', '.dotx', '.docm', '.odt', '.rtf'],
    correta: 2,
    comentario:
      'O “m” indica macros: .docm é documento com macros. O .docx não guarda macros; .dotx é modelo sem macros; .odt é o formato do Writer; .rtf é formato de texto formatado sem macros do Word.',
  },
  {
    id: 'inf-word-q09',
    temaId: 'inf-word',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'No LibreOffice Writer, o atalho Ctrl+B aplica negrito ao texto selecionado, ao passo que, no Word em português, esse mesmo atalho salva o documento.',
    gabaritoCE: true,
    comentario:
      'Certo. A ajuda do LibreOffice traz Ctrl+B como negrito; a tabela da Microsoft em português traz Ctrl+B como salvar (no Word, negrito é Ctrl+N). Sempre confira de qual programa o item fala.',
  },
  {
    id: 'inf-word-q10',
    temaId: 'inf-word',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'No Word, para aplicar a formatação de um título a vários outros títulos espalhados pelo documento, sem reativar a ferramenta a cada uso, o usuário deve:',
    alternativas: [
      'clicar uma vez no Pincel de Formatação e clicar em cada título.',
      'usar Ctrl+Z após cada aplicação da formatação.',
      'usar Localizar e Substituir sem nenhuma formatação.',
      'clicar duas vezes no Pincel de Formatação e clicar em cada título, encerrando com Esc.',
      'copiar o título com Ctrl+C e colar sobre cada título com Ctrl+V.',
    ],
    correta: 3,
    comentario:
      'O duplo clique no Pincel de Formatação (Página Inicial) o mantém ativo para várias aplicações; Esc encerra. Um clique aplica a formatação uma única vez. Copiar e colar substituiria o texto, não só a formatação.',
  },
];
