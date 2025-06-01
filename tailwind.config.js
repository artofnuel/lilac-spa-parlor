/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f1fe',
          100: '#ece2fc',
          200: '#d9c6f9',
          300: '#c2a1f5',
          400: '#a97bee',
          500: '#9461e5',
          600: '#7c40d9',
          700: '#6a34c0',
          800: '#5a2e9c',
          900: '#4c297a',
          950: '#2d174a',
        },
        lilac: {
          50: '#f8f6ff',
          100: '#f2edff',
          200: '#e8dcff',
          300: '#d7c1ff',
          400: '#c29dff',
          500: '#ac75fc',
          600: '#9752f4',
          700: '#8640db',
          800: '#7136b1',
          900: '#5e308d',
          950: '#3c145f',
        },
        neutral: {
          950: '#0a0a0a',
          900: '#171717',
          850: '#1f1f1f',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#fafafa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}