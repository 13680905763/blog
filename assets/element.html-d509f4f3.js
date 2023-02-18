import{_ as l,M as i,p,q as o,R as a,t as n,N as t,a1 as e}from"./framework-204010b2.js";const r="/blog/img/web/html/element.jpg",c="/blog/img/web/html/attribute.jpg",u="/blog/img/web/html/element-nesting.jpg",d="/blog/img/web/html/head.jpg",h="/blog/img/web/html/img.jpg",g={},m=a("h1",{id:"what-is-element",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#what-is-element","aria-hidden":"true"},"#"),n(" what is element？")],-1),k=a("h2",{id:"element",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#element","aria-hidden":"true"},"#"),n(" Element")],-1),b=a("p",null,"我们知道 HTML 本质上是由一系列的元素（Element）构成的； 那么什么是元素呢？",-1),v=a("ul",null,[a("li",null,"元素是网页的一部分；"),a("li",null,"一个元素可以包含一个数据项，或是一块文本，或是一张照片，亦或是什么也不包含；")],-1),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"},_=e('<h2 id="元素的组成" tabindex="-1"><a class="header-anchor" href="#元素的组成" aria-hidden="true">#</a> 元素的组成</h2><p><img src="'+r+'" alt="元素组成"></p><ul><li>开始标签（Opening tag）</li><li>结束标签（Closing tag）</li><li>内容（Content）</li><li>元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。</li></ul><h2 id="元素的属性" tabindex="-1"><a class="header-anchor" href="#元素的属性" aria-hidden="true">#</a> 元素的属性</h2><p>元素也可以拥有属性(Attribute)</p><p><img src="'+c+'" alt="属性"></p><p>属性的分类</p><ul><li><p>有些属性是公共的，每一个元素都可以设置</p><p>比如 class、id、title 属性</p></li><li><p>有些属性是元素特有的，不是每一个元素都可以设置</p><p>比如 meta 元素的 charset 属性、img 元素的 alt 属性等</p></li></ul><h2 id="元素的嵌套关系" tabindex="-1"><a class="header-anchor" href="#元素的嵌套关系" aria-hidden="true">#</a> 元素的嵌套关系</h2><p>元素的内容除了可以是文本之外，还可以去其他元素，这样就形成了<strong>元素的嵌套</strong>。</p><p><img src="'+u+`" alt="元素的嵌套"></p><h2 id="html-元素" tabindex="-1"><a class="header-anchor" href="#html-元素" aria-hidden="true">#</a> html 元素</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>&lt;html&gt; 元素 表示一个 HTML 文档的<strong>根</strong>（顶级元素），所以它也被称为<strong>根元素</strong>。</p><ul><li>其他元素必须是此元素的后代。</li></ul><p>W3C 标准建议为 html 元素增加一个 lang 属性，作用是</p><ul><li>帮助语音合成工具确定要使用的发音;</li><li>帮助翻译工具确定要使用的翻译规则;</li></ul><p>比如常用的规则：</p><ul><li>lang=“en”表示这个 HTML 文档的语言是英文；</li><li>lang=“zh-CN”表示这个 HTML 文档的语言是中文；</li></ul><h2 id="head-元素" tabindex="-1"><a class="header-anchor" href="#head-元素" aria-hidden="true">#</a> head 元素</h2><p>head 元素 规定文档相关的<strong>配置信息</strong>（也称之为元数据），包括<strong>文档的标题，引用的文档样式</strong>和<strong>脚本</strong>等。</p><ul><li>什么是元数据（meta data），是描述数据的数据；</li><li>这里我们可以理解成对<strong>整个页面的配置</strong></li></ul><p>一般至少包含如下 2 个设置</p><ul><li><p>网页的标题：title 元素</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>网页的编码：meta 元素</p><ul><li>可以用于设置网页的字符编码，让浏览器更精准地显示每一个文字，不设置或设置错误会导致乱码</li><li>一般都使用 utf-8 编码，涵盖了世界上几乎所有的文字；</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+'" alt="head"></p></li></ul><h2 id="body-元素" tabindex="-1"><a class="header-anchor" href="#body-元素" aria-hidden="true">#</a> body 元素</h2><p>body 元素里面的内容将是你<strong>在浏览器窗口中看到的东西</strong>，也就是<strong>网页的具体内容和结构</strong>。</p><h2 id="常用的元素" tabindex="-1"><a class="header-anchor" href="#常用的元素" aria-hidden="true">#</a> 常用的元素</h2><h3 id="h-元素" tabindex="-1"><a class="header-anchor" href="#h-元素" aria-hidden="true">#</a> h 元素</h3><ul><li><strong>h1-h6</strong>元素表示了六个不同的级别的<strong>标题</strong></li><li><em>h 元素通常和 <strong>SEO</strong> 优化有关系</em> .</li></ul><h3 id="p-元素" tabindex="-1"><a class="header-anchor" href="#p-元素" aria-hidden="true">#</a> p 元素</h3><ul><li>p 元素表示一个文本的<strong>段落</strong>。</li><li>p 元素是 paragraph 单词的缩写，是段落、分段的意思；</li><li>p 元素多个段落之间会有一定的间距 (上下外边距，bfc 会合并)；</li></ul><h3 id="img-元素" tabindex="-1"><a class="header-anchor" href="#img-元素" aria-hidden="true">#</a> img 元素</h3><h4 id="img-元素将一份图像嵌入文档" tabindex="-1"><a class="header-anchor" href="#img-元素将一份图像嵌入文档" aria-hidden="true">#</a> img 元素将一份图像嵌入文档</h4>',33),x=a("li",null,"img 是 image 单词的所以，是图像、图像的意思；",-1),q={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element",target:"_blank",rel:"noopener noreferrer"},L=e('<p>[拓展]img 不设置 src 时，在浏览器的表现为占据一定位置</p><p><img src="'+h+`" alt="img"></p><p>设置 src 后，浏览器会去请求 src 的图片，将图片下载到本地，浏览器帮把 img 占据的位置替换成图片</p><h4 id="img-两个常见的属性" tabindex="-1"><a class="header-anchor" href="#img-两个常见的属性" aria-hidden="true">#</a> img 两个常见的属性</h4><ol><li>src 属性：source 单词的缩写，表示源 <ul><li>是必须的，它包含了你想嵌入的图片的文件路径。</li></ul></li><li>alt 属性：不是强制性的，有两个作用 <ul><li>当图片加载不成功（错误的地址或者图片资源不存在），那么会显示这段文本；</li><li>屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义；</li></ul></li></ol><h4 id="图片的路径" tabindex="-1"><a class="header-anchor" href="#图片的路径" aria-hidden="true">#</a> 图片的路径</h4><p>设置 img 的 src 时，需要给图片设置路径：</p><ul><li>网络图片：一个 URL 地址（网络图片的设置非常简单，给一个地址即可）；</li><li>本地图片：本地电脑上的图片，后续会和 html 一起部署到服务；</li></ul><h4 id="本地图片的路径有两种方式" tabindex="-1"><a class="header-anchor" href="#本地图片的路径有两种方式" aria-hidden="true">#</a> 本地图片的路径有两种方式</h4><ol><li>绝对路径（几乎不用）； <ul><li>从电脑的根目录开始一直找到资源的路径；</li></ul></li><li>相对路径（常用）； <ul><li>相当于当前文件的一个路径；</li><li>. 代表当前文件夹（1 个点），可以省略</li><li>.. 代表上级文件夹（2 个点）</li></ul></li></ol><p><em>注意：不管什么操作系统（Windows、Mac、Linux），路径分隔符都是 /，而不是\\</em> ^_^</p><p><strong>img 元素支持的图片格式非常多</strong> .</p><h3 id="a-元素" tabindex="-1"><a class="header-anchor" href="#a-元素" aria-hidden="true">#</a> a 元素</h3><p>a 元素（anchor 锚):<strong>超链接</strong>，用于打开新的 URL；</p><h4 id="a-元素有两个常见的属性" tabindex="-1"><a class="header-anchor" href="#a-元素有两个常见的属性" aria-hidden="true">#</a> a 元素有两个常见的属性</h4><ol><li><p>href：Hypertext（超文本）Reference（引用）的简称</p><ul><li>指定要打开的 URL 地址；</li><li>也可以是一个本地地址；</li></ul></li><li><p>target：该属性指定在何处显示链接的资源</p><ul><li>_self：默认值，在当前窗口打开 URL；</li><li>_blank：在一个新的窗口中打开 URL；</li><li>其他不常用, 后面 iframe 可以讲一下；</li></ul></li></ol><h4 id="锚点链接" tabindex="-1"><a class="header-anchor" href="#锚点链接" aria-hidden="true">#</a> 锚点链接</h4><p>锚点链接可以实现：跳转到网页中的具体位置</p><p>锚点链接有两个重要步骤：</p><ol><li>在要跳到的元素上定义一个 id 属性；</li><li>定义 a 元素，并且 a 元素的 href 指向对应的 id</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>段落一<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>段落一<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>img 元素跟 a 元素一起使用，可以实现图片链接；</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="其他-url" tabindex="-1"><a class="header-anchor" href="#其他-url" aria-hidden="true">#</a> 其他 URL</h4><p>a 元素还可以用来下载东西、发送邮件</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 指向：zip压缩包 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://github.com/13680905763/blog/archive/refs/heads/main.zip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 指向其他协议地址：mailto ，会让系统打开邮件的app--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mailto:177748749@qq.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iframe-元素" tabindex="-1"><a class="header-anchor" href="#iframe-元素" aria-hidden="true">#</a> iframe 元素</h3><p>iframe 元素可以实现<strong>在一个 HTML 文档中嵌入其他 HTML 文档</strong> src 属性指定链接地址 frameborder 属性用于规定是否显示边框</p><ul><li>1：显示</li><li>0：不显示</li></ul><p>a 元素 target 的其他值:</p><ul><li>_parent：在 iframe 父窗口中打开 URL</li><li>_top：在 iframe 顶层窗口中打开 URL</li></ul><p><em>[拓展] ：如果不想被套，在 Response Headers 里加<code>X-Frame-Options: sameorigin</code>,表示该地址只在同源的页面被请求</em> .</p><h3 id="div-元素-和-span-元素" tabindex="-1"><a class="header-anchor" href="#div-元素-和-span-元素" aria-hidden="true">#</a> div 元素 和 span 元素</h3><p>div 元素(division)：，分开、分配的意思； span 元素：跨域、涵盖的意思；</p><h4 id="产生的历史" tabindex="-1"><a class="header-anchor" href="#产生的历史" aria-hidden="true">#</a> 产生的历史</h4><p>网页的发展早期是<strong>没有 CSS</strong>，这个时候我们必须通过<strong>语义化元素</strong>来告知浏览器一段文字如何显示 HTML 添加了各种各样的包含样式的 HTML 元素，strong/i/del,越加越多变了很臃肿已经分不清哪些是用来搭建基本结构，哪些用来添加样式的了,非常不方便进行管理。</p><p>后来出现了<strong>CSS</strong>，CSS 早起并不是只有 CSS，有很多其他方式来添加样式，只不过 CSS 最后变成一个标准，被 W3C 接管了变成一个严格的标准，每个浏览器都按照这个标准 CSS 变成标准之后就出现了<strong>HTML 的结构和 CSS 的样式分离</strong> 这时候开始出现两个元素 div 和 span，从一个极端（加各种 html 元素）走向另一个极端 div/span + css all in 整个页面，在很长一段时间里流行 div+css 的标准。</p><p>现在<strong>元素语义化</strong>，用正确的元素做正确的事 h1 p ul&gt;li + css。</p><h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h4><p>div 元素和 span 元素都是“<strong>容器</strong>”，也可以理解成“<strong>盒子</strong>”，它们都是用来<strong>包裹内容</strong>的；</p><ul><li>div 元素：多个 div 元素包裹的内容会在<strong>不同的行</strong>显示； <ul><li>一般作为其他元素的父容器，把其他元素包住，代表一个整体</li><li>用于把网页分割为多个独立的部分</li></ul></li><li>span 元素：多个 span 元素包裹的内容会在<strong>同一行</strong>显示； <ul><li>默认情况下，跟普通文本几乎没差别</li><li>用于区分特殊文本和普通文本，比如用来显示一些关键字</li></ul></li></ul><h3 id="不常用元素" tabindex="-1"><a class="header-anchor" href="#不常用元素" aria-hidden="true">#</a> 不常用元素</h3><p>strong 元素：内容加粗、强调；</p><ul><li>通常加粗会使用 css 样式来完成；</li><li>开发中很偶尔会使用一下；</li></ul><p>i 元素：内容倾斜；</p><ul><li>通常斜体会使用 css 样式来完成；</li><li>开发中偶尔会用它来做字体图标（因为看起来像是 icon 的缩写）；</li></ul><p>code 元素：用于显示代码</p><ul><li>偶尔会使用用来显示等宽字体；</li></ul><p>br 元素：换行元素</p><ul><li>开发中已经不使用</li></ul>`,50);function S(C,H){const s=i("ExternalLinkIcon");return p(),o("div",null,[m,k,b,v,a("p",null,[a("a",f,[n("查看 HTML 所有元素"),t(s)])]),_,a("ul",null,[x,a("li",null,[n("事实上 img 是一个"),a("a",q,[n("可替换元素"),t(s)]),n("（ replaced element ）；")])]),L])}const T=l(g,[["render",S],["__file","element.html.vue"]]);export{T as default};
