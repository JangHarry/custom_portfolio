module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    env: {
        // 'vue/setup-compiler-macros': true,
        node: true,
    },

    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                tabWidth: 4,
                trailingComma: 'none',
                printWidth: 150,
                bracketSpacing: true,
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1, // 한 줄에 1개 속성만 허용
                multiline: { max: 1, allowFirstLine: false },
            },
        ],
    },
};
