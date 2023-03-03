# 移动端适配

- 移动端开发目前主要包括三类：
  - 原生 App 开发（iOS、Android、RN、uniapp、Flutter 等）
  - 小程序开发（原生小程序、uniapp、Taro 等）
  - Web 页面（移动端的 Web 页面，可以使用浏览器或者 webview 浏览）
- 因为目前移动端设备较多，所以我们需要对其进行一些适配。
- 这里有两个概念：
  - 自适应：根据不同的设备屏幕大小来自动调整尺寸、大小；
  - 响应式：会随着屏幕的实时变动而自动调整，是一种自适应；

![移动端适配](/img/web/css/移动端适配/移动端屏幕.jpg)

## viewport

### pc 端

- 在一个浏览器中，我们可以看到的区域就是视口（viewport）；
- 我们说过 fixed 就是相对于视口来进行定位的；
- 在 PC 端的页面中，我们是不需要对视口进行区分，因为我们的布局视口和视觉视口是同一个；

## 移动端

- 在移动端，不太一样，你布局的视口和你可见的视口是不太一样的。
  - 这是因为移动端的网页窗口往往比较小，我们可能会希望一个大的网页在移动端可以完整的显示；
  - 所以在默认情况下，移动端的布局视口是大于视觉视口的；
- 在移动端，视口划分为三种情况：
  - 布局视口（layout viewport）
  - 视觉视口（visual layout）
  - 理想视口（ideal layout）
