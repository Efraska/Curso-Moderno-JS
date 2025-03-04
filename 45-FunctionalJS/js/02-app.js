// const suma = function (a, b) {
//     return a + b;
// }

// Funciones como argumentos
const suma =  (a, b) =>  a + b;
const multiplicar =  (a, b) =>  a * b;

const sumarOMultiplicar = fn => fn(10, 20);

console.log( sumarOMultiplicar( suma ) );
console.log( sumarOMultiplicar( multiplicar ) );