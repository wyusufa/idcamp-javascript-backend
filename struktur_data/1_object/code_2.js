
// Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut:


 const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

// delete 
delete spaceship.manufacturer;

console.log(spaceship);