const INDENT_VALUE = 2

module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    // sourceType: 'module',
  },
  plugins: [],
  extends: [
    'eslint:recommended',
    './json.js',
  ],
  rules: {
    // 缩进风格（默认 2 个空格）
    indent: ['error', INDENT_VALUE, {
      ArrayExpression: 'first',
      CallExpression: { arguments: 'first' },
      FunctionDeclaration: { parameters: 'first' },
      FunctionExpression: { parameters: 'first' },
      ImportDeclaration: 'first',
      MemberExpression: 1,
      ObjectExpression: 'first',
      SwitchCase: 1,
      flatTernaryExpressions: true,
      outerIIFEBody: 0,
    }],

    // 警告在循环中出现 await
    'no-await-in-loop': 'error',
    // 警告 console.log()
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-template-curly-in-string': 'error', // 警告，当常规字符串中出现模板字面量占位符的语法时："My name is ${name}."

    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    'class-methods-use-this': 'error', // 强制类方法使用 this
    'consistent-return': 'error', // 统一 return 是否指定返回值

    // 控制语句的大括号风格
    // if/else if/else/for/while/do 默认使用大括号，单行可省略
    curly: ['error', 'multi-line'], // [--fix]
    'default-case': 'error', // 强制 switch 语句中有 default 分支

    'dot-location': ['error', 'property'], // [--fix] 点号和属性位于同一行

    eqeqeq: 'error', // 使用 === 和 !==

    'guard-for-in': 'error', // 在使用 for in 遍历对象时，会把从原型链继承来的属性也包括进来。这样会导致意想不到的项出现。
    // 此规则目的在于，阻止在 for in 遍历过程中，由于不对结果进行筛选而导致意想不到的行为发生。因此，当 for in 循环没有使用 if 语句对结果进行筛选时，该规则将会发出警告。

    'no-alert': 'error', // 禁用 alert/confirm/prompt
    'no-div-regex': 'error', // [--fix] 禁止除法操作符显式的出现在正则表达式开始的位置

    'no-else-return': ['error', { allowElseIf: false }], // [--fix] 禁止 if 语句中 return 语句之后有 else/else if


    'no-eval': 'error', // 警告 eval()

    'no-extend-native': 'error', // 扩展原生对象
    /**
     * 在 JavaScript 中，你可以扩展任何对象，包括内置或者”原生”对象。有时人们改变这些原生对象的行为，会影响到代码中的其它部分。
     * 例如我们重写了一个内建的方法，将会影响到所有对象，甚至是其它内建对象。
     */

    'no-extra-bind': 'error', // [--fix] 禁止不必要的函数绑定 ()


    'no-floating-decimal': 'error', // [--fix] 当数值的小数点之前或之后缺少数字时，该规则将发出警告。

    // 禁止使用较短的符号实现类型转换 ()
    'no-implicit-coercion': 'error', // [--fix]  ~ / !! / + / *

    // 禁用隐式的eval() ()
    'no-implied-eval': 'error', // 例如：setTimeout("alert('Hi!')", 100)

    // 禁止 this 关键字在类或类对象之外出现 ()
    'no-invalid-this': 'error',
    // 在严格模式下，类或者类对象之外的 this 关键字可能是 undefined 并且引发 TypeError。

    'no-iterator': 'error', // 禁用 __iterator__，属性已废弃，不应再使用

    // 消除 JavaScript 中标签的使用。当遇到标签语句时，该规则将发出警告。
    'no-labels': 'error',

    'no-loop-func': 'error', // 禁止在循环中创建函数

    'no-magic-numbers': 'error', // 禁用魔法数字。莫名出现的数字，应替换为常量。


    'no-multi-spaces': 'error', // 禁止连续的空格

    'no-multi-str': 'error', // 禁止多行字符串
    'no-new': 'error', // 禁止使用 new 以避免产生副作用
    'no-new-func': 'error', // 禁用 Function 构造函数
    'no-new-wrappers': 'error', // 禁止对 String，Number 和 Boolean 使用 new 操作符
    // / ()
    'no-octal-escape': 'error', // 禁止在字符串字面量中使用八进制转义序列
    //
    'no-param-reassign': 'error', // 禁止对 function 的参数进行重新赋值

    'no-proto': 'error', // 禁用 __proto__ 属性

    'no-return-assign': 'error', // 禁止在 return 语句中赋值
    'no-return-await': 'error', // 禁用不必要的 return await ()

    //     禁用 Script URL ()
    'no-script-url': 'error', // 在链接地址中使用 javascript:，例如： location.href = "javascript:void(0)";

    // 禁止自身比较（）
    'no-self-compare': 'error',
    // 唯一肯能会对变量自身做比较时候是当你在测试变量是否是 NaN。然而，在这种情况下，更适合使用 typeof x === 'number' && isNaN(x) 或者 Number.isNaN ES2015 函数 而不是变量自身比较。


    'no-sequences': 'error', // 禁用逗号操作符

    'no-throw-literal': 'error', // 限制异常的抛出，只允许 Error 被 throw

    'no-unmodified-loop-condition': 'error', // 禁止出现不变的循环条件

    'no-unused-expressions': 'error', // 禁止出现未被使用的表达式


    'no-useless-call': 'error', // 禁止出现没必要的 .call() / .apply()
    'no-useless-concat': 'error', // 禁止出现没必要的字符串拼接
    'no-useless-return': 'error', // [--fix] 禁止出现没必要的 return 语句
    'no-void': 'error', // 禁用 void 操作符


    'prefer-named-capture-group': 'error', // 建议在正则表达式中使用命名捕获组
    'prefer-promise-reject-errors': 'error', // 要求使用 Error 对象作为 Promise 拒绝的原因

    radix: 'error', // 要求必须有基数 ()
    // 当使用 parseInt() 函数时，通常省略第二个参数，基数，并根据第一个参数确定它是什么类型的数字。 默认情况下，parseInt()将自动检测十进制和十六进制(通过0x前缀)。在ECMAScript 5 之前，parseInt()也自动检测八进制文本，这会出现问题，因为许多开发人员认为前导0会被忽略。


    'require-await': 'error', // 禁止使用不带 await 表达式的 async 函数
    'require-unicode-regexp': 'error', // 强制在 RegExp 上使用 u 标志

    'wrap-iife': ['error', 'inside'], // [--fix] 强制包裹 IIFE 的函数声明

    //

    yoda: ['error', 'never', { exceptRange: true }], // 禁用 yoda 条件


    // 变量
    'no-undef-init': 'error', // [--fix] 禁止将变量初始化为 undefined
    'no-undefined': 'error', // 禁止使用名称为 undefined 的变量
    'no-use-before-define': 'error', // 禁止在变量声明之前使用变量


    // Node
    'global-require': 'error', // 要求 require() 出现在顶层模块作用域中
    'no-mixed-requires': 'error', // 禁止 require 调用与普通变量声明混合
    'no-new-require': 'error', // 禁止 new require(...) 的表达方式
    'no-buffer-constructor': 'error', // 禁用 Buffer() 构造函数，应使用 Buffer.from / Buffer.alloc / Buffer.allocUnsafe 代替
    'no-path-concat': 'error', // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-process-env': 'error', // 禁用 process.env
    'no-process-exit': 'error', // 禁用 process.exit()
    'callback-return': 'error', // 强制数组方法的回调函数中有 return 语句

    // 数组风格
    'array-bracket-newline': ['error', 'consistent'], // 智能换行
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'], // 强制中括号前后无空格 [1, 2, 3]

    // 大括号风格
    'block-spacing': ['error', 'always'], // [--fix] 强制大括号前后空格 { a: 'a'}
    'brace-style': ['error', '1tbs'], // [--fix] 强制大括号风格

    //
    camelcase: 'error', // 强制使用骆驼命名法

    // 逗号
    'comma-dangle': ['error', 'always-multiline'], // [--fix] 强制使用尾随逗号
    'comma-spacing': ['error', { before: false, after: true }], // [--fix] 强制逗号后空格
    'comma-style': ['error', 'last'], // [--fix] 强制逗号位于行尾

    'computed-property-spacing': ['error', 'never'], // [--fix] 强制计算属性中括号中无空格

    'eol-last': ['error', 'always'], // [--fix] 强制文件末尾空行

    // 函数风格
    'func-call-spacing': ['error', 'never'], // [--fix] 强制函数调用无空格
    'func-names': 'error', // 强制命名 function 表达式
    'func-name-matching': 'error', // 强制函数名与赋值给它的变量名或属性名相匹配
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // 强制使用函数声明或箭头函数表达式
    'function-paren-newline': ['error', 'consistent'], // [--fix] 函数的参数括号内智能换行

    'implicit-arrow-linebreak': ['error', 'beside'], // [--fix] 强制箭头函数隐式返回的函数体位置


    'jsx-quotes': ['error', 'prefer-double'], // [--fix] 强制所有不包含双引号的 JSX 属性值使用双引号

    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // [--fix]对象键值间空格
    'keyword-spacing': ['error', { before: true, after: true }], // [--fix]关键字周围空格

    'linebreak-style': ['error', 'unix'], // [--fix] 换行符

    // 注释
    'lines-around-comment': ['error', { beforeBlockComment: true }], // 多行注释前空行
    'multiline-comment-style': ['error', 'separate-lines'], // [--fix] 禁用多行注释，JSDoc 例外
    'no-warning-comments': ['error', { terms: ['TODO', 'FIXME'] }], // 禁用指定的注释
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+', '*'] }], // 注释前空格

    'multiline-ternary': ['error', 'always-multiline'], // 三元操作符智能换行

    'new-cap': 'error', // 构造函数首字母大写
    'new-parens': 'error', // [--fix] 调用无参构造函数时带括号

    'no-array-constructor': 'error', // 禁用 Array 构造函数
    'no-lonely-if': 'error', // 禁止 if 作为唯一的语句出现在 else 语句中

    'no-multi-assign': 'error', // 禁止连续赋值
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }], // [--fix] 文件的最大连续空行数
    'no-negated-condition': 'error', // 禁用否定表达式 ()
    'no-new-object': 'error', // 禁用 Object 的构造函数

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // 禁用 ++ 和 --

    'no-tabs': 'error', // 禁用 tab
    'no-trailing-spaces': 'error', // [--fix] 禁用行尾空格
    'no-unneeded-ternary': 'error', // 禁止可以表达为更简单结构的三元操作符 ()

    //  ()
    'no-whitespace-before-property': 'error', // [--fix] 禁止属性前有空白

    'object-curly-newline': ['error', { multiline: true }], // [--fix] 大括号内前后换行
    'object-curly-spacing': ['error', 'always'], // [--fix] 大括号内总有空格
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }], // [--fix]允许所有属性在同一行
    'object-shorthand': ['error', 'always'], // 对象字面量简写

    'operator-assignment': 'error', // 简化赋值操作符 += -= *= /= %= ...
    'operator-linebreak': ['error', 'before'], // [--fix] 在操作符前换行
    'padded-blocks': ['error', 'never'], // [--fix] 代码块内部前后无换行
    'prefer-object-spread': 'error', // 优先使用对象扩展而不是 Object.assign

    // 引号
    quotes: ['error', 'single', { avoidEscape: true }], // 单引号
    'quote-props': ['error', 'as-needed'], // 对象字面量属性名称如非必要不使用引号

    // 分号
    semi: ['error', 'never'], // 禁用分号
    //
    'space-before-blocks': ['error', 'always'], // [--fix] 在语句块之前使用空格
    'space-before-function-paren': 'error', // [--fix] 在 function 的左括号之前使用空格

    // 禁止或强制 ()
    'space-in-parens': ['error', 'never'], // 小括号内前后无空格
    'space-infix-ops': ['error', { int32Hint: false }], // [--fix] 中缀操作符前后有空格
    'space-unary-ops': ['error', { words: true, nonwords: false }], // [--fix] 一元操作符前后空格
    'switch-colon-spacing': ['error', { before: false, after: true }], // [--fix] switch 分支中冒号后空格

    'template-tag-spacing': ['error', 'never'], // 模板标记和字面量之间无空格
    'unicode-bom': ['error', 'never'], // 禁止使用 Unicode 字节顺序标记 (BOM)

    'wrap-regex': 'error', // 要求正则表达式被包裹起来

    // 箭头函数
    'arrow-body-style': ['error', 'as-needed'], // [--fix] 函数体按需使用大括号
    'arrow-parens': ['error', 'as-needed'], // [--fix] 参数按需使用小括号
    'arrow-spacing': ['error', { before: true, after: true }], // [--fix] 箭头的前后使用空格
    'no-confusing-arrow': ['error', { allowParens: true }], // [--fix] 禁止在可能与比较操作符相混淆的地方使用箭头函数

    'no-duplicate-imports': 'error', // 禁止重复的模块导入

    'no-useless-computed-key': 'error', // [--fix] 禁止在对象中使用不必要的计算属性

    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    'no-useless-rename': 'error', // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字

    'no-var': 'error', // [--fix] 禁用 var

    'prefer-arrow-callback': 'error', // [--fix] 使用箭头函数作为回调
    'prefer-const': 'error', // [--fix] 优先使用 const
    'prefer-destructuring': 'error', // [--fix] 优先使用数组和对象解构
    'prefer-rest-params': 'error', // 优先使用剩余参数而不是 arguments
    'prefer-spread': 'error', // 优先使用扩展运算符而非 .apply()
    'prefer-template': 'error', // 优先使用模板字面量而非字符串连接

    'rest-spread-spacing': 'error', // 剩余和扩展运算符与其表达式之间无空格

    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
    }],


    'symbol-description': 'error', // 要求 symbol 描述 ()
    'template-curly-spacing': ['error', 'always'], // [--fix] 模板字符串中大括号内前后空格


  },
  ignorePatterns: [
    '!.github',
    '!.vscode',
    'dist',
    'node_modules',
  ],
}
