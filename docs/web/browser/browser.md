# Overview

## 浏览器渲染原理

### 网页被解析的过程

![url渲染](/img/web/browser/url渲染.jpg)

也就是一个网页下载下来后，就是由我们的渲染引擎来帮助我们解析的。

### 浏览器的内核

浏览器最核心的部分是渲染引擎（Rendering Engine）, 一般也称为**浏览器内核**

常见的浏览器内核：

- **Trident** （ 三叉戟）：IE、360 安全浏览器、搜狗高速浏览器、百度浏览器、UC 浏览器
- **Gecko**（ 壁虎） ：Mozilla Firefox
- **Webkit** ：Safari、360 极速浏览器、搜狗高速浏览器、移动端浏览器（Android、iOS）
- **Webkit**（分支） -> **Blink** ：Google Chrome

![浏览器内核](/img/web/browser/renderingEngine.jpg)

不同的浏览器内核有不同的解析、渲染规则，所以同一网页在不同内核的浏览器中的渲染效果也可能不同。(所以我们要进行浏览器适配，当然现在有各种打包工具帮助我们进行适配了)

浏览器内核是由两部分组成的，以 webkit 为例：

- WebCore：负责 HTML 解析、布局、渲染等等相关的工作；
- JavaScriptCore：解析、执行 JavaScript 代码；

另外一个强大的 JavaScript 引擎就是 V8 引擎。

### 渲染引擎解析页面

![render流程](/img/web/browser/render流程.jpg)

#### HTML 解析过程

- 默认情况下服务器会给浏览器返回 index.html 文件，所以解析 HTML 是所有步骤的开始：
- 解析 HTML，会构建 DOM Tree：

![dom-tree](/img/web/browser/dom-tree.jpg)

#### 生成 CSS 规则

- 在解析的过程中，如果遇到 CSS 的 link 元素，那么会由浏览器负责下载对应的 CSS 文件：
  - 下载 CSS 文件是不会影响 DOM 的解析的；
- 浏览器下载完 CSS 文件后，就会对 CSS 文件进行解析，解析出对应的规则树：
  - 我们可以称之为 CSSOM（CSS Object Model，CSS 对象模型）；

![cssom](/img/web/browser/cssom.jpg)

#### 构建 Render Tree

当有了 DOM Tree 和 CSSOM Tree 后，就可以两个结合来构建 Render Tree 了

![render-tree](/img/web/browser/render-tree.jpg)

注意一：link 元素不会阻塞 DOM Tree 的构建过程，但是会阻塞 Render Tree 的构建过程

- 这是因为 Render Tree 在构建时，需要对应的 CSSOM Tree；

注意二：Render Tree 和 DOM Tree 并不是一一对应的关系，比如对于 display 为 none 的元素，压根不会出现在 render tree 中；

#### 布局（layout）和绘制（Paint）

- 第四步是在渲染树（Render Tree）上运行布局（Layout）以计算每个节点的几何体。
  - 渲染树会表示显示哪些节点以及其他样式，但是不表示每个节点的尺寸、位置等信息；
  - 布局是确定呈现树中所有节点的宽度、高度和位置信息；
- 第五步是将每个节点绘制（Paint）到屏幕上
  - 在绘制阶段，浏览器将布局阶段计算的每个 frame 转为屏幕上实际的像素点；
  - 包括将元素的可见部分进行绘制，比如文本、颜色、边框、阴影、替换元素（比如 img）

![render-end](/img/web/browser/render-end.jpg)

### 回流和重绘

#### 回流 reflow：（也可以称之为重排）

- 第一次确定节点的大小和位置，称之为布局（layout）。
- 之后对节点的大小、位置修改重新计算称之为回流。

什么情况下引起回流

- 比如 DOM 结构发生改变（添加新的节点或者移除节点）；
- 比如改变了布局（修改了 width、height、padding、font-size 等值）
- 比如窗口 resize（修改了窗口的尺寸等）
- 比如调用 getComputedStyle 方法获取尺寸、位置信息；

#### 理解重绘 repaint

- 第一次渲染内容称之为绘制（paint）。
- 之后重新渲染称之为重绘。

什么情况下会引起重绘呢？

- 比如修改背景色、文字颜色、边框颜色、样式等；

回流一定会引起重绘，所以回流是一件很消耗性能的事情。所以在开发中要尽量避免发生回流：

1. 修改样式时尽量一次性修改
   - 比如通过 cssText 修改，比如通过添加 class 修改
2. 尽量避免频繁的操作 DOM
   - 我们可以在一个 DocumentFragment 或者父元素中
     将要操作的 DOM 操作完成，再一次性的操作；
