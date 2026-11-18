/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta inspirada no Notion
        page: { DEFAULT: '#FFFFFF', dark: '#191919' },
        side: { DEFAULT: '#F7F7F5', dark: '#202020' },
        ink: { DEFAULT: '#37352F', soft: '#787774', faint: '#9B9A97', dark: '#E6E6E5', 'dark-soft': '#9B9B9B' },
        line: { DEFAULT: '#E9E9E7', dark: '#2F2F2F' },
        hover: { DEFAULT: '#EFEFED', dark: '#2C2C2C' },
        accent: { DEFAULT: '#2383E2', soft: '#E7F3FC', dark: '#529CCA', 'dark-soft': '#1E3A52' },
        tag: {
          gray: '#E3E2E0',
          brown: '#EEE0DA',
          orange: '#FADEC9',
          yellow: '#FDECC8',
          green: '#DBEDDB',
          blue: '#D3E5EF',
          purple: '#E8DEEE',
          pink: '#F5E0E9',
          red: '#FFE2DD',
          'gray-dark': '#373737',
          'brown-dark': '#4A3A32',
          'orange-dark': '#5C3B23',
          'yellow-dark': '#56491F',
          'green-dark': '#243D30',
          'blue-dark': '#1F3A4D',
          'purple-dark': '#3C2D49',
          'pink-dark': '#4E2C3C',
          'red-dark': '#5C2B26',
        },
      },
      borderRadius: { notion: '6px' },
      maxWidth: { page: '900px' },
    },
  },
  plugins: [],
};
