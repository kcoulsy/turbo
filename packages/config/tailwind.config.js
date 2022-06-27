module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#95cce4',
          base: '#198cc5',
          darker: '#14739f',
        },
        secondary: {
          lighter: '#e18787',
          base: '#cd3837',
          darker: '#b43535',
        },
        gray: {
          // 000: '#f9f9fa',
          100: '#ebeeef',
          200: '#dde1e3',
          300: '#ced4d7',
          400: '#bdc5c9',
          500: '#aab5b9',
          600: '#95a2a8',
          700: '#7c8c93',
          800: '#5d6f77',
          900: '#364146',
        },
        dark: '#131316',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
