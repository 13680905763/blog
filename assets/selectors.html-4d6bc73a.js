import{_ as i,M as n,p as s,q as t,Q as r,R as a,t as o,N as c,a1 as l}from"./framework-204010b2.js";const d={},h=l('<h1 id="css-selectors" tabindex="-1"><a class="header-anchor" href="#css-selectors" aria-hidden="true">#</a> CSS selectors</h1><h2 id="css-选择器" tabindex="-1"><a class="header-anchor" href="#css-选择器" aria-hidden="true">#</a> css 选择器</h2><p>按照一定的规则选出符合条件的元素，为之添加 CSS 样式</p><ol><li>通用选择器（universal selector）</li><li>元素选择器（type selectors）</li><li>类选择器（class selectors）</li><li>id 选择器（id selectors）</li><li>属性选择器（attribute selectors）</li><li>组合（combinators）</li><li>伪类（pseudo-classes）</li><li>伪元素（pseudo-elements）</li></ol><h3 id="通用选择器" tabindex="-1"><a class="header-anchor" href="#通用选择器" aria-hidden="true">#</a> 通用选择器</h3><p>* 所有的元素都会被选中;</p><p>一般用来给所有元素作一些通用性的设置</p><ul><li>比如内边距、外边距;</li><li>比如重置一些内容;</li></ul>',8),p=l(`<h3 id="简单选择器" tabindex="-1"><a class="header-anchor" href="#简单选择器" aria-hidden="true">#</a> 简单选择器</h3><ol><li>元素选择器（type selectors）, 使用元素的名称;</li><li>类选择器（class selectors）, 使用 .类名 ;</li><li>id 选择器（id selectors）, 使用 #id;（<strong>唯一的</strong>）</li></ol><p>[建议]多个单词的命名用短横线（连字符）命名（好看）</p><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3><p>拥有某一个属性 [att],属性等于某个值 [att=val]</p><p>了解以下</p><ul><li>[attr*=val]: 属性值包含某一个值 val;</li><li>[attr^=val]: 属性值以 val 开头;</li><li>[attr$=val]: 属性值以 val 结尾;</li><li>[attr|=val]: 属性值等于 val 或者以 val 开头后面紧跟连接符-;</li><li>[attr~=val]: 属性值包含 val, 如果有其他值必须以空格和 val 分割;</li></ul><h3 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h3><h4 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器" aria-hidden="true">#</a> 后代选择器</h4><ol><li>所有的后代(直接/间接的后代)，选择器之间以<strong>空格</strong>分割</li><li>直接子代选择器(必须是直接自带)，选择器之间以 <strong>&gt;</strong> 分割;</li></ol><h4 id="兄弟选择器" tabindex="-1"><a class="header-anchor" href="#兄弟选择器" aria-hidden="true">#</a> 兄弟选择器</h4><ol><li><strong>相邻</strong>兄弟选择器：使用符号 + 连接</li><li><strong>普遍</strong>兄弟选择器：使用符号 ~ 连接</li></ol><h4 id="交集-并集选择器" tabindex="-1"><a class="header-anchor" href="#交集-并集选择器" aria-hidden="true">#</a> 交集/并集选择器</h4><ul><li>交集选择器: 需要同时符合两个选择器条件(两个选择器紧密连接)</li><li>并集选择器: 符合一个选择器条件即可(两个选择器以,号分割)</li></ul><h3 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h3><p>伪类是选择器的一种，它用于选择处于特定状态的元素; 常见的伪类有</p><h4 id="动态伪类" tabindex="-1"><a class="header-anchor" href="#动态伪类" aria-hidden="true">#</a> 动态伪类</h4><ul><li>:link</li><li>:visited</li><li>:<strong>hover</strong></li><li>:active</li><li>:focus</li></ul><h4 id="目标伪类" tabindex="-1"><a class="header-anchor" href="#目标伪类" aria-hidden="true">#</a> 目标伪类</h4><ul><li>:target</li></ul><h4 id="语言伪类" tabindex="-1"><a class="header-anchor" href="#语言伪类" aria-hidden="true">#</a> 语言伪类</h4><ul><li>:lang()</li></ul><h4 id="元素状态伪类" tabindex="-1"><a class="header-anchor" href="#元素状态伪类" aria-hidden="true">#</a> 元素状态伪类</h4><ul><li>:enabled</li><li>:disabled</li><li>:checked</li></ul><h4 id="结构伪类" tabindex="-1"><a class="header-anchor" href="#结构伪类" aria-hidden="true">#</a> 结构伪类</h4><ul><li>:nth-child( )</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span> // 父元素中的第 1 <span class="token property">个子元素</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>2n/even<span class="token punctuation">)</span> //是父元素中的第偶数个子元素<span class="token punctuation">(</span>n是任意正整数和 0<span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>2n + 1/odd<span class="token punctuation">)</span> // <span class="token property">是父元素中的第奇数个子元素</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>-n + 2<span class="token punctuation">)</span> // 代表前 2 个子元素

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>:nth-last-child( ) <ul><li>跟:nth-child()类似，从最后一个子元素开始往前计数</li></ul></li><li>:nth-of-type( ) <ul><li>跟:nth-child()类似，只计算同种类型的元素</li></ul></li><li>:nth-last-of-type( ) <ul><li>跟:nth-of-type()类似，从最后一个子元素开始往前计数</li></ul></li><li>其他常见的伪类(了解): <ul><li>:first-child，等同于:nth-child(1)</li><li>:last-child，等同于:nth-last-child(1)</li><li>:first-of-type，等同于:nth-of-type(1)</li><li>:last-of-type，等同于:nth-last-of-type(1)</li><li>:only-child，是父元素中唯一的子元素</li><li>:only-of-type，是父元素中唯一的这种类型的子元素</li></ul></li><li>偶尔会使用的伪类: <ul><li>:root，根元素，就是 HTML 元素</li><li>:empty 代表里面完全空白的元素</li></ul></li></ul><h4 id="否定伪类" tabindex="-1"><a class="header-anchor" href="#否定伪类" aria-hidden="true">#</a> 否定伪类</h4><p>:not(x) 除 x 以外的元素</p><ul><li>x 是一个简单选择器</li><li>元素选择器、通用选择器、属性选择器、类选择器、id 选择器、伪类（除否定伪类）</li></ul>`,31),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",target:"_blank",rel:"noopener noreferrer"},f=l('<h3 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h3><p>常用的伪元素有</p><ul><li>:first-line、::first-line</li><li>:first-letter、::first-letter</li><li>:before、<strong>::before</strong></li><li>:after、<strong>::after</strong></li></ul><p>为了区分伪元素和伪类，建议伪元素使用 2 个冒号</p><ul><li>::first-line 可以针对首行文本设置属性</li><li>::first-letter 可以针对首字母设置属性</li></ul><p>::before 和::after 用来在一个元素的内容之前或之后插入其他内容（可以是文字、图片)通过 content 属性来为一个元素添加修饰性的内容。</p><p>[注意]content 不能省去，生成的是行内非替换元素</p>',7);function v(b,k){const e=n("ExternalLinkIcon");return s(),t("div",null,[h,r(" [大多数浏览器会遍历 html 所有的元素遍历设置（浪费性能，不建议怎么做）] "),p,a("p",null,[a("a",u,[o("所有伪类"),c(e)])]),f])}const g=i(d,[["render",v],["__file","selectors.html.vue"]]);export{g as default};