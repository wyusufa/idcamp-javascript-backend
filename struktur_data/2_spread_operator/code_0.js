// spread operator 

const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

/**
 * Terlihat perbedaannya? Mengapa bisa demikian? Spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen sesuai panjang nilai array-nya. Sehingga jika kita menuliskan kode seperti ini:

console.log(...favorites);
Sama seperti kita menuliskan kode seperti ini:

console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
 */




 

