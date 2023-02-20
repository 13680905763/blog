# HELLO HTML

## 超文本标记语言

HyperText Markup Language 简称 HTML 是一种用于创建网页的标记语言

### 什么是标记语言

- 由无数个**标记**（标签、tag)组成；
- 是对**某些内容进行特殊的标记**，以供其他[解释器](https://www.freesion.com/article/37031294315/)识别处理；
- 比如使用<h2\><\/h2>标记的文本会被识别为“**标题**”进行**加粗、文字放大**显示；
- 由**标签和内容**组成的称为**元素（element）**

### 什么是超文本（ HyperText ）

- 表示不仅仅可以插入**普通的文本（Text）**，还可以插入**图片、音频、视频**等内容；
- 还可以表示**超链接（HyperLink）**，从一个网页跳转到另一个网页；

## HTML 文件的特点

### Html 文件的拓展名是.htm/.html

- 因历史遗留问题，Win95\Win98 系统的文件拓展名不能超过 3 字符，所以使用.htm
- 现在统一使用 .html

### Html 文件的结构

文档声明

\<html>

\<head>
这里放[元数据](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#%E6%96%87%E6%A1%A3%E5%85%83%E6%95%B0%E6%8D%AE)
\</head>

\<body>
这里放[内容](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#%E5%88%86%E5%8C%BA%E6%A0%B9%E5%85%83%E7%B4%A0)
\</body>

\</html>

## HTML 的注释

\<!-- 注释内容 -->

## 文档声明

### \<!DOCTYPE html>

HTML 最上方的一段文本我们称之为文档类型声明，用于声明文档类型&版本

- HTML 文档声明，告诉浏览器当前页面是 **HTML5 页面**
- 让浏览器用 **HTML5 的标准去解析识别**内容
- 必须**放在 HTML 文档的最前面，不能省略**，省略了会出现兼容性问题

_HTML5 的文档声明比 HTML 4.01、XHTML 1.0 简洁非常多(了解即可)_:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
