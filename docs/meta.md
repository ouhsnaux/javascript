# Meta programming

## proxy 对象代理

创建一个对象代替原有对象，主要用来输出对象属性访问，校验格式化和清理输入信息等等。

主要包括两个函数

* target 要代理的对象
* handler 配置要重定义的操作及其处理方法，使用Reflect提供后备处理方法

```js
const obj = {};
let p = new Proxy(obj, {
  get(target, name) {
    return name in target ? target[name] : 42
  }
});
p.a = 1
console.log(p.a, p.b) // 1, 42
```

* get
* set

## Reflect
