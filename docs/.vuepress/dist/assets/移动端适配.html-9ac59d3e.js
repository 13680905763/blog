import{_ as a,M as e,p as t,q as p,R as l,t as i,N as o,a1 as s}from"./framework-204010b2.js";const r="/blog/img/web/css/移动端适配/移动端屏幕.jpg",c="/blog/img/web/css/移动端适配/布局&视觉视口.jpg",u="/blog/img/web/css/移动端适配/ideal-viewport.jpg",d="/blog/img/web/css/移动端适配/meta-viewport.jpg",m="/blog/img/web/css/移动端适配/rem+font-size.jpg",h="/blog/img/web/css/移动端适配/rem媒体查询.jpg",v="/blog/img/web/css/移动端适配/remjs.jpg",b="/blog/img/web/css/移动端适配/rem-vscode.jpg",k="/blog/img/web/css/移动端适配/vw-vscode.jpg",w={},x=s('<h1 id="移动端适配" tabindex="-1"><a class="header-anchor" href="#移动端适配" aria-hidden="true">#</a> 移动端适配</h1><ul><li>移动端开发目前主要包括三类： <ul><li>原生 App 开发（iOS、Android、RN、uniapp、Flutter 等）</li><li>小程序开发（原生小程序、uniapp、Taro 等）</li><li>Web 页面（移动端的 Web 页面，可以使用浏览器或者 webview 浏览）</li></ul></li><li>因为目前移动端设备较多，所以我们需要对其进行一些适配。</li><li>这里有两个概念： <ul><li>自适应：根据不同的设备屏幕大小来自动调整尺寸、大小；</li><li>响应式：会随着屏幕的实时变动而自动调整，是一种自适应；</li></ul></li></ul><p><img src="'+r+'" alt="移动端适配"></p><h2 id="viewport" tabindex="-1"><a class="header-anchor" href="#viewport" aria-hidden="true">#</a> viewport</h2><h3 id="pc-端" tabindex="-1"><a class="header-anchor" href="#pc-端" aria-hidden="true">#</a> pc 端</h3><ul><li>在一个浏览器中，我们可以看到的区域就是视口（viewport）；</li><li>我们说过 fixed 就是相对于视口来进行定位的；</li><li>在 PC 端的页面中，我们是不需要对视口进行区分，因为我们的布局视口和视觉视口是同一个；</li></ul><h2 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h2>',7),f=l("li",null,[i("在移动端，不太一样，你布局的视口和你可见的视口是不太一样的。 "),l("ul",null,[l("li",null,"这是因为移动端的网页窗口往往比较小，我们可能会希望一个大的网页在移动端可以完整的显示；"),l("li",null,"所以在默认情况下，移动端的布局视口是大于视觉视口的；")])],-1),g=l("li",null,[i("在移动端，视口划分为三种情况： "),l("ul",null,[l("li",null,"布局视口（layout viewport）"),l("li",null,"视觉视口（visual layout）"),l("li",null,"理想视口（ideal layout）")])],-1),_={href:"https://www.quirksmode.org/mobile/viewports2.html",target:"_blank",rel:"noopener noreferrer"},z=s('<h3 id="布局视口和视觉视口" tabindex="-1"><a class="header-anchor" href="#布局视口和视觉视口" aria-hidden="true">#</a> 布局视口和视觉视口</h3><ul><li>布局视口（layout viewport）</li><li>默认情况下，一个在 PC 端的网页在移动端会如何显示呢？ <ol><li>它会按照宽度为 980px 来布局一个页面的盒子和内容；</li><li>为了显示可以完整的显示在页面中，对整个页面进行缩小；</li></ol></li><li>我们相对于 980px 布局的这个视口，称之为布局视口（layout viewport）； <ul><li>布局视口的默认宽度是 980px；</li></ul></li><li>视觉视口（visual viewport） <ul><li>如果默认情况下，我们按照 980px 显示内容，那么右侧有一部分区域 就会无法显示，所以手机端浏览器会默认对页面进行缩放以显示到用 户的可见区域中；</li><li>那么显示在可见区域的这个视口，就是视觉视口（visual viewport）</li></ul></li><li>在 Chrome 上按 shift+鼠标左键可以进行缩放。</li></ul><p><img src="'+c+'" alt="布局&amp;视觉视口"></p><h3 id="理想视口" tabindex="-1"><a class="header-anchor" href="#理想视口" aria-hidden="true">#</a> 理想视口</h3><ul><li><p>如果所有的网页都按照 980px 在移动端布局，那么最终页面都会被缩放显示。</p><ul><li><p>事实上这种方式是不利于我们进行移动的开发的，我们希望的是设置 100px，那么显示的就是 100px；</p></li><li><p>如何做到这一点呢？通过设置理想视口（ideal viewport）；</p><p><img src="'+u+'" alt="ideal-viewport"></p></li></ul></li><li><p>理想视口（ideal viewport）：</p><ul><li>默认情况下的 layout viewport 并不适合我们进行布局；</li><li>我们可以对 layout viewport 进行宽度和缩放的设置，以满足正常在一个移动端窗口的布局；</li><li>这个时候可以设置 meta 中的 viewport；</li></ul></li></ul><p><img src="'+d+'" alt="meta-viewport"></p><h2 id="移动端适配方案" tabindex="-1"><a class="header-anchor" href="#移动端适配方案" aria-hidden="true">#</a> 移动端适配方案</h2><ul><li>移动端的屏幕尺寸通常是非常繁多的，很多时候我们希望在不同的屏幕尺寸上显示不同的大小； <ul><li>比如我们设置一个 100x100 的盒子 <ul><li>在 375px 的屏幕上显示是 100x100;</li><li>在 320px 的屏幕上显示是 90+x90+;</li><li>在 414px 的屏幕上显示是 100+x100+;</li></ul></li><li>其他尺寸也是类似，比如 padding、margin、border、left，甚至是 font-size 等等；</li></ul></li><li>这个时候，我们可能可以想到一些方案来处理尺寸： <ol><li>百分比设置； <ul><li>因为不同属性的百分比值，相对的可能是不同参照物，所以百分比往往很难统一；</li><li>所以百分比在移动端适配中使用是非常少的；</li></ul></li><li>rem 单位+动态 html 的 font-size；</li><li>vw 单位；</li><li>flex 的弹性布局；</li></ol></li></ul><h3 id="rem-动态-html-的-font-size" tabindex="-1"><a class="header-anchor" href="#rem-动态-html-的-font-size" aria-hidden="true">#</a> rem+动态 html 的 font-size</h3><ul><li>rem 单位是相对于 html 元素的 font-size 来设置的，那么如果我们需要在不同的屏幕下有不同的尺寸，可以动态的修改 html 的 font-size 尺寸。</li><li>案例： <ol><li>设置一个盒子的宽度是 2rem；</li><li>设置不同的屏幕上 html 的 font-size 不同；</li></ol></li></ul><p><img src="'+m+'" alt="rem+font-size"></p><p>我们只需要考虑两个问题：</p><ol><li>针对不同的屏幕，设置 html 不同的 font-size；</li><li>将原来要设置的尺寸，转化成 rem 单位；</li></ol><h4 id="rem-的-font-size-尺寸" tabindex="-1"><a class="header-anchor" href="#rem-的-font-size-尺寸" aria-hidden="true">#</a> rem 的 font-size 尺寸</h4><ol><li>媒体查询 <ul><li>可以通过媒体查询来设置不同尺寸范围内的屏幕 html 的 font-size 尺寸；</li><li>缺点： <ol><li>我们需要针对不同的屏幕编写大量的媒体查询；</li><li>如果动态改变尺寸，不会实时的进行更新； <img src="'+h+'" alt="rem媒体查询"></li></ol></li></ul></li><li>编写 js 代码 <ul><li>如果希望实时改变屏幕尺寸时，font-size 也可以实时更改，可以通过 js 代码；</li><li>方法： <ol><li>根据 html 的宽度计算出 font-size 的大小，并且设置到 html 上；</li><li>监听页面的实时改变，并且重新设置 font-size 的大小到 html 上； <img src="'+v+`" alt="remjs"></li></ol></li></ul></li><li>lib-flexible 库 <ul><li>事实上，lib-flexible 库做的事情是相同的，你也可以直接引入它；</li></ul></li></ol><h4 id="rem-的单位换算" tabindex="-1"><a class="header-anchor" href="#rem-的单位换算" aria-hidden="true">#</a> rem 的单位换算</h4><ol><li><p>手动换算</p><ul><li>比如有一个在 375px 屏幕上，100px 宽度和高度的盒子；</li><li>我们需要将 100px 转成对应的 rem 值；</li><li>100/37.5=2.6667，其他也是相同的方法计算即可；</li></ul></li><li><p>less/scss 函数</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.pxToRem(<span class="token variable">@px</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">result</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@px</span> <span class="token operator">/</span> <span class="token variable">@htmlFontSize</span><span class="token punctuation">)</span> <span class="token operator">*</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> .<span class="token function">pxToRem</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span> [result]<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> .<span class="token function">pxToRem</span><span class="token punctuation">(</span>18<span class="token punctuation">)</span> [result]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>postcss-pxtorem</p><ul><li>目前在前端的工程化开发中，借助于 webpack 的工具来完成自动的转化；</li></ul></li><li><p>VSCode 插件</p><ul><li>px to rem 的插件，在编写时自动转化； <img src="`+b+`" alt="rem-vscode"></li></ul></li></ol><h3 id="vw" tabindex="-1"><a class="header-anchor" href="#vw" aria-hidden="true">#</a> vw</h3><h4 id="vw-和-rem-的对比" tabindex="-1"><a class="header-anchor" href="#vw-和-rem-的对比" aria-hidden="true">#</a> vw 和 rem 的对比</h4><ul><li>rem 事实上是作为一种过渡的方案，它利用的也是 vw 的思想。 <ul><li>前面不管是我们自己编写的 js，还是 flexible 的源码；</li><li>都是将 1rem 等同于设计稿的 1/10，在利用 1rem 计算相对于整个屏幕的尺寸大小；</li><li>那么我们来思考，1vw 不是刚好等于屏幕的 1/100 吗？</li><li>而且相对于 rem 还更加有优势；</li></ul></li><li>vw 相比于 rem 的优势： <ol><li>不需要去计算 html 的 font-size 大小，也不需要给 html 设置这样一个 font-size；</li><li>不会因为设置 html 的 font-size 大小，而必须给 body 再设置一个 font-size，防止继承；</li><li>因为不依赖 font-size 的尺寸，所以不用担心某些原因 html 的 font-size 尺寸被篡改，页面尺寸混乱；</li><li>vw 相比于 rem 更加语义化，1vw 刚才是 1/100 的 viewport 的大小;</li><li>可以具备 rem 之前所有的优点；</li></ol></li><li>vw 我们只面临一个问题，将尺寸换算成 vw 的单位即可；</li><li>所以，目前相比于 rem，更加推荐大家使用 vw（但是理解 rem 依然很重要）</li></ul><h4 id="vw-的单位换算" tabindex="-1"><a class="header-anchor" href="#vw-的单位换算" aria-hidden="true">#</a> vw 的单位换算</h4><ol><li><p>手动换算</p><ul><li>比如有一个在 375px 屏幕上，100px 宽度和高度的盒子；</li><li>我们需要将 100px 转成对应的 vw 值；</li><li>100/3.75=26.667，其他也是相同的方法计算即可；</li></ul></li><li><p>less/scss 函数</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@vwUnit<span class="token punctuation">:</span></span> 3.75<span class="token punctuation">;</span>
<span class="token selector">.pxToVw(<span class="token variable">@px</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">result</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@px</span> <span class="token operator">/</span> <span class="token variable">@vwUnit</span><span class="token punctuation">)</span> <span class="token operator">*</span> 1vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> .<span class="token function">pxToVw</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span> [result]<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> .<span class="token function">pxToVw</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span> [result]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>postcss-px-to-viewport-8-plugin（后续学习）</p><ul><li>和 rem 一样，在前端的工程化开发中，借助于 webpack 的工具来完成自动的转化；</li></ul></li><li><p>VSCode 插件</p><ul><li>px to vw 的插件，在编写时自动转化； <img src="`+k+'" alt="vw-vscode"></li></ul></li></ol>',22);function j(y,V){const n=e("ExternalLinkIcon");return t(),p("div",null,[x,l("ul",null,[f,g,l("li",null,[i("这些"),l("a",_,[i("概念"),o(n)]),i("的区分，事实上来自 ppk，（特别是在移动端浏览器）")])]),z])}const C=a(w,[["render",j],["__file","移动端适配.html.vue"]]);export{C as default};
