# css-function

CSS 函数通常可以帮助我们更加灵活的来编写样式的值；

- 比如 rgb/rgba/translate/rotate/scale

再学习几个非常好用的 CSS 函数

- var: 使用 CSS 定义的变量;
- calc: 计算 CSS 值, 通常用于计算元素的大小或位置;
- blur: 毛玻璃(高斯模糊)效果;
- gradient：颜色渐变函数；

## var

CSS 中可以自定义属性

- 属性名需要以两个减号（--）开始;
- 属性值则可以是任何有效的 CSS 值;

```css
div {
  --base-color: red;
}
span {
  color: var(--base-color);
}
```

规则集定义的选择器, 是自定义属性的可见作用域(只在选择器内部有效)

- 推荐将自定义属性定义在 html 中，也可以使用 :root 选择器;

## calc

calc() 函数允许在声明 CSS 属性值时执行一些计算。

- 计算支持加减乘除的运算；
  - \+ 和 - 运算符的两边必须要有空白字符。
- 通常用来设置一些元素的尺寸或者位置；

```css
.box {
  width: calc(100%-60px);
}
```

## blur

blur() 函数将高斯模糊应用于输出图片或者元素;

- blur(radius)
- radius, 模糊的半径, 用于定义高斯函数的偏差值, 偏差值越大, 图片越模糊;
  - 通常会和两个属性一起使用：
- filter: 将模糊或颜色偏移等图形效果应用于元素;
- backdrop-filter: 为元素后面的区域添加模糊或者其他效果;

## gradient

- gradient 用于表现两种或多种颜色的过渡转变。
  - CSS 的 image 数据类型描述的是 2D 图形；
  - 比如 background-image、list-style-image、border-image、content 等；
  - image 常见的方式是通过 url 来引入一个图片资源；
  - 它也可以通过 CSS 的 gradient 函数来设置颜色的渐变；
- gradient 常见的函数实现有下面几种：
  - linear-gradient()：创建一个表示两种或多种颜色线性渐变的图片；
  - radial-gradient()：创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成；
  - repeating-linear-gradient()：创建一个由重复线性渐变组成的 image；
  - repeating-radial-gradient()：创建一个重复的原点触发渐变组成的 image；
  - 等等；

### 使用

linear-gradient：创建一个表示两种或多种颜色线性渐变的图片；

```css
background-image: linear-gradient(blue, red);
background-image: linear-gradient(to right, blue, red);
background-image: linear-gradient(to right bottom, blue, red);
background-image: linear-gradient(45deg, blue, red);
background-image: linear-gradient(to right, blue, red 10%, purple 40px, orange);
```

radial-gradient：创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成；

```css
background-image: radial-gradient(blue, red);
background-image: radial-gradient(at 0% 50%, blue, red);
```
