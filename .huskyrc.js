/** @see https://github.com/typicode/husky#readme */
module.exports = {
    hooks: {
        'pre-commit': 'lint-staged',
        'pre-push': 'cross-env CI=true npm test -- --all --watchAll=false'
    }
};
