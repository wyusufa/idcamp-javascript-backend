const birthday="June 22, 1993"
const birtday = new Date(birthday);
const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
console.log(today)
    
const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir

//ubah miliseconds jadi tahun 
const diffDate = new Date(diff_ms);
console.log(diffDate.getFullYear()-1970)