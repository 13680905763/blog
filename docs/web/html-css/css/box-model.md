# 盒子模型

## concept

HTML 中的每一个元素都可以看做是一个盒子，可以具备这 4 个属性

- 内容（content）
  - 元素的内容 width/height
- 内边距（padding）
  - 元素和内容之间的间距
- 边框（border）
  - 元素自己的边框
- 外边距（margin）
  - 元素和其他元素之间的间距

![box-model](/img/web/css/box-model/box-model.jpg)

## content – width and height

- 设置内容是通过宽度和高度设置的:
  - 宽度设置: width
  - 高度设置: height
- 注意: 对于**行内级非替换元素**来说, 设置**宽高是无效**的!
- 另外我们还可以设置如下属性:
  - min-width：最小宽度，无论内容多少，宽度都大于或等于 min-width
  - max-width：最大宽度，无论内容多少，宽度都小于或等于 max-width
  - **移动端适配**时, 可以设置最大宽度和最小宽度;
- 下面两个属性不常用:
  - min-height：最小高度，无论内容多少，高度都大于或等于 min-height
  - max-height：最大高度，无论内容多少，高度都小于或等于 max-height

## padding

- padding 用于设置盒子的内边距, 通常用于设置边框和内容之间的间距;
- padding 四个方向:
  - padding-top：上内边距
  - padding-right：右内边距
  - padding-bottom：下内边距
  - padding-left：左内边距
- padding 单独编写是一个缩写属性：
  - 四个值：上右下左, 顺时针转动的
  - 三个值：上 左右 下
  - 两个值：上下，左右
  - 一个值：全部

## border

边框相对于 content/padding/margin 来说特殊一些:

- 边框具备宽度
- 边框具备样式
- 边框具备颜色

![border-style](/img/web/css/box-model/border-style.jpg)

设置某一方向的边框

- border-top
- border-right
- border-bottom
- border-left

设置 4 个方向的边框

- border

```css
border: <line-width> || <line-style> || <color>; // 顺序任意
```

[利用 border 画形状](https://css-tricks.com/the-shapes-of-css/#top-of-site)

## border-radius

设置盒子的圆角
border-radius 常见的值:

- 数值: 通常用来设置小的圆角, 比如 6px;
- 百分比: 通常用来设置一定的弧度或者圆形;

## margin

设置盒子的外边距, 通常用于元素和元素之间的间距;

_取值见 padding_.

### 上下 margin 的传递

1. margin-top 传递
   - 如果块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的 margin-top 值会传递给父元素
2. margin-bottom 传递
   - 如果块级元素的底部线和父元素的底部线重写，并且父元素的高度是 auto，那么这个块级元素的 margin-bottom 值会传递给父元素

如何防止出现传递

- 给父元素设置 padding-top\padding-bottom
- 给父元素设置 border
- 触发 BFC: 设置 overflow 为 auto

[**建议**]

- margin 一般是用来设置兄弟元素之间的间距
- padding 一般是用来设置父子元素之间的间距

### 上下 margin 的折叠

1. 垂直方向上相邻的 2 个 margin（margin-top、margin-bottom）有可能会合并为 1 个 margin，这种现象叫做 collapse（折叠）
2. 水平方向上的 margin 不会 collapse
3. 折叠后最终值的计算规则
   - 两个值进行比较，取较大的值

如何防止 margin collapse？

- 只设置其中一个元素的 margin

![margin-collapse](/img/web/css/box-model/margin-collapse.jpg)

## 外轮廓 - [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)

outline 跟 border 很像

- outline 不占据空间，绘制于元素内容周围

## box-shadow

设置一个或者多个阴影

```css
box-shadow: none | <shadow>#
shadow : <color>? && [ <length>{2} <length [0, ∞]>? <length>? ] && inset?;
```

- 第 1 个 length：offset-x, 水平方向的偏移，正数往右偏移
- 第 2 个 length：offset-y, 垂直方向的偏移，正数往下偏移
- 第 3 个 length：blur-radius, 模糊半径
- 第 4 个 length：spread-radius, 延伸半径
- color：阴影的颜色，如果没有设置，就跟随 color 属性的颜色
- inset：外框阴影变成内框阴影

[阴影调试](https://html-css-js.com/css/generator/box-shadow/)

## text-shadow

text-shadow 用法类似于 box-shadow，用于给文字添加阴影效果

[文字阴影调试](https://html-css-js.com/css/generator/box-shadow/)

## 行内非替换元素的注意事项

- 以下属性对行内级非替换元素不起作用
  - width、height、margin-top、margin-bottom
- 以下属性对行内级非替换元素的效果比较特殊
  - padding-top、padding-bottom、上下方向的 border

## box-sizing

1. content-box （标准盒子模型）
   - padding、border 都布置在 width、height 外边
2. border-box （IE 盒子模型）
   - padding、border 都布置在 width、height 里边

## 元素的水平居中方案

行内级元素(包括 inline-block 元素)

- 水平居中：在父元素中设置 text-align: center

块级元素

- 水平居中：margin: 0 auto
