/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        colorGrayDark: '#d1d1d1',
        colorMediumDark: '#666666',
        colorYellow: '#FB1',
        colorBrownDark: '#c56c00',
        shadowButton: '0 0 0 3px #fea, 0 0 0 4px #fb1',
        colorInput: '#EEEEEE',
        colorError: '#ff0000',
        shadowUserHeaderNav: '0 0 0 3px #eee',
        grayBlueDark: '#434c5e',
        dark: '#22272e',
        darkMedium: '#212529',
        colorTextDark: '#f5f5f5',
        txtColorHeader: '#fb1',
        txtDarkMedium: '#F57C00',
      },
      zIndex: {
        sub: '-1',
        1: '1',
        100: '100',
        1000: '1000',
      },
      backgroundImage: {
        loginPage: "url('/src/assets/login.jpg')",
      },
    },
    plugins: [],
  },
};
