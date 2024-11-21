import pluginJs from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], 
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
      parserOptions: [airbnbBase.parserOptions, { ecmaVersion: 2022, sourceType: "script" }] }
  },
  pluginJs.configs.recommended,
  airbnbBase.rules,
  {
    rules: {
      "no-console": "off",
      "import/extensions": 0,
      "semi": "error",
      "no-undef": "error",
      "no-undefined": "error",
      "no-unused-vars": "warn",
      "no-multiple-empty-lines": "off",
      "indent": ["error", 2],
      "object-curly-spacing": ["error","always"],
    }
  }
];