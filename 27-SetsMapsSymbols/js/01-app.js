<<<<<<< HEAD
const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// console.log( carrito.delete('Guitarra') );

// console.log( carrito.has('Camisa') );

// console.log( carrito.size );

carrito.forEach( (producto, index, pertence )=> {
    // console.log(producto);
    // console.log(index);
    console.log(pertence);
});

console.log(carrito);

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);

// Un set puede almacenar cualquier tipo d valor
=======
// Un SET te permite crear una lista de valores sin duplicados
const carrito = new Set();

// Agregar un elemento al metodo Set -- los Set solamente son valores, no son como los objetos que manejan llave y valor
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa'); // Los duplicados no son agregados al set
carrito.add('camisa'); // los Set son caseSensitive, Camisa != camisa

// Comprobar si un valor existe en el Set, utiliza 'has', retorna true or false
console.log( carrito.has('Camisa') );

// Para eliminar un elemento del Set, utiliza delete, imprime true sy si existia el valor y false si no existia ese valor
console.log( carrito.delete('camisa') );

// Para vaciar todos los elementos de un Set, utiliza clear
// console.log(carrito.clear());


// Para obtener el tamaño del Set utilizar size
console.log(carrito.size);

// Los Set son iterables
carrito.forEach( (producto, index, pertenece) => {
    // console.log(producto);
    // console.log(index);
    console.log(pertenece);
} ) 

console.log(carrito);

// Ejemplo de uso de un Set
// Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);

// Usando forEach
// Con forEach, podemos recorrer el arreglo y almacenar los valores únicos en un nuevo arreglo utilizando una estructura como un Set o una simple verificación para evitar agregar duplicados:

// const numeros = [10, 20, 30, 40, 50, 10, 20];
// const unicos = [];

// numeros.forEach((numero) => {
//   if (!unicos.includes(numero)) {
//     unicos.push(numero);
//   }
// });

// console.log(unicos); // [10, 20, 30, 40, 50]

// Se recorre cada elemento del arreglo numeros usando forEach.
// Por cada elemento, se verifica si ya está en el arreglo unicos con includes().
// Si no está presente, se agrega al arreglo unicos.

>>>>>>> 4ff98c5e214ed64d4f180603479ca9c470574205
