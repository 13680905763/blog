# 过渡动画

## transition

transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的
一个简写属性。

- transition-property：指定应用过渡属性的名称
  - 可以写 all 表示所有可动画的属性
  - 属性是否支持动画查看文档
- transition-duration：指定过渡动画所需的时间
  - 单位可以是秒（s）或毫秒（ms）
- transition-timing-function：指定动画的[变化曲线](https://developer.mozilla.org/zh-CN/docs/Web/CSS/)
- transition-delay：指定过渡动画执行之前的等待时间

## 关键帧动画

transition 来进行过渡动画，但是过渡动画只能控制首尾两个值：

- 从关键帧动画的角度相当于只是定义了两帧的状态：第一帧和最后一帧。
- 如果我们希望可以有更多状态的变化，可以直接使用关键帧动画。

关键帧动画使用@keyframes 来定义多个变化状态，并且使用 animation-name 来声明匹配：

1. 使用 @keyframes 创建一个规则
2. @keyframes 中使用百分比定义各个阶段的样式
3. 通过 animation 将动画添加到属性上

另外，也可以使用 from 和 to 关键字：

- from 相当于 0%
- to 相当于 100%

### animation

CSS animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。

- animation-name：指定执行哪一个关键帧动画
- animation-duration：指定动画的持续时间
- animation-timing-function：指定动画的变化曲线
- animation-delay：指定延迟执行的时间
- animation-iteration-count：指定动画执行的次数，执行 infinite 表示无限动画
- animation-direction：指定方向，常用值 normal 和 reverse
- animation-fill-mode：执行动画最后保留哪一个值
  - none：回到没有执行动画的位置
  - forwards：动画最后一帧的位置
  - backwards：动画第一帧的位置
- animation-play-state：指定动画运行或者暂停（在 JavaScript 中使用，用于暂停动画）
