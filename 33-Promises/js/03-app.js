const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
})

aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch( error => console.log(error))

// Hay 3 valores posibles...
// fulfilled(Cumplido): El promise se cumplió
// rejected(Rechazado): El promise no se cumplió
// pending(pendiente) - NO se ha cumplido y tampoco fue rechazado

function descuento(mensaje) {
    console.log(mensaje);
}