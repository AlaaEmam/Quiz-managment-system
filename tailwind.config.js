/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark_blue: '#0D1321', 
        light_cream: '#FFEDDF', 
        green: '#C5D86D', 
      },
    },
  },
  plugins: [],
};
