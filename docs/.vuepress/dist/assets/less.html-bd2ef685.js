import{_ as t,M as p,p as l,q as c,R as n,t as s,N as i,a1 as a}from"./framework-204010b2.js";const o={},u=a(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h1><ul><li>Less （Leaner Style Sheets 的缩写） 是一门 CSS 扩展语言, 并且兼容 CSS。 <ul><li>Less 增加了很多相比于 CSS 更好用的特性;</li><li>比如定义变量、混入、嵌套、计算等等；</li><li>Less 最终需要被编译成 CSS 运行于浏览器中（包括部署到服务器中）；</li></ul></li></ul><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>@变量名: 变量值;</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@themeColor<span class="token punctuation">:</span></span> #f3c258<span class="token punctuation">;</span>
<span class="token selector">.body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@themeColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h3><p>选择器的嵌套</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    i am content
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token selector">.title</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token selector">.link</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.description:hover</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特殊符号：&amp; 表示当前选择器的父级</p><h3 id="运算" tabindex="-1"><a class="header-anchor" href="#运算" aria-hidden="true">#</a> 运算</h3><p>Less 中，算术运算符 + - * / 可以对任何数字、颜色或变量进行运算。</p><ul><li>算术运算符在加、减或比较之前会进行单位换算，计算的结果以最左侧操作数的单位类型为准；</li><li>如果单位换算无效或失去意义，则忽略单位；</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token operator">+</span>10%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ff0000 <span class="token operator">+</span> #00ff00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合" tabindex="-1"><a class="header-anchor" href="#混合" aria-hidden="true">#</a> 混合</h3><p>多个选择器中可能会有大量相同的代码</p><ul><li>我们希望可以将这些代码进行抽取到一个独立的地方，任何选择器都可以进行复用；</li><li>在 less 中提供了混入（Mixins）来帮助我们完成这样的操作；</li></ul><p>混合（Mixin）是一种将一组属性从一个规则集（或混入）到另一个规则集的方法。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.bordered1</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bordered2(<span class="token variable">@borderWidth</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> <span class="token variable">@borderWidth</span> solid #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.bordered1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.bordered2</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：混入在没有参数的情况下，小括号可以省略，但是不建议这样使用；</p><h3 id="映射" tabindex="-1"><a class="header-anchor" href="#映射" aria-hidden="true">#</a> 映射</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.colors</span> <span class="token punctuation">{</span>
  <span class="token property">primarycolor</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">secondcolor</span><span class="token punctuation">:</span> #0f0x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> .colors[primarycolor]<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> .<span class="token function">colors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> [secondcolor]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混入和映射结合：混入也可以当做一个自定义函数来使用</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.pxToRem(<span class="token variable">@px</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">result</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@px</span> <span class="token operator">/</span> <span class="token variable">@htmlFontSize</span><span class="token punctuation">)</span> <span class="token operator">*</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> .<span class="token function">pxToRem</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span> [result]<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> .<span class="token function">pxToRem</span><span class="token punctuation">(</span>18<span class="token punctuation">)</span> [result]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><ul><li>和 mixins 作用类似，用于复用代码；</li><li>和 mixins 相比，继承代码最终会转化成并集选择器；</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.bordered<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.bordered,
.box</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="less-内置函数" tabindex="-1"><a class="header-anchor" href="#less-内置函数" aria-hidden="true">#</a> Less 内置函数</h3>`,30),r={href:"https://less.bootcss.com/functions/",target:"_blank",rel:"noopener noreferrer"},d=a(`<h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3><ul><li>在查找一个变量时，首先在本地查找变量和混合（mixins）；</li><li>如果找不到，则从“父”级作用域继承；</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token selector">.inner</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@fontSize</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token variable">@fontSize<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><p>在 Less 中，块注释和行注释都可以使用；</p><h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h3><ul><li>导入的方式和 CSS 的用法是一致的；</li><li>导入一个 .less 文件，此文件中的所有变量就可以全部使用了；</li><li>如果导入的文件是 .less 扩展名，则可以将扩展名省略掉；</li></ul>`,7);function k(v,b){const e=p("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[s("Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。 "),n("a",r,[s("内置函数手册"),i(e)])]),d])}const h=t(o,[["render",k],["__file","less.html.vue"]]);export{h as default};