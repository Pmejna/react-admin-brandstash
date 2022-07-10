
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
        'prettier'
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        ...sharedRules,
        ...tsOnlyRules
    }
}

module.exports = {
    ignorePatterns: ['node_modules', 'dist', 'public'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['jest', 'react'],
    rules: sharedRules,
    overrides: [{...tsConfig}],
    parserOptions: {
        ecmaVersion: '2016',
    },
    env: {
        'es6': true,
    }
};