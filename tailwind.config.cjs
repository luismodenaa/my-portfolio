/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "background-page": "#09090B",

      "color-pink": "#BA50CD",
      "color-purple": "#3918BA",
      "color-orange": "#EE6A3E",
      white: "#FFFFFF",

      "grey-1": "#231F1E",
      "grey-2": "#9C9C9C",
      "grey-3": "#DCDCDC",
      "grey-4": "#373737",
      "grey-5": "#161617",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
