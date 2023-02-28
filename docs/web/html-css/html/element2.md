# 列表-表格-表单

## 列表元素

### 有序列表：ol、li

- ol（ordered list）
  - 有序列表，直接子元素只能是 li
- li（list item）
  - 列表中的每一项

```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>TypeScript</li>
</ol>
```

![ol](/img/web/html/element2/ol.jpg)

### 无序列表：ul、li

- ul（unordered list）
  - 无序列表，直接子元素只能是 li
- li（list item）
  - 列表中的每一项

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>TypeScript</li>
</ul>
```

![ul](/img/web/html/element2/ul.jpg)

### 定义列表：dl、dt、dd

- dl（definition list）
  - 定义列表，直接子元素只能是 dt、dd
- dt（definition term）
  - term 是项的意思, 列表中每一项的项目名
- dd（definition description）
  - 列表中每一项的具体描述，是对 dt 的描述、解释、补充
  - 一个 dt 后面一般紧跟着 1 个或者多个 dd

```html
<dl>
  <dt>前端</dt>
  <dd>HTML</dd>
  <dd>CSS</dd>
  <dt>后端</dt>
  <dd>Java</dd>
  <dd>Python</dd>
</dl>
```

![dl](/img/web/html/element2/dl.jpg)

## 表格元素

### 表格常见的元素

- table：表格
- tr(table row)：表格中的行
- td(table data)：行中的单元格

```html
<table>
  <tr>
    <td>排名</td>
    <td>语言</td>
    <td>难度</td>
  </tr>
  <tr>
    <td>1</td>
    <td>javaScript</td>
    <td>5</td>
  </tr>
  <tr>
    <td>2</td>
    <td>typeScript</td>
    <td>8</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse; // 表格的边框是分开的还是合并的
}
td {
  border: 1px solid black;
}
```

![table](/img/web/html/element2/table.jpg)

### 表格其他元素

- thead：表格的表头
- tbody：表格的主体
- tfoot：表格的页脚
- caption：表格的标题
- th：表格的表头单元格

### 单元格合并

一个单元格可能会跨多行或者多列来使用;

1. 跨列合并: 使用 colspan
   - 在最左边的单元格写上 colspan 属性, 并且省略掉合并的 td;
2. 跨行合并: 使用 rowspan
   - 在最上面的单元格协商 rowspan 属性, 并且省略掉后面 tr 中的 td;

```html
<table>
  <tr>
    <td colspan="2">1-1</td>
  </tr>
  <tr>
    <td>2-1</td>
    <td>2-2</td>
  </tr>
</table>
```

![colspan](/img/web/html/element2/colspan.jpg)

```html
<table>
  <tr>
    <td rowspan="2">1-1</td>
    <td>1-2</td>
  </tr>
  <tr>
    <td>2-2</td>
  </tr>
</table>
```

![rowspan](/img/web/html/element2/rowspan.jpg)

## 表单元素

### 常见的表单元素

- form：表单
- input：单行文本输入框、单选框、复选框、按钮等元素
- textarea：多行文本框
- select、option：下拉选择框
- button：按钮
- label：表单元素的标题

### form 常见的属性

- form 通常作为表单元素的父元素:
  - form 可以将整个表单作为一个整体来进行操作;
  - 比如对整个表单进行重置;
  - 比如对整个表单的数据进行提交;
- form 常见的属性如下:
  - action
    - 用于提交表单数据的请求 URL
  - method
    - 请求方法（get 和 post），默认是 get
  - target
    - 在什么地方打开 URL（参考 a 元素的 target）

### input

1. type：input 的类型
   - text：文本输入框（明文输入）
   - password：文本输入框（密文输入）
   - radio：单选框
   - checkbox：复选框
   - button：按钮
   - reset：重置
   - submit：提交表单数据给服务器
   - file：文件上传
2. readonly：只读
3. disabled：禁用
4. checked：默认被选中
   - 只有当 type 为 radio 或 checkbox 时可用
5. autofocus：当页面加载时，自动聚焦
6. name：名字
   - 在提交数据给服务器时，可用于区分数据类型
7. value：取值

#### label 和 input

- label 元素一般跟 input 配合使用，用来表示 input 的标题
- label 可以跟某个 input 绑定，点击 label 就可以激活对应的 input 变成选中

```html
<div>
  <label for="username">用户：</label>
  <input type="text" id="username" name="username" />
</div>
<div>
  <label for="password">密码：</label>
  <input type="text" id="password" name="password" />
</div>
```

![label](/img/web/html/element2/label.jpg)

#### radio 的使用

- name 值相同的 radio 才具备单选功能

```html
<div>
  性别：
  <label for="male"> 男<input type="radio" name="sex" id="male" /> </label>
  <label for="female"> 女<input type="radio" name="sex" id="female" /> </label>
</div>
```

![radio](/img/web/html/element2/radio.jpg)

#### checkbox

- 属于同一种类型的 checkbox，name 值要保持一致

```html
<div>
  爱好：
  <label for="skate"
    >滑板
    <input type="checkbox" name="hobby" id="skate" value="skate" />
  </label>
  <label for="programming"
    >编程
    <input type="checkbox" name="hobby" id="programming" value="programming" />
  </label>
  <label for="play"
    >打胶
    <input type="checkbox" name="hobby" id="play" value="play" />
  </label>
</div>
```

![checkbox](/img/web/html/element2/checkbox.jpg)

<!-- [type 类型的其他取值和 input 的其他属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) -->

### 布尔属性（boolean attributes）

- 常见的布尔属性有 disabled、checked、readonly、multiple、autofocus、selected
- 布尔属性可以没有属性值，写上属性名就代表使用这个属性
  - 如果要给布尔属性设值，值就是属性名本身

```html
<input type="text" disabled autofocus readonly />
<!--等价于-->
<input type="text" disabled="disabled" autofocus="autofocus" readonly="readonly" />
```

### 表单按钮

- 普通按钮（type=button）：使用 value 属性设置按钮文字
- 重置按钮（type=reset）：重置它所属 form 的所有表单元素（包括 input、textarea、select）
- 提交按钮（type=submit）：提交它所属 form 的表单数据给服务器（包括 input、textarea、select）

```html
<input type="button" value="普通按钮" />
<input type="reset" value="重置按钮" />
<input type="submit" value="提交按钮" />
```

```html
<button type="button">普通按钮</button>
<button type="reset">重置按钮</button>
<button type="submit">提交按钮</button>
```

![button](/img/web/html/element2/button.jpg)

### select 和 option

- option 是 select 的子元素，一个 option 代表一个选项
- select 常用属性
  - multiple：可以多选
  - size：显示多少项
- option 常用属性
  - selected：默认被选中

```html
<label for="hobby">最喜欢的爱好:</label>
<select name="hobby" id="hobby">
  <option value="">请选择</option>
  <option value="skate">滑板</option>
  <option value="programming">编程</option>
  <option value="play">打胶</option>
</select>
```

![select](/img/web/html/element2/select.jpg)

### [textarea](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea)

常用属性:

- cols：列数
- rows：行数
