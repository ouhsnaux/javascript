# Object

## 属性

属性名的类型只能是 `string, symbol`

* `obj.b`
* `obj[expression]`
* `obj?.b`
* `var { b } = obj`
* `delete obj.b`

## 修饰符

* `value, writable`
* `getter, setter`
* `enumerable, configurable`

```js
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};
```

`Object.defineProperties`

### 多态

## class

类声明，不会提升

```js
// 使用class声明类
class Person {
   // 声明属性
   name;
   // constructor 构造函数
   constructor(name) {
      this.name = name;
   }
   // 声明公用方法
   introduceSelf() {
      console.log(`MyName is ${this.name}`)
   }
}
```

类继承

```js
// 使用extends继承
class Professor extends Person {
   teaches;
   constructor(name, teaches) {
      // 使用super调用父类构造函数
      super(name);
      this.teaches = teaches;
   }
   introduceSelf() {
      console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`)
   }
   grade(paper) {
      const grade = Math.floor(Math.randow() * (5 - 1) + 1);
      console.log(grade);
   }
}
```

封装

```js
class Student extends Person {
   // `#` 开头代表私有属性
   #year;
   constructor(name, year) {
      super(name);
      this.#year = year;
   }
   introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
   }
   canStudyArchery() {
      return this.#year > 1;
   }
}
```

* `#` 表示私有，只能通过公共方法访问
* `static` 表示静态，甚至可以添加静态块（立即执行函数）
* 静态私有属性和方法只能通过静态公有方法使用，访问静态私有属性和方法时不要使用this

### 7个属性和方法

```js
class Person() {
   // 私有属性
   #age = 1;
   constructor(name) {
      // 实例属性
      this.name = name;
      // 实例方法
      this.say = () => { console.log(this.name) }
   }
   // 原型方法
   say() {
      console.log(this.name);
   }
   // 静态属性
   static type = 'yellow',
   // 静态方法
   static say(p) {
      console.log(`My name is ${p.name}`);
   }
}
```

## 遍历

* `Object.keys, Object.getOwnPropertyNames, Object.getOwnPropertySymbols`
* `for in`
* `for of`

遍历顺序：

1. 正整数，按照数字大小排列
2. 其它根据插入顺序

## JSON

## Iterable

包含 `Symbol.iterator` 属性，可以使用 `for...of` 遍历。

## 赋值

myObject上不存在foo属性，但存在原型链上层时
`myObject.foo = 'bar';` 的三种情况与处理方式

1. 如果在 `[[Prototype]]` 上层`foo` 属性未被标记只读，则会在myObject中添加一个名为 `foo` 的新属性。最常见
2. 如果 `foo` 被标记为只读，则无法修改和添加属性，严格模式下还会报错
3. 如果 `foo` 是`setter` 属性，一定会调用该 `setter`。不会在 `myObject` 中创建新属性，也不会修改`setter` 本身
