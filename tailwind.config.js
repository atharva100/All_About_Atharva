/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bai:['"Bai Jamuree"','sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif']
      }
    },
  },
  plugins: [],
}