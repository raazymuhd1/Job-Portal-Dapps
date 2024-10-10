/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	colors: {
  		'main': '#0076fb',
  		'secondary': '#f2f2f2'
  	},
  	fontFamily: {
  		sans: ['Graphik', 'sans-serif'],
  		serif: ['Merriweather', 'serif']
  	},
  	extend: {
  		spacing: {
  			'8xl': '96rem',
  			'9xl': '128rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}