# 一些零碎的概念

## 软件

- [专业的软件定义](https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6/12053)：一系列按照特定顺序组织的**计算机指令**
- 软件开发是什么呢?就是告诉**计算机一系列的指令**，这些指令也称之为**程序**

## 软件与应用程序

- 应用程序、算法、编程语言、操作系统 都是软件

_引用一副图_

![区别](/img/computer/concept/soft.jpg)

## 浏览器的作用

浏览器最核心的部分是渲染引擎（Rendering Engine）, 一般也称为**浏览器内核**

常见的浏览器内核：

- **Trident** （ 三叉戟）：IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器；
- **Gecko**（ 壁虎） ：Mozilla Firefox；
- **Webkit** ：Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器（Android、iOS）
- **Webkit**（分支） -> **Blink** ：Google Chrome

![浏览器内核](/img/computer/concept/renderingEngine.jpg)

不同的浏览器内核有不同的解析、渲染规则，所以同一网页在不同内核的浏览器中的渲染效果也可能不同。(所以我们要进行浏览器适配，当然现在有各种打包工具帮助我们进行适配了)

