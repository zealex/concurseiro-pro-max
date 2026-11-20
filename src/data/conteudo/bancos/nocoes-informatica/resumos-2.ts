import type { ResumoTema } from '../../../types';

const CERT_FASC = 'CERT.br — Cartilha de Segurança para Internet, fascículos: https://cartilha.cert.br/fasciculos/';
const CERT_LIVRO = 'CERT.br — Cartilha de Segurança para Internet, livro (golpes, ataques, criptografia): https://cartilha.cert.br/livro/';
const LGPD = 'Lei 13.709/2018 (LGPD): https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm';

export const RESUMOS_2: ResumoTema[] = [
  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-internet',
    titulo: 'Internet, intranet, extranet, navegadores e URLs',
    resumo:
      'Cebraspe e FUNDATEC cobram a diferença entre internet, intranet e extranet, as partes de uma URL, o que o HTTPS garante (e o que não garante), cookies, navegação anônima e operadores de busca.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **internet** é a rede pública mundial que usa a família de protocolos **TCP/IP**. A **intranet** é uma rede **privada** de uma organização que usa as **mesmas tecnologias da internet** (TCP/IP, HTTP, navegador), com acesso restrito aos usuários autorizados. Ela pode estar conectada à internet e ser acessada de fora com **VPN**. A **extranet** é a parte da intranet aberta a **usuários externos autorizados** (fornecedores, parceiros, outros órgãos).\n\n' +
          'A **URL** é o endereço de um recurso. Em **https://www.saude.rs.gov.br/servicos?id=5#topo**: **https** é o protocolo; **www.saude.rs.gov.br** é o nome do host (com o domínio **saude.rs.gov.br**); **/servicos** é o caminho; **?id=5** é a consulta (parâmetros); **#topo** é o fragmento (um ponto da página). O **DNS** traduz o nome em endereço IP.\n\n' +
          'O **HTTPS** (HTTP sobre TLS) cifra a comunicação entre navegador e site e permite verificar o certificado do servidor. O **cadeado** indica conexão cifrada, **não** que o site seja honesto: páginas de phishing também usam HTTPS.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Navegador: recursos que caem',
          colunas: ['Recurso', 'O que é', 'Pegadinha'],
          linhas: [
            ['Cookies', 'Pequenos arquivos que o site grava no navegador (sessão, preferências)', 'Não são programas e não “instalam” nada'],
            ['Cache', 'Cópias locais de páginas e imagens para carregar mais rápido', 'Ctrl+F5 recarrega ignorando o cache'],
            ['Histórico', 'Lista de páginas visitadas (Ctrl+H)', 'Pode ser apagado pelo usuário'],
            ['Navegação anônima/privada', 'Não guarda histórico nem cookies depois de fechar a janela', 'Não esconde a navegação do provedor, do empregador ou dos sites; downloads e favoritos ficam'],
            ['Favoritos', 'Endereços salvos (Ctrl+D)', '—'],
            ['Extensões', 'Complementos que ampliam o navegador', 'Instale só de lojas oficiais'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Atalhos comuns em Chrome, Edge e Firefox',
          colunas: ['Atalho', 'Ação'],
          linhas: [
            ['Ctrl+T / Ctrl+W', 'Nova guia / fechar guia'],
            ['Ctrl+Shift+T', 'Reabrir a última guia fechada'],
            ['Ctrl+Shift+N', 'Janela anônima (Chrome) ou InPrivate (Edge)'],
            ['Ctrl+Shift+P', 'Janela privativa (Firefox)'],
            ['Ctrl+H / Ctrl+J', 'Histórico / downloads'],
            ['Ctrl+L', 'Seleciona a barra de endereços'],
            ['F5 / Ctrl+F5', 'Recarregar / recarregar ignorando o cache'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Busca**: aspas buscam a expressão exata ("perícia médica"); o hífen exclui termo (gripe -aviária); **site:** restringe ao domínio (site:gov.br); **filetype:** filtra o tipo de arquivo (filetype:pdf).',
          '**Domínios**: .gov.br (governo), .jus.br (Judiciário), .edu.br (ensino), .org.br (organizações), .com.br (comercial). O **.br** é o domínio de primeiro nível do Brasil.',
          '**WWW** (World Wide Web) é um serviço da internet baseado em HTTP e HTML; internet e Web não são sinônimos (e-mail, por exemplo, não é Web).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Cebraspe',
        enunciado:
          'Item: “A intranet de um órgão, por utilizar os mesmos protocolos da internet, pode ser acessada por qualquer cidadão que conheça o seu endereço.”',
        resolucao:
          '**Errado.** Usar os mesmos protocolos não torna a rede pública: a intranet tem acesso **restrito** aos usuários autorizados (por login, rede interna ou VPN).',
      },
      {
        tipo: 'atencao',
        texto:
          'Intranet **não** é sinônimo de rede desconectada da internet, nem exige protocolos próprios. E **navegação anônima não é anonimato**: ela só deixa de guardar dados no próprio computador.',
      },
    ],
    fontes: [
      CERT_LIVRO,
      'Registro.br — categorias de domínios .br: https://registro.br/dominio/categorias/',
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-email',
    titulo: 'Correio eletrônico',
    resumo:
      'As bancas cobram os protocolos (SMTP envia; POP3 e IMAP recebem), os campos Para, Cc e Cco, a diferença entre responder, responder a todos e encaminhar, o webmail e os cuidados com anexos e remetentes falsos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Um endereço de e-mail tem o formato **usuario@dominio** (ex.: ana.souza@saude.rs.gov.br): antes da arroba fica a caixa postal; depois, o domínio do servidor de correio.\n\n' +
          'O **SMTP** é o protocolo de **envio** (do programa ao servidor e entre servidores). Para **receber**, há o **POP3**, que **baixa** as mensagens para o dispositivo (em geral removendo-as do servidor, conforme a configuração), e o **IMAP**, que mantém as mensagens **no servidor** e **sincroniza** pastas e status de leitura entre vários dispositivos.\n\n' +
          'No **webmail** (Gmail, Outlook na web), o usuário acessa a caixa pelo **navegador**, via HTTP/HTTPS, sem instalar programa; quem envia e recebe pelos protocolos de correio é o servidor.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Campos e ações',
          colunas: ['Item', 'Regra'],
          linhas: [
            ['Para', 'Destinatário principal; visível a todos'],
            ['Cc (com cópia)', 'Recebe cópia; visível a todos'],
            ['Cco (com cópia oculta)', 'Recebe cópia; os demais destinatários não veem quem está em Cco'],
            ['Responder', 'Só para o remetente; anexos originais não vão'],
            ['Responder a todos', 'Remetente + Para + Cc; quem estava em Cco não é incluído'],
            ['Encaminhar', 'Envia a mensagem a terceiros, com os anexos'],
            ['Caixa de Saída', 'Mensagens que ainda aguardam envio'],
            ['Rascunhos', 'Mensagens salvas e não enviadas'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Portas padrão dos protocolos de correio',
          colunas: ['Protocolo', 'Função', 'Porta'],
          linhas: [
            ['SMTP', 'Envio entre servidores', '25 (587 para envio autenticado pelo cliente)'],
            ['POP3', 'Recebimento (download)', '110 (995 com TLS)'],
            ['IMAP', 'Recebimento sincronizado', '143 (993 com TLS)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Spam**: mensagem não solicitada enviada em massa.',
          '**Falsificação de remetente (e-mail spoofing)**: o campo “De” pode ser alterado; mensagem que parece vir do banco ou do chefe pode ser falsa (CERT.br).',
          '**Anexos** maliciosos são usados para instalar malware: na dúvida, não abra; verifique com antivírus (CERT.br).',
          'Usar **Cco** em envio para muitos destinatários protege os endereços de todos.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo FUNDATEC',
        enunciado:
          'Um servidor envia convite a 40 médicos da rede e não quer que um veja o endereço dos outros. Onde colocar os endereços?',
        resolucao:
          'No **Cco**. Em **Cc**, todos veriam todos. Pode-se colocar o próprio endereço em Para e os 40 em Cco.',
      },
      {
        tipo: 'atencao',
        texto:
          '**SMTP envia; POP3 e IMAP recebem.** IMAP mantém as mensagens no servidor; POP3 baixa. E **Responder a todos não alcança quem estava em Cco**.',
      },
    ],
    fontes: [
      'IETF — RFC 5321 (SMTP), RFC 1939 (POP3) e RFC 9051 (IMAP): https://www.rfc-editor.org/',
      'IANA — Service Name and Transport Protocol Port Number Registry: https://www.iana.org/assignments/service-names-port-numbers',
      CERT_FASC,
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-seguranca',
    titulo: 'Segurança: malware, golpes, backup, criptografia e VPN',
    resumo:
      'Tema certo em toda prova: tipos de código malicioso conforme a Cartilha do CERT.br, phishing e pharming, tipos de backup, criptografia simétrica e assimétrica, assinatura e certificado digital, autenticação em dois fatores e VPN.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Os pilares da segurança da informação são **confidencialidade** (só quem tem autorização acessa), **integridade** (a informação não é alterada indevidamente) e **disponibilidade** (está acessível quando necessário); somam-se **autenticidade** e **não repúdio** (o autor não pode negar a autoria).\n\n' +
          '**Códigos maliciosos (malware)** são programas que executam ações danosas. O CERT.br lembra que costumam ser chamados genericamente de “vírus”, mas há vários tipos, e que a melhor prevenção é **impedir a infecção inicial**: antivírus atualizado, sistema atualizado, desconfiança de links e anexos, aplicativos só de lojas oficiais, backups, verificação em duas etapas e uso da conta de administrador só quando necessário (**privilégio mínimo**).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tipos de malware (CERT.br, fascículo Códigos Maliciosos, 2023)',
          colunas: ['Tipo', 'Definição', 'Como a banca cobra'],
          linhas: [
            ['Vírus', 'Torna-se parte de programas e arquivos; propaga-se enviando cópias de si mesmo', 'Depende de hospedeiro e de execução'],
            ['Worm', 'Propaga-se automaticamente pelas redes, explorando vulnerabilidades e enviando cópias de si', 'Não precisa de hospedeiro; consome recursos da rede'],
            ['Trojan (cavalo de troia)', 'Além das funções aparentes, executa outras, maliciosas, sem o conhecimento do usuário', 'Parece um programa útil'],
            ['Ransomware', 'Torna os dados inacessíveis (em geral com criptografia) e exige resgate', 'Backup é a defesa principal'],
            ['Spyware', 'Monitora as atividades e envia as informações a terceiros', 'Keylogger, screenlogger, adware e stalkerware são tipos de spyware'],
            ['Keylogger', 'Captura e armazena as teclas digitadas', 'Teclado físico'],
            ['Screenlogger', 'Armazena a tela e a posição do cursor quando o mouse é clicado', 'Burla teclado virtual'],
            ['Adware', 'Projetado para apresentar propagandas', '—'],
            ['Backdoor', 'Permite o retorno do invasor ao dispositivo comprometido', 'Acesso futuro'],
            ['Bot / zumbi', 'Como o worm, mas com comunicação que permite controle remoto; zumbi é o dispositivo infectado', '—'],
            ['Botnet', 'Rede de zumbis usada em DDoS, spam, propagação de malware e mineração de criptomoeda', '—'],
            ['Rootkit', 'Técnicas e programas para esconder e manter a presença do invasor', 'Serve para manter, não para obter, o acesso'],
            ['Scareware', 'Assusta o usuário com falso problema para que instale “solução” maliciosa', 'Falso antivírus'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Phishing**: fraude que combina meios técnicos e **engenharia social** para obter dados pessoais e financeiros (mensagem falsa de banco, “boleto atrasado”).',
          '**Pharming**: tipo de phishing que **redireciona** a navegação para sites falsos por **alteração no DNS** — o usuário digita o endereço certo e cai na página falsa.',
          '**Boato (hoax)**: mensagem de conteúdo alarmante ou falso. **DDoS**: ataque de negação de serviço distribuído, que tira um serviço do ar.',
          '**Firewall** filtra o tráfego conforme regras; **não** substitui o antivírus.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tipos de backup',
          colunas: ['Tipo', 'O que copia', 'Para restaurar'],
          linhas: [
            ['Completo (normal)', 'Todos os arquivos selecionados', 'Só o último completo'],
            ['Incremental', 'O que mudou desde o último backup de qualquer tipo', 'Último completo + todos os incrementais seguintes'],
            ['Diferencial', 'O que mudou desde o último backup completo', 'Último completo + o último diferencial'],
          ],
          nota: 'O incremental é o mais rápido de fazer e o mais trabalhoso de restaurar; o diferencial cresce a cada dia até o próximo completo.',
        },
      },
      {
        tipo: 'texto',
        texto:
          'O CERT.br recomenda **backups automáticos**, **pelo menos duas cópias em locais diferentes** (“quem tem 1 não tem nenhum”), criptografia das cópias, **não deixar as mídias conectadas o tempo todo** (o ransomware pode cifrar e apagar backups acessíveis) e **testar** a restauração de tempos em tempos.\n\n' +
          '**Criptografia simétrica** usa **a mesma chave** para cifrar e decifrar (rápida; o problema é compartilhar a chave). **Assimétrica** usa um **par de chaves**: a **pública** pode ser divulgada e a **privada** fica só com o dono. Para **sigilo**, cifra-se com a chave **pública do destinatário**, que decifra com a sua privada. Na **assinatura digital**, o autor assina com a **sua chave privada** e qualquer um confere com a **chave pública** dele: garante **autenticidade, integridade e não repúdio**, mas **não** confidencialidade. O **certificado digital** é o documento eletrônico, emitido por uma **Autoridade Certificadora**, que vincula a chave pública ao seu titular; no Brasil, a cadeia oficial é a **ICP-Brasil** (MP 2.200-2/2001).\n\n' +
          '**Autenticação** combina fatores: **algo que você sabe** (senha), **algo que você tem** (celular com aplicativo de códigos, chave de segurança física) e **algo que você é** (biometria). A **verificação em duas etapas** exige dois fatores de categorias diferentes. A **VPN** cria um **túnel criptografado** sobre uma rede pública, permitindo, por exemplo, acessar a intranet de casa.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Cebraspe',
        enunciado:
          'Item: “Para garantir que apenas o destinatário leia um laudo enviado por e-mail, o remetente deve cifrá-lo com a própria chave privada.”',
        resolucao:
          '**Errado.** O que é cifrado com a chave privada do remetente pode ser aberto por qualquer um com a chave pública dele — isso é assinatura (autoria), não sigilo. Para sigilo, cifra-se com a **chave pública do destinatário**.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Worm não precisa de hospedeiro; vírus precisa.** **Rootkit** mantém o acesso (não o obtém). **Assinatura digital não dá sigilo.** **Incremental** restaura com o completo + todos os incrementais; **diferencial**, com o completo + o último diferencial. Senha + pergunta secreta **não** é dois fatores (ambas são “algo que você sabe”).',
      },
    ],
    fontes: [
      CERT_FASC + ' (Códigos Maliciosos, jul./2023; Backup, maio/2023; Autenticação)',
      CERT_LIVRO + ' (phishing, pharming, boato, falsificação de e-mail)',
      'Medida Provisória 2.200-2/2001 (ICP-Brasil): https://www.planalto.gov.br/ccivil_03/mpv/antigas_2001/2200-2.htm',
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-nuvem',
    titulo: 'Nuvem e colaboração',
    resumo:
      'Cobra-se a definição de computação em nuvem (NIST), os modelos IaaS, PaaS e SaaS, os modelos de implantação e o uso de OneDrive, Google Drive, Microsoft 365 e Teams: sincronização, compartilhamento e coautoria.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Pela definição do **NIST** (SP 800-145), computação em nuvem é o acesso via rede, sob demanda, a um conjunto compartilhado de recursos configuráveis (servidores, armazenamento, aplicações) que podem ser rapidamente provisionados e liberados. Suas **cinco características essenciais**: autoatendimento sob demanda, amplo acesso pela rede, agrupamento (pool) de recursos, **elasticidade rápida** e **serviço medido** (paga-se pelo uso).\n\n' +
          'Na nuvem, a segurança é **compartilhada**: o provedor cuida da infraestrutura, mas o usuário continua responsável por senhas, verificação em duas etapas, permissões de compartilhamento e pelo que envia. O CERT.br recomenda ativar a verificação em duas etapas nos serviços de nuvem.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Modelos de serviço',
          colunas: ['Modelo', 'O provedor entrega', 'O cliente gerencia', 'Exemplos'],
          linhas: [
            ['SaaS (software)', 'Aplicação pronta, acessada pelo navegador ou app', 'Só os seus dados e configurações', 'Webmail, Microsoft 365, Google Docs'],
            ['PaaS (plataforma)', 'Ambiente para desenvolver e hospedar aplicações', 'O código e os dados da aplicação', 'Plataformas de hospedagem de apps e bancos de dados gerenciados'],
            ['IaaS (infraestrutura)', 'Máquinas virtuais, armazenamento e rede', 'Sistema operacional, programas e dados', 'Servidores virtuais alugados'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Modelos de implantação (NIST)',
          colunas: ['Modelo', 'Característica'],
          linhas: [
            ['Pública', 'Aberta ao público em geral, infraestrutura do provedor'],
            ['Privada', 'Uso exclusivo de uma organização'],
            ['Comunitária', 'Compartilhada por organizações com interesses comuns'],
            ['Híbrida', 'Combina duas ou mais nuvens distintas (ex.: privada + pública)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**OneDrive** (Microsoft) e **Google Drive** guardam arquivos na nuvem e **sincronizam** com o computador e o celular.',
          '**Sincronizar não é fazer backup**: apagar ou corromper o arquivo no computador replica a mudança na nuvem. A lixeira e o histórico de versões do serviço ajudam a recuperar: no OneDrive, os itens excluídos ficam na lixeira por 30 dias em contas pessoais (93 dias em contas corporativas, salvo mudança do administrador).',
          '**Compartilhamento**: o dono escolhe quem acessa (pessoas específicas, organização ou qualquer pessoa com o link) e o papel. No Google Drive: **Leitor** só visualiza; **Comentarista** (ou Comentador) comenta e sugere; **Editor** altera e, por padrão, pode compartilhar.',
          '**Coautoria**: no Microsoft 365, várias pessoas editam ao mesmo tempo um arquivo do Word, Excel ou PowerPoint salvo no OneDrive ou no SharePoint; o Google Docs faz o mesmo no Drive.',
          '**Microsoft Teams**: chat, reuniões on-line, equipes com canais e arquivos compartilhados.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo IBFC',
        enunciado: 'Um hospital usa um sistema de agendamento acessado pelo navegador, mantido inteiramente pelo fornecedor. Qual o modelo?',
        resolucao:
          '**SaaS**: o hospital só usa a aplicação pronta. Se alugasse servidores virtuais e instalasse o sistema neles, seria IaaS.',
      },
      {
        tipo: 'atencao',
        texto:
          '**IaaS: o cliente cuida do sistema operacional; SaaS: o cliente só usa.** E guardar na nuvem **não transfere toda a responsabilidade** ao provedor: senha fraca e link aberto continuam sendo problema do usuário.',
      },
    ],
    fontes: [
      'NIST SP 800-145 — The NIST Definition of Cloud Computing: https://csrc.nist.gov/pubs/sp/800/145/final',
      CERT_FASC + ' (Backup: verificação em duas etapas nos serviços de nuvem)',
      'Suporte da Microsoft — Restaurar arquivos ou pastas excluídos no OneDrive: https://support.microsoft.com/pt-br/office/restaurar-arquivos-ou-pastas-exclu%C3%ADdos-no-onedrive-949ada80-0026-4db3-a953-c99083e6a84f',
      'Ajuda do Google Drive — Compartilhar arquivos do Google Drive: https://support.google.com/drive/answer/2494822',
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-redes',
    titulo: 'Redes e protocolos',
    resumo:
      'As bancas cobram o papel do DNS e do DHCP, as portas dos protocolos mais comuns, TCP × UDP, IPv4 × IPv6, equipamentos (hub, switch, roteador), a classificação das redes por alcance e a segurança do Wi-Fi.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O modelo **TCP/IP** tem quatro camadas: **aplicação** (HTTP, HTTPS, SMTP, DNS, FTP), **transporte** (TCP, UDP), **internet** (IP, ICMP) e **acesso à rede** (Ethernet, Wi-Fi). O modelo de referência **OSI** tem sete: física, enlace, rede, transporte, sessão, apresentação e aplicação.\n\n' +
          'O **TCP** é **orientado à conexão** e confiável: confirma a entrega, reenvia o que se perde e ordena os pacotes (web, e-mail). O **UDP** não estabelece conexão nem garante entrega, mas é mais leve (streaming, voz, consultas DNS).\n\n' +
          'O **IPv4** tem **32 bits** (quatro números de 0 a 255, ex.: 192.168.0.10); o **IPv6** tem **128 bits**, escritos em hexadecimal separados por dois-pontos. O **DNS** traduz nomes (www.gov.br) em endereços IP; o **DHCP** distribui automaticamente IP, máscara, gateway e DNS aos dispositivos.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Portas padrão (IANA)',
          colunas: ['Protocolo', 'Porta', 'Uso'],
          linhas: [
            ['HTTP', '80', 'Páginas web sem criptografia'],
            ['HTTPS', '443', 'Páginas web com TLS'],
            ['FTP', '20 e 21', 'Transferência de arquivos (dados e controle)'],
            ['SSH', '22', 'Acesso remoto seguro'],
            ['Telnet', '23', 'Acesso remoto sem criptografia'],
            ['SMTP', '25', 'Envio de e-mail'],
            ['DNS', '53', 'Resolução de nomes'],
            ['DHCP', '67 e 68', 'Configuração automática de IP'],
            ['POP3 / IMAP', '110 / 143', 'Recebimento de e-mail'],
            ['RDP', '3389', 'Área de Trabalho Remota do Windows'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Equipamentos e alcance',
          colunas: ['Item', 'Função / alcance'],
          linhas: [
            ['Hub', 'Repete o sinal para todas as portas'],
            ['Switch', 'Encaminha o quadro só para a porta do destino (pelo endereço MAC)'],
            ['Roteador', 'Interliga redes diferentes e escolhe rotas pelo endereço IP'],
            ['Ponto de acesso (access point)', 'Conecta dispositivos sem fio à rede cabeada'],
            ['PAN', 'Pessoal: alguns metros (Bluetooth entre celular e fone)'],
            ['LAN', 'Local: uma sala, um prédio, um hospital'],
            ['MAN', 'Metropolitana: uma cidade'],
            ['WAN', 'Longa distância: países e continentes; a internet é a maior WAN'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Wi-Fi** segue a família de padrões **IEEE 802.11**. Use **WPA2 ou WPA3**; o **WEP** é obsoleto e inseguro. O **SSID** é o nome da rede.',
          '**Endereços privados** (10.x.x.x, 172.16.x.x a 172.31.x.x, 192.168.x.x) são usados dentro das redes locais e não são roteados na internet; o roteador faz a tradução (**NAT**).',
          '**127.0.0.1** (localhost) é o endereço de loopback: o próprio computador.',
          '**Topologia em estrela**: todos ligados a um equipamento central; falha de um cabo afeta só aquele nó, mas a falha do concentrador para a rede.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Cebraspe',
        enunciado: 'Item: “O serviço DHCP é responsável por converter o nome www.gov.br no endereço IP do servidor correspondente.”',
        resolucao: '**Errado.** Quem converte nome em IP é o **DNS**. O **DHCP** atribui automaticamente o endereço IP e demais configurações aos dispositivos da rede.',
      },
      {
        tipo: 'atencao',
        texto:
          '**DNS = nomes; DHCP = distribuição automática de IP.** **HTTPS = 443; HTTP = 80.** **Switch** entrega só ao destino; **hub** repete para todos. IPv4 tem 32 bits, IPv6 tem 128.',
      },
    ],
    fontes: [
      'IANA — Service Name and Transport Protocol Port Number Registry: https://www.iana.org/assignments/service-names-port-numbers',
      'IETF — RFC 1918 (endereços privados) e RFC 8200 (IPv6): https://www.rfc-editor.org/',
      'CERT.br — Cartilha de Segurança para Internet, fascículo Redes: https://cartilha.cert.br/fasciculos/',
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-sei',
    titulo: 'SEI — Sistema Eletrônico de Informações',
    resumo:
      'O SEI aparece no Perito Médico Federal e em órgãos federais: processo eletrônico, documentos internos e externos, assinatura eletrônica, blocos (assinatura, interno, reunião) e níveis de acesso (público, restrito, sigiloso).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **SEI** é a solução oficial do Governo Federal para produzir e gerenciar **documentos e processos administrativos eletrônicos**. Foi desenvolvido pelo **Tribunal Regional Federal da 4ª Região (TRF4)** e é **cedido gratuitamente** a instituições públicas desde 2013. O uso do meio eletrônico no processo administrativo federal é regido pelo **Decreto 8.539/2015**.\n\n' +
          'O usuário **inicia um processo** escolhendo o tipo, e o sistema gera o número. Dentro dele, inclui **documentos internos** — produzidos no **editor do próprio SEI** (ofício, despacho, nota técnica) e assinados eletronicamente no sistema — e **documentos externos** — produzidos **fora** do SEI e anexados como arquivo (PDF digitalizado, laudo de outro órgão, requerimento em papel digitalizado).\n\n' +
          'Diferente do processo em papel, o processo eletrônico pode ficar **aberto em várias unidades ao mesmo tempo**: ao enviar, pode-se escolher várias unidades e **manter o processo aberto** na unidade atual. A autenticidade dos documentos assinados pode ser conferida pelo **código verificador** e pelo **código CRC** na página pública de conferência.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Blocos do SEI',
          colunas: ['Bloco', 'Para que serve'],
          linhas: [
            ['Bloco de assinatura', 'Reúne documentos para serem assinados por usuários de outras unidades, sem tramitar o processo; depois de assinados, o bloco retorna à unidade de origem'],
            ['Bloco interno', 'Organiza processos dentro da própria unidade (não é compartilhado)'],
            ['Bloco de reunião', 'Disponibiliza processos para visualização por outras unidades, como em uma pauta'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Níveis de acesso',
          colunas: ['Nível', 'Quem vê dentro do SEI', 'Exige hipótese legal?'],
          linhas: [
            ['Público', 'Todas as unidades; pode aparecer na pesquisa pública', 'Não'],
            ['Restrito', 'As unidades por onde o processo tramitou; o conteúdo não aparece na pesquisa pública', 'Sim'],
            ['Sigiloso', 'Somente usuários com credencial de acesso concedida; não aparece nas pesquisas do sistema', 'Sim'],
          ],
          nota: 'Público é a regra: a LAI fixa a publicidade como preceito geral e o sigilo como exceção (Lei 12.527/2011, art. 3º, I). Informações pessoais relativas à intimidade têm acesso restrito (art. 31).',
        },
      },
      {
        tipo: 'lista',
        itens: [
          'A **hipótese legal** é a base normativa escolhida no campo que o SEI exibe ao marcar um documento como restrito ou sigiloso (ex.: informação pessoal, art. 31 da LAI; sigilo fiscal; segredo de justiça).',
          'A restrição deve ser aplicada **preferencialmente ao documento**, e não a todo o processo, quando só uma parte for restrita.',
          '**Usuário externo** (cidadão, empresa, perito de outro órgão) pode ser cadastrado para assinar documentos ou fazer peticionamento eletrônico.',
          'Outras funções: atribuir processo a um servidor, relacionar processos, anexar processo, sobrestar, concluir e reabrir na unidade, retorno programado e marcadores.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Cebraspe',
        enunciado:
          'Item: “No SEI, para que o diretor de outra unidade assine um despacho, é obrigatório enviar o processo inteiro para aquela unidade.”',
        resolucao:
          '**Errado.** O **bloco de assinatura** permite que usuários de outras unidades assinem documentos sem que o processo seja tramitado para lá.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Documento interno = criado no editor do SEI; externo = arquivo produzido fora e incluído.** **Restrito** é visto pelas unidades por onde o processo passou; **sigiloso**, só por quem tem credencial. Restrito e sigiloso **exigem hipótese legal**.',
      },
    ],
    fontes: [
      'Portal gov.br — Sistema Eletrônico de Informações (SEI): https://www.gov.br/servicoscompartilhados/pt-br/assuntos/gestao-documental/sistema-eletronico-de-informacoes-sei',
      'Decreto 8.539/2015 (processo administrativo eletrônico): https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/decreto/d8539.htm',
      'Lei 12.527/2011 (LAI), arts. 3º e 31: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm',
      'Ministério das Cidades — Cartilha de categorização de processos e documentos no SEI: https://www.gov.br/cidades/pt-br/assuntos/sei-ministerio-das-cidades/cartilha-sei_web.pdf',
      'CGU — Guia de hipóteses legais no SEI: https://repositorio.cgu.gov.br/bitstream/1/38789/5/GUIA_HIPOTESE_LEGAL_SEI.pdf',
    ],
    atualizadoEm: '2026-11-20',
  },

  /* ---------------------------------------------------------------- */
  {
    temaId: 'inf-ia',
    titulo: 'Noções de inteligência artificial',
    resumo:
      'Editais recentes (Perito Médico Federal) incluem IA: aprendizado de máquina e seus tipos, IA generativa e LLMs, alucinação, vieses, deepfakes e o uso responsável com proteção de dados pessoais (LGPD).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Inteligência artificial (IA)** é o campo que cria sistemas capazes de executar tarefas associadas à inteligência humana: reconhecer padrões, entender e gerar linguagem, classificar imagens, recomendar. O CERT.br lembra que **não existe uma IA geral que faça tudo**: há vários tipos, com fins específicos, e **todos têm limitações**.\n\n' +
          'No **aprendizado de máquina (machine learning)**, o sistema aprende padrões a partir de **dados**, em vez de ser programado regra a regra. No **supervisionado**, aprende com exemplos **rotulados** (imagens de raio-X marcadas como “com” ou “sem” pneumonia); no **não supervisionado**, encontra grupos em dados **sem rótulos** (agrupamento de pacientes por perfil); no **por reforço**, aprende por tentativa e erro com **recompensas**. **Redes neurais** com muitas camadas formam o **aprendizado profundo (deep learning)**.\n\n' +
          'A **IA generativa** cria conteúdo novo (texto, imagem, áudio, código). Os **grandes modelos de linguagem (LLMs)** são a tecnologia mais usada: segundo o CERT.br, não “sabem” a resposta certa — **calculam a resposta mais provável** —, dependem dos **dados de treinamento** e são programados para **sempre dar uma resposta**, mesmo errada.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Conceitos que caem',
          colunas: ['Conceito', 'Definição'],
          linhas: [
            ['Prompt', 'Instrução ou pergunta dada ao modelo; contexto claro melhora a resposta'],
            ['Alucinação', 'Resposta errada ou sem fundamento real, apresentada com aparência de verdade'],
            ['Viés', 'Distorção herdada dos dados ou do projeto que gera resultados injustos ou discriminatórios'],
            ['Deepfake', 'Imagem, áudio ou vídeo falso gerado por IA imitando uma pessoa real'],
            ['Prompt injection', 'Instruções escondidas em sites, arquivos ou mensagens que manipulam agentes de IA'],
            ['Agente de IA', 'Sistema de IA que executa ações (enviar e-mail, pagar, apagar arquivos) em nome do usuário'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Não inclua dados sensíveis no prompt**: o que vai para o chatbot geralmente vai para a empresa que mantém a IA e pode ser usado no treinamento (CERT.br). Troque nomes e CPF por termos genéricos.',
          '**Dado referente à saúde é dado pessoal sensível** (LGPD, art. 5º, II). **Dado anonimizado** não é considerado dado pessoal, salvo se a anonimização puder ser revertida (art. 12).',
          'O titular pode pedir **revisão de decisões tomadas unicamente com base em tratamento automatizado** de seus dados (LGPD, art. 20).',
          '**Revise toda resposta**: trate-a como rascunho, peça fontes e confira se existem; a responsabilidade pelo resultado é de quem usa (CERT.br).',
          'O CERT.br alerta: chatbots de uso geral **não substituem o profissional de saúde** e, nas interações com IA, **não há sigilo profissional**.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Cebraspe',
        enunciado:
          'Item: “Um modelo de linguagem treinado com grande volume de textos responde ‘não sei’ sempre que não tem certeza, o que elimina o risco de alucinação.”',
        resolucao:
          '**Errado.** Os LLMs são programados para gerar uma resposta mesmo com informação insuficiente; por isso alucinam. Instruir o modelo a dizer quando não sabe **reduz** o risco, mas não o elimina.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Supervisionado = dados rotulados; não supervisionado = sem rótulos (agrupamento).** IA generativa **pode alucinar** e **herdar vieses**. Colar prontuário com nome do paciente em chatbot público expõe **dado sensível** (LGPD).',
      },
    ],
    fontes: [
      'CERT.br — Cartilha de Segurança para Internet, fascículo Inteligência Artificial (set./2026): https://cartilha.cert.br/fasciculos/',
      LGPD + ' (arts. 5º, II, III e XI; 12; 20)',
    ],
    atualizadoEm: '2026-11-20',
  },
];
