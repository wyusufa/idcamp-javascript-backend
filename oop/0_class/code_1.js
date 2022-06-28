// membuat class menggunakan sintaksis function

// function menggunakan pendekatan prototype
function Mail() {
    this.from = 'pengirim@dicoding.com';
};
 
Mail.prototype.sendMessage = function n(msg, to) {
  console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');

console.log(mail1.hasOwnProperty('sendMessage'));


