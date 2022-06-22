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
Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:
 */

const favorite = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorite, others];

console.log(allFavorites);

/**
 * Nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya, variabel allFavorites menjadi array baru yang menampung dua array di dalamnya. Nah, lantas bagaimana jika kita mencoba menggunakan spread operator?
 */

 const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
 const others2 = ["Cake", "Pie", "Donut"];
 
 const allFavorites2 = [...favorites2, ...others2];
 
 console.log(allFavorites2);

 /**
  * Yup, dengan menggunakan spread operator nilai dua array tersebut berhasil tergabung.

Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
  */
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
