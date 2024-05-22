import{_ as n,p as s,q as a,a1 as e}from"./framework-204010b2.js";const p={},t=e(`<h1 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h1><p>泛型是 我们在定义一个函数、接口或者类的时候，不预先定义好具体的类型，而是在使用的时候再去传入指定类型</p><h2 id="泛型实现类型参数化" tabindex="-1"><a class="header-anchor" href="#泛型实现类型参数化" aria-hidden="true">#</a> 泛型实现类型参数化</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">foo</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
<span class="token generic-function"><span class="token function">foo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token generic-function"><span class="token function">foo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些常用的名称：</p><ul><li>T：Type 的缩写，类型</li><li>K、V：key 和 value 的缩写，键值对</li><li>E：Element 的缩写，元素</li><li>O：Object 的缩写，对象</li></ul><h2 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束" aria-hidden="true">#</a> 泛型约束</h2><p>有时候我们希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中：</p><ul><li>比如 string 和 array 都是有 length 的，或者某些对象也是会有 length 属性的；</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Ilength</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里表示是传入的类型必须有这个属性，也可以有其他属性，但是必须至少有这个成员</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Ilength<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getLength</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
<span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getProperty</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type<span class="token punctuation">,</span> Key <span class="token keyword">extends</span> <span class="token keyword">keyof</span> Type<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> Type<span class="token punctuation">,</span> key<span class="token operator">:</span> Key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;小张&#39;</span>，
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token function">getProperty</span><span class="token punctuation">(</span>info<span class="token punctuation">,</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射类型" tabindex="-1"><a class="header-anchor" href="#映射类型" aria-hidden="true">#</a> 映射类型</h2><p>一个类型需要基于另外一个类型，但是你又不想拷贝一份，这个时候可以考虑使用映射类型</p><ul><li>大部分内置的工具都是通过映射类型来实现的；</li><li>大多数类型体操的题目也是通过映射类型完成的；</li></ul><p>映射类型建立在索引签名的语法上：</p><ul><li>映射类型，就是使用了 PropertyKeys 联合类型的泛型；</li><li>其中 PropertyKeys 多是通过 keyof 创建，然后循环遍历键名创建一个类型；</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">MapType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>property <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// in是遍历</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">NewPerson</span> <span class="token operator">=</span> MapType<span class="token operator">&lt;</span>IPerson<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用映射类型时，有两个额外的修饰符可能会用到：</p><ul><li>一个是 readonly，用于设置属性只读；</li><li>一个是 ? ，用于设置属性可选；</li></ul><p>通过前缀 - 或者 + 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 + 前缀</p><h2 id="条件类型" tabindex="-1"><a class="header-anchor" href="#条件类型" aria-hidden="true">#</a> 条件类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 函数重载</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">sum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">?</span> <span class="token builtin">string</span> <span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg1 <span class="token operator">+</span> arg2
<span class="token punctuation">}</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用条件类型的时候，如果传入一个联合类型，就会变成 分发的</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">toArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">any</span></span> <span class="token operator">?</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token builtin">never</span>
<span class="token keyword">type</span> <span class="token class-name">newType</span> <span class="token operator">=</span> toArray<span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token comment">// number[]|string[]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当传入 string | number 时，会遍历联合类型中的每一个成员；</li><li>相当于 <code>ToArray&lt;string&gt;</code> | <code>ToArray&lt;number&gt;</code>；</li><li>所以最后的结果是：<code>string[]</code> | <code>number[]</code>；</li></ul>`,24),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","泛型.html.vue"]]);export{u as default};
