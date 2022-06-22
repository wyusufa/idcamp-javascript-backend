// shift() = mengeluarkan elemen pertama dari array 

const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

// ganti data pada indeks x 
myArray[0]=5; 
console.log(myArray);