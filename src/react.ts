import { Linter } from 'eslint'

const config: Linter.Config = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint-config-airbnb",
        "eslint-config-airbnb-typescript",

        "plugin:react-hooks/recommended",

        require.resolve('./node'),
    ],
    plugins: [
        "react-hooks"
    ],
    rules: {
        "react/jsx-indent-props": ["error", 4],
        // Теперь не будет требовать дефолты для обязательных параметров
        "react/require-default-props": ["off"],
        // Теперь можно использовать any в propTypes
        "react/forbid-prop-types": ["off"],
        "react/prop-types": ["off"],
        // Запрет <a href="#"> или <a href="javascript:void(0)">
        "jsx-a11y/anchor-is-valid": ["error", {"aspects": ["invalidHref"]}],
        // Теперь при совпаднии значений htmlFor у элемента и id у инпута не будет ошибки 
        "jsx-a11y/label-has-associated-control": ["error", {"required": {"some": ["nesting", "id"]}}],
        // Выключаем, чтоб можно было использовать setState в componentDidUpdate
        "react/no-did-update-set-state": ["off"],
        // Из за эффекта всплытия можно использовать функции и классы до их объявления, но с переменными не так.
        // Почему то работает тоько error и off, а ["error", { "functions": false, "classes": false }] - не воспринимается (
        // Деструктуризация в параметрах функций
        "react/destructuring-assignment": ["warn", "always", { "destructureInSignature": "always" }],
        // Если есть onClick, то key events теперь не обязательны
        "jsx-a11y/click-events-have-key-events": "off",
        // Теперь можно вешать обработчики на статические элементы, а не только на кнопки, чекбоксы, поля и прочее
        "jsx-a11y/no-static-element-interactions": "off",
        // Теперь в input можно передавать autoFocus
        "jsx-a11y/no-autofocus": "off",
        // off правил. иначе падает ошибка: Definition for rule was not found
        "react/jsx-curly-newline": "off", // TODO ["error", { "multiline": "require", "singleline": "forbid" }]
        "react/state-in-constructor": "off",
        "react/static-property-placement": "off",
        "react/jsx-props-no-spreading": "off",
        // Убираем сортировку методов
        "react/sort-comp": "off",
        // Расширения файлов, которые могут содержать jsx
        "react/jsx-filename-extension": [2, { "extensions": [".jsx", ".tsx"] }],
        "react/jsx-indent": ["error", 4, { "checkAttributes": true, "indentLogicalExpressions": true }],
        "react/jsx-tag-spacing": ["error", { "closingSlash": "never", "beforeSelfClosing": "always", "afterOpening": "never", "beforeClosing": "never" }],
        "react/react-in-jsx-scope": ["off"],
        "react/function-component-definition": ["off"],
        "react/button-has-type": ["error"]
    }
}

module.exports = config
