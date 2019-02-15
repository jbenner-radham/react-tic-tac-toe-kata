/**
 * @see https://stylelint.io/user-guide/rules/
 * @see https://www.npmjs.com/package/stylelint-scss
 * @see https://www.npmjs.com/package/stylelint-config-recommended-scss
 */
module.exports = {
    extends: ['stylelint-config-recommended-scss'],
    rules: {
        'font-family-name-quotes': 'always-where-recommended',
        indentation: [4, { baseIndentLevel: 1 }],
        'length-zero-no-unit': true,
        linebreaks: 'unix',
        'max-empty-lines': 1,
        'no-empty-first-line': true,
        'no-eol-whitespace': true,
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,
        'scss/dollar-variable-colon-space-after': 'at-least-one-space',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/double-slash-comment-whitespace-inside': 'always',
        'selector-list-comma-space-after': 'always',
        'selector-list-comma-space-before': 'never',
        'string-quotes': 'single',
        'unit-case': 'lower',
        'value-keyword-case': 'lower',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never-single-line'
    }
};
