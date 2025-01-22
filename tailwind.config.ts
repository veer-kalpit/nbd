import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        schabo: ["SCHABO", "sans-serif"],
        comedik: ["Comedik", "sans-serif"],
      },
      fontSize: {
        customSize: ["28.8px", "25.92px"], // Font size with line height
      },
      colors: {
        customBlue: "#020037",
      },
    },
  },
  plugins: [],
} satisfies Config;
