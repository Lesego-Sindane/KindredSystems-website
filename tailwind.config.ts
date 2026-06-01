import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        forest: "#15483f",
        moss: "#2f6f5f",
        steel: "#4f6677",
        linen: "#f6f3ed",
        porcelain: "#fbfaf7",
        brass: "#b38b4d"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 24, 39, 0.12)",
        line: "0 0 0 1px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
