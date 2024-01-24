// /** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      width: {
        '200': '200px',
        '30': '30px',
      },
      height: {
        '200': '200px',
      },
      inset: {
        '35': '35px',
        '85': '85px',
        '135': '135px',
      },
      animation: {
        'ldio-xajoig4w15p-1': 'ldio-xajoig4w15p-1 1s cubic-bezier(0,0.5,0.5,1) infinite',
        'ldio-xajoig4w15p-2': 'ldio-xajoig4w15p-2 1s cubic-bezier(0,0.5,0.5,1) infinite',
        'ldio-xajoig4w15p-3': 'ldio-xajoig4w15p-3 1s cubic-bezier(0,0.5,0.5,1) infinite',
      },
      keyframes: {
        'ldio-xajoig4w15p-1': {
          '0%': { top: '36px', height: '128px' },
          '50%': { top: '60px', height: '80px' },
          '100%': { top: '60px', height: '80px' },
        },
        'ldio-xajoig4w15p-2': {
          '0%': { top: '42px', height: '116px' },
          '50%': { top: '60px', height: '80px' },
          '100%': { top: '60px', height: '80px' },
        },
        'ldio-xajoig4w15p-3': {
          '0%': { top: '48px', height: '104px' },
          '50%': { top: '60px', height: '80px' },
          '100%': { top: '60px', height: '80px' },
        },
      },
      fontSize:{
        'xxs': '.65rem',
      },
      screens: {
        'xl': '1140px',
      },
      colors: 
        require('tailwindcss/colors'),
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
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'cursor-not-allowed'],
  },
  plugins: [],
});
