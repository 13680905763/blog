import{_ as l,M as o,p as i,q as p,R as n,t as a,N as e,a1 as s}from"./framework-204010b2.js";const c="/blog/img/web/css/line-height2.jpg",r="/blog/img/web/css/font/web-font.jpg",u="/blog/img/web/css/font/compatible.jpg",d={},h=s(`<h1 id="font-text-字体与文本" tabindex="-1"><a class="header-anchor" href="#font-text-字体与文本" aria-hidden="true">#</a> FONT-TEXT 字体与文本</h1><h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h2><h3 id="font-size" tabindex="-1"><a class="header-anchor" href="#font-size" aria-hidden="true">#</a> font-size</h3><p>决定文字的大小（默认 16px 是浏览器的）</p><ul><li>具体数值+单位 <ul><li>比如 100px</li><li>也可以使用 em 单位(不推荐)：1em 代表 100%，2em 代表 200%，0.5em 代表 50% （相对自身继承至父元素的 font-size）</li></ul></li><li>百分比 <ul><li>基于父元素的 font-size 计算，比如 50%表示等于父元素 font-size 的一半</li></ul></li></ul><h3 id="font-family" tabindex="-1"><a class="header-anchor" href="#font-family" aria-hidden="true">#</a> font-family</h3><p>设置文字的字体名称</p><ul><li>可以设置 1 个或者多个字体名称;</li><li>浏览器会选择列表中第一个该计算机上有安装的字体（一直找不到就用默认字体）;</li><li>或者是通过 @font-face 指定的可以直接下载的字体。</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 字体有多个单词或者有特殊字符则加引号表示整体是一个编码 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-family</span><span class="token punctuation">:</span> Georgia<span class="token punctuation">,</span><span class="token string">&#39;Hiragino Sans GB&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\\5b8b\\4f53&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>字体名字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="font-weight" tabindex="-1"><a class="header-anchor" href="#font-weight" aria-hidden="true">#</a> font-weight</h3><p>设置文字的粗细</p><ul><li>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ：每一个数字表示一个重量</li><li>normal：等于 400</li><li>bold：等于 700</li></ul><p>strong、b、h1~h6 等标签的 font-weight 默认就是 bold</p><h3 id="font-style" tabindex="-1"><a class="header-anchor" href="#font-style" aria-hidden="true">#</a> font-style</h3><p>设置文字的常规、斜体显示</p><ul><li>normal：常规显示</li><li>italic(斜体)：用字体的斜体显示(通常会有专门的字体)</li><li>oblique(倾斜)：文本倾斜</li></ul><h3 id="line-height-重点" tabindex="-1"><a class="header-anchor" href="#line-height-重点" aria-hidden="true">#</a> line-height（重点）</h3><p>设置文本的行高，行高有利于阅读</p><p>行高的定义：两行文字基线（baseline）之间的间距</p><ul><li>基线（baseline）：与小写字母 x 最底部对齐的线 <img src="`+c+'" alt="行高"></li></ul><p>意区分 height 和 line-height</p><ul><li>height：元素的整体高度</li><li>line-height：元素中每一行文字所占据的高度</li></ul><p>取值</p>',23),k=n("li",null,[a("<数字> "),n("strong",null,"推荐"),a(" 数字乘以该元素的字体大小")],-1),f=n("li",null,"<长度> em 为单位的值可能会产生不确定的结果（同下）",-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height#%E6%8E%A8%E8%8D%90%E5%9C%A8%E8%AE%BE%E7%BD%AE_line-height_%E6%97%B6%E4%BD%BF%E7%94%A8%E6%97%A0%E5%8D%95%E4%BD%8D%E6%95%B0%E5%80%BC",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>应用：文字(图片不行 )在 div 内部垂直居中</p><ul><li>让 line-height 等同于 height</li></ul><h3 id="font" tabindex="-1"><a class="header-anchor" href="#font" aria-hidden="true">#</a> font</h3><p>font 是一个缩写属性</p><ul><li>font 属性可以用来作为 font-style, font-variant, font-weight, font-size, line-height 和 font-family 属性的简写;</li><li>font-style font-variant font-weight font-size/line-height font-family</li></ul><p>规则:</p><ul><li>font-style、font-variant、font-weight 可以随意调换顺序，也可以省略</li><li>/line-height 可以省略，如果不省略，必须跟在 font-size 后面</li><li>font-size、font-family 不可以调换顺序，不可以省略</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>font <span class="token operator">=</span>
  <span class="token punctuation">[</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span><span class="token string">&#39;font-style&#39;</span><span class="token operator">&gt;</span> <span class="token operator">||</span> <span class="token operator">&lt;</span>font<span class="token operator">-</span>variant<span class="token operator">-</span>css2<span class="token operator">&gt;</span> <span class="token operator">||</span> <span class="token operator">&lt;</span><span class="token string">&#39;font-weight&#39;</span><span class="token operator">&gt;</span> <span class="token operator">||</span> <span class="token operator">&lt;</span>font<span class="token operator">-</span>stretch<span class="token operator">-</span>css3<span class="token operator">&gt;</span> <span class="token punctuation">]</span><span class="token operator">?</span> <span class="token operator">&lt;</span><span class="token string">&#39;font-size&#39;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token operator">/</span> <span class="token operator">&lt;</span><span class="token string">&#39;line-height&#39;</span><span class="token operator">&gt;</span> <span class="token punctuation">]</span><span class="token operator">?</span> <span class="token operator">&lt;</span><span class="token string">&#39;font-family&#39;</span><span class="token operator">&gt;</span> <span class="token punctuation">]</span>  <span class="token operator">|</span>
  caption                                             <span class="token operator">|</span>
  icon                                                <span class="token operator">|</span>
  menu                                                <span class="token operator">|</span>
  message<span class="token operator">-</span>box                                         <span class="token operator">|</span>
  small<span class="token operator">-</span>caption                                       <span class="token operator">|</span>
  status<span class="token operator">-</span>bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-fonts" tabindex="-1"><a class="header-anchor" href="#web-fonts" aria-hidden="true">#</a> Web fonts</h3><ol><li>获取使用的字体文件(ttf)</li><li>在 CSS 中使用该字体</li><li>将 font 一起部署到静态服务器</li></ol><p><img src="`+r+'" alt="web-font"></p><ul><li>浏览器一个网页时, 因为代码中有引入字体文件, 字体文件会被一起下载下来;</li><li>浏览器会根据使用的字体在下载的字体文件中查找、解析、使用对应的字体；</li><li>在浏览器中使用对应的字体显示内容；</li></ul>',12),v={href:"https://www.fonts.net.cn/fonts-zh-1.html",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&#39;自定义字体&#39;</span><span class="token punctuation">,</span>
  <span class="token property">src</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./fonts/xxx.ttf<span class="token punctuation">)</span></span>
<span class="token punctuation">}</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&#39;自定义字体&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h4><ul><li>TrueType 字体：拓展名是 .ttf</li><li>OpenType 字体：拓展名是 .otf，建立在 TrueType 字体之上</li><li>Embedded OpenType 字体：拓展名是 .eot，OpenType 字体的压缩版</li><li>SVG 字体：拓展名是 .svg、 .svgz</li><li>WOFF 表示 Web Open Font Format web 开放字体：拓展名是 .woff，建立在 TrueType 字体之上</li></ul><p><img src="`+u+`" alt="compatible"></p><p>刀枪不入的@font-face 语法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>// format 用于帮助浏览器快速识别字体的格式
<span class="token atrule"><span class="token rule">@font-face</span></span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&#39;自定义字体&#39;</span><span class="token punctuation">,</span>
  <span class="token property">src</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./fonts/xxx.ttf<span class="token punctuation">)</span></span>
  <span class="token property">src</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./fonts/xxx.woff<span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff&#39;</span><span class="token punctuation">)</span>
  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./fonts/xxx.eot<span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;embedded-opentype&#39;</span><span class="token punctuation">)</span>
  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./fonts/xxx.svg<span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&#39;自定义字体&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体图标" tabindex="-1"><a class="header-anchor" href="#字体图标" aria-hidden="true">#</a> 字体图标</h3><p>把字体直接设计成图标的样子，这个就叫做字体图标。</p><ul><li>放大不会失真</li><li>可以任意切换颜色</li><li>用到很多个图标时，文件相对图片较小</li></ul>`,9),x={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},_=s(`<ol><li>通过 link 引入 iconfont.css 文件</li><li>使用 <ul><li>通过对应字体图标的 Unicode 来显示代码</li><li>利用已经编写好的 class, 直接使用即可</li></ul></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>iconfont<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>&amp;#xe6f6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>iconfont icon-music<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text-文本" tabindex="-1"><a class="header-anchor" href="#text-文本" aria-hidden="true">#</a> TEXT-文本</h2><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3><p>前景色（文字颜色，文本装饰性，边框）</p><h3 id="text-decoration" tabindex="-1"><a class="header-anchor" href="#text-decoration" aria-hidden="true">#</a> text-decoration</h3><p>设置文字的装饰线</p><ul><li>none 无任何装饰线（可用来去除 a 的下划线）</li><li>underline 下划线</li><li>overline 上划线</li><li>line-through 中划线</li></ul><h3 id="text-transform-了解" tabindex="-1"><a class="header-anchor" href="#text-transform-了解" aria-hidden="true">#</a> text-transform（了解）</h3><p>设置文字的大小写转换</p><ul><li>capitalize：(使…首字母大写, 资本化的意思)将每个单词的首字符变为大写</li><li>uppercase：(大写字母)将每个单词的所有字符变为大写</li><li>lowercase：(小写字母)将每个单词的所有字符变为小写</li><li>none：没有任何影响</li></ul><p>实际开发 js 转换比较多（toUpperCase、toLowerCase）</p><h3 id="text-indent-了解" tabindex="-1"><a class="header-anchor" href="#text-indent-了解" aria-hidden="true">#</a> text-indent(了解)</h3><p>设置第一行内容的缩进</p><p>text-indent: 2em; 刚好是缩进 2 个文字</p><h3 id="text-align-重要" tabindex="-1"><a class="header-anchor" href="#text-align-重要" aria-hidden="true">#</a> text-align(重要)</h3><p>mdn 定义：行内内容（例如文字/图片）如何相对它的块父元素对齐;</p><p>The text-align CSS property sets the horizontal alignment of the <strong>inline-level content</strong> inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.</p><ul><li>left：左对齐</li><li>right：右对齐</li><li>center：正中间显示</li><li>justify：两端对齐 （了解）</li></ul><h3 id="letter-spacing、word-spacing-了解" tabindex="-1"><a class="header-anchor" href="#letter-spacing、word-spacing-了解" aria-hidden="true">#</a> letter-spacing、word-spacing（了解）</h3><p>分别用于设置字母、单词之间的间距</p><p>默认是 0，可以设置为负数</p>`,22);function y(w,E){const t=o("ExternalLinkIcon");return i(),p("div",null,[h,n("ul",null,[k,f,n("li",null,[a("<百分比> 百分比值乘以元素计算出的字体大小"),n("a",g,[a("可能会产生不确定的结果"),e(t)])])]),m,n("p",null,[n("a",v,[a("字体天下"),e(t)])]),b,n("p",null,[a("使用 "),n("a",x,[a("阿里 icons"),e(t)])]),_])}const T=l(d,[["render",y],["__file","font-text.html.vue"]]);export{T as default};
