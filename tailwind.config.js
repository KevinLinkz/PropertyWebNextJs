/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green': '#00B98E',
        'green-300': '#00d4a3',
        'green-body': '#EFFDF5',
        'green-hover': '#00cf9f',
        'darkblue': '#0E2E50',
        'darkblue-hover': '#19508b',
      }
    },
  },
  plugins: [],
}
