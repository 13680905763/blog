# CSS selectors

## css 选择器

按照一定的规则选出符合条件的元素，为之添加 CSS 样式

1. 通用选择器（universal selector）
2. 元素选择器（type selectors）
3. 类选择器（class selectors）
4. id 选择器（id selectors）
5. 属性选择器（attribute selectors）
6. 组合（combinators）
7. 伪类（pseudo-classes）
8. 伪元素（pseudo-elements）

### 通用选择器

\* 所有的元素都会被选中;

一般用来给所有元素作一些通用性的设置

- 比如内边距、外边距;
- 比如重置一些内容;

<!-- [大多数浏览器会遍历 html 所有的元素遍历设置（浪费性能，不建议怎么做）] -->

### 简单选择器

1. 元素选择器（type selectors）, 使用元素的名称;
2. 类选择器（class selectors）, 使用 .类名 ;
3. id 选择器（id selectors）, 使用 #id;（**唯一的**）

[建议]多个单词的命名用短横线（连字符）命名（好看）

### 属性选择器

拥有某一个属性 [att],属性等于某个值 [att=val]

了解以下

- \[attr\*=val]: 属性值包含某一个值 val;
- \[attr^=val]: 属性值以 val 开头;
- \[attr$=val]: 属性值以 val 结尾;
- \[attr|=val]: 属性值等于 val 或者以 val 开头后面紧跟连接符-;
- \[attr~=val]: 属性值包含 val, 如果有其他值必须以空格和 val 分割;

### 组合

#### 后代选择器

1. 所有的后代(直接/间接的后代)，选择器之间以**空格**分割
2. 直接子代选择器(必须是直接自带)，选择器之间以 **>** 分割;

#### 兄弟选择器

1. **相邻**兄弟选择器：使用符号 + 连接
2. **普遍**兄弟选择器：使用符号 ~ 连接

#### 交集/并集选择器

- 交集选择器: 需要同时符合两个选择器条件(两个选择器紧密连接)
- 并集选择器: 符合一个选择器条件即可(两个选择器以,号分割)

### 伪类

伪类是选择器的一种，它用于选择处于特定状态的元素;
常见的伪类有

#### 动态伪类

- :link
- :visited
- :**hover**
- :active
- :focus

#### 目标伪类

- :target

#### 语言伪类

- :lang()

#### 元素状态伪类

- :enabled
- :disabled
- :checked

#### 结构伪类

- :nth-child( )

```css
:nth-child(1) // 父元素中的第 1 个子元素
:nth-child(2n/even) //是父元素中的第偶数个子元素(n是任意正整数和 0)
:nth-child(2n + 1/odd) // 是父元素中的第奇数个子元素
:nth-child(-n + 2) // 代表前 2 个子元素

```

- :nth-last-child( )
  - 跟:nth-child()类似，从最后一个子元素开始往前计数
- :nth-of-type( )
  - 跟:nth-child()类似，只计算同种类型的元素
- :nth-last-of-type( )
  - 跟:nth-of-type()类似，从最后一个子元素开始往前计数
- 其他常见的伪类(了解):
  - :first-child，等同于:nth-child(1)
  - :last-child，等同于:nth-last-child(1)
  - :first-of-type，等同于:nth-of-type(1)
  - :last-of-type，等同于:nth-last-of-type(1)
  - :only-child，是父元素中唯一的子元素
  - :only-of-type，是父元素中唯一的这种类型的子元素
- 偶尔会使用的伪类:
  - :root，根元素，就是 HTML 元素
  - :empty 代表里面完全空白的元素

#### 否定伪类

:not(x) 除 x 以外的元素

- x 是一个简单选择器
- 元素选择器、通用选择器、属性选择器、类选择器、id 选择器、伪类（除否定伪类）

[所有伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

### 伪元素

常用的伪元素有

- :first-line、::first-line
- :first-letter、::first-letter
- :before、**::before**
- :after、**::after**

为了区分伪元素和伪类，建议伪元素使用 2 个冒号

- ::first-line 可以针对首行文本设置属性
- ::first-letter 可以针对首字母设置属性

::before 和::after 用来在一个元素的内容之前或之后插入其他内容（可以是文字、图片)通过 content 属性来为一个元素添加修饰性的内容。

[注意]content 不能省去，生成的是行内非替换元素
