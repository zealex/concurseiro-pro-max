import type { ResumoTema } from '../../../types';

const MS_WINDOWS = 'Suporte da Microsoft — Atalhos de teclado no Windows (Windows 11 e 10): https://support.microsoft.com/pt-br/windows/atalhos-de-teclado-no-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec';
const MS_WORD = 'Suporte da Microsoft — Atalhos de teclado no Word (Microsoft 365): https://support.microsoft.com/pt-br/office/atalhos-de-teclado-no-word-95ef89dd-7142-4b50-afb2-f762f663ceb2';
const MS_EXCEL = 'Suporte da Microsoft — Atalhos de teclado no Excel (Microsoft 365): https://support.microsoft.com/pt-br/office/atalhos-de-teclado-no-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f';
const LO_GERAL = 'Ajuda do LibreOffice — Teclas de atalho gerais: https://help.libreoffice.org/latest/pt-BR/text/shared/04/01010000.html';

export const RESUMOS_1: ResumoTema[] = [
  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-hardware',
    titulo: 'Hardware, software e armazenamento',
    resumo:
      'A banca cobra a diferença entre memórias (RAM, ROM, cache), entre HD e SSD, a classificação de periféricos, as unidades de medida e os tipos de licença de software (livre, freeware, shareware).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Hardware** é a parte física (processador, memórias, placa-mãe, discos, periféricos). **Software** é a parte lógica: programas e sistemas. O **processador (CPU)** executa as instruções e tem a **unidade de controle**, a **ULA** (unidade lógica e aritmética) e os **registradores**.\n\n' +
          'A **memória RAM** é a memória principal de trabalho: guarda os programas e dados em uso e é **volátil** (perde o conteúdo ao desligar). A **ROM** é **não volátil** e guarda o **firmware** (BIOS/UEFI), que testa o hardware (POST) e inicia o carregamento do sistema. A **memória cache** fica entre a CPU e a RAM: é pequena, muito rápida e guarda os dados usados com mais frequência.\n\n' +
          'A **memória secundária** (armazenamento) é permanente: **HD** (magnético, com partes móveis), **SSD** (memória flash, sem partes móveis, mais rápido e resistente a impacto), pen drive, cartão SD e mídias ópticas.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Hierarquia de memória (do mais rápido ao mais lento)',
          colunas: ['Memória', 'Volátil?', 'O que guardar de prova'],
          linhas: [
            ['Registradores', 'Sim', 'Dentro da CPU; os mais rápidos e os menores'],
            ['Cache (L1, L2, L3)', 'Sim', 'Entre CPU e RAM; reduz a espera do processador'],
            ['RAM', 'Sim', 'Memória principal; mais RAM = mais programas abertos com fluidez'],
            ['ROM / firmware', 'Não', 'BIOS/UEFI; inicializa o hardware'],
            ['SSD / HD', 'Não', 'Armazenamento permanente; SSD é mais rápido que HD'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Periféricos e licenças',
          colunas: ['Categoria', 'Exemplos', 'Pegadinha'],
          linhas: [
            ['Entrada', 'Teclado, mouse, scanner, microfone, webcam', 'Scanner é de entrada (envia a imagem ao computador)'],
            ['Saída', 'Monitor, impressora, caixa de som', 'Projetor é de saída'],
            ['Entrada e saída', 'Tela sensível ao toque, multifuncional, headset com microfone', 'Touchscreen exibe e recebe dados'],
            ['Software livre', 'Linux, LibreOffice', 'Liberdade de usar, estudar, modificar e redistribuir; pode ser vendido'],
            ['Freeware', 'Programa gratuito de código fechado', 'Gratuito não é sinônimo de livre'],
            ['Shareware', 'Versão de avaliação', 'Limitado por tempo ou por recursos'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**1 byte = 8 bits.** Nas provas, adota-se a convenção binária: 1 KB = 1.024 bytes; 1 MB = 1.024 KB; 1 GB = 1.024 MB; 1 TB = 1.024 GB.',
          '**Software básico** (sistema operacional, drivers, firmware) × **aplicativo** (editor de texto, navegador) × **utilitário** (antivírus, compactador).',
          '**Driver** é o software que permite ao sistema operacional controlar um dispositivo específico.',
          '**USB** permite conectar e desconectar com o computador ligado (*hot swap*), e o dispositivo é reconhecido automaticamente (*plug and play*); **HDMI** transmite vídeo e áudio digitais; **VGA** é vídeo analógico; **RJ-45** é o conector do cabo de rede Ethernet.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo FUNDATEC',
        enunciado:
          'Um computador ficou lento ao manter abertos o prontuário eletrônico, o navegador com várias guias e uma planilha. Qual componente, ampliado, tende a resolver o problema?',
        resolucao:
          'A **memória RAM**, que guarda os programas em execução. Aumentar o HD ou o SSD amplia o espaço de armazenamento, mas não a memória de trabalho.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Software livre não precisa ser gratuito.** O que o define são as quatro liberdades (executar, estudar e adaptar — o que exige acesso ao código-fonte —, redistribuir e distribuir versões modificadas). E **freeware** é gratuito, mas costuma ter código fechado.',
      },
    ],
    fontes: [
      'Free Software Foundation — O que é o software livre?: https://www.gnu.org/philosophy/free-sw.pt-br.html',
      MS_WINDOWS,
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-windows',
    titulo: 'Windows 10/11: arquivos, pastas e atalhos',
    resumo:
      'O Windows cai em quase toda prova de Informática: atalhos com a tecla Windows, Lixeira e exclusão definitiva, copiar × mover ao arrastar, atalhos (.lnk), nomes de arquivos e sistemas de arquivos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **Explorador de Arquivos** (Win+E) organiza **unidades**, **pastas** e **arquivos**. O caminho completo de um arquivo indica a unidade e as pastas, separadas por barra invertida (por exemplo, C:\\Usuários\\Ana\\Documentos\\laudo.docx). A **extensão** (.docx, .xlsx, .pdf) indica o tipo do arquivo e, por padrão, fica oculta para tipos conhecidos. No **Windows 11**, para exibi-la: Explorador de Arquivos > **Exibir > Mostrar > Extensões de nome de arquivo**; no **Windows 10**: guia **Exibir**, grupo Exibir/ocultar, caixa **Extensões de nome de arquivo**.\n\n' +
          'Ao excluir um arquivo do disco interno com a tecla Delete, ele vai para a **Lixeira** e pode ser restaurado. Com **Shift+Delete**, a exclusão é **definitiva**, sem passar pela Lixeira. Por padrão, **pen drives e cartões de memória** não têm Lixeira (o Windows pede confirmação para excluir permanentemente), e arquivos de **unidades de rede** também não vão para a Lixeira do computador.\n\n' +
          'Um **atalho** (arquivo .lnk) apenas aponta para o original: excluir o atalho não apaga o arquivo; excluir ou mover o original deixa o atalho “quebrado”.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Atalhos do Windows mais cobrados (suporte da Microsoft)',
          colunas: ['Atalho', 'Ação'],
          linhas: [
            ['Win+E', 'Abre o Explorador de Arquivos'],
            ['Win+D', 'Mostra ou oculta a área de trabalho'],
            ['Win+M', 'Minimiza todas as janelas'],
            ['Win+L', 'Bloqueia o computador (ou troca de conta)'],
            ['Win+R', 'Abre a caixa Executar'],
            ['Win+I', 'Abre as Configurações'],
            ['Win+V', 'Histórico da área de transferência (precisa ser ativado)'],
            ['Win+Shift+S', 'Captura uma região da tela e copia para a área de transferência'],
            ['Win+Tab', 'Visão de Tarefas'],
            ['Win+Ctrl+D', 'Cria nova área de trabalho virtual'],
            ['Win+X', 'Menu Link Rápido (o mesmo do clique direito no Iniciar)'],
            ['Win+. (ponto)', 'Painel de emojis'],
            ['Alt+Tab', 'Alterna entre janelas abertas'],
            ['Alt+F4', 'Fecha a janela ativa'],
            ['Ctrl+Shift+Esc', 'Abre o Gerenciador de Tarefas'],
            ['F2', 'Renomeia o item selecionado'],
            ['Alt+Enter', 'Propriedades do item selecionado'],
            ['Ctrl+Shift+N', 'Nova pasta (no Explorador)'],
            ['Shift+Delete', 'Exclui definitivamente, sem Lixeira'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Arrastar com o mouse',
          colunas: ['Situação', 'Resultado'],
          linhas: [
            ['Arrastar para pasta da mesma unidade', 'Move'],
            ['Arrastar para outra unidade (ex.: C: → pen drive)', 'Copia'],
            ['Arrastar segurando Ctrl', 'Copia'],
            ['Arrastar segurando Shift', 'Move'],
            ['Arrastar segurando Alt', 'Cria atalho'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Nomes de arquivos** não podem conter os caracteres \\ / : * ? " < > | (barra invertida, barra, dois-pontos, asterisco, interrogação, aspas, menor, maior e barra vertical).',
          '**NTFS** é o sistema de arquivos padrão do Windows (permissões, arquivos grandes). **FAT32** limita cada arquivo a 4 GB; **exFAT** é usado em pen drives e cartões para arquivos grandes.',
          '**Ctrl+Alt+Del** abre a tela de opções de segurança (bloquear, trocar de usuário, sair, alterar senha, Gerenciador de Tarefas).',
          '**Conta padrão × administrador**: usar conta padrão no dia a dia limita o estrago de um malware (princípio do privilégio mínimo, CERT.br).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Cebraspe',
        enunciado:
          'Item: “No Windows 11, ao arrastar um arquivo da pasta Documentos (unidade C:) para um pen drive, o arquivo é movido, deixando de existir na origem.”',
        resolucao:
          '**Errado.** Arrastar para **outra unidade** copia; o arquivo continua em Documentos. Para mover, segura-se Shift ao arrastar.',
      },
      {
        tipo: 'atencao',
        texto:
          'Três pegadinhas campeãs: (1) **Shift+Delete** não passa pela Lixeira; (2) apagar o **atalho** não apaga o original; (3) **Win+D** mostra a área de trabalho e **Win+M** minimiza — a banca troca um pelo outro. O **Win+V** só mostra o histórico depois de ativado.',
      },
    ],
    fontes: [
      MS_WINDOWS,
      'Suporte da Microsoft — Extensões de nome de arquivo comuns no Windows: https://support.microsoft.com/pt-br/windows/extens%C3%B5es-de-nome-de-arquivo-comuns-no-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01',
      'CERT.br — Cartilha de Segurança para Internet, fascículo Códigos Maliciosos (jul./2023): https://cartilha.cert.br/fasciculos/',
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-linux',
    titulo: 'Linux (noções)',
    resumo:
      'Cobra-se o básico: Linux é software livre, diferencia maiúsculas de minúsculas, tem o superusuário root e comandos de terminal (ls, cd, pwd, cp, mv, rm, mkdir, chmod) com permissões rwx.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Linux** é, a rigor, o **núcleo (kernel)**; as **distribuições** (Ubuntu, Debian, Fedora, Mint) juntam o kernel a programas e a um ambiente gráfico (GNOME, KDE). É **software livre** (licença GPL). O sistema é **multiusuário** e **multitarefa**.\n\n' +
          'O Linux é **case-sensitive**: Laudo.txt e laudo.txt são arquivos diferentes. Arquivos cujo nome começa com ponto (.bashrc) são **ocultos**. O separador de diretórios é a barra comum (/), e tudo parte da **raiz /**.\n\n' +
          'O **root** é o superusuário, com poder total. No terminal, o prompt costuma terminar em **$** para usuário comum e **#** para root. O **sudo** executa um comando com privilégios de administrador.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Comandos mais cobrados',
          colunas: ['Comando', 'Função', 'Exemplo'],
          linhas: [
            ['pwd', 'Mostra o diretório atual', 'pwd'],
            ['ls', 'Lista arquivos (-l detalhado, -a inclui ocultos)', 'ls -la'],
            ['cd', 'Muda de diretório (cd .. sobe um nível)', 'cd /home/ana'],
            ['mkdir / rmdir', 'Cria / remove diretório (rmdir só se vazio)', 'mkdir laudos'],
            ['cp', 'Copia', 'cp a.txt b.txt'],
            ['mv', 'Move ou renomeia', 'mv velho.txt novo.txt'],
            ['rm', 'Remove arquivo (rm -r remove diretório e conteúdo)', 'rm -r pasta'],
            ['cat', 'Exibe o conteúdo de arquivo', 'cat notas.txt'],
            ['grep', 'Procura texto dentro de arquivos', 'grep CID laudo.txt'],
            ['chmod', 'Altera permissões', 'chmod 755 script.sh'],
            ['chown', 'Altera o dono do arquivo', 'chown ana arquivo'],
            ['ps / top / kill', 'Lista processos / monitora / encerra processo', 'kill 1234'],
            ['man', 'Abre o manual de um comando', 'man ls'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Diretórios clássicos',
          colunas: ['Diretório', 'Conteúdo'],
          linhas: [
            ['/', 'Raiz de todo o sistema'],
            ['/home', 'Pastas pessoais dos usuários'],
            ['/root', 'Pasta pessoal do superusuário'],
            ['/etc', 'Arquivos de configuração'],
            ['/bin e /sbin', 'Programas essenciais'],
            ['/tmp', 'Arquivos temporários'],
            ['/dev', 'Arquivos de dispositivos'],
            ['/var', 'Dados variáveis, como logs'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Permissões em número',
        enunciado: 'Qual permissão resulta de chmod 754 arquivo?',
        resolucao:
          'Cada dígito soma r = 4, w = 2, x = 1, na ordem **dono, grupo, outros**. 7 = rwx (dono); 5 = r-x (grupo); 4 = r-- (outros). Resultado: **rwxr-xr--**.',
      },
      {
        tipo: 'atencao',
        texto:
          '**mv** também **renomeia**: é o comando que as bancas cobram para isso (o rename, presente em algumas distribuições, renomeia em lote e não é o padrão cobrado). **rmdir** não apaga diretório com conteúdo; para isso, **rm -r**. E lembre: **cd ..** sobe um nível; **cd ~** vai para a pasta pessoal.',
      },
    ],
    fontes: [
      'GNU Coreutils — manual oficial: https://www.gnu.org/software/coreutils/manual/coreutils.html',
      'Free Software Foundation — O que é o software livre?: https://www.gnu.org/philosophy/free-sw.pt-br.html',
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-word',
    titulo: 'Editor de textos (Word/Writer)',
    resumo:
      'As bancas cobram atalhos do Word em português (que diferem do Writer), a localização dos recursos nas guias (Sumário, Controlar Alterações, Mala Direta, Quebras) e formatos de arquivo.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'No **Word do Microsoft 365** em português, os atalhos seguem as iniciais em português: **Ctrl+N** = Negrito, **Ctrl+I** = Itálico, **Ctrl+S** = Sublinhado, **Ctrl+B** = salvar. No **LibreOffice Writer**, os atalhos gerais seguem o padrão internacional: **Ctrl+B** = negrito, **Ctrl+I** = itálico, **Ctrl+U** = sublinhado, **Ctrl+S** = salvar, **Ctrl+N** = novo documento. Essa diferença é a pegadinha mais repetida.\n\n' +
          'O **Enter** cria novo parágrafo; **Shift+Enter** quebra a linha sem criar parágrafo; **Ctrl+Enter** insere **quebra de página** (nos dois editores). Para ter uma página em paisagem no meio de documento em retrato, usa-se **quebra de seção** (Layout > Quebras).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Atalhos do Word (Microsoft 365, em português)',
          colunas: ['Atalho', 'Ação'],
          linhas: [
            ['Ctrl+N / Ctrl+I / Ctrl+S', 'Negrito / itálico / sublinhado'],
            ['Ctrl+B', 'Salvar'],
            ['F12', 'Salvar como'],
            ['Ctrl+O', 'Novo documento'],
            ['Ctrl+P', 'Imprimir'],
            ['Ctrl+E / Ctrl+J', 'Centralizar / justificar'],
            ['Ctrl+K', 'Inserir hiperlink'],
            ['Ctrl+Enter', 'Quebra de página'],
            ['Shift+F3', 'Alterna maiúsculas, minúsculas e iniciais maiúsculas'],
            ['F7', 'Painel Editor (ortografia e gramática)'],
            ['Ctrl+Z / Ctrl+Y', 'Desfazer / refazer'],
            ['Ctrl+1 / Ctrl+2 / Ctrl+5', 'Espaçamento simples / duplo / 1,5'],
            ['Ctrl+W', 'Fechar o documento'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Onde fica cada recurso (faixa de opções do Word)',
          colunas: ['Guia', 'Recursos cobrados'],
          linhas: [
            ['Página Inicial', 'Fonte, parágrafo, estilos, Pincel de Formatação, Localizar/Substituir'],
            ['Inserir', 'Tabela, imagem, cabeçalho e rodapé, número de página, quebra de página, hiperlink'],
            ['Design', 'Temas, marca d’água, cor e bordas da página'],
            ['Layout', 'Margens, orientação, tamanho, colunas, quebras (página e seção)'],
            ['Referências', 'Sumário, notas de rodapé, citações'],
            ['Correspondências', 'Mala direta, envelopes, etiquetas'],
            ['Revisão', 'Ortografia, contar palavras, comentários, Controlar Alterações'],
            ['Exibir', 'Modos de exibição, régua, zoom'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Seleção com mouse**: duplo clique seleciona a palavra; triplo clique, o parágrafo; Ctrl+clique, a frase; clique na margem esquerda, a linha.',
          '**Pincel de Formatação**: copia só a formatação. Um clique aplica uma vez; **duplo clique** mantém o pincel ativo para várias aplicações (Esc encerra).',
          '**Sumário automático** depende de os títulos estarem formatados com os estilos Título 1, Título 2…',
          '**Formatos**: .docx (padrão), .docm (com macros), .dotx (modelo), .odt (Writer, padrão ODF), .pdf (o Word salva e o Writer exporta em PDF).',
          '**Ctrl+1, Ctrl+2, Ctrl+5**: no Word, espaçamento simples, duplo e 1,5; no **Writer**, aplicam os estilos de parágrafo Título 1, Título 2 e Título 5.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Objetiva',
        enunciado: 'No Word em português, qual atalho salva o documento?',
        resolucao:
          '**Ctrl+B**, conforme a tabela de atalhos do suporte da Microsoft em português. Ctrl+S, no Word em português, aplica **sublinhado**. Já no Writer, Ctrl+S salva e Ctrl+B aplica negrito.',
      },
      {
        tipo: 'atencao',
        texto:
          'Antes de responder sobre atalho, veja **qual programa** o enunciado cita. Ctrl+B: salvar no Word em português, negrito no Writer. Ctrl+S: sublinhado no Word em português, salvar no Writer. Ctrl+N: negrito no Word em português, novo documento no Writer.',
      },
    ],
    fontes: [MS_WORD, LO_GERAL, 'Ajuda do LibreOffice — Teclas de atalho do Writer: https://help.libreoffice.org/latest/pt-BR/text/swriter/04/01020000.html'],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-excel',
    titulo: 'Planilhas (Excel/Calc): fórmulas, referências e funções',
    resumo:
      'É o tema mais cobrado de Informática: referências relativas, absolutas e mistas ao copiar fórmulas, funções em português (SOMA, MÉDIA, SE, CONT.SE, SOMASE, PROCV), precedência de operadores, mensagens de erro e atalhos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Toda fórmula começa com **=**. No Excel em português, o separador de argumentos é o **ponto e vírgula (;)** e o de intervalo, os **dois-pontos (:)**. Assim, **=SOMA(A1:A4)** soma A1, A2, A3 e A4, enquanto **=SOMA(A1;A4)** soma **apenas** A1 e A4.\n\n' +
          'Ao **copiar** uma fórmula, as referências **relativas** (A1) se ajustam ao deslocamento; as **absolutas** ($A$1) ficam fixas; nas **mistas**, fica fixo só o que tem cifrão: **$A1** fixa a coluna, **A$1** fixa a linha. A tecla **F4**, com a referência selecionada na fórmula, alterna A1 → $A$1 → A$1 → $A1.\n\n' +
          'Uma planilha do Excel atual tem **1.048.576 linhas** e **16.384 colunas** (até a coluna XFD). Arquivos: **.xlsx** (padrão), **.xlsm** (com macros), **.xltx** (modelo), **.csv** (texto separado), **.ods** (Calc).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Copiando fórmula com referência mista',
        enunciado: 'A célula C2 contém =$A2*B$1. A fórmula é copiada para D4. O que aparece em D4?',
        resolucao:
          'De C2 para D4: **+1 coluna** e **+2 linhas**. $A2 → **$A4** (coluna travada, linha anda 2). B$1 → **C$1** (coluna anda 1, linha travada). Resultado: **=$A4*C$1**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Funções essenciais (Excel em português; argumentos com ;)',
          colunas: ['Função', 'Sintaxe', 'O que faz / pegadinha'],
          linhas: [
            ['SOMA', '=SOMA(A1:A10)', 'Soma o intervalo; ; separa células avulsas'],
            ['MÉDIA', '=MÉDIA(A1:A10)', 'Ignora células vazias e com texto; zero entra na conta'],
            ['MÁXIMO / MÍNIMO', '=MÁXIMO(A1:A10)', 'Maior / menor valor'],
            ['MAIOR / MENOR', '=MAIOR(A1:A10;2)', 'k-ésimo maior / menor (2º maior, no exemplo)'],
            ['MED / MODO', '=MED(A1:A10)', 'Mediana / valor mais frequente'],
            ['CONT.NÚM', '=CONT.NÚM(A1:A10)', 'Conta células com números (datas contam)'],
            ['CONT.VALORES', '=CONT.VALORES(A1:A10)', 'Conta células não vazias (texto também)'],
            ['CONTAR.VAZIO', '=CONTAR.VAZIO(A1:A10)', 'Conta células vazias'],
            ['CONT.SE', '=CONT.SE(B2:B20;">=7")', 'Conta células que atendem a um critério'],
            ['SOMASE', '=SOMASE(A2:A20;"Clínica";C2:C20)', 'Soma C onde A = “Clínica” (critério antes da soma)'],
            ['CONT.SES / SOMASES', '=SOMASES(C2:C20;A2:A20;"Clínica";B2:B20;">10")', 'Vários critérios; em SOMASES o intervalo de soma vem primeiro'],
            ['SE', '=SE(B2>=7;"Aprovado";"Reprovado")', 'Teste lógico; valor se verdadeiro; valor se falso'],
            ['E / OU', '=SE(E(B2>=7;C2>=0,75);"Ok";"Não")', 'E exige todos verdadeiros; OU, ao menos um'],
            ['PROCV', '=PROCV(A2;Tabela;3;FALSO)', 'Procura na 1ª coluna e devolve a coluna indicada; FALSO = exata'],
            ['PROCX', '=PROCX(A2;B:B;D:D;"não achou")', 'Procura em qualquer coluna (inclusive à esquerda); padrão = exata'],
            ['ARRED', '=ARRED(3,14159;2)', 'Arredonda: 3,14'],
            ['TRUNCAR / INT', '=TRUNCAR(7,86;1)', 'TRUNCAR corta (7,8); INT arredonda para baixo: INT(-3,5) = -4'],
            ['HOJE / AGORA', '=HOJE()', 'Data atual / data e hora atuais (sem argumentos)'],
            ['CONCATENAR / CONCAT / &', '=A2&" "&B2', 'Junta textos; o operador & faz o mesmo'],
            ['SEERRO', '=SEERRO(A2/B2;0)', 'Troca um erro pelo valor indicado'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Precedência dos operadores (suporte da Microsoft)',
          colunas: ['Ordem', 'Operador', 'Exemplo'],
          linhas: [
            ['1º', 'Operadores de referência: : (intervalo), espaço (interseção) e ; (união, no Excel em português)', 'A1:B2'],
            ['2º', '- (negação)', '=-2^2 resulta 4'],
            ['3º', '% (porcentagem)', '=50%*10 resulta 5'],
            ['4º', '^ (exponenciação)', '=2^3 resulta 8'],
            ['5º', '* e / ', '=2+3*4 resulta 14'],
            ['6º', '+ e -', '=10-4+1 resulta 7 (da esquerda para a direita)'],
            ['7º', '& (concatenação)', '=5&5 resulta 55 (texto)'],
            ['8º', '= < > <= >= <> (comparação)', '=3>2 resulta VERDADEIRO'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Erros e atalhos do Excel',
          colunas: ['Item', 'Significado'],
          linhas: [
            ['#DIV/0!', 'Divisão por zero (ou por célula vazia)'],
            ['#NOME?', 'Nome de função ou intervalo não reconhecido (ex.: =SOMAR(A1:A3))'],
            ['#REF!', 'Referência inválida (célula referenciada foi excluída)'],
            ['#VALOR!', 'Tipo de dado errado (ex.: somar texto com número usando +)'],
            ['#N/D', 'Valor não disponível — típico do PROCV que não encontrou'],
            ['#####', 'Coluna estreita demais para o número ou a data'],
            ['F2', 'Editar a célula ativa'],
            ['F4', 'Alternar referências (ou repetir a última ação)'],
            ['Ctrl+;  /  Ctrl+Shift+:', 'Inserir data atual / hora atual'],
            ['Alt+=', 'AutoSoma'],
            ['Ctrl+Enter', 'Preencher toda a seleção com a mesma entrada'],
            ['Alt+Enter', 'Nova linha dentro da mesma célula'],
            ['Ctrl+` (acento grave)', 'Alternar entre valores e fórmulas'],
            ['Ctrl+1', 'Formatar Células'],
            ['F11 / Shift+F11', 'Gráfico em planilha própria / nova planilha'],
            ['Ctrl+Page Down', 'Próxima planilha da pasta de trabalho'],
            ['Ctrl+E', 'Preenchimento Relâmpago'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**PROCV** exige que o valor procurado esteja na **primeira coluna** da tabela. Omitido o 4º argumento, faz correspondência **aproximada** (exige 1ª coluna classificada). Para correspondência exata, use **FALSO** ou 0.',
          '**PROCX** está no Excel do Microsoft 365 e no Excel 2021 ou posterior; sua correspondência padrão é exata e aceita mensagem para “não encontrado”.',
          '**Alça de preenchimento**: no Excel, arrastar uma única célula com número **copia** o valor; selecionar 1 e 2 e arrastar cria a sequência 3, 4, 5…; “jan” vira fev, mar…',
          '**LibreOffice Calc**: também usa ; nos argumentos e $ nas referências, mas a referência a outra planilha usa **ponto**: **Planilha2.A1** (no Excel, **Planilha2!A1**).',
        ],
      },
      {
        tipo: 'atencao',
        texto:
          'Três armadilhas de banca: (1) **=SOMA(A1;A4)** soma só duas células; (2) **=-2^2 = 4** no Excel, porque a negação vem antes da potência; (3) **MÉDIA** ignora células vazias, mas conta as que têm zero. Na cópia de fórmula, ande o mesmo número de linhas e colunas e congele apenas o que tem $.',
      },
    ],
    fontes: [
      MS_EXCEL,
      'Suporte da Microsoft — Função PROCV: https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-procv-0bbc8083-26fe-4963-8ab8-93a18ad188a1',
      'Suporte da Microsoft — Função PROCX: https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-procx-b7fd680e-6d10-43e6-84f9-88eae8bf5929',
      'Suporte da Microsoft — Operadores de cálculo e precedência no Excel: https://support.microsoft.com/pt-br/office/operadores-de-c%C3%A1lculo-e-preced%C3%AAncia-no-excel-48be406d-4975-4d31-b2b8-7af9e0e2878a',
      'Suporte da Microsoft — Especificações e limites do Microsoft Excel: https://support.microsoft.com/pt-br/office/especifica%C3%A7%C3%B5es-e-limites-do-microsoft-excel-1672b34d-7043-467e-8e27-269d656771c3',
      'Ajuda do LibreOffice — Teclas de atalho do Calc: https://help.libreoffice.org/latest/pt-BR/text/scalc/04/01020000.html',
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-powerpoint',
    titulo: 'Apresentações (PowerPoint/Impress)',
    resumo:
      'Caem atalhos de apresentação (F5, Shift+F5, Esc), a diferença entre transição e animação, o Slide Mestre, os modos de exibição e os formatos .pptx e .ppsx.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'No PowerPoint, **F5** inicia a apresentação **do primeiro slide** e **Shift+F5**, **do slide atual**; **Esc** encerra. Durante a apresentação, **B** ou **ponto (.)** exibe uma tela preta, e **W** ou **vírgula (,)**, uma tela branca; a mesma tecla volta à apresentação. **Alt+F5** inicia no Modo de Exibição do Apresentador. **Ctrl+M** insere um **novo slide**.\n\n' +
          '**Transição** é o efeito na **passagem de um slide para o outro**. **Animação** é o efeito aplicado a um **objeto dentro do slide** (título, imagem, gráfico). O **Slide Mestre** (Exibir > Slide Mestre) guarda o layout, as fontes, as cores e os elementos fixos (logotipo, rodapé) de todos os slides: mudar o mestre muda a apresentação inteira.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Modos de exibição e formatos',
          colunas: ['Item', 'Para que serve'],
          linhas: [
            ['Normal', 'Edição slide a slide, com miniaturas e painel de anotações'],
            ['Classificação de Slides', 'Miniaturas lado a lado para reorganizar, duplicar e ocultar slides'],
            ['Anotações', 'Slide com as anotações do orador abaixo (para imprimir)'],
            ['Modo de Exibição do Apresentador', 'O orador vê anotações e o próximo slide; o público vê só o slide atual'],
            ['.pptx', 'Apresentação editável (padrão)'],
            ['.ppsx', 'Abre direto no modo de apresentação'],
            ['.potx', 'Modelo de apresentação'],
            ['.odp', 'Apresentação do LibreOffice Impress'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Ocultar slide**: o slide continua no arquivo, mas é pulado na apresentação.',
          '**Layout** define a disposição dos espaços reservados (título, conteúdo, duas colunas).',
          '**Design/Temas** aplica um conjunto de cores, fontes e efeitos a todos os slides.',
          'No **Impress**, F5 também inicia a apresentação; o equivalente ao Slide Mestre é o **Slide mestre** (Exibir > Slide mestre).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo FUNDATEC',
        enunciado:
          'Um médico quer que o logotipo do hospital apareça no canto de todos os slides sem inseri-lo um a um. Qual recurso usar?',
        resolucao:
          'O **Slide Mestre**: o que se insere nele se repete em todos os slides que usam aquele mestre. Transição e animação são efeitos, não modelos.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Transição = entre slides; animação = dentro do slide.** E **F5 começa do início**, enquanto **Shift+F5 começa do slide atual** — a banca costuma inverter.',
      },
    ],
    fontes: [
      'Suporte da Microsoft — Usar atalhos de teclado para criar apresentações do PowerPoint: https://support.microsoft.com/pt-br/office/usar-atalhos-de-teclado-para-criar-apresenta%C3%A7%C3%B5es-do-powerpoint-ebb3d20e-dcd4-444f-a38e-bb5c5ed180f4',
      'Suporte da Microsoft — Usar atalhos de teclado para veicular apresentações do PowerPoint: https://support.microsoft.com/pt-br/Accessibility/powerpoint/use-keyboard-shortcuts-to-deliver-powerpoint-presentations',
    ],
    atualizadoEm: '2026-11-20',
  },
];
