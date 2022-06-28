// property and property method 

/*
Dalam OOP sendiri, properti dibagi menjadi 2:

Internal interface : method dan property yang dapat diakses oleh method lain namun tidak bisa diambil/dijalankan di luar kelas tersebut.
External interface : method dan property yang dapat diakses di luar kelas itu sendiri.

Sedangkan di dalam JavaScript sendiri terdapat 2 jenis akses identifier untuk sebuah field:

Public : dapat diakses dari mana pun.
Private : hanya dapat diakses dari dalam kelas itu sendiri.
*/

// Secara default, semua atribut yang didefinisikan adalah public. Sehingga semua attribute tersebut dapat diakses oleh objek yang telah meng-instansiasi kelas tersebut

const mail1 = new Mail();
mail1.from; // 'pengirim@dicoding.com'
mail1.contacts; // ['penerima@dicoding.com']
mail1.sendMessage('hallo', 'penerima@dicoding.com'); // method mengirim pesan

// Dari contoh tersebut, bagaimana jika kita ingin mengubah attribute contacts pada class Mail menjadi tidak bisa diakses di luar class atau oleh objek yang menjadi instansiasi class tersebut?

/** 
cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
// contoh
function Mail() {
    this.from = 'pengirim@dicoding.com';
    var contacts = [];
}
 
/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
// contoh
class Mail {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}
 
/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
// contoh
class Mail {
    #contacts = [];
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
}
/*
Ketahuilah bahwa cara ke-2 bukanlah cara murni yang diusung JavaScript dalam menetapkan atribut private. Namun, cara tersebut merupakan standarisasi penulisan yang biasanya digunakan oleh pengembang software (dengan JS) untuk membedakan variable-variable yang merupakan private variable.

Sedangkan untuk cara 3, belum sepenuhnya didukung oleh JavaScript engine versi lama. ini merupakan proposal pengembangan JavaScript terkait dengan identifier pada js (https://github.com/tc39/proposal-private-methods).
*/

