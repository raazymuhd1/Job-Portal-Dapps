import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
         'exo': 'var(--font-exo)',
         'orbitron': 'var(--font-orbitron)'
      },
    },
    colors: {
      "main": "#0076fb",
      "secondary": "#fff"
    }
  },
  plugins: [],
}
export default config
