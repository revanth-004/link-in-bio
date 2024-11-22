/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      bg: {
        dark: "#60a5fa",
        thick: "#91c3fd",
        light: "#bfdbfe",
        thin: "#dbeafe",
      },
      backdropBlur: {
        none: "none",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
    require("tailwindcss-filters"),
  ],
};
