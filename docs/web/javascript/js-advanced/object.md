# object

## Control over attribute operations

```javascript
Object.defineProperty(obj, prop, descriptor)
```

## Attribute Descriptor Classification

- 数据属性（Data Properties）描述符（Descriptor）；
- 存取属性（Accessor 访问器 Properties）描述符（Descriptor）；

|            | configurable | enumerable | writable | value  | get    | set    |
| ---------- | ------------ | ---------- | -------- | ------ | ------ | ------ |
| 数据描述符 | 可以         | 可以       | 可以     | 可以   | 不可以 | 不可以 |
| 存取描述符 | 可以         | 可以       | 不可以   | 不可以 | 可以   | 可以   |

- configurable：表示属性是否可以通过 delete 删除属性，是否可以修改它的特性，是否可以将它修改为存取属性描述符
- enumerable：表示属性是否可以通过 for-in 或者 Object.keys()返回该属性
- writable：表示是否可以修改属性的值；
- value：属性的 value 值，读取属性时会返回该值，修改属性时，会对其进行修改；
- get：Functions that will be executed when obtaining properties
- set：Functions that will be executed when setting properties

```javascript
const obj = {
  _age = 18
}
Object.defineProperty(obj, {
  name:{
    writable: true,
    value: 'why'
  },
  age:{
    get: funciton() {
      return this._age
    }
  }
})
```
