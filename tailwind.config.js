/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vyom-midnight': '#0B0E17',
        'aurora-teal': '#00B8A9',
        'summit-gold': '#F5C74E',
        'celestial-haze': '#F7F7F7',
        'orbit-silver': '#DDE3EA',
        'comet-plum': '#6C3EF2',
        'eclipse-grey': '#2B2F3A',
        'event-coral': '#FF6B57',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'Arial', 'sans-serif'],
        'inter': ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};