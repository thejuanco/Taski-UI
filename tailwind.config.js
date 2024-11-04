/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '0.5px'
      },
      screens: {
        'custom-sm': '500px', // Cambia 500px al valor deseado
        'custom-md': '750px',
        'custom-lg': '1000px',
      }
    },
  },
  plugins: [],
}