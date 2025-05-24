/ ** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  safelist: [
    'text-[var(--foreground)]',
    'bg-[var(--background)]',
    'bg-[var(--menu-background)]',
    'bg-[var(--footer-background)]',
    'text-[var(--link-color)]',
    'text-[var(--button-text)]',
    'bg-[var(--primary-light)]',
    'dark:bg-[var(--primary-dark)]',
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};