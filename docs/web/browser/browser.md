# 浏览器相关知识

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
