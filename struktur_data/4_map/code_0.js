/*
MAP

Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
*/

//inisialisasi map
const myMap = new Map();

//inisialisasi map dengan nilai 
const myMap2 = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap2);