- 这些[概念](https://www.quirksmode.org/mobile/viewports2.html)的区分，事实上来自 ppk，（特别是在移动端浏览器）

### 布局视口和视觉视口

- 布局视口（layout viewport）
- 默认情况下，一个在 PC 端的网页在移动端会如何显示呢？
  1. 它会按照宽度为 980px 来布局一个页面的盒子和内容；
  2. 为了显示可以完整的显示在页面中，对整个页面进行缩小；
- 我们相对于 980px 布局的这个视口，称之为布局视口（layout
  viewport）；
  - 布局视口的默认宽度是 980px；
- 视觉视口（visual viewport）
  - 如果默认情况下，我们按照 980px 显示内容，那么右侧有一部分区域
    就会无法显示，所以手机端浏览器会默认对页面进行缩放以显示到用
    户的可见区域中；
  - 那么显示在可见区域的这个视口，就是视觉视口（visual viewport）
- 在 Chrome 上按 shift+鼠标左键可以进行缩放。

![布局&视觉视口](/img/web/css/移动端适配/布局&视觉视口.jpg)

### 理想视口

- 如果所有的网页都按照 980px 在移动端布局，那么最终页面都会被缩放显示。

  - 事实上这种方式是不利于我们进行移动的开发的，我们希望的是设置 100px，那么显示的就是 100px；
  - 如何做到这一点呢？通过设置理想视口（ideal viewport）；

    ![ideal-viewport](/img/web/css/移动端适配/ideal-viewport.jpg)

- 理想视口（ideal viewport）：
  - 默认情况下的 layout viewport 并不适合我们进行布局；
  - 我们可以对 layout viewport 进行宽度和缩放的设置，以满足正常在一个移动端窗口的布局；
  - 这个时候可以设置 meta 中的 viewport；

![meta-viewport](/img/web/css/移动端适配/meta-viewport.jpg)

## 移动端适配方案

- 移动端的屏幕尺寸通常是非常繁多的，很多时候我们希望在不同的屏幕尺寸上显示不同的大小；
  - 比如我们设置一个 100x100 的盒子
    - 在 375px 的屏幕上显示是 100x100;
    - 在 320px 的屏幕上显示是 90+x90+;
    - 在 414px 的屏幕上显示是 100+x100+;
  - 其他尺寸也是类似，比如 padding、margin、border、left，甚至是 font-size 等等；
- 这个时候，我们可能可以想到一些方案来处理尺寸：
  1. 百分比设置；
     - 因为不同属性的百分比值，相对的可能是不同参照物，所以百分比往往很难统一；
     - 所以百分比在移动端适配中使用是非常少的；
  2. rem 单位+动态 html 的 font-size；
  3. vw 单位；
  4. flex 的弹性布局；

### rem+动态 html 的 font-size

- rem 单位是相对于 html 元素的 font-size 来设置的，那么如果我们需要在不同的屏幕下有不同的尺寸，可以动态的修改 html 的
  font-size 尺寸。
- 案例：
  1. 设置一个盒子的宽度是 2rem；
  2. 设置不同的屏幕上 html 的 font-size 不同；

![rem+font-size](/img/web/css/移动端适配/rem+font-size.jpg)

我们只需要考虑两个问题：

1. 针对不同的屏幕，设置 html 不同的 font-size；
2. 将原来要设置的尺寸，转化成 rem 单位；

#### rem 的 font-size 尺寸

1. 媒体查询
   - 可以通过媒体查询来设置不同尺寸范围内的屏幕 html 的 font-size 尺寸；
   - 缺点：
     1. 我们需要针对不同的屏幕编写大量的媒体查询；
     2. 如果动态改变尺寸，不会实时的进行更新；
        ![rem媒体查询](/img/web/css/移动端适配/rem媒体查询.jpg)
2. 编写 js 代码
   - 如果希望实时改变屏幕尺寸时，font-size 也可以实时更改，可以通过 js 代码；
   - 方法：
     1. 根据 html 的宽度计算出 font-size 的大小，并且设置到 html 上；
     2. 监听页面的实时改变，并且重新设置 font-size 的大小到 html 上；
        ![remjs](/img/web/css/移动端适配/remjs.jpg)
3. lib-flexible 库
   - 事实上，lib-flexible 库做的事情是相同的，你也可以直接引入它；

#### rem 的单位换算

1. 手动换算
   - 比如有一个在 375px 屏幕上，100px 宽度和高度的盒子；
   - 我们需要将 100px 转成对应的 rem 值；
   - 100/37.5=2.6667，其他也是相同的方法计算即可；
2. less/scss 函数

   ```less
   .pxToRem(@px) {
     result: (@px / @htmlFontSize) * 1rem;
   }
   .box {
     width: .pxToRem(100) [result];
     font-size: .pxToRem(18) [result];
   }
   ```

3. postcss-pxtorem
   - 目前在前端的工程化开发中，借助于 webpack 的工具来完成自动的转化；
4. VSCode 插件
   - px to rem 的插件，在编写时自动转化；
     ![rem-vscode](/img/web/css/移动端适配/rem-vscode.jpg)

### vw

#### vw 和 rem 的对比

- rem 事实上是作为一种过渡的方案，它利用的也是 vw 的思想。
  - 前面不管是我们自己编写的 js，还是 flexible 的源码；
  - 都是将 1rem 等同于设计稿的 1/10，在利用 1rem 计算相对于整个屏幕的尺寸大小；
  - 那么我们来思考，1vw 不是刚好等于屏幕的 1/100 吗？
  - 而且相对于 rem 还更加有优势；
- vw 相比于 rem 的优势：
  1. 不需要去计算 html 的 font-size 大小，也不需要给 html 设置这样一个 font-size；
  2. 不会因为设置 html 的 font-size 大小，而必须给 body 再设置一个 font-size，防止继承；
  3. 因为不依赖 font-size 的尺寸，所以不用担心某些原因 html 的 font-size 尺寸被篡改，页面尺寸混乱；
  4. vw 相比于 rem 更加语义化，1vw 刚才是 1/100 的 viewport 的大小;
  5. 可以具备 rem 之前所有的优点；
- vw 我们只面临一个问题，将尺寸换算成 vw 的单位即可；
- 所以，目前相比于 rem，更加推荐大家使用 vw（但是理解 rem 依然很重要）

#### vw 的单位换算

1. 手动换算
   - 比如有一个在 375px 屏幕上，100px 宽度和高度的盒子；
   - 我们需要将 100px 转成对应的 vw 值；
   - 100/3.75=26.667，其他也是相同的方法计算即可；
2. less/scss 函数

   ```less
   @vwUnit: 3.75;
   .pxToVw(@px) {
     result: (@px / @vwUnit) * 1vw;
   }
   .box {
     width: .pxToVw(100) [result];
     height: .pxToVw(100) [result];
   }
   ```

3. postcss-px-to-viewport-8-plugin（后续学习）
   - 和 rem 一样，在前端的工程化开发中，借助于 webpack 的工具来完成自动的转化；
4. VSCode 插件
   - px to vw 的插件，在编写时自动转化；
     ![vw-vscode](/img/web/css/移动端适配/vw-vscode.jpg)
