/**
 *  Mixin Pattern - Un Mixin en JavaScript es como una "caja de herramientas" que puedes compartir entre diferentes objetos o clases. En lugar de copiar y pegar código en varias partes, usas un Mixin para agregar funcionalidades de forma rápida y ordenada.
 */

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`)
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

// Añadir las funciones al propotipo
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Efra', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente('Karla', 'kar@correo.com')
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();