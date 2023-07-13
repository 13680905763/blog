# es6

## 新的 ecma 代码执行描述

es5

- 执行上下文栈：Execution Context Stack，用于执行上下文的栈结构；
- 执行上下文：Execution Context，代码在执行之前会先创建对应的执行上下文；
- 变量对象：Variable Object，上下文关联的 VO 对象，用于记录函数和变量声明；
- 全局对象：Global Object，全局执行上下文关联的 VO 对象；
- 激活对象：Activation Object，函数执行上下文关联的 VO 对象；
- 作用域链：scope chain，作用域链，用于关联指向上下文的变量查找；

### 词法环境

词法环境是一种规范类型，用于在词法嵌套结构中定义关联的变量、函数等标识符；

- 一个词法环境是由环境记录（Environment Record）和一个外部词法环境（oute;r Lexical Environment）组成；
- 一个词法环境经常用于关联一个函数声明、代码块语句、try-catch 语句，当它们的代码被执行时，词法环境被创建出来；

在 ES5 之后，执行一个代码，通常会关联对应的词法环境；

- LexicalEnvironment 用于处理 let、const 声明的标识符：
- VariableEnvironment 用于处理 var 和 function 声明的标识符

### 环境记录（Environment Record）

在这个规范中有两种主要的环境记录值:声明式环境记录和对象环境记录。

- 声明式环境记录：声明性环境记录用于定义 ECMAScript 语言语法元素的效果，如函数声明、变量声明和直接将标识符绑定与
  ECMAScript 语言值关联起来的 Catch 子句。
- 对象式环境记录：对象环境记录用于定义 ECMAScript 元素的效果，例如 WithStatement，它将标识符绑定与某些对象的属性
  关联起来。

![ecma内存图](/img/web/javascript/js-advanced/es6/ecma内存图.jpg)

## ees6

### let/const

#### 基本使用

const 一旦被赋值，就不能被修改；如果赋是引用类型，那么可以通过引用找到对应的对象，修改对象的内容；
(let const 不允许重复声明变量)

#### 作用域提升

```javascript
console.log(foo) // 报错
let foo = 'foo'
```

这些变量会被创建在包含他们的词法环境被实例化时，但是是不可以访问它们的（处于暂时性死区 TDZ），直到词法绑定被求值；因此 let、const 没有进行作用域提升，但是会在解析阶段被创建出来。

#### Window 对象添加属性

全局通过 var 来声明一个变量，会在 window 上添加一个属性： let、const 是不会给 window 上添加任何属性的。
![environment](/img/web/javascript/js-advanced/es6/environment.jpg)

#### 块级作用域

```javascript
{
  var foo 1= 'foo'
}
console.log(foo1) // 可以访问
{
  let foo2 = 'foo'
}
console.log(foo2) // 不可以访问，let const 有块级作用域

// 应用 for循环

```

### 模板字符串

```javascript
const name = 'fafa'
console.log(`may name is ${name}`)

// foo``,还可以当成函数调用
```

### 默认参数

```javascript
function foo(x = 20, y = 30) {
  console.log(x, y)
}

// 与解构一起使用
function foo({ name, age } = { name: 'fafa', age: 18 }) {
  console.log(name, age)
}
function foo({ name = 'fafa', age = 18 } = {}) {
  console.log(name, age)
}
```

### 剩余参数

```javascript
// 最后一个参数是 ... 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组
function foo(x, ...args) {
  console.log(x)
  console.log(args)
}
```

剩余参数和 arguments 区别

- 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参；
- arguments 对象不是一个真正的数组，而 rest 参数是一个真正的数组，可以进行数组的所有操作；
- arguments 是早期的 ECMAScript 中为了方便去获取所有的参数提供的一个数据结构，而 rest 参数是 ES6 中提供并且希望以此
  来替代 arguments 的；

### 箭头函数

- 箭头函数是没有显式原型 prototype 的，所以不能作为构造函数，使用 new 来创建对象；
- 箭头函数也不绑定 this、arguments、super 参数；

### 展开语法

```javascript
const arr = [1, 2]
const arr1 = [...arr]
const obj = { name: 'fafa', age: 18 }
const obj1 = { ...obj }
```

### 数值的表示

