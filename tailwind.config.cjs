/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anime: ['Audiowide', 'cursive', 'ui-sans-serif', 'system-ui'],
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(255px, 1fr))',
      },
    },
  },
  plugins: [],
};
