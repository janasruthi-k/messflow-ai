/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        teal: {
          50: '#f0fdfa',
          500: '#14b8a6',
          600: '#0d9488',
        },
        orange: {
          50: '#fff7ed',
          500: '#f97316',
          600: '#ea580c',
        },
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}