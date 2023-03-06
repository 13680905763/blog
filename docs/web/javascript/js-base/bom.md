# bom

- BOM：浏览器对象模型（Browser Object Model）
  - 简称 BOM，由浏览器提供的用于处理文档（document）之外的所有内容的其他对象；
  - 比如 navigator、location、history 等对象；
- JavaScript 有一个非常重要的运行环境就是浏览器
  - 而且浏览器本身又作为一个应用程序需要对其本身进行操作；
  - 所以通常浏览器会有对应的对象模型（BOM，Browser Object Model）；
  - 我们可以将 BOM 看成是连接 JavaScript 脚本与浏览器窗口的桥梁；
- BOM 主要包括一下的对象模型：
  - window：包括全局属性、方法，控制浏览器窗口相关的属性、方法；
  - location：浏览器连接到的对象的位置（URL）；
  - history：操作浏览器的历史；
  - navigator：用户代理（浏览器）的状态和标识（很少用到）；
  - screen：屏幕窗口信息（很少用到）；

## window 对象

- window 对象在浏览器中可以从两个视角来看待：
  1. 全局对象。
     - 我们知道 ECMAScript 其实是有一个全局对象的，这个全局对象在 Node 中是 global；
     - 在浏览器中就是 window 对象；
  2. 浏览器窗口对象。
     - 作为浏览器窗口时，提供了对浏览器操作的相关的 API；
- 当然，这两个视角存在大量重叠的地方，所以不需要刻意去区分它们：
  - 事实上对于浏览器和 Node 中全局对象名称不一样的情况，目前已经指定了对应的标准，称之为 globalThis，并且大多数现代浏览器都支持它；
  - 放在 window 对象上的所有属性都可以被访问；
  - 使用 var 定义的变量会被添加到 window 对象中；
  - window 默认给我们提供了全局的函数和类：setTimeout、Math、Date、Object 等

### window 对象的作用

- 事实上 window 对象上肩负的重担是非常大的：
  1. 包含大量的属性，localStorage、console、location、history、screenX、scrollX 等等（大概 60+个属性）；
  2. 包含大量的方法，alert、close、scrollTo、open 等等（大概 40+个方法）；
  3. 包含大量的事件，focus、blur、load、hashchange 等等（大概 30+个事件）；
  4. 包含从 EventTarget 继承过来的方法，addEventListener、removeEventListener、dispatchEvent 方法；
- [更多属性、方法、事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)

### window 常见的属性

```javascript
console.log(window.outerHeight)
console.log(window.innerHeight)
console.log(window.screenX)
console.log(window.screenY)
window.addEventListener('scroll', (e) => {
  console.log('滚动了')
})
```
