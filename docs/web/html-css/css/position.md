# CSS 元素定位

## Normal Flow

默认情况下，元素都是按照 normal flow 进行排布

- 从左到右、从上到下按顺序摆放好
- 默认情况下，互相之间不存在层叠现象

![normal-flow](/img/web/css/position/normal-flow.jpg)

### margin-padding

在标准流中，可以使用 margin、padding 对元素进行位置调整

- 其中 margin 还可以设置负数

比较明显的缺点是

- 设置一个元素的 margin 或者 padding，通常会影响到标准流中其他元素的位置效果
- 不便于实现元素层叠的效果

## 定位

定位能够从文档流中取出元素，并使它们具有不同的行为:

- 例如放在另一个元素的上面;
- 或者始终保持在浏览器视窗内的同一位置;

利用 position 可以对元素进行定位

- static：默认值, 静态定位

_定位元素_：

- relative：相对定位
- absolute：绝对定位
- fixed：固定定位
- sticky：粘性定位

## static

position 属性的默认值

- 元素按照 normal flow 布局
- left 、right、top、bottom 没有任何作用

## relative

- 元素按照 normal flow 布局

- 通过 left、right、top、bottom 进行定位

  - 定位参照对象是元素自己原来的位置

- left、right、top、bottom 用来设置元素的具体位置

![relative](/img/web/css/position/relative.jpg)

应用场景

在不影响其他元素位置的前提下，对当前元素位置进行微调

## fixed

- 元素脱离 normal flow（脱离标准流、脱标）
- 可以通过 left、right、top、bottom 进行定位
  - 定位参照对象是[视口](/blog/web/#画布和视口)
- 当画布滚动时，固定不动

## absolute

- 元素脱离 normal flow（脱离标准流、脱标）
- 可以通过 left、right、top、bottom 进行定位
  - 定位参照对象是最邻近的定位祖先元素
  - 如果找不到这样的祖先元素，参照对象是视口

如果希望子元素相对于父元素进行定位，又不希望父元素脱标，常用解决方案是：

- 父元素设置 position: relative（让父元素成为定位元素，而且父元素不脱离标准流）
- 子元素设置 position: absolute
- 简称为“子绝父相

## absolute/fixed 特点

### 特点一

1. 可以随意设置宽高
   - 宽高默认由内容决定
   - 不再受标准流的约束
2. 不再严格按照从上到下、从左到右排布
3. 不再严格区分块级(block)、行内级(inline)，行内块级(inline-block)的很多特性都会消失
4. 不再给父元素汇报宽高数据
5. 脱标元素内部默认还是按照标准流布局

### 特点二

对于绝对定位元素来说

- 定位参照对象的宽度 = left + right + margin-left + margin-right + 绝对定位元素的实际占用宽度
- 定位参照对象的高度 = top + bottom + margin-top + margin-bottom + 绝对定位元素的实际占用高度

如果希望绝对定位元素的宽高和定位参照对象一样，可以给绝对定位元素设置以下属性

- left: 0、right: 0、top: 0、bottom: 0、margin:0

如果希望绝对定位元素在定位参照对象中居中显示，可以给绝对定位元素设置以下属性

- left: 0、right: 0、top: 0、bottom: 0、margin: auto
- 另外，还得设置**具体的宽高值**

## auto

auto -> 交给浏览器你来出来
width: auto;

- 行内非替换元素 -> width: 包裹内容
- 块级元素 ->width: 包含块的宽度
- 绝对定位元素 -> width: 包裹内容

## sticky

- 可以看做是相对定位和固定定位的结合体;
- 它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点;
- 当达到这个阈值点时, 就会变成固定(绝对)定位;

## position 值对比

![position](/img/web/css/position/position.jpg)

## z-index

z-index 属性用来设置定位元素的层叠顺序（仅对定位元素有效）

- 取值可以是正整数、负整数、0

比较原则

- 如果是兄弟关系
  - z-index 越大，层叠在越上面
  - z-index 相等，写在后面的那个元素层叠在上面
- 如果不是兄弟关系
  - 各自从元素自己以及祖先元素中，找出最邻近的 2 个定位元素进行比较
  - 而且这 2 个定位元素必须有设置 z-index 的具体数值
