/*
File name     : prettier.config.ts
Description   : prettier config file
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-11-04
Revisions  :
Preconditions: N/A
Postconditions: Fomatting rules for prettier
*/

module.exports = {
    "plugins": ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
    "tailwindConfig": "./tailwind.config.ts",
    "semi": false,
    "trailingComma": "all",
    "singleQuote": true,
    "jsxSingleQuote": true,
    "printWidth": 120,
    "tabWidth": 2,
    "useTabs": false,
    "quoteProps": "as-needed",
    "bracketSpacing" : true,
    "bracketSameLine": false,
    "importOrder": ["^react$", "","<THIRD_PARTY_MODULES>", "", "^[.]"],
    "importOrderParserPlugins": ["typescript", "jsx", "decorators-legacy"],
    "importOrderTypeScriptVersion": "5.2.2"
  }
