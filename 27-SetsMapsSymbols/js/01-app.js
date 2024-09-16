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