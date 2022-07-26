# 变量

## 命名

变量名叫做标识符，以字母，`_, $` 开头，

## 声明

`var` 声明语句会提前执行（赋值不会提前），值为 `undefined`。

`let, const` 不会变量提升，

未声明直接使用的变量，会在全局作用域声明变量。

解构赋值。

```js
// let variable = foo.key
let { key: variable } = foo

// 当变量名与对象的属性重名时，可以简写，let key = foo.key
let { key } = foo;

// 多级解构赋值，let variable = foo.child.key
let { child: { key: variable }} = foo;
```

## 作用域

* 全局作用域
* 函数作用域，函数内部，不包括箭头函数
* 块级作用域，使用 `let, const` 声明的变量具有块级作用域，`var` 声明的变量不具有块级作用域

父级作用域是在定义的时候确定的。包裹该作用域的作用域就是父作用域。

作用域链：当访问一个变量时，会从当前作用域查找，如果不存在，会去父级作用域查找，直到找到该变量或遍历到全局作用域。

模拟块级作用域的方法

* IIFE，缺点：内部的return, break, continue, this会发生变化
* try...catch
