module.exports = {
  // react17以上的版本，使用plugin:react/jsx-runtime
  extends: ['eslint:recommended', 'plugin:react/jsx-runtime'],
  // 代码运行环境
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    ecmaVersion: 6,
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: [['@', './src']],
      },
    },
  },
  rules: {
    /*
     * 建议规则
     */
    // 必须使用全等
    eqeqeq: 2,
    // 不建议使用consolelog
    'no-console': 1,
    // 不建议使用alert
    'no-alert': 2,
    // 强制对多行注释使用特定风格，块注释或行注释
    // 'multiline-comment-style': 2,
    // 不建议使用不必要的分号
    'no-extra-semi': 2,
    // 不建议使用短符号进行类型转换（禁用隐式转换）
    'no-implicit-coercion': 2,
    // 不建议注释与代码在同一行
    'no-inline-comments': 2,
    // 不建议在三元操作数中间换行
    // 'no-nested-ternary': 2,
    // 不建议将变量初始化为undefined
    'no-undef-init': 2,
    // 不建议在有更简单的可替代的表达式时(||)使用三元操作符
    'no-unneeded-ternary': 2,
    // 不建议变量定义却不使用
    'no-unused-expressions': 2,
    // 不建议使用var
    'no-var': 2,
    // 推荐对象字面量简写语法
    'object-shorthand': 1,
    // 推荐回调函数使用箭头函数形式
    'prefer-arrow-callback': 1,
    // 优先使用对象与数组的解构语法
    'prefer-destructuring': 1,
    // 建议使用模板字符串而非字符串拼接
    'prefer-template': 2,
    // 在注释内容前建议添加空格
    'spaced-comment': 1,

    /*
     * 布局风格
     */
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': ['error', { multiline: true }],
    // 建议数组方括号中使用一致的空格？
    'array-bracket-spacing': 0,
    // 建议多项数据的最后一项保留逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 建议逗号前添加空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 箭头函数前后应有空格
    'arrow-spacing': 2,
    // 强制使用一致的空格，默认逗号放在数组元素、对象属性或变量声明之后
    'comma-style': 2,
    // 不建议在计算属性（obj[foo] || { [foo]: 1 }）中使用空格
    'computed-property-spacing': 2,
    // 强制在点号之前或之后换行
    // 'dot-location': ['error', 'object'],
    // 函数调用时，名称与括号之间不建议存在空格
    'func-call-spacing': 2,
    // 在迭代器函数名与*号之间是否存在空格
    /* 'generator-star-spacing': ['error', 'before'], */
    // 缩进为2
    indent: ['error', 2, { SwitchCase: 1 }],
    // jsx元素中的属性使用双引号
    'jsx-quotes': ['error', 'prefer-double'],
    // 对象的key和value之间要有空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 强制在关键字（else this function）前后使用一致的空格
    'keyword-spacing': ['error', { before: true }],
    // 允许注释周围存在空行
    'lines-around-comment': [
      'error',
      // 在对象字面量的开始位置、在块语句的结束位置允许注释
      { allowObjectStart: true, allowBlockStart: true },
    ],
    // 要求调用无参构造函数时带括号
    'new-parens': 'error',
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': 'error',
    // 空格只允许一个
    'no-multi-spaces': 'error',
    // 不允许出现多个空行
    'no-multiple-empty-lines': 'error',
    // 行尾禁止出现空格
    'no-trailing-spaces': 'error',
    // 属性前（foo. bar）不允许出现空格
    'no-whitespace-before-property': 'error',
    // enforce consistent line breaks after opening and before closing braces
    // 'object-curly-newline': ['error', { multiline: true }],
    // 花括号前后要有空格
    'object-curly-spacing': ['error', 'always'],
    // 当代码块只有一条语句时，省略花括号
    curly: ['error', 'multi-or-nest'],
    // 换行时换行符放在操作符后面（即操作符后换行）
    'operator-linebreak': ['error', 'after'],
    // 建议对象的属性在各自的独立行
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    // 在剩余和扩展运算符及其表达式之间不需要空格（... a）
    'rest-spread-spacing': ['error', 'never'],
    // 分号前无空格，分号后有空格（for循环）
    'semi-spacing': ['error', { before: false, after: true }],
    // 强制分号出现在行尾
    'semi-style': ['error', 'last'],
    // 要求块语句之前有空格（func() {}，try {}，if() {}）
    'space-before-blocks': 'error',
    // 函数圆括号之前是否存在空格
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    // 禁止圆括号内出现空格
    'space-in-parens': ['error', 'never'],
    // 要求操作符周围有空格（1 === 1）
    'space-infix-ops': 'error',
    // 要求一元操作符（new delete typeof ! ++）在之前或之后存在空格
    'space-unary-ops': [2, { words: true }],
    // 要求包裹正则表达式
    'wrap-regex': 2,
    // Enforce spacing around the * in yield* expressions
    /* 'yield-star-spacing': ['error', 'before'], */
  },
}
