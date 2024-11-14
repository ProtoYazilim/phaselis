module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  overrides: [
    {
      files: ["documentation/**"], // specify the path or glob pattern
      rules: {
        "import/no-unresolved": "off", // disable the rule for this path
      },
    },
  ],
};
