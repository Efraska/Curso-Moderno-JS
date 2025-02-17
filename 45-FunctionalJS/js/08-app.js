// Closures - Van acompañados del scoope, es hacer qu un valor que solo esta al alcande dentro de una fumcion, que este disponible por fuera de esa funcion
const obtenerCliente = () => {
    const nombre = "Efra";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();