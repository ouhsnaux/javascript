# 原始数据类型

## String

* 转义字符 `\`，也可以连接折行字符串
* 模板字符串 \`abc${var}\`
  * 内部可以使用折行字符串
  * 也可以作为函数调用参数的写法。
  * 内部使用 \` 和 $,需要借助 `\`
* `\u`

### 方法

* `indexOf, lastIndexOf, includes, startsWith, endsWith`
* `match, matchAll, replace, replaceAll, split` 都可以使用正则
* `substring, slice, trim`, slice可以用正则
* `search` 使用正则搜索下标
* `charAt, charCodeAt, []`
* `split, join`
* `concat, padStart, padEnd, repeat`
* `toLowerCase, toUpperCase`

## Number

* 进制，`0o, 0x, 0b`
* 浮点数精度丢失

### 常量

* Number.EPSILON
* NaN
* Infinity, -Infinity

### 静态方法

* parseInt, parseFloat
* isInteger
* isNaN, 是否Number.NaN, 而window.isNaN判断是否非数字

### 实例方法

* toExponential()
* toFixed()
* toPrecision()

### Math方法

* 三角函数
* Math.random()
* Math.floor, Math.ceil, Math.round

## Boolean

## Null, Undefined

## BigInt

`9007199254740992n`，不能与number一起运算

## Symbol

创建唯一值

## 类型转换

### 转换规则

`null, undefined, 0, NaN, ''` 会被转换为 `false`

### 转换方法

`+, Number, parseInt, parseFloat`

`!, !!`

使用 `BigInt(number)` 转换

## 包装对象
