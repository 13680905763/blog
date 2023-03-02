# html5-element

## HTML5 语义化元素

- 我们往往过多的使用 div, 通过 id 或 class 来区分元素；
- 对于浏览器来说这些元素不够语义化；
- 对于搜索引擎来说, 不利于 SEO 的优化；

HTML5 新增了语义化的元素：

- header：头部元素
- nav：导航元素
- section：定义文档某个区域的元素
- article：内容元素
- aside：侧边栏元素
- footer：尾部元素

![semanticization](/img/web/html/html5-element/semanticization.jpg)

## HTML5 其他新增元素

HTML5 增加了对媒体类型的支持：

- 音频：audio
- 视频：video

Video 和 Audio 使用方式有两个：

- 一方面我们可以直接通过元素使用 video 和 audio；
- 另一方面我们可以通过 JavaScript 的 API 对其进行控制；

### video

video 元素 用于在 HTML 或者 XHTML 文档中嵌入媒体播放器，用于支持文档内的视频播放。

```html
<video src="./video/xx.mp4"></video>
```

- 常见属性

![video](/img/web/html/html5-element/video.jpg)

- 兼容性写法

video>元素中间的内容，是针对浏览器不支持此元素时候的降级处理。

- 通过 source 元素指定更多视频格式的源;
- 通过 p/div 等元素指定在浏览器不支持 video 元素的情况, 显示的内容;

```html
<video src="./video/xx.mp4">
  <source src="./video/xx.webm" />
  <p>你的浏览器不支持h5的video播放，请更换浏览器重试</p>
</video>
```

### audio

audio 元素用于在文档中嵌入音频内容, 和 video 的用法非常类似

```html
<audio src="./audio/xx.mp3"></audio>
```

- 常见属性

![audio](/img/web/html/html5-element/audio.jpg)

- 兼容性写法：同 video

## input 元素的扩展内容

HTML5 对 input 元素也进行了扩展，在之前我们已经学习过的其中几个属性也是 HTML5 的特性：

- placeholder：输入框的占位文字
- multiple：多个值
- autofocus：最多输入的内容

另外对于 input 的 type 值也有很多扩展：

- date
- time
- number
- tel
- color
- email
- [等等...](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)

## 新增全局属性 data-\*

在 HTML5 中, 新增一种全局属性的格式 data-\*, 用于自定义数据属性:

- data 设置的属性可以在 JavaScript 的 DOM 操作中通过 dataset 轻松获取到；
- 通常用于 HTML 和 JavaScript 数据之间的传递；

```html
<div class="box" data-name="sadpig" data-age="23">box</div>
```

```javaScript
const boxEl = document.querySelector('.box')
console.log(boxEl.dataset);
```

- 在小程序中, 就是通过 data-来传递数据的, 所以该全局属性必须要掌握
