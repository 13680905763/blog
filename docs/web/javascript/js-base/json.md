# json

JSON 是一种非常重要的数据格式，它并不是编程语言，而是一种可以在服务器和客户端之间传输的数据格式。

- JSON 被使用的场景也越来越多：
  - 网络数据的传输 JSON 数据；
  - 项目的某些配置文件；
  - 非关系型数据库（NoSQL）将 json 作为存储格式；

## 基本语法

- 简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null 类型；
- 对象值：由 key、value 组成，key 是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值；
- 数组值：数组的值可以是简单值、对象值、数组值；

## JSON 序列化

在 ES5 中引用了 JSON 全局对象，该对象有两个常用的方法：

- stringify 方法：将 JavaScript 类型转成对应的 JSON 字符串；
- parse 方法：解析 JSON 字符串，转回对应的 JavaScript 类型；

### Stringify

- JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串：
  - 如果指定了一个 replacer 函数，则可以选择性地替换值；
  - 如果指定的 replacer 是数组，则可选择性地仅包含数组指定的属性；
- 如果对象本身包含 toJSON 方法，那么会直接使用 toJSON 方法的结果：

### parse

- JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。
  - 提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)

JSON 的方法可以帮我们实现对象的深拷贝
