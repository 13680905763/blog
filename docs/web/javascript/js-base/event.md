# 事件

- Web 页面需要经常和用户之间进行交互，而交互的过程中我们可能想要捕捉这个交互的过程：
  - 比如用户点击了某个按钮、用户在输入框里面输入了某个文本、用户鼠标经过了某个位置；
  - 浏览器需要搭建一条 JavaScript 代码和事件之间的桥梁；
  - 当某个事件发生时，让 JavaScript 可以相应（执行某个函数），所以我们需要针对事件编写处理程序（handler）；
- 如何进行事件监听呢？

  1. 在 script 中直接监听（很少使用）；

     ```html
     <div id="box" onclick='console.log("点击了box")'>box</div>
     ```

  2. 事件监听方式二：DOM 属性，通过元素的 on 来监听事件；

     ```javascript
     const boxEl = document.querySelector('#box')
     boxEl.onclick = function () {
       console.log('点击了box')
     }
     ```

  3. 事件监听方式三：通过 EventTarget 中的 addEventListener 来监听；

     ```javascript
     boxEl.addEventListener('click', function () {
       console.log('点击了box')
     })
     ```

## 常见的事件列表

- 鼠标事件：
  - click —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）。
  - mouseover / mouseout —— 当鼠标指针移入/离开一个元素时。
  - mousedown / mouseup —— 当在元素上按下/释放鼠标按钮时。
  - mousemove —— 当鼠标移动时。
- 键盘事件：
  - keydown 和 keyup —— 当按下和松开一个按键时。
- 表单（form）元素事件：
  - submit —— 当访问者提交了一个 \<form> 时。
  - focus —— 当访问者聚焦于一个元素时，例如聚焦于一个 \<input>。
- Document 事件：
  - DOMContentLoaded —— 当 HTML 的加载和处理均完成，DOM 被完全构建完成时。
- CSS 事件：
  - transitionend —— 当一个 CSS 动画完成时。

## 事件流

事件有一个概念叫做事件流

- 当我们在浏览器上对着一个元素点击时，你点击的不仅仅是这个元素本身；
- 这是因为我们的 HTML 元素是存在父子元素叠加层级的；
- 比如一个 span 元素是放在 div 元素上的，div 元素是放在 body 元素上的，body 元素是放在 html 元素上的；

### 事件冒泡和事件捕获

- 我们会发现默认情况下事件是从最内层的 span 向外依次传递的顺序，这个顺序我们称之为事件冒泡（Event Bubble）;
- 事实上，还有另外一种监听事件流的方式就是从外层到内层（body -> span），这种称之为事件捕获（Event Capture）；
- 为什么会产生两种不同的处理流呢？
  - 这是因为早期浏览器开发时，不管是 IE 还是 Netscape 公司都发现了这个问题;
  - 但是他们采用了完全相反的事件流来对事件进行了传递；
  - IE 采用了事件冒泡的方式，Netscape 采用了事件捕获的方式；

![event](/img/web/javascript/js-base/event/event.jpg)

#### 事件捕获和冒泡的过程

如果我们都监听，那么会按照如下顺序来执行：

- 捕获阶段（Capturing phase）：事件（从 Window）向下走近元素。
- 目标阶段（Target phase）：事件到达目标元素。
- 冒泡阶段（Bubbling phase）：事件从元素上开始冒泡。

事实上，我们可以通过 event 对象来获取当前的阶段：

- eventPhase

开发中通常会使用事件冒泡，所以事件捕获了解即可。
![执行过程](/img/web/javascript/js-base/event/执行过程.jpg)

## 事件对象

- 当一个事件发生时，就会有和这个事件相关的很多信息：
  - 比如事件的类型是什么，你点击的是哪一个元素，点击的位置是哪里等等相关的信息；
  - 那么这些信息会被封装到一个 Event 对象中，这个对象由浏览器创建，称之为 event 对象；
  - 该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作；
- 如何获取这个 event 对象呢？
  - event 对象会在传入的事件处理（event handler）函数回调时，被系统传入；
  - 我们可以在回调函数中拿到这个 event 对象；

这个对象中都有哪些常见的属性和操作呢？

- 常见的属性：
  - type：事件的类型；
  - target：当前事件发生的元素；
  - currentTarget：当前处理事件的元素；
  - eventPhase：事件所处的阶段；
  - offsetX、offsetY：事件发生在元素内的位置；
  - clientX、clientY：事件发生在客户端内的位置；
  - pageX、pageY：事件发生在客户端相对于 document 的位置；
  - screenX、screenY：事件发生相对于屏幕的位置；
