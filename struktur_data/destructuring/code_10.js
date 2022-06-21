/*
Default Values

Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined

*/

const favorites = ["Seafood"];
const [myFood, herFood] = favorites
 
console.log(myFood);
console.log(herFood);

