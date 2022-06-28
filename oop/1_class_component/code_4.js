// property and property method 

// Property adalah atribut dari sebuah objek, property sendiri dapat berupa tipe data primitive--seperti yang sebelumnya dibahas-- bahkan bisa juga berbentuk object dan fungsi. 


// cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}
 
// cara 2
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherPrototype = 'the values';
};
 
Mail.prototype.sendMessage = function (msg, to) {
    console.log(`you send: ${msg} to  ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
};

// Yang perlu diingat, this merupakan representasi bahwasanya variable yang ditunjuk adalah atribute yang bersifat global dan menempel dengan objek tersebut. Sehingga, variabel dapat diakses dari method ataupun property di dalam kelas tersebut dengan menambahkan this di depannya. 