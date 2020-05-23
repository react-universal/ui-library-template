module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  rules: {
    strict: 0,
    'no-inner-declarations': 'off',
  },
};
