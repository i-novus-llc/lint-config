import { Linter } from 'eslint'

const config: Linter.Config = {
    root: true,
    env: {
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./"
    },
    extends: [
        "eslint-config-airbnb-base",
        "eslint-config-airbnb-typescript/base",
        "plugin:sonarjs/recommended",

        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    plugins: [
        "@typescript-eslint",
        "import",
        "sonarjs"
    ],
    "settings": {
        "import/resolver": "typescript"
    },
    rules: {
        "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": ["error", {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": "allow-with-description",
          "ts-check": "allow-with-description",
          "minimumDescriptionLength": 10
        }],
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-confusing-non-null-assertion": "warn",
        "@typescript-eslint/no-duplicate-enum-values": "warn",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "error",
        // Запрет повторных Required модификаторов поля через "!."
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        // Запрет чисто статических классов
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": ["error", {
          "ignoreParameters": false,
          "ignoreProperties": true
        }],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "@typescript-eslint/no-require-imports": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
        "@typescript-eslint/no-unnecessary-type-constraint": "warn",
        "@typescript-eslint/no-useless-empty-export": "warn",
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-return-this-type": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/require-array-sort-compare": "warn",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/type-annotation-spacing": ["error", {
          "before": false,
          "after": true,
          "overrides": {
            "arrow": {"before": true, "after": true }
          }
        }],
        "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "@typescript-eslint/comma-spacing": ["error"],
        "@typescript-eslint/default-param-last": ["error"],
        "@typescript-eslint/no-dupe-class-members": ["error"],
        "@typescript-eslint/no-throw-literal": ["error"],
        "@typescript-eslint/no-unused-expressions": ["error"],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/quotes": ["error", "single"],
        "@typescript-eslint/semi": ["error", "never"],
        // Sonar
        // Bug Detection
        // Дублировние кода в if-else, switch ветках
        "sonarjs/no-all-duplicated-branches": "error",
        // Переприсваивание значений
        "sonarjs/no-element-overwrite": "error",
        // Вызов функции только с описанными аргументами
        "sonarjs/no-extra-arguments": "error",
        // Идентичные выражения с обеих сторон бинарных операторов
        "sonarjs/no-identical-expressions": "error",
        // Обход массива с одним элементом
        "sonarjs/no-one-iteration-loop": "error",
        // Попытка использования резульата функции, которая ничего не возвращает
        "sonarjs/no-use-of-empty-return-value": "error",
        // Code Smell Detection
        // Схлопывание вложенных if  в один
        "sonarjs/no-collapsible-if": "error",
        // Отказ от проверки отрицательной на размер коллекций, и что он ">=0"
        "sonarjs/no-collection-size-mischeck": "error",
        // Дублирование if, switch веток
        "sonarjs/no-duplicated-branches": "error",
        // Дублировние функций
        "sonarjs/no-identical-functions": "error",
        // Инвертирование булевых операций
        "sonarjs/no-inverted-boolean-check": "error",
        // Сравнение булевых тип внутри условий (if(some == true){...})
        "sonarjs/no-redundant-boolean": "error",
        // Прерывание выполнения, которое и так произойдёт (неуместные break/return/continue)
        "sonarjs/no-redundant-jump": "error",
        // Дублировние if с одинаковым условием
        "sonarjs/no-identical-conditions": "error",
        // Отказ от switch на 1-2 ветки
        "sonarjs/no-small-switch": "error",
        // Чуть более умный no-unused-vars
        "sonarjs/no-unused-collection": "error",
        // Бесполезные / пустые catch
        "sonarjs/no-useless-catch": "error",
        // Присваивание переменной сразу же перед тем как её вернуть
        "sonarjs/prefer-immediate-return": "error",
        // if(true) { return true } else { return false }
        "sonarjs/prefer-single-boolean-return": "error",
        // Выкидываем предупреждения, если ключи в типах не в алфавитном порядке
        "typescript-sort-keys/interface": "warn",
        "typescript-sort-keys/string-enum": "warn",
        "no-use-before-define": ["off"],
        // Легализация ++/-- в циклах
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        // Обязательные фигурные скобки
        "curly": ["error", "all"],
        // Перенос строки в логических операторах
        "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
        //
        "optimize-regex/optimize-regex": "warn",
        // Пустая стока перед return
        //    "newline-before-return": "error",
        // Пустая стока после блока объявления переменных переменными
        //    "newline-after-var": ["error", "always"],
        "padding-line-between-statements": [
        "error",
        // Вставлять пробел после блока переменных
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
        // Вставлять пробел перед return
        { "blankLine": "always", "prev": "*", "next": "return" },
        // Вставлять пробел перед break
        { "blankLine": "always", "prev": "*", "next": "break" }
        ],
        // Выключаем, чтоб можно было использовать await в циклах
        "no-await-in-loop": ["off"],
        // Теперь при сравнении можно писать числа слева от знака, н.р.: 6 < from
        "yoda": ["off"],
        "spaced-comment": ["error", "always"],
        // Разбитие импортов на группы
        "import/order": [
        "error", {
            "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
            "newlines-between": "always"
        }
        ],
        // Дефолтного экспорта быть не должно
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "import/extensions": ["error", "always", {
        "ts": "never",
        "tsx": "never",
        "js": "never",
        "jsx": "never",
        "svg": "always",
        "png": "always",
        "json": "always"
        }],
        // Отступы внутри объектов и массивов
        "object-curly-spacing": ["error", "always"],
        // Разрешить стрелочным функциям не оборачивать единственный параметр в скобки
        "arrow-parens": ["error", "as-needed", {"requireForBlockBody": true}],
        // Разрешает в дочерних скоупах создавать переменные с теми же именами
        "no-shadow": ["off"],
        // without ";"
        "semi": ["error", "never"],
        // Цикломатическая сложность, надо плавно понижать до 10
        "complexity": ["error", { "max": 20 }],
        // Символ переноса строки в коде
        "linebreak-style": ["off"],
        // Везде одиночные кавычкии
        "quotes": ["error", "single"],
        // Отступы
        "indent": ["error", 4, {"SwitchCase": 1}],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/no-shadow": ["off"],
        "@typescript-eslint/no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "argsIgnorePattern": "^_",
            "caughtErrors": "all",
            "destructuredArrayIgnorePattern": "^_",
            "ignoreRestSiblings": true
        }],
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false }],
        "arrow-body-style": ["off"],
        // Ширина строк
        "max-len": ["error", {
            "code": 120,
            "ignorePattern": "^ *(declare)",
            "ignoreComments": true,
            "ignoreTrailingComments": true,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 4}],
        "no-console": ["warn", { "allow": ["warn", "error"] }],
        "no-continue": ["off"],
        "no-multi-spaces": ["error", { "ignoreEOLComments":  true } ],
        // Разрешает переприсваивать значение аргументам функций
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["out"], "ignorePropertyModificationsForRegex": ["^_"] }],
        "no-restricted-syntax": ["off"],
        "object-curly-newline": ["error", {
            "ObjectExpression": { "consistent": true },
            "ObjectPattern": { "consistent": true },
            "ImportDeclaration": { "consistent": true },
            "ExportDeclaration": { "consistent": true }
        }],
    }
}

module.exports = config
