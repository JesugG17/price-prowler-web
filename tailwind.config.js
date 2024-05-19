/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      custom: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-primary': '#395886',
        primary: '#638ECB',
        'light-primary': '#8AAEE0',
        'very-light-primary': '#B1C9EF',
        'gray-custom': '#D5DEEF',
        'light-gray-custom': '#F0F3FA',
      },
    },
  },
  plugins: [],
};
