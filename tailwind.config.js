/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2560px',
        'tablet': '768px'
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        roboto: ['var(--font-roboto)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        'black-black': '#000000',
        'without-white': '#f1f1f1',
      },
      backgroundImage: {
        'banner-texture': "url('/img/texture.jpg')",
      },
      width: {
        'calc-100-minus-5rem': 'calc(100% - 8rem)',
      },
    },
  },
  plugins: [],
};
