# 严格模式

区别于松散模式，严格模式有3点不同

* 将静默错误改为抛出错误
* 修复使浏览器优化难以执行的问题，来提高性能
* 部分语法未来将成为 `ECMAScript` 的规范

严格模式运行在全局或单个函数中，

## 使用

在所有语句前，添加 `'use strict';`。模块和 `class`中默认严格模式。

## 抛出原有的静默错误

1. 在子作用域意外定义全局变量
2. 给只读属性赋值，给不可扩展对象添加参数
3. 删除不可删除属性
4. 函数多个参数名相同
5. 8进制数字使用 `0` 开头，（要使用 `0o`）
6. 给原始类型的值设置属性

## 性能优化

部分编译器优化功能需要在编译阶段提前知道变量存储的位置。

部分JS语法导致只有运行时才能确定，严格模式限制了这些情况的发生。

* 禁止使用 `with`
* `eval()` 中声明的变量，不会影响外部
* 不能使用 `delete name` 删除window上的属性
* eval 和 arguments 不能修改
* 通过参数别名修改实参，不会同时修改 `arguments`

    ```js
      function f(a) {
        'use strict';
        a = 42;
        return [a, arguments[0]];
      }
      const pair = f(17); // [42, 17]

      function f(a) {
        a = 42;
        return [a, arguments[0]];
      }
      const pair = f(17); // [42, 42]
    ```

* 不支持 `arguments.callee`

## 安全的 `JavaScript` 可以减少类型检查

* `this` 不必是对象，未指定时为 `undefined`

    ```js
    function f() { return this };
    function strictF() { 'use strict'; return this };

    f.call(1); // Number(1);
    strictF.call(1); // 1
    ```

* 在嵌套中不能访问 `func.arguments, func.caller`
