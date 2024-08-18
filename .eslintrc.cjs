module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        printWidth: 105,
        semi: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  extends: ['@rocketseat/eslint-config/node'],
}
