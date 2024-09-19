// Symbols y sus caracteristicas
// Todos los symbols son diferentes
const sym = Symbol('1');
const sym2 = Symbol('1');

// console.log( Symbol() === Symbol() );

// if (sym === sym2) {
//     console.log('Son iguales!');
// } else {
//     console.log('Son diferentes');
// }

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Efrain';
persona[apellido] = 'Arevalo';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// console.log(persona[nombre]);

// Las propiedades que utilizan un Symbol no son iterables
for (let i in persona) {
    console.log(i);
}

// Definir una descripcion del Symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Karla';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
