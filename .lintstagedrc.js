/** @see https://github.com/okonet/lint-staged#readme */
module.exports = {
    '*.js': ['npm run-script lint:js', 'git add'],
    '*.scss': ['npm run-script lint:scss', 'git add'],
    'package.json': ['sort-package-json', 'git add']
};
