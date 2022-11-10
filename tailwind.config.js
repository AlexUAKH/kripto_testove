/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        wh: "0px 18px 21px rgba(34, 39, 47, 0.34)",
        wc: "0px 18px 34px rgba(34, 39, 47, 0.55)",
        wi: "0px 0px 10px rgba(42, 243, 243,0.55)",
      },
      colors: {
        primary: "#24A0F5",
        darkblue: "#0C223C",
        textblur: "#A6AEBF",
        textdark: "#2D4D70",
        white: "#ffffff",
        blackblue: "#0D1C47",
        aqua: "#2AF3F3",
        grad_start: "#2D4D70",
        grad_mid: "#213B57",
        grad_end: "#14273C",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      raleway: ["Raleway", "Arial"],
    },

    textShadow: {
      default: "0px 0px 10px #102032",
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
