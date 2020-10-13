module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 0, // 禁用var，用let和const代替
    'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
    "eol-last": 0,
    'no-multiple-empty-lines': [1, { "max": 3 }] // 空行最多不能超过2行
  }
}
