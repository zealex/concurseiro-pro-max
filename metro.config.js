const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Fixtures HTML do robô não fazem parte do app.
config.resolver.blockList = [/scripts[\\/]__fixtures__[\\/].*/];

module.exports = withNativeWind(config, { input: './global.css' });
