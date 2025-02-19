// Instalar y activar un service worker

// Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Instalado el Service worker')
})

// Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service worker Activado')

    console.log(e)
})

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch... ', e)
})