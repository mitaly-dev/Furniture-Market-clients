/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors:{
        primary:'#FD8311',
        secondary:'#313D4D'
      }
    },
  },
  plugins: [require("daisyui")],
}
