module.exports = {
  plugins: ["@typescript-eslint", "eslint-comments", "promise"],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "@typescript-eslint/no-unused-expressions": ["off"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    "spaced-comment": ["error", "always", { exceptions: ["-", "+", "?"] }],
    "max-classes-per-file": "off",
    "no-unused-expressions": "off",
    "no-prototype-builtins": "off",
    "no-underscore-dangle": ["off"],
  },
}
