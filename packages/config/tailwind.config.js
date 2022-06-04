module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#233760',
          800: '#1f628f',
        },
        secondary: {
          base: '#d7261a',
          800: '#c32015',
        },
        info: '#f63542',
        success: '#129a59',
        warning: '#dfc814',
        danger: '#ed1808',
        dark: '#131316',
        light: '#d9d9e8',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
