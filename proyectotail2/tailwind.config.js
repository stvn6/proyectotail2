/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'ola-bg': "url('./src/components/Image/olaa.jpg')"      }
    },
  },
  plugins: [],
}