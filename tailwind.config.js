/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"], // Asegúrate de incluir todas las rutas donde usarás clases de Tailwind
  theme: {
    extend: {
      colors: {
        customBlue: '#35b5dc',
      },
    },
  },
  plugins: [],
}
