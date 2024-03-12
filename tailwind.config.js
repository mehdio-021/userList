/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    fontFamily: {
      vazir: "Vazir",
    },
    extend: {
      boxShadow: {
        '3xl': '0 5px 5px #ccc',
      }
    },
  },
  plugins: [],
};
