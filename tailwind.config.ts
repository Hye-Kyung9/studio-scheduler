import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
