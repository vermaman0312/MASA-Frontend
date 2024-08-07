
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        zoomIn: 'zoomIn 0.5s ease-out',
        zoomOut: 'zoomOut 1s ease-in',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
    variants: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
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

export default config;