# Arquitetura — Concurseiro Pro Max

Ecossistema de preparação de 90 dias para concursos médicos (Medicina do Trabalho, Médico Legista e editais médicos municipais/estaduais da Região Sul), composto por três camadas que compartilham uma única base de código TypeScript.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 1. CONTEÚDO (inteligência pedagógica)                                        │
│    docs/*.md  ──(versão legível)──  src/data/*.ts (dados tipados, ids estáveis)│
│    eixos · plano 12 semanas · checklists lei seca/NRs · cheat sheets ·        │
│    cursinhos · bancas · fontes oficiais                                       │
└───────────────┬──────────────────────────────────────────────────────────────┘
                │ import estático (embarcado no bundle, funciona offline)
┌───────────────▼──────────────────────────────────────────────────────────────┐
│ 2. APP UNIVERSAL (Expo + Expo Router + RN Web + NativeWind)                   │
│    src/app (rotas) → src/components (UI estilo Notion)                        │
│    src/store (Zustand + persist) → src/services/storage (repositório tipado   │
│    sobre AsyncStorage: SQLite/arquivos no nativo, localStorage na web)        │
│    src/utils (lógica pura: revisão espaçada, agenda, métricas)               │
│    src/services/concursosTrackerService (feed remoto + cache + overlay)       │
└───────────────▲──────────────────────────────────────────────────────────────┘
                │ HTTPS GET (CORS liberado no raw.githubusercontent / same-origin)
┌───────────────┴──────────────────────────────────────────────────────────────┐
│ 3. PIPELINE RADAR SUL (GitHub Actions a cada 12h)                             │
│    scripts/scrape-concursos-sul.ts → fontes (PCI, Concursos no Brasil,        │
│    FUNDATEC, FEPESE) → classificação/geo/dedupe (src/shared/concursos)        │
│    → public/data/concursos-sul.json → commit automático se houver mudança     │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Princípios

1. **Local-first**: todo o progresso do usuário vive no dispositivo. Nada depende de servidor próprio. A única chamada de rede do app é a leitura de um JSON estático público.
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
| `/radar`, `/radar/[id]`, `/radar/novo` | Radar Sul (tabela/kanban), detalhe, cadastro manual |
| `/questoes`, `/questoes/revisoes`, `/questoes/erros` | Central de questões, revisões D1/D7/D15/D30, caderno de erros |
| `/biblioteca`, `/biblioteca/[slug]` | Wiki estratégica embarcada |
| `/foco` | Timer Pomodoro |
| `/configuracoes` | Prova-alvo, plano, feed, tema, backup JSON |

`src/app/(tabs)/_layout.tsx` decide o "shell" pela largura da janela (`useWindowDimensions`):

- **≥ 768 px** → Sidebar fixa estilo Notion + conteúdo (`<Slot/>`), com layout multi-coluna via `md:`/`lg:`/`xl:`.
- **< 768 px** → Bottom Tabs (Início, Cronograma, Radar Sul, Questões, Biblioteca). Foco e Configurações ficam em atalhos do cabeçalho.
- O esquema de cores é sempre aplicado de forma explícita (claro/escuro, calculado a partir da preferência do usuário e do sistema), para que as classes `dark:` e as cores usadas em ícones nunca divirjam.

### Persistência

```
Zustand store ──persist──▶ zustandAdapter (StateStorage)
                                │
                                ▼
                     Repository<T> (chave versionada "cpm:v1:<nome>", JSON,
                                    migrações por versão, try/catch)
                                │
                                ▼
              @react-native-async-storage/async-storage
              (iOS/Android: armazenamento nativo · Web: localStorage)
```

| Store | Chave | Conteúdo |
|---|---|---|
| `settings` | `cpm:v1:settings` | trilha, data de início, orçamento diário, dias em Modo Plantão, prova-alvo, URL do feed, tema |
| `cronograma` | `cpm:v1:cronograma` | blocos concluídos (por id), notas por bloco, histórico de atividade |
| `questoes` | `cpm:v1:questoes` | sessões de questões/simulados, caderno de erros, itens de revisão espaçada |
| `radar` | `cpm:v1:radar` | último feed válido, overlay do usuário (status/notas), concursos manuais, última sincronização |
| `checklist` | `cpm:v1:checklist` | itens de lei seca/NR marcados |
| `focus` | `cpm:v1:focus` | configuração Pomodoro, timer em andamento (timestamps), sessões |

O layout raiz só renderiza as telas depois que todas as stores terminam a hidratação, evitando "piscar" estado vazio.

**Backup**: `backupService` serializa todas as stores em `{ app, schemaVersion, exportedAt, data }`. Importação valida com zod e pede confirmação antes de sobrescrever.

### Lógica de domínio (pura)

- `utils/spacedRepetition.ts` — cada item tem `baseDate` e `stage` (0..3). Vencimentos: base+1, +7, +15, +30 dias. Concluir avança o estágio; desempenho < 70% (ou "difícil") reinicia o ciclo a partir do dia da revisão.
- `utils/scheduler.ts` — monta a agenda do dia:
  1. Determina a semana do plano a partir da data de início (ou da compressão por prova-alvo).
  2. Filtra os blocos da semana pela trilha ativa e distribui seg→sáb pelo orçamento diário (domingo = revisões + caderno de erros).
  3. Blocos de dias anteriores não concluídos entram como **Redistribuídas** no próximo Dia Padrão (teto +60 min/dia).
  4. **Modo Plantão** (45–60 min): só questões rápidas, lei seca/NR e revisões devidas; a teoria do dia vai para a fila de redistribuição.
  5. **Compressão**: se a prova-alvo cai antes de 12 semanas, as 4 últimas semanas viram o mesociclo 3 e as anteriores recebem apenas os blocos `essencial` das semanas 1–8, em proporção.
- `utils/metrics.ts` — acurácia por eixo/disciplina/banca/tema, pontos fracos (< 70% com ≥ 10 questões), horas líquidas da semana, ofensiva (streak), contagem regressiva.

## Camada 3 — Pipeline do Radar Sul

```
GitHub Actions (cron 0 */12 * * * + workflow_dispatch)
  └─ npx tsx scripts/scrape-concursos-sul.ts
       ├─ fontes (sequencial, 1–2 s entre requisições, robots.txt respeitado)
       │    ├─ PCI Concursos  /concursos/sul/  (+ /concursos/nacional/ só p/ itens médicos com lotação no Sul)
       │    ├─ Concursos no Brasil  /concursos/{pr,sc,rs}/  (+ detalhe para itens suspeitos de saúde)
       │    ├─ FUNDATEC  (lista de inscrições abertas → enriquecimento: banca, prazo, link oficial)
       │    └─ FEPESE    (destaques de concursos → enriquecimento: banca, link oficial)
       ├─ classify.ts   → é vaga médica? tag: medico-legista | medicina-do-trabalho | medicina-geral-especialidades
       ├─ geo.ts        → UF ∈ {PR, SC, RS}? cidade validada contra 1.191 municípios do IBGE
       ├─ id.ts         → slug(uf-cidade-orgao-cargoChave-ano)
       ├─ merge.ts      → preserva firstSeenAt, atualiza lastSeenAt, isNew (≤ 7 dias), poda encerrados
       └─ grava public/data/concursos-sul.json somente se a lista mudou
  └─ git commit + push (github-actions[bot]) se houver diff
