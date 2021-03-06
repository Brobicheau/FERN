module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['standard', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['prettier', 'react'],
    rules: {
        semi: ['error', 'always'],
        'prettier/prettier': ['error'],
    },
};
