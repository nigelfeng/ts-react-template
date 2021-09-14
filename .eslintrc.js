module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  plugins: ["simple-import-sort", "prettier", "sort-keys-fix"],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: ["./tsconfig.json"],
  },

  settings: {
    "import/resolver": {
      typescript: {},
    },
  },

  rules: {
    // your rules
    "sort-keys": [
      1,
      "asc",
      { caseSensitive: false, natural: false, minKeys: 2 },
    ],
    "sort-keys-fix/sort-keys-fix": 1,
    "sort-vars": [1, { ignoreCase: true }],
    "simple-import-sort/imports": 1,
    "simple-import-sort/exports": 1,
  },
};
