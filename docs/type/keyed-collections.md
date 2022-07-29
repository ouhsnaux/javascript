# 带键集合

## Map

类似对象，可以使用 `for...of` 遍历

区别于对象

* 键可以是任意类型
* 遍历顺序与插入顺序一致
* 通过size直接获取大小
* 大部分对象都有默认的原型链

### 属性和方法

* get(key);
* set(key, value);
* delete(key);
* has(key);
* size
* clear();

## WeakMap

不包括 `size` 和 `clear`。
键只能是对象，不可遍历，不会阻塞垃圾回收

## Set

对比数组的优点

* 按值删除方便, 性能强，delete(value);
* 每个值独一无二，NaN也唯一

### 属性和方法

* add(item);
* delete(item);
* has(item)
* size

与数组转换

```js
Array.from(set1);
[...set];

new Set(arr);
```

## WeakSet

每个值都是对象，不会阻塞垃圾回收，不可遍历
