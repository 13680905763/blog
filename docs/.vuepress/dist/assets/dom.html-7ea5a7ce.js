import{_ as l,p as i,q as a,Q as t,a1 as e}from"./framework-204010b2.js";const n="/blog/img/web/javascript/js-base/dom/dom-tree.jpg",s="/blog/img/web/javascript/js-base/dom/dom-extend.jpg",r="/blog/img/web/javascript/js-base/dom/获取元素.jpg",d="/blog/img/web/javascript/js-base/dom/node-type.jpg",o="/blog/img/web/javascript/js-base/dom/插入元素.jpg",c="/blog/img/web/javascript/js-base/dom/元素的大小-滚动.jpg",u={},p=e(`<h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> dom</h1><p>DOM：文档对象模型（Document Object Model）</p><ul><li><p>简称 DOM，将页面所有的内容表示为可以修改的对象；</p></li><li><p>浏览器会对我们编写的 HTML、CSS 进行渲染，同时它又要考虑我们可能会通过 JavaScript 来对其进行操作：</p><ul><li>于是浏览器将我们编写在 HTML 中的每一个元素（Element）都抽象成了一个个对象；</li><li>所有这些对象都可以通过 JavaScript 来对其进行访问，那么我们就可以通过 JavaScript 来操作页面；</li><li>所以，我们将这个抽象过程称之为 文档对象模型（Document Object Model）；</li></ul></li><li><p>整个文档被抽象到 document 对象中：</p><ul><li>比如 document.documentElement 对应的是 html 元素；</li><li>比如 document.body 对应的是 body 元素；</li><li>比如 document.head 对应的是 head 元素；</li></ul></li><li><p>下面的一行代码可以让整个页面变成红色：</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dom-tree" tabindex="-1"><a class="header-anchor" href="#dom-tree" aria-hidden="true">#</a> DOM Tree</h2><ul><li>一个页面不只是有 html、head、body 元素，也包括很多的子元素： <ul><li>在 html 结构中，最终会形成一个树结构；</li><li>在抽象成 DOM 对象的时候，它们也会形成一个树结构，我们称之为 DOM Tree；</li></ul></li></ul><p><img src="`+n+'" alt="dom-tree"></p>',7),h=e('<h2 id="dom-的继承关系图" tabindex="-1"><a class="header-anchor" href="#dom-的继承关系图" aria-hidden="true">#</a> DOM 的继承关系图</h2><p><img src="'+s+'" alt="dom-extend"></p><h2 id="document-对象" tabindex="-1"><a class="header-anchor" href="#document-对象" aria-hidden="true">#</a> document 对象</h2><ul><li>Document 节点表示的整个载入的网页，它的实例是全局的 document 对象： <ul><li>对 DOM 的所有操作都是从 document 对象开始的；</li><li>它是 DOM 的 入口点，可以从 document 开始去访问任何节点元素；</li></ul></li><li>对于最顶层的 html、head、body 元素，我们可以直接在 document 对象中获取到： <ul><li>html 元素：&lt;html&gt; = document.documentElement</li><li>body 元素：&lt;body&gt; = document.body</li><li>head 元素：&lt;head&gt; = document.head</li><li>文档声明：&lt;!DOCTYPE html&gt; = document.doctype</li></ul></li></ul><h2 id="节点-node-之间的导航-navigator" tabindex="-1"><a class="header-anchor" href="#节点-node-之间的导航-navigator" aria-hidden="true">#</a> 节点（Node）之间的导航（navigator）</h2><p>获取到一个节点（Node）后，可以根据这个节点去获取其他的节点，我们称之为节点之间的导航。</p><ul><li>父节点：parentNode</li><li>前兄弟节点：previousSibling</li><li>后兄弟节点：nextSibling</li><li>子节点：childNodes</li><li>第一个子节点：firstChild</li><li>第二个子节点：lastChild</li></ul><h2 id="元素-element-之间的导航-navigator" tabindex="-1"><a class="header-anchor" href="#元素-element-之间的导航-navigator" aria-hidden="true">#</a> 元素（Element）之间的导航（navigator）</h2><p>获取到一个元素（Element）后，可以根据这个元素去获取其他的元素，我们称之为元素之间的导航。</p><ul><li>父元素：parentElement</li><li>前兄弟节点：previousElementSibling</li><li>后兄弟节点：nextElementSibling</li><li>子节点：children</li><li>第一个子节点：firstElementChild</li><li>第二个子节点：lastElementChild</li></ul><h2 id="获取元素的方法" tabindex="-1"><a class="header-anchor" href="#获取元素的方法" aria-hidden="true">#</a> 获取元素的方法</h2><p>DOM 为我们提供了获取元素的方法： <img src="'+r+'" alt="获取元素"></p><h2 id="节点的属性" tabindex="-1"><a class="header-anchor" href="#节点的属性" aria-hidden="true">#</a> 节点的属性</h2><h3 id="nodetype" tabindex="-1"><a class="header-anchor" href="#nodetype" aria-hidden="true">#</a> nodeType</h3><ul><li>nodeType 属性： <ul><li>nodeType 属性提供了一种获取节点类型的方法；</li><li>它有一个数值型值（numeric value）；</li></ul></li><li>常见的节点类型有如下：</li></ul><p><img src="'+d+`" alt="node-type"></p><h3 id="nodename、tagname" tabindex="-1"><a class="header-anchor" href="#nodename、tagname" aria-hidden="true">#</a> nodeName、tagName</h3><ul><li>nodeName：获取 node 节点的名字；</li><li>tagName：获取元素的标签名词；</li></ul><p>tagName 和 nodeName 之间有什么不同呢？</p><ul><li>tagName 属性仅适用于 Element 节点；</li><li>nodeName 是为任意 Node 定义的： <ul><li>对于元素，它的意义与 tagName 相同，所以使用哪一个都是可以的；</li><li>对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串；</li></ul></li></ul><h3 id="innerhtml、textcontent" tabindex="-1"><a class="header-anchor" href="#innerhtml、textcontent" aria-hidden="true">#</a> innerHTML、textContent</h3><ul><li>innerHTML 属性 <ul><li>将元素中的 HTML 获取为字符串形式；</li><li>设置元素中的内容；</li></ul></li><li>outerHTML 属性 <ul><li>包含了元素的完整 HTML</li><li>innerHTML 加上元素本身一样；</li></ul></li><li>textContent 属性 <ul><li>仅仅获取元素中的文本内容；</li></ul></li><li>innerHTML 和 textContent 的区别： <ul><li>使用 innerHTML，我们将其“作为 HTML”插入，带有所有 HTML 标签。</li><li>使用 textContent，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理。</li></ul></li></ul><h3 id="nodevalue" tabindex="-1"><a class="header-anchor" href="#nodevalue" aria-hidden="true">#</a> nodeValue</h3><ul><li>nodeValue/data <ul><li>用于获取非元素节点的文本内容</li></ul></li></ul><h3 id="其他属性" tabindex="-1"><a class="header-anchor" href="#其他属性" aria-hidden="true">#</a> 其他属性</h3><ul><li>hidden 属性：也是一个全局属性，可以用于设置元素隐藏。</li><li>DOM 元素还有其他属性： <ul><li>value <ul><li>&lt;input&gt;，&lt;select&gt; 和 &lt;textarea&gt;（HTMLInputElement，HTMLSelectElement……）的 value。</li></ul></li><li>href <ul><li>&lt;a href=&quot;...&quot;&gt;（HTMLAnchorElement）的 href。</li></ul></li><li>id <ul><li>所有元素（HTMLElement）的 “id” 特性（attribute）的值。</li></ul></li></ul></li></ul><h2 id="元素的属性和特性" tabindex="-1"><a class="header-anchor" href="#元素的属性和特性" aria-hidden="true">#</a> 元素的属性和特性</h2><p>元素除了有开始标签、结束标签、内容之外，还有很多的属性（attribute）</p><ul><li>浏览器在解析 HTML 元素时，会将对应的 attribute 也创建出来放到对应的元素对象上。 <ul><li>比如 id、class 就是全局的 attribute，会有对应的 id、class 属性；</li><li>比如 href 属性是针对 a 元素的，type、value 属性是针对 input 元素的；</li></ul></li></ul><h3 id="attribute-的分类" tabindex="-1"><a class="header-anchor" href="#attribute-的分类" aria-hidden="true">#</a> attribute 的分类</h3><ul><li>标准的 attribute：某些 attribute 属性是标准的，比如 id、class、href、type、value 等；</li><li>非标准的 attribute：某些 attribute 属性是自定义的，比如 abc、age、height 等；</li></ul><h3 id="attribute-的操作" tabindex="-1"><a class="header-anchor" href="#attribute-的操作" aria-hidden="true">#</a> attribute 的操作</h3><ul><li>对于所有的 attribute 访问都支持如下的方法： <ul><li>element.hasAttribute(name) — 检查特性是否存在。</li><li>element.getAttribute(name) — 获取这个特性值。</li><li>element.setAttribute(name, value) — 设置这个特性值。</li><li>element.removeAttribute(name) — 移除这个特性。</li><li>attributes：attr 对象的集合，具有 name、value 属性；</li></ul></li><li>attribute 具备以下特征： <ul><li>它们的名字是大小写不敏感的（id 与 ID 相同）。</li><li>它们的值总是字符串类型的。</li></ul></li></ul><h3 id="元素的属性-property" tabindex="-1"><a class="header-anchor" href="#元素的属性-property" aria-hidden="true">#</a> 元素的属性（property）</h3><ul><li>对于标准的 attribute，会在 DOM 对象上创建与其对应的 property 属性：</li><li>在大多数情况下，它们是相互作用的 <ul><li>改变 property，通过 attribute 获取的值，会随着改变；</li><li>通过 attribute 操作修改，property 的值会随着改变； <ul><li>但是 input 的 value 修改只能通过 attribute 的方法；</li></ul></li></ul></li><li>除非特别情况，大多数情况下，设置、获取 attribute，推荐使用 property 的方式： <ul><li>这是因为它默认情况下是有类型的；</li></ul></li></ul><p>HTML5 的 data-*自定义属性，那么它们也是可以在 dataset 属性中获取到的：</p><h3 id="javascript-动态修改样式" tabindex="-1"><a class="header-anchor" href="#javascript-动态修改样式" aria-hidden="true">#</a> JavaScript 动态修改样式</h3><ol><li>在 CSS 中编写好对应的样式，动态的添加 class；</li><li>动态的修改 style 属性；</li></ol><ul><li>在大多数情况下，如果可以动态修改 class 完成某个功能，更推荐使用动态 class；</li><li>如果对于某些情况，无法通过动态修改 class（比如精准修改某个 css 属性的值），那么就可以修改 style 属性；</li></ul><h4 id="元素的-classname-和-classlist" tabindex="-1"><a class="header-anchor" href="#元素的-classname-和-classlist" aria-hidden="true">#</a> 元素的 className 和 classList</h4><ul><li>元素的 class attribute，对应的 property 并非叫 class，而是 className： <ul><li>这是因为 JavaScript 早期是不允许使用 class 这种关键字来作为对象的属性，所以 DOM 规范使用了 className；</li><li>虽然现在 JavaScript 已经没有这样的限制，但是并不推荐，并且依然在使用 className 这个名称；</li></ul></li><li>我们可以对 className 进行赋值，它会替换整个类中的字符串。</li><li>如果我们需要添加或者移除单个的 class，那么可以使用 classList 属性。</li><li>element.classList 是一个特殊的对象： <ul><li>element.classList.add (class) ：添加一个类</li><li>element.classList.remove(class)：添加/移除类。</li><li>element.classList.toggle(class) ：如果类不存在就添加类，存在就移除它。</li><li>element.classList.contains(class)：检查给定类，返回 true/false。</li></ul></li><li>classList 是可迭代对象，可以通过 for of 进行遍历。</li></ul><h4 id="元素的-style-属性" tabindex="-1"><a class="header-anchor" href="#元素的-style-属性" aria-hidden="true">#</a> 元素的 style 属性</h4><ul><li><p>如果需要单独修改某一个 CSS 属性，那么可以通过 style 来操作：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>boxEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;100px&#39;</span>
boxEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果我们将值设置为空字符串，那么会使用 CSS 的默认样式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>boxEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>多个样式的写法，我们需要使用 cssText 属性：</p><ul><li>不推荐这种用法，因为它会替换整个字符串；</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>boxEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            width:100px;
            height:100px</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>元素 style 的读取 - getComputedStyle</p></li><li><p>如果我们需要读取样式：</p><ul><li>对于内联样式，是可以通过 style.*的方式读取到的;</li><li>对于 style、css 文件中的样式，是读取不到的；</li></ul></li><li><p>这个时候，我们可以通过 getComputedStyle 的全局函数来实现：</p></li></ul><h3 id="创建元素" tabindex="-1"><a class="header-anchor" href="#创建元素" aria-hidden="true">#</a> 创建元素</h3><p>想要插入一个元素，通常会按照如下步骤：</p><ol><li>创建一个元素；</li><li>插入元素到 DOM 的某一个位置；</li></ol><p>创建元素： document.createElement(tag)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> boxEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.box&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> h1El <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span>
h1El<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;h1&#39;</span>
boxEl<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>h1El<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入元素" tabindex="-1"><a class="header-anchor" href="#插入元素" aria-hidden="true">#</a> 插入元素</h3><ul><li>node.append(...nodes or strings) —— 在 node 末尾 插入节点或字符串，</li><li>node.prepend(...nodes or strings) —— 在 node 开头 插入节点或字符串，</li><li>node.before(...nodes or strings) —— 在 node 前面 插入节点或字符串，</li><li>node.after(...nodes or strings) —— 在 node 后面 插入节点或字符串，</li><li>node.replaceWith(...nodes or strings) —— 将 node 替换为给定的节点或字符串。</li></ul><p><img src="`+o+'" alt="插入元素"></p><h3 id="移除和克隆元素" tabindex="-1"><a class="header-anchor" href="#移除和克隆元素" aria-hidden="true">#</a> 移除和克隆元素</h3><ul><li>移除元素我们可以调用元素本身的 remove 方法：</li><li>如果我们想要复制一个现有的元素，可以通过 cloneNode 方法： <ul><li>可以传入一个 Boolean 类型的值，来决定是否是深度克隆；</li><li>深度克隆会克隆对应元素的子元素，否则不会；</li></ul></li></ul><h3 id="元素的大小-滚动" tabindex="-1"><a class="header-anchor" href="#元素的大小-滚动" aria-hidden="true">#</a> 元素的大小-滚动</h3><ul><li>clientWidth：contentWith+padding（不包含滚动条）</li><li>clientHeight：contentHeight+padding</li><li>clientTop：border-top 的宽度</li><li>clientLeft：border-left 的宽度</li><li>offsetWidth：元素完整的宽度</li><li>offsetHeight：元素完整的高度</li><li>offsetLeft：距离父元素的 x</li><li>offsetHeight：距离父元素的 y</li><li>scrollHeight：整个可滚动的区域高度</li><li>scrollTop：滚动部分的高度</li></ul><p><img src="'+c+'" alt="元素的大小-滚动"></p><h3 id="window-的大小、滚动" tabindex="-1"><a class="header-anchor" href="#window-的大小、滚动" aria-hidden="true">#</a> window 的大小、滚动</h3><ul><li>window 的 width 和 height <ul><li>innerWidth、innerHeight：获取 window 窗口的宽度和高度（包含滚动条）</li><li>outerWidth、outerHeight：获取 window 窗口的整个宽度和高度（包括调试工具、工具栏）</li><li>documentElement.clientHeight、documentElement.clientWidth：获取 html 的宽度和高度（不包含滚动条）</li></ul></li><li>window 的滚动位置： <ul><li>scrollX：X 轴滚动的位置（别名 pageXOffset）</li><li>scrollY：Y 轴滚动的位置（别名 pageYOffset）</li></ul></li><li>也有提供对应的滚动方法： <ul><li>方法 scrollBy(x,y) ：将页面滚动至 相对于当前位置的 (x, y) 位置；</li><li>方法 scrollTo(pageX,pageY) 将页面滚动至 绝对坐标；</li></ul></li></ul><h3 id="window-定时器方法" tabindex="-1"><a class="header-anchor" href="#window-定时器方法" aria-hidden="true">#</a> window 定时器方法</h3><ul><li>setTimeout 允许我们将函数推迟到一段时间间隔之后再执行。</li><li>setInterval 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。</li><li>clearTimeout：取消 setTimeout 的定时器；</li><li>clearInterval：取消 setInterval 的定时器；</li></ul><p>大多数运行环境都有内置的调度程序，并且提供了这些方法：</p><ul><li>目前来讲，所有浏览器以及 Node.js 都支持这两个方法；</li></ul>',62);function m(b,g){return i(),a("div",null,[p,t(` 1. DOM 元素之间的关系
2. 获取 DOM 元素
3. DOM 节点的 type、tag、content
4. DOM 节点的 attributes、properies
5. DOM 节点的创建、插入、克隆、删除
6. DOM 节点的样式、类
7. DOM 元素/window 的大小、滚动、坐标 `),h])}const f=l(u,[["render",m],["__file","dom.html.vue"]]);export{f as default};
