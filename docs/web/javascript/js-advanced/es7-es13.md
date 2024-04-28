# es7-13

## es7

### Array Includes

- 在 ES7 之前，如果我们想判断一个数组中是否包含某个元素，需要通过 indexOf 获取结果，并且判断是否为 -1。
- 在 ES7 中，我们可以通过 includes 来判断一个数组中是否包含一个指定的元素，根据情况，如果包含则返回 true，否则返回 false。

### 指数 exponentiation 运算符

```javascript
// es7之前
const result = Math.pow(3, 3)
// es7
const result = 3 ** 3
```

## es8

### Object values

Object.keys 获取一个对象所有的 key，ES8 中提供了 Object.values 来获取所有的 value 值：

```javascript
const obj = {
  name: 'fafa',
  age: 18
}
Object.value(obj) //['fafa',18]
Object.value('abc') //['a','b','c']
```

### Object entries

Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组。(对象、数组、字符串进行操作)；

### String Padding

ES8 中增加了 padStart 和 padEnd 方法，分别是对字符串的首尾进行填充的

```javascript
const message = 'hello world'
message.padStart(15, 'a') // aaaahello world
message.padEnd(15, 'b') // hello worldbbbb
```

应用场景：比如需要对身份证、银行卡的前面位数进行隐藏：

```javascript
const num = '441581199904045322'
const newNum = num.slice(-4).padStart(num.length, '*wo')
```

### Trailing Commas

ES8 中，允许在函数定义和调用时多加一个逗号：

```javascript
function foo(a, b) {}
foo()
```

### Object Descriptors

Object.getOwnPropertyDescriptors 返回对象的属性描述符

### Async Function：async、await

## es9

### Async iterators

### Object spread operators

### Promise finally

## es10

### flat flatMap

- flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
- flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。

### Object fromEntries

- Object.entries 将一个对象转换成 entries（数组）
- Object.formEntries 将 entries 转对象

### trimStart trimEnd

- 去除一个字符串首尾的空格，我们可以通过 trim 方法，
- 单独去除前面或者后面 trimStart 和 trimEnd；

### other

- Symbol description
- Optional catch binding

## es11

### BigInt

- 在早期的 JavaScript 中，我们不能正确的表示过大的数字

  - 大于 MAX_SAFE_INTEGER 的数值，表示的可能是不正确的。

  ```javascript
  const maxInt = Number.MAX_SAFE_INTEGER
  ```

- ES11 中，引入了新的数据类型 BigInt，用于表示大的整数：

  ```javascript
  const bigInt = 9007199254740991n //BitInt的表示方法是在数值的后面加上n
  ```

### Nullish Coalescing Operator

```javascript
//空值合并操作符
const foo = ''

const result1 = foo || '默认值' // 默认值
const result2 = foo ?? '默认值' // ''
```

### Optional Chaining 可选链

### Global This

在之前我们希望获取 JavaScript 环境的全局对象，不同的环境获取的方式是不一样的

- 比如在浏览器中可以通过 this、window 来获取；
- 比如在 Node 中我们需要通过 global 来获取；

在 ES11 中对获取全局对象进行了统一的规范：globalThis

### for..in 标准化

- 在 ES11 之前，虽然很多浏览器支持 for...in 来遍历对象类型，但是并没有被 ECMA 标准化。
- 在 ES11 中，对其进行了标准化，for...in 是用于遍历对象的 key 的：

### othe r

- Dynamic Import：后续 ES Module 模块化中讲解。
- Promise.allSettled：后续讲 Promise 的时候讲解。
- import meta：后续 ES Module 模块化中讲解。

## es12

### FinalizationRegistry

FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。

- FinalizationRegistry 提供了这样的一种方法：当一个在注册表中注册的对象被回收时，请求在某个时间点上调用一个清理回调。（清理回调有时被称为 finalizer ）;
- 你可以通过调用 register 方法，注册任何你想要清理回调的对象，传入该对象和所含的值;

```javascript
let obj = { name: 'fafa' }

const registry = new FinalizationRegistry((value) => {
  console.log('对象被销毁了', value)
})

registry.registry(obj, 'obj')
obj = null
```

### WeakRefs

如果我们默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用：
如果我们希望是一个弱引用的话，可以使用 WeakRef；

```javascript
let obj = { name: 'fafa' }
let info = new WeakRef(obj)
```

### logical assignment operators

|| && ??

### oth er

- Numeric Separator （数字分隔）
- String.replaceAll

## es13

### method .at()

```javascript
const names = ['abe', 'cba', 'bac']
console.log(names.at(1)) //cba
console.log(names.at(-1)) //bac
const str = 'hello world'
console.log(str.at(1)) //e
console.log(str.at(-1)) //d
```

### Object.hasOwn(obj, propKey)

- Object 中新增了一个静态方法（类方法）： hasOwn(obj, propKey)用于判断一个对象中是否有某个自己的属性；
- 那么和之前学习的 Object.prototype.hasOwnProperty 有什么区别呢？
  - 区别一：防止对象内部有重写 hasOwnProperty
  - 区别二：对于隐式原型指向 null 的对象， hasOwnProperty 无法进行判断

```javascript
const obj = {
  name: 'fafa',
  hasOwnProperty: function () {
    return false
  }
}
const info = Objecet.create(null)
info.name = 'fafa'
console.log(info.hasOwnProperty('name')) //报错
console.log(Object.hasOwn(info, 'name')) //可以判断
```

### New members of classe

在 ES13 中，新增了定义 class 类中成员字段（field）的其他方式：

- Instance public fields
- Static public fields
- Instance private fields
- static private fields
- static block
