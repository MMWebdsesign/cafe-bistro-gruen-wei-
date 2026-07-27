/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pine: {
          950: '#0a1712',
          900: '#10271d',
          800: '#173427',
          700: '#214532',
          600: '#2d5b43',
          100: '#e7efe9',
        },
        cream: '#f5f0e6',
        sand: '#e8dcc8',
        gold: '#c8a96a',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(16, 39, 29, 0.12)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(200,169,106,0.18), transparent 45%)',
      },
    },
  },
  plugins: [],
};