// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:


const favorite = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorite, others];

console.log(allFavorites);


// Nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya, variabel allFavorites menjadi array baru yang menampung dua array di dalamnya. Nah, lantas bagaimana jika kita mencoba menggunakan spread operator?


 const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
 const others2 = ["Cake", "Pie", "Donut"];
 
 const allFavorites2 = [...favorites2, ...others2];
 
 console.log(allFavorites2);

 // Yup, dengan menggunakan spread operator nilai dua array tersebut berhasil tergabung.