const config = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
        'stylelint-config-clean-order'
    ],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'declaration-block-single-line-max-declarations': 0,
        // Не использовать & в селекторе, если он не нужен: & a {}
        'scss/selector-no-redundant-nesting-selector': true,
        // Запрет на использование & при формировании имени класса: &-focused {}
        'scss/selector-no-union-class-name': true,
    },
}

module.exports = config
