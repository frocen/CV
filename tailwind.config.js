/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "#404040",
      },

      fontFamily: {
        roboto: ["var(--font-roboto)"],
      }
    },
  },
  plugins: [],
}