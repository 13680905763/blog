# Layout

## Flex

弹性布局
行-列|

- 开启了 flex 布局的元素叫 flex container
- flex container 里面的直接子元素叫做 flex item

当 flex container 中的子元素变成了 flex item 时, 具备一下特点:

- flex item 的布局将受 flex container 属性的设置来进行控制和布局;
- flex item 不再严格区分块级元素和行内级元素;
- flex item 默认情况下是包裹内容的, 但是可以设置宽度和高度;

设置 display 属性为 flex 或者 inline-flex 可以成为 flex container

- flex： flex container 以 block-level 形式存在
- inline-flex： flex container 以 inline-level 形式存在

![flex](/img/web/css/flex.jpg)

flex container

- flex-flow
- flex-direction
- flex-wrap
- justify-content
- align-items
- align-content

flex items

- flex-grow
- flex-shrink
- flex-basis
- order
- align-self
- flex

### flex-direction

设置主轴方向

row（默认值）、row-reverse、column、column-reverse

### flex-wrap

决定 flex container 是单行还是多行

- nowrap（默认）：单行
- wrap：多行
- wrap-reverse：多行（对比 wrap，cross start 与 cross end 相反）

### flex-flow

flex-flow 属性是 flex-direction 和 flex-wrap 的简写。

### justify-content

决定 flex items 在主轴上的对齐方式

- flex-start（默认值）：与 main start 对齐
- flex-end：与 main end 对齐
- center：居中对齐
- space-between：
  - flex items 之间的距离相等
  - 与 main start、main end 两端对齐
- space-around：
  - flex items 之间的距离相等
  - flex items 与 main start、main end 之间的距离是 flex items 之间距离的一半
- space-evenly：
  - flex items 之间的距离相等
  - flex items 与 main start、main end 之间的距离 等于 flex items 之间的距离

![justify-content](/img/web/css/justify-content.jpg)

### align-item

决定了 flex items 在垂直轴上的对齐方式

- normal：在弹性布局中，效果和 stretch 一样
- stretch：当 flex items 在交叉轴方向的 size 为 auto 时，会
  自动拉伸至填充 flex container
- flex-start：与 cross start 对齐
- flex-end：与 cross end 对齐
- center：居中对齐
- baseline：与基准线对齐

![align-item](/img/web/css/align-item.jpg)

### align-content

决定了多行 flex items 在交叉轴上的对齐方式，用法与 justify-content 类似

- stretch（默认值）：与 align-items 的 stretch 类似
- flex-start：与 cross start 对齐
- flex-end：与 cross end 对齐
- center：居中对齐
- space-between：
  - flex items 之间的距离相等
  - 与 cross start、cross end 两端对齐
- space-around：
  - flex items 之间的距离相等
  - flex items 与 cross start、cross end 之间的距离是 flex items 之间距离的一半
- space-evenly：
  - flex items 之间的距离相等
  - flex items 与 cross start、cross end 之间的距离 等于 flex items 之间的距离

![align-content](/img/web/css/align-content.jpg)

### order

决定了 flex items 的排布顺序

可以设置任意整数（正整数、负整数、0），值越小就越排在前面

- 默认值是 0

![order](/img/web/css/order.jpg)

### align-self

flex items 可以通过 align-self 覆盖 flex container 设置的 align-items

- auto（默认值）：遵从 flex container 的 align-items 设置
- stretch、flex-start、flex-end、center、baseline，效果跟 align-items 一致

### flex-grow

决定了 flex items 如何扩展(拉伸/成长)

- 可以设置任意非负数字（正小数、正整数、0），默认值是 0
- 当 flex container 在主轴方向上有剩余 size 时，flex-grow 属性才会有效
  - 如果所有 flex items 的 flex-grow 总和 sum 超过 1，每个 flex item 扩展的 size 为
- flex container 的剩余 size \* flex-grow / sum

<!-- ![flex-grow](/img/web/css/flex-grow.jpg) -->

### flex-shrink

flex-shrink 决定了 flex items 如何收缩(缩小)

- 可以设置任意非负数字（正小数、正整数、0），默认值是 1
- 当 flex items 在主轴方向上超过了 flex container 的 size，flex-shrink 属性才会有效
  - 如果所有 flex items 的 flex-shrink 总和超过 1，每个 flex item 收缩的 size 为
- flex items 超出 flex container 的 size \* 收缩比例 / 所有 flex items 的收缩比例之和

flex items 收缩后的最终 size 不能小于 min-width\min-height

### flex-basis

- flex-basis 用来设置 flex items 在主轴方向上的 基础尺寸（会被内容拉伸）
  - auto（默认值）、具体的宽度数值（100px）
- 决定 flex items 最终 base size 的因素，从优先级高到低
  - max-width\max-height\min-width\min-height
  - flex-basis
  - width\height
  - 内容本身的 size

### flex 属性

flex 是 flex-grow || flex-shrink || flex-basis 的简写,flex 属性可以指定 1 个，2 个或 3 个值。

```js
flex = none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

### 思考: 如下布局如何解决对其问题

![flex-grow](/img/web/css/wenti.jpg)
往后面加（列数-2 个）span 填充
