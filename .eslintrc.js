module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  overrides: [
    {
      files: ["tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        mocha: true,
      },
    },
  ],
};
