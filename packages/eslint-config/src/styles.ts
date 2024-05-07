const config = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
        'stylelint-config-clean-order'
    ],
    rules: {
        'at-rule-no-unknown': null,
        // Следующие 2 правила запрещают однострочные CSS-классы
        'block-closing-brace-newline-before': 'always',
        'block-opening-brace-newline-after': 'always',
        // Отступ в 4 пробела
        'indentation': 4,
        'scss/at-rule-no-unknown': true,
        // Не использовать & в селекторе, если он не нужен: & a {}
        'scss/selector-no-redundant-nesting-selector': true,
        // Запрет на использование & при формировании имени класса: &-focused {}
        'scss/selector-no-union-class-name': true,
    },
}

module.exports = config
