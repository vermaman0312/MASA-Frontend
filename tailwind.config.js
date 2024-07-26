
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', overflowX: 'auto', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' },
          '100%': { transform: 'translateX(0)', overflowX: 'auto', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' },
        },
        slideOutToRight: {
          '0%': { transform: 'translateX(0)', overflowX: 'auto', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' },
          '100%': { transform: 'translateX(100%)', overflowX: 'auto', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
      },
      animation: {
        slideInFromRight: 'slideInFromRight 0.3s ease-out',
        slideOutToRight: 'slideOutToRight 0.3s ease-in',
        zoomIn: 'zoomIn 0.3s ease-out',
        zoomOut: 'zoomOut 0.3s ease-in',
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Poppins',],
      'body': ['"Open Sans"',],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

