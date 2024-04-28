# Iterator-Generator

## 迭代器

- 迭代器（iterator），使用户在容器对象（container，例如链表或数组）上遍访的对象，使用该接口无需关心对象的内部实现细节
- 迭代器是帮助我们对某个数据结构进行遍历的对象。
- 在 JavaScript 中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）：
  - 迭代器协议定义了产生一系列值（无论是有限还是无限个）的标准方式；
  - 在 JavaScript 中这个标准就是一个特定的 next 方法；
- next 方法有如下的要求：
  - 一个无参数或者一个参数的函数，返回一个应当拥有以下两个属性的对象：
  - done（boolean）
    - 如果迭代器可以产生序列中的下一个值，则为 false。（这等价于没有指定 done 这个属性。）
    - 如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。
  - value
    - 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。

### 迭代器的代码练习

```javascript
const names = ['fafa', 'lili', 'pipi']

let index = 0
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

function createArrayIterator(arr) {
  let index = 0
  return {
    next: function () {
      if (index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}
const namesIterator = createArrayIterator(names)
```

### 可迭代对象

- 当一个对象实现了 iterable protocol 协议时，它就是一个可迭代对象；
- 这个对象的要求是必须实现 @@iterator 方法，在代码中我们使用 Symbol.iterator 访问该属性；

当一个对象变成一个可迭代对象的时候，就可以进行某些迭代操作；

- 比如 for...of 操作时，其实就会调用它的 @@iterator 方法；

```javascript
const info = {
  names: ['fafa', 'lili', 'pipi'],
  [Symbol.iterator]: function () {
    if (index < this.names.length) {
      return { done: false, value: this.names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}
```

### 原生迭代器对象

事实上我们平时创建的很多原生对象已经实现了可迭代协议，会生成一个迭代器对象的：

- String、Array、Map、Set、arguments 对象、NodeList 集合；

### 可迭代对象的应用

- JavaScript 中语法：for ...of、展开语法（spread syntax）、yield\*（后面讲）、解构赋值（Destructuring_assignment）；
- 创建一些对象时：new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable]);
- 一些方法的调用：Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable);

### 自定义类的迭代

例如 Array、Set、String、Map 等类创建出来的对象都是可迭代对象：

```javascript
// 自定义类的迭代实现
class Classroom {
  constructor(name, address, initialStudent) {
    this.name = name
    this.address = address
    this.students = initialStudent
  }
  push(student) {
    this.students.push(student)
  }
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true }
        }
      }
    }
    // - 迭代器在某些情况下会在没有完全迭代的情况下中断：
    // - 比如遍历的过程中通过 break、return、throw 中断了循环操作；
    // - 比如在解构的时候，没有解构所有的值；
    // - 那么这个时候我们想要监听中断的话，可以添加 return 方法：
    return() {
      console.log('迭代器提前终止了')
      return { done: true }
    }f
  }
}

const classroom1 = new Classroom('2201', '3栋', ['fafa', 'pipi'])
const classroom2 = new Classroom('3201', '2栋', ['jojo', 'haha'])

for (const stu of classroom1) {
  console.log(stu)
}
for (const stu of classroom2) {
  console.log(stu)
}
  for (const stu of classroom1) {
    console.log(stu)
    if(stu ===      'fafa'){
      break
    }
  }
```

## 生成器

- 生成器是 ES6 中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。
  - 平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常。
- 生成器函数也是一个函数，但是和普通的函数有一些区别：
  - 首先，生成器函数需要在 function 的后面加一个符号：\*
  - 其次，生成器函数可以通过 yield 关键字来控制函数的执行流程：
  - 最后，生成器函数的返回值是一个 Generator（生成器）：
    - 生成器事实上是一种特殊的迭代器；

### 生成器函数执行

生成器函数 foo 的执行体压根没有执行，它只是返回了一个生成器对象。

```javascript
function* foo() {
  console.log('函数开始执行')
  const value1 = 100
  console.log(value1)
  yield value1

  const value2 = 200
  console.log(value2)
  yield value2

  const value3 = 300
  console.log(value3)
  yield value3

  console.log('函数结束执行')
}
```

```javascript
// 返回生成器
const generator = foo()

// 执行到第一个yield，并且暂停
console.log(generator.next()) // {value: undefined, done: false}

// 执行到第二个yield，并且暂停
console.log(generator.next())

// 执行到第三个yield，并且暂停
console.log(generator.next())

// 执行到第四个yield，并且暂停
console.log(generator.next())
```

### 生成器传递参数 - next 函数

调用 next 函数的时候，可以给它传递参数，那么这个参数会作为上一个 yield 语句的返回值；

