# 继承

## Object Prototype

Each object in has a special built-in attribute `[prototype]`, which can point to another object

当我们通过 key 来获取对象上的 value 时，会先在对象自身上找，如果找到就返回，找不到就去原型对象上找

```javascript
console.log(obj._proto_)
```

## Function Prototype

All functions have a prototype attribute

### new

1. 在内存中创建一个新的对象（空对象）；
2. 这个对象内部的`[[prototype]]`属性会被赋值为该构造函数的 prototype 属性；

那么也就意味着我们通过 Person 构造函数创建出来的所有对象的`[[prototype]]`属性都指向 Person.prototype：

![原型图](/img/web/javascript/js-advanced/继承/原型图.jpg)
我们通常把函数放到原型上，避免 new 出重复的函数

### constructor

By default, a property called constructor will be added to the prototype, which points to the current function object；

### Rewrite prototype object

If we need to add too many attributes to the prototype, we usually rewrite the entire prototype object

```javascript
function Foo() {}
foo.prototype = {
  name: 'fafa',
  age: 18,
  playing: function () {
    console.log('play')
  }
}
Object.defineProperty(Foo.prototype, 'constructor', {
  enumerable: false,
  value: Foo
})
```

## Prototype chain

- 从一个对象上获取属性，如果在当前对象中没有获取到就会去它的原型上面获取：

[Object: null prototype] {} 原型有什么特殊吗？

- 该对象有原型属性，但是它的原型属性已经指向的是 null，也就是已经是顶层原型了；
- 该对象上有很多默认的属性和方法；

![原型链内存](/img/web/javascript/js-advanced/继承/原型链内存.jpg)

## 原型链继承

```javascript
// 父类构造函数
function Parent() {
  // 被继承的属性
  this.name = 'fafa'
  this.obj = {}
}
// 父类原型上添加内容
Parent.prototype.running = function () {
  console.log('被继承的方法')
}
// 定义子类构造函数
function Son() {}
var p = new Parent()
Son.prototype = p
```

缺点

- 直接打印对象是看不到这个属性的
- 这个属性会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题；
- 不能给 Parent 传递参数
