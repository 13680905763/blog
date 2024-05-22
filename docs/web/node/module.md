# module

## Overview

1. 事实上模块化开发最终的目的是将程序划分成一个个小的结构；
2. 这个结构中编写属于自己的逻辑代码，有自己的作用域，定义变量名词时不会影响到其他的结构；
3. 这个结构可以将自己希望暴露的变量、函数、对象等导出给其结构使用；
4. 也可以通过某种方式，导入另外结构中的变量、函数、对象等；

## 没有模块化带来的问题

- 早期没有模块化带来了很多的问题：比如命名冲突的问题

解决方法：立即函数调用表达式（IIFE:Immediately Invoked Function Expression）

```javascript
// a.js
const moduleA = (function foo() {
  let name = 'fafaA'
  let age = 18

  return {
    name,
    age
  }
})()

// b.js

const moduleB = (function foo() {
  let name = 'fafaB'
  let age = 23

  return {
    name,
    age
  }
})()

// c.js

console.log(moduleA.name) // fafaA
console.log(moduleB.name) // fafaB
```

缺点

- 必须记得每一个模块中返回对象的命名，才能在其他模块使用过程中正确的使用；
- 代码写起来混乱不堪，每个文件中的代码都需要包裹在一个匿名函数中来编写；
- 在没有合适的规范情况下，每个人、每个公司都可能会任意命名、甚至出现模块名称相同的情况；

解决方法

- 我们需要制定一定的规范来约束每个人都按照这个规范去编写模块化的代码；
- 这个规范中应该包括核心功能：模块本身可以导出暴露的属性，模块又可以导入自己需要的属性；
- JavaScript 社区为了解决上面的问题，涌现出一系列好用的规范。

## CommonJS

### CommonJS 规范和 Node 关系

- CommonJS 是一个规范，最初提出来是在浏览器以外的地方使用，并且当时被命名为 ServerJS，后来为了体现它的广泛性，修改为 CommonJS，平时我们也会简称为 CJS。
  - Node 是 CommonJS 在服务器端一个具有代表性的实现；
  - Browserify 是 CommonJS 在浏览器中的一种实现；
  - webpack 打包工具具备对 CommonJS 的支持和转换；
- Node 中对 CommonJS 进行了支持和实现，让我们在开发 node 的过程中可以方便的进行模块化开发：
  - 在 Node 中每一个 js 文件都是一个单独的模块；
  - 这个模块中包括 CommonJS 规范的核心变量：exports、module.exports、require；
  - 我们可以使用这些变量来方便的进行模块化开发；
- 模块化的核心是导出和导入，Node 中对其进行了实现：
  - exports 和 module.exports 可以负责对模块中的内容进行导出；
  - require 函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；

### 导出

#### exports

exports 是一个对象，我们可以在这个对象中添加很多个属性，添加的属性会导出；

```javascript
// a.js
let name ='fafa'
let age = 18
export.name = name
export.age = age
// b.js
const a = require('./a.js')
console.log(a.name,a.age)

// 意味着a变量等于exports对象
// require通过各种查找方式，最终找到expotrs这个对象
// 并将exports对象赋值给a变量，a变量就等于exports对象了
```

#### module.exports

Node 中我们经常导出东西的时候，又是通过 module.exports 导出的：

- CommonJS 中是没有 module.exports 的概念的；
- 但是为了实现模块的导出，Node 中使用的是 Module 的类，每一个模块都是 Module 的一个实例，也就是 module；
- 所以在 Node 中真正用于导出的其实根本不是 exports，而是 module.exports；
- 因为 module 才是导出的真正实现者；

为什么 exports 也可以导出

- 因为 module 对象的 exports 属性是 exports 对象的一个引用；
- 也就是说 module.exports = exports = main 中的 bar；

### require 细节

require 是一个函数，可以帮助我们引入一个文件（模块）中导出的对象。
require 的查找规则 require(X)

1. X 是一个 Node 核心模块，比如 path、http
   - 直接返回核心模块，并且停止查找
2. X 是以 ./ 或 ../ 或 /（根目录）开头的
   - 将 X 当做一个文件在对应的目录下查找
     - 如果有后缀名，按照后缀名的格式查找对应的文件
     - 如果没有后缀名，会按照如下顺序：
       1. 直接查找文件 X
       2. 查找 X.js 文件
       3. 查找 X.json 文件
       4. 查找 X.node 文件
   - 没有找到对应的文件，将 X 作为一个目录
     - 查找目录下面的 index 文件
       1. 查找 X/index.js 文件
       2. 查找 X/index.json 文件
       3. 查找 X/index.node 文件
   - 如果没有找到，那么报错：not found
3. 直接是一个 X（没有路径），并且 X 不是一个核心模块
   - 去 node_modules 目录下找，当前目录找到就去上一层，直到根目录找不到就报错

### 模块的加载过程

1. 模块在被第一次引入时，模块中的 js 代码会被运行一次
2. 模块被多次引入时，会缓存，最终只加载（运行）一次
   - 这是因为每个模块对象 module 都有一个属性：loaded。
   - 为 false 表示还没有加载，为 true 表示已经加载；

