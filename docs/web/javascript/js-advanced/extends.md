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

## 借用构造函数继承

在子类型构造函数的内部调用父类型构造函数

```javascript
function Parent(name) {
  this.info = { name: name }
}

function Student(name) {
  // 在子类调用父类构造函数，在子类实例中每个引用属性都是独有的
  Parent.call(this, name)
}
```

## 组合继承

原型链+借用构造函数

缺点：

- 调用两次父类构造函数。

  - 一次在创建子类原型的时候；
  - 另一次在子类构造函数内部(也就是每次创建子类实例的时候)；

- 所有的子类实例事实上会拥有两份父类的属性

  - 一份在当前的实例自己里面(也就是 person 本身的)，
  - 一份在子类对应的原型对象中(也就是 person.**_proto_**里面)；

## 原型式继承函数

student 对象的原型指向了 person 对象

```javascript
function objCopy(obj) {
  // 返回一个新对象，该对象的_proto_指向传入的父对象
  function f() {}
  f.prototype = obj
  return new f()
}
// 父类方法，属性可复用
// 引用类型属性会被共享
```

## 寄生式继承函数

原型类继承和工厂模式

```javascript
// 原型式继承+工厂模式(批量生成继承对象)

function objCopy(obj) {
  function f() {}
  f.prototype = obj
  return new f()
}

function createStudent(person) {
  const newObj = objCopy(person)
  newObj.studying = function () {
    console.log(this.name + 'studying')
  }
}

const person = {
  name: '小明'
}

const student = createStudent(person)
student.name = '小张'
```

## 寄生组合式继承

```javascript
// 子类的原型对象 = 父类寄生的原型对象

function objCopy(obj) {
  function f() {}
  f.prototype = obj
  return new f()
}

function inheritPrototype(subType, superType) {
  // 子类的原型对象 = 父类寄生的原型对象
  subType.prototype = objCopy(superType.prototype)
  subType.prototype.constructor = subType
}
```

## 对象方法的补充

- hasOwnProperty：对象是否有某一个属于自己的属性（不是在原型上的属性）
- in/for in 操作符：判断某个属性是否在某个对象或者对象的原型上
- instanceof：用于检测构造函数（Person、Student 类）的 pototype，是否出现在某个实例对象的原型链上
- isPrototypeOf：用于检测某个对象，是否出现在某个实例对象的原型链上

## 原型继承关系

![原型继承关系](/img/web/javascript/js-advanced/继承/原型继承关系.jpg)

## class

- 每个类都可以有一个自己的构造函数（方法），这个方法的名称是固定的 constructor；
- 当我们通过 new 操作符，操作一个类的时候会调用这个类的构造函数 constructor；

当我们通过 new 关键字操作类的时候，会调用这个 constructor 函数，并且执行如下操作：

1. 在内存中创建一个新的对象（空对象）；
2. 这个对象内部的`[[prototype]]`属性会被赋值为该类的 prototype 属性；
3. 构造函数内部的 this，会指向创建出来的新对象；
4. 执行构造函数的内部代码（函数体代码）；
5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；

```javascript
class Person {
  constructor(name, age) {
    // this 放到创建出来的新对象上
    this.name = name
    this._age = age
  }

  // 实例方法
  running() {
    console.log('running~')
  }

  // 静态方法 不需要实例即可调用
  static cretae() {}

  // get set
  get age() {
    console.log('访问了age')
    return this._age
  }
  set age(newAge) {
    console.log('set了age')
    this._age = newAgeF
  }
}

class Student extends Person {
  // 使用 extends 继承
}

// super
```

super

- 在子类的构造函数中使用 this 或者返回默认对象之前，必须先通过 super 调用父类的构造函数！
- super 的使用位置有三个：子类的构造函数、实例方法、静态方法；

## 多态

不同的数据类型进行同一个操作，表现出不同的行为，就是多态的体现。

```javascript
function foo(a, b) {
  return a + b
}
foo(10, 20)
foo('ab', 'cd')
```
