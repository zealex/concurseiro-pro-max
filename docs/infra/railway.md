# Infraestrutura: Railway, domínio e serviços externos

Runbook de operação do Concurseiro Pro Max em produção.

## Visão geral

```
Cloudflare (DNS do zezasultratools.uk, nuvem cinza / "DNS only")
├─ concurseiro.zezasultratools.uk      → Railway · serviço "web" (site/PWA, Caddy)
├─ api-concurseiro.zezasultratools.uk  → Railway · serviço "api" (Hono + Better Auth)
├─ send.concurseiro / resend._domainkey.concurseiro → Resend (e-mails)
└─ contato@zezasultratools.uk          → Email Routing → Gmail do responsável

Railway · projeto "concurseiro-pro-max" (região us-east4-eqdc4a)
├─ Postgres  (volume postgres-volume, 5 GB, rede privada "postgres")
├─ api       (server/, Dockerfile próprio; migra o banco antes de cada deploy)
└─ web       (infra/web/Dockerfile: expo export web + Workbox → Caddy)

GitHub (zealex/concurseiro-pro-max)
├─ ci.yml            → tipos + testes do app e da API (a Railway espera o CI passar)
└─ update-concursos-sul.yml → robô do Radar de hora em hora (commit em public/data; NÃO redeploya o "web":
                               o Caddy serve o feed direto do GitHub — ver "Feed do Radar" abaixo)
```

| Item | Valor |
|---|---|
| Projeto Railway | `concurseiro-pro-max` · `526f0f41-afb9-4df8-864b-d608def4f4cd` |
| Serviço `web` | `7440bfac-c8fb-42ac-8903-f9d2b375d2c2` |
| Serviço `api` | `d88583a5-68b8-416d-afd9-08884cfbb7ec` |
| Projeto EAS | `@zealex/concurseiro-pro-max` · `31158525-1c97-4dcd-af9b-941a761d5b4d` |
| Google Cloud | projeto `concurseiro-pro-max`, cliente OAuth "Aplicativo da Web", consentimento publicado |
| Resend | domínio `concurseiro.zezasultratools.uk` (sa-east-1) |

## Deploy

Automático: cada push em `main` que toque nos arquivos de um serviço (`watchPatterns` em `.railway/railway.ts`) faz a Railway construir e publicar esse serviço **depois** que o CI passa.

- `web`: muda com `src/`, `public/index.html`, `public/manifest.json`, `public/icons/`, `assets/`, `infra/web/` e as configs do Expo. O feed do robô (`public/data/`) **não** dispara deploy.
- `api`: muda com `server/**`. Antes de trocar a versão, roda `node dist/migrate.js` (migrações do Drizzle); se falhar, a versão antiga continua no ar. Healthcheck em `/health`.

Ver o andamento: painel da Railway, ou `railway logs -s api` / `railway logs -s web`.

## Feed do Radar (`/data/concursos-sul.json`)

O robô (`.github/workflows/update-concursos-sul.yml`) roda de hora em hora e commita `public/data/concursos-sul.json` em `main`. O site **não** é republicado por isso:

- O Caddy (`infra/web/Caddyfile`) atende `/data/concursos-sul.json` com proxy para `raw.githubusercontent.com/zealex/concurseiro-pro-max/main/public/data/concursos-sul.json` (repositório público; CDN do GitHub guarda até 5 min).
- Se o GitHub falhar ou demorar, serve a cópia embutida no último build. O cabeçalho `X-Radar-Feed` diz a origem: `github` ou `local`.
- O app também tenta a URL raw do GitHub como última opção (`src/services/concursosTrackerService.ts`).
- Depois de cada push, o workflow confere se o `generatedAt` novo já aparece em produção (até 10 min). Se não aparecer, o job falha e o GitHub avisa por e-mail.

Por que não redeployar: commits do `github-actions[bot]` (autor fora do workspace) ficavam em **NEEDS_APPROVAL** na Railway, e push com `GITHUB_TOKEN` nem dispara o CI. Foi isso que deixou o edital de Chapecó (25/11/2026) fora do app por horas.

Conferir: `curl -sI https://concurseiro.zezasultratools.uk/data/concursos-sul.json | grep -i x-radar-feed`.

## Infra como código (`.railway/railway.ts`)

Serviços, variáveis não secretas, volume, região e healthchecks ficam em `.railway/railway.ts` (SDK `railway/iac`). Para mudar:

```bash
# No Git Bash, chame o executável direto (o atalho do npm quebra a checagem de versão do SDK):
RAILWAY=/c/Users/Alexandre/AppData/Roaming/npm/node_modules/@railway/cli/bin/railway.exe
$RAILWAY config plan          # mostra o que mudaria
$RAILWAY config apply --yes   # aplica
```

