// WeakSet -- SetDebil
// a diferencia del set en el WeakSet solo puedes agregar objetos

const weakset = new WeakSet();

const cliente = {
    nombre: 'Efra',
    saldo: 100
}

// const nombre = 'Karla';

weakset.add(cliente);
// weakset.add(nombre);

// console.log(weakset.has(cliente));

// weakset.delete(cliente);

// al solo recibir objetos, no puedes saber el tamaño del WeakSet y no son iterables
console.log(cliente.size);

console.log(weakset);
