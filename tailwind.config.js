/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
      'dark': {
        background: colors.gray[800],
        primary: colors.gray[700],
        accent: colors.cyan,
        text: colors.gray[100],
      },
      'light':  {
        background: colors.slate[100],
        primary: colors.slate[200],
        accent: colors.teal,
        text: colors.gray[900],
      },
    },
  },
    
  },
  plugins: [],
  darkMode: 'class',
}

