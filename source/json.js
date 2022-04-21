const INDENT_VALUE = 2

module.exports = {
  plugins: [
    'eslint-plugin-jsonc',
  ],
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        // 文件内换行
        'no-multiple-empty-lines': ['error', { max: 0, maxBOF: 0, maxEOF: 1 }],

        // 缩进
        'jsonc/indent': ['error', INDENT_VALUE],
        // 逗号
        'jsonc/comma-dangle': ['error', { arrays: 'never', objects: 'never' }],
        'jsonc/comma-style': ['error', 'last'],
        // 引号
        'jsonc/quote-props': ['error', 'always'],
        'jsonc/quotes': ['error', 'double', { avoidEscape: false }],
        // 数组
        'jsonc/array-bracket-spacing': 'error',
        'jsonc/array-bracket-newline': ['error', 'consistent'],
        'jsonc/array-element-newline': ['error', 'consistent'],
        // 对象
        'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-curly-newline': ['error', { consistent: true, minProperties: 4 }],
        'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

        'jsonc/no-bigint-literals': 'error',
        'jsonc/no-binary-expression': 'error',
        'jsonc/no-binary-numeric-literals': 'error',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/no-escape-sequence-in-identifier': 'error',
        'jsonc/no-floating-decimal': 'error',
        'jsonc/no-hexadecimal-numeric-literals': 'error',
        'jsonc/no-infinity': 'error',
        'jsonc/no-multi-str': 'error',
        'jsonc/no-nan': 'error',
        'jsonc/no-number-props': 'error',
        'jsonc/no-numeric-separators': 'error',
        'jsonc/no-octal': 'error',
        'jsonc/no-octal-escape': 'error',
        'jsonc/no-octal-numeric-literals': 'error',
        'jsonc/no-parenthesized': 'error',
        'jsonc/no-plus-sign': 'error',
        'jsonc/no-regexp-literals': 'error',
        'jsonc/no-sparse-arrays': 'error',
        'jsonc/no-template-literals': 'error',
        'jsonc/no-undefined-value': 'error',
        'jsonc/no-unicode-codepoint-escapes': 'error',
        'jsonc/no-useless-escape': 'error',
        'jsonc/space-unary-ops': 'error',
        'jsonc/valid-json-number': 'error',
        'jsonc/vue-custom-block/no-parsing-error': 'error',
      },
    },
  ],
}
