# eslint-config-meow

<a href="https://www.npmjs.com/package/eslint-config-meow">
  <img src="https://img.shields.io/npm/v/eslint-config-meow">
</a>
<a href="https://www.npmjs.com/package/eslint-config-meow">
  <img src="https://img.shields.io/npm/dt/eslint-config-meow">
</a>

[![](https://img.shields.io/npm/l/eslint-config-meow)](https://github.com/coderzhaoziwei/eslint-config-meow/blob/main/LICENSE)

## Installation

```
# npm
npm install --save-dev eslint eslint-config-meow

# or yarn
yarn add -D eslint eslint-config-meow

# or pnpm
pnpm add -D eslint eslint-config-meow
```

## Usage

You can config in `package.json`.

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
  "eslintConfig": {
    "extends": "meow"
  }
}
```

If you are using VS Code, config auto fix in `.vscode/settings.json`.

```jsonc
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    // Auto eslint fix on save
    "source.fixAll.eslint": true
  },

  // An array of language ids which should be validated by ESLint.
  "eslint.validate": [
    "javascript",
    // "javascriptreact",
    "json",
    "json5",
    "jsonc"
    // "markdown"
  ]
}
```

## Thanks

- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

## License

MIT © 2022 Coder Zhao
