# transform

transform 属性允许你旋转，缩放，倾斜或平移给定元素。

- Transform 是形变的意思，transformer 就是变形金刚

常见的函数 transform function 有：

- 平移：translate(x, y)
- 缩放：scale(x, y)
- 旋转：rotate(deg)
- 倾斜：skew(deg, deg)

## translate

平移：translate(x, y)

- 值个数
  - 一个值时，设置 x 轴上的位移
  - 二个值时，设置 x 轴和 y 轴上的位移
- 值类型：
  - 数字：100px
  - 百分比：参照元素本身（ refer to the size of bounding box ）

![translate](/img/web/css/transform/translate.jpg)

## scale

缩放：scale(x, y)

- 值个数
  - 一个值时，设置 x 轴上的缩放
  - 二个值时，设置 x 轴和 y 轴上的缩放
- 值类型：
  - 数字：
    - 1：保持不变
    - 2：放大一倍
    - 0.5：缩小一半
  - 百分比：不支持百分比

![scale](/img/web/css/transform/scale.jpg)

## transform-origin

- transform-origin：变形的原点
- 一个值：
  - 设置 x 轴的原点
- 两个值：
  - 设置 x 轴和 y 轴的原点
- 必须是\<length>，\<percentage>，或 left, center, right, top, bottom 关键字中的一个
  - left, center, right, top, bottom 关键字
  - length：从左上角开始计算
  - 百分比：参考元素本身大小

```css
transform-origin: top left;
```

![transform-origin](/img/web/css/transform/transform-origin.jpg)

## rotate

旋转：rotate(deg)

- 值个数
  - 一个值时，表示旋转的角度
- 值类型：
  - deg：旋转的角度
  - 正数为顺时针
  - 负数为逆时针
- 注意：旋转的原点受 transform-origin 的影响

![rotate](/img/web/css/transform/rotate.jpg)

## skew

旋转：skew(x, y)

- 值个数
  - 一个值时，表示 x 轴上的倾斜
  - 二个值时，表示 x 轴和 y 轴上的倾斜
- 值类型：
  - deg：旋转的角度
  - 正数为顺时针
  - 负数为逆时针
- 注意：旋转的原点受 transform-origin 的影响

![skew](/img/web/css/transform/skew.jpg)
