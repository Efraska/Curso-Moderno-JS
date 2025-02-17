// Funciones Puras o Pure Functions - Son funciones que retornan un dato, pero que no modifican el valos de las variables

// const duplicar = (numero) => {
//     return numero * 2;
// }

const numero1 = 20;
const duplicar = numero =>  numero * 2;

const resultado = duplicar(numero1);
console.log(resultado);
console.log(numero1);