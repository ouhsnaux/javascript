# Object

## 属性

`obj.b, obj[expression], obj?.b, var { b } = obj`
`delete obj.b`

## 方法

## 修饰符

## 对象的创建

1. 对象直接量
2. 工厂函数，当需要创建大量同一类的对象，使用工厂函数，方便后续批量更改。
3. 构造函数
   1. 通过工厂函数创建的对象方法完全相同，但是却未复用，使用构造函数复用方法。
   2. 构造函数写法更加简单
      1. 自动创建空对象
      2. 自动添加复用属性和方法
      3. this指向空对象
      4. 自动返回创建的对象

## 原型与原型链

作用：复用对象属性和方法。

关系：

每个对象都有原型对象，大部分最顶级原型对象是 `Object.prototype`。

对象，获取原型对象，`Object.getPrototypeOf(obj)`, 获取构造函数，`obj.constructor`其实是从原型对象获取。

构造函数，生成对象，`new Constructor()`，获取原型对象，`Constructor.prototype`。

原型对象，生成对象，`Object.create(prototype)`，获取构造函数，`prototype.constructor`。

访问对象的属性，如果对象中不包含该属性，会从原型对象中查找，如果仍没有，会到原型对象的原型对象中查找，直到找到该属性或遍历到顶级原型对象。这就是原型链。

### 设置原型对象

* `Object.setPrototypeOf()` 修改对象的原型对象
* `Object.create()` 以对象为原型对象，创建新对象
* `Object.assign(Func.prototype, newPrototype)` 修改构造函数的原型对象，后续创建对象的原型对象都指向它

### 多态

重载和重写是实现多态的手段。

参数相同是重写，参数不同是重载。

## 封装

私有属性，及访问私有属性的方法。

## class

类声明

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

## 原型链继承

## JSON

<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes>
