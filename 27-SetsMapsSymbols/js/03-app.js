// Maps
const cliente = new Map();

cliente.set('nombre', 'karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente.size);

console.log(cliente.has('nombre'));

console.log(cliente.get('nombre'));

cliente.delete('saldo');

console.log(cliente.has('saldo'));

console.log(cliente.get('saldo'));

cliente.clear();
console.log(cliente);

const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no definido'] ] );

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Antonio');

console.log(paciente);

paciente.forEach( (datod, index) => {
    console.log(index);
} )
