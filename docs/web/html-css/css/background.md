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

## css sprite

- 是一种 CSS 图像合成技术，将各种小图片合并到一张图片上，然后利用 CSS 的背景定位来显示对应的图片部分
- 有人翻译为：CSS 雪碧、CSS 精灵

优点

- 减少网页的 http 请求数量，加快网页响应速度，减轻服务器压力
- 减小图片总大小
- 解决了图片命名的困扰，只需要针对一张集合的图片命名

制作方式

1. Photoshop
2. [在线工具](https://www.toptal.com/developers/css/sprite-generator)

### 使用

- 精灵图的原理是通过只显示图片的很小一部分来展示的;
- 通常使用背景:

  1. 设置对应元素的宽度和高度
  2. 设置精灵图作为背景图片
  3. 调整背景图片的位置来展示

```css
// 案例
.sprite {
  background: url('./img/sprite.png') no-repeat -100px 50px;
  width: 20px;
  height: 13px;
}
```

- [获取精灵图的位置](http://www.spritecow.com/)
