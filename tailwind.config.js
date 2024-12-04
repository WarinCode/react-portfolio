/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'k2d': ["K2D", "sans-serif"]
    },
    extend: {
      colors: {
        'primary': "#111111",
        'secondary': "#F0F0F0",
        'tertiary': "#C4C4C4"
      },
    },
  },
  plugins: [],
}