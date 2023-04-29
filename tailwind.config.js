/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '-4px': '-4px',
      },
      minWidth: {
        '1/8': '8rem',
      },
      maxWidth: {
        '4/8': '30rem',
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
        colorYellow: '#FB1',
        colorBrownDark: '#c56c00',
        shadowButton: '0 0 0 3px #fea, 0 0 0 4px #fb1',
        colorInput: '#EEEEEE',
        colorError: '#ff0000',
      },
      zIndex: {
        sub: '-1',
        1: '1',
        100: '100',
      },
      backgroundImage: {
        'loginPage': "url('/src/assets/login.jpg')",
      }
    },
    plugins: [],
  },
};
