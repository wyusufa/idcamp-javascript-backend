// 4 PILAR OOP
/*
- encapsulation
    - attribute dan method terbungkus di dalam class, bersifat private 
    - objek lain tidak bisa mengakses dan mengubah property secara langsung
- abstraction 
    - menyembunyikan implementasi dari fungsi 
- polymorphism
- inheritance 
 */

// contoh pada class Mail di bawah ini, kita tidak bisa akses contact secara langsung 

class Mail{
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

let mail=new Mail('wanda'); 
mail.sendMessage('hallo','wanda@gmail.com')
console.log(mail.showAllContacts());

// Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama. Di sinilah inheritance atau pewarisan berperan. SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki juga oleh jenis pesan lainnya, seperti memiliki konten pesan, alamat/nomor pengirim, alamat/nomor penerima, dsb. Maka dari itu, Email sebagai objek turunan (subclass) mewarisi semua sifat dan perilaku dari objek induknya (superclass) Mail. Begitu juga dengan objek Whatsapp juga mewarisi sifat dan perilaku yang sama. Namun, whatsapp bisa membuat grup, mengirim broadcast message sedangkan Email tidak.

// cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
// class ChildClassName extends ParentClassName{}
 
 
// cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
// ChildClassName.prototype = new ParentClassName()

class WhatsApp extends Mail {
    constructor(x) {
        super(x);
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp('080111000222');
console.log(wa1.myProfile());
wa1.sendMessage('halo','082288888');

// polymorphism = use method name from parent class but with different task 

