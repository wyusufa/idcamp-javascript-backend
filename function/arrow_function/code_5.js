// one param and one line expression 
const x = a => a + 100;

console.log(x(2)); 

// no param and one line expression 
let a = 4;
let b = 2;
const y = () => a + b + 100;

console.log(y()); 

// more than one param and one line expression 
const w = (a,b) => a+b + 100;

console.log(w(2,1)); 

// if the body requires additional lines of processing, you'll need to re-introduce braces PLUS the "return" (arrow functions do not magically guess what or when you want to "return")

const z = (a, b) => {
    let chuck = 42;
    return a + b + chuck;
  }

console.log(z(1,2)); 
