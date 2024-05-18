/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'primary' : '#FF9F66'
      },
      width : {
        '3/8' : '95%'
      }
    },
  },
  plugins: [],
}