import{_ as s,p as n,q as a,a1 as e}from"./framework-204010b2.js";const l="/blog/img/web/css/媒体查询/媒体特性.jpg",i={},t=e(`<h1 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h1><ul><li>媒体查询是一种提供给开发者针对不同设备需求进行定制化开发的一个接口。</li><li>你可以根据设备的类型（比如屏幕设备、打印机设备）或者特定的特性（比如屏幕的宽度）来修改你的页面。</li></ul><p>媒体查询的使用方式主要有三种：</p><ol><li><p>通过@media 和@import 使用不同的 CSS 规则（常用）；</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./css/minScreen.css<span class="token punctuation">)</span></span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用 media 属性为&lt;style&gt;, &lt;link&gt;,&lt;source&gt;和其他 HTML 元素指定特定的媒体类型；</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;./css/minScreen.css&quot; media=(max-width:600px)&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用 Window.matchMedia() 和 MediaQueryList.addListener() 方法来测试和监控媒体状态；</p></li></ol><ul><li>比较常用的是通过@media 来使用不同的 CSS 规则，目前掌握这个即可；</li></ul><h2 id="媒体类型" tabindex="-1"><a class="header-anchor" href="#媒体类型" aria-hidden="true">#</a> 媒体类型</h2><ul><li>在使用媒体查询时，你必须指定要使用的媒体类型。 <ul><li>媒体类型是可选的，并且会（隐式地）应用 all 类型。</li></ul></li><li>常见的媒体类型值如下： <ul><li>all：适用于所有设备。</li><li>print：适用于在打印预览模式下在屏幕上查看的分页材料和文档。</li><li>screen（掌握）：主要用于屏幕。</li><li>speech：主要用于语音合成器。</li></ul></li></ul><h2 id="媒体特性" tabindex="-1"><a class="header-anchor" href="#媒体特性" aria-hidden="true">#</a> 媒体特性</h2><p>媒体特性（Media features）描述了 浏览器、输出设备，或是预览环境的具体特征；</p><ul><li>通常会将媒体特性描述为一个表达式；</li><li>每条媒体特性表达式都必须用括号括起来；</li></ul><p><img src="`+l+`" alt="媒体特性"></p><h2 id="逻辑操作符" tabindex="-1"><a class="header-anchor" href="#逻辑操作符" aria-hidden="true">#</a> 逻辑操作符</h2><ul><li>媒体查询的表达式最终会获得一个 Boolean 值，也就是真（true）或者假（false）。 <ul><li>如果结果为真（true），那么就会生效；</li><li>如果结果为假（false），那么就不会生效；</li></ul></li><li>如果有多个条件，我们可以通过逻辑操作符联合复杂的媒体查询： <ul><li>and：and 操作符用于将多个媒体查询规则组合成单条媒体查询</li><li>not：not 运算符用于否定媒体查询，如果不满足这个条件则返回 true，否则返回 false。</li><li>only：only 运算符仅在整个查询匹配时才用于应用样式。</li><li>, (逗号)：逗号用于将多个媒体查询合并为一个规则。</li></ul></li><li>比如下面的媒体查询，表示：屏幕宽度大于 500，小于 700 的时候，body 背景颜色为红色；</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 屏幕宽度大于500，小于700的时候，body背景颜色为红色 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[t];function c(o,u){return n(),a("div",null,p)}const r=s(i,[["render",c],["__file","媒体查询.html.vue"]]);export{r as default};
