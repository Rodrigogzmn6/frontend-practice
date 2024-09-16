import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        yellow: '#fbffa7',
        orange: '#ff764d',
        lightBlue: '#b1c5ff',
        pink: '#d5b3ff',
        green: '#b6ffc0',
        blue: '#0000ff'
      }
    }
  },
  plugins: []
}
export default config
