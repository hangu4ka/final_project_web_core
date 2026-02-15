const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      '**/*.scss',
      '**/*.css',
      '**/*.json'
    ]
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'error',
      'semi': ['warn', 'always']
    }
  }
];
