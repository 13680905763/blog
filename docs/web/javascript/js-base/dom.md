# dom

DOM：文档对象模型（Document Object Model）

- 简称 DOM，将页面所有的内容表示为可以修改的对象；

- 浏览器会对我们编写的 HTML、CSS 进行渲染，同时它又要考虑我们可能会通过 JavaScript 来对其进行操作：
  - 于是浏览器将我们编写在 HTML 中的每一个元素（Element）都抽象成了一个个对象；
  - 所有这些对象都可以通过 JavaScript 来对其进行访问，那么我们就可以通过 JavaScript 来操作页面；
  - 所以，我们将这个抽象过程称之为 文档对象模型（Document Object Model）；
- 整个文档被抽象到 document 对象中：
  - 比如 document.documentElement 对应的是 html 元素；
  - 比如 document.body 对应的是 body 元素；
  - 比如 document.head 对应的是 head 元素；
- 下面的一行代码可以让整个页面变成红色：

```javascript
document.body.style.backgroundColor = 'red'
```

## DOM Tree

- 一个页面不只是有 html、head、body 元素，也包括很多的子元素：
  - 在 html 结构中，最终会形成一个树结构；
  - 在抽象成 DOM 对象的时候，它们也会形成一个树结构，我们称之为 DOM Tree；

![dom-tree](/img/web/javascript/js-base/dom/dom-tree.jpg)

<!-- 1. DOM 元素之间的关系
2. 获取 DOM 元素
3. DOM 节点的 type、tag、content
4. DOM 节点的 attributes、properies
5. DOM 节点的创建、插入、克隆、删除
6. DOM 节点的样式、类
7. DOM 元素/window 的大小、滚动、坐标 -->

## DOM 的继承关系图

![dom-extend](/img/web/javascript/js-base/dom/dom-extend.jpg)

## document 对象

- Document 节点表示的整个载入的网页，它的实例是全局的 document 对象：
  - 对 DOM 的所有操作都是从 document 对象开始的；
  - 它是 DOM 的 入口点，可以从 document 开始去访问任何节点元素；
- 对于最顶层的 html、head、body 元素，我们可以直接在 document 对象中获取到：
  - html 元素：\<html> = document.documentElement
  - body 元素：\<body> = document.body
  - head 元素：\<head> = document.head
  - 文档声明：\<!DOCTYPE html> = document.doctype

## 节点（Node）之间的导航（navigator）

获取到一个节点（Node）后，可以根据这个节点去获取其他的节点，我们称之为节点之间的导航。

- 父节点：parentNode
- 前兄弟节点：previousSibling
- 后兄弟节点：nextSibling
- 子节点：childNodes
- 第一个子节点：firstChild
- 第二个子节点：lastChild

## 元素（Element）之间的导航（navigator）

获取到一个元素（Element）后，可以根据这个元素去获取其他的元素，我们称之为元素之间的导航。

- 父元素：parentElement
- 前兄弟节点：previousElementSibling
- 后兄弟节点：nextElementSibling
- 子节点：children
- 第一个子节点：firstElementChild
- 第二个子节点：lastElementChild

## 获取元素的方法

DOM 为我们提供了获取元素的方法：
![获取元素](/img/web/javascript/js-base/dom/获取元素.jpg)

## 节点的属性

### nodeType

- nodeType 属性：
  - nodeType 属性提供了一种获取节点类型的方法；
  - 它有一个数值型值（numeric value）；
- 常见的节点类型有如下：

![node-type](/img/web/javascript/js-base/dom/node-type.jpg)

### nodeName、tagName

- nodeName：获取 node 节点的名字；
- tagName：获取元素的标签名词；

tagName 和 nodeName 之间有什么不同呢？

- tagName 属性仅适用于 Element 节点；
- nodeName 是为任意 Node 定义的：
  - 对于元素，它的意义与 tagName 相同，所以使用哪一个都是可以的；
  - 对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串；

### innerHTML、textContent

