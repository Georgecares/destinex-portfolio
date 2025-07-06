/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FDFCFB", // Off White
          dark: "#121212", // Jet Black
        },
        primary: "#A084E8", // Muted Lavender
        secondary: "#6E7DAB", // Desaturated Blue
        text: {
          light: "#1F1F1F",
          dark: "#FAFAFA",
        },
        muted: "#B3B3B3",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
