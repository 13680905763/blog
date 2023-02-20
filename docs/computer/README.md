# 邂逅

## 软件

- [专业的软件定义](https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6/12053)：一系列按照特定顺序组织的**计算机指令**
- 软件开发是什么呢?就是告诉**计算机一系列的指令**，这些指令也称之为**程序**

## 软件与应用程序

- 应用程序、算法、编程语言、操作系统 都是软件

_引用一副图_ .

![区别](/img/computer/encounter/soft.jpg)

## URL 与 URI

### URL

统一资源定位符（Uniform Resource Locator）通俗的说就是一个资源在 Web 上的地址。

- 理论上说，每个有效的 URL 都指向一个唯一的资源；
- 这个资源可以是一个 HTML 页面，一个 CSS 文档，一幅图像，等等

![URL1](/img/computer/encounter/url1.jpg)

URL 的格式

**[协议类型]:\/\/[服务器地址]:[端口号]/[文件路径][文件名]?[查询]#[片段 ID]**

![URL2](/img/computer/encounter/url2.jpg)
![URL3](/img/computer/encounter/url3.jpg)

### URL 、URI 、URN

url,urn 都是 uri
![URI](/img/computer/encounter/uri.jpg)

- [URI](https://baike.baidu.com/item/URI/2901761?fr=aladdin) = Uniform Resource Identifier 统一资源**标志符**，用于标识 Web 技术使用的逻辑或物理资源。；
- [URL](https://baike.baidu.com/item/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%B3%BB%E7%BB%9F?fromtitle=url&fromid=110640&fromModule=lemma_search-box) = Uniform Resource Locator 统一资源**定位符**，俗称网络地址，相当于网络中的门牌号；
- [URN](https://baike.baidu.com/item/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%90%8D%E7%A7%B0?fromtitle=URN&fromid=2901667&fromModule=lemma_search-box) = Uniform Resource Name 统一资源**名称**，是带有名字的因特网资源；

uri 是一个比较抽象的概念，而 url 和 urn 可以理解成继承至 uri，是 uri 的具体表现，uri 用于标识一个资源，这种标识允许我们对资源通过特定的协议进行交互操作，像我们可以通过定位的方式使用 url 获取一个资源，也可以用过名称的方式 urn 获取一个资源。

但是 url 的缺点是当我们资源的位置发生了变化，url 的地址也要随之改变，而 urn 的目的是好比通过一个标识名标识一个资源后，无论该资源的位置发生多少变化，我们都能通过标识名精准访问到该资源，但由于技术等原理，该方法并未实现。统一资源名仍然有因特网工程工作组（IETF）的成员在继续开发。

**locators are also identifiers, so every URL is also a URI, but there are URIs which are not URLs**.

## 字符编码

计算机是干什么的?

- 计算机一开始发明出来时是用来解决数字计算问题的，后来人们发现，计算机还可以做更多的事，例如文本处理。
- 但计算机其实挺笨的，它只认识 010110111000…这样由 0 和 1 两个数字组成的二进制数字；
- 这是因为计算机的底层硬件实现就是用电路的开和闭两种状态来表示 0 和 1 两个数字的。
- 因此，计算机只可以直接存储和处理二进制数字。

为了在计算机上也能表示、存储和处理像文字、符号等等之类的字符，就必须将这些字符转换成二进制数字。

- 当然，肯定不是我们想怎么转换就怎么转换，否则就会造成同一段二进制数字在不同计算机上显示出来的字符不一样的情况，因此必须得定一个统一的、标准的转换规则
  ![字符编码](/img/computer/encounter/字符编码.jpg)

[了解更多](https://www.jianshu.com/p/899e749be47c)
