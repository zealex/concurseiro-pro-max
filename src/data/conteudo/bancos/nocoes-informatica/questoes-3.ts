import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Segurança (CERT.br), nuvem, SEI, inteligência artificial e questões mistas.
 * ------------------------------------------------------------------ */

export const QUESTOES_3: QuestaoTreino[] = [
  /* ---------- inf-seguranca ---------- */
  {
    id: 'inf-seguranca-q01',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Segundo a Cartilha de Segurança para Internet (CERT.br), o código malicioso que se propaga automaticamente pelas redes, explorando vulnerabilidades e enviando cópias de si mesmo de dispositivo para dispositivo, é o:',
    alternativas: ['vírus.', 'worm.', 'adware.', 'rootkit.', 'cavalo de troia.'],
    correta: 1,
    comentario:
      'É a definição de worm do CERT.br, que destaca também o alto consumo de recursos de rede. O vírus se torna parte de programas e arquivos; o adware exibe propaganda; o rootkit esconde o invasor; o cavalo de troia disfarça funções maliciosas.',
  },
  {
    id: 'inf-seguranca-q02',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Os computadores de uma unidade de saúde amanheceram com os arquivos inacessíveis e com uma mensagem exigindo pagamento em criptomoeda para devolvê-los. Trata-se de ataque por:',
    alternativas: ['spyware.', 'adware.', 'worm.', 'ransomware.', 'screenlogger.'],
    correta: 3,
    comentario:
      'O ransomware torna os dados inacessíveis, em geral com criptografia, e exige resgate para restabelecer o acesso (CERT.br). A principal defesa é ter backups atualizados e desconectados.',
  },
  {
    id: 'inf-seguranca-q03',
    temaId: 'inf-seguranca',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O worm depende de se inserir em um arquivo hospedeiro e de ser executado pelo usuário para se propagar, característica que o diferencia do vírus.',
    gabaritoCE: false,
    comentario:
      'Errado. A descrição é a do vírus, que se torna parte de programas e arquivos. O worm se propaga sozinho pela rede, explorando vulnerabilidades e enviando cópias de si mesmo, sem precisar de hospedeiro.',
  },
  {
    id: 'inf-seguranca-q04',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Para burlar o teclado virtual de sites de bancos, golpistas usam o código malicioso que armazena a posição do cursor e a imagem da tela no momento em que o mouse é clicado. Esse código é o:',
    alternativas: ['screenlogger.', 'keylogger.', 'backdoor.', 'bot.', 'adware.'],
    correta: 0,
    comentario:
      'O screenlogger, tipo de spyware, registra a tela e a posição do clique, o que captura senhas digitadas em teclados virtuais (CERT.br). O keylogger captura as teclas do teclado físico.',
  },
  {
    id: 'inf-seguranca-q05',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado:
      'A rede formada por inúmeros dispositivos infectados (zumbis), controlados remotamente e usados em ataques de negação de serviço (DDoS) e no envio de spam, denomina-se:',
    alternativas: ['rootkit.', 'VPN.', 'extranet.', 'firewall.', 'botnet.'],
    correta: 4,
    comentario:
      'Botnet é a rede de zumbis infectados por bots; quanto mais zumbis, mais potente (CERT.br). VPN e extranet são recursos legítimos de rede; firewall é proteção; rootkit esconde o invasor.',
  },
  {
    id: 'inf-seguranca-q06',
    temaId: 'inf-seguranca',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Phishing é o tipo de fraude em que o golpista tenta obter dados pessoais e financeiros da vítima combinando meios técnicos e engenharia social, como mensagens que imitam bancos ou órgãos públicos.',
    gabaritoCE: true,
    comentario:
      'Certo. É a definição da Cartilha do CERT.br. O golpe depende de enganar a vítima (engenharia social) para que ela clique, digite dados ou instale algo.',
  },
  {
    id: 'inf-seguranca-q07',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'O usuário digita corretamente o endereço do site do seu banco, mas é levado a uma página falsa, porque o serviço de resolução de nomes (DNS) foi adulterado. Esse golpe chama-se:',
    alternativas: ['spam.', 'hoax.', 'pharming.', 'defacement.', 'keylogging.'],
    correta: 2,
    comentario:
      'Pharming é o tipo de phishing que redireciona a navegação para sites falsos por alteração no DNS. Spam é mensagem em massa; hoax é boato; defacement é a pichação (alteração) de um site.',
  },
  {
    id: 'inf-seguranca-q08',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Um serviço faz backup completo aos domingos e backup incremental de segunda a sábado, à noite. Se os dados se perderem na sexta-feira à tarde, a restauração exigirá:',
    alternativas: [
      'apenas o backup completo de domingo.',
      'apenas o incremental de quinta-feira.',
      'o completo de domingo e o incremental de quinta-feira.',
      'o completo de domingo e os incrementais de segunda a quinta-feira.',
      'apenas os incrementais de segunda a quinta-feira.',
    ],
    correta: 3,
    comentario:
      'Cada incremental copia só o que mudou desde o backup anterior, seja completo ou incremental. Por isso, restaura-se o completo de domingo e, em ordem, os incrementais de segunda a quinta; sem um deles, perdem-se as alterações daquele dia. “Completo + só o último” é a regra do diferencial, e os incrementais sozinhos não contêm os arquivos que não mudaram na semana.',
  },
  {
    id: 'inf-seguranca-q09',
    temaId: 'inf-seguranca',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O backup diferencial copia os arquivos criados ou alterados desde o último backup completo; por isso, a restauração exige apenas o último backup completo e o último diferencial.',
    gabaritoCE: true,
    comentario:
      'Certo. O diferencial acumula tudo o que mudou desde o último completo e, por isso, cresce a cada dia até o próximo completo. Em troca, a restauração é simples: completo + último diferencial. No incremental, que copia só o que mudou desde o backup anterior, é preciso o completo + todos os incrementais seguintes.',
  },
  {
    id: 'inf-seguranca-q10',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado:
      'João precisa enviar a Maria um documento que só ela consiga abrir, usando criptografia assimétrica. Ele deve cifrar o documento com:',
    alternativas: [
      'a chave pública de Maria.',
      'a chave privada de Maria.',
      'a chave privada de João.',
      'a chave pública de João.',
      'uma chave simétrica divulgada a todos.',
    ],
    correta: 0,
    comentario:
      'Para sigilo, cifra-se com a chave pública do destinatário: só a chave privada correspondente, que fica com Maria, decifra. João não tem a privada de Maria; cifrar com a própria privada é assinatura (qualquer um abre com a pública dele).',
  },
  {
    id: 'inf-seguranca-q11',
    temaId: 'inf-seguranca',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'A assinatura digital, gerada com a chave privada do signatário, garante a autenticidade, a integridade e a confidencialidade do documento assinado.',
    gabaritoCE: false,
    comentario:
      'Errado. A assinatura digital garante autenticidade, integridade e não repúdio, mas não confidencialidade: qualquer pessoa pode ler o documento e conferir a assinatura com a chave pública. Sigilo exige cifrar o conteúdo.',
  },
  {
    id: 'inf-seguranca-q12',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'O documento eletrônico, emitido por uma Autoridade Certificadora, que vincula uma chave pública à identidade de seu titular — no Brasil, dentro da ICP-Brasil —, é o(a):',
    alternativas: ['hash.', 'token de sessão.', 'certificado digital.', 'firewall.', 'senha mestra.'],
    correta: 2,
    comentario:
      'O certificado digital associa a chave pública ao titular, com a garantia da Autoridade Certificadora (ICP-Brasil, MP 2.200-2/2001). O hash é um resumo do conteúdo; token e senha são meios de autenticação.',
  },
  {
    id: 'inf-seguranca-q13',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado: 'Assinale a combinação que constitui autenticação em dois fatores:',
    alternativas: [
      'Senha e pergunta secreta.',
      'Senha e PIN numérico.',
      'Impressão digital e reconhecimento facial.',
      'Duas senhas diferentes.',
      'Senha e código gerado por aplicativo no celular.',
    ],
    correta: 4,
    comentario:
      'Dois fatores exigem categorias diferentes: senha (algo que você sabe) + celular com aplicativo de códigos (algo que você tem). Senha com pergunta, PIN ou outra senha são o mesmo fator; digital e face são ambas “algo que você é”.',
  },
  {
    id: 'inf-seguranca-q14',
    temaId: 'inf-seguranca',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A VPN cria um túnel criptografado sobre uma rede pública, como a internet, permitindo, por exemplo, que um servidor acesse de casa, com segurança, os sistemas da intranet do órgão.',
    gabaritoCE: true,
    comentario:
      'Certo. A VPN (rede privada virtual) cifra o tráfego entre o dispositivo e a rede da organização, como se o usuário estivesse conectado à rede interna.',
  },
  {
    id: 'inf-seguranca-q15',
    temaId: 'inf-seguranca',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'De acordo com a Cartilha de Segurança para Internet (CERT.br), todas as definições a seguir estão corretas, EXCETO:',
    alternativas: [
      'Cavalo de troia: além das funções aparentes, executa outras, maliciosas, sem o conhecimento do usuário.',
      'Rootkit: conjunto de programas usado para obter, pela primeira vez, acesso privilegiado a um dispositivo.',
      'Backdoor: permite o retorno de um invasor a um dispositivo comprometido.',
      'Keylogger: captura e armazena as teclas digitadas pelo usuário.',
      'Adware: projetado para apresentar propagandas.',
    ],
    correta: 1,
    comentario:
      'O CERT.br frisa que o rootkit não serve para obter acesso privilegiado, mas para esconder e manter a presença do invasor ou de outro malware. As demais definições reproduzem a Cartilha.',
  },

  /* ---------- inf-nuvem ---------- */
  {
    id: 'inf-nuvem-q01',
    temaId: 'inf-nuvem',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Um hospital usa webmail e editor de textos on-line, acessados pelo navegador e mantidos integralmente pelo fornecedor. Esse modelo de serviço em nuvem é o:',
    alternativas: ['IaaS.', 'SaaS.', 'PaaS.', 'de nuvem privada.', 'de servidor local (on-premises).'],
    correta: 1,
    comentario:
      'SaaS (software como serviço): a aplicação pronta é usada pelo navegador. Em IaaS, o cliente recebe infraestrutura e instala o próprio sistema; em PaaS, recebe plataforma para desenvolver. Nuvem privada é modelo de implantação, não de serviço.',
  },
  {
    id: 'inf-nuvem-q02',
    temaId: 'inf-nuvem',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No modelo IaaS, o provedor fornece a infraestrutura (servidores virtuais, armazenamento e rede), cabendo ao cliente instalar e gerenciar o sistema operacional e as aplicações.',
    gabaritoCE: true,
    comentario:
      'Certo. Em IaaS o provedor cuida do hardware e da virtualização; o cliente gerencia sistema operacional, programas e dados. Em PaaS e SaaS, o provedor assume progressivamente mais camadas.',
  },
  {
    id: 'inf-nuvem-q03',
    temaId: 'inf-nuvem',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Uma secretaria de saúde mantém o prontuário eletrônico em nuvem privada e usa nuvem pública para o portal de agendamento, integrando as duas. O modelo de implantação é:',
    alternativas: ['público.', 'comunitário.', 'privado.', 'híbrido.', 'distribuído.'],
    correta: 3,
    comentario:
      'Pelo NIST, nuvem híbrida combina duas ou mais nuvens distintas (aqui, privada e pública) ligadas por tecnologia que permite portabilidade de dados e aplicações.',
  },
  {
    id: 'inf-nuvem-q04',
    temaId: 'inf-nuvem',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Um médico apagou por engano, no computador, a pasta de relatórios que estava sincronizada com o OneDrive. É correto afirmar que:',
    alternativas: [
      'a exclusão tende a ser replicada na nuvem, pois sincronizar não é fazer backup; a lixeira do serviço pode permitir a recuperação.',
      'a cópia na nuvem é preservada automaticamente, pois a sincronização só envia arquivos novos.',
      'os arquivos continuam disponíveis nos demais computadores sincronizados, que não recebem exclusões.',
      'a exclusão local nunca afeta arquivos que já tinham sido enviados à nuvem.',
      'a recuperação só é possível a partir de um backup em fita magnética.',
    ],
    correta: 0,
    comentario:
      'A sincronização espelha alterações e exclusões em todos os locais. Por isso ela não substitui o backup. Os serviços mantêm lixeira e histórico de versões, que ajudam a recuperar arquivos apagados por engano.',
  },
  {
    id: 'inf-nuvem-q05',
    temaId: 'inf-nuvem',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'No Microsoft 365, vários usuários podem editar ao mesmo tempo um mesmo documento do Word armazenado no OneDrive ou no SharePoint, recurso conhecido como coautoria.',
    gabaritoCE: true,
    comentario:
      'Certo. A coautoria permite edição simultânea de arquivos do Word, Excel e PowerPoint salvos na nuvem da Microsoft, com as alterações de cada pessoa aparecendo para as demais.',
  },
  {
    id: 'inf-nuvem-q06',
    temaId: 'inf-nuvem',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Ao compartilhar no Google Drive uma planilha com a escala de plantões, o coordenador quer que os plantonistas apenas a consultem, sem alterar nem comentar. Deve conceder a permissão de:',
    alternativas: ['Editor.', 'Proprietário.', 'Administrador.', 'Comentarista.', 'Leitor.'],
    correta: 4,
    comentario:
      'Pela ajuda do Google Drive, o Leitor só visualiza: não altera, não comenta e não compartilha. O Comentarista (também chamado Comentador) faz comentários e sugestões; o Editor altera o conteúdo e, por padrão, pode compartilhar; o proprietário controla o arquivo. Administrador é papel de drives compartilhados, com poderes de gestão.',
  },
  {
    id: 'inf-nuvem-q07',
    temaId: 'inf-nuvem',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'A característica essencial da computação em nuvem, segundo o NIST, que permite ampliar ou reduzir recursos rapidamente conforme a demanda — como no pico de agendamentos de uma campanha de vacinação —, é a:',
    alternativas: ['virtualização.', 'medição do serviço.', 'elasticidade rápida.', 'amplo acesso à rede.', 'nuvem comunitária.'],
    correta: 2,
    comentario:
      'Elasticidade rápida é a capacidade de provisionar e liberar recursos conforme a demanda. Serviço medido é a cobrança pelo uso; amplo acesso à rede é o acesso por diferentes dispositivos; nuvem comunitária é modelo de implantação.',
  },
  {
    id: 'inf-nuvem-q08',
    temaId: 'inf-nuvem',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Ao adotar armazenamento em nuvem, o usuário deixa de ter qualquer responsabilidade pela segurança de seus arquivos, que passa integralmente ao provedor do serviço.',
    gabaritoCE: false,
    comentario:
      'Errado. A responsabilidade é compartilhada: o provedor protege a infraestrutura, mas o usuário responde por senhas, verificação em duas etapas (recomendada pelo CERT.br) e por quem recebe acesso aos arquivos.',
  },

  /* ---------- inf-sei ---------- */
  {
    id: 'inf-sei-q01',
    temaId: 'inf-sei',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 1,
    enunciado:
      'No SEI, um laudo produzido por outro órgão, recebido em papel e digitalizado em PDF para compor o processo, deve ser incluído como documento:',
    alternativas: [
      'interno, pois passa a integrar o processo.',
      'sigiloso, por ter sido produzido fora do órgão.',
      'interno, gerado no editor do SEI.',
      'externo.',
      'de bloco interno.',
    ],
    correta: 3,
    comentario:
      'Documento externo é o produzido fora do SEI e incluído como arquivo. Interno é o criado no editor do próprio sistema. A origem externa não define o nível de acesso, e bloco interno serve para organizar processos.',
  },
  {
    id: 'inf-sei-q02',
    temaId: 'inf-sei',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'No SEI, ao atribuir nível de acesso restrito ou sigiloso a um documento, o usuário deve indicar a hipótese legal que justifica a restrição.',
    gabaritoCE: true,
    comentario:
      'Certo. Ao marcar restrito ou sigiloso, o SEI exibe o campo Hipótese Legal, que deve indicar a base da restrição (por exemplo, informação pessoal, art. 31 da Lei 12.527/2011). O nível público, que é a regra, não exige justificativa.',
  },
  {
    id: 'inf-sei-q03',
    temaId: 'inf-sei',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado: 'No SEI, um processo com nível de acesso sigiloso pode ser visualizado:',
    alternativas: [
      'somente pelos usuários a quem foi concedida credencial de acesso.',
      'por todas as unidades do órgão.',
      'por todas as unidades por onde o processo tramitou.',
      'por qualquer cidadão, na pesquisa pública.',
      'apenas pelo usuário que o criou, sem possibilidade de concessão a outros.',
    ],
    correta: 0,
    comentario:
      'O sigiloso é acessado só por usuários com credencial, que pode ser concedida a outros usuários. Todas as unidades veem o público; o restrito fica limitado às unidades por onde o processo tramitou; e a pesquisa pública não exibe o conteúdo de documentos restritos ou sigilosos.',
  },
  {
    id: 'inf-sei-q04',
    temaId: 'inf-sei',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'O chefe de uma unidade precisa que o diretor de outra unidade assine um despacho, sem enviar o processo inteiro para lá. O recurso do SEI adequado é o:',
    alternativas: ['bloco interno.', 'bloco de reunião.', 'bloco de assinatura.', 'sobrestamento do processo.', 'anexação de processo.'],
    correta: 2,
    comentario:
      'O bloco de assinatura reúne documentos e os disponibiliza para assinatura de usuários de outras unidades, sem tramitar o processo; depois, retorna à origem. Bloco interno organiza; bloco de reunião dá visualização; sobrestar suspende o andamento.',
  },
  {
    id: 'inf-sei-q05',
    temaId: 'inf-sei',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'No SEI, assim como ocorre com o processo em papel, um processo só pode estar aberto em uma unidade por vez.',
    gabaritoCE: false,
    comentario:
      'Errado. O processo eletrônico pode ser enviado a várias unidades ao mesmo tempo e ficar aberto em todas, inclusive mantendo-o aberto na unidade de origem — uma das vantagens sobre o papel.',
  },
  {
    id: 'inf-sei-q06',
    temaId: 'inf-sei',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'No SEI, o bloco usado apenas para organizar processos dentro da própria unidade, sem compartilhá-los com outras, é o:',
    alternativas: ['bloco de assinatura.', 'bloco de reunião.', 'bloco de credenciais.', 'bloco sigiloso.', 'bloco interno.'],
    correta: 4,
    comentario:
      'O bloco interno agrupa processos para controle da unidade. O bloco de reunião disponibiliza processos para outras unidades visualizarem; o de assinatura, documentos para assinatura. Não existem “bloco de credenciais” nem “bloco sigiloso”.',
  },
  {
    id: 'inf-sei-q07',
    temaId: 'inf-sei',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Ao incluir um documento no SEI, o servidor escolhe o nível de acesso. À luz da Lei de Acesso à Informação, a regra geral é o nível:',
    alternativas: [
      'restrito, para proteger o servidor que produziu o documento.',
      'público, sendo o sigilo a exceção.',
      'sigiloso, até a conclusão do processo.',
      'restrito, sempre que o processo envolver a saúde, dispensada a hipótese legal.',
      'definido livremente pelo interessado no processo.',
    ],
    correta: 1,
    comentario:
      'A LAI estabelece a publicidade como preceito geral e o sigilo como exceção (Lei 12.527/2011, art. 3º, I). Restrição só com hipótese legal, aplicada de preferência ao documento que a justifica.',
  },
  {
    id: 'inf-sei-q08',
    temaId: 'inf-sei',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'O SEI foi desenvolvido pelo Tribunal Regional Federal da 4ª Região e é cedido gratuitamente a instituições públicas, sendo adotado como solução de processo eletrônico no Governo Federal.',
    gabaritoCE: true,
    comentario:
      'Certo. Segundo o portal gov.br, o SEI foi desenvolvido pelo TRF4 e é cedido gratuitamente a instituições públicas desde 2013; é a solução oficial do Governo Federal para processos administrativos eletrônicos.',
  },

  /* ---------- inf-ia ---------- */
  {
    id: 'inf-ia-q01',
    temaId: 'inf-ia',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado:
      'Um modelo é treinado com milhares de radiografias de tórax já rotuladas por especialistas como “com pneumonia” ou “sem pneumonia”. Esse tipo de aprendizado de máquina é o:',
    alternativas: [
      'não supervisionado.',
      'supervisionado.',
      'por reforço.',
      'por agrupamento (clustering).',
      'baseado em regras fixas, sem uso de dados.',
    ],
    correta: 1,
    comentario:
      'No aprendizado supervisionado, o modelo aprende com exemplos rotulados (entrada + resposta certa). O não supervisionado, como o agrupamento, busca padrões sem rótulos; o por reforço aprende com recompensas.',
  },
  {
    id: 'inf-ia-q02',
    temaId: 'inf-ia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Alucinação, em inteligência artificial generativa, é a produção de respostas erradas ou sem fundamento real, apresentadas com aparência de informação correta.',
    gabaritoCE: true,
    comentario:
      'Certo. O CERT.br chama de alucinações as respostas erradas ou sem fundamento real dos chatbots e recomenda tratar toda resposta como rascunho a ser conferido em outras fontes.',
  },
  {
    id: 'inf-ia-q03',
    temaId: 'inf-ia',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado: 'Segundo o CERT.br, uma das principais limitações dos grandes modelos de linguagem (LLMs) é que eles:',
    alternativas: [
      'consultam sempre fontes oficiais antes de responder.',
      'só respondem quando têm certeza da resposta.',
      'não dependem da qualidade dos dados de treinamento.',
      'calculam a resposta mais provável, sem “saber” qual é a resposta certa.',
      'constituem uma IA geral, capaz de executar qualquer tarefa.',
    ],
    correta: 3,
    comentario:
      'O fascículo de IA do CERT.br aponta que o LLM calcula a resposta mais provável, depende dos dados de treinamento e é programado para sempre responder, mesmo errado. E lembra que não existe uma IA geral que faça tudo.',
  },
  {
    id: 'inf-ia-q04',
    temaId: 'inf-ia',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Um médico quer usar um chatbot público para organizar o relato de um caso clínico. A conduta compatível com as orientações do CERT.br e com a LGPD é:',
    alternativas: [
      'substituir nome, CPF e outros identificadores por termos genéricos e revisar a resposta antes de usá-la.',
      'colar o prontuário completo, pois o chatbot está sujeito a sigilo profissional.',
      'usar a conta pessoal, pois as regras da instituição não alcançam ferramentas de IA.',
      'aceitar a resposta sem revisão, já que o modelo foi treinado com textos médicos.',
      'pedir ao chatbot que apague os dados depois, o que dispensa outras cautelas.',
    ],
    correta: 0,
    comentario:
      'O CERT.br orienta não incluir dados sensíveis no prompt (trocar por termos genéricos), revisar todas as respostas e seguir as regras da instituição. Em interações com IA não há sigilo profissional, e dado de saúde é sensível pela LGPD.',
  },
  {
    id: 'inf-ia-q05',
    temaId: 'inf-ia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'De acordo com a Lei Geral de Proteção de Dados Pessoais, o dado referente à saúde, quando vinculado a uma pessoa natural, é classificado como dado pessoal sensível.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 5º, II, da Lei 13.709/2018 inclui o dado referente à saúde entre os dados pessoais sensíveis, ao lado de origem racial, convicção religiosa, dado genético e biométrico, entre outros.',
  },
  {
    id: 'inf-ia-q06',
    temaId: 'inf-ia',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Um sistema de triagem treinado quase só com dados de um grupo populacional passou a errar mais ao avaliar pacientes de outros grupos. Esse problema denomina-se:',
    alternativas: ['alucinação.', 'prompt injection.', 'deepfake.', 'elasticidade.', 'viés algorítmico.'],
    correta: 4,
    comentario:
      'Viés é a distorção herdada dos dados (pouco representativos) ou do projeto, que gera resultados injustos para certos grupos. Alucinação é resposta inventada; prompt injection é manipulação por instruções escondidas; deepfake é mídia falsa.',
  },
  {
    id: 'inf-ia-q07',
    temaId: 'inf-ia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Os chatbots baseados em grandes modelos de linguagem respondem “não sei” sempre que lhes falta informação, o que elimina o risco de respostas inventadas.',
    gabaritoCE: false,
    comentario:
      'Errado. Segundo o CERT.br, os chatbots são programados para gerar uma resposta mesmo com informação insuficiente, o que causa alucinações. Instruí-los a dizer quando não sabem reduz o risco, mas não o elimina.',
  },

  /* ---------- informatica (mistas) ---------- */
  {
    id: 'informatica-q01',
    temaId: 'informatica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Analise as assertivas:\nI. No Windows, Shift+Delete exclui o arquivo sem enviá-lo à Lixeira.\nII. No Excel, a fórmula =SOMA(A1;A3) soma as células A1, A2 e A3.\nIII. Worm é o código malicioso que se propaga automaticamente explorando vulnerabilidades.\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e III.', 'Apenas II e III.', 'I, II e III.'],
    correta: 2,
    comentario:
      'I e III estão corretas. A II erra: o ; separa argumentos, então =SOMA(A1;A3) soma só A1 e A3; para o intervalo, usa-se =SOMA(A1:A3).',
  },
  {
    id: 'informatica-q02',
    temaId: 'informatica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Ao acessar de casa, por meio de VPN, a intranet do órgão e preencher um formulário em página https, o servidor utiliza, ao mesmo tempo, um túnel criptografado e o protocolo HTTP sobre TLS.',
    gabaritoCE: true,
    comentario:
      'Certo. A VPN cifra o tráfego entre o computador e a rede do órgão; o HTTPS (HTTP sobre TLS) cifra a comunicação entre o navegador e o servidor da página. As duas camadas de proteção podem coexistir.',
  },
  {
    id: 'informatica-q03',
    temaId: 'informatica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Relacione os protocolos às funções:\n1. SMTP  2. IMAP  3. DNS  4. HTTPS\n( ) envio de e-mail\n( ) resolução de nomes em endereços IP\n( ) navegação web cifrada\n( ) leitura de e-mail com as mensagens mantidas no servidor\nA sequência correta, de cima para baixo, é:',
    alternativas: ['1 – 3 – 4 – 2', '2 – 3 – 4 – 1', '1 – 4 – 3 – 2', '3 – 1 – 4 – 2', '1 – 3 – 2 – 4'],
    correta: 0,
    comentario:
      'SMTP envia (1); DNS resolve nomes (3); HTTPS é a web cifrada (4); IMAP lê mantendo as mensagens no servidor (2). Sequência: 1 – 3 – 4 – 2.',
  },
  {
    id: 'informatica-q04',
    temaId: 'informatica',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado: 'No Excel, A2 contém o texto Dra. e B2 contém Silva. A fórmula que resulta em “Dra. Silva”, com um espaço entre as palavras, é:',
    alternativas: ['=A2+B2', '=SOMA(A2;B2)', '=A2&" "&B2', '=A2;" ";B2', '=A2&B2'],
    correta: 2,
    comentario:
      'O operador & concatena textos; o " " insere o espaço. =A2&B2 gera “Dra.Silva”, sem espaço. O + e a SOMA tentam operar números (o + com texto gera #VALOR!), e ; não é operador.',
  },
  {
    id: 'informatica-q05',
    temaId: 'informatica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'No Windows, ao excluir com a tecla Delete um arquivo de uma pasta sincronizada com o OneDrive, o arquivo deixa de existir em qualquer local e não pode mais ser recuperado.',
    gabaritoCE: false,
    comentario:
      'Errado. A exclusão é sincronizada, mas não é irreversível: o item vai para a lixeira do OneDrive, que o guarda por 30 dias em contas pessoais (93 dias em contas corporativas, salvo mudança do administrador). Se o arquivo estava disponível no computador, também vai para a Lixeira do Windows; os “somente online” vão só para a lixeira do OneDrive.',
  },
  {
    id: 'informatica-q06',
    temaId: 'informatica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'Sobre noções de informática, assinale a alternativa INCORRETA:',
    alternativas: [
      'O SSD não tem partes móveis e costuma ser mais rápido que o HD.',
      'No Linux, o comando pwd mostra o diretório atual.',
      'No PowerPoint, F5 inicia a apresentação a partir do primeiro slide.',
      'No Excel, o erro #REF! indica divisão por zero.',
      'No SEI, documento externo é aquele produzido fora do sistema e nele incluído.',
    ],
    correta: 3,
    comentario:
      '#REF! indica referência inválida (por exemplo, célula excluída); divisão por zero gera #DIV/0!. As demais afirmações estão corretas.',
  },
];
