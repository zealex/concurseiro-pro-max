import type { ResumoTema } from '../../../types';
import { ATUALIZADO, F_12550, F_8112, F_CF, F_EC138, F_PR, F_RS, F_SC } from './fontes';

/* Estatutos do Sul, legislação municipal e EBSERH */

export const RESUMOS_2: ResumoTema[] = [
  /* ---------- srv-estatutos-sul ---------- */
  {
    temaId: 'srv-estatutos-sul',
    titulo: 'Estatutos dos servidores do PR, SC e RS',
    resumo:
      'Nos concursos estaduais (Polícia Científica, IGP, secretarias de saúde), a banca troca os prazos da 8.112 pelos do estatuto local. O que mais cai: prazos de posse e exercício, estágio probatório, rol de penas e prescrição.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Cada estado tem o próprio estatuto: **Paraná — Lei 6.174/1970**; **Santa Catarina — Lei 6.745/1985**; **Rio Grande do Sul — Lei Complementar 10.098/1994**. São leis antigas, muito alteradas, e a banca cobra a **redação vigente**. Por isso, estude sempre pelo **texto compilado** do site oficial (Casa Civil do PR, ALESC e Assembleia do RS), nunca por apostila antiga.\n\n**Método:** leia o seu estatuto com a 8.112 ao lado e marque só as **diferenças**. O cérebro já conhece a estrutura (provimento, direitos, deveres, penas, processo); o que derruba o candidato são os números trocados.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Tema', 'PR (Lei 6.174/1970)', 'SC (Lei 6.745/1985)', 'RS (LC 10.098/1994)'],
          linhas: [
            ['Posse', '30 dias da publicação; prorrogação ou revalidação até 30 dias (art. 41)', '30 dias da publicação; prorrogável por mais 30 a requerimento (art. 14)', '15 dias da nomeação; prorrogável por igual período a pedido (art. 18)'],
            ['Exercício', '30 dias da posse, prorrogáveis por até 30 (art. 46)', 'A posse já inicia o exercício (art. 12)', 'Até 30 dias da posse; senão, nomeação sem efeito (art. 22)'],
            ['Estágio probatório (texto)', '2 anos (art. 43)', '3 anos (art. 15, LC 605/2013)', '3 anos (art. 28, LC 15.450/2020)'],
            ['Estabilidade (texto)', '2 anos (art. 136)', '2 anos (art. 47)', '3 anos (art. 30)'],
            ['Penas', 'Advertência, repreensão, suspensão, multa, destituição de função, demissão, cassação (art. 291)', 'Repreensão verbal e escrita, suspensão, destituição, demissão simples e qualificada, cassação de aposentadoria e de disponibilidade (art. 136)', 'Repreensão, suspensão, demissão, cassação de disponibilidade e de aposentadoria, multa, destituição (art. 187)'],
            ['Prescrição', '2 anos (repreensão, suspensão); 5 anos (demissão, destituição, cassação) (art. 301)', '2 anos (repreensão, suspensão, destituição); 5 anos (demissão, cassação) (art. 150)', '12 meses (repreensão); 24 meses (suspensão, multa, demissão por abandono ou ausências); 5 anos (demissão, cassação, destituição) (art. 197)'],
          ],
        },
      },
      {
        tipo: 'atencao',
        texto:
          'Os textos do PR (arts. 43 e 136) e o art. 47 de SC ainda falam em **2 anos**, mas desde a EC 19/1998 a **CF, art. 41**, exige **3 anos de efetivo exercício** e avaliação especial de desempenho para a estabilidade, e a Constituição prevalece sobre a lei estadual. Se a questão pedir “segundo o estatuto”, responda pelo texto; se pedir a regra para adquirir estabilidade hoje, a resposta é 3 anos.',
      },
      {
        tipo: 'lista',
        itens: [
          '**RS — sindicância:** até 30 dias **úteis**, prorrogáveis por igual período (art. 201). **PAD:** 60 + 60 dias (art. 212), por comissão de 3 servidores estáveis com formação superior, ao menos um com formação em Ciências Jurídicas e Sociais (art. 206).',
          '**RS — advertência verbal:** falta de reduzida gravidade gera advertência “particular e verbal”, fora do rol de penas (art. 187, § 2º). Registros de advertência, repreensão, suspensão e multa são cancelados após **10 anos** sem nova infração (art. 190).',
          '**SC — demissão simples e qualificada:** a simples incompatibiliza para cargo público por 2 a 4 anos; a qualificada, por 5 a 10 anos (arts. 138 e 139).',
          '**SC — licença-prêmio:** 3 meses a cada quinquênio de serviço público estadual (art. 78), vedada a conversão em dinheiro (§ 1º) e com gozo em parcelas de no mínimo 15 dias (§ 2º).',
          '**PR — licença especial:** os artigos da licença especial foram revogados pela LC 217/2019. **Férias** (Lei 22.207/2024): 30 dias, parcelamento em até 3 etapas de no mínimo 10 dias e adicional de 33,33% (arts. 149, 151 e 152).',
          '**Abandono e faltas intercaladas:** PR, SC e RS também usam a lógica de **30 dias consecutivos** e **60 dias intercalados**. PR: abandono por 30 dias consecutivos e 60 faltas interpoladas em 12 meses (art. 293, §§ 1º e 2º). SC chama de **inassiduidade permanente** (mais de 30 dias consecutivos) e **intermitente** (60 dias intercalados em 12 meses) (art. 137, parágrafo único). RS: mais de 30 faltas consecutivas e mais de 60 dias intercalados durante um ano (art. 191, IV e V).',
          '**Rito do processo:** em SC, os artigos do processo disciplinar foram revogados pela LC 491/2010; no PR, pela Lei 20.656/2021. Se o edital cobrar processo disciplinar estadual, baixe também essas leis.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Prazo de posse no RS',
        enunciado:
          'Candidato nomeado para o IGP-RS pergunta se tem 30 dias para tomar posse, como na Lei 8.112. O que diz a LC 10.098/1994?',
        resolucao:
          'Não. No RS, a posse ocorre em **15 dias a contar da nomeação**, prorrogáveis por igual período a pedido do interessado (art. 18). Se a posse não ocorrer, a nomeação é tornada sem efeito (art. 20). Depois da posse, há até 30 dias para entrar em exercício (art. 22).',
      },
      {
        tipo: 'texto',
        texto:
          '**Como revisar:** monte uma folha “8.112 × meu estatuto” com quatro linhas (posse, exercício, estágio, prescrição) e o rol de penas. Releia na véspera. As questões estaduais da FUNDATEC e da FEPESE costumam trocar um único número ou um nome de pena (por exemplo, “advertência” no lugar de “repreensão”).',
      },
    ],
    fontes: [F_PR, F_SC, F_RS, F_CF, F_8112],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- srv-municipal ---------- */
  {
    temaId: 'srv-municipal',
    titulo: 'Estatuto municipal e Lei Orgânica: como estudar a lei do seu município',
    resumo:
      'A prova de prefeitura cobra o estatuto do servidor e a Lei Orgânica do município do edital. O banco ensina o método e as regras constitucionais que todo estatuto municipal repete (CF, arts. 29 a 31 e 37 a 41).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Nos editais de prefeitura (FUNDATEC, Objetiva, FEPESE, FURB, Legalle, IBAM), a “Legislação” costuma listar a **Lei Orgânica do Município**, o **Estatuto dos Servidores Municipais** (às vezes chamado Regime Jurídico Único) e, em alguns casos, o plano de carreira. Cada município tem a sua lei, com prazos próprios: não existe resposta universal para “prazo de posse no município”.\n\nA boa notícia: **todo estatuto segue a moldura da CF** (arts. 37 a 41) e quase sempre copia a estrutura da Lei 8.112. Quem domina a 8.112 lê um estatuto municipal em poucas horas, marcando só o que muda.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          '**Ache a lei citada no edital** (número e ano). O edital costuma trazer o link ou o anexo com o texto.',
          '**Baixe a versão atualizada**: site da prefeitura (aba Legislação ou Portal da Transparência), site da Câmara de Vereadores e o portal leismunicipais.com.br, que mostra as leis alteradoras.',
          '**Confira se a versão é consolidada**: procure as leis que alteraram o estatuto depois da data da apostila. Na dúvida, prevalece o texto publicado pelo município.',
          '**Monte a lei seca enxuta**: copie só provimento (posse, exercício, estágio), vacância, licenças, férias, deveres, proibições, penas, prescrição e processo disciplinar.',
          '**Compare com a 8.112** e destaque em cor os números diferentes.',
          '**Na Lei Orgânica**, foque em: competências do município, organização da Câmara e do Executivo, processo legislativo (iniciativa, quórum, sanção e veto) e fiscalização.',
          '**Faça questões antigas da mesma banca para o mesmo município**: bancas repetem os artigos preferidos.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Regra constitucional', 'O que diz', 'Fundamento'],
          linhas: [
            ['Lei Orgânica', 'Votada em 2 turnos, com interstício mínimo de 10 dias, aprovada por 2/3 dos membros da Câmara, que a promulga', 'CF, art. 29, caput'],
            ['Julgamento do Prefeito', 'Perante o Tribunal de Justiça', 'CF, art. 29, X'],
            ['Vereadores', 'Inviolabilidade por opiniões, palavras e votos no exercício do mandato e na circunscrição do município', 'CF, art. 29, VIII'],
            ['Iniciativa popular', 'Projetos de interesse do município, da cidade ou de bairros, com pelo menos 5% do eleitorado', 'CF, art. 29, XIII'],
            ['Contas do Prefeito', 'O parecer prévio do órgão de contas só deixa de prevalecer por 2/3 da Câmara; as contas ficam 60 dias por ano à disposição do contribuinte', 'CF, art. 31, §§ 2º e 3º'],
            ['Novos tribunais de contas municipais', 'Vedada a criação de Tribunais, Conselhos ou órgãos de Contas Municipais', 'CF, art. 31, § 4º'],
            ['Estabilidade', '3 anos de efetivo exercício + avaliação especial de desempenho', 'CF, art. 41'],
            ['Acumulação', 'Só com compatibilidade de horários: 2 de professor; 1 de professor com outro de qualquer natureza; 2 privativos de profissionais de saúde com profissão regulamentada', 'CF, art. 37, XVI'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão com estatuto hipotético',
        enunciado:
          'O enunciado diz: “Segundo o estatuto hipotético do Município X, a posse ocorrerá em 20 dias da publicação do ato, prorrogáveis por 10”. Um médico nomeado tomou posse no 25º dia sem pedir prorrogação. A posse é válida?',
        resolucao:
          'Não. Vale o prazo do estatuto apresentado (20 dias), não o da 8.112 (30 dias). Sem pedido de prorrogação, o prazo encerrou no 20º dia. Questões assim testam leitura: use **só** as regras do enunciado.',
      },
      {
        tipo: 'atencao',
        texto:
          'O médico pode acumular **dois cargos privativos de profissionais de saúde** com profissão regulamentada, desde que haja **compatibilidade de horários** (CF, art. 37, XVI, “c”). Desde a EC 138/2025, a alínea “b” permite **um cargo de professor com outro de qualquer natureza** (antes falava em “técnico ou científico”). Apostila antiga traz a redação revogada.',
      },
    ],
    fontes: [F_CF, F_EC138, F_8112, 'Portal Leis Municipais (consulta a leis municipais consolidadas). https://leismunicipais.com.br'],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- srv-ebserh ---------- */
  {
    temaId: 'srv-ebserh',
    titulo: 'EBSERH: Lei 12.550/2011',
    resumo:
      'Nos concursos da EBSERH cai a natureza jurídica da empresa (empresa pública unipessoal, de direito privado, vinculada ao MEC), o regime celetista com concurso e as finalidades no SUS e no apoio ao ensino.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A Lei 12.550/2011 **autorizou o Poder Executivo a criar** a **Empresa Brasileira de Serviços Hospitalares (EBSERH)**, uma **empresa pública unipessoal**, com **personalidade jurídica de direito privado** e patrimônio próprio, **vinculada ao Ministério da Educação**, com prazo de duração indeterminado (art. 1º). Tem sede e foro em **Brasília** e pode criar **subsidiárias** (art. 1º, §§ 1º e 2º). O capital social é **integralmente da União** (art. 2º).\n\nA empresa administra **hospitais universitários federais**, prestando assistência gratuita **integral e exclusivamente no âmbito do SUS**, e apoia ensino, pesquisa e extensão das universidades federais e instituições congêneres (arts. 3º e 4º).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Ponto', 'Regra', 'Artigo'],
          linhas: [
            ['Natureza', 'Empresa pública unipessoal, de direito privado, vinculada ao MEC', 'Art. 1º'],
            ['Capital', 'Integralmente sob propriedade da União', 'Art. 2º'],
            ['Assistência', 'Gratuita, inserida integral e exclusivamente no SUS; ressarcimento por atendimento a usuários de planos privados', 'Art. 3º, §§ 1º e 3º'],
            ['Contratação da EBSERH', 'Dispensada a licitação para a administração contratá-la em atividades do seu objeto social', 'Art. 5º'],
            ['Vínculo com a universidade', 'Contrato com metas, indicadores, prazos e avaliação, respeitada a autonomia universitária', 'Art. 6º'],
            ['Pessoal permanente', 'Regime da CLT, com contratação condicionada a concurso de provas ou de provas e títulos', 'Art. 10'],
            ['Órgãos', 'Conselho de Administração, Diretoria Executiva, Conselho Fiscal e Conselho Consultivo', 'Art. 9º'],
            ['Controle', 'Controle interno do Executivo e controle externo do Congresso Nacional, com auxílio do TCU', 'Art. 14'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Empregado, não servidor estatutário:** quem passa no concurso da EBSERH é **empregado público celetista** (art. 10). A Lei 8.112 não é o seu estatuto.',
          '**Servidores das universidades** podem ser **cedidos** à EBSERH, mantidos os direitos e vantagens do órgão de origem (art. 7º).',
          '**Título no concurso:** o edital pode pontuar como título o tempo de exercício em atividades correlatas ao emprego (art. 10, parágrafo único).',
          '**Temporários:** contratação por processo seletivo simplificado foi autorizada para a implantação (art. 11) e também com base na CLT, art. 443, § 2º, “a” e “b” (art. 12).',
          '**Lucro líquido** é reinvestido no objeto social, salvo reserva legal e reserva para contingência (art. 8º, parágrafo único).',
          '**Conselho Consultivo:** a participação da sociedade civil não é remunerada e é considerada função relevante (art. 9º, § 4º).',
          '**Estados** podem autorizar a criação de empresas públicas de serviços hospitalares (art. 17).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Natureza do vínculo',
        enunciado:
          'Aprovada no concurso da EBSERH, uma médica pergunta se terá estágio probatório e estabilidade da Lei 8.112. O que responder?',
        resolucao:
          'O regime do pessoal permanente da EBSERH é o da **CLT**, com ingresso por concurso (Lei 12.550, art. 10). Ela será **empregada pública**, e não ocupante de cargo efetivo regido pela 8.112. A estabilidade do art. 41 da CF é dos servidores nomeados para cargo de provimento efetivo.',
      },
      {
        tipo: 'atencao',
        texto:
          'Distratores típicos: “autarquia”, “fundação pública”, “sociedade de economia mista”, “vinculada ao Ministério da Saúde” e “regime estatutário”. Todos errados. A EBSERH é **empresa pública**, de **direito privado**, vinculada ao **MEC**, com pessoal **celetista concursado**, e atua **exclusivamente no SUS**. O edital da EBSERH também lista o **estatuto social** e o **código de ética** da empresa: baixe a versão vigente no site oficial da EBSERH, porque esses documentos mudam por ato interno.',
      },
    ],
    fontes: [F_12550, F_CF],
    atualizadoEm: ATUALIZADO,
  },
];
