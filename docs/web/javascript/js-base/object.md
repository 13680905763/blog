# object

对象类型是一种存储键值对（key-value）的引用数据类型；

- key 是字符串（也叫做属性名 property name ，ES6 之后也可以是 Symbol 类型）；
- value 可以是任意类型，包括基本数据类型、函数类型、对象类型等；

## 创建对象和使用对象

- 对象字面量（Object Literal）：通过{}
- new Object+动态添加属性；
- new 其他类；

属性之间是以逗号（ comma ）分割的；

对象的使用过程包括如下操作：

- 访问对象的属性；

  ```js
  const info = {
    name: '小明',
    age: 18
  }
  console.log(info.name)
  ```

- 修改对象的属性；

  ```js
  info.name = '小张'
  ```

- 添加对象的属性；

  ```js
  info.height = 180
  ```

- 删除对象的属性；

  ```js
  delete info.height
  ```

## 对象的遍历

- 对象的遍历（迭代）：表示获取对象中所有的属性和方法。
  - Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组；
- 遍历方式一：普通 for 循环

  ```js
  const info = {
    name: '小明',
    age: 18
  }
  const infoKeys = Object.keys(info)
  for (let i = 0; i < infoKeys.length; i++) {
    const key = infoKeys[i]
    const value = info[key]
    console.log(`key: ${key}, value: ${value}`)
  }
  ```

- 遍历方式二：for in 遍历方法

  ```js
  for (let key in info) {
    const value = info[key]
    console.log(`key: ${key}, value: ${value}`)
  }
  ```

## 栈内存和堆内存

我们知道程序是需要加载到内存中来执行的，我们可以将内存划分为两个区域：栈内存和堆内存。

- 原始类型占据的空间是在栈内存中分配的；
- 对象类型占据的空间是在堆内存中分配的；

![内存](/img/web/javascript/js-base/object/内存.jpg)

### 值类型和引用类型

- 原始类型的保存方式：在变量中保存的是值本身，所以原始类型也被称之为值类型；
- 对象类型的保存方式：在变量中保存的是对象的“引用”，所以对象类型也被称之为引用类型；

## 批量创建对象的方案

批量创建对象，但是又让它们的属性不一样

### 工厂函数

- 我们可以封装一个函数，这个函数用于帮助我们创建一个对象，我们只需要重复调用这个函数即可；
- 工厂模式其实是一种常见的设计模式；

```javascript
function createPerson(name,age){
  const person = new Object()
  person.name = name
  person.age = age

  person.eating = funciton() {
    console.log(`${this.name}在吃东西`)
  }
  return person
}
const person1 = createPerson('小明',18)
const person2 = createPerson('小张',23)
```

### 构造函数

- 工厂方法创建对象有一个比较大的问题：我们在打印对象时，对象的类型都是 Object 类型
  - 但是从某些角度来说，这些对象应该有一个他们共同的类型；
  - 下面我们来看一下另外一种模式：构造函数的方式；
- 什么是构造函数
  - 构造函数也称之为构造器（constructor），通常是我们在创建对象时会调用的函数；
  - 在其他面向的编程语言里面，构造函数是存在于类中的一个方法，称之为构造方法；
  - 但是 JavaScript 中的构造函数有点不太一样，构造函数扮演了其他语言中类的角色；
- 也就是在 JavaScript 中，构造函数其实就是类的扮演者：
  - 比如系统默认给我们提供的 Date 就是一个构造函数，也可以看成是一个类；
  - 在 ES5 之前，我们都是通过 function 来声明一个构造函数（类）的，之后通过 new 关键字来对其进行调用；
  - 在 ES6 之后，JavaScript 可以像别的语言一样，通过 class 来声明一个类；
- 那么类和对象到底是什么关系呢？

### 类和对象的关系

- 那么什么是类（构造函数）呢？
  - 现实生活中往往是根据一份描述/一个模板来创建一个实体对象的.
  - 编程语言也是一样, 也必须先有一份描述, 在这份描述中说明将来创建出来的对象有哪些属性(成员变量)和行为(成员方法)
- 比如现实生活中，我们会如此来描述一些事物：
  - 比如水果 fruits 是一类事物的统称，苹果、橘子、葡萄等是具体的对象；

### JavaScript 中的类（ES5）

- 在 JavaScript 中类的表示形式就是构造函数。
- JavaScript 中的构造函数是怎么样的？
  - 构造函数也是一个普通的函数，从表现形式来说，和千千万万个普通的函数没有任何区别；
  - 那么如果这么一个普通的函数被使用 new 操作符来调用了，那么这个函数就称之为是一个构造函数；
- 如果一个函数被使用 new 操作符调用了，那么它会执行如下操作：
  1. 在内存中创建一个新的对象（空对象）；
  2. 这个对象内部的\[[prototype]]属性会被赋值为该构造函数的 prototype 属性；
  3. 构造函数内部的 this，会指向创建出来的新对象；
  4. 执行函数的内部代码（函数体代码）；
  5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；
- 接下来，我们可以用构造函数的方式来实现一下批量创建学生。

```javascript
function Person(name,age){
  this.name = name
  this.age = age

  this.eating = funciton() {
    console.log(`${this.name}在吃东西`)
  }
  return person
}
const person1 = new Person('小明',18)
const person2 = new Person('小张',23)
```

- 这个构造函数可以确保我们的对象是有 Person 的类型的（实际是 constructor 的属性，这个我们后续再探讨）；
- 事实上构造函数还有很多其他的特性：
  - 比如原型、原型链、实现继承的方案
  - 比如 ES6 中类、继承的实现；
