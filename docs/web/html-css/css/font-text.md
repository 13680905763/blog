# FONT-TEXT 字体与文本

## 字体

### font-size

决定文字的大小（默认 16px 是浏览器的）

- 具体数值+单位
  - 比如 100px
  - 也可以使用 em 单位(不推荐)：1em 代表 100%，2em 代表 200%，0.5em 代表 50% （相对自身继承至父元素的 font-size）
- 百分比
  - 基于父元素的 font-size 计算，比如 50%表示等于父元素 font-size 的一半

### font-family

设置文字的字体名称

- 可以设置 1 个或者多个字体名称;
- 浏览器会选择列表中第一个该计算机上有安装的字体（一直找不到就用默认字体）;
- 或者是通过 @font-face 指定的可以直接下载的字体。

```html
<!-- 字体有多个单词或者有特殊字符则加引号表示整体是一个编码 -->
<p style="font-family: Georgia,'Hiragino Sans GB','\5b8b\4f53'">字体名字</p>
```

### font-weight

设置文字的粗细

- 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ：每一个数字表示一个重量
- normal：等于 400
- bold：等于 700

strong、b、h1~h6 等标签的 font-weight 默认就是 bold

### font-style

设置文字的常规、斜体显示

- normal：常规显示
- italic(斜体)：用字体的斜体显示(通常会有专门的字体)
- oblique(倾斜)：文本倾斜

### line-height（重点）

设置文本的行高，行高有利于阅读

行高的定义：两行文字基线（baseline）之间的间距

- 基线（baseline）：与小写字母 x 最底部对齐的线
  ![行高](/img/web/css/line-height2.jpg)

意区分 height 和 line-height

- height：元素的整体高度
- line-height：元素中每一行文字所占据的高度

取值

- <数字> **推荐** 数字乘以该元素的字体大小
- <长度> em 为单位的值可能会产生不确定的结果（同下）
- <百分比> 百分比值乘以元素计算出的字体大小[可能会产生不确定的结果](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height#%E6%8E%A8%E8%8D%90%E5%9C%A8%E8%AE%BE%E7%BD%AE_line-height_%E6%97%B6%E4%BD%BF%E7%94%A8%E6%97%A0%E5%8D%95%E4%BD%8D%E6%95%B0%E5%80%BC)

应用：文字(图片不行 )在 div 内部垂直居中

- 让 line-height 等同于 height

### font

font 是一个缩写属性

- font 属性可以用来作为 font-style, font-variant, font-weight, font-size, line-height 和 font-family 属性的简写;
- font-style font-variant font-weight font-size/line-height font-family

规则:

- font-style、font-variant、font-weight 可以随意调换顺序，也可以省略
- /line-height 可以省略，如果不省略，必须跟在 font-size 后面
- font-size、font-family 不可以调换顺序，不可以省略

```js
font =
  [ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-stretch-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ]  |
  caption                                             |
  icon                                                |
  menu                                                |
  message-box                                         |
  small-caption                                       |
  status-bar
```

### Web fonts

1. 获取使用的字体文件(ttf)
2. 在 CSS 中使用该字体
3. 将 font 一起部署到静态服务器

![web-font](/img/web/css/font/web-font.jpg)

- 浏览器一个网页时, 因为代码中有引入字体文件, 字体文件会被一起下载下来;
- 浏览器会根据使用的字体在下载的字体文件中查找、解析、使用对应的字体；
- 在浏览器中使用对应的字体显示内容；

[字体天下](https://www.fonts.net.cn/fonts-zh-1.html)

```css
@font-face{
  font-family:'自定义字体',
  src:url(./fonts/xxx.ttf)
}
body{
  font-family:'自定义字体'
}
```

#### 兼容性

- TrueType 字体：拓展名是 .ttf
- OpenType 字体：拓展名是 .otf，建立在 TrueType 字体之上
- Embedded OpenType 字体：拓展名是 .eot，OpenType 字体的压缩版
- SVG 字体：拓展名是 .svg、 .svgz
- WOFF 表示 Web Open Font Format web 开放字体：拓展名是 .woff，建立在 TrueType 字体之上

![compatible](/img/web/css/font/compatible.jpg)

刀枪不入的@font-face 语法

```css
// format 用于帮助浏览器快速识别字体的格式
@font-face{
  font-family:'自定义字体',
  src:url(./fonts/xxx.ttf)
  src:url(./fonts/xxx.woff) format('woff')
  url(./fonts/xxx.eot) format('embedded-opentype')
  url(./fonts/xxx.svg) format('svg')
}
body{
  font-family:'自定义字体'
}
```

### 字体图标

把字体直接设计成图标的样子，这个就叫做字体图标。

- 放大不会失真
- 可以任意切换颜色
- 用到很多个图标时，文件相对图片较小

使用
[阿里 icons](https://www.iconfont.cn/)

1. 通过 link 引入 iconfont.css 文件
2. 使用
   - 通过对应字体图标的 Unicode 来显示代码
   - 利用已经编写好的 class, 直接使用即可

```html
<i class='iconfont'>&#xe6f6</i>
<i class='iconfont icon-music'></i>
```

## TEXT-文本

### color

前景色（文字颜色，文本装饰性，边框）

### text-decoration

设置文字的装饰线

- none 无任何装饰线（可用来去除 a 的下划线）
- underline 下划线
- overline 上划线
- line-through 中划线

### text-transform（了解）

设置文字的大小写转换

- capitalize：(使…首字母大写, 资本化的意思)将每个单词的首字符变为大写
- uppercase：(大写字母)将每个单词的所有字符变为大写
- lowercase：(小写字母)将每个单词的所有字符变为小写
- none：没有任何影响

实际开发 js 转换比较多（toUpperCase、toLowerCase）

### text-indent(了解)

设置第一行内容的缩进

text-indent: 2em; 刚好是缩进 2 个文字

### text-align(重要)

mdn 定义：行内内容（例如文字/图片）如何相对它的块父元素对齐;

The text-align CSS property sets the horizontal alignment of the **inline-level content** inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.

- left：左对齐
- right：右对齐
- center：正中间显示
- justify：两端对齐 （了解）

### letter-spacing、word-spacing（了解）

分别用于设置字母、单词之间的间距

默认是 0，可以设置为负数
