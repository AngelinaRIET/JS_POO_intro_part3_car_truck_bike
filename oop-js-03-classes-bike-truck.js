"use strict"

// IMPORTE LE MODULE "Car"
import Car from'./lib/Car.js';
import Bike from'./lib/Bike.js';
import Truck from'./lib/Truck.js';

// CRÉATION DE TROIS VOITURES DIFFÉRENTES
let maBenz      = new Car('Mercedez', 'Classe C 5', 'white', 4, 1496, 204);
let maHarley = new Bike('Harley-Davidson','Nightster', 'black', '1868 cm3','86 ch', 'courroie','680 mm')
let maMan = new Truck('Man', '4x2 BLS EURO 6 (2 essieux)', 'grey', '10518 cm3', '360 ch', '19000 kg','44000 kg')

console.log(); // saut de ligne
maBenz.print();
console.log(); // saut de ligne
maHarley.print();
console.log();
maMan.print();
console.log();