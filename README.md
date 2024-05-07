# @i-novus/eslint-config

## Installation

If you are using eslint-loader in your build config don't forget to check the last version
it supports. For example, webpack 4 eslint-loader supports eslint up to version 7, so install
_^eslint7.0.0_:

```shell
npm install --save-dev @i-novus/eslint-config eslint
```

or

```shell
yarn add --dev @i-novus/eslint-config eslint
```

## Usage

1. Add `.eslintrc` to the project root. Base config suits for node project usage

```json
{
  "extends": ["@i-novus/eslint-config"]
  // or "extends": ["@i-novus/eslint-config/node"]
}
```

If you want to use this config in React project, you have to extend it from /react import path

```json
{
  "extends": ["@i-novus/eslint-config/react"]
}
```

2. Add script to `package.json`

```json
{
  "scripts": {
    "lint": "eslint src/ --fix"
  }
}
```

## License

[Apache-2.0](./LICENSE)
