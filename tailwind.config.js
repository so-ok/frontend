/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-phone': '300px',
        'pad': '500px',
      }
    },
  },
  plugins: [],
}
