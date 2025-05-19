/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        colorTheme:"var(--color-theme)",
        bgPrimary: "var(--color-bg-primary)",
        titleBar: "var(--color-title-bar)",
        titleText: "var(--color-title-text)",
        primaryHeading: "var(--color-primary-heading)",
        secondaryHeading: "var(--color-secondary-heading)",
        primaryPara: "var(--color-primary-para)",
        secondaryPara: "var(--color-secondary-para)",
        btnBorder: "var(--color-btn-border)",
        primaryShadow: "var(--color-shadow)",
      },
    },
  },
  plugins: [],
};
