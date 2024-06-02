module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: [
    '.eslintrc.cjs',
    'commitlint.config.cjs',
    'dist',
    'node_modules',
    'postcss.config.js',
    'tailwind.config.js',
    'vite.config.ts',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'prettier', 'import-newlines'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import-newlines/enforce': [
      'error',
      {
        'max-len': 60,
      },
    ],
    'import/no-unresolved': [
      2,
      {
        ignore: ['\\.scss', '\\.css$'],
      },
    ],
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    semi: ['error', 'never'],
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^(_|props)',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^(_|props)',
        destructuredArrayIgnorePattern: '^(_|props)',
        varsIgnorePattern: '^(_|props)',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^(_|props)',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^(_|props)',
        destructuredArrayIgnorePattern: '^(_|props)',
        varsIgnorePattern: '^(_|props)',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          '{}': false,
        },
      },
    ],
    'no-restricted-exports': ['off'],
    'import/prefer-default-export': ['off'],
    'import/export': ['off'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