- innerHTML 属性
  - 将元素中的 HTML 获取为字符串形式；
  - 设置元素中的内容；
- outerHTML 属性
  - 包含了元素的完整 HTML
  - innerHTML 加上元素本身一样；
- textContent 属性
  - 仅仅获取元素中的文本内容；
- innerHTML 和 textContent 的区别：
  - 使用 innerHTML，我们将其“作为 HTML”插入，带有所有 HTML 标签。
  - 使用 textContent，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理。

### nodeValue

- nodeValue/data
  - 用于获取非元素节点的文本内容

### 其他属性

- hidden 属性：也是一个全局属性，可以用于设置元素隐藏。
- DOM 元素还有其他属性：
  - value
    - \<input>，\<select> 和 \<textarea>（HTMLInputElement，HTMLSelectElement……）的 value。
  - href
    - \<a href="...">（HTMLAnchorElement）的 href。
  - id
    - 所有元素（HTMLElement）的 “id” 特性（attribute）的值。

## 元素的属性和特性

元素除了有开始标签、结束标签、内容之外，还有很多的属性（attribute）

- 浏览器在解析 HTML 元素时，会将对应的 attribute 也创建出来放到对应的元素对象上。
  - 比如 id、class 就是全局的 attribute，会有对应的 id、class 属性；
  - 比如 href 属性是针对 a 元素的，type、value 属性是针对 input 元素的；

### attribute 的分类

- 标准的 attribute：某些 attribute 属性是标准的，比如 id、class、href、type、value 等；
- 非标准的 attribute：某些 attribute 属性是自定义的，比如 abc、age、height 等；

### attribute 的操作

- 对于所有的 attribute 访问都支持如下的方法：
  - element.hasAttribute(name) — 检查特性是否存在。
  - element.getAttribute(name) — 获取这个特性值。
  - element.setAttribute(name, value) — 设置这个特性值。
  - element.removeAttribute(name) — 移除这个特性。
  - attributes：attr 对象的集合，具有 name、value 属性；
- attribute 具备以下特征：
  - 它们的名字是大小写不敏感的（id 与 ID 相同）。
  - 它们的值总是字符串类型的。

### 元素的属性（property）

- 对于标准的 attribute，会在 DOM 对象上创建与其对应的 property 属性：
- 在大多数情况下，它们是相互作用的
  - 改变 property，通过 attribute 获取的值，会随着改变；
  - 通过 attribute 操作修改，property 的值会随着改变；
    - 但是 input 的 value 修改只能通过 attribute 的方法；
- 除非特别情况，大多数情况下，设置、获取 attribute，推荐使用 property 的方式：
  - 这是因为它默认情况下是有类型的；

HTML5 的 data-\*自定义属性，那么它们也是可以在 dataset 属性中获取到的：

### JavaScript 动态修改样式

1. 在 CSS 中编写好对应的样式，动态的添加 class；
2. 动态的修改 style 属性；

- 在大多数情况下，如果可以动态修改 class 完成某个功能，更推荐使用动态 class；
- 如果对于某些情况，无法通过动态修改 class（比如精准修改某个 css 属性的值），那么就可以修改 style 属性；

#### 元素的 className 和 classList

- 元素的 class attribute，对应的 property 并非叫 class，而是 className：
  - 这是因为 JavaScript 早期是不允许使用 class 这种关键字来作为对象的属性，所以 DOM 规范使用了 className；
  - 虽然现在 JavaScript 已经没有这样的限制，但是并不推荐，并且依然在使用 className 这个名称；
- 我们可以对 className 进行赋值，它会替换整个类中的字符串。
- 如果我们需要添加或者移除单个的 class，那么可以使用 classList 属性。
- element.classList 是一个特殊的对象：
  - element.classList.add (class) ：添加一个类
  - element.classList.remove(class)：添加/移除类。
  - element.classList.toggle(class) ：如果类不存在就添加类，存在就移除它。
  - element.classList.contains(class)：检查给定类，返回 true/false。
