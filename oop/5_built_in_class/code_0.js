// built in class 

// Dalam JavaScript sendiri terdapat built-in class bawaan, misalnya Date, Object, Array, Math, dan String. Built-in class tersebut dapat digunakan untuk memanipulasi data-data terkait dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek.

// Date merupakan built-in object bawaan dari bahasa pemrograman JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. Ini sangat membantu ketika dalam program yang kita buat terdapat penggunaaan dan manipulasi tanggal dan waktu.

// Untuk menggunakannya kita dapat meng-instansiasi Date object tersebut dengan 4 cara:

// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date(); 
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const myDate2 = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000
const myDate3 = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const myDate4 = new Date(year,month,date,hour,minute,second,millisecond); 

// method pada class Date :  https://www.w3schools.com/js/js_date_methods.asp

// ketika kita menggunakan tanggal dan waktu, kita perlu memahami format yang dipakai oleh standar dunia. Ini berguna dan memudahkan kita untuk melakukan konversi dan manipulasi sebuah tanggal.
// date string format => https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/

