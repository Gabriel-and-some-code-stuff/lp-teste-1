/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0056b3',
          secondary: '#333333',
          accent: '#28a745',
          surface: '#f8f9fa',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
