/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#355B3E",
        secondary: "#F5DBC4",
        dimgreenButton: "#029664",
        dimgreenText: "#58745E",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "960px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
