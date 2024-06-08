/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        libre: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
}

