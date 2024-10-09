window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if (navigator.onLine) {
        console.log('Si esta Conectado')
    } else {
        console.log('No estas Conectado')
    }
}