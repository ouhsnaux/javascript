# 面向对象

## 封装

将相关的属性和方法，放到一个对象内部

### 对象的创建

1. 对象直接量
2. new Object
3. 工厂函数，当需要创建大量同一类的对象，使用工厂函数，方便后续批量更改。
4. 构造函数
   1. 重用结构
   2. 构造函数写法更加简单, new 做了四件事
      1. 自动创建空对象
      2. 自动添加复用属性和方法
      3. this指向空对象
      4. 自动返回创建的对象

## 继承

将同一类型的对象所公用的属性和方法放到父类中。
JS使用原型对象实现继承。

### 原型与原型链

作用：复用对象属性和方法。

关系：

每个对象都有原型对象，大部分最顶级原型对象是 `Object.prototype`。

对象，获取原型对象，`Object.getPrototypeOf(obj)`, 获取构造函数，`obj.constructor`其实是从原型对象获取。

构造函数，生成对象，`new Constructor()`，获取原型对象，`Constructor.prototype`。

原型对象，生成对象，`Object.create(prototype)`，获取构造函数，`prototype.constructor`。

访问对象的属性，如果对象中不包含该属性，会从原型对象中查找，如果仍没有，会到原型对象的原型对象中查找，直到找到该属性或遍历到顶级原型对象。这就是原型链。

set时，可以调用原型对象的set导致更改数据

* `Object.setPrototypeOf()` 修改对象的原型对象
* `Object.create()` 以对象为原型对象，创建新对象
* `Object.assign(Func.prototype, newPrototype)` 修改构造函数的原型对象，后续创建对象的原型对象都指向它

### 实现继承

继承的6种方法

<!-- 1. 原型链继承
2. 构造函数继承
3. 组合继承
4. 寄生组合继承 -->

1. 原型链继承，无法动态向父类构造函数传参
  
  ```js
  Children.prototype = new Parent();
  Children.prototype.constructor = Children;
  ```

1. 借用构造函数继承，未绑定原型链

  ```js
  function Children() {
      Parent.call(this);
      ...
  }
  ```

1. 组合继承，父类构造函数调用两次

   ```js
   function Children() {
      Parent.call(this);
      ...
   }
   Children.prototype = new Parent();
   Children.prototype.constructor = Children;
   ```

1. 寄生组合继承

   ```javascript
   function Children() {
      Parent.call(this);
      ...
   }
   function Middle() {}
   Middle.prototype = Parent.prototype;
   Children.prototype = new Middle();
   // 上面三句可以等于
   // Children.prototype = Object.create(Parent.prototype)
   // Object.setPrototypeOf(Children.prototype, Parent.prototype)
   // Children.prototype.__proto__ = Parent.prototype
   // 前两种写法会导致原型对象原有的属性和方法丢失，后两种不会
   Children.prototype.constructor = Children;
   ```

1. 继承静态属性和方法
   * `for...in` + `hasOwnProperty`
   * `Object.keys`
   * `Children.__proto__ = Parent`

1. 继承终极版

   ```js
   function Parent() { ... }
   function Children() {
      Parent.call(this);
      ...
   }
   Object.setPrototypeOf(Children, Parent);
   Object.setPrototypeOf(Children.prototype, Parent.prototype);
   ```

## 多态

重载和重写是实现多态的手段。

参数相同是重写，参数不同是重载。
