/**
 * Pós-build web:
 * 1. Reescreve caminhos absolutos do index.html (manifest, ícones, service worker) quando há EXPO_BASE_URL.
 * 2. Ajusta start_url/scope do manifest para o subcaminho.
 * 3. Copia index.html → 404.html (rotas profundas da SPA no GitHub Pages).
 */
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
const base = (process.env.EXPO_BASE_URL ?? '').replace(/\/$/, '');
const indexPath = resolve(dist, 'index.html');

if (!existsSync(indexPath)) {
  console.error('dist/index.html não encontrado — rode `expo export -p web` antes.');
  process.exit(1);
}

let html = readFileSync(indexPath, 'utf8');
if (base) {
  html = html
    .replace(/href="\/manifest\.json"/g, `href="${base}/manifest.json"`)
    .replace(/href="\/icons\//g, `href="${base}/icons/`)
    .replace(/register\('\/sw\.js'\)/g, `register('${base}/sw.js', { scope: '${base}/' })`);
}
writeFileSync(indexPath, html);
copyFileSync(indexPath, resolve(dist, '404.html'));

const manifestPath = resolve(dist, 'manifest.json');
if (existsSync(manifestPath) && base) {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  manifest.start_url = `${base}/`;
  manifest.scope = `${base}/`;
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
}

console.log(`Pós-build web concluído${base ? ` (baseUrl ${base})` : ''}.`);
