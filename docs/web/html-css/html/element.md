# what is element？

## Element

我们知道 HTML 本质上是由一系列的元素（Element）构成的；
那么什么是元素呢？

- 元素是网页的一部分；
- 一个元素可以包含一个数据项，或是一块文本，或是一张照片，亦或是什么也不包含；

[查看 HTML 所有元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

## 元素的组成

![元素组成](/img/web/html/element.jpg)

- 开始标签（Opening tag）
- 结束标签（Closing tag）
- 内容（Content）
- 元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。

## 元素的属性

元素也可以拥有属性(Attribute)

![属性](/img/web/html/attribute.jpg)

属性的分类

- 有些属性是[公共的](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8)，每一个元素都可以设置

  比如 class、id、title 属性

- 有些属性是元素特有的，不是每一个元素都可以设置

  比如 meta 元素的 charset 属性、img 元素的 alt 属性等

## 元素的嵌套关系

元素的内容除了可以是文本之外，还可以去其他元素，这样就形成了**元素的嵌套**。

![元素的嵌套](/img/web/html/element-nesting.jpg)

## html 元素

```html
<html lang="zh-CN"></html>
```

\<html> 元素 表示一个 HTML 文档的**根**（顶级元素），所以它也被称为**根元素**。

- 其他元素必须是此元素的后代。

W3C 标准建议为 html 元素增加一个 lang 属性，作用是

- 帮助语音合成工具确定要使用的发音;
- 帮助翻译工具确定要使用的翻译规则;

比如常用的规则：

- lang=“en”表示这个 HTML 文档的语言是英文；
- lang=“zh-CN”表示这个 HTML 文档的语言是中文；

## head 元素

head 元素 规定文档相关的**配置信息**（也称之为元数据），包括**文档的标题，引用的文档样式**和**脚本**等。

- 什么是元数据（meta data），是描述数据的数据；
- 这里我们可以理解成对**整个页面的配置**

### title 元素

```html
<title>Document</title>
```

### meta 元素

1. **charset** 属性，meta 元素是一个字符集声明，告诉文档使用哪种[字符编码](/computer/#字符编码)。
   - 让浏览器更精准地显示每一个文字，不设置或设置错误会导致乱码
2. **http-equiv** 属性，meta 元素则是编译指令。
   - 告知 IE 浏览器去模仿哪一个浏览器的行为；
   - IE=edge，告知 IE8 区使用最高有效模式来模仿；
3. **name** 属性，meta 元素提供的是文档级别（document-level）的元数据，应用于整个页面
   - robots：爬虫、协作搜寻器，或者 “机器人”，对此页面的处理行为，或者说，应当遵守的规则。
   - author：文档作者的名字。
   - Copyright：版权声明；
   - description：一段简短而精确的、对页面内容的描述。比如 Firefox 和 Opera，将其用作书签的默认描述。
   - keywords：与页面内容相关的关键词，使用逗号分隔。某些搜索引擎会进行收录；
   - [更多](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name)

![head](/img/web/html/head.jpg)

### link 元素

- 是外部资源链接，规范了文档与外部资源的关系
- 最常用的链接是 css，也可以被用来创建 favicon 图标
- rel 指定链接类型
- href 指定被链接资源的 url

```html
<link rel="stylesheet" href="./index.css" />
```

## body 元素

body 元素里面的内容将是你**在浏览器窗口中看到的东西**，也就是**网页的具体内容和结构**。

## 常用的元素

### h 元素

- **h1-h6**元素表示了六个不同的级别的**标题**
- _h 元素通常和 **SEO** 优化有关系_ .

### p 元素

- p 元素表示一个文本的**段落**。
- p 元素是 paragraph 单词的缩写，是段落、分段的意思；
- p 元素多个段落之间会有一定的间距 (上下外边距，bfc 会合并)；

### img 元素

#### img 元素将一份图像嵌入文档

- img 是 image 单词的所以，是图像、图像的意思；
- 事实上 img 是一个[可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)（ replaced element ）；

[拓展]img 不设置 src 时，在浏览器的表现为占据一定位置

![img](/img/web/html/img.jpg)

设置 src 后，浏览器会去请求 src 的图片，将图片下载到本地，浏览器帮把 img 占据的位置替换成图片

#### img 两个常见的属性

1. src 属性：source 单词的缩写，表示源
   - 是必须的，它包含了你想嵌入的图片的文件路径。
2. alt 属性：不是强制性的，有两个作用
   - 当图片加载不成功（错误的地址或者图片资源不存在），那么会显示这段文本；
   - 屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义；

#### 图片的路径

设置 img 的 src 时，需要给图片设置路径：

- 网络图片：一个 URL 地址（网络图片的设置非常简单，给一个地址即可）；
- 本地图片：本地电脑上的图片，后续会和 html 一起部署到服务；

#### 本地图片的路径有两种方式

1. 绝对路径（几乎不用）；
   - 从电脑的根目录开始一直找到资源的路径；
2. 相对路径（常用）；
   - 相当于当前文件的一个路径；
   - . 代表当前文件夹（1 个点），可以省略
   - .. 代表上级文件夹（2 个点）

_注意：不管什么操作系统（Windows、Mac、Linux），路径分隔符都是 /，而不是\\_ ^\_^

**img 元素支持的图片格式非常多** .

### a 元素

a 元素（anchor 锚):**超链接**，用于打开新的 URL；

#### a 元素有两个常见的属性

1. href：Hypertext（超文本）Reference（引用）的简称

   - 指定要打开的 URL 地址；
   - 也可以是一个本地地址；

2. target：该属性指定在何处显示链接的资源

   - \_self：默认值，在当前窗口打开 URL；
   - \_blank：在一个新的窗口中打开 URL；
   - 其他不常用, 后面 iframe 可以讲一下；

#### 锚点链接

锚点链接可以实现：跳转到网页中的具体位置

锚点链接有两个重要步骤：

1. 在要跳到的元素上定义一个 id 属性；
2. 定义 a 元素，并且 a 元素的 href 指向对应的 id

```html
<a href="#one">段落一</a>
<p id="one">段落一</p>
```

img 元素跟 a 元素一起使用，可以实现图片链接；

```html
<a href=""><img src="" /></a>
```

#### 其他 URL

a 元素还可以用来下载东西、发送邮件

```html
<!-- 指向：zip压缩包 -->
<a href="https://github.com/13680905763/blog/archive/refs/heads/main.zip"></a>
<!-- 指向其他协议地址：mailto ，会让系统打开邮件的app-->
<a href="mailto:177748749@qq.com"></a>
```

### iframe 元素

iframe 元素可以实现**在一个 HTML 文档中嵌入其他 HTML 文档**
src 属性指定链接地址
frameborder 属性用于规定是否显示边框

- 1：显示
- 0：不显示

a 元素 target 的其他值:

- \_parent：在 iframe 父窗口中打开 URL
- \_top：在 iframe 顶层窗口中打开 URL

_[拓展] ：如果不想被套，在 Response Headers 里加`X-Frame-Options: sameorigin`,表示该地址只在同源的页面被请求_ .

### div 元素 和 span 元素

div 元素(division)：，分开、分配的意思；
span 元素：跨域、涵盖的意思；

div 元素和 span 元素都是“**容器**”，也可以理解成“**盒子**”，它们都是用来**包裹内容**的；

- div 元素：多个 div 元素包裹的内容会在**不同的行**显示；
  - 一般作为其他元素的父容器，把其他元素包住，代表一个整体
  - 用于把网页分割为多个独立的部分
- span 元素：多个 span 元素包裹的内容会在**同一行**显示；
  - 默认情况下，跟普通文本几乎没差别
  - 用于区分特殊文本和普通文本，比如用来显示一些关键字

### 不常用元素

strong 元素：内容加粗、强调；

- 通常加粗会使用 css 样式来完成；
- 开发中很偶尔会使用一下；

i 元素：内容倾斜；

- 通常斜体会使用 css 样式来完成；
- 开发中偶尔会用它来做字体图标（因为看起来像是 icon 的缩写）；

code 元素：用于显示代码

- 偶尔会使用用来显示等宽字体；

br 元素：换行元素

- 开发中已经不使用

### 元素语义化

**用正确的元素做正确的事**理论上来说我们可以用 div/span + css 实现所有样式
![img](/img/web/html/语义化.jpg)
但是我们不要怎么做，因为语义化是有好处的

- 方便代码维护；
- 减少让开发者之间的沟通成本；
- 能让语音合成工具正确识别网页元素的用途，以便作出正确的反应；
- 有利于 [SEO](/web/html-css/html/other.md#seo)；

因此我们要尽量做到元素语义化
