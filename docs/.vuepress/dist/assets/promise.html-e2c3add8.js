import{_ as n,p as s,q as a,a1 as e}from"./framework-204010b2.js";const t={},p=e(`<h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h1><p>在通过 new 创建 Promise 对象时，我们需要传入一个回调函数，我们称之为 executor</p><ul><li>这个回调函数会被立即执行，并且给传入另外两个回调函数 resolve、reject；</li><li>当我们调用 resolve 回调函数时，会执行 Promise 对象的 then 方法传入的回调函数；</li><li>当我们调用 reject 回调函数时，会执行 Promise 对象的 catch 方法传入的回调函数；</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;res&#39;</span><span class="token punctuation">)</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
promise
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三个状态</p><ul><li>待定（pending）: 初始状态，既没有被兑现，也没有被拒绝； <ul><li>当执行 executor 中的代码时，处于该状态；</li></ul></li><li>已兑现（fulfilled）: 意味着操作成功完成； <ul><li>执行了 resolve 时，处于该状态，Promise 已经被兑现；</li></ul></li><li>已拒绝（rejected）: 意味着操作失败； <ul><li>执行了 reject 时，处于该状态，Promise 已经被拒绝；</li></ul></li></ul><h2 id="executor" tabindex="-1"><a class="header-anchor" href="#executor" aria-hidden="true">#</a> Executor</h2><p>Executor 是在创建 Promise 时需要传入的一个回调函数，这个回调函数会被立即执行，并且传入两个参数，通常我们会在 Executor 中确定我们的 Promise 状态，一旦状态被确定下来，Promise 的状态会被 锁死，该 Promise 的状态是不可更改的</p><h2 id="resolve-不同值的区别" tabindex="-1"><a class="header-anchor" href="#resolve-不同值的区别" aria-hidden="true">#</a> resolve 不同值的区别</h2><ol><li>resolve 传入一个普通的值或者对象，那么这个值会作为 then 回调的参数；</li><li>resolve 中传入的是另外一个 Promise，那么这个新 Promise 会决定原 Promise 的状态：</li><li>resolve 中传入的是一个对象，并且这个对象有实现 then 方法，那么会执行该 then 方法，并且根据 then 方法的结果来决定 Promise 的状态：</li></ol><h2 id="then" tabindex="-1"><a class="header-anchor" href="#then" aria-hidden="true">#</a> then</h2><h3 id="then-方法-–-接受两个参数" tabindex="-1"><a class="header-anchor" href="#then-方法-–-接受两个参数" aria-hidden="true">#</a> then 方法 – 接受两个参数</h3><ul><li>then 方法是 Promise 对象上的一个方法（实例方法）： <ul><li>它其实是放在 Promise 的原型上的 Promise.prototype.then</li></ul></li><li>then 方法接受两个参数： <ul><li>fulfilled 的回调函数：当状态变成 fulfilled 时会回调的函数；</li><li>reject 的回调函数：当状态变成 reject 时会回调的函数</li></ul></li></ul><h3 id="then-方法-–-多次调用" tabindex="-1"><a class="header-anchor" href="#then-方法-–-多次调用" aria-hidden="true">#</a> then 方法 – 多次调用</h3><ul><li>一个 Promise 的 then 方法是可以被多次调用的： <ul><li>每次调用我们都可以传入对应的 fulfilled 回调；</li><li>当 Promise 的状态变成 fulfilled 的时候，这些回调函数都会被执行；</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res1&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res2&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res3&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="then-方法-–-返回值" tabindex="-1"><a class="header-anchor" href="#then-方法-–-返回值" aria-hidden="true">#</a> then 方法 – 返回值</h3><ul><li>then 方法本身是有返回值的，它的返回值是一个 Promise，所以我们可以进行如下的链式调用</li><li>Promise 有三种状态，那么这个 Promise 处于什么状态呢？ <ul><li>当 then 方法中的回调函数本身在执行的时候，那么它处于 pending 状态；</li><li>当 then 方法中的回调函数返回一个结果时，那么它处于 fulfilled 状态，并且会将结果作为 resolve 的参数； ✓ 情况一：返回一个普通的值； ✓ 情况二：返回一个 Promise； ✓ 情况三：返回一个 thenable 值；</li><li>当 then 方法抛出一个异常时，那么它处于 reject 状态；</li></ul></li></ul><h2 id="catch" tabindex="-1"><a class="header-anchor" href="#catch" aria-hidden="true">#</a> catch</h2><h3 id="catch-方法-–-多次调用" tabindex="-1"><a class="header-anchor" href="#catch-方法-–-多次调用" aria-hidden="true">#</a> catch 方法 – 多次调用</h3><h3 id="catch-方法-–-返回值" tabindex="-1"><a class="header-anchor" href="#catch-方法-–-返回值" aria-hidden="true">#</a> catch 方法 – 返回值</h3><ul><li>catch 方法也是会返回一个 Promise 对象的，所以 catch 方法后面我们可以继续调用 then 方法或者 catch 方法：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>promise
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err1&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err2&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// catch 传入的回调在执行完后，默认状态依然会是 fulfilled 的，err2 不打印，打印res</span>

<span class="token comment">// 如果希望后续继续执行 catch，那么需要抛出一个异常：</span>
promise
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err1&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error message&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err2&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="finally-方法" tabindex="-1"><a class="header-anchor" href="#finally-方法" aria-hidden="true">#</a> finally 方法</h2><p>finally 是在 ES9（ES2018）中新增的一个特性：表示无论 Promise 对象无论变成 fulfilled 还是 rejected 状态，最终都会被执行 的代码。</p><h2 id="promise-的类方法" tabindex="-1"><a class="header-anchor" href="#promise-的类方法" aria-hidden="true">#</a> Promise 的类方法</h2><p>then、catch、finally 方法都属于 Promise 的实例方法，都是存放在 Promise 的 prototype 上的</p><h3 id="resolve-方法" tabindex="-1"><a class="header-anchor" href="#resolve-方法" aria-hidden="true">#</a> resolve 方法</h3><p>有时候我们已经有一个现成的内容了，希望将其转成 Promise 来使用，这个时候我们可以使用 Promise.resolve 方法来完成。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Promise.resolve 的用法相当于 new Promise，并且执行 resolve 操作：</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fafa&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fafa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resolve 参数的形态：</p><ul><li>参数是一个普通的值或者对象</li><li>参数本身是 Promise</li><li>参数是一个 thenable</li></ul><h3 id="reject-方法" tabindex="-1"><a class="header-anchor" href="#reject-方法" aria-hidden="true">#</a> reject 方法</h3><ul><li>reject 方法类似于 resolve 方法，只是会将 Promise 对象的状态设置为 reject 状态。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  Promise.reject 的用法相当于 new Promise，只是会调用 reject：</span>
Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;fafa&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;fafa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Promise.reject 传入的参数无论是什么形态，都会直接作为 reject 状态的参数传递到 catch 的。</li></ul><h3 id="all-方法" tabindex="-1"><a class="header-anchor" href="#all-方法" aria-hidden="true">#</a> all 方法</h3><ul><li>将多个 Promise 包裹在一起形成一个新的 Promise；</li><li>新的 Promise 状态由包裹的所有 Promise 共同决定： <ul><li>当所有的 Promise 状态变成 fulfilled 状态时，新的 Promise 状态为 fulfilled，并且会将所有 Promise 的返回值组成一个数组；</li><li>当有一个 Promise 状态为 reject 时，新的 Promise 状态为 reject，并且会将第一个 reject 的返回值作为参数；</li></ul></li></ul><h3 id="allsettled-方法" tabindex="-1"><a class="header-anchor" href="#allsettled-方法" aria-hidden="true">#</a> allSettled 方法</h3><ul><li>在 ES11（ES2020）中，添加了新的 API Promise.allSettled： <ul><li>该方法会在所有的 Promise 都有结果（settled），无论是 fulfilled，还是 rejected 时，才会有最终的状态；</li><li>并且这个 Promise 的结果一定是 fulfilled 的；</li></ul></li><li>allSettled 的结果是一个数组，数组中存放着每一个 Promise 的结果，并且是对应一个对象的； <ul><li>这个对象中包含 status 状态，以及对应的 value 值；</li></ul></li></ul><h3 id="race-方法" tabindex="-1"><a class="header-anchor" href="#race-方法" aria-hidden="true">#</a> race 方法</h3><p>多个 Promise 相互竞争，谁先有结果，那么就使用谁的结果；</p><h3 id="any-方法" tabindex="-1"><a class="header-anchor" href="#any-方法" aria-hidden="true">#</a> any 方法</h3><p>any 方法是 ES12 中新增的方法，和 race 方法是类似的：</p><ul><li>any 方法会等到一个 fulfilled 状态，才会决定新 Promise 的状态；</li><li>如果所有的 Promise 都是 reject 的，那么也会等到所有的 Promise 都变成 rejected 状态；</li><li>如果所有的 Promise 都是 reject 的，那么会报一个 AggregateError 的错误。</li></ul>`,45),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","promise.html.vue"]]);export{r as default};
