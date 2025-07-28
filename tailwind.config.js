/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layout/*.html',
    './templates/**/*.{html,json}',
    './sections/*.html',
    './snippets/*.html',
    './assets/*.js',
    './src/**/*.{js,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fee5e2',
          200: '#feccca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      borderRadius: {
        'button': 'var(--button-radius, 0.375rem)', // Uses CSS variable from theme settings
        'button-lg': 'calc(var(--button-radius, 0.375rem) * 1.5)', // 1.5x the base radius
        'button-pill': '9999px', // fully rounded/pill buttons
      },
      borderColor: {
        'primary': 'var(--color-primary, #dc2626)',
      },
      ringColor: {
        'primary': 'var(--color-primary, #dc2626)',
      },
      backgroundColor: {
        'primary': 'var(--color-primary, #dc2626)',
      },
      textColor: {
        'primary': 'var(--color-primary, #dc2626)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}