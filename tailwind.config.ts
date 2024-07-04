import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'md': '800px', // 将md断点设置为800px
      },
      colors: {
        'pgreen': "#B9FF66",
        'pgrey': "#F3F3F3",
        'pdark': "#191A23",
        'pblack': "#000000",
      },
      fontSize: {
        'h1': '3.75rem', // 60 / 16
        'h2': '2.5rem', // 40 / 16
        'h3': '1.875rem', // 30 / 16
        'h4': '1.25rem',  // 20 / 16
        'p': '1.125rem', // 18 / 16
        'mh1': '2.68rem', // mobile h1 43 / 16
        'mh2': '2.25rem', // 36 / 16
        'mh3': '1.625rem', // 26 / 16
        'mh4': '1.125rem',  // 18 / 16
        'mp': '1rem', // 16 / 16
      },
    },
  },
  plugins: [],
};
export default config;
