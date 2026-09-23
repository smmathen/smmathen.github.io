/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        broadcast: {
          bg: "#1F1C19",
          card: "#26221E",
          crimson: "#C46A4A",
          white: "#F0EBE3",
          slate: "#9A9188",
          body: "#C4BBB0",
          amber: "#B8956A",
        },
      },
      fontFamily: {
        headline: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "ui-sans-serif",
          "sans-serif",
        ],
        body: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "ui-sans-serif",
          "sans-serif",
        ],
        mono: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "ui-sans-serif",
          "sans-serif",
        ],
      },
      animation: {
        "pulse-live": "pulse-live 2s ease-in-out infinite",
        ticker: "ticker-scroll 40s linear infinite",
      },
      keyframes: {
        "pulse-live": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "ticker-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
