import { Linter } from 'eslint'

const config: Linter.Config = {
    root: true,
    env: {
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 'latest',
        'project': './tsconfig.json',
        'sourceType': 'module',
        'tsconfigRootDir': './',
    },
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-typescript/base',
        'plugin:sonarjs/recommended',

        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    plugins: [
        '@typescript-eslint',
        'import',
        'sonarjs',
        'optimize-regex',
        'typescript-sort-keys',
    ],
    'settings': {
        'import/resolver': 'typescript',
    },
    rules: {
        '@typescript-eslint/array-type': ['error', { 'default': 'array-simple' }],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': ['error', {
            'minimumDescriptionLength': 10,
            'ts-check': 'allow-with-description',
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
        }],
        '@typescript-eslint/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        '@typescript-eslint/comma-spacing': ['error'],
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/indent': ['error', 4, {
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild', 'TSTypeParameterInstantiation'],
            SwitchCase: 1,
        }],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
        '@typescript-eslint/no-dupe-class-members': ['error'],
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-explicit-any': 'error',
        // Запрет повторных Required модификаторов поля через "!."
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        // Запрет чисто статических классов
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': ['error', {
            'ignoreParameters': false,
            'ignoreProperties': true,
        }],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/no-require-imports': 'warn',
        '@typescript-eslint/no-shadow': ['off'],
        '@typescript-eslint/no-throw-literal': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/no-unused-vars': ['error', {
            'args': 'after-used',
            'argsIgnorePattern': '^_',
            'caughtErrors': 'all',
            'destructuredArrayIgnorePattern': '^_',
            'ignoreRestSiblings': true,
            'vars': 'all',
        }],
        '@typescript-eslint/no-use-before-define': ['error', { 'functions': false }],
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/prefer-enum-initializers': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-return-this-type': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/require-array-sort-compare': 'warn',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/type-annotation-spacing': ['error', {
            'after': true,
            'before': false,
            'overrides': {
                'arrow': { 'after': true, 'before': true },
            },
        }],
        'arrow-body-style': ['off'],
        // Разрешить стрелочным функциям не оборачивать единственный параметр в скобки
        'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],
        // Цикломатическая сложность, надо плавно понижать до 10
        'complexity': ['error', { 'max': 20 }],
        // Обязательные фигурные скобки
        'curly': ['error', 'all'],
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'json': 'always',
            'jsx': 'never',
            'png': 'always',
            'svg': 'always',
            'ts': 'never',
            'tsx': 'never',
        }],
        'import/no-default-export': 'error',
        // Разбитие импортов на группы
        'import/order': [
            'error', {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        // Дефолтного экспорта быть не должно
        'import/prefer-default-export': 'off',
        // Отступы
        'indent': ['off'],
        // Символ переноса строки в коде
        'linebreak-style': ['off'],
        // Ширина строк
        'max-len': ['error', {
            'code': 120,
            'ignoreComments': true,
            // При объявлении функций - деклатация типа может быть очень длинной, а линтер очень плохо работает с переносами внутри дженериков
            'ignorePattern': '^ *(declare|import|export|const)',
            'ignoreRegExpLiterals': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreTrailingComments': true,
            'ignoreUrls': true,
        }],
        'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 4 }],
        // Выключаем, чтоб можно было использовать await в циклах
        'no-await-in-loop': ['off'],
        'no-console': ['warn', { 'allow': ['warn', 'error'] }],
        'no-continue': ['off'],
        'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
        // Разрешает переприсваивать значение аргументам функций
        'no-param-reassign': ['error', {
            'ignorePropertyModificationsFor': ['out', 'req', 'res', 'reply'],
            'ignorePropertyModificationsForRegex': ['^_'],
            'props': true,
        }],
        // Легализация ++/-- в циклах
        'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
        'no-restricted-syntax': ['off'],
        // Разрешает в дочерних скоупах создавать переменные с теми же именами
        'no-shadow': ['off'],
        'no-use-before-define': ['off'],
        'object-curly-newline': ['error', {
            'ExportDeclaration': { 'consistent': true },
            'ImportDeclaration': { 'consistent': true },
            'ObjectExpression': { 'consistent': true },
            'ObjectPattern': { 'consistent': true },
        }],
        // Отступы внутри объектов и массивов
        'object-curly-spacing': ['error', 'always'],
        // Перенос строки в логических операторах
        'operator-linebreak': ['error', 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
        'optimize-regex/optimize-regex': 'warn',
        // Пустая стока перед return
        //    "newline-before-return": "error",
        // Пустая стока после блока объявления переменных переменными
        //    "newline-after-var": ["error", "always"],
        'padding-line-between-statements': [
            'error',
            // Вставлять пробел после блока переменных
            { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
            { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
            // Вставлять пробел перед return
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
            // Вставлять пробел перед break
            { 'blankLine': 'always', 'prev': '*', 'next': 'break' },
        ],
        // Везде одиночные кавычкии
        'quotes': ['error', 'single'],
        // without ";"
        'semi': ['error', 'never'],
        // Sonar
        // Bug Detection
        // Дублировние кода в if-else, switch ветках
        'sonarjs/no-all-duplicated-branches': 'error',
        // Схлопывание вложенных if в один
        'sonarjs/no-collapsible-if': 'error',
        // Отказ от проверки отрицательной на размер коллекций, и что он ">=0"
        'sonarjs/no-collection-size-mischeck': 'error',
        // Дублирование if, switch веток
        'sonarjs/no-duplicated-branches': 'error',
        // Переприсваивание значений
        'sonarjs/no-element-overwrite': 'error',
        // Вызов функции только с описанными аргументами
        'sonarjs/no-extra-arguments': 'error',
        // Дублировние if с одинаковым условием
        'sonarjs/no-identical-conditions': 'error',
        // Идентичные выражения с обеих сторон бинарных операторов
        'sonarjs/no-identical-expressions': 'error',
        // Дублировние функций
        'sonarjs/no-identical-functions': 'error',
        // Инвертирование булевых операций
        'sonarjs/no-inverted-boolean-check': 'error',
        // Обход массива с одним элементом
        'sonarjs/no-one-iteration-loop': 'error',
        // Сравнение булевых тип внутри условий (if(some == true){...})
        'sonarjs/no-redundant-boolean': 'error',
        // Прерывание выполнения, которое и так произойдёт (неуместные break/return/continue)
        'sonarjs/no-redundant-jump': 'error',
        // Отказ от switch на 1-2 ветки
        'sonarjs/no-small-switch': 'error',
        // Чуть более умный no-unused-vars
        'sonarjs/no-unused-collection': 'error',
        // Попытка использования резульата функции, которая ничего не возвращает
        'sonarjs/no-use-of-empty-return-value': 'error',
        // Бесполезные / пустые catch
        'sonarjs/no-useless-catch': 'error',
        // Присваивание переменной сразу же перед тем как её вернуть
        'sonarjs/prefer-immediate-return': 'error',
        // if(true) { return true } else { return false }
        'sonarjs/prefer-single-boolean-return': 'error',
        'spaced-comment': ['error', 'always', { "markers": ["/"] }],
        // Выкидываем предупреждения, если ключи в типах не в алфавитном порядке
        'typescript-sort-keys/interface': 'warn',
        'typescript-sort-keys/string-enum': 'warn',
        // Теперь при сравнении можно писать числа слева от знака, н.р.: 6 < from
        'yoda': ['off'],
        // Deprecated https://eslint.org/docs/latest/rules/no-spaced-func
        'no-spaced-func': ['off']
    },
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.cjs', '*.mjs', '*.es', '*.es6'],
            rules: {
                'indent': ['error', 4, { 'SwitchCase': 1 }],
            },
        },
    ],
}

module.exports = config