3. 尽量避免通过 getComputedStyle 获取尺寸、位置等信
   息；
4. 对某些元素使用 position 的 absolute 或者 fixed
   - 并不是不会引起回流，而是开销相对较小，不会对
     其他元素造成影响。

### 特殊解析 – composite 合成

- 绘制的过程，可以将布局后的元素绘制到多个合成图层中。
  - 这是浏览器的一种优化手段；
- 默认情况下，标准流中的内容都是被绘制在同一个图层（Layer）中的；
- 而一些特殊的属性，会创建一个新的合成层（ CompositingLayer ），并且新的图层可以利用 GPU 来加速绘制；
  - 因为每个合成层都是单独渲染的；
- 那么哪些属性可以形成新的合成层呢？常见的一些属性：
  - 3D transforms
  - video、canvas、iframe
  - opacity 动画转换时；
  - position: fixed
  - will-change：一个实验性的属性，提前告诉浏览器元素可能发生哪些变化；
  - animation 或 transition 设置了 opacity、transform；
- 分层确实可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分过度使用。

![layers](/img/web/browser/layers.jpg)

### script 元素和页面解析的关系

- 浏览器在解析 HTML 的过程中，遇到了 script 元素是不能继续构建 DOM 树的；
- 它会停止继续构建，首先下载 JavaScript 代码，并且执行 JavaScript 的脚本；
- 只有等到 JavaScript 脚本执行结束后，才会继续解析 HTML，构建 DOM 树；

JavaScript 的作用之一就是操作 DOM，并且可以修改 DOM；

- 等到 DOM 树构建完成并且渲染再执行 JavaScript，会造成严重的回流和重绘，影响页面的性能；
- 所以会在遇到 script 元素时，优先下载和执行 JavaScript 代码，再继续构建 DOM 树；

script 元素给我们提供了两个属性（attribute）：defer 和 async

#### defer

- defer 属性告诉浏览器不要等待脚本下载，而继续解析 HTML，构建 DOM Tree。
  - 脚本会由浏览器来进行下载，但是不会阻塞 DOM Tree 的构建过程；
  - 如果脚本提前下载好了，它会等待 DOM Tree 构建完成，在 DOMContentLoaded 事件之前先执行 defer 中的代码；
- 所以 DOMContentLoaded 总是会等待 defer 中的代码先执行完成。
- 另外多个带 defer 的脚本是可以保持正确的顺序执行的。
- 从某种角度来说，defer 可以提高页面的性能，并且推荐放到 head 元素中；

#### async

- async 特性与 defer 有些类似，它也能够让脚本不阻塞页面。
- async 是让一个脚本完全独立的：
  - 浏览器不会因 async 脚本而阻塞（与 defer 类似）；
  - async 脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本；
  - async 不会能保证在 DOMContentLoaded 之前或者之后执行；
- defer 通常用于需要在文档解析后操作 DOM 的 JavaScript 代码，并且对多个 script 文件有顺序要求的；
- async 通常用于独立的脚本，对其他脚本，甚至 DOM 没有依赖的；

### V8 引擎的执行原理

![浏览器内核](/img/web/browser/v8.jpg)

1. [Parse](https://v8.dev/blog/scanner) 模块会将 JavaScript 代码转换成 AST（抽象语法树），这是因为解释器并不直接认识 JavaScript 代码；
   - 如果函数没有被调用，那么是不会被转换成 AST 的；
2. [Ignition](https://v8.dev/blog/ignition-interpreter)是一个解释器，会将 AST 转换成 ByteCode（字节码）
   - 同时会收集 TurboFan 优化所需要的信息（比如函数参数的类型信息，有了类型才能进行真实的运算）；
   - 如果函数只调用一次，Ignition 会解释执行 ByteCode；
3. [TurboFan](https://v8.dev/blog/turbofan-jit) 是一个编译器，可以将字节码编译为 CPU 可以直接执行的机器码；
   - 如果一个函数被多次调用，那么就会被标记为热点函数，那么就会经过 TurboFan 转换成优化的机器码，提高代码的执行性能；
   - 但是，机器码实际上也会被还原为 ByteCode，这是因为如果后续执行函数的过程中，类型发生了变化（比如 sum 函数原来执
     行的是 number 类型，后来执行变成了 string 类型），之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码；

![v8官图](/img/web/browser/v8官图.jpg)

- 词法分析（英文 lexical analysis）

  - 将字符序列转换成 token 序列的过程。
  - token 是记号化 （tokenization）的缩写
  - 词法分析器（lexical analyzer，简称 lexer），也叫扫描器（scanner）

- 语法分析（英语：syntactic analysis，也叫 parsing）
  - 语法分析器也可以称之为 parser。
