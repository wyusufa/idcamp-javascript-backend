// Meskipun kita bisa menetapkan dan mendapatkan data pada map seperti ini: (bukan pakai set dan get)

const wrongMap = new Map();
 
wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);

// Namun, kode di atas bukanlah cara yang sesuai untuk mengoperasikan Map. Ketika kita menetapkan nilai map seperti di atas, data akan disimpan sebagai generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete.


const wrongMap2 = new Map();
wrongMap2["My Key"] = "My Value";

console.log(wrongMap2.has("My Key"));
console.log(wrongMap2.delete("My Key"));

// Jadi, pastikan untuk menggunakan metode .set() dan .get() untuk Map.


