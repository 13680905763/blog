import{_ as n,p as a,q as s,a1 as e}from"./framework-204010b2.js";const t={},i=e(`<h1 id="css-function" tabindex="-1"><a class="header-anchor" href="#css-function" aria-hidden="true">#</a> css-function</h1><p>CSS 函数通常可以帮助我们更加灵活的来编写样式的值；</p><ul><li>比如 rgb/rgba/translate/rotate/scale</li></ul><p>再学习几个非常好用的 CSS 函数</p><ul><li>var: 使用 CSS 定义的变量;</li><li>calc: 计算 CSS 值, 通常用于计算元素的大小或位置;</li><li>blur: 毛玻璃(高斯模糊)效果;</li><li>gradient：颜色渐变函数；</li></ul><h2 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> var</h2><p>CSS 中可以自定义属性</p><ul><li>属性名需要以两个减号（--）开始;</li><li>属性值则可以是任何有效的 CSS 值;</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">--base-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--base-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>规则集定义的选择器, 是自定义属性的可见作用域(只在选择器内部有效)</p><ul><li>推荐将自定义属性定义在 html 中，也可以使用 :root 选择器;</li></ul><h2 id="calc" tabindex="-1"><a class="header-anchor" href="#calc" aria-hidden="true">#</a> calc</h2><p>calc() 函数允许在声明 CSS 属性值时执行一些计算。</p><ul><li>计算支持加减乘除的运算； <ul><li>+ 和 - 运算符的两边必须要有空白字符。</li></ul></li><li>通常用来设置一些元素的尺寸或者位置；</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100%-60px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blur" tabindex="-1"><a class="header-anchor" href="#blur" aria-hidden="true">#</a> blur</h2><p>blur() 函数将高斯模糊应用于输出图片或者元素;</p><ul><li>blur(radius)</li><li>radius, 模糊的半径, 用于定义高斯函数的偏差值, 偏差值越大, 图片越模糊; <ul><li>通常会和两个属性一起使用：</li></ul></li><li>filter: 将模糊或颜色偏移等图形效果应用于元素;</li><li>backdrop-filter: 为元素后面的区域添加模糊或者其他效果;</li></ul><h2 id="gradient" tabindex="-1"><a class="header-anchor" href="#gradient" aria-hidden="true">#</a> gradient</h2><ul><li>gradient 用于表现两种或多种颜色的过渡转变。 <ul><li>CSS 的 image 数据类型描述的是 2D 图形；</li><li>比如 background-image、list-style-image、border-image、content 等；</li><li>image 常见的方式是通过 url 来引入一个图片资源；</li><li>它也可以通过 CSS 的 gradient 函数来设置颜色的渐变；</li></ul></li><li>gradient 常见的函数实现有下面几种： <ul><li>linear-gradient()：创建一个表示两种或多种颜色线性渐变的图片；</li><li>radial-gradient()：创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成；</li><li>repeating-linear-gradient()：创建一个由重复线性渐变组成的 image；</li><li>repeating-radial-gradient()：创建一个重复的原点触发渐变组成的 image；</li><li>等等；</li></ul></li></ul><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>linear-gradient：创建一个表示两种或多种颜色线性渐变的图片；</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right bottom<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> red 10%<span class="token punctuation">,</span> purple 40px<span class="token punctuation">,</span> orange<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>radial-gradient：创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成；</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at 0% 50%<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[i];function p(c,o){return a(),s("div",null,l)}const r=n(t,[["render",p],["__file","css-function.html.vue"]]);export{r as default};
