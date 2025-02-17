// Funciones que retornan funciones

const obtenerCliente = () => () => console.log('Christian Efrain');

const fn = obtenerCliente();

fn();