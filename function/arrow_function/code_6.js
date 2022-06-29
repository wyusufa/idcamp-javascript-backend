/*
return object : 
params => ({foo: "a"}) // returning the object {foo: "a"}

using rest parameter : 
(a, b, ...r) => expression

using default parameter : 
(a=400, b=20, c) => expression

destructuring within params : 
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30

*/

// arrow function as method : 

'use strict';

var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
