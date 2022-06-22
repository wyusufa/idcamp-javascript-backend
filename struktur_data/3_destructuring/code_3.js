/*
Default Values (1)

Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined.
*/


const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const {firstName, age, isMale} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)


