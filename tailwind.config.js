/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0080FF', // Define #0080FF as default brand color
          light: '#66bfff', // Define a lighter shade of brand color
        },
      },
      fontFamily: {
        'cantata-one': ['Cantata One', 'sans-serif'], // Adding Cantata One typography
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
