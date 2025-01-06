/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}' ,
    './node_modules/flowbite/**/*.js',

  ],
  theme: {
    extend: {
      colors: {
        dark_blue: '#0D1321', 
        light_cream: '#FFEDDF', 
        green: '#C5D86D', 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
