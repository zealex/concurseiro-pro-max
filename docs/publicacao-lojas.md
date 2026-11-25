# Publicação nas lojas (Google Play e App Store)

Roteiro do que falta para publicar o app nativo. Estado em 25/11/2026: o app Android já foi testado em aparelho (tablet) e em emulador (BlueStacks), com login, sincronização e exclusão de conta funcionando em produção; nada foi enviado às lojas ainda.

> Regras, valores e prazos das lojas conferidos em nov/2026. Elas mudam: confira de novo na hora de começar.

## Resumo

| | Google Play | App Store |
|---|---|---|
| Conta de desenvolvedor | US$ 25, uma vez | US$ 99 por ano |
| Gargalo | **teste fechado com 12 testadores por 14 dias seguidos** (contas pessoais) | implementar **Sign in with Apple** antes do primeiro envio |
| Revisão | dias (o pedido de acesso à produção pode levar ~1 semana) | 1–3 dias em média |
| Build | `eas build -p android --profile production` (AAB) | `eas build -p ios --profile production` (nuvem, sem Mac) |

**Ordem recomendada**

1. Criar a conta do **Google Play** primeiro e começar o teste fechado — os 14 dias correm enquanto o resto anda.
2. Criar a conta **Apple Developer** → eu implemento o Sign in with Apple → TestFlight.
3. Fichas das lojas (textos, capturas) — eu preparo os rascunhos.
4. Envio para revisão nas duas.

## O que já está pronto

