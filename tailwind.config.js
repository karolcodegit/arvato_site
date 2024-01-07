// /** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      fontSize:{
        'xxs': '.65rem',
      },
      screens: {
        'xl': '1140px',
      },
      colors: require('tailwindcss/colors'),
      spacing: {
        '68': '17rem',
      },
      lineHeight: {
        'default': '1.6',
      },
      minHeight: {
        '75': '18.75rem',
      },
      maxWidth: {
        '64': '16rem',
      },
      margin: {
        '30': '10rem'
      },
      
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
});
