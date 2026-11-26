# Arquitetura — Concurseiro Pro Max

Ecossistema de preparação de 90 dias para o médico generalista / recém-formado que presta concursos sem exigência de especialidade (Perito Médico Federal e peritos de regimes próprios, Perito Médico-Legista, Clínico Geral/ESF; o Radar cobre todo o Brasil), composto por três camadas que compartilham uma única base de código TypeScript, mais uma API própria para contas e sincronização (ver [Nuvem](#nuvem--contas-e-sincronização)).

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 1. CONTEÚDO (inteligência pedagógica)                                        │
│    docs/*.md  ──(versão legível)──  src/data/*.ts (dados tipados, ids estáveis)│
│    eixos · plano 12 semanas · checklists lei seca/NRs · cheat sheets ·        │
│    cursinhos · bancas · fontes oficiais · editais · guias das fases           │
│    src/data/conteudo/bancos/<disciplina> (resumos, questões, flashcards)      │
└───────────────┬──────────────────────────────────────────────────────────────┘
                │ import estático (leve) · import() sob demanda (bancos)
                │ tudo no precache do service worker → funciona offline
┌───────────────▼──────────────────────────────────────────────────────────────┐
│ 2. APP UNIVERSAL (Expo + Expo Router + RN Web + NativeWind)                   │
│    src/app (rotas) → src/components (UI estilo Notion)                        │
│    src/store (Zustand + persist) → src/services/storage (escopo por conta:    │
│    IndexedDB na web, SQLite no nativo) ⇄ src/sync (merge 3 vias) ⇄ API        │
│    src/utils (lógica pura: revisão espaçada, agenda, métricas)               │
│    src/services/concursosTrackerService (feed remoto + cache + overlay)       │
└───────────────▲──────────────────────────────────────────────────────────────┘
                │ HTTPS GET (CORS liberado no raw.githubusercontent / same-origin)
┌───────────────┴──────────────────────────────────────────────────────────────┐
│ 3. PIPELINE RADAR (GitHub Actions de hora em hora)                            │
│    scripts/scrape-concursos.ts → fontes (PCI, Concursos no Brasil, JC,        │
│    Objetiva, FUNDATEC, FEPESE, Diários Oficiais dos Municípios)               │
│    → classificação/geo/dedupe (src/shared/concursos)                          │
│    → public/data/concursos-sul.json → commit; o site serve o feed do GitHub   │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Princípios

1. **Offline-first com nuvem**: o progresso vive no aparelho (o app abre e funciona sem rede) e é sincronizado com a conta do usuário quando há conexão. O servidor trata o progresso como JSON opaco por store; toda a lógica de domínio e de merge fica no app. Além da API própria, a única chamada de rede é a leitura de um JSON estático público (feed do Radar).
2. **Uma única fonte de verdade por conceito**:
   - Esquema do concurso (`src/shared/concursos/schema.ts`, zod) é usado pelo robô **e** pelo app.
   - Ids de temas (`src/data/eixos.ts`) ligam plano, questões, revisões, pontos fracos e biblioteca.
3. **Lógica pura separada da UI**: `src/utils/*` e `src/shared/*` não importam React Native — são testados com Vitest em Node.
4. **Determinismo**: a agenda do dia é função pura de (data, configurações, progresso). Recarregar o app nunca "sorteia" outra agenda.
5. **Honestidade dos dados**: nenhum concurso inventado. Todo registro do Radar tem `fonteUrl`. Conteúdo normativo cita a norma/portaria; números que variam entre autores trazem a faixa e a referência.

## Camada 2 — App

### Navegação (Expo Router, `src/app`)

| Rota | Tela |
|---|---|
| `/` | Dashboard de Prontidão |
| `/cronograma` | Cronograma interativo (12 semanas, trilha, Modo Plantão) |
| `/radar`, `/radar/[id]`, `/radar/novo` | Radar (tabela/kanban), detalhe, cadastro manual |
| `/questoes`, `/questoes/revisoes`, `/questoes/erros` | Central de questões, revisões D1/D7/D15/D30, caderno de erros |
| `/questoes/treino`, `/questoes/flashcards`, `/questoes/simulado` | Treino com questões comentadas, flashcards (Leitner), simulado no formato do edital |
| `/edital` | Meu Edital: composição da prova-alvo, nota projetada, risco de eliminação (sidebar; fora da barra mobile) |
| `/biblioteca`, `/biblioteca/[slug]` | Wiki estratégica embarcada; `disciplina-<id>`, `resumo-<temaId>`, `guia-<id>`, `editais`, `checklist-<id>`, `cheat-<id>` |
| `/foco` | Timer Pomodoro |
| `/configuracoes` | Prova-alvo, plano, feed, tema, backup JSON, conta (sincronização, sair, definir senha, excluir conta) |
| `/entrar`, `/criar-conta`, `/verificar-email`, `/esqueci-senha` | Grupo `(auth)`: login com e-mail/senha ou Google; no iOS, também "Usar sem conta" |
| `/redefinir-senha`, `/privacidade`, `/termos`, `/excluir-conta` | Rotas públicas (abrem sem conta): link do e-mail, textos legais (LGPD), exclusão de conta exigida pelas lojas |

Sem conta aberta, `src/app/(tabs)/_layout.tsx` redireciona para `/entrar`. O snapshot local da conta (não a sessão do servidor) decide isso, para o app continuar abrindo offline; só um 401 real marca a sessão como expirada (aviso no topo, dados preservados, sincronização pausada).

`src/app/(tabs)/_layout.tsx` decide o "shell" pela largura da janela (`useWindowDimensions`):

- **≥ 768 px** → Sidebar fixa estilo Notion + conteúdo (`<Slot/>`), com layout multi-coluna via `md:`/`lg:`/`xl:`.
- **< 768 px** → Bottom Tabs (Início, Cronograma, Radar, Questões, Biblioteca). Foco e Configurações ficam em atalhos do cabeçalho.
- O esquema de cores é sempre aplicado de forma explícita (claro/escuro, calculado a partir da preferência do usuário e do sistema), para que as classes `dark:` e as cores usadas em ícones nunca divirjam.

### Persistência

```
Zustand store (skipHydration) ──persist──▶ zustandAdapter (StateStorage)
                                                  │
                                                  ▼
                      escopo.ts: chave = "cpm:v1:" + escopo + nome da store
                      (escopo da conta aberta; leitura que falha bloqueia gravações;
                       gravações agrupadas por chave; aba só-leitura não grava)
                                                  │
                                                  ▼
                      BackendKV — Web: IndexedDB (idb-keyval, com cópia única do
                      localStorage antigo) · iOS/Android: expo-sqlite/kv-store
```

| Escopo | Prefixo da chave | Uso |
|---|---|---|
| conta | `cpm:v1:u:<userId>:` | progresso de cada conta (trocar de conta nunca mistura dados) |
| sem conta (iOS) | `cpm:v1:local:` | "Usar sem conta"; ao entrar numa conta ainda vazia neste aparelho, os dados passam para ela |
| global | `cpm:v1:global:` | snapshot da conta, sessão (fallback no nativo) |
| sync | `cpm:v1:<escopo>sync:<store>` | `rev` e `base` (último estado combinado com o servidor) de cada store |
| legado | `cpm:v1:<store>` | dados de antes das contas; adotados pela primeira conta que entrar no aparelho |

| Store | Conteúdo |
|---|---|
| `settings` | trilha, data de início, orçamento diário (180–360 min), dias em Modo Plantão, prova-alvo, **edital-alvo** (validado por zod), URL do feed (só no aparelho), tema |
| `treino` | totais por questão do Treino (não um log), caixas dos flashcards, preferências, simulado em andamento (só no aparelho, fora do backup) |
| `cronograma` | blocos concluídos (por id), notas por bloco, histórico de atividade |
| `questoes` | sessões de questões/simulados, caderno de erros, itens de revisão espaçada |
| `radar` | último feed válido (só no aparelho), overlay do usuário (status/notas), concursos manuais, concursos já vistos |
| `checklist` | itens de lei seca/NR marcados |
| `focus` | configuração Pomodoro, timer em andamento (só no aparelho), sessões |

**Boot** (`src/store/hydration.ts`): `carregando` → `sem-conta` (vai para `/entrar`) ou `pronto` (escopo da conta aberto e as 7 stores hidratadas) ou `erro` (tela "Tentar de novo"; nada é gravado). O layout raiz só renderiza as rotas fora de `carregando`/`erro`. Trocar de conta: fecha o escopo, volta as stores ao padrão sem gravar, abre o novo escopo e reidrata. Na web, só uma aba fica ativa (`src/services/abaUnica.ts`, BroadcastChannel); as outras viram só-leitura até "Usar aqui".

**Backup**: `backupService` serializa todas as stores em `{ app, schemaVersion, exportedAt, data }`. Importação valida com zod, aplica as mesmas migrações das stores a backups de versões anteriores e pede confirmação antes de sobrescrever. O mesmo formato (v4) é usado pela exportação LGPD da API (`GET /api/conta/exportar`).

**Migrações**: `src/store/migracoes.ts` (funções puras, testadas). v2: trilhas antigas viram as novas (híbrida → generalista, trabalho → perícia, municipal → clínico), eixo e disciplina das questões são recalculados pelo tema e o cronograma descarta as marcações do plano anterior, preservando a ofensiva. v3 (questões): com o eixo `basicos`, sessões, erros e revisões têm eixo/disciplina recalculados pelo tema (idempotente). A importação de backup usa uma tabela de versões (`src/store/importacao.ts`: backup v1–v4 → versão de cada store) e as mesmas migrações.

### Lógica de domínio (pura)

- `utils/spacedRepetition.ts` — cada item tem `baseDate` e `stage` (0..3). Vencimentos: base+1, +7, +15, +30 dias. Concluir avança o estágio; desempenho < 70% (ou "difícil") reinicia o ciclo a partir do dia da revisão.
- `utils/scheduler.ts` — monta a agenda do dia:
  1. Determina a semana do plano a partir da data de início (ou da compressão por prova-alvo).
  2. Filtra os blocos da semana pela trilha ativa e distribui seg→sáb pelo orçamento diário (domingo = revisões + caderno de erros).
  3. Blocos de dias anteriores não concluídos entram como **Redistribuídas** no próximo Dia Padrão (teto +60 min/dia).
  4. **Modo Plantão** (45–60 min): só questões rápidas, lei seca/NR e revisões devidas; a teoria do dia vai para a fila de redistribuição.
  5. **Compressão**: se a prova-alvo cai antes de 12 semanas, as 4 últimas semanas viram o mesociclo 3 e as anteriores recebem apenas os blocos `essencial` das semanas 1–8, em proporção.
- `utils/metrics.ts` — acurácia por eixo/disciplina/banca/tema, pontos fracos (< 70% com ≥ 10 questões), horas líquidas da semana, ofensiva (streak), contagem regressiva, evolução dos simulados (sessões do mesmo `lote` somadas).
- `data/selecaoBlocos.ts` — quais blocos de básicas entram na semana: núcleo sempre; complemento e reforço (este só se as básicas valem ≥ 50% do edital) enquanto couberem em 5 × orçamento diário. Com edital-alvo, entram as disciplinas do edital; sem ele, as da trilha. A distribuição tem duas passadas: blocos médicos como antes; básicas no dia útil com menos básicas, evitando repetir disciplina.
- `utils/edital.ts` — pontos por item/prova, fatia das básicas, perfil para o cronograma, nota projetada (Certo/Errado líquido: acerto − penalidade × erro), status de cada mínimo (folga, no limite < 115%, abaixo) e divisão de tempo.
- `utils/treino.ts` / `utils/flashcards.ts` / `utils/simulado.ts` — seleção por rodízio de temas (inéditas primeiro, texto-base junto), correção com penalidade; caixas de Leitner 1/3/7/15/30 dias com limite diário de novos; montagem do simulado item a item (formato da prova primeiro) e correção na escala do edital, com itens sem banco estimados pelo histórico.

## Camada 3 — Pipeline do Radar

```
GitHub Actions (cron 23 * * * * = de hora em hora, + workflow_dispatch)
  ├─ restaura a memória do robô (scripts/data/radar-estado.json) do cache do Actions
  ├─ npx tsx scripts/scrape-concursos.ts   (grava public/data/concursos-sul.json: nome mantido p/ apps instalados)
  │    ├─ fontes em paralelo por host (1,5 s entre requisições ao mesmo host, robots.txt respeitado)
  │    │    ├─ PCI Concursos  /concursos/{sul,sudeste,centrooeste,nordeste,norte}/ (+ /nacional/: UFs da lotação na notícia)
  │    │    ├─ Concursos no Brasil  /concursos/{uf}/  (27 UFs)
  │    │    ├─ JC Concursos  /concursos/inscricoes-abertas (nacional) → página do concurso (órgão, banca, UFs, agenda)
  │    │    ├─ Instituto Objetiva  home + /index/abertos/ → página oficial com a TABELA DE VAGAS e o PDF do edital
  │    │    ├─ Diários Oficiais dos Municípios (SIGPub, ~18 estados) → busca "médico" em editais dos últimos 3 dias,
  │    │    │    descarta pelo título o que não é abertura e lê a matéria inteira (abertura + vaga de médico)
  │    │    ├─ FUNDATEC  (lista de inscrições abertas → registro próprio ou enriquecimento)
  │    │    └─ FEPESE    (destaques → registro próprio ou enriquecimento)
  │    ├─ estado.ts     → abre TODA notícia nova ou alterada (sem pré-filtro pelo título); revisita as médicas a cada 24 h;
  │    │                  orçamento de páginas por host; o que sobrar fica pendente para a próxima hora
  │    ├─ classify.ts   → é vaga médica? (caixa alta e minúsculas) tag: medico-legista | pericia-medica | medicina-do-trabalho
  │    │                  | medicina-geral-especialidades ("Perito Médico" em Polícia Científica/IGP → legista)
  │    ├─ geo.ts        → 27 UFs; cidade validada contra 5.571 municípios do IBGE (scripts/gerar-municipios.ts);
  │    │                  siglas que são palavras (SE, AL, PA…) só com "/", "-" ou "("; "para" ≠ Pará
  │    ├─ id.ts/merge   → slug(uf-cidade-orgao-tag-ano); 2º certame do mesmo órgão no ano → "-edN" (separarPorEdital)
  │    ├─ merge.ts      → firstSeenAt = data da notícia (ou da 1ª coleta); isNew = ≤ 7 dias; poda encerrados
  │    └─ grava public/data/concursos-sul.json se a lista mudou, se uma fonte caiu/voltou ou a cada 6 h (batimento)
  ├─ salva a memória no cache · verificar-radar.ts → issue "Radar: fonte X com problema" (3 falhas seguidas)
  ├─ git commit + push (github-actions[bot], com rebase e novas tentativas) — NÃO redeploya o site
  └─ confere se o generatedAt novo já aparece em https://concurseiro.zezasultratools.uk/data/concursos-sul.json
```

- Cada fonte roda isolada (try/catch por fonte, em paralelo). A saúde vai para `feed.sources[]` (com `essencial` para PCI e Concursos no Brasil). Listagem vazia conta como falha (HTML mudou). Se **todas** falharem, o script sai com código 1 e não toca no feed.
- Nada some em silêncio: notícia que falhou, ficou sem orçamento ou gerou registro inválido aparece no log e no resumo.
- O site serve `/data/concursos-sul.json` por proxy do GitHub (raw), com a cópia do build como reserva (`infra/web/Caddyfile`). Commits do robô não disparam deploy.
- Links de edital protegidos por captcha (ex.: PCI) **não** são contornados: o `editalUrl` aponta para a página pública da notícia/banca (ou para o PDF público, quando a banca o expõe, como a Objetiva). Bloqueios também não: a fonte fica como "melhor esforço" (FUNDATEC responde 403 aos servidores do GitHub; a JC às vezes responde 403 a acessos repetidos; as páginas de concurso da Objetiva respondem 403 ao GitHub — aí a listagem da banca vira link oficial e prazo nos registros do mesmo órgão vindos das outras fontes). Um 401/403 encerra as tentativas na hora.
- Fontes **essenciais** (alarme e aviso no app): PCI e Concursos no Brasil. As demais são complementares — um concurso só some do Radar se faltar em todas.
- Fora do Radar por regra do próprio site (verificado em 25/11/2026): DOU/`in.gov.br` e DOM/SC (`diariomunicipal.sc.gov.br`) proíbem robôs no `robots.txt`; a API do Querido Diário (`api.queridodiario.org.br`) estava fora do ar (HTTP 503) — candidata a fonte quando voltar.
- Prioridade na fusão de registros do mesmo concurso: manual > curadoria > Objetiva (página oficial) > PCI > Concursos no Brasil > JC > FUNDATEC > FEPESE > Diário Oficial; os outros só completam campos vazios, e os cargos são unidos.
- Parsers são testados contra HTML real salvo em `scripts/__fixtures__/` (inclusive o caso Chapecó/SC 2026).

### Consumo no app

```
sincronizarRadar()
  1. URL configurada pelo usuário  ─┐
  2. EXPO_PUBLIC_CONCURSOS_FEED_URL ─┤ primeira que responder 200 + JSON válido (zod)
  3. /data/concursos-sul.json (web)  ─┤ (no site, é proxy do raw do GitHub)
  3b. raw.githubusercontent.com      ─┘
  4. falhou tudo → último feed em cache (store `radar`, no aparelho)
  5. sem cache → JSON embarcado no bundle (public/data/concursos-sul.json)

mergeWithOverlay(feed, overlay, manuais)
  - status pessoal (Novo/Radar, Analisando, Inscrito, Prova Agendada, Finalizado) e notas nunca são sobrescritos
  - concurso com status pessoal que sumiu do feed é mantido e marcado como arquivado
  - concursos manuais (id "manual-…") convivem com os do feed
  - isNew recalculado no dispositivo (firstSeenAt ≥ hoje − 7 dias)
```

## Nuvem — contas e sincronização

```
App (web / Android / iOS)                         Railway (us-east)
src/services/auth ── Better Auth client ──HTTPS──▶ api: Hono + Better Auth ──▶ Postgres
src/sync/motor    ── /api/sync (pull/put) ──HTTPS──▶      Drizzle ORM           (user_store,
                                                                                 histórico)
```

**API** (`server/`, autocontida: `package.json` próprio, não importa `src/`):

- `ALL /api/auth/*` — Better Auth: e-mail/senha com confirmação e redefinição por e-mail (Resend), Google por redirecionamento do navegador (um único cliente OAuth "Web" serve web, Android e iOS), plugin Expo para o app nativo, exclusão de conta, sessão de 60 dias, rate limit. Cookies só do subdomínio da API (sem `crossSubDomainCookies`).
- `POST /api/sync/pull {revs}` devolve só os documentos que mudaram; `PUT /api/sync/:store {baseRev, schemaVersion, data, deviceId}` grava por compare-and-swap no `rev` (409 `conflito` traz o documento atual). Cotas: 2 MB por documento, 10 MB por usuário. Histórico em `user_store_history` (até 20 cópias).
- `GET /api/conta/exportar` (portabilidade, formato de backup v4) e `POST /api/conta/definir-senha` (contas criadas só com Google).
- Middlewares: sessão, Origin permitida (CSRF), `callbackURL` só para o site/app (sem open redirect), limite de corpo.
- O contrato (stores, limites, versão do backup) existe em `server/src/sync/contrato.ts` e `src/sync/contrato.ts`; um teste garante que são iguais.

**Sincronização no app** (`src/sync/`):

- Um documento por store e por usuário. Cada store guarda a `base` (último estado combinado com o servidor); conflito = **merge de 3 vias** (base, local, remoto) com regras por store em `specs.ts` — listas por id, registros, conjuntos, grupos de campos atômicos, exclusão vence edição, `posMerge` refaz cascatas (ex.: erro apagado leva junto suas revisões). Resolvedores só escolhem um lado (nunca somam), então o merge é idempotente. Campos só do aparelho (`feedUrl`, cache do feed, timer, simulado em andamento) nunca sobem.
- `motor.ts`: reconcilia na ordem segura contra quedas (migra → mescla → aplica nas stores e espera gravar → só então salva `rev`/`base`), envia com debounce de 2,5 s (máx. 15 s), refaz o merge em 409, backoff de 2 s a 5 min sem rede, pausa em 401, bloqueia a store se o servidor tiver versão de esquema mais nova. Gatilhos (`gatilhos.ts`): mudanças nas stores, app em primeiro plano, volta da rede, a cada 3 min; ao sair da conta, envia o que falta antes.
- Proteção: o sync só liga com o escopo aberto e as 7 stores hidratadas; uma leitura que falha deixa o app na tela de erro, sem gravar nem enviar nada — uma store "vazia por erro" nunca apaga a nuvem. No primeiro login de um aparelho (sem `base`), vale a união com a nuvem.

**App nativo**: a sessão fica no SecureStore; se o cofre do sistema travar ou falhar (visto em emuladores como o BlueStacks), `armazenamentoSessao.native.ts` cai para o kv-store do SQLite depois de 6 s. Toda chamada de login tem prazo de 30 s.

## Web / PWA

- `web.output: "single"` (SPA) — evita renderização no servidor, que quebraria o acesso ao armazenamento do navegador durante a hidratação.
- `public/index.html` customizado: `<link rel="manifest">`, `theme-color`, ícones Apple, registro do service worker.
- `npm run build:web` = `expo export -p web` → `workbox generateSW` (precache do app + NetworkFirst para o feed) → `scripts/postbuild-web.mjs`.
- Hospedagem: serviço `web` da Railway (`infra/web/Dockerfile`: build no Node 24 → Caddy). O `Caddyfile` faz o fallback da SPA (menos `/_expo`, `/assets` e `/data`, que dão 404 de verdade), cache imutável só para arquivos com hash e `no-cache` no resto (inclusive `sw.js` e o feed). Runbook: [docs/infra/railway.md](docs/infra/railway.md).
- O GitHub Pages não é mais usado; a versão antiga do app (sem contas) está na tag `pages-legado`.

## Conteúdo e trilhas

- **Eixos** (`src/data/types.ts`): `pericia` (Perícia, Previdência e Trabalho), `legal` (Medicina Legal, inclui Criminalística), `clinica` (Clínica Médica e Urgência), `tronco` (SUS, Epidemiologia e Ética Médica), `basicos` (Conhecimentos Básicos e Gerais: Português, Matemática, RLM, Inglês, Informática, Constitucional, Administrativo, Penal, Servidor, Ética/LAI/LGPD, Legislação geral, Regionais do Sul, Atualidades, Redação).
- **Bancos de conteúdo** (`src/data/conteudo/`): um banco por disciplina (`bancos/<id>/index.ts` → `BancoConteudo`), acessado só por `carregar.ts` com `import()` de caminho literal. Na web, o Metro gera um arquivo por banco, baixado quando a disciplina é aberta e incluído no precache do service worker. Um teste barra imports estáticos de `bancos/`. `validar.ts` (usado por teste e por `npm run conteudo:validar`) confere ids, temas, alternativas, gabarito equilibrado, `verificar()` das contas, `fundamento` em disciplinas de lei e cobertura mínima por tema. O conteúdo é escrito por um autor e conferido por um revisor independente (regras em `docs/guia-de-conteudo.md`).
- **Editais** (`src/data/editais.ts`): composição real de 15 provas lidas no PDF com `npm run edital` (`scripts/ler-edital.ts` + `scripts/lib/edital/`, funções puras testadas com fixture).
- **Trilhas**: `generalista` (padrão, todos os eixos), `pericia` (perícia + clínica + tronco), `legista` (legal + tronco), `clinico` (clínica + tronco). Blocos de aprofundamento são exclusivos de uma trilha.
- **Carreiras do generalista** (`src/data/carreiras.ts`): requisito, prova e trilha de cada cargo, com base no edital do Perito Médico Federal 2024 e nos editais recentes de legista no Sul.

## Testes

Vitest cobre a lógica pura: revisão espaçada, agenda (trilhas, Plantão, redistribuição, compressão, básicas por perfil e orçamento, ids legados congelados), métricas, edital e nota projetada, treino, flashcards, simulado, bancos de conteúdo (validador em todos os bancos registrados), migrações v1→v3, importação de backup v1–v4, classificador/geo, id/merge do Radar, parsers com fixtures reais e o leitor de editais. Na parte de contas: escopos do armazenamento (troca de conta sem vazamento, erro de leitura não grava), merge de 3 vias (casos por store, identidade e convergência com dados aleatórios), motor de sync contra um servidor falso com CAS (dois aparelhos offline convergem, 409, backoff, 401, versão nova bloqueia). A API (`server/test/`) roda contra PGlite (Postgres em memória): CAS, isolamento entre usuários, cotas, cascata na exclusão, exportação válida e bloqueio de redirecionamentos externos. O CI (`ci.yml`) roda tipos e testes do app e tipos, testes e build da API; a Railway só publica depois dele. A UI é validada por `tsc --noEmit`, pelo build web (`expo export`) e por roteiros no navegador e no Android.

## Decisões e trade-offs

| Decisão | Motivo | Custo aceito |
|---|---|---|
| Feed do Radar como JSON estático + GitHub Actions (fora da API) | grátis, auditável por commit, o mesmo para todos os usuários | o cron do GitHub pode atrasar; por isso roda de hora em hora e o app avisa quando o feed passa de 12 h |
| IndexedDB (web) e expo-sqlite/kv-store (nativo) em vez de localStorage/AsyncStorage | progresso + base do sync + importação passariam da cota de ~5 MB do localStorage, que falha em silêncio | um backend por plataforma (mesma interface `BackendKV`) |
| Um documento JSON por store + merge de 3 vias no app, em vez de CRDT ou log de eventos | os tipos de domínio não mudam; servidor simples (JSON opaco + CAS); regras de conflito testáveis em Vitest | o documento inteiro sobe a cada envio (até 2 MB; normalmente dezenas de KB) |
| Better Auth na própria API, em vez de Firebase/Supabase | dados e contas num Postgres só, sem dependência de plataforma, custo fixo da Railway | e-mails, rate limit e exclusão de conta configurados à mão |
| Google por redirecionamento do navegador, em vez de SDK nativo | um único cliente OAuth "Web" para web, Android e iOS; sem SHA-1 nem client IDs por plataforma | abre o navegador do sistema por alguns segundos |
| Login obrigatório (exceto "Usar sem conta" no iOS) | nuvem e vários aparelhos sem caminhos paralelos; o iOS exige uso sem conta quando o app não depende de conta (diretriz 5.1.1(v)) | quem só quer usar offline precisa criar conta (fora do iOS) |
| Vitest só para lógica pura | evita conflito de transformadores Babel/NativeWind | componentes não têm teste de renderização |
| SPA em vez de estático | o estado vem do aparelho e da conta, sem SSR | SEO irrelevante para app pessoal |
| Um registro por concurso × grupo de cargo | id estável mesmo se o texto da listagem mudar | prefeitura com Médico ESF e Médico do Trabalho gera dois cards |
| Acesso (generalista × especialista) derivado da categoria, não gravado no feed | feeds antigos continuam válidos e a regra muda sem reprocessar | "Médico Auditor" ou perito de RPPS que exija especialização aparece como generalista — o card manda conferir o edital |
| Bancos de conteúdo por `import()` em vez de JSON remoto | offline desde a instalação (precache), tipado e testado no CI, sem servidor | conteúdo novo exige nova versão do app |
| Questões autorais "no estilo" das bancas | sem risco de direito autoral; comentário e fundamento próprios | volume menor que um banco comercial — o app ensina a combinar com Qconcursos/TEC |
| Histórico do Treino como totais por questão | cabe com folga na cota de 2 MB por documento da nuvem | não há replay de cada tentativa |
| Migrações versionadas das stores (v1 → v2) | trilhas/eixos renomeados sem perder questões e revisões | marcações do cronograma antigo são descartadas (o plano foi reescrito) |
