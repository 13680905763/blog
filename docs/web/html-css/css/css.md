# HELLO CSS

## what is css

CSS 表示**层叠样式表**（Cascading Style Sheet）是为网页添加样式的代码。
CSS 是一种计算机语言,它是一门样式表语言,不是一种编程语言；

## [CSS 历史](https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8#%E5%8E%86%E5%8F%B2)

最初的 html 只呈现标题和段落内容，不同的浏览器有不同的样式表，用户使用这些样式语言自己调节网页的显示样式，最初的样式表是给用户用的

为了满足页面设计者，html 增加了很多特殊样式的元素，比如 strong、i、del 等等，但是越加越多，HTML 变的越来越乱，页面也越来越臃肿。

于是 CSS 出现了

1994 年，哈肯·维姆·莱和伯特·波斯合作设计 CSS

1996 年的时候发布了 CSS1

1997 年初，W3C 成立了 CSS 工作组

1998 年 5 月发布了 CSS2；

2006-2009 年，‘div+css’ 布局逐步取代缺乏灵活性的传统表格布局，无表格网页设计成为网页内容布局的主流方案，也出现了一些为了跟风而滥用 DIV 布局的情况，比如将**h1**等本身已有语义的标签也改用 div 替代。

由于 css 的东西太多了（文本/字体/布局/背景...） 想要更新一个大版本不可能等到所有东西都更新了才发布，所以 css 开始模块化的进行更新

2011 年 css3 color module 发布

总结：CSS 的出现是为了美化 HTML 的，并且让结构（HTML）与样式（CSS）分离；

- 为 HTML 添加各种各样的样式，比如颜色、字体、大小、下划线等等；
- 对 HTML 进行布局，按照某种结构显示（CSS 进行布局 – 浮动、flex、grid）；

## How to use css

CSS 提供了 3 种方法，可以将 CSS 样式应用到元素上：

- 内联样式（inline style）：写在 html 元素的 style 属性上，css 样式之间用分号隔开
- 内部样式表（internal style sheet）将 css 放在 html\<head>元素里的\<style>元素之中
- 外部样式表（external style sheet）css 编写在一个独立文件中，通过\<link>元素引入进来
  
## @import

可以在 style 元素或者 CSS 文件中使用@import 导入其他的 CSS 文件

```css
@import url(./reset.css);
```

通常在 index.css 引入别的 css,index.html 在引入 index.css
 
[拓展]index 索引，通常作为入门文件

## CSS 的注释

/\* 注释内容 \*/
