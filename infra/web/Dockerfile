# Site (PWA) do Concurseiro Pro Max servido pela Railway.
# Contexto de build = raiz do repositório.
#   1) Node: `expo export -p web` + Workbox (service worker) + pós-build
#   2) Caddy: arquivos estáticos com fallback de SPA e cache adequado

FROM node:24-bookworm-slim AS build
WORKDIR /app
ENV CI=1 EXPO_NO_TELEMETRY=1

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# Variáveis públicas embutidas no bundle (a Railway passa as variáveis do serviço como build args).
ARG EXPO_PUBLIC_API_URL=""
ARG EXPO_PUBLIC_WEB_URL=""
ARG EXPO_PUBLIC_CONCURSOS_FEED_URL=""
ENV EXPO_PUBLIC_API_URL=$EXPO_PUBLIC_API_URL \
    EXPO_PUBLIC_WEB_URL=$EXPO_PUBLIC_WEB_URL \
    EXPO_PUBLIC_CONCURSOS_FEED_URL=$EXPO_PUBLIC_CONCURSOS_FEED_URL

# Domínio próprio: sem subcaminho (EXPO_BASE_URL vazio).
RUN npm run build:web

FROM caddy:2-alpine
COPY infra/web/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv
