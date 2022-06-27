// Cukup berbeda dengan bahasa pemrograman lain pada umumnya, JavaScript memiliki konsep bernama prototype. Prototype adalah properti internal yang akan selalu ada ketika sebuah objek dibuat. Dari kedua pendekatan tersebut, pemanggilan terhadap properti dapat dilakukan dengan cara yang sama. Namun, penerapan prototype lebih dianjurkan. 

// cara kedua menggunakan syntax class 
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
 
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };
}
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');

//Cara kedua pada dasarnya menggunakan prototype, penggunaan sintaksis class pada javascript hanyalah syntactic sugar dari prototype itu sendiri 