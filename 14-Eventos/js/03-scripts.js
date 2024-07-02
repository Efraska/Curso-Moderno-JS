// Eventos sobre los inputs
const busqueda = document.querySelector('.busqueda');

// keydown se ejecuta cuando presionas una tecla del teclado
// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo...')
// })

// keyup se ejecuta cuando presionas y sueltas esa tecla
// busqueda.addEventListener('keyup', () => {
//     console.log('escribiendo...')
// })

// blur se ejecuta cuando presionas dentro del input y luego afuera
// busqueda.addEventListener('blur', () => {
//     console.log('escribiendo...')
// })

// copy se ejecuta cuando haces copia de lo escrito en el input
// busqueda.addEventListener('copy', () => {
//     console.log('escribiendo...')
// })

// paste se ejecuta cuando pegas algo en el input
// busqueda.addEventListener('paste', () => {
//     console.log('escribiendo...')
// })

// cut se ejecuta cuando cortas algo en el input
// busqueda.addEventListener('cut', () => {
//     console.log('escribiendo...')
// })

// input escucha la mayoria de los eventos
busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('fallo la validacion');
    }
})


