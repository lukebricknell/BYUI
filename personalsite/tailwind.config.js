/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", ".public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        lred: "#F03E3E",
        beige: "#F8F2DC",
      },
    },
  },
  plugins: [],
};
