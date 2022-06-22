/*
SWAP VALUES 

Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel. Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma sorting seperti ini:
*/

/*

var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
*/

/*
Untuk melakukan pertukaran nilai, kita membutuhkan variabel penengah. Pada contoh kode di atas menggunakan variabel temp. Variabel penengah dibutuhkan untuk menyimpan data sementara pada variabel yang akan ditukar. Hal ini menjadi kurang efektif karena kita harus membuat variabel baru yang sebenarnya hanya bersifat sementara.


Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.
*/

let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a]
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
