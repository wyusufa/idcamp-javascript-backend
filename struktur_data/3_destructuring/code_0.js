
// DESTRUCTURING OBJECT AND ARRAY
// tujuannya : memecah lalu disimpan masing2 ke suatu variabel 

[
    {
        "id": 14,
        "title": "Belajar Fundamental Aplikasi Android",
        "author": "Google ATP"
    },
    {
        "id": 51,
        "title": "Belajar Membuat Aplikasi Android untuk Pemula",
        "author": "Google ATP"
    },
    {
        "id": 123,
        "title": "Belajar Dasar Pemrograman Web",
        "author": "Dicoding Indonesia"
    },
    {
        "id": 163,
        "title": "Belajar Fundamental Front-End Web Development",
        "author": "Dicoding Indonesia"
    }
]

/**
 * Jika kita lihat pada struktur JSON di atas, kita dapat menyimpulkan struktur tersebut dibangun dari array dan object. Karena kedua hal ini banyak digunakan untuk mengelola data pada JavaScript untuk memudahkan developer, ES6 menambahkan fitur untuk destructuring object dan array.
 */

/**
 * Apa sebenarnya destructuring object dan array itu? Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
 */

 const foods = ['Pie', 'Cake', 'Honey']
 
 const myFood = foods[0]
 const yourFood = foods[1]
 const ourFood = foods[2]
  
 console.log(myFood, yourFood, ourFood)

 /*
Perhatikan kode pada destructuring object di atas, Kode tersebut akan mengekstraksi nilai yang berada di dalam object profile dan menyimpannya pada variabel lokal yang memiliki nama sama dengan properti di dalam object profile. Mungkin mengekstraksi nilai dari object dengan langkah ini terlihat mudah, tetapi bayangkan jika object memiliki banyak properti dan harus melakukan hal tersebut secara manual satu persatu. Terlalu banyak kode yang dituliskan berulang, bukan?

Itulah alasan ES6 menambahkan fitur yang memudahkan kita untuk destructuring object maupun array. Ketika kita ingin memecah struktur data menjadi bagian-bagian yang lebih kecil, kita akan dipermudah untuk mendapatkan data yang diinginkan.
  */



const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);

/*
Pada contoh di atas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi. Di dalamnya terdapat firstName, lastName, dan age yang merupakan variabel untuk menyimpan nilai properti dari object profile. Kita juga perlu perhatikan penamaan variabelnya. Pastikan penamaannya sama seperti properti object-nya. Melalui nama variabel inilah nilai-nilai properti object akan dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai profile.firstName, lastName akan berisikan nilai profile.lastName, begitu juga dengan variabel age akan berisikan nilai profile.age.
*/

//const {lastName} = profile;
console.log(lastName);