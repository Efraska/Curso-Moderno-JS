// Module Pattern

const modulo1 = (function() {
    const nombre = 'Efra';

    function hola() {
        console.log('hola')
    }

    return {
        nombre,
        hola
    }
})();