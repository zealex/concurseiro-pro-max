const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

/** Bloqueia uma pasta da raiz do projeto (sem afetar pastas homônimas dentro de node_modules). */
function pastaDaRaiz(nome) {
  const abs = path.resolve(__dirname, nome).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\\\/g, '[\\\\/]');
  return new RegExp(`^${abs}[\\\\/].*`);
}

// Fixtures HTML do robô, o servidor (API, com node_modules próprio) e a infraestrutura não fazem parte do app.
config.resolver.blockList = [/scripts[\\/]__fixtures__[\\/].*/, pastaDaRaiz('server'), pastaDaRaiz('infra')];

module.exports = withNativeWind(config, { input: './global.css' });
