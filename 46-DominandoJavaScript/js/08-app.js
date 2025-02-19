// Que es el self?

// window.onload = () => {
//     console.log('Ventana Lista')
// }

self.onload = () => {
    console.log('Ventana Lista')
}

window.nombre = 'Monitor de 20 Pulgadas'

const producto = {

    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El producto: ${self.nombre}`
    }
}

console.log(producto.mostrarInfo())