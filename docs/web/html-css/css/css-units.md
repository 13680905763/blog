# css 中的单位

CSS 中还有非常多的长度单位，整体可以分成两类：

- 绝对长度单位（Absolute length units）；
- 相对长度单位（Relative length units）；

## 绝对单位

- 它们与其他任何东西都没有关系，通常被认为总是相同的大小。
- 这些值中的大多数在用于打印时比用于屏幕输出时更有用，例如，我们通常不会在屏幕上使用 cm。
- 唯一一个您经常使用的值，就是 px(像素)

![absolute-length-units1](/img/web/css/css-units/absolute-length-units1.jpg)
![absolute-length-units2](/img/web/css/css-units/absolute-length-units2.jpg)

## 相对单位

- 相对长度单位
  - 相对长度单位相对于其他一些东西；
  - 比如父元素的字体大小，或者视图端口的大小；
  - 使用相对单位的好处是，经过一些仔细的规划，您可以使文本或其他元素的大小与页面上的其他内容相对应；
- em：
  - 元素的字号
- rem：
  - 根元素的字体大小
- vw/wh
  - 1% of viewport's width/height

![relative-length-units2](/img/web/css/css-units/relative-length-units.jpg)

## pixel

px 是 pixel 单词的缩写，翻译为像素。

- 像素是影响显示的基本单位。（比如屏幕上看到的画面、一幅图片）；
- pix 是英语单词 picture 的常用简写，加上英语单词“元素”element，就得到 pixel；
- “像素”表示“画像元素”之意，有时亦被称为 pel（picture element）

![pixel](/img/web/css/css-units/pixel.jpg)

### 像素的不同分类

像素单位常见的有三种像素名称：

- 设备像素（物理像素）；
- 设备独立像素（逻辑像素）；
- CSS 像素；

### 物理像素和逻辑像素

- 设备像素，也叫物理像素。
  - 设备像素指的是显示器上的真实像素，每个像素的大小是屏幕固有的属性，屏幕出厂以后就不会改变了；
  - 我们在购买显示器或者手机的时候，提到的设备分辨率就是设备像素的大小；
  - 比如 iPhone X 的分辨率 1125x2436，指的就是设备像素；
- 设备独立像素，也叫逻辑像素。
  - 如果面向开发者我们使用设备像素显示一个 100px 的宽度，那么在不同屏幕上显示效果会是不同的；
  - 开发者针对不同的屏幕很难进行较好的适配，编写程序必须了解用户的分辨率来进行开发；
  - 所以在设备像素之上，操作系统为开发者进行抽象，提供了逻辑像素的概念；
  - 比如你购买了一台显示器，在操作系统上是以 1920x1080 设置的显示分辨率，那么无论你购买的是 2k、4k 的显示器，对于开发者来说，都是
    1920x1080 的大小。
- CSS 像素
  - CSS 中我们经常使用的单位也是 pixel，它在默认情况下等同于设备独立像素（也就是逻辑像素）；
  - 毕竟逻辑像素才是面向我们开发者的；
- 我们可以通过 JavaScript 中的 screen.width 和 screen.height 获取到电脑的逻辑分辨率：

  ```js
  const screenHeight = screen.height
  const screenWidth = screen.width
  ```

### DPR、PPI

- DPR：device pixel ratio
  - 2010 年，iPhone4 问世，不仅仅带来了移动互联网，还带来了 Retina 屏幕；
  - Retina 屏幕翻译为视网膜显示屏，可以为用户带来更好的显示；
  - 在 Retina 屏幕中，一个逻辑像素在长度上对应两个物理像素，这个比例称之为设备像素比（device pixel ratio）；
    ![Retina1](/img/web/css/css-units/Retina1.jpg)
    ![Retina2](/img/web/css/css-units/Retina2.jpg)
  - 我们可以通过 window.devicePixelRatio 获取到当前屏幕上的 DPR 值；
- PPI（了解）：每英寸像素（英语：Pixels Per Inch，缩写：PPI）
  - 通常用来表示一个打印图像或者显示器上像素的密度；
  - 前面我们提过 1 英寸=2.54 厘米，在工业领域被广泛应用；
