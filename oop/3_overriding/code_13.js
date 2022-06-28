// OVERRIDING CONSTRUCTOR 

// Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class. Sehingga, ia dapat disesuaikan dengan behavior di child class.

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

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}
 
const wa1 = new WhatsApp('dicoding', true, 089989090898);

console.log(wa1.from); // undefined