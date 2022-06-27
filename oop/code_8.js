
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this._contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this._contacts.push(to);
    };
}

let mail=new Mail(); 
console.log(mail.from);
mail.sendMessage('hallo', 'penerima@dicoding.com');
console.log(mail.contacts);