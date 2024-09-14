/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-yellow-200',
    'bg-red-200',
    'bg-blue-200',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

