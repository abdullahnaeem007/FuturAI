/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brandBlue': '#1FD1E3',
        'brandDarkBlue': '#04011C',
        'text': '#C2BAFF',
        'color1': "#04011C",
        'color2': "#1FD1E3",
      },
    },
  },
  plugins: [],
}