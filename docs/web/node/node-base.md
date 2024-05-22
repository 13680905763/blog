# node

## Overview

Node.js 是一个基于 V8 JavaScript 引擎的 JavaScript 运行时环境。

Node.js 基于 V8 引擎来执行 JavaScript 的代码，但是不仅仅只有 V8 引擎

- V8 可以嵌入到任何 C ++应用程序中，无论是 Chrome 还是 Node.js，事实上都是嵌入了 V8 引擎来执行 JavaScript 代码；
- 但是在 Chrome 浏览器中，还需要解析、渲染 HTML、CSS 等相关渲染引擎，另外还需要提供支持浏览器操作的 API、浏览器自己的事件循环等；
- Node.js 中我们也需要进行一些额外的操作，比如文件系统读/写、网络 IO、加密、压缩解压文件等操作；

## 浏览器和 Node.js 架构区别

![浏览器和Node.js架构区别](/img/web/node/浏览器和Node.js架构区别.jpg)

## Node.js 架构

- 我们编写的 JavaScript 代码会经过 V8 引擎，再通过 Node.js 的 Bindings，将任务放到 Libuv 的事件循环中；
- libuv（Unicorn Velociraptor—独角伶盗龙）是使用 C 语言编写的库；
- libuv 提供了事件循环、文件系统读写、网络 IO、线程池等等内容；

![node架构](/img/web/node/node架构.jpg)

## Node.js 的应用场景

1. 目前前端开发的库都是以 node 包的形式进行管理；
2. npm、yarn、pnpm 工具成为前端开发使用最多的工具；
3. 越来越多的公司使用 Node.js 作为 web 服务器开发、中间件、代理服务器；
4. 大量项目需要借助 Node.js 完成前后端渲染的同构应用；
5. 资深前端工程师需要为项目编写脚本工具（前端工程师编写脚本通常会使用 JavaScript，而不是 Python 或者 shell）；
6. 很多企业在使用 Electron 来开发桌面应用程序；

## Node 的版本工具

nvm-window

```node
nvm install latest // 安装最新的node版本
nvm list // 展示目前安装的所有版本
nvm use // 切换版本
```

## Node 程序传递参数

- 正常情况下执行一个 node 程序，直接跟上我们对应的文件即可：

```node
node index.js
```

- 但是，在某些情况下执行 node 程序的过程中，我们可能希望给 node 传递一些参数：

```node
node index.js env=development
```

- 如果我们这样来使用程序，就意味着我们需要在程序中获取到传递的参数：
  1. 获取参数其实是在 process 的内置对象中的 argv 属性
  2. 如果我们直接打印这个内置对象，它里面包含特别的信息：

## 常见的全局对象

```node
console.log(__dirname) //获取当前文件所在的路径：
console.log(__filename) //获取当前文件所在的路径和文件名称：

console.log(process) //获取当前文件所在的路径和文件名称：

// 定时器
setTimeout(callback, delay[, ...args]) // callback在delay毫秒后执行一次；
setInterval(callback, delay[, ...args]) // callback每delay毫秒重复执行一次；
setImmediate(callback[, ...args]) // callbackI / O事件后的回调的“立即”执行；
// 这里先不展开讨论它和setTimeout(callback, 0)之间的区别；
// 因为它涉及到事件循环的阶段问题，我会在后续详细讲解事件循环相关的知识；
process.nextTick(callback[, ...args]) // 添加到下一次tick队列中；

```

## global 和 window 的区别

- 在浏览器中，全局变量都是在 window 上的，比如有 document、setInterval、setTimeout、alert、console 等等
- 在 Node 中，我们也有一个 global 属性，并且看起来它里面有很多其他对象。

- 但是在浏览器中执行的 JavaScript 代码，如果我们在顶级范围内通过 var 定义的一个属性，默认会被添加到 window 对象上：
- 但是在 node 中，我们通过 var 定义一个变量，它只是在当前模块中有一个变量，不会放到全局中：
