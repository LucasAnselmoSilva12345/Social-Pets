/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '50rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        backgroundBase: '#FFFFFF',
        colorTextBase: '#333333',
        colorBlack: '#000000',
        colorWhite: '#FFFFFF',
        colorGray: '#F5F5F5',
        shadowHeader: 'rgba(0, 0, 0, 0.1)',
      },
      zIndex: {
        100: '100',
      },
    },
    plugins: [],
  },
};
