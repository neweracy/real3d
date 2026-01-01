/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
        },
        surface: {
          dark: 'var(--color-surface-dark)',
          light: 'var(--color-surface-light)',
          muted: 'var(--color-surface-muted)',
        },
        main: 'var(--color-text-main)',
        muted: 'var(--color-text-muted)',
        inverse: 'var(--color-text-inverse)',
      },
    },
  },
  plugins: [require('daisyui')],
}