/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html", ".public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        lred: "#F03E3E",
        beige: "#F8F2DC",
      },
      fontFamily: {
        sans: ["Inter", "sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
