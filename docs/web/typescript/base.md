# ts base

## 基础类型

```typescript
// 基础数据类型
let name: string = '悲伤🐖'
let num: number = 0
let isLogin: boolean = true
let n: null = null
let u: undefined = undefined
const s1: symbol = Symbol('title')
const s2: symbol = Symbol('title')

// 数组对象
const arr1: string[] = ['a', 'b', 'c'] // 数组推荐
const arr2: Array<number> = [1, 2, 3]
const obj: {
  name: string
  age: number
} = {
  name: '悲伤🐖',
  age: 18
}

// 函数类型
function foo(name: string, age?: number): string {
  // age?可选参数
  return name
}
```

## any-unknwon

- any 不在乎什么类型
- unknown 不确定什么类型
  - 可以把任何值赋给 unknown 类型的变量
  - unknown 类型的变量只能赋值给 any 类型和 unknown 类型本身
  - 进行类型缩小来使用

```typescript
function foo(f: unknown) {
  f() // 这里会报错，未知类型
  if (typeof f === 'function') {
    f() // 类型缩小成函数就可以使用了
  }
}
```

## void-never

- void 指定一个函数没有返回值
- never 永远不会发生的值

```typescript
function foo(): void {
  console.log(123)
}

// 如果一个函数是死循环或者抛出一个异常，那么写void就不合适，就可以使用never
function loopFn(): never {
  while (true) {
    console.log(123)
  }
}
function loopErr(): never {
  throw new Error()
}
function handleColor(color: 'blue' | 'red') {
  switch (color) {
    case 'blue':
      console.log(color)
      break
    case 'red':
      console.log(color)
      break
    default:
      console.log(color) // 这里就是never
  }
}
```

## tuple 元组

- 数组中通常建议存放相同类型的元素
- 元组中**每个元素都有自己特性的类型**，根据索引值获取到的值可以确定对应的类型

```typescript
// useState返回的就是元组
function useState<T>(state): [T, (newState: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  return [currentState, changeState]
}
```

## Union Type - Intersection Types

- 联合类型`|`：由两个或者多个其他类型组成的类型；表示可以是这些类型中的任何一个值；
- 交叉类型`&`：交叉类似表示需要满足多个类型的条件；

```typescript
// 联合类型
function logId(id: number | string) {
  console.log(id)
}

// 交叉类型
interface name {
  name: string
}
interface age {
  age: number
}
const info: name & age = {
  name: '悲伤🐖',
  age: 23
}
```

## 字面量类型

```typescript
type methodType = 'GET' | 'POST' | 'PUT'
```

## 类型别名-接口

- 类型别名：复杂的类型定义（对象类型，联合类型）我们可以给它取个别名方便多次使用
- 接口：声明一个对象类型

```typescript
//  定义非对象类型，通常推荐使用 type
type id = number | string
type useStateType<T> = [T, (newState: T) => void]
//
interface info {
  name: string
  age: number
}
```

定义对象类型，他们是有区别的：

- interface 可以重复的对某个接口来定义属性和方法；
- 而 type 定义的是别名，别名是不能重复的；
