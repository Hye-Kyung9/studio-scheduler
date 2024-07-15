import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA',
        secondary: '#9ca3af',
        third: '#0064ff',
        normal: '#111',
        success: '#111',
        failure: '#ef4444',
      },
      animation: {
        actSlideRight: 'slidRight 0.5s forwards',
      },
      screens: {
        md: '1000px',
      },
      width: {
        500: '500px',
      },
    },
  },
};
export default config;
