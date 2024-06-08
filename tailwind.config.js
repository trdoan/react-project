/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        modal: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
      transitionProperty: {
        modal: 'opacity, visibility',
      },
    },
  },
  plugins: [],
}
