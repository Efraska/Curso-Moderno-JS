const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!puedePagar && !usuario) {
    console.log('Alto, no puedes comprar!')
} else if (!usuario) {
    console.log('Inicia sesión o saca una cuenta');
} else if (!puedePagar) {
    console.log('Fondos Insuficientes');
}