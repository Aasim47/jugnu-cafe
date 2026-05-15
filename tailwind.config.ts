import type { Config } from "tailwindcss";

// Tailwind v4 uses CSS-first config via globals.css @theme block.
// This file is kept minimal to avoid conflicts.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
