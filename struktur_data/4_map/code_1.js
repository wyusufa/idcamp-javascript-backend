/*

Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().

*/

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

// size of map 
console.log(capital.size);

// get value
console.log(capital.get("London"));

// set value 
capital.set("New Delhi", "India");

console.log(capital.size);
console.log(capital.get("New Delhi"));
