/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d7b0',
          300: '#e9ba7c',
          400: '#e09a4a',
          500: '#d4792a',
          600: '#c45e1f',
          700: '#a3461c',
          800: '#83391e',
          900: '#6b301b',
          950: '#3a170c',
        },
        safari: {
          50: '#f0fdf0',
          100: '#dbfcdb',
          200: '#baf5ba',
          300: '#84eb84',
          400: '#4ad84a',
          500: '#22be22',
          600: '#169d16',
          700: '#157b15',
          800: '#166116',
          900: '#145014',
          950: '#052c05',
        },
        earth: {
          50: '#f7f5f0',
          100: '#ece8db',
          200: '#dbd1b9',
          300: '#c5b48f',
          400: '#b29a6d',
          500: '#a3875b',
          600: '#8c6e4c',
          700: '#735740',
          800: '#61493a',
          900: '#543f34',
          950: '#30211b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
