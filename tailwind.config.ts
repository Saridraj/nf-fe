import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#515451',
        black: '#000000',
        white: '#FFFFFF',
        redLight: '#D9200A',
        redDark: '#AC180A',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
