import{_ as n,p as s,q as a,a1 as e}from"./framework-204010b2.js";const t="/blog/img/web/javascript/js-advanced/继承/原型图.jpg",p="/blog/img/web/javascript/js-advanced/继承/原型链内存.jpg",o="/blog/img/web/javascript/js-advanced/继承/原型继承关系.jpg",c={},i=e(`<h1 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h1><h2 id="object-prototype" tabindex="-1"><a class="header-anchor" href="#object-prototype" aria-hidden="true">#</a> Object Prototype</h2><p>Each object in has a special built-in attribute <code>[prototype]</code>, which can point to another object</p><p>当我们通过 key 来获取对象上的 value 时，会先在对象自身上找，如果找到就返回，找不到就去原型对象上找</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>_proto_<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="function-prototype" tabindex="-1"><a class="header-anchor" href="#function-prototype" aria-hidden="true">#</a> Function Prototype</h2><p>All functions have a prototype attribute</p><h3 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h3><ol><li>在内存中创建一个新的对象（空对象）；</li><li>这个对象内部的<code>[[prototype]]</code>属性会被赋值为该构造函数的 prototype 属性；</li></ol><p>那么也就意味着我们通过 Person 构造函数创建出来的所有对象的<code>[[prototype]]</code>属性都指向 Person.prototype：</p><p><img src="`+t+`" alt="原型图"> 我们通常把函数放到原型上，避免 new 出重复的函数</p><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>By default, a property called constructor will be added to the prototype, which points to the current function object；</p><h3 id="rewrite-prototype-object" tabindex="-1"><a class="header-anchor" href="#rewrite-prototype-object" aria-hidden="true">#</a> Rewrite prototype object</h3><p>If we need to add too many attributes to the prototype, we usually rewrite the entire prototype object</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
foo<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fafa&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token function-variable function">playing</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;play&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;constructor&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> Foo
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prototype-chain" tabindex="-1"><a class="header-anchor" href="#prototype-chain" aria-hidden="true">#</a> Prototype chain</h2><ul><li>从一个对象上获取属性，如果在当前对象中没有获取到就会去它的原型上面获取：</li></ul><p>[Object: null prototype] {} 原型有什么特殊吗？</p><ul><li>该对象有原型属性，但是它的原型属性已经指向的是 null，也就是已经是顶层原型了；</li><li>该对象上有很多默认的属性和方法；</li></ul><p><img src="`+p+`" alt="原型链内存"></p><h2 id="原型链继承" tabindex="-1"><a class="header-anchor" href="#原型链继承" aria-hidden="true">#</a> 原型链继承</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 父类构造函数</span>
<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 被继承的属性</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;fafa&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 父类原型上添加内容</span>
<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;被继承的方法&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义子类构造函数</span>
<span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">Son</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点</p><ul><li>直接打印对象是看不到这个属性的</li><li>这个属性会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题；</li><li>不能给 Parent 传递参数</li></ul><h2 id="借用构造函数继承" tabindex="-1"><a class="header-anchor" href="#借用构造函数继承" aria-hidden="true">#</a> 借用构造函数继承</h2><p>在子类型构造函数的内部调用父类型构造函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> name <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在子类调用父类构造函数，在子类实例中每个引用属性都是独有的</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合继承" tabindex="-1"><a class="header-anchor" href="#组合继承" aria-hidden="true">#</a> 组合继承</h2><p>原型链+借用构造函数</p><p>缺点：</p><ul><li><p>调用两次父类构造函数。</p><ul><li>一次在创建子类原型的时候；</li><li>另一次在子类构造函数内部(也就是每次创建子类实例的时候)；</li></ul></li><li><p>所有的子类实例事实上会拥有两份父类的属性</p><ul><li>一份在当前的实例自己里面(也就是 person 本身的)，</li><li>一份在子类对应的原型对象中(也就是 person.**<em>proto</em>**里面)；</li></ul></li></ul><h2 id="原型式继承函数" tabindex="-1"><a class="header-anchor" href="#原型式继承函数" aria-hidden="true">#</a> 原型式继承函数</h2><p>student 对象的原型指向了 person 对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">objCopy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 返回一个新对象，该对象的_proto_指向传入的父对象</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  f<span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 父类方法，属性可复用</span>
<span class="token comment">// 引用类型属性会被共享</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="寄生式继承函数" tabindex="-1"><a class="header-anchor" href="#寄生式继承函数" aria-hidden="true">#</a> 寄生式继承函数</h2><p>原型类继承和工厂模式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原型式继承+工厂模式(批量生成继承对象)</span>

<span class="token keyword">function</span> <span class="token function">objCopy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  f<span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createStudent</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token function">objCopy</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
  newObj<span class="token punctuation">.</span><span class="token function-variable function">studying</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;studying&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;小明&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token function">createStudent</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
student<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;小张&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="寄生组合式继承" tabindex="-1"><a class="header-anchor" href="#寄生组合式继承" aria-hidden="true">#</a> 寄生组合式继承</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 子类的原型对象 = 父类寄生的原型对象</span>

<span class="token keyword">function</span> <span class="token function">objCopy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  f<span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">inheritPrototype</span><span class="token punctuation">(</span><span class="token parameter">subType<span class="token punctuation">,</span> superType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 子类的原型对象 = 父类寄生的原型对象</span>
  subType<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token function">objCopy</span><span class="token punctuation">(</span>superType<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  subType<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> subType
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象方法的补充" tabindex="-1"><a class="header-anchor" href="#对象方法的补充" aria-hidden="true">#</a> 对象方法的补充</h2><ul><li>hasOwnProperty：对象是否有某一个属于自己的属性（不是在原型上的属性）</li><li>in/for in 操作符：判断某个属性是否在某个对象或者对象的原型上</li><li>instanceof：用于检测构造函数（Person、Student 类）的 pototype，是否出现在某个实例对象的原型链上</li><li>isPrototypeOf：用于检测某个对象，是否出现在某个实例对象的原型链上</li></ul><h2 id="原型继承关系" tabindex="-1"><a class="header-anchor" href="#原型继承关系" aria-hidden="true">#</a> 原型继承关系</h2><p><img src="`+o+`" alt="原型继承关系"></p><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2><ul><li>每个类都可以有一个自己的构造函数（方法），这个方法的名称是固定的 constructor；</li><li>当我们通过 new 操作符，操作一个类的时候会调用这个类的构造函数 constructor；</li></ul><p>当我们通过 new 关键字操作类的时候，会调用这个 constructor 函数，并且执行如下操作：</p><ol><li>在内存中创建一个新的对象（空对象）；</li><li>这个对象内部的<code>[[prototype]]</code>属性会被赋值为该类的 prototype 属性；</li><li>构造函数内部的 this，会指向创建出来的新对象；</li><li>执行构造函数的内部代码（函数体代码）；</li><li>如果构造函数没有返回非空对象，则返回创建出来的新对象；</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this 放到创建出来的新对象上</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token comment">// 实例方法</span>
  <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;running~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 静态方法 不需要实例即可调用</span>
  <span class="token keyword">static</span> <span class="token function">cretae</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// get set</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;访问了age&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">newAge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set了age&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> newAgeF
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用 extends 继承</span>
<span class="token punctuation">}</span>

<span class="token comment">// super</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>super</p><ul><li>在子类的构造函数中使用 this 或者返回默认对象之前，必须先通过 super 调用父类的构造函数！</li><li>super 的使用位置有三个：子类的构造函数、实例方法、静态方法；</li></ul><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h2><p>不同的数据类型进行同一个操作，表现出不同的行为，就是多态的体现。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cd&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),l=[i];function u(r,d){return s(),a("div",null,l)}const v=n(c,[["render",u],["__file","extends.html.vue"]]);export{v as default};