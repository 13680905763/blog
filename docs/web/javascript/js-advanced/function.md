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
- Arguments is a data structure provided in early ECMAScript to facilitate obtaining all parameters, while the rest parameter is provided in ES6 and is expected to replace arguments；

## Pure Functions

- A certain input must produce a certain output；
- Functions cannot have side effects during execution；

side effects： when executing a function, it not only returns a function value but also has additional effects on the call, such as modifying global variables, modifying parameters or changing external storage.

## Currying

- Pass only a portion of the parameters to the function to call it, and ask it to return a function to handle the remaining parameters；

superiority

- The function has a single responsibility
- Parameter reuse of functions

## Compose function

- To make a function call to a certain data, execute two functions fn1 and fn2, which are executed sequentially
- If we need to make two function calls each time, the operation will appear repetitive
- Combine these two functions and automatically call them in turn

## Strict mode

Strict mode eliminates some original silent errors by throwing errors;

```javascript
'use strict'
function foo() {
  'use strict'
  console.log(123)
}
```

1. Cannot accidentally create a global variable
2. Strict mode can cause assignment operations that cause silent failures to throw exceptions
3. Attempting to delete non deletable attributes in strict mode
4. Strict mode does not allow function parameters to have the same name
5. Octal syntax of 0 is not allowed
6. In strict mode, with is not allowed
7. In strict mode, eval is no longer an upper level reference variable
8. In strict mode, this binding will not be converted to an object by default
