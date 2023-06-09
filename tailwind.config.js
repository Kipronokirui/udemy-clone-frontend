/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary:"'Poppins', 'sans-serif'"
      }
    },
  },
  plugins: [],
}

