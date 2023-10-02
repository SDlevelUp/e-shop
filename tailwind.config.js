/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        roboto: ['var(--font-roboto)'],
        montserrat: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'banner-img': "url('/img/bg_banner.webp')",
        'banner-header': "url('/img/abaya-women.webp')",
        'banner-mobile': "url('/img/banner-mob.jpg')",
      },
    },
  },
  plugins: [],
};