- 常见的方法：
  - preventDefault：取消事件的默认行为；
  - stopPropagation：阻止事件的进一步传递（冒泡或者捕获都可以阻止）；

## 事件处理中的 this

- 在函数中，我们也可以通过 this 来获取当前的发生元素：

  ```javascript
  boxEl.addEventListener('click', function (event) {
    console.log(this === event.target)
  })
  ```

- 这是因为在浏览器内部，调用 event handler 是绑定到当前的 target 上的

## EventTarget 类

- 我们会发现，所有的节点、元素都继承自 EventTarget
  - 事实上 Window 也继承自 EventTarget；
- 那么这个 EventTarget 是什么呢？
  - EventTarget 是一个 DOM 接口，主要用于添加、删除、派发 Event 事件；
- EventTarget 常见的方法：
  - addEventListener：注册某个事件类型以及事件处理函数；
  - removeEventListener：移除某个事件类型以及事件处理函数；
  - dispatchEvent：派发某个事件类型到 EventTarget 上；

```javascript
boxEl.addEventListener('click', function () {
  window.dispatchEvent(new Event('自定义事件'))
})
boxEl.addEventListener('自定义事件', function () {
  console.log('监听到自定义事件')
})
```

## 事件委托（event delegation）

- 事件冒泡在某种情况下可以帮助我们实现强大的事件处理模式 – 事件委托模式（也是一种设计模式）
- 那么这个模式是怎么样的呢？
  - 因为当子元素被点击时，父元素可以通过冒泡可以监听到子元素的点击；
  - 并且可以通过 event.target 获取到当前监听的元素；
- 案例：一个 ul 中存放多个 li，点击某一个 li 会变成红色

  1. 监听每一个 li 的点击，并且做出相应；
  2. 在 ul 中监听点击，并且通过 event.target 拿到对应的 li 进行处理；
     - 因为这种方案并不需要遍历后给每一个 li 上添加事件监听，所以它更加高效；

- 某些事件委托可能需要对具体的子组件进行区分，这个时候我们可以使用 data-\*对其进行标记：
- 比如多个按钮的点击，区分点击了哪一个按钮：

```html
<div class="btn-list">
  <button data-action="search">搜索</button>
  <button data-action="delete">删除</button>
</div>
```

```javascript
const btnListEl = document.querySelector('.btn-list')
btnListEl.addEventListener('click', function (event) {
  const action = event.target.dataset.action
  if (action === 'search') {
    console.log('点击了搜索')
  } else if (action === 'delete') {
    console.log('点击了删除')
  }
})
```

## 常见的鼠标事件

- 常见的鼠标事件（不仅仅是鼠标设备，也包括模拟鼠标的设备，比如手机、平板电脑）

![鼠标事件](/img/web/javascript/js-base/event/鼠标事件.jpg)

### mouseover 和 mouseenter 的区别

- mouseenter 和 mouseleave
  - 不支持冒泡
  - 进入子元素依然属于在该元素内，没有任何反应
- mouseover 和 mouseout
  - 支持冒泡
  - 进入元素的子元素时
    - 先调用父元素的 mouseout
    - 再调用子元素的 mouseover
    - 因为支持冒泡，所以会将 mouseover 传递到父元素中；

## 常见的键盘事件

![键盘事件](/img/web/javascript/js-base/event/键盘事件.jpg)

- 事件的执行顺序是 onkeydown、onkeypress、onkeyup
  - down 事件先发生；
  - press 发生在文本被输入；
  - up 发生在文本输入完成；
- 我们可以通过 key 和 code 来区分按下的键：
  - code：“按键代码”（"KeyA"，"ArrowLeft" 等），特定于键盘上按键的物理位置。
  - key：字符（"A"，"a" 等），对于非字符（non-character）的按键，通常具有与 code 相同的值。）

## 常见的表单事件

![表单事件](/img/web/javascript/js-base/event/表单事件.jpg)

## 文档加载事件

- DOMContentLoaded：浏览器已完全加载 HTML，并构建了 DOM 树，但像 \<img> 和样式表之类的外部资源可能尚未加载完成。
- load：浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等

[更多事件...](https://developer.mozilla.org/zh-CN/docs/Web/Events)
