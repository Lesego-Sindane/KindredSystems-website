import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E2A38",
        cream: "#F7F4EE",
        sage: "#6D8C72",
        charcoal: "#2B2B2B",
        ink: "#2B2B2B",
        forest: "#6D8C72",
        moss: "#6D8C72",
        steel: "#1E2A38",
        linen: "#F7F4EE",
        porcelain: "#F7F4EE",
        brass: "#D6B85A"
      },
      boxShadow: {
        soft: "0 20px 45px rgba(30, 42, 56, 0.08)",
        line: "0 0 0 1px rgba(30, 42, 56, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
