/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f1e8',
        charcoal: '#1a1a1a',
        moss: '#4a5d47',
        dusk: '#2d3e3a',
        ember: '#c87a5a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}