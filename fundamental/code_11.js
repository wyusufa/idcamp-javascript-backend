/**
 * Symbol disebut sebagai identifier yang unik karena meskipun 
 * kita membuat dua variabel symbol dengan nama atau
 * deskripsi yang sama, kedua nilainya tetap dianggap berbeda.
 */


const id1 = Symbol("id");
const id2 = Symbol("id");
 
console.log(id1 == id2);

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false,