/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D5C74', // Bleu foncé
        secondary: '#BEBEBE', // Gris clair
        tertiary: '#333333', // Gris très clair
        accent: '#F0B200', // Jaune pour les appels à l'action
        background: '#F5F5F5', // Fond des sections
        backgroundSand: '#ECEBE6', // Fond des sections
        dark: '#1A1A1A', // Couleur sombre
        light: '#FFFFFF', // Blanc
        highlight: '#FFD700', // Jaune doré
        border: '#E0E0E0', // Bordure
      },
      fontFamily: {
        sans: ['Antartica', 'Arial', 'sans-serif'],
        heading: ['Antartica', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};
