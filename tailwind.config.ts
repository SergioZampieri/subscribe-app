import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "var(--black)",
      lightBlack: "var(--light-black)",
      white: "var(--white)",
      gray: "var(--gray)",
      lime: "var(--lime)",
      pear: "var(--pear)",
      error: "var(--error)",
    },
  },
};
export default config;
