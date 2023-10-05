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
        'tablet': '768px', 
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        roboto: ['var(--font-roboto)'],
        montserrat: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'banner-img': "url('/img/bg_banner.webp')",
        'banner-header': "url('/img/tissus.png')",
        'banner-mobile': "url('/img/banner-mob.jpg')",
      },
      width: {
        'calc-100-minus-5rem': 'calc(100% - 8rem)',
      },
    },
  },
  plugins: [],
};
