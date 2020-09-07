module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "script",
  },
  rules: {},
};
