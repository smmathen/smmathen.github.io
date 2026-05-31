/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        broadcast: {
          bg: "#0C0C10",
          card: "#16161E",
          crimson: "#E8192C",
          white: "#F0F0F5",
          slate: "#8A8A99",
          body: "#C8C8D4",
          amber: "#F5A623",
        },
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      animation: {
        "pulse-live": "pulse-live 1.5s ease-in-out infinite",
        ticker: "ticker-scroll 40s linear infinite",
      },
      keyframes: {
        "pulse-live": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        "ticker-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(232, 25, 44, 0.15)",
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
