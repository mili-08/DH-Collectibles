let array = [1,2,3,4,5,6,7,8,9,10];

const [valorEnCero,,valorEnDos,,valorEnCuatro, ...nuevoArray] = array;

console.log(`VALOR EN CERO ${valorEnCero}`);
console.log(`VALOR EN DOS ${valorEnDos}`);
console.log(`VALOR EN CUATRO ${valorEnCuatro}`);
console.log(nuevoArray);

const mascota = {
   nombre : "Dogui",
   tipoDeMascota : "gato",
   color : "marrón",
   raza : "Siamés",
}

const {nombre,tipoDeMascota,color,raza}= mascota;

console.log(`Hola, les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota},\nde color: ${color} y su raza es: ${raza}.`);
