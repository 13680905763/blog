import{_ as n,p as s,q as a,a1 as e}from"./framework-204010b2.js";const t="/blog/img/web/javascript/js-advanced/es6/ecma内存图.jpg",p="/blog/img/web/javascript/js-advanced/es6/environment.jpg",o={},c=e('<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> es6</h1><h2 id="新的-ecma-代码执行描述" tabindex="-1"><a class="header-anchor" href="#新的-ecma-代码执行描述" aria-hidden="true">#</a> 新的 ecma 代码执行描述</h2><p>es5</p><ul><li>执行上下文栈：Execution Context Stack，用于执行上下文的栈结构；</li><li>执行上下文：Execution Context，代码在执行之前会先创建对应的执行上下文；</li><li>变量对象：Variable Object，上下文关联的 VO 对象，用于记录函数和变量声明；</li><li>全局对象：Global Object，全局执行上下文关联的 VO 对象；</li><li>激活对象：Activation Object，函数执行上下文关联的 VO 对象；</li><li>作用域链：scope chain，作用域链，用于关联指向上下文的变量查找；</li></ul><h3 id="词法环境" tabindex="-1"><a class="header-anchor" href="#词法环境" aria-hidden="true">#</a> 词法环境</h3><p>词法环境是一种规范类型，用于在词法嵌套结构中定义关联的变量、函数等标识符；</p><ul><li>一个词法环境是由环境记录（Environment Record）和一个外部词法环境（oute;r Lexical Environment）组成；</li><li>一个词法环境经常用于关联一个函数声明、代码块语句、try-catch 语句，当它们的代码被执行时，词法环境被创建出来；</li></ul><p>在 ES5 之后，执行一个代码，通常会关联对应的词法环境；</p><ul><li>LexicalEnvironment 用于处理 let、const 声明的标识符：</li><li>VariableEnvironment 用于处理 var 和 function 声明的标识符</li></ul><h3 id="环境记录-environment-record" tabindex="-1"><a class="header-anchor" href="#环境记录-environment-record" aria-hidden="true">#</a> 环境记录（Environment Record）</h3><p>在这个规范中有两种主要的环境记录值:声明式环境记录和对象环境记录。</p><ul><li>声明式环境记录：声明性环境记录用于定义 ECMAScript 语言语法元素的效果，如函数声明、变量声明和直接将标识符绑定与 ECMAScript 语言值关联起来的 Catch 子句。</li><li>对象式环境记录：对象环境记录用于定义 ECMAScript 元素的效果，例如 WithStatement，它将标识符绑定与某些对象的属性 关联起来。</li></ul><p><img src="'+t+`" alt="ecma内存图"></p><h2 id="ees6" tabindex="-1"><a class="header-anchor" href="#ees6" aria-hidden="true">#</a> ees6</h2><h3 id="let-const" tabindex="-1"><a class="header-anchor" href="#let-const" aria-hidden="true">#</a> let/const</h3><h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h4><p>const 一旦被赋值，就不能被修改；如果赋是引用类型，那么可以通过引用找到对应的对象，修改对象的内容； (let const 不允许重复声明变量)</p><h4 id="作用域提升" tabindex="-1"><a class="header-anchor" href="#作用域提升" aria-hidden="true">#</a> 作用域提升</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token comment">// 报错</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这些变量会被创建在包含他们的词法环境被实例化时，但是是不可以访问它们的（处于暂时性死区 TDZ），直到词法绑定被求值；因此 let、const 没有进行作用域提升，但是会在解析阶段被创建出来。</p><h4 id="window-对象添加属性" tabindex="-1"><a class="header-anchor" href="#window-对象添加属性" aria-hidden="true">#</a> Window 对象添加属性</h4><p>全局通过 var 来声明一个变量，会在 window 上添加一个属性： let、const 是不会给 window 上添加任何属性的。 <img src="`+p+`" alt="environment"></p><h4 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">var</span> foo <span class="token number">1</span><span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo1<span class="token punctuation">)</span> <span class="token comment">// 可以访问</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> foo2 <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo2<span class="token punctuation">)</span> <span class="token comment">// 不可以访问，let const 有块级作用域</span>

<span class="token comment">// 应用 for循环</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;fafa&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">may name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// foo\`\`,还可以当成函数调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">30</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 与解构一起使用</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fafa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name <span class="token operator">=</span> <span class="token string">&#39;fafa&#39;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">18</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 最后一个参数是 ... 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剩余参数和 arguments 区别</p><ul><li>剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参；</li><li>arguments 对象不是一个真正的数组，而 rest 参数是一个真正的数组，可以进行数组的所有操作；</li><li>arguments 是早期的 ECMAScript 中为了方便去获取所有的参数提供的一个数据结构，而 rest 参数是 ES6 中提供并且希望以此 来替代 arguments 的；</li></ul><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h3><ul><li>箭头函数是没有显式原型 prototype 的，所以不能作为构造函数，使用 new 来创建对象；</li><li>箭头函数也不绑定 this、arguments、super 参数；</li></ul><h3 id="展开语法" tabindex="-1"><a class="header-anchor" href="#展开语法" aria-hidden="true">#</a> 展开语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fafa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值的表示" tabindex="-1"><a class="header-anchor" href="#数值的表示" aria-hidden="true">#</a> 数值的表示</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token number">0b100</span>
<span class="token keyword">const</span> num3 <span class="token operator">=</span> <span class="token number">0o100</span>
<span class="token keyword">const</span> num4 <span class="token operator">=</span> <span class="token number">0x100</span>
<span class="token comment">// ES2021新增特性：数字过长时，可以使用_作为连接符</span>
<span class="token keyword">const</span> num5 <span class="token operator">=</span> <span class="token number">100_000_000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol-的基本使用" tabindex="-1"><a class="header-anchor" href="#symbol-的基本使用" aria-hidden="true">#</a> Symbol 的基本使用</h3><p>symbol 用来生成一个独一无二的值，Symbol 函数执行后每次创建出来的值都是独一无二的；</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;cba&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>s1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
obj<span class="token punctuation">[</span>s2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;cba&#39;</span>

<span class="token comment">// 相同值的 Symbol</span>
<span class="token keyword">const</span> s1 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> s2 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1 <span class="token operator">===</span> s2<span class="token punctuation">)</span> <span class="token comment">//true</span>

<span class="token keyword">const</span> key <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">ketFor</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token comment">// abc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-map" tabindex="-1"><a class="header-anchor" href="#set-map" aria-hidden="true">#</a> set&amp;map</h3><p>在 ES6 中新增了另外两种数据结构：Set、Map，以及它们的另外形式 WeakSet、WeakMap。</p><h4 id="set-的基本使用" tabindex="-1"><a class="header-anchor" href="#set-的基本使用" aria-hidden="true">#</a> Set 的基本使用</h4><p>类似于数组，但是和数组的区别是元素不能重复，那么 Set 有一个非常常用的功能就是给数组去重。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> set1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
set1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
set1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>
set1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set1<span class="token punctuation">)</span> <span class="token comment">// Set(3) {10, 14, 16}</span>
<span class="token keyword">const</span> set2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span> <span class="token comment">// Set(3) {11, 15, 18}</span>

<span class="token comment">// 数组去重</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token keyword">const</span> newArr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span>
<span class="token keyword">const</span> newArr2 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Set 常见的属性： <ul><li>size：返回 Set 中元素的个数；</li></ul></li><li>Set 常用的方法： <ul><li>add(value)：添加某个元素，返回 Set 对象本身；</li><li>delete(value)：从 set 中删除和这个值相等的元素，返回 boolean 类型；</li><li>has(value)：判断 set 中是否存在某个元素，返回 boolean 类型；</li><li>clear()：清空 set 中所有的元素，没有返回值；</li><li>forEach(callback, [, thisArg])：通过 forEach 遍历 set；</li></ul></li><li>另外 Set 是支持 for of 的遍历的。</li></ul><h4 id="weakset-使用" tabindex="-1"><a class="header-anchor" href="#weakset-使用" aria-hidden="true">#</a> WeakSet 使用</h4><ul><li>WeakSet 中只能存放对象类型，不能存放基本数据类型；</li><li>WeakSet 对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么 GC 可以对该对象进行回收；</li><li>WeakSet 常见的方法： <ul><li>add(value)：添加某个元素，返回 WeakSet 对象本身；</li><li>delete(value)：从 WeakSet 中删除和这个值相等的元素，返回 boolean 类型；</li><li>has(value)：判断 WeakSet 中是否存在某个元素，返回 boolean 类型；</li></ul></li></ul><p>注意：WeakSet 不能遍历</p><ul><li>因为 WeakSet 只是对对象的弱引用，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁。</li><li>所以存储到 WeakSet 中的对象是没办法获取的；</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pwset <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pwset<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pwset<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;不能通过其他对象调用running方法&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;running&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map-的基本使用" tabindex="-1"><a class="header-anchor" href="#map-的基本使用" aria-hidden="true">#</a> map 的基本使用</h4><p>用于存储映射关系，可以用对象作为 key</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fafa&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token string">&#39;cba&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">,</span> map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> map2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span>obj1<span class="token punctuation">,</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>obj2<span class="token punctuation">,</span> <span class="token string">&#39;cba&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Map 常见的属性： <ul><li>size：返回 Map 中元素的个数；</li></ul></li><li>Map 常见的方法： <ul><li>set(key, value)：在 Map 中添加 key、value，并且返回整个 Map 对象；</li><li>get(key)：根据 key 获取 Map 中的 value；</li><li>has(key)：判断是否包括某一个 key，返回 Boolean 类型；</li><li>delete(key)：根据 key 删除一个键值对，返回 Boolean 类型；</li><li>clear()：清空所有的元素；</li><li>forEach(callback, [, thisArg])：通过 forEach 遍历 Map；</li></ul></li><li>Map 也可以通过 for of 进行遍历。</li></ul><h4 id="weakmap-的使用" tabindex="-1"><a class="header-anchor" href="#weakmap-的使用" aria-hidden="true">#</a> WeakMap 的使用</h4><ul><li>WeakMap 的 key 只能使用对象，不接受其他的类型作为 key；</li><li>WeakMap 的 key 对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么 GC 可以回收该对象；</li></ul><p>WeakMap 也是不能遍历的，没有 forEach 方法，也不支持通过 for of 的方式进行遍历；（应用于 vue 响应式）</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><ul><li>Proxy、Reflect</li><li>Promise</li><li>ES Module 模块化开发</li></ul>`,61),l=[c];function i(u,r){return s(),a("div",null,l)}const d=n(o,[["render",i],["__file","es6.html.vue"]]);export{d as default};
