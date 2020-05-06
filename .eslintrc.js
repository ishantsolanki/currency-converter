module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    'plugin:@typescript-eslint/recommended',
    "airbnb",
    "plugin:react/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "rules": {
    "no-console": ["error"],
  }
};
