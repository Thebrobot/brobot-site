/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#00E5FF",
        brand: {
          dark: "#0F172A",
          muted: "#64748B",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
