# 其他的一些属性

## vertical-align

vertical-align 会影响 行内块级元素 在一个 行盒 中垂直方向的位置

div 没有设置高度的时候

- 没有内容，没有高度
- 有内容，内容有行高，内容撑起来高度

行高为什么可以撑起 div 的高度？

- 这是因为 line boxes 的存在，并且 line-boxes 有一个特性，包裹每行的 inline level
- 而其中的文字是有行高的，必须将整个行高包裹进去，才算包裹这个 line-level

那么，进一步思考：

- 如果这个 div 中有图片，文字，inline-block，甚至他们设置了 margin 这些属性呢？

### 深入理解 vertical-align – 不同情况分析

#### 情况一：只有文字时，line boxes 如何包裹内容？（注意：红色是包裹的 div，下面也都一样）

![case1](/img/web/css/other-property/case1.jpg)

#### 情况二：有图片，有文字时，line-boxes 如何包裹内容？

![case2](/img/web/css/other-property/case2.jpg)

#### 情况三：有图片，有文字，有 inline-block（比图片要大）如何包裹内容？

![case3](/img/web/css/other-property/case3.jpg)

#### 情况四：有图片，有文字，有 inline-block（比图片要大）而且设置了 margin-bottom，如何包裹内容？

![case4](/img/web/css/other-property/case4.jpg)

#### 情况五：有图片、文字、inline-block（比图片要大）而且设置了 margin-bottom 并且有文字，如何包裹内容？

![case5](/img/web/css/other-property/case5.jpg)

### vertical-align 的 baseline

line-boxes 一定会想办法包裹住当前行中所有的内容

为什么对齐方式千奇百怪呢？默认 baseline 对齐

baseline 都是谁呢？

- 文本的 baseline 是字母 x 的下方
- Inline-block 默认的 baseline 是 margin-bottom 的底部（没有，就是盒子的底部）
- Inline-block 有文本时，baseline 是最后一行文本的 x 的下方

### vertical-align 的其他值

- baseline(默认值)：基线对齐（你得先明白什么是基线）
- top：把行内级盒子的顶部跟 line boxes 顶部对齐
- middle：行内级盒子的中心点与父盒基线加上 x-height 一半的线对齐
- bottom：把行内级盒子的底部跟 line box 底部对齐
- \<percentage>：把行内级盒子提升或者下降一段距离（距离相对于 line-height 计算\元素高度）， 0%意味着同 baseline 一
  样
- \<length>：把行内级盒子提升或者下降一段距离，0cm 意味着同 baseline 一样

### 解决图片下边缘的间隙方法

1. 设置成 top/middle/bottom
2. 将图片设置为 block 元素

## white-space

white-space 用于设置空白处理和换行规则

- normal：合并所有连续的空白，允许单词超屏时自动换行
- nowrap：合并所有连续的空白，不允许单词超屏时自动换行
- pre：阻止合并所有连续的空白，不允许单词超屏时自动换行
- pre-wrap：阻止合并所有连续的空白，允许单词超屏时自动换行
- pre-line：合并所有连续的空白（但保留换行），允许单词超屏时自动换行

## text-overflow

text-overflow 通常用来设置文字溢出时的行为

- clip：溢出的内容直接裁剪掉（字符可能会显示不完整）
- ellipsis：溢出那行的结尾处用省略号表示

**text-overflow 生效的前提是 overflow 不为 visible**.

常见的是将 white-space、text-overflow、overflow 一起使用：

```css
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
```

## 浏览器前缀

有时候可能会看到有些 CSS 属性名前面带有：-o-、-xv-、-ms-、mso-、-moz-、-webkit-

```css
-o-transform: translate(100px);
-ms-transform: translate(100px);
-webkit-transform: translate(100px);
-moz-transform: translate(100px);
```

官方文档专业术语叫做：vendor-specific extensions（供应商特定扩展）

为什么需要浏览器前缀了？

- CSS 属性刚开始并没有成为标准，浏览器为了防止后续会修改名字给新的属性添加了浏览器前缀；

上述前缀叫做浏览器私有前缀，只有对应的浏览器才能解析使用

- -o-、-xv-：Opera 等
- -ms-、mso-：IE 等
- -moz-：Firefox 等
- -webkit-：Safari、Chrome 等

注意：不需要手动添加，后面学习了模块化打包工具会自动添加浏览器前缀
