import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear-insta':
          'linear-gradient(90deg, #E1306C 0%, #405DE6 100%);',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        nabBarShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
        navBarShadow: '0px 0px 30000px 20000px rgba(0, 0, 0, 0.30)',
        lightShadow: '-13px 15px 22px 10px rgba(170, 101, 42, 0.15)',
        buttonShadow: '3px 3px 10px 0px rgba(0, 0, 0, 0.25)',
        cardShadow: '0px 0px 50px 19px rgba(0, 0, 0, 0.25)',
        cardNews : "5px 4px 10px 0px rgba(0, 0, 0, 0.40)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        montserratAlternates: ['Montserrat Alternates', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        cell: '400px',
        cellSliderDepositions: '500px',
      },
    },
  },
  plugins: [],
}
export default config
