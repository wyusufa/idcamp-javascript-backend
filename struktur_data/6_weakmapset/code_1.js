// WeakMap (1)

// WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program [3]. Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer.

// Yang dimaksud weak dalam WeakMap adalah referensi terhadap nilai yang disimpan. Apabila suatu nilai yang disimpan di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, maka referensi ke memorinya akan dihapus.

/*
Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap:

- Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.

- WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().

- WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.

*/

let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0; // untuk membuat nilai 'undefine' jadi 0 
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
   console.log(visitsCountMap);
}, 10000)

// setTimeout merupakan fungsi yang digunakan untuk menunda eksekusi kode yang ada di dalamnya hingga jangka waktu yang ditetapkan. Fungsi setTimeout akan detail dibahas pada modul concurrency.

// Ketika reference objek jonas dihapus dengan mengubahnya menjadi null, seharusnya map tidak lagi menyimpan data user (garbage collected). Namun, kenyataannya data jonas masih tersedia di dalam Map. Artinya, data jonas masih tersimpan di dalam memori sampai kita benar-benar menghapusnya.



