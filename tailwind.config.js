/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./layout/*.html',
		'./templates/**/*.{html,json}',
		'./sections/*.html',
		'./snippets/*.html',
		'./assets/*.js',
		'./src/**/*.{js,vue}',
	],
	safelist: ['animate-scroll-left', 'animate-scroll-right'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem', // 16px (px-4)
				sm: '1.5rem', // 24px (px-6)
				lg: '2rem', // 32px (px-8)
				xl: '2rem', // Keep consistent
				'2xl': '2rem', // Keep consistent
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1500px', // Set max-width to 1500px
			},
		},
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
				},
				gray: {
					50: '#faf9fb',
					100: '#f4f3f6',
					200: '#e8e5ec',
					300: '#d6d1dd',
					400: '#a89fb8',
					500: '#7a6e8a',
					600: '#5d526c',
					700: '#4a4159',
					800: '#3d3259',
					900: '#2a2240',
					950: '#1a1525',
				},
				avvika: {
					purple: '#3d3259',
					'purple-dark': '#2a2240',
					'purple-light': '#524568',
					blue: '#B6E0F8',
					'blue-light': '#d4ebfb',
					'blue-dark': '#8bc9f0',
				},
			},
			fontFamily: {
				sans: [
					'"Crossten-Book"',
					'system-ui',
					'-apple-system',
					'sans-serif',
				],
				tanmarjorie: ['"TANMARJORIE-DISPLAY"', 'serif'],
				'crossten-book': ['"Crossten-Book"', 'sans-serif'],
				'crossten-bold': ['"Crossten-Bold"', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.3s ease-in-out',
				'fade-out': 'fadeOut 0.3s ease-in-out',
				'slide-in-right': 'slideInRight 0.3s ease-out',
				'slide-out-right': 'slideOutRight 0.3s ease-in',
				'scroll-left':
					'scrollLeft var(--scroll-duration, 30s) linear infinite',
				'scroll-right':
					'scrollRight var(--scroll-duration, 30s) linear infinite',
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
				scrollLeft: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-25%)' },
				},
				scrollRight: {
					'0%': { transform: 'translateX(-25%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding',
			},
			borderRadius: {
				button: 'var(--button-radius, 30px)', // Uses CSS variable from theme settings
				'button-lg': 'calc(var(--button-radius, 0.375rem) * 1.5)', // 1.5x the base radius
				'button-pill': '9999px', // fully rounded/pill buttons
			},
			borderColor: {
				primary: 'var(--color-primary, #dc2626)',
			},
			ringColor: {
				primary: 'var(--color-primary, #dc2626)',
			},
			backgroundColor: {
				primary: 'var(--color-primary, #dc2626)',
			},
			textColor: {
				DEFAULT: '#3d3259', // Avvika purple as default text color
				primary: 'var(--color-primary, #dc2626)',
				'avvika-purple': '#3d3259',
			},
			maxWidth: {
				'8xl': '88rem', // 1408px
				'9xl': '96rem', // 1536px
				page: '1500px', // Custom page width
			},
			screens: {
				xs: '475px',
				'3xl': '1600px',
				'4xl': '1920px',
			},
			borderWidth: {
				3: '3px',
			},
			fontSize: {
				'5xl': '3rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
