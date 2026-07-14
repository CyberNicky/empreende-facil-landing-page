import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17212b',
        primary: {
          50: '#eefcf6',
          100: '#d7f7e8',
          200: '#b1eed4',
          300: '#7de0b9',
          400: '#45ca99',
          500: '#28ad7e',
          600: '#1c8b65',
          700: '#197052',
          800: '#185943',
          900: '#164938',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px -32px rgba(23, 33, 43, 0.28)',
        card: '0 12px 38px -24px rgba(23, 33, 43, 0.28)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
