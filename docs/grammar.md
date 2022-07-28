# 语法

## 基础

大小写敏感，使用 `Unicode` 编码。语句以分号结尾。

## 使用

### 行内

`<p onclick="alert('welcome')">Click Me!</p>`

尽量避免此种调用方式。

### 内部代码

```html
<script>
  const buttons = document.querySelectorAll('button');

  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }
</script>
```

一般放在 `<body>` 底部

### 外部文件

```html
<script src="./index.js"></script>
```

放在 `<body>` 底部，或添加 `async, defer` 属性

### 使用时机

如果需要操作DOM，在 `window.onload` 事件回调中执行。

## 注释

```js
// 单行注释

/* 多行注释1
 * 多行注释2
 * 多行注释3
 */
```

注释不能嵌套
