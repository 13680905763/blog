import{_ as l,p as i,q as e,a1 as a}from"./framework-204010b2.js";const t={},o=a('<h1 id="block-formatting-context" tabindex="-1"><a class="header-anchor" href="#block-formatting-context" aria-hidden="true">#</a> Block Formatting Context</h1><ul><li>在 BFC 中，box 会在垂直方向上一个挨着一个的排布；</li><li>垂直方向的间距由 margin 属性决定；</li><li>在同一个 BFC 中，相邻两个 box 之间的 margin 会折叠（collapse）；</li><li>在 BFC 中，每个元素的左边缘是紧挨着包含块的左边缘的；</li></ul><h2 id="在哪些具体的情况下会创建-bfc" tabindex="-1"><a class="header-anchor" href="#在哪些具体的情况下会创建-bfc" aria-hidden="true">#</a> 在哪些具体的情况下会创建 BFC</h2><ul><li>根元素（&lt;html&gt;）</li><li>浮动元素（元素的 float 不是 none）</li><li>绝对定位元素（元素的 position 为 absolute 或 fixed）</li><li>行内块元素（元素的 display 为 inline-block）</li><li>表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值），表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）</li><li>匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、 row、tbody、thead、tfoot 的默认属性）或 inline-table）</li><li>overflow 计算值(Computer)不为 visible 的块元素</li><li>弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）</li><li>网格元素（display 为 grid 或 inline-grid 元素的直接子元素）</li><li>display 值为 flow-root 的元素</li></ul><h2 id="作用一-解决折叠问题" tabindex="-1"><a class="header-anchor" href="#作用一-解决折叠问题" aria-hidden="true">#</a> 作用一：解决折叠问题</h2><p>在同一个 BFC 中，相邻两个 box 之间的 margin 会折叠（collapse）</p><ul><li>那么如果我们让两个 box 是不同的 BFC 呢？那么就可以解决折叠问题。</li></ul><h2 id="作用二-解决浮动高度塌陷" tabindex="-1"><a class="header-anchor" href="#作用二-解决浮动高度塌陷" aria-hidden="true">#</a> 作用二：解决浮动高度塌陷</h2><p>BFC 解决高度塌陷需要满足两个条件：</p><ul><li>浮动元素的父元素触发 BFC，形成独立的块级格式化上下文（Block Formatting Context）；</li><li>浮动元素的父元素的高度是 auto 的；</li></ul><p>BFC 的高度是 auto 的情况下，是如下方法计算高度的</p><ol><li>如果只有 inline-level，是行高的顶部和底部的距离；</li><li>如果有 block-level，是由最底层的块上边缘和最底层块盒子的下边缘之间的距离</li><li>如果有绝对定位元素，将被忽略；</li><li>如果有浮动元素，那么会增加高度以包括这些浮动元 素的下边缘</li></ol>',12),r=[o];function n(c,d){return i(),e("div",null,r)}const h=l(t,[["render",n],["__file","bfc.html.vue"]]);export{h as default};