module.exports = {
  purge: ["./src/**/*.svelte", '*.svelte'],
  theme: {
    extend: {
      colors: {
        tealime: '#6affbf',
        pblue: {
          '50': '#ffffff',
          '100': '#e4e8f9',
          '200': '#c9d1f1',
          '300': '#b0bbe9',
          '400': '#97a5e0',
          '500': '#8090d5',
          '600': '#667acd',
          '700': '#4f60a9',
          '800': '#374685',
          '900': '#202c61',
        },
        porange: {
          '50': '#FAF7F5',
          '100': '#ffe9ca',
          '200': '#ffd494',
          '300': '#fcbf62',
          '400': '#f5a833',
          '500': '#f39200',
          '600': '#f39200',
          '700': '#f39200',
          '800': '#f39200',
          '900': '#f39200',
        }
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '1024px',
        // => @media (min-width: 768px) { ... }

        'lg': '1280px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1600px',
        '2xl': '2260px'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '3.25rem',
        '5xl': '5rem',
        '6xl': '8rem',
        '7xl': '12rem',
      }
    }
  },
  variants: {},
  plugins: [],
};