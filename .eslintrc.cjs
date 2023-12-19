module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: "./tsconfig.json"
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'postcss.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "object-curly-newline": "off",
    "react/require-default-props": "off",
    "no-plusplus": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "jsx-a11y/label-has-associated-control": "off",
    "linebreak-style": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
    "func-style": ["error", "expression"],
    "import/extensions": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": ["off"],
    "no-restricted-imports": ["error", {
      "patterns": ["..*"]
    }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "import/no-named-default": "off",
    "import/prefer-default-export": "off",
    "arrow-body-style": "off",
  },
}
