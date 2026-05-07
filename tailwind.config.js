/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'domine-black': '#0a0a0a',
        'domine-dark': '#141414',
        'domine-card': '#1a1a1a',
        'domine-border': '#2a2a2a',
        'domine-gold': '#c9a84c',
        'domine-silver': '#a8a9ad',
        'domine-white': '#f0f0f0',
        'domine-gray': '#6b6b6b',
      },
      fontFamily: {
        'display': ['var(--font-display)'],
        'body': ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
