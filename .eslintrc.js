module.exports = {
  extends: ["expo", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  overrides: [
    {
      files: ["documentation/**", "appSrc/**"],
      rules: {
        "import/no-unresolved": "off",
      },
    },
  ],
};