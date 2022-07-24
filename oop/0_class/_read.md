INTRO

Object Oriented Programming (OOP) adalah salah satu paradigma dalam dunia pemrograman komputer. Ia adalah pendekatan berbasis objek, di mana suatu objek terdiri dari kumpulan atribut dan method di dalamnya. Di dalam JavaScript, atribut adalah variabel yang digunakan untuk menyimpan nilai. Sementara method adalah fungsi yang digunakan untuk menjalankan suatu proses.

di dalam paradigma OOP terdapat 4 pilar utama, yaitu encapsulation, abstraction, inheritance, dan polymorphism.

---------------------------------------

CLASS 

Class adalah hal yang sangat penting dalam pemrograman berorientasi objek. Hal itu karena class menyediakan informasi tentang suatu object. Jadi dapat dikatakan object adalah instance dari sebuah class. Class sendiri dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefinisikan karakteristik dari sebuah objek.

Di dalam sebuah class, dapat terdiri dari properti dan method. Properti merupakan karakteristik dari class, sedangkan method adalah kapabilitas atau kemampuan yang dimiliki oleh class.

Nah, untuk penulisan class di JavaScript sendiri bisa menggunakan dua cara, yakni melalui sintaks function ataupun class.


// Contoh di atas adalah penulisan dengan gaya format object literal, yaitu penulisan object dengan langsung menuliskan key dan value-nya dalam Object yang dibuat. Hal-hal tersebut belum sepenuhnya merangkum konsep object dalam OOP.

/*
Lalu, di benak Anda muncul beberapa pertanyaan sebagai berikut:

Bagaimana jika saya ingin membuat objek baru bernama mail2 dengan atribut yang sama namun nilai yang berbeda dengan mail? Apakah harus mendefinisikan attribute dan function/method yang sama secara berulang?

Bagaimana jika saya ingin membuat mail2 tanpa method saveContact?

Bagaimana jika saya ingin menambahkan fungsi tambahan pada mail2?

*/

// Dari tiga pertanyaan di atas, maka fungsi paradigma OOP dapat menjadi solusi dikarenakan memiliki 4 pilar yang sudah disebutkan sebelumnya. Sederhananya kita akan membuat base template dari sebuah object, kemudian dari base tersebut kita dapat meng-instansiasi dalam bermacam bentuk objek.

// Contoh lainnya, misalkan base template dari sebuah object adalah Animal dan dapat merepresentasikan berbagai bentuk misalkan aves, mamalia, pisces, dll. Untuk membuat base template tersebut, maka kita akan mempelajari Class terlebih dahulu.


materi tambahan :
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
https://betterprogramming.pub/object-oriented-programming-in-javascript-b3bda28d3e81

