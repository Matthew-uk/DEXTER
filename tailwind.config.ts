import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        allison: ["--font-allison"],
      },
      colors: {
        "dexter-green": "rgba(58, 87, 67, 1)",
        "dexter-white": "rgb(251, 250, 245)",
        "dexter-orange": "rgb(247, 179, 43)",
        "dexter-red": "rgb(193, 41, 46)",
        "dexter-brown": "rgb(52, 37, 47)",
        "dexter-gray": "rgb(27, 38, 79)",
        "dexter-orange-bg": "rgba(247, 179, 43, 0.25)",
        "dexter-red-bg": "rgba(193, 41, 46, 0.25)",
        "dexter-brown-bg": "rgba(52, 37, 47, 0.25)",
        "dexter-gray-bg": "rgba(27, 38, 79, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
