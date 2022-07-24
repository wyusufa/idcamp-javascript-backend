//4 cara mengininisiasi object dari class Date : 

// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date(); 
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const dateString="June 22, 1993"
const myDate2 = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000 (terhitung dari 1970)
const miliseconds=160000000;
const myDate3 = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const year=1930; 
const month=1; 
const date=1;
const hour=1;
const minute=1;
const second=1;
const milisecond=1; 
const myDate4 = new Date(year,month,date,hour,minute,second,milisecond); 