```javascript
function* foo(initial) {
  console.log('函数开始执行')
  const value1 = yield initial + 'aaa'
  const value2 = yield value1 + 'bbb'
  const value3 = yield value2 + 'ccc'
}

const generator = foo('fafa')
const result1 = generator.next()
console.log('result1:', result1)

const result2 = generator.next(result1.value)
console.log('result2:', result2)

const result3 = generator.next(result2.value)
console.log('result3:', result3)
```

### 生成器提前结束 – return 函数

还有一个可以给生成器函数传递参数的方法是通过 return 函数：

- return 传值后这个生成器函数就会结束，之后调用 next 不会继续生成值了；

```javascript
function* foo() {
  const value1 = yield 'ff'
  console.log('value1:', value1)
  const value2 = yield value1
  const value3 = yield value2
}

const generator = foo()
console.log(generator.next())
console.log(generator.return(123))
console.log(generator.next())
```

### 生成器抛出异常 – throw 函数

除了给生成器函数内部传递参数之外，也可以给生成器函数内部抛出异常：

- 抛出异常后我们可以在生成器函数中捕获异常；
- 但是在 catch 语句中不能继续 yield 新的值了，但是可以在 catch 语句外使用 yield 继续中断函数的执行；

```javascript
function* foo() {
  console.log('函数开始执行')
  try {
    yield 'fafa'
  }catch(err){
    console.log('内部捕获异常:' err)
  }
  yield 2222

  console.log('函数结束执行~')
}

const generator = foo()
const result = generator.next()
generator.throw('err message')
console.log(generator.next())
```

## 生成器替代迭代器

生成器是一种特殊的迭代器，那么在某些情况下可以使用生成器来替代迭代器：

```javascript
function* createArrayIterator(arr) {
  for (const item of arr) {
    yield item
  }
}

const names = ['fafa', 'lili', 'hx']
namesIterator = createArrayIterator(names)
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
```

```javascript
function* createRangeIterator(start, end) {
  for (let i = start; i < end; i++) {
    yield i
  }
}

namesIterator = createRangeIterator(10, 20)
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
```

还可以使用 yield\*来生产一个可迭代对象：

```javascript
function* createArrayIterator(arr) {
  yield* arr
}
```

### 自定义类迭代 – 生成器实现

在之前的自定义类迭代中，我们也可以换成生成器：

```javascript
class Classroom {
  constructor(name, address, initialStudent) {
    this.name = name
    this.address = address
    this.students = initialStudent || []
  }
  push(student) {
    this.student.push(student)
  }
  *[Symbol.iterator]() {
    yield* this.students
  }
}
```

### 对生成器的操作

```javascript
const namesIterator1 = createArrayIterator(names)
for (const item of namesIterator1) {
  console.log(item)
}
const namesIterator2 = createArrayIterator(names)
const set = new Set(namesIterator2)
console.log(set)

const namesIterator3 = createArrayIterator(names)
Promise.all(namesIterator3).then((res) => {
  console.log(res)
})
```

## 异步处理方案

案例需求：

- 我们需要向服务器发送网络请求获取数据，一共需要发送三次请求；
- 第二次的请求 url 依赖于第一次的结果；
- 第三次的请求 url 依赖于第二次的结果；
- 依次类推；

```javascript
function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 2000)
  })
}

function getData() {
  requestData('fafa').then((res1) => {
    requestData(res1 + 'fafa').then((res2) => {
      requestData(res2 + 'fafa').then((res3) => {
        console.log('res3:', res3)
      })
    })
  })
}

function getData() {
  requestData('fafa')
    .then((res1) => {
      return requestData(res1 + 'fafa')
    })
    .then((res2) => {
      return requestData(res2 + 'fafa')
    })
    .then((res3) => {
      console.log('res3:', res3)
    })
}
```

### Generator 方案

```javascript
function* getData() {
  const res1 = yield requestData('fafa')
  const res2 = yield requestData(res1 + 'fafa')
  const res3 = yield requestData(res2 + 'fafa')
  const res4 = yield requestData(res3 + 'fafa')
  console.log(res4)
}

const generator = getData()
generator.next().value.then((res) => {
  generator.next(res).value.then((res) => {
    generator.next(res).value.then((res) => {
      generator.next(res)
    })
  })
})
```

### 自动执行 generator 函数

目前我们的写法有两个问题：

- 我们不能确定到底需要调用几层的 Promise 关系；
- 如果还有其他需要这样执行的函数，我们应该如何操作呢？

所以，我们可以封装一个工具函数 execGenerator 自动执行生成器函数：

```javascript
function execGenerator(genFn) {
  const generator = genFn()
  function exec(res) {
    const result = generator.nexxt(res)
    if (result.done) return result.value
    result.value.then((res) => {
      exec(res)
    })
  }
  exec()
}
```
