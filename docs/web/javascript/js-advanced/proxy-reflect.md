# Proxy-Reflect

## 监听对象的操作

当需要监听对象中的属性被设置或获取的过程

```javascript
// Object.defineProperty 的存储属性描述符来对属性的操作进行监听
Object.keys(obj).foreach((key) => {
  let value = obj[key]
  Objcet.defineProperty(obj, key, {
    set: function (newValue) {
      console.log(`监听到给${key}设置值`)
    },
    get: function () {
      console.log(`监听到获取${key}的值`)
    }
  })
})
```

缺点

1. Object.defineProperty 设计的初衷，不是为了去监听截止一个对象中所有的属性的。
   - 我们在定义某些属性的时候，初衷其实是定义普通的属性，但是后面我们强行将它变成了数据属性描述符。
2. 如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么
   Object.defineProperty 是无能为力的。

## Proxy 基本使用

- 在 ES6 中，新增了一个 Proxy 类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的：
  - 如果我们希望监听一个对象的相关操作，那么我们可以先创建一个代理对象（Proxy 对象）；之后对该对象的所有操作，都通过代理对象来完成，代理对象可以监听我们想要对原对象进行哪些操作；
- 我们可以将上面的案例用 Proxy 来实现一次：

  - 需要 new Proxy 对象，并且传入需要侦听的对象以及一个处理对象，可以称之为 handler；

  ```javascript
  const obj = {
    name: 'fafa'
  }
  const objProxy = new Proxy(obj, {})
  ```

  - 之后的操作都是直接对 Proxy 的操作，而不是原有的对象，因为我们需要在 handler 里面进行侦听；

### Proxy 的 set 和 get 捕获器

- 如果我们想要侦听某些具体的操作，那么就可以在 handler 中添加对应的捕捉器（Trap）：
- set 和 get 分别对应的是函数类型；
  - set 函数有四个参数：
    - target：目标对象（侦听的对象）；
    - property：将被设置的属性 key；
    - value：新属性值；
    - receiver：调用的代理对象；
  - get 函数有三个参数：
    - target：目标对象（侦听的对象）；
    - property：被获取的属性 key；
    - receiver：调用的代理对象；

```javascript
const objProxy = new Proxy(obj, {
  set: function (target, key, value) {
    console.log('set捕获器', key)
    target[key] = value
  },
  get: function (target, key) {
    console.log('get捕获器', key)
    return target[key]
  }
})
```

### Proxy 所有捕获器

| 捕获器                           |                                                                               |
| -------------------------------- | ----------------------------------------------------------------------------- |
| handler.getPrototypeOf           | Object.getPrototypeOf 方法的捕捉器。                                          |
| handler.setPrototypeOf           | Object.setPrototypeOf 方法的捕捉器。                                          |
| handler.isExtensible             | Object.isExtensible 方法的捕捉器(判断是否可以新增属性)。                      |
| handler.preventExtensions        | Object.preventExtensions 方法的捕捉器。                                       |
| handler.getOwnPropertyDescriptor | Object.getOwnPropertyDescriptor 方法的捕捉器。                                |
| handler.defineProperty           | Object.defineProperty 方法的捕捉器。                                          |
| handler.ownKeys                  | Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。 |
| handler.has                      | in 操作符的捕捉器。                                                           |
| handler.get                      | 属性读取操作的捕捉器                                                          |
| handler.set                      | 属性设置操作的捕捉器                                                          |
| handler.deleteProperty           | delete 操作符的捕捉器                                                         |
| handler.apply                    | 函数调用操作的捕捉器                                                          |
| handler.construct                | new 操作符的捕捉器                                                            |

### construct 和 apply

construct 和 apply，它们是应用于函数对象的

```javascript
function foo() {
  console.log('foo被调用', this, arguments)
  return 'foo'
}
const fooProxy = new Proxy(foo, {
  apply: function (target, thisArg, otherArgs) {
    console.log('函数的apply侦听')
    return target.apply(thisArg, otherArgs)
  },
  construct: function (target, argArray, newTarget) {
    console.log(target, argArray, newTarget)
    return new target()
  }
})
```

