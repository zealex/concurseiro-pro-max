/** Textos legais (uma única fonte para o site, o app e as fichas das lojas). */

export const CONTROLADOR = 'Alexandre Romero';
export const CONTATO_EMAIL = 'contato@zezasultratools.uk';
export const ATUALIZADO_EM = '25 de novembro de 2026';

export interface SecaoLegal {
  titulo: string;
  paragrafos: string[];
}

export const PRIVACIDADE: SecaoLegal[] = [
  {
    titulo: 'Quem cuida dos seus dados',
    paragrafos: [
      `O Concurseiro Pro Max (site concurseiro.zezasultratools.uk e apps para Android e iOS) é mantido por ${CONTROLADOR}, controlador dos dados pessoais tratados no serviço, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).`,
      `Contato para qualquer assunto de privacidade, inclusive o exercício dos seus direitos: ${CONTATO_EMAIL}.`,
    ],
  },
  {
    titulo: 'Quais dados tratamos',
    paragrafos: [
      'Conta: nome, e-mail e senha (guardada só como resumo criptográfico, nunca em texto). Se você entrar com o Google, recebemos do Google seu nome, e-mail e o endereço da foto do perfil; com a Apple, o nome e o e-mail (que pode ser um endereço de retransmissão da Apple).',
      'Progresso de estudo: o que você registra no app — plano e tarefas concluídas, sessões e histórico de questões, caderno de erros, revisões, flashcards, checklists, sessões de foco, preferências e o acompanhamento de concursos no Radar.',
      'Dados técnicos: endereço IP e identificação do navegador/aparelho associados às sessões de login, um identificador aleatório do aparelho (usado só para a sincronização) e registros técnicos de acesso mantidos pelo provedor de hospedagem.',
      'Não usamos cookies de publicidade nem ferramentas de rastreamento. O único cookie é o da sessão de login.',
    ],
  },
  {
    titulo: 'Para que usamos',
    paragrafos: [
      'Criar e manter sua conta, autenticar o acesso, guardar seu progresso na nuvem e sincronizá-lo entre seus aparelhos (base legal: execução de contrato, art. 7º, V, da LGPD).',
      'Enviar e-mails necessários ao serviço — confirmação de e-mail e redefinição de senha. Não enviamos propaganda.',
      'Proteger o serviço contra abusos, como tentativas repetidas de login (base legal: legítimo interesse, art. 7º, IX).',
    ],
  },
  {
    titulo: 'Com quem compartilhamos',
    paragrafos: [
      'Não vendemos nem cedemos seus dados. Usamos fornecedores que os tratam apenas para prestar o serviço: Railway (hospedagem da API e do banco de dados), Resend (envio dos e-mails de conta), Google (login com Google, se você escolher), Apple (login com a Apple, se você escolher) e Cloudflare (DNS).',
    ],
  },
  {
    titulo: 'Transferência internacional',
    paragrafos: [
      'Os servidores ficam nos Estados Unidos (região leste da Railway), e alguns fornecedores processam dados fora do Brasil. Essa transferência é necessária para executar o serviço que você contratou (art. 33, IX, da LGPD), e os fornecedores adotam medidas de segurança compatíveis.',
    ],
  },
  {
    titulo: 'Por quanto tempo guardamos',
    paragrafos: [
      'Enquanto sua conta existir. Para permitir recuperar um erro de sincronização, o servidor guarda até 20 versões anteriores de cada parte do seu progresso.',
      'Ao excluir a conta, a conta, as sessões, todo o progresso e as versões anteriores são apagados na hora. Restam apenas registros técnicos de acesso do provedor de hospedagem, mantidos por prazo limitado pelo próprio provedor.',
    ],
  },
  {
    titulo: 'Seus direitos',
    paragrafos: [
      'Você pode, a qualquer momento: confirmar e acessar seus dados; corrigi-los; levá-los para outro serviço (em Configurações → Exportar progresso, em formato aberto .json); excluir a conta e todos os dados (em Configurações → Excluir conta, ou na página concurseiro.zezasultratools.uk/excluir-conta); e obter informações sobre o compartilhamento (art. 18 da LGPD).',
      `Para qualquer pedido que não possa fazer pelo app, escreva para ${CONTATO_EMAIL}. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).`,
    ],
  },
  {
    titulo: 'Segurança',
    paragrafos: [
      'Toda comunicação usa conexão criptografada (HTTPS). Senhas são guardadas com algoritmo de resumo resistente a ataques (scrypt). No celular, a sessão fica no armazenamento seguro do sistema (Keychain/Keystore). Nenhum sistema é 100% seguro: se houver um incidente que possa trazer risco a você, avisaremos e comunicaremos a ANPD conforme a lei.',
    ],
  },
  {
    titulo: 'Menores de idade',
    paragrafos: ['O serviço é voltado a adultos que se preparam para concursos públicos e não é destinado a menores de 18 anos.'],
  },
  {
    titulo: 'Mudanças nesta política',
    paragrafos: ['Se esta política mudar de forma relevante, avisaremos no app antes de a mudança valer.'],
  },
];

export const TERMOS: SecaoLegal[] = [
  {
    titulo: 'O serviço',
    paragrafos: [
      `O Concurseiro Pro Max é uma ferramenta gratuita de organização e estudo para concursos públicos, mantida por ${CONTROLADOR}. Ao criar uma conta ou usar o app, você concorda com estes termos e com a Política de Privacidade.`,
    ],
  },
  {
    titulo: 'Sua conta',
    paragrafos: [
      'Informe dados verdadeiros, mantenha sua senha em segredo e avise-nos se suspeitar de uso indevido. Você é responsável pelo que for feito com a sua conta.',
      'Você pode excluir a conta a qualquer momento, em Configurações ou na página /excluir-conta.',
    ],
  },
  {
    titulo: 'Conteúdo e limites',
    paragrafos: [
      'Resumos, questões, planos e guias são materiais de estudo e não garantem aprovação. Confira sempre o edital oficial e a legislação vigente.',
      'O Radar reúne informações públicas sobre concursos, coletadas automaticamente, e pode conter atrasos ou erros. A fonte oficial é sempre o edital publicado pelo órgão ou pela banca.',
    ],
  },
  {
    titulo: 'Uso aceitável',
    paragrafos: [
      'Não tente acessar contas de outras pessoas, sobrecarregar ou burlar o serviço, nem usá-lo para fins ilegais. Contas que violarem estes termos podem ser suspensas.',
    ],
  },
  {
    titulo: 'Disponibilidade',
    paragrafos: [
      'Buscamos manter o serviço sempre no ar e o progresso guardado com segurança, mas ele pode ter interrupções e mudanças. Recomendamos exportar um backup do progresso de vez em quando.',
    ],
  },
  {
    titulo: 'Propriedade intelectual',
    paragrafos: ['Os textos, questões e o software do Concurseiro Pro Max são protegidos por direitos autorais. O seu progresso é seu.'],
  },
  {
    titulo: 'Responsabilidade',
    paragrafos: [
      'Na medida permitida pela lei, não respondemos por danos indiretos decorrentes do uso do serviço. Nada nestes termos limita os direitos garantidos pelo Código de Defesa do Consumidor.',
    ],
  },
  {
    titulo: 'Lei aplicável',
    paragrafos: [
      `Estes termos seguem a lei brasileira. Dúvidas ou reclamações: ${CONTATO_EMAIL}. Fica eleito o foro do domicílio do usuário.`,
    ],
  },
];