- O IaC **não** registra domínios próprios: use `railway domain <domínio> -s <serviço> -p 8080` e crie na Cloudflare o CNAME e o TXT `_railway-verify.<sub>` que ele mostrar (nuvem cinza).
- Atualizar o CLI: `npm install -g @railway/cli@latest --allow-scripts=@railway/cli` (o `railway upgrade` não acha o npm, e o npm novo bloqueia o download do binário sem `--allow-scripts`).
- O `railway.json` (config-as-code) foi descontinuado pela Railway; não use.

## Variáveis e segredos

| Serviço | Variável | Origem |
|---|---|---|
| api | `NODE_ENV`, `PORT`, `API_URL`, `WEB_URL`, `DATABASE_URL` | IaC (`DATABASE_URL` referencia o Postgres) |
| api | `BETTER_AUTH_SECRET` | gerado uma vez, gravado direto na Railway (`preserve()` no IaC) |
| api | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | Google Cloud → Credenciais (colados à mão na Railway) |
| api | `RESEND_API_KEY` | Resend → API Keys (colada à mão na Railway) |
| api | `ORIGENS_EXTRAS` (opcional) | origens extras aceitas pelo CORS, separadas por vírgula |
| web | `PORT`, `EXPO_PUBLIC_WEB_URL`, `EXPO_PUBLIC_API_URL` | IaC (embutidas no build do site) |

Segredos **nunca** entram no repositório nem no IaC. Trocar um segredo: Railway → serviço `api` → Variables → editar → a Railway redeploya. Trocar o `BETTER_AUTH_SECRET` desloga todo mundo.

Os builds nativos recebem `EXPO_PUBLIC_API_URL`, `EXPO_PUBLIC_WEB_URL` e `EXPO_PUBLIC_CONCURSOS_FEED_URL` pelo `eas.json`.

## Banco de dados

- Tabelas: as do Better Auth (`user`, `session`, `account`, `verification`) + `user_store` (um documento JSON por usuário e por store, com `rev` para compare-and-swap) + `user_store_history` (até 20 cópias por documento: a cada 30 min ou quando ele encolhe mais de 50%).
- Cotas: 2 MB por documento, 10 MB por usuário.
- Migrações: `server/drizzle/*.sql`, geradas com `cd server && npm run db:generate` depois de mudar `server/src/db/schema.ts`. Rodam sozinhas no deploy.
- **Backup:** backups automáticos do volume dependem do plano da Railway (painel → Postgres → Backups). Cópia manual: `railway connect Postgres` abre um `psql`; ou `pg_dump "$DATABASE_URL"` com a URL pública do painel.
- Exclusão de conta apaga o usuário e, em cascata, sessões, contas vinculadas, documentos e histórico.

## Rodar a API localmente

```bash
cd server
cp .env.example .env      # preencha DATABASE_URL e BETTER_AUTH_SECRET
npm install
npm run build && npm run migrate
npm run dev               # http://localhost:3000
```

Sem `RESEND_API_KEY`, os e-mails (confirmação, redefinição) aparecem no log. Fora de produção, a API aceita `http://localhost:8081`, `:4173` e `:19006` como origem. No app: `EXPO_PUBLIC_API_URL=http://localhost:3000 npm run web`.

Testes da API (`npm test` em `server/`) usam PGlite (Postgres em memória), sem Docker.

## Problemas comuns

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| Login no site falha com erro de rede | API fora do ar ou origem não permitida | `railway logs -s api`; confira `WEB_URL`/`ORIGENS_EXTRAS` |
| E-mail de confirmação não chega | chave do Resend inválida ou domínio desverificado | painel do Resend → Logs / Domains |
| "Entrar com Google" volta com erro | URI de redirecionamento diferente | Google Cloud → cliente OAuth → `https://api-concurseiro.zezasultratools.uk/api/auth/callback/google` |
| Site não atualiza depois do push | CI falhou (a Railway espera) ou o arquivo não está nos `watchPatterns` | aba Actions do GitHub; `.railway/railway.ts` |
| Radar sem concursos novos / job "Conferir se o feed chegou ao site" falhou | proxy do Caddy caiu para a cópia local (`X-Radar-Feed: local`) ou o robô não conseguiu dar push | `curl -sI …/data/concursos-sul.json`; logs do workflow do Radar; `railway logs -s web` |
| Deploy da API falha no pre-deploy | migração com erro | logs do deploy no painel (ou `railway logs -s api`); a versão anterior continua no ar |

