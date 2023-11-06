/*
File name     : tailwind.config.ts
Description   : Tailwind configuration file. Used for styling the app.
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-09-22
Revisions  :
  2023-11-03 - Add Comments
  2023-11-05 - Adding Color palette
Preconditions: N/A
Postconditions: Configures the tailwindcss plugin.
*/

import ColorPalette from './src/app/_assets/colorpalette'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: ColorPalette,
    },
    height: {
      "screen-with-nav": "calc(90vh - 4rem)",
    },
  },
  plugins: [],
}
export default config
