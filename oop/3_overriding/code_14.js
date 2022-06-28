// OVERRIDING METHOD 

// Hampir sama dengan overriding constructor, tetapi yang di-override di sini adalah method yang ada pada parent class

// Pada dasarnya semua method yang ada pada kelas parent dapat diakses langsung di child kelasnya 

// Kadang kita tidak menggunakan sebuah method seutuhnya sama seperti parent kelasnya. Namun, kita dapat menambahkan perintah tertentu ataupun menguranginya.

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
 
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        super.sendMessage(msg, to); // Untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator super.methodName().
        console.log('Send by WA');
    }
}

