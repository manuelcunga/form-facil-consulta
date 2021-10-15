module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {

        'no-unused-vars': 'off',
        'camelcase': 'error',
        'no-new': 'error',
        'max-len': ['error', { code: 100 }],
        'no-unused-expressions': 'error',
        'prefer-destructuring': 'off',
        'padded-blocks': ['error', 'never'],
        'arrow-parens': 'off',
        'consistent-return': 'off',
        'no-alert': 'off',
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',


        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}