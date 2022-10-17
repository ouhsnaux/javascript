# object

## Object.create()

```js
Object.create = (prototype) {
  function F() {}
  F.prototype = prototype;
  return new F(); 
}
```
