# 流程控制

## 逻辑判断

* `if, else, else if`
* `?:`

## 循环

* `while`
* `for`

## 事件回调

* 事件捕获，事件冒泡
* 事件委托
* `preventDefault, stopPropagation`

## Promise

* 3种状态，pending, fulfilled, rejected，只从pending转变一次，后续状态无法变更
* 3个方法，then, catch, finally
* 链式调用，
* 批量，Promise.all, Promise.any
* 构造函数的参数为一个函数，该函数包含两个参数，同样为函数
  * `resolve(data)` 调用时将状态改为 `fulfilled` 并返回data
  * `reject(err)` 调用时将状态改为 `rejected` 并返回错误信息

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
