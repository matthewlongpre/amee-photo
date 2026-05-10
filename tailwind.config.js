/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-50': '#F8F8F8',
        'warm-100': '#EFEEEC',
        'warm-600': '#A68F83',
        'warm-700': '#917D73',
        'cool-900': '#2D2E2D',
      },
      fontFamily: {
        'quincy': ['"Quincy CF"', 'serif'],
        'karla': ['"Karla"', 'sans-serif'],
        serif: ['Quincy CF', 'serif'],
        sans: ['Karla', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '56px', fontWeight: '400' }],
        'h2': ['40px', { lineHeight: '48px', fontWeight: '400' }],
        'h3': ['32px', { lineHeight: '40px', fontWeight: '400' }],
        'h4': ['24px', { lineHeight: '32px', fontWeight: '400' }],
        'body-md': ['18px', { lineHeight: '32px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '24px', fontWeight: '400' }],
        'overline': ['12px', { lineHeight: '24px', fontWeight: '700', letterSpacing: '2.4px' }],
        'subheading-md': ['18px', { lineHeight: '24px', fontWeight: '500' }],
        'subheading-sm': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'button': ['14px', { lineHeight: '24px', fontWeight: '500', letterSpacing: '1.4px' }],
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
        wide: '0.05em',
        wider: '0.1em',
      },
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
