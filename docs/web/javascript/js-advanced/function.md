# function

## arguments

Arguments is an array like object that corresponds to the parameters passed to the function

```javascript
function foo(x, y, z) {
  console.log(arguments)
}
foo(10, 20, 30) // [10,20,30]
```

Array-like means that it is not an array type, but an object type

- it has some features of arrays, such as length, which can be accessed through an index.

- it does not have some methods for arrays, such as filter, map...;

### Arguments to Array

In development, we often need to convert arguments to Array in order to use some features of arrays

Conversion method 1:

- Traverse the arguments and add them to a new array；

Conversion method 2:

- Call method for calling array slice function；

Conversion method 3:Two methods in ES6

- Array.from
- […arguments]

```javascript
// 遍历
var arr = []
for (var i = 0; i < arguments.length; i++) {
  arr.push(arguments[i])
}

// slice
var arr1 = Array.prototype.slice.call(arguments)
var arr2 = [].slice.call(arguments)

// es6
const arr3 = Array.from(arguments)
const arr4 = [...arguments]
```

### Arrow function is not bound to arguments

Using arguments in the arrow function will look up the upper scope

## Rest Parameters

The last parameter is ... prefix, it will put the rest parameters into the parameter and serve as an array

```javascript
function foo(m, n, ...args) {
  console.log(m, n)
  console.log(args)
}
```

Difference between Rest parameters and arguments

- The Rest parameters contain only those arguments that do not have corresponding formal parameters, while the arguments object contains all the arguments passed to the function；
- The arguments object is not a real array, while the rest parameter is a real array that can perform all operations on the array；
- arguments 是早期的 ECMAScript 中为了方便去获取所有的参数提供的一个数据结构，而 rest 参数是 ES6 中提供并且希望以此来替代 arguments 的；
