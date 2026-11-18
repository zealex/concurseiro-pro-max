/**
 * Gera os ícones do app (Expo + PWA) a partir de um SVG desenhado aqui.
 * Uso: node scripts/generate-icons.mjs
 */
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

const raiz = process.cwd();
mkdirSync(resolve(raiz, 'assets'), { recursive: true });
mkdirSync(resolve(raiz, 'public', 'icons'), { recursive: true });

// Página estilo Notion com um estetoscópio estilizado e um check.
const simbolo = (escala = 1) => `
  <g transform="translate(512 512) scale(${escala}) translate(-512 -512)">
    <rect x="262" y="212" width="500" height="600" rx="56" fill="#FFFFFF" stroke="#37352F" stroke-width="36"/>
    <line x1="342" y1="342" x2="682" y2="342" stroke="#37352F" stroke-width="30" stroke-linecap="round"/>
    <line x1="342" y1="432" x2="602" y2="432" stroke="#9B9A97" stroke-width="26" stroke-linecap="round"/>
    <line x1="342" y1="512" x2="540" y2="512" stroke="#9B9A97" stroke-width="26" stroke-linecap="round"/>
    <path d="M362 642 l60 60 l130 -150" fill="none" stroke="#2383E2" stroke-width="44" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="672" cy="672" r="58" fill="#2383E2"/>
    <path d="M672 614 v-40 a70 70 0 0 0 -70 -70" fill="none" stroke="#2383E2" stroke-width="22" stroke-linecap="round"/>
  </g>`;

const svg = ({ fundo = '#F7F7F5', escala = 1, raio = 220 } = {}) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
    ${fundo ? `<rect width="1024" height="1024" rx="${raio}" fill="${fundo}"/>` : ''}
    ${simbolo(escala)}
  </svg>`);

const saidas = [
  ['assets/icon.png', svg({ raio: 0 }), 1024],
  ['assets/adaptive-icon.png', svg({ fundo: '', escala: 0.72 }), 1024],
  ['assets/splash-icon.png', svg({ fundo: '' }), 512],
  ['assets/favicon.png', svg({ raio: 180 }), 48],
  ['public/icons/icon-192.png', svg({ raio: 180 }), 192],
  ['public/icons/icon-512.png', svg({ raio: 180 }), 512],
  ['public/icons/maskable-512.png', svg({ raio: 0, escala: 0.78 }), 512],
  ['public/icons/apple-touch-icon.png', svg({ raio: 0 }), 180],
];

for (const [arquivo, buffer, tamanho] of saidas) {
  await sharp(buffer).resize(tamanho, tamanho).png().toFile(resolve(raiz, arquivo));
  console.log(`✓ ${arquivo} (${tamanho}px)`);
}
