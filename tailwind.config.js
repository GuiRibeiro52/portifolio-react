/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#E3646E',
        purple: '#bb72e9',
        blue: '#3996db',
        green: '#82bc4f',
        yellow: '#eabd5f',
        gray100: '#0D0E11',
        gray200: '#16181d',
        gray300: '#292c34',
        gray400: '#878ea1',
        gray500: '#c0c4ce',
        gray600: '#e2e4e9'
      },
      fontFamily: {
        asap: ['Asap', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        maven: ['Maven', 'sans-serif'],
      },
      fontSize: {
        'title-lg': ['56px', '120%'],
        'title-md': ['24px', '120%'],
        'title-sm': ['16px', '120%'],
        'subtitle': ['20px', '120%'],
        'tag-md': ['16px', '120%'],
        'tag-sm': ['12px', '120%'],
        'text-md': ['16px', '140%'],
        'text-sm': ['14px', '140%'],
      },
      fontWeight: {
        bold: 'bold',
        regular: 'regular',
      },
    },
  },
  plugins: [],
};