- classList 是可迭代对象，可以通过 for of 进行遍历。

#### 元素的 style 属性

- 如果需要单独修改某一个 CSS 属性，那么可以通过 style 来操作：

  ```javascript
  boxEl.style.width = '100px'
  boxEl.style.backgroundColor = 'red'
  ```

- 如果我们将值设置为空字符串，那么会使用 CSS 的默认样式：

  ```javascript
  boxEl.style.display = ''
  ```

- 多个样式的写法，我们需要使用 cssText 属性：

  - 不推荐这种用法，因为它会替换整个字符串；

  ```javascript
  boxEl.style.cssText = `
              width:100px;
              height:100px`
  ```

  元素 style 的读取 - getComputedStyle

- 如果我们需要读取样式：
  - 对于内联样式，是可以通过 style.\*的方式读取到的;
  - 对于 style、css 文件中的样式，是读取不到的；
- 这个时候，我们可以通过 getComputedStyle 的全局函数来实现：

### 创建元素

想要插入一个元素，通常会按照如下步骤：

1. 创建一个元素；
2. 插入元素到 DOM 的某一个位置；

创建元素： document.createElement(tag)

```javascript
const boxEl = document.querySelector('.box')
const h1El = document.createElement('h1')
h1El.innerHTML = 'h1'
boxEl.append(h1El)
```

### 插入元素

- node.append(...nodes or strings) —— 在 node 末尾 插入节点或字符串，
- node.prepend(...nodes or strings) —— 在 node 开头 插入节点或字符串，
- node.before(...nodes or strings) —— 在 node 前面 插入节点或字符串，
- node.after(...nodes or strings) —— 在 node 后面 插入节点或字符串，
- node.replaceWith(...nodes or strings) —— 将 node 替换为给定的节点或字符串。

![插入元素](/img/web/javascript/js-base/dom/插入元素.jpg)

### 移除和克隆元素

- 移除元素我们可以调用元素本身的 remove 方法：
- 如果我们想要复制一个现有的元素，可以通过 cloneNode 方法：
  - 可以传入一个 Boolean 类型的值，来决定是否是深度克隆；
  - 深度克隆会克隆对应元素的子元素，否则不会；

### 元素的大小-滚动

- clientWidth：contentWith+padding（不包含滚动条）
- clientHeight：contentHeight+padding
- clientTop：border-top 的宽度
- clientLeft：border-left 的宽度
- offsetWidth：元素完整的宽度
- offsetHeight：元素完整的高度
- offsetLeft：距离父元素的 x
- offsetHeight：距离父元素的 y
- scrollHeight：整个可滚动的区域高度
- scrollTop：滚动部分的高度

![元素的大小-滚动](/img/web/javascript/js-base/dom/元素的大小-滚动.jpg)

### window 的大小、滚动

- window 的 width 和 height
  - innerWidth、innerHeight：获取 window 窗口的宽度和高度（包含滚动条）
  - outerWidth、outerHeight：获取 window 窗口的整个宽度和高度（包括调试工具、工具栏）
  - documentElement.clientHeight、documentElement.clientWidth：获取 html 的宽度和高度（不包含滚动条）
- window 的滚动位置：
  - scrollX：X 轴滚动的位置（别名 pageXOffset）
  - scrollY：Y 轴滚动的位置（别名 pageYOffset）
- 也有提供对应的滚动方法：
  - 方法 scrollBy(x,y) ：将页面滚动至 相对于当前位置的 (x, y) 位置；
  - 方法 scrollTo(pageX,pageY) 将页面滚动至 绝对坐标；

### window 定时器方法

- setTimeout 允许我们将函数推迟到一段时间间隔之后再执行。
- setInterval 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。
- clearTimeout：取消 setTimeout 的定时器；
- clearInterval：取消 setInterval 的定时器；

大多数运行环境都有内置的调度程序，并且提供了这些方法：

- 目前来讲，所有浏览器以及 Node.js 都支持这两个方法；
