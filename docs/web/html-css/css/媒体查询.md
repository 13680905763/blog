# 媒体查询

- 媒体查询是一种提供给开发者针对不同设备需求进行定制化开发的一个接口。
- 你可以根据设备的类型（比如屏幕设备、打印机设备）或者特定的特性（比如屏幕的宽度）来修改你的页面。

媒体查询的使用方式主要有三种：

1. 通过@media 和@import 使用不同的 CSS 规则（常用）；

   ```css
   @import url(./css/minScreen.css) (max-width: 600px);
   ```

2. 使用 media 属性为\<style>, \<link>,\<source>和其他 HTML 元素指定特定的媒体类型；

   ```html
   <link rel="stylesheet" href="./css/minScreen.css" media=(max-width:600px)">
   ```

3. 使用 Window.matchMedia() 和 MediaQueryList.addListener() 方法来测试和监控媒体状态；

- 比较常用的是通过@media 来使用不同的 CSS 规则，目前掌握这个即可；

## 媒体类型

- 在使用媒体查询时，你必须指定要使用的媒体类型。
  - 媒体类型是可选的，并且会（隐式地）应用 all 类型。
- 常见的媒体类型值如下：
  - all：适用于所有设备。
  - print：适用于在打印预览模式下在屏幕上查看的分页材料和文档。
  - screen（掌握）：主要用于屏幕。
  - speech：主要用于语音合成器。

## 媒体特性

媒体特性（Media features）描述了 浏览器、输出设备，或是预览环境的具体特征；

- 通常会将媒体特性描述为一个表达式；
- 每条媒体特性表达式都必须用括号括起来；

![媒体特性](/img/web/css/媒体查询/媒体特性.jpg)

## 逻辑操作符

- 媒体查询的表达式最终会获得一个 Boolean 值，也就是真（true）或者假（false）。
  - 如果结果为真（true），那么就会生效；
  - 如果结果为假（false），那么就不会生效；
- 如果有多个条件，我们可以通过逻辑操作符联合复杂的媒体查询：
  - and：and 操作符用于将多个媒体查询规则组合成单条媒体查询
  - not：not 运算符用于否定媒体查询，如果不满足这个条件则返回 true，否则返回 false。
  - only：only 运算符仅在整个查询匹配时才用于应用样式。
  - , (逗号)：逗号用于将多个媒体查询合并为一个规则。
- 比如下面的媒体查询，表示：屏幕宽度大于 500，小于 700 的时候，body 背景颜色为红色；

```css
/* 屏幕宽度大于500，小于700的时候，body背景颜色为红色 */
@media screen and (min-width: 500px) and (max-width: 700px) {
  body {
    background-color: red;
  }
}
```
