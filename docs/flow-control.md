# 流程控制

## 逻辑判断 和循环

* `if, else, else if`
* `switch case`
* `?:`

* `while`
* `for`
* `for...in` 遍历所有可枚举属性，包括原型链
* `for...of` 遍历含有iterator的对象

* `break, continue`

## 事件回调

* 事件捕获，事件冒泡
* 事件委托
* `preventDefault, stopPropagation`

## 错误

* `throw`
* `try {} catch (e) {} finally {}`

finally一定会执行，即使try catch中有return

## Promise

* 3种状态，pending, fulfilled, rejected，只从pending转变一次，后续状态无法变更
* 3个方法，then, catch, finally
* 链式调用，
* 批量，Promise.all, Promise.any
* 构造函数的参数为一个函数，该函数包含两个参数，同样为函数
  * `resolve(data)` 调用时将状态改为 `fulfilled` 并返回data
  * `reject(err)` 调用时将状态改为 `rejected` 并返回错误信息
* 事件
  * `rejectionhandled`
  * `unhandledrejection`

* `Promise.then` 不会立即执行，而是创建微任务，微任务的目的就是插队。

`queueMicrotask(() => {})` 添加微任务

## async/await

async永远返回promise, await获取promise的值。
使用try catch捕获异常。
比 `promise` 更符合直觉。
同时出现多个异步请求，使用 `Promise.all` 更方便。

## setTimeout, setInterval, requestAnimationFrame

## web workers

不能访问DOM,
多个worker不要有重叠，比如操作同一个变量。

worker内容必须写在一个独立的js文件中

### 主线程

1. 声明worker， `const worker = new Worker('./generate.js')`
2. 使用 `postMessage` 调用worker，并传递参数

    ```js
    worker.postMessage({ command: 'generate', quota: 1 });
    ```

3. 使用 `message` 事件，当worker运行结束后触发

    ```js
    window.addEventListener('message', (message) => {
      console.log(message);
    })
    ```

### 子线程

1. 开始执行，通过 `message` 事件，被主线程调用时触发
2. 使用 `postMessage` 通知主线程，并返回结果

```js
addEventListener('message', (message) => {
  // 主线程传入的参数作为 message.data，此处使用 `command` 区分类型
  if (message.data.command === 'generate') {
    generate(message.data.quota);
  }
})

function generate(quota) {
  // 执行大量计算
  const result = calculate(quota);
  // 计算结束后通知主线程
  postMessage(result)
}
```

2. 返回

## 前端执行机制

任务队列插入任务的情况

* 程序开始执行
* setTimeout/setInterval
* 事件触发

事件循环机制

* 执行事件队列的第一个
* 执行完毕后执行微任务队列的 所有任务
* requestAnimationFrame
* 排列和渲染
* 执行事件队列的下一个

三种事件循环，window, worker, worklet

## Iterator

{
  next() {
    return { done, value }
  }
}

## generator

function* generatorFunc() { yield xxx; }

next传值为yield接受值
