/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        blue: '#1976D2',
        blueLight: '#1988e5',
        blueDark: '#1e3a8a',
        blueCyan: 'rgb(25, 166, 210)',
      },
    },
  },
  plugins: [],
}
