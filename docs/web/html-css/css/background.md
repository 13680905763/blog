# background

## background-image

用于设置元素的背景图片

- 会盖在 background-color 的上面

如果设置了多张图片

- 设置的第一张图片将显示在最上面，其他图片按顺序层叠在下面

注意：元素没有具体的宽高，背景图片是不会显示出来的

### background-image 和 img 对比

![background-image](/img/web/css/background/background-image.jpg)

- img，作为网页内容的重要组成部分，比如广告图片、LOGO 图片、文章配图、产品图片
- background-image，可有可无。有，能让网页更加美观。无，也不影响用户获取完整的网页内容信息

## background-repeat

设置背景图片是否要平铺

- repeat：平铺
- no-repeat：不平铺
- repeat-x：只在水平方向平铺
- repeat-y：只在垂直平方向平铺

## background-size

设置背景图片的大小

- auto：默认值, 以背景图本身大小显示
- cover：缩放背景图，以完全覆盖铺满元素,可能背景图片部分看不见
- contain：缩放背景图，宽度或者高度铺满元素，但是图片保持宽高比
- \<percentage>：百分比，相对于背景区（background positioning area）
- length：具体的大小，比如 100px

## background-position

设置背景图片在水平、垂直方向上的具体位置

- 可以设置具体的数值 比如 20px 30px;
- 水平方向还可以设值：left、center、right
- 垂直方向还可以设值：top、center、bottom

![background-position](/img/web/css/background/background-position.jpg)

## [background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)

决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。

## [background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background#%E6%A0%87%E5%87%86%E8%AF%AD%E6%B3%95)简写属性