```

- Cada fonte roda isolada (`Promise.allSettled`). A saúde de cada uma vai para `feed.sources[]`. Se **todas** falharem, o script sai com código 1 e não toca no arquivo.
- Links de edital protegidos por captcha (ex.: PCI) **não** são contornados: o `editalUrl` aponta para a página pública da notícia/banca.
- Parsers são testados contra HTML real salvo em `scripts/__fixtures__/`.

### Consumo no app

```
refreshRadar()
  1. URL configurada pelo usuário  ─┐
  2. EXPO_PUBLIC_CONCURSOS_FEED_URL ─┤ primeira que responder 200 + JSON válido (zod)
  3. /data/concursos-sul.json (web)  ─┘
  4. falhou tudo → último feed em cache (AsyncStorage)
  5. sem cache → JSON embarcado no bundle (public/data/concursos-sul.json)

mergeWithOverlay(feed, overlay, manuais)
  - status pessoal (Novo/Radar, Analisando, Inscrito, Prova Agendada, Finalizado) e notas nunca são sobrescritos
  - concurso com status pessoal que sumiu do feed é mantido e marcado como arquivado
  - concursos manuais (id "manual-…") convivem com os do feed
  - isNew recalculado no dispositivo (firstSeenAt ≥ hoje − 7 dias)
```

## Web / PWA

- `web.output: "single"` (SPA) — evita renderização no servidor, que quebraria o acesso ao `localStorage` durante a hidratação.
- `public/index.html` customizado: `<link rel="manifest">`, `theme-color`, ícones Apple, registro do service worker.
- `npm run build:web` = `expo export -p web` → `workbox generateSW` (precache do app + NetworkFirst para o feed) → cópia de `index.html` para `404.html` (rotas profundas no GitHub Pages).
- `deploy-web.yml` publica no GitHub Pages; `app.config.ts` aplica `EXPO_BASE_URL` (subcaminho do repositório).

## Testes

Vitest cobre a lógica pura: revisão espaçada, agenda (trilhas, Plantão, redistribuição, compressão), métricas, classificador/geo, id/merge do Radar, parsers com fixtures reais e validação de backup. A UI é validada por `tsc --noEmit` e pelo build web (`expo export`).

## Decisões e trade-offs

| Decisão | Motivo | Custo aceito |
|---|---|---|
| JSON estático + GitHub Actions em vez de backend | grátis, sem servidor, sem CORS, auditável por commit | atualização no máximo a cada 12 h |
| AsyncStorage em vez de SQLite | funciona igual nas 3 plataformas, sem build nativo extra | volume de dados pequeno (ok para 90 dias) |
| Vitest só para lógica pura | evita conflito de transformadores Babel/NativeWind | componentes não têm teste de renderização |
| SPA em vez de estático | estado 100% local, sem SSR | SEO irrelevante para app pessoal |
| Um registro por concurso × grupo de cargo | id estável mesmo se o texto da listagem mudar | prefeitura com Médico ESF e Médico do Trabalho gera dois cards |
