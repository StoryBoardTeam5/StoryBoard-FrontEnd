import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        "screen-with-nav": "calc(100vh + 4rem)",
      },
      colors: {
      "background": "#252525",
      }
    },
  },
  plugins: [],
}
export default config
