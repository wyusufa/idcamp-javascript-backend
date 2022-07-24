

// Sebagai contoh, kita memiliki sebuah data object bernama mail seperti contoh di bawah ini.

const mail = {
    from: "pengirim@dicoding.com",
    sendMessage: function (msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};
 
console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');
 
// Object di atas memiliki atribut dengan tipe data string (from) dan sebuah fungsi atau method untuk mengirim pesan (sendMessage). Selain itu kita juga dapat mengubah isi dari salah satu atribut dari objek tersebut.

mail.from = "pengirim2@dicoding.com";

// Atau, menambahkan sebuah fungsi baru bernama saveContact.

mail.saveContact = function(addr) {
    console.log(`email saved ${addr}`);
}

// Contoh di atas adalah penulisan dengan gaya format object literal, yaitu penulisan object dengan langsung menuliskan key dan value-nya dalam Object yang dibuat. Hal-hal tersebut belum sepenuhnya merangkum konsep object dalam OOP.

/*
Lalu, di benak Anda muncul beberapa pertanyaan sebagai berikut:

Bagaimana jika saya ingin membuat objek baru bernama mail2 dengan atribut yang sama namun nilai yang berbeda dengan mail? Apakah harus mendefinisikan attribute dan function/method yang sama secara berulang?

Bagaimana jika saya ingin membuat mail2 tanpa method saveContact?

Bagaimana jika saya ingin menambahkan fungsi tambahan pada mail2?

*/

// Dari tiga pertanyaan di atas, maka fungsi paradigma OOP dapat menjadi solusi dikarenakan memiliki 4 pilar yang sudah disebutkan sebelumnya. Sederhananya kita akan membuat base template dari sebuah object, kemudian dari base tersebut kita dapat meng-instansiasi dalam bermacam bentuk objek.

// Contoh lainnya, misalkan base template dari sebuah object adalah Animal dan dapat merepresentasikan berbagai bentuk misalkan aves, mamalia, pisces, dll. Untuk membuat base template tersebut, maka kita akan mempelajari Class terlebih dahulu.

