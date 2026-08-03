import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        lime: { 400: "#c8ff00" },
        rose: { 500: "#ff3c6e" },
        zinc: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#1a1a1a",
          700: "#222222",
          600: "#333333",
          500: "#555555",
          400: "#888888",
          300: "#aaaaaa",
          200: "#cccccc",
          100: "#eeeeee",
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse2: "pulse2 2s ease infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
