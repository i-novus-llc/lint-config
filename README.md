# @i-novus/eslint-config

[![NPM version](https://img.shields.io/npm/v/@i-novus/eslint-config.svg)](https://www.npmjs.org/package/@i-novus/eslint-config)

## Установка

```shell
npm install --save-dev @i-novus/eslint-config
```

or

```shell
yarn add --dev @i-novus/eslint-config
```

А так же понадобятся `eslint`, `stylelint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`.


## Использование ESLint

1. Добавьте `.eslintrc.json` в корень проекта.

### Правила react

```json
{
  "extends": ["@i-novus/eslint-config"]
  // or "extends": ["@i-novus/eslint-config/react"]
}
```

### Правила nodejs
```json
{
  "extends": ["@i-novus/eslint-config/node"]
}
```

2. Добавить скрипт в `package.json`

```json
{
  "scripts": {
    "lint": "eslint src/"
  }
}
```


## Использование stylelint

1. Добавьте `stylelint.config.cjs` в корень проекта.

```js
module.exports = {
    extends: [
        '@i-novus/eslint-config'
    ]
}
```

2. Добавить скрипт в `package.json`

```json
{
  "scripts": {
    "lint": "stylelint \"src/**/*.{css,scss,sass}\""
  }
}
```


## License

[Apache-2.0](./LICENSE)
