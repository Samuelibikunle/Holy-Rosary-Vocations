/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#f6f4ef',
          surface: '#fffdf8',
          text: '#1b1a18',
        },
        navy: {
          50: '#eff3f8',
          100: '#dce5f0',
          200: '#b8c9de',
          300: '#8aa3c2',
          400: '#5b7ba4',
          500: '#3d5e86',
          600: '#2a466c',
          700: '#1d3250',
          800: '#132234',
          900: '#0c1622',
        },
        warm: {
          100: '#fbfaf7',
          200: '#f1efe9',
          300: '#e0ddd5',
          400: '#c4c0b6',
          500: '#a29e94',
          600: '#7b7771',
          700: '#5a5751',
          800: '#3b3935',
          900: '#1f1e1c',
        },
        accentDark: {
          100: '#f3f1ec',
          200: '#e6e3db',
          300: '#cdc9c0',
          400: '#a7a39b',
          500: '#7c7874',
          600: '#585451',
          700: '#393533',
          800: '#1e1c1a',
          900: '#100f0e',
        }
      },
      fontFamily: {
        heading: ['var(--font-anton)', 'var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      borderRadius: {
        'card': '28px',
      },
      boxShadow: {
        'paper-sm': '0 1px 3px rgba(27, 26, 24, 0.08)',
        'paper-md': '0 4px 14px rgba(27, 26, 24, 0.12)',
        'paper-lg': '0 18px 44px rgba(27, 26, 24, 0.18)',
        'pin': '0 12px 26px rgba(20, 17, 16, 0.24)',
        'pin-hover': '0 16px 34px rgba(20, 17, 16, 0.30)',
      }
    },
  },
  plugins: [],
};
