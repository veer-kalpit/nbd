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
        objectSans: ["Object Sans", "sans-serif"],
      },
      fontSize: {
        customSize: ["28.8px", "25.92px"],
        base: ["16.5px", "24.75px"],
      },
      colors: {
        customBlue: "#020037",
        lightBlue: "#B5F1FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
