module.exports = {
  parser: "babel-eslint",
  env: { es6: true },
  rules: {
    // Errors
    eqeqeq: ["error", "smart"],
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-parens": ["error", "all", { ignoreJSX: "multi-line" }],
    "no-func-assign": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-sparse-arrays": "error",
    "no-undef": "error",
    "no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_omit", argsIgnorePattern: "^_omit" }
    ],
    "no-use-before-define": ["error", "nofunc"],
    "no-var": "error",

    // Warnings
    "array-bracket-spacing": ["warn", "never"],
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ],
    "no-console": "warn",
    "no-constant-condition": "warn",
    "no-fallthrough": "warn",
    "no-unneeded-ternary": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-spread": "warn",
    quotes: ["warn", "double"]
  }
};
