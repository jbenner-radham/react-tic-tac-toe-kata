/**
 * @see https://eslint.org/docs/rules/
 * @see https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js
 */
module.exports = {
    extends: ['eslint:recommended', 'react-app'],
    root: true,
    rules: {
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        camelcase: 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { after: true, before: false }],
        'computed-property-spacing': ['error', 'never'],
        'consistent-return': 'off',
        'eol-last': ['error', 'always'],
        eqeqeq: ['error', 'smart'],
        indent: ['error', 4],
        'key-spacing': [
            'error',
            { afterColon: true, beforeColon: false, mode: 'strict' }
        ],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', { code: 120, comments: 120 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-tabs': ['error', { allowIndentationTabs: false }],
        'no-trailing-spaces': 'error',
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': [
            'error',
            { allowAllPropertiesOnSameLine: true }
        ],
        'prefer-const': [
            'error',
            { destructuring: 'any', ignoreReadBeforeAssign: false }
        ],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        'sort-keys': [ 'error', 'asc', { caseSensitive: false, natural: true } ],
        'space-before-blocks': [
            'error',
            { classes: 'always', functions: 'always', keywords: 'always' }
        ],
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', asyncArrow: 'always', named: 'never' }
        ],
        'space-infix-ops': ['error', { int32Hint: false }],
        'space-unary-ops': [ 'error', { nonwords: false, words: true } ],
        'spaced-comment': [ 'error', 'always' ],
        'switch-colon-spacing': ['error', { after: true, before: false }]
    }
};
