# less

- Less （Leaner Style Sheets 的缩写） 是一门 CSS 扩展语言, 并且兼容 CSS。
  - Less 增加了很多相比于 CSS 更好用的特性;
  - 比如定义变量、混入、嵌套、计算等等；
  - Less 最终需要被编译成 CSS 运行于浏览器中（包括部署到服务器中）；

## 语法

### 变量

@变量名: 变量值;

```less
@themeColor: #f3c258;
.body {
  color: @themeColor;
}
```

### 嵌套

选择器的嵌套

```html
<div class="box">
  <h1 class="title">title</h1>
  <p class="content">
    i am content
    <a class="link" href="#">link</a>
    <span class="description">description</span>
  </p>
</div>
```

```less
.box {
  .title {
    color: black;
  }
  .content {
    .link {
      font-size: 20px;
    }
    .description:hover {
      color: red;
    }
  }
}
```

特殊符号：& 表示当前选择器的父级

### 运算

Less 中，算术运算符 + - \* / 可以对任何数字、颜色或变量进行运算。

- 算术运算符在加、减或比较之前会进行单位换算，计算的结果以最左侧操作数的单位类型为准；
- 如果单位换算无效或失去意义，则忽略单位；

```less
.box {
  height: 100px+10%;
  background: #ff0000 + #00ff00;
}
```

### 混合

多个选择器中可能会有大量相同的代码

- 我们希望可以将这些代码进行抽取到一个独立的地方，任何选择器都可以进行复用；
- 在 less 中提供了混入（Mixins）来帮助我们完成这样的操作；

混合（Mixin）是一种将一组属性从一个规则集（或混入）到另一个规则集的方法。

```less
.bordered1 {
  border-top: 2px solid #f00;
}
.bordered2(@borderWidth) {
  border-top: @borderWidth solid #f00;
}
.container {
  .bordered1();
}
.box {
  .bordered2(5px);
}
```

注意：混入在没有参数的情况下，小括号可以省略，但是不建议这样使用；

### 映射

```less
.colors {
  primarycolor: #f00;
  secondcolor: #0f0x;
}

.box {
  color: .colors[primarycolor];
  background-color: .colors() [secondcolor];
}
```

混入和映射结合：混入也可以当做一个自定义函数来使用

```less
.pxToRem(@px) {
  result: (@px / @htmlFontSize) * 1rem;
}
.box {
  width: .pxToRem(100) [result];
  font-size: .pxToRem(18) [result];
}
```

### 继承

- 和 mixins 作用类似，用于复用代码；
- 和 mixins 相比，继承代码最终会转化成并集选择器；

```less
.bordered {
  border-top: 2px solid #f00;
}

.box {
  &:extend(.bordered);
}
```

```css
.bordered,
.box {
  border-top: 2px solid #f00;
}
```

### Less 内置函数

Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。
[内置函数手册](https://less.bootcss.com/functions/)

### 作用域

- 在查找一个变量时，首先在本地查找变量和混合（mixins）；
- 如果找不到，则从“父”级作用域继承；

```less
.box {
  .inner {
    font-size: @fontSize;
  }
  @fontSize: 20px;
}
```

### 注释

在 Less 中，块注释和行注释都可以使用；

### 导入

- 导入的方式和 CSS 的用法是一致的；
- 导入一个 .less 文件，此文件中的所有变量就可以全部使用了；
- 如果导入的文件是 .less 扩展名，则可以将扩展名省略掉；
