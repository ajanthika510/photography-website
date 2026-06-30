/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          dark: "#121212",
          card: "#181818",
          cream: "#F5EFEB",
          gold: "#D4AF37",
          bronze: "#C5A880",
          muted: "#A89F91",
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Outfit'", "sans-serif"],
      },
      letterSpacing: {
        widest: ".2em",
        extra: ".3em",
      }
    },
  },
  plugins: [],
}
