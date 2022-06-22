// WeakMap (2)

// Berbeda jika kita menggunakan WeakMap

// Ketika nilai jonas sudah tidak bisa dijangkau, object jonas akan dihapus dari memori termasuk informasi yang disimpan di dalam WeakMap.

const { inspect } = require('util');

let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

// WeakMap tidak dapat dilihat secara langsung menggunakan console.log. Ini merupakan issue yang terjadi pada Node.js (lihat: https://github.com/nodejs/node/issues/19001). Itulah mengapa kami menggunakan fungsi inspect untuk melihat data yang ada di dalam WeakMap.

// Jika hasil output tidak sesuai dengan yang diharapkan pada kode, hal itu disebabkan oleh waktu tunggu yang tidak cukup untuk menunjukkan cara kerja garbage collector. Silakan simak penjelasan pada diskusi berikut: https://www.dicoding.com/academies/256/discussions/156523

/*
Seperti halnya WeakMap, WeakSet adalah versi weak reference dari Set. Perbedaan antara WeakSet dan Set antara lain:

- WeakSet tidak bisa menyimpan nilai primitif.
- WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
- WeakSet tidak memiliki properti size.
*/ 