```javascript
const num1 = 100
const num2 = 0b100
const num3 = 0o100
const num4 = 0x100
// ES2021新增特性：数字过长时，可以使用_作为连接符
const num5 = 100_000_000
```

### Symbol 的基本使用

symbol 用来生成一个独一无二的值，Symbol 函数执行后每次创建出来的值都是独一无二的；

```javascript
const s1 = Symbol('abc')
const s2 = Symbol('cba')

const obj = {}
obj[s1] = 'abc'
obj[s2] = 'cba'

// 相同值的 Symbol
const s1 = Symbol.for('abc')
const s2 = Symbol.for('abc')
console.log(s1 === s2) //true

const key = Symbol.ketFor(s1) // abc
```

### set&map

在 ES6 中新增了另外两种数据结构：Set、Map，以及它们的另外形式 WeakSet、WeakMap。

#### Set 的基本使用

类似于数组，但是和数组的区别是元素不能重复，那么 Set 有一个非常常用的功能就是给数组去重。

```javascript
const set1 = new Set()
set1.add(10)
set1.add(14)
set1.add(16)
console.log(set1) // Set(3) {10, 14, 16}
const set2 = new Set([11, 15, 18, 11])
console.log(set2) // Set(3) {11, 15, 18}

// 数组去重
const arr = [10, 20, 10, 44]
const set = new Set(arr)
const newArr1 = [...set]
const newArr2 = Array.from(set)
```

- Set 常见的属性：
  - size：返回 Set 中元素的个数；
- Set 常用的方法：
  - add(value)：添加某个元素，返回 Set 对象本身；
  - delete(value)：从 set 中删除和这个值相等的元素，返回 boolean 类型；
  - has(value)：判断 set 中是否存在某个元素，返回 boolean 类型；
  - clear()：清空 set 中所有的元素，没有返回值；
  - forEach(callback, [, thisArg])：通过 forEach 遍历 set；
- 另外 Set 是支持 for of 的遍历的。

#### WeakSet 使用

- WeakSet 中只能存放对象类型，不能存放基本数据类型；
- WeakSet 对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么 GC 可以对该对象进行回收；
- WeakSet 常见的方法：
  - add(value)：添加某个元素，返回 WeakSet 对象本身；
  - delete(value)：从 WeakSet 中删除和这个值相等的元素，返回 boolean 类型；
  - has(value)：判断 WeakSet 中是否存在某个元素，返回 boolean 类型；

注意：WeakSet 不能遍历

- 因为 WeakSet 只是对对象的弱引用，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁。
- 所以存储到 WeakSet 中的对象是没办法获取的；

```javascript
const pwset = new WeakSet()
class Person {
  constructor() {
    pwset.add(this)
  }
  running() {
    if (!pwset.has(this)) throw new Error('不能通过其他对象调用running方法')
    console.log('running', this)
  }
}
```

#### map 的基本使用

用于存储映射关系，可以用对象作为 key

```javascript
const obj1 = { name: 'fafa' }
const obj2 = { age: 18 }
const map1 = new Map()
map1.set(obj1, 'abc')
map1.set(obj2, 'cba')
console.log(map1.get(obj1), map1.get(obj2))

const map2 = new Map([
  [obj1, 'abc'],
  [obj2, 'cba']
])
```

- Map 常见的属性：
  - size：返回 Map 中元素的个数；
- Map 常见的方法：
  - set(key, value)：在 Map 中添加 key、value，并且返回整个 Map 对象；
  - get(key)：根据 key 获取 Map 中的 value；
  - has(key)：判断是否包括某一个 key，返回 Boolean 类型；
  - delete(key)：根据 key 删除一个键值对，返回 Boolean 类型；
  - clear()：清空所有的元素；
  - forEach(callback, [, thisArg])：通过 forEach 遍历 Map；
- Map 也可以通过 for of 进行遍历。

#### WeakMap 的使用

- WeakMap 的 key 只能使用对象，不接受其他的类型作为 key；
- WeakMap 的 key 对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么 GC 可以回收该对象；

WeakMap 也是不能遍历的，没有 forEach 方法，也不支持通过 for of 的方式进行遍历；（应用于 vue 响应式）

### 其他

- Proxy、Reflect
- Promise
- ES Module 模块化开发
