/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        'primary':'#131D31',
        'secondary':'#1E1E1E',
        'secondary-bg':'#F7F7F7',
      },
    },
  },
  plugins: [],
}

