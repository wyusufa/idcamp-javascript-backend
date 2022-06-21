/*
DESTRUCTURING ASSIGNMENT 

Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung.
*/


const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood,tes] = favorites;
 
console.log(myFood);
console.log(herFood);
console.log(tes);
