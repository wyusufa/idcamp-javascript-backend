// OBJECT COMPOSITION (1)

// Sebuah paradigma OOP akan menghasilkan hierarki, di mana semakin besar software yang kita buat, maka akan semakin besar dan rumit juga hierarkinya.

// Coba bayangkan saja jika kita ingin membuat Child Class bernama PersonalEnterpriseWhatsApp di mana blueprint kelas tersebut kita ingin menggunakan method dan attribute yang ada di PersonalWhatsApp dan BussinessWhatsApp.  Kita perlu merombak kembali kelas-kelas parent-nya hanya untuk membuat sebuah kelas baru (tidak bisa inherite dari 2 atau lebih parent class). Nah, di sinilah pendekatan object composition berperan.

// Object composition adalah prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class. Prinsip ini didasarkan pada kumpulan perilaku (method/function) yang sudah kita definisikan. Sehingga, ketika ingin membuat alur bisnis lain dengan beberapa perilaku (method) yang sama, kita dapat menggunakan fungsi yang sudah ada tanpa melakukan inheritance/pewarisan.

// kita ingin menggunakan banyak function dari banyak class tanpa harus melakukan inheritance 

// memisahkan fungsi2 umum yang biasa digunakan 

const yourGenericAction = params => ({
    actionA: () => { /** do action A **/},
    actionB: () => { /** do action B **/},  
  });

// buat class

/*
const YourClassName = (paramA, paramB) => {
}
*/ 

// Kita dapat menyimpan atribut yang kita punya ke dalam sebuah object, biasanya seorang engineer menggunakan konstanta dengan nama self atau state untuk menampung attribute.

/*
const YourClassName = (paramA, paramB) => {
    const self = {
      paramA,
      paramB
    };
  }

*/ 

// Menambahkan perilaku (method/function) yang hanya ada pada kelas tersebut


const YourClassName = (paramA, paramB) => {
    const self = {
      paramA,
      paramB
    };
    
    const yourSpecificActions = self => ({
      specificActionA: { /* do action A */ },
    });
}




