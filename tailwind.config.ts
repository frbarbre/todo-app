import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(220, 98%, 61%)',
        'grad-start': 'hsl(192, 100%, 67%)',
        'grad-end': 'hsl(280, 87%, 65%)',

        'light-100': 'hsl(0, 0%, 98%)',
        'light-200': 'hsl(236, 33%, 92%)',
        'light-300': 'hsl(233, 11%, 84%)',
        'light-400': 'hsl(236, 9%, 61%)',
        'light-500': 'hsl(235, 19%, 35%)',

        'dark-100': 'hsl(236, 33%, 92%)',
        'dark-200': 'hsl(234, 39%, 85%)',
        'dark-300': 'hsl(234, 11%, 52%)',
        'dark-400': 'hsl(233, 14%, 35%)',
        'dark-500': 'hsl(237, 14%, 26%)',
        'dark-600': 'hsl(235, 24%, 19%)',
        'dark-700': 'hsl(235, 21%, 11%)',
      },
      backgroundImage: {
        'light-mobile': "url('/bg-mobile-light.jpg')",
        'dark-mobile': "url('/bg-mobile-dark.jpg')",
        'light-desktop': "url('/bg-desktop-light.jpg')",
        'dark-desktop': "url('/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
