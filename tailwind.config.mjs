/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind where to look for class names
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // You can customize your design tokens here
      colors: {
        brand: {
          light: '#6ee7b7',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
      },
      fontFamily: {
        // Handy if you use custom fonts via Astro Font or @fontsource
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}