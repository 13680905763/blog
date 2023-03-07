# storage

WebStorage 主要提供了一种机制，可以让浏览器提供一种比 cookie 更直观的 key、value 存储方式：

- localStorage：本地存储，提供的是一种永久性的存储方法，在关闭掉网页重新打开时，存储的内容依然保留；
- sessionStorage：会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除；

## 区别

1. 关闭网页后重新打开，localStorage 会保留，而 sessionStorage 会被删除；
2. 在页面内实现跳转，localStorage 会保留，sessionStorage 也会保留；
3. 在页面外实现跳转（打开新的网页），localStorage 会保留，sessionStorage 不会被保留；

## Storage 常见的方法和属性

- 属性：
  - Storage.length：只读属性
    - 返回一个整数，表示存储在 Storage 对象中的数据项数量；
- 方法：
  - Storage.key()：该方法接受一个数值 n 作为参数，返回存储中的第 n 个 key 名称；
  - Storage.getItem()：该方法接受一个 key 作为参数，并且返回 key 对应的 value；
  - Storage.setItem()：该方法接受一个 key 和 value，并且将会把 key 和 value 添加到存储中。
    - 如果 key 存储，则更新其对应的值；
  - Storage.removeItem()：该方法接受一个 key 作为参数，并把该 key 从存储中删除；
  - Storage.clear()：该方法的作用是清空存储中的所有 key；
