# css-property

## 必须掌握的 css 属性

1. 定位(Position)和布局(Layout)
   - position
   - top/bottom/left/right
   - z-index
   - float/clear
   - flexbox
     - flex-direction
     - justify-content
     - align-items
     - ...
2. 展示(Display)和可见(Visibility)
   - display
   - opacity
   - visibility
3. 盒子模型（Box Model）顺序
   - margin
   - box-shadow
   - border
   - border-radius
   - width/height
   - padding
4. 背景设置（Background）
   - background
5. 字体（Font）、文本（Text）
   - font-family/font-size/font-weight/font-style
   - line-height
   - text-align/text-transform
   - color
6. 其他属性（Other Property）
   - overflow
   - clip
   - cursor
   - transform
   - animation、transition
   - white-space

## CSS 的属性继承

CSS 的某些属性具有继承性(Inherited):

- 如果一个属性具备继承性, 那么在该元素上设置后, 它的后代元素都可以继承这个属性;
- 当然, 如果后代元素自己有设置该属性, 那么优先使用后代元素自己的属性(不管继承过来的属性权重多高);

常见的继承属性

![继承](/img/web/css/inherited.jpg)

## CSS 属性的层叠

CSS 的翻译是层叠样式表, 什么是层叠呢?

- 对于一个元素来说, 相同一个属性我们可以通过不同的选择器给它进行多次设置;
- 那么属性会被一层层覆盖上去;
- 但是最终只有一个会生效;

那么多个样式属性覆盖上去, 哪一个会生效呢?

- 判断一: 选择器的权重, 权重大的生效, 根据权重可以判断出优先级;
- 判断二: 先后顺序, 权重相同时, 后面设置的生效;

### 选择器的权重

为了方便比较 CSS 属性的优先级，可以给 CSS 属性所处的环境定义一个权值（权重）

- !important：10000
- 内联样式：1000
- id 选择器：100
- 类选择器、属性选择器、伪类：10
- 元素选择器、伪元素：1
- 通配符：0
