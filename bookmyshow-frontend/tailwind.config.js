/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",   // App Router components
  "./components/**/*.{js,ts,jsx,tsx}", // Custom components
];
export const theme = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
};
export const plugins = [];
