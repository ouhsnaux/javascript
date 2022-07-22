# Function

* `function functionName() {}` 函数声明也会提升，且优先级更高
* 主要用于功能复用，对象的函数也成为方法
* 内部为函数作用域，通过返回函数或包含函数的对象，构建闭包。可以在外部访问函数内部的变量。

## this指向

1. this指向调用当前函数的对象
2. 箭头函数this等于当前执行环境的this
3. `call,apply,bind` 可以指定this
