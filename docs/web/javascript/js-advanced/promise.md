# Promise

在通过 new 创建 Promise 对象时，我们需要传入一个回调函数，我们称之为 executor

- 这个回调函数会被立即执行，并且给传入另外两个回调函数 resolve、reject；
- 当我们调用 resolve 回调函数时，会执行 Promise 对象的 then 方法传入的回调函数；
- 当我们调用 reject 回调函数时，会执行 Promise 对象的 catch 方法传入的回调函数；

```javascript
const promise = new Promise((resolve, reject) => {
  resolve('res')
  reject('err')
})
promise
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
```

三个状态

- 待定（pending）: 初始状态，既没有被兑现，也没有被拒绝；
  - 当执行 executor 中的代码时，处于该状态；
- 已兑现（fulfilled）: 意味着操作成功完成；
  - 执行了 resolve 时，处于该状态，Promise 已经被兑现；
- 已拒绝（rejected）: 意味着操作失败；
  - 执行了 reject 时，处于该状态，Promise 已经被拒绝；

## Executor

Executor 是在创建 Promise 时需要传入的一个回调函数，这个回调函数会被立即执行，并且传入两个参数，通常我们会在 Executor 中确定我们的 Promise 状态，一旦状态被确定下来，Promise 的状态会被 锁死，该 Promise 的状态是不可更改的

## resolve 不同值的区别

1. resolve 传入一个普通的值或者对象，那么这个值会作为 then 回调的参数；
2. resolve 中传入的是另外一个 Promise，那么这个新 Promise 会决定原 Promise 的状态：
3. resolve 中传入的是一个对象，并且这个对象有实现 then 方法，那么会执行该 then 方法，并且根据 then 方法的结果来决定 Promise 的状态：

## then

### then 方法 – 接受两个参数

- then 方法是 Promise 对象上的一个方法（实例方法）：
  - 它其实是放在 Promise 的原型上的 Promise.prototype.then
- then 方法接受两个参数：
  - fulfilled 的回调函数：当状态变成 fulfilled 时会回调的函数；
  - reject 的回调函数：当状态变成 reject 时会回调的函数

### then 方法 – 多次调用

- 一个 Promise 的 then 方法是可以被多次调用的：
  - 每次调用我们都可以传入对应的 fulfilled 回调；
  - 当 Promise 的状态变成 fulfilled 的时候，这些回调函数都会被执行；

```javascript
promise.then((res) => {
  console.log('res1', res)
})
promise.then((res) => {
  console.log('res2', res)
})
promise.then((res) => {
  console.log('res3', res)
})
```

### then 方法 – 返回值

- then 方法本身是有返回值的，它的返回值是一个 Promise，所以我们可以进行如下的链式调用
- Promise 有三种状态，那么这个 Promise 处于什么状态呢？
  - 当 then 方法中的回调函数本身在执行的时候，那么它处于 pending 状态；
  - 当 then 方法中的回调函数返回一个结果时，那么它处于 fulfilled 状态，并且会将结果作为 resolve 的参数；
    ✓ 情况一：返回一个普通的值；
    ✓ 情况二：返回一个 Promise；
    ✓ 情况三：返回一个 thenable 值；
  - 当 then 方法抛出一个异常时，那么它处于 reject 状态；

## catch

### catch 方法 – 多次调用

### catch 方法 – 返回值

- catch 方法也是会返回一个 Promise 对象的，所以 catch 方法后面我们可以继续调用 then 方法或者 catch 方法：

```javascript
promise
  .catch((err) => {
    console.log('err1', err)
  })
  .catch((err) => {
    console.log('err2', err)
  })
  .then((res) => {
    console.log('res', res)
  })
// catch 传入的回调在执行完后，默认状态依然会是 fulfilled 的，err2 不打印，打印res

// 如果希望后续继续执行 catch，那么需要抛出一个异常：
promise
  .catch((err) => {
    console.log('err1', err)
    throw new Error('error message')
  })
  .catch((err) => {
    console.log('err2', err)
  })
  .then((res) => {
    console.log('res', res)
  })
```

## finally 方法

finally 是在 ES9（ES2018）中新增的一个特性：表示无论 Promise 对象无论变成 fulfilled 还是 rejected 状态，最终都会被执行
的代码。

## Promise 的类方法

then、catch、finally 方法都属于 Promise 的实例方法，都是存放在 Promise 的 prototype 上的

### resolve 方法

有时候我们已经有一个现成的内容了，希望将其转成 Promise 来使用，这个时候我们可以使用 Promise.resolve 方法来完成。

```javascript
// Promise.resolve 的用法相当于 new Promise，并且执行 resolve 操作：
Promise.resolve('fafa')
// 等价于
new Promise((resolve) => resolve('fafa'))
```

resolve 参数的形态：

- 参数是一个普通的值或者对象
- 参数本身是 Promise
- 参数是一个 thenable

### reject 方法

- reject 方法类似于 resolve 方法，只是会将 Promise 对象的状态设置为 reject 状态。

```javascript
//  Promise.reject 的用法相当于 new Promise，只是会调用 reject：
Promise.reject('fafa')
// 等价于
new Promise((resolve, reject) => reject('fafa'))
```

- Promise.reject 传入的参数无论是什么形态，都会直接作为 reject 状态的参数传递到 catch 的。

### all 方法

- 将多个 Promise 包裹在一起形成一个新的 Promise；
- 新的 Promise 状态由包裹的所有 Promise 共同决定：
  - 当所有的 Promise 状态变成 fulfilled 状态时，新的 Promise 状态为 fulfilled，并且会将所有 Promise 的返回值组成一个数组；
  - 当有一个 Promise 状态为 reject 时，新的 Promise 状态为 reject，并且会将第一个 reject 的返回值作为参数；

### allSettled 方法

- 在 ES11（ES2020）中，添加了新的 API Promise.allSettled：
  - 该方法会在所有的 Promise 都有结果（settled），无论是 fulfilled，还是 rejected 时，才会有最终的状态；
  - 并且这个 Promise 的结果一定是 fulfilled 的；
- allSettled 的结果是一个数组，数组中存放着每一个 Promise 的结果，并且是对应一个对象的；
  - 这个对象中包含 status 状态，以及对应的 value 值；

### race 方法

多个 Promise 相互竞争，谁先有结果，那么就使用谁的结果；

### any 方法

any 方法是 ES12 中新增的方法，和 race 方法是类似的：

- any 方法会等到一个 fulfilled 状态，才会决定新 Promise 的状态；
- 如果所有的 Promise 都是 reject 的，那么也会等到所有的 Promise 都变成 rejected 状态；
- 如果所有的 Promise 都是 reject 的，那么会报一个 AggregateError 的错误。
