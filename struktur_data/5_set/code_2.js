// Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.

const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
numberSet.add([6,1]);
numberSet.delete(4);

console.log(numberSet);