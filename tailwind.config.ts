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
      'primary': '#3B82F6', // blue-500
      'primary-dark': '#1E40AF', // blue-800
      'accent': '#06B6D4', // cyan-500
      'accent-dark': '#0E7490', // cyan-800
      'bg': '#18181B', // zinc-900
      'surface': '#F1F5F9', // slate-100
      'onPrimary': '#FFFFFF',
      'onAccent': '#FFFFFF',
      'onBg': '#F1F5F9',
      'onSurface': '#18181B',
      'spaceGray': '#1B1C1E', // legacy
      'spaceWhite': '#E4E5E7', // legacy
    },
  },
  plugins: [],
}
export default config
