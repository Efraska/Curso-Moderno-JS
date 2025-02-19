// Hoisting

obtenerCliente('EFrasss')
// Ejemplo de function declaration
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente  es ${nombre}`)
}

// obtenerCliente2('Christian') // No puedes mandar llamar una funcion antes de definirla en fucntion expression

// Ejemplo de function Expression
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`)
}

obtenerCliente2('Christian')