/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "Arial", "sans-serif"],
        fira: ["Fira Code", "Helvetica", "monospace"],
      },
      colors: {
        "legal-green": "#075148",
        white: "#fff",
        "legal-blue": "#067dff",
        black: "#1a1a1a",
        "legal-red": "#8c0000",
        "legal-cyan": "#06adc9",
        transparent: "rgba(0, 0, 0, 0)",
      },
      backgroundImage: {
        "nav-bg": "url(/verdeNav.avif)",
        "serv-bg": "url(/services.avif)",
        "contact-bg": "url(/patternblack.avif)",
      },
      keyframes: {
        animate: {
          "0%, 100%": { transform: "scale(1.0)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
      animation: {
        kenb: "animate 3.7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