## Reflect 的作用

- Reflect 也是 ES6 新增的一个 API，它是一个对象，字面的意思是反射。
  - 它主要提供了很多操作 JavaScript 对象的方法，有点像 Object 中操作对象的方法；
  - 比如 Reflect.getPrototypeOf(target)类似于 Object.getPrototypeOf()；
  - 比如 Reflect.defineProperty(target, propertyKey, attributes)类似于 Object.defineProperty() ；
- 如果我们有 Object 可以做这些操作，那么为什么还需要有 Reflect 这样的新增对象呢？
  - 这是因为在早期的 ECMA 规范中没有考虑到这种对 对象本身 的操作如何设计会更加规范，所以将这些 API 放到了 Object 上面；
  - 但是 Object 作为一个构造函数，这些操作实际上放到它身上并不合适；
  - 另外还包含一些类似于 in、delete 操作符，让 JS 看起来是会有一些奇怪的；
  - 所以在 ES6 中新增了 Reflect，让我们这些操作都集中到了 Reflect 对象上；
  - 另外在使用 Proxy 时，可以做到不操作原对象；
- 那么 Object 和 Reflect 对象之间的 API 关系，[可以参考 MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)

### Reflect 的常见方法

| Reflect 中有哪些常见的方法呢？它和 Proxy 是一一对应的，也是 13 个 |                                                                                                              |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Reflect.getPrototypeOf(target)                                    | 类似于 Object.getPrototypeOf()                                                                               |
| Reflect.setPrototypeOf(target, prototype)                         | 设置对象原型的函数. 返回一个 Boolean， 如果更新成功，则返回 true。                                           |
| Reflect.isExtensible(target)                                      | 类似于 Object.isExtensible()                                                                                 |
| Reflect.preventExtensions(target)                                 | 类似于 Object.preventExtensions()。返回一个 Boolean。                                                        |
| Reflect.getOwnPropertyDescriptor(target, propertyKey)             | 类似于 Object.getOwnPropertyDescriptor()。如果对象中存在该属性，则返回对应的属性描述符, 否则返回 undefined。 |
| Reflect.defineProperty(target, propertyKey, attributes)           | 和 Object.defineProperty() 类似。如果设置成功就会返回 true。                                                 |
| Reflect.ownKeys(target)                                           | 返回一个包含所有自身属性（不包含继承属性）的数组。(类似 Object.keys(), 但不会受 enumerable 影响).            |
| Reflect.has(target, propertyKey)                                  | 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。                                                  |
| Reflect.get(target, propertyKey[, receiver])                      | 获取对象身上某个属性的值，类似于 target[name]                                                                |
| Reflect.set(target, propertyKey, value[, receiver])               | 将值分配给属性的函数。返回一个 Boolean，如果更新成功，则返回 true                                            |
| Reflect.deleteProperty(target, propertyKey)                       | 作为函数的 delete 操作符，相当于执行 delete target[name]                                                     |
| Reflect.apply(target, thisArgument, argumentsList)                | 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似             |
| Reflect.construct(target, argumentsList[, newTarget])             | 对构造函数进行 new 操作，相当于执行 new target(...args)                                                      |

### Reflect 的使用

```javascript
// Proxy案例中对原对象的操作，都修改为Reflect来操作
const objProxy = new Proxy(obj, {
  set: function (target, key, value, receiver) {
    return Reflect.set(target, key, receiver)
  },
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver)
  }
})
//receiver参数，如果我们的源对象（obj）有setter、getter的访问器属性，那么可以通过receiver来改变里面的this；
```

### Reflect 的 construct

```javascript
function Student(name, age) {
  this.name = name
  this.age = age
}
function Animal() {}
const stu = Reflect.construct(Student, ['fafa', 18], Animal)
console.log(stu.__proto__ === Animal.prototype) // true
```
