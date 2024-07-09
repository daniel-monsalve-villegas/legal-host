/** @type {import('tailwincss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "Arial", "sans-serif"],
      fira: ["Fira Code", "Helvetica", "monospace"],
    },
    colors: {
      "legal-green": "#075148",
      white: "#fff",
      "legal-blue": "067dff",
      black: "#1a1a1a",
      "legal-red": "8c0000",
      "legal-cyan": "#06adc9",
      transparent: "rgba(0, 0, 0, 0)",
    },
    backgroundImage: {
      "nav-bg": "url(./src/assets/verdeNav.avif)",
      "serv-bg": "url(./src/assets/pattern.avif)",
    },
  },
  plugins: [],
};