3.循环引入，那么加载顺序按深度优先搜索
![深度优先搜索](/img/web/node/module/深度优先搜索.jpg)

main -> aaa -> ccc -> ddd -> eee ->bbb

### CommonJS 规范缺点

CommonJS 加载模块是同步的：

- 同步的意味着只有等到对应的模块加载完毕，当前模块中的内容才能被运行；
- 这个在服务器不会有什么问题，因为服务器加载的 js 文件都是本地文件，加载速度非常快；

如果应用于浏览器

- 浏览器加载 js 文件需要先从服务器将文件下载下来，之后再加载运行；
- 那么采用同步的就意味着后续的 js 代码都无法正常运行，即使是一些简单的 DOM 操作；
- 所以在浏览器中，我们通常不使用 CommonJS 规范：
- 当然在 webpack 中使用 CommonJS 是因为它会将我们的代码转成浏览器可以直接执行的代码；

在早期为了可以在浏览器中使用模块化，通常会采用 AMD 或 CMD：

## ES Module

ECMA 推出自己的模块化系统

- ES Module 和 CommonJS 的模块化有一些不同之处：
  - 一方面它使用了 import 和 export 关键字；
  - 另一方面它采用编译期的静态分析，并且也加入了动态引用的方式；
- ES Module 模块采用 export 和 import 关键字来实现模块化：
  - export 负责将模块内的内容导出；
  - import 负责从其他模块导入内容；
- 了解：采用 ES Module 将自动采用严格模式：use strict

### 案例

浏览器中演示 ES6 的模块化开发

```html
<script src="foo.js" type="module"></script>
```

直接在浏览器中运行代码会报错， Javascript 模块安全性需要通过一个服务器来测试（Live Server）

### export & import

- export 关键字将一个模块中的变量、函数、类等导出；
- 我们希望将其他中内容全部导出，它可以有如下的方式：

  1. 在语句声明的前面直接加上 export 关键字
  2. 将所有需要导出的标识符，放到 export 后面的 {} 中
     - 注意：这里的 {} 里面不是 ES6 的对象字面量的增强写法，{}也不是表示一个对象的；
     - 所以： export {name: name}，是错误的写法；
  3. 导出时给标识符起一个别名
     - 通过 as 关键字起别名

- import 关键字负责从另外一个模块中导入内容
- 导入内容的方式也有多种：

  1. import {标识符列表} from '模块'；
     - 注意：这里的{}也不是一个对象，里面只是存放导入的标识符列表内容；
  2. 导入时给标识符起别名
     - 通过 as 关键字起别名
  3. 通过 \* 将模块功能放到一个模块功能对象（a module object）上

```javascript
// a.js
const name = 'fafa'
const age = 18
export const sum = () => {}

export { name, age as Aage }

// b.js
import { name, Aage, sum as Asum } from './a.js'
console.log(name, Aage, Asum())

// c.js
import * as a from 'a.js'
console.log(a.name, a.Aage, a.Asum())
```

- 补充：export 和 import 可以结合使用

```javascript
// index.js
export { sum } from './foo.js'
export * from './bar.js'

// 在开发和封装一个功能库时，通常我们希望将暴露的所有接口放到一个文件中；
// 这样方便指定统一的接口规范，也方便阅读；
// 这个时候，我们就可以使用export和import结合使用；
```

### default

还有一种导出叫做默认导出（default export）

- 默认导出 export 时可以不需要指定名字；
- 在导入时不需要使用 {}，并且可以自己来指定名字；
- 它也方便我们和现有的 CommonJS 等规范相互操作；

在一个模块中，只能有一个默认导出；

### import 函数

通过 import 加载一个模块，是不可以在其放到逻辑代码中的

```javascript
if(isLoading){
  import home form './index.js'
}
// 错误的
```

- ES Module 在被 JS 引擎解析时，就必须知道它的依赖关系；
- 由于这个时候 js 代码没有任何的运行，所以无法在进行类似于 if 判断中根据代码的执行情况；
- 甚至拼接路径的写法也是错误的：因为我们必须到运行时能确定 path 的值；

某些情况下，我们确确实实希望动态的来加载某一个模块

```javascript
if (isLoading) {
  import('./index.js').then((home) => {
    home.home()
  })
}
// 使用 import() 函数来动态加载
// import函数返回一个Promise，可以通过then获取结果
```

### import meta

import.meta 是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。

- 它包含了这个模块的信息，比如说这个模块的 URL；
- 在 ES11（ES2020）中新增的特性；

### ES Module 的解析流程

[ES Module 是如何被浏览器解析并且让模块之间可以相互引用的呢](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

ES Module 的解析过程可以划分为三个阶段：
![解析流程](/img/web/node/module/解析流程.jpg)

1. 构建（Construction），根据地址查找 js 文件，并且下载，将其解析成模块记录（Module Record）；
   ![构建阶段](/img/web/node/module/构建阶段.jpg)

2. 实例化（Instantiation），对模块记录进行实例化，并且分配内存空间，解析模块的导入和导出语句，把模块指向对应的内存地址。
3. 运行（Evaluation），运行代码，计算值，并且将值填充到内存地址中；
   ![实例求值阶段](/img/web/node/module/实例求值阶段.jpg)
