/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentBrown: "#a15c38",
        accentLight: "#c3a6a0",
        light: "#f7f1f0",
        dark: "#262220",
        active: "#a9c4f8",
      },
    },
  },
  plugins: [],
};
