/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: '#0f2c3f',
      secondary: '#d2181e',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    maxWidth: {
      '6/10': '60%',
    },
    extend: {
      spacing: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
      },
    },
  },
  plugins: [],
}
