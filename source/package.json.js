const ORDER_LIST = ['name', 'version', 'description', 'keywords', 'license', 'author', 'private', 'type', 'repository', 'homepage', 'bugs', 'funding', 'files', 'main', 'module', 'exports', 'types', 'unpkg', 'jsdelivr', 'bin', 'sideEffects', 'scripts', 'dependencies', 'optionalDependencies', 'devDependencies', 'peerDependencies', 'peerDependenciesMeta', 'bundledDependencies', 'eslintConfig', 'publishConfig']

const ASC_PATH_PATTERN = '^(dependencies|bundledDependencies|devDependencies|optionalDependencies|peerDependencies|peerDependenciesMeta)$'

module.exports = {
  plugins: [
    'eslint-plugin-jsonc',
  ],
  overrides: [
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/no-comments': 'error',
        'jsonc/sort-keys': [
          'error',
          { pathPattern: '^$', order: ORDER_LIST },
          { pathPattern: ASC_PATH_PATTERN, order: { type: 'asc' } },
        ],
      },
    },
  ],
}
