import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'astronaut': "url('/astro.avif')",
        'compass': "url('/compass.png')",
        'mdisrupt': "url('/mdisrupt.png')",
        'fivestone': "url('/fivestone.png')",
      },
      fontFamily: {
        'newsreader': ['Newsreader', 'serif'],
      },
    },
    colors: {
      'spaceGray': '#1B1C1E',
      'spaceWhite': '#E4E5E7'
    },
  },
  plugins: [],
}
export default config
