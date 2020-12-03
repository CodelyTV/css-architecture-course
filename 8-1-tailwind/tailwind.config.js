const colors = require("tailwindcss/colors");

module.exports = {
  variants: {
    extend: {
      margin: ["children"],
    },
  },
  plugins: [
    require("tailwindcss-children"),
    require("tailwindcss-break"),
    require("tailwindcss-multi-column")(),
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    columnWidth: {
      md: "18rem",
    },
    breakInside: [
      "auto",
      "avoid",
      "avoid-page",
      "avoid-column",
      "avoid-region",
    ],
    colors: {
      ...colors,
      gray: {
        900: "#181818",
        800: "#282729",
        700: "#373737",
        600: "#4b4b4b",
        500: "#6b6b6b",
        400: "#9c9c9c",
        300: "#d1d1d1",
        200: "#ececec",
        100: "#fafafa",
      },
      green: {
        DEFAULT: "#289f5f",
        dark: "#19623b",
      },
    },
    extend: {
      backgroundImage: () => ({
        plant: "url('/img/bg/plant.jpg')",
        kayak: "url('/img/bg/kayak.jpg')",
      }),
      gridTemplateColumns: {
        "autofill-15": "repeat(auto-fill, minmax(15rem, 1fr))",
      },
    },
  },
};