- Projeto EAS `@zealex/concurseiro-pro-max`; perfil `production` no `eas.json` (Android em AAB, número de build incrementado pelo EAS).
- Identificador `br.com.concurseiropromax.app` (iOS e Android) — **não pode mudar depois do primeiro envio**.
- Login com e-mail/senha (com confirmação por e-mail) e Google; "Usar sem conta" no iOS (diretriz 5.1.1(v) da Apple).
- Exclusão de conta dentro do app (Configurações → Conta) e na web: https://concurseiro.zezasultratools.uk/excluir-conta (exigência das duas lojas).
- Política de privacidade (https://concurseiro.zezasultratools.uk/privacidade) e termos (https://concurseiro.zezasultratools.uk/termos), já citando Google e Apple como provedores de login.
- Exportação dos dados em `.json` (portabilidade, LGPD).
- Notificações só locais (fim do Pomodoro): não precisa de credenciais de push.
- `ITSAppUsesNonExemptEncryption: false` no `app.json` (o app só usa HTTPS; dispensa a pergunta de criptografia a cada envio).
- Pacote `expo-apple-authentication` já instalado.

## 1. Google Play

### 1.1 Conta e app (você)

1. Criar a conta em https://play.google.com/console (tipo **pessoal**), pagar US$ 25 e fazer a verificação de identidade (documento) e do telefone. A verificação pode levar alguns dias.
2. **Criar app**: nome "Concurseiro Pro Max", idioma padrão Português (Brasil), tipo App, Gratuito.

### 1.2 Conteúdo do app (Painel → "Configurar o app")

| Item | Resposta |
|---|---|
| Política de privacidade | https://concurseiro.zezasultratools.uk/privacidade |
| Acesso ao app | Login obrigatório → informar uma **conta de demonstração** (e-mail e senha, já confirmada). Criamos na hora do envio e ela fica ativa enquanto o app estiver na loja. |
| Anúncios | Não contém anúncios |
| Classificação de conteúdo | Questionário (categoria Educação). O conteúdo de medicina legal descreve lesões e mortes em contexto técnico/educacional — responder com sinceridade. |
| Público-alvo | 18 anos ou mais (médicos formados); fica fora das regras de apps para crianças |
| Apps de saúde | Declarar que **não** é app de saúde (é material de estudo para concursos) |
| Segurança dos dados | ver 1.3 |
| Exclusão de conta | https://concurseiro.zezasultratools.uk/excluir-conta |
| Apps governamentais / recursos financeiros | Não |

### 1.3 Segurança dos dados (Data safety)

- **Coletados:** nome e e-mail (Informações pessoais); progresso de estudo (Atividade no app → outras ações / conteúdo gerado pelo usuário); identificador aleatório do aparelho usado na sincronização (IDs de dispositivo ou outros).
- **Finalidade:** funcionalidade do app e gerenciamento da conta. Nada para publicidade ou análise.
- **Compartilhamento:** nenhum (Railway, Resend e Google atuam como prestadores de serviço, o que não conta como compartilhamento).
- **Criptografia em trânsito:** sim. **Exclusão a pedido:** sim (no app e no link acima).

### 1.4 Primeiro envio

1. `eas build -p android --profile production` → baixar o `.aab`.
2. **O primeiro AAB vai à mão:** Play Console → Testar e lançar → Teste fechado → criar faixa → criar versão → enviar o `.aab`. Aceitar a **Assinatura de apps do Google Play**.
3. Para os próximos envios saírem do terminal (`eas submit`):
   - Google Cloud (projeto `concurseiro-pro-max`) → IAM → Contas de serviço → criar → gerar chave JSON;
   - Play Console → Usuários e permissões → convidar o e-mail da conta de serviço com permissão de lançar versões;
   - `eas credentials` → Android → Google Service Account → enviar o JSON. **O JSON nunca entra no git** (o `.gitignore` já barra `google-service-account*.json`);
   - adicionar `"android": { "track": "internal" }` (ou `"alpha"` para teste fechado) em `submit.production` no `eas.json`.

### 1.5 Teste fechado obrigatório

Contas pessoais criadas depois de 13/11/2023 só podem pedir acesso à produção depois de um **teste fechado com pelo menos 12 testadores inscritos por 14 dias seguidos**.

- Testadores precisam de conta Google. Adicione por lista de e-mails ou por um Grupo do Google; cada um abre o link de inscrição e instala o app pela Play Store.
- Os 14 dias contam com os 12 inscritos ao mesmo tempo — se alguém sair, o prazo pode reiniciar. Convide uns 15 para ter folga.
- Depois: Painel → **Solicitar acesso à produção** (questionário sobre o teste: quantos testaram, que feedback veio, o que mudou).

## 2. App Store

### 2.1 Conta e app (você)

1. Inscrever-se no **Apple Developer Program** (https://developer.apple.com/programs/) como pessoa física: US$ 99/ano; precisa de Apple ID com verificação em duas etapas. Como pessoa física, seu nome aparece como vendedor na loja.
2. **App Store Connect** → Apps → novo app: plataforma iOS, nome "Concurseiro Pro Max", idioma principal Português (Brasil), bundle ID `br.com.concurseiropromax.app`, SKU `concurseiro-pro-max`.
3. Para o `eas submit`: o EAS cria a chave da API do App Store Connect sozinho no primeiro envio (pede login com o Apple ID). Alternativa manual: Usuários e acesso → Integrações → chave de equipe (função App Manager) → guardar o `.p8`, o Key ID e o Issuer ID fora do git.
4. Registrar seus aparelhos para builds internos: `eas device:create`.

### 2.2 Sign in with Apple (obrigatório)

A diretriz 4.8 da Apple exige que um app com login de terceiros (o Google) ofereça também uma opção de login com proteção de privacidade equivalente — na prática, **Sign in with Apple**. Sem isso o app é recusado.

**Você, no portal da Apple (Certificates, Identifiers & Profiles):**

1. **Keys** → nova chave com "Sign in with Apple" habilitado, ligada ao App ID do app → baixar o `.p8` (só dá para baixar uma vez), anotar o **Key ID** e o **Team ID**.
2. **Services → Sign in with Apple for Email Communication** → registrar o domínio `concurseiro.zezasultratools.uk` e o remetente `nao-responda@concurseiro.zezasultratools.uk`. Sem isso, os e-mails para quem escolhe "Ocultar meu e-mail" (endereços `@privaterelay.appleid.com`) voltam.
3. Colar na Railway (serviço `api` → Variables), sem passar por mim: `APPLE_TEAM_ID`, `APPLE_KEY_ID` e `APPLE_PRIVATE_KEY` (conteúdo do `.p8`).

**Eu, no código:**

- API: provedor `apple` no Better Auth, validando o `idToken` do app; o *client secret* (um JWT que a Apple aceita por no máximo 6 meses) é gerado pelo servidor a partir do `.p8`, então não expira.
- App: botão "Entrar com a Apple" no iOS (`expo-apple-authentication`); a Apple só manda o nome no primeiro login, então ele é gravado nessa hora; `ios.usesAppleSignIn: true` no `app.json` (o EAS liga a capacidade no App ID).
- Exclusão de conta: revogar o token da Apple (exigência desde 30/06/2022).
- "Definir senha" já existe para quem entrou só com Google/Apple e quer entrar na web.

### 2.3 Privacidade do app (rótulos da App Store)

- **Informações de contato:** nome, e-mail — vinculados ao usuário, finalidade "Funcionalidade do app".
- **Conteúdo do usuário:** progresso de estudo — vinculado, "Funcionalidade do app".
- **Identificadores:** ID do usuário (conta) e o identificador aleatório de sincronização — vinculados, "Funcionalidade do app".
- **Rastreamento:** não.

### 2.4 Revisão

- **Notas para o revisor:** conta de demonstração (e-mail e senha); onde fica a exclusão de conta (Configurações → Conta → Excluir conta); que o login com Google abre o navegador do sistema; que "Usar sem conta" funciona só no aparelho.
- Fluxo: `eas build -p ios --profile production` → `eas submit -p ios` → **TestFlight** (teste interno com até 100 pessoas, sem revisão) → enviar para revisão.

### 2.5 Ajustes no app antes do primeiro envio

- `ios.supportsTablet`: hoje é `true`, o que obriga a enviar capturas de iPad. Para o primeiro envio, considerar `false` (o app roda no iPad em modo iPhone) e reativar numa atualização.
- `expo.description` no `app.json` ainda fala em "Medicina do Trabalho" — alinhar com o foco atual (médico generalista).
- Versão visível (`expo.version`, hoje `1.0.0`): sobe a cada atualização publicada; o número do build o EAS incrementa sozinho.

## 3. Fichas das lojas (as duas)

Eu preparo os rascunhos em `docs/loja/` quando for a hora. Limites:

| Campo | Google Play | App Store |
|---|---|---|
| Nome | até 30 caracteres | até 30 |
| Frase curta | descrição curta, até 80 | subtítulo, até 30 |
| Descrição | até 4.000 | até 4.000 |
| Palavras-chave | — | até 100 caracteres |
| Ícone | 512×512 PNG | vem do build |
| Arte | gráfico de destaque 1024×500 | — |
| Capturas | celular: 2 a 8; tablet 7" e 10" para aparecer como app de tablet | iPhone 6,9" (e iPad 13" se `supportsTablet: true`); o App Store Connect mostra os tamanhos exigidos |

- **Categoria:** Educação. **Contato:** contato@zezasultratools.uk. **Site:** https://concurseiro.zezasultratools.uk.
- **Aviso na descrição:** "App independente, sem vínculo com o INSS, a Polícia Científica, prefeituras ou bancas organizadoras; as questões são autorais, no estilo das bancas." Evita recusa por parecer oficial ou usar marca de terceiros.

## 4. Checklist antes de enviar

- [ ] Contas de desenvolvedor criadas e verificadas (Play e Apple)
- [ ] Sign in with Apple implementado e testado no TestFlight
- [ ] Conta de demonstração criada (e-mail confirmado) e anotada nas duas lojas
- [ ] `app.json`: descrição atualizada; decisão sobre `supportsTablet`
- [ ] Build de produção instalado e testado: cadastro, confirmação por e-mail, Google, Apple (iOS), sincronização entre dois aparelhos, sair/entrar, redefinir senha, excluir conta
- [ ] Data safety (Play) e rótulos de privacidade (Apple) preenchidos conforme as seções 1.3 e 2.3
- [ ] Classificação de conteúdo e público-alvo respondidos
- [ ] Capturas e textos das fichas
- [ ] Teste fechado do Play com 12+ testadores por 14 dias concluído

## 5. Depois de publicar

- Cada atualização do app nativo é um novo build + revisão. Para corrigir só JavaScript sem passar pela loja, dá para adicionar o **EAS Update** depois (hoje não está configurado).
- Acompanhar falhas e travamentos: Play Console → Estatísticas vitais; App Store Connect → TestFlight/Falhas.
- Responder avaliações e manter a conta de demonstração ativa (os revisores usam de novo a cada atualização).
- Renovar o Apple Developer todo ano — se vencer, o app sai da App Store.
