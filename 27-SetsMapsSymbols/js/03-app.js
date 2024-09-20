// Los Maps, son listas ordenadas en llave y valor, pensar en ellos como un objeto pero con una sola propiedad, es decir una llave y un valor
const cliente = new Map();

// Utilizas set para agregar elementos al Map
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

// Para obtener el tamaño del Map utilizar size
console.log(cliente.size);

// Comprobar si un valor existe en el Map, utiliza 'has', retorna true or false
console.log( cliente.has('nombre') );

// Para obtener los valores que existen en un Map, utilizar get
console.log(cliente.get('nombre'));

// Para eliminar un elemento del Map, utiliza delete, imprime true sy si existia el valor y false si no existia ese valor
console.log( cliente.delete('saldo') );

console.log(cliente.has('saldo'));

console.log(cliente.get('saldo'));

// Para vaciar todos los elementos de un Map, utiliza clear
// cliente.clear();
console.log(cliente);

// Tambien puedes iniciar un Map con valores
const paciente = new Map( [['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Antonio');

console.log(paciente);

// Los Maps son Iterables
paciente.forEach( (datos, index) => {
    // console.log(datos);
    console.log(index);
});
