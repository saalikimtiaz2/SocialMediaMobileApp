module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
  },
};
