# eslint-config-meow

WIP

no semi, single quotes.

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

## License

MIT © 2022 Coder Zhao
