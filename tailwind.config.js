const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      gray: colors.neutral,
      primary: {
        100: '#F1F7F4',
        200: '#BEE7E3',
        300: '#7DA9AE',
        400: '#56858A',
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
