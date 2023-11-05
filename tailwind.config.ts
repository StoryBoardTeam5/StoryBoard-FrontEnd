/*
File name     : tailwind.config.ts
Description   : Tailwind configuration file. Used for styling the app.
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-09-22
Revisions  :
  2023-11-03 - Add Comments
Preconditions: N/A
Postconditions: Configures the tailwindcss plugin.
*/

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
