import{_ as n,p as a,q as s,a1 as i}from"./framework-204010b2.js";const l={},t=i(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1><ul><li>函数其实就是某段代码的封装，这段代码帮助我们完成某一个功能；</li><li>默认情况下 JavaScript 引擎或者浏览器会给我们提供一些已经实现好的函数；</li><li>我们也可以编写属于自己的函数；</li></ul><h2 id="声明和调用函数" tabindex="-1"><a class="header-anchor" href="#声明和调用函数" aria-hidden="true">#</a> 声明和调用函数</h2><h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3><ul><li>声明函数使用 function 关键字：这种写法称之为函数的定义</li><li>注意： <ul><li>函数名的命名规则和前面变量名的命名规则是相同的；</li><li>函数要尽量做到见名知意（并且函数通常是一些行为（action），所以使用动词会更多一些）；</li><li>函数定义完后里面的代码是不会执行的，函数必须调用才会执行；</li></ul></li></ul><h3 id="调用" tabindex="-1"><a class="header-anchor" href="#调用" aria-hidden="true">#</a> 调用</h3><ul><li>调用函数通过函数名()即可：比如 test()</li></ul><h2 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a> 函数的参数</h2><ul><li>函数的参数，增加函数的 通用性，针对 相同的数据处理逻辑，能够 适应更多的数据 <ul><li>形参和实参 <ol><li>形参（参数 parameter）：定义 函数时，小括号中的参数，是用来接收参数用的，在函数内部 作为变量使用</li><li>实参（参数 argument）：调用 函数时，小括号中的参数，是用来把数据传递到 函数内部 用的</li></ol></li></ul></li></ul><h2 id="函数的返回值" tabindex="-1"><a class="header-anchor" href="#函数的返回值" aria-hidden="true">#</a> 函数的返回值</h2><p>函数不仅仅可以有参数, 也可以有返回值：</p><ul><li>使用 return 关键字来返回结果；</li><li>一旦在函数中执行 return 操作，那么当前函数会终止；</li><li>如果函数中没有使用 return 语句 ，那么函数有默认的返回值：undefined；</li><li>如果函数使用 return 语句，但是 return 后面没有任何值，那么函数的返回值也是：undefined；</li></ul><h2 id="函数中调用函数" tabindex="-1"><a class="header-anchor" href="#函数中调用函数" aria-hidden="true">#</a> 函数中调用函数</h2><ul><li>函数内部是可以调用另外一个函数的。</li><li>函数调用自己还有一个专业的名词，叫做递归（Recursion） <ul><li>但是函数调用自己必须有结束条件，否则会产生无限调用，造成报错；</li></ul></li></ul><h2 id="局部变量和外部变量" tabindex="-1"><a class="header-anchor" href="#局部变量和外部变量" aria-hidden="true">#</a> 局部变量和外部变量</h2><ul><li>在 JavaScript（ES5 之前）中没有块级作用域的概念，但是函数可以定义自己的作用域。 <ul><li>作用域（Scope）表示一些标识符的作用有效范围；</li><li>函数的作用域表示在函数内部定义的变量，只有在函数内部可以被访问到；</li></ul></li><li>外部变量和局部变量的概念： <ul><li>定义在函数内部的变量，被称之为局部变量（Local Variables）。</li><li>定义在函数外部的变量，被称之为外部变量（Outer Variables）。</li></ul></li><li>什么是全局变量？ <ul><li>在函数之外声明的变量（在 script 中声明的），称之为全局变量。</li><li>全局变量在任何函数中都是可见的。</li><li>通过 var 声明的全局变量会在 window 对象上添加一个属性（了解）；</li></ul></li><li>在函数中，访问变量优先访问自己函数中的变量，没有找到时，在外部中访问。</li></ul><h2 id="函数表达式" tabindex="-1"><a class="header-anchor" href="#函数表达式" aria-hidden="true">#</a> 函数表达式</h2><ul><li><p>在 JavaScript 中，函数并不是一种神奇的语法结构，而是一种特殊的值。</p><ul><li>前面定义函数的方式，我们称之为函数的声明（Function Declaration）；</li></ul></li><li><p>还有另外一种写法是函数表达式（Function Expressions）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token function">funciton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo funciton&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注意，function 关键字后面没有函数名</p><ul><li>函数表达式允许省略函数名。</li></ul></li><li><p>无论函数是如何创建的，函数都是一个值（这个值的类型是一个对象，对象的概念后面会讲到）。</p></li><li><p>在 JavaScript 开发中，我们可以将函数作为<strong>头等公民</strong>。</p></li></ul><h2 id="函数声明-vs-函数表达式" tabindex="-1"><a class="header-anchor" href="#函数声明-vs-函数表达式" aria-hidden="true">#</a> 函数声明 vs 函数表达式</h2><ul><li>首先，语法不同： <ul><li>函数声明：在主代码流中声明为单独的语句的函数。</li><li>函数表达式：在一个表达式中或另一个语法结构中创建的函数。</li></ul></li><li>其次，JavaScript 创建函数的时机是不同的： <ul><li>函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。</li><li>在函数声明被定义之前，它就可以被调用。 <ul><li>这是内部算法的原故；</li><li>当 JavaScript 准备 运行脚本时，首先会在脚本中寻找全局函数声明，并创建这些函数；</li></ul></li></ul></li><li>开发中如何选择呢？ <ul><li>当我们需要声明一个函数时，首先考虑函数声明语法。</li><li>它能够为组织代码提供更多的灵活性，因为我们可以在声明这些函数之前调用这些函数。</li></ul></li></ul><h2 id="javascript-头等函数" tabindex="-1"><a class="header-anchor" href="#javascript-头等函数" aria-hidden="true">#</a> JavaScript 头等函数</h2><ul><li>头等函数（first-class function；第一级函数）是指在程序设计语言中，函数被当作头等公民。 <ul><li>这意味着，函数可以作为别的<strong>函数的参数、函数的返回值</strong>，赋值给变量或存储在数据结构中；</li><li>有人主张也应包括支持匿名函数；</li></ul></li><li>通常我们对作为头等公民的编程方式，称之为<strong>函数式编程</strong><ul><li>JavaScript 就是符合函数式编程的语言，这个也是 JavaScript 的一大特点；</li></ul></li><li>比如：函数可以在变量和变量之间相互进行赋值；</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> funciton <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo funciton&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">var</span> bar <span class="token operator">=</span> foo
 <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回调函数-callback-function" tabindex="-1"><a class="header-anchor" href="#回调函数-callback-function" aria-hidden="true">#</a> 回调函数（Callback Function）</h2><ul><li><p>既然函数可以作为一个值相互赋值，也可以传递给另外一个函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>foo 这种函数我们也可以称之为高阶函数（Higher-order function）；</p></li><li><p>高阶函数必须至少满足两个条件之一：</p><ul><li>接受一个或多个函数作为输入；</li><li>输出一个函数；</li></ul></li><li><p>匿名（anonymous）函数的理解：</p><ul><li>如果在传入一个函数时，我们没有指定这个函数的名词或者通过函数表达式指定函数对应的变量，那么这个函数称之为匿名函数（没有函数名的函数）。</li></ul></li></ul><h2 id="立即执行函数" tabindex="-1"><a class="header-anchor" href="#立即执行函数" aria-hidden="true">#</a> 立即执行函数</h2><ul><li><p>专业名字：Immediately-Invoked Function Expression（IIFE 立即调用函数表达式）</p></li><li><p>表达的含义是一个函数定义完后被立即执行； ✓ 第一部分是定义了一个匿名函数，这个函数有自己独立的作用域。 ✓ 第二部分是后面的（），表示这个函数被执行了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;立即执行&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>会创建一个独立的执行上下文环境，可以避免外界访问或修改内部的变量，也避免了对内部变量的修改</p></li></ul><p>立即执行函数必须是一个表达式（整体），不能是函数声明（了解即可）：</p><ul><li><p>下面的这种写法会报错，因为是一个函数声明，不是一个函数表达式；</p></li><li><p>当圆括号出现在匿名函数的末尾想要调用函数时，它会默认将函数当成是函数声明。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;立即执行&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当圆括号包裹函数时，它会默认将函数作为表达式去解析，而不是函数声明。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;立即执行&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,29),e=[t];function p(c,u){return a(),s("div",null,e)}const r=n(l,[["render",p],["__file","function.html.vue"]]);export{r as default};
