const sharedRules = {
    // Enforce using console.warn instead of console.log
    'no-console': 'warn',
    // Support flexible placement of variables
    'no-use-before-define': 'off',
    // Spreading props with typescript is safe
    'react/jsx-props-no-spreading': 'off',
    // Using object default values instead
    'react/require-default-props': 'off',
    // no need to import react from react 17
    'react/react-in-jsx-scope': 'off',
    // Using typescript types instead
    'react/prop-types': 'off',
    // Disable react display name enforcement
    'react/display-name': 'off',
    // Makes sure we don't miss the tests disabled in the developement
    'jest/no-disabled-tests': 'error',
    // Makes sure we 
    'jest/no-identical-title': 'error',
      // Used to enforce the ordering of the imports causing lint error.
  'import/first': 'error',
  // the order of the imports
  'import/order': [
    'error',
    {
      'newlines-between': 'always-and-inside-groups',
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: 'components/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'views/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'contexts/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'lib/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'helpers/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'utils/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'assets/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: './assets/**',
          group: 'sibling',
          position: 'after',
        },
      ],
    }
    ],  
};

const tsOnlyRules = {
    // Enforce using typescript type imports
    '@typescript-eslint/consistent-type-imports': 'error',
    // Enable flexible placement of variables and enums
    '@typescript-eslint/no-use-before-define': 'off',
    // Enables no null assertions
    "@typescript-eslint/no-non-null-assertion": "off"
}

const tsConfig = {
    files: ['**/*.ts?(x)'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'prettier'
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {...sharedRules, ...tsOnlyRules
    }
}

// eslint-disable-next-line no-undef
module.exports = {
    ignorePatterns: ['node_modules', 'dist', 'public'],
    extends: [
        'eslint:recommended', 
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    plugins: ['jest', 'react'],
    rules: sharedRules,
    overrides: [{...tsConfig}],
    // parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: '2019',
        sourceType: 'module',
    },
    env: {
        'es6': true,
    }